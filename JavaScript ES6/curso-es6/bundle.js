"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

//REST
var novo = {
  name: 'Thelsandro',
  age: 32,
  empresa: 'Rocketseat'
};

var name = novo.name,
    resto = _objectWithoutProperties(novo, ["name"]);

console.log(name); //SPREAD

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [].concat(arr1, arr2);
console.log(arr3);
var usuario1 = {
  nome: 'Mahdi',
  idade: 6997,
  empresa: 'Rocketseat'
};

var usuario2 = _objectSpread({}, usuario1, {
  nome: 'Thelsandro'
});

console.log(usuario2);
var n = "Thel";
var i = 32;
console.log("Meu nome eh ".concat(n, " e minha idade eh ").concat(i));
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
