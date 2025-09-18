//Telefone
document.getElementById("telefone").addEventListener("input", ()=>{
    let tel = document.getElementById("telefone").value;

    if(tel[0]!= "(" && tel[0]!= undefined) {

        document.getElementById("telefone").value = "("+tel[0];

    }if(tel[3]!= ")" && tel[3]!=undefined) {

        document.getElementById("telefone").value = tel.slice(0,3) + ")" + tel[3];

    }if(tel[4]!= " " && tel[4]!=undefined) {

        document.getElementById("telefone").value = tel.slice(0,4) + " " + tel[4];

    }if(tel[6]!= " " && tel[6]!=undefined) {

        document.getElementById("telefone").value = tel.slice(0,6) + " " + tel[6];

    }if(tel[11]!= "-" && tel[11]!=undefined){

        document.getElementById("telefone").value = tel.slice(0,11) + "-" + tel[11];

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

    if(cep[2]!= "." && cep[2]!= undefined) {

        document.getElementById("cep").value =  cep.slice(0,2)+ "." + cep[2];

    }if(cep[6]!= "-" && cep[6]!=undefined) {

        document.getElementById("cep").value = cep.slice(0,6) + "-" + cep[6];

    }
});

//CNPJ
document.getElementById("cnpj").addEventListener("input", ()=>{
    let cnpj = document.getElementById("cnpj").value;

    if(cnpj[2]!= "." && cnpj[2]!= undefined) {

        document.getElementById("cnpj").value =  cnpj.slice(0,2)+ "." + cnpj[2];

    }if(cnpj[6]!= "." && cnpj[6]!=undefined) {

        document.getElementById("cnpj").value = cnpj.slice(0,6) + "." + cnpj[6];

    }if(cnpj[10]!= "/" && cnpj[10]!=undefined) {

        document.getElementById("cnpj").value = cnpj.slice(0,10) + "/" + cnpj[10];

    }if(cnpj[15]!= "-" && cnpj[15]!=undefined) {

        document.getElementById("cnpj").value = cnpj.slice(0,15) + "-" + cnpj[15];

    }
});

//Codigo
document.getElementById("codigo").addEventListener("input", ()=>{
    let codigo = document.getElementById("codigo").value;

    if(codigo[2]!= "_" && codigo[2]!= undefined) {

        document.getElementById("codigo").value = codigo.slice(0,2)+ "_" + codigo[2];

    }if(codigo[5]!= "/" && codigo[5]!=undefined) {

        document.getElementById("codigo").value = codigo.slice(0,5) + "//" + codigo[5];

    }if(codigo[10]!= "-" && codigo[10]!=undefined) {

        document.getElementById("codigo").value = codigo.slice(0,10) + "-" + codigo[10];

    }if(codigo[14]!= "." && codigo[14]!=undefined) {

        document.getElementById("codigo").value = codigo.slice(0,14) + "." + codigo[14];

    }if(codigo[15]!= "9" && codigo[15]!=undefined) {

        document.getElementById("codigo").value = codigo.slice(0,15) + "9" + codigo[15];

    }if(codigo[16]!= "." && codigo[16]!=undefined) {

        document.getElementById("codigo").value = codigo.slice(0,16) + "." + codigo[16];
    }
});

function alertar() {
    alert("Formulário enviado com sucesso!")
    console.log("Formuláro enviado com sucesso!")
}