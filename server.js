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

    console.log(`Serving ${img}`);

    res.redirect(img);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});