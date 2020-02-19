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
import { __extends, __read, __spread } from "tslib";
import { AjfPageSlider as AjfCorePageSlider } from '@ajf/core/page-slider';
import { AnimationBuilder } from '@angular/animations';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';
import { merge, Subscription } from 'rxjs';
import { filter, map, startWith, switchMap } from 'rxjs/operators';
var AjfPageSlider = /** @class */ (function (_super) {
    __extends(AjfPageSlider, _super);
    function AjfPageSlider(animationBuilder, cdr, renderer, _el) {
        var _this = _super.call(this, animationBuilder, cdr, renderer) || this;
        _this._el = _el;
        _this._scrollSub = Subscription.EMPTY;
        return _this;
    }
    AjfPageSlider.prototype.ngAfterContentInit = function () {
        var _this = this;
        _super.prototype.ngAfterContentInit.call(this);
        this._scrollSub = this.pages.changes.pipe(map(function () { return _this.pages.toArray(); }), startWith(this.pages.toArray()), filter(function (pages) { return pages.length > 0; }), switchMap(function (pages) { return merge.apply(void 0, __spread(pages.map(function (page) { return page.scroll; }))); })).subscribe(function () {
            _this._fixRippleFromRadioButton();
            _this._fixToggleButtons();
        });
    };
    AjfPageSlider.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        this._scrollSub.unsubscribe();
    };
    AjfPageSlider.prototype._fixRippleFromRadioButton = function () {
        try {
            var el = this._el.nativeElement;
            var radioGroups = el.getElementsByTagName('ion-radio-group');
            var radioGroup = radioGroups[0];
            var items = radioGroup.getElementsByTagName('ion-item');
            var item = items[0];
            var ripples = item.shadowRoot.firstElementChild
                .getElementsByTagName('ion-ripple-effect');
            var ripple_1 = ripples.item(0);
            var orig_1 = ripple_1.style.opacity;
            ripple_1.style.opacity = '0';
            ripple_1.addRipple(0, 0).then(function (remove) {
                remove();
                ripple_1.style.opacity = orig_1;
            });
        }
        catch (e) { }
    };
    AjfPageSlider.prototype._fixToggleButtons = function () {
        try {
            var el = this._el.nativeElement;
            var toggleButtons = el.getElementsByTagName('ion-toggle');
            var toggleButtonsNum = toggleButtons.length;
            var _loop_1 = function (i) {
                var toggleButton = toggleButtons.item(i);
                var inners = toggleButton.shadowRoot.firstElementChild
                    .getElementsByClassName('toggle-inner');
                var inner = inners[0];
                inner.setAttribute('style', 'will-change: auto');
                setTimeout(function () {
                    try {
                        inner.removeAttribute('style');
                    }
                    catch (e) { }
                }, 0);
            };
            for (var i = 0; i < toggleButtonsNum; i++) {
                _loop_1(i);
            }
        }
        catch (e) { }
    };
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
    AjfPageSlider.ctorParameters = function () { return [
        { type: AnimationBuilder },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    return AjfPageSlider;
}(AjfCorePageSlider));
export { AjfPageSlider };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zbGlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvaW9uaWMvcGFnZS1zbGlkZXIvcGFnZS1zbGlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHOztBQUVILE9BQU8sRUFBQyxhQUFhLElBQUksaUJBQWlCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUVyRCxPQUFPLEVBQW1CLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFDN0UsVUFBVSxFQUFhLFNBQVMsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQUMsS0FBSyxFQUFFLFlBQVksRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUN6QyxPQUFPLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFakU7SUFPbUMsaUNBQWlCO0lBR2xELHVCQUNFLGdCQUFrQyxFQUNsQyxHQUFzQixFQUN0QixRQUFtQixFQUNYLEdBQWU7UUFKekIsWUFNRSxrQkFBTSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLFNBQ3ZDO1FBSFMsU0FBRyxHQUFILEdBQUcsQ0FBWTtRQU5qQixnQkFBVSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7O0lBU3hDLENBQUM7SUFFRCwwQ0FBa0IsR0FBbEI7UUFBQSxpQkFXQztRQVZDLGlCQUFNLGtCQUFrQixXQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ3ZDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBcEIsQ0FBb0IsQ0FB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QUMsRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFO3dCQUFoQyxDQUFDO2FBV1Q7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUc7SUFDakIsQ0FBQzs7Z0JBMUVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQix5ekNBQStCO29CQUUvQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7OztnQkFiTyxnQkFBZ0I7Z0JBRTJCLGlCQUFpQjtnQkFDM0MsU0FBUztnQkFBaEMsVUFBVTs7SUFrRlosb0JBQUM7Q0FBQSxBQTlFRCxDQU9tQyxpQkFBaUIsR0F1RW5EO1NBdkVZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggR251Y29vcCBzb2MuIGNvb3AuXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhc1xuICogcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsXG4gKiBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVyb1xuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpLlxuICogSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLy5cbiAqXG4gKi9cblxuaW1wb3J0IHtBamZQYWdlU2xpZGVyIGFzIEFqZkNvcmVQYWdlU2xpZGVyfSBmcm9tICdAYWpmL2NvcmUvcGFnZS1zbGlkZXInO1xuaW1wb3J0IHtBbmltYXRpb25CdWlsZGVyfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7Qm9vbGVhbklucHV0fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtBZnRlckNvbnRlbnRJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZiwgT25EZXN0cm95LCBSZW5kZXJlcjIsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7bWVyZ2UsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2ZpbHRlciwgbWFwLCBzdGFydFdpdGgsIHN3aXRjaE1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhamYtcGFnZS1zbGlkZXInLFxuICB0ZW1wbGF0ZVVybDogJ3BhZ2Utc2xpZGVyLmh0bWwnLFxuICBzdHlsZVVybHM6IFsncGFnZS1zbGlkZXIuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBBamZQYWdlU2xpZGVyIGV4dGVuZHMgQWpmQ29yZVBhZ2VTbGlkZXIgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9zY3JvbGxTdWIgPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgYW5pbWF0aW9uQnVpbGRlcjogQW5pbWF0aW9uQnVpbGRlcixcbiAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICkge1xuICAgIHN1cGVyKGFuaW1hdGlvbkJ1aWxkZXIsIGNkciwgcmVuZGVyZXIpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHN1cGVyLm5nQWZ0ZXJDb250ZW50SW5pdCgpO1xuICAgIHRoaXMuX3Njcm9sbFN1YiA9IHRoaXMucGFnZXMuY2hhbmdlcy5waXBlKFxuICAgICAgbWFwKCgpID0+IHRoaXMucGFnZXMudG9BcnJheSgpKSxcbiAgICAgIHN0YXJ0V2l0aCh0aGlzLnBhZ2VzLnRvQXJyYXkoKSksXG4gICAgICBmaWx0ZXIocGFnZXMgPT4gcGFnZXMubGVuZ3RoID4gMCksXG4gICAgICBzd2l0Y2hNYXAocGFnZXMgPT4gbWVyZ2UoLi4ucGFnZXMubWFwKHBhZ2UgPT4gcGFnZS5zY3JvbGwpKSksXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fZml4UmlwcGxlRnJvbVJhZGlvQnV0dG9uKCk7XG4gICAgICB0aGlzLl9maXhUb2dnbGVCdXR0b25zKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICAgIHRoaXMuX3Njcm9sbFN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZml4UmlwcGxlRnJvbVJhZGlvQnV0dG9uKCk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBjb25zdCByYWRpb0dyb3VwcyA9IGVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpb24tcmFkaW8tZ3JvdXAnKTtcbiAgICAgIGNvbnN0IHJhZGlvR3JvdXAgPSByYWRpb0dyb3Vwc1swXTtcbiAgICAgIGNvbnN0IGl0ZW1zID0gcmFkaW9Hcm91cC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW9uLWl0ZW0nKTtcbiAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1swXTtcbiAgICAgIGNvbnN0IHJpcHBsZXMgPSBpdGVtLnNoYWRvd1Jvb3QhLmZpcnN0RWxlbWVudENoaWxkIVxuICAgICAgICAuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lvbi1yaXBwbGUtZWZmZWN0Jyk7XG4gICAgICBjb25zdCByaXBwbGUgPSByaXBwbGVzLml0ZW0oMCkgYXMgSFRNTElvblJpcHBsZUVmZmVjdEVsZW1lbnQ7XG4gICAgICBjb25zdCBvcmlnID0gcmlwcGxlLnN0eWxlLm9wYWNpdHk7XG4gICAgICByaXBwbGUuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgIHJpcHBsZS5hZGRSaXBwbGUoMCwgMCkudGhlbihyZW1vdmUgPT4ge1xuICAgICAgICByZW1vdmUoKTtcbiAgICAgICAgcmlwcGxlLnN0eWxlLm9wYWNpdHkgPSBvcmlnO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkgeyB9XG4gIH1cblxuICBwcml2YXRlIF9maXhUb2dnbGVCdXR0b25zKCk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBjb25zdCB0b2dnbGVCdXR0b25zID0gZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lvbi10b2dnbGUnKTtcbiAgICAgIGNvbnN0IHRvZ2dsZUJ1dHRvbnNOdW0gPSB0b2dnbGVCdXR0b25zLmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9nZ2xlQnV0dG9uc051bTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRvZ2dsZUJ1dHRvbiA9IHRvZ2dsZUJ1dHRvbnMuaXRlbShpKSBhcyBIVE1MSW9uVG9nZ2xlRWxlbWVudDtcbiAgICAgICAgY29uc3QgaW5uZXJzID0gdG9nZ2xlQnV0dG9uLnNoYWRvd1Jvb3QhLmZpcnN0RWxlbWVudENoaWxkIVxuICAgICAgICAgIC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0b2dnbGUtaW5uZXInKTtcbiAgICAgICAgY29uc3QgaW5uZXIgPSBpbm5lcnNbMF0gYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgIGlubmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnd2lsbC1jaGFuZ2U6IGF1dG8nKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlubmVyLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7IH1cbiAgICAgICAgfSwgMCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkgeyB9XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZml4ZWRPcmllbnRhdGlvbjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaGlkZU5hdmlnYXRpb25CdXR0b25zOiBCb29sZWFuSW5wdXQ7XG59XG4iXX0=