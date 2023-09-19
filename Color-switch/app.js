function getColor(){
    const randNumb=Math.floor(Math.random()*16777215);//multiping with this number will give us a hexadecimal code
    const randCode= "#"+randNumb.toString(16);//converts the random number to a hexadecimal string
    document.body.style.backgroundColor = randCode;
    document.getElementById("color-code").innerText =randCode;
    console.log(randNumb,randCode);
    
    //Copies the text to clipboard navigator.clipboard.writeText(randCode)
}


document.getElementById("btn").addEventListener(
    "click",
    getColor
)
getColor();