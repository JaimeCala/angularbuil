"use strict";
(self["webpackChunkadmincarrito"] = self["webpackChunkadmincarrito"] || []).push([["src_app_components_admin_ventas_ventas_module_ts"],{

/***/ 61911:
/*!******************************************************************!*\
  !*** ./src/app/components/admin/ventas/ventas-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VentasRoutingModule": () => (/* binding */ VentasRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ventas_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ventas.component */ 13518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [{ path: '', component: _ventas_component__WEBPACK_IMPORTED_MODULE_0__.VentasComponent }];
class VentasRoutingModule {
}
VentasRoutingModule.ɵfac = function VentasRoutingModule_Factory(t) { return new (t || VentasRoutingModule)(); };
VentasRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: VentasRoutingModule });
VentasRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VentasRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 13518:
/*!*************************************************************!*\
  !*** ./src/app/components/admin/ventas/ventas.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VentasComponent": () => (/* binding */ VentasComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 38021);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 45381);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 54302);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var _modalventa_modalventa_modalventa_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modalventa/modalventa/modalventa.component */ 25063);
/* harmony import */ var pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfmake-wrapper */ 12432);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ 72933);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _service_venta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/venta.service */ 78629);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ 42937);








//import { ITable } from 'pdfmake-wrapper/lib/interfaces';















function VentasComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "LLene el campo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VentasComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Primera fecha inv\u00E1lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VentasComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Segunda fecha inv\u00E1lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VentasComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " PRECIO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " TOTAL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VentasComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r18.precio, " ");
} }
function VentasComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " NOMBRE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "VENDEDOR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VentasComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r19.nombrevendedor, " ");
} }
function VentasComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " PATERNO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " VENDEDOR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VentasComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r20.paternovendedor, " ");
} }
function VentasComponent_th_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " CELULAR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " VENDEDOR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VentasComponent_td_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r21.celularvendedor, " ");
} }
function VentasComponent_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " FECHA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " VENTA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VentasComponent_td_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, element_r22.fecha, "dd-MM-YYYY"), " ");
} }
function VentasComponent_th_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " ACCIONES ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VentasComponent_td_46_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VentasComponent_td_46_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25); const element_r23 = restoredCtx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r24.onOpenModal(element_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Detalles");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VentasComponent_tr_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 35);
} }
function VentasComponent_tr_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 36);
} }
const _c0 = function () { return [5, 10, 25, 100]; };
pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_1__.PdfMakeWrapper.setFonts(/*#__PURE__*/ (pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___namespace_cache || (pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___namespace_cache = __webpack_require__.t(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__, 2))));
class VentasComponent {
    constructor(ventaService, dialogProducto) {
        this.ventaService = ventaService;
        this.dialogProducto = dialogProducto;
        this.listaVentas = [];
        //URL=`${environment.API_URL}/img-producto/`;
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder();
        this.listaFiltroSearch = [];
        this.buscar = '';
        this.start = '';
        this.end = '';
        this.displayedColumns = ['precio', 'nombrevendedor', 'paternovendedor', 'celularvendedor', 'fecha', 'actions'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource();
        this.dataSourceUsuario = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.rangeForm = this.formBuilder.group({
            buscar: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            start: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            end: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
        this.ventaService.listenVenta().subscribe((m) => {
            console.log("probando----------", m);
            //---------agregar servicio para listar producto---//
            this.ObtenerListaVenta();
        });
    }
    ngOnInit() {
        this.ObtenerListaVenta();
        this.dataSource.filterPredicate = this.getFilterPredicate();
    }
    ObtenerListaVenta() {
        this.ventaService.getTodosVenta().subscribe((ventas) => {
            this.dataSource.data = ventas;
            this.listaVentas = ventas;
            this.dataSource.paginator = this.paginator;
        });
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }
    onOpenModal(ventas = {}) {
        //console.log('user-->', users);
        this.dialogProducto.open(_modalventa_modalventa_modalventa_component__WEBPACK_IMPORTED_MODULE_0__.ModalventaComponent, {
            height: '600px',
            width: '1000px',
            hasBackdrop: false,
            data: { title: 'Nuevo ventas', ventas },
        });
    }
    /*onOpenModalVentas(pedidos={}): void{
      //console.log('user-->', users);
      this.dialogProducto.open(ModalventaComponent,{
        height:'600px',
        width: '1000px',
        hasBackdrop: false,
        data: {title: 'Nuevo pedido',pedidos},
      });
    }*/
    onDelete(pedidoId) {
        if (window.confirm("Esta seguro de eliminar")) {
            this.ventaService
                .deleteVenta(pedidoId)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$))
                .subscribe(res => {
                window.alert(res);
            });
        }
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
            const fechapersonalizado = (0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.formatDate)(data.fecha, 'yyyy-MM-dd', 'en_ES');
            if (!DateStarted && !DateEnd) {
                filterData = data.nombrevendedor.trim().toLocaleLowerCase() == buscar;
                this.puchArrayToPrint(filterData, data, matchFilter);
            }
            else if (!buscar && (DateStarted && DateEnd)) {
                filterData = fechapersonalizado >= DateStarted && fechapersonalizado <= DateEnd;
                //this.listaFiltroSearch.length = 0;
                this.puchArrayToPrint(filterData, data, matchFilter);
            }
            else if (buscar && (DateStarted && DateEnd)) {
                filterData = (data.nombrevendedor.trim().toLocaleLowerCase() == buscar) && ((fechapersonalizado >= DateStarted) && (fechapersonalizado <= DateEnd));
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
    //------------------------generar pdf-----------------//
    createPdf() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const pdf = new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_1__.PdfMakeWrapper();
            const fechapdf = (0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.formatDate)(new Date(), 'dd-MM-yyyy', 'en_ES');
            const horapdf = (0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.formatDate)(new Date(), 'HH:mm:ss', 'en_ES');
            let ventaTotal = 0;
            pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_1__.Txt('MICROMARKET HOME SERVICE').alignment('center').bold().fontSize(18).end);
            pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_1__.Txt('DIRECCIÓN: Zona Zenkata').alignment('center').fontSize(14).end);
            pdf.add(yield new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_1__.Img('../../../../assets/logoagrandado.png').alignment('center').width(130).height(130).build());
            this.ventaService.getTodosVenta().subscribe((respdf) => {
                pdf.pageOrientation('landscape');
                pdf.pageMargins([50, 60]);
                pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_1__.Txt('FECHA: ' + fechapdf).alignment('right').fontSize(11).end);
                pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_1__.Txt('HORA: ' + horapdf).alignment('right').fontSize(11).end);
                pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_1__.Txt('DETALLE DE VENTAS').alignment('center').bold().fontSize(14).end);
                pdf.add('\n\n');
                if (this.listaFiltroSearch != '') {
                    pdf.add(this.createTable(this.listaFiltroSearch));
                    this.listaFiltroSearch.forEach(element => {
                        ventaTotal = ventaTotal + element.precio;
                    });
                    pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_1__.Txt('COSTO TOTAL COMPRA BS.: ' + ventaTotal).alignment('justify').end);
                }
                else {
                    pdf.add(this.createTable(this.listaVentas));
                    this.listaVentas.forEach(element => {
                        ventaTotal = ventaTotal + element.precio;
                    });
                    pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_1__.Txt('COSTO TOTAL COMPRA BS.: ' + ventaTotal).alignment('justify').end);
                }
                pdf.create().open();
            });
        });
    }
    createTable(datos) {
        [{}];
        return new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_1__.Table([
            ['CÓDIGO PEDIDO', 'PRECIO TOTAL BS', 'CÓDIGO VENDEDOR', 'NOMBRE VENDEDOR', 'APELLIDO PATERNO', 'CELULAR VENDEDOR', 'FECHA', 'CÓDIGO CLIENTE', 'CÓDIGO REPARTIDOR'],
            ...this.extractData(datos),
        ]).end;
    }
    extractData(datos) {
        return datos.map(row => {
            const fechaformate = (0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.formatDate)(row.fecha, 'dd-MM-yyyy', 'en_ES');
            return [row.idpedido, row.precio, row.idusuariovendedor, row.nombrevendedor, row.paternovendedor, row.celularvendedor, fechaformate, row.idusuariocliente, row.idusuariorepartidor];
        });
    }
}
VentasComponent.ɵfac = function VentasComponent_Factory(t) { return new (t || VentasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_venta_service__WEBPACK_IMPORTED_MODULE_3__.VentaService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog)); };
VentasComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: VentasComponent, selectors: [["app-ventas"]], viewQuery: function VentasComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 50, vars: 14, consts: [[1, "caja-range-btnAgrega-pdf"], [1, "table-button-row"], ["mat-flat-button", "", 1, "button-rosado", 3, "click"], [1, "table-range"], [3, "formGroup"], ["appearance", "outline", 1, "search-form-field"], ["matInput", "", "formControlName", "buscar", "color", "accent", "placeholder", "Buscar vendedor", "autocomplete", "off", 3, "keyup"], [4, "ngIf"], ["appearance", "outline", 1, "search-form-range"], [3, "rangePicker"], ["matStartDate", "", "formControlName", "start", "placeholder", "Fecha inicial"], ["matEndDate", "", "formControlName", "end", "placeholder", "Fecha final"], ["matSuffix", "", 3, "for"], ["picker", ""], ["mat-raised-button", "", "color", "accent", 1, "button-form-consultar", 3, "disabled", "click"], ["mat-raised-button", "", "color", "accent", 1, "button-form-limpiar", 3, "disabled", "click"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "precio"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "center", 4, "matCellDef"], ["matColumnDef", "nombrevendedor"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "paternovendedor"], ["matColumnDef", "celularvendedor"], ["matColumnDef", "fecha"], ["matColumnDef", "actions"], ["mat-header-cell", "", "mat-sort-header", "", "class", "actionCampo", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 1, "paginator", 3, "pageSizeOptions", "pageSize"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "center"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "actionCampo"], ["mat-button", "", "mat-raised-button", "", 1, "button-yellow", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function VentasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VentasComponent_Template_button_click_2_listener() { return ctx.createPdf(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Imprimir Reporte");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Buscar vendedor");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function VentasComponent_Template_input_keyup_9_listener($event) { return ctx.cargarEnTablaSiCampoVacio($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, VentasComponent_mat_error_10_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Fecha de venta");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, VentasComponent_mat_error_22_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, VentasComponent_mat_error_23_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VentasComponent_Template_button_click_24_listener() { return ctx.applyDateFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Consultar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VentasComponent_Template_button_click_26_listener() { return ctx.clearFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Limpiar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](29, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, VentasComponent_th_30_Template, 4, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, VentasComponent_td_31_Template, 2, 1, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](32, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, VentasComponent_th_33_Template, 4, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, VentasComponent_td_34_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](35, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, VentasComponent_th_36_Template, 4, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, VentasComponent_td_37_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](38, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, VentasComponent_th_39_Template, 4, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, VentasComponent_td_40_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](41, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, VentasComponent_th_42_Template, 4, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, VentasComponent_td_43_Template, 3, 4, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](44, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, VentasComponent_th_45_Template, 2, 0, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, VentasComponent_td_46_Template, 4, 0, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, VentasComponent_tr_47_Template, 1, 0, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, VentasComponent_tr_48_Template, 1, 0, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "mat-paginator", 29);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](13, _c0))("pageSize", 5);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatEndDate, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatHint, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDateRangePicker, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatError, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: ["table[_ngcontent-%COMP%]{\r\n    width: 95%;\r\n    margin: 0 auto;\r\n    margin-top: 1rem;\r\n\r\n    table-layout: fixed;\r\n\r\n\r\n }\r\n th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{\r\n     overflow: hidden;\r\n     width: 50px;\r\n     text-overflow: ellipsis;\r\n     white-space: nowrap;\r\n }\r\n .mat-column-idventa[_ngcontent-%COMP%] {\r\n     flex: none;\r\n     width: 4%;\r\n }\r\n .mat-column-idpedido[_ngcontent-%COMP%] {\r\n     flex: none;\r\n     width: 4%;\r\n }\r\n .mat-column-precio[_ngcontent-%COMP%] {\r\n     flex: none;\r\n     width: 4%;\r\n }\r\n .mat-column-idusuariovendedor[_ngcontent-%COMP%]{\r\n     flex: none;\r\n     width: 6%;\r\n }\r\n .mat-column-nombrevendedor[_ngcontent-%COMP%]{\r\n     flex: none;\r\n     width: 10%;\r\n }\r\n .mat-column-paternovendedor[_ngcontent-%COMP%]{\r\n     flex: none;\r\n     width: 8%;\r\n }\r\n .mat-column-celularvendedor[_ngcontent-%COMP%]{\r\n     flex: none;\r\n     width: 5%;\r\n }\r\n .mat-column-fecha[_ngcontent-%COMP%]{\r\n     flex: none;\r\n     width: 8%;\r\n }\r\n .mat-column-idusuariocliente[_ngcontent-%COMP%]{\r\n     flex: none;\r\n     width: 6%;\r\n }\r\n .mat-column-idusuariorepartidor[_ngcontent-%COMP%]{\r\n     flex: none;\r\n     width: 6%;\r\n }\r\n .mat-column-actions[_ngcontent-%COMP%]{\r\n  flex: none;\r\n  width: 8%;\r\n}\r\n .search-div[_ngcontent-%COMP%]{\r\n     margin: 10px;\r\n }\r\n \r\n .paginator[_ngcontent-%COMP%]{\r\n     width: 95%;\r\n }\r\n th.mat-sort-header-sorted[_ngcontent-%COMP%]{\r\n     color: black;\r\n }\r\n th.mat-header-cell[_ngcontent-%COMP%]{\r\n    background-color: #79DAE8;\r\n     \r\n     color: #2155CD;\r\n\r\n     font-weight: bold;\r\n     font-family: Arial;\r\n\r\n     text-align: left;\r\n     max-width: 300px;\r\n\r\n }\r\n .button-yellow[_ngcontent-%COMP%]{\r\n\r\n     border: none;\r\n     border-radius: 40px 10px ;\r\n     font-style: italic;\r\n     font-size: 18;\r\n     font-family: Verdana;\r\n     font-weight: bold;\r\n     background-color: #79DAE8;\r\n     \r\n     color: #2155CD;\r\n }\r\n .color-estado[_ngcontent-%COMP%]{\r\n\r\n     border-radius: 40px 40px 40px 40px ;\r\n     font-style: italic;\r\n     font-size: 18;\r\n     font-family: Verdana;\r\n     font-weight: bold;\r\n     color: rgb(32, 31, 31);\r\n     background-color: rgba(220, 20, 120, 0.781);\r\n }\r\n .color-estado[_ngcontent-%COMP%]:hover {\r\n\r\n     border-style: outset;\r\n     color: rgb(212, 226, 80);\r\n }\r\n .button-yellow[_ngcontent-%COMP%]:hover{\r\n     border-style: outset;\r\n     color: rgb(179, 164, 24);\r\n }\r\n .button-rosado[_ngcontent-%COMP%]{\r\n     color: floralwhite;\r\n     background-color: #2155CD;\r\n     width: 50%;\r\n     left:  35px;\r\n\r\n }\r\n .table-button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n     margin: 12px;\r\n\r\n }\r\n .caja-range-btnAgrega-pdf[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    grid-template-columns: 400px 1fr;\r\n    height: 100px;\r\n\r\n    margin-top: 30px;\r\n    margin-bottom: 5px;\r\n  }\r\n .caja-range-btnAgrega-pdf[_ngcontent-%COMP%]   .table-button-row[_ngcontent-%COMP%] {\r\n\r\n    display: flex;\r\n    align-items: center;\r\n\r\n\r\n  }\r\n .caja-range-btnAgrega-pdf[_ngcontent-%COMP%]   .table-button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n\r\n    padding: 3px 10px;\r\n    font-size: 14px;\r\n\r\n  }\r\n .caja-range-btnAgrega-pdf[_ngcontent-%COMP%]   .table-range[_ngcontent-%COMP%] {\r\n\r\n    display: flex;\r\n    align-items: flex-end;\r\n\r\n\r\n\r\n\r\n\r\n\r\n  }\r\n .caja-range-btnAgrega-pdf[_ngcontent-%COMP%]   .table-range[_ngcontent-%COMP%]   .search-form-range[_ngcontent-%COMP%]{\r\n   font-size: 12px;\r\n\r\n\r\n\r\n  }\r\n .caja-range-btnAgrega-pdf[_ngcontent-%COMP%]   .table-range[_ngcontent-%COMP%]   .search-form-field[_ngcontent-%COMP%]{\r\n\r\n    font-size:  12px;\r\n    width: 300px;\r\n\r\n\r\n\r\n  }\r\n .caja-range-btnAgrega-pdf[_ngcontent-%COMP%]   .table-range[_ngcontent-%COMP%]   .search-form-range[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{\r\n\r\n    margin-left: 5px;\r\n    padding: 3px 15px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbnRhcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxnQkFBZ0I7O0lBRWhCLG1CQUFtQjs7O0NBR3RCO0NBQ0E7S0FDSSxnQkFBZ0I7S0FDaEIsV0FBVztLQUNYLHVCQUF1QjtLQUN2QixtQkFBbUI7Q0FDdkI7Q0FDQTtLQUNJLFVBQVU7S0FDVixTQUFTO0NBQ2I7Q0FFQTtLQUNJLFVBQVU7S0FDVixTQUFTO0NBQ2I7Q0FFQTtLQUNJLFVBQVU7S0FDVixTQUFTO0NBQ2I7Q0FHRDtLQUNLLFVBQVU7S0FDVixTQUFTO0NBQ2I7Q0FDQTtLQUNJLFVBQVU7S0FDVixVQUFVO0NBQ2Q7Q0FJQTtLQUNJLFVBQVU7S0FDVixTQUFTO0NBQ2I7Q0FFQTtLQUNJLFVBQVU7S0FDVixTQUFTO0NBQ2I7Q0FFQTtLQUNJLFVBQVU7S0FDVixTQUFTO0NBQ2I7Q0FFQTtLQUNJLFVBQVU7S0FDVixTQUFTO0NBQ2I7Q0FDQTtLQUNJLFVBQVU7S0FDVixTQUFTO0NBQ2I7Q0FFRDtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7Q0FFQztLQUNJLFlBQVk7Q0FDaEI7Q0FDQTs7Ozs7O0dBTUU7Q0FDRjtLQUNJLFVBQVU7Q0FDZDtDQUVBO0tBQ0ksWUFBWTtDQUNoQjtDQUVBO0lBQ0cseUJBQXlCO0tBQ3hCLHNDQUFzQztLQUN0QyxjQUFjOztLQUVkLGlCQUFpQjtLQUNqQixrQkFBa0I7O0tBRWxCLGdCQUFnQjtLQUNoQixnQkFBZ0I7O0NBRXBCO0NBRUE7O0tBRUksWUFBWTtLQUNaLHlCQUF5QjtLQUN6QixrQkFBa0I7S0FDbEIsYUFBYTtLQUNiLG9CQUFvQjtLQUNwQixpQkFBaUI7S0FDakIseUJBQXlCO0tBQ3pCLHNDQUFzQztLQUN0QyxjQUFjO0NBQ2xCO0NBQ0E7O0tBRUksbUNBQW1DO0tBQ25DLGtCQUFrQjtLQUNsQixhQUFhO0tBQ2Isb0JBQW9CO0tBQ3BCLGlCQUFpQjtLQUNqQixzQkFBc0I7S0FDdEIsMkNBQTJDO0NBQy9DO0NBQ0E7O0tBRUksb0JBQW9CO0tBQ3BCLHdCQUF3QjtDQUM1QjtDQUNBO0tBQ0ksb0JBQW9CO0tBQ3BCLHdCQUF3QjtDQUM1QjtDQUNBO0tBQ0ksa0JBQWtCO0tBQ2xCLHlCQUF5QjtLQUN6QixVQUFVO0tBQ1YsV0FBVzs7Q0FFZjtDQUdBO0tBQ0ksWUFBWTs7Q0FFaEI7Q0FJQztJQUNFLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsYUFBYTs7SUFFYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0NBQ0E7O0lBRUUsYUFBYTtJQUNiLG1CQUFtQjs7O0VBR3JCO0NBQ0E7O0lBRUUsaUJBQWlCO0lBQ2pCLGVBQWU7O0VBRWpCO0NBQ0E7O0lBRUUsYUFBYTtJQUNiLHFCQUFxQjs7Ozs7OztFQU92QjtDQUdBO0dBQ0MsZUFBZTs7OztFQUloQjtDQUNBOztJQUVFLGdCQUFnQjtJQUNoQixZQUFZOzs7O0VBSWQ7Q0FDQTs7SUFFRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InZlbnRhcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGV7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG5cclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcblxyXG5cclxuIH1cclxuIHRoLHRke1xyXG4gICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuIH1cclxuIC5tYXQtY29sdW1uLWlkdmVudGEge1xyXG4gICAgIGZsZXg6IG5vbmU7XHJcbiAgICAgd2lkdGg6IDQlO1xyXG4gfVxyXG5cclxuIC5tYXQtY29sdW1uLWlkcGVkaWRvIHtcclxuICAgICBmbGV4OiBub25lO1xyXG4gICAgIHdpZHRoOiA0JTtcclxuIH1cclxuXHJcbiAubWF0LWNvbHVtbi1wcmVjaW8ge1xyXG4gICAgIGZsZXg6IG5vbmU7XHJcbiAgICAgd2lkdGg6IDQlO1xyXG4gfVxyXG5cclxuXHJcbi5tYXQtY29sdW1uLWlkdXN1YXJpb3ZlbmRlZG9ye1xyXG4gICAgIGZsZXg6IG5vbmU7XHJcbiAgICAgd2lkdGg6IDYlO1xyXG4gfVxyXG4gLm1hdC1jb2x1bW4tbm9tYnJldmVuZGVkb3J7XHJcbiAgICAgZmxleDogbm9uZTtcclxuICAgICB3aWR0aDogMTAlO1xyXG4gfVxyXG5cclxuXHJcblxyXG4gLm1hdC1jb2x1bW4tcGF0ZXJub3ZlbmRlZG9ye1xyXG4gICAgIGZsZXg6IG5vbmU7XHJcbiAgICAgd2lkdGg6IDglO1xyXG4gfVxyXG5cclxuIC5tYXQtY29sdW1uLWNlbHVsYXJ2ZW5kZWRvcntcclxuICAgICBmbGV4OiBub25lO1xyXG4gICAgIHdpZHRoOiA1JTtcclxuIH1cclxuXHJcbiAubWF0LWNvbHVtbi1mZWNoYXtcclxuICAgICBmbGV4OiBub25lO1xyXG4gICAgIHdpZHRoOiA4JTtcclxuIH1cclxuXHJcbiAubWF0LWNvbHVtbi1pZHVzdWFyaW9jbGllbnRle1xyXG4gICAgIGZsZXg6IG5vbmU7XHJcbiAgICAgd2lkdGg6IDYlO1xyXG4gfVxyXG4gLm1hdC1jb2x1bW4taWR1c3VhcmlvcmVwYXJ0aWRvcntcclxuICAgICBmbGV4OiBub25lO1xyXG4gICAgIHdpZHRoOiA2JTtcclxuIH1cclxuXHJcbi5tYXQtY29sdW1uLWFjdGlvbnN7XHJcbiAgZmxleDogbm9uZTtcclxuICB3aWR0aDogOCU7XHJcbn1cclxuXHJcbiAuc2VhcmNoLWRpdntcclxuICAgICBtYXJnaW46IDEwcHg7XHJcbiB9XHJcbiAvKi5zZWFyY2gtZm9ybS1maWVsZHtcclxuICAgICB3aWR0aDogMzAlO1xyXG4gICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuXHJcblxyXG5cclxuIH0qL1xyXG4gLnBhZ2luYXRvcntcclxuICAgICB3aWR0aDogOTUlO1xyXG4gfVxyXG5cclxuIHRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWR7XHJcbiAgICAgY29sb3I6IGJsYWNrO1xyXG4gfVxyXG5cclxuIHRoLm1hdC1oZWFkZXItY2VsbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OURBRTg7XHJcbiAgICAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTQsIDE5MCwgODgpOyovXHJcbiAgICAgY29sb3I6ICMyMTU1Q0Q7XHJcblxyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuXHJcbiAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG5cclxuIH1cclxuXHJcbiAuYnV0dG9uLXllbGxvd3tcclxuXHJcbiAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDQwcHggMTBweCA7XHJcbiAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgIGZvbnQtc2l6ZTogMTg7XHJcbiAgICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc5REFFODtcclxuICAgICAvKmJhY2tncm91bmQtY29sb3I6IHJnYig1NCwgMTkwLCA4OCk7Ki9cclxuICAgICBjb2xvcjogIzIxNTVDRDtcclxuIH1cclxuIC5jb2xvci1lc3RhZG97XHJcblxyXG4gICAgIGJvcmRlci1yYWRpdXM6IDQwcHggNDBweCA0MHB4IDQwcHggO1xyXG4gICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICBmb250LXNpemU6IDE4O1xyXG4gICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgIGNvbG9yOiByZ2IoMzIsIDMxLCAzMSk7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjAsIDIwLCAxMjAsIDAuNzgxKTtcclxuIH1cclxuIC5jb2xvci1lc3RhZG86aG92ZXIge1xyXG5cclxuICAgICBib3JkZXItc3R5bGU6IG91dHNldDtcclxuICAgICBjb2xvcjogcmdiKDIxMiwgMjI2LCA4MCk7XHJcbiB9XHJcbiAuYnV0dG9uLXllbGxvdzpob3ZlcntcclxuICAgICBib3JkZXItc3R5bGU6IG91dHNldDtcclxuICAgICBjb2xvcjogcmdiKDE3OSwgMTY0LCAyNCk7XHJcbiB9XHJcbiAuYnV0dG9uLXJvc2Fkb3tcclxuICAgICBjb2xvcjogZmxvcmFsd2hpdGU7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxNTVDRDtcclxuICAgICB3aWR0aDogNTAlO1xyXG4gICAgIGxlZnQ6ICAzNXB4O1xyXG5cclxuIH1cclxuXHJcblxyXG4gLnRhYmxlLWJ1dHRvbi1yb3cgYnV0dG9ue1xyXG4gICAgIG1hcmdpbjogMTJweDtcclxuXHJcbiB9XHJcblxyXG5cclxuXHJcbiAgLmNhamEtcmFuZ2UtYnRuQWdyZWdhLXBkZntcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwMHB4IDFmcjtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcbiAgLmNhamEtcmFuZ2UtYnRuQWdyZWdhLXBkZiAudGFibGUtYnV0dG9uLXJvdyB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG5cclxuICB9XHJcbiAgLmNhamEtcmFuZ2UtYnRuQWdyZWdhLXBkZiAudGFibGUtYnV0dG9uLXJvdyBidXR0b257XHJcblxyXG4gICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gIH1cclxuICAuY2FqYS1yYW5nZS1idG5BZ3JlZ2EtcGRmIC50YWJsZS1yYW5nZSB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICB9XHJcblxyXG5cclxuICAuY2FqYS1yYW5nZS1idG5BZ3JlZ2EtcGRmIC50YWJsZS1yYW5nZSAuc2VhcmNoLWZvcm0tcmFuZ2V7XHJcbiAgIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcblxyXG5cclxuICB9XHJcbiAgLmNhamEtcmFuZ2UtYnRuQWdyZWdhLXBkZiAudGFibGUtcmFuZ2UgLnNlYXJjaC1mb3JtLWZpZWxke1xyXG5cclxuICAgIGZvbnQtc2l6ZTogIDEycHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcblxyXG5cclxuXHJcbiAgfVxyXG4gIC5jYWphLXJhbmdlLWJ0bkFncmVnYS1wZGYgLnRhYmxlLXJhbmdlIC5zZWFyY2gtZm9ybS1yYW5nZSwgYnV0dG9ue1xyXG5cclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nOiAzcHggMTVweDtcclxuICB9XHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 86151:
/*!**********************************************************!*\
  !*** ./src/app/components/admin/ventas/ventas.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VentasModule": () => (/* binding */ VentasModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ventas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ventas-routing.module */ 61911);
/* harmony import */ var _ventas_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ventas.component */ 13518);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../material.module */ 63806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);





class VentasModule {
}
VentasModule.ɵfac = function VentasModule_Factory(t) { return new (t || VentasModule)(); };
VentasModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: VentasModule });
VentasModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ventas_routing_module__WEBPACK_IMPORTED_MODULE_0__.VentasRoutingModule,
            _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](VentasModule, { declarations: [_ventas_component__WEBPACK_IMPORTED_MODULE_1__.VentasComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _ventas_routing_module__WEBPACK_IMPORTED_MODULE_0__.VentasRoutingModule,
        _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_components_admin_ventas_ventas_module_ts.js.map