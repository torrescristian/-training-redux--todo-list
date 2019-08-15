(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-todo></app-todo>\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"info\">\n    <p>Double-click para editar un TODO</p>\n    <!-- Remove the below line ↓ -->\n    <p>Template creado por <a href=\"http://sindresorhus.com\">Sindre Sorhus</a></p>\n    <!-- Change this out with your name and url ↓ -->\n    <p>Editado por <a href=\"https://github.com/torrescristian\">Cristian Tomas Torres</a></p>\n    <p>Parte de <a href=\"http://todomvc.com\">TodoMVC</a></p>\n</footer>\n      "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/todo/todo-add/todo-add.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/todo/todo-add/todo-add.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n    <h1>Por hacer</h1>\n    <input class=\"new-todo\"\n        placeholder=\"Qué se necesita hacer?\"\n        [formControl]=\"txtInput\"\n        (keyup.enter)=\"agregarTodo()\" \n        autofocus>\n</header>\n "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/todo/todo-footer/todo-footer.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/todo/todo-footer/todo-footer.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- This footer should hidden by default and shown when there are todos -->\n<footer class=\"footer\">\n<!-- This should be `0 items left` by default -->\n<span class=\"todo-count\"><strong>{{ pendientes }}</strong> tareas pendientes</span>\n<!-- Remove this if you don't implement routing -->\n<ul class=\"filters\">\n    <li (click)=\"cambiarFiltro(filtro)\"\n        *ngFor=\"let filtro of filtrosValidos\">\n        <!-- class=\"selected\" -->\n        <a [ngClass]=\"{'selected': filtro === filtroActual }\">\n            {{ filtro }}\n        </a>\n    </li>\n</ul>\n<!-- Hidden if no completed items are left ↓ -->\n<button (click)=\"borrarAll()\" class=\"clear-completed\">limpiar completados</button>\n</footer>\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/todo/todo-item/todo-item.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/todo/todo-item/todo-item.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- List items should get the class `editing` when editing and `completed` when marked as completed -->\n<li [ngClass]=\"{'completed': todo.completado,\n                'editing': editando}\">\n    <div class=\"view\">\n    <input class=\"toggle\"\n        type=\"checkbox\"\n        [formControl]=\"chkField\"\n        [checked]=\"todo.completado\"\n    >\n    <label (dblclick)=\"editar()\">{{ todo.texto }}</label>\n    <button class=\"destroy\" (click)=\"borrar()\"></button>\n    </div>\n    <input class=\"edit\"\n        value=\"todo.texto\"\n        [formControl]=\"txtInput\"\n        (blur)=\"terminarEdicion()\"\n        #txtInputFisico\n    >\n</li>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/todo/todo.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/todo/todo.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"todoapp\">\n  \n    <app-todo-add></app-todo-add>\n    \n    <!-- This section should be hidden by default and shown when there are todos -->\n    <section class=\"main\">\n        <input id=\"toggle-all\" class=\"toggle-all\" type=\"checkbox\">\n        <label (click)=\"toggleAll()\" for=\"toggle-all\">Mark all as complete</label>\n        \n        <app-todos-list></app-todos-list>\n    \n    </section>\n    \n    <app-todo-footer></app-todo-footer>\n    \n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/todo/todos-list/todos-list.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/todo/todos-list/todos-list.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"todo-list\">\n    <app-todo-item [todo]=\"todo\" *ngFor=\"let todo of todos | filterTodo: filtro\"></app-todo-item>\n</ul>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'todoapp';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
/* harmony import */ var _app_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.reducers */ "./src/app/app.reducers.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
/* harmony import */ var _todo_todos_list_todos_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./todo/todos-list/todos-list.component */ "./src/app/todo/todos-list/todos-list.component.ts");
/* harmony import */ var _todo_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./todo/todo-item/todo-item.component */ "./src/app/todo/todo-item/todo-item.component.ts");
/* harmony import */ var _todo_todo_footer_todo_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./todo/todo-footer/todo-footer.component */ "./src/app/todo/todo-footer/todo-footer.component.ts");
/* harmony import */ var _todo_todo_add_todo_add_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./todo/todo-add/todo-add.component */ "./src/app/todo/todo-add/todo-add.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _filter_filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./filter/filter.pipe */ "./src/app/filter/filter.pipe.ts");



// ngrx



