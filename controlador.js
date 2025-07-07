let boton=document.getElementById("boton")
let cajaNombres=document.getElementById("nombres")
let cajaContraseña=document.getElementById("contraseña")
let cajaCorreo=document.getElementById("correo")
let cajaEdad=document.getElementById("edad")
let cajaFechaNacimiento=document.getElementById("fechaNacimiento")

//detectando el evento de clic
boton.addEventListener("click",function(evento){
    evento.preventDefault()

    //Rutina de validacion del formulario
    let nombres=cajaNombres.value
    let contraseña=cajaContraseña.value
    let correo=cajaCorreo.value
    let edad=cajaEdad.value
    let fechaNacimiento=cajaFechaNacimiento.values

    if(nombres=="" || contraseña=="" || correo=="" || edad=="" || fechaNacimiento==""){
        Swal.fire({
  icon: "error",
  title: "Llena los campos vacios",
  text: "Algo anda mal",

  });

}else{
    Swal. fire({
  title: "Bienvenido",
  text: "Lo hiciste bien",
  icon: "success"
   });


    }


});