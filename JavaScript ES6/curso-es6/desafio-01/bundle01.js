"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var User =
/*#__PURE__*/
function () {
  function User(email, password) {
    _classCallCheck(this, User);

    this.email = email;
    this.password = password;
  }

  _createClass(User, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin === true;
    }
  }]);

  return User;
}();

;

var Admin =
/*#__PURE__*/
function (_User) {
  _inherits(Admin, _User);

  function Admin(email, password) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, email, password));
    _this.admin = true;
    return _this;
  }

  return Admin;
}(User);

;
var User1 = new User('email@teste.com', 'senha123');
var Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()); // false

console.log(Adm1.isAdmin()); // true

/********************************************* */

var usuarios = [{
  nome: 'Thelsandro',
  idade: 32,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var newArr = usuarios.map(function (item) {
  return item.idade;
});
console.log(newArr);
var filter = usuarios.filter(function (item) {
  return item.idade > 18 && item.empresa === 'Rocketseat';
});
console.log(filter);
var find = usuarios.find(function (item) {
  return item.empresa === 'Google';
});
console.log(find);
var calculo = usuarios.map(function (usuario) {
  return _objectSpread({}, usuario, {
    idade: usuario.idade * 2
  });
}).filter(function (usuario) {
  return usuario.idade <= 50;
});
console.log(calculo);
/***************************************************** */
// 3.1

var arr = [1, 2, 3, 4, 5];
arr.map(function (item) {
  return item + 10;
}); // 3.2

var usuario = {
  nome: "Thelsandro",
  idade: 32
};

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
};

mostraIdade(usuario); // 3.3

var nome = "Thelsandro";
var idade = 32;

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Thelsandro";
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

mostraUsuario(nome, idade);
mostraUsuario(nome); // 3.4

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};
/************************************* */
// 4.1


var empresa = {
  teste: 'Rocketseat',
  endereco: {
    cidade: 'Amazonas',
    estado: 'AM'
  }
};
var teste = empresa.teste,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(teste); // Rocketseat

console.log(cidade); // Amazonas

console.log(estado); // AM
// 4.2

function mostraInfo(_ref) {
  var name = _ref.name,
      age = _ref.age;
  return "".concat(name, " tem ").concat(age, " anos.");
}

mostraInfo({
  name: "Thelsandro",
  age: 32
});
/*************************************** */
// 5.1 A

var vetor = [1, 2, 3, 4, 5, 6];
var x = vetor[0],
    y = vetor.slice(1);
console.log(x); // 1

console.log(y); // [2, 3, 4, 5, 6]
// 5.1 B

function soma() {
  for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {
    nums[_key] = arguments[_key];
  }

  return nums.reduce(function (a, b) {
    return a + b;
  });
}

console.log(soma(1, 2, 3, 4, 5, 6)); // 21

console.log(soma(1, 2)); // 3
// 5.2

var person = {
  nome: "Thelsandro",
  idade: 32,
  endereco: {
    cidade: "Amazonas",
    uf: "AM",
    pais: "Brasil"
  }
};

var person2 = _objectSpread({}, person, {
  nome: "Gabriel"
});

var person3 = _objectSpread({}, person, {
  endereco: _objectSpread({}, person.endereco, {
    cidade: "Lontras"
  })
});
/************************************* */
//6


var pessoa = "Thelsandro";
var personAge = 32;
console.log("O usu\xE1rio ".concat(pessoa, " possui ").concat(personAge, " anos"));
/********************************* */

var N = "Thelsandro";
var A = 32;
var U = {
  N: N,
  A: A,
  cidade: "Amazonas"
};