// Forms










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
            _todo_todo_component__WEBPACK_IMPORTED_MODULE_9__["TodoComponent"],
            _todo_todos_list_todos_list_component__WEBPACK_IMPORTED_MODULE_10__["TodosListComponent"],
            _todo_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_11__["TodoItemComponent"],
            _todo_todo_footer_todo_footer_component__WEBPACK_IMPORTED_MODULE_12__["TodoFooterComponent"],
            _todo_todo_add_todo_add_component__WEBPACK_IMPORTED_MODULE_13__["TodoAddComponent"],
            _filter_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["FilterPipe"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot(_app_reducers__WEBPACK_IMPORTED_MODULE_5__["appReducers"]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
                logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].production,
            }),
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.reducers.ts":
/*!*********************************!*\
  !*** ./src/app/app.reducers.ts ***!
  \*********************************/
/*! exports provided: appReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducers", function() { return appReducers; });
/* harmony import */ var _todo_todo_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo/todo.reducers */ "./src/app/todo/todo.reducers.ts");
/* harmony import */ var _filter_filter_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter/filter.reducers */ "./src/app/filter/filter.reducers.ts");


const appReducers = {
    todos: _todo_todo_reducers__WEBPACK_IMPORTED_MODULE_0__["todoReducer"],
    filtro: _filter_filter_reducers__WEBPACK_IMPORTED_MODULE_1__["filtroReducer"],
};


/***/ }),

/***/ "./src/app/filter/filter.actions.ts":
/*!******************************************!*\
  !*** ./src/app/filter/filter.actions.ts ***!
  \******************************************/
/*! exports provided: SET_FILTRO, SetFiltroAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FILTRO", function() { return SET_FILTRO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetFiltroAction", function() { return SetFiltroAction; });
const SET_FILTRO = '[Filter] set Filtro';
class SetFiltroAction {
    constructor(filtro) {
        this.filtro = filtro;
        this.type = SET_FILTRO;
    }
}
SetFiltroAction.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/filter/filter.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/filter/filter.pipe.ts ***!
  \***************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterPipe = class FilterPipe {
    transform(todos, filter) {
        switch (filter) {
            case 'completados':
                return todos.filter(todo => todo.completado);
            case 'pendientes':
                return todos.filter(todo => !todo.completado);
            case 'todos':
                return todos;
        }
    }
};
FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterTodo'
    })
], FilterPipe);



/***/ }),

/***/ "./src/app/filter/filter.reducers.ts":
/*!*******************************************!*\
  !*** ./src/app/filter/filter.reducers.ts ***!
  \*******************************************/
/*! exports provided: filtroReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filtroReducer", function() { return filtroReducer; });
/* harmony import */ var _filter_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.actions */ "./src/app/filter/filter.actions.ts");

const estadoInicial = 'completados';
function filtroReducer(state = estadoInicial, action) {
    switch (action.type) {
        case _filter_actions__WEBPACK_IMPORTED_MODULE_0__["SET_FILTRO"]:
            return action.filtro;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html")
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/todo/model/todo.model.ts":
/*!******************************************!*\
  !*** ./src/app/todo/model/todo.model.ts ***!
  \******************************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
class Todo {
    constructor(texto) {
        this.texto = texto.charAt(0).toUpperCase() + texto.slice(1);
        this.completado = false;
        this.id = Math.random();
    }
}
Todo.ctorParameters = () => [
    { type: String }
];


/***/ }),

/***/ "./src/app/todo/todo-add/todo-add.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/todo/todo-add/todo-add.component.ts ***!
  \*****************************************************/
/*! exports provided: TodoAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoAddComponent", function() { return TodoAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../todo.actions */ "./src/app/todo/todo.actions.ts");





let TodoAddComponent = class TodoAddComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.txtInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
    }
    agregarTodo() {
        if (this.txtInput.invalid)
            return;
        const accion = new _todo_actions__WEBPACK_IMPORTED_MODULE_4__["AgregarTodoAction"](this.txtInput.value);
        this.store.dispatch(accion);
        this.txtInput.setValue('');
    }
};
TodoAddComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
TodoAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo-add',
        template: __webpack_require__(/*! raw-loader!./todo-add.component.html */ "./node_modules/raw-loader/index.js!./src/app/todo/todo-add/todo-add.component.html")
    })
], TodoAddComponent);



/***/ }),

/***/ "./src/app/todo/todo-footer/todo-footer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/todo/todo-footer/todo-footer.component.ts ***!
  \***********************************************************/
/*! exports provided: TodoFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoFooterComponent", function() { return TodoFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _filter_filter_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../filter/filter.actions */ "./src/app/filter/filter.actions.ts");
/* harmony import */ var _todo_todo_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../todo/todo.actions */ "./src/app/todo/todo.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");





