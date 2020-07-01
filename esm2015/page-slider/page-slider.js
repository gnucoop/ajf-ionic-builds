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
    constructor(animationBuilder, cdr, renderer, _el) {
        super(animationBuilder, cdr, renderer);
        this._el = _el;
        this._scrollSub = Subscription.EMPTY;
    }
    ngAfterContentInit() {
        super.ngAfterContentInit();
        this._scrollSub = this.pages.changes
            .pipe(map(() => this.pages.toArray()), startWith(this.pages.toArray()), filter(pages => pages.length > 0), switchMap(pages => merge(...pages.map(page => page.scroll))))
            .subscribe(() => {
            this._fixRippleFromRadioButton();
            this._fixToggleButtons();
        });
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this._scrollSub.unsubscribe();
    }
    _fixRippleFromRadioButton() {
        try {
            const el = this._el.nativeElement;
            const radioGroups = el.getElementsByTagName('ion-radio-group');
            const radioGroup = radioGroups[0];
            const items = radioGroup.getElementsByTagName('ion-item');
            const item = items[0];
            const ripples = item.shadowRoot.firstElementChild.getElementsByTagName('ion-ripple-effect');
            const ripple = ripples.item(0);
            const orig = ripple.style.opacity;
            ripple.style.opacity = '0';
            ripple.addRipple(0, 0).then(remove => {
                remove();
                ripple.style.opacity = orig;
            });
        }
        catch (e) {
        }
    }
    _fixToggleButtons() {
        try {
            const el = this._el.nativeElement;
            const toggleButtons = el.getElementsByTagName('ion-toggle');
            const toggleButtonsNum = toggleButtons.length;
            for (let i = 0; i < toggleButtonsNum; i++) {
                const toggleButton = toggleButtons.item(i);
                const inners = toggleButton.shadowRoot.firstElementChild.getElementsByClassName('toggle-inner');
                const inner = inners[0];
                inner.setAttribute('style', 'will-change: auto');
                setTimeout(() => {
                    try {
                        inner.removeAttribute('style');
                    }
                    catch (e) {
                    }
                }, 0);
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
            },] }
];
AjfPageSlider.ctorParameters = () => [
    { type: AnimationBuilder },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: ElementRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zbGlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvaW9uaWMvcGFnZS1zbGlkZXIvcGFnZS1zbGlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHO0FBRUgsT0FBTyxFQUFDLGFBQWEsSUFBSSxpQkFBaUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3pFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBRXJELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBRVYsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsS0FBSyxFQUFFLFlBQVksRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUN6QyxPQUFPLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFTakUsTUFBTSxPQUFPLGFBQWMsU0FBUSxpQkFBaUI7SUFHbEQsWUFDSSxnQkFBa0MsRUFDbEMsR0FBc0IsRUFDdEIsUUFBbUIsRUFDWCxHQUFlO1FBRXpCLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFGN0IsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQU5uQixlQUFVLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztJQVN4QyxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPO2FBQ2IsSUFBSSxDQUNELEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQy9CLFNBQVMsQ0FBQyxJQUFJ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O1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtTQUNYO0lBQ0gsQ0FBQzs7O1lBOUVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQix5ekNBQStCO2dCQUUvQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7WUFyQk8sZ0JBQWdCO1lBS3RCLGlCQUFpQjtZQUlqQixTQUFTO1lBRlQsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoQykgR251Y29vcCBzb2MuIGNvb3AuXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhc1xuICogcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsXG4gKiBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVyb1xuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpLlxuICogSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLy5cbiAqXG4gKi9cblxuaW1wb3J0IHtBamZQYWdlU2xpZGVyIGFzIEFqZkNvcmVQYWdlU2xpZGVyfSBmcm9tICdAYWpmL2NvcmUvcGFnZS1zbGlkZXInO1xuaW1wb3J0IHtBbmltYXRpb25CdWlsZGVyfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7Qm9vbGVhbklucHV0fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uRGVzdHJveSxcbiAgUmVuZGVyZXIyLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7bWVyZ2UsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2ZpbHRlciwgbWFwLCBzdGFydFdpdGgsIHN3aXRjaE1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhamYtcGFnZS1zbGlkZXInLFxuICB0ZW1wbGF0ZVVybDogJ3BhZ2Utc2xpZGVyLmh0bWwnLFxuICBzdHlsZVVybHM6IFsncGFnZS1zbGlkZXIuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBBamZQYWdlU2xpZGVyIGV4dGVuZHMgQWpmQ29yZVBhZ2VTbGlkZXIgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9zY3JvbGxTdWIgPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBhbmltYXRpb25CdWlsZGVyOiBBbmltYXRpb25CdWlsZGVyLFxuICAgICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgKSB7XG4gICAgc3VwZXIoYW5pbWF0aW9uQnVpbGRlciwgY2RyLCByZW5kZXJlcik7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgc3VwZXIubmdBZnRlckNvbnRlbnRJbml0KCk7XG4gICAgdGhpcy5fc2Nyb2xsU3ViID0gdGhpcy5wYWdlcy5jaGFuZ2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwKCgpID0+IHRoaXMucGFnZXMudG9BcnJheSgpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0V2l0aCh0aGlzLnBhZ2VzLnRvQXJyYXkoKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIocGFnZXMgPT4gcGFnZXMubGVuZ3RoID4gMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hNYXAocGFnZXMgPT4gbWVyZ2UoLi4ucGFnZXMubWFwKHBhZ2UgPT4gcGFnZS5zY3JvbGwpKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZpeFJpcHBsZUZyb21SYWRpb0J1dHRvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZpeFRvZ2dsZUJ1dHRvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICAgIHRoaXMuX3Njcm9sbFN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZml4UmlwcGxlRnJvbVJhZGlvQnV0dG9uKCk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBjb25zdCByYWRpb0dyb3VwcyA9IGVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpb24tcmFkaW8tZ3JvdXAnKTtcbiAgICAgIGNvbnN0IHJhZGlvR3JvdXAgPSByYWRpb0dyb3Vwc1swXTtcbiAgICAgIGNvbnN0IGl0ZW1zID0gcmFkaW9Hcm91cC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW9uLWl0ZW0nKTtcbiAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1swXTtcbiAgICAgIGNvbnN0IHJpcHBsZXMgPSBpdGVtLnNoYWRvd1Jvb3QhLmZpcnN0RWxlbWVudENoaWxkIS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW9uLXJpcHBsZS1lZmZlY3QnKTtcbiAgICAgIGNvbnN0IHJpcHBsZSA9IHJpcHBsZXMuaXRlbSgwKSBhcyBIVE1MSW9uUmlwcGxlRWZmZWN0RWxlbWVudDtcbiAgICAgIGNvbnN0IG9yaWcgPSByaXBwbGUuc3R5bGUub3BhY2l0eTtcbiAgICAgIHJpcHBsZS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgcmlwcGxlLmFkZFJpcHBsZSgwLCAwKS50aGVuKHJlbW92ZSA9PiB7XG4gICAgICAgIHJlbW92ZSgpO1xuICAgICAgICByaXBwbGUuc3R5bGUub3BhY2l0eSA9IG9yaWc7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZml4VG9nZ2xlQnV0dG9ucygpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgY29uc3QgdG9nZ2xlQnV0dG9ucyA9IGVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpb24tdG9nZ2xlJyk7XG4gICAgICBjb25zdCB0b2dnbGVCdXR0b25zTnVtID0gdG9nZ2xlQnV0dG9ucy5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZ2dsZUJ1dHRvbnNOdW07IGkrKykge1xuICAgICAgICBjb25zdCB0b2dnbGVCdXR0b24gPSB0b2dnbGVCdXR0b25zLml0ZW0oaSkgYXMgSFRNTElvblRvZ2dsZUVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGlubmVycyA9XG4gICAgICAgICAgICB0b2dnbGVCdXR0b24uc2hhZG93Um9vdCEuZmlyc3RFbGVtZW50Q2hpbGQhLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZ2dsZS1pbm5lcicpO1xuICAgICAgICBjb25zdCBpbm5lciA9IGlubmVyc1swXSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgaW5uZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsICd3aWxsLWNoYW5nZTogYXV0bycpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgaW5uZXIucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZml4ZWRPcmllbnRhdGlvbjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaGlkZU5hdmlnYXRpb25CdXR0b25zOiBCb29sZWFuSW5wdXQ7XG59XG4iXX0=