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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _data_bindig_demo_data_bindig_demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-bindig-demo/data-bindig-demo.component */ "./src/app/data-bindig-demo/data-bindig-demo.component.ts");
/* harmony import */ var _event_bindig_demo_event_bindig_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-bindig-demo/event-bindig-demo.component */ "./src/app/event-bindig-demo/event-bindig-demo.component.ts");
/* harmony import */ var _input_demo_input_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input-demo/input-demo.component */ "./src/app/input-demo/input-demo.component.ts");
/* harmony import */ var _output_demo_output_demo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./output-demo/output-demo.component */ "./src/app/output-demo/output-demo.component.ts");
/* harmony import */ var _attribute_directive_demo_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attribute-directive-demo.directive */ "./src/app/attribute-directive-demo.directive.ts");
/* harmony import */ var _view_child_demo_view_child_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-child-demo/view-child-demo.component */ "./src/app/view-child-demo/view-child-demo.component.ts");
/* harmony import */ var _ng_content_and_content_child_demo_ng_content_and_content_child_demo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ng-content-and-content-child-demo/ng-content-and-content-child-demo.component */ "./src/app/ng-content-and-content-child-demo/ng-content-and-content-child-demo.component.ts");
/* harmony import */ var _demo_built_in_directives_demo_built_in_directives_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./demo-built-in-directives/demo-built-in-directives.component */ "./src/app/demo-built-in-directives/demo-built-in-directives.component.ts");
/* harmony import */ var _structural_directive_demo_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./structural-directive-demo.directive */ "./src/app/structural-directive-demo.directive.ts");
/* harmony import */ var _life_cycle_demo_life_cycle_demo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./life-cycle-demo/life-cycle-demo.component */ "./src/app/life-cycle-demo/life-cycle-demo.component.ts");













function AppComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r3 = ctx.ctx;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" view ", x_r3, " ");
} }
function AppComponent_app_life_cycle_demo_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-life-cycle-demo", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Content of life cycle demo component");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
class AppComponent {
    constructor() {
        this.message = 'Hello Angular 9+';
        this.someTextThroughComponentProperty = 'This is text binding through host component variable as input binding';
        this.ngDestroyDemoVariable = true;
        console.log('APP constructor ');
        // console.log('APP viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
    }
    handleSomethingChanged(event) {
        this.variableToCaptureOutputEventInfo = event;
    }
    ngOnChanges() {
        console.log('APP ngOnChanges ');
        // console.log('APP viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
    }
    ngOnInit() {
        console.log('APP ngOnInit ');
        // console.log('APP viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
    }
    ngDoCheck() {
        console.log('APP ngDoCheck ');
        // console.log('APP viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
    }
    ngAfterContentInit() {
        console.log('APP ngAfterContentInit ');
        // console.log('APP viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
    }
    ngAfterContentChecked() {
        console.log('APP ngAfterContentChecked ');
        // console.log('APP viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
    }
    ngAfterViewInit() {
        console.log('APP ngAfterViewInit ');
        // console.log('APP viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
    }
    ngAfterViewChecked() {
        console.log('APP ngAfterViewChecked ');
        // console.log('APP viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
    }
    ngOnDestroy() {
        console.log('APP ngOnDestroy ');
        // console.log('APP viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 29, vars: 6, consts: [[1, "container", 3, "ngStyle"], [1, "display-4"], ["someText", "This is direct text binding through component input"], [3, "someText"], [3, "somethingChanged"], ["appAttributeDirectiveDemo", "", 1, "container"], [2, "background-color", "lightgoldenrodyellow", "margin-bottom", "10px"], ["someText", "I am component sitting in content projection of another component"], ["contentChildRefVariable", ""], [1, "row"], ["class", "col", "views", "6", 4, "appStructuralDirectiveDemo"], ["inputText", "some text to trigger ngOnChanges", 4, "ngIf"], [3, "click"], ["views", "6", 1, "col"], ["inputText", "some text to trigger ngOnChanges"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "App component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-data-bindig-demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-event-bindig-demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-input-demo", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-input-demo", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-output-demo", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("somethingChanged", function AppComponent_Template_app_output_demo_somethingChanged_7_listener($event) { return ctx.handleSomethingChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " This is coming from Output demo component to App component ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-view-child-demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-ng-content-and-content-child-demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-input-demo", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " This is for content child demo and accessing this will apply background color ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-demo-built-in-directives");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " This is structral directive demo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AppComponent_div_23_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AppComponent_app_life_cycle_demo_25_Template, 3, 0, "app-life-cycle-demo", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_26_listener() { return ctx.ngDestroyDemoVariable = !ctx.ngDestroyDemoVariable; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "ngOnDestory gets called after this element click and the component gets destroyed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, false ? undefined : "black"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("someText", ctx.someTextThroughComponentProperty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.variableToCaptureOutputEventInfo, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ngDestroyDemoVariable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _data_bindig_demo_data_bindig_demo_component__WEBPACK_IMPORTED_MODULE_2__["DataBindigDemoComponent"], _event_bindig_demo_event_bindig_demo_component__WEBPACK_IMPORTED_MODULE_3__["EventBindigDemoComponent"], _input_demo_input_demo_component__WEBPACK_IMPORTED_MODULE_4__["InputDemoComponent"], _output_demo_output_demo_component__WEBPACK_IMPORTED_MODULE_5__["OutputDemoComponent"], _attribute_directive_demo_directive__WEBPACK_IMPORTED_MODULE_6__["AttributeDirectiveDemoDirective"], _view_child_demo_view_child_demo_component__WEBPACK_IMPORTED_MODULE_7__["ViewChildDemoComponent"], _ng_content_and_content_child_demo_ng_content_and_content_child_demo_component__WEBPACK_IMPORTED_MODULE_8__["NgContentAndContentChildDemoComponent"], _demo_built_in_directives_demo_built_in_directives_component__WEBPACK_IMPORTED_MODULE_9__["DemoBuiltInDirectivesComponent"], _structural_directive_demo_directive__WEBPACK_IMPORTED_MODULE_10__["StructuralDirectiveDemoDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _life_cycle_demo_life_cycle_demo_component__WEBPACK_IMPORTED_MODULE_11__["LifeCycleDemoComponent"]], styles: [".my-class-1[_ngcontent-%COMP%] {\r\n    background-color: greenyellow;\r\n}\r\n.my-class-2[_ngcontent-%COMP%] {\r\n    background-color: lightcoral;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWNsYXNzLTEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XHJcbn1cclxuLm15LWNsYXNzLTIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcclxufSJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _input_demo_input_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input-demo/input-demo.component */ "./src/app/input-demo/input-demo.component.ts");
/* harmony import */ var _output_demo_output_demo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./output-demo/output-demo.component */ "./src/app/output-demo/output-demo.component.ts");
/* harmony import */ var _view_child_demo_view_child_demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-child-demo/view-child-demo.component */ "./src/app/view-child-demo/view-child-demo.component.ts");
/* harmony import */ var _ng_content_and_content_child_demo_ng_content_and_content_child_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ng-content-and-content-child-demo/ng-content-and-content-child-demo.component */ "./src/app/ng-content-and-content-child-demo/ng-content-and-content-child-demo.component.ts");
/* harmony import */ var _data_bindig_demo_data_bindig_demo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data-bindig-demo/data-bindig-demo.component */ "./src/app/data-bindig-demo/data-bindig-demo.component.ts");
/* harmony import */ var _event_bindig_demo_event_bindig_demo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./event-bindig-demo/event-bindig-demo.component */ "./src/app/event-bindig-demo/event-bindig-demo.component.ts");
/* harmony import */ var _attribute_directive_demo_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./attribute-directive-demo.directive */ "./src/app/attribute-directive-demo.directive.ts");
/* harmony import */ var _host_listener_host_binding_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./host-listener-host-binding.directive */ "./src/app/host-listener-host-binding.directive.ts");
/* harmony import */ var _demo_built_in_directives_demo_built_in_directives_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./demo-built-in-directives/demo-built-in-directives.component */ "./src/app/demo-built-in-directives/demo-built-in-directives.component.ts");
/* harmony import */ var _structural_directive_demo_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./structural-directive-demo.directive */ "./src/app/structural-directive-demo.directive.ts");
/* harmony import */ var _life_cycle_demo_life_cycle_demo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./life-cycle-demo/life-cycle-demo.component */ "./src/app/life-cycle-demo/life-cycle-demo.component.ts");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _input_demo_input_demo_component__WEBPACK_IMPORTED_MODULE_4__["InputDemoComponent"],
        _output_demo_output_demo_component__WEBPACK_IMPORTED_MODULE_5__["OutputDemoComponent"],
        _view_child_demo_view_child_demo_component__WEBPACK_IMPORTED_MODULE_6__["ViewChildDemoComponent"],
        _ng_content_and_content_child_demo_ng_content_and_content_child_demo_component__WEBPACK_IMPORTED_MODULE_7__["NgContentAndContentChildDemoComponent"],
        _data_bindig_demo_data_bindig_demo_component__WEBPACK_IMPORTED_MODULE_8__["DataBindigDemoComponent"],
        _event_bindig_demo_event_bindig_demo_component__WEBPACK_IMPORTED_MODULE_9__["EventBindigDemoComponent"],
        _attribute_directive_demo_directive__WEBPACK_IMPORTED_MODULE_10__["AttributeDirectiveDemoDirective"],
        _host_listener_host_binding_directive__WEBPACK_IMPORTED_MODULE_11__["HostListenerHostBindingDirective"],
        _demo_built_in_directives_demo_built_in_directives_component__WEBPACK_IMPORTED_MODULE_12__["DemoBuiltInDirectivesComponent"],
        _structural_directive_demo_directive__WEBPACK_IMPORTED_MODULE_13__["StructuralDirectiveDemoDirective"],
        _life_cycle_demo_life_cycle_demo_component__WEBPACK_IMPORTED_MODULE_14__["LifeCycleDemoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _input_demo_input_demo_component__WEBPACK_IMPORTED_MODULE_4__["InputDemoComponent"],
                    _output_demo_output_demo_component__WEBPACK_IMPORTED_MODULE_5__["OutputDemoComponent"],
                    _view_child_demo_view_child_demo_component__WEBPACK_IMPORTED_MODULE_6__["ViewChildDemoComponent"],
                    _ng_content_and_content_child_demo_ng_content_and_content_child_demo_component__WEBPACK_IMPORTED_MODULE_7__["NgContentAndContentChildDemoComponent"],
                    _data_bindig_demo_data_bindig_demo_component__WEBPACK_IMPORTED_MODULE_8__["DataBindigDemoComponent"],
                    _event_bindig_demo_event_bindig_demo_component__WEBPACK_IMPORTED_MODULE_9__["EventBindigDemoComponent"],
                    _attribute_directive_demo_directive__WEBPACK_IMPORTED_MODULE_10__["AttributeDirectiveDemoDirective"],
                    _host_listener_host_binding_directive__WEBPACK_IMPORTED_MODULE_11__["HostListenerHostBindingDirective"],
                    _demo_built_in_directives_demo_built_in_directives_component__WEBPACK_IMPORTED_MODULE_12__["DemoBuiltInDirectivesComponent"],
                    _structural_directive_demo_directive__WEBPACK_IMPORTED_MODULE_13__["StructuralDirectiveDemoDirective"],
                    _life_cycle_demo_life_cycle_demo_component__WEBPACK_IMPORTED_MODULE_14__["LifeCycleDemoComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/attribute-directive-demo.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/attribute-directive-demo.directive.ts ***!
  \*******************************************************/
/*! exports provided: AttributeDirectiveDemoDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeDirectiveDemoDirective", function() { return AttributeDirectiveDemoDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AttributeDirectiveDemoDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        // this is example to set all styles in one go
        this.renderer.setAttribute(this.el.nativeElement, 'style', 'margin-bottom: 10px; border: solid 2px gray');
        // this is example to set one style at a time
        // this.renderer.setStyle(this.el.nativeElement, 'border', 'solid 2px gray');
        // this is example to access element through ElementRef which is NOT RECOMMENDED
        //this.el.nativeElement.style.backgroundColor = 'red';
    }
}
AttributeDirectiveDemoDirective.ɵfac = function AttributeDirectiveDemoDirective_Factory(t) { return new (t || AttributeDirectiveDemoDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
AttributeDirectiveDemoDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AttributeDirectiveDemoDirective, selectors: [["", "appAttributeDirectiveDemo", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributeDirectiveDemoDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appAttributeDirectiveDemo]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, null); })();


/***/ }),

