let amigos = [];

function agregarAmigo(){
    //Capturar el valor del campo de entrada
    let nombre = document.getElementById("amigo").value;

    //Validar la entrada, si está vacío, mostrar un alert con un mensaje de error
    if(nombre == "" ){
        alert("Por favor, inserte un nombre");
        agregarAmigo();
    }
    else {//Actualizar el array de amigos
        amigos.push(nombre);        
    }
    
    //Limpiar el campo de entrada: 
    document.getElementById("amigo").value = "";
}