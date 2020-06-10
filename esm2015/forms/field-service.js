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
import { AjfFieldService as CoreService, AjfFieldType, AjfFileFieldComponent, AjfImageFieldComponent, AjfReadOnlyFieldComponent, AjfReadOnlyFileFieldComponent, AjfReadOnlyImageFieldComponent, AjfReadOnlyTableFieldComponent, AjfReadOnlyVideoUrlFieldComponent, } from '@ajf/core/forms';
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
import { AjfVideoUrlFieldComponent } from './video-url-field';
import * as i0 from "@angular/core";
let AjfFieldService = /** @class */ (() => {
    class AjfFieldService extends CoreService {
        constructor() {
            super();
            this.componentsMap[AjfFieldType.String] = {
                component: AjfInputFieldComponent,
                readOnlyComponent: AjfReadOnlyFieldComponent
            };
            this.componentsMap[AjfFieldType.Text] = {
                component: AjfTextareaFieldComponent,
                readOnlyComponent: AjfReadOnlyFieldComponent
            };
            this.componentsMap[AjfFieldType.Number] = {
                component: AjfNumberFieldComponent,
                readOnlyComponent: AjfReadOnlyFieldComponent
            };
            this.componentsMap[AjfFieldType.Boolean] = {
                component: AjfBooleanFieldComponent,
                readOnlyComponent: AjfReadOnlyFieldComponent
            };
            this.componentsMap[AjfFieldType.Formula] = {
                component: AjfFormulaFieldComponent,
                readOnlyComponent: AjfReadOnlyFieldComponent
            };
            this.componentsMap[AjfFieldType.Date] = {
                component: AjfDateFieldComponent,
                readOnlyComponent: AjfReadOnlyFieldComponent
            };
            this.componentsMap[AjfFieldType.DateInput] = {
                component: AjfDateInputFieldComponent,
                readOnlyComponent: AjfReadOnlyFieldComponent
            };
            this.componentsMap[AjfFieldType.Table] = {
                component: AjfTableFieldComponent,
                readOnlyComponent: AjfReadOnlyTableFieldComponent
            };
            this.componentsMap[AjfFieldType.Empty] = {
                component: AjfEmptyFieldComponent,
                readOnlyComponent: AjfReadOnlyFieldComponent
            };
            this.componentsMap[AjfFieldType.SingleChoice] = {
                component: AjfSingleChoiceFieldComponent,
                readOnlyComponent: AjfReadOnlyFieldComponent
            };
            this.componentsMap[AjfFieldType.MultipleChoice] = {
                component: AjfMultipleChoiceFieldComponent,
                readOnlyComponent: AjfReadOnlyFieldComponent
            };
            this.componentsMap[AjfFieldType.Time] = {
                component: AjfTimeFieldComponent,
                readOnlyComponent: AjfReadOnlyFieldComponent
            };
            this.componentsMap[AjfFieldType.Barcode] = {
                component: AjfBarcodeFieldComponent,
                readOnlyComponent: AjfReadOnlyFieldComponent
            };
            this.componentsMap[AjfFieldType.File] = {
                component: AjfFileFieldComponent,
                readOnlyComponent: AjfReadOnlyFileFieldComponent
            };
            this.componentsMap[AjfFieldType.Image] = {
                component: AjfImageFieldComponent,
                readOnlyComponent: AjfReadOnlyImageFieldComponent
            };
            this.componentsMap[AjfFieldType.VideoUrl] = {
                component: AjfVideoUrlFieldComponent,
                readOnlyComponent: AjfReadOnlyVideoUrlFieldComponent
            };
        }
    }
    AjfFieldService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    AjfFieldService.ctorParameters = () => [];
    AjfFieldService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AjfFieldService_Factory() { return new AjfFieldService(); }, token: AjfFieldService, providedIn: "root" });
    return AjfFieldService;
})();
export { AjfFieldService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9pb25pYy9mb3Jtcy9maWVsZC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRztBQUVILE9BQU8sRUFDTCxlQUFlLElBQUksV0FBVyxFQUM5QixZQUFZLEVBQ1oscUJBQXFCLEVBQ3JCLHNCQUFzQixFQUN0Qix5QkFBeUIsRUFDekIsNkJBQTZCLEVBQzdCLDhCQUE4QixFQUM5Qiw4QkFBOEIsRUFDOUIsaUNBQWlDLEdBQ2xDLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDbkQsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDOUQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUMsK0JBQStCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sa0JBQWtCLENBQUM7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O2FBQ2xELENBQUM7WUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRztnQkFDMUMsU0FBUyxFQUFFLHlCQUF5QjtnQkFDcEMsaUJBQWlCLEVBQUUsaUNBQWlDO2FBQ3JELENBQUM7UUFDSixDQUFDOzs7Z0JBcEVGLFVBQVUsU0FBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUM7Ozs7OzBCQWxEaEM7S0F1SEM7U0FwRVksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoQykgR251Y29vcCBzb2MuIGNvb3AuXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhc1xuICogcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsXG4gKiBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVyb1xuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpLlxuICogSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLy5cbiAqXG4gKi9cblxuaW1wb3J0IHtcbiAgQWpmRmllbGRTZXJ2aWNlIGFzIENvcmVTZXJ2aWNlLFxuICBBamZGaWVsZFR5cGUsXG4gIEFqZkZpbGVGaWVsZENvbXBvbmVudCxcbiAgQWpmSW1hZ2VGaWVsZENvbXBvbmVudCxcbiAgQWpmUmVhZE9ubHlGaWVsZENvbXBvbmVudCxcbiAgQWpmUmVhZE9ubHlGaWxlRmllbGRDb21wb25lbnQsXG4gIEFqZlJlYWRPbmx5SW1hZ2VGaWVsZENvbXBvbmVudCxcbiAgQWpmUmVhZE9ubHlUYWJsZUZpZWxkQ29tcG9uZW50LFxuICBBamZSZWFkT25seVZpZGVvVXJsRmllbGRDb21wb25lbnQsXG59IGZyb20gJ0BhamYvY29yZS9mb3Jtcyc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0FqZkJhcmNvZGVGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9iYXJjb2RlLWZpZWxkJztcbmltcG9ydCB7QWpmQm9vbGVhbkZpZWxkQ29tcG9uZW50fSBmcm9tICcuL2Jvb2xlYW4tZmllbGQnO1xuaW1wb3J0IHtBamZEYXRlRmllbGRDb21wb25lbnR9IGZyb20gJy4vZGF0ZS1maWVsZCc7XG5pbXBvcnQge0FqZkRhdGVJbnB1dEZpZWxkQ29tcG9uZW50fSBmcm9tICcuL2RhdGUtaW5wdXQtZmllbGQnO1xuaW1wb3J0IHtBamZFbXB0eUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL2VtcHR5LWZpZWxkJztcbmltcG9ydCB7QWpmRm9ybXVsYUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL2Zvcm11bGEtZmllbGQnO1xuaW1wb3J0IHtBamZJbnB1dEZpZWxkQ29tcG9uZW50fSBmcm9tICcuL2lucHV0LWZpZWxkJztcbmltcG9ydCB7QWpmTXVsdGlwbGVDaG9pY2VGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9tdWx0aXBsZS1jaG9pY2UtZmllbGQnO1xuaW1wb3J0IHtBamZOdW1iZXJGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9udW1iZXItZmllbGQnO1xuaW1wb3J0IHtBamZTaW5nbGVDaG9pY2VGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9zaW5nbGUtY2hvaWNlLWZpZWxkJztcbmltcG9ydCB7QWpmVGFibGVGaWVsZENvbXBvbmVudH0gZnJvbSAnLi90YWJsZS1maWVsZCc7XG5pbXBvcnQge0FqZlRleHRhcmVhRmllbGRDb21wb25lbnR9IGZyb20gJy4vdGV4dGFyZWEtZmllbGQnO1xuaW1wb3J0IHtBamZUaW1lRmllbGRDb21wb25lbnR9IGZyb20gJy4vdGltZS1maWVsZCc7XG5pbXBvcnQge0FqZlZpZGVvVXJsRmllbGRDb21wb25lbnR9IGZyb20gJy4vdmlkZW8tdXJsLWZpZWxkJztcblxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgQWpmRmllbGRTZXJ2aWNlIGV4dGVuZHMgQ29yZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY29tcG9uZW50c01hcFtBamZGaWVsZFR5cGUuU3RyaW5nXSA9IHtcbiAgICAgIGNvbXBvbmVudDogQWpmSW5wdXRGaWVsZENvbXBvbmVudCxcbiAgICAgIHJlYWRPbmx5Q29tcG9uZW50OiBBamZSZWFkT25seUZpZWxkQ29tcG9uZW50XG4gICAgfTtcbiAgICB0aGlzLmNvbXBvbmVudHNNYXBbQWpmRmllbGRUeXBlLlRleHRdID0ge1xuICAgICAgY29tcG9uZW50OiBBamZUZXh0YXJlYUZpZWxkQ29tcG9uZW50LFxuICAgICAgcmVhZE9ubHlDb21wb25lbnQ6IEFqZlJlYWRPbmx5RmllbGRDb21wb25lbnRcbiAgICB9O1xuICAgIHRoaXMuY29tcG9uZW50c01hcFtBamZGaWVsZFR5cGUuTnVtYmVyXSA9IHtcbiAgICAgIGNvbXBvbmVudDogQWpmTnVtYmVyRmllbGRDb21wb25lbnQsXG4gICAgICByZWFkT25seUNvbXBvbmVudDogQWpmUmVhZE9ubHlGaWVsZENvbXBvbmVudFxuICAgIH07XG4gICAgdGhpcy5jb21wb25lbnRzTWFwW0FqZkZpZWxkVHlwZS5Cb29sZWFuXSA9IHtcbiAgICAgIGNvbXBvbmVudDogQWpmQm9vbGVhbkZpZWxkQ29tcG9uZW50LFxuICAgICAgcmVhZE9ubHlDb21wb25lbnQ6IEFqZlJlYWRPbmx5RmllbGRDb21wb25lbnRcbiAgICB9O1xuICAgIHRoaXMuY29tcG9uZW50c01hcFtBamZGaWVsZFR5cGUuRm9ybXVsYV0gPSB7XG4gICAgICBjb21wb25lbnQ6IEFqZkZvcm11bGFGaWVsZENvbXBvbmVudCxcbiAgICAgIHJlYWRPbmx5Q29tcG9uZW50OiBBamZSZWFkT25seUZpZWxkQ29tcG9uZW50XG4gICAgfTtcbiAgICB0aGlzLmNvbXBvbmVudHNNYXBbQWpmRmllbGRUeXBlLkRhdGVdID0ge1xuICAgICAgY29tcG9uZW50OiBBamZEYXRlRmllbGRDb21wb25lbnQsXG4gICAgICByZWFkT25seUNvbXBvbmVudDogQWpmUmVhZE9ubHlGaWVsZENvbXBvbmVudFxuICAgIH07XG4gICAgdGhpcy5jb21wb25lbnRzTWFwW0FqZkZpZWxkVHlwZS5EYXRlSW5wdXRdID0ge1xuICAgICAgY29tcG9uZW50OiBBamZEYXRlSW5wdXRGaWVsZENvbXBvbmVudCxcbiAgICAgIHJlYWRPbmx5Q29tcG9uZW50OiBBamZSZWFkT25seUZpZWxkQ29tcG9uZW50XG4gICAgfTtcbiAgICB0aGlzLmNvbXBvbmVudHNNYXBbQWpmRmllbGRUeXBlLlRhYmxlXSA9IHtcbiAgICAgIGNvbXBvbmVudDogQWpmVGFibGVGaWVsZENvbXBvbmVudCxcbiAgICAgIHJlYWRPbmx5Q29tcG9uZW50OiBBamZSZWFkT25seVRhYmxlRmllbGRDb21wb25lbnRcbiAgICB9O1xuICAgIHRoaXMuY29tcG9uZW50c01hcFtBamZGaWVsZFR5cGUuRW1wdHldID0ge1xuICAgICAgY29tcG9uZW50OiBBamZFbXB0eUZpZWxkQ29tcG9uZW50LFxuICAgICAgcmVhZE9ubHlDb21wb25lbnQ6IEFqZlJlYWRPbmx5RmllbGRDb21wb25lbnRcbiAgICB9O1xuICAgIHRoaXMuY29tcG9uZW50c01hcFtBamZGaWVsZFR5cGUuU2luZ2xlQ2hvaWNlXSA9IHtcbiAgICAgIGNvbXBvbmVudDogQWpmU2luZ2xlQ2hvaWNlRmllbGRDb21wb25lbnQsXG4gICAgICByZWFkT25seUNvbXBvbmVudDogQWpmUmVhZE9ubHlGaWVsZENvbXBvbmVudFxuICAgIH07XG4gICAgdGhpcy5jb21wb25lbnRzTWFwW0FqZkZpZWxkVHlwZS5NdWx0aXBsZUNob2ljZV0gPSB7XG4gICAgICBjb21wb25lbnQ6IEFqZk11bHRpcGxlQ2hvaWNlRmllbGRDb21wb25lbnQsXG4gICAgICByZWFkT25seUNvbXBvbmVudDogQWpmUmVhZE9ubHlGaWVsZENvbXBvbmVudFxuICAgIH07XG4gICAgdGhpcy5jb21wb25lbnRzTWFwW0FqZkZpZWxkVHlwZS5UaW1lXSA9IHtcbiAgICAgIGNvbXBvbmVudDogQWpmVGltZUZpZWxkQ29tcG9uZW50LFxuICAgICAgcmVhZE9ubHlDb21wb25lbnQ6IEFqZlJlYWRPbmx5RmllbGRDb21wb25lbnRcbiAgICB9O1xuICAgIHRoaXMuY29tcG9uZW50c01hcFtBamZGaWVsZFR5cGUuQmFyY29kZV0gPSB7XG4gICAgICBjb21wb25lbnQ6IEFqZkJhcmNvZGVGaWVsZENvbXBvbmVudCxcbiAgICAgIHJlYWRPbmx5Q29tcG9uZW50OiBBamZSZWFkT25seUZpZWxkQ29tcG9uZW50XG4gICAgfTtcbiAgICB0aGlzLmNvbXBvbmVudHNNYXBbQWpmRmllbGRUeXBlLkZpbGVdID0ge1xuICAgICAgY29tcG9uZW50OiBBamZGaWxlRmllbGRDb21wb25lbnQsXG4gICAgICByZWFkT25seUNvbXBvbmVudDogQWpmUmVhZE9ubHlGaWxlRmllbGRDb21wb25lbnRcbiAgICB9O1xuICAgIHRoaXMuY29tcG9uZW50c01hcFtBamZGaWVsZFR5cGUuSW1hZ2VdID0ge1xuICAgICAgY29tcG9uZW50OiBBamZJbWFnZUZpZWxkQ29tcG9uZW50LFxuICAgICAgcmVhZE9ubHlDb21wb25lbnQ6IEFqZlJlYWRPbmx5SW1hZ2VGaWVsZENvbXBvbmVudFxuICAgIH07XG4gICAgdGhpcy5jb21wb25lbnRzTWFwW0FqZkZpZWxkVHlwZS5WaWRlb1VybF0gPSB7XG4gICAgICBjb21wb25lbnQ6IEFqZlZpZGVvVXJsRmllbGRDb21wb25lbnQsXG4gICAgICByZWFkT25seUNvbXBvbmVudDogQWpmUmVhZE9ubHlWaWRlb1VybEZpZWxkQ29tcG9uZW50XG4gICAgfTtcbiAgfVxufVxuIl19