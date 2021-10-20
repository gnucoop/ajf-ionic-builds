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
import { AJF_WARNING_ALERT_SERVICE, AjfBaseFieldComponent, AjfFormRendererService, } from '@ajf/core/forms';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, ViewEncapsulation, } from '@angular/core';
import { AjfWarningAlertService } from './warning-alert-service';
import * as i0 from "@angular/core";
import * as i1 from "@ajf/core/forms";
import * as i2 from "@ionic/angular";
import * as i3 from "@ajf/ionic/calendar";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
import * as i6 from "./warning-alert-service";
export class AjfDateFieldComponent extends AjfBaseFieldComponent {
    constructor(cdr, service, was) {
        super(cdr, service, was);
    }
}
AjfDateFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: AjfDateFieldComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.AjfFormRendererService }, { token: AJF_WARNING_ALERT_SERVICE }], target: i0.ɵɵFactoryTarget.Component });
AjfDateFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-next.15", type: AjfDateFieldComponent, selector: "ng-component", usesInheritance: true, ngImport: i0, template: "<ion-item>\n  <ajf-calendar\n      *ngIf=\"control|async as ctrl\"\n      selectionMode=\"day\"\n      [dateOnlyForDay]=\"true\"\n      [minDate]=\"instance.node.minDate|ajfDateValue\"\n      [maxDate]=\"instance.node.maxDate|ajfDateValue\"\n      [formControl]=\"ctrl!\"></ajf-calendar>\n</ion-item>\n", styles: ["\n"], components: [{ type: i2.IonItem, selector: "ion-item", inputs: ["button", "color", "detail", "detailIcon", "disabled", "download", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] }, { type: i3.AjfCalendarComponent, selector: "ajf-calendar" }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i5.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], pipes: { "ajfDateValue": i1.AjfDateValuePipe, "async": i4.AsyncPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: AjfDateFieldComponent, decorators: [{
            type: Component,
            args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ion-item>\n  <ajf-calendar\n      *ngIf=\"control|async as ctrl\"\n      selectionMode=\"day\"\n      [dateOnlyForDay]=\"true\"\n      [minDate]=\"instance.node.minDate|ajfDateValue\"\n      [maxDate]=\"instance.node.maxDate|ajfDateValue\"\n      [formControl]=\"ctrl!\"></ajf-calendar>\n</ion-item>\n", styles: ["\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.AjfFormRendererService }, { type: i6.AjfWarningAlertService, decorators: [{
                    type: Inject,
                    args: [AJF_WARNING_ALERT_SERVICE]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9pb25pYy9mb3Jtcy9kYXRlLWZpZWxkLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2lvbmljL2Zvcm1zL2RhdGUtZmllbGQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFFSCxPQUFPLEVBQ0wseUJBQXlCLEVBQ3pCLHFCQUFxQixFQUVyQixzQkFBc0IsR0FDdkIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsTUFBTSxFQUNOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7QUFPL0QsTUFBTSxPQUFPLHFCQUFzQixTQUFRLHFCQUEyQztJQUNwRixZQUNFLEdBQXNCLEVBQ3RCLE9BQStCLEVBQ0ksR0FBMkI7UUFFOUQsS0FBSyxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7MEhBUFUscUJBQXFCLHlGQUl0Qix5QkFBeUI7OEdBSnhCLHFCQUFxQiwyRUMzQ2xDLGdUQVNBO21HRGtDYSxxQkFBcUI7a0JBTmpDLFNBQVM7c0NBR1MsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSTs7MEJBTWxDLE1BQU07MkJBQUMseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChDKSBHbnVjb29wIHNvYy4gY29vcC5cbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSxcbiAqIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKiBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvLlxuICpcbiAqL1xuXG5pbXBvcnQge1xuICBBSkZfV0FSTklOR19BTEVSVF9TRVJWSUNFLFxuICBBamZCYXNlRmllbGRDb21wb25lbnQsXG4gIEFqZkRhdGVGaWVsZEluc3RhbmNlLFxuICBBamZGb3JtUmVuZGVyZXJTZXJ2aWNlLFxufSBmcm9tICdAYWpmL2NvcmUvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEluamVjdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0FqZldhcm5pbmdBbGVydFNlcnZpY2V9IGZyb20gJy4vd2FybmluZy1hbGVydC1zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogJ2RhdGUtZmllbGQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXRlLWZpZWxkLmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQWpmRGF0ZUZpZWxkQ29tcG9uZW50IGV4dGVuZHMgQWpmQmFzZUZpZWxkQ29tcG9uZW50PEFqZkRhdGVGaWVsZEluc3RhbmNlPiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgc2VydmljZTogQWpmRm9ybVJlbmRlcmVyU2VydmljZSxcbiAgICBASW5qZWN0KEFKRl9XQVJOSU5HX0FMRVJUX1NFUlZJQ0UpIHdhczogQWpmV2FybmluZ0FsZXJ0U2VydmljZSxcbiAgKSB7XG4gICAgc3VwZXIoY2RyLCBzZXJ2aWNlLCB3YXMpO1xuICB9XG59XG4iLCI8aW9uLWl0ZW0+XG4gIDxhamYtY2FsZW5kYXJcbiAgICAgICpuZ0lmPVwiY29udHJvbHxhc3luYyBhcyBjdHJsXCJcbiAgICAgIHNlbGVjdGlvbk1vZGU9XCJkYXlcIlxuICAgICAgW2RhdGVPbmx5Rm9yRGF5XT1cInRydWVcIlxuICAgICAgW21pbkRhdGVdPVwiaW5zdGFuY2Uubm9kZS5taW5EYXRlfGFqZkRhdGVWYWx1ZVwiXG4gICAgICBbbWF4RGF0ZV09XCJpbnN0YW5jZS5ub2RlLm1heERhdGV8YWpmRGF0ZVZhbHVlXCJcbiAgICAgIFtmb3JtQ29udHJvbF09XCJjdHJsIVwiPjwvYWpmLWNhbGVuZGFyPlxuPC9pb24taXRlbT5cbiJdfQ==