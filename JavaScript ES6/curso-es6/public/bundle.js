"use strict";

var _api = _interopRequireDefault(require("./api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App =
/*#__PURE__*/
function () {
  function App() {
    _classCallCheck(this, App);

    this.repositories = [];
    this.formEl = document.getElementById('repo-form');
    this.inputEl = document.querySelector('input[name=repository]');
    this.listEl = document.getElementById('repo-list');
    this.registerHandlers();
  }

  _createClass(App, [{
    key: "registerHandlers",
    value: function registerHandlers() {
      var _this = this;

      this.formEl.onsubmit = function (event) {
        return _this.addRepository(event);
      };
    }
  }, {
    key: "addRepository",
    value: function () {
      var _addRepository = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(event) {
        var repoInput, response, _response$data, name, description, html_url, avatar_url;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                repoInput = this.inputEl.value;

                if (!(repoInput.lenght === 0)) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                _context.next = 6;
                return _api["default"].get("repos/".concat(repoInput));

              case 6:
                response = _context.sent;
                _response$data = response.data, name = _response$data.name, description = _response$data.description, html_url = _response$data.html_url, avatar_url = _response$data.owner.avatar_url;
                this.repositories.push({
                  name: name,
                  description: description,
                  avatar_url: avatar_url,
                  html_url: html_url
                });
                this.inputEl.value = '';
                this.render();

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function addRepository(_x) {
        return _addRepository.apply(this, arguments);
      }

      return addRepository;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.listEl.innerHTML = '';
      this.repositories.forEach(function (repo) {
        var imgEl = document.createElement('img');
        imgEl.setAttribute('src', repo.avatar_url);
        var titleEl = document.createElement('strong');
        titleEl.appendChild(document.createTextNode(repo.name));
        var descriptionEl = document.createElement('p');
        descriptionEl.appendChild(document.createTextNode(repo.description));
        var linkEl = document.createElement('a');
        linkEl.setAttribute('target', '_blank');
        linkEl.setAttribute('href', repo.html_url);
        linkEl.appendChild(document.createTextNode('Acessar'));
        var listItemEl = document.createElement('li');
        listItemEl.appendChild(imgEl);
        listItemEl.appendChild(titleEl);
        listItemEl.appendChild(descriptionEl);
        listItemEl.appendChild(linkEl);

        _this2.listEl.appendChild(listItemEl);
      });
    }
  }]);

  return App;
}();

new App();
