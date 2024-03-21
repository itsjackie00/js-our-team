// alert('funziona');

/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
BONUS 3:
Permettere l'aggiunta di un nuovo membro del team
*/


/* Team Array */
let team = [
    {
        'name': 'Wayne',
        'lastname': 'Barnett',
        'role': 'Founder & CEO',
        'img': 'wayne-barnett-founder-ceo.jpg'
    },
    {
        'name': 'Angela',
        'lastname': 'Caroll',
        'role': 'Chief Editor',
        'img': 'angela-caroll-chief-editor.jpg'

    },
    {
        'name': 'Walter',
        'lastname': 'Gordon',
        'role': 'Office Manager',
        'img': 'walter-gordon-office-manager.jpg'
    },
    {
        'name': 'Angela',
        'lastname': 'Lopez',
        'role': 'Social Media Manager',
        'img': 'angela-lopez-social-media-manager.jpg'
    },
    {
        'name': 'Scott',
        'lastname': 'Estrada',
        'role': 'Developer',
        'img': 'scott-estrada-developer.jpg'
    },
    {
        'name': 'Barbara',
        'lastname': 'Ramos',
        'role': 'Graphic Designer',
        'img': 'barbara-ramos-graphic-designer.jpg'
    },
]
console.log(team);


for (let i = 0; i < team.length; i++) {
    const row = document.querySelector('.row');
    const card = document.createElement('div');
    card.classList.add('col');
    //console.log(card);

    card.innerHTML = `
    <img src="img/${team[i].img}"> <br>
    ${team[i].name} ${team[i].lastname} <br>
     ${team[i].role}
    `;

    row.append(card);
}

const buttonAdd = document.querySelector('.btn.btn-primary');

// funzione per aggiungere un nuovo membro
buttonAdd.addEventListener('click', addMember);
function addMember (){
const formEl = document.getElementById('form');
formEl.classList.remove('d-none');
}

const buttonSubmit = document.querySelector('.btn.btn-success');

// funzione per prendere i valori
buttonSubmit.addEventListener('click', (e)=>{
    e.preventDefault();
        const nameVal = document.getElementById('name').value;
        const lastNameVal = document.getElementById('lastname').value;
        const roleVal = document.getElementById('role').value;
        const imageVal = document.getElementById('images').value;
        //console.log(nameVal);

        // nuovo membro
        const newMember = {
            'name' : nameVal,
            'lastname' : lastNameVal,
            'role' : roleVal,
            'img' : imageVal 
        }
        team.push(newMember);
});