/***/ "./src/app/data-bindig-demo/data-bindig-demo.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/data-bindig-demo/data-bindig-demo.component.ts ***!
  \****************************************************************/
/*! exports provided: DataBindigDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataBindigDemoComponent", function() { return DataBindigDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _attribute_directive_demo_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attribute-directive-demo.directive */ "./src/app/attribute-directive-demo.directive.ts");



class DataBindigDemoComponent {
    constructor() {
        this.someText = 'This is string interpolation binding';
        this.className = 'some-class-name';
    }
    ngOnInit() {
    }
}
DataBindigDemoComponent.ɵfac = function DataBindigDemoComponent_Factory(t) { return new (t || DataBindigDemoComponent)(); };
DataBindigDemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataBindigDemoComponent, selectors: [["app-data-bindig-demo"]], decls: 2, vars: 3, consts: [["appAttributeDirectiveDemo", "", 1, "container"]], template: function DataBindigDemoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.className);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.someText, "\n");
    } }, directives: [_attribute_directive_demo_directive__WEBPACK_IMPORTED_MODULE_1__["AttributeDirectiveDemoDirective"]], styles: [".some-class-name[_ngcontent-%COMP%] {\r\n    background-color: greenyellow;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YS1iaW5kaWctZGVtby9kYXRhLWJpbmRpZy1kZW1vLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9kYXRhLWJpbmRpZy1kZW1vL2RhdGEtYmluZGlnLWRlbW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zb21lLWNsYXNzLW5hbWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataBindigDemoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-data-bindig-demo',
                templateUrl: './data-bindig-demo.component.html',
                styleUrls: ['./data-bindig-demo.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/demo-built-in-directives/demo-built-in-directives.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/demo-built-in-directives/demo-built-in-directives.component.ts ***!
  \********************************************************************************/
/*! exports provided: DemoBuiltInDirectivesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoBuiltInDirectivesComponent", function() { return DemoBuiltInDirectivesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _attribute_directive_demo_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attribute-directive-demo.directive */ "./src/app/attribute-directive-demo.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function DemoBuiltInDirectivesComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This areas gets displayed based on ngIfVariable and this is a ngIf demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DemoBuiltInDirectivesComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r12.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r12.role, " ");
} }
function DemoBuiltInDirectivesComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Case 1 Element");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DemoBuiltInDirectivesComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Case 2 Element");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DemoBuiltInDirectivesComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Case 3 Element");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DemoBuiltInDirectivesComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Default Case Element Displayed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DemoBuiltInDirectivesComponent {
    constructor() {
        this.ngIfVariable = true;
        this.users = [
            { name: 'User 1', role: 'Developer' },
            { name: 'User 2', role: 'Tester' },
            { name: 'User 3', role: 'Developer' },
            { name: 'User 4', role: 'Tester' }
        ];
        this.switchCaseVariable = 1;
    }
    ngOnInit() {
    }
    showHideElement() {
        this.ngIfVariable = !this.ngIfVariable;
    }
}
DemoBuiltInDirectivesComponent.ɵfac = function DemoBuiltInDirectivesComponent_Factory(t) { return new (t || DemoBuiltInDirectivesComponent)(); };
DemoBuiltInDirectivesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DemoBuiltInDirectivesComponent, selectors: [["app-demo-built-in-directives"]], decls: 33, vars: 6, consts: [["appAttributeDirectiveDemo", "", 1, "container"], [1, "row", 2, "padding", "20px"], [1, "col"], [4, "ngIf"], [1, "col", 3, "click"], [1, "btn", "btn-primary"], [1, "divider"], [1, "row"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "col", "btn", "btn-primary", 2, "margin-right", "10px", 3, "click"], [3, "ngSwitch"], ["class", "display-4", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "list-group-item"], [1, "display-4"]], template: function DemoBuiltInDirectivesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DemoBuiltInDirectivesComponent_span_3_Template, 2, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoBuiltInDirectivesComponent_Template_div_click_4_listener() { return ctx.showHideElement(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Toggle Display");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Users List (*ngFor) Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DemoBuiltInDirectivesComponent_li_13_Template, 7, 2, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " ngSwitch Demo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoBuiltInDirectivesComponent_Template_button_click_19_listener() { return ctx.switchCaseVariable = 1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Case 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoBuiltInDirectivesComponent_Template_button_click_21_listener() { return ctx.switchCaseVariable = 2; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Case 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoBuiltInDirectivesComponent_Template_button_click_23_listener() { return ctx.switchCaseVariable = 3; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Case 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoBuiltInDirectivesComponent_Template_button_click_25_listener() { return ctx.switchCaseVariable = undefined; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Case Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, DemoBuiltInDirectivesComponent_div_29_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, DemoBuiltInDirectivesComponent_div_30_Template, 2, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, DemoBuiltInDirectivesComponent_div_31_Template, 2, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, DemoBuiltInDirectivesComponent_div_32_Template, 2, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ngIfVariable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.switchCaseVariable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 3);
    } }, directives: [_attribute_directive_demo_directive__WEBPACK_IMPORTED_MODULE_1__["AttributeDirectiveDemoDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8tYnVpbHQtaW4tZGlyZWN0aXZlcy9kZW1vLWJ1aWx0LWluLWRpcmVjdGl2ZXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoBuiltInDirectivesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-demo-built-in-directives',
                templateUrl: './demo-built-in-directives.component.html',
                styleUrls: ['./demo-built-in-directives.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/event-bindig-demo/event-bindig-demo.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/event-bindig-demo/event-bindig-demo.component.ts ***!
  \******************************************************************/
/*! exports provided: EventBindigDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventBindigDemoComponent", function() { return EventBindigDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _attribute_directive_demo_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attribute-directive-demo.directive */ "./src/app/attribute-directive-demo.directive.ts");



class EventBindigDemoComponent {
    constructor() {
        this.someText = 'This is simple event binding example, Click to see the demo';
    }
    ngOnInit() {
    }
    // the name can be anything
    eventHandler(event) {
        alert('Simple Event Binding Example');
        console.log(event);
    }
}
EventBindigDemoComponent.ɵfac = function EventBindigDemoComponent_Factory(t) { return new (t || EventBindigDemoComponent)(); };
EventBindigDemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventBindigDemoComponent, selectors: [["app-event-bindig-demo"]], decls: 2, vars: 1, consts: [["appAttributeDirectiveDemo", "", 1, "container", 3, "click"]], template: function EventBindigDemoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventBindigDemoComponent_Template_div_click_0_listener($event) { return ctx.eventHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.someText, "\n");
    } }, directives: [_attribute_directive_demo_directive__WEBPACK_IMPORTED_MODULE_1__["AttributeDirectiveDemoDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50LWJpbmRpZy1kZW1vL2V2ZW50LWJpbmRpZy1kZW1vLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventBindigDemoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-event-bindig-demo',
                templateUrl: './event-bindig-demo.component.html',
                styleUrls: ['./event-bindig-demo.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/host-listener-host-binding.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/host-listener-host-binding.directive.ts ***!
  \*********************************************************/
/*! exports provided: HostListenerHostBindingDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostListenerHostBindingDirective", function() { return HostListenerHostBindingDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HostListenerHostBindingDirective {
    constructor() {
    }
    clickHandler(event) {
        this.backgroundColor = 'red';
    }
}
HostListenerHostBindingDirective.ɵfac = function HostListenerHostBindingDirective_Factory(t) { return new (t || HostListenerHostBindingDirective)(); };
HostListenerHostBindingDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: HostListenerHostBindingDirective, selectors: [["", "appHostListenerHostBinding", ""]], hostVars: 2, hostBindings: function HostListenerHostBindingDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HostListenerHostBindingDirective_click_HostBindingHandler() { return ctx.clickHandler(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.backgroundColor);
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HostListenerHostBindingDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appHostListenerHostBinding]'
            }]
    }], function () { return []; }, { backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.backgroundColor']
        }], clickHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }] }); })();


/***/ }),

/***/ "./src/app/input-demo/input-demo.component.ts":
/*!****************************************************!*\
  !*** ./src/app/input-demo/input-demo.component.ts ***!
  \****************************************************/
/*! exports provided: InputDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputDemoComponent", function() { return InputDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _attribute_directive_demo_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attribute-directive-demo.directive */ "./src/app/attribute-directive-demo.directive.ts");



class InputDemoComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
InputDemoComponent.ɵfac = function InputDemoComponent_Factory(t) { return new (t || InputDemoComponent)(); };
InputDemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputDemoComponent, selectors: [["app-input-demo"]], inputs: { inputFromOutside: ["someText", "inputFromOutside"] }, decls: 2, vars: 1, consts: [["appAttributeDirectiveDemo", "", 1, "container"]], template: function InputDemoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.inputFromOutside, "\n");
    } }, directives: [_attribute_directive_demo_directive__WEBPACK_IMPORTED_MODULE_1__["AttributeDirectiveDemoDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lucHV0LWRlbW8vaW5wdXQtZGVtby5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputDemoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-input-demo',
                templateUrl: './input-demo.component.html',
                styleUrls: ['./input-demo.component.css']
            }]
    }], function () { return []; }, { inputFromOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['someText']
        }] }); })();


