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
import { AjfFieldService as CoreService, AjfFieldType, AjfFileFieldComponent, AjfImageFieldComponent, AjfReadOnlyFieldComponent, AjfReadOnlyFileFieldComponent, AjfReadOnlyImageFieldComponent, AjfReadOnlySelectFieldComponent, AjfReadOnlyTableFieldComponent, AjfReadOnlyVideoUrlFieldComponent, } from '@ajf/core/forms';
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
import { AjfRangeFieldComponent } from './range-field';
import { AjfSingleChoiceFieldComponent } from './single-choice-field';
import { AjfTableFieldComponent } from './table-field';
import { AjfTextareaFieldComponent } from './textarea-field';
import { AjfTimeFieldComponent } from './time-field';
import { AjfVideoUrlFieldComponent } from './video-url-field';
import * as i0 from "@angular/core";
export class AjfFieldService extends CoreService {
    constructor() {
        super();
        this.componentsMap[AjfFieldType.String] = {
            component: AjfInputFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent,
        };
        this.componentsMap[AjfFieldType.Text] = {
            component: AjfTextareaFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent,
        };
        this.componentsMap[AjfFieldType.Number] = {
            component: AjfNumberFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent,
        };
        this.componentsMap[AjfFieldType.Boolean] = {
            component: AjfBooleanFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent,
        };
        this.componentsMap[AjfFieldType.Formula] = {
            component: AjfFormulaFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent,
        };
        this.componentsMap[AjfFieldType.Date] = {
            component: AjfDateFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent,
        };
        this.componentsMap[AjfFieldType.DateInput] = {
            component: AjfDateInputFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent,
        };
        this.componentsMap[AjfFieldType.Table] = {
            component: AjfTableFieldComponent,
            readOnlyComponent: AjfReadOnlyTableFieldComponent,
        };
        this.componentsMap[AjfFieldType.Empty] = {
            component: AjfEmptyFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent,
        };
        this.componentsMap[AjfFieldType.SingleChoice] = {
            component: AjfSingleChoiceFieldComponent,
            readOnlyComponent: AjfReadOnlySelectFieldComponent,
        };
        this.componentsMap[AjfFieldType.MultipleChoice] = {
            component: AjfMultipleChoiceFieldComponent,
            readOnlyComponent: AjfReadOnlySelectFieldComponent,
        };
        this.componentsMap[AjfFieldType.Time] = {
            component: AjfTimeFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent,
        };
        this.componentsMap[AjfFieldType.Barcode] = {
            component: AjfBarcodeFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent,
        };
        this.componentsMap[AjfFieldType.File] = {
            component: AjfFileFieldComponent,
            readOnlyComponent: AjfReadOnlyFileFieldComponent,
        };
        this.componentsMap[AjfFieldType.Image] = {
            component: AjfImageFieldComponent,
            readOnlyComponent: AjfReadOnlyImageFieldComponent,
        };
        this.componentsMap[AjfFieldType.VideoUrl] = {
            component: AjfVideoUrlFieldComponent,
            readOnlyComponent: AjfReadOnlyVideoUrlFieldComponent,
        };
        this.componentsMap[AjfFieldType.Range] = {
            component: AjfRangeFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent,
        };
    }
}
AjfFieldService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: AjfFieldService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
AjfFieldService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: AjfFieldService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: AjfFieldService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9pb25pYy9mb3Jtcy9maWVsZC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRztBQUVILE9BQU8sRUFDTCxlQUFlLElBQUksV0FBVyxFQUM5QixZQUFZLEVBQ1oscUJBQXFCLEVBQ3JCLHNCQUFzQixFQUN0Qix5QkFBeUIsRUFDekIsNkJBQTZCLEVBQzdCLDhCQUE4QixFQUM5QiwrQkFBK0IsRUFDL0IsOEJBQThCLEVBQzlCLGlDQUFpQyxHQUNsQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ25ELE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQzlELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFDLCtCQUErQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDeEUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBQyw2QkFBNkIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3BFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFN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QjtZQUNqQyxpQkFBaUIsRUFBRSw4QkFBOEI7U0FDbEQsQ0FBQztRQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHO1lBQzFDLFNBQVMsRUFBRSx5QkFBeUI7WUFDcEMsaUJBQWlCLEVBQUUsaUNBQWlDO1NBQ3JELENBQUM7UUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRztZQUN2QyxTQUFTLEVBQUUsc0JBQXNCO1lBQ2pDLGlCQUFpQixFQUFFLHlCQUF5QjtTQUM3QyxDQUFDO0lBQ0osQ0FBQzs7aUhBdkVVLGVBQWU7cUhBQWYsZUFBZSxjQURILE1BQU07Z0dBQ2xCLGVBQWU7a0JBRDNCLFVBQVU7bUJBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChDKSBHbnVjb29wIHNvYy4gY29vcC5cbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSxcbiAqIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKiBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvLlxuICpcbiAqL1xuXG5pbXBvcnQge1xuICBBamZGaWVsZFNlcnZpY2UgYXMgQ29yZVNlcnZpY2UsXG4gIEFqZkZpZWxkVHlwZSxcbiAgQWpmRmlsZUZpZWxkQ29tcG9uZW50LFxuICBBamZJbWFnZUZpZWxkQ29tcG9uZW50LFxuICBBamZSZWFkT25seUZpZWxkQ29tcG9uZW50LFxuICBBamZSZWFkT25seUZpbGVGaWVsZENvbXBvbmVudCxcbiAgQWpmUmVhZE9ubHlJbWFnZUZpZWxkQ29tcG9uZW50LFxuICBBamZSZWFkT25seVNlbGVjdEZpZWxkQ29tcG9uZW50LFxuICBBamZSZWFkT25seVRhYmxlRmllbGRDb21wb25lbnQsXG4gIEFqZlJlYWRPbmx5VmlkZW9VcmxGaWVsZENvbXBvbmVudCxcbn0gZnJvbSAnQGFqZi9jb3JlL2Zvcm1zJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7QWpmQmFyY29kZUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL2JhcmNvZGUtZmllbGQnO1xuaW1wb3J0IHtBamZCb29sZWFuRmllbGRDb21wb25lbnR9IGZyb20gJy4vYm9vbGVhbi1maWVsZCc7XG5pbXBvcnQge0FqZkRhdGVGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9kYXRlLWZpZWxkJztcbmltcG9ydCB7QWpmRGF0ZUlucHV0RmllbGRDb21wb25lbnR9IGZyb20gJy4vZGF0ZS1pbnB1dC1maWVsZCc7XG5pbXBvcnQge0FqZkVtcHR5RmllbGRDb21wb25lbnR9IGZyb20gJy4vZW1wdHktZmllbGQnO1xuaW1wb3J0IHtBamZGb3JtdWxhRmllbGRDb21wb25lbnR9IGZyb20gJy4vZm9ybXVsYS1maWVsZCc7XG5pbXBvcnQge0FqZklucHV0RmllbGRDb21wb25lbnR9IGZyb20gJy4vaW5wdXQtZmllbGQnO1xuaW1wb3J0IHtBamZNdWx0aXBsZUNob2ljZUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL211bHRpcGxlLWNob2ljZS1maWVsZCc7XG5pbXBvcnQge0FqZk51bWJlckZpZWxkQ29tcG9uZW50fSBmcm9tICcuL251bWJlci1maWVsZCc7XG5pbXBvcnQge0FqZlJhbmdlRmllbGRDb21wb25lbnR9IGZyb20gJy4vcmFuZ2UtZmllbGQnO1xuaW1wb3J0IHtBamZTaW5nbGVDaG9pY2VGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9zaW5nbGUtY2hvaWNlLWZpZWxkJztcbmltcG9ydCB7QWpmVGFibGVGaWVsZENvbXBvbmVudH0gZnJvbSAnLi90YWJsZS1maWVsZCc7XG5pbXBvcnQge0FqZlRleHRhcmVhRmllbGRDb21wb25lbnR9IGZyb20gJy4vdGV4dGFyZWEtZmllbGQnO1xuaW1wb3J0IHtBamZUaW1lRmllbGRDb21wb25lbnR9IGZyb20gJy4vdGltZS1maWVsZCc7XG5pbXBvcnQge0FqZlZpZGVvVXJsRmllbGRDb21wb25lbnR9IGZyb20gJy4vdmlkZW8tdXJsLWZpZWxkJztcblxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgQWpmRmllbGRTZXJ2aWNlIGV4dGVuZHMgQ29yZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY29tcG9uZW50c01hcFtBamZGaWVsZFR5cGUuU3RyaW5nXSA9IHtcbiAgICAgIGNvbXBvbmVudDogQWpmSW5wdXRGaWVsZENvbXBvbmVudCxcbiAgICAgIHJlYWRPbmx5Q29tcG9uZW50OiBBamZSZWFkT25seUZpZWxkQ29tcG9uZW50LFxuICAgIH07XG4gICAgdGhpcy5jb21wb25lbnRzTWFwW0FqZkZpZWxkVHlwZS5UZXh0XSA9IHtcbiAgICAgIGNvbXBvbmVudDogQWpmVGV4dGFyZWFGaWVsZENvbXBvbmVudCxcbiAgICAgIHJlYWRPbmx5Q29tcG9uZW50OiBBamZSZWFkT25seUZpZWxkQ29tcG9uZW50LFxuICAgIH07XG4gICAgdGhpcy5jb21wb25lbnRzTWFwW0FqZkZpZWxkVHlwZS5OdW1iZXJdID0ge1xuICAgICAgY29tcG9uZW50OiBBamZOdW1iZXJGaWVsZENvbXBvbmVudCxcbiAgICAgIHJlYWRPbmx5Q29tcG9uZW50OiBBamZSZWFkT25seUZpZWxkQ29tcG9uZW50LFxuICAgIH07XG4gICAgdGhpcy5jb21wb25lbnRzTWFwW0FqZkZpZWxkVHlwZS5Cb29sZWFuXSA9IHtcbiAgICAgIGNvbXBvbmVudDogQWpmQm9vbGVhbkZpZWxkQ29tcG9uZW50LFxuICAgICAgcmVhZE9ubHlDb21wb25lbnQ6IEFqZlJlYWRPbmx5RmllbGRDb21wb25lbnQsXG4gICAgfTtcbiAgICB0aGlzLmNvbXBvbmVudHNNYXBbQWpmRmllbGRUeXBlLkZvcm11bGFdID0ge1xuICAgICAgY29tcG9uZW50OiBBamZGb3JtdWxhRmllbGRDb21wb25lbnQsXG4gICAgICByZWFkT25seUNvbXBvbmVudDogQWpmUmVhZE9ubHlGaWVsZENvbXBvbmVudCxcbiAgICB9O1xuICAgIHRoaXMuY29tcG9uZW50c01hcFtBamZGaWVsZFR5cGUuRGF0ZV0gPSB7XG4gICAgICBjb21wb25lbnQ6IEFqZkRhdGVGaWVsZENvbXBvbmVudCxcbiAgICAgIHJlYWRPbmx5Q29tcG9uZW50OiBBamZSZWFkT25seUZpZWxkQ29tcG9uZW50LFxuICAgIH07XG4gICAgdGhpcy5jb21wb25lbnRzTWFwW0FqZkZpZWxkVHlwZS5EYXRlSW5wdXRdID0ge1xuICAgICAgY29tcG9uZW50OiBBamZEYXRlSW5wdXRGaWVsZENvbXBvbmVudCxcbiAgICAgIHJlYWRPbmx5Q29tcG9uZW50OiBBamZSZWFkT25seUZpZWxkQ29tcG9uZW50LFxuICAgIH07XG4gICAgdGhpcy5jb21wb25lbnRzTWFwW0FqZkZpZWxkVHlwZS5UYWJsZV0gPSB7XG4gICAgICBjb21wb25lbnQ6IEFqZlRhYmxlRmllbGRDb21wb25lbnQsXG4gICAgICByZWFkT25seUNvbXBvbmVudDogQWpmUmVhZE9ubHlUYWJsZUZpZWxkQ29tcG9uZW50LFxuICAgIH07XG4gICAgdGhpcy5jb21wb25lbnRzTWFwW0FqZkZpZWxkVHlwZS5FbXB0eV0gPSB7XG4gICAgICBjb21wb25lbnQ6IEFqZkVtcHR5RmllbGRDb21wb25lbnQsXG4gICAgICByZWFkT25seUNvbXBvbmVudDogQWpmUmVhZE9ubHlGaWVsZENvbXBvbmVudCxcbiAgICB9O1xuICAgIHRoaXMuY29tcG9uZW50c01hcFtBamZGaWVsZFR5cGUuU2luZ2xlQ2hvaWNlXSA9IHtcbiAgICAgIGNvbXBvbmVudDogQWpmU2luZ2xlQ2hvaWNlRmllbGRDb21wb25lbnQsXG4gICAgICByZWFkT25seUNvbXBvbmVudDogQWpmUmVhZE9ubHlTZWxlY3RGaWVsZENvbXBvbmVudCxcbiAgICB9O1xuICAgIHRoaXMuY29tcG9uZW50c01hcFtBamZGaWVsZFR5cGUuTXVsdGlwbGVDaG9pY2VdID0ge1xuICAgICAgY29tcG9uZW50OiBBamZNdWx0aXBsZUNob2ljZUZpZWxkQ29tcG9uZW50LFxuICAgICAgcmVhZE9ubHlDb21wb25lbnQ6IEFqZlJlYWRPbmx5U2VsZWN0RmllbGRDb21wb25lbnQsXG4gICAgfTtcbiAgICB0aGlzLmNvbXBvbmVudHNNYXBbQWpmRmllbGRUeXBlLlRpbWVdID0ge1xuICAgICAgY29tcG9uZW50OiBBamZUaW1lRmllbGRDb21wb25lbnQsXG4gICAgICByZWFkT25seUNvbXBvbmVudDogQWpmUmVhZE9ubHlGaWVsZENvbXBvbmVudCxcbiAgICB9O1xuICAgIHRoaXMuY29tcG9uZW50c01hcFtBamZGaWVsZFR5cGUuQmFyY29kZV0gPSB7XG4gICAgICBjb21wb25lbnQ6IEFqZkJhcmNvZGVGaWVsZENvbXBvbmVudCxcbiAgICAgIHJlYWRPbmx5Q29tcG9uZW50OiBBamZSZWFkT25seUZpZWxkQ29tcG9uZW50LFxuICAgIH07XG4gICAgdGhpcy5jb21wb25lbnRzTWFwW0FqZkZpZWxkVHlwZS5GaWxlXSA9IHtcbiAgICAgIGNvbXBvbmVudDogQWpmRmlsZUZpZWxkQ29tcG9uZW50LFxuICAgICAgcmVhZE9ubHlDb21wb25lbnQ6IEFqZlJlYWRPbmx5RmlsZUZpZWxkQ29tcG9uZW50LFxuICAgIH07XG4gICAgdGhpcy5jb21wb25lbnRzTWFwW0FqZkZpZWxkVHlwZS5JbWFnZV0gPSB7XG4gICAgICBjb21wb25lbnQ6IEFqZkltYWdlRmllbGRDb21wb25lbnQsXG4gICAgICByZWFkT25seUNvbXBvbmVudDogQWpmUmVhZE9ubHlJbWFnZUZpZWxkQ29tcG9uZW50LFxuICAgIH07XG4gICAgdGhpcy5jb21wb25lbnRzTWFwW0FqZkZpZWxkVHlwZS5WaWRlb1VybF0gPSB7XG4gICAgICBjb21wb25lbnQ6IEFqZlZpZGVvVXJsRmllbGRDb21wb25lbnQsXG4gICAgICByZWFkT25seUNvbXBvbmVudDogQWpmUmVhZE9ubHlWaWRlb1VybEZpZWxkQ29tcG9uZW50LFxuICAgIH07XG4gICAgdGhpcy5jb21wb25lbnRzTWFwW0FqZkZpZWxkVHlwZS5SYW5nZV0gPSB7XG4gICAgICBjb21wb25lbnQ6IEFqZlJhbmdlRmllbGRDb21wb25lbnQsXG4gICAgICByZWFkT25seUNvbXBvbmVudDogQWpmUmVhZE9ubHlGaWVsZENvbXBvbmVudCxcbiAgICB9O1xuICB9XG59XG4iXX0=