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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewEncapsulation, } from '@angular/core';
import { merge, Subscription } from 'rxjs';
import { filter, map, startWith, switchMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/animations";
import * as i2 from "@ionic/angular";
import * as i3 from "@angular/common";
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
        catch (e) { }
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
                    catch (e) { }
                }, 0);
            }
        }
        catch (e) { }
    }
}
AjfPageSlider.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: AjfPageSlider, deps: [{ token: i1.AnimationBuilder }, { token: i0.ChangeDetectorRef }, { token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
AjfPageSlider.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-rc.3", type: AjfPageSlider, selector: "ajf-page-slider", usesInheritance: true, ngImport: i0, template: "<div #content class=\"ajf-page-slider-content\">\n  <div #body [ngClass]=\"'ajf-page-slider-' + orientation\"\n      (touchstart)=\"onTouchStart($event)\"\n      (touchmove)=\"onTouchMove($event)\"\n      (touchend)=\"onTouchEnd()\"\n      (mousewheel)=\"onMouseWheel($event)\" class=\"ajf-page-slider-body\">\n    <ng-content></ng-content>\n  </div>\n</div>\n<ion-toolbar *ngIf=\"!hideNavigationButtons\" class=\"ajf-toolbar\">\n  <ng-content select=\"[ajfPageSliderBar]\"></ng-content>\n  <ion-buttons slot=\"end\">\n    <ion-button *ngIf=\"!fixedOrientation\" (click)=\"switchOrientation()\">\n      <ion-icon [class.ajf-icon-rotated]=\"orientation == 'horizontal'\"\n          name=\"swap-horizontal\"></ion-icon>\n    </ion-button>\n    <ion-button (click)=\"slide({dir: 'up'})\" fill=\"solid\" color=\"secondary\">\n      <ion-icon *ngIf=\"orientation == 'horizontal'\" name=\"arrow-back\"></ion-icon>\n      <ion-icon *ngIf=\"orientation == 'vertical'\" name=\"arrow-up\"></ion-icon>\n    </ion-button>\n    <ion-button (click)=\"slide({dir: 'down'})\" fill=\"solid\" color=\"secondary\">\n      <ion-icon *ngIf=\"orientation == 'horizontal'\" name=\"arrow-forward\"></ion-icon>\n      <ion-icon *ngIf=\"orientation == 'vertical'\" name=\"arrow-down\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n", styles: ["ajf-page-slider{display:flex;flex-direction:column;align-items:stretch}ajf-page-slider ion-icon.ajf-icon-rotated{transform:rotate(90deg)}ajf-page-slider>.ajf-page-slider-content{flex:1;display:block;overflow:hidden;height:100%}ajf-page-slider>.ajf-page-slider-content>.ajf-page-slider-body{display:flex;align-items:stretch}ajf-page-slider>.ajf-page-slider-content>.ajf-page-slider-body.ajf-page-slider-vertical{flex-direction:column;width:100%}ajf-page-slider>.ajf-page-slider-content>.ajf-page-slider-body.ajf-page-slider-horizontal{flex-direction:row;height:100%}ajf-page-slider>.ajf-page-slider-content>.ajf-page-slider-body>ajf-page-slider-item{flex:1 0 auto}\n"], components: [{ type: i2.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i2.IonButtons, selector: "ion-buttons", inputs: ["collapse"] }, { type: i2.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { type: i2.IonIcon, selector: "ion-icon", inputs: ["ariaHidden", "ariaLabel", "color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] }], directives: [{ type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: AjfPageSlider, decorators: [{
            type: Component,
            args: [{ selector: 'ajf-page-slider', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div #content class=\"ajf-page-slider-content\">\n  <div #body [ngClass]=\"'ajf-page-slider-' + orientation\"\n      (touchstart)=\"onTouchStart($event)\"\n      (touchmove)=\"onTouchMove($event)\"\n      (touchend)=\"onTouchEnd()\"\n      (mousewheel)=\"onMouseWheel($event)\" class=\"ajf-page-slider-body\">\n    <ng-content></ng-content>\n  </div>\n</div>\n<ion-toolbar *ngIf=\"!hideNavigationButtons\" class=\"ajf-toolbar\">\n  <ng-content select=\"[ajfPageSliderBar]\"></ng-content>\n  <ion-buttons slot=\"end\">\n    <ion-button *ngIf=\"!fixedOrientation\" (click)=\"switchOrientation()\">\n      <ion-icon [class.ajf-icon-rotated]=\"orientation == 'horizontal'\"\n          name=\"swap-horizontal\"></ion-icon>\n    </ion-button>\n    <ion-button (click)=\"slide({dir: 'up'})\" fill=\"solid\" color=\"secondary\">\n      <ion-icon *ngIf=\"orientation == 'horizontal'\" name=\"arrow-back\"></ion-icon>\n      <ion-icon *ngIf=\"orientation == 'vertical'\" name=\"arrow-up\"></ion-icon>\n    </ion-button>\n    <ion-button (click)=\"slide({dir: 'down'})\" fill=\"solid\" color=\"secondary\">\n      <ion-icon *ngIf=\"orientation == 'horizontal'\" name=\"arrow-forward\"></ion-icon>\n      <ion-icon *ngIf=\"orientation == 'vertical'\" name=\"arrow-down\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n", styles: ["ajf-page-slider{display:flex;flex-direction:column;align-items:stretch}ajf-page-slider ion-icon.ajf-icon-rotated{transform:rotate(90deg)}ajf-page-slider>.ajf-page-slider-content{flex:1;display:block;overflow:hidden;height:100%}ajf-page-slider>.ajf-page-slider-content>.ajf-page-slider-body{display:flex;align-items:stretch}ajf-page-slider>.ajf-page-slider-content>.ajf-page-slider-body.ajf-page-slider-vertical{flex-direction:column;width:100%}ajf-page-slider>.ajf-page-slider-content>.ajf-page-slider-body.ajf-page-slider-horizontal{flex-direction:row;height:100%}ajf-page-slider>.ajf-page-slider-content>.ajf-page-slider-body>ajf-page-slider-item{flex:1 0 auto}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.AnimationBuilder }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zbGlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvaW9uaWMvcGFnZS1zbGlkZXIvcGFnZS1zbGlkZXIudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvaW9uaWMvcGFnZS1zbGlkZXIvcGFnZS1zbGlkZXIuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFFSCxPQUFPLEVBQUMsYUFBYSxJQUFJLGlCQUFpQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDekUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFFckQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFFVixTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFTakUsTUFBTSxPQUFPLGFBQWMsU0FBUSxpQkFBaUI7SUFHbEQsWUFDRSxnQkFBa0MsRUFDbEMsR0FBc0IsRUFDdEIsUUFBbUIsRUFDWCxHQUFlO1FBRXZCLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFGL0IsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQU5qQixlQUFVLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztJQVN4QyxDQUFDO0lBRVEsa0JBQWtCO1FBQ3pCLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPO2FBQ2pDLElBQUksQ0FDSCxHQUFHLENBQUMsR0FBRyxF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aEM7b0JBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRTtnQkFDaEIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ1A7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUU7SUFDaEIsQ0FBQzs7K0dBcEVVLGFBQWE7bUdBQWIsYUFBYSw4RUM3QzFCLCt5Q0EwQkE7Z0dEbUJhLGFBQWE7a0JBUHpCLFNBQVM7K0JBQ0UsaUJBQWlCLGlCQUdaLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKEMpIEdudWNvb3Agc29jLiBjb29wLlxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpLlxuICpcbiAqIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLFxuICogb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm9cbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8uXG4gKlxuICovXG5cbmltcG9ydCB7QWpmUGFnZVNsaWRlciBhcyBBamZDb3JlUGFnZVNsaWRlcn0gZnJvbSAnQGFqZi9jb3JlL3BhZ2Utc2xpZGVyJztcbmltcG9ydCB7QW5pbWF0aW9uQnVpbGRlcn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge0Jvb2xlYW5JbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBPbkRlc3Ryb3ksXG4gIFJlbmRlcmVyMixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHttZXJnZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZmlsdGVyLCBtYXAsIHN0YXJ0V2l0aCwgc3dpdGNoTWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FqZi1wYWdlLXNsaWRlcicsXG4gIHRlbXBsYXRlVXJsOiAncGFnZS1zbGlkZXIuaHRtbCcsXG4gIHN0eWxlVXJsczogWydwYWdlLXNsaWRlci5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEFqZlBhZ2VTbGlkZXIgZXh0ZW5kcyBBamZDb3JlUGFnZVNsaWRlciBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3Njcm9sbFN1YiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBhbmltYXRpb25CdWlsZGVyOiBBbmltYXRpb25CdWlsZGVyLFxuICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgKSB7XG4gICAgc3VwZXIoYW5pbWF0aW9uQnVpbGRlciwgY2RyLCByZW5kZXJlcik7XG4gIH1cblxuICBvdmVycmlkZSBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgc3VwZXIubmdBZnRlckNvbnRlbnRJbml0KCk7XG4gICAgdGhpcy5fc2Nyb2xsU3ViID0gdGhpcy5wYWdlcy5jaGFuZ2VzXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKCgpID0+IHRoaXMucGFnZXMudG9BcnJheSgpKSxcbiAgICAgICAgc3RhcnRXaXRoKHRoaXMucGFnZXMudG9BcnJheSgpKSxcbiAgICAgICAgZmlsdGVyKHBhZ2VzID0+IHBhZ2VzLmxlbmd0aCA+IDApLFxuICAgICAgICBzd2l0Y2hNYXAocGFnZXMgPT4gbWVyZ2UoLi4ucGFnZXMubWFwKHBhZ2UgPT4gcGFnZS5zY3JvbGwpKSksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5fZml4UmlwcGxlRnJvbVJhZGlvQnV0dG9uKCk7XG4gICAgICAgIHRoaXMuX2ZpeFRvZ2dsZUJ1dHRvbnMoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgb3ZlcnJpZGUgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcbiAgICB0aGlzLl9zY3JvbGxTdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpeFJpcHBsZUZyb21SYWRpb0J1dHRvbigpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgY29uc3QgcmFkaW9Hcm91cHMgPSBlbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW9uLXJhZGlvLWdyb3VwJyk7XG4gICAgICBjb25zdCByYWRpb0dyb3VwID0gcmFkaW9Hcm91cHNbMF07XG4gICAgICBjb25zdCBpdGVtcyA9IHJhZGlvR3JvdXAuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lvbi1pdGVtJyk7XG4gICAgICBjb25zdCBpdGVtID0gaXRlbXNbMF07XG4gICAgICBjb25zdCByaXBwbGVzID0gaXRlbS5zaGFkb3dSb290IS5maXJzdEVsZW1lbnRDaGlsZCEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lvbi1yaXBwbGUtZWZmZWN0Jyk7XG4gICAgICBjb25zdCByaXBwbGUgPSByaXBwbGVzLml0ZW0oMCkgYXMgSFRNTElvblJpcHBsZUVmZmVjdEVsZW1lbnQ7XG4gICAgICBjb25zdCBvcmlnID0gcmlwcGxlLnN0eWxlLm9wYWNpdHk7XG4gICAgICByaXBwbGUuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgIHJpcHBsZS5hZGRSaXBwbGUoMCwgMCkudGhlbihyZW1vdmUgPT4ge1xuICAgICAgICByZW1vdmUoKTtcbiAgICAgICAgcmlwcGxlLnN0eWxlLm9wYWNpdHkgPSBvcmlnO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuXG4gIHByaXZhdGUgX2ZpeFRvZ2dsZUJ1dHRvbnMoKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGNvbnN0IHRvZ2dsZUJ1dHRvbnMgPSBlbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW9uLXRvZ2dsZScpO1xuICAgICAgY29uc3QgdG9nZ2xlQnV0dG9uc051bSA9IHRvZ2dsZUJ1dHRvbnMubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2dnbGVCdXR0b25zTnVtOyBpKyspIHtcbiAgICAgICAgY29uc3QgdG9nZ2xlQnV0dG9uID0gdG9nZ2xlQnV0dG9ucy5pdGVtKGkpIGFzIEhUTUxJb25Ub2dnbGVFbGVtZW50O1xuICAgICAgICBjb25zdCBpbm5lcnMgPVxuICAgICAgICAgIHRvZ2dsZUJ1dHRvbi5zaGFkb3dSb290IS5maXJzdEVsZW1lbnRDaGlsZCEuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG9nZ2xlLWlubmVyJyk7XG4gICAgICAgIGNvbnN0IGlubmVyID0gaW5uZXJzWzBdIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgICAgICBpbm5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3dpbGwtY2hhbmdlOiBhdXRvJyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpbm5lci5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgfSwgMCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9maXhlZE9yaWVudGF0aW9uOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oaWRlTmF2aWdhdGlvbkJ1dHRvbnM6IEJvb2xlYW5JbnB1dDtcbn1cbiIsIjxkaXYgI2NvbnRlbnQgY2xhc3M9XCJhamYtcGFnZS1zbGlkZXItY29udGVudFwiPlxuICA8ZGl2ICNib2R5IFtuZ0NsYXNzXT1cIidhamYtcGFnZS1zbGlkZXItJyArIG9yaWVudGF0aW9uXCJcbiAgICAgICh0b3VjaHN0YXJ0KT1cIm9uVG91Y2hTdGFydCgkZXZlbnQpXCJcbiAgICAgICh0b3VjaG1vdmUpPVwib25Ub3VjaE1vdmUoJGV2ZW50KVwiXG4gICAgICAodG91Y2hlbmQpPVwib25Ub3VjaEVuZCgpXCJcbiAgICAgIChtb3VzZXdoZWVsKT1cIm9uTW91c2VXaGVlbCgkZXZlbnQpXCIgY2xhc3M9XCJhamYtcGFnZS1zbGlkZXItYm9keVwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG48L2Rpdj5cbjxpb24tdG9vbGJhciAqbmdJZj1cIiFoaWRlTmF2aWdhdGlvbkJ1dHRvbnNcIiBjbGFzcz1cImFqZi10b29sYmFyXCI+XG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIlthamZQYWdlU2xpZGVyQmFyXVwiPjwvbmctY29udGVudD5cbiAgPGlvbi1idXR0b25zIHNsb3Q9XCJlbmRcIj5cbiAgICA8aW9uLWJ1dHRvbiAqbmdJZj1cIiFmaXhlZE9yaWVudGF0aW9uXCIgKGNsaWNrKT1cInN3aXRjaE9yaWVudGF0aW9uKClcIj5cbiAgICAgIDxpb24taWNvbiBbY2xhc3MuYWpmLWljb24tcm90YXRlZF09XCJvcmllbnRhdGlvbiA9PSAnaG9yaXpvbnRhbCdcIlxuICAgICAgICAgIG5hbWU9XCJzd2FwLWhvcml6b250YWxcIj48L2lvbi1pY29uPlxuICAgIDwvaW9uLWJ1dHRvbj5cbiAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwic2xpZGUoe2RpcjogJ3VwJ30pXCIgZmlsbD1cInNvbGlkXCIgY29sb3I9XCJzZWNvbmRhcnlcIj5cbiAgICAgIDxpb24taWNvbiAqbmdJZj1cIm9yaWVudGF0aW9uID09ICdob3Jpem9udGFsJ1wiIG5hbWU9XCJhcnJvdy1iYWNrXCI+PC9pb24taWNvbj5cbiAgICAgIDxpb24taWNvbiAqbmdJZj1cIm9yaWVudGF0aW9uID09ICd2ZXJ0aWNhbCdcIiBuYW1lPVwiYXJyb3ctdXBcIj48L2lvbi1pY29uPlxuICAgIDwvaW9uLWJ1dHRvbj5cbiAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwic2xpZGUoe2RpcjogJ2Rvd24nfSlcIiBmaWxsPVwic29saWRcIiBjb2xvcj1cInNlY29uZGFyeVwiPlxuICAgICAgPGlvbi1pY29uICpuZ0lmPVwib3JpZW50YXRpb24gPT0gJ2hvcml6b250YWwnXCIgbmFtZT1cImFycm93LWZvcndhcmRcIj48L2lvbi1pY29uPlxuICAgICAgPGlvbi1pY29uICpuZ0lmPVwib3JpZW50YXRpb24gPT0gJ3ZlcnRpY2FsJ1wiIG5hbWU9XCJhcnJvdy1kb3duXCI+PC9pb24taWNvbj5cbiAgICA8L2lvbi1idXR0b24+XG4gIDwvaW9uLWJ1dHRvbnM+XG48L2lvbi10b29sYmFyPlxuIl19