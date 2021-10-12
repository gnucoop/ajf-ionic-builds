import * as i3 from '@ajf/core/common';
import { AjfCommonModule } from '@ajf/core/common';
import { AjfTranslocoModule } from '@ajf/core/transloco';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { forwardRef, Component, ViewEncapsulation, ChangeDetectionStrategy, NgModule } from '@angular/core';
import * as i1 from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { AjfBarcode } from '@ajf/core/barcode';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i4 from '@ngneat/transloco';

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
const BARCODE_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AjfBarcodeComponent),
    multi: true
};
class AjfBarcodeComponent extends AjfBarcode {
    constructor(cdr, renderer) {
        super(cdr, renderer);
    }
}
AjfBarcodeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: AjfBarcodeComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
AjfBarcodeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-next.15", type: AjfBarcodeComponent, selector: "ajf-barcode", providers: [BARCODE_CONTROL_VALUE_ACCESSOR], usesInheritance: true, ngImport: i0, template: "<ng-container *ngIf=\"value; else barcode\">\n  <div class=\"ajf-code-container\">\n    <span>{{ value }}</span>\n    <ion-button (click)=\"reset()\">\n      <ion-icon\n        slot=\"icon-only\"\n        style=\"transform: rotate(90deg)\"\n        name=\"reorder\"\n      ></ion-icon>\n    </ion-button>\n  </div>\n</ng-container>\n<ng-template #barcode>\n  <ion-segment [value]=\"toggle\">\n    <ion-segment-button\n      (click)=\"toggle = 'drop' ; fileInput.click()\"\n      layout=\"icon-end\"\n    >\n      <ion-icon name=\"add-circle-outline\"></ion-icon>\n      <span>{{'Upload image'|transloco}}</span>\n      <input\n        #fileInput\n        type=\"file\"\n        (change)=\"onSelectFile($event)\"\n        multiple\n        style=\"display: none\"\n      />\n    </ion-segment-button>\n    <ion-segment-button (click)=\"toggle = 'camera'\">\n      <span>{{'Camera'|transloco}}</span>\n    </ion-segment-button>\n  </ion-segment>\n  <ng-container *ngIf=\"toggle == 'camera'\">\n    <div\n      ajfVideoDirective\n      [source]=\"videoSource\"\n      class=\"left\"\n      (isInit)=\"takeSnapshot()\"\n    ></div>\n  </ng-container>\n</ng-template>\n", styles: ["ajf-barcode ion-segment{width:fit-content}ajf-barcode .ajf-code-container{display:inline-flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-content:stretch;align-items:center}ajf-barcode .ajf-code-container button{margin-left:10px}ajf-barcode .ajf-drop-container{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-content:stretch;align-items:stretch}\n"], components: [{ type: i1.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { type: i1.IonIcon, selector: "ion-icon", inputs: ["ariaHidden", "ariaLabel", "color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] }, { type: i1.IonSegment, selector: "ion-segment", inputs: ["color", "disabled", "mode", "scrollable", "swipeGesture", "value"] }, { type: i1.IonSegmentButton, selector: "ion-segment-button", inputs: ["disabled", "layout", "mode", "type", "value"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.SelectValueAccessor, selector: "ion-range, ion-select, ion-radio-group, ion-segment, ion-datetime" }, { type: i3.AjfVideoDirective, selector: "[ajfVideoDirective]", inputs: ["source"], outputs: ["isInit"] }], pipes: { "transloco": i4.TranslocoPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: AjfBarcodeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ajf-barcode', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [BARCODE_CONTROL_VALUE_ACCESSOR], template: "<ng-container *ngIf=\"value; else barcode\">\n  <div class=\"ajf-code-container\">\n    <span>{{ value }}</span>\n    <ion-button (click)=\"reset()\">\n      <ion-icon\n        slot=\"icon-only\"\n        style=\"transform: rotate(90deg)\"\n        name=\"reorder\"\n      ></ion-icon>\n    </ion-button>\n  </div>\n</ng-container>\n<ng-template #barcode>\n  <ion-segment [value]=\"toggle\">\n    <ion-segment-button\n      (click)=\"toggle = 'drop' ; fileInput.click()\"\n      layout=\"icon-end\"\n    >\n      <ion-icon name=\"add-circle-outline\"></ion-icon>\n      <span>{{'Upload image'|transloco}}</span>\n      <input\n        #fileInput\n        type=\"file\"\n        (change)=\"onSelectFile($event)\"\n        multiple\n        style=\"display: none\"\n      />\n    </ion-segment-button>\n    <ion-segment-button (click)=\"toggle = 'camera'\">\n      <span>{{'Camera'|transloco}}</span>\n    </ion-segment-button>\n  </ion-segment>\n  <ng-container *ngIf=\"toggle == 'camera'\">\n    <div\n      ajfVideoDirective\n      [source]=\"videoSource\"\n      class=\"left\"\n      (isInit)=\"takeSnapshot()\"\n    ></div>\n  </ng-container>\n</ng-template>\n", styles: ["ajf-barcode ion-segment{width:fit-content}ajf-barcode .ajf-code-container{display:inline-flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-content:stretch;align-items:center}ajf-barcode .ajf-code-container button{margin-left:10px}ajf-barcode .ajf-drop-container{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-content:stretch;align-items:stretch}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }]; } });

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
class AjfBarcodeModule {
}
AjfBarcodeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: AjfBarcodeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AjfBarcodeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: AjfBarcodeModule, declarations: [AjfBarcodeComponent], imports: [AjfCommonModule,
        CommonModule,
        IonicModule,
        AjfTranslocoModule], exports: [AjfBarcodeComponent] });
AjfBarcodeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: AjfBarcodeModule, imports: [[
            AjfCommonModule,
            CommonModule,
            IonicModule,
            AjfTranslocoModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: AjfBarcodeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        AjfCommonModule,
                        CommonModule,
                        IonicModule,
                        AjfTranslocoModule,
                    ],
                    declarations: [
                        AjfBarcodeComponent,
                    ],
                    exports: [
                        AjfBarcodeComponent,
                    ],
                }]
        }] });

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
//# sourceMappingURL=barcode.mjs.map
