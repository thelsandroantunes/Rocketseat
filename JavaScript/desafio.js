/* function checaIdade(age) {
     // Retornar uma promise

     var myPromise = new Promise(function(resolve, reject) {
         setTimeout(function() {
             return age >= 18 ? resolve() : reject();
         }, 2000);
     });

     return myPromise;
 }
 checaIdade(15)
     .then(function() {
         console.log("Maior que 18");
     })
     .catch(function() {
         console.log("Menor que 18");
     }); */

var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');

function renderRepositories(repositories) {
    for (repo of repositories) {
        const textElement = document.createTextNode(repo.html_url);
        const liElement = document.createElement('li');

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', repo.html_url + '?files=1');

        var pos = repositories.indexOf(repo);
        linkElement.setAttribute('onclick', pos);

        var linkText = document.createTextNode('Acessar');

        linkElement.appendChild(linkText);

        liElement.appendChild(textElement);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);
    }
}

function listRepositories() {
    var user = inputElement.value;

    if (!user) {
        return;
    }

    axios.get(' https://api.github.com/users/' + user + '/repos')
        .then(function(response) {
            renderRepositories(response.data);
        })

}

//Utilizando API