let TodoFooterComponent = class TodoFooterComponent {
    constructor(store) {
        this.store = store;
        this.filtrosValidos = ['todos', 'completados', 'pendientes'];
    }
    ngOnInit() {
        this.store.subscribe(state => {
            this.contarPendientes(state.todos);
            this.filtroActual = state.filtro;
        });
    }
    cambiarFiltro(nuevoFiltro) {
        const accion = new _filter_filter_actions__WEBPACK_IMPORTED_MODULE_2__["SetFiltroAction"](nuevoFiltro);
        this.store.dispatch(accion);
    }
    contarPendientes(todos) {
        this.pendientes = todos.filter(todo => !todo.completado).length;
    }
    borrarAll() {
        const accion = new _todo_todo_actions__WEBPACK_IMPORTED_MODULE_3__["BorrarAllTodoAction"]();
        this.store.dispatch(accion);
    }
};
TodoFooterComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
];
TodoFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo-footer',
        template: __webpack_require__(/*! raw-loader!./todo-footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/todo/todo-footer/todo-footer.component.html")
    })
], TodoFooterComponent);



/***/ }),

/***/ "./src/app/todo/todo-item/todo-item.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/todo/todo-item/todo-item.component.ts ***!
  \*******************************************************/
/*! exports provided: TodoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function() { return TodoItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../todo.actions */ "./src/app/todo/todo.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");





let TodoItemComponent = class TodoItemComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.chkField = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.todo.completado);
        this.txtInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.todo.texto, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.chkField.valueChanges.subscribe(valor => {
            const accion = new _todo_actions__WEBPACK_IMPORTED_MODULE_3__["ToggleTodoAction"](this.todo.id);
            this.store.dispatch(accion);
        });
    }
    editar() {
        this.editando = true;
        setTimeout(() => {
            this.txtInputFisico.nativeElement.select();
        }, 1);
    }
    terminarEdicion() {
        this.editando = false;
        if (this.txtInput.invalid)
            return;
        if (this.txtInput.value === this.todo.texto)
            return;
        const accion = new _todo_actions__WEBPACK_IMPORTED_MODULE_3__["EditarTodoAction"](this.todo.id, this.txtInput.value);
        this.store.dispatch(accion);
    }
    borrar() {
        const accion = new _todo_actions__WEBPACK_IMPORTED_MODULE_3__["BorrarTodoAction"](this.todo.id);
        this.store.dispatch(accion);
    }
};
TodoItemComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TodoItemComponent.prototype, "todo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('txtInputFisico', { static: true })
], TodoItemComponent.prototype, "txtInputFisico", void 0);
TodoItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo-item',
        template: __webpack_require__(/*! raw-loader!./todo-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/todo/todo-item/todo-item.component.html")
    })
], TodoItemComponent);



/***/ }),

/***/ "./src/app/todo/todo.actions.ts":
/*!**************************************!*\
  !*** ./src/app/todo/todo.actions.ts ***!
  \**************************************/
/*! exports provided: AGREGAR_TODO, TOGGLE_TODO, TOGGLE_ALL_TODO, EDITAR_TODO, BORRAR_TODO, BORRAR_ALL_TODO, AgregarTodoAction, ToggleTodoAction, ToggleAllTodoAction, EditarTodoAction, BorrarTodoAction, BorrarAllTodoAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGREGAR_TODO", function() { return AGREGAR_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_TODO", function() { return TOGGLE_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_ALL_TODO", function() { return TOGGLE_ALL_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDITAR_TODO", function() { return EDITAR_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BORRAR_TODO", function() { return BORRAR_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BORRAR_ALL_TODO", function() { return BORRAR_ALL_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarTodoAction", function() { return AgregarTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleTodoAction", function() { return ToggleTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleAllTodoAction", function() { return ToggleAllTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarTodoAction", function() { return EditarTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorrarTodoAction", function() { return BorrarTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorrarAllTodoAction", function() { return BorrarAllTodoAction; });
const AGREGAR_TODO = '[TODO] Agregar todo';
const TOGGLE_TODO = '[TODO] Toggle todo';
const TOGGLE_ALL_TODO = '[TODO] Toggle all todo';
const EDITAR_TODO = '[TODO] Editar todo';
const BORRAR_TODO = '[TODO] Borrar todo';
const BORRAR_ALL_TODO = '[TODO] Borrar all todo';
class AgregarTodoAction {
    constructor(texto) {
        this.texto = texto;
        this.type = AGREGAR_TODO;
    }
}
AgregarTodoAction.ctorParameters = () => [
    { type: String }
];
class ToggleTodoAction {
    constructor(id) {
        this.id = id;
        this.type = TOGGLE_TODO;
    }
}
ToggleTodoAction.ctorParameters = () => [
    { type: Number }
];
class ToggleAllTodoAction {
    constructor(completado) {
        this.completado = completado;
        this.type = TOGGLE_ALL_TODO;
    }
}
ToggleAllTodoAction.ctorParameters = () => [
    { type: Boolean }
];
class EditarTodoAction {
    constructor(id, texto) {
        this.id = id;
        this.texto = texto;
        this.type = EDITAR_TODO;
    }
}
EditarTodoAction.ctorParameters = () => [
    { type: Number },
    { type: String }
];
class BorrarTodoAction {
    constructor(id) {
        this.id = id;
        this.type = BORRAR_TODO;
    }
}
BorrarTodoAction.ctorParameters = () => [
    { type: Number }
];
class BorrarAllTodoAction {
    constructor() {
        this.type = BORRAR_ALL_TODO;
    }
}


/***/ }),

