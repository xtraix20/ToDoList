
export const logicaToDoList = ()=> {

    var inputTarea = document.getElementById("tarea");
    var btn = document.getElementById("add");
    var listado= document.getElementById("listado");
    var cantidad = document.getElementById("cantidad");
    
    var total = 0; 
    btn.onclick= function (){
    
        if(inputTarea.value==""){
            alert("El campo no puede estar vacio");
            return;
        }
        var elemento = inputTarea.value;
        var li = document.createElement("li");
        li.textContent = elemento;
    
        listado.appendChild(li); 
    
        total++; 
        cantidad.innerHTML = total; 
    
        var btnEliminar = document.createElement("span");
        btnEliminar.textContent="\u00d7";
        li.appendChild(btnEliminar);
    
        btnEliminar.onclick= function(){
            li.remove();
            total--;
            cantidad.innerHTML = total;  
        }
    
        inputTarea.value="";
    
    
    }

};

