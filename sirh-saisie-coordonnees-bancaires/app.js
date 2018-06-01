// Fetch API
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
