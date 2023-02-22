    const socket = io()    
    socket.emit('mensaje', "Hola me estoy conectando")

    socket.on('evento-admin', datos => {
        console.log(datos)
    })

    socket.on('evento-general', datos => {
        console.log(datos)
    })

    //..............Formulario de carga sugerido...............
    
    let vvtitle = document.getElementById("vtitle")
    vvtitle.innerHTML = '<input id="idtitle" type="text" placeholder="Ingrese title">'    
    
    let vvdescription = document.getElementById("vdescription")
    vvdescription.innerHTML = '<input id="iddescription" type="text" placeholder="Ingrese description">'
    
    let vvcode = document.getElementById("vcode")      
    vvcode.innerHTML = '<input id="idcode" type="text" placeholder="Ingrese code">'
          
    let vvprice = document.getElementById("vprice")
    vvprice.innerHTML = '<input id="idprice" type="text" placeholder="Ingrese price">'
          
    let vvstatus = document.getElementById("vstatus")
    vvstatus.innerHTML = '<input id="idstatus" type="text" placeholder="Ingrese status">'
    
    let vvstock = document.getElementById("vstock")    
    vvstock.innerHTML = '<input id="idstock" type="text" placeholder="Ingrese stock">'
          
    let vvcategory = document.getElementById("vcategory")
    vvcategory.innerHTML = '<input id="idcategory" type="text" placeholder="Ingrese category">'
    
    let vvthumbnail = document.getElementById("vthumbnail")    
    vvthumbnail.innerHTML = '<input id="idthumbnail" type="text" placeholder="Ingrese thumbnail">'    
    
    let vvbtnAgreg = document.getElementById("btnAgreg")    
    vvbtnAgreg.innerHTML = '<button onclick="Agregar();">Agregar</button>'
    
    let vvbtnElim = document.getElementById("btnElim")    
    vvbtnElim.innerHTML = '<button onclick="Eliminar();">Eliminar</button>'

    let vvbtnCanc = document.getElementById("btnCanc")    
    vvbtnCanc.innerHTML = '<button onclick="Cancelar();">Cancelar</button>' 
    
    console.log(guardodatos)


    function Agregar () {     
        
    const guardodatos = []
        
    let muestratitle = document.getElementById("idtitle").value;
    let muestra1 = document.getElementById("muestrotitle")
    muestra1.innerHTML = muestratitle

    let muestradescription = document.getElementById("iddescription").value;
    let muestra2 = document.getElementById("muestrodescription")
    muestra2.innerHTML = muestradescription

    let muestracode = document.getElementById("idcode").value;
    let muestra3 = document.getElementById("muestrocode")
    muestra3.innerHTML = muestracode

    let muestraprice = document.getElementById("idprice").value;
    let muestra4 = document.getElementById("muestroprice")
    muestra4.innerHTML = muestraprice

    let muestrastatus = document.getElementById("idstatus").value;
    let muestra5 = document.getElementById("muestrostatus")
    muestra5.innerHTML = muestrastatus

    let muestrastock = document.getElementById("idstock").value;
    let muestra6 = document.getElementById("muestrostock")
    muestra6.innerHTML = muestrastock

    let muestracategory = document.getElementById("idcategory").value;
    let muestra7 = document.getElementById("muestrocategory")
    muestra7.innerHTML = muestracategory

    let muestrathumbnail = document.getElementById("idthumbnail").value;
    let muestra8 = document.getElementById("muestrothumbnail")
    muestra8.innerHTML = muestrathumbnail

    guardodatos = push({muestratitle, muestradescription, muestracode, muestraprice, muestrastatus, muestrastock, muestracategory, muestrathumbnail})   
    
    let muestratodo = document.getElementById("todo")
    muestratodo.innerHTML = guardodatos

    }


