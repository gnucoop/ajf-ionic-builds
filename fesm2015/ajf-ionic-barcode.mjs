import * as i3 from '@ajf/core/common';
import { AjfCommonModule } from '@ajf/core/common';
import { AjfTranslocoModule } from '@ajf/core/transloco';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { forwardRef, Component, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, NgModule } from '@angular/core';
import * as i1 from '@ionic/angular';
import { IonSlides, IonicModule } from '@ionic/angular';
import { AjfBarcode } from '@ajf/core/barcode';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';
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
    multi: true,
};
class AjfBarcodeComponent extends AjfBarcode {
    constructor(cdr, renderer) {
        super(cdr, renderer);
        this._currentTab = 'image';
        this._slidesSub = Subscription.EMPTY;
    }
    get currentTab() {
        return this._currentTab;
    }
    ngAfterViewInit() {
        if (this.slides == null) {
            return;
        }
        const slides = this.slides;
        this._slidesSub = slides.ionSlideDidChange.subscribe(() => {
            slides.getActiveIndex().then(idx => {
                const currentTab = idx === 0 ? 'image' : 'camera';
                if (this._currentTab !== currentTab) {
                    this._currentTab = currentTab;
                    this._cdr.markForCheck();
                }
            });
        });
    }
    ngOnDestroy() {
        this._slidesSub.unsubscribe();
    }
    selectTab(tab) {
        const idx = tab === 'image' ? 0 : 1;
        this._currentTab = tab;
        this.onTabChange(idx);
        if (this.slides != null) {
            this.slides.slideTo(idx);
        }
        this._cdr.markForCheck();
    }
}
AjfBarcodeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfBarcodeComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
AjfBarcodeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.5", type: AjfBarcodeComponent, selector: "ajf-barcode", providers: [BARCODE_CONTROL_VALUE_ACCESSOR], viewQueries: [{ propertyName: "slides", first: true, predicate: IonSlides, descendants: true }], usesInheritance: true, ngImport: i0, template: "<ng-container *ngIf=\"value; else barcode\">\n  <div class=\"ajf-code-container\">\n    <span>{{ value }}</span>\n    <ion-button (click)=\"reset()\">\n      <ion-icon\n        slot=\"icon-only\"\n        style=\"transform: rotate(90deg)\"\n        name=\"barcode-outline\"\n      ></ion-icon>\n    </ion-button>\n  </div>\n</ng-container>\n<ng-template #barcode>\n  <ion-tabs>\n    <ion-tab-bar slot=\"top\">\n      <ion-tab-button [selected]=\"currentTab === 'image'\" (click)=\"selectTab('image')\">\n        <ion-label>{{ 'Image'| transloco }}</ion-label>\n      </ion-tab-button>\n      <ion-tab-button [selected]=\"currentTab === 'camera'\" (click)=\"selectTab('camera')\">\n        <ion-label>{{ 'Camera'| transloco }}</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n  <ion-slides>\n    <ion-slide>\n      <div class=\"ajf-drop-container\">\n        <div class=\"ajf-dropzone\" ajfDnd (file)=\"onSelectDrop($event)\">\n          <div class=\"ajf-text-wrapper\">\n            <div class=\"ajf-centered\">\n              <a mat-button (click)=\"fileInput.click()\">{{'Drop your image here or click to select'|transloco}}</a>\n            </div>\n          </div>\n        </div>\n        <div #barcodeImagePreview class=\"ajf-barcode-image-preview\"></div>\n      </div>\n      <input\n        #fileInput\n        type=\"file\"\n        (change)=\"onSelectFile($event)\"\n        multiple\n        style=\"display: none\"\n      />\n    </ion-slide>\n    <ion-slide>\n      <div class=\"ajf-barcode-video\">\n        <ng-container *ngIf=\"supportsVideoStream; else noVideo\">\n          <div *ngIf=\"showSwitchButton\" class=\"ajf-barcode-switch-camera\">\n            <button mat-icon-button (click)=\"switchCamera()\"><ion-icon name=\"camera-reverse-outline\"></ion-icon></button>\n          </div>\n          <div #barcodeVideoPreview class=\"ajf-video-preview ajf-video-preview-hidden\">\n            <div *ngIf=\"value && value.length > 0\">{{ value }}</div>\n          </div>\n          <video #barcodeVideo autoplay playsinline muted></video>\n        </ng-container>\n        <ng-template #noVideo>\n\n        </ng-template>\n      </div>\n    </ion-slide>\n  </ion-slides>\n</ng-template>\n", styles: ["ajf-barcode{display:block;position:relative;height:60vh}ajf-barcode ion-tabs{display:block!important;position:relative!important;height:auto!important;contain:none!important}ajf-barcode .ajf-code-container{display:inline-flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-content:stretch;align-items:center}ajf-barcode .ajf-code-container button{margin-left:10px}ajf-barcode .ajf-drop-container{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-content:stretch;align-items:stretch;position:relative;flex:1}ajf-barcode .ajf-drop-container .ajf-barcode-image-preview{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;background-size:contain;background-repeat:no-repeat;background-position:center}ajf-barcode .ajf-drop-container .ajf-dropzone{z-index:2;order:0;flex:1 1 auto;align-self:auto;height:50vh;display:table;background-color:#eeeeee80;border:dotted 1px #aaa;overflow:hidden}ajf-barcode .ajf-drop-container .ajf-dropzone .ajf-text-wrapper{display:table-cell;vertical-align:middle}ajf-barcode .ajf-drop-container .ajf-dropzone .ajf-centered{font-family:sans-serif;font-size:1.3em;font-weight:700;text-align:center}ajf-barcode .ajf-barcode-video{height:50vh;position:relative}ajf-barcode .ajf-barcode-video>video{width:100%;height:100%}ajf-barcode .ajf-barcode-video>.ajf-video-preview{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:5;border:3px solid #000000}ajf-barcode .ajf-barcode-video>.ajf-video-preview.ajf-video-preview-hidden{display:none;position:relative}ajf-barcode .ajf-barcode-video>.ajf-video-preview.ajf-video-preview-hidden>div{position:absolute;right:0;left:0;bottom:-1em;height:2em;box-sizing:border-box;padding:.5em;background-color:#fff;border-radius:.5em}ajf-barcode .ajf-barcode-video>.ajf-barcode-switch-camera{position:absolute;top:1em;right:1em;z-index:10;padding:.5em;border-radius:.5em;background-color:#fff}\n"], components: [{ type: i1.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { type: i1.IonIcon, selector: "ion-icon", inputs: ["ariaHidden", "ariaLabel", "color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] }, { type: i1.IonTabs, selector: "ion-tabs", outputs: ["ionTabsWillChange", "ionTabsDidChange"] }, { type: i1.IonTabBar, selector: "ion-tab-bar", inputs: ["color", "mode", "selectedTab", "translucent"] }, { type: i1.IonTabButton, selector: "ion-tab-button", inputs: ["disabled", "download", "href", "layout", "mode", "rel", "selected", "tab", "target"] }, { type: i1.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i1.IonSlides, selector: "ion-slides", inputs: ["mode", "options", "pager", "scrollbar"] }, { type: i1.IonSlide, selector: "ion-slide" }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.AjfDndDirective, selector: "[ajfDnd]", outputs: ["file"] }], pipes: { "transloco": i4.TranslocoPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfBarcodeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ajf-barcode', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [BARCODE_CONTROL_VALUE_ACCESSOR], template: "<ng-container *ngIf=\"value; else barcode\">\n  <div class=\"ajf-code-container\">\n    <span>{{ value }}</span>\n    <ion-button (click)=\"reset()\">\n      <ion-icon\n        slot=\"icon-only\"\n        style=\"transform: rotate(90deg)\"\n        name=\"barcode-outline\"\n      ></ion-icon>\n    </ion-button>\n  </div>\n</ng-container>\n<ng-template #barcode>\n  <ion-tabs>\n    <ion-tab-bar slot=\"top\">\n      <ion-tab-button [selected]=\"currentTab === 'image'\" (click)=\"selectTab('image')\">\n        <ion-label>{{ 'Image'| transloco }}</ion-label>\n      </ion-tab-button>\n      <ion-tab-button [selected]=\"currentTab === 'camera'\" (click)=\"selectTab('camera')\">\n        <ion-label>{{ 'Camera'| transloco }}</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n  <ion-slides>\n    <ion-slide>\n      <div class=\"ajf-drop-container\">\n        <div class=\"ajf-dropzone\" ajfDnd (file)=\"onSelectDrop($event)\">\n          <div class=\"ajf-text-wrapper\">\n            <div class=\"ajf-centered\">\n              <a mat-button (click)=\"fileInput.click()\">{{'Drop your image here or click to select'|transloco}}</a>\n            </div>\n          </div>\n        </div>\n        <div #barcodeImagePreview class=\"ajf-barcode-image-preview\"></div>\n      </div>\n      <input\n        #fileInput\n        type=\"file\"\n        (change)=\"onSelectFile($event)\"\n        multiple\n        style=\"display: none\"\n      />\n    </ion-slide>\n    <ion-slide>\n      <div class=\"ajf-barcode-video\">\n        <ng-container *ngIf=\"supportsVideoStream; else noVideo\">\n          <div *ngIf=\"showSwitchButton\" class=\"ajf-barcode-switch-camera\">\n            <button mat-icon-button (click)=\"switchCamera()\"><ion-icon name=\"camera-reverse-outline\"></ion-icon></button>\n          </div>\n          <div #barcodeVideoPreview class=\"ajf-video-preview ajf-video-preview-hidden\">\n            <div *ngIf=\"value && value.length > 0\">{{ value }}</div>\n          </div>\n          <video #barcodeVideo autoplay playsinline muted></video>\n        </ng-container>\n        <ng-template #noVideo>\n\n        </ng-template>\n      </div>\n    </ion-slide>\n  </ion-slides>\n</ng-template>\n", styles: ["ajf-barcode{display:block;position:relative;height:60vh}ajf-barcode ion-tabs{display:block!important;position:relative!important;height:auto!important;contain:none!important}ajf-barcode .ajf-code-container{display:inline-flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-content:stretch;align-items:center}ajf-barcode .ajf-code-container button{margin-left:10px}ajf-barcode .ajf-drop-container{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-content:stretch;align-items:stretch;position:relative;flex:1}ajf-barcode .ajf-drop-container .ajf-barcode-image-preview{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;background-size:contain;background-repeat:no-repeat;background-position:center}ajf-barcode .ajf-drop-container .ajf-dropzone{z-index:2;order:0;flex:1 1 auto;align-self:auto;height:50vh;display:table;background-color:#eeeeee80;border:dotted 1px #aaa;overflow:hidden}ajf-barcode .ajf-drop-container .ajf-dropzone .ajf-text-wrapper{display:table-cell;vertical-align:middle}ajf-barcode .ajf-drop-container .ajf-dropzone .ajf-centered{font-family:sans-serif;font-size:1.3em;font-weight:700;text-align:center}ajf-barcode .ajf-barcode-video{height:50vh;position:relative}ajf-barcode .ajf-barcode-video>video{width:100%;height:100%}ajf-barcode .ajf-barcode-video>.ajf-video-preview{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:5;border:3px solid #000000}ajf-barcode .ajf-barcode-video>.ajf-video-preview.ajf-video-preview-hidden{display:none;position:relative}ajf-barcode .ajf-barcode-video>.ajf-video-preview.ajf-video-preview-hidden>div{position:absolute;right:0;left:0;bottom:-1em;height:2em;box-sizing:border-box;padding:.5em;background-color:#fff;border-radius:.5em}ajf-barcode .ajf-barcode-video>.ajf-barcode-switch-camera{position:absolute;top:1em;right:1em;z-index:10;padding:.5em;border-radius:.5em;background-color:#fff}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }]; }, propDecorators: { slides: [{
                type: ViewChild,
                args: [IonSlides]
            }] } });

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
AjfBarcodeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfBarcodeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AjfBarcodeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfBarcodeModule, declarations: [AjfBarcodeComponent], imports: [AjfCommonModule, CommonModule, IonicModule, AjfTranslocoModule], exports: [AjfBarcodeComponent] });
AjfBarcodeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfBarcodeModule, imports: [[AjfCommonModule, CommonModule, IonicModule, AjfTranslocoModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfBarcodeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [AjfCommonModule, CommonModule, IonicModule, AjfTranslocoModule],
                    declarations: [AjfBarcodeComponent],
                    exports: [AjfBarcodeComponent],
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
//# sourceMappingURL=ajf-ionic-barcode.mjs.map
