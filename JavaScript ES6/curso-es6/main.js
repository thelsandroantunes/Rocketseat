//REST

const novo = {
    name: 'Thelsandro',
    age: 32,
    empresa: 'Rocketseat'
};

const { name, ...resto } = novo;

console.log(name);


//SPREAD
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);


const usuario1 = {
    nome: 'Mahdi',
    idade: 6997,
    empresa: 'Rocketseat',
};

const usuario2 = {...usuario1, nome: 'Thelsandro' };

console.log(usuario2);

const n = "Thel";
const i = 32;

console.log(`Meu nome eh ${n} e minha idade eh ${i}`);



/*const user = {
    name: 'Thelsandro',
    age: 32,
    address: {
        city: 'Manaus',
        country: 'AM',
    },
};

function showName({ name, age }) {
    console.log(name, age);

}

showName(user);

const array = [1, 3, 6, 7, 9];

const newArray = array.map(item => item * 2);

console.log(newArray);

const teste = () => {
    return "testing";
}

console.log(teste());*/


/*class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);

    }
}


class TodoList extends List {
    constructor() {
        super();

        this.usuario = 'Thelsandro';
    }

    mostraUsuario() {
        console.log(this.usuario);

    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add(' Novo todo');
}


MinhaLista.mostraUsuario();*/
/*
const arr = [1, 3, 6, 7, 9];

const newArr = arr.map(function(item, index) {
    return item + index;
});

console.log(newArr);


const sum = arr.reduce(function(total, next) {
    return total + next;
});

console.log(sum);

const filter = arr.filter(function(item) {
    return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(item) {
    return item === 6;
});

console.log(find); */