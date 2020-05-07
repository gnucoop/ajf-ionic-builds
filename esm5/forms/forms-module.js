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
import { AjfCommonModule } from '@ajf/core/common';
import { AJF_WARNING_ALERT_SERVICE, AjfFormsModule as AjfCoreFormsModule } from '@ajf/core/forms';
import { AjfBarcodeModule } from '@ajf/ionic/barcode';
import { AjfCalendarModule } from '@ajf/ionic/calendar';
import { AjfCheckboxGroupModule } from '@ajf/ionic/checkbox-group';
import { AjfPageSliderModule } from '@ajf/ionic/page-slider';
import { AjfTimeModule } from '@ajf/ionic/time';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GicModule } from '@gic/angular';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { AjfBarcodeFieldComponent } from './barcode-field';
import { AjfBooleanFieldComponent } from './boolean-field';
import { AjfDateFieldComponent } from './date-field';
import { AjfDateInputFieldComponent } from './date-input-field';
import { AjfEmptyFieldComponent } from './empty-field';
import { AjfFormField } from './field';
import { AjfFieldService } from './field-service';
import { AjfFormRenderer } from './form';
import { AjfFormPage } from './form-page';
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
var AjfFormsModule = /** @class */ (function () {
    function AjfFormsModule() {
    }
    AjfFormsModule.forRoot = function () {
        return {
            ngModule: AjfFormsModule,
            providers: [
                AjfFieldService,
            ],
        };
    };
    AjfFormsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        AjfBarcodeModule,
                        AjfCalendarModule,
                        AjfCheckboxGroupModule,
                        AjfCommonModule,
                        AjfCoreFormsModule,
                        AjfPageSliderModule,
                        AjfTimeModule,
                        CommonModule,
                        FormsModule,
                        GicModule,
                        IonicModule,
                        ReactiveFormsModule,
                        TranslateModule,
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
                        AjfTimeFieldComponent,
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
                        AjfTimeFieldComponent,
                    ],
                    exports: [
                        AjfFormField,
                        AjfFormRenderer,
                    ],
                    providers: [
                        AjfFieldService,
                        { provide: AJF_WARNING_ALERT_SERVICE, useClass: AjfWarningAlertService },
                    ],
                },] }
    ];
    return AjfFormsModule;
}());
export { AjfFormsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2lvbmljL2Zvcm1zL2Zvcm1zLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFFSCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFDLHlCQUF5QixFQUFFLGNBQWMsSUFBSSxrQkFBa0IsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ2hHLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFzQixRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUVwRCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDbkQsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDOUQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDckMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFDLCtCQUErQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDeEUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDM0UsT0FBTyxFQUFDLDZCQUE2QixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDcEUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQzNELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNuRCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUUvRDtJQUFBO0lBcUVBLENBQUM7SUFSUSxzQkFBTyxHQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRTtnQkFDVCxlQUFlO2FBQ2hCO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQXBFRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQixzQkFBc0I7d0JBQ3RCLGVBQWU7d0JBQ2Ysa0JBQWtCO3dCQUNsQixtQkFBbUI7d0JBQ25CLGFBQWE7d0JBQ2IsWUFBWTt3QkFDWixXQUFXO3dCQUNYLFNBQVM7d0JBQ1QsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGVBQWU7cUJBQ2hCO29CQUNELFlBQVksRUFBRTt3QkFDWix3QkFBd0I7d0JBQ3hCLHdCQUF3Qjt3QkFDeEIscUJBQXFCO3dCQUNyQiwwQkFBMEI7d0JBQzFCLHNCQUFzQjt3QkFDdEIsWUFBWTt3QkFDWixXQUFXO3dCQUNYLGVBQWU7d0JBQ2Ysd0JBQXdCO3dCQUN4QixzQkFBc0I7d0JBQ3RCLCtCQUErQjt3QkFDL0IsdUJBQXVCO3dCQUN2Qix5QkFBeUI7d0JBQ3pCLHlCQUF5Qjt3QkFDekIsNkJBQTZCO3dCQUM3QixzQkFBc0I7d0JBQ3RCLHlCQUF5Qjt3QkFDekIscUJBQXFCO3FCQUN0QjtvQkFDRCxlQUFlLEVBQUU7d0JBQ2Ysd0JBQXdCO3dCQUN4Qix3QkFBd0I7d0JBQ3hCLHFCQUFxQjt3QkFDckIsMEJBQTBCO3dCQUMxQixzQkFBc0I7d0JBQ3RCLHdCQUF3Qjt3QkFDeEIsc0JBQXNCO3dCQUN0QiwrQkFBK0I7d0JBQy9CLHVCQUF1Qjt3QkFDdkIsNkJBQTZCO3dCQUM3QixzQkFBc0I7d0JBQ3RCLHlCQUF5Qjt3QkFDekIscUJBQXFCO3FCQUN0QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3FCQUNoQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsZUFBZTt3QkFDZixFQUFDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUM7cUJBQ3ZFO2lCQUNGOztJQVVELHFCQUFDO0NBQUEsQUFyRUQsSUFxRUM7U0FUWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChDKSBHbnVjb29wIHNvYy4gY29vcC5cbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSxcbiAqIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKiBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvLlxuICpcbiAqL1xuXG5pbXBvcnQge0FqZkNvbW1vbk1vZHVsZX0gZnJvbSAnQGFqZi9jb3JlL2NvbW1vbic7XG5pbXBvcnQge0FKRl9XQVJOSU5HX0FMRVJUX1NFUlZJQ0UsIEFqZkZvcm1zTW9kdWxlIGFzIEFqZkNvcmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFqZi9jb3JlL2Zvcm1zJztcbmltcG9ydCB7QWpmQmFyY29kZU1vZHVsZX0gZnJvbSAnQGFqZi9pb25pYy9iYXJjb2RlJztcbmltcG9ydCB7QWpmQ2FsZW5kYXJNb2R1bGV9IGZyb20gJ0BhamYvaW9uaWMvY2FsZW5kYXInO1xuaW1wb3J0IHtBamZDaGVja2JveEdyb3VwTW9kdWxlfSBmcm9tICdAYWpmL2lvbmljL2NoZWNrYm94LWdyb3VwJztcbmltcG9ydCB7QWpmUGFnZVNsaWRlck1vZHVsZX0gZnJvbSAnQGFqZi9pb25pYy9wYWdlLXNsaWRlcic7XG5pbXBvcnQge0FqZlRpbWVNb2R1bGV9IGZyb20gJ0BhamYvaW9uaWMvdGltZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtHaWNNb2R1bGV9IGZyb20gJ0BnaWMvYW5ndWxhcic7XG5pbXBvcnQge0lvbmljTW9kdWxlfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQge1RyYW5zbGF0ZU1vZHVsZX0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbmltcG9ydCB7QWpmQmFyY29kZUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL2JhcmNvZGUtZmllbGQnO1xuaW1wb3J0IHtBamZCb29sZWFuRmllbGRDb21wb25lbnR9IGZyb20gJy4vYm9vbGVhbi1maWVsZCc7XG5pbXBvcnQge0FqZkRhdGVGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9kYXRlLWZpZWxkJztcbmltcG9ydCB7QWpmRGF0ZUlucHV0RmllbGRDb21wb25lbnR9IGZyb20gJy4vZGF0ZS1pbnB1dC1maWVsZCc7XG5pbXBvcnQge0FqZkVtcHR5RmllbGRDb21wb25lbnR9IGZyb20gJy4vZW1wdHktZmllbGQnO1xuaW1wb3J0IHtBamZGb3JtRmllbGR9IGZyb20gJy4vZmllbGQnO1xuaW1wb3J0IHtBamZGaWVsZFNlcnZpY2V9IGZyb20gJy4vZmllbGQtc2VydmljZSc7XG5pbXBvcnQge0FqZkZvcm1SZW5kZXJlcn0gZnJvbSAnLi9mb3JtJztcbmltcG9ydCB7QWpmRm9ybVBhZ2V9IGZyb20gJy4vZm9ybS1wYWdlJztcbmltcG9ydCB7QWpmRm9ybXVsYUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL2Zvcm11bGEtZmllbGQnO1xuaW1wb3J0IHtBamZJbnB1dEZpZWxkQ29tcG9uZW50fSBmcm9tICcuL2lucHV0LWZpZWxkJztcbmltcG9ydCB7QWpmTXVsdGlwbGVDaG9pY2VGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9tdWx0aXBsZS1jaG9pY2UtZmllbGQnO1xuaW1wb3J0IHtBamZOdW1iZXJGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9udW1iZXItZmllbGQnO1xuaW1wb3J0IHtBamZTZWxlY3RIYXNTZWFyY2hCYXJQaXBlfSBmcm9tICcuL3NlbGVjdC1oYXMtc2VhcmNoLWJhci5waXBlJztcbmltcG9ydCB7QWpmU2VsZWN0VXNlVmlydHVhbFNjcm9sbH0gZnJvbSAnLi9zZWxlY3QtdXNlLXZpcnR1YWwtc2Nyb2xsLnBpcGUnO1xuaW1wb3J0IHtBamZTaW5nbGVDaG9pY2VGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9zaW5nbGUtY2hvaWNlLWZpZWxkJztcbmltcG9ydCB7QWpmVGFibGVGaWVsZENvbXBvbmVudH0gZnJvbSAnLi90YWJsZS1maWVsZCc7XG5pbXBvcnQge0FqZlRleHRhcmVhRmllbGRDb21wb25lbnR9IGZyb20gJy4vdGV4dGFyZWEtZmllbGQnO1xuaW1wb3J0IHtBamZUaW1lRmllbGRDb21wb25lbnR9IGZyb20gJy4vdGltZS1maWVsZCc7XG5pbXBvcnQge0FqZldhcm5pbmdBbGVydFNlcnZpY2V9IGZyb20gJy4vd2FybmluZy1hbGVydC1zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEFqZkJhcmNvZGVNb2R1bGUsXG4gICAgQWpmQ2FsZW5kYXJNb2R1bGUsXG4gICAgQWpmQ2hlY2tib3hHcm91cE1vZHVsZSxcbiAgICBBamZDb21tb25Nb2R1bGUsXG4gICAgQWpmQ29yZUZvcm1zTW9kdWxlLFxuICAgIEFqZlBhZ2VTbGlkZXJNb2R1bGUsXG4gICAgQWpmVGltZU1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgR2ljTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBamZCYXJjb2RlRmllbGRDb21wb25lbnQsXG4gICAgQWpmQm9vbGVhbkZpZWxkQ29tcG9uZW50LFxuICAgIEFqZkRhdGVGaWVsZENvbXBvbmVudCxcbiAgICBBamZEYXRlSW5wdXRGaWVsZENvbXBvbmVudCxcbiAgICBBamZFbXB0eUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZkZvcm1GaWVsZCxcbiAgICBBamZGb3JtUGFnZSxcbiAgICBBamZGb3JtUmVuZGVyZXIsXG4gICAgQWpmRm9ybXVsYUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZklucHV0RmllbGRDb21wb25lbnQsXG4gICAgQWpmTXVsdGlwbGVDaG9pY2VGaWVsZENvbXBvbmVudCxcbiAgICBBamZOdW1iZXJGaWVsZENvbXBvbmVudCxcbiAgICBBamZTZWxlY3RIYXNTZWFyY2hCYXJQaXBlLFxuICAgIEFqZlNlbGVjdFVzZVZpcnR1YWxTY3JvbGwsXG4gICAgQWpmU2luZ2xlQ2hvaWNlRmllbGRDb21wb25lbnQsXG4gICAgQWpmVGFibGVGaWVsZENvbXBvbmVudCxcbiAgICBBamZUZXh0YXJlYUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZlRpbWVGaWVsZENvbXBvbmVudCxcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgQWpmQmFyY29kZUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZkJvb2xlYW5GaWVsZENvbXBvbmVudCxcbiAgICBBamZEYXRlRmllbGRDb21wb25lbnQsXG4gICAgQWpmRGF0ZUlucHV0RmllbGRDb21wb25lbnQsXG4gICAgQWpmRW1wdHlGaWVsZENvbXBvbmVudCxcbiAgICBBamZGb3JtdWxhRmllbGRDb21wb25lbnQsXG4gICAgQWpmSW5wdXRGaWVsZENvbXBvbmVudCxcbiAgICBBamZNdWx0aXBsZUNob2ljZUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZk51bWJlckZpZWxkQ29tcG9uZW50LFxuICAgIEFqZlNpbmdsZUNob2ljZUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZlRhYmxlRmllbGRDb21wb25lbnQsXG4gICAgQWpmVGV4dGFyZWFGaWVsZENvbXBvbmVudCxcbiAgICBBamZUaW1lRmllbGRDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBBamZGb3JtRmllbGQsXG4gICAgQWpmRm9ybVJlbmRlcmVyLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBBamZGaWVsZFNlcnZpY2UsXG4gICAge3Byb3ZpZGU6IEFKRl9XQVJOSU5HX0FMRVJUX1NFUlZJQ0UsIHVzZUNsYXNzOiBBamZXYXJuaW5nQWxlcnRTZXJ2aWNlfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQWpmRm9ybXNNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFqZkZvcm1zTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEFqZkZpZWxkU2VydmljZSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19