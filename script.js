//Telefone
document.getElementById("telefone").addEventListener("input", ()=>{
    let tel = document.getElementById("telefone").value;

    if(tel[0]!= "(" && tel[0]!= undefined) {

        document.getElementById("telefone").value = "("+tel[0];

    }if(tel[3]!= ")" && tel[3]!=undefined) {

        document.getElementById("telefone").value = tel.slice(0,3) + ")" + tel[3];

    }if(tel[9]!= "-" && tel[9]!=undefined){

        document.getElementById("telefone").value = tel.slice(0,9) + "-" + tel[9];

    }
});

//CPF
document.getElementById("cpf").addEventListener("input", ()=>{
    let cpf = document.getElementById("cpf").value;

    if(cpf[3]!= "." && cpf[3]!= undefined) {

        document.getElementById("cpf").value =  cpf.slice(0,3)+ "." + cpf[3];

    }if(cpf[7]!= "." && cpf[7]!=undefined) {

        document.getElementById("cpf").value = cpf.slice(0,7) + "." + cpf[7];

    }if(cpf[11]!= "-" && cpf[11]!=undefined){

        document.getElementById("cpf").value = cpf.slice(0,11) + "-" + cpf[11];

    }
});

//CEP
document.getElementById("cep").addEventListener("input", ()=>{
    let cep = document.getElementById("cep").value;

    if(cep[3]!= "." && cep[3]!= undefined) {

        document.getElementById("cep").value =  cep.slice(0,3)+ "." + cep[3];

    }if(cpf[7]!= "." && cpf[7]!=undefined) {

        document.getElementById("cpf").value = cpf.slice(0,7) + "." + cpf[7];

    }if(cpf[11]!= "-" && cpf[11]!=undefined){

        document.getElementById("cpf").value = cpf.slice(0,11) + "-" + cpf[11];

    }
});