// Get collaborateurs
fetch('https://vignouds-sgp-api.herokuapp.com/api/collaborateurs')
    .then((resp) => resp.json())
    .then(data => afficher(data))

function afficher(data) {

    var lignes = data.map(unCollab => `
        <tr>
            <td>${unCollab.matricule}</td>
            <td>${unCollab.nom}</td>
            <td>${unCollab.prenom}</td>
        </tr>
    `).join('')

    document.querySelector('#collabs').innerHTML = lignes
}

function sauvegarder() {
  var myInit = {
    method: 'PUT'
  }
  var myBody = {
    banque: document.querySelector('#banque').value,
    bic: document.querySelector('#bic').value,
    iban: document.querySelector('#iban').value
  }
  var myRequest = new Request(myBody, myInit);
  console.log(myBody);
}

document.getElementById('sauvegarder').addEventListener("click", sauvegarder());
