"use strict";
(self["webpackChunkadmincarrito"] = self["webpackChunkadmincarrito"] || []).push([["src_app_components_admin_reclamo_reclamo_module_ts"],{

/***/ 38173:
/*!********************************************************************!*\
  !*** ./src/app/components/admin/reclamo/reclamo-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReclamoRoutingModule": () => (/* binding */ ReclamoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _reclamo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reclamo.component */ 48762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [{ path: '', component: _reclamo_component__WEBPACK_IMPORTED_MODULE_0__.ReclamoComponent }];
class ReclamoRoutingModule {
}
ReclamoRoutingModule.ɵfac = function ReclamoRoutingModule_Factory(t) { return new (t || ReclamoRoutingModule)(); };
ReclamoRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ReclamoRoutingModule });
ReclamoRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ReclamoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 48762:
/*!***************************************************************!*\
  !*** ./src/app/components/admin/reclamo/reclamo.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReclamoComponent": () => (/* binding */ ReclamoComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 38021);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 45381);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 54302);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfmake-wrapper */ 12432);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ 72933);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _service_reclamo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/reclamo.service */ 28872);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ 42937);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 52529);







//import { ITable } from 'pdfmake-wrapper/lib/interfaces';
















function ReclamoComponent_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "LLene el campo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ReclamoComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Primera fecha inv\u00E1lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ReclamoComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Segunda fecha inv\u00E1lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ReclamoComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " RECLAMO/SUGERENCIA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ReclamoComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r18.comentario, " ");
} }
function ReclamoComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " NOMBRE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ReclamoComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r19.user.nombre, " ");
} }
function ReclamoComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " PATERNO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ReclamoComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r20.user.paterno, " ");
} }
function ReclamoComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " MATERNO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ReclamoComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r21.user.materno, " ");
} }
function ReclamoComponent_th_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " CELULAR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ReclamoComponent_td_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r22.user.celular, " ");
} }
function ReclamoComponent_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " ACCIONES ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ReclamoComponent_td_43_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReclamoComponent_td_43_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25); const element_r23 = restoredCtx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r24.onDelete(element_r23.idreclamo); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ReclamoComponent_tr_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 32);
} }
function ReclamoComponent_tr_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 33);
} }
const _c0 = function () { return [5, 10, 25, 100]; };
pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_1__.PdfMakeWrapper.setFonts(/*#__PURE__*/ (pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___namespace_cache || (pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___namespace_cache = __webpack_require__.t(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__, 2))));
class ReclamoComponent {
    constructor(reclamoService, dialogReclamo) {
        this.reclamoService = reclamoService;
        this.dialogReclamo = dialogReclamo;
        this.displayedColumns = ['comentario', 'nombre', 'paterno', 'materno', 'celular', 'actions'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder();
        this.listaFiltroSearch = [];
        this.buscar = '';
        this.start = '';
        this.end = '';
        this.rangeForm = this.formBuilder.group({
            buscar: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            start: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            end: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        });
        this.reclamoService.listenReclamo().subscribe((m) => {
            console.log(m);
            //---------agregar servicio para listar producto---//
            this.ObtenerListaReclamo();
        });
    }
    ngOnInit() {
        this.ObtenerListaReclamo();
        this.dataSource.filterPredicate = this.getFilterPredicate();
    }
    ObtenerListaReclamo() {
        this.reclamoService.getTodosReclamo().subscribe((reclamos) => {
            this.dataSource.data = reclamos;
            console.log("Son los reclamos ", reclamos);
            //this.listaUsuarios=users[0].logins,
            //this.listaUsuarios=users[0].rol,
            //console.log("lista logins", this.listaUsuarios ),
            //console.log(this.dataSource.data);
            this.dataSource.paginator = this.paginator;
        });
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }
    onDelete(productoId) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: 'Eliminar',
            text: 'No se podrá revertir la acción',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar reclamo o sugerencia',
        }).then(result => {
            if (result.value) {
                this.reclamoService.deleteReclamo(productoId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(res => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Eliminado!!', ' El reclamo o sugerencia ahora es inactivo.', 'success');
                    this.reclamoService.filterReclamo('genial');
                });
            }
        });
        /*if(window.confirm("Esta seguro de eliminar")){
          this.reclamoService
            .deleteReclamo(productoId)
            .pipe(takeUntil(this.destroy$))
            .subscribe(res=>{
              window.alert(res);
            });
        }*/
    }
    ngOnDestroy() {
        this.destroy$.next({});
        this.destroy$.complete();
    }
    /*onSearchClear(){
      this.searchKey="";
      this.applyFilter(this.searchKey);
    }*/
    //----para busqueda---//
    /*public applyFilter=(value: string)=>{
      this.dataSource.filter = value.trim().toLocaleLowerCase();
    }*/
    getFilterPredicate() {
        return (data, filter) => {
            const filterArray = filter.split('$');
            const buscar = filterArray[0];
            const DateStarted = filterArray[1];
            const DateEnd = filterArray[2];
            let filterData;
            const matchFilter = [];
            //this.listaFiltroSearch.length = 0;
            if (!DateStarted && !DateEnd) {
                filterData = data.user.nombre.trim().toLocaleLowerCase() == buscar;
                this.puchArrayToPrint(filterData, data, matchFilter);
            }
            else if (!buscar && (DateStarted && DateEnd)) {
                filterData = data.fecha >= DateStarted && data.fecha <= DateEnd;
                //this.listaFiltroSearch.length = 0;
                this.puchArrayToPrint(filterData, data, matchFilter);
            }
            else if (buscar && (DateStarted && DateEnd)) {
                filterData = (data.ci_nit.trim().toLowerCase() == buscar) && ((data.fecha >= DateStarted) && (data.fecha <= DateEnd));
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
            this.buscar = (buscarofnombre === null || buscarofnombre === '') ? '' : buscarofnombre;
            const filterValue = this.buscar;
            this.dataSource.filter = filterValue.trim().toLowerCase();
        }
        else {
            const fechaIni = (0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.formatDate)(fechaInicial, 'yyyy-MM-dd', 'en_ES');
            const fechaFin = (0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.formatDate)(fechaFinal, 'yyyy-MM-dd', 'en_ES');
            this.buscar = (buscarofnombre === null || buscarofnombre === '') ? '' : buscarofnombre;
            this.end = (fechaIni === null || fechaIni === '') ? '' : fechaIni;
            this.start = (fechaFin === null || fechaFin === '') ? '' : fechaFin;
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
            console.log('evento vacio' + event);
        }
    }
}
ReclamoComponent.ɵfac = function ReclamoComponent_Factory(t) { return new (t || ReclamoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_reclamo_service__WEBPACK_IMPORTED_MODULE_3__.ReclamoService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog)); };
ReclamoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ReclamoComponent, selectors: [["app-reclamo"]], viewQuery: function ReclamoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 47, vars: 14, consts: [[1, "caja-range-btnAgrega-pdf"], [1, "table-range"], [3, "formGroup"], ["appearance", "outline", 1, "search-form-field"], ["matInput", "", "formControlName", "buscar", "color", "accent", "placeholder", "Buscar ci o nit", "autocomplete", "off", 3, "keyup"], [4, "ngIf"], ["appearance", "outline", 1, "search-form-range"], [3, "rangePicker"], ["matStartDate", "", "formControlName", "start", "placeholder", "Fecha inicial"], ["matEndDate", "", "formControlName", "end", "placeholder", "Fecha final"], ["matSuffix", "", 3, "for"], ["picker", ""], ["mat-raised-button", "", "color", "accent", 1, "button-form-consultar", 3, "disabled", "click"], ["mat-raised-button", "", "color", "accent", 1, "button-form-limpiar", 3, "disabled", "click"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "comentario"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nombre"], ["matColumnDef", "paterno"], ["matColumnDef", "materno"], ["matColumnDef", "celular"], ["matColumnDef", "actions"], ["mat-header-cell", "", "mat-sort-header", "", "class", "actionCampo", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 1, "paginator", 3, "pageSizeOptions", "pageSize"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "actionCampo"], [1, "table-button-row"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ReclamoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Buscar ci/nit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function ReclamoComponent_Template_input_keyup_6_listener($event) { return ctx.cargarEnTablaSiCampoVacio($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ReclamoComponent_mat_error_7_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Fecha de registro");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-date-range-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "MM/DD/YYYY \u2013 MM/DD/YYYY");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "mat-datepicker-toggle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "mat-date-range-picker", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, ReclamoComponent_mat_error_19_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, ReclamoComponent_mat_error_20_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReclamoComponent_Template_button_click_21_listener() { return ctx.applyDateFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Consultar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReclamoComponent_Template_button_click_23_listener() { return ctx.clearFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Limpiar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](26, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, ReclamoComponent_th_27_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, ReclamoComponent_td_28_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](29, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, ReclamoComponent_th_30_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, ReclamoComponent_td_31_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](32, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, ReclamoComponent_th_33_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, ReclamoComponent_td_34_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](35, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, ReclamoComponent_th_36_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, ReclamoComponent_td_37_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](38, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, ReclamoComponent_th_39_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, ReclamoComponent_td_40_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](41, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, ReclamoComponent_th_42_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, ReclamoComponent_td_43_Template, 5, 0, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, ReclamoComponent_tr_44_Template, 1, 0, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, ReclamoComponent_tr_45_Template, 1, 0, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "mat-paginator", 26);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.rangeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.rangeForm.controls.buscar.hasError("matBuscarInvalid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rangePicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.rangeForm.controls.start.hasError("matStartDateInvalid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.rangeForm.controls.end.hasError("matEndDateInvalid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.rangeForm.get("buscar").invalid && (ctx.rangeForm.get("start").invalid || ctx.rangeForm.get("end").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", (ctx.rangeForm.get("start").invalid || ctx.rangeForm.get("end").invalid) && ctx.rangeForm.get("buscar").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](13, _c0))("pageSize", 5);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatEndDate, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatHint, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDateRangePicker, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatError, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow], styles: ["table[_ngcontent-%COMP%]{\r\n    width: 95%;\r\n    margin: 0 auto;\r\n    margin-top: 1rem;\r\n\r\n    table-layout: fixed;\r\n\r\n\r\n }\r\n th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{\r\n     overflow: hidden;\r\n     width: 50px;\r\n     text-overflow: ellipsis;\r\n     white-space: nowrap;\r\n }\r\n .mat-column-idreclamo[_ngcontent-%COMP%] {\r\n     flex: none;\r\n     width: 1%;\r\n }\r\n .mat-column-comentario[_ngcontent-%COMP%] {\r\n     flex: none;\r\n     width: 20%;\r\n }\r\n .mat-column-estado[_ngcontent-%COMP%] {\r\n     flex: none;\r\n     width: 4%;\r\n }\r\n .mat-column-ci[_ngcontent-%COMP%]{\r\n     flex: none;\r\n     width: 8%;\r\n }\r\n .mat-column-nombre[_ngcontent-%COMP%]{\r\n     flex: none;\r\n     width: 10%;\r\n }\r\n .mat-column-paterno[_ngcontent-%COMP%]{\r\n     flex: none;\r\n     width: 10%;\r\n }\r\n .mat-column-materno[_ngcontent-%COMP%]{\r\n     flex: none;\r\n     width: 10%;\r\n }\r\n .mat-column-email[_ngcontent-%COMP%]{\r\n     flex: none;\r\n     width: 10%;\r\n }\r\n .mat-column-celular[_ngcontent-%COMP%]{\r\n     flex: none;\r\n     width: 8%;\r\n }\r\n .mat-column-ciudad[_ngcontent-%COMP%]{\r\n     flex: none;\r\n     width: 6%;\r\n }\r\n .mat-column-actions[_ngcontent-%COMP%]{\r\n  flex: none;\r\n  width: 8%;\r\n }\r\n .search-div[_ngcontent-%COMP%]{\r\n     margin: 10px;\r\n }\r\n .search-form-field[_ngcontent-%COMP%]{\r\n     width: 30%;\r\n     margin-left: 2%;\r\n\r\n\r\n\r\n }\r\n .paginator[_ngcontent-%COMP%]{\r\n     width: 95%;\r\n }\r\n th.mat-sort-header-sorted[_ngcontent-%COMP%]{\r\n     color: black;\r\n }\r\n th.mat-header-cell[_ngcontent-%COMP%]{\r\n     background-color: #79DAE8;\r\n     \r\n     color: #2155CD;\r\n\r\n     font-weight: bold;\r\n     font-family: Arial;\r\n\r\n     text-align: left;\r\n     max-width: 300px;\r\n\r\n }\r\n .button-yellow[_ngcontent-%COMP%]{\r\n\r\n     background-color: rgb(19, 226, 233);\r\n }\r\n .button-rosado[_ngcontent-%COMP%]{\r\n     color: floralwhite;\r\n     background-color: rgb(224, 20, 163);\r\n     width: 15%;\r\n     left:  35px;\r\n\r\n }\r\n .table-button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n     margin: 12px;\r\n\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2xhbW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QsZ0JBQWdCOztJQUVoQixtQkFBbUI7OztDQUd0QjtDQUNBO0tBQ0ksZ0JBQWdCO0tBQ2hCLFdBQVc7S0FDWCx1QkFBdUI7S0FDdkIsbUJBQW1CO0NBQ3ZCO0NBQ0E7S0FDSSxVQUFVO0tBQ1YsU0FBUztDQUNiO0NBRUE7S0FDSSxVQUFVO0tBQ1YsVUFBVTtDQUNkO0NBRUE7S0FDSSxVQUFVO0tBQ1YsU0FBUztDQUNiO0NBRUQ7S0FDSyxVQUFVO0tBQ1YsU0FBUztDQUNiO0NBQ0E7S0FDSSxVQUFVO0tBQ1YsVUFBVTtDQUNkO0NBR0E7S0FDSSxVQUFVO0tBQ1YsVUFBVTtDQUNkO0NBRUE7S0FDSSxVQUFVO0tBQ1YsVUFBVTtDQUNkO0NBRUE7S0FDSSxVQUFVO0tBQ1YsVUFBVTtDQUNkO0NBRUE7S0FDSSxVQUFVO0tBQ1YsU0FBUztDQUNiO0NBQ0E7S0FDSSxVQUFVO0tBQ1YsU0FBUztDQUNiO0NBQ0E7RUFDQyxVQUFVO0VBQ1YsU0FBUztDQUNWO0NBS0E7S0FDSSxZQUFZO0NBQ2hCO0NBQ0E7S0FDSSxVQUFVO0tBQ1YsZUFBZTs7OztDQUluQjtDQUNBO0tBQ0ksVUFBVTtDQUNkO0NBRUE7S0FDSSxZQUFZO0NBQ2hCO0NBRUE7S0FDSSx5QkFBeUI7S0FDekIsc0NBQXNDO0tBQ3RDLGNBQWM7O0tBRWQsaUJBQWlCO0tBQ2pCLGtCQUFrQjs7S0FFbEIsZ0JBQWdCO0tBQ2hCLGdCQUFnQjs7Q0FFcEI7Q0FFQTs7S0FFSSxtQ0FBbUM7Q0FDdkM7Q0FDQTtLQUNJLGtCQUFrQjtLQUNsQixtQ0FBbUM7S0FDbkMsVUFBVTtLQUNWLFdBQVc7O0NBRWY7Q0FHQTtLQUNJLFlBQVk7O0NBRWhCIiwiZmlsZSI6InJlY2xhbW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxle1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuXHJcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG5cclxuXHJcbiB9XHJcbiB0aCx0ZHtcclxuICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiB9XHJcbiAubWF0LWNvbHVtbi1pZHJlY2xhbW8ge1xyXG4gICAgIGZsZXg6IG5vbmU7XHJcbiAgICAgd2lkdGg6IDElO1xyXG4gfVxyXG5cclxuIC5tYXQtY29sdW1uLWNvbWVudGFyaW8ge1xyXG4gICAgIGZsZXg6IG5vbmU7XHJcbiAgICAgd2lkdGg6IDIwJTtcclxuIH1cclxuXHJcbiAubWF0LWNvbHVtbi1lc3RhZG8ge1xyXG4gICAgIGZsZXg6IG5vbmU7XHJcbiAgICAgd2lkdGg6IDQlO1xyXG4gfVxyXG5cclxuLm1hdC1jb2x1bW4tY2l7XHJcbiAgICAgZmxleDogbm9uZTtcclxuICAgICB3aWR0aDogOCU7XHJcbiB9XHJcbiAubWF0LWNvbHVtbi1ub21icmV7XHJcbiAgICAgZmxleDogbm9uZTtcclxuICAgICB3aWR0aDogMTAlO1xyXG4gfVxyXG5cclxuXHJcbiAubWF0LWNvbHVtbi1wYXRlcm5ve1xyXG4gICAgIGZsZXg6IG5vbmU7XHJcbiAgICAgd2lkdGg6IDEwJTtcclxuIH1cclxuXHJcbiAubWF0LWNvbHVtbi1tYXRlcm5ve1xyXG4gICAgIGZsZXg6IG5vbmU7XHJcbiAgICAgd2lkdGg6IDEwJTtcclxuIH1cclxuXHJcbiAubWF0LWNvbHVtbi1lbWFpbHtcclxuICAgICBmbGV4OiBub25lO1xyXG4gICAgIHdpZHRoOiAxMCU7XHJcbiB9XHJcblxyXG4gLm1hdC1jb2x1bW4tY2VsdWxhcntcclxuICAgICBmbGV4OiBub25lO1xyXG4gICAgIHdpZHRoOiA4JTtcclxuIH1cclxuIC5tYXQtY29sdW1uLWNpdWRhZHtcclxuICAgICBmbGV4OiBub25lO1xyXG4gICAgIHdpZHRoOiA2JTtcclxuIH1cclxuIC5tYXQtY29sdW1uLWFjdGlvbnN7XHJcbiAgZmxleDogbm9uZTtcclxuICB3aWR0aDogOCU7XHJcbiB9XHJcblxyXG5cclxuXHJcblxyXG4gLnNlYXJjaC1kaXZ7XHJcbiAgICAgbWFyZ2luOiAxMHB4O1xyXG4gfVxyXG4gLnNlYXJjaC1mb3JtLWZpZWxke1xyXG4gICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG5cclxuXHJcblxyXG4gfVxyXG4gLnBhZ2luYXRvcntcclxuICAgICB3aWR0aDogOTUlO1xyXG4gfVxyXG5cclxuIHRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWR7XHJcbiAgICAgY29sb3I6IGJsYWNrO1xyXG4gfVxyXG5cclxuIHRoLm1hdC1oZWFkZXItY2VsbHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzlEQUU4O1xyXG4gICAgIC8qYmFja2dyb3VuZC1jb2xvcjogcmdiKDU0LCAxOTAsIDg4KTsqL1xyXG4gICAgIGNvbG9yOiAjMjE1NUNEO1xyXG5cclxuICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICBmb250LWZhbWlseTogQXJpYWw7XHJcblxyXG4gICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuXHJcbiB9XHJcblxyXG4gLmJ1dHRvbi15ZWxsb3d7XHJcblxyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOSwgMjI2LCAyMzMpO1xyXG4gfVxyXG4gLmJ1dHRvbi1yb3NhZG97XHJcbiAgICAgY29sb3I6IGZsb3JhbHdoaXRlO1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDIwLCAxNjMpO1xyXG4gICAgIHdpZHRoOiAxNSU7XHJcbiAgICAgbGVmdDogIDM1cHg7XHJcblxyXG4gfVxyXG5cclxuXHJcbiAudGFibGUtYnV0dG9uLXJvdyBidXR0b257XHJcbiAgICAgbWFyZ2luOiAxMnB4O1xyXG5cclxuIH1cclxuIl19 */"] });


/***/ }),

/***/ 15787:
/*!************************************************************!*\
  !*** ./src/app/components/admin/reclamo/reclamo.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReclamoModule": () => (/* binding */ ReclamoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _reclamo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reclamo-routing.module */ 38173);
/* harmony import */ var _reclamo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reclamo.component */ 48762);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../material.module */ 63806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);





class ReclamoModule {
}
ReclamoModule.ɵfac = function ReclamoModule_Factory(t) { return new (t || ReclamoModule)(); };
ReclamoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ReclamoModule });
ReclamoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _reclamo_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReclamoRoutingModule,
            _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ReclamoModule, { declarations: [_reclamo_component__WEBPACK_IMPORTED_MODULE_1__.ReclamoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _reclamo_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReclamoRoutingModule,
        _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_components_admin_reclamo_reclamo_module_ts.js.map