/***/ "./src/app/todo/todo.component.ts":
/*!****************************************!*\
  !*** ./src/app/todo/todo.component.ts ***!
  \****************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo.actions */ "./src/app/todo/todo.actions.ts");




let TodoComponent = class TodoComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
    }
    toggleAll() {
        const accion = new _todo_actions__WEBPACK_IMPORTED_MODULE_3__["ToggleAllTodoAction"](this.completado);
        this.store.dispatch(accion);
        this.completado = !this.completado;
    }
};
TodoComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
TodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo',
        template: __webpack_require__(/*! raw-loader!./todo.component.html */ "./node_modules/raw-loader/index.js!./src/app/todo/todo.component.html")
    })
], TodoComponent);



/***/ }),

/***/ "./src/app/todo/todo.reducers.ts":
/*!***************************************!*\
  !*** ./src/app/todo/todo.reducers.ts ***!
  \***************************************/
/*! exports provided: todoReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoReducer", function() { return todoReducer; });
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.actions */ "./src/app/todo/todo.actions.ts");
/* harmony import */ var _model_todo_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/todo.model */ "./src/app/todo/model/todo.model.ts");


const todo1 = new _model_todo_model__WEBPACK_IMPORTED_MODULE_1__["Todo"]('Vencer a Thanos');
const todo2 = new _model_todo_model__WEBPACK_IMPORTED_MODULE_1__["Todo"]('Salvar al mundo');
const todo3 = new _model_todo_model__WEBPACK_IMPORTED_MODULE_1__["Todo"]('Pedir prestado el traje a Ironman');
todo2.completado = true;
const estadoInicial = [todo1, todo2, todo3];
function todoReducer(state = estadoInicial, action) {
    switch (action.type) {
        case _todo_actions__WEBPACK_IMPORTED_MODULE_0__["AGREGAR_TODO"]:
            const todo = new _model_todo_model__WEBPACK_IMPORTED_MODULE_1__["Todo"](action.texto);
            return [...state, todo];
        case _todo_actions__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_TODO"]:
            return state.map(todoEdit => {
                if (todoEdit.id === action.id) {
                    return Object.assign({}, todoEdit, { completado: !todoEdit.completado });
                }
                else {
                    return todoEdit;
                }
            });
        case _todo_actions__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_ALL_TODO"]:
            return state.map(todoEdit => {
                return Object.assign({}, todoEdit, { completado: action.completado });
            });
        case _todo_actions__WEBPACK_IMPORTED_MODULE_0__["EDITAR_TODO"]:
            return state.map(todoEdit => {
                if (todoEdit.id === action.id) {
                    return Object.assign({}, todoEdit, { texto: action.texto });
                }
                else {
                    return todoEdit;
                }
            });
        case _todo_actions__WEBPACK_IMPORTED_MODULE_0__["BORRAR_TODO"]:
            return state.filter(todoEdit => todoEdit.id !== action.id);
        case _todo_actions__WEBPACK_IMPORTED_MODULE_0__["BORRAR_ALL_TODO"]:
            return state.filter(todoEdit => !todoEdit.completado);
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/todo/todos-list/todos-list.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/todo/todos-list/todos-list.component.ts ***!
  \*********************************************************/
/*! exports provided: TodosListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosListComponent", function() { return TodosListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");



let TodosListComponent = class TodosListComponent {
    constructor(store) {
        this.store = store;
        this.todos = [];
    }
    ngOnInit() {
        this.store.subscribe(state => {
            this.todos = state.todos;
            this.filtro = state.filtro;
        });
    }
};
TodosListComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
TodosListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todos-list',
        template: __webpack_require__(/*! raw-loader!./todos-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/todo/todos-list/todos-list.component.html")
    })
], TodosListComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cristiantorres/Documentos/cristian/cursos/redux/03-todoapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map