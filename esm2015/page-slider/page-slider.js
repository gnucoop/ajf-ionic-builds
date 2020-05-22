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
import { __decorate, __metadata } from "tslib";
import { AjfPageSlider as AjfCorePageSlider } from '@ajf/core/page-slider';
import { AnimationBuilder } from '@angular/animations';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';
import { merge, Subscription } from 'rxjs';
import { filter, map, startWith, switchMap } from 'rxjs/operators';
let AjfPageSlider = /** @class */ (() => {
    let AjfPageSlider = class AjfPageSlider extends AjfCorePageSlider {
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
    };
    AjfPageSlider = __decorate([
        Component({
            selector: 'ajf-page-slider',
            template: "<div #content class=\"ajf-page-slider-content\">\n  <div #body [ngClass]=\"'ajf-page-slider-' + orientation\"\n      (touchstart)=\"onTouchStart($event)\"\n      (touchmove)=\"onTouchMove($event)\"\n      (touchend)=\"onTouchEnd()\"\n      (mousewheel)=\"onMouseWheel($event)\" class=\"ajf-page-slider-body\">\n    <ng-content></ng-content>\n  </div>\n</div>\n<ion-toolbar *ngIf=\"!hideNavigationButtons\" class=\"ajf-toolbar\">\n  <ng-content select=\"[ajfPageSliderBar]\"></ng-content>\n  <ion-buttons slot=\"end\">\n    <ion-button *ngIf=\"!fixedOrientation\" (click)=\"switchOrientation()\">\n      <ion-icon [class.ajf-icon-rotated]=\"orientation == 'horizontal'\"\n          name=\"swap-horizontal\"></ion-icon>\n    </ion-button>\n    <ion-button (click)=\"slide({dir: 'up'})\" fill=\"solid\" color=\"secondary\">\n      <ion-icon *ngIf=\"orientation == 'horizontal'\" name=\"arrow-back\"></ion-icon>\n      <ion-icon *ngIf=\"orientation == 'vertical'\" name=\"arrow-up\"></ion-icon>\n    </ion-button>\n    <ion-button (click)=\"slide({dir: 'down'})\" fill=\"solid\" color=\"secondary\">\n      <ion-icon *ngIf=\"orientation == 'horizontal'\" name=\"arrow-forward\"></ion-icon>\n      <ion-icon *ngIf=\"orientation == 'vertical'\" name=\"arrow-down\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n",
            encapsulation: ViewEncapsulation.None,
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: ["ajf-page-slider{display:flex;flex-direction:column;align-items:stretch}ajf-page-slider ion-icon.ajf-icon-rotated{transform:rotate(90deg)}ajf-page-slider>.ajf-page-slider-content{flex:1;display:block;overflow:hidden;height:100%}ajf-page-slider>.ajf-page-slider-content>.ajf-page-slider-body{display:flex;align-items:stretch}ajf-page-slider>.ajf-page-slider-content>.ajf-page-slider-body.ajf-page-slider-vertical{flex-direction:column;width:100%}ajf-page-slider>.ajf-page-slider-content>.ajf-page-slider-body.ajf-page-slider-horizontal{flex-direction:row;height:100%}ajf-page-slider>.ajf-page-slider-content>.ajf-page-slider-body>ajf-page-slider-item{flex:1 0 auto}\n"]
        }),
        __metadata("design:paramtypes", [AnimationBuilder,
            ChangeDetectorRef,
            Renderer2,
            ElementRef])
    ], AjfPageSlider);
    return AjfPageSlider;
})();
export { AjfPageSlider };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zbGlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvaW9uaWMvcGFnZS1zbGlkZXIvcGFnZS1zbGlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHOztBQUVILE9BQU8sRUFBQyxhQUFhLElBQUksaUJBQWlCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUVyRCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUVWLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDekMsT0FBTyxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBU2pFO0lBQUEsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYyxTQUFRLGlCQUFpQjtRQUdsRCxZQUNJLGdCQUFrQyxFQUNsQyxHQUFzQixFQUN0QixRQUFtQixFQUNYLEdBQWU7WUFFekIsS0FBSyxDQUFDLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUY3QixRQUFHLEdBQUgsR0FBRyxDQUFZO1lBTm5CLGVBQVUsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBU3hDLENBQUM7UUFFRCxrQkFBa0I7WUFDaEIsS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87aUJBQ2IsSUFBSSxDQUNELEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVB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O29CQUNILENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDUDthQUNGO1lBQUMsT0FBTyxDQUFDLEVBQUU7YUFDWDtRQUNILENBQUM7S0FJRixDQUFBO0lBM0VZLGFBQWE7UUFQekIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQix5ekNBQStCO1lBRS9CLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztTQUNoRCxDQUFDO3lDQUtzQixnQkFBZ0I7WUFDN0IsaUJBQWlCO1lBQ1osU0FBUztZQUNOLFVBQVU7T0FQaEIsYUFBYSxDQTJFekI7SUFBRCxvQkFBQztLQUFBO1NBM0VZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKEMpIEdudWNvb3Agc29jLiBjb29wLlxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpLlxuICpcbiAqIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLFxuICogb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm9cbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8uXG4gKlxuICovXG5cbmltcG9ydCB7QWpmUGFnZVNsaWRlciBhcyBBamZDb3JlUGFnZVNsaWRlcn0gZnJvbSAnQGFqZi9jb3JlL3BhZ2Utc2xpZGVyJztcbmltcG9ydCB7QW5pbWF0aW9uQnVpbGRlcn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge0Jvb2xlYW5JbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBPbkRlc3Ryb3ksXG4gIFJlbmRlcmVyMixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge21lcmdlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtmaWx0ZXIsIG1hcCwgc3RhcnRXaXRoLCBzd2l0Y2hNYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWpmLXBhZ2Utc2xpZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICdwYWdlLXNsaWRlci5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3BhZ2Utc2xpZGVyLmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQWpmUGFnZVNsaWRlciBleHRlbmRzIEFqZkNvcmVQYWdlU2xpZGVyIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfc2Nyb2xsU3ViID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgYW5pbWF0aW9uQnVpbGRlcjogQW5pbWF0aW9uQnVpbGRlcixcbiAgICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICkge1xuICAgIHN1cGVyKGFuaW1hdGlvbkJ1aWxkZXIsIGNkciwgcmVuZGVyZXIpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHN1cGVyLm5nQWZ0ZXJDb250ZW50SW5pdCgpO1xuICAgIHRoaXMuX3Njcm9sbFN1YiA9IHRoaXMucGFnZXMuY2hhbmdlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcCgoKSA9PiB0aGlzLnBhZ2VzLnRvQXJyYXkoKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydFdpdGgodGhpcy5wYWdlcy50b0FycmF5KCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyKHBhZ2VzID0+IHBhZ2VzLmxlbmd0aCA+IDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoTWFwKHBhZ2VzID0+IG1lcmdlKC4uLnBhZ2VzLm1hcChwYWdlID0+IHBhZ2Uuc2Nyb2xsKSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9maXhSaXBwbGVGcm9tUmFkaW9CdXR0b24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9maXhUb2dnbGVCdXR0b25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcbiAgICB0aGlzLl9zY3JvbGxTdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpeFJpcHBsZUZyb21SYWRpb0J1dHRvbigpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgY29uc3QgcmFkaW9Hcm91cHMgPSBlbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW9uLXJhZGlvLWdyb3VwJyk7XG4gICAgICBjb25zdCByYWRpb0dyb3VwID0gcmFkaW9Hcm91cHNbMF07XG4gICAgICBjb25zdCBpdGVtcyA9IHJhZGlvR3JvdXAuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lvbi1pdGVtJyk7XG4gICAgICBjb25zdCBpdGVtID0gaXRlbXNbMF07XG4gICAgICBjb25zdCByaXBwbGVzID0gaXRlbS5zaGFkb3dSb290IS5maXJzdEVsZW1lbnRDaGlsZCEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lvbi1yaXBwbGUtZWZmZWN0Jyk7XG4gICAgICBjb25zdCByaXBwbGUgPSByaXBwbGVzLml0ZW0oMCkgYXMgSFRNTElvblJpcHBsZUVmZmVjdEVsZW1lbnQ7XG4gICAgICBjb25zdCBvcmlnID0gcmlwcGxlLnN0eWxlLm9wYWNpdHk7XG4gICAgICByaXBwbGUuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgIHJpcHBsZS5hZGRSaXBwbGUoMCwgMCkudGhlbihyZW1vdmUgPT4ge1xuICAgICAgICByZW1vdmUoKTtcbiAgICAgICAgcmlwcGxlLnN0eWxlLm9wYWNpdHkgPSBvcmlnO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2ZpeFRvZ2dsZUJ1dHRvbnMoKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGNvbnN0IHRvZ2dsZUJ1dHRvbnMgPSBlbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW9uLXRvZ2dsZScpO1xuICAgICAgY29uc3QgdG9nZ2xlQnV0dG9uc051bSA9IHRvZ2dsZUJ1dHRvbnMubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2dnbGVCdXR0b25zTnVtOyBpKyspIHtcbiAgICAgICAgY29uc3QgdG9nZ2xlQnV0dG9uID0gdG9nZ2xlQnV0dG9ucy5pdGVtKGkpIGFzIEhUTUxJb25Ub2dnbGVFbGVtZW50O1xuICAgICAgICBjb25zdCBpbm5lcnMgPVxuICAgICAgICAgICAgdG9nZ2xlQnV0dG9uLnNoYWRvd1Jvb3QhLmZpcnN0RWxlbWVudENoaWxkIS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0b2dnbGUtaW5uZXInKTtcbiAgICAgICAgY29uc3QgaW5uZXIgPSBpbm5lcnNbMF0gYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgIGlubmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnd2lsbC1jaGFuZ2U6IGF1dG8nKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlubmVyLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAwKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2ZpeGVkT3JpZW50YXRpb246IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2hpZGVOYXZpZ2F0aW9uQnV0dG9uczogQm9vbGVhbklucHV0O1xufVxuIl19