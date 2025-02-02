let amigos = [];

function agregarAmigo(){
    //Capturar el valor del campo de entrada
    let nombre = document.getElementById("amigo").value;

    //Validar la entrada, si está vacío, mostrar un alert con un mensaje de error
    if(nombre == "" ){
        alert("Por favor, inserte un nombre");
        //-agregarAmigo()-; Corrigiendo, Este codigo es inncesario ya que no es necesario iniciar la funcion de nuevo, esto causa un bucle infinito del error
    }
    else {//Actualizar el array de amigos
        amigos.push(nombre);        
    }
    
    //Limpiar el campo de entrada: 
    document.getElementById("amigo").value = "";
    actualizarLista();
}

/*Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro 
de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.*/

function actualizarLista(){
    //Obtener el elemento de la lista
    let lista = document.querySelector("#listaAmigos");

    //Limpiar la lista existente
    lista.innerHTML = "";

    //Iterar sobre el arreglo
    for(var i = 0; i < amigos.length; i++){
        let elementoLista = document.createElement("li"); //Crea un elemento <li> para la lista <ul> seleccionada en la variable "lista"
        elementoLista.textContent = amigos[i]; //Se asigna el "textContent" del array amigos correspondiente
        lista.appendChild(elementoLista); //appendChild: Agrega un elemento como hijo de otro. En este caso agrega un <li> a la lista <ul>
    }
}