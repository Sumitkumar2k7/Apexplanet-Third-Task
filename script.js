/* ========== QUIZ SECTION ========== */
const quizData = [
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "CSS", "JavaScript"],
        answer: "CSS"
    },
    {
        question: "Which keyword is used to create a variable in JavaScript?",
        options: ["int", "var", "float"],
        answer: "var"
    },
    {
        question: "Which method is used to fetch API data?",
        options: ["fetch()", "get()", "pull()"],
        answer: "fetch()"
    }
];

let current = 0;
let score = 0;

function loadQuiz() {
    document.getElementById("question").innerText =
        quizData[current].question;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    quizData[current].options.forEach(opt => {
        let btn = document.createElement("button");
        btn.innerText = opt;
        btn.onclick = () => {
            if (opt === quizData[current].answer) {
                score++;
            }
        };
        optionsDiv.appendChild(btn);
    });
}

function nextQuestion() {
    current++;
    if (current < quizData.length) {
        loadQuiz();
    } else {
        document.getElementById("score").innerText =
            "Your Score: " + score + "/" + quizData.length;
    }
}

loadQuiz();

/* ========== IMAGE CAROUSEL ========== */
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

/* ========== API FETCH ========== */
function getJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => {
            document.getElementById("joke").innerHTML =
                data.setup + "<br><b>" + data.punchline + "</b>";
        })
        .catch(() => {
            document.getElementById("joke").innerText =
                "Error loading joke!";
        });
}
