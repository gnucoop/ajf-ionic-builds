import { __extends } from "tslib";
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
import { AjfFieldService as CoreService, AjfFieldType, AjfReadOnlyFieldComponent, AjfReadOnlyTableFieldComponent } from '@ajf/core/forms';
import { Injectable } from '@angular/core';
import { AjfBarcodeFieldComponent } from './barcode-field';
import { AjfBooleanFieldComponent } from './boolean-field';
import { AjfDateFieldComponent } from './date-field';
import { AjfDateInputFieldComponent } from './date-input-field';
import { AjfEmptyFieldComponent } from './empty-field';
import { AjfFormulaFieldComponent } from './formula-field';
import { AjfInputFieldComponent } from './input-field';
import { AjfMultipleChoiceFieldComponent } from './multiple-choice-field';
import { AjfNumberFieldComponent } from './number-field';
import { AjfSingleChoiceFieldComponent } from './single-choice-field';
import { AjfTableFieldComponent } from './table-field';
import { AjfTextareaFieldComponent } from './textarea-field';
import { AjfTimeFieldComponent } from './time-field';
import * as i0 from "@angular/core";
var AjfFieldService = /** @class */ (function (_super) {
    __extends(AjfFieldService, _super);
    function AjfFieldService() {
        var _this = _super.call(this) || this;
        _this.componentsMap[AjfFieldType.String] = {
            component: AjfInputFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent
        };
        _this.componentsMap[AjfFieldType.Text] = {
            component: AjfTextareaFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent
        };
        _this.componentsMap[AjfFieldType.Number] = {
            component: AjfNumberFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent
        };
        _this.componentsMap[AjfFieldType.Boolean] = {
            component: AjfBooleanFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent
        };
        _this.componentsMap[AjfFieldType.Formula] = {
            component: AjfFormulaFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent
        };
        _this.componentsMap[AjfFieldType.Date] = {
            component: AjfDateFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent
        };
        _this.componentsMap[AjfFieldType.DateInput] = {
            component: AjfDateInputFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent
        };
        _this.componentsMap[AjfFieldType.Table] = {
            component: AjfTableFieldComponent,
            readOnlyComponent: AjfReadOnlyTableFieldComponent
        };
        _this.componentsMap[AjfFieldType.Empty] = {
            component: AjfEmptyFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent
        };
        _this.componentsMap[AjfFieldType.SingleChoice] = {
            component: AjfSingleChoiceFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent
        };
        _this.componentsMap[AjfFieldType.MultipleChoice] = {
            component: AjfMultipleChoiceFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent
        };
        _this.componentsMap[AjfFieldType.Time] = {
            component: AjfTimeFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent
        };
        _this.componentsMap[AjfFieldType.Barcode] = {
            component: AjfBarcodeFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent
        };
        return _this;
    }
    AjfFieldService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    AjfFieldService.ctorParameters = function () { return []; };
    AjfFieldService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AjfFieldService_Factory() { return new AjfFieldService(); }, token: AjfFieldService, providedIn: "root" });
    return AjfFieldService;
}(CoreService));
export { AjfFieldService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9pb25pYy9mb3Jtcy9maWVsZC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFFSCxPQUFPLEVBQ0wsZUFBZSxJQUFJLFdBQVcsRUFDOUIsWUFBWSxFQUNaLHlCQUF5QixFQUN6Qiw4QkFBOEIsRUFDL0IsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNuRCxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUM5RCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBQywrQkFBK0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3hFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyw2QkFBNkIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3BFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMzRCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxjQUFjLENBQUM7O0FBRW5EO0lBQ3FDLG1DQUFXO0lBQzlDO1FBQUEsWUFDRSxpQkFBTyxTQXFEUjtRQXBEQyxLQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsR0FBRztZQUN4QyxTQUFTLEVBQUUsc0JBQXNCO1lBQ2pDLGlCQUFpQixFQUFFLHlCQUF5QjtTQUM3QyxDQUFDO1FBQ0YsS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFDdEMsU0FBUyxFQUFFLHlCQUF5QjtZQUNwQyxpQkFBaUIsRUFBRSx5QkFBeUI7U0FDN0MsQ0FBQztRQUNGLEtBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHO1lBQ3hDLFNBQVMsRUFBRSx1QkFBdUI7WUFDbEMsaUJBQWlCLEVBQUUseUJBQXlCO1NBQzdDLENBQUM7UUFDRixLQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRztZQUN6QyxTQUFTLEVBQUUsd0JBQXdCO1lBQ25DLGlCQUFpQixFQUFFLHlCQUF5QjtTQUM3QyxDQUFDO1FBQ0YsS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUc7WUFDekMsU0FBUyxFQUFFLHdCQUF3QjtZQUNuQyxpQkFBaUIsRUFBRSx5QkFBeUI7U0FDN0MsQ0FBQztRQUNGLEtBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHO1lBQ3RDLFNBQVMsRUFBRSxxQkFBcUI7WUFDaEMsaUJBQWlCLEVBQUUseUJBQXlCO1NBQzdDLENBQUM7UUFDRixLQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRztZQUMzQyxTQUFTLEVBQUUsMEJBQTBCO1lBQ3JDLGlCQUFpQixFQUFFLHlCQUF5QjtTQUM3QyxDQUFDO1FBQ0YsS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUc7WUFDdkMsU0FBUyxFQUFFLHNCQUFzQjtZQUNqQyxpQkFBaUIsRUFBRSw4QkFBOEI7U0FDbEQsQ0FBQztRQUNGLEtBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHO1lBQ3ZDLFNBQVMsRUFBRSxzQkFBc0I7WUFDakMsaUJBQWlCLEVBQUUseUJBQXlCO1NBQzdDLENBQUM7UUFDRixLQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsR0FBRztZQUM5QyxTQUFTLEVBQUUsNkJBQTZCO1lBQ3hDLGlCQUFpQixFQUFFLHlCQUF5QjtTQUM3QyxDQUFDO1FBQ0YsS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLEdBQUc7WUFDaEQsU0FBUyxFQUFFLCtCQUErQjtZQUMxQyxpQkFBaUIsRUFBRSx5QkFBeUI7U0FDN0MsQ0FBQztRQUNGLEtBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHO1lBQ3RDLFNBQVMsRUFBRSxxQkFBcUI7WUFDaEMsaUJBQWlCLEVBQUUseUJBQXlCO1NBQzdDLENBQUM7UUFDRixLQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRztZQUN6QyxTQUFTLEVBQUUsd0JBQXdCO1lBQ25DLGlCQUFpQixFQUFFLHlCQUF5QjtTQUM3QyxDQUFDOztJQUNKLENBQUM7O2dCQXhERixVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7OzswQkE1Q2hDO0NBcUdDLEFBekRELENBQ3FDLFdBQVcsR0F3RC9DO1NBeERZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKEMpIEdudWNvb3Agc29jLiBjb29wLlxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpLlxuICpcbiAqIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLFxuICogb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm9cbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8uXG4gKlxuICovXG5cbmltcG9ydCB7XG4gIEFqZkZpZWxkU2VydmljZSBhcyBDb3JlU2VydmljZSxcbiAgQWpmRmllbGRUeXBlLFxuICBBamZSZWFkT25seUZpZWxkQ29tcG9uZW50LFxuICBBamZSZWFkT25seVRhYmxlRmllbGRDb21wb25lbnRcbn0gZnJvbSAnQGFqZi9jb3JlL2Zvcm1zJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7QWpmQmFyY29kZUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL2JhcmNvZGUtZmllbGQnO1xuaW1wb3J0IHtBamZCb29sZWFuRmllbGRDb21wb25lbnR9IGZyb20gJy4vYm9vbGVhbi1maWVsZCc7XG5pbXBvcnQge0FqZkRhdGVGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9kYXRlLWZpZWxkJztcbmltcG9ydCB7QWpmRGF0ZUlucHV0RmllbGRDb21wb25lbnR9IGZyb20gJy4vZGF0ZS1pbnB1dC1maWVsZCc7XG5pbXBvcnQge0FqZkVtcHR5RmllbGRDb21wb25lbnR9IGZyb20gJy4vZW1wdHktZmllbGQnO1xuaW1wb3J0IHtBamZGb3JtdWxhRmllbGRDb21wb25lbnR9IGZyb20gJy4vZm9ybXVsYS1maWVsZCc7XG5pbXBvcnQge0FqZklucHV0RmllbGRDb21wb25lbnR9IGZyb20gJy4vaW5wdXQtZmllbGQnO1xuaW1wb3J0IHtBamZNdWx0aXBsZUNob2ljZUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL211bHRpcGxlLWNob2ljZS1maWVsZCc7XG5pbXBvcnQge0FqZk51bWJlckZpZWxkQ29tcG9uZW50fSBmcm9tICcuL251bWJlci1maWVsZCc7XG5pbXBvcnQge0FqZlNpbmdsZUNob2ljZUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL3NpbmdsZS1jaG9pY2UtZmllbGQnO1xuaW1wb3J0IHtBamZUYWJsZUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL3RhYmxlLWZpZWxkJztcbmltcG9ydCB7QWpmVGV4dGFyZWFGaWVsZENvbXBvbmVudH0gZnJvbSAnLi90ZXh0YXJlYS1maWVsZCc7XG5pbXBvcnQge0FqZlRpbWVGaWVsZENvbXBvbmVudH0gZnJvbSAnLi90aW1lLWZpZWxkJztcblxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgQWpmRmllbGRTZXJ2aWNlIGV4dGVuZHMgQ29yZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY29tcG9uZW50c01hcFtBamZGaWVsZFR5cGUuU3RyaW5nXSA9IHtcbiAgICAgIGNvbXBvbmVudDogQWpmSW5wdXRGaWVsZENvbXBvbmVudCxcbiAgICAgIHJlYWRPbmx5Q29tcG9uZW50OiBBamZSZWFkT25seUZpZWxkQ29tcG9uZW50XG4gICAgfTtcbiAgICB0aGlzLmNvbXBvbmVudHNNYXBbQWpmRmllbGRUeXBlLlRleHRdID0ge1xuICAgICAgY29tcG9uZW50OiBBamZUZXh0YXJlYUZpZWxkQ29tcG9uZW50LFxuICAgICAgcmVhZE9ubHlDb21wb25lbnQ6IEFqZlJlYWRPbmx5RmllbGRDb21wb25lbnRcbiAgICB9O1xuICAgIHRoaXMuY29tcG9uZW50c01hcFtBamZGaWVsZFR5cGUuTnVtYmVyXSA9IHtcbiAgICAgIGNvbXBvbmVudDogQWpmTnVtYmVyRmllbGRDb21wb25lbnQsXG4gICAgICByZWFkT25seUNvbXBvbmVudDogQWpmUmVhZE9ubHlGaWVsZENvbXBvbmVudFxuICAgIH07XG4gICAgdGhpcy5jb21wb25lbnRzTWFwW0FqZkZpZWxkVHlwZS5Cb29sZWFuXSA9IHtcbiAgICAgIGNvbXBvbmVudDogQWpmQm9vbGVhbkZpZWxkQ29tcG9uZW50LFxuICAgICAgcmVhZE9ubHlDb21wb25lbnQ6IEFqZlJlYWRPbmx5RmllbGRDb21wb25lbnRcbiAgICB9O1xuICAgIHRoaXMuY29tcG9uZW50c01hcFtBamZGaWVsZFR5cGUuRm9ybXVsYV0gPSB7XG4gICAgICBjb21wb25lbnQ6IEFqZkZvcm11bGFGaWVsZENvbXBvbmVudCxcbiAgICAgIHJlYWRPbmx5Q29tcG9uZW50OiBBamZSZWFkT25seUZpZWxkQ29tcG9uZW50XG4gICAgfTtcbiAgICB0aGlzLmNvbXBvbmVudHNNYXBbQWpmRmllbGRUeXBlLkRhdGVdID0ge1xuICAgICAgY29tcG9uZW50OiBBamZEYXRlRmllbGRDb21wb25lbnQsXG4gICAgICByZWFkT25seUNvbXBvbmVudDogQWpmUmVhZE9ubHlGaWVsZENvbXBvbmVudFxuICAgIH07XG4gICAgdGhpcy5jb21wb25lbnRzTWFwW0FqZkZpZWxkVHlwZS5EYXRlSW5wdXRdID0ge1xuICAgICAgY29tcG9uZW50OiBBamZEYXRlSW5wdXRGaWVsZENvbXBvbmVudCxcbiAgICAgIHJlYWRPbmx5Q29tcG9uZW50OiBBamZSZWFkT25seUZpZWxkQ29tcG9uZW50XG4gICAgfTtcbiAgICB0aGlzLmNvbXBvbmVudHNNYXBbQWpmRmllbGRUeXBlLlRhYmxlXSA9IHtcbiAgICAgIGNvbXBvbmVudDogQWpmVGFibGVGaWVsZENvbXBvbmVudCxcbiAgICAgIHJlYWRPbmx5Q29tcG9uZW50OiBBamZSZWFkT25seVRhYmxlRmllbGRDb21wb25lbnRcbiAgICB9O1xuICAgIHRoaXMuY29tcG9uZW50c01hcFtBamZGaWVsZFR5cGUuRW1wdHldID0ge1xuICAgICAgY29tcG9uZW50OiBBamZFbXB0eUZpZWxkQ29tcG9uZW50LFxuICAgICAgcmVhZE9ubHlDb21wb25lbnQ6IEFqZlJlYWRPbmx5RmllbGRDb21wb25lbnRcbiAgICB9O1xuICAgIHRoaXMuY29tcG9uZW50c01hcFtBamZGaWVsZFR5cGUuU2luZ2xlQ2hvaWNlXSA9IHtcbiAgICAgIGNvbXBvbmVudDogQWpmU2luZ2xlQ2hvaWNlRmllbGRDb21wb25lbnQsXG4gICAgICByZWFkT25seUNvbXBvbmVudDogQWpmUmVhZE9ubHlGaWVsZENvbXBvbmVudFxuICAgIH07XG4gICAgdGhpcy5jb21wb25lbnRzTWFwW0FqZkZpZWxkVHlwZS5NdWx0aXBsZUNob2ljZV0gPSB7XG4gICAgICBjb21wb25lbnQ6IEFqZk11bHRpcGxlQ2hvaWNlRmllbGRDb21wb25lbnQsXG4gICAgICByZWFkT25seUNvbXBvbmVudDogQWpmUmVhZE9ubHlGaWVsZENvbXBvbmVudFxuICAgIH07XG4gICAgdGhpcy5jb21wb25lbnRzTWFwW0FqZkZpZWxkVHlwZS5UaW1lXSA9IHtcbiAgICAgIGNvbXBvbmVudDogQWpmVGltZUZpZWxkQ29tcG9uZW50LFxuICAgICAgcmVhZE9ubHlDb21wb25lbnQ6IEFqZlJlYWRPbmx5RmllbGRDb21wb25lbnRcbiAgICB9O1xuICAgIHRoaXMuY29tcG9uZW50c01hcFtBamZGaWVsZFR5cGUuQmFyY29kZV0gPSB7XG4gICAgICBjb21wb25lbnQ6IEFqZkJhcmNvZGVGaWVsZENvbXBvbmVudCxcbiAgICAgIHJlYWRPbmx5Q29tcG9uZW50OiBBamZSZWFkT25seUZpZWxkQ29tcG9uZW50XG4gICAgfTtcbiAgfVxufVxuIl19