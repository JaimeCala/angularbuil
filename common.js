"use strict";
(self["webpackChunkadmincarrito"] = self["webpackChunkadmincarrito"] || []).push([["common"],{

/***/ 69855:
/*!******************************************!*\
  !*** ./src/app/service/login.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 45871);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 53882);





class LoginService {
    constructor(http) {
        this.http = http;
    }
    /*getTodosUsers(): Observable<Userss[]>{
      return this.http
      .get<Userss[]>(`${environment.API_URL}/users/userss`)
      .pipe(catchError(this.handlerError));
    }
  
    getUsersId(usersId: number): Observable<Userss>{
      return this.http
          .get<any>(`${environment.API_URL}/users/${usersId}`)
          .pipe(catchError(this.handlerError));
  
    }*/
    newLogin(login) {
        return this.http
            .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/login/create`, login)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handlerError));
    }
    submitEmailForgotPassword(username) {
        return this.http
            .patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/auth/enviarEmail`, username, {
            responseType: 'text',
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handlerError));
    }
    resetForgotPassword(resetPassword) {
        return this.http
            .patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/login/reset-password/`, resetPassword, {
            responseType: 'text',
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handlerError));
    }
    updateLogin(loginId, username) {
        return this.http
            .put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/login/put/${loginId}`, username)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handlerError));
    }
    /*deleteUsers(usersId: number): Observable<{}>{
        return this.http
        .delete<Userss>(`${environment.API_URL}/users/${usersId}`)
        .pipe(catchError(this.handlerError));
  
    }*/
    handlerError(error) {
        let errorMessage = 'Error desconocido';
        if (error) {
            errorMessage = `Error ${error.message}`;
        }
        window.alert(errorMessage);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(errorMessage);
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
LoginService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 71729:
/*!*********************************************!*\
  !*** ./src/app/service/producto.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductoService": () => (/* binding */ ProductoService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 45871);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 53882);






class ProductoService {
    constructor(http) {
        this.http = http;
        this._listenersProducto = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    getTodosProducto() {
        return this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/producto/productos`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handlerError));
    }
    getTodosProductoVencimiento() {
        return this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/producto/productosVencimiento`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handlerError));
    }
    getProductoId(imgNombre) {
        return this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/img-producto/${imgNombre}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handlerError));
    }
    newProducto(productos) {
        return this.http
            .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/producto/createProducto`, productos)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handlerError));
    }
    updateProducto(productoId, producto) {
        return this.http
            .put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/producto/${productoId}`, producto)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handlerError));
    }
    deleteProducto(productoId) {
        return this.http
            .delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/producto/delete/${productoId}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handlerError));
    }
    //de la tabla roles para iterar
    getRoles() {
        return this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/rol/roles`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handlerError));
    }
    handlerError(error) {
        let errorMessage = 'Error desconocido';
        if (error) {
            errorMessage = `Error ${error.message}`;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: 'Error',
            text: 'No se puede realizar la acción',
            icon: 'warning',
            //showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Cerrar',
        }).then(result => {
            if (result.value) {
            }
            errorMessage;
        });
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(errorMessage);
    }
    //------resfresh datasource----//
    listenProducto() {
        return this._listenersProducto.asObservable();
    }
    filterProducto(filterProducto) {
        this._listenersProducto.next(filterProducto);
    }
}
ProductoService.ɵfac = function ProductoService_Factory(t) { return new (t || ProductoService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient)); };
ProductoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ProductoService, factory: ProductoService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map