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
import { __decorate, __metadata } from "tslib";
import { AjfFormField as CoreFormField } from '@ajf/core/forms';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, ViewEncapsulation } from '@angular/core';
import { AjfFieldService } from './field-service';
let AjfFormField = /** @class */ (() => {
    let AjfFormField = class AjfFormField extends CoreFormField {
        constructor(cdr, cfr, fieldService) {
            super(cdr, cfr);
            this.componentsMap = fieldService.componentsMap;
        }
    };
    AjfFormField = __decorate([
        Component({
            selector: 'ajf-field,ajf-form-field',
            template: "<div\n    [ngClass]=\"'ajf-field-' + (instance|ajfNodeCompleteName)\"\n    [class.ajf-validated]=\"instance.validationResults|ajfFieldIsValid\"\n>\n  <ng-template ajf-field-host></ng-template>\n</div>\n<ng-container *ngIf=\"instance.node.attachments\">\n  <ng-container *ngFor=\"let attachment of instance.node.attachments\">\n    <a [href]=\"attachment.value\" target=\"_blank\">{{attachment.label}}</a>\n  </ng-container>\n</ng-container>\n<ng-container *ngIf=\"!readonly && instance.validationResults\">\n  <div class=\"ajf-errors\">\n    <ng-container *ngFor=\"let res of instance.validationResults\">\n      <div class=\"error\" *ngIf=\"!res.result\">\n        {{ res.error | translate }}\n      </div>\n    </ng-container>\n  </div>\n</ng-container>\n",
            encapsulation: ViewEncapsulation.None,
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: ["ajf-field ion-select{position:relative}ajf-field ion-input,ajf-field ion-textarea{border:dashed 2px #eee}ajf-field .ajf-choices-container{flex-direction:row;align-items:stretch;flex-wrap:wrap;display:flex}ajf-field .ajf-choices-container>ion-radio-group{display:flex;flex-wrap:wrap}ajf-field .ajf-choices-container>ion-radio-group ion-item{--ion-item-border-color: transparent}ajf-field .ajf-choices-container>ion-radio-group ion-item ion-label{margin-right:10px}ajf-field .ajf-choices-container>ion-card{margin-top:0;width:33%;display:flex;font-size:13px;flex-wrap:wrap;flex-basis:21% !important;flex-shrink:3 !important}ajf-field .ajf-choices-container>ion-card>ajf-checkbox-group-item{width:100%;display:flex;flex-direction:column;align-items:stretch;justify-content:center}ajf-field .ajf-choices-container>ion-card>ion-item{font-size:13px;flex:1 0 auto;flex-shrink:3 !important;flex-basis:21% !important;margin:0 10px}ajf-field .ajf-item-container{position:relative}ajf-field .ajf-errors{font-style:italic;padding:5px}ajf-field tr.ajf-row-odd{background-color:gray}ajf-field .ajf-table-container{overflow-x:auto}ajf-field .ajf-table-container table{width:100%}\n"]
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ComponentFactoryResolver, AjfFieldService])
    ], AjfFormField);
    return AjfFormField;
})();
export { AjfFormField };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvaW9uaWMvZm9ybXMvZmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHOztBQUVILE9BQU8sRUFBd0IsWUFBWSxJQUFJLGFBQWEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRXJGLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCx3QkFBd0IsRUFDeEIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQVNoRDtJQUFBLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQWEsU0FBUSxhQUFhO1FBRzdDLFlBQ0ksR0FBc0IsRUFBRSxHQUE2QixFQUFFLFlBQTZCO1lBQ3RGLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUMsYUFBYSxDQUFDO1FBQ2xELENBQUM7S0FHRixDQUFBO0lBVlksWUFBWTtRQVB4QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsMEJBQTBCO1lBQ3BDLGl3QkFBeUI7WUFFekIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7WUFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O1NBQ2hELENBQUM7eUNBS1MsaUJBQWlCLEVBQU8sd0JBQXdCLEVBQWdCLGVBQWU7T0FKN0UsWUFBWSxDQVV4QjtJQUFELG1CQUFDO0tBQUE7U0FWWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChDKSBHbnVjb29wIHNvYy4gY29vcC5cbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSxcbiAqIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKiBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvLlxuICpcbiAqL1xuXG5pbXBvcnQge0FqZkZpZWxkQ29tcG9uZW50c01hcCwgQWpmRm9ybUZpZWxkIGFzIENvcmVGb3JtRmllbGR9IGZyb20gJ0BhamYvY29yZS9mb3Jtcyc7XG5pbXBvcnQge0Jvb2xlYW5JbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0FqZkZpZWxkU2VydmljZX0gZnJvbSAnLi9maWVsZC1zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWpmLWZpZWxkLGFqZi1mb3JtLWZpZWxkJyxcbiAgdGVtcGxhdGVVcmw6ICdmaWVsZC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2ZpZWxkLmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQWpmRm9ybUZpZWxkIGV4dGVuZHMgQ29yZUZvcm1GaWVsZCB7XG4gIHJlYWRvbmx5IGNvbXBvbmVudHNNYXA6IEFqZkZpZWxkQ29tcG9uZW50c01hcDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIGNmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBmaWVsZFNlcnZpY2U6IEFqZkZpZWxkU2VydmljZSkge1xuICAgIHN1cGVyKGNkciwgY2ZyKTtcbiAgICB0aGlzLmNvbXBvbmVudHNNYXAgPSBmaWVsZFNlcnZpY2UuY29tcG9uZW50c01hcDtcbiAgfVxuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9yZWFkb25seTogQm9vbGVhbklucHV0O1xufVxuIl19