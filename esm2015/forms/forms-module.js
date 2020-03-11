/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/forms/forms-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GicModule } from '@gic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { AjfCommonModule } from '@ajf/core/common';
import { AjfFormsModule as AjfCoreFormsModule } from '@ajf/core/forms';
import { AjfBarcodeModule } from '@ajf/ionic/barcode';
import { AjfCalendarModule } from '@ajf/ionic/calendar';
import { AjfCheckboxGroupModule } from '@ajf/ionic/checkbox-group';
import { AjfPageSliderModule } from '@ajf/ionic/page-slider';
import { AjfTimeModule } from '@ajf/ionic/time';
import { AjfBarcodeFieldComponent } from './barcode-field';
import { AjfBooleanFieldComponent } from './boolean-field';
import { AjfDateFieldComponent } from './date-field';
import { AjfDateInputFieldComponent } from './date-input-field';
import { AjfEmptyFieldComponent } from './empty-field';
import { AjfFormField } from './field';
import { AjfFieldService } from './field-service';
import { AjfFormPage } from './form-page';
import { AjfFormRenderer } from './form';
import { AjfFormulaFieldComponent } from './formula-field';
import { AjfInputFieldComponent } from './input-field';
import { AjfMultipleChoiceFieldComponent } from './multiple-choice-field';
import { AjfNumberFieldComponent } from './number-field';
import { AjfSelectHasSearchBarPipe } from './select-has-search-bar.pipe';
import { AjfSelectUseVirtualScroll } from './select-use-virtual-scroll.pipe';
import { AjfSingleChoiceFieldComponent } from './single-choice-field';
import { AjfTableFieldComponent } from './table-field';
import { AjfTextareaFieldComponent } from './textarea-field';
import { AjfTimeFieldComponent } from './time-field';
import { AjfWarningAlertService } from './warning-alert-service';
export class AjfFormsModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: AjfFormsModule,
            providers: [
                AjfFieldService,
            ],
        };
    }
}
AjfFormsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    IonicModule,
                    GicModule,
                    TranslateModule,
                    AjfCommonModule,
                    AjfCoreFormsModule,
                    AjfCalendarModule,
                    AjfBarcodeModule,
                    AjfCheckboxGroupModule,
                    AjfPageSliderModule,
                    AjfTimeModule,
                ],
                declarations: [
                    AjfBarcodeFieldComponent,
                    AjfBooleanFieldComponent,
                    AjfDateFieldComponent,
                    AjfDateInputFieldComponent,
                    AjfEmptyFieldComponent,
                    AjfFormField,
                    AjfFormPage,
                    AjfFormRenderer,
                    AjfFormulaFieldComponent,
                    AjfInputFieldComponent,
                    AjfMultipleChoiceFieldComponent,
                    AjfNumberFieldComponent,
                    AjfSelectHasSearchBarPipe,
                    AjfSelectUseVirtualScroll,
                    AjfSingleChoiceFieldComponent,
                    AjfTableFieldComponent,
                    AjfTextareaFieldComponent,
                    AjfTimeFieldComponent
                ],
                entryComponents: [
                    AjfBarcodeFieldComponent,
                    AjfBooleanFieldComponent,
                    AjfDateFieldComponent,
                    AjfDateInputFieldComponent,
                    AjfEmptyFieldComponent,
                    AjfFormulaFieldComponent,
                    AjfInputFieldComponent,
                    AjfMultipleChoiceFieldComponent,
                    AjfNumberFieldComponent,
                    AjfSingleChoiceFieldComponent,
                    AjfTableFieldComponent,
                    AjfTextareaFieldComponent,
                    AjfTimeFieldComponent
                ],
                exports: [
                    AjfFormField,
                    AjfFormRenderer
                ],
                providers: [
                    AjfFieldService,
                    AjfWarningAlertService,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2lvbmljL2Zvcm1zL2Zvcm1zLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFzQixRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRWhFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRXZDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUVwRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFDLGNBQWMsSUFBSSxrQkFBa0IsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3JFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUU5QyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDbkQsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDOUQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDckMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDeEMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUN2QyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFDLCtCQUErQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDeEUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDM0UsT0FBTyxFQUFDLDZCQUE2QixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDcEUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQzNELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNuRCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQThEL0QsTUFBTSxPQUFPLGNBQWM7Ozs7SUFDekIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUyxFQUFFO2dCQUNULGVBQWU7YUFDaEI7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBcEVGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsV0FBVztvQkFDWCxTQUFTO29CQUNULGVBQWU7b0JBQ2YsZUFBZTtvQkFDZixrQkFBa0I7b0JBQ2xCLGlCQUFpQjtvQkFDakIsZ0JBQWdCO29CQUNoQixzQkFBc0I7b0JBQ3RCLG1CQUFtQjtvQkFDbkIsYUFBYTtpQkFDZDtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osd0JBQXdCO29CQUN4Qix3QkFBd0I7b0JBQ3hCLHFCQUFxQjtvQkFDckIsMEJBQTBCO29CQUMxQixzQkFBc0I7b0JBQ3RCLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxlQUFlO29CQUNmLHdCQUF3QjtvQkFDeEIsc0JBQXNCO29CQUN0QiwrQkFBK0I7b0JBQy9CLHVCQUF1QjtvQkFDdkIseUJBQXlCO29CQUN6Qix5QkFBeUI7b0JBQ3pCLDZCQUE2QjtvQkFDN0Isc0JBQXNCO29CQUN0Qix5QkFBeUI7b0JBQ3pCLHFCQUFxQjtpQkFDdEI7Z0JBQ0QsZUFBZSxFQUFFO29CQUNmLHdCQUF3QjtvQkFDeEIsd0JBQXdCO29CQUN4QixxQkFBcUI7b0JBQ3JCLDBCQUEwQjtvQkFDMUIsc0JBQXNCO29CQUN0Qix3QkFBd0I7b0JBQ3hCLHNCQUFzQjtvQkFDdEIsK0JBQStCO29CQUMvQix1QkFBdUI7b0JBQ3ZCLDZCQUE2QjtvQkFDN0Isc0JBQXNCO29CQUN0Qix5QkFBeUI7b0JBQ3pCLHFCQUFxQjtpQkFDdEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osZUFBZTtpQkFDaEI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULGVBQWU7b0JBQ2Ysc0JBQXNCO2lCQUN2QjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChDKSBHbnVjb29wIHNvYy4gY29vcC5cbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSxcbiAqIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKiBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvLlxuICpcbiAqL1xuXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQge0lvbmljTW9kdWxlfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQge0dpY01vZHVsZX0gZnJvbSAnQGdpYy9hbmd1bGFyJztcblxuaW1wb3J0IHtUcmFuc2xhdGVNb2R1bGV9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5pbXBvcnQge0FqZkNvbW1vbk1vZHVsZX0gZnJvbSAnQGFqZi9jb3JlL2NvbW1vbic7XG5pbXBvcnQge0FqZkZvcm1zTW9kdWxlIGFzIEFqZkNvcmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFqZi9jb3JlL2Zvcm1zJztcbmltcG9ydCB7QWpmQmFyY29kZU1vZHVsZX0gZnJvbSAnQGFqZi9pb25pYy9iYXJjb2RlJztcbmltcG9ydCB7QWpmQ2FsZW5kYXJNb2R1bGV9IGZyb20gJ0BhamYvaW9uaWMvY2FsZW5kYXInO1xuaW1wb3J0IHtBamZDaGVja2JveEdyb3VwTW9kdWxlfSBmcm9tICdAYWpmL2lvbmljL2NoZWNrYm94LWdyb3VwJztcbmltcG9ydCB7QWpmUGFnZVNsaWRlck1vZHVsZX0gZnJvbSAnQGFqZi9pb25pYy9wYWdlLXNsaWRlcic7XG5pbXBvcnQge0FqZlRpbWVNb2R1bGV9IGZyb20gJ0BhamYvaW9uaWMvdGltZSc7XG5cbmltcG9ydCB7QWpmQmFyY29kZUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL2JhcmNvZGUtZmllbGQnO1xuaW1wb3J0IHtBamZCb29sZWFuRmllbGRDb21wb25lbnR9IGZyb20gJy4vYm9vbGVhbi1maWVsZCc7XG5pbXBvcnQge0FqZkRhdGVGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9kYXRlLWZpZWxkJztcbmltcG9ydCB7QWpmRGF0ZUlucHV0RmllbGRDb21wb25lbnR9IGZyb20gJy4vZGF0ZS1pbnB1dC1maWVsZCc7XG5pbXBvcnQge0FqZkVtcHR5RmllbGRDb21wb25lbnR9IGZyb20gJy4vZW1wdHktZmllbGQnO1xuaW1wb3J0IHtBamZGb3JtRmllbGR9IGZyb20gJy4vZmllbGQnO1xuaW1wb3J0IHtBamZGaWVsZFNlcnZpY2V9IGZyb20gJy4vZmllbGQtc2VydmljZSc7XG5pbXBvcnQge0FqZkZvcm1QYWdlfSBmcm9tICcuL2Zvcm0tcGFnZSc7XG5pbXBvcnQge0FqZkZvcm1SZW5kZXJlcn0gZnJvbSAnLi9mb3JtJztcbmltcG9ydCB7QWpmRm9ybXVsYUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL2Zvcm11bGEtZmllbGQnO1xuaW1wb3J0IHtBamZJbnB1dEZpZWxkQ29tcG9uZW50fSBmcm9tICcuL2lucHV0LWZpZWxkJztcbmltcG9ydCB7QWpmTXVsdGlwbGVDaG9pY2VGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9tdWx0aXBsZS1jaG9pY2UtZmllbGQnO1xuaW1wb3J0IHtBamZOdW1iZXJGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9udW1iZXItZmllbGQnO1xuaW1wb3J0IHtBamZTZWxlY3RIYXNTZWFyY2hCYXJQaXBlfSBmcm9tICcuL3NlbGVjdC1oYXMtc2VhcmNoLWJhci5waXBlJztcbmltcG9ydCB7QWpmU2VsZWN0VXNlVmlydHVhbFNjcm9sbH0gZnJvbSAnLi9zZWxlY3QtdXNlLXZpcnR1YWwtc2Nyb2xsLnBpcGUnO1xuaW1wb3J0IHtBamZTaW5nbGVDaG9pY2VGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9zaW5nbGUtY2hvaWNlLWZpZWxkJztcbmltcG9ydCB7QWpmVGFibGVGaWVsZENvbXBvbmVudH0gZnJvbSAnLi90YWJsZS1maWVsZCc7XG5pbXBvcnQge0FqZlRleHRhcmVhRmllbGRDb21wb25lbnR9IGZyb20gJy4vdGV4dGFyZWEtZmllbGQnO1xuaW1wb3J0IHtBamZUaW1lRmllbGRDb21wb25lbnR9IGZyb20gJy4vdGltZS1maWVsZCc7XG5pbXBvcnQge0FqZldhcm5pbmdBbGVydFNlcnZpY2V9IGZyb20gJy4vd2FybmluZy1hbGVydC1zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLFxuICAgIEdpY01vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgQWpmQ29tbW9uTW9kdWxlLFxuICAgIEFqZkNvcmVGb3Jtc01vZHVsZSxcbiAgICBBamZDYWxlbmRhck1vZHVsZSxcbiAgICBBamZCYXJjb2RlTW9kdWxlLFxuICAgIEFqZkNoZWNrYm94R3JvdXBNb2R1bGUsXG4gICAgQWpmUGFnZVNsaWRlck1vZHVsZSxcbiAgICBBamZUaW1lTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBamZCYXJjb2RlRmllbGRDb21wb25lbnQsXG4gICAgQWpmQm9vbGVhbkZpZWxkQ29tcG9uZW50LFxuICAgIEFqZkRhdGVGaWVsZENvbXBvbmVudCxcbiAgICBBamZEYXRlSW5wdXRGaWVsZENvbXBvbmVudCxcbiAgICBBamZFbXB0eUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZkZvcm1GaWVsZCxcbiAgICBBamZGb3JtUGFnZSxcbiAgICBBamZGb3JtUmVuZGVyZXIsXG4gICAgQWpmRm9ybXVsYUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZklucHV0RmllbGRDb21wb25lbnQsXG4gICAgQWpmTXVsdGlwbGVDaG9pY2VGaWVsZENvbXBvbmVudCxcbiAgICBBamZOdW1iZXJGaWVsZENvbXBvbmVudCxcbiAgICBBamZTZWxlY3RIYXNTZWFyY2hCYXJQaXBlLFxuICAgIEFqZlNlbGVjdFVzZVZpcnR1YWxTY3JvbGwsXG4gICAgQWpmU2luZ2xlQ2hvaWNlRmllbGRDb21wb25lbnQsXG4gICAgQWpmVGFibGVGaWVsZENvbXBvbmVudCxcbiAgICBBamZUZXh0YXJlYUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZlRpbWVGaWVsZENvbXBvbmVudFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBBamZCYXJjb2RlRmllbGRDb21wb25lbnQsXG4gICAgQWpmQm9vbGVhbkZpZWxkQ29tcG9uZW50LFxuICAgIEFqZkRhdGVGaWVsZENvbXBvbmVudCxcbiAgICBBamZEYXRlSW5wdXRGaWVsZENvbXBvbmVudCxcbiAgICBBamZFbXB0eUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZkZvcm11bGFGaWVsZENvbXBvbmVudCxcbiAgICBBamZJbnB1dEZpZWxkQ29tcG9uZW50LFxuICAgIEFqZk11bHRpcGxlQ2hvaWNlRmllbGRDb21wb25lbnQsXG4gICAgQWpmTnVtYmVyRmllbGRDb21wb25lbnQsXG4gICAgQWpmU2luZ2xlQ2hvaWNlRmllbGRDb21wb25lbnQsXG4gICAgQWpmVGFibGVGaWVsZENvbXBvbmVudCxcbiAgICBBamZUZXh0YXJlYUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZlRpbWVGaWVsZENvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQWpmRm9ybUZpZWxkLFxuICAgIEFqZkZvcm1SZW5kZXJlclxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBBamZGaWVsZFNlcnZpY2UsXG4gICAgQWpmV2FybmluZ0FsZXJ0U2VydmljZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQWpmRm9ybXNNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFqZkZvcm1zTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEFqZkZpZWxkU2VydmljZSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19