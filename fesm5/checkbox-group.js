import { __extends } from 'tslib';
import { AjfCheckboxGroup, AjfCheckboxGroupItem as AjfCheckboxGroupItem$1, AjfCheckboxGroupModule as AjfCheckboxGroupModule$1 } from '@ajf/core/checkbox-group';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, Optional, NgModule } from '@angular/core';
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
var AjfCheckboxGroupItem = /** @class */ (function (_super) {
    __extends(AjfCheckboxGroupItem, _super);
    function AjfCheckboxGroupItem(checkboxGroup) {
        var _this = _super.call(this, checkboxGroup) || this;
        _this.checkedIcon = 'checkmark';
        _this.notCheckedIcon = 'close';
        return _this;
    }
    AjfCheckboxGroupItem.decorators = [
        { type: Component, args: [{
                    selector: 'ajf-checkbox-group-item',
                    template: "<ion-button (click)=\"onInputChange($event)\" role=\"checkbox\"\n    fill=\"clear\"\n    type=\"button\"\n    [id]=\"checkboxId|async\"\n    [attr.aria-checked]=\"checkedState|async\"\n    [attr.aria-disabled]=\"disabledState|async\">\n  <div class=\"ajf-checkbox-group-item-content\">\n    <div>\n        <ng-content></ng-content>\n    </div>\n    <ion-icon *ngIf=\"icon|async as ic\" item-right [name]=\"ic!\"></ion-icon>\n  </div>\n</ion-button>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[attr.id]': 'id',
                        '[class.ajf-checkbox-group-checked]': 'checked',
                        '[class.ajf-checkbox-group-disable]': 'disabled'
                    },
                    styles: ["ajf-checkbox-group-item ion-button{display:block;height:fit-content;margin:0;font-size:.9em;--padding-top: 0;--padding-start: 5px;--padding-bottom: 0;--padding-end: 5px}ajf-checkbox-group-item .ajf-checkbox-group-item-content{display:flex;align-items:center;width:100%;height:fit-content;padding:10px 0}ajf-checkbox-group-item .ajf-checkbox-group-item-content>div{flex:1 1 auto;white-space:normal;max-width:calc(100% - 19px)}ajf-checkbox-group-item .ajf-checkbox-group-item-content>ion-icon{flex:0 0 auto;margin-left:5px}\n"]
                }] }
    ];
    /** @nocollapse */
    AjfCheckboxGroupItem.ctorParameters = function () { return [
        { type: AjfCheckboxGroup, decorators: [{ type: Optional }] }
    ]; };
    return AjfCheckboxGroupItem;
}(AjfCheckboxGroupItem$1));

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
var AjfCheckboxGroupModule = /** @class */ (function () {
    function AjfCheckboxGroupModule() {
    }
    AjfCheckboxGroupModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        AjfCheckboxGroupModule$1,
                        CommonModule,
                        IonicModule,
                    ],
                    declarations: [
                        AjfCheckboxGroupItem,
                    ],
                    exports: [
                        AjfCheckboxGroupItem,
                        AjfCheckboxGroupModule$1,
                    ],
                },] }
    ];
    return AjfCheckboxGroupModule;
}());

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

export { AjfCheckboxGroupItem, AjfCheckboxGroupModule };
//# sourceMappingURL=checkbox-group.js.map
