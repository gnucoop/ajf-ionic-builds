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
import { __extends } from 'tslib';
import { AnimationBuilder } from '@angular/animations';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, ContentChildren, ViewChild, ChangeDetectorRef, Renderer2, NgModule } from '@angular/core';
import { AjfPageSliderItem, AjfPageSlider as AjfPageSlider$1, AjfPageSliderModule as AjfPageSliderModule$1 } from '@ajf/core/page-slider';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AjfPageSlider = /** @class */ (function (_super) {
    __extends(AjfPageSlider, _super);
    function AjfPageSlider(animationBuilder, cdr, renderer) {
        return _super.call(this, animationBuilder, cdr, renderer) || this;
    }
    AjfPageSlider.decorators = [
        { type: Component, args: [{selector: 'ajf-page-slider',
                    template: "<div #content class=\"ajf-page-slider-content\"><div #body [ngClass]=\"'ajf-page-slider-' + orientation\" (touchstart)=\"onTouchStart($event)\" (touchmove)=\"onTouchMove($event)\" (touchend)=\"onTouchEnd()\" (mousewheel)=\"onMouseWheel($event)\" class=\"ajf-page-slider-body\"><ng-content></ng-content></div></div><ion-toolbar *ngIf=\"!hideNavigationButtons\" class=\"ajf-toolbar\"><ng-content select=\"[ajfPageSliderBar]\"></ng-content><ion-buttons slot=\"end\"><ion-button *ngIf=\"!fixedOrientation\" (click)=\"switchOrientation()\"><ion-icon [class.ajf-icon-rotated]=\"orientation == 'horizontal'\" name=\"swap\"></ion-icon></ion-button><ion-button (click)=\"slide({dir: 'up'})\" fill=\"solid\" color=\"secondary\"><ion-icon *ngIf=\"orientation == 'horizontal'\" name=\"arrow-back\"></ion-icon><ion-icon *ngIf=\"orientation == 'vertical'\" name=\"arrow-up\"></ion-icon></ion-button><ion-button (click)=\"slide({dir: 'down'})\" fill=\"solid\" color=\"secondary\"><ion-icon *ngIf=\"orientation == 'horizontal'\" name=\"arrow-forward\"></ion-icon><ion-icon *ngIf=\"orientation == 'vertical'\" name=\"arrow-down\"></ion-icon></ion-button></ion-buttons></ion-toolbar>",
                    styles: ["ajf-page-slider{display:flex;flex-direction:column;align-items:stretch}ajf-page-slider ion-icon.ajf-icon-rotated{transform:rotate(90deg)}ajf-page-slider>.ajf-page-slider-content{flex:1;display:block;overflow:hidden;height:100%}ajf-page-slider>.ajf-page-slider-content>.ajf-page-slider-body{display:flex;align-items:stretch}ajf-page-slider>.ajf-page-slider-content>.ajf-page-slider-body.ajf-page-slider-vertical{flex-direction:column;width:100%}ajf-page-slider>.ajf-page-slider-content>.ajf-page-slider-body.ajf-page-slider-horizontal{flex-direction:row;height:100%}ajf-page-slider>.ajf-page-slider-content>.ajf-page-slider-body>ajf-page-slider-item{flex:1 0 auto}"],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    inputs: ['duration', 'currentPage', 'hideNavigationButtons', 'orientation', 'fixedOrientation'],
                    outputs: ['pageScrollFinish', 'orientationChange'],
                    queries: {
                        pages: new ContentChildren(AjfPageSliderItem),
                        body: new ViewChild('body', { static: true }),
                    },
                },] },
    ];
    /** @nocollapse */
    AjfPageSlider.ctorParameters = function () { return [
        { type: AnimationBuilder },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    return AjfPageSlider;
}(AjfPageSlider$1));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AjfPageSliderModule = /** @class */ (function () {
    function AjfPageSliderModule() {
    }
    AjfPageSliderModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        IonicModule,
                        AjfPageSliderModule$1
                    ],
                    declarations: [
                        AjfPageSlider
                    ],
                    exports: [
                        AjfPageSliderModule$1,
                        AjfPageSlider
                    ]
                },] },
    ];
    return AjfPageSliderModule;
}());

export { AjfPageSlider, AjfPageSliderModule };
//# sourceMappingURL=page-slider.es5.js.map
