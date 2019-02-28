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
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ajf/core/checkbox-group'), require('@angular/common'), require('@ionic/angular')) :
    typeof define === 'function' && define.amd ? define('@ajf/ionic/checkbox-group', ['exports', '@angular/core', '@ajf/core/checkbox-group', '@angular/common', '@ionic/angular'], factory) :
    (global = global || self, factory((global.ajf = global.ajf || {}, global.ajf.ionic = global.ajf.ionic || {}, global.ajf.ionic.checkboxGroup = {}), global.ng.core, global.ajf.core.checkboxGroup, global.ng.common, global.ionic.angular));
}(this, function (exports, core, checkboxGroup, common, angular) { 'use strict';

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
    /**
     * @template T
     */
    var AjfCheckboxGroupItem = /** @class */ (function (_super) {
        __extends(AjfCheckboxGroupItem, _super);
        function AjfCheckboxGroupItem(checkboxGroup) {
            var _this = _super.call(this, checkboxGroup) || this;
            _this.checkedIcon = 'checkmark';
            _this.notCheckedIcon = 'close';
            return _this;
        }
        AjfCheckboxGroupItem.decorators = [
            { type: core.Component, args: [{selector: 'ajf-checkbox-group-item',
                        template: "<ion-button (click)=\"onInputChange($event)\" role=\"checkbox\" fill=\"clear\" type=\"button\" [id]=\"checkboxId|async\" [attr.aria-checked]=\"checkedState|async\" [attr.aria-disabled]=\"disabledState|async\"><div class=\"ajf-checkbox-group-item-content\"><div><ng-content></ng-content></div><ion-icon item-right [name]=\"icon|async\"></ion-icon></div></ion-button>",
                        styles: ["ajf-checkbox-group-item ion-button{display:block;height:fit-content;margin:0;font-size:.9em;--padding-top:0;--padding-start:5px;--padding-bottom:0;--padding-end:5px}ajf-checkbox-group-item .ajf-checkbox-group-item-content{display:flex;align-items:center;width:100%;height:fit-content;padding:10px 0}ajf-checkbox-group-item .ajf-checkbox-group-item-content>div{flex:1 1 auto;white-space:normal;max-width:calc(100% - 19px)}ajf-checkbox-group-item .ajf-checkbox-group-item-content>ion-icon{flex:0 0 auto;margin-left:5px}"],
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        host: {
                            '[attr.id]': 'id',
                            '[class.ajf-checkbox-group-checked]': 'checked',
                            '[class.ajf-checkbox-group-disable]': 'disabled'
                        },
                        inputs: [
                            'id',
                            'name',
                            'checked',
                            'value',
                            'checkedIcon',
                            'notCheckedIcon'
                        ],
                        outputs: [
                            'change'
                        ]
                    },] },
        ];
        /** @nocollapse */
        AjfCheckboxGroupItem.ctorParameters = function () { return [
            { type: checkboxGroup.AjfCheckboxGroup, decorators: [{ type: core.Optional }] }
        ]; };
        return AjfCheckboxGroupItem;
    }(checkboxGroup.AjfCheckboxGroupItem));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AjfCheckboxGroupModule = /** @class */ (function () {
        function AjfCheckboxGroupModule() {
        }
        AjfCheckboxGroupModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            angular.IonicModule,
                            checkboxGroup.AjfCheckboxGroupModule
                        ],
                        declarations: [
                            AjfCheckboxGroupItem
                        ],
                        exports: [
                            checkboxGroup.AjfCheckboxGroupModule,
                            AjfCheckboxGroupItem
                        ]
                    },] },
        ];
        return AjfCheckboxGroupModule;
    }());

    exports.AjfCheckboxGroupItem = AjfCheckboxGroupItem;
    exports.AjfCheckboxGroupModule = AjfCheckboxGroupModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ionic-checkbox-group.umd.js.map
