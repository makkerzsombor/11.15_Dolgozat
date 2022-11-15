import './style.css';
    
// Feladat 1:
document.getElementById('osszes').addEventListener('click', async () => {
    let response = await fetch('quotes.json');
    let eredmeny = await response.json();
    // sorrend:
    let abc = eredmeny.quotes.sort(function(a, b){
        let anev = a.author.toUpperCase();
        let bnev = b.author.toUpperCase();

        if(anev < bnev){
            return -1;
        }else if(anev > bnev){
            return 1;
        }else {
            return 0;
        }
    });
    // kiiratas:
    let quoteLista = document.getElementById('listaUl');
    for (let q of abc){
        let li = document.createElement('li');
        li.textContent = q.id + ' ' + q.quote + ' ' + q.author;
        quoteLista.appendChild(li);
    }
});
// Feladat 2:
let lista = [];
document.getElementById('the').addEventListener('click', async () => {
    let response = await fetch('quotes.json');
    let eredmeny = await response.json();

    // tombe rakas:
    for(let e of eredmeny.quotes){
        let line = e.quote;
        line = line.replaceAll('The ' , '<b>The </b>');
        line = line.replaceAll(' the ' , '<b> the </b>');
        lista.push(line)

    }

    // kiiratas:
    let quoteLista = document.getElementById('listaOl');
    for (let l of lista){
        let li = document.createElement('li');
        li.innerHTML = l;
        quoteLista.appendChild(li);
    }
});
// Feladat 3:
let szamLista = [];
document.getElementById('hossz').addEventListener('click', async () => {
    let response = await fetch('quotes.json');
    let eredmeny = await response.json();

    for(let e of eredmeny.quotes){
        let szam = parseInt(e.quote.length);
        szamLista.push(szam);
        szamLista.join(',');
    }
    // Kiiratas:
    document.getElementById('paragrafus').textContent = szamLista;
});
// Feladat 4:
document.getElementById('darabszam').addEventListener('click', async () => {
    let response = await fetch('quotes.json');
    let eredmeny = await response.json();

    let szerzoNev = document.getElementById('szerzo').value;
    
});
