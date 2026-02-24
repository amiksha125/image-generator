import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());



app.post("/generate", async (req, res) => {
  const { prompt, width, height } = req.body;
  const model = "black-forest-labs/FLUX.1-schnell";

  try {
    const response = await fetch(
      `https://router.huggingface.co/hf-inference/models/${model}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HF}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          inputs: prompt,
          parameters: { width, height },
          options: { wait_for_model: true }
        })
      }
    );

    const contentType = response.headers.get("content-type");

    if (!response.ok || !contentType?.includes("image")) {
      const errorText = await response.text();
      console.log("HF ERROR:", errorText);
      return res.status(response.status).send(errorText);
    }

    const buffer = await response.arrayBuffer();
    res.set("Content-Type", contentType);
    res.send(Buffer.from(buffer));

  } catch (err) {
    console.log("SERVER ERROR:", err);
    res.status(500).send(err.message);
  }
});


app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});