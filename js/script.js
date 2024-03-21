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
        'lastname' : 'Barnett',
        'role' : 'Founder & CEO',
        'img' : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        'name': 'Angela',
        'lastname' : 'Caroll',
        'role' : 'Chief Editor',
        'img' : 'angela-caroll-chief-editor.jpg'

    },
    {
        'name': 'Walter',
        'lastname' : 'Gordon',
        'role' : 'Office Manager',
        'img' : 'walter-gordon-office-manager.jpg'
    },
    {
        'name': 'Angela',
        'lastname' : 'Lopez',
        'role' : 'Social Media Manager',
        'img' : 'angela-lopez-social-media-manager.jpg'
    },
    {
        'name': 'Scott',
        'lastname' : 'Estrada',
        'role' : 'Developer',
        'img' : 'scott-estrada-developer.jpg'
    },
    {
        'name': 'Barbara',
        'lastname' : 'Ramos',
        'role' : 'Graphic Designer',
        'img' : 'barbara-ramos-graphic-designer.jpg'
    },
]
console.log(team);