/***/ }),

/***/ "./src/app/life-cycle-demo/life-cycle-demo.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/life-cycle-demo/life-cycle-demo.component.ts ***!
  \**************************************************************/
/*! exports provided: LifeCycleDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeCycleDemoComponent", function() { return LifeCycleDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["myContentRef"];
const _c1 = ["viewChildRef"];
const _c2 = ["*"];
class LifeCycleDemoComponent {
    constructor() {
        this.text = '';
        console.log('LifeCycleDemoComponent constructor ');
        // console.log('LifeCycleDemoComponent viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
    }
    ngOnChanges() {
        console.log('LifeCycleDemoComponent ngOnChanges ');
        // console.log('LifeCycleDemoComponent viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
    }
    ngOnInit() {
        console.log('LifeCycleDemoComponent ngOnInit ');
        // console.log('LifeCycleDemoComponent viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
    }
    ngDoCheck() {
        console.log('LifeCycleDemoComponent ngDoCheck ');
        // console.log('LifeCycleDemoComponent viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
    }
    ngAfterContentInit() {
        console.log('LifeCycleDemoComponent ngAfterContentInit ');
        // console.log('LifeCycleDemoComponent viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
    }
    ngAfterContentChecked() {
        console.log('LifeCycleDemoComponent ngAfterContentChecked ');
        // console.log('LifeCycleDemoComponent viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
    }
    ngAfterViewInit() {
        console.log('LifeCycleDemoComponent ngAfterViewInit ');
        // console.log('LifeCycleDemoComponent viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
    }
    ngAfterViewChecked() {
        console.log('LifeCycleDemoComponent ngAfterViewChecked ');
        // console.log('LifeCycleDemoComponent viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
    }
    ngOnDestroy() {
        console.log('LifeCycleDemoComponent ngOnDestroy ');
        // console.log('LifeCycleDemoComponent viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
    }
}
LifeCycleDemoComponent.ɵfac = function LifeCycleDemoComponent_Factory(t) { return new (t || LifeCycleDemoComponent)(); };
LifeCycleDemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LifeCycleDemoComponent, selectors: [["app-life-cycle-demo"]], contentQueries: function LifeCycleDemoComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentChildRefernce = _t.first);
    } }, viewQuery: function LifeCycleDemoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.viewChildRefernce = _t.first);
    } }, inputs: { text: ["inputText", "text"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c2, decls: 4, vars: 0, consts: [["viewChildRef", ""]], template: function LifeCycleDemoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " View Child Ref\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpZmUtY3ljbGUtZGVtby9saWZlLWN5Y2xlLWRlbW8uY29tcG9uZW50LmNzcyJ9 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LifeCycleDemoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-life-cycle-demo',
                templateUrl: './life-cycle-demo.component.html',
                styleUrls: ['./life-cycle-demo.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return []; }, { text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['inputText']
        }], viewChildRefernce: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['viewChildRef']
        }], contentChildRefernce: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: ['myContentRef']
        }] }); })();


/***/ }),

