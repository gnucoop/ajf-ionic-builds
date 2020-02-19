(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tslib'), require('@ajf/core/page-slider'), require('@angular/animations'), require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('@ionic/angular')) :
    typeof define === 'function' && define.amd ? define('@ajf/ionic/page-slider', ['exports', 'tslib', '@ajf/core/page-slider', '@angular/animations', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/common', '@ionic/angular'], factory) :
    (global = global || self, factory((global.ajf = global.ajf || {}, global.ajf.ionic = global.ajf.ionic || {}, global.ajf.ionic.pageSlider = {}), global.tslib, global.ng.core.pageSlider, global.ng.animations, global.ng.core, global.rxjs, global.rxjs.operators, global.ng.common, global.ionic.angular));
}(this, (function (exports, tslib, pageSlider, animations, core, rxjs, operators, common, angular) { 'use strict';

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
    var AjfPageSlider = /** @class */ (function (_super) {
        tslib.__extends(AjfPageSlider, _super);
        function AjfPageSlider(animationBuilder, cdr, renderer, _el) {
            var _this = _super.call(this, animationBuilder, cdr, renderer) || this;
            _this._el = _el;
            _this._scrollSub = rxjs.Subscription.EMPTY;
            return _this;
        }
        AjfPageSlider.prototype.ngAfterContentInit = function () {
            var _this = this;
            _super.prototype.ngAfterContentInit.call(this);
            this._scrollSub = this.pages.changes.pipe(operators.map(function () { return _this.pages.toArray(); }), operators.startWith(this.pages.toArray()), operators.filter(function (pages) { return pages.length > 0; }), operators.switchMap(function (pages) { return rxjs.merge.apply(void 0, tslib.__spread(pages.map(function (page) { return page.scroll; }))); })).subscribe(function () {
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
            { type: core.Component, args: [{
                        selector: 'ajf-page-slider',
                        template: "<div #content class=\"ajf-page-slider-content\">\n  <div #body [ngClass]=\"'ajf-page-slider-' + orientation\"\n      (touchstart)=\"onTouchStart($event)\"\n      (touchmove)=\"onTouchMove($event)\"\n      (touchend)=\"onTouchEnd()\"\n      (mousewheel)=\"onMouseWheel($event)\" class=\"ajf-page-slider-body\">\n    <ng-content></ng-content>\n  </div>\n</div>\n<ion-toolbar *ngIf=\"!hideNavigationButtons\" class=\"ajf-toolbar\">\n  <ng-content select=\"[ajfPageSliderBar]\"></ng-content>\n  <ion-buttons slot=\"end\">\n    <ion-button *ngIf=\"!fixedOrientation\" (click)=\"switchOrientation()\">\n      <ion-icon [class.ajf-icon-rotated]=\"orientation == 'horizontal'\"\n          name=\"swap-horizontal\"></ion-icon>\n    </ion-button>\n    <ion-button (click)=\"slide({dir: 'up'})\" fill=\"solid\" color=\"secondary\">\n      <ion-icon *ngIf=\"orientation == 'horizontal'\" name=\"arrow-back\"></ion-icon>\n      <ion-icon *ngIf=\"orientation == 'vertical'\" name=\"arrow-up\"></ion-icon>\n    </ion-button>\n    <ion-button (click)=\"slide({dir: 'down'})\" fill=\"solid\" color=\"secondary\">\n      <ion-icon *ngIf=\"orientation == 'horizontal'\" name=\"arrow-forward\"></ion-icon>\n      <ion-icon *ngIf=\"orientation == 'vertical'\" name=\"arrow-down\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: ["ajf-page-slider{display:flex;flex-direction:column;align-items:stretch}ajf-page-slider ion-icon.ajf-icon-rotated{transform:rotate(90deg)}ajf-page-slider>.ajf-page-slider-content{flex:1;display:block;overflow:hidden;height:100%}ajf-page-slider>.ajf-page-slider-content>.ajf-page-slider-body{display:flex;align-items:stretch}ajf-page-slider>.ajf-page-slider-content>.ajf-page-slider-body.ajf-page-slider-vertical{flex-direction:column;width:100%}ajf-page-slider>.ajf-page-slider-content>.ajf-page-slider-body.ajf-page-slider-horizontal{flex-direction:row;height:100%}ajf-page-slider>.ajf-page-slider-content>.ajf-page-slider-body>ajf-page-slider-item{flex:1 0 auto}\n"]
                    }] }
        ];
        /** @nocollapse */
        AjfPageSlider.ctorParameters = function () { return [
            { type: animations.AnimationBuilder },
            { type: core.ChangeDetectorRef },
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        return AjfPageSlider;
    }(pageSlider.AjfPageSlider));

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
    var AjfPageSliderModule = /** @class */ (function () {
        function AjfPageSliderModule() {
        }
        AjfPageSliderModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            angular.IonicModule,
                            pageSlider.AjfPageSliderModule
                        ],
                        declarations: [
                            AjfPageSlider
                        ],
                        exports: [
                            pageSlider.AjfPageSliderModule,
                            AjfPageSlider
                        ]
                    },] }
        ];
        return AjfPageSliderModule;
    }());

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

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AjfPageSlider = AjfPageSlider;
    exports.AjfPageSliderModule = AjfPageSliderModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ionic-page-slider.umd.js.map
