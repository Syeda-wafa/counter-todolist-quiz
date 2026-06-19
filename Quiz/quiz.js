let subject = "";
let level = "";
let index = 0;
let score = 0;
let timer;
let time = 15;
let quizData = [];

/* ===================== DATA ===================== */

const data = {

html: {
easy: [
{q:"HTML stands for?", o:["Hyper Text Markup Language","Home Tool","High Text","None"], a:0},
{q:"HTML file extension?", o:[".html",".css",".js",".py"], a:0},
{q:"HTML is?", o:["Markup","Programming","DB","OS"], a:0},
{q:"Paragraph tag?", o:["<p>","<h1>","<div>","<span>"], a:0},
{q:"Image tag?", o:["<img>","<image>","<pic>","<src>"], a:0},
{q:"Line break tag?", o:["<br>","<lb>","<break>","<hr>"], a:0},
{q:"Heading largest?", o:["h1","h6","h3","h5"], a:0},
{q:"Table tag?", o:["<table>","<tab>","<tr>","<td>"], a:0},
{q:"Anchor tag?", o:["<a>","<link>","<href>","<url>"], a:0},
{q:"Body contains?", o:["Content","Meta","CSS","JS"], a:0}
],
medium:[
{q:"Semantic tag?", o:["section","div","span","b"], a:0},
{q:"Meta used for?", o:["SEO","CSS","JS","DB"], a:0},
{q:"Iframe used for?", o:["Embed page","Style","DB","Loop"], a:0},
{q:"HTML version?", o:["HTML5","HTML3","HTML2","HTML1"], a:0},
{q:"Form used for?", o:["Input","Style","DB","Loop"], a:0},
{q:"Title shows in?", o:["Tab","Body","Footer","Console"], a:0},
{q:"HTML rendered by?", o:["Browser","Server","DB","Compiler"], a:0},
{q:"Input password hides?", o:["Text","Image","Number","None"], a:0},
{q:"DOCTYPE used for?", o:["Version","CSS","JS","DB"], a:0},
{q:"HTML is?", o:["Markup","Programming","DB","OS"], a:0}
],
hard:[
{q:"DOM stands for?", o:["Document Object Model","Data Object","None","Direct Object"], a:0},
{q:"Canvas used for?", o:["Graphics","Text","Table","Form"], a:0},
{q:"LocalStorage stores?", o:["Browser data","Server","DB","Cache"], a:0},
{q:"Cookie limit?", o:["4KB","4MB","40KB","1MB"], a:0},
{q:"Viewport used for?", o:["Responsive design","SEO","DB","JS"], a:0},
{q:"Parser in?", o:["Browser","DB","Server","IDE"], a:0},
{q:"HTML case sensitive?", o:["No","Yes","Sometimes","None"], a:0},
{q:"SVG stands for?", o:["Scalable Vector Graphics","Simple Grid","None","Style View"], a:0},
{q:"Accessibility uses?", o:["alt","script","style","meta"], a:0},
{q:"Semantic advantage?", o:["SEO","Speed","Color","None"], a:0}
]
},

css: {
  easy: [
    {q:"CSS stands for?", o:["Cascading Style Sheets","Creative Style System","Computer Style Sheets","None"], a:0},
    {q:"CSS is used for?", o:["Styling webpages","Database","Backend","OS"], a:0},
    {q:"CSS file extension?", o:[".css",".html",".js",".py"], a:0},
    {q:"Which selector targets an id?", o:["#id",".class","*","tag"], a:0},
    {q:"Which selector targets a class?", o:[".class","#id","*","tag"], a:0},
    {q:"Property for text color?", o:["color","background","font-style","border"], a:0},
    {q:"Property for background color?", o:["background-color","color","bg","fill"], a:0},
    {q:"Margin means?", o:["Outer spacing","Inner spacing","Border","Font size"], a:0},
    {q:"Padding means?", o:["Inner spacing","Outer spacing","Border","Shadow"], a:0},
    {q:"Center text?", o:["text-align","align-text","font-align","center"], a:0}
  ],

  medium: [
    {q:"Position absolute means?", o:["Relative to nearest positioned parent","Viewport only","Static","None"], a:0},
    {q:"Flexbox is used for?", o:["Layout","Animation","Database","Forms"], a:0},
    {q:"display:none does?", o:["Hide element","Delete element","Disable CSS","Nothing"], a:0},
    {q:"z-index controls?", o:["Stack order","Font size","Width","Padding"], a:0},
    {q:"Which property adds shadow?", o:["box-shadow","shadow","filter","opacity"], a:0},
    {q:"Pseudo-class example?", o:[":hover",".hover","#hover","hover"], a:0},
    {q:"overflow hidden means?", o:["Hide extra content","Scroll content","Delete content","Resize"], a:0},
    {q:"border-radius used for?", o:["Rounded corners","Shadow","Spacing","Font"], a:0},
    {q:"Opacity range?", o:["0 to 1","1 to 10","0 to 100","-1 to 1"], a:0},
    {q:"Responsive design uses?", o:["Media queries","Loops","SQL","API"], a:0}
  ],

  hard: [
    {q:"Grid layout uses?", o:["Rows and columns","Only rows","Only columns","None"], a:0},
    {q:"Specificity decides?", o:["Which style applies","Animation speed","File size","Layout"], a:0},
    {q:"!important does?", o:["Overrides styles","Deletes styles","Adds style","None"], a:0},
    {q:"Rem unit is based on?", o:["Root font size","Parent size","Viewport","Pixels"], a:0},
    {q:"Em unit is based on?", o:["Parent font size","Root size","Viewport","Pixels"], a:0},
    {q:"CSS variable syntax?", o:["--var","$var","@var","%var"], a:0},
    {q:"Transform rotate used for?", o:["Rotation","Scaling","Spacing","Color"], a:0},
    {q:"Transition used for?", o:["Smooth animation","Layout","Flexbox","Grid"], a:0},
    {q:"Media query syntax starts with?", o:["@media","@query","#media",".media"], a:0},
    {q:"calc() used for?", o:["Dynamic calculations","Animations","Colors","Fonts"], a:0}
  ]
},

js:{
easy:[
{q:"JS is?", o:["Language","Markup","Style","DB"], a:0},
{q:"Array starts?", o:["0","1","-1","10"], a:0},
{q:"console.log?", o:["Output","Input","DB","CSS"], a:0},
{q:"JS file?", o:[".js",".css",".html",".py"], a:0},
{q:"const means?", o:["Fixed","Change","Loop","None"], a:0},
{q:"function keyword?", o:["function","func","def","method"], a:0},
{q:"alert used for?", o:["Popup","DB","CSS","HTML"], a:0},
{q:"JS runs in?", o:["Browser","Server","DB","None"], a:0},
{q:"DOM means?", o:["Document Object Model","Data","None","Direct"], a:0},
{q:"let is?", o:["Variable","Loop","Class","None"], a:0}
],
medium:[
{q:"== vs ===?", o:["Loose vs strict","Same","None","DB"], a:0},
{q:"event listener?", o:["Events","DB","CSS","HTML"], a:0},
{q:"JSON?", o:["Data format","Loop","CSS","HTML"], a:0},
{q:"promise?", o:["async","sync","css","html"], a:0},
{q:"arrow function?", o:["=>","func","class","none"], a:0},
{q:"typeof?", o:["Data type","Value","Loop","None"], a:0},
{q:"API?", o:["Interface","DB","CSS","HTML"], a:0},
{q:"setTimeout?", o:["Delay","Loop","CSS","DB"], a:0},
{q:"NaN?", o:["Not a Number","Null","String","Object"], a:0},
{q:"hoisting?", o:["Move up","Delete","None","DB"], a:0}
],
hard:[
{q:"closure?", o:["Function inside function","Loop","DB","CSS"], a:0},
{q:"event loop?", o:["Execution system","CSS","DB","HTML"], a:0},
{q:"spread operator?", o:["...","++","--","=="], a:0},
{q:"async/await?", o:["Async handling","CSS","DB","HTML"], a:0},
{q:"prototype?", o:["Inheritance","CSS","DB","HTML"], a:0},
{q:"call stack?", o:["Memory","DB","CSS","HTML"], a:0},
{q:"debounce?", o:["Performance","CSS","DB","HTML"], a:0},
{q:"memory leak?", o:["Unused memory","Error","Loop","None"], a:0},
{q:"callback?", o:["Function in function","DB","CSS","HTML"], a:0},
{q:"strict mode?", o:["use strict","slow","none","db"], a:0}
]
},

react: {
easy: [
{q:"React is a?", o:["Library","Language","Database","OS"], a:0},
{q:"React created by?", o:["Facebook","Google","Microsoft","Apple"], a:0},
{q:"React uses?", o:["Components","Tables","Files","Servers"], a:0},
{q:"JSX stands for?", o:["JavaScript XML","Java Syntax","JS Extension","None"], a:0},
{q:"React runs on?", o:["Browser","Database","Compiler","OS"], a:0},
{q:"React file extension?", o:[".js / .jsx",".css",".html",".py"], a:0},
{q:"Props are used for?", o:["Passing data","Styling","Database","Loop"], a:0},
{q:"React is mainly for?", o:["UI","Backend","DB","OS"], a:0},
{q:"Virtual DOM improves?", o:["Performance","Color","Font","Size"], a:0},
{q:"React is?", o:["Declarative","Imperative","Manual","None"], a:0}
],

medium: [
{q:"useState is?", o:["Hook","Class","Loop","Function"], a:0},
{q:"useEffect used for?", o:["Side effects","Styling","DB","HTML"], a:0},
{q:"Component means?", o:["Reusable UI","Database","Server","File"], a:0},
{q:"React Router used for?", o:["Navigation","Styling","DB","Loop"], a:0},
{q:"State means?", o:["Data storage","CSS","HTML","Server"], a:0},
{q:"Keys used in React?", o:["List optimization","Styling","DB","Loop"], a:0},
{q:"Controlled component?", o:["Form with state","Static UI","DB","None"], a:0},
{q:"React Fragment used for?", o:["Multiple elements","DB","Loop","CSS"], a:0},
{q:"JSX allows?", o:["HTML in JS","CSS in JS","DB","None"], a:0},
{q:"Props are?", o:["Immutable","Mutable","DB","Loop"], a:0}
],

hard: [
{q:"Virtual DOM works by?", o:["Diffing algorithm","Loop","DB","CSS"], a:0},
{q:"Reconciliation means?", o:["Updating DOM","Deleting code","DB","CSS"], a:0},
{q:"Context API used for?", o:["Global state","Styling","DB","Loop"], a:0},
{q:"React is built on?", o:["Component model","DB","OS","Server"], a:0},
{q:"Fiber in React?", o:["Rendering engine","Database","CSS","None"], a:0},
{q:"Strict mode helps?", o:["Debugging","Styling","DB","Loop"], a:0},
{q:"useMemo used for?", o:["Optimization","Styling","DB","HTML"], a:0},
{q:"useCallback used for?", o:["Function memoization","CSS","DB","HTML"], a:0},
{q:"Hydration means?", o:["Attach JS to HTML","CSS","DB","Loop"], a:0},
{q:"React is maintained by?", o:["Meta","Google","Microsoft","Apple"], a:0}
]
},

python: {
easy: [
{q:"Python is?", o:["Programming Language","Markup","Database","OS"], a:0},
{q:"Python creator?", o:["Guido van Rossum","Elon Musk","Bill Gates","Linus"], a:0},
{q:"Print function?", o:["print()","echo()","write()","log()"], a:0},
{q:"Python uses indentation for?", o:["Block","Color","Loop","DB"], a:0},
{q:"File extension?", o:[".py",".js",".css",".html"], a:0},
{q:"Python is?", o:["Interpreted","Compiled","Both","None"], a:0},
{q:"List is?", o:["Mutable","Immutable","Static","None"], a:0},
{q:"Python supports?", o:["OOP","Only procedural","Only functional","None"], a:0},
{q:"Keyword for function?", o:["def","function","fun","method"], a:0},
{q:"Python used for?", o:["AI/Web/Data","Only games","Only apps","None"], a:0}
],

medium: [
{q:"Tuple is?", o:["Immutable list","Mutable","DB","Loop"], a:0},
{q:"Dictionary stores?", o:["Key-value","Only values","Only keys","None"], a:0},
{q:"Loop types?", o:["for/while","if/else","switch","case"], a:0},
{q:"PIP used for?", o:["Package install","Run code","DB","CSS"], a:0},
{q:"Lambda is?", o:["Anonymous function","Loop","Class","DB"], a:0},
{q:"Exception handling?", o:["try/except","if/else","loop","switch"], a:0},
{q:"Python OOP supports?", o:["Yes","No","Partial","None"], a:0},
{q:"Import keyword used for?", o:["Modules","Loops","DB","CSS"], a:0},
{q:"Python is case sensitive?", o:["Yes","No","Sometimes","None"], a:0},
{q:"Input function?", o:["input()","scan()","read()","get()"], a:0}
],

hard: [
{q:"GIL in Python?", o:["Global Interpreter Lock","Loop","DB","CSS"], a:0},
{q:"Decorator used for?", o:["Modify function","DB","CSS","HTML"], a:0},
{q:"Generator uses?", o:["yield","return","break","continue"], a:0},
{q:"Memory management?", o:["Automatic","Manual","None","Static"], a:0},
{q:"Python is dynamically typed?", o:["Yes","No","Static","None"], a:0},
{q:"NumPy used for?", o:["Scientific computing","CSS","HTML","DB"], a:0},
{q:"Django is?", o:["Framework","Language","DB","OS"], a:0},
{q:"Flask is?", o:["Micro framework","DB","CSS","Loop"], a:0},
{q:"List comprehension is?", o:["Short loop","DB","CSS","HTML"], a:0},
{q:"Python execution?", o:["Line by line","Compile time","DB","CSS"], a:0}
]
},

sql: {
easy: [
{q:"SQL stands for?", o:["Structured Query Language","Simple Query","Style Query","None"], a:0},
{q:"SQL used for?", o:["Database","CSS","JS","HTML"], a:0},
{q:"SELECT used for?", o:["Fetch data","Delete","Insert","Update"], a:0},
{q:"INSERT used for?", o:["Add data","Delete","Fetch","Update"], a:0},
{q:"UPDATE used for?", o:["Modify data","Delete","Fetch","Insert"], a:0},
{q:"DELETE used for?", o:["Remove data","Add","Fetch","Update"], a:0},
{q:"Table means?", o:["Rows & Columns","File","Folder","App"], a:0},
{q:"Primary key?", o:["Unique ID","Duplicate","Index","None"], a:0},
{q:"SQL is?", o:["Language","Framework","OS","DB only"], a:0},
{q:"WHERE used for?", o:["Filtering","Sorting","Grouping","None"], a:0}
],

medium: [
{q:"JOIN used for?", o:["Combine tables","Delete","Insert","Sort"], a:0},
{q:"INNER JOIN returns?", o:["Matching rows","All rows","None","Random"], a:0},
{q:"GROUP BY used for?", o:["Grouping data","Delete","Insert","Sort"], a:0},
{q:"ORDER BY used for?", o:["Sorting","Delete","Insert","Filter"], a:0},
{q:"HAVING used for?", o:["Filter groups","Rows","Columns","None"], a:0},
{q:"Foreign key?", o:["Link table","Primary","Index","None"], a:0},
{q:"SQL constraints?", o:["Rules","Loops","Functions","CSS"], a:0},
{q:"NULL means?", o:["No value","Zero","Empty string","False"], a:0},
{q:"DISTINCT used for?", o:["Unique values","Duplicates","Insert","Delete"], a:0},
{q:"LIMIT used for?", o:["Restrict rows","Sort","Delete","Insert"], a:0}
],

hard: [
{q:"Normalization used for?", o:["Reduce redundancy","Increase data","Delete DB","None"], a:0},
{q:"ACID properties?", o:["Transaction rules","CSS rules","JS rules","HTML rules"], a:0},
{q:"Index improves?", o:["Speed","Color","Size","Font"], a:0},
{q:"Subquery means?", o:["Query inside query","Loop","CSS","HTML"], a:0},
{q:"View is?", o:["Virtual table","Real table","File","App"], a:0},
{q:"Transaction means?", o:["Group of operations","Single query","CSS","HTML"], a:0},
{q:"Rollback means?", o:["Undo","Delete","Insert","Update"], a:0},
{q:"Commit means?", o:["Save changes","Undo","Delete","None"], a:0},
{q:"DBMS stands for?", o:["Database Management System","Data Basic","None","System DB"], a:0},
{q:"SQL is case sensitive?", o:["No","Yes","Sometimes","Depends"], a:0}
]
}
};

