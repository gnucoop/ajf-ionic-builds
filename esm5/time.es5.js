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
import { forwardRef, Component, ViewEncapsulation, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { __extends } from 'tslib';
import { AjfTime as AjfTime$1 } from '@ajf/core/time';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var AJF_TIME_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return AjfTime; })),
    multi: true
};
var AjfTime = /** @class */ (function (_super) {
    __extends(AjfTime, _super);
    function AjfTime() {
        return _super.call(this) || this;
    }
    AjfTime.decorators = [
        { type: Component, args: [{selector: 'ajf-time',
                    template: "<div><ion-input min=\"0\" max=\"23\" (focus)=\"focusHandler()\" [(ngModel)]=\"hours\" type=\"number\" [readonly]=\"readonly\"></ion-input>:<ion-input min=\"0\" max=\"59\" (focus)=\"focusHandler()\" [(ngModel)]=\"minutes\" type=\"number\" [readonly]=\"readonly\"></ion-input></div>",
                    styles: ["ajf-time>div{display:flex;align-items:center;width:7em}ajf-time>div ion-input{text-align:center}"],
                    providers: [AJF_TIME_CONTROL_VALUE_ACCESSOR],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    inputs: [
                        'readonly',
                    ],
                },] },
    ];
    /** @nocollapse */
    AjfTime.ctorParameters = function () { return []; };
    return AjfTime;
}(AjfTime$1));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AjfTimeModule = /** @class */ (function () {
    function AjfTimeModule() {
    }
    AjfTimeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        FormsModule,
                        IonicModule,
                    ],
                    declarations: [
                        AjfTime,
                    ],
                    exports: [
                        AjfTime,
                    ]
                },] },
    ];
    return AjfTimeModule;
}());

export { AJF_TIME_CONTROL_VALUE_ACCESSOR, AjfTime, AjfTimeModule };
//# sourceMappingURL=time.es5.js.map
