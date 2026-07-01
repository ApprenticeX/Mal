const express = require("express");

const app = express();

const images = [
    "https://ik.imagekit.io/artyu/randoms/2.png",
    "https://ik.imagekit.io/artyu/randoms/5.jpg",
    "https://ik.imagekit.io/artyu/randoms/9.png",
    "https://ik.imagekit.io/artyu/randoms/12.png",
    "https://ik.imagekit.io/artyu/randoms/17.png",
];

app.get("/", (req, res) => {
    const img = images[Math.floor(Math.random() * images.length)];
    const url = `${img}?t=${Date.now()}`;

    console.log(`Serving ${url}`);

    res.set({
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        "Pragma": "no-cache",
        "Expires": "0",
        "Surrogate-Control": "no-store"
    });

    res.redirect(302, url);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});