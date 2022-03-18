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
import { AjfCheckboxGroupItem as AjfCoreCheckboxGroupItem, } from '@ajf/core/checkbox-group';
import { ChangeDetectionStrategy, Component, Optional, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ajf/core/checkbox-group";
import * as i2 from "@ionic/angular";
import * as i3 from "@angular/common";
export class AjfCheckboxGroupItem extends AjfCoreCheckboxGroupItem {
    constructor(
    // `AjfCheckboxGroupItem` is commonly used in combination with a `AjfCheckboxGroup`.
    // tslint:disable-next-line: lightweight-tokens
    checkboxGroup) {
        super(checkboxGroup);
        this.checkedIcon = 'checkmark';
        this.notCheckedIcon = 'close';
    }
}
AjfCheckboxGroupItem.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfCheckboxGroupItem, deps: [{ token: i1.AjfCheckboxGroup, optional: true }], target: i0.ɵɵFactoryTarget.Component });
AjfCheckboxGroupItem.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.5", type: AjfCheckboxGroupItem, selector: "ajf-checkbox-group-item", host: { properties: { "attr.id": "id", "class.ajf-checkbox-group-checked": "checked", "class.ajf-checkbox-group-disable": "disabled" } }, usesInheritance: true, ngImport: i0, template: "<ion-button (click)=\"onInputChange($event)\" role=\"checkbox\"\n    fill=\"clear\"\n    type=\"button\"\n    [id]=\"checkboxId|async\"\n    [attr.aria-checked]=\"checkedState|async\"\n    [attr.aria-disabled]=\"disabledState|async\">\n  <div class=\"ajf-checkbox-group-item-content\">\n    <div>\n        <ng-content></ng-content>\n    </div>\n    <ion-icon *ngIf=\"icon|async as ic\" item-right [name]=\"ic!\"></ion-icon>\n  </div>\n</ion-button>\n", styles: ["ajf-checkbox-group-item ion-button{display:block;height:-moz-fit-content;height:fit-content;margin:0;font-size:.9em;--padding-top: 0;--padding-start: 5px;--padding-bottom: 0;--padding-end: 5px}ajf-checkbox-group-item .ajf-checkbox-group-item-content{display:flex;align-items:center;width:100%;height:-moz-fit-content;height:fit-content;padding:10px 0}ajf-checkbox-group-item .ajf-checkbox-group-item-content>div{flex:1 1 auto;white-space:normal;max-width:calc(100% - 19px)}ajf-checkbox-group-item .ajf-checkbox-group-item-content>ion-icon{flex:0 0 auto;margin-left:5px}\n"], components: [{ type: i2.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { type: i2.IonIcon, selector: "ion-icon", inputs: ["ariaHidden", "ariaLabel", "color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "async": i3.AsyncPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfCheckboxGroupItem, decorators: [{
            type: Component,
            args: [{ selector: 'ajf-checkbox-group-item', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        '[attr.id]': 'id',
                        '[class.ajf-checkbox-group-checked]': 'checked',
                        '[class.ajf-checkbox-group-disable]': 'disabled',
                    }, template: "<ion-button (click)=\"onInputChange($event)\" role=\"checkbox\"\n    fill=\"clear\"\n    type=\"button\"\n    [id]=\"checkboxId|async\"\n    [attr.aria-checked]=\"checkedState|async\"\n    [attr.aria-disabled]=\"disabledState|async\">\n  <div class=\"ajf-checkbox-group-item-content\">\n    <div>\n        <ng-content></ng-content>\n    </div>\n    <ion-icon *ngIf=\"icon|async as ic\" item-right [name]=\"ic!\"></ion-icon>\n  </div>\n</ion-button>\n", styles: ["ajf-checkbox-group-item ion-button{display:block;height:-moz-fit-content;height:fit-content;margin:0;font-size:.9em;--padding-top: 0;--padding-start: 5px;--padding-bottom: 0;--padding-end: 5px}ajf-checkbox-group-item .ajf-checkbox-group-item-content{display:flex;align-items:center;width:100%;height:-moz-fit-content;height:fit-content;padding:10px 0}ajf-checkbox-group-item .ajf-checkbox-group-item-content>div{flex:1 1 auto;white-space:normal;max-width:calc(100% - 19px)}ajf-checkbox-group-item .ajf-checkbox-group-item-content>ion-icon{flex:0 0 auto;margin-left:5px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.AjfCheckboxGroup, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtZ3JvdXAtaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2lvbmljL2NoZWNrYm94LWdyb3VwL3NyYy9jaGVja2JveC1ncm91cC1pdGVtLnRzIiwiLi4vLi4vLi4vLi4vcHJvamVjdHMvaW9uaWMvY2hlY2tib3gtZ3JvdXAvc3JjL2NoZWNrYm94LWdyb3VwLWl0ZW0uaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFFSCxPQUFPLEVBRUwsb0JBQW9CLElBQUksd0JBQXdCLEdBQ2pELE1BQU0sMEJBQTBCLENBQUM7QUFDbEMsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7O0FBZTlGLE1BQU0sT0FBTyxvQkFBd0IsU0FBUSx3QkFBMkI7SUFDdEU7SUFDRSxvRkFBb0Y7SUFDcEYsK0NBQStDO0lBQ25DLGFBQWtDO1FBRTlDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQztJQUNoQyxDQUFDOztpSEFUVSxvQkFBb0I7cUdBQXBCLG9CQUFvQixnT0N6Q2pDLG9jQWFBOzJGRDRCYSxvQkFBb0I7a0JBYmhDLFNBQVM7K0JBQ0UseUJBQXlCLG1CQUdsQix1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJLFFBRS9CO3dCQUNKLFdBQVcsRUFBRSxJQUFJO3dCQUNqQixvQ0FBb0MsRUFBRSxTQUFTO3dCQUMvQyxvQ0FBb0MsRUFBRSxVQUFVO3FCQUNqRDs7MEJBTUUsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoQykgR251Y29vcCBzb2MuIGNvb3AuXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhc1xuICogcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsXG4gKiBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVyb1xuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpLlxuICogSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLy5cbiAqXG4gKi9cblxuaW1wb3J0IHtcbiAgQWpmQ2hlY2tib3hHcm91cCxcbiAgQWpmQ2hlY2tib3hHcm91cEl0ZW0gYXMgQWpmQ29yZUNoZWNrYm94R3JvdXBJdGVtLFxufSBmcm9tICdAYWpmL2NvcmUvY2hlY2tib3gtZ3JvdXAnO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPcHRpb25hbCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhamYtY2hlY2tib3gtZ3JvdXAtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnY2hlY2tib3gtZ3JvdXAtaXRlbS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2NoZWNrYm94LWdyb3VwLWl0ZW0uc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIGhvc3Q6IHtcbiAgICAnW2F0dHIuaWRdJzogJ2lkJyxcbiAgICAnW2NsYXNzLmFqZi1jaGVja2JveC1ncm91cC1jaGVja2VkXSc6ICdjaGVja2VkJyxcbiAgICAnW2NsYXNzLmFqZi1jaGVja2JveC1ncm91cC1kaXNhYmxlXSc6ICdkaXNhYmxlZCcsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIEFqZkNoZWNrYm94R3JvdXBJdGVtPFQ+IGV4dGVuZHMgQWpmQ29yZUNoZWNrYm94R3JvdXBJdGVtPFQ+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgLy8gYEFqZkNoZWNrYm94R3JvdXBJdGVtYCBpcyBjb21tb25seSB1c2VkIGluIGNvbWJpbmF0aW9uIHdpdGggYSBgQWpmQ2hlY2tib3hHcm91cGAuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBsaWdodHdlaWdodC10b2tlbnNcbiAgICBAT3B0aW9uYWwoKSBjaGVja2JveEdyb3VwOiBBamZDaGVja2JveEdyb3VwPFQ+LFxuICApIHtcbiAgICBzdXBlcihjaGVja2JveEdyb3VwKTtcbiAgICB0aGlzLmNoZWNrZWRJY29uID0gJ2NoZWNrbWFyayc7XG4gICAgdGhpcy5ub3RDaGVja2VkSWNvbiA9ICdjbG9zZSc7XG4gIH1cbn1cbiIsIjxpb24tYnV0dG9uIChjbGljayk9XCJvbklucHV0Q2hhbmdlKCRldmVudClcIiByb2xlPVwiY2hlY2tib3hcIlxuICAgIGZpbGw9XCJjbGVhclwiXG4gICAgdHlwZT1cImJ1dHRvblwiXG4gICAgW2lkXT1cImNoZWNrYm94SWR8YXN5bmNcIlxuICAgIFthdHRyLmFyaWEtY2hlY2tlZF09XCJjaGVja2VkU3RhdGV8YXN5bmNcIlxuICAgIFthdHRyLmFyaWEtZGlzYWJsZWRdPVwiZGlzYWJsZWRTdGF0ZXxhc3luY1wiPlxuICA8ZGl2IGNsYXNzPVwiYWpmLWNoZWNrYm94LWdyb3VwLWl0ZW0tY29udGVudFwiPlxuICAgIDxkaXY+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgICA8aW9uLWljb24gKm5nSWY9XCJpY29ufGFzeW5jIGFzIGljXCIgaXRlbS1yaWdodCBbbmFtZV09XCJpYyFcIj48L2lvbi1pY29uPlxuICA8L2Rpdj5cbjwvaW9uLWJ1dHRvbj5cbiJdfQ==