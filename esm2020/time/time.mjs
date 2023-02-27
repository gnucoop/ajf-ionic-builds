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
import { AjfTime as Base } from '@ajf/core/time';
import { ChangeDetectionStrategy, Component, forwardRef, ViewEncapsulation, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@ionic/angular";
export const AJF_TIME_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AjfTime),
    multi: true,
};
export class AjfTime extends Base {
    constructor() {
        super();
    }
}
AjfTime.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: AjfTime, deps: [], target: i0.ɵɵFactoryTarget.Component });
AjfTime.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.4", type: AjfTime, selector: "ajf-time", providers: [AJF_TIME_CONTROL_VALUE_ACCESSOR], usesInheritance: true, ngImport: i0, template: "<div>\n  <ion-input\n      min=\"0\"\n      max=\"23\" \n      (focus)=\"focusHandler()\"\n      [(ngModel)]=\"hours\"\n      type=\"number\"\n  ></ion-input>\n  :\n  <ion-input\n      min=\"0\"\n      max=\"59\"\n      (focus)=\"focusHandler()\"\n      [(ngModel)]=\"minutes\" type=\"number\"\n  ></ion-input>\n</div>\n", styles: ["ajf-time>div{display:flex;align-items:center;width:7em}ajf-time>div ion-input{text-align:center}\n"], dependencies: [{ kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i2.IonInput, selector: "ion-input", inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "spellcheck", "step", "type", "value"] }, { kind: "directive", type: i2.NumericValueAccessor, selector: "ion-input[type=number]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: AjfTime, decorators: [{
            type: Component,
            args: [{ selector: 'ajf-time', providers: [AJF_TIME_CONTROL_VALUE_ACCESSOR], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div>\n  <ion-input\n      min=\"0\"\n      max=\"23\" \n      (focus)=\"focusHandler()\"\n      [(ngModel)]=\"hours\"\n      type=\"number\"\n  ></ion-input>\n  :\n  <ion-input\n      min=\"0\"\n      max=\"59\"\n      (focus)=\"focusHandler()\"\n      [(ngModel)]=\"minutes\" type=\"number\"\n  ></ion-input>\n</div>\n", styles: ["ajf-time>div{display:flex;align-items:center;width:7em}ajf-time>div ion-input{text-align:center}\n"] }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2lvbmljL3RpbWUvc3JjL3RpbWUudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9pb25pYy90aW1lL3NyYy90aW1lLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHO0FBRUgsT0FBTyxFQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBRVYsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBdUIsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUV2RSxNQUFNLENBQUMsTUFBTSwrQkFBK0IsR0FBUTtJQUNsRCxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDO0lBQ3RDLEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQVVGLE1BQU0sT0FBTyxPQUFRLFNBQVEsSUFBSTtJQUMvQjtRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQzs7b0dBSFUsT0FBTzt3RkFBUCxPQUFPLG1DQUpQLENBQUMsK0JBQStCLENBQUMsaURDMUM5QyxrVUFnQkE7MkZEOEJhLE9BQU87a0JBUm5CLFNBQVM7K0JBQ0UsVUFBVSxhQUdULENBQUMsK0JBQStCLENBQUMsaUJBQzdCLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKEMpIEdudWNvb3Agc29jLiBjb29wLlxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpLlxuICpcbiAqIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLFxuICogb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm9cbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8uXG4gKlxuICovXG5cbmltcG9ydCB7QWpmVGltZSBhcyBCYXNlfSBmcm9tICdAYWpmL2NvcmUvdGltZSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBmb3J3YXJkUmVmLFxuICBPbkRlc3Ryb3ksXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjb25zdCBBSkZfVElNRV9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBBamZUaW1lKSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhamYtdGltZScsXG4gIHRlbXBsYXRlVXJsOiAndGltZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RpbWUuc2NzcyddLFxuICBwcm92aWRlcnM6IFtBSkZfVElNRV9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEFqZlRpbWUgZXh0ZW5kcyBCYXNlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cbn1cbiIsIjxkaXY+XG4gIDxpb24taW5wdXRcbiAgICAgIG1pbj1cIjBcIlxuICAgICAgbWF4PVwiMjNcIiBcbiAgICAgIChmb2N1cyk9XCJmb2N1c0hhbmRsZXIoKVwiXG4gICAgICBbKG5nTW9kZWwpXT1cImhvdXJzXCJcbiAgICAgIHR5cGU9XCJudW1iZXJcIlxuICA+PC9pb24taW5wdXQ+XG4gIDpcbiAgPGlvbi1pbnB1dFxuICAgICAgbWluPVwiMFwiXG4gICAgICBtYXg9XCI1OVwiXG4gICAgICAoZm9jdXMpPVwiZm9jdXNIYW5kbGVyKClcIlxuICAgICAgWyhuZ01vZGVsKV09XCJtaW51dGVzXCIgdHlwZT1cIm51bWJlclwiXG4gID48L2lvbi1pbnB1dD5cbjwvZGl2PlxuIl19