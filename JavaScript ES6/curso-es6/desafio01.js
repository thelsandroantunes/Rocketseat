class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    isAdmin() {
        return this.admin === true;
    }
};

class Admin extends User {
    constructor(email, password) {
        super(email, password);

        this.admin = true;
    }
};

const User1 = new User('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true


/********************************************* */

const usuarios = [
    { nome: 'Thelsandro', idade: 32, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];


const newArr = usuarios.map(function(item) {
    return item.idade;
});

console.log(newArr);

const filter = usuarios.filter(function(item) {
    return item.idade > 18 && item.empresa === 'Rocketseat';
});

console.log(filter);


const find = usuarios.find(function(item) {
    return item.empresa === 'Google';
});

console.log(find);

const calculo = usuarios
    .map(usuario => ({...usuario, idade: usuario.idade * 2 }))
    .filter(usuario => usuario.idade <= 50);

console.log(calculo);

/***************************************************** */


// 3.1

const arr = [1, 2, 3, 4, 5];

arr.map(item => item + 10);

// 3.2

const usuario = { nome: "Thelsandro", idade: 32 };

const mostraIdade = usuario => usuario.idade;

mostraIdade(usuario);

// 3.3

const nome = "Thelsandro";
const idade = 32;

const mostraUsuario = (nome = "Thelsandro", idade = 18) => ({
    nome,
    idade
});

mostraUsuario(nome, idade);
mostraUsuario(nome);

// 3.4

const promise = () => new Promise((resolve, reject) => resolve());


/************************************* */
// 4.1

const empresa = {
    teste: 'Rocketseat',
    endereco: {
        cidade: 'Amazonas',
        estado: 'AM'
    }
};

const { teste, endereco: { cidade, estado } } = empresa;

console.log(teste); // Rocketseat
console.log(cidade); // Amazonas
console.log(estado); // AM

// 4.2

function mostraInfo({ name, age }) {
    return `${name} tem ${age} anos.`;
}

mostraInfo({ name: "Thelsandro", age: 32 });

/*************************************** */

// 5.1 A

const vetor = [1, 2, 3, 4, 5, 6];

const [x, ...y] = vetor;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

// 5.1 B

function soma(...nums) {
    return nums.reduce((a, b) => a + b);
}

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

// 5.2

const person = {
    nome: "Thelsandro",
    idade: 32,
    endereco: {
        cidade: "Amazonas",
        uf: "AM",
        pais: "Brasil"
    }
};

const person2 = {...person, nome: "Gabriel" };
const person3 = {
    ...person,
    endereco: {...person.endereco, cidade: "Lontras" }
};

/************************************* */

//6

const pessoa = "Thelsandro";
const personAge = 32;

console.log(`O usuário ${pessoa} possui ${personAge} anos`);

/********************************* */

const N = "Thelsandro";
const A = 32;

const U = {
    N,
    A,
    cidade: "Amazonas"
};