/***/ "./src/app/ng-content-and-content-child-demo/ng-content-and-content-child-demo.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/ng-content-and-content-child-demo/ng-content-and-content-child-demo.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: NgContentAndContentChildDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgContentAndContentChildDemoComponent", function() { return NgContentAndContentChildDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _attribute_directive_demo_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attribute-directive-demo.directive */ "./src/app/attribute-directive-demo.directive.ts");



const _c0 = ["contentChildRefVariable"];
const _c1 = ["*"];
class NgContentAndContentChildDemoComponent {
    constructor() {
    }
    // doing in this this method because this is where content is initiated or rendered
    ngAfterContentInit() {
        this.contentChild.nativeElement.style.backgroundColor = 'yellow';
        this.contentChild.nativeElement.style.marginBottom = '10px';
    }
}
NgContentAndContentChildDemoComponent.ɵfac = function NgContentAndContentChildDemoComponent_Factory(t) { return new (t || NgContentAndContentChildDemoComponent)(); };
NgContentAndContentChildDemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgContentAndContentChildDemoComponent, selectors: [["app-ng-content-and-content-child-demo"]], contentQueries: function NgContentAndContentChildDemoComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentChild = _t.first);
    } }, ngContentSelectors: _c1, decls: 3, vars: 0, consts: [["appAttributeDirectiveDemo", "", 1, "container"]], template: function NgContentAndContentChildDemoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " I am content projection example ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_attribute_directive_demo_directive__WEBPACK_IMPORTED_MODULE_1__["AttributeDirectiveDemoDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25nLWNvbnRlbnQtYW5kLWNvbnRlbnQtY2hpbGQtZGVtby9uZy1jb250ZW50LWFuZC1jb250ZW50LWNoaWxkLWRlbW8uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgContentAndContentChildDemoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ng-content-and-content-child-demo',
                templateUrl: './ng-content-and-content-child-demo.component.html',
                styleUrls: ['./ng-content-and-content-child-demo.component.css']
            }]
    }], function () { return []; }, { contentChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: ['contentChildRefVariable']
        }] }); })();