/* ================= FUNCTIONS ================= */

function selectSubject(s){
subject = s;
document.getElementById("subjectScreen").classList.add("hidden");
document.getElementById("difficultyScreen").classList.remove("hidden");
}

function startQuiz(l){
level = l;
quizData = data[subject][level];

index = 0;
score = 0;

document.getElementById("difficultyScreen").classList.add("hidden");
document.getElementById("quizScreen").classList.remove("hidden");

document.getElementById("score").innerText = 0;

load();
startTimer();
}

function startTimer(){
clearInterval(timer);
time = 15;

timer = setInterval(()=>{
time--;
document.getElementById("time").innerText = time;

if(time === 0){
nextQuestion();
}
},1000);
}

function load(){
startTimer();

let q = quizData[index];

document.getElementById("question").innerText = q.q;

let box = document.getElementById("options");
box.innerHTML = "";

q.o.forEach((opt,i)=>{
let btn = document.createElement("button");
btn.classList.add("option");
btn.innerText = opt;

btn.onclick = ()=>check(i,btn);

box.appendChild(btn);
});

document.getElementById("progress").style.width =
((index+1)/quizData.length)*100 + "%";
}

function check(i,btn){
let correct = quizData[index].a;

document.querySelectorAll(".option").forEach(b=>b.disabled=true);

if(i === correct){
btn.classList.add("correct");
score++;
document.getElementById("score").innerText = score;
}else{
btn.classList.add("wrong");
document.querySelectorAll(".option")[correct].classList.add("correct");
}
}

function nextQuestion(){
index++;

if(index < quizData.length){
load();
}else{
endQuiz();
}
}

function endQuiz(){
clearInterval(timer);

document.getElementById("question").innerText =
`Quiz Completed! Score: ${score}/${quizData.length}`;

document.getElementById("options").innerHTML = "";

document.getElementById("nextBtn").innerText = "Restart";

document.getElementById("nextBtn").onclick = ()=>location.reload();
}

document.getElementById("nextBtn").onclick = nextQuestion;