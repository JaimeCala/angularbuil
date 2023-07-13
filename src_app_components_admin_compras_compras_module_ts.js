"use strict";
(self["webpackChunkadmincarrito"] = self["webpackChunkadmincarrito"] || []).push([["src_app_components_admin_compras_compras_module_ts"],{

/***/ 69184:
/*!********************************************************************!*\
  !*** ./src/app/components/admin/compras/compras-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComprasRoutingModule": () => (/* binding */ ComprasRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _compras_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compras.component */ 53518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [{ path: '', component: _compras_component__WEBPACK_IMPORTED_MODULE_0__.ComprasComponent }];
class ComprasRoutingModule {
}
ComprasRoutingModule.ɵfac = function ComprasRoutingModule_Factory(t) { return new (t || ComprasRoutingModule)(); };
ComprasRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ComprasRoutingModule });
ComprasRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ComprasRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 53518:
/*!***************************************************************!*\
  !*** ./src/app/components/admin/compras/compras.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComprasComponent": () => (/* binding */ ComprasComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 38021);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ 45381);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 54302);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 94283);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var _modalcompras_modalcompras_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modalcompras/modalcompras.component */ 23717);
/* harmony import */ var pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfmake-wrapper */ 12432);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ 72933);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _service_compra_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/compra.service */ 2311);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ 42937);























function ComprasComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "LLene el campo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ComprasComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Primera fecha inv\u00E1lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ComprasComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Segunda fecha inv\u00E1lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ComprasComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " NOMBRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " PROVEEDOR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ComprasComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r24.proveedor.nombre);
} }
function ComprasComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " NOMBRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " PRODUCTO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ComprasComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r25.producto.nombre);
} }
function ComprasComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " PRECIO");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " UNIDAD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ComprasComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r26.precio_compra_uni);
} }
function ComprasComponent_th_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " PRECIO");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " TOTAL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ComprasComponent_td_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r27.precio_compra_total, " ");
} }
function ComprasComponent_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " CANTIDAD");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " INGRESO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ComprasComponent_td_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r28.cantidad_ingreso);
} }
function ComprasComponent_th_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "OBSERVACI\u00D3N");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ComprasComponent_td_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r29.observacion);
} }
function ComprasComponent_th_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "FECHA");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ComprasComponent_td_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, element_r30.fecha, "dd-MM-YYYY"), " ");
} }
function ComprasComponent_th_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "HORA");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ComprasComponent_td_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r31.hora);
} }
function ComprasComponent_th_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " ACCIONES ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ComprasComponent_td_55_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ComprasComponent_td_55_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r34); const element_r32 = restoredCtx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r33.onOpenModal(element_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Detalles ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ComprasComponent_tr_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 38);
} }
function ComprasComponent_tr_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 39);
} }
const _c0 = function () { return [5, 10, 25, 100]; };
pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_1__.PdfMakeWrapper.setFonts(/*#__PURE__*/ (pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___namespace_cache || (pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___namespace_cache = __webpack_require__.t(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__, 2))));
class ComprasComponent {
    constructor(CompraService, dialogProducto) {
        this.CompraService = CompraService;
        this.dialogProducto = dialogProducto;
        this.listaCompras = [];
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder();
        this.listaFiltroSearch = [];
        this.buscar = '';
        this.start = '';
        this.end = '';
        this.displayedColumns = [
            'nombreproveedor',
            'nombreproducto',
            'precio_compra_uni',
            'precio_compra_total',
            'cantidad_ingreso',
            'observacion',
            'fecha',
            'hora',
            'actions',
        ];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
        this.rangeForm = this.formBuilder.group({
            buscar: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            start: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            end: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
        this.CompraService.listenCompra().subscribe((m) => {
            //---------agregar servicio para listar producto---//
            this.ObtenerListaCompraReport();
        });
    }
    ngOnInit() {
        this.ObtenerListaCompraReport();
        this.dataSource.filterPredicate = this.getFilterPredicate();
    }
    ObtenerListaCompraReport() {
        this.subscription.add(this.CompraService.getTodosCompraReport().subscribe((Compras) => {
            this.dataSource.data = Compras;
            this.listaCompras = Compras;
            this.dataSource.paginator = this.paginator;
        }));
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }
    onOpenModal(Compras = {}) {
        this.dialogProducto.open(_modalcompras_modalcompras_component__WEBPACK_IMPORTED_MODULE_0__.ModalcomprasComponent, {
            height: '600px',
            width: '1000px',
            hasBackdrop: false,
            data: { title: 'Nuevo Compra', Compras },
        });
    }
    onDelete(CompraId) {
        if (window.confirm('Esta seguro de eliminar')) {
            this.CompraService.deleteCompra(CompraId)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$))
                .subscribe((res) => {
                window.alert(res);
            });
        }
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
            if (!DateStarted && !DateEnd) {
                filterData = data.proveedor.nombre.trim().toLocaleLowerCase() == buscar;
                this.puchArrayToPrint(filterData, data, matchFilter);
            }
            else if (!buscar && DateStarted && DateEnd) {
                filterData = data.fecha >= DateStarted && data.fecha <= DateEnd;
                this.puchArrayToPrint(filterData, data, matchFilter);
            }
            else if (buscar && DateStarted && DateEnd) {
                filterData =
                    data.proveedor.nombre.trim().toLocaleLowerCase() == buscar &&
                        data.fecha >= DateStarted &&
                        data.fecha <= DateEnd;
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
            const fechaIni = (0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.formatDate)(fechaInicial, 'yyyy-MM-dd', 'en_ES');
            const fechaFin = (0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.formatDate)(fechaFinal, 'yyyy-MM-dd', 'en_ES');
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const pdf = new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_1__.PdfMakeWrapper();
            let compraTotal = 0;
            const fechapdf = (0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.formatDate)(new Date(), 'dd-MM-yyyy', 'en_ES');
            const horapdf = (0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.formatDate)(new Date(), 'HH:mm:ss', 'en_ES');
            pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_1__.Txt('MICROMARKET HOME SERVICE')
                .alignment('center')
                .bold()
                .fontSize(18).end);
            pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_1__.Txt('DIRECCIÓN: Zona Zenkata').alignment('center').fontSize(14).end);
            pdf.add(yield new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_1__.Img('../../../../assets/logoagrandado.png')
                .alignment('center')
                .width(130)
                .height(130)
                .build());
            pdf.add('\n');
            pdf.pageOrientation('landscape');
            pdf.pageMargins([50, 60]);
            pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_1__.Txt('FECHA: ' + fechapdf).alignment('right').fontSize(10).end);
            pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_1__.Txt('HORA: ' + horapdf).alignment('right').fontSize(10).end);
            pdf.add('\n');
            pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_1__.Txt('DETALLE DE COMPRAS').alignment('center').bold().fontSize(14).end);
            pdf.add('\n');
            if (this.listaFiltroSearch != '') {
                pdf.add(this.createTable(this.listaFiltroSearch));
                this.listaFiltroSearch.forEach((element) => {
                    compraTotal = compraTotal + element.precio_compra_total;
                });
                pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_1__.Txt('COSTO TOTAL COMPRA BS.: ' + compraTotal).alignment('justify')
                    .end);
            }
            else {
                pdf.add(this.createTable(this.listaCompras));
                this.listaCompras.forEach((element) => {
                    compraTotal = compraTotal + element.precio_compra_total;
                });
                pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_1__.Txt('COSTO TOTAL COMPRA BS.: ' + compraTotal).alignment('justify')
                    .end);
            }
            pdf.create().open();
        });
    }
    createTable(datos) {
        [{}];
        return new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_1__.Table([
            [
                'NOMBRE PROVEEDOR',
                'CANTIDAD INGRESO PRODUCTO',
                'PRECIO UNIDAD BS',
                'PRECIO TOTAL BS',
                'FECHA COMPRA',
                'TELEFONO PROVEEDOR',
                'NOMBRE PRODUCTO',
                'STOCK ACTUAL',
                'FECHA DE VENCIMIENTO',
            ],
            ...this.extractData(datos),
        ]).end;
    }
    extractData(datos) {
        return datos.map((row) => [
            row.proveedor.nombre,
            row.cantidad_ingreso,
            row.precio_compra_uni,
            row.precio_compra_total,
            row.fecha,
            row.proveedor.telefono,
            row.producto.nombre,
            row.producto.stock,
            row.producto.vencimiento,
        ]);
    }
}
ComprasComponent.ɵfac = function ComprasComponent_Factory(t) { return new (t || ComprasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_compra_service__WEBPACK_IMPORTED_MODULE_3__.CompraService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog)); };
ComprasComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ComprasComponent, selectors: [["app-compras"]], viewQuery: function ComprasComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 59, vars: 14, consts: [[1, "caja-range-btnAgrega-pdf"], [1, "table-button-row"], ["mat-flat-button", "", 1, "button-rosado", 3, "click"], [1, "table-range"], [3, "formGroup"], ["appearance", "outline", 1, "search-form-field"], ["matInput", "", "formControlName", "buscar", "color", "accent", "placeholder", "Buscar por proveedor", "autocomplete", "off", 3, "keyup"], [4, "ngIf"], ["appearance", "outline", 1, "search-form-range"], [3, "rangePicker"], ["matStartDate", "", "formControlName", "start", "placeholder", "Fecha inicial"], ["matEndDate", "", "formControlName", "end", "placeholder", "Fecha final"], ["matSuffix", "", 3, "for"], ["picker", ""], ["mat-raised-button", "", "color", "accent", 1, "button-form-consultar", 3, "disabled", "click"], ["mat-raised-button", "", "color", "accent", 1, "button-form-limpiar", 3, "disabled", "click"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "nombreproveedor"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nombreproducto"], ["matColumnDef", "precio_compra_uni"], ["matColumnDef", "precio_compra_total"], ["mat-cell", "", "class", "center", 4, "matCellDef"], ["matColumnDef", "cantidad_ingreso"], ["matColumnDef", "observacion"], ["matColumnDef", "fecha"], ["matColumnDef", "hora"], ["matColumnDef", "actions"], ["mat-header-cell", "", "mat-sort-header", "", "class", "actionCampo", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 1, "paginator", 3, "pageSizeOptions", "pageSize"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-cell", "", 1, "center"], ["mat-header-cell", "", "mat-sort-header", "", 1, "actionCampo"], ["mat-button", "", "mat-raised-button", "", 1, "button-yellow", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ComprasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ComprasComponent_Template_button_click_2_listener() { return ctx.createPdf(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Imprimir Reporte ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Buscar por proveedor");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function ComprasComponent_Template_input_keyup_9_listener($event) { return ctx.cargarEnTablaSiCampoVacio($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ComprasComponent_mat_error_10_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "fecha compra ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-date-range-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "MM/DD/YYYY \u2013 MM/DD/YYYY");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "mat-datepicker-toggle", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "mat-date-range-picker", null, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, ComprasComponent_mat_error_22_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, ComprasComponent_mat_error_23_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ComprasComponent_Template_button_click_24_listener() { return ctx.applyDateFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " Consultar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ComprasComponent_Template_button_click_26_listener() { return ctx.clearFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, " Limpiar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](29, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, ComprasComponent_th_30_Template, 4, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, ComprasComponent_td_31_Template, 2, 1, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](32, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, ComprasComponent_th_33_Template, 4, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, ComprasComponent_td_34_Template, 2, 1, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](35, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, ComprasComponent_th_36_Template, 4, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, ComprasComponent_td_37_Template, 2, 1, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](38, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, ComprasComponent_th_39_Template, 4, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, ComprasComponent_td_40_Template, 2, 1, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](41, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, ComprasComponent_th_42_Template, 4, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, ComprasComponent_td_43_Template, 2, 1, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](44, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, ComprasComponent_th_45_Template, 2, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, ComprasComponent_td_46_Template, 2, 1, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](47, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, ComprasComponent_th_48_Template, 2, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](49, ComprasComponent_td_49_Template, 3, 4, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](50, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](51, ComprasComponent_th_51_Template, 2, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](52, ComprasComponent_td_52_Template, 2, 1, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](53, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](54, ComprasComponent_th_54_Template, 2, 0, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, ComprasComponent_td_55_Template, 4, 0, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](56, ComprasComponent_tr_56_Template, 1, 0, "tr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](57, ComprasComponent_tr_57_Template, 1, 0, "tr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "mat-paginator", 32);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](13, _c0))("pageSize", 5);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatEndDate, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatHint, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDateRangePicker, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatError, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe], styles: ["table[_ngcontent-%COMP%] {\r\n  width: 95%;\r\n  margin: 0 auto;\r\n  margin-top: 1rem;\r\n\r\n  table-layout: fixed;\r\n}\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  width: 50px;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}\r\n.mat-column-idcompra[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 3%;\r\n}\r\n.mat-column-precio_compra_uni[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 5%;\r\n}\r\n.mat-column-precio_compra_total[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 7%;\r\n}\r\n.mat-column-tipo_comprobante[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 10%;\r\n}\r\n.mat-column-num_comprobante[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 10%;\r\n}\r\n.mat-column-cantidad_ingreso[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 6%;\r\n}\r\n.mat-column-observacion[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 20%;\r\n}\r\n.mat-column-fecha[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 8%;\r\n}\r\n.mat-column-hora[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 5%;\r\n}\r\n.search-div[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n}\r\n.paginator[_ngcontent-%COMP%] {\r\n  width: 95%;\r\n}\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\nth.mat-header-cell[_ngcontent-%COMP%] {\r\n  background-color: #79dae8;\r\n  \r\n  color: #2155cd;\r\n\r\n  font-weight: bold;\r\n  font-family: Arial;\r\n\r\n  text-align: left;\r\n  max-width: 300px;\r\n}\r\n.button-yellow[_ngcontent-%COMP%] {\r\n  border: none;\r\n  border-radius: 40px 10px;\r\n  font-style: italic;\r\n  font-size: 18;\r\n  font-family: Verdana;\r\n  font-weight: bold;\r\n\r\n  background-color: #79dae8;\r\n  \r\n  color: #2155cd;\r\n}\r\n.color-estado[_ngcontent-%COMP%] {\r\n  border-radius: 40px 40px 40px 40px;\r\n  font-style: italic;\r\n  font-size: 18;\r\n  font-family: Verdana;\r\n  font-weight: bold;\r\n  color: rgb(32, 31, 31);\r\n  background-color: rgba(220, 20, 120, 0.781);\r\n}\r\n.color-estado[_ngcontent-%COMP%]:hover {\r\n  border-style: outset;\r\n  color: rgb(212, 226, 80);\r\n}\r\n.button-yellow[_ngcontent-%COMP%]:hover {\r\n  border-style: outset;\r\n  color: rgb(212, 226, 80);\r\n}\r\n.button-rosado[_ngcontent-%COMP%] {\r\n  color: floralwhite;\r\n  background-color: #2155cd;\r\n  width: 30%;\r\n  left: 35px;\r\n}\r\n.table-button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin: 12px;\r\n}\r\n.caja-range-btnAgrega-pdf[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 400px 1fr;\r\n  height: 100px;\r\n\r\n  margin-top: 30px;\r\n  margin-bottom: 5px;\r\n}\r\n.caja-range-btnAgrega-pdf[_ngcontent-%COMP%]   .table-button-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.caja-range-btnAgrega-pdf[_ngcontent-%COMP%]   .table-button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding: 3px 10px;\r\n  font-size: 14px;\r\n}\r\n.caja-range-btnAgrega-pdf[_ngcontent-%COMP%]   .table-range[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: flex-end;\r\n}\r\n.caja-range-btnAgrega-pdf[_ngcontent-%COMP%]   .table-range[_ngcontent-%COMP%]   .search-form-range[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n}\r\n.caja-range-btnAgrega-pdf[_ngcontent-%COMP%]   .table-range[_ngcontent-%COMP%]   .search-form-field[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  width: 300px;\r\n}\r\n.caja-range-btnAgrega-pdf[_ngcontent-%COMP%]   .table-range[_ngcontent-%COMP%]   .search-form-range[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n  margin-left: 5px;\r\n  padding: 3px 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXByYXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsZ0JBQWdCOztFQUVoQixtQkFBbUI7QUFDckI7QUFDQTs7RUFFRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7QUFFQTtFQUNFLFVBQVU7RUFDVixVQUFVO0FBQ1o7QUFDQTtFQUNFLFVBQVU7RUFDVixVQUFVO0FBQ1o7QUFDQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7QUFDQTtFQUNFLFVBQVU7RUFDVixVQUFVO0FBQ1o7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixzQ0FBc0M7RUFDdEMsY0FBYzs7RUFFZCxpQkFBaUI7RUFDakIsa0JBQWtCOztFQUVsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGlCQUFpQjs7RUFFakIseUJBQXlCO0VBQ3pCLHNDQUFzQztFQUN0QyxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QiwyQ0FBMkM7QUFDN0M7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLFVBQVU7QUFDWjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLGFBQWE7O0VBRWIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFDQTs7RUFFRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImNvbXByYXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogOTUlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcblxyXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbn1cclxudGgsXHJcbnRkIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLm1hdC1jb2x1bW4taWRjb21wcmEge1xyXG4gIGZsZXg6IG5vbmU7XHJcbiAgd2lkdGg6IDMlO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1wcmVjaW9fY29tcHJhX3VuaSB7XHJcbiAgZmxleDogbm9uZTtcclxuICB3aWR0aDogNSU7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLXByZWNpb19jb21wcmFfdG90YWwge1xyXG4gIGZsZXg6IG5vbmU7XHJcbiAgd2lkdGg6IDclO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi10aXBvX2NvbXByb2JhbnRlIHtcclxuICBmbGV4OiBub25lO1xyXG4gIHdpZHRoOiAxMCU7XHJcbn1cclxuLm1hdC1jb2x1bW4tbnVtX2NvbXByb2JhbnRlIHtcclxuICBmbGV4OiBub25lO1xyXG4gIHdpZHRoOiAxMCU7XHJcbn1cclxuLm1hdC1jb2x1bW4tY2FudGlkYWRfaW5ncmVzbyB7XHJcbiAgZmxleDogbm9uZTtcclxuICB3aWR0aDogNiU7XHJcbn1cclxuLm1hdC1jb2x1bW4tb2JzZXJ2YWNpb24ge1xyXG4gIGZsZXg6IG5vbmU7XHJcbiAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tZmVjaGEge1xyXG4gIGZsZXg6IG5vbmU7XHJcbiAgd2lkdGg6IDglO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1ob3JhIHtcclxuICBmbGV4OiBub25lO1xyXG4gIHdpZHRoOiA1JTtcclxufVxyXG5cclxuLnNlYXJjaC1kaXYge1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLnBhZ2luYXRvciB7XHJcbiAgd2lkdGg6IDk1JTtcclxufVxyXG5cclxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG50aC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3OWRhZTg7XHJcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTQsIDE5MCwgODgpOyovXHJcbiAgY29sb3I6ICMyMTU1Y2Q7XHJcblxyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuXHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uLXllbGxvdyB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHggMTBweDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC1zaXplOiAxODtcclxuICBmb250LWZhbWlseTogVmVyZGFuYTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc5ZGFlODtcclxuICAvKmJhY2tncm91bmQtY29sb3I6IHJnYig1NCwgMTkwLCA4OCk7Ki9cclxuICBjb2xvcjogIzIxNTVjZDtcclxufVxyXG4uY29sb3ItZXN0YWRvIHtcclxuICBib3JkZXItcmFkaXVzOiA0MHB4IDQwcHggNDBweCA0MHB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXNpemU6IDE4O1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiByZ2IoMzIsIDMxLCAzMSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjAsIDIwLCAxMjAsIDAuNzgxKTtcclxufVxyXG4uY29sb3ItZXN0YWRvOmhvdmVyIHtcclxuICBib3JkZXItc3R5bGU6IG91dHNldDtcclxuICBjb2xvcjogcmdiKDIxMiwgMjI2LCA4MCk7XHJcbn1cclxuLmJ1dHRvbi15ZWxsb3c6aG92ZXIge1xyXG4gIGJvcmRlci1zdHlsZTogb3V0c2V0O1xyXG4gIGNvbG9yOiByZ2IoMjEyLCAyMjYsIDgwKTtcclxufVxyXG4uYnV0dG9uLXJvc2FkbyB7XHJcbiAgY29sb3I6IGZsb3JhbHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTU1Y2Q7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBsZWZ0OiAzNXB4O1xyXG59XHJcblxyXG4udGFibGUtYnV0dG9uLXJvdyBidXR0b24ge1xyXG4gIG1hcmdpbjogMTJweDtcclxufVxyXG5cclxuLmNhamEtcmFuZ2UtYnRuQWdyZWdhLXBkZiB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwMHB4IDFmcjtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG5cclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4uY2FqYS1yYW5nZS1idG5BZ3JlZ2EtcGRmIC50YWJsZS1idXR0b24tcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmNhamEtcmFuZ2UtYnRuQWdyZWdhLXBkZiAudGFibGUtYnV0dG9uLXJvdyBidXR0b24ge1xyXG4gIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uY2FqYS1yYW5nZS1idG5BZ3JlZ2EtcGRmIC50YWJsZS1yYW5nZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5jYWphLXJhbmdlLWJ0bkFncmVnYS1wZGYgLnRhYmxlLXJhbmdlIC5zZWFyY2gtZm9ybS1yYW5nZSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5jYWphLXJhbmdlLWJ0bkFncmVnYS1wZGYgLnRhYmxlLXJhbmdlIC5zZWFyY2gtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxufVxyXG4uY2FqYS1yYW5nZS1idG5BZ3JlZ2EtcGRmIC50YWJsZS1yYW5nZSAuc2VhcmNoLWZvcm0tcmFuZ2UsXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBwYWRkaW5nOiAzcHggMTVweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 69177:
/*!************************************************************!*\
  !*** ./src/app/components/admin/compras/compras.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComprasModule": () => (/* binding */ ComprasModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _compras_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compras-routing.module */ 69184);
/* harmony import */ var _compras_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compras.component */ 53518);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../material.module */ 63806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);





class ComprasModule {
}
ComprasModule.ɵfac = function ComprasModule_Factory(t) { return new (t || ComprasModule)(); };
ComprasModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ComprasModule });
ComprasModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _compras_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComprasRoutingModule, _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ComprasModule, { declarations: [_compras_component__WEBPACK_IMPORTED_MODULE_1__.ComprasComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _compras_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComprasRoutingModule, _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_components_admin_compras_compras_module_ts.js.map