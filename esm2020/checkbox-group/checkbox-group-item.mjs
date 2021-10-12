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
AjfCheckboxGroupItem.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: AjfCheckboxGroupItem, deps: [{ token: i1.AjfCheckboxGroup, optional: true }], target: i0.ɵɵFactoryTarget.Component });
AjfCheckboxGroupItem.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-next.15", type: AjfCheckboxGroupItem, selector: "ajf-checkbox-group-item", host: { properties: { "attr.id": "id", "class.ajf-checkbox-group-checked": "checked", "class.ajf-checkbox-group-disable": "disabled" } }, usesInheritance: true, ngImport: i0, template: "<ion-button (click)=\"onInputChange($event)\" role=\"checkbox\"\n    fill=\"clear\"\n    type=\"button\"\n    [id]=\"checkboxId|async\"\n    [attr.aria-checked]=\"checkedState|async\"\n    [attr.aria-disabled]=\"disabledState|async\">\n  <div class=\"ajf-checkbox-group-item-content\">\n    <div>\n        <ng-content></ng-content>\n    </div>\n    <ion-icon *ngIf=\"icon|async as ic\" item-right [name]=\"ic!\"></ion-icon>\n  </div>\n</ion-button>\n", styles: ["ajf-checkbox-group-item ion-button{display:block;height:fit-content;margin:0;font-size:.9em;--padding-top: 0;--padding-start: 5px;--padding-bottom: 0;--padding-end: 5px}ajf-checkbox-group-item .ajf-checkbox-group-item-content{display:flex;align-items:center;width:100%;height:fit-content;padding:10px 0}ajf-checkbox-group-item .ajf-checkbox-group-item-content>div{flex:1 1 auto;white-space:normal;max-width:calc(100% - 19px)}ajf-checkbox-group-item .ajf-checkbox-group-item-content>ion-icon{flex:0 0 auto;margin-left:5px}\n"], components: [{ type: i2.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { type: i2.IonIcon, selector: "ion-icon", inputs: ["ariaHidden", "ariaLabel", "color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "async": i3.AsyncPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: AjfCheckboxGroupItem, decorators: [{
            type: Component,
            args: [{ selector: 'ajf-checkbox-group-item', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        '[attr.id]': 'id',
                        '[class.ajf-checkbox-group-checked]': 'checked',
                        '[class.ajf-checkbox-group-disable]': 'disabled'
                    }, template: "<ion-button (click)=\"onInputChange($event)\" role=\"checkbox\"\n    fill=\"clear\"\n    type=\"button\"\n    [id]=\"checkboxId|async\"\n    [attr.aria-checked]=\"checkedState|async\"\n    [attr.aria-disabled]=\"disabledState|async\">\n  <div class=\"ajf-checkbox-group-item-content\">\n    <div>\n        <ng-content></ng-content>\n    </div>\n    <ion-icon *ngIf=\"icon|async as ic\" item-right [name]=\"ic!\"></ion-icon>\n  </div>\n</ion-button>\n", styles: ["ajf-checkbox-group-item ion-button{display:block;height:fit-content;margin:0;font-size:.9em;--padding-top: 0;--padding-start: 5px;--padding-bottom: 0;--padding-end: 5px}ajf-checkbox-group-item .ajf-checkbox-group-item-content{display:flex;align-items:center;width:100%;height:fit-content;padding:10px 0}ajf-checkbox-group-item .ajf-checkbox-group-item-content>div{flex:1 1 auto;white-space:normal;max-width:calc(100% - 19px)}ajf-checkbox-group-item .ajf-checkbox-group-item-content>ion-icon{flex:0 0 auto;margin-left:5px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.AjfCheckboxGroup, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtZ3JvdXAtaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9pb25pYy9jaGVja2JveC1ncm91cC9jaGVja2JveC1ncm91cC1pdGVtLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2lvbmljL2NoZWNrYm94LWdyb3VwL2NoZWNrYm94LWdyb3VwLWl0ZW0uaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFFSCxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLG9CQUFvQixJQUFJLHdCQUF3QixFQUNqRCxNQUFNLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztBQWU5RixNQUFNLE9BQU8sb0JBQXdCLFNBQVEsd0JBQTJCO0lBQ3RFO0lBQ0ksb0ZBQW9GO0lBQ3BGLCtDQUErQztJQUNuQyxhQUFrQztRQUVoRCxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7SUFDaEMsQ0FBQzs7eUhBVFUsb0JBQW9COzZHQUFwQixvQkFBb0IsZ09DekNqQyxvY0FhQTttR0Q0QmEsb0JBQW9CO2tCQVpoQyxTQUFTOytCQUNFLHlCQUF5QixtQkFHbEIsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSxRQUMvQjt3QkFDSixXQUFXLEVBQUUsSUFBSTt3QkFDakIsb0NBQW9DLEVBQUUsU0FBUzt3QkFDL0Msb0NBQW9DLEVBQUUsVUFBVTtxQkFDakQ7OzBCQU1JLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKEMpIEdudWNvb3Agc29jLiBjb29wLlxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpLlxuICpcbiAqIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLFxuICogb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm9cbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8uXG4gKlxuICovXG5cbmltcG9ydCB7XG4gIEFqZkNoZWNrYm94R3JvdXAsXG4gIEFqZkNoZWNrYm94R3JvdXBJdGVtIGFzIEFqZkNvcmVDaGVja2JveEdyb3VwSXRlbVxufSBmcm9tICdAYWpmL2NvcmUvY2hlY2tib3gtZ3JvdXAnO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPcHRpb25hbCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FqZi1jaGVja2JveC1ncm91cC1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICdjaGVja2JveC1ncm91cC1pdGVtLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2hlY2tib3gtZ3JvdXAtaXRlbS5jc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGhvc3Q6IHtcbiAgICAnW2F0dHIuaWRdJzogJ2lkJyxcbiAgICAnW2NsYXNzLmFqZi1jaGVja2JveC1ncm91cC1jaGVja2VkXSc6ICdjaGVja2VkJyxcbiAgICAnW2NsYXNzLmFqZi1jaGVja2JveC1ncm91cC1kaXNhYmxlXSc6ICdkaXNhYmxlZCdcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgQWpmQ2hlY2tib3hHcm91cEl0ZW08VD4gZXh0ZW5kcyBBamZDb3JlQ2hlY2tib3hHcm91cEl0ZW08VD4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIC8vIGBBamZDaGVja2JveEdyb3VwSXRlbWAgaXMgY29tbW9ubHkgdXNlZCBpbiBjb21iaW5hdGlvbiB3aXRoIGEgYEFqZkNoZWNrYm94R3JvdXBgLlxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBsaWdodHdlaWdodC10b2tlbnNcbiAgICAgIEBPcHRpb25hbCgpIGNoZWNrYm94R3JvdXA6IEFqZkNoZWNrYm94R3JvdXA8VD4sXG4gICkge1xuICAgIHN1cGVyKGNoZWNrYm94R3JvdXApO1xuICAgIHRoaXMuY2hlY2tlZEljb24gPSAnY2hlY2ttYXJrJztcbiAgICB0aGlzLm5vdENoZWNrZWRJY29uID0gJ2Nsb3NlJztcbiAgfVxufVxuIiwiPGlvbi1idXR0b24gKGNsaWNrKT1cIm9uSW5wdXRDaGFuZ2UoJGV2ZW50KVwiIHJvbGU9XCJjaGVja2JveFwiXG4gICAgZmlsbD1cImNsZWFyXCJcbiAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICBbaWRdPVwiY2hlY2tib3hJZHxhc3luY1wiXG4gICAgW2F0dHIuYXJpYS1jaGVja2VkXT1cImNoZWNrZWRTdGF0ZXxhc3luY1wiXG4gICAgW2F0dHIuYXJpYS1kaXNhYmxlZF09XCJkaXNhYmxlZFN0YXRlfGFzeW5jXCI+XG4gIDxkaXYgY2xhc3M9XCJhamYtY2hlY2tib3gtZ3JvdXAtaXRlbS1jb250ZW50XCI+XG4gICAgPGRpdj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICAgIDxpb24taWNvbiAqbmdJZj1cImljb258YXN5bmMgYXMgaWNcIiBpdGVtLXJpZ2h0IFtuYW1lXT1cImljIVwiPjwvaW9uLWljb24+XG4gIDwvZGl2PlxuPC9pb24tYnV0dG9uPlxuIl19