(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ajf/core/forms'), require('@angular/core'), require('@ionic/angular'), require('rxjs'), require('rxjs/operators'), require('@angular/common/http'), require('@angular/platform-browser'), require('@ajf/core/common'), require('@ajf/ionic/barcode'), require('@ajf/ionic/calendar'), require('@ajf/ionic/checkbox-group'), require('@ajf/ionic/page-slider'), require('@ajf/ionic/time'), require('@angular/common'), require('@angular/forms'), require('@gic/angular'), require('@ngx-translate/core')) :
    typeof define === 'function' && define.amd ? define('@ajf/ionic/forms', ['exports', '@ajf/core/forms', '@angular/core', '@ionic/angular', 'rxjs', 'rxjs/operators', '@angular/common/http', '@angular/platform-browser', '@ajf/core/common', '@ajf/ionic/barcode', '@ajf/ionic/calendar', '@ajf/ionic/checkbox-group', '@ajf/ionic/page-slider', '@ajf/ionic/time', '@angular/common', '@angular/forms', '@gic/angular', '@ngx-translate/core'], factory) :
    (global = global || self, factory((global.ajf = global.ajf || {}, global.ajf.ionic = global.ajf.ionic || {}, global.ajf.ionic.forms = {}), global.ng.core.forms, global.ng.core, global.ionic.angular, global.rxjs, global.rxjs.operators, global.ng.common.http, global.ng.platformBrowser, global.ng.core.common, global.ng.ionic.barcode, global.ng.ionic.calendar, global.ng.ionic.checkboxGroup, global.ng.ionic.pageSlider, global.ng.ionic.time, global.ng.common, global.ng.forms, global.gic.angular, global.ngxTranslate.core));
}(this, (function (exports, forms, i0, angular, rxjs, operators, http, platformBrowser, common, barcode, calendar, checkboxGroup, pageSlider, time, common$1, forms$1, angular$1, core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @license
     * Copyright (C) Gnucoop soc. coop.
     *
     * This file is part of the Advanced JSON forms (ajf).
     *
     * Advanced JSON forms (ajf) is free software: you can redistribute it and/or
     * modify it under the terms of the GNU Affero General Public License as
     * published by the Free Software Foundation, either version 3 of the License,
     * or (at your option) any later version.
     *
     * Advanced JSON forms (ajf) is distributed in the hope that it will be useful,
     * but WITHOUT ANY WARRANTY; without even the implied warranty of
     * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero
     * General Public License for more details.
     *
     * You should have received a copy of the GNU Affero General Public License
     * along with Advanced JSON forms (ajf).
     * If not, see http://www.gnu.org/licenses/.
     *
     */
    var AjfWarningAlertService = /** @class */ (function () {
        function AjfWarningAlertService(_alertCtrl) {
            this._alertCtrl = _alertCtrl;
        }
        AjfWarningAlertService.prototype.showWarningAlertPrompt = function (warnings) {
            var _this = this;
            return new rxjs.Observable(function (subscriber) {
                _this._alertCtrl
                    .create({
                    header: 'Warning',
                    message: warnings.join('\n'),
                    buttons: [
                        {
                            text: 'No',
                            handler: function () {
                                subscriber.next({ result: false });
                                subscriber.complete();
                            }
                        },
                        {
                            text: 'Yes',
                            handler: function () {
                                subscriber.next({ result: true });
                                subscriber.complete();
                            }
                        }
                    ]
                })
                    .then(function (alert) {
                    alert.present();
                });
            });
        };
        return AjfWarningAlertService;
    }());
    AjfWarningAlertService.decorators = [
        { type: i0.Injectable }
    ];
    AjfWarningAlertService.ctorParameters = function () { return [
        { type: angular.AlertController }
    ]; };

    var AjfBooleanFieldComponent = /** @class */ (function (_super) {
        __extends(AjfBooleanFieldComponent, _super);
        function AjfBooleanFieldComponent(cdr, service, was) {
            return _super.call(this, cdr, service, was) || this;
        }
        return AjfBooleanFieldComponent;
    }(forms.AjfBaseFieldComponent));
    AjfBooleanFieldComponent.decorators = [
        { type: i0.Component, args: [{
                    template: "<ion-toggle *ngIf=\"control|async as ctrl\" [formControl]=\"ctrl!\"></ion-toggle>\n",
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    encapsulation: i0.ViewEncapsulation.None,
                    styles: ["\n"]
                },] }
    ];
    AjfBooleanFieldComponent.ctorParameters = function () { return [
        { type: i0.ChangeDetectorRef },
        { type: forms.AjfFormRendererService },
        { type: AjfWarningAlertService, decorators: [{ type: i0.Inject, args: [forms.AJF_WARNING_ALERT_SERVICE,] }] }
    ]; };

    var AjfDateFieldComponent = /** @class */ (function (_super) {
        __extends(AjfDateFieldComponent, _super);
        function AjfDateFieldComponent(cdr, service, was) {
            return _super.call(this, cdr, service, was) || this;
        }
        return AjfDateFieldComponent;
    }(forms.AjfBaseFieldComponent));
    AjfDateFieldComponent.decorators = [
        { type: i0.Component, args: [{
                    template: "<ion-item>\n  <ajf-calendar\n      *ngIf=\"control|async as ctrl\"\n      selectionMode=\"day\"\n      [dateOnlyForDay]=\"true\"\n      [minDate]=\"instance.node.minDate|ajfDateValue\"\n      [maxDate]=\"instance.node.maxDate|ajfDateValue\"\n      [formControl]=\"ctrl!\"></ajf-calendar>\n</ion-item>\n",
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    encapsulation: i0.ViewEncapsulation.None,
                    styles: ["\n"]
                },] }
    ];
    AjfDateFieldComponent.ctorParameters = function () { return [
        { type: i0.ChangeDetectorRef },
        { type: forms.AjfFormRendererService },
        { type: AjfWarningAlertService, decorators: [{ type: i0.Inject, args: [forms.AJF_WARNING_ALERT_SERVICE,] }] }
    ]; };

    var AjfDateInputFieldComponent = /** @class */ (function (_super) {
        __extends(AjfDateInputFieldComponent, _super);
        function AjfDateInputFieldComponent(cdr, service, was, _dvs) {
            var _this = _super.call(this, cdr, service, was) || this;
            _this._dvs = _dvs;
            return _this;
        }
        AjfDateInputFieldComponent.prototype.onChange = function (event) {
            var evt = event;
            if (this.input == null || evt.detail == null) {
                return;
            }
            var val = evt.detail.value || '';
            if (val.length > 0) {
                if ((this._minDateStr != null && val < this._minDateStr) ||
                    (this._maxDateStr != null && val > this._maxDateStr)) {
                    this.input.value = '';
                }
            }
        };
        AjfDateInputFieldComponent.prototype._onInstanceChange = function () {
            this._minDateStr = this._dvs.transform(this.instance.node.minDate);
            this._maxDateStr = this._dvs.transform(this.instance.node.maxDate);
        };
        return AjfDateInputFieldComponent;
    }(forms.AjfBaseFieldComponent));
    AjfDateInputFieldComponent.decorators = [
        { type: i0.Component, args: [{
                    template: "<ion-input\n    type=\"date\"\n    *ngIf=\"control|async as ctrl\"\n    [min]=\"instance.node.minDate|ajfDateValueString\"\n    [max]=\"instance.node.maxDate|ajfDateValueString\"\n    (ionChange)=\"onChange($event)\"\n    [formControl]=\"ctrl!\"></ion-input>\n",
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    encapsulation: i0.ViewEncapsulation.None,
                    styles: ["\n"]
                },] }
    ];
    AjfDateInputFieldComponent.ctorParameters = function () { return [
        { type: i0.ChangeDetectorRef },
        { type: forms.AjfFormRendererService },
        { type: AjfWarningAlertService, decorators: [{ type: i0.Inject, args: [forms.AJF_WARNING_ALERT_SERVICE,] }] },
        { type: forms.AjfDateValueStringPipe }
    ]; };
    AjfDateInputFieldComponent.propDecorators = {
        input: [{ type: i0.ViewChild, args: [angular.IonInput, { static: false },] }]
    };

    var AjfEmptyFieldComponent = /** @class */ (function (_super) {
        __extends(AjfEmptyFieldComponent, _super);
        function AjfEmptyFieldComponent(cdr, service, was) {
            return _super.call(this, cdr, service, was) || this;
        }
        return AjfEmptyFieldComponent;
    }(forms.AjfBaseFieldComponent));
    AjfEmptyFieldComponent.decorators = [
        { type: i0.Component, args: [{
                    template: "<div [innerHTML]=\"instance.node.HTML\"></div>\n",
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    encapsulation: i0.ViewEncapsulation.None,
                    styles: ["\n"]
                },] }
    ];
    AjfEmptyFieldComponent.ctorParameters = function () { return [
        { type: i0.ChangeDetectorRef },
        { type: forms.AjfFormRendererService },
        { type: AjfWarningAlertService, decorators: [{ type: i0.Inject, args: [forms.AJF_WARNING_ALERT_SERVICE,] }] }
    ]; };

    var AjfBarcodeFieldComponent = /** @class */ (function (_super) {
        __extends(AjfBarcodeFieldComponent, _super);
        function AjfBarcodeFieldComponent(cdr, service, was) {
            return _super.call(this, cdr, service, was) || this;
        }
        return AjfBarcodeFieldComponent;
    }(forms.AjfBaseFieldComponent));
    AjfBarcodeFieldComponent.decorators = [
        { type: i0.Component, args: [{
                    template: "<ajf-barcode *ngIf=\"control|async as ctrl\" [formControl]=\"ctrl!\"></ajf-barcode>\n",
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    encapsulation: i0.ViewEncapsulation.None,
                    styles: ["\n"]
                },] }
    ];
    AjfBarcodeFieldComponent.ctorParameters = function () { return [
        { type: i0.ChangeDetectorRef },
        { type: forms.AjfFormRendererService },
        { type: AjfWarningAlertService, decorators: [{ type: i0.Inject, args: [forms.AJF_WARNING_ALERT_SERVICE,] }] }
    ]; };

    var AjfFormulaFieldComponent = /** @class */ (function (_super) {
        __extends(AjfFormulaFieldComponent, _super);
        function AjfFormulaFieldComponent(cdr, service, was) {
            var _this = _super.call(this, cdr, service, was) || this;
            _this._onChangeEvt = new i0.EventEmitter();
            _this._onChangeSub = rxjs.Subscription.EMPTY;
            var control$ = _this.control.pipe(operators.filter(function (control) { return control != null; }));
            var controlValue$ = control$.pipe(operators.switchMap(function (control) { return _this._onChangeEvt.pipe(operators.map(function (value) { return ({ control: control, value: value }); })); }));
            _this._onChangeSub = controlValue$.subscribe(function (_a) {
                var control = _a.control, value = _a.value;
                try {
                    var v = parseFloat(value);
                    value = v;
                }
                catch (e) {
                }
                control.setValue(value);
            });
            _this.value = _this.control.pipe(operators.filter(function (control) { return control != null; }), operators.switchMap(function (control) { return control.valueChanges.pipe(operators.startWith(control.value)); }));
            return _this;
        }
        AjfFormulaFieldComponent.prototype.ngOnDestroy = function () {
            this._onChangeEvt.complete();
            this._onChangeSub.unsubscribe();
        };
        AjfFormulaFieldComponent.prototype.onChange = function (event) {
            var evt = event;
            if (evt.detail == null) {
                return;
            }
            this._onChangeEvt.emit(evt.detail.value);
        };
        return AjfFormulaFieldComponent;
    }(forms.AjfBaseFieldComponent));
    AjfFormulaFieldComponent.decorators = [
        { type: i0.Component, args: [{
                    template: "<ion-input type=\"text\" [readonly]=\"true\" [value]=\"value|async\" (ionChange)=\"onChange($event)\"></ion-input>\n",
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    encapsulation: i0.ViewEncapsulation.None,
                    styles: ["\n"]
                },] }
    ];
    AjfFormulaFieldComponent.ctorParameters = function () { return [
        { type: i0.ChangeDetectorRef },
        { type: forms.AjfFormRendererService },
        { type: AjfWarningAlertService, decorators: [{ type: i0.Inject, args: [forms.AJF_WARNING_ALERT_SERVICE,] }] }
    ]; };
    AjfFormulaFieldComponent.propDecorators = {
        input: [{ type: i0.ViewChild, args: [angular.IonInput, { static: true },] }]
    };

    var AjfInputFieldComponent = /** @class */ (function (_super) {
        __extends(AjfInputFieldComponent, _super);
        function AjfInputFieldComponent(cdr, service, was) {
            return _super.call(this, cdr, service, was) || this;
        }
        return AjfInputFieldComponent;
    }(forms.AjfInputFieldComponent));
    AjfInputFieldComponent.decorators = [
        { type: i0.Component, args: [{
                    template: "<ion-input *ngIf=\"control|async as ctrl\" [type]=\"type\" [formControl]=\"ctrl!\"></ion-input>\n",
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    encapsulation: i0.ViewEncapsulation.None,
                    styles: ["\n"]
                },] }
    ];
    AjfInputFieldComponent.ctorParameters = function () { return [
        { type: i0.ChangeDetectorRef },
        { type: forms.AjfFormRendererService },
        { type: AjfWarningAlertService, decorators: [{ type: i0.Inject, args: [forms.AJF_WARNING_ALERT_SERVICE,] }] }
    ]; };

    var AjfMultipleChoiceFieldComponent = /** @class */ (function (_super) {
        __extends(AjfMultipleChoiceFieldComponent, _super);
        function AjfMultipleChoiceFieldComponent(cdr, service, was, searchThreshold) {
            return _super.call(this, cdr, service, was, searchThreshold) || this;
        }
        return AjfMultipleChoiceFieldComponent;
    }(forms.AjfFieldWithChoicesComponent));
    AjfMultipleChoiceFieldComponent.decorators = [
        { type: i0.Component, args: [{
                    template: "<ng-container *ngIf=\"!(instance|ajfExpandFieldWithChoices:searchThreshold); else expanded\">\n  <div class=\"ajf-item-container\">\n    <ng-container *ngIf=\"instance.filteredChoices as cs\">\n      <gic-select\n          #multipleChoiceSelect\n          *ngIf=\"control|async as ctrl\"\n          [multiple]=\"true\"\n          [searchBar]=\"instance|ajfSelectHasSearchBar:searchThreshold\"\n          [useVirtualScroll]=\"instance|ajfSelectUseVirtualScroll:100\"\n          [placeholder]=\"instance.node.label\"\n          [formControl]=\"ctrl!\">\n        <gic-select-option *ngFor=\"let item of cs\"\n            [value]=\"item.value\">{{ item.label|translate }}</gic-select-option>\n      </gic-select>\n    </ng-container>\n  </div>\n</ng-container>\n<ng-template #expanded>\n  <div ajf-checkbox-group\n      *ngIf=\"control|async as ctrl\"\n      [formControl]=\"ctrl!\"\n      class=\"ajf-choices-container\"\n  >\n    <ion-card *ngFor=\"let choice of instance.filteredChoices\">\n      <ajf-checkbox-group-item\n        [value]=\"choice.value\">\n        {{ choice.label | translate }}\n      </ajf-checkbox-group-item>\n    </ion-card>\n  </div>\n</ng-template>\n",
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    encapsulation: i0.ViewEncapsulation.None,
                    styles: ["\n"]
                },] }
    ];
    AjfMultipleChoiceFieldComponent.ctorParameters = function () { return [
        { type: i0.ChangeDetectorRef },
        { type: forms.AjfFormRendererService },
        { type: AjfWarningAlertService, decorators: [{ type: i0.Inject, args: [forms.AJF_WARNING_ALERT_SERVICE,] }] },
        { type: Number, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [forms.AJF_SEARCH_ALERT_THRESHOLD,] }] }
    ]; };

    var AjfNumberFieldComponent = /** @class */ (function (_super) {
        __extends(AjfNumberFieldComponent, _super);
        function AjfNumberFieldComponent(cdr, service, was) {
            var _this = _super.call(this, cdr, service, was) || this;
            _this._setValueEvt = new i0.EventEmitter();
            _this._setValueSub = rxjs.Subscription.EMPTY;
            _this.type = 'number';
            _this.value = rxjs.defer(function () { return _this.control.pipe(operators.filter(function (control) { return control != null; }), operators.switchMap(function (control) { return control.valueChanges.pipe(operators.startWith(control.value)); })); });
            return _this;
        }
        AjfNumberFieldComponent.prototype.ngOnDestroy = function () {
            _super.prototype.ngOnDestroy.call(this);
            this._setValueEvt.complete();
            this._setValueSub.unsubscribe();
        };
        AjfNumberFieldComponent.prototype.ngOnInit = function () {
            _super.prototype.ngOnInit.call(this);
            this._setValueSub = this._setValueEvt
                .pipe(operators.withLatestFrom(this.control))
                .subscribe(function (_a) {
                var _b = __read(_a, 2), value = _b[0], ctrl = _b[1];
                if (ctrl == null) {
                    return;
                }
                var control = ctrl;
                control.setValue(value);
            });
        };
        AjfNumberFieldComponent.prototype.setValue = function (value) {
            try {
                value = parseFloat("" + value);
                if (isNaN(value)) {
                    value = null;
                }
            }
            catch (e) {
                value = null;
            }
            this._setValueEvt.emit(value);
        };
        return AjfNumberFieldComponent;
    }(forms.AjfInputFieldComponent));
    AjfNumberFieldComponent.decorators = [
        { type: i0.Component, args: [{
                    template: "<ion-input [ngModel]=\"value|async\" (ngModelChange)=\"setValue($event)\"></ion-input>\n",
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    encapsulation: i0.ViewEncapsulation.None,
                    styles: ["\n"]
                },] }
    ];
    AjfNumberFieldComponent.ctorParameters = function () { return [
        { type: i0.ChangeDetectorRef },
        { type: forms.AjfFormRendererService },
        { type: AjfWarningAlertService, decorators: [{ type: i0.Inject, args: [forms.AJF_WARNING_ALERT_SERVICE,] }] }
    ]; };

    var AjfSingleChoiceFieldComponent = /** @class */ (function (_super) {
        __extends(AjfSingleChoiceFieldComponent, _super);
        function AjfSingleChoiceFieldComponent(cdr, service, was, searchThreshold) {
            return _super.call(this, cdr, service, was, searchThreshold) || this;
        }
        return AjfSingleChoiceFieldComponent;
    }(forms.AjfFieldWithChoicesComponent));
    AjfSingleChoiceFieldComponent.decorators = [
        { type: i0.Component, args: [{
                    template: "<ng-container *ngIf=\"!(instance|ajfExpandFieldWithChoices:searchThreshold); else expanded\">\n  <div class=\"ajf-item-container\">\n    <ng-container *ngIf=\"instance.filteredChoices as cs\">\n      <gic-select *ngIf=\"control|async as ctrl\"\n          #singleChoiceSelect\n          [searchBar]=\"instance|ajfSelectHasSearchBar:searchThreshold\"\n          [useVirtualScroll]=\"instance|ajfSelectUseVirtualScroll:100\"\n          [placeholder]=\"instance.node.label\"\n          [formControl]=\"ctrl!\">\n        <gic-select-option *ngFor=\"let item of cs\" [value]=\"item.value\">{{ item.label|translate }}</gic-select-option>\n      </gic-select>\n    </ng-container>\n  </div>\n</ng-container>\n<ng-template #expanded>\n  <div class=\"ajf-choices-container\">\n    <ion-radio-group\n      *ngIf=\"control|async as ctrl\"\n      [formControl]=\"ctrl!\">\n      <ion-item *ngFor=\"let choice of instance.filteredChoices\">\n        <ion-label>{{ choice.label | translate }}</ion-label>\n        <ion-radio [value]=\"choice.value\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </div>\n</ng-template>\n",
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    encapsulation: i0.ViewEncapsulation.None,
                    styles: ["\n"]
                },] }
    ];
    AjfSingleChoiceFieldComponent.ctorParameters = function () { return [
        { type: i0.ChangeDetectorRef },
        { type: forms.AjfFormRendererService },
        { type: AjfWarningAlertService, decorators: [{ type: i0.Inject, args: [forms.AJF_WARNING_ALERT_SERVICE,] }] },
        { type: Number, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [forms.AJF_SEARCH_ALERT_THRESHOLD,] }] }
    ]; };

    var AjfTableFieldComponent = /** @class */ (function (_super) {
        __extends(AjfTableFieldComponent, _super);
        function AjfTableFieldComponent(cdr, service, was) {
            return _super.call(this, cdr, service, was) || this;
        }
        return AjfTableFieldComponent;
    }(forms.AjfTableFieldComponent));
    AjfTableFieldComponent.decorators = [
        { type: i0.Component, args: [{
                    template: "<table class=\"ajf-table-field\">\n  <ng-container *ngIf=\"instance.node as node\">\n    <ng-container *ngFor=\"let columns of instance.controls; let row = index\">\n      <tr [ngClass]=\"row | ajfTableRowClass\">\n        <td>\n          <ng-container *ngIf=\"columns.length > 0 && columns[0] != null\">\n            {{ columns[0] | ajfTranslateIfString | ajfFormatIfNumber: '.0-2' }}\n          </ng-container>\n        </td>\n        <ng-container *ngIf=\"columns.length > 1\">\n          <td *ngFor=\"let c of columns[1]; let column = index\">\n            <ng-container *ngIf=\"row == 0; else controlCell\">\n              {{ c | ajfTranslateIfString | ajfFormatIfNumber: '.0-2' }}\n            </ng-container>\n            <ng-template #controlCell>\n              <ng-container *ngIf=\"c|ajfGetTableCellControl as contr\">\n                <ng-container *ngIf=\"contr != null\">\n                  <input *ngIf=\"contr.show && (node.rows[row-1][column]|ajfIsCellEditable); else plainTextCell\"\n                    (focusout)=\"contr!.show = false\" type=\"number\" [formControl]=\"contr.control\" autoFocus>\n                  <ng-template #plainTextCell>\n                    <span class=\"ajf-table-cell\"\n                      (click)=\"goToCell(row, column)\">{{ contr.control!.value | ajfTranslateIfString | ajfFormatIfNumber: '.0-2' }}</span>\n                  </ng-template>\n                </ng-container>\n              </ng-container>\n            </ng-template>\n          </td>\n        </ng-container>\n      </tr>\n    </ng-container>\n  </ng-container>\n</table>",
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    encapsulation: i0.ViewEncapsulation.None,
                    styles: ["table.ajf-table-field{width:100%}\n"]
                },] }
    ];
    AjfTableFieldComponent.ctorParameters = function () { return [
        { type: i0.ChangeDetectorRef },
        { type: forms.AjfFormRendererService },
        { type: AjfWarningAlertService, decorators: [{ type: i0.Inject, args: [forms.AJF_WARNING_ALERT_SERVICE,] }] }
    ]; };

    var AjfTextareaFieldComponent = /** @class */ (function (_super) {
        __extends(AjfTextareaFieldComponent, _super);
        function AjfTextareaFieldComponent(cdr, service, was) {
            return _super.call(this, cdr, service, was) || this;
        }
        return AjfTextareaFieldComponent;
    }(forms.AjfBaseFieldComponent));
    AjfTextareaFieldComponent.decorators = [
        { type: i0.Component, args: [{
                    template: "<ion-textarea *ngIf=\"control|async as ctrl\" [formControl]=\"ctrl!\"></ion-textarea>\n",
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    encapsulation: i0.ViewEncapsulation.None,
                    styles: ["\n"]
                },] }
    ];
    AjfTextareaFieldComponent.ctorParameters = function () { return [
        { type: i0.ChangeDetectorRef },
        { type: forms.AjfFormRendererService },
        { type: AjfWarningAlertService, decorators: [{ type: i0.Inject, args: [forms.AJF_WARNING_ALERT_SERVICE,] }] }
    ]; };

    var AjfTimeFieldComponent = /** @class */ (function (_super) {
        __extends(AjfTimeFieldComponent, _super);
        function AjfTimeFieldComponent(cdr, service, was) {
            return _super.call(this, cdr, service, was) || this;
        }
        return AjfTimeFieldComponent;
    }(forms.AjfBaseFieldComponent));
    AjfTimeFieldComponent.decorators = [
        { type: i0.Component, args: [{
                    template: "<ajf-time *ngIf=\"control|async as ctrl\" [formControl]=\"ctrl!\"></ajf-time>\n",
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    encapsulation: i0.ViewEncapsulation.None,
                    styles: ["\n"]
                },] }
    ];
    AjfTimeFieldComponent.ctorParameters = function () { return [
        { type: i0.ChangeDetectorRef },
        { type: forms.AjfFormRendererService },
        { type: AjfWarningAlertService, decorators: [{ type: i0.Inject, args: [forms.AJF_WARNING_ALERT_SERVICE,] }] }
    ]; };

    var AjfVideoUrlFieldComponent = /** @class */ (function (_super) {
        __extends(AjfVideoUrlFieldComponent, _super);
        function AjfVideoUrlFieldComponent(cdr, service, was, domSanitizer, httpClient) {
            return _super.call(this, cdr, service, was, domSanitizer, httpClient) || this;
        }
        return AjfVideoUrlFieldComponent;
    }(forms.AjfVideoUrlFieldComponent));
    AjfVideoUrlFieldComponent.decorators = [
        { type: i0.Component, args: [{
                    template: "<ng-container *ngIf=\"control|async as ctrl\">\n  <ion-input class=\"ajf-video-input\" [formControl]=\"ctrl!\"></ion-input>\n  <div class=\"ajf-video-thumbnail\">\n    <ng-container *ngIf=\"validUrl|async\">\n      <a target=\"_blank\" [href]=\"ctrl.value\">\n        <img *ngIf=\"videoThumbnail|async as thumb\" [src]=\"thumb\" class=\"\" alt=\"\">\n      </a>\n    </ng-container>\n  </div>\n</ng-container>\n",
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    encapsulation: i0.ViewEncapsulation.None,
                    styles: [".ajf-video-input{width:100%}.ajf-video-thumbnail{margin-top:1em;width:212px;height:120px;background-color:#eee;display:flex;align-items:center;justify-content:center}.ajf-video-thumbnail img{flex:1 1 auto}\n"]
                },] }
    ];
    AjfVideoUrlFieldComponent.ctorParameters = function () { return [
        { type: i0.ChangeDetectorRef },
        { type: forms.AjfFormRendererService },
        { type: AjfWarningAlertService, decorators: [{ type: i0.Inject, args: [forms.AJF_WARNING_ALERT_SERVICE,] }] },
        { type: platformBrowser.DomSanitizer },
        { type: http.HttpClient }
    ]; };

    var AjfFieldService = /** @class */ (function (_super) {
        __extends(AjfFieldService, _super);
        function AjfFieldService() {
            var _this = _super.call(this) || this;
            _this.componentsMap[forms.AjfFieldType.String] = {
                component: AjfInputFieldComponent,
                readOnlyComponent: forms.AjfReadOnlyFieldComponent
            };
            _this.componentsMap[forms.AjfFieldType.Text] = {
                component: AjfTextareaFieldComponent,
                readOnlyComponent: forms.AjfReadOnlyFieldComponent
            };
            _this.componentsMap[forms.AjfFieldType.Number] = {
                component: AjfNumberFieldComponent,
                readOnlyComponent: forms.AjfReadOnlyFieldComponent
            };
            _this.componentsMap[forms.AjfFieldType.Boolean] = {
                component: AjfBooleanFieldComponent,
                readOnlyComponent: forms.AjfReadOnlyFieldComponent
            };
            _this.componentsMap[forms.AjfFieldType.Formula] = {
                component: AjfFormulaFieldComponent,
                readOnlyComponent: forms.AjfReadOnlyFieldComponent
            };
            _this.componentsMap[forms.AjfFieldType.Date] = {
                component: AjfDateFieldComponent,
                readOnlyComponent: forms.AjfReadOnlyFieldComponent
            };
            _this.componentsMap[forms.AjfFieldType.DateInput] = {
                component: AjfDateInputFieldComponent,
                readOnlyComponent: forms.AjfReadOnlyFieldComponent
            };
            _this.componentsMap[forms.AjfFieldType.Table] = {
                component: AjfTableFieldComponent,
                readOnlyComponent: forms.AjfReadOnlyTableFieldComponent
            };
            _this.componentsMap[forms.AjfFieldType.Empty] = {
                component: AjfEmptyFieldComponent,
                readOnlyComponent: forms.AjfReadOnlyFieldComponent
            };
            _this.componentsMap[forms.AjfFieldType.SingleChoice] = {
                component: AjfSingleChoiceFieldComponent,
                readOnlyComponent: forms.AjfReadOnlySelectFieldComponent
            };
            _this.componentsMap[forms.AjfFieldType.MultipleChoice] = {
                component: AjfMultipleChoiceFieldComponent,
                readOnlyComponent: forms.AjfReadOnlySelectFieldComponent
            };
            _this.componentsMap[forms.AjfFieldType.Time] = {
                component: AjfTimeFieldComponent,
                readOnlyComponent: forms.AjfReadOnlyFieldComponent
            };
            _this.componentsMap[forms.AjfFieldType.Barcode] = {
                component: AjfBarcodeFieldComponent,
                readOnlyComponent: forms.AjfReadOnlyFieldComponent
            };
            _this.componentsMap[forms.AjfFieldType.File] = {
                component: forms.AjfFileFieldComponent,
                readOnlyComponent: forms.AjfReadOnlyFileFieldComponent
            };
            _this.componentsMap[forms.AjfFieldType.Image] = {
                component: forms.AjfImageFieldComponent,
                readOnlyComponent: forms.AjfReadOnlyImageFieldComponent
            };
            _this.componentsMap[forms.AjfFieldType.VideoUrl] = {
                component: AjfVideoUrlFieldComponent,
                readOnlyComponent: forms.AjfReadOnlyVideoUrlFieldComponent
            };
            return _this;
        }
        return AjfFieldService;
    }(forms.AjfFieldService));
    AjfFieldService.ɵprov = i0["ɵɵdefineInjectable"]({ factory: function AjfFieldService_Factory() { return new AjfFieldService(); }, token: AjfFieldService, providedIn: "root" });
    AjfFieldService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    AjfFieldService.ctorParameters = function () { return []; };

    var AjfFormField = /** @class */ (function (_super) {
        __extends(AjfFormField, _super);
        function AjfFormField(cdr, cfr, fieldService) {
            var _this = _super.call(this, cdr, cfr) || this;
            _this.componentsMap = fieldService.componentsMap;
            return _this;
        }
        return AjfFormField;
    }(forms.AjfFormField));
    AjfFormField.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ajf-field,ajf-form-field',
                    template: "<div\n    [ngClass]=\"'ajf-field-' + (instance|ajfNodeCompleteName)\"\n    [class.ajf-validated]=\"instance.validationResults|ajfFieldIsValid\"\n>\n  <ng-template ajf-field-host></ng-template>\n</div>\n<ng-container *ngIf=\"instance.node.attachments\">\n  <ng-container *ngFor=\"let attachment of instance.node.attachments\">\n    <a [href]=\"attachment.value\" target=\"_blank\">{{attachment.label}}</a>\n  </ng-container>\n</ng-container>\n<ng-container *ngIf=\"!readonly && instance.validationResults\">\n  <div class=\"ajf-errors\">\n    <ng-container *ngFor=\"let res of instance.validationResults\">\n      <div class=\"error\" *ngIf=\"!res.result\">\n        {{ res.error | translate }}\n      </div>\n    </ng-container>\n  </div>\n</ng-container>\n",
                    encapsulation: i0.ViewEncapsulation.None,
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    styles: ["ajf-field ion-select{position:relative}ajf-field ion-input,ajf-field ion-textarea{border:dashed 2px #eee}ajf-field .ajf-choices-container{flex-direction:row;align-items:stretch;flex-wrap:wrap;display:flex}ajf-field .ajf-choices-container>ion-radio-group{display:flex;flex-wrap:wrap}ajf-field .ajf-choices-container>ion-radio-group ion-item{--ion-item-border-color: transparent}ajf-field .ajf-choices-container>ion-radio-group ion-item ion-label{margin-right:10px}ajf-field .ajf-choices-container>ion-card{margin-top:0;width:33%;display:flex;font-size:13px;flex-wrap:wrap;flex-basis:21% !important;flex-shrink:3 !important}ajf-field .ajf-choices-container>ion-card>ajf-checkbox-group-item{width:100%;display:flex;flex-direction:column;align-items:stretch;justify-content:center}ajf-field .ajf-choices-container>ion-card>ion-item{font-size:13px;flex:1 0 auto;flex-shrink:3 !important;flex-basis:21% !important;margin:0 10px}ajf-field .ajf-item-container{position:relative}ajf-field .ajf-errors{font-style:italic;padding:5px}ajf-field tr.ajf-row-odd{background-color:gray}ajf-field .ajf-table-container{overflow-x:auto}ajf-field .ajf-table-container table{width:100%}\n"]
                },] }
    ];
    AjfFormField.ctorParameters = function () { return [
        { type: i0.ChangeDetectorRef },
        { type: i0.ComponentFactoryResolver },
        { type: AjfFieldService }
    ]; };

    /**
     * This class will define an ajf form renderer
     * @implements : AfterViewInit
     * @implements : AfterViewInit
     */
    var AjfFormRenderer = /** @class */ (function (_super) {
        __extends(AjfFormRenderer, _super);
        function AjfFormRenderer(rendererService, cdr) {
            var _this = _super.call(this, rendererService, cdr) || this;
            _this._longSlide = false;
            _this._viewInitEvt = new i0.EventEmitter();
            _this._scrollFinishSub = rxjs.Subscription.EMPTY;
            _this._scrollFinishSub = _this._viewInitEvt
                .pipe(operators.delayWhen(function () { return _this.formGroup; }), operators.switchMap(function () { return _this.formSlider.pageScrollFinish; }))
                .subscribe(function (_) { return _this._updateLongSlide(); });
            return _this;
        }
        Object.defineProperty(AjfFormRenderer.prototype, "longSlide", {
            get: function () {
                return this._longSlide;
            },
            enumerable: false,
            configurable: true
        });
        AjfFormRenderer.prototype.ngAfterViewInit = function () {
            _super.prototype.ngAfterViewInit.call(this);
            this._viewInitEvt.emit();
        };
        AjfFormRenderer.prototype.ngOnDestroy = function () {
            _super.prototype.ngOnDestroy.call(this);
            this._scrollFinishSub.unsubscribe();
        };
        AjfFormRenderer.prototype._updateLongSlide = function () {
            var longSlide = this.formSlider.isCurrentPageLong();
            if (longSlide !== this._longSlide) {
                this._longSlide = longSlide;
                this._changeDetectorRef.markForCheck();
            }
        };
        return AjfFormRenderer;
    }(forms.AjfFormRenderer));
    AjfFormRenderer.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ajf-form',
                    template: "<ng-container *ngIf=\"formGroup|async as currentFormGroup\">\n  <form novalidate [formGroup]=\"currentFormGroup!\">\n    <div class=\"ajf-form-container\">\n      <ion-toolbar *ngIf=\"!hideTopToolbar\">\n        {{ title | translate }}\n        <ion-buttons slot=\"end\">\n          <ion-button *ngIf=\"!saveDisabled\" (click)=\"onSave($event)\">{{ 'Save' | translate }}</ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n      <div class=\"ajf-slider-container\">\n        <ajf-page-slider (orientationChange)=\"orientationChangeHandler($event)\"\n            [hideNavigationButtons]=\"hideNavigationButtons\"\n            [fixedOrientation]=\"fixedOrientation\"\n            [orientation]=\"orientation\"\n            #formSlider>\n          <ng-container *ngIf=\"(slides|async) as curSlides\">\n            <ng-container *ngIf=\"curSlides && curSlides!.length > 0 && hasStartMessage\">\n              <ajf-page-slider-item>\n                <div ajfFormPage class=\"ajf-form-page\">\n                  <ion-card>\n                    <ion-card-header>\n                      <div class=\"ajf-page-slider-item-header\">\n                        <h2>\n                          <span class=\"ajf-form-header-number\">\n                            1  &rarr;\n                          </span>\n                          <span class=\"ajf-title\">\n                            <ng-content select=\"[ajfFormStartMessageTitle]\"></ng-content>\n                          </span>\n                        </h2>\n                      </div>\n                    </ion-card-header>\n                    <ion-card-content>\n                      <ng-content select=\"[ajfFormStartMessage]\"></ng-content>\n                    </ion-card-content>\n                  </ion-card>\n                </div>\n              </ajf-page-slider-item>\n            </ng-container>\n            <ng-container *ngFor=\"let slideInstance of curSlides; trackBy: trackNodeById\">\n              <ng-container *ngIf=\"(!(slideInstance|ajfIsRepeatingSlideInstance)) && slideInstance.visible\">\n                <ajf-page-slider-item>\n                  <div ajfFormPage class=\"ajf-form-page\">\n                    <ion-card>\n                      <ion-card-header>\n                        <div class=\"ajf-page-slider-item-header\">\n                          <h2>\n                            <span class=\"ajf-form-header-number\">{{ slideInstance.position + (hasStartMessage | ajfBoolToInt) }} &rarr;</span>\n                            <span class=\"ajf-title\">{{ slideInstance.node.label | translate}}</span>\n                          </h2>\n                          <ion-icon color=\"danger\" name=\"warning\" *ngIf=\"!slideInstance.valid\"></ion-icon>\n                          <ion-icon color=\"secondary\" name=\"checkmark\" *ngIf=\"slideInstance.valid\"></ion-icon>\n                        </div>\n                      </ion-card-header>\n                      <ion-card-content>\n                        <ng-container *ngFor=\"let fieldInstance of slideInstance.flatNodes; trackBy: trackNodeById\">\n                          <div [ngClass]=\"'ajf-' + (fieldInstance|ajfAsFieldInstance).node.size\" class=\"ajf-field-entry\"\n                              *ngIf=\"fieldInstance.visible\">\n                            <i [class]=\"(fieldInstance|ajfAsFieldInstance).node.fieldType | ajfFieldIcon\" item-right></i>\n                            <p>{{ (fieldInstance|ajfAsFieldInstance).node.description }}</p>\n                            <ion-label [innerHTML]=\"fieldInstance.node.label | translate\"></ion-label>\n                            <ajf-field [instance]=\"fieldInstance|ajfAsFieldInstance\" [readonly]=\"readonly\"></ajf-field>\n                          </div>\n                        </ng-container>\n                      </ion-card-content>\n                    </ion-card>\n                  </div>\n                </ajf-page-slider-item>\n              </ng-container>\n              <ng-container *ngIf=\"(slideInstance|ajfIsRepeatingSlideInstance) && slideInstance.visible\">\n                <ajf-page-slider-item *ngFor=\"let curRep of ((slideInstance|ajfAsRepeatingSlideInstance).reps|ajfRange); let idx = index; let lastSlide = last\">\n                  <div ajfFormPage class=\"ajf-form-page\">\n                    <ion-card>\n                      <ion-card-header>\n                        <div class=\"ajf-page-slider-item-header\">\n                          <h2>\n                            <span class=\"ajf-form-header-number\">{{ slideInstance.position|ajfIncrement:idx }} &rarr;</span>\n                            <span class=\"ajf-title\">{{ slideInstance.node.label | translate }}</span>\n                          </h2>\n                          <ion-icon color=\"danger\" name=\"ajf-warning\" *ngIf=\"!(slideInstance|ajfValidSlide:idx)\"></ion-icon>\n                          <ion-icon color=\"secondary\" name=\"checkmark\" *ngIf=\"(slideInstance|ajfValidSlide:idx)\"></ion-icon>\n                        </div>\n                        <div *ngIf=\"lastSlide && !readonly\" class=\"ajf-group-actions\">\n                          <ion-fab-button size=\"small\" (click)=\"addGroup(slideInstance)\" [disabled]=\"!(slideInstance|ajfAsRepeatingSlideInstance).canAdd\">\n                            <ion-icon name=\"add\"></ion-icon>\n                          </ion-fab-button>\n                          <ion-fab-button size=\"small\" (click)=\"removeGroup(slideInstance)\" [disabled]=\"!(slideInstance|ajfAsRepeatingSlideInstance).canRemove\">\n                            <ion-icon name=\"remove\"></ion-icon>\n                          </ion-fab-button>\n                        </div>\n                      </ion-card-header>\n                      <ion-card-content>\n                        <ng-container *ngFor=\"let fieldInstance of slideInstance.slideNodes[idx]; trackBy: trackNodeById\">\n                          <div [ngClass]=\"'ajf-' + (fieldInstance|ajfAsFieldInstance).node.size\" class=\"ajf-field-entry\"\n                              *ngIf=\"fieldInstance.visible\">\n                            <i [class]=\"(fieldInstance|ajfAsFieldInstance).node.fieldType | ajfFieldIcon\" item-right></i>\n                            <p>{{ (fieldInstance|ajfAsFieldInstance).node.description }}</p>\n                            <ion-label [innerHTML]=\"fieldInstance.node.label | translate\"></ion-label>\n                            <ajf-field [instance]=\"fieldInstance|ajfAsFieldInstance\" [readonly]=\"readonly\"></ajf-field>\n                          </div>\n                        </ng-container>\n                        <div *ngIf=\"lastSlide && longSlide\" class=\"ajf-group-actions ajf-group-actions-bottom\">\n                          <ion-fab-button size=\"small\" (click)=\"addGroup(slideInstance)\" [disabled]=\"!(slideInstance|ajfAsRepeatingSlideInstance).canAdd\" mat-mini-fab>\n                            <ion-icon name=\"add\"></ion-icon>\n                          </ion-fab-button>\n                          <ion-fab-button size=\"small\" (click)=\"removeGroup(slideInstance)\" [disabled]=\"!(slideInstance|ajfAsRepeatingSlideInstance).canRemove\" mat-mini-fab>\n                            <ion-icon name=\"remove\"></ion-icon>\n                          </ion-fab-button>\n                        </div>\n                      </ion-card-content>\n                    </ion-card>\n                  </div>\n                </ajf-page-slider-item>\n              </ng-container>\n            </ng-container>\n            <ng-container *ngIf=\"curSlides && curSlides!.length > 0 && hasEndMessage\">\n              <ajf-page-slider-item>\n                <div ajfFormPage class=\"ajf-form-page\">\n                  <ion-card>\n                    <ion-card-header>\n                      <div class=\"ajf-page-slider-item-header\">\n                        <h2>\n                          <span *ngIf=\"(slidesNum|async) as snum\" class=\"ajf-form-header-number\">\n                            {{ snum! + (hasStartMessage | ajfBoolToInt) + 1 }} &rarr;\n                          </span>\n                          <span class=\"ajf-title\">\n                            <ng-content select=\"[ajfFormEndMessageTitle]\"></ng-content>\n                          </span>\n                        </h2>\n                      </div>\n                    </ion-card-header>\n                    <ion-card-content>\n                      <ng-content select=\"[ajfFormEndMessage]\"></ng-content>\n                    </ion-card-content>\n                  </ion-card>\n                </div>\n              </ajf-page-slider-item>\n            </ng-container>\n          </ng-container>\n          <div ajfPageSliderBar *ngIf=\"!hideBottomToolbar\">\n            <div class=\"ajf-left-bar\">\n              <ion-buttons class=\"ajf-errors\" *ngIf=\"((errors | async) || 0) > 0\">\n                <ion-button (click)=\"goToPrevError()\" color=\"danger\">\n                  <ion-icon name=\"arrow-up\"></ion-icon>\n                </ion-button>\n                <ion-button (click)=\"goToNextError()\" color=\"danger\">\n                  <ion-icon name=\"arrow-down\"></ion-icon>\n                </ion-button>\n              </ion-buttons>\n              <div class=\"ajf-info-box ajf-error\">\n                <div class=\"ajf-title\" translate>\n                  Errors\n                </div>\n                <div class=\"ajf-content\">\n                  {{ errors | async }} / {{ slidesNum|async }}\n                </div>\n              </div>\n            </div>\n          </div>\n        </ajf-page-slider>\n      </div>\n    </div>\n  </form>\n</ng-container>\n",
                    encapsulation: i0.ViewEncapsulation.None,
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    styles: ["ajf-form{display:block;position:relative}ajf-form form{display:block;position:absolute;top:0;right:0;bottom:0;left:0}ajf-form form .ajf-form-container{display:flex;flex-direction:column;height:100%}ajf-form form .ajf-form-container ion-toolbar{flex:0 0 auto;height:56px}ajf-form form .ajf-form-container ion-toolbar.ajf-hidden{opacity:0}ajf-form form .ajf-form-container>.ajf-slider-container{flex:1 1 auto;position:relative;height:calc(100% - 56px)}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider{height:100%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content{padding:16px}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page{flex:1;max-height:100%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card{flex:1;margin-bottom:2em}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-header{overflow:visible !important}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-header .ajf-group-actions{position:absolute;left:calc(100vw - 160px - 6em);width:160px;margin-top:-2em;padding:15px;z-index:10;white-space:nowrap;overflow:visible !important}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-header .ajf-group-actions ion-fab-button{display:inline-block;overflow:visible !important}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content{display:flex;flex-wrap:wrap;flex-direction:row;align-content:flex-start;position:relative}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content .ajf-group-actions-bottom{width:100%;text-align:right;overflow:visible !important}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content .ajf-group-actions-bottom ion-fab-button{overflow:visible !important;display:inline-block}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry{flex:1 0 auto;padding-left:10px;padding-right:10px;width:100%;box-sizing:border-box}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-normal{width:100%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-small{width:50%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-smaller{width:33%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-tiny{width:25%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-mini{width:20%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider .ajf-page-slider-item-header{display:flex;align-items:center;width:100%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider .ajf-page-slider-item-header>h2{flex:1}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider .ajf-page-slider-item-header>h2>.ajf-form-header-number{margin-right:.5em}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider .ajf-page-slider-item-header>h2>.ajf-title{display:inline-block;margin-right:40px;white-space:normal;vertical-align:top}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar{display:flex;align-items:flex-start;flex-direction:row;position:absolute;bottom:0}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar ion-buttons.ajf-errors{order:1;color:red}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar .ajf-info-box{height:40px;padding:4px}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar .ajf-info-box>div{height:16px;line-height:16px}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar .ajf-info-box>div.ajf-content{font-weight:bold}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar .ajf-info-box.ajf-error{order:2;color:red}ajf-form form .ajf-form-container .ajf-spacer{flex:1 0 auto}\n"]
                },] }
    ];
    AjfFormRenderer.ctorParameters = function () { return [
        { type: forms.AjfFormRendererService },
        { type: i0.ChangeDetectorRef }
    ]; };

    /**
     * @license
     * Copyright (C) Gnucoop soc. coop.
     *
     * This file is part of the Advanced JSON forms (ajf).
     *
     * Advanced JSON forms (ajf) is free software: you can redistribute it and/or
     * modify it under the terms of the GNU Affero General Public License as
     * published by the Free Software Foundation, either version 3 of the License,
     * or (at your option) any later version.
     *
     * Advanced JSON forms (ajf) is distributed in the hope that it will be useful,
     * but WITHOUT ANY WARRANTY; without even the implied warranty of
     * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero
     * General Public License for more details.
     *
     * You should have received a copy of the GNU Affero General Public License
     * along with Advanced JSON forms (ajf).
     * If not, see http://www.gnu.org/licenses/.
     *
     */
    var AjfFormPage = /** @class */ (function () {
        function AjfFormPage() {
        }
        return AjfFormPage;
    }());
    AjfFormPage.decorators = [
        { type: i0.Directive, args: [{ selector: '[ajfFormPage]' },] }
    ];

    /**
     * @license
     * Copyright (C) Gnucoop soc. coop.
     *
     * This file is part of the Advanced JSON forms (ajf).
     *
     * Advanced JSON forms (ajf) is free software: you can redistribute it and/or
     * modify it under the terms of the GNU Affero General Public License as
     * published by the Free Software Foundation, either version 3 of the License,
     * or (at your option) any later version.
     *
     * Advanced JSON forms (ajf) is distributed in the hope that it will be useful,
     * but WITHOUT ANY WARRANTY; without even the implied warranty of
     * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero
     * General Public License for more details.
     *
     * You should have received a copy of the GNU Affero General Public License
     * along with Advanced JSON forms (ajf).
     * If not, see http://www.gnu.org/licenses/.
     *
     */
    var AjfSelectHasSearchBarPipe = /** @class */ (function () {
        function AjfSelectHasSearchBarPipe() {
        }
        AjfSelectHasSearchBarPipe.prototype.transform = function (instance, searchThreshold) {
            return instance.filteredChoices && instance.filteredChoices.length > searchThreshold;
        };
        return AjfSelectHasSearchBarPipe;
    }());
    AjfSelectHasSearchBarPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'ajfSelectHasSearchBar' },] }
    ];

    /**
     * @license
     * Copyright (C) Gnucoop soc. coop.
     *
     * This file is part of the Advanced JSON forms (ajf).
     *
     * Advanced JSON forms (ajf) is free software: you can redistribute it and/or
     * modify it under the terms of the GNU Affero General Public License as
     * published by the Free Software Foundation, either version 3 of the License,
     * or (at your option) any later version.
     *
     * Advanced JSON forms (ajf) is distributed in the hope that it will be useful,
     * but WITHOUT ANY WARRANTY; without even the implied warranty of
     * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero
     * General Public License for more details.
     *
     * You should have received a copy of the GNU Affero General Public License
     * along with Advanced JSON forms (ajf).
     * If not, see http://www.gnu.org/licenses/.
     *
     */
    var AjfSelectUseVirtualScroll = /** @class */ (function () {
        function AjfSelectUseVirtualScroll() {
        }
        AjfSelectUseVirtualScroll.prototype.transform = function (instance, vsThreshold) {
            return instance.filteredChoices && instance.filteredChoices.length > vsThreshold;
        };
        return AjfSelectUseVirtualScroll;
    }());
    AjfSelectUseVirtualScroll.decorators = [
        { type: i0.Pipe, args: [{ name: 'ajfSelectUseVirtualScroll' },] }
    ];

    /**
     * @license
     * Copyright (C) Gnucoop soc. coop.
     *
     * This file is part of the Advanced JSON forms (ajf).
     *
     * Advanced JSON forms (ajf) is free software: you can redistribute it and/or
     * modify it under the terms of the GNU Affero General Public License as
     * published by the Free Software Foundation, either version 3 of the License,
     * or (at your option) any later version.
     *
     * Advanced JSON forms (ajf) is distributed in the hope that it will be useful,
     * but WITHOUT ANY WARRANTY; without even the implied warranty of
     * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero
     * General Public License for more details.
     *
     * You should have received a copy of the GNU Affero General Public License
     * along with Advanced JSON forms (ajf).
     * If not, see http://www.gnu.org/licenses/.
     *
     */
    var AjfFormsModule = /** @class */ (function () {
        function AjfFormsModule() {
        }
        AjfFormsModule.forRoot = function () {
            return {
                ngModule: AjfFormsModule,
                providers: [
                    AjfFieldService,
                ],
            };
        };
        return AjfFormsModule;
    }());
    AjfFormsModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [
                        barcode.AjfBarcodeModule,
                        calendar.AjfCalendarModule,
                        checkboxGroup.AjfCheckboxGroupModule,
                        common.AjfCommonModule,
                        forms.AjfFormsModule,
                        pageSlider.AjfPageSliderModule,
                        time.AjfTimeModule,
                        common$1.CommonModule,
                        forms$1.FormsModule,
                        angular$1.GicModule,
                        angular.IonicModule,
                        forms$1.ReactiveFormsModule,
                        core.TranslateModule,
                    ],
                    declarations: [
                        AjfBarcodeFieldComponent,
                        AjfBooleanFieldComponent,
                        AjfDateFieldComponent,
                        AjfDateInputFieldComponent,
                        AjfEmptyFieldComponent,
                        AjfFormField,
                        AjfFormPage,
                        AjfFormRenderer,
                        AjfFormulaFieldComponent,
                        AjfInputFieldComponent,
                        AjfMultipleChoiceFieldComponent,
                        AjfNumberFieldComponent,
                        AjfSelectHasSearchBarPipe,
                        AjfSelectUseVirtualScroll,
                        AjfSingleChoiceFieldComponent,
                        AjfTableFieldComponent,
                        AjfTextareaFieldComponent,
                        AjfTimeFieldComponent,
                        AjfVideoUrlFieldComponent,
                    ],
                    entryComponents: [
                        AjfBarcodeFieldComponent,
                        AjfBooleanFieldComponent,
                        AjfDateFieldComponent,
                        AjfDateInputFieldComponent,
                        AjfEmptyFieldComponent,
                        AjfFormulaFieldComponent,
                        AjfInputFieldComponent,
                        AjfMultipleChoiceFieldComponent,
                        AjfNumberFieldComponent,
                        AjfSingleChoiceFieldComponent,
                        AjfTableFieldComponent,
                        AjfTextareaFieldComponent,
                        AjfTimeFieldComponent,
                        AjfVideoUrlFieldComponent,
                    ],
                    exports: [
                        AjfFormField,
                        AjfFormRenderer,
                    ],
                    providers: [
                        AjfFieldService,
                        { provide: forms.AJF_WARNING_ALERT_SERVICE, useClass: AjfWarningAlertService },
                    ],
                },] }
    ];

    /**
     * @license
     * Copyright (C) Gnucoop soc. coop.
     *
     * This file is part of the Advanced JSON forms (ajf).
     *
     * Advanced JSON forms (ajf) is free software: you can redistribute it and/or
     * modify it under the terms of the GNU Affero General Public License as
     * published by the Free Software Foundation, either version 3 of the License,
     * or (at your option) any later version.
     *
     * Advanced JSON forms (ajf) is distributed in the hope that it will be useful,
     * but WITHOUT ANY WARRANTY; without even the implied warranty of
     * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero
     * General Public License for more details.
     *
     * You should have received a copy of the GNU Affero General Public License
     * along with Advanced JSON forms (ajf).
     * If not, see http://www.gnu.org/licenses/.
     *
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AjfBooleanFieldComponent = AjfBooleanFieldComponent;
    exports.AjfDateFieldComponent = AjfDateFieldComponent;
    exports.AjfDateInputFieldComponent = AjfDateInputFieldComponent;
    exports.AjfEmptyFieldComponent = AjfEmptyFieldComponent;
    exports.AjfFieldService = AjfFieldService;
    exports.AjfFormField = AjfFormField;
    exports.AjfFormRenderer = AjfFormRenderer;
    exports.AjfFormsModule = AjfFormsModule;
    exports.AjfInputFieldComponent = AjfInputFieldComponent;
    exports.AjfMultipleChoiceFieldComponent = AjfMultipleChoiceFieldComponent;
    exports.AjfNumberFieldComponent = AjfNumberFieldComponent;
    exports.AjfSingleChoiceFieldComponent = AjfSingleChoiceFieldComponent;
    exports.AjfTableFieldComponent = AjfTableFieldComponent;
    exports.AjfTextareaFieldComponent = AjfTextareaFieldComponent;
    exports.AjfTimeFieldComponent = AjfTimeFieldComponent;
    exports.AjfWarningAlertService = AjfWarningAlertService;
    exports.ɵgc_ajf_src_ionic_forms_forms_a = AjfBarcodeFieldComponent;
    exports.ɵgc_ajf_src_ionic_forms_forms_b = AjfFormPage;
    exports.ɵgc_ajf_src_ionic_forms_forms_c = AjfFormulaFieldComponent;
    exports.ɵgc_ajf_src_ionic_forms_forms_d = AjfSelectHasSearchBarPipe;
    exports.ɵgc_ajf_src_ionic_forms_forms_e = AjfSelectUseVirtualScroll;
    exports.ɵgc_ajf_src_ionic_forms_forms_f = AjfVideoUrlFieldComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ionic-forms.umd.js.map
