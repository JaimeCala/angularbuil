"use strict";
(self["webpackChunkadmincarrito"] = self["webpackChunkadmincarrito"] || []).push([["src_app_components_admin_producto_producto_module_ts"],{

/***/ 48263:
/*!**********************************************************************!*\
  !*** ./src/app/components/admin/producto/producto-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductoRoutingModule": () => (/* binding */ ProductoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _producto_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./producto.component */ 68355);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [{ path: '', component: _producto_component__WEBPACK_IMPORTED_MODULE_0__.ProductoComponent }];
class ProductoRoutingModule {
}
ProductoRoutingModule.ɵfac = function ProductoRoutingModule_Factory(t) { return new (t || ProductoRoutingModule)(); };
ProductoRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProductoRoutingModule });
ProductoRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProductoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 68355:
/*!*****************************************************************!*\
  !*** ./src/app/components/admin/producto/producto.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductoComponent": () => (/* binding */ ProductoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ 38021);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ 45381);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 54302);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 94283);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _modalproducto_modalproducto_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modalproducto/modalproducto.component */ 63305);
/* harmony import */ var _modaloferta_modaloferta_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modaloferta/modaloferta.component */ 70960);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pdfmake-wrapper */ 12432);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ 72933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_service_producto_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/producto.service */ 71729);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ 37007);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ 32220);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/datepicker */ 42937);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 52529);










//import { ITable } from 'pdfmake-wrapper/lib/interfaces';




















