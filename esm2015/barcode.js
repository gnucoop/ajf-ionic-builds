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
import { CommonModule } from '@angular/common';
import { forwardRef, Component, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, Renderer2, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { AjfCommonModule } from '@ajf/core/common';
import { AjfBarcode } from '@ajf/core/barcode';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const BARCODE_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => AjfBarcodeComponent)),
    multi: true
};
class AjfBarcodeComponent extends AjfBarcode {
    /**
     * @param {?} cdr
     * @param {?} renderer
     */
    constructor(cdr, renderer) {
        super(cdr, renderer);
    }
}
AjfBarcodeComponent.decorators = [
    { type: Component, args: [{selector: 'ajf-barcode',
                template: "<ng-container *ngIf=\"value; else barcode\"><div class=\"ajf-code-container\"><span>{{ value }}</span><ion-button (click)=\"reset()\"><ion-icon slot=\"icon-only\" style=\"transform: rotate(90deg)\" name=\"reorder\"></ion-icon></ion-button></div></ng-container><ng-template #barcode><ion-segment [(ngModel)]=\"toggle\"><ion-segment-button value=\"drop\" (click)=\"fileInput.click()\" layout=\"icon-end\"><ion-icon name=\"add-circle-outline\"></ion-icon><span translate>Upload image </span><input #fileInput type=\"file\" (change)=\"onSelectFile($event?.target?.files)\" multiple=\"multiple\" style=\"display:none;\"></ion-segment-button><ion-segment-button value=\"camera\"><span translate>Camera</span></ion-segment-button></ion-segment><ng-container *ngIf=\"toggle == 'camera'\"><div ajfVideoDirective [source]=\"videoSource\" class=\"left\" (isInit)=\"takeSnapshot()\"></div></ng-container></ng-template>",
                styles: ["ajf-barcode ion-segment{width:fit-content}ajf-barcode .ajf-code-container{display:inline-flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-content:stretch;align-items:center}ajf-barcode .ajf-code-container button{margin-left:10px}ajf-barcode .ajf-drop-container{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-content:stretch;align-items:stretch}"],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [BARCODE_CONTROL_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
AjfBarcodeComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AjfBarcodeModule {
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
            },] },
];

export { AjfBarcodeComponent, AjfBarcodeModule, BARCODE_CONTROL_VALUE_ACCESSOR };
//# sourceMappingURL=barcode.js.map
