// api/qr.js
export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const { text, size = "400", color = "14b8a6", bg = "ffffff" } = req.query;

    if (!text) {
        return res.status(400).json({
            success: false,
            error: "Text is required"
        });
    }

    try {
        const qrUrl = `https://r-gengpt-api.vercel.app/api/generate-qr?data=${encodeURIComponent(text)}&size=${size}&color=${color}&bg=${bg}&format=png`;
        const qrResponse = await fetch(qrUrl);
        const qrBuffer = await qrResponse.arrayBuffer();

        res.setHeader('Content-Type', 'image/png');
        res.send(Buffer.from(qrBuffer));
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}