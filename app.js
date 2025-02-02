let amigos = [];

function agregarAmigo(){
    //Capturar el valor del campo de entrada
    let nombre = document.getElementById("amigo").value;

    //Validar la entrada, si está vacío, mostrar un alert con un mensaje de error
    if(nombre == "" ){
        alert("Por favor, inserte un nombre");
    }
    else {//Actualizar el array de amigos
        amigos.push(nombre);        
    }
    
    //Limpiar el campo de entrada: 
    document.getElementById("amigo").value = "";
    actualizarLista();
}

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

/* Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. 
Usa Math.random() y Math.floor() para obtener un índice aleatorio.*/

function sortearAmigo(){
    //Validar que haya amigos disponibles antes de sortear
    if(amigos.length > 0){
        //Generar un índice aleatorio
        let index = Math.floor(Math.random()*amigos.length);

        //Obtener el nombre sorteado
        let nombreSorteado = amigos[index];

        //Mostrar el resultado
        let lista = document.getElementById("resultado");
        lista.innerHTML = "";
        let elementoLista = document.createElement("li");
        elementoLista.textContent = `Tu amigo secreto es: ${nombreSorteado}`;
        lista.appendChild(elementoLista);
    }
    else{
        alert("Vaya... No hay amigos para sortear. Ingresa el nombre de tus amigos para comenzar")
    }

}