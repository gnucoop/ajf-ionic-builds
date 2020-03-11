/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/checkbox-group/checkbox-group-item.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
import { AjfCheckboxGroup, AjfCheckboxGroupItem as AjfCoreCheckboxGroupItem } from '@ajf/core/checkbox-group';
import { ChangeDetectionStrategy, Component, Optional, ViewEncapsulation } from '@angular/core';
/**
 * @template T
 */
export class AjfCheckboxGroupItem extends AjfCoreCheckboxGroupItem {
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
                template: "<ion-button (click)=\"onInputChange($event)\" role=\"checkbox\"\n    fill=\"clear\"\n    type=\"button\"\n    [id]=\"checkboxId|async\"\n    [attr.aria-checked]=\"checkedState|async\"\n    [attr.aria-disabled]=\"disabledState|async\"\n    [disabled]=\"readonly\">\n  <div class=\"ajf-checkbox-group-item-content\">\n    <div>\n        <ng-content></ng-content>\n    </div>\n    <ion-icon *ngIf=\"icon|async as ic\" item-right [name]=\"ic!\"></ion-icon>\n  </div>\n</ion-button>\n",
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
if (false) {
    /** @type {?} */
    AjfCheckboxGroupItem.ngAcceptInputType_readonly;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtZ3JvdXAtaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9pb25pYy9jaGVja2JveC1ncm91cC9jaGVja2JveC1ncm91cC1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBLE9BQU8sRUFBQyxnQkFBZ0IsRUFDdEIsb0JBQW9CLElBQUksd0JBQXdCLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUVwRixPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztBQWU5RixNQUFNLE9BQU8sb0JBQXdCLFNBQVEsd0JBQTJCOzs7O0lBQ3RFLFlBQXdCLGFBQWtDO1FBQ3hELEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQztJQUNoQyxDQUFDOzs7WUFqQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLDJlQUF1QztnQkFFdkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxJQUFJLEVBQUU7b0JBQ0osV0FBVyxFQUFFLElBQUk7b0JBQ2pCLG9DQUFvQyxFQUFFLFNBQVM7b0JBQy9DLG9DQUFvQyxFQUFFLFVBQVU7aUJBQ2pEOzthQUNGOzs7O1lBakJPLGdCQUFnQix1QkFtQlQsUUFBUTs7OztJQU1yQixnREFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKEMpIEdudWNvb3Agc29jLiBjb29wLlxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpLlxuICpcbiAqIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLFxuICogb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm9cbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8uXG4gKlxuICovXG5cbmltcG9ydCB7QWpmQ2hlY2tib3hHcm91cCxcbiAgQWpmQ2hlY2tib3hHcm91cEl0ZW0gYXMgQWpmQ29yZUNoZWNrYm94R3JvdXBJdGVtfSBmcm9tICdAYWpmL2NvcmUvY2hlY2tib3gtZ3JvdXAnO1xuaW1wb3J0IHtCb29sZWFuSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9wdGlvbmFsLCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWpmLWNoZWNrYm94LWdyb3VwLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJ2NoZWNrYm94LWdyb3VwLWl0ZW0uaHRtbCcsXG4gIHN0eWxlVXJsczogWydjaGVja2JveC1ncm91cC1pdGVtLmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgaG9zdDoge1xuICAgICdbYXR0ci5pZF0nOiAnaWQnLFxuICAgICdbY2xhc3MuYWpmLWNoZWNrYm94LWdyb3VwLWNoZWNrZWRdJzogJ2NoZWNrZWQnLFxuICAgICdbY2xhc3MuYWpmLWNoZWNrYm94LWdyb3VwLWRpc2FibGVdJzogJ2Rpc2FibGVkJ1xuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBBamZDaGVja2JveEdyb3VwSXRlbTxUPiBleHRlbmRzIEFqZkNvcmVDaGVja2JveEdyb3VwSXRlbTxUPiB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIGNoZWNrYm94R3JvdXA6IEFqZkNoZWNrYm94R3JvdXA8VD4pIHtcbiAgICBzdXBlcihjaGVja2JveEdyb3VwKTtcbiAgICB0aGlzLmNoZWNrZWRJY29uID0gJ2NoZWNrbWFyayc7XG4gICAgdGhpcy5ub3RDaGVja2VkSWNvbiA9ICdjbG9zZSc7XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcmVhZG9ubHk6IEJvb2xlYW5JbnB1dDtcbn1cbiJdfQ==