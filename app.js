// classes ES6 player
class Player {
    constructor(firstname, lastname, position) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.position = position;
    }
}

class Utilisateur {
    // Fonction pour ajouter les players
    addPlayerToList(player){
        // Selectionne id du tbody
        const list = document.getElementById('player-list');
        // créer un tr 
        const row = document.createElement('tr');
        row.innerHTML =` 
        <td>${player.firstname}</td>
        <td>${player.lastname}</td>
        <td>${player.position}</td>
        <td><a href="#" class="delete">effacé</a></td>`;
        // Join le tr à player-list
        list.appendChild(row);
    }
    
    showAlert(message, className) {
        // crée div
        const div = document.createElement('div');
        // ajoute la classe
        div.className =`alert ${className}`;
        // ajoute le text 
        div.appendChild(document.createTextNode(message));
        // parent
        const plante = document.querySelector('.plante');
        // form
        const form = document.querySelector('#player-form');
        // insère l'alerte
        plante.insertBefore(div,form);
        //setTime out après 3 secondes
        setTimeout(function(){
            document.querySelector('.alert').remove();
        },3000);

    } 

    clearInput(){
        document.getElementById('firstname').value = '';
        document.getElementById('lastname').value = '';
        document.getElementById('position').value = '';
    }

    deletePlayer(target){
        if(target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }
}

//Event listener pour Ajouter avec un submit
document.getElementById('player-form').addEventListener('submit', function(e){
    //récupère les valeurs des inputs
    const firstname = document.getElementById('firstname').value,
     lastname = document.getElementById('lastname').value,
     position=document.getElementById('position').value

    //créer un nouvel Objet
    const player = new Player(firstname, lastname, position);
    console.log(player);
    
    const utilisateur = new Utilisateur;
           
    // Validation
    if(firstname === ''|| lastname ==='' || position === ''){
        // Erreur
        utilisateur.showAlert('Ajouter un joueur svp','error');
    } else {
         //Ajoute un joueur
         utilisateur.addPlayerToList(player);
         //Message de confirmation
         utilisateur.showAlert('le joueur a été ajouté', 'success');
         //Efface les inputs après le submit
         utilisateur.clearInput();

        }
    
    e.preventDefault();
});

document.getElementById('player-list').addEventListener('click', function(e){
    
    const utilisateur = new Utilisateur();
    // Delete Player
    utilisateur.deletePlayer(e.target);
    //alerte message
    utilisateur.showAlert('le joueur a été supprimé','success');

    e.preventDefault();
})