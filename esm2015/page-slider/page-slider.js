/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/page-slider/page-slider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zbGlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvaW9uaWMvcGFnZS1zbGlkZXIvcGFnZS1zbGlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkEsT0FBTyxFQUFDLGFBQWEsSUFBSSxpQkFBaUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3pFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBRXJELE9BQU8sRUFBbUIsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUM3RSxVQUFVLEVBQWEsU0FBUyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQVNqRSxNQUFNLE9BQU8sYUFBYyxTQUFRLGlCQUFpQjs7Ozs7OztJQUdsRCxZQUNFLGdCQUFrQyxFQUNsQyxHQUFzQixFQUN0QixRQUFtQixFQUNYLEdBQWU7UUFFdkIsS0FBSyxDQUFDLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUYvQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBTmpCLGVBQVUsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO0lBU3hDLENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ3ZDLEdBQUc7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUMsRUFDL0IsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFDL0IsTUFBTTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUMsRUFDakMsU0FBUzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUc7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLENBQzdELENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDM0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRU8seUJBQXlCO1FBQy9CLElBQUk7O2tCQUNJLEVBQUUsR0FBRyxtQkFBQSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBZTs7a0JBQzFDLFdBQVcsR0FBRyxFQUFFLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUM7O2tCQUN4RCxVQUFVLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQzs7a0JBQzNCLEtBQUssR0FBRyxVQUFVLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDOztrQkFDbkQsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7O2tCQUNmLE9BQU8sR0FBRyxtQkFBQSxtQkFBQSxJQUFJLENBQUMsVUFBVSxFQUFDLENBQUMsaUJBQWlCLEVBQUMsQ0FDaEQsb0JBQW9CLENBQUMsbUJBQW1CLENBQUM7O2tCQUN0QyxNQUFNLEdBQUcsbUJBQUEsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBOEI7O2tCQUN0RCxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPO1lBQ2pDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUMzQixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJOzs7O1lBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ25DLE1BQU0sRUFBRSxDQUFDO2dCQUNULE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUM5QixDQUFDLEVBQUMsQ0FBQztTQUNKO1FBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRztJQUNqQixDQUFDOzs7OztJQUVPLGlCQUFpQjtRQUN2QixJQUFJOztrQkFDSSxFQUFFLEdBQUcsbUJBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQWU7O2tCQUMxQyxhQUFhLEdBQUcsRUFBRSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQzs7a0JBQ3JELGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxNQUFNO1lBQzdDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsRUFBRTs7c0JBQ25DLFlBQVksR0FBRyxtQkFBQSxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUF3Qjs7c0JBQzVELE1BQU0sR0FBRyxtQkFBQSxtQkFBQSxZQUFZLENBQUMsVUFBVSxFQUFDLENBQUMsaUJBQWlCLEVBQUMsQ0FDdkQsc0JBQXNCLENBQUMsY0FBYyxDQUFDOztzQkFDbkMsS0FBSyxHQUFHLG1CQUFBLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBa0I7Z0JBQ3pDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLG1CQUFtQixDQUFDLENBQUM7Z0JBQ2pELFVBQVU7OztnQkFBQyxHQUFHLEVBQUU7b0JBQ2QsSUFBSTt3QkFDRixLQUFLLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUNoQztvQkFBQyxPQUFPLENBQUMsRUFBRSxHQUFHO2dCQUNqQixDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUM7YUFDUDtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRztJQUNqQixDQUFDOzs7WUExRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLHl6Q0FBK0I7Z0JBRS9CLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7WUFiTyxnQkFBZ0I7WUFFMkIsaUJBQWlCO1lBQzNDLFNBQVM7WUFBaEMsVUFBVTs7OztJQWdGVixpREFBd0Q7O0lBQ3hELHNEQUE2RDs7Ozs7SUFyRTdELG1DQUF3Qzs7Ozs7SUFNdEMsNEJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChDKSAyMDE4IEdudWNvb3Agc29jLiBjb29wLlxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpLlxuICpcbiAqIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLFxuICogb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm9cbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8uXG4gKlxuICovXG5cbmltcG9ydCB7QWpmUGFnZVNsaWRlciBhcyBBamZDb3JlUGFnZVNsaWRlcn0gZnJvbSAnQGFqZi9jb3JlL3BhZ2Utc2xpZGVyJztcbmltcG9ydCB7QW5pbWF0aW9uQnVpbGRlcn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge0Jvb2xlYW5JbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7QWZ0ZXJDb250ZW50SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgUmVuZGVyZXIyLCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge21lcmdlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtmaWx0ZXIsIG1hcCwgc3RhcnRXaXRoLCBzd2l0Y2hNYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWpmLXBhZ2Utc2xpZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICdwYWdlLXNsaWRlci5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3BhZ2Utc2xpZGVyLmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQWpmUGFnZVNsaWRlciBleHRlbmRzIEFqZkNvcmVQYWdlU2xpZGVyIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfc2Nyb2xsU3ViID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGFuaW1hdGlvbkJ1aWxkZXI6IEFuaW1hdGlvbkJ1aWxkZXIsXG4gICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICApIHtcbiAgICBzdXBlcihhbmltYXRpb25CdWlsZGVyLCBjZHIsIHJlbmRlcmVyKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBzdXBlci5uZ0FmdGVyQ29udGVudEluaXQoKTtcbiAgICB0aGlzLl9zY3JvbGxTdWIgPSB0aGlzLnBhZ2VzLmNoYW5nZXMucGlwZShcbiAgICAgIG1hcCgoKSA9PiB0aGlzLnBhZ2VzLnRvQXJyYXkoKSksXG4gICAgICBzdGFydFdpdGgodGhpcy5wYWdlcy50b0FycmF5KCkpLFxuICAgICAgZmlsdGVyKHBhZ2VzID0+IHBhZ2VzLmxlbmd0aCA+IDApLFxuICAgICAgc3dpdGNoTWFwKHBhZ2VzID0+IG1lcmdlKC4uLnBhZ2VzLm1hcChwYWdlID0+IHBhZ2Uuc2Nyb2xsKSkpLFxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX2ZpeFJpcHBsZUZyb21SYWRpb0J1dHRvbigpO1xuICAgICAgdGhpcy5fZml4VG9nZ2xlQnV0dG9ucygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcbiAgICB0aGlzLl9zY3JvbGxTdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpeFJpcHBsZUZyb21SYWRpb0J1dHRvbigpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgY29uc3QgcmFkaW9Hcm91cHMgPSBlbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW9uLXJhZGlvLWdyb3VwJyk7XG4gICAgICBjb25zdCByYWRpb0dyb3VwID0gcmFkaW9Hcm91cHNbMF07XG4gICAgICBjb25zdCBpdGVtcyA9IHJhZGlvR3JvdXAuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lvbi1pdGVtJyk7XG4gICAgICBjb25zdCBpdGVtID0gaXRlbXNbMF07XG4gICAgICBjb25zdCByaXBwbGVzID0gaXRlbS5zaGFkb3dSb290IS5maXJzdEVsZW1lbnRDaGlsZCFcbiAgICAgICAgLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpb24tcmlwcGxlLWVmZmVjdCcpO1xuICAgICAgY29uc3QgcmlwcGxlID0gcmlwcGxlcy5pdGVtKDApIGFzIEhUTUxJb25SaXBwbGVFZmZlY3RFbGVtZW50O1xuICAgICAgY29uc3Qgb3JpZyA9IHJpcHBsZS5zdHlsZS5vcGFjaXR5O1xuICAgICAgcmlwcGxlLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICByaXBwbGUuYWRkUmlwcGxlKDAsIDApLnRoZW4ocmVtb3ZlID0+IHtcbiAgICAgICAgcmVtb3ZlKCk7XG4gICAgICAgIHJpcHBsZS5zdHlsZS5vcGFjaXR5ID0gb3JpZztcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHsgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZml4VG9nZ2xlQnV0dG9ucygpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgY29uc3QgdG9nZ2xlQnV0dG9ucyA9IGVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpb24tdG9nZ2xlJyk7XG4gICAgICBjb25zdCB0b2dnbGVCdXR0b25zTnVtID0gdG9nZ2xlQnV0dG9ucy5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZ2dsZUJ1dHRvbnNOdW07IGkrKykge1xuICAgICAgICBjb25zdCB0b2dnbGVCdXR0b24gPSB0b2dnbGVCdXR0b25zLml0ZW0oaSkgYXMgSFRNTElvblRvZ2dsZUVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGlubmVycyA9IHRvZ2dsZUJ1dHRvbi5zaGFkb3dSb290IS5maXJzdEVsZW1lbnRDaGlsZCFcbiAgICAgICAgICAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG9nZ2xlLWlubmVyJyk7XG4gICAgICAgIGNvbnN0IGlubmVyID0gaW5uZXJzWzBdIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgICAgICBpbm5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3dpbGwtY2hhbmdlOiBhdXRvJyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpbm5lci5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkgeyB9XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHsgfVxuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2ZpeGVkT3JpZW50YXRpb246IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2hpZGVOYXZpZ2F0aW9uQnV0dG9uczogQm9vbGVhbklucHV0O1xufVxuIl19