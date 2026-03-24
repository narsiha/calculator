function buttonclick(val){
    
    document.getElementById("screen").value+=val
}

function clearDisplay(){
    document.getElementById("screen").value=""
}

function sum(){
    var text=document.getElementById("screen").value
    var result=eval(text)    //eval is a method in javascriptlibrary used to operations
    document.getElementById("screen").value=result
}