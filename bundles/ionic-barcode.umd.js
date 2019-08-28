/**
 * @license
 * Copyright (C) 2018 Gnucoop soc. coop.
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
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@ngx-translate/core'), require('@ionic/angular'), require('@ajf/core/common'), require('@ajf/core/barcode')) :
    typeof define === 'function' && define.amd ? define('@ajf/ionic/barcode', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@ngx-translate/core', '@ionic/angular', '@ajf/core/common', '@ajf/core/barcode'], factory) :
    (global = global || self, factory((global.ajf = global.ajf || {}, global.ajf.ionic = global.ajf.ionic || {}, global.ajf.ionic.barcode = {}), global.ng.common, global.ng.core, global.ng.forms, global.ngxt.core, global.ionic.angular, global.ajf.core.common, global.ajf.core.barcode));
}(this, function (exports, common, core, forms, core$1, angular, common$1, barcode) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var BARCODE_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef((/**
         * @return {?}
         */
        function () { return AjfBarcodeComponent; })),
        multi: true
    };
    var AjfBarcodeComponent = /** @class */ (function (_super) {
        __extends(AjfBarcodeComponent, _super);
        function AjfBarcodeComponent(cdr, renderer) {
            return _super.call(this, cdr, renderer) || this;
        }
        AjfBarcodeComponent.decorators = [
            { type: core.Component, args: [{selector: 'ajf-barcode',
                        template: "<ng-container *ngIf=\"value; else barcode\"><div class=\"ajf-code-container\"><span>{{ value }}</span><ion-button (click)=\"reset()\"><ion-icon slot=\"icon-only\" style=\"transform: rotate(90deg)\" name=\"reorder\"></ion-icon></ion-button></div></ng-container><ng-template #barcode><ion-segment [(ngModel)]=\"toggle\"><ion-segment-button value=\"drop\" (click)=\"fileInput.click()\" layout=\"icon-end\"><ion-icon name=\"add-circle-outline\"></ion-icon><span translate>Upload image </span><input #fileInput type=\"file\" (change)=\"onSelectFile($event?.target?.files)\" multiple=\"multiple\" style=\"display:none;\"></ion-segment-button><ion-segment-button value=\"camera\"><span translate>Camera</span></ion-segment-button></ion-segment><ng-container *ngIf=\"toggle == 'camera'\"><div ajfVideoDirective [source]=\"videoSource\" class=\"left\" (isInit)=\"takeSnapshot()\"></div></ng-container></ng-template>",
                        styles: ["ajf-barcode ion-segment{width:fit-content}ajf-barcode .ajf-code-container{display:inline-flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-content:stretch;align-items:center}ajf-barcode .ajf-code-container button{margin-left:10px}ajf-barcode .ajf-drop-container{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-content:stretch;align-items:stretch}"],
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [BARCODE_CONTROL_VALUE_ACCESSOR]
                    },] },
        ];
        /** @nocollapse */
        AjfBarcodeComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: core.Renderer2 }
        ]; };
        return AjfBarcodeComponent;
    }(barcode.AjfBarcode));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AjfBarcodeModule = /** @class */ (function () {
        function AjfBarcodeModule() {
        }
        AjfBarcodeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            core$1.TranslateModule,
                            angular.IonicModule,
                            common$1.AjfCommonModule
                        ],
                        declarations: [
                            AjfBarcodeComponent,
                        ],
                        exports: [
                            AjfBarcodeComponent,
                        ],
                    },] },
        ];
        return AjfBarcodeModule;
    }());

    exports.AjfBarcodeComponent = AjfBarcodeComponent;
    exports.AjfBarcodeModule = AjfBarcodeModule;
    exports.BARCODE_CONTROL_VALUE_ACCESSOR = BARCODE_CONTROL_VALUE_ACCESSOR;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ionic-barcode.umd.js.map
