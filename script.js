let item=[{   
        ques:"1assadl;ld  loremdasjbkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkfsd csdoa;fiosn c soihaasa  n   ln  o;  b   biulb   biu lb  bui;b   l,b ui;b        iub l   lkui    nb  l   b   aslkjdlka;s     jlk jl;j    lkjlk   jklqwj  ;lj i   jq w    jqiow;  qb kjsBIUl  be lh OHLb il   B N klb BL  ,",
        ans:"1asd",
        wrans:"asdas",
        key:"ajax"
    },
    {
        ques:"1assadl;ld  loremdasjbkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkfsd csdoa;fiosn c soihaasa  n   ln  o;  b   biulb   biu lb  bui;b   l,b ui;b        iub l   lkui    nb  l   b   aslkjdlka;s     jlk jl;j    lkjlk   jklqwj  ;lj i   jq w    jqiow;  qb kjsBIUl  be lh OHLb il   B N klb BL  ,",
        ans:"2asdasd",
        wrans:"asdas",
        key:"ajax2"
    },
    {
        ques:"3asdasf",
        ans:"3asdasd",
        wrans:"asdas",
        key:"ajax3"
    },
    {
        ques:"4asdasf",
        ans:"4asdasd",
        wrans:"asdas",
        key:"ajax4"
    }]

let quesno=[0,1,2];
let solved=-1;
let op=0;
let ques=[item[quesno[0]],item[quesno[1]],item[quesno[2]]]
let rewards=[];
let lessons=[];
let activequestion=0;
let correctclick=0;
let score=0;
const question=document.querySelector(".question");
const rewardsclass=document.querySelector('.rewards');
const lessonsclass=document.querySelector('.lessons');
const option1=document.querySelector('.option1');
const option2=document.querySelector('.option2');
const nextquestion=document.querySelector('.enter-key');
const enteredkey=document.querySelector(".entered-key");
const scoreclass=document.querySelector(".Score");
const popupcongo =document.querySelector(".popup-congo");
const popuperror =document.querySelector(".popup-error");

function updatescore(){
    scoreclass.innerText=(score);
}
function setoption()
{
    op=Math.floor(Math.random()*2)
    correctclick=0;

    if(op==0)
    {
        option1.innerText= ques[activequestion].ans;
        option2.innerText= ques[activequestion].wrans;
    }
    else{
        option1.innerText= ques[activequestion].wrans;
        option2.innerText= ques[activequestion].ans;
    }
}


function setrewardandlession(){
    rewardsclass.innerHTML="";
    lessonsclass.innerHTML="";
    for(let i=0;i<=solved;i++){
        rewardsclass.insertAdjacentHTML("beforeEnd",`<div class="rewards">${ques[i].key}</div>`);
        lessonsclass.insertAdjacentHTML("beforeEnd",`<div class="lessons">${ques[i].ques}</div>`);
    }
}

function setquesion(){
    question.innerText=ques[activequestion].ques;
}

setquesion();
setoption();
setrewardandlession();


function checkans(option){
    if(correctclick>0)
    {
        return;
    }
    else if(ques[activequestion].ans==option.innerText){
        correctclick++;
        solved++;
        score=score+10;
        updatescore()
        setrewardandlession();
        option.setAttribute("style", "background-color: green;");  

        popupcongo.setAttribute("style","display:block")
        setInterval(()=>{
            popupcongo.setAttribute("style","display:none")
        },2000);
    }
    else if(ques[activequestion].ans!=option.innerText){
        option.setAttribute("style", "background-color: crimson;");  
        score=score-5;
        updatescore()
        popuperror.setAttribute("style","display:block")
        setInterval(()=>{
            popuperror.setAttribute("style","display:none")
        },2000);
    }
}
function nextques(){
    nextquestion.setAttribute("style","display: block;") 
}
enteredkey.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        if(enteredkey.value==ques[activequestion].key)
        {
            option1.setAttribute("style", "background-color: rgba(113, 107, 107, 0.538);");  
            option2.setAttribute("style", "background-color: rgba(113, 107, 107, 0.538);");  
            activequestion++;
            popupcongo.setAttribute("style","display:block")
            setInterval(()=>{
                popupcongo.setAttribute("style","display:none")
            },2000);
            setquesion();
            setoption();
            nextquestion.setAttribute("style","display: none;") 
        }
        else{
            popuperror.setAttribute("style","display:block")
            setInterval(()=>{
                popuperror.setAttribute("style","display:none")
            },2000);
            nextquestion.setAttribute("style","display: none;") 
        }
      event.preventDefault();
    }
  });




// [Math.floor(Math.random()*10)];
// let nextnum=Math.floor(Math.random()*10)
// function findnum(){
// let j=0;
//      while(2){
//         if(quesno.includes(nextnum))
//          {
//             nextnum=Math.floor(Math.random()*10);
//           }
//          else{
//          j=j+1;
//          quesno.push(nextnum);
//          if(j==2){
//              break;
//             }
//         }
//      }
// }
// findnum();