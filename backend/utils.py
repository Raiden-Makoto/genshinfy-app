import keras
import tensorflow as tf

HEIGHT, WIDTH = 480, 480   

def gram_matrix(x):
    x = tf.transpose(x, (2, 0, 1))
    features = tf.reshape(x, (tf.shape(x)[0], -1))
    gram = tf.matmul(features, tf.transpose(features))
    return gram

def style_loss(style, combination):
    S = gram_matrix(style)
    C = gram_matrix(combination)
    channels = 3
    size = 480 * 480
    return tf.reduce_sum(tf.square(S - C)) / (4.0 * (channels ** 2) * (size ** 2))

def content_loss(base, combination):
    return tf.reduce_sum(tf.square(combination - base))

def total_variation_loss(x):
    a = tf.square(
        x[:, : HEIGHT - 1, : WIDTH - 1, :] - x[:, 1:, : WIDTH - 1, :]
    )
    b = tf.square(
        x[:, : HEIGHT - 1, : WIDTH - 1, :] - x[:, : HEIGHT- 1, 1:, :]
    )
    return tf.reduce_sum(tf.pow(a + b, 1.25))