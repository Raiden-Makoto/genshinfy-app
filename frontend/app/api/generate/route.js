export async function POST(req) {
    try {
      const { prompt, imageData } = await req.json();
  
      // Forward the request to the Flask backend
      const flaskResponse = await fetch("http://localhost:5000/generate", { // Change URL if needed
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, imageData }),
      });
      console.log("Flask response status:", flaskResponse.status); // Debugging
      const flaskData = await flaskResponse.json();
  
      if (!flaskResponse.ok) {
        return new Response(JSON.stringify({ error: flaskData.error || "Error processing request" }), {
          status: flaskResponse.status,
          headers: { "Content-Type": "application/json" },
        });
      }
  
      return new Response(JSON.stringify(flaskData), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
  
    } catch (error) {
      return new Response(JSON.stringify({ error: "Internal Server Error" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }
  