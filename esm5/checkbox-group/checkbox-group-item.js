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
import { __extends } from "tslib";
import { AjfCheckboxGroup, AjfCheckboxGroupItem as AjfCoreCheckboxGroupItem } from '@ajf/core/checkbox-group';
import { ChangeDetectionStrategy, Component, Optional, ViewEncapsulation } from '@angular/core';
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
    AjfCheckboxGroupItem.ctorParameters = function () { return [
        { type: AjfCheckboxGroup, decorators: [{ type: Optional }] }
    ]; };
    return AjfCheckboxGroupItem;
}(AjfCoreCheckboxGroupItem));
export { AjfCheckboxGroupItem };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtZ3JvdXAtaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9pb25pYy9jaGVja2JveC1ncm91cC9jaGVja2JveC1ncm91cC1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRzs7QUFFSCxPQUFPLEVBQUMsZ0JBQWdCLEVBQ3RCLG9CQUFvQixJQUFJLHdCQUF3QixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFFcEYsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHOUY7SUFZNkMsd0NBQTJCO0lBQ3RFLDhCQUF3QixhQUFrQztRQUExRCxZQUNFLGtCQUFNLGFBQWEsQ0FBQyxTQUdyQjtRQUZDLEtBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLEtBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDOztJQUNoQyxDQUFDOztnQkFqQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLDJlQUF1QztvQkFFdkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxJQUFJLEVBQUU7d0JBQ0osV0FBVyxFQUFFLElBQUk7d0JBQ2pCLG9DQUFvQyxFQUFFLFNBQVM7d0JBQy9DLG9DQUFvQyxFQUFFLFVBQVU7cUJBQ2pEOztpQkFDRjs7OztnQkFqQk8sZ0JBQWdCLHVCQW1CVCxRQUFROztJQU92QiwyQkFBQztDQUFBLEFBcEJELENBWTZDLHdCQUF3QixHQVFwRTtTQVJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoQykgR251Y29vcCBzb2MuIGNvb3AuXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhc1xuICogcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsXG4gKiBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVyb1xuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpLlxuICogSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLy5cbiAqXG4gKi9cblxuaW1wb3J0IHtBamZDaGVja2JveEdyb3VwLFxuICBBamZDaGVja2JveEdyb3VwSXRlbSBhcyBBamZDb3JlQ2hlY2tib3hHcm91cEl0ZW19IGZyb20gJ0BhamYvY29yZS9jaGVja2JveC1ncm91cCc7XG5pbXBvcnQge0Jvb2xlYW5JbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT3B0aW9uYWwsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhamYtY2hlY2tib3gtZ3JvdXAtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnY2hlY2tib3gtZ3JvdXAtaXRlbS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2NoZWNrYm94LWdyb3VwLWl0ZW0uY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBob3N0OiB7XG4gICAgJ1thdHRyLmlkXSc6ICdpZCcsXG4gICAgJ1tjbGFzcy5hamYtY2hlY2tib3gtZ3JvdXAtY2hlY2tlZF0nOiAnY2hlY2tlZCcsXG4gICAgJ1tjbGFzcy5hamYtY2hlY2tib3gtZ3JvdXAtZGlzYWJsZV0nOiAnZGlzYWJsZWQnXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIEFqZkNoZWNrYm94R3JvdXBJdGVtPFQ+IGV4dGVuZHMgQWpmQ29yZUNoZWNrYm94R3JvdXBJdGVtPFQ+IHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgY2hlY2tib3hHcm91cDogQWpmQ2hlY2tib3hHcm91cDxUPikge1xuICAgIHN1cGVyKGNoZWNrYm94R3JvdXApO1xuICAgIHRoaXMuY2hlY2tlZEljb24gPSAnY2hlY2ttYXJrJztcbiAgICB0aGlzLm5vdENoZWNrZWRJY29uID0gJ2Nsb3NlJztcbiAgfVxuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9yZWFkb25seTogQm9vbGVhbklucHV0O1xufVxuIl19