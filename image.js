// api/image.js
export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const { prompt, style = "realistic", ar = "1:1" } = req.query;

    if (!prompt) {
        return res.status(400).json({
            success: false,
            error: "Prompt is required"
        });
    }

    try {
        const response = await fetch(
            `https://r-gengpt-api.vercel.app/api/image?prompt=${encodeURIComponent(prompt)}&style=${style}&ar=${ar}`
        );
        const data = await response.json();

        res.json(data);
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}