/***/ }),

/***/ "./src/app/output-demo/output-demo.component.ts":
/*!******************************************************!*\
  !*** ./src/app/output-demo/output-demo.component.ts ***!
  \******************************************************/
/*! exports provided: OutputDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputDemoComponent", function() { return OutputDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _attribute_directive_demo_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attribute-directive-demo.directive */ "./src/app/attribute-directive-demo.directive.ts");



class OutputDemoComponent {
    constructor() {
        this.somethingChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    keypressHandler(event) {
        // this input is coming from the keypress event on input text box
        const inputText = event.target.value;
        // lets annouce outside world something changed
        this.somethingChanged.emit(inputText);
    }
}
OutputDemoComponent.ɵfac = function OutputDemoComponent_Factory(t) { return new (t || OutputDemoComponent)(); };
OutputDemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OutputDemoComponent, selectors: [["app-output-demo"]], outputs: { somethingChanged: "somethingChanged" }, decls: 9, vars: 0, consts: [["appAttributeDirectiveDemo", "", 1, "container"], ["viewChildRefVariable", ""], [1, "input-group", "mb-3"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "text", 1, "form-control", 3, "keypress"]], template: function OutputDemoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " I am an Output or communicate outside component example ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Enter Something");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function OutputDemoComponent_Template_input_keypress_8_listener($event) { return ctx.keypressHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_attribute_directive_demo_directive__WEBPACK_IMPORTED_MODULE_1__["AttributeDirectiveDemoDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL291dHB1dC1kZW1vL291dHB1dC1kZW1vLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OutputDemoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-output-demo',
                templateUrl: './output-demo.component.html',
                styleUrls: ['./output-demo.component.css']
            }]
    }], function () { return []; }, { somethingChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/structural-directive-demo.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/structural-directive-demo.directive.ts ***!
  \********************************************************/
/*! exports provided: StructuralDirectiveDemoDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructuralDirectiveDemoDirective", function() { return StructuralDirectiveDemoDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StructuralDirectiveDemoDirective {
    constructor(tr, vc) {
        this.tr = tr;
        this.vc = vc;
    }
    // as we have input and using the input we should listen to ngOnChanges
    // which is triggered everytime there is change in input
    ngOnChanges() {
        // we can only use host elememt template and customize it with context but 
        // cannot create a new template
        // so in simple terms structral directives can use same host element and create 
        // multiple templates but not create something completely new
        for (let i = 1; i <= this.views; i++) {
            // the second argument is context which can be used in the template
            this.vc.createEmbeddedView(this.tr, { ctx: i });
        }
    }
}
StructuralDirectiveDemoDirective.ɵfac = function StructuralDirectiveDemoDirective_Factory(t) { return new (t || StructuralDirectiveDemoDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
StructuralDirectiveDemoDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: StructuralDirectiveDemoDirective, selectors: [["", "appStructuralDirectiveDemo", ""]], inputs: { views: "views" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StructuralDirectiveDemoDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appStructuralDirectiveDemo]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { views: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/view-child-demo/view-child-demo.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/view-child-demo/view-child-demo.component.ts ***!
  \**************************************************************/
/*! exports provided: ViewChildDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewChildDemoComponent", function() { return ViewChildDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _attribute_directive_demo_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attribute-directive-demo.directive */ "./src/app/attribute-directive-demo.directive.ts");



