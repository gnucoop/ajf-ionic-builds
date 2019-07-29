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
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/animations'), require('@angular/core'), require('@ajf/core/page-slider'), require('@angular/common'), require('@ionic/angular')) :
    typeof define === 'function' && define.amd ? define('@ajf/ionic/page-slider', ['exports', '@angular/animations', '@angular/core', '@ajf/core/page-slider', '@angular/common', '@ionic/angular'], factory) :
    (global = global || self, factory((global.ajf = global.ajf || {}, global.ajf.ionic = global.ajf.ionic || {}, global.ajf.ionic.pageSlider = {}), global.ng.animations, global.ng.core, global.ajf.core.pageSlider, global.ng.common, global.ionic.angular));
}(this, function (exports, animations, core, pageSlider, common, angular) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AjfPageSlider = /** @class */ (function (_super) {
        __extends(AjfPageSlider, _super);
        function AjfPageSlider(animationBuilder, cdr, renderer) {
            return _super.call(this, animationBuilder, cdr, renderer) || this;
        }
        AjfPageSlider.decorators = [
            { type: core.Component, args: [{selector: 'ajf-page-slider',
                        template: "<div #content class=\"ajf-page-slider-content\"><div #body [ngClass]=\"'ajf-page-slider-' + orientation\" (touchstart)=\"onTouchStart($event)\" (touchmove)=\"onTouchMove($event)\" (touchend)=\"onTouchEnd()\" (mousewheel)=\"onMouseWheel($event)\" class=\"ajf-page-slider-body\"><ng-content></ng-content></div></div><ion-toolbar *ngIf=\"!hideNavigationButtons\" class=\"ajf-toolbar\"><ng-content select=\"[ajfPageSliderBar]\"></ng-content><ion-buttons slot=\"end\"><ion-button *ngIf=\"!fixedOrientation\" (click)=\"switchOrientation()\"><ion-icon [class.ajf-icon-rotated]=\"orientation == 'horizontal'\" name=\"swap\"></ion-icon></ion-button><ion-button (click)=\"slide({dir: 'up'})\" fill=\"solid\" color=\"secondary\"><ion-icon *ngIf=\"orientation == 'horizontal'\" name=\"arrow-back\"></ion-icon><ion-icon *ngIf=\"orientation == 'vertical'\" name=\"arrow-up\"></ion-icon></ion-button><ion-button (click)=\"slide({dir: 'down'})\" fill=\"solid\" color=\"secondary\"><ion-icon *ngIf=\"orientation == 'horizontal'\" name=\"arrow-forward\"></ion-icon><ion-icon *ngIf=\"orientation == 'vertical'\" name=\"arrow-down\"></ion-icon></ion-button></ion-buttons></ion-toolbar>",
                        styles: ["ajf-page-slider{display:flex;flex-direction:column;align-items:stretch}ajf-page-slider ion-icon.ajf-icon-rotated{transform:rotate(90deg)}ajf-page-slider>.ajf-page-slider-content{flex:1;display:block;overflow:hidden;height:100%}ajf-page-slider>.ajf-page-slider-content>.ajf-page-slider-body{display:flex;align-items:stretch}ajf-page-slider>.ajf-page-slider-content>.ajf-page-slider-body.ajf-page-slider-vertical{flex-direction:column;width:100%}ajf-page-slider>.ajf-page-slider-content>.ajf-page-slider-body.ajf-page-slider-horizontal{flex-direction:row;height:100%}ajf-page-slider>.ajf-page-slider-content>.ajf-page-slider-body>ajf-page-slider-item{flex:1 0 auto}"],
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        inputs: ['duration', 'currentPage', 'hideNavigationButtons', 'orientation', 'fixedOrientation'],
                        outputs: ['pageScrollFinish', 'orientationChange'],
                        queries: {
                            pages: new core.ContentChildren(pageSlider.AjfPageSliderItem),
                            body: new core.ViewChild('body', { static: true }),
                        },
                    },] },
        ];
        /** @nocollapse */
        AjfPageSlider.ctorParameters = function () { return [
            { type: animations.AnimationBuilder },
            { type: core.ChangeDetectorRef },
            { type: core.Renderer2 }
        ]; };
        return AjfPageSlider;
    }(pageSlider.AjfPageSlider));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    },] },
        ];
        return AjfPageSliderModule;
    }());

    exports.AjfPageSlider = AjfPageSlider;
    exports.AjfPageSliderModule = AjfPageSliderModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ionic-page-slider.umd.js.map
