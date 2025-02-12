const formularios_ajax= document.querySelectorAll(".FormularioAjax");

formularios_ajax.forEach(formularios => {
    
    formularios.addEventListener("submit", function(e){
        e.preventDefault();

        Swal.fire({
            title: "Estás seguro?",
            text: "Quieres realizar la opcion solicitada?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, realizar!",
            cancelButtonText: "No, realizar!"
          }).then((result) => {
            if (result.isConfirmed) {
                
                let data= new FormData(this);
                let metod = this.getAttribute("method");
                let action = this.getAttribute("action");

                let encabezado= new Headers();
                
                let config={
                    metod: metod,
                    encabezado: encabezado,
                    mode: 'cors',
                    cache: 'no-cache',
                    body: data
                }

                fetch(action,config)
                .then(respuesta => respuesta.json())
                .then(respuesta => {
                    return alerta_ajax(respuesta);
                });

            }
          });


    });

});

function alerta_ajax(alerta){
    
    //DEJO NOTA REVISER LA CONDICIONAL SI EL ALERTA.TIPO =="SIMPLE" LE AFECTA LA S MAYUSCULA
    if(alerta.tipo== "Simple"){
        Swal.fire({
                    icon: alerta.icono,
                    title: alerta.titulo,
                    text: alerta.texto,
                    confirmButtonText:'Aceptar'
                    
          });
    }else if(alerta.tipo=="recargar"){
        Swal.fire({
            icon: alerta.icono,
            title: alerta.titulo,
            text: alerta.texto,
            confirmButtonText:'Aceptar'
          }).then((result) => {
            if (result.isConfirmed) {
                localtion.reload();
            }
          });
    }else if(alerta.tipo=="limpiar"){
        Swal.fire({
            icon: alerta.icono,
            title: alerta.titulo,
            text: alerta.texto,
            confirmButtonText:'Aceptar'
          }).then((result) => {
            if (result.isConfirmed) {
                document.querySelector(".FormularioAjax").reset();
            }
          });       
    }else if(alerta.tipo=="redireccionar"){
        window.location.href=alerta.url;
    }
}