const _c0 = ["viewChildRefVariable"];
class ViewChildDemoComponent {
    constructor() {
    }
    // doing in this this method because this is where view (or template of host component) is initiated or rendered
    ngAfterViewInit() {
        this.viewChildRef.nativeElement.style.backgroundColor = 'lightblue';
    }
}
ViewChildDemoComponent.ɵfac = function ViewChildDemoComponent_Factory(t) { return new (t || ViewChildDemoComponent)(); };
ViewChildDemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewChildDemoComponent, selectors: [["app-view-child-demo"]], viewQuery: function ViewChildDemoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.viewChildRef = _t.first);
    } }, decls: 3, vars: 0, consts: [["appAttributeDirectiveDemo", "", 1, "container"], ["viewChildRefVariable", ""]], template: function ViewChildDemoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " I am view child example and after accessing it will apply some style for demo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_attribute_directive_demo_directive__WEBPACK_IMPORTED_MODULE_1__["AttributeDirectiveDemoDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctY2hpbGQtZGVtby92aWV3LWNoaWxkLWRlbW8uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewChildDemoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-child-demo',
                templateUrl: './view-child-demo.component.html',
                styleUrls: ['./view-child-demo.component.css']
            }]
    }], function () { return []; }, { viewChildRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['viewChildRefVariable']
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Work\my git\training\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map