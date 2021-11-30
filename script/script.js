function ajoute(){
  let table = document.getElementsByName("affichage")[0];
  let infos = document.forms.capteurs;
  let tr = document.createElement('tr');
  console.log(infos.length);
  for (i = 0; i < infos.length - 1; i++){
    let td = document.createElement('td');
    td.textContent = infos[i].value;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
