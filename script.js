/* IMAGE CAROUSEL */
let index = 1;

function nextImage() {
    index++;
    document.getElementById("carouselImage").src =
        "https://picsum.photos/500/300?" + index;
}

function prevImage() {
    index--;
    if (index < 1) index = 1;
    document.getElementById("carouselImage").src =
        "https://picsum.photos/500/300?" + index;
}

/* FETCH API DATA */
function getJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => {
            document.getElementById("joke").innerHTML =
                data.setup + "<br><b>" + data.punchline + "</b>";
        })
        .catch(error => {
            document.getElementById("joke").innerText =
                "Error loading joke!";
        });
}
