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
import { __extends } from 'tslib';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, Optional, NgModule } from '@angular/core';
import { AjfCheckboxGroup, AjfCheckboxGroupItem as AjfCheckboxGroupItem$1, AjfCheckboxGroupModule as AjfCheckboxGroupModule$1 } from '@ajf/core/checkbox-group';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        { type: Component, args: [{selector: 'ajf-checkbox-group-item',
                    template: "<ion-button (click)=\"onInputChange($event)\" role=\"checkbox\" fill=\"clear\" type=\"button\" [id]=\"checkboxId|async\" [attr.aria-checked]=\"checkedState|async\" [attr.aria-disabled]=\"disabledState|async\"><div class=\"ajf-checkbox-group-item-content\"><div><ng-content></ng-content></div><ion-icon item-right [name]=\"icon|async\"></ion-icon></div></ion-button>",
                    styles: ["ajf-checkbox-group-item ion-button{display:block;height:fit-content;margin:0;font-size:.9em;--padding-top:0;--padding-start:5px;--padding-bottom:0;--padding-end:5px}ajf-checkbox-group-item .ajf-checkbox-group-item-content{display:flex;align-items:center;width:100%;height:fit-content;padding:10px 0}ajf-checkbox-group-item .ajf-checkbox-group-item-content>div{flex:1 1 auto;white-space:normal;max-width:calc(100% - 19px)}ajf-checkbox-group-item .ajf-checkbox-group-item-content>ion-icon{flex:0 0 auto;margin-left:5px}"],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
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
        { type: AjfCheckboxGroup, decorators: [{ type: Optional }] }
    ]; };
    return AjfCheckboxGroupItem;
}(AjfCheckboxGroupItem$1));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AjfCheckboxGroupModule = /** @class */ (function () {
    function AjfCheckboxGroupModule() {
    }
    AjfCheckboxGroupModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        IonicModule,
                        AjfCheckboxGroupModule$1
                    ],
                    declarations: [
                        AjfCheckboxGroupItem
                    ],
                    exports: [
                        AjfCheckboxGroupModule$1,
                        AjfCheckboxGroupItem
                    ]
                },] },
    ];
    return AjfCheckboxGroupModule;
}());

export { AjfCheckboxGroupItem, AjfCheckboxGroupModule };
//# sourceMappingURL=checkbox-group.es5.js.map
