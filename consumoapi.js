//PASOS PARA CONSUMIR UN API:

//1. definir un url del api a consumir

//2. configurar la peticion

//3. llamar al FETCH

async function consumirAPI(){
    let url="localhost:8080/usuarios" //pa onde vas
    let peticion={
     method:"POST",
    headers:{},
    body:JSON.stringify()
        
    } // a hacer que?
    let respuestaServidor=await fetch(url, peticion) //el taxi para ir 
    return await respuestaServidor.json()
    
}
