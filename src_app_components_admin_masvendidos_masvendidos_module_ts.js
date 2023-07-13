"use strict";
(self["webpackChunkadmincarrito"] = self["webpackChunkadmincarrito"] || []).push([["src_app_components_admin_masvendidos_masvendidos_module_ts"],{

/***/ 33191:
/*!****************************************************************************!*\
  !*** ./src/app/components/admin/masvendidos/masvendidos-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MasvendidosRoutingModule": () => (/* binding */ MasvendidosRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _masvendidos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./masvendidos.component */ 63574);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [{ path: '', component: _masvendidos_component__WEBPACK_IMPORTED_MODULE_0__.MasvendidosComponent }];
class MasvendidosRoutingModule {
}
MasvendidosRoutingModule.ɵfac = function MasvendidosRoutingModule_Factory(t) { return new (t || MasvendidosRoutingModule)(); };
MasvendidosRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MasvendidosRoutingModule });
MasvendidosRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MasvendidosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 63574:
/*!***********************************************************************!*\
  !*** ./src/app/components/admin/masvendidos/masvendidos.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_1___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MasvendidosComponent": () => (/* binding */ MasvendidosComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pdfmake-wrapper */ 12432);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ 72933);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 54302);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 45381);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 38021);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 94283);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _service_venta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/venta.service */ 78629);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ 42937);




















function MasvendidosComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Primera fecha inv\u00E1lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MasvendidosComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Segunda fecha inv\u00E1lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MasvendidosComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " NOMBRE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " PRODUCTO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MasvendidosComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r13.nombre);
} }
function MasvendidosComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " SUMA PRODUCTO");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " M\u00C1S VENDIDOS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MasvendidosComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r14.sumacantidad, " ");
} }
function MasvendidosComponent_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " FECHA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " VENTA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MasvendidosComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, element_r15.createdAt, "dd-MM-YYYY"), " ");
} }
function MasvendidosComponent_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " ACCIONES ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MasvendidosComponent_td_35_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MasvendidosComponent_td_35_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const element_r16 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r17.onOpenModal(element_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Detalles ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MasvendidosComponent_tr_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 31);
} }
function MasvendidosComponent_tr_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 32);
} }
const _c0 = function () { return [5, 10, 25, 100]; };
pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_0__.PdfMakeWrapper.setFonts(/*#__PURE__*/ (pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_1__, 2))));
class MasvendidosComponent {
    constructor(ventaService, dialogProducto) {
        this.ventaService = ventaService;
        this.dialogProducto = dialogProducto;
        this.listaMasVendidos = [];
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder();
        this.listaFiltroSearch = [];
        this.start = '';
        this.end = '';
        this.displayedColumns = [
            'nombre',
            'sumacantidad',
            'createdAt',
            'actions',
        ];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource();
        this.dataSourceUsuario = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
        this.rangeForm = this.formBuilder.group({
            start: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            end: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        });
        this.ventaService.listenVenta().subscribe((m) => {
            //---------agregar servicio para listar producto---//
            this.ObtenerListaProductosMasvendidos();
        });
    }
    ngOnInit() {
        this.ObtenerListaProductosMasvendidos();
        this.dataSource.filterPredicate = this.getFilterPredicate();
    }
    ObtenerListaProductosMasvendidos() {
        this.subscription.add(this.ventaService
            .getVentaProductosMasvendidos()
            .subscribe((productosmasvendidos) => {
            this.dataSource.data = productosmasvendidos;
            this.listaMasVendidos = productosmasvendidos;
            this.dataSource.paginator = this.paginator;
        }));
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }
    ngOnDestroy() {
        this.destroy$.next({});
        this.destroy$.complete();
        this.subscription.unsubscribe();
    }
    getFilterPredicate() {
        return (data, filter) => {
            const filterArray = filter.split('$');
            const DateStarted = filterArray[0];
            const DateEnd = filterArray[1];
            let filterData;
            const matchFilter = [];
            const fechapersonalizado = (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(data.createdAt, 'yyyy-MM-dd', 'en_ES');
            if (DateStarted && DateEnd) {
                filterData =
                    fechapersonalizado >= DateStarted && fechapersonalizado <= DateEnd;
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
        const fechaInicial = this.rangeForm.get('end').value;
        const fechaFinal = this.rangeForm.get('start').value;
        if (!fechaInicial && !fechaFinal) {
        }
        else {
            const fechaIni = (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(fechaInicial, 'yyyy-MM-dd', 'en_ES');
            const fechaFin = (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(fechaFinal, 'yyyy-MM-dd', 'en_ES');
            this.end = fechaIni === null || fechaIni === '' ? '' : fechaIni;
            this.start = fechaFin === null || fechaFin === '' ? '' : fechaFin;
            const filterValue = this.start + '$' + this.end;
            this.dataSource.filter = filterValue.trim().toLowerCase();
        }
    }
    clearFilter() {
        this.rangeForm.patchValue({
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
    //------------------------generar pdf-----------------//
    createPdf() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const pdf = new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_0__.PdfMakeWrapper();
            const fechapdf = (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(new Date(), 'dd-MM-yyyy', 'en_ES');
            const horapdf = (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(new Date(), 'HH:mm:ss', 'en_ES');
            pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_0__.Txt('MICROMARKET HOME SERVICE')
                .alignment('center')
                .bold()
                .fontSize(18).end);
            pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_0__.Txt('DIRECCIÓN: Zona Zenkata').alignment('center').fontSize(14).end);
            pdf.add(yield new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_0__.Img('../../../../assets/logocremasinfondo.png')
                .alignment('center')
                .width(100)
                .height(100)
                .build());
            //pdf.pageOrientation('landscape');
            pdf.pageMargins([50, 60]);
            pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_0__.Txt('FECHA: ' + fechapdf).alignment('right').fontSize(10).end);
            pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_0__.Txt('HORA: ' + horapdf).alignment('right').fontSize(10).end);
            pdf.add('\n');
            pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_0__.Txt('PRODUCTOS MÁS VENDIDOS').bold().fontSize(14).end);
            pdf.add('\n\n');
            if (this.listaFiltroSearch != '') {
                pdf.add(this.createTable(this.listaFiltroSearch));
            }
            else {
                pdf.add(this.createTable(this.listaMasVendidos));
            }
            pdf.add('\n');
            pdf.create().open();
        });
    }
    createTable(datos) {
        [{}];
        return new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_0__.Table([
            ['NOMBRE PRODUCTO', 'SUMA PRODUCTOS', 'FECHA VENTA'],
            ...this.extractData(datos),
        ]).end;
    }
    extractData(datos) {
        return datos.map((row) => {
            const fechaformated = (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(row.createdAt, 'dd-MM-yyyy', 'en_ES');
            return [row.nombre, row.sumacantidad, fechaformated];
        });
    }
}
MasvendidosComponent.ɵfac = function MasvendidosComponent_Factory(t) { return new (t || MasvendidosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_venta_service__WEBPACK_IMPORTED_MODULE_2__.VentaService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog)); };
MasvendidosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MasvendidosComponent, selectors: [["app-masvendidos"]], viewQuery: function MasvendidosComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 39, vars: 13, consts: [[1, "caja-range-btnAgrega-pdf"], [1, "table-button-row"], ["mat-flat-button", "", 1, "button-rosado", 3, "click"], [1, "table-range"], [3, "formGroup"], ["appearance", "outline", 1, "search-form-range"], [3, "rangePicker"], ["matStartDate", "", "formControlName", "start", "placeholder", "Fecha inicial"], ["matEndDate", "", "formControlName", "end", "placeholder", "Fecha final"], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"], ["mat-raised-button", "", "color", "accent", 1, "button-form-consultar", 3, "disabled", "click"], ["mat-raised-button", "", "color", "accent", 1, "button-form-limpiar", 3, "disabled", "click"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "nombre"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "sumacantidad"], ["mat-cell", "", "class", "center", 4, "matCellDef"], ["matColumnDef", "createdAt"], ["matColumnDef", "actions"], ["mat-header-cell", "", "mat-sort-header", "", "class", "actionCampo", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 1, "paginator", 3, "pageSizeOptions", "pageSize"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-cell", "", 1, "center"], ["mat-header-cell", "", "mat-sort-header", "", 1, "actionCampo"], ["mat-button", "", "mat-raised-button", "", 1, "button-yellow", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function MasvendidosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MasvendidosComponent_Template_button_click_2_listener() { return ctx.createPdf(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Imprimir Reporte ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Rango de fechas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-date-range-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "MM/DD/YYYY \u2013 MM/DD/YYYY");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "mat-datepicker-toggle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "mat-date-range-picker", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, MasvendidosComponent_mat_error_17_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, MasvendidosComponent_mat_error_18_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MasvendidosComponent_Template_button_click_19_listener() { return ctx.applyDateFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Consultar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MasvendidosComponent_Template_button_click_21_listener() { return ctx.clearFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Limpiar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](24, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, MasvendidosComponent_th_25_Template, 4, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, MasvendidosComponent_td_26_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](27, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, MasvendidosComponent_th_28_Template, 4, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, MasvendidosComponent_td_29_Template, 2, 1, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](30, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, MasvendidosComponent_th_31_Template, 4, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, MasvendidosComponent_td_32_Template, 3, 4, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](33, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, MasvendidosComponent_th_34_Template, 2, 0, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, MasvendidosComponent_td_35_Template, 4, 0, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, MasvendidosComponent_tr_36_Template, 1, 0, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, MasvendidosComponent_tr_37_Template, 1, 0, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "mat-paginator", 25);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.rangeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rangePicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.rangeForm.controls.start.hasError("matStartDateInvalid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.rangeForm.controls.end.hasError("matEndDateInvalid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.rangeForm.get("start").invalid || ctx.rangeForm.get("end").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.rangeForm.get("start").invalid || ctx.rangeForm.get("end").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c0))("pageSize", 5);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatStartDate, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatEndDate, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatHint, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDateRangePicker, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatError, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], styles: ["table[_ngcontent-%COMP%] {\r\n  width: 85%;\r\n  margin: 0 auto;\r\n  margin-top: 1rem;\r\n\r\n  table-layout: fixed;\r\n}\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  width: 50px;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}\r\n.mat-column-idproducto[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 10%;\r\n}\r\n.mat-column-nombre[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 20%;\r\n}\r\n.mat-column-sumacantidad[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 8%;\r\n}\r\n.mat-column-createdAt[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 5%;\r\n}\r\n.mat-column-actions[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 10%;\r\n}\r\n.search-div[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n}\r\n.paginator[_ngcontent-%COMP%] {\r\n  width: 95%;\r\n}\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\nth.mat-header-cell[_ngcontent-%COMP%] {\r\n  background-color: #79dae8;\r\n  \r\n  color: #2155cd;\r\n\r\n  font-weight: bold;\r\n  font-family: Arial;\r\n\r\n  text-align: left;\r\n  max-width: 300px;\r\n}\r\n.button-yellow[_ngcontent-%COMP%] {\r\n  border: none;\r\n  border-radius: 40px 10px;\r\n  font-style: italic;\r\n  font-size: 18;\r\n  font-family: Verdana;\r\n  font-weight: bold;\r\n  background-color: #79dae8;\r\n  \r\n  color: #2155cd;\r\n}\r\n.color-estado[_ngcontent-%COMP%] {\r\n  border-radius: 40px 40px 40px 40px;\r\n  font-style: italic;\r\n  font-size: 18;\r\n  font-family: Verdana;\r\n  font-weight: bold;\r\n  color: rgb(32, 31, 31);\r\n  background-color: rgba(220, 20, 120, 0.781);\r\n}\r\n.color-estado[_ngcontent-%COMP%]:hover {\r\n  border-style: outset;\r\n  color: rgb(212, 226, 80);\r\n}\r\n.button-yellow[_ngcontent-%COMP%]:hover {\r\n  border-style: outset;\r\n  color: rgb(212, 226, 80);\r\n}\r\n.button-rosado[_ngcontent-%COMP%] {\r\n  color: floralwhite;\r\n  background-color: #2155cd;\r\n  width: 30%;\r\n  left: 35px;\r\n}\r\n.table-button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin: 12px;\r\n}\r\n.caja-range-btnAgrega-pdf[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 400px 1fr;\r\n  height: 100px;\r\n\r\n  margin-top: 30px;\r\n  margin-bottom: 5px;\r\n}\r\n.caja-range-btnAgrega-pdf[_ngcontent-%COMP%]   .table-button-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.caja-range-btnAgrega-pdf[_ngcontent-%COMP%]   .table-button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding: 3px 10px;\r\n  font-size: 14px;\r\n}\r\n.caja-range-btnAgrega-pdf[_ngcontent-%COMP%]   .table-range[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: flex-end;\r\n}\r\n.caja-range-btnAgrega-pdf[_ngcontent-%COMP%]   .table-range[_ngcontent-%COMP%]   .search-form-range[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n}\r\n.caja-range-btnAgrega-pdf[_ngcontent-%COMP%]   .table-range[_ngcontent-%COMP%]   .search-form-field[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  width: 300px;\r\n}\r\n.caja-range-btnAgrega-pdf[_ngcontent-%COMP%]   .table-range[_ngcontent-%COMP%]   .search-form-range[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n  padding: 3px 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc3ZlbmRpZG9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGdCQUFnQjs7RUFFaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7O0VBRUUsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtBQUNaO0FBRUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtBQUNaO0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsVUFBVTtBQUNaO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsc0NBQXNDO0VBQ3RDLGNBQWM7O0VBRWQsaUJBQWlCO0VBQ2pCLGtCQUFrQjs7RUFFbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLHNDQUFzQztFQUN0QyxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QiwyQ0FBMkM7QUFDN0M7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLFVBQVU7QUFDWjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLGFBQWE7O0VBRWIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFDQTs7RUFFRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6Im1hc3ZlbmRpZG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG5cclxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG59XHJcbnRoLFxyXG50ZCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogNTBweDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1pZHByb2R1Y3RvIHtcclxuICBmbGV4OiBub25lO1xyXG4gIHdpZHRoOiAxMCU7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLW5vbWJyZSB7XHJcbiAgZmxleDogbm9uZTtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1zdW1hY2FudGlkYWQge1xyXG4gIGZsZXg6IG5vbmU7XHJcbiAgd2lkdGg6IDglO1xyXG59XHJcbi5tYXQtY29sdW1uLWNyZWF0ZWRBdCB7XHJcbiAgZmxleDogbm9uZTtcclxuICB3aWR0aDogNSU7XHJcbn1cclxuLm1hdC1jb2x1bW4tYWN0aW9ucyB7XHJcbiAgZmxleDogbm9uZTtcclxuICB3aWR0aDogMTAlO1xyXG59XHJcblxyXG4uc2VhcmNoLWRpdiB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4ucGFnaW5hdG9yIHtcclxuICB3aWR0aDogOTUlO1xyXG59XHJcblxyXG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbnRoLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc5ZGFlODtcclxuICAvKmJhY2tncm91bmQtY29sb3I6IHJnYig1NCwgMTkwLCA4OCk7Ki9cclxuICBjb2xvcjogIzIxNTVjZDtcclxuXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG5cclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5idXR0b24teWVsbG93IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweCAxMHB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXNpemU6IDE4O1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3OWRhZTg7XHJcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTQsIDE5MCwgODgpOyovXHJcbiAgY29sb3I6ICMyMTU1Y2Q7XHJcbn1cclxuLmNvbG9yLWVzdGFkbyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweCA0MHB4IDQwcHggNDBweDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC1zaXplOiAxODtcclxuICBmb250LWZhbWlseTogVmVyZGFuYTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogcmdiKDMyLCAzMSwgMzEpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIwLCAyMCwgMTIwLCAwLjc4MSk7XHJcbn1cclxuLmNvbG9yLWVzdGFkbzpob3ZlciB7XHJcbiAgYm9yZGVyLXN0eWxlOiBvdXRzZXQ7XHJcbiAgY29sb3I6IHJnYigyMTIsIDIyNiwgODApO1xyXG59XHJcbi5idXR0b24teWVsbG93OmhvdmVyIHtcclxuICBib3JkZXItc3R5bGU6IG91dHNldDtcclxuICBjb2xvcjogcmdiKDIxMiwgMjI2LCA4MCk7XHJcbn1cclxuLmJ1dHRvbi1yb3NhZG8ge1xyXG4gIGNvbG9yOiBmbG9yYWx3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE1NWNkO1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgbGVmdDogMzVweDtcclxufVxyXG5cclxuLnRhYmxlLWJ1dHRvbi1yb3cgYnV0dG9uIHtcclxuICBtYXJnaW46IDEycHg7XHJcbn1cclxuXHJcbi5jYWphLXJhbmdlLWJ0bkFncmVnYS1wZGYge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MDBweCAxZnI7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuXHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuLmNhamEtcmFuZ2UtYnRuQWdyZWdhLXBkZiAudGFibGUtYnV0dG9uLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jYWphLXJhbmdlLWJ0bkFncmVnYS1wZGYgLnRhYmxlLWJ1dHRvbi1yb3cgYnV0dG9uIHtcclxuICBwYWRkaW5nOiAzcHggMTBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmNhamEtcmFuZ2UtYnRuQWdyZWdhLXBkZiAudGFibGUtcmFuZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uY2FqYS1yYW5nZS1idG5BZ3JlZ2EtcGRmIC50YWJsZS1yYW5nZSAuc2VhcmNoLWZvcm0tcmFuZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uY2FqYS1yYW5nZS1idG5BZ3JlZ2EtcGRmIC50YWJsZS1yYW5nZSAuc2VhcmNoLWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuLmNhamEtcmFuZ2UtYnRuQWdyZWdhLXBkZiAudGFibGUtcmFuZ2UgLnNlYXJjaC1mb3JtLXJhbmdlLFxyXG5idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmc6IDNweCAxNXB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 33036:
/*!********************************************************************!*\
  !*** ./src/app/components/admin/masvendidos/masvendidos.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MasvendidosModule": () => (/* binding */ MasvendidosModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _masvendidos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./masvendidos-routing.module */ 33191);
/* harmony import */ var _masvendidos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./masvendidos.component */ 63574);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../material.module */ 63806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);





class MasvendidosModule {
}
MasvendidosModule.ɵfac = function MasvendidosModule_Factory(t) { return new (t || MasvendidosModule)(); };
MasvendidosModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MasvendidosModule });
MasvendidosModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _masvendidos_routing_module__WEBPACK_IMPORTED_MODULE_0__.MasvendidosRoutingModule, _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MasvendidosModule, { declarations: [_masvendidos_component__WEBPACK_IMPORTED_MODULE_1__.MasvendidosComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _masvendidos_routing_module__WEBPACK_IMPORTED_MODULE_0__.MasvendidosRoutingModule, _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_components_admin_masvendidos_masvendidos_module_ts.js.map