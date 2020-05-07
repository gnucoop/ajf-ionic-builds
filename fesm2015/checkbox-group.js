import { AjfCheckboxGroupItem as AjfCheckboxGroupItem$1, AjfCheckboxGroup, AjfCheckboxGroupModule as AjfCheckboxGroupModule$1 } from '@ajf/core/checkbox-group';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, Optional, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/checkbox-group/checkbox-group-item.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class AjfCheckboxGroupItem extends AjfCheckboxGroupItem$1 {
    /**
     * @param {?} checkboxGroup
     */
    constructor(checkboxGroup) {
        super(checkboxGroup);
        this.checkedIcon = 'checkmark';
        this.notCheckedIcon = 'close';
    }
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
AjfCheckboxGroupItem.ctorParameters = () => [
    { type: AjfCheckboxGroup, decorators: [{ type: Optional }] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/checkbox-group/checkbox-group-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AjfCheckboxGroupModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/checkbox-group/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AjfCheckboxGroupItem, AjfCheckboxGroupModule };
//# sourceMappingURL=checkbox-group.js.map
