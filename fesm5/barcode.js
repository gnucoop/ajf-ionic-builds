import { CommonModule } from '@angular/common';
import { forwardRef, Component, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, Renderer2, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { AjfCommonModule } from '@ajf/core/common';
import { __extends } from 'tslib';
import { AjfBarcode } from '@ajf/core/barcode';

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
var BARCODE_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return AjfBarcodeComponent; }),
    multi: true
};
var AjfBarcodeComponent = /** @class */ (function (_super) {
    __extends(AjfBarcodeComponent, _super);
    function AjfBarcodeComponent(cdr, renderer) {
        return _super.call(this, cdr, renderer) || this;
    }
    AjfBarcodeComponent.prototype.onSelectSegment = function (segment) {
        this.toggle = segment;
    };
    AjfBarcodeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ajf-barcode',
                    template: "<ng-container *ngIf=\"value; else barcode\">\n  <div class=\"ajf-code-container\">\n    <span>{{ value }}</span>\n    <ion-button (click)=\"reset()\" [disabled]=\"readonly\">\n      <ion-icon slot=\"icon-only\" style=\"transform: rotate(90deg);\" name=\"reorder\"></ion-icon>\n    </ion-button>\n  </div>\n</ng-container>\n<ng-template #barcode>\n  <ion-segment [value]=\"toggle\">\n    <ion-segment-button (click)=\"toggle = 'drop' ; fileInput.click()\" layout=\"icon-end\" [attr.disabled]=\"readonly\">\n      <ion-icon name=\"add-circle-outline\"></ion-icon>\n      <span translate>Upload image </span>\n      <input #fileInput type=\"file\" (change)=\"onSelectFile($event)\" multiple style=\"display:none;\" />\n    </ion-segment-button>\n    <ion-segment-button (click)=\"toggle = 'camera'\" [attr.disabled]=\"readonly\">\n      <span translate>Camera</span>\n    </ion-segment-button>\n  </ion-segment>\n  <ng-container *ngIf=\"toggle == 'camera'\">\n    <div ajfVideoDirective [source]=\"videoSource\" class=\"left\" (isInit)=\"takeSnapshot()\"></div>\n  </ng-container>\n</ng-template>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [BARCODE_CONTROL_VALUE_ACCESSOR],
                    styles: ["ajf-barcode ion-segment{width:fit-content}ajf-barcode .ajf-code-container{display:inline-flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-content:stretch;align-items:center}ajf-barcode .ajf-code-container button{margin-left:10px}ajf-barcode .ajf-drop-container{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-content:stretch;align-items:stretch}\n"]
                }] }
    ];
    /** @nocollapse */
    AjfBarcodeComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    return AjfBarcodeComponent;
}(AjfBarcode));

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
var AjfBarcodeModule = /** @class */ (function () {
    function AjfBarcodeModule() {
    }
    AjfBarcodeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        TranslateModule,
                        IonicModule,
                        AjfCommonModule
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

export { AjfBarcodeComponent, AjfBarcodeModule, BARCODE_CONTROL_VALUE_ACCESSOR };
//# sourceMappingURL=barcode.js.map
