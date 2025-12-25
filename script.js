/* QUIZ */
const quiz=[
    {q:"CSS stands for?", o:["Color Sheet","Cascading Style Sheets","Creative Style"], a:"Cascading Style Sheets"},
    {q:"JavaScript is used for?", o:["Design","Logic","Database"], a:"Logic"},
    {q:"Which function fetches API?", o:["get()","fetch()","pull()"], a:"fetch()"}
];

let i=0,score=0;

function loadQuiz(){
    document.getElementById("question").innerText=quiz[i].q;
    const opt=document.getElementById("options");
    opt.innerHTML="";
    quiz[i].o.forEach(x=>{
        let b=document.createElement("button");
        b.innerText=x;
        b.onclick=()=>{ if(x===quiz[i].a) score++; }
        opt.appendChild(b);
    });
}

function nextQuestion(){
    i++;
    if(i<quiz.length) loadQuiz();
    else document.getElementById("result").innerText=
        `Final Score: ${score}/${quiz.length}`;
}

loadQuiz();

/* CAROUSEL */
const imgs=[
    "https://picsum.photos/id/1011/600/300",
    "https://picsum.photos/id/1015/600/300",
    "https://picsum.photos/id/1025/600/300"
];

let c=0;
const img=document.getElementById("img");
img.src=imgs[0];

function next(){
    c=(c+1)%imgs.length;
    img.src=imgs[c];
}

function prev(){
    c=(c-1+imgs.length)%imgs.length;
    img.src=imgs[c];
}

/* API */
function getJoke(){
fetch("https://official-joke-api.appspot.com/random_joke")
.then(r=>r.json())
.then(d=>{
    document.getElementById("joke").innerText=
    d.setup+" 😂 "+d.punchline;
});
}