function ProductoComponent_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "LLene el campo");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ProductoComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "LLene el campo");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ProductoComponent_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Primera fecha inv\u00E1lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ProductoComponent_mat_error_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Segunda fecha inv\u00E1lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ProductoComponent_th_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "NOMBRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ProductoComponent_td_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](element_r33.nombre);
} }
function ProductoComponent_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "STOCK");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ProductoComponent_td_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](element_r34.stock);
} }
function ProductoComponent_th_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "M\u00CDNIMO");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ProductoComponent_td_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](element_r35.minimo);
} }
function ProductoComponent_th_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "VENCIMIENTO");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ProductoComponent_td_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](2, 1, element_r36.vencimiento, "dd-MM-YYYY"), " ");
} }
function ProductoComponent_th_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "PRECIO");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ProductoComponent_td_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](element_r37.precio);
} }
function ProductoComponent_th_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "IMAGEN");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ProductoComponent_td_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r38 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r16.URL + element_r38.imgproductos[0].nombreimgprodu, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
} }
function ProductoComponent_th_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "PESO");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ProductoComponent_td_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](element_r39.peso);
} }
function ProductoComponent_th_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "UNIDAD");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ProductoComponent_td_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", element_r40.unidadproductos[0].valor, " ");
} }
function ProductoComponent_th_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "CATEGOR\u00CDA");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ProductoComponent_td_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](element_r41.categoria.nombre);
} }
function ProductoComponent_th_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "OFERTA");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ProductoComponent_td_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](element_r42.oferta);
} }
function ProductoComponent_th_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " EDIT/DEL/OFFER ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ProductoComponent_td_70_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProductoComponent_td_70_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r45); const element_r43 = restoredCtx.$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r44.onOpenModal(element_r43); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProductoComponent_td_70_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r45); const element_r43 = restoredCtx.$implicit; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r46.onDelete(element_r43.idproducto); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProductoComponent_td_70_Template_button_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r45); const element_r43 = restoredCtx.$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r47.onOpenModalOferta(element_r43); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "local_offer");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ProductoComponent_th_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " ALERT M\u00CDN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ProductoComponent_td_73_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProductoComponent_td_73_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r54); const element_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r52.onOpenModal(element_r48); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ProductoComponent_td_73_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProductoComponent_td_73_ng_template_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r57); const element_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r55.onOpenModal(element_r48); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "star_half");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ProductoComponent_td_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ProductoComponent_td_73_button_2_Template, 3, 0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, ProductoComponent_td_73_ng_template_3_Template, 3, 0, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r48 = ctx.$implicit;
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", element_r48.stock >= element_r48.minimo)("ngIfElse", _r50);
} }
function ProductoComponent_th_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " ALERT VENCI ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ProductoComponent_td_76_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProductoComponent_td_76_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r64); const element_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r62.onOpenModal(element_r58); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "hourglass_empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ProductoComponent_td_76_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProductoComponent_td_76_ng_template_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r67); const element_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r65.onOpenModal(element_r58); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "hourglass_full");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ProductoComponent_td_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ProductoComponent_td_76_button_2_Template, 3, 0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, ProductoComponent_td_76_ng_template_3_Template, 3, 0, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r58 = ctx.$implicit;
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](4);
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", element_r58.vencimiento <= ctx_r30.hoymas30dias)("ngIfElse", _r60);
} }
function ProductoComponent_tr_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 49);
} }
function ProductoComponent_tr_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 50);
} }
const _c0 = function () { return [5, 10, 25, 100]; };
pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_5__.PdfMakeWrapper.setFonts(/*#__PURE__*/ (pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6___namespace_cache || (pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6___namespace_cache = __webpack_require__.t(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6__, 2))));
class ProductoComponent {
    constructor(productoService, dialogProducto) {
        this.productoService = productoService;
        this.dialogProducto = dialogProducto;
        this.listaProductos = [];
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder();
        this.listaFiltroSearch = [];
        this.productoporvencer = '';
        this.buscar = '';
        this.start = '';
        this.end = '';
        this.listaCategoria = [];
        this.URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/img-producto/`;
        this.displayedColumns = [
            'nombre',
            'stock',
            'minimo',
            'vencimiento',
            'precio',
            'linkimgprodu',
            'peso',
            'valor',
            'nombre_categoria',
            'oferta',
            'actions',
            'icon_minimo',
            'icon_porvencer',
        ];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subscription();
        this.rangeForm = this.formBuilder.group({
            productoporvencer: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            buscar: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            start: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            end: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        });
        this.productoService.listenProducto().subscribe((m) => {
            //---------agregar servicio para listar producto---//
            this.ObtenerListaProducto();
        });
    }
    ngOnInit() {
        this.ObtenerListaProducto();
        this.dataSource.filterPredicate = this.getFilterPredicate();
        //asignamos la fecha actual + 10 dias
        //const  fechahoy = new Date();
        this.hoymas30dias = moment__WEBPACK_IMPORTED_MODULE_4__(new Date(new Date()))
            .add(30, 'days')
            .format('YYYY-MM-DD');
    }
    ObtenerListaProducto() {
        this.subscription.add(this.productoService.getTodosProducto().subscribe((productos) => {
            this.dataSource.data = productos;
            this.listaProductos = productos;
            this.dataSource.paginator = this.paginator;
        }));
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }
    onOpenModal(productos = {}) {
        //console.log('user-->', users);
        this.dialogProducto.open(_modalproducto_modalproducto_component__WEBPACK_IMPORTED_MODULE_1__.ModalproductoComponent, {
            height: '650px',
            width: '1000px',
            hasBackdrop: false,
            data: { title: 'Nuevo producto', productos },
        });
    }
    onOpenModalOferta(productos = {}) {
        //console.log('user-->', users);
        this.dialogProducto.open(_modaloferta_modaloferta_component__WEBPACK_IMPORTED_MODULE_2__.ModalofertaComponent, {
            height: '300px',
            width: '400px',
            hasBackdrop: false,
            data: { title: 'Oferta con descuento', productos },
        });
    }
    onDelete(productoId) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
            title: 'Eliminar',
            text: 'No se podrá revertir la acción',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar producto',
        }).then((result) => {
            if (result.value) {
                this.productoService
                    .deleteProducto(productoId)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$))
                    .subscribe((res) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire('Eliminado!!', ' El producto ahora es inactivo.', 'success');
                    this.productoService.filterProducto('genial');
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
            let produvencer = '';
            let buscar = '';
            let DateStarted = '';
            let DateEnd = '';
            if (filterArray[0] === 'proporvencer') {
                produvencer = filterArray[1];
            }
            if (filterArray[0] === 'buscarcate') {
                buscar = filterArray[1];
            }
            if (filterArray[0] === 'rangofecha') {
                DateStarted = filterArray[1];
                DateEnd = filterArray[2];
            }
            if (filterArray[0] === 'fieldfull') {
                produvencer = filterArray[1];
                buscar = filterArray[2];
                DateStarted = filterArray[3];
                DateEnd = filterArray[4];
            }
            //const porVencer = filterArray[0];
            let filterData;
            const matchFilter = [];
            if (!DateStarted && !DateEnd && !produvencer) {
                filterData = data.categoria.nombre.trim().toLocaleLowerCase() == buscar;
                this.puchArrayToPrint(filterData, data, matchFilter);
            }
            else if (!buscar && !produvencer && DateStarted && DateEnd) {
                filterData =
                    data.vencimiento >= DateStarted && data.vencimiento <= DateEnd;
                //this.listaFiltroSearch.length = 0;
                this.puchArrayToPrint(filterData, data, matchFilter);
            }
            else if (!buscar && !DateStarted && !DateEnd) {
                filterData = data.vencimiento <= this.hoymas30dias;
                this.puchArrayToPrint(filterData, data, matchFilter);
            }
            else if (produvencer && buscar && DateStarted && DateEnd) {
                filterData =
                    data.vencimiento <= this.hoymas30dias &&
                        data.categoria.nombre.trim().toLocaleLowerCase() == buscar &&
                        data.vencimiento >= DateStarted &&
                        data.vencimiento <= DateEnd;
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
        const produporvencer = this.rangeForm.get('productoporvencer').value;
        const buscarofnombre = this.rangeForm.get('buscar').value;
        const fechaInicial = this.rangeForm.get('end').value;
        const fechaFinal = this.rangeForm.get('start').value;
        if (!buscarofnombre && !fechaInicial && !fechaFinal) {
            this.productoporvencer =
                produporvencer === null || produporvencer === '' ? '' : produporvencer;
            const proporvencer = 'proporvencer';
            const filterValue = proporvencer + '$' + this.productoporvencer;
            this.dataSource.filter = filterValue.trim().toLowerCase();
        }
        else if (!fechaInicial && !fechaFinal && !produporvencer) {
            this.buscar =
                buscarofnombre === null || buscarofnombre === '' ? '' : buscarofnombre;
            const buscarcate = 'buscarcate';
            const filterValue = buscarcate + '$' + this.buscar;
            this.dataSource.filter = filterValue.trim().toLowerCase();
        }
        else if (!buscarofnombre && !produporvencer) {
            const fechaIni = (0,_angular_common__WEBPACK_IMPORTED_MODULE_14__.formatDate)(fechaInicial, 'yyyy-MM-dd', 'en_ES');
            const fechaFin = (0,_angular_common__WEBPACK_IMPORTED_MODULE_14__.formatDate)(fechaFinal, 'yyyy-MM-dd', 'en_ES');
            this.end = fechaIni === null || fechaIni === '' ? '' : fechaIni;
            this.start = fechaFin === null || fechaFin === '' ? '' : fechaFin;
            const rangofecha = 'rangofecha';
            const filterValue = rangofecha + '$' + this.start + '$' + this.end;
            this.dataSource.filter = filterValue.trim().toLowerCase();
        }
        else {
            const fechaIni = (0,_angular_common__WEBPACK_IMPORTED_MODULE_14__.formatDate)(fechaInicial, 'yyyy-MM-dd', 'en_ES');
            const fechaFin = (0,_angular_common__WEBPACK_IMPORTED_MODULE_14__.formatDate)(fechaFinal, 'yyyy-MM-dd', 'en_ES');
            this.productoporvencer =
                produporvencer === null || produporvencer === '' ? '' : produporvencer;
            this.buscar =
                buscarofnombre === null || buscarofnombre === '' ? '' : buscarofnombre;
            this.end = fechaIni === null || fechaIni === '' ? '' : fechaIni;
            this.start = fechaFin === null || fechaFin === '' ? '' : fechaFin;
            const fieldfull = 'fieldfull';
            const filterValue = fieldfull +
                '$' +
                this.productoporvencer +
                '$' +
                this.buscar +
                '$' +
                this.start +
                '$' +
                this.end;
            this.dataSource.filter = filterValue.trim().toLowerCase();
        }
    }
    clearFilter() {
        this.rangeForm.patchValue({
            productoporvencer: '',
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const pdf = new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_5__.PdfMakeWrapper();
            const fechapdf = (0,_angular_common__WEBPACK_IMPORTED_MODULE_14__.formatDate)(new Date(), 'dd-MM-yyyy', 'en_ES');
            const horapdf = (0,_angular_common__WEBPACK_IMPORTED_MODULE_14__.formatDate)(new Date(), 'HH:mm:ss', 'en_ES');
            pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_5__.Txt('MICROMARKET HOME SERVICE')
                .alignment('center')
                .bold()
                .fontSize(18).end);
            pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_5__.Txt('DIRECCIÓN: Zona Zenkata').alignment('center').fontSize(14).end);
            pdf.add(yield new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_5__.Img('../../../../assets/logoagrandado.png')
                .alignment('center')
                .width(130)
                .height(130)
                .build());
            pdf.add('\n');
            pdf.pageMargins([50, 60]);
            pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_5__.Txt('FECHA: ' + fechapdf).alignment('right').fontSize(10).end);
            pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_5__.Txt('HORA: ' + horapdf).alignment('right').fontSize(10).end);
            pdf.add('\n');
            pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_5__.Txt('Todos los productos - por vencer - categoria - fecha vencimiento')
                .alignment('center')
                .fontSize(12).end);
            if (this.listaFiltroSearch != '') {
                pdf.add(this.createTable(this.listaFiltroSearch));
            }
            else {
                pdf.add(this.createTable(this.listaProductos));
            }
            pdf.create().open();
        });
    }
    createTable(datos) {
        [{}];
        return new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_5__.Table([
            [
                'CÓDIGO PRODUCTO',
                'NOMBRE PRODUCTO',
                'STOCK',
                'STOCK MÍNIMO',
                'PRECIO UNIDAD BS.',
                'VENCIMIENTO PRODUCTO',
            ],
            ...this.extractData(datos),
        ]).end;
    }
    extractData(datos) {
        return datos.map((row) => [
            row.idproducto,
            row.nombre,
            row.stock,
            row.minimo,
            row.precio,
            row.vencimiento,
        ]);
    }
}
ProductoComponent.ɵfac = function ProductoComponent_Factory(t) { return new (t || ProductoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_service_producto_service__WEBPACK_IMPORTED_MODULE_7__.ProductoService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog)); };
ProductoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ProductoComponent, selectors: [["app-producto"]], viewQuery: function ProductoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 80, vars: 15, consts: [[1, "caja-range-btnAgrega-pdf"], [1, "table-button-row"], ["mat-flat-button", "", 1, "button-rosado", 3, "click"], [1, "table-range"], [3, "formGroup"], ["appearance", "outline", 1, "search-form-porvencer"], ["formControlName", "productoporvencer"], ["value", "productoporvencer"], [4, "ngIf"], ["appearance", "outline", 1, "search-form-field"], ["matInput", "", "formControlName", "buscar", "color", "accent", "placeholder", "Buscar por categoria", "autocomplete", "off", 3, "keyup"], ["appearance", "outline", 1, "search-form-range"], [3, "rangePicker"], ["matStartDate", "", "formControlName", "start", "placeholder", "Fecha inicial"], ["matEndDate", "", "formControlName", "end", "placeholder", "Fecha final"], ["matSuffix", "", 3, "for"], ["picker", ""], ["mat-raised-button", "", "color", "accent", 1, "button-form-consultar", 3, "disabled", "click"], ["mat-raised-button", "", "color", "accent", 1, "button-form-limpiar", 3, "disabled", "click"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "nombre"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "stock"], ["matColumnDef", "minimo"], ["matColumnDef", "vencimiento"], ["matColumnDef", "precio"], ["matColumnDef", "linkimgprodu"], ["matColumnDef", "peso"], ["matColumnDef", "valor"], ["matColumnDef", "nombre_categoria"], ["matColumnDef", "oferta"], ["matColumnDef", "actions"], ["mat-header-cell", "", "mat-sort-header", "", "class", "actionCampo", 4, "matHeaderCellDef"], ["matColumnDef", "icon_minimo"], ["matColumnDef", "icon_porvencer"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 1, "paginator", 3, "pageSizeOptions", "pageSize"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [2, "width", "50px", "height", "50px", 3, "src"], ["mat-header-cell", "", "mat-sort-header", "", 1, "actionCampo"], ["mat-icon-button", "", 1, "button-yellow", 3, "click"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["mat-icon-button", "", "class", "button-yellow", 3, "click", 4, "ngIf", "ngIfElse"], ["colorIconMinimoAlert", ""], ["mat-icon-button", "", 2, "background-color", "red", 3, "click"], ["mat-icon-button", "", "style", "background-color: red", 3, "click", 4, "ngIf", "ngIfElse"], ["mat-header-row", ""], ["mat-row", ""]], template: function ProductoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProductoComponent_Template_button_click_2_listener() { return ctx.onOpenModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Agregar producto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProductoComponent_Template_button_click_4_listener() { return ctx.createPdf(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, " Imprimir Reporte ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Producto por vencer");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "POR VENCER");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, ProductoComponent_mat_error_14_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Buscar por categoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup", function ProductoComponent_Template_input_keyup_18_listener($event) { return ctx.cargarEnTablaSiCampoVacio($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, ProductoComponent_mat_error_19_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "fechas vencimiento ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "mat-date-range-input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "MM/DD/YYYY \u2013 MM/DD/YYYY");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](28, "mat-datepicker-toggle", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](29, "mat-date-range-picker", null, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, ProductoComponent_mat_error_31_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, ProductoComponent_mat_error_32_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProductoComponent_Template_button_click_33_listener() { return ctx.applyDateFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, " Consultar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProductoComponent_Template_button_click_35_listener() { return ctx.clearFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, " Limpiar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](38, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](39, ProductoComponent_th_39_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](40, ProductoComponent_td_40_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](41, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](42, ProductoComponent_th_42_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](43, ProductoComponent_td_43_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](44, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](45, ProductoComponent_th_45_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](46, ProductoComponent_td_46_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](47, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](48, ProductoComponent_th_48_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](49, ProductoComponent_td_49_Template, 3, 4, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](50, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](51, ProductoComponent_th_51_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](52, ProductoComponent_td_52_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](53, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](54, ProductoComponent_th_54_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](55, ProductoComponent_td_55_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](56, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](57, ProductoComponent_th_57_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](58, ProductoComponent_td_58_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](59, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](60, ProductoComponent_th_60_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](61, ProductoComponent_td_61_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](62, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](63, ProductoComponent_th_63_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](64, ProductoComponent_td_64_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](65, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](66, ProductoComponent_th_66_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](67, ProductoComponent_td_67_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](68, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](69, ProductoComponent_th_69_Template, 2, 0, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](70, ProductoComponent_td_70_Template, 11, 0, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](71, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](72, ProductoComponent_th_72_Template, 2, 0, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](73, ProductoComponent_td_73_Template, 5, 2, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](74, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](75, ProductoComponent_th_75_Template, 2, 0, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](76, ProductoComponent_td_76_Template, 5, 2, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](77, ProductoComponent_tr_77_Template, 1, 0, "tr", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](78, ProductoComponent_tr_78_Template, 1, 0, "tr", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](79, "mat-paginator", 38);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.rangeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.rangeForm.controls.productoporvencer.hasError("matProductoporvencerInvalid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.rangeForm.controls.buscar.hasError("matBuscarInvalid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("rangePicker", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("for", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.rangeForm.controls.start.hasError("matStartDateInvalid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.rangeForm.controls.end.hasError("matEndDateInvalid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.rangeForm.get("productoporvencer").invalid && ctx.rangeForm.get("buscar").invalid && (ctx.rangeForm.get("start").invalid || ctx.rangeForm.get("end").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", (ctx.rangeForm.get("start").invalid || ctx.rangeForm.get("end").invalid) && ctx.rangeForm.get("buscar").invalid && ctx.rangeForm.get("productoporvencer").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](14, _c0))("pageSize", 5);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__.MatEndDate, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatHint, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__.MatDateRangePicker, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatError, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCell, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe], styles: ["table[_ngcontent-%COMP%] {\r\n  width: 95%;\r\n  margin: 0 auto;\r\n  margin-top: 1rem;\r\n\r\n  table-layout: fixed;\r\n}\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  width: 50px;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}\r\n.mat-column-idproducto[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 2%;\r\n}\r\n.mat-column-stock[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 5%;\r\n}\r\n.mat-column-minimo[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 5%;\r\n}\r\n.mat-column-maximo[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 4%;\r\n}\r\n.mat-column-precio[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 5%;\r\n}\r\n.mat-column-disponible[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 3%;\r\n}\r\n.mat-column-estado[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 4%;\r\n}\r\n.mat-column-peso[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 4%;\r\n}\r\n.mat-column-valor[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 4%;\r\n}\r\n.mat-column-fecha[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 6%;\r\n}\r\n.mat-column-linkimgprodu[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 5%;\r\n}\r\n.mat-column-vencimiento[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 10%;\r\n}\r\n.mat-column-idimgproducto[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 3%;\r\n}\r\n.mat-column-nombre[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 20%;\r\n}\r\n.mat-column-oferta[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 4%;\r\n}\r\n.mat-column-descripcion[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 5%;\r\n}\r\n.mat-column-nombre_categoria[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 8%;\r\n}\r\n.mat-column-actions[_ngcontent-%COMP%] {\r\n  flex: none;\r\n  width: 13%;\r\n}\r\n.search-div[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n}\r\n.paginator[_ngcontent-%COMP%] {\r\n  width: 95%;\r\n}\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\nth.mat-header-cell[_ngcontent-%COMP%] {\r\n  background-color: #79dae8;\r\n  \r\n  color: #2155cd;\r\n\r\n  font-weight: bold;\r\n  font-family: Arial;\r\n\r\n  text-align: left;\r\n  max-width: 300px;\r\n}\r\n.button-yellow[_ngcontent-%COMP%] {\r\n  background-color: rgb(19, 226, 233);\r\n}\r\n.button-rosado[_ngcontent-%COMP%] {\r\n  color: floralwhite;\r\n  background-color: #2155cd;\r\n  width: 40%;\r\n  left: 25px;\r\n}\r\n.table-button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin: 12px;\r\n}\r\n.caja-range-btnAgrega-pdf[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 400px 1fr;\r\n  height: 100px;\r\n\r\n  margin-top: 30px;\r\n  margin-bottom: 5px;\r\n}\r\n.caja-range-btnAgrega-pdf[_ngcontent-%COMP%]   .table-button-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.caja-range-btnAgrega-pdf[_ngcontent-%COMP%]   .table-button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding: 3px 10px;\r\n  font-size: 14px;\r\n}\r\n.caja-range-btnAgrega-pdf[_ngcontent-%COMP%]   .table-range[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: flex-end;\r\n}\r\n.caja-range-btnAgrega-pdf[_ngcontent-%COMP%]   .table-range[_ngcontent-%COMP%]   .search-form-range[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n}\r\n.caja-range-btnAgrega-pdf[_ngcontent-%COMP%]   .table-range[_ngcontent-%COMP%]   .search-form-field[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  width: 200px;\r\n  margin-left: 5px;\r\n}\r\n.caja-range-btnAgrega-pdf[_ngcontent-%COMP%]   .table-range[_ngcontent-%COMP%]   .search-form-porvencer[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  width: 150px;\r\n}\r\n.caja-range-btnAgrega-pdf[_ngcontent-%COMP%]   .table-range[_ngcontent-%COMP%]   .search-form-range[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n  margin-left: 5px;\r\n  padding: 3px 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGdCQUFnQjs7RUFFaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7O0VBRUUsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYO0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYO0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYO0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYO0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYO0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYO0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYO0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsVUFBVTtBQUNaO0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYO0FBRUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtBQUNaO0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsVUFBVTtBQUNaO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsc0NBQXNDO0VBQ3RDLGNBQWM7O0VBRWQsaUJBQWlCO0VBQ2pCLGtCQUFrQjs7RUFFbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixVQUFVO0FBQ1o7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxhQUFhOztFQUViLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUNBOztFQUVFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoicHJvZHVjdG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogOTUlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcblxyXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbn1cclxudGgsXHJcbnRkIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLm1hdC1jb2x1bW4taWRwcm9kdWN0byB7XHJcbiAgZmxleDogbm9uZTtcclxuICB3aWR0aDogMiU7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLXN0b2NrIHtcclxuICBmbGV4OiBub25lO1xyXG4gIHdpZHRoOiA1JTtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tbWluaW1vIHtcclxuICBmbGV4OiBub25lO1xyXG4gIHdpZHRoOiA1JTtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tbWF4aW1vIHtcclxuICBmbGV4OiBub25lO1xyXG4gIHdpZHRoOiA0JTtcclxufVxyXG4ubWF0LWNvbHVtbi1wcmVjaW8ge1xyXG4gIGZsZXg6IG5vbmU7XHJcbiAgd2lkdGg6IDUlO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1kaXNwb25pYmxlIHtcclxuICBmbGV4OiBub25lO1xyXG4gIHdpZHRoOiAzJTtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tZXN0YWRvIHtcclxuICBmbGV4OiBub25lO1xyXG4gIHdpZHRoOiA0JTtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tcGVzbyB7XHJcbiAgZmxleDogbm9uZTtcclxuICB3aWR0aDogNCU7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLXZhbG9yIHtcclxuICBmbGV4OiBub25lO1xyXG4gIHdpZHRoOiA0JTtcclxufVxyXG4ubWF0LWNvbHVtbi1mZWNoYSB7XHJcbiAgZmxleDogbm9uZTtcclxuICB3aWR0aDogNiU7XHJcbn1cclxuLm1hdC1jb2x1bW4tbGlua2ltZ3Byb2R1IHtcclxuICBmbGV4OiBub25lO1xyXG4gIHdpZHRoOiA1JTtcclxufVxyXG4ubWF0LWNvbHVtbi12ZW5jaW1pZW50byB7XHJcbiAgZmxleDogbm9uZTtcclxuICB3aWR0aDogMTAlO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1pZGltZ3Byb2R1Y3RvIHtcclxuICBmbGV4OiBub25lO1xyXG4gIHdpZHRoOiAzJTtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tbm9tYnJlIHtcclxuICBmbGV4OiBub25lO1xyXG4gIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLW9mZXJ0YSB7XHJcbiAgZmxleDogbm9uZTtcclxuICB3aWR0aDogNCU7XHJcbn1cclxuLm1hdC1jb2x1bW4tZGVzY3JpcGNpb24ge1xyXG4gIGZsZXg6IG5vbmU7XHJcbiAgd2lkdGg6IDUlO1xyXG59XHJcbi5tYXQtY29sdW1uLW5vbWJyZV9jYXRlZ29yaWEge1xyXG4gIGZsZXg6IG5vbmU7XHJcbiAgd2lkdGg6IDglO1xyXG59XHJcbi5tYXQtY29sdW1uLWFjdGlvbnMge1xyXG4gIGZsZXg6IG5vbmU7XHJcbiAgd2lkdGg6IDEzJTtcclxufVxyXG5cclxuLnNlYXJjaC1kaXYge1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLnBhZ2luYXRvciB7XHJcbiAgd2lkdGg6IDk1JTtcclxufVxyXG5cclxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG50aC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3OWRhZTg7XHJcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTQsIDE5MCwgODgpOyovXHJcbiAgY29sb3I6ICMyMTU1Y2Q7XHJcblxyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuXHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uLXllbGxvdyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5LCAyMjYsIDIzMyk7XHJcbn1cclxuLmJ1dHRvbi1yb3NhZG8ge1xyXG4gIGNvbG9yOiBmbG9yYWx3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE1NWNkO1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgbGVmdDogMjVweDtcclxufVxyXG5cclxuLnRhYmxlLWJ1dHRvbi1yb3cgYnV0dG9uIHtcclxuICBtYXJnaW46IDEycHg7XHJcbn1cclxuXHJcbi5jYWphLXJhbmdlLWJ0bkFncmVnYS1wZGYge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MDBweCAxZnI7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuXHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuLmNhamEtcmFuZ2UtYnRuQWdyZWdhLXBkZiAudGFibGUtYnV0dG9uLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jYWphLXJhbmdlLWJ0bkFncmVnYS1wZGYgLnRhYmxlLWJ1dHRvbi1yb3cgYnV0dG9uIHtcclxuICBwYWRkaW5nOiAzcHggMTBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmNhamEtcmFuZ2UtYnRuQWdyZWdhLXBkZiAudGFibGUtcmFuZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uY2FqYS1yYW5nZS1idG5BZ3JlZ2EtcGRmIC50YWJsZS1yYW5nZSAuc2VhcmNoLWZvcm0tcmFuZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uY2FqYS1yYW5nZS1idG5BZ3JlZ2EtcGRmIC50YWJsZS1yYW5nZSAuc2VhcmNoLWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4uY2FqYS1yYW5nZS1idG5BZ3JlZ2EtcGRmIC50YWJsZS1yYW5nZSAuc2VhcmNoLWZvcm0tcG9ydmVuY2VyIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcbi5jYWphLXJhbmdlLWJ0bkFncmVnYS1wZGYgLnRhYmxlLXJhbmdlIC5zZWFyY2gtZm9ybS1yYW5nZSxcclxuYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIHBhZGRpbmc6IDNweCAxNXB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 25533:
/*!**************************************************************!*\
  !*** ./src/app/components/admin/producto/producto.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductoModule": () => (/* binding */ ProductoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _producto_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./producto-routing.module */ 48263);
/* harmony import */ var _producto_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./producto.component */ 68355);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../material.module */ 63806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);





class ProductoModule {
}
ProductoModule.ɵfac = function ProductoModule_Factory(t) { return new (t || ProductoModule)(); };
ProductoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ProductoModule });
ProductoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _producto_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductoRoutingModule, _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ProductoModule, { declarations: [_producto_component__WEBPACK_IMPORTED_MODULE_1__.ProductoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _producto_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductoRoutingModule, _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_components_admin_producto_producto_module_ts.js.map