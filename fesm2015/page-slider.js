import { AjfPageSlider as AjfPageSlider$1, AjfPageSliderModule as AjfPageSliderModule$1 } from '@ajf/core/page-slider';
import { AnimationBuilder } from '@angular/animations';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, Renderer2, ElementRef, NgModule } from '@angular/core';
import { Subscription, merge } from 'rxjs';
import { map, startWith, filter, switchMap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

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
let AjfPageSlider = /** @class */ (() => {
    class AjfPageSlider extends AjfPageSlider$1 {
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
    return AjfPageSlider;
})();

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
let AjfPageSliderModule = /** @class */ (() => {
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
    return AjfPageSliderModule;
})();

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

/**
 * Generated bundle index. Do not edit.
 */

export { AjfPageSlider, AjfPageSliderModule };
//# sourceMappingURL=page-slider.js.map
