import React, { useState } from "react";
import "./styles.css";






var secondColor="rgb(214, 43, 43)"
var userName;
var inputAngleOfTriangleArray=[]

export default function App() {

const[intro,setIntro]=useState("")
const[homePagehide,setHomePageHide]=useState("block")
const[introDivHide,setIntroDivHide]=useState("block")
const[mainMenu,setMainMenu]=useState("")

const[trianglePage,setTrianglePage]=useState("")
const[hideMainMenu,setHideMainMenu]=useState("flex")
const[triangleResultCheck,setTriangleResultCheck]=useState("")
const[hideTriangleCheckPage,setHideTriangleCheckPage]=useState("block")
const[hideTriangleResultCheck,setHideTriangleResultCheck]=useState("block")
const[hypotenusePage,setHypotenusePage]=useState("")
const[hideHypotenusePage,setHideHypotenusePage]=useState("block")
const[hypotenuseResultCheck,setHypotenuseResultCheck]=useState("")
const[hideHypotenuseResultCheckPage,setHideHypotenuseResultCheckPage]=useState("block")
const[areaPage,setAreaPage]=useState("")
const[hideAreaPage,setHideAreaPage]=useState("block")
const[area1Div,setArea1Div]=useState("")
const[hideArea1Div,setHideArea1Div]=useState("block")
const[area2Div,setArea2Div]=useState("")
const[hideArea2Div,setHideArea2Div]=useState("block")
const[area3Div,setArea3Div]=useState("")
const[hideArea3Div,setHideArea3Div]=useState("block")
const[quizPage,setquizPage]=useState("")
const[hideQuizPage,setHideQuizPage]=useState("block")


//take user name
function nameHandler(event){
userName=event.target.value
}

//on pressing Enter button
function clickHandler(e){
  e.preventDefault()

  console.log(userName)

  setHomePageHide("none")

  var newIntro= <div>
<h1>Hello <span style={{color:"rgb(133, 10, 248)"}}>{userName.toUpperCase()}</span>! Lets start learning about triangles. </h1>
<button className="introBtns" onClick={startLearningClickHandler}>Start Learning!</button>
  </div>
setIntro(newIntro)

}

//on pressing Start Learning button
function startLearningClickHandler(){

setIntroDivHide("none")


  var chooseMenu=<div className="mainMenuDiv" style={{display:hideMainMenu }} id="mainMenu">
  
  <div className="div1" onClick={isItTriangle} >Is it a Triangle?</div>
  <div className="div2" onClick={findHypotenuse} >Find hypotenuse.</div>
  <div className="div3" onClick={findArea}>Area calculator</div>
  <div className="div4" onClick={takeQuiz}>Take a quiz!</div>
  
  </div>

setMainMenu(chooseMenu)
  
   
}
function isItTriangle(){
  
  setHideMainMenu("none")
  setHideTriangleCheckPage("block")

  var showTrianglePage=<div className="trianglePage" >
<p onClick={BackToMainMenuClickHandler} style={{cursor:"pointer"}} className="backPara">Back to Main Menu</p><br/>

    <form action="" method="GET" onSubmit={checkForTriangle}>
      <div>
      <label for="angle1">Enter 1st angle: </label>
      <input type="number" name="angle1" id="angle1" className="inputAngle" required min="0.001" max="179.999" step="0.0001" />
      </div>
      <div>
      <label for="angle2">Enter 2nd angle: </label>
      <input type="number" name="angle2" id="angle2" className="inputAngle" required min="0.001"  max="179.999" step="0.0001" />
      </div>
      <div>
      <label for="angle3">Enter 3rd angle: </label>
      <input type="number" name="angle3" id="angle3" className="inputAngle" required min="0.001"  max="179.999" step="0.0001" />
      </div>
      <div>
      <button type="submit" className="usefulBtn" >Check</button>
      <button type="reset" className="usefulBtn">RESET</button>
      </div>
    </form>
    
  </div>

setTrianglePage(showTrianglePage)
}



function checkForTriangle(e){
  setHideTriangleResultCheck("block")
  e.preventDefault();

  var inputAngleArray=document.querySelectorAll(".inputAngle")

  for(var i=0;i<inputAngleArray.length;i++){
inputAngleOfTriangleArray[i]=Number(inputAngleArray[i].value)
  }
  var sum=0;
inputAngleOfTriangleArray.map((angle)=>{
sum=sum+angle;

})
if(sum===180){
var result=<div>
<p className="resultPara">Yess! {userName}. THese angles make a triangle</p>


</div>
}else{
  var result=
  <div>
<p className="resultPara">No! {userName}. THese angles do not make a triangle.</p>


</div>
}
setTriangleResultCheck(result)
 

}

function findHypotenuse(){
  setHideMainMenu("none")
  setHideHypotenusePage("block")

  var showHypotenusePage=<div className="hypotenusePage">
<p onClick={BackToMainMenuClickHandler} style={{cursor:"pointer"}} className="backPara">Back to Main Menu</p><br/>
    <form method="GET" onSubmit={calculateHypotenuse} >
      <div>
      <label for="side1">Enter 1st side: </label>
      <input  type="number" min="0.001" id="side1" name="side1" step="0.0001"required />
      </div>
      <div>
      <label for="side2">Enter 2nd side: </label>
      <input  type="number" min="0.001" id="side2" name="side2" step="0.0001" required />
      </div>
     <div>
       <button type="submit" className="usefulBtn">Find Hypotenuse</button>
       <button type="reset" className="usefulBtn">RESET</button>
     </div>

    </form>

  </div>
  
setHypotenusePage(showHypotenusePage)
}

function calculateHypotenuse(e){
  setHideHypotenuseResultCheckPage("block")
  e.preventDefault()

  var x=Number(document.getElementById("side1").value)
  var y=Number(document.getElementById("side2").value)
  var hypo=Math.sqrt(x*x+y*y)
  
var result=<div>
  <p className="resultPara">Hypotenuse of the triangle is {hypo}</p>

</div>

  setHypotenuseResultCheck(result)
}

// Finding Area
function findArea(){
setHideMainMenu("none")
setHideAreaPage("block")

var findAreaPage=<div className="areaPage">
  <p onClick={BackToMainMenuClickHandler} style={{cursor:"pointer"}} className="backPara">Back to Main Menu</p><br/>
<p style={{color:"white"}}><span style={{color:"rgb(133, 10, 248)"}}>{userName}</span> you can select any of the following.</p><br/>
<form method="GET">
  <div className="areaTypeParentDiv">
  <div className="areaType">
    <label for="rightAngledTriangle" >
    <input type="radio" id="rightAngledTriangle" name="optionChoose" onChange={checkArea1} />If you have base and height</label>
  </div>
  <div className="areaType">
    <label for="twoSideAndAngle" >
    <input type="radio" id="twoSideAndAngle" name="optionChoose" onChange={checkArea2} />If you have two sides and an angle</label>
  </div>
  <div className="areaType">
    <label for="allSides" >
    <input type="radio" id="allSides" name="optionChoose" onChange={checkArea3} />If you have all sides of a triangle.</label>
  </div>
  </div>
  
</form>
</div>


setAreaPage(findAreaPage)

}
function checkArea1(){
  setHideArea1Div("block")
  setHideArea2Div("none")
  setHideArea3Div("none")


var areaOutput=<div className="areaOneDiv">
<form method="GET" onSubmit={checkArea1Result} >
  <div>
  <label for="base">Enter base: </label>
  <input type="number" id="base" min="0.001" step="0.001" required/>
  </div>
  <div>
  <label for="height">Enter height: </label>
  <input type="number" id="height" min="0.001" step="0.001" required/>
  </div>
  <button className="areaBtn" type="submit">Find Area</button>
  <button className="areaBtn" type="reset">Reset</button>
</form>
<p className="resultPara">Output will be Shown below:</p>
<p id="area1Output" className="resultPara"></p>

</div>
setArea1Div(areaOutput)
}

function checkArea1Result(e){
  e.preventDefault()
  var x=document.getElementById("base").value;
  var y=document.getElementById("height").value;
  console.log(x)
var finalArea=1/2*x*y
  document.getElementById("area1Output").innerText=finalArea+" sq. units";
}

//checkArea2
function checkArea2(){
  setHideArea2Div("block")
  setHideArea3Div("none")
  setHideArea1Div("none")

  var areaOutput=<div className="areaTwoDiv">
<form method="GET" onSubmit={checkArea2Result}  >
  <div>
  <label for="1stside">Enter side 1: </label>
  <input type="number" id="1stside" min="0.001" step="0.001" required/>
  </div>
  <div>
  <label for="2ndside">Enter side 2: </label>
  <input type="number" id="2ndside" min="0.001" step="0.001" required/>
  </div>
  <div>
  <label for="angle">Enter angle: </label>
  <input type="number" id="angle" min="0.001" max="179.999" step="0.001"  required/>
  </div>
  <button className="areaBtn" type="submit">Find Area</button>
  <button className="areaBtn" type="reset">Reset</button>
</form>
<p className="resultPara">Output will be Shown below:</p>
<p id="area2Output" className="resultPara"></p>

</div>
setArea2Div(areaOutput)

}
function checkArea2Result(e){
  e.preventDefault();
  var x=document.getElementById("1stside").value;
  var y=document.getElementById("2ndside").value;
var z=document.getElementById("angle").value;
var finalArea= (x*y*Math.sin(z*Math.PI/180))/2;

document.getElementById("area2Output").innerText=finalArea+" sq. units"
}

//checkArea3
function checkArea3(){
setHideArea1Div("none")
setHideArea2Div("none")
setHideArea3Div("block")

var areaOutput=<div className="areaThreeDiv">
<form method="GET" onSubmit={checkArea3Result}  >
  <div>
  <label for="triSide1">Enter side 1 : </label>
  <input type="number" id="triSide1" min="0.001" step="0.001" required/>
  </div>
  <div>
  <label for="triSide2">Enter side 2 : </label>
  <input type="number" id="triSide2" min="0.001" step="0.001" required/>
  </div>
  <div>
  <label for="triSide3">Enter side 3 : </label>
  <input type="number" id="triSide3" min="0.001"  step="0.001" required/>
  </div>
  <button className="areaBtn" type="submit">Find Area</button>
  <button className="areaBtn" type="reset">Reset</button>
</form>
<p className="resultPara">Output will be Shown below:</p>
<p id="area3Output" className="resultPara"></p>

</div>
setArea3Div(areaOutput)
}


function checkArea3Result(e){
  e.preventDefault();
  var x=Number(document.getElementById("triSide1").value)
  var y=Number(document.getElementById("triSide2").value)
  var z=Number(document.getElementById("triSide3").value)
  console.log(x,y,z)
  if((x+y)>z &&(y+z)>x && (x+z)>y){
    var s=(x+y+z)/2;
  
    var finalArea=Math.sqrt(s*(s-x)*(s-y)*(s-z))
    document.getElementById("area3Output").innerText=finalArea+" sq. units"}
  
else{
document.getElementById("area3Output").innerText="Enter valid side lengths such that each side length should be less than sum of other two sides"
}
}

//Quiz
function takeQuiz(){

setHideMainMenu("none")
setHideQuizPage("block")

var showQuizPage=<div className="quesListWrap" >
<form method="GET" onSubmit={checkquizResult} id="quizForm" name="quiz">
  <div className="questionList">
<label className="quesNos">1. If a triangle has angles 135<sup>0</sup>, 15<sup>0</sup>, 30<sup>0</sup>. Is it an obtuse triangle?</label><br/>
<label className="label" for="radio1"><input type="radio" id="radio1" name="options1" value="option1" required /> yes
  </label>
  <label className="label" for="radio2"><input type="radio" id="radio2" name="options1" value="option2" required /> no
  </label>
  </div>

  <div className="questionList">
<label className="quesNos">2. If a triangle has angles 115<sup>0</sup>, 25<sup>0</sup>, 40<sup>0</sup>. Is it an acute triangle?</label><br/>
<label className="label" for="radio3"><input type="radio" id="radio3" name="options2" value="option1" required /> yes
  </label>
  <label className="label" for="radio4"><input type="radio" id="radio4" name="options2" value="option2" required /> no
  </label>
  </div>

  <div className="questionList">
<label className="quesNos">3. If a triangle has angles 90<sup>0</sup>, 60<sup>0</sup>, 30<sup>0</sup>. Is it a right angle triangle?</label><br/>
<label className="label" for="radio5"><input type="radio" id="radio5" name="options3" value="option1" required /> yes
  </label>
  <label className="label" for="radio6"><input type="radio" id="radio6" name="options3" value="option2" required /> no
  </label>
  </div>

  <div className="questionList">
<label className="quesNos">4. A triangle has angles 60<sup>0</sup>, 60<sup>0</sup>, 60<sup>0</sup>. Is it an equilateral triangle?</label><br/>
<label className="label" for="radio7"><input type="radio" id="radio7" name="options4" value="option1" required /> yes
  </label>
  <label className="label" for="radio8"><input type="radio" id="radio8" name="options4" value="option2" required /> no
  </label>
  </div>


  <div className="questionList">
<label className="quesNos">5. If a triangle has angles 25<sup>0</sup>, 75<sup>0</sup>, 80<sup>0</sup>. Is it an acute triangle?</label><br/>
<label className="label" for="radio9"><input type="radio" id="radio9" name="options5" value="option1" required /> yes
  </label>
  <label className="label" for="radio10"><input type="radio" id="radio10" name="options5" value="option2" required /> no
  </label>
  </div>

  <div className="questionList">
<label className="quesNos">6. If a triangle has 2 sides with equal lengths and 75<sup>0</sup> angle between them. What is the type of triangle?</label><br/>
<label className="label fitLabel" for="radio11"><input type="radio" id="radio11" name="options6" value="option1" required /> Equilateral
  </label>
  <label className="label fitLabel" for="radio12"><input type="radio" id="radio12" name="options6" value="option2" required /> Isoceles
  </label>
  <label className="label fitLabel" for="radio13"><input type="radio" id="radio13" name="options6" value="option3" required /> Right Angled Triangle.
  </label>
  </div>

  <div className="questionList">
<label className="quesNos">7. If a triangle has 2 angles of 75<sup>0</sup>. What is the measure of third angle in degree?</label><br/>
<label className="label" for="radio14"><input type="radio" id="radio14" name="options7" value="option1" required /> 25
  </label>
  <label className="label" for="radio15"><input type="radio" id="radio15" name="options7" value="option2" required /> 30
  </label>
  <label className="label" for="radio16"><input type="radio" id="radio16" name="options7" value="option3" required /> 15
  </label>
  </div>

  <div className="questionList">
<label className="quesNos">8. If a triangle has 2 sides with equal lengths and 60<sup>0</sup> angle between them. What is the type of triangle?</label><br/>
<label className="label fitLabel" for="radio17"><input type="radio" id="radio17" name="options8" value="option1" required /> Equilateral
  </label>
  <label className="label fitLabel" for="radio18"><input type="radio" id="radio18" name="options8" value="option2" required /> Isoceles
  </label>
  <label className="label fitLabel" for="radio19"><input type="radio" id="radio19" name="options8" value="option3" required/> Both
  </label>
  </div>

  <div className="questionList">
<label className="quesNos">9. The perimeter of an equilateral triangle is 15cm. What is the length of one side?</label><br/>
<label className="label" for="radio20"><input type="radio" id="radio20" name="options9" value="option1" required/> 15
  </label>
  <label className="label" for="radio21"><input type="radio" id="radio21" name="options9" value="option2" required /> 45
  </label>
  <label className="label" for="radio22"><input type="radio" id="radio22" name="options9" value="option3" required /> 5
  </label>
  </div>

  <div className="questionList">
<label className="quesNos">10. If a triangle has sides of 2cm, 3cm, 4cm, what is the type of triangle?</label><br/>
<label className="label fitLabel" for="radio23"><input type="radio" id="radio23" name="options10" value="option1"required /> Equilateral
  </label>
  <label className="label fitLabel" for="radio24"><input type="radio" id="radio24" name="options10" value="option2" required /> Isoceles
  </label>
  <label className="label fitLabel" for="radio25"><input type="radio" id="radio25" name="options10" value="option3" required/> Scalene
  </label>
  </div>
  <button className="submitBtn" type="submit">submit</button>
<p className="resultPara">Your score is : <span id="quizScore" className="resultPara"></span></p>
  

  <p onClick={BackToMainMenuClickHandler} style={{cursor:"pointer"}} className="backPara">Back to Main Menu</p><br/>

</form>

</div>

setquizPage(showQuizPage)
}
function checkquizResult(e){
  e.preventDefault();
var correctAns=["option1", "option2", "option1", "option1", "option1", "option2", "option2", "option3", "option3", "option3"];

const form=document.forms.quiz


const radioList=[form.elements.options1,form.elements.options2,form.elements.options3,form.elements.options4,form.elements.options5,form.elements.options6,form.elements.options7,form.elements.options8,form.elements.options9,
form.elements.options10]

var score=0;
for(var i=0;i<radioList.length;i++){
  const quesDivs=document.getElementsByClassName("questionList")

if(radioList[i].value===correctAns[i]){
console.log("hurray")
quesDivs[i].style.backgroundColor="green"
score=score+1

}else{
  console.log("Hushhh")
  quesDivs[i].style.backgroundColor=secondColor

}
document.getElementById("quizScore").innerText=score

}
}

function BackToMainMenuClickHandler(){
setHideMainMenu("block")
setHideTriangleResultCheck("none")
setHideTriangleCheckPage("none")
setHideHypotenusePage("none")
setHideHypotenuseResultCheckPage("none")
setHideAreaPage("none")
setHideArea1Div("none");setHideArea2Div("none");setHideArea3Div("none")
setHideQuizPage("none")
}

  return (
    <div className="container">
    <div className="homepageDiv" style={{display:homePagehide}}>
      <h1>All About Triangles</h1>
      <form onSubmit={clickHandler} method="GET"><input onChange={nameHandler} className="nameBox" placeholder="Enter your name" required/><br/>
<button  className="introBtns" >ENTER</button></form>
</div>

{/* ouput the intro page */}
<div className="introDiv" style={{display:introDivHide}}>{intro}
</div>
{/* //output mainmenu */}

<div className="mainMenuDiv" style={{display:hideMainMenu }}>{mainMenu}</div>

{/* userselected div */}

<div style={{display:hideTriangleCheckPage}} className="output">{trianglePage}</div>
<div style={{display:hideTriangleResultCheck}}>{triangleResultCheck}</div>

<div style={{display:hideHypotenusePage}} className="output">{hypotenusePage}</div>
<div style={{display:hideHypotenuseResultCheckPage}}>{hypotenuseResultCheck}</div>

<div style={{display:hideAreaPage}} className="areaMainDiv">{areaPage}</div>
<div className="subAreaDiv" style={{display:hideArea1Div}}>{area1Div}</div>
<div className="subAreaDiv" style={{display:hideArea2Div}}>{area2Div}</div>
<div className="subAreaDiv" style={{display:hideArea3Div}}>{area3Div}</div>

{/* quiz page */}
<div style={{display:hideQuizPage}}>{quizPage}</div>


</div>

   
  );
}
