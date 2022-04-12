function adicionar(){
   
    let text = document.getElementById("texto").value;
    let list = document.getElementById("lista").innerHTML;

    list += text
    document.getElementById("lista").innerHTML = list;

}