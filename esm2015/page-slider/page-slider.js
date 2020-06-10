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
let AjfPageSlider = /** @class */ (() => {
    class AjfPageSlider extends AjfCorePageSlider {
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
                }] }
    ];
    /** @nocollapse */
    AjfPageSlider.ctorParameters = () => [
        { type: AnimationBuilder },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: ElementRef }
    ];
    return AjfPageSlider;
})();
export { AjfPageSlider };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zbGlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvaW9uaWMvcGFnZS1zbGlkZXIvcGFnZS1zbGlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHO0FBRUgsT0FBTyxFQUFDLGFBQWEsSUFBSSxpQkFBaUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3pFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBRXJELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBRVYsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsS0FBSyxFQUFFLFlBQVksRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUN6QyxPQUFPLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFakU7SUFBQSxNQU9hLGFBQWMsU0FBUSxpQkFBaUI7UUFHbEQsWUFDSSxnQkFBa0MsRUFDbEMsR0FBc0IsRUFDdEIsUUFBbUIsRUFDWCxHQUFlO1lBRXpCLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFGN0IsUUFBRyxHQUFILEdBQUcsQ0FBWTtZQU5uQixlQUFVLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztRQVN4QyxDQUFDO1FBRUQsa0JBQWtCO1lBQ2hCLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPO2lCQUNiLElBQUksQ0FDRCxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUMvQixTQUFTLENBQUMsSUFB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Q0FBQyxDQUFDLENBQUM7aUJBQ1A7YUFDRjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2FBQ1g7UUFDSCxDQUFDOzs7Z0JBOUVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQix5ekNBQStCO29CQUUvQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7OztnQkFyQk8sZ0JBQWdCO2dCQUt0QixpQkFBaUI7Z0JBSWpCLFNBQVM7Z0JBRlQsVUFBVTs7SUEwRlosb0JBQUM7S0FBQTtTQTNFWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChDKSBHbnVjb29wIHNvYy4gY29vcC5cbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSxcbiAqIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKiBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvLlxuICpcbiAqL1xuXG5pbXBvcnQge0FqZlBhZ2VTbGlkZXIgYXMgQWpmQ29yZVBhZ2VTbGlkZXJ9IGZyb20gJ0BhamYvY29yZS9wYWdlLXNsaWRlcic7XG5pbXBvcnQge0FuaW1hdGlvbkJ1aWxkZXJ9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtCb29sZWFuSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgT25EZXN0cm95LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHttZXJnZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZmlsdGVyLCBtYXAsIHN0YXJ0V2l0aCwgc3dpdGNoTWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FqZi1wYWdlLXNsaWRlcicsXG4gIHRlbXBsYXRlVXJsOiAncGFnZS1zbGlkZXIuaHRtbCcsXG4gIHN0eWxlVXJsczogWydwYWdlLXNsaWRlci5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEFqZlBhZ2VTbGlkZXIgZXh0ZW5kcyBBamZDb3JlUGFnZVNsaWRlciBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3Njcm9sbFN1YiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIGFuaW1hdGlvbkJ1aWxkZXI6IEFuaW1hdGlvbkJ1aWxkZXIsXG4gICAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICApIHtcbiAgICBzdXBlcihhbmltYXRpb25CdWlsZGVyLCBjZHIsIHJlbmRlcmVyKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBzdXBlci5uZ0FmdGVyQ29udGVudEluaXQoKTtcbiAgICB0aGlzLl9zY3JvbGxTdWIgPSB0aGlzLnBhZ2VzLmNoYW5nZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXAoKCkgPT4gdGhpcy5wYWdlcy50b0FycmF5KCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRXaXRoKHRoaXMucGFnZXMudG9BcnJheSgpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcihwYWdlcyA9PiBwYWdlcy5sZW5ndGggPiAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaE1hcChwYWdlcyA9PiBtZXJnZSguLi5wYWdlcy5tYXAocGFnZSA9PiBwYWdlLnNjcm9sbCkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZml4UmlwcGxlRnJvbVJhZGlvQnV0dG9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZml4VG9nZ2xlQnV0dG9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gICAgdGhpcy5fc2Nyb2xsU3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIF9maXhSaXBwbGVGcm9tUmFkaW9CdXR0b24oKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGNvbnN0IHJhZGlvR3JvdXBzID0gZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lvbi1yYWRpby1ncm91cCcpO1xuICAgICAgY29uc3QgcmFkaW9Hcm91cCA9IHJhZGlvR3JvdXBzWzBdO1xuICAgICAgY29uc3QgaXRlbXMgPSByYWRpb0dyb3VwLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpb24taXRlbScpO1xuICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zWzBdO1xuICAgICAgY29uc3QgcmlwcGxlcyA9IGl0ZW0uc2hhZG93Um9vdCEuZmlyc3RFbGVtZW50Q2hpbGQhLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpb24tcmlwcGxlLWVmZmVjdCcpO1xuICAgICAgY29uc3QgcmlwcGxlID0gcmlwcGxlcy5pdGVtKDApIGFzIEhUTUxJb25SaXBwbGVFZmZlY3RFbGVtZW50O1xuICAgICAgY29uc3Qgb3JpZyA9IHJpcHBsZS5zdHlsZS5vcGFjaXR5O1xuICAgICAgcmlwcGxlLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICByaXBwbGUuYWRkUmlwcGxlKDAsIDApLnRoZW4ocmVtb3ZlID0+IHtcbiAgICAgICAgcmVtb3ZlKCk7XG4gICAgICAgIHJpcHBsZS5zdHlsZS5vcGFjaXR5ID0gb3JpZztcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9maXhUb2dnbGVCdXR0b25zKCk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBjb25zdCB0b2dnbGVCdXR0b25zID0gZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lvbi10b2dnbGUnKTtcbiAgICAgIGNvbnN0IHRvZ2dsZUJ1dHRvbnNOdW0gPSB0b2dnbGVCdXR0b25zLmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9nZ2xlQnV0dG9uc051bTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRvZ2dsZUJ1dHRvbiA9IHRvZ2dsZUJ1dHRvbnMuaXRlbShpKSBhcyBIVE1MSW9uVG9nZ2xlRWxlbWVudDtcbiAgICAgICAgY29uc3QgaW5uZXJzID1cbiAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbi5zaGFkb3dSb290IS5maXJzdEVsZW1lbnRDaGlsZCEuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG9nZ2xlLWlubmVyJyk7XG4gICAgICAgIGNvbnN0IGlubmVyID0gaW5uZXJzWzBdIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgICAgICBpbm5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3dpbGwtY2hhbmdlOiBhdXRvJyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpbm5lci5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9maXhlZE9yaWVudGF0aW9uOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oaWRlTmF2aWdhdGlvbkJ1dHRvbnM6IEJvb2xlYW5JbnB1dDtcbn1cbiJdfQ==