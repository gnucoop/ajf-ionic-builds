import { AjfPageSlider as AjfPageSlider$1, AjfPageSliderModule as AjfPageSliderModule$1 } from '@ajf/core/page-slider';
import { AnimationBuilder } from '@angular/animations';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, Renderer2, ElementRef, NgModule } from '@angular/core';
import { Subscription, merge } from 'rxjs';
import { map, startWith, filter, switchMap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/page-slider/page-slider.ts
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
        this._scrollSub = this.pages.changes
            .pipe(map((/**
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
        page => page.scroll))))))
            .subscribe((/**
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
        catch (e) {
        }
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
                inner.setAttribute('style', 'will-change: auto');
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    try {
                        inner.removeAttribute('style');
                    }
                    catch (e) {
                    }
                }), 0);
            }
        }
        catch (e) {
        }
    }
}
AjfPageSlider.decorators = [
    { type: Component, args: [{
                selector: 'ajf-page-slider',
                template: "<div #content class=\"ajf-page-slider-content\">\n  <div #body [ngClass]=\"'ajf-page-slider-' + orientation\"\n      (touchstart)=\"onTouchStart($event)\"\n      (touchmove)=\"onTouchMove($event)\"\n      (touchend)=\"onTouchEnd()\"\n      (mousewheel)=\"onMouseWheel($event)\" class=\"ajf-page-slider-body\">\n    <ng-content></ng-content>\n  </div>\n</div>\n<ion-toolbar *ngIf=\"!hideNavigationButtons\" class=\"ajf-toolbar\">\n  <ng-content select=\"[ajfPageSliderBar]\"></ng-content>\n  <ion-buttons slot=\"end\">\n    <ion-button *ngIf=\"!fixedOrientation\" (click)=\"switchOrientation()\">\n      <ion-icon [class.ajf-icon-rotated]=\"orientation == 'horizontal'\"\n          name=\"swap-horizontal\"></ion-icon>\n    </ion-button>\n    <ion-button (click)=\"slide({dir: 'up'})\" fill=\"solid\" color=\"secondary\">\n      <ion-icon *ngIf=\"orientation == 'horizontal'\" name=\"arrow-back\"></ion-icon>\n      <ion-icon *ngIf=\"orientation == 'vertical'\" name=\"arrow-up\"></ion-icon>\n    </ion-button>\n    <ion-button (click)=\"slide({dir: 'down'})\" fill=\"solid\" color=\"secondary\">\n      <ion-icon *ngIf=\"orientation == 'horizontal'\" name=\"arrow-forward\"></ion-icon>\n      <ion-icon *ngIf=\"orientation == 'vertical'\" name=\"arrow-down\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["ajf-page-slider{display:flex;flex-direction:column;align-items:stretch}ajf-page-slider ion-icon.ajf-icon-rotated{transform:rotate(90deg)}ajf-page-slider>.ajf-page-slider-content{flex:1;display:block;overflow:hidden;height:100%}ajf-page-slider>.ajf-page-slider-content>.ajf-page-slider-body{display:flex;align-items:stretch}ajf-page-slider>.ajf-page-slider-content>.ajf-page-slider-body.ajf-page-slider-vertical{flex-direction:column;width:100%}ajf-page-slider>.ajf-page-slider-content>.ajf-page-slider-body.ajf-page-slider-horizontal{flex-direction:row;height:100%}ajf-page-slider>.ajf-page-slider-content>.ajf-page-slider-body>ajf-page-slider-item{flex:1 0 auto}\n"]
            }] }
];
/** @nocollapse */
AjfPageSlider.ctorParameters = () => [
    { type: AnimationBuilder },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: ElementRef }
];
if (false) {
    /** @type {?} */
    AjfPageSlider.ngAcceptInputType_fixedOrientation;
    /** @type {?} */
    AjfPageSlider.ngAcceptInputType_hideNavigationButtons;
    /**
     * @type {?}
     * @private
     */
    AjfPageSlider.prototype._scrollSub;
    /**
     * @type {?}
     * @private
     */
    AjfPageSlider.prototype._el;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/page-slider/page-slider-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AjfPageSliderModule {
}
AjfPageSliderModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    AjfPageSliderModule$1,
                    CommonModule,
                    IonicModule,
                ],
                declarations: [
                    AjfPageSlider,
                ],
                exports: [
                    AjfPageSliderModule$1,
                    AjfPageSlider,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/page-slider/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AjfPageSlider, AjfPageSliderModule };
//# sourceMappingURL=page-slider.js.map
