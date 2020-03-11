/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/page-slider/page-slider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
import { AjfPageSlider as AjfCorePageSlider } from '@ajf/core/page-slider';
import { AnimationBuilder } from '@angular/animations';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';
import { merge, Subscription } from 'rxjs';
import { filter, map, startWith, switchMap } from 'rxjs/operators';
export class AjfPageSlider extends AjfCorePageSlider {
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
                inner.setAttribute('style', 'will-change: auto');
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    try {
                        inner.removeAttribute('style');
                    }
                    catch (e) { }
                }), 0);
            }
        }
        catch (e) { }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zbGlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvaW9uaWMvcGFnZS1zbGlkZXIvcGFnZS1zbGlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkEsT0FBTyxFQUFDLGFBQWEsSUFBSSxpQkFBaUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3pFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBRXJELE9BQU8sRUFBbUIsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUM3RSxVQUFVLEVBQWEsU0FBUyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQVNqRSxNQUFNLE9BQU8sYUFBYyxTQUFRLGlCQUFpQjs7Ozs7OztJQUdsRCxZQUNFLGdCQUFrQyxFQUNsQyxHQUFzQixFQUN0QixRQUFtQixFQUNYLEdBQWU7UUFFdkIsS0FBSyxDQUFDLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUYvQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBTmpCLGVBQVUsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO0lBU3hDLENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ3ZDLEdBQUc7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUMsRUFDL0IsU0FBUyxD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Q0FBQyxDQUFDLENBQUM7YUFDUDtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRztJQUNqQixDQUFDOzs7WUExRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLHl6Q0FBK0I7Z0JBRS9CLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7WUFiTyxnQkFBZ0I7WUFFMkIsaUJBQWlCO1lBQzNDLFNBQVM7WUFBaEMsVUFBVTs7OztJQWdGVixpREFBd0Q7O0lBQ3hELHNEQUE2RDs7Ozs7SUFyRTdELG1DQUF3Qzs7Ozs7SUFNdEMsNEJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChDKSBHbnVjb29wIHNvYy4gY29vcC5cbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSxcbiAqIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKiBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvLlxuICpcbiAqL1xuXG5pbXBvcnQge0FqZlBhZ2VTbGlkZXIgYXMgQWpmQ29yZVBhZ2VTbGlkZXJ9IGZyb20gJ0BhamYvY29yZS9wYWdlLXNsaWRlcic7XG5pbXBvcnQge0FuaW1hdGlvbkJ1aWxkZXJ9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtCb29sZWFuSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge0FmdGVyQ29udGVudEluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHttZXJnZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZmlsdGVyLCBtYXAsIHN0YXJ0V2l0aCwgc3dpdGNoTWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FqZi1wYWdlLXNsaWRlcicsXG4gIHRlbXBsYXRlVXJsOiAncGFnZS1zbGlkZXIuaHRtbCcsXG4gIHN0eWxlVXJsczogWydwYWdlLXNsaWRlci5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEFqZlBhZ2VTbGlkZXIgZXh0ZW5kcyBBamZDb3JlUGFnZVNsaWRlciBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3Njcm9sbFN1YiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBhbmltYXRpb25CdWlsZGVyOiBBbmltYXRpb25CdWlsZGVyLFxuICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgKSB7XG4gICAgc3VwZXIoYW5pbWF0aW9uQnVpbGRlciwgY2RyLCByZW5kZXJlcik7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgc3VwZXIubmdBZnRlckNvbnRlbnRJbml0KCk7XG4gICAgdGhpcy5fc2Nyb2xsU3ViID0gdGhpcy5wYWdlcy5jaGFuZ2VzLnBpcGUoXG4gICAgICBtYXAoKCkgPT4gdGhpcy5wYWdlcy50b0FycmF5KCkpLFxuICAgICAgc3RhcnRXaXRoKHRoaXMucGFnZXMudG9BcnJheSgpKSxcbiAgICAgIGZpbHRlcihwYWdlcyA9PiBwYWdlcy5sZW5ndGggPiAwKSxcbiAgICAgIHN3aXRjaE1hcChwYWdlcyA9PiBtZXJnZSguLi5wYWdlcy5tYXAocGFnZSA9PiBwYWdlLnNjcm9sbCkpKSxcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl9maXhSaXBwbGVGcm9tUmFkaW9CdXR0b24oKTtcbiAgICAgIHRoaXMuX2ZpeFRvZ2dsZUJ1dHRvbnMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gICAgdGhpcy5fc2Nyb2xsU3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIF9maXhSaXBwbGVGcm9tUmFkaW9CdXR0b24oKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGNvbnN0IHJhZGlvR3JvdXBzID0gZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lvbi1yYWRpby1ncm91cCcpO1xuICAgICAgY29uc3QgcmFkaW9Hcm91cCA9IHJhZGlvR3JvdXBzWzBdO1xuICAgICAgY29uc3QgaXRlbXMgPSByYWRpb0dyb3VwLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpb24taXRlbScpO1xuICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zWzBdO1xuICAgICAgY29uc3QgcmlwcGxlcyA9IGl0ZW0uc2hhZG93Um9vdCEuZmlyc3RFbGVtZW50Q2hpbGQhXG4gICAgICAgIC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW9uLXJpcHBsZS1lZmZlY3QnKTtcbiAgICAgIGNvbnN0IHJpcHBsZSA9IHJpcHBsZXMuaXRlbSgwKSBhcyBIVE1MSW9uUmlwcGxlRWZmZWN0RWxlbWVudDtcbiAgICAgIGNvbnN0IG9yaWcgPSByaXBwbGUuc3R5bGUub3BhY2l0eTtcbiAgICAgIHJpcHBsZS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgcmlwcGxlLmFkZFJpcHBsZSgwLCAwKS50aGVuKHJlbW92ZSA9PiB7XG4gICAgICAgIHJlbW92ZSgpO1xuICAgICAgICByaXBwbGUuc3R5bGUub3BhY2l0eSA9IG9yaWc7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7IH1cbiAgfVxuXG4gIHByaXZhdGUgX2ZpeFRvZ2dsZUJ1dHRvbnMoKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGNvbnN0IHRvZ2dsZUJ1dHRvbnMgPSBlbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW9uLXRvZ2dsZScpO1xuICAgICAgY29uc3QgdG9nZ2xlQnV0dG9uc051bSA9IHRvZ2dsZUJ1dHRvbnMubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2dnbGVCdXR0b25zTnVtOyBpKyspIHtcbiAgICAgICAgY29uc3QgdG9nZ2xlQnV0dG9uID0gdG9nZ2xlQnV0dG9ucy5pdGVtKGkpIGFzIEhUTUxJb25Ub2dnbGVFbGVtZW50O1xuICAgICAgICBjb25zdCBpbm5lcnMgPSB0b2dnbGVCdXR0b24uc2hhZG93Um9vdCEuZmlyc3RFbGVtZW50Q2hpbGQhXG4gICAgICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZ2dsZS1pbm5lcicpO1xuICAgICAgICBjb25zdCBpbm5lciA9IGlubmVyc1swXSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgaW5uZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsICd3aWxsLWNoYW5nZTogYXV0bycpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgaW5uZXIucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxuICAgICAgICB9LCAwKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7IH1cbiAgfVxuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9maXhlZE9yaWVudGF0aW9uOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oaWRlTmF2aWdhdGlvbkJ1dHRvbnM6IEJvb2xlYW5JbnB1dDtcbn1cbiJdfQ==