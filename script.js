let item=[{   
        ques:"REMEMBER<br><div>There are many programming languages like c, c++, python whereas HTML and CSS are not one of them; these languages are known as scripting languages as they need not be compiled for execution.</div><div>These languages are called SCRIPTING LANGUAGES. while HTML creates the structure, CSS creates the style and Js gives action to the webpage.</div><div>Background: red; changes background to red.</div>Color: red; changes text color to red.",
        ans:"HTML, CSS",
        wrans:"C++, python ",
        reward:"basic computer essential knowledge, key 1 : ajax",
        key:"ajax"
    },
    {
        ques:"UNDERSTAND<div>There has been a situation in your company, the STRUCTURE of one of the client’s websites have been facing some issues and the website is not working as it should, due to which your client is not satisfied.</div><div>Q. what do you think the problem is?</div>",
        ans:"HTML",
        wrans:"CSS",
        reward:"scripting language Understanding, key 2 : font-size",
        key:"font-size"
    },
    {
        ques:"APPLY <div>after a thorough investigation the team found out that the background color of the website was creating a problem as the syntax for background was not properly written. The client also requested to change the color of the text to white and font-size to 20px.</div>",
        ans:"Font-size:20px;",
        wrans:"font size to 20px",
        reward:"problem solving , key 3 : 20px;",
        key:"20px;"
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
const endscore=document.querySelector(".endscore")
const gameend=document.querySelector(".game-end")

function updatescore(){
    scoreclass.innerText=(score/10);
}
function setoption()
{
    op=Math.floor(Math.random()*2)
    correctclick=0;

    if(op==0)
    {
        option1.innerText="";
        option1.insertAdjacentHTML("beforeEnd",ques[activequestion].ans);
        option2.innerText="";
        option2.insertAdjacentHTML("beforeEnd",ques[activequestion].wrans);

    }
    else{
        option2.innerText="";
        option2.insertAdjacentHTML("beforeEnd",ques[activequestion].ans);
        option1.innerText="";
        option1.insertAdjacentHTML("beforeEnd",ques[activequestion].wrans);

    }
}


function setrewardandlession(){
    rewardsclass.innerHTML="";
    lessonsclass.innerHTML="";
    for(let i=0;i<=solved;i++){
        rewardsclass.insertAdjacentHTML("beforeEnd",`<div class="rewards">${ques[i].reward}</div>`);
        lessonsclass.insertAdjacentHTML("beforeEnd",`<div class="lessons">${ques[i].ques}</div>`);
    }
}

function setquesion(){
    question.innerText="";
    question.insertAdjacentHTML("beforeend",ques[activequestion].ques);
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
        if(solved==2){
            gameend.setAttribute("style","display:block;")
            endscore.innerText=(`Your final score is : ${score}`);
        }
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