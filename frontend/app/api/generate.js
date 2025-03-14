export default async function generateImage(req, res) {
    if (req.method === 'POST'){
        try {
            const { prompt, imageData } = req.body;
            const flaskResponse = await fetch("http://localhost:5000/generate", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({prompt, imageData})
            });
            const flaskResult = await flaskResponse.json();
            if (flaskResult.ok){
                res.status(200).json(flaskResult.data);
            } else {
                res.status(400).json({
                    error: flaskResponseData.error || "An error occurred while processing the request."
                });
            }
        }
        catch (error){
            console.error("Error in API route:", error);
            res.status(500).json({
                error: "Internal Server Error"
            });
        }
    }
    else {
        res.status(405).json({ error: "Method Not Allowed" });
    }
}