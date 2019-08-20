/* // Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

function umPorSegundo() {
    delay().then(() => {
        console.log('1s');
        delay().then(() => {
            console.log('2s');
            delay().then(() => {
                console.log('3s');
            });
        })
    });
}
umPorSegundo(); */

var timer_interval = performance.now();

const novoDelay = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('s');
        }, 1000);
    });
}

async function exeDelay() {
    console.log('1' + await novoDelay());
    console.log('2' + await novoDelay());
    console.log('3' + await novoDelay());
}

//exeDelay();

import axios from 'axios';

function getUserFromGithub(user) {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Usuário não existe');
        })
}
//getUserFromGithub('diego3g');
//getUserFromGithub('diego3g124123');

class ApiGit {
    static async getUserFromGithub(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch {
            console.log('Erro na Api Git');

        }
    }
}

//ApiGit.getUserFromGithub('rocketseat');
//ApiGit.getUserFromGithub('LuizGlomyer');


class Github {
    static getRepositories(repo) {
        axios.get(`https://api.github.com/users/${repo}/repos`)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log('Repositório não existe');
            })
    }
}
//Github.getRepositories('Rocketseat');
//Github.getRepositories('rocketseat/dslkvmskv');

class APIGitHub {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/users/${repo}/repos`);
            console.log(response);
        } catch {
            console.log('Erro na Api GitHub');

        }
    }
}

//APIGitHub.getRepositories('Rocketseat');

const buscaUsuario = usuario => {
        axios.get(`https://api.github.com/users/${user}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log('Usuário não existe');
            });
    }
    //buscaUsuario('diego3g');

// D

const buscaUsuario = async usuario => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`);

        console.log(response.data);
    } catch (err) {
        console.log("Usuário não existe");
    }
};

buscaUsuario("thelsandroantunes");

/*import axios from 'axios';
class API {
    static async getUSerInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch {
            console.log('ERRO NA API ');

        }
    }
}

API.getUSerInfo('thelsandroantunes');
var divElement = document.getElementById('app');
var btnElement = document.createElement('button');
var txtButton = document.createTextNode("Click Me!");
btnElement.appendChild(txtButton);


divElement.appendChild(btnElement);
console.log('Vai ' + btnElement);*/



/*const myPromise = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("OK!"), 2000)
    });
}

async function exePromise() {

    console.log(await myPromise());
    console.log(await myPromise());
    console.log(await myPromise());
}

exePromise();

async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 2000)
    });

    let result = await promise; // wait till the promise resolves (*)
    console.log(result);
    console.log(result);
    console.log(result);
    alert(result); // "done!"
}

f();*/