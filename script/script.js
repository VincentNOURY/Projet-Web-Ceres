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

function getMeteo(){
  fetch("http://www.infoclimat.fr/public-api/gfs/json\
    ?_ll=48.85341,2.3488&_auth=AhhTRFMtBCYDLgA3D3lReFI6BjMPeQMkVysKaVo%2FUy4DaA\
    BhAWFTNQdpUC0HKAo8V3pXNAE6AzNTOAN7CHpXNgJoUz9TOARjA2wAZQ8gUXpSfAZnDy8DJFc8C\
    m9aKVM2A2UAegFjUzIHbVAsBzYKNldlVygBIQM6UzYDZwhhVzMCYFMzUzgEbwNkAH0PIFFjUmAG\
    YA9mA2hXMQpsWjVTZQNmADcBYFM0B2BQLAc2CjxXYlcxATwDPlM2A2wIelcrAhhTRFMtBCYDLgA\
    3D3lReFI0BjgPZA%3D%3D&_c=bc0b6c355d4a1f89b826625db56f406f")
    .then((response) => response,json()).then(furction(data){
    //define table with the data collected
  })
}

getMeteo();

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function time(){
  await sleep(1);
  while (true){
    date = new Date();
    str = date.getHours() + " h " + date.getMinutes() + " m " + date.getSeconds() + " s";
    document.querySelector("#time").innerHTML = str;
    await sleep(1000);
  }
}

time();
