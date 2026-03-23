// api/index.js
export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    res.json({
        name: "My Custom API on Vercel",
        version: "1.0",
        endpoints: {
            chat: "/api/chat?prompt=your question",
            image: "/api/image?prompt=description&style=realistic&ar=16:9",
            qr: "/api/qr?text=https://google.com",
            freefire: "/api/freefire?uid=8008784369",
            fakeuser: "/api/fakeuser"
        },
        status: "active",
        platform: "Vercel"
    });
}