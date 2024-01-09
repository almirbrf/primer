function buscar() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let busca = document.getElementsByClassName('item');
      
    for (i = 0; i < busca.length; i++) { 
        if (!busca[i].innerHTML.toLowerCase().includes(input)) {
            busca[i].style.display="none";
        }
        else {
            busca[i].style.display="list-item";                 
        }
    }
}