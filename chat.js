// api/chat.js
export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const { prompt } = req.query;

    if (!prompt) {
        return res.status(400).json({
            success: false,
            error: "Prompt is required"
        });
    }

    try {
        const response = await fetch(
            `https://r-gengpt-api.vercel.app/api/chat?prompt=${encodeURIComponent(prompt)}`
        );
        const data = await response.text();

        res.json({
            success: true,
            data: data,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}