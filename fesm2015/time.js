import { __decorate, __metadata } from 'tslib';
import { forwardRef, Component, ViewEncapsulation, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AjfTime as AjfTime$1 } from '@ajf/core/time';

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
const AJF_TIME_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AjfTime),
    multi: true
};
let AjfTime = /** @class */ (() => {
    let AjfTime = class AjfTime extends AjfTime$1 {
        constructor() {
            super();
        }
    };
    AjfTime = __decorate([
        Component({
            selector: 'ajf-time',
            template: "<div>\n  <ion-input\n      min=\"0\"\n      max=\"23\" \n      (focus)=\"focusHandler()\"\n      [(ngModel)]=\"hours\"\n      type=\"number\"\n  ></ion-input>\n  :\n  <ion-input\n      min=\"0\"\n      max=\"59\"\n      (focus)=\"focusHandler()\"\n      [(ngModel)]=\"minutes\" type=\"number\"\n  ></ion-input>\n</div>\n",
            providers: [AJF_TIME_CONTROL_VALUE_ACCESSOR],
            encapsulation: ViewEncapsulation.None,
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: ["ajf-time>div{display:flex;align-items:center;width:7em}ajf-time>div ion-input{text-align:center}\n"]
        }),
        __metadata("design:paramtypes", [])
    ], AjfTime);
    return AjfTime;
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
let AjfTimeModule = /** @class */ (() => {
    let AjfTimeModule = class AjfTimeModule {
    };
    AjfTimeModule = __decorate([
        NgModule({
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
        })
    ], AjfTimeModule);
    return AjfTimeModule;
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

export { AJF_TIME_CONTROL_VALUE_ACCESSOR, AjfTime, AjfTimeModule };
//# sourceMappingURL=time.js.map
