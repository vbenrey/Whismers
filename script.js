const images = [
    "https://images.pexels.com/photos/17706988/pexels-photo-17706988/free-photo-of-furry-cat-in-bow-tie.jpeg",
    "https://images.pexels.com/photos/22300647/pexels-photo-22300647/free-photo-of-cat-licking-paw.jpeg",
    "https://images.pexels.com/photos/28990619/pexels-photo-28990619/free-photo-of-four-kittens-eating-sausage-outdoors.jpeg",
];

const names = [
    "By Hans O.",
    "By Venice O.",
    "By Claire O."
]

const reviews = [
    "This website has been a purrfect match for my cat! Oddly enough, I’ve been seeing unknown purchases through my card and my cat sitting near my phone.. This website helped a lot! Would recommend!",
    "I've been on this website for more than 50 days, and I can't stop clicking on every product! I noticed I started growing fur and something long at the back, and these products are looking a lot more tempting. Meow.",
    "I'm in total debt after buying more than 100 stocks of each product. My cats are very happy, but my loan shark isn't happy. Nothing else matters but my very cute kitties, so good job!"
]

let currentIndex = 0;

function slideshow(index) {
    const slideshowImage = document.getElementById("slideshowImages");
    if (index >= images.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex = index;
    }
    slideshowImage.src = images[currentIndex];
    document.getElementById("name").innerHTML = names[currentIndex];
    document.getElementById("reviewText").innerHTML = reviews[currentIndex];
}

function beforePic() {
    slideshow(currentIndex + 1);
}

function afterPic() {
    slideshow(currentIndex - 1);
}

function feature() {
    alert("Feature is not yet implemented. Stay Tune Meow!")
}
