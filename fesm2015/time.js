import { forwardRef, Component, ViewEncapsulation, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AjfTime as AjfTime$1 } from '@ajf/core/time';

/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/time/time.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const AJF_TIME_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => AjfTime)),
    multi: true
};
class AjfTime extends AjfTime$1 {
    constructor() {
        super();
    }
}
AjfTime.decorators = [
    { type: Component, args: [{
                selector: 'ajf-time',
                template: "<div>\n  <ion-input\n      min=\"0\"\n      max=\"23\" \n      (focus)=\"focusHandler()\"\n      [(ngModel)]=\"hours\"\n      type=\"number\"\n  ></ion-input>\n  :\n  <ion-input\n      min=\"0\"\n      max=\"59\"\n      (focus)=\"focusHandler()\"\n      [(ngModel)]=\"minutes\" type=\"number\"\n  ></ion-input>\n</div>\n",
                providers: [AJF_TIME_CONTROL_VALUE_ACCESSOR],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["ajf-time>div{display:flex;align-items:center;width:7em}ajf-time>div ion-input{text-align:center}\n"]
            }] }
];
/** @nocollapse */
AjfTime.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/time/time-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AjfTimeModule {
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
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/time/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AJF_TIME_CONTROL_VALUE_ACCESSOR, AjfTime, AjfTimeModule };
//# sourceMappingURL=time.js.map
