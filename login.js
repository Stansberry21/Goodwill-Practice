const gameText=document.getElementByld('game-text2');
const userInput=document.getElementByld('user-input2');
const submitBtn=document.getElementByld('submit-btn2');
function print(text) {
game Text.innerText += text + "\n";   
game Text.scrollTop=game Text.scrollHeight;
}
function sleep(ms) {
   return new Promise(resolve => setTimeout(resolve, ms));
let currentStep = "askUsername";
let username.value="";
submitBtn.addEventListener("click", async()=>{
const input=userInput.value.trim();
userInput.value="";
