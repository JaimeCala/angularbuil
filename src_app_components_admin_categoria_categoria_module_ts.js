"use strict";
(self["webpackChunkadmincarrito"] = self["webpackChunkadmincarrito"] || []).push([["src_app_components_admin_categoria_categoria_module_ts"],{

/***/ 62209:
/*!************************************************************************!*\
  !*** ./src/app/components/admin/categoria/categoria-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriaRoutingModule": () => (/* binding */ CategoriaRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _categoria_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categoria.component */ 78078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [{ path: '', component: _categoria_component__WEBPACK_IMPORTED_MODULE_0__.CategoriaComponent }];
class CategoriaRoutingModule {
}
CategoriaRoutingModule.ɵfac = function CategoriaRoutingModule_Factory(t) { return new (t || CategoriaRoutingModule)(); };
CategoriaRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CategoriaRoutingModule });
CategoriaRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CategoriaRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 78078:
/*!*******************************************************************!*\
  !*** ./src/app/components/admin/categoria/categoria.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriaComponent": () => (/* binding */ CategoriaComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ 38021);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ 45381);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 54302);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 94283);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modalcategoria_modalcategoria_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modalcategoria/modalcategoria.component */ 66891);
/* harmony import */ var pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pdfmake-wrapper */ 12432);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ 72933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_service_categoria_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/categoria.service */ 16223);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ 42937);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 52529);


























function CategoriaComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "LLene el campo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CategoriaComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Primera fecha inv\u00E1lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CategoriaComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Segunda fecha inv\u00E1lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CategoriaComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CategoriaComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r20.idcategoria);
} }
function CategoriaComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "NOMBRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CategoriaComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r21.nombre);
} }
function CategoriaComponent_th_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "FECHA");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CategoriaComponent_td_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, element_r22.createdAt, "dd-MM-YYYY"), " ");
} }
function CategoriaComponent_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "ID IMAGEN");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CategoriaComponent_td_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r23.imgcategorias[0].idimgcategoria, " ");
} }
function CategoriaComponent_th_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "NOMBRE IMAGEN");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CategoriaComponent_td_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r24.imgcategorias[0].nombreimgcategoria, " ");
} }
function CategoriaComponent_th_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "IMAGEN");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CategoriaComponent_td_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r15.URL + element_r25.imgcategorias[0].nombreimgcategoria, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function CategoriaComponent_th_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " ACCIONES ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CategoriaComponent_td_52_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CategoriaComponent_td_52_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28); const element_r26 = restoredCtx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r27.onOpenModal(element_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CategoriaComponent_td_52_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28); const element_r26 = restoredCtx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r29.onDelete(element_r26.idcategoria); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CategoriaComponent_tr_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 38);
} }
function CategoriaComponent_tr_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 39);
} }
const _c0 = function () { return [5, 10, 25, 100]; };
pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__.PdfMakeWrapper.setFonts(/*#__PURE__*/ (pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4___namespace_cache || (pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4___namespace_cache = __webpack_require__.t(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__, 2))));
class CategoriaComponent {
    constructor(categoriaService, dialogCategoria) {
        this.categoriaService = categoriaService;
        this.dialogCategoria = dialogCategoria;
        this.listaCategoria = [];
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder();
        this.listaFiltroSearch = [];
        this.buscar = '';
        this.start = '';
        this.end = '';
        this.URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/img-categoria/`;
        this.displayedColumns = [
            'nombre',
            'createdAt',
            'linkimgcategoria',
            'actions',
        ];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription();
        this.rangeForm = this.formBuilder.group({
            buscar: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            start: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            end: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        });
        this.categoriaService.listenCategoria().subscribe((m) => {
            this.ObtenerListaCategoria();
        });
    }
    ngOnInit() {
        this.ObtenerListaCategoria();
        this.dataSource.filterPredicate = this.getFilterPredicate();
    }
    ObtenerListaCategoria() {
        this.subscription.add(this.categoriaService.getTodosCategoria().subscribe((categorias) => {
            this.dataSource.data = categorias;
            this.listaCategoria = categorias;
            this.dataSource.paginator = this.paginator;
        }));
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }
    onOpenModal(categorias = {}) {
        this.dialogCategoria.open(_modalcategoria_modalcategoria_component__WEBPACK_IMPORTED_MODULE_2__.ModalcategoriaComponent, {
            height: '400px',
            width: '600px',
            hasBackdrop: false,
            data: { title: 'Nuevo categoria', categorias },
        });
    }
    onDelete(categoriaId) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: 'Eliminar',
            text: 'No se podrá revertir la acción',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar categoría',
        }).then((result) => {
            if (result.value) {
                this.categoriaService
                    .deleteCategoria(categoriaId)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$))
                    .subscribe((res) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Eliminado!!', ' Categoria ahora es inactivo.', 'success');
                    this.categoriaService.filterCategoria('genial');
                });
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next({});
        this.destroy$.complete();
        this.subscription.unsubscribe();
    }
    getFilterPredicate() {
        return (data, filter) => {
            const filterArray = filter.split('$');
            const buscar = filterArray[0];
            const DateStarted = filterArray[1];
            const DateEnd = filterArray[2];
            let filterData;
            const matchFilter = [];
            const fechapersonalizado = (0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.formatDate)(data.createdAt, 'yyyy-MM-dd', 'en_ES');
            if (!DateStarted && !DateEnd) {
                filterData = data.nombre.trim().toLocaleLowerCase() == buscar;
                this.puchArrayToPrint(filterData, data, matchFilter);
            }
            else if (!buscar && DateStarted && DateEnd) {
                filterData =
                    fechapersonalizado >= DateStarted && fechapersonalizado <= DateEnd;
                this.puchArrayToPrint(filterData, data, matchFilter);
            }
            else if (buscar && DateStarted && DateEnd) {
                filterData =
                    data.nombre.trim().toLocaleLowerCase() == buscar &&
                        fechapersonalizado >= DateStarted &&
                        fechapersonalizado <= DateEnd;
                this.puchArrayToPrint(filterData, data, matchFilter);
            }
            return matchFilter.every(Boolean);
        };
    }
    puchArrayToPrint(filterData, data, matchFilter) {
        if (filterData === true) {
            this.listaFiltroSearch.push(data);
        }
        matchFilter.push(filterData);
    }
    applyDateFilter() {
        this.listaFiltroSearch.length = 0;
        const buscarofnombre = this.rangeForm.get('buscar').value;
        const fechaInicial = this.rangeForm.get('end').value;
        const fechaFinal = this.rangeForm.get('start').value;
        if (!fechaInicial && !fechaFinal) {
            this.buscar =
                buscarofnombre === null || buscarofnombre === '' ? '' : buscarofnombre;
            const filterValue = this.buscar;
            this.dataSource.filter = filterValue.trim().toLowerCase();
        }
        else {
            const fechaIni = (0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.formatDate)(fechaInicial, 'yyyy-MM-dd', 'en_ES');
            const fechaFin = (0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.formatDate)(fechaFinal, 'yyyy-MM-dd', 'en_ES');
            this.buscar =
                buscarofnombre === null || buscarofnombre === '' ? '' : buscarofnombre;
            this.end = fechaIni === null || fechaIni === '' ? '' : fechaIni;
            this.start = fechaFin === null || fechaFin === '' ? '' : fechaFin;
            const filterValue = this.buscar + '$' + this.start + '$' + this.end;
            this.dataSource.filter = filterValue.trim().toLowerCase();
        }
    }
    clearFilter() {
        this.rangeForm.patchValue({
            buscar: '',
            start: '',
            end: '',
        });
        this.dataSource.filter = '';
        this.listaFiltroSearch = [];
    }
    cargarEnTablaSiCampoVacio(event) {
        if (event == '') {
            this.dataSource.data;
        }
    }
    //----------------------------------create pdf-----------
    createPdf() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const pdf = new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__.PdfMakeWrapper();
            const fechapdf = (0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.formatDate)(new Date(), 'dd-MM-yyyy', 'en_ES');
            const horapdf = (0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.formatDate)(new Date(), 'HH:mm:ss', 'en_ES');
            pdf.pageMargins([50, 60]);
            pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__.Txt('MICROMARKET HOME SERVICE')
                .alignment('center')
                .bold()
                .fontSize(18).end);
            pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__.Txt('DIRECCIÓN: Zona Zenkata').alignment('center').fontSize(14).end);
            pdf.add(yield new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__.Img('../../../../assets/logocremasinfondo.png')
                .alignment('center')
                .width(130)
                .height(130)
                .build());
            pdf.add('\n');
            pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__.Txt('FECHA: ' + fechapdf).alignment('right').fontSize(11).end);
            pdf.add('\n');
            pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__.Txt('HORA: ' + horapdf).alignment('right').fontSize(11).end);
            if (this.listaFiltroSearch != '') {
                pdf.add(this.createTable(this.listaFiltroSearch));
            }
            else {
                pdf.add(this.createTable(this.listaCategoria));
            }
            pdf.create().open();
        });
    }
    createTable(datos) {
        [{}];
        return new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__.Table([
            ['NOMBRE CATEGORÍA', 'FECHA CREACIÓN', 'ESTADO'],
            ...this.extractData(datos),
        ]).end;
    }
    extractData(datos) {
        return datos.map((row) => {
            const fechaformated = (0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.formatDate)(row.createdAt, 'dd-MM-yyyy', 'en_ES');
            return [row.nombre, fechaformated, row.estado];
        });
    }
}
CategoriaComponent.ɵfac = function CategoriaComponent_Factory(t) { return new (t || CategoriaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_service_categoria_service__WEBPACK_IMPORTED_MODULE_5__.CategoriaService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog)); };
CategoriaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: CategoriaComponent, selectors: [["app-categoria"]], viewQuery: function CategoriaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 56, vars: 14, consts: [[1, "table-button-row"], [1, "caja-range-btnAgrega-pdf"], ["mat-flat-button", "", 1, "button-rosado", 3, "click"], [1, "table-range"], [3, "formGroup"], ["appearance", "outline", 1, "search-form-field"], ["matInput", "", "formControlName", "buscar", "color", "accent", "placeholder", "Buscar", "autocomplete", "off", 3, "keyup"], [4, "ngIf"], ["appearance", "outline", 1, "search-form-range"], [3, "rangePicker"], ["matStartDate", "", "formControlName", "start", "placeholder", "Fecha inicial"], ["matEndDate", "", "formControlName", "end", "placeholder", "Fecha final"], ["matSuffix", "", 3, "for"], ["picker", ""], ["mat-raised-button", "", "color", "accent", 1, "button-form-consultar", 3, "disabled", "click"], ["mat-raised-button", "", "color", "accent", 1, "button-form-limpiar", 3, "disabled", "click"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "idcategoria"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nombre"], ["matColumnDef", "createdAt"], ["mat-cell", "", "class", "center", 4, "matCellDef"], ["matColumnDef", "idimgcategoria"], ["matColumnDef", "nombreimgcategoria"], ["matColumnDef", "linkimgcategoria"], ["matColumnDef", "actions"], ["mat-header-cell", "", "mat-sort-header", "", "class", "actionCampo", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 1, "paginator", 3, "pageSizeOptions", "pageSize"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-cell", "", 1, "center"], [2, "width", "50px", "height", "50px", 3, "src"], ["mat-header-cell", "", "mat-sort-header", "", 1, "actionCampo"], ["mat-icon-button", "", 1, "button-yellow", 3, "click"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function CategoriaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CategoriaComponent_Template_button_click_3_listener() { return ctx.onOpenModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Agregar Categor\u00EDa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CategoriaComponent_Template_button_click_5_listener() { return ctx.createPdf(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Imprimir Reporte ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Buscar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function CategoriaComponent_Template_input_keyup_12_listener($event) { return ctx.cargarEnTablaSiCampoVacio($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, CategoriaComponent_mat_error_13_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Rango de fechas");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "mat-date-range-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "MM/DD/YYYY \u2013 MM/DD/YYYY");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "mat-datepicker-toggle", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "mat-date-range-picker", null, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, CategoriaComponent_mat_error_25_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, CategoriaComponent_mat_error_26_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CategoriaComponent_Template_button_click_27_listener() { return ctx.applyDateFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, " Consultar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CategoriaComponent_Template_button_click_29_listener() { return ctx.clearFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, " Limpiar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](32, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, CategoriaComponent_th_33_Template, 2, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, CategoriaComponent_td_34_Template, 2, 1, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](35, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, CategoriaComponent_th_36_Template, 2, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, CategoriaComponent_td_37_Template, 2, 1, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](38, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, CategoriaComponent_th_39_Template, 2, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, CategoriaComponent_td_40_Template, 3, 4, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](41, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, CategoriaComponent_th_42_Template, 2, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, CategoriaComponent_td_43_Template, 2, 1, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](44, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](45, CategoriaComponent_th_45_Template, 2, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, CategoriaComponent_td_46_Template, 2, 1, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](47, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](48, CategoriaComponent_th_48_Template, 2, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](49, CategoriaComponent_td_49_Template, 2, 1, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](50, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](51, CategoriaComponent_th_51_Template, 2, 0, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](52, CategoriaComponent_td_52_Template, 8, 0, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](53, CategoriaComponent_tr_53_Template, 1, 0, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](54, CategoriaComponent_tr_54_Template, 1, 0, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](55, "mat-paginator", 30);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.rangeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.rangeForm.controls.buscar.hasError("matBuscarInvalid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rangePicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.rangeForm.controls.start.hasError("matStartDateInvalid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.rangeForm.controls.end.hasError("matEndDateInvalid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.rangeForm.get("buscar").invalid && (ctx.rangeForm.get("start").invalid || ctx.rangeForm.get("end").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", (ctx.rangeForm.get("start").invalid || ctx.rangeForm.get("end").invalid) && ctx.rangeForm.get("buscar").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](13, _c0))("pageSize", 5);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatEndDate, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatHint, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDateRangePicker, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatError, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe], styles: ["table[_ngcontent-%COMP%] {\r\n  width: 60%;\r\n  margin: 0 auto;\r\n  margin-top: 1rem;\r\n\r\n  table-layout: fixed;\r\n}\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  width: 50px;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}\r\n.mat-column-idcategoria[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 2%;\r\n}\r\n.mat-column-linkimgcategoria[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 10%;\r\n}\r\n.mat-column-idimgcategoria[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 1%;\r\n}\r\n.mat-column-nombre[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 20%;\r\n}\r\n.mat-column-createdAt[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 6%;\r\n}\r\n.mat-column-actions[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 10%;\r\n}\r\n.search-div[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n}\r\n.paginator[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n}\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\nth.mat-header-cell[_ngcontent-%COMP%] {\r\n  background-color: #79dae8;\r\n  \r\n  color: #2155cd;\r\n\r\n  font-weight: bold;\r\n  font-family: Arial;\r\n\r\n  text-align: left;\r\n  max-width: 300px;\r\n}\r\n.button-yellow[_ngcontent-%COMP%] {\r\n  background-color: rgb(19, 226, 233);\r\n}\r\n.button-rosado[_ngcontent-%COMP%] {\r\n  color: floralwhite;\r\n  background-color: #2155cd;\r\n  width: 30%;\r\n  left: 35px;\r\n}\r\n.table-button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin: 12px;\r\n}\r\n.caja-range-btnAgrega-pdf[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 400px 1fr;\r\n  height: 100px;\r\n\r\n  margin-top: 30px;\r\n  margin-bottom: 5px;\r\n}\r\n.caja-range-btnAgrega-pdf[_ngcontent-%COMP%]   .table-button-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.caja-range-btnAgrega-pdf[_ngcontent-%COMP%]   .table-button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding: 3px 10px;\r\n  font-size: 14px;\r\n}\r\n.caja-range-btnAgrega-pdf[_ngcontent-%COMP%]   .table-range[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: flex-end;\r\n}\r\n.caja-range-btnAgrega-pdf[_ngcontent-%COMP%]   .table-range[_ngcontent-%COMP%]   .search-form-range[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n}\r\n.caja-range-btnAgrega-pdf[_ngcontent-%COMP%]   .table-range[_ngcontent-%COMP%]   .search-form-field[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  width: 300px;\r\n}\r\n.caja-range-btnAgrega-pdf[_ngcontent-%COMP%]   .table-range[_ngcontent-%COMP%]   .search-form-range[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n  padding: 3px 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxnQkFBZ0I7O0VBRWhCLG1CQUFtQjtBQUNyQjtBQUNBOztFQUVFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWDtBQUNBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7QUFDWjtBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWDtBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7QUFDWjtBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWDtBQUNBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7QUFDWjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHNDQUFzQztFQUN0QyxjQUFjOztFQUVkLGlCQUFpQjtFQUNqQixrQkFBa0I7O0VBRWxCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLG1DQUFtQztBQUNyQztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsVUFBVTtBQUNaO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsYUFBYTs7RUFFYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUNBOztFQUVFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoiY2F0ZWdvcmlhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG5cclxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG59XHJcbnRoLFxyXG50ZCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogNTBweDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbi5tYXQtY29sdW1uLWlkY2F0ZWdvcmlhIHtcclxuICBmbGV4OiBub25lO1xyXG4gIHdpZHRoOiAyJTtcclxufVxyXG4ubWF0LWNvbHVtbi1saW5raW1nY2F0ZWdvcmlhIHtcclxuICBmbGV4OiBub25lO1xyXG4gIHdpZHRoOiAxMCU7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWlkaW1nY2F0ZWdvcmlhIHtcclxuICBmbGV4OiBub25lO1xyXG4gIHdpZHRoOiAxJTtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tbm9tYnJlIHtcclxuICBmbGV4OiBub25lO1xyXG4gIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWNyZWF0ZWRBdCB7XHJcbiAgZmxleDogbm9uZTtcclxuICB3aWR0aDogNiU7XHJcbn1cclxuLm1hdC1jb2x1bW4tYWN0aW9ucyB7XHJcbiAgZmxleDogbm9uZTtcclxuICB3aWR0aDogMTAlO1xyXG59XHJcblxyXG4uc2VhcmNoLWRpdiB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4ucGFnaW5hdG9yIHtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbnRoLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc5ZGFlODtcclxuICAvKmJhY2tncm91bmQtY29sb3I6IHJnYig1NCwgMTkwLCA4OCk7Ki9cclxuICBjb2xvcjogIzIxNTVjZDtcclxuXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG5cclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5idXR0b24teWVsbG93IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTksIDIyNiwgMjMzKTtcclxufVxyXG4uYnV0dG9uLXJvc2FkbyB7XHJcbiAgY29sb3I6IGZsb3JhbHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTU1Y2Q7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBsZWZ0OiAzNXB4O1xyXG59XHJcblxyXG4udGFibGUtYnV0dG9uLXJvdyBidXR0b24ge1xyXG4gIG1hcmdpbjogMTJweDtcclxufVxyXG5cclxuLmNhamEtcmFuZ2UtYnRuQWdyZWdhLXBkZiB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwMHB4IDFmcjtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG5cclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4uY2FqYS1yYW5nZS1idG5BZ3JlZ2EtcGRmIC50YWJsZS1idXR0b24tcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmNhamEtcmFuZ2UtYnRuQWdyZWdhLXBkZiAudGFibGUtYnV0dG9uLXJvdyBidXR0b24ge1xyXG4gIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uY2FqYS1yYW5nZS1idG5BZ3JlZ2EtcGRmIC50YWJsZS1yYW5nZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5jYWphLXJhbmdlLWJ0bkFncmVnYS1wZGYgLnRhYmxlLXJhbmdlIC5zZWFyY2gtZm9ybS1yYW5nZSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5jYWphLXJhbmdlLWJ0bkFncmVnYS1wZGYgLnRhYmxlLXJhbmdlIC5zZWFyY2gtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxufVxyXG4uY2FqYS1yYW5nZS1idG5BZ3JlZ2EtcGRmIC50YWJsZS1yYW5nZSAuc2VhcmNoLWZvcm0tcmFuZ2UsXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZzogM3B4IDE1cHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 75093:
/*!****************************************************************!*\
  !*** ./src/app/components/admin/categoria/categoria.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriaModule": () => (/* binding */ CategoriaModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _categoria_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categoria-routing.module */ 62209);
/* harmony import */ var _categoria_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categoria.component */ 78078);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../material.module */ 63806);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);






class CategoriaModule {
}
CategoriaModule.ɵfac = function CategoriaModule_Factory(t) { return new (t || CategoriaModule)(); };
CategoriaModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CategoriaModule });
CategoriaModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _categoria_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoriaRoutingModule, _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CategoriaModule, { declarations: [_categoria_component__WEBPACK_IMPORTED_MODULE_1__.CategoriaComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _categoria_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoriaRoutingModule, _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_components_admin_categoria_categoria_module_ts.js.map