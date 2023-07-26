function validarForma(formulario){
    var usuario = formulario.usuario;
    if (usuario.value == " " || usuario.value == "Escribir usuario"){
        alert("Debe proporcionar un nombre de usuario");
        usuario.focus();
        usuario.select();
        return false;
    }

    var password = formulario.password;
    if(password.value == "" || password.value.length < 3){
        alert("Debe proporcionar una contraseña mayor a tres letras");
        password.focus();
        password.select();
        return false;
    }

    var tecnologia = formulario.tecnologia;
    var checkSeleccionado = false;

    for (i = 0; i < tecnologia.length; i++ ){
        if (tecnologia[i].checked){
            checkSeleccionado = true;
        }
    }
    if (!checkSeleccionado){
        alert("Debe seleccionar una tecnologia");
        return false;
    }

    var genero = formulario.genero;
    var radioSeleccionado = false;

    for (i = 0; i < genero.length; i++){
        if (genero[i].checked){
            radioSeleccionado = true;
        }
    }
    if (!radioSeleccionado){
        alert("Debe seleccionar un genero");
        return false;
    }

    var ocupacion = formulario.ocupacion;
    if (ocupacion.value == "" ){
        alert("Debe seleccionar la ocupacion");
        return false;
    }

    alert("Formulario valido, enviando datos al servidor");
    return true;
}
function validarForma(forma){
    var usuario = forma.usuario;
    if(usuario.value == "" || usuario.value == "Escribir usuario"){
        alert("Debe proporcionar un nombre de usuario");
        usuario.focus();
        usuario.select();
        return false;
    }
    
    var password = forma.password;
    if(password.value == "" || password.value.length < 3){
        alert("Debe proporcionar un password al menos de 3 caracteres");
        password.focus();
        password.select();
        return false;
    }
    
    var tecnologias = forma.tecnologia;
    var checkSeleccionado = false;
    
    for(var i = 0; i < tecnologias.length; i++){
        if(tecnologias[i].checked){
            checkSeleccionado = true;
        }
    }
    
    if(!checkSeleccionado){
        alert("Debe seleccionar una tecnología");
        return false;
    }
    
    var generos = forma.genero;
    var radioSeleccionado = false;
    
    for(var i = 0; i < generos.length; i++){
        if(generos[i].checked){
            radioSeleccionado = true;
        }
    }
    
    if(!radioSeleccionado){
        alert("Debe seleccionar un genero");
        return false;
    }
    
    var ocupacion = forma.ocupacion;
    if(ocupacion.value == ""){
        alert("Debe seleccionar una ocupacion");
        return false;
    }
    
    //Formulario es valido
    alert("Formulario valido, enviado datos al servidor");
    return true;
}