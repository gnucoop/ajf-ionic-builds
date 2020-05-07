import { AjfCommonModule } from '@ajf/core/common';
import { CommonModule } from '@angular/common';
import { forwardRef, Component, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, Renderer2, NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { AjfBarcode } from '@ajf/core/barcode';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/barcode/barcode.ts
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
    { type: Component, args: [{
                selector: 'ajf-barcode',
                template: "<ng-container *ngIf=\"value; else barcode\">\n  <div class=\"ajf-code-container\">\n    <span>{{ value }}</span>\n    <ion-button (click)=\"reset()\">\n      <ion-icon slot=\"icon-only\" style=\"transform: rotate(90deg);\" name=\"reorder\"></ion-icon>\n    </ion-button>\n  </div>\n</ng-container>\n<ng-template #barcode>\n  <ion-segment [value]=\"toggle\">\n    <ion-segment-button (click)=\"toggle = 'drop' ; fileInput.click()\" layout=\"icon-end\">\n      <ion-icon name=\"add-circle-outline\"></ion-icon>\n      <span translate>Upload image </span>\n      <input #fileInput type=\"file\" (change)=\"onSelectFile($event)\" multiple style=\"display:none;\" />\n    </ion-segment-button>\n    <ion-segment-button (click)=\"toggle = 'camera'\">\n      <span translate>Camera</span>\n    </ion-segment-button>\n  </ion-segment>\n  <ng-container *ngIf=\"toggle == 'camera'\">\n    <div ajfVideoDirective [source]=\"videoSource\" class=\"left\" (isInit)=\"takeSnapshot()\"></div>\n  </ng-container>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [BARCODE_CONTROL_VALUE_ACCESSOR],
                styles: ["ajf-barcode ion-segment{width:fit-content}ajf-barcode .ajf-code-container{display:inline-flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-content:stretch;align-items:center}ajf-barcode .ajf-code-container button{margin-left:10px}ajf-barcode .ajf-drop-container{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-content:stretch;align-items:stretch}\n"]
            }] }
];
/** @nocollapse */
AjfBarcodeComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];

/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/barcode/barcode-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AjfBarcodeModule {
}
AjfBarcodeModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    AjfCommonModule,
                    CommonModule,
                    IonicModule,
                    TranslateModule,
                ],
                declarations: [
                    AjfBarcodeComponent,
                ],
                exports: [
                    AjfBarcodeComponent,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/barcode/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AjfBarcodeComponent, AjfBarcodeModule, BARCODE_CONTROL_VALUE_ACCESSOR };
//# sourceMappingURL=barcode.js.map
