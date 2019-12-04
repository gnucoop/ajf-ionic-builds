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
import { AjfPageSlider as AjfPageSlider$1, AjfPageSliderItem, AjfPageSliderModule as AjfPageSliderModule$1 } from '@ajf/core/page-slider';
import { AnimationBuilder } from '@angular/animations';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, ContentChildren, ViewChild, ChangeDetectorRef, Renderer2, ElementRef, NgModule } from '@angular/core';
import { Subscription, merge } from 'rxjs';
import { map, startWith, filter, switchMap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AjfPageSlider extends AjfPageSlider$1 {
    /**
     * @param {?} animationBuilder
     * @param {?} cdr
     * @param {?} renderer
     * @param {?} _el
     */
    constructor(animationBuilder, cdr, renderer, _el) {
        super(animationBuilder, cdr, renderer);
        this._el = _el;
        this._scrollSub = Subscription.EMPTY;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        super.ngAfterContentInit();
        this._scrollSub = this.pages.changes.pipe(map((/**
         * @return {?}
         */
        () => this.pages.toArray())), startWith(this.pages.toArray()), filter((/**
         * @param {?} pages
         * @return {?}
         */
        pages => pages.length > 0)), switchMap((/**
         * @param {?} pages
         * @return {?}
         */
        pages => merge(...pages.map((/**
         * @param {?} page
         * @return {?}
         */
        page => page.scroll)))))).subscribe((/**
         * @return {?}
         */
        () => {
            this._fixRippleFromRadioButton();
            this._fixToggleButtons();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
        this._scrollSub.unsubscribe();
    }
    /**
     * @private
     * @return {?}
     */
    _fixRippleFromRadioButton() {
        try {
            /** @type {?} */
            const el = (/** @type {?} */ (this._el.nativeElement));
            /** @type {?} */
            const radioGroups = el.getElementsByTagName('ion-radio-group');
            /** @type {?} */
            const radioGroup = radioGroups[0];
            /** @type {?} */
            const items = radioGroup.getElementsByTagName('ion-item');
            /** @type {?} */
            const item = items[0];
            /** @type {?} */
            const ripples = (/** @type {?} */ ((/** @type {?} */ (item.shadowRoot)).firstElementChild)).getElementsByTagName('ion-ripple-effect');
            /** @type {?} */
            const ripple = (/** @type {?} */ (ripples.item(0)));
            /** @type {?} */
            const orig = ripple.style.opacity;
            ripple.style.opacity = '0';
            ripple.addRipple(0, 0).then((/**
             * @param {?} remove
             * @return {?}
             */
            remove => {
                remove();
                ripple.style.opacity = orig;
            }));
        }
        catch (e) { }
    }
    /**
     * @private
     * @return {?}
     */
    _fixToggleButtons() {
        try {
            /** @type {?} */
            const el = (/** @type {?} */ (this._el.nativeElement));
            /** @type {?} */
            const toggleButtons = el.getElementsByTagName('ion-toggle');
            /** @type {?} */
            const toggleButtonsNum = toggleButtons.length;
            for (let i = 0; i < toggleButtonsNum; i++) {
                /** @type {?} */
                const toggleButton = (/** @type {?} */ (toggleButtons.item(i)));
                /** @type {?} */
                const inners = (/** @type {?} */ ((/** @type {?} */ (toggleButton.shadowRoot)).firstElementChild)).getElementsByClassName('toggle-inner');
                /** @type {?} */
                const inner = (/** @type {?} */ (inners[0]));
                inner.style.willChange = 'auto';
            }
        }
        catch (e) { }
    }
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
AjfPageSlider.ctorParameters = () => [
    { type: AnimationBuilder },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: ElementRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AjfPageSliderModule {
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

export { AjfPageSlider, AjfPageSliderModule };
//# sourceMappingURL=page-slider.js.map
