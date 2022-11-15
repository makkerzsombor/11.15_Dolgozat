import './style.css';
    
    // Feladat 1:
    document.getElementById('osszes').addEventListener('click', async () => {
        let response = await fetch('quotes.json');
        let eredmeny = await response.json();
        console.log('elso fel gomb');

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
