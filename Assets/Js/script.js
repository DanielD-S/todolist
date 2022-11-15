/*almacenamiento Informacion nueva*/
/* Array de almacenamiento datos */
const arrayTarea = [

];
const tareaIngresada = document.querySelector('#nombreTarea');
const listaTareas = document.querySelector('#listaTarea');
const listaTareasID = document.querySelector('#listaid');
const btnAgregar = document.querySelector('#agregarTarea');

/* Creacion de Template Listado Tareas*/
const dibujarTareas = function () {
    /*recorrido listado para dibujar tareas*/
    let htmlLista = '';
    let htmlListaID = '';
    let contador = 0;
    for (let tarea of arrayTarea) {
        if (tarea.realizada){
            statusCheck ='checked';
        } else {
            statusCheck = '';
        }
        htmlLista += `<li style="list-style:none;">${tarea.nombre}
        <input type="checkbox" ${statusCheck} onclick="marcaRealizada(${tarea.id})" />
        <button style="color: red;background: none; border:none;" onclick ="borrarTarea(${tarea.id});"><b>X</b></button></<li>`
        htmlListaID += `<li style="list-style: none;">${tarea.id}</li>`
        contador++ 
    }
    listaTareas.innerHTML = htmlLista;
    listaTareasID.innerHTML = htmlListaID;
    totalTareas.innerHTML = "" + contador;

    /* INPUT CHECKED & RECORRER ARREGLO T.REALIZADAS*/
   const arregloTareasRealizadas = arrayTarea.filter((e)=> e.realizada == true);
   document.querySelector('#tareasRealizadas').innerHTML = arregloTareasRealizadas.length;
}

/* Agregar evento mediante boton*/
btnAgregar.addEventListener("click",() => {
    const  realizada = false;
    const nuevaTarea = tareaIngresada.value;
    arrayTarea.push({id: Date.now(),nombre:nuevaTarea,realizada:realizada})
    tareaIngresada.value='';
   dibujarTareas();
});

/* ELIMINAR TAREAS*/
const borrarTarea = function (id){
    console.log(id);
    const index = arrayTarea.findIndex((e) => e.id == id);
    if (index >= 0){
        arrayTarea.splice(index,1);
        dibujarTareas();
    }
}

/*Problema input checked*/
const marcaRealizada = function(idTarea){
    const posicion = arrayTarea.findIndex((e) => e.id == idTarea);
   /* console.log(arrayTarea);
    console.log(arrayTarea[posicion]);*/
    /*Si es false la paso a true*/
    if (arrayTarea[posicion].realizada == true){
        arrayTarea[posicion].realizada = false;
    } else if (arrayTarea[posicion].realizada == false){
        arrayTarea[posicion].realizada = true;
    }
   dibujarTareas();
}