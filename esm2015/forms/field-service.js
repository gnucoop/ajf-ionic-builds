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
    AjfFieldService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AjfFieldService_Factory() { return new AjfFieldService(); }, token: AjfFieldService, providedIn: "root" });
    AjfFieldService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    AjfFieldService.ctorParameters = () => [];
    return AjfFieldService;
})();
export { AjfFieldService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9pb25pYy9mb3Jtcy9maWVsZC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRztBQUVILE9BQU8sRUFDTCxlQUFlLElBQUksV0FBVyxFQUM5QixZQUFZLEVBQ1oscUJBQXFCLEVBQ3JCLHNCQUFzQixFQUN0Qix5QkFBeUIsRUFDekIsNkJBQTZCLEVBQzdCLDhCQUE4QixFQUM5Qiw4QkFBOEIsRUFDOUIsaUNBQWlDLEdBQ2xDLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDbkQsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDOUQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUMsK0JBQStCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sa0JBQWtCLENBQUM7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O2FBQ2xELENBQUM7WUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRztnQkFDMUMsU0FBUyxFQUFFLHlCQUF5QjtnQkFDcEMsaUJBQWlCLEVBQUUsaUNBQWlDO2FBQ3JELENBQUM7UUFDSixDQUFDOzs7O2dCQXBFRixVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7MEJBbERoQztLQXVIQztTQXBFWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChDKSBHbnVjb29wIHNvYy4gY29vcC5cbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSxcbiAqIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKiBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvLlxuICpcbiAqL1xuXG5pbXBvcnQge1xuICBBamZGaWVsZFNlcnZpY2UgYXMgQ29yZVNlcnZpY2UsXG4gIEFqZkZpZWxkVHlwZSxcbiAgQWpmRmlsZUZpZWxkQ29tcG9uZW50LFxuICBBamZJbWFnZUZpZWxkQ29tcG9uZW50LFxuICBBamZSZWFkT25seUZpZWxkQ29tcG9uZW50LFxuICBBamZSZWFkT25seUZpbGVGaWVsZENvbXBvbmVudCxcbiAgQWpmUmVhZE9ubHlJbWFnZUZpZWxkQ29tcG9uZW50LFxuICBBamZSZWFkT25seVRhYmxlRmllbGRDb21wb25lbnQsXG4gIEFqZlJlYWRPbmx5VmlkZW9VcmxGaWVsZENvbXBvbmVudCxcbn0gZnJvbSAnQGFqZi9jb3JlL2Zvcm1zJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7QWpmQmFyY29kZUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL2JhcmNvZGUtZmllbGQnO1xuaW1wb3J0IHtBamZCb29sZWFuRmllbGRDb21wb25lbnR9IGZyb20gJy4vYm9vbGVhbi1maWVsZCc7XG5pbXBvcnQge0FqZkRhdGVGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9kYXRlLWZpZWxkJztcbmltcG9ydCB7QWpmRGF0ZUlucHV0RmllbGRDb21wb25lbnR9IGZyb20gJy4vZGF0ZS1pbnB1dC1maWVsZCc7XG5pbXBvcnQge0FqZkVtcHR5RmllbGRDb21wb25lbnR9IGZyb20gJy4vZW1wdHktZmllbGQnO1xuaW1wb3J0IHtBamZGb3JtdWxhRmllbGRDb21wb25lbnR9IGZyb20gJy4vZm9ybXVsYS1maWVsZCc7XG5pbXBvcnQge0FqZklucHV0RmllbGRDb21wb25lbnR9IGZyb20gJy4vaW5wdXQtZmllbGQnO1xuaW1wb3J0IHtBamZNdWx0aXBsZUNob2ljZUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL211bHRpcGxlLWNob2ljZS1maWVsZCc7XG5pbXBvcnQge0FqZk51bWJlckZpZWxkQ29tcG9uZW50fSBmcm9tICcuL251bWJlci1maWVsZCc7XG5pbXBvcnQge0FqZlNpbmdsZUNob2ljZUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL3NpbmdsZS1jaG9pY2UtZmllbGQnO1xuaW1wb3J0IHtBamZUYWJsZUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL3RhYmxlLWZpZWxkJztcbmltcG9ydCB7QWpmVGV4dGFyZWFGaWVsZENvbXBvbmVudH0gZnJvbSAnLi90ZXh0YXJlYS1maWVsZCc7XG5pbXBvcnQge0FqZlRpbWVGaWVsZENvbXBvbmVudH0gZnJvbSAnLi90aW1lLWZpZWxkJztcbmltcG9ydCB7QWpmVmlkZW9VcmxGaWVsZENvbXBvbmVudH0gZnJvbSAnLi92aWRlby11cmwtZmllbGQnO1xuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBBamZGaWVsZFNlcnZpY2UgZXh0ZW5kcyBDb3JlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jb21wb25lbnRzTWFwW0FqZkZpZWxkVHlwZS5TdHJpbmddID0ge1xuICAgICAgY29tcG9uZW50OiBBamZJbnB1dEZpZWxkQ29tcG9uZW50LFxuICAgICAgcmVhZE9ubHlDb21wb25lbnQ6IEFqZlJlYWRPbmx5RmllbGRDb21wb25lbnRcbiAgICB9O1xuICAgIHRoaXMuY29tcG9uZW50c01hcFtBamZGaWVsZFR5cGUuVGV4dF0gPSB7XG4gICAgICBjb21wb25lbnQ6IEFqZlRleHRhcmVhRmllbGRDb21wb25lbnQsXG4gICAgICByZWFkT25seUNvbXBvbmVudDogQWpmUmVhZE9ubHlGaWVsZENvbXBvbmVudFxuICAgIH07XG4gICAgdGhpcy5jb21wb25lbnRzTWFwW0FqZkZpZWxkVHlwZS5OdW1iZXJdID0ge1xuICAgICAgY29tcG9uZW50OiBBamZOdW1iZXJGaWVsZENvbXBvbmVudCxcbiAgICAgIHJlYWRPbmx5Q29tcG9uZW50OiBBamZSZWFkT25seUZpZWxkQ29tcG9uZW50XG4gICAgfTtcbiAgICB0aGlzLmNvbXBvbmVudHNNYXBbQWpmRmllbGRUeXBlLkJvb2xlYW5dID0ge1xuICAgICAgY29tcG9uZW50OiBBamZCb29sZWFuRmllbGRDb21wb25lbnQsXG4gICAgICByZWFkT25seUNvbXBvbmVudDogQWpmUmVhZE9ubHlGaWVsZENvbXBvbmVudFxuICAgIH07XG4gICAgdGhpcy5jb21wb25lbnRzTWFwW0FqZkZpZWxkVHlwZS5Gb3JtdWxhXSA9IHtcbiAgICAgIGNvbXBvbmVudDogQWpmRm9ybXVsYUZpZWxkQ29tcG9uZW50LFxuICAgICAgcmVhZE9ubHlDb21wb25lbnQ6IEFqZlJlYWRPbmx5RmllbGRDb21wb25lbnRcbiAgICB9O1xuICAgIHRoaXMuY29tcG9uZW50c01hcFtBamZGaWVsZFR5cGUuRGF0ZV0gPSB7XG4gICAgICBjb21wb25lbnQ6IEFqZkRhdGVGaWVsZENvbXBvbmVudCxcbiAgICAgIHJlYWRPbmx5Q29tcG9uZW50OiBBamZSZWFkT25seUZpZWxkQ29tcG9uZW50XG4gICAgfTtcbiAgICB0aGlzLmNvbXBvbmVudHNNYXBbQWpmRmllbGRUeXBlLkRhdGVJbnB1dF0gPSB7XG4gICAgICBjb21wb25lbnQ6IEFqZkRhdGVJbnB1dEZpZWxkQ29tcG9uZW50LFxuICAgICAgcmVhZE9ubHlDb21wb25lbnQ6IEFqZlJlYWRPbmx5RmllbGRDb21wb25lbnRcbiAgICB9O1xuICAgIHRoaXMuY29tcG9uZW50c01hcFtBamZGaWVsZFR5cGUuVGFibGVdID0ge1xuICAgICAgY29tcG9uZW50OiBBamZUYWJsZUZpZWxkQ29tcG9uZW50LFxuICAgICAgcmVhZE9ubHlDb21wb25lbnQ6IEFqZlJlYWRPbmx5VGFibGVGaWVsZENvbXBvbmVudFxuICAgIH07XG4gICAgdGhpcy5jb21wb25lbnRzTWFwW0FqZkZpZWxkVHlwZS5FbXB0eV0gPSB7XG4gICAgICBjb21wb25lbnQ6IEFqZkVtcHR5RmllbGRDb21wb25lbnQsXG4gICAgICByZWFkT25seUNvbXBvbmVudDogQWpmUmVhZE9ubHlGaWVsZENvbXBvbmVudFxuICAgIH07XG4gICAgdGhpcy5jb21wb25lbnRzTWFwW0FqZkZpZWxkVHlwZS5TaW5nbGVDaG9pY2VdID0ge1xuICAgICAgY29tcG9uZW50OiBBamZTaW5nbGVDaG9pY2VGaWVsZENvbXBvbmVudCxcbiAgICAgIHJlYWRPbmx5Q29tcG9uZW50OiBBamZSZWFkT25seUZpZWxkQ29tcG9uZW50XG4gICAgfTtcbiAgICB0aGlzLmNvbXBvbmVudHNNYXBbQWpmRmllbGRUeXBlLk11bHRpcGxlQ2hvaWNlXSA9IHtcbiAgICAgIGNvbXBvbmVudDogQWpmTXVsdGlwbGVDaG9pY2VGaWVsZENvbXBvbmVudCxcbiAgICAgIHJlYWRPbmx5Q29tcG9uZW50OiBBamZSZWFkT25seUZpZWxkQ29tcG9uZW50XG4gICAgfTtcbiAgICB0aGlzLmNvbXBvbmVudHNNYXBbQWpmRmllbGRUeXBlLlRpbWVdID0ge1xuICAgICAgY29tcG9uZW50OiBBamZUaW1lRmllbGRDb21wb25lbnQsXG4gICAgICByZWFkT25seUNvbXBvbmVudDogQWpmUmVhZE9ubHlGaWVsZENvbXBvbmVudFxuICAgIH07XG4gICAgdGhpcy5jb21wb25lbnRzTWFwW0FqZkZpZWxkVHlwZS5CYXJjb2RlXSA9IHtcbiAgICAgIGNvbXBvbmVudDogQWpmQmFyY29kZUZpZWxkQ29tcG9uZW50LFxuICAgICAgcmVhZE9ubHlDb21wb25lbnQ6IEFqZlJlYWRPbmx5RmllbGRDb21wb25lbnRcbiAgICB9O1xuICAgIHRoaXMuY29tcG9uZW50c01hcFtBamZGaWVsZFR5cGUuRmlsZV0gPSB7XG4gICAgICBjb21wb25lbnQ6IEFqZkZpbGVGaWVsZENvbXBvbmVudCxcbiAgICAgIHJlYWRPbmx5Q29tcG9uZW50OiBBamZSZWFkT25seUZpbGVGaWVsZENvbXBvbmVudFxuICAgIH07XG4gICAgdGhpcy5jb21wb25lbnRzTWFwW0FqZkZpZWxkVHlwZS5JbWFnZV0gPSB7XG4gICAgICBjb21wb25lbnQ6IEFqZkltYWdlRmllbGRDb21wb25lbnQsXG4gICAgICByZWFkT25seUNvbXBvbmVudDogQWpmUmVhZE9ubHlJbWFnZUZpZWxkQ29tcG9uZW50XG4gICAgfTtcbiAgICB0aGlzLmNvbXBvbmVudHNNYXBbQWpmRmllbGRUeXBlLlZpZGVvVXJsXSA9IHtcbiAgICAgIGNvbXBvbmVudDogQWpmVmlkZW9VcmxGaWVsZENvbXBvbmVudCxcbiAgICAgIHJlYWRPbmx5Q29tcG9uZW50OiBBamZSZWFkT25seVZpZGVvVXJsRmllbGRDb21wb25lbnRcbiAgICB9O1xuICB9XG59XG4iXX0=