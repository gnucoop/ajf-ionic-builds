(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@ngx-translate/core'), require('@ionic/angular'), require('@ajf/core/common'), require('tslib'), require('@ajf/core/barcode')) :
    typeof define === 'function' && define.amd ? define('@ajf/ionic/barcode', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@ngx-translate/core', '@ionic/angular', '@ajf/core/common', 'tslib', '@ajf/core/barcode'], factory) :
    (global = global || self, factory((global.ajf = global.ajf || {}, global.ajf.ionic = global.ajf.ionic || {}, global.ajf.ionic.barcode = {}), global.ng.common, global.ng.core, global.ng.forms, global.ngxTranslate.core, global.ionic.angular, global.ng.core.common, global.tslib, global.ng.core.barcode));
}(this, (function (exports, common, core, forms, core$1, angular, common$1, tslib, barcode) { 'use strict';

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
    var BARCODE_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return AjfBarcodeComponent; }),
        multi: true
    };
    var AjfBarcodeComponent = /** @class */ (function (_super) {
        tslib.__extends(AjfBarcodeComponent, _super);
        function AjfBarcodeComponent(cdr, renderer) {
            return _super.call(this, cdr, renderer) || this;
        }
        AjfBarcodeComponent.prototype.onSelectSegment = function (segment) {
            this.toggle = segment;
        };
        AjfBarcodeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ajf-barcode',
                        template: "<ng-container *ngIf=\"value; else barcode\">\n  <div class=\"ajf-code-container\">\n    <span>{{ value }}</span>\n    <ion-button (click)=\"reset()\" [disabled]=\"readonly\">\n      <ion-icon slot=\"icon-only\" style=\"transform: rotate(90deg);\" name=\"reorder\"></ion-icon>\n    </ion-button>\n  </div>\n</ng-container>\n<ng-template #barcode>\n  <ion-segment [value]=\"toggle\">\n    <ion-segment-button (click)=\"toggle = 'drop' ; fileInput.click()\" layout=\"icon-end\" [attr.disabled]=\"readonly\">\n      <ion-icon name=\"add-circle-outline\"></ion-icon>\n      <span translate>Upload image </span>\n      <input #fileInput type=\"file\" (change)=\"onSelectFile($event)\" multiple style=\"display:none;\" />\n    </ion-segment-button>\n    <ion-segment-button (click)=\"toggle = 'camera'\" [attr.disabled]=\"readonly\">\n      <span translate>Camera</span>\n    </ion-segment-button>\n  </ion-segment>\n  <ng-container *ngIf=\"toggle == 'camera'\">\n    <div ajfVideoDirective [source]=\"videoSource\" class=\"left\" (isInit)=\"takeSnapshot()\"></div>\n  </ng-container>\n</ng-template>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [BARCODE_CONTROL_VALUE_ACCESSOR],
                        styles: ["ajf-barcode ion-segment{width:fit-content}ajf-barcode .ajf-code-container{display:inline-flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-content:stretch;align-items:center}ajf-barcode .ajf-code-container button{margin-left:10px}ajf-barcode .ajf-drop-container{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-content:stretch;align-items:stretch}\n"]
                    }] }
        ];
        /** @nocollapse */
        AjfBarcodeComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: core.Renderer2 }
        ]; };
        return AjfBarcodeComponent;
    }(barcode.AjfBarcode));

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
                    },] }
        ];
        return AjfBarcodeModule;
    }());

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

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AjfBarcodeComponent = AjfBarcodeComponent;
    exports.AjfBarcodeModule = AjfBarcodeModule;
    exports.BARCODE_CONTROL_VALUE_ACCESSOR = BARCODE_CONTROL_VALUE_ACCESSOR;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ionic-barcode.umd.js.map
