const btn = document.getElementById("enviar");
const msg = document.getElementById("msg").style.display = "none";
const msg2 = document.getElementById("msg2").style.display = "none";
const msg3 = document.getElementById("msg3").style.display = "none";
 

btn.addEventListener("click", function (e) {
    e.preventDefault()

    const nome = document.getElementById("nome");
    convidado = nome.value.trim()
    
    
    function buscaBinaria(convidado) {
    let umVetor = ["caio bruno","joao magno","gilberto pedro","gabriel felipe","maria aparecida","maria alice","claudio dos santos"]
    let prim = 0;
    let ult = umVetor.length - 1;
    let achou = false;
   
       
  
       
 

    while (prim <= ult && !achou) {

        meioLista = Math.round((prim + ult - 0.3) / 2) ;
        

        if (umVetor[meioLista] == convidado) {
            achou = true;

         
        }
        else {
            if (convidado < umVetor[meioLista]) {
                ult = meioLista - 1;
                console.log(umVetor[meioLista])
                
            }
            else {
                prim = meioLista + 1;
                console.log(umVetor[meioLista])
            }
     
        }
        
     
      
        }

        // let nome = document.getElementById("nome").value;

        console.log(convidado.trim() + "log")
        
       

        if (convidado == "") {
            let x1 = document.getElementById("msg3");

            x1.style.display = "block";
            setTimeout(function () {
            x1.style.display = "none";
            }, 5000);
            document.getElementById("nome").value = "";
        }
        

         // convite verificado! boa festa! 
        
        if (achou == true != "") {
            let x1 = document.getElementById("msg");

            x1.style.display = "block";
            setTimeout(function () {
            x1.style.display = "none";
            }, 5000);
            document.getElementById("nome").value = "";
        }

        if (achou == false ) {
        
        // const msg = document.querySelector("#msg").style.display = "initial"
        let x = document.getElementById("msg2");

        x.style.display = "block";
        setTimeout(function () {
            x.style.display = "none";
            document.getElementById("nome").value = "";
        }, 5000);
        }


       

    let index = umVetor.indexOf(convidado)
    
    return {
        encontrado: achou,
        indice: index,
        elemento:convidado
        }
        
    

   
    }


    console.log(buscaBinaria(convidado))
   
})

    
    
        







