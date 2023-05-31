let nombre= prompt ("Por favor ingrese su nombre");
function saludar (){
    
    if(nombre==""){
        alert ("¡Por favor ingrese su nombre!");
    }
    else{
        alert("¡Bienvenido,"+ nombre +"!");
    }
}
console.log (saludar());