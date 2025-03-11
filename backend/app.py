from flask import (
    Flask,
    request,
    jsonify,
    send_file
)

from flask_cors import CORS

import numpy as np
import matplotlib.pyplot as plt

import os
import PIL
from PIL import Image
import faiss
import glob

# PyTorch import
import torch
from torch.utils.data import DataLoader
from datasets import Dataset
from datasets import Image as IMG
from typing import List, Union, Tuple
from transformers import CLIPProcessor, CLIPModel

import tensorflow as tf
import keras

app = Flask(__name__)
CORS(app)

img_path = './model/GenshinCharacters'
img_files = glob.glob(img_path + "/*.[jJpP][pPnN][gG]")
img_files = sorted(img_files)

device = "cpu"
model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

def encode_images(
    images: Union[List[str], List[PIL.Image.Image]],
    batch_size: int
):
    def transform_func(x):
        if isinstance(x['image'], PIL.Image.Image):
            image = x['image']
        else:
            image = [IMG().decode_example(img) for img in x['image']]
        return processor(images=image, return_tensors='pt')

    dataset = Dataset.from_dict({'image' : images})
    dataset = dataset.cast_column('image', IMG(decode=False)) \
                if isinstance(images[0], str) \
                else dataset
    dataset.set_format('torch')
    dataset.set_transform(transform_func)
    dataloader = DataLoader(dataset, batch_size=batch_size)
    image_embeddings = []

    with torch.no_grad():
        for batch in dataloader:
            batch = {k : v.to(device) for k,v in batch.items()}
            image_embeddings.extend(
                model.get_image_features(**batch).detach().cpu().numpy()
            )
    return np.stack(image_embeddings)

vector_embedding = np.array(encode_images(img_files, 7))

indexer = faiss.IndexFlatL2(vector_embedding.shape[1])
indexer.add(vector_embedding)

def encode_text(
    text: List[str],
    batch_size: int
):
    dev = "cpu"
    dataset = Dataset.from_dict({'text' : text})
    dataset = dataset.map(
        lambda x: processor(
            text = x['text'],
            padding = True,
            return_tensors = 'pt',
            max_length = 77,
            truncation = True,
        ),
        batched=True,
        batch_size=batch_size
    )
    dataset.set_format(type="torch", columns=["input_ids", "attention_mask"])
    dataloader = DataLoader(dataset, batch_size=batch_size)
    text_embeddings = []

    with torch.no_grad():
        for batch in dataloader:
            batch = {
                k : v.to(dev) if isinstance(v, torch.Tensor) else torch.tensor(v).to(dev)
                for k,v in batch.items()
            }
            text_embeddings.extend(
                model.get_text_features(**batch).detach().cpu().numpy()
            )
    return np.stack(text_embeddings)

def preprocess_image(path):
    img = keras.utils.load_img(path, target_size=(480, 480))
    img = keras.utils.img_to_array(img)
    img = np.expand_dims(img, axis=0)
    img = keras.applications.vgg19.preprocess_input(img)
    return tf.convert_to_tensor(img)

def deprocess_image(x):
    x = x.reshape((480, 480, 3))
    x[:, :, 0] += 103.939 # un-scale
    x[:, :, 1] += 116.779 # un-scale
    x[:, :, 2] += 123.68 # un-scale
    x = x[:, :, ::-1] # BGR to RGB format
    x = np.clip(x, 0, 255).astype("uint8")
    return x

model = keras.models.load_model('./model/genshinfy.keras') # file doesn't exist yet

@app.route('/predict', methods=['POST'])
def predict():
    request_data = request.get_json()
    if not "text" in request_data:
        return jsonify({"error": "No text provided"}), 400
    text = request_data["text"]
    text = text.strip().lower()

    # index through the dataset
    with torch.no_grad():
        search_results = encode_text(text.split(','), batch_size=7)
    distances, indices = indexer.search(search_results, k=3)
    distances, indices = distances[0], indices[0]
    indices_to_distance = list(zip(indices, distances))
    indices_to_distance.sort(key=lambda x: x[1]) #distance-based sort

    style_reference_image = None

    for idx, distance in indices_to_distance:
        style_reference_image = img_files[idx]
        break

        