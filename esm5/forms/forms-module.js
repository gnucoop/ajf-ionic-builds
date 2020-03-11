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
    return AjfFormsModule;
}());
export { AjfFormsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2lvbmljL2Zvcm1zL2Zvcm1zLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFFSCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFzQixRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRWhFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRXZDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUVwRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFDLGNBQWMsSUFBSSxrQkFBa0IsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3JFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUU5QyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDbkQsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDOUQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDckMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDeEMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUN2QyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFDLCtCQUErQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDeEUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDM0UsT0FBTyxFQUFDLDZCQUE2QixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDcEUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQzNELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNuRCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUUvRDtJQUFBO0lBcUVBLENBQUM7SUFSUSxzQkFBTyxHQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRTtnQkFDVCxlQUFlO2FBQ2hCO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQXBFRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLFdBQVc7d0JBQ1gsU0FBUzt3QkFDVCxlQUFlO3dCQUNmLGVBQWU7d0JBQ2Ysa0JBQWtCO3dCQUNsQixpQkFBaUI7d0JBQ2pCLGdCQUFnQjt3QkFDaEIsc0JBQXNCO3dCQUN0QixtQkFBbUI7d0JBQ25CLGFBQWE7cUJBQ2Q7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLHdCQUF3Qjt3QkFDeEIsd0JBQXdCO3dCQUN4QixxQkFBcUI7d0JBQ3JCLDBCQUEwQjt3QkFDMUIsc0JBQXNCO3dCQUN0QixZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsZUFBZTt3QkFDZix3QkFBd0I7d0JBQ3hCLHNCQUFzQjt3QkFDdEIsK0JBQStCO3dCQUMvQix1QkFBdUI7d0JBQ3ZCLHlCQUF5Qjt3QkFDekIseUJBQXlCO3dCQUN6Qiw2QkFBNkI7d0JBQzdCLHNCQUFzQjt3QkFDdEIseUJBQXlCO3dCQUN6QixxQkFBcUI7cUJBQ3RCO29CQUNELGVBQWUsRUFBRTt3QkFDZix3QkFBd0I7d0JBQ3hCLHdCQUF3Qjt3QkFDeEIscUJBQXFCO3dCQUNyQiwwQkFBMEI7d0JBQzFCLHNCQUFzQjt3QkFDdEIsd0JBQXdCO3dCQUN4QixzQkFBc0I7d0JBQ3RCLCtCQUErQjt3QkFDL0IsdUJBQXVCO3dCQUN2Qiw2QkFBNkI7d0JBQzdCLHNCQUFzQjt3QkFDdEIseUJBQXlCO3dCQUN6QixxQkFBcUI7cUJBQ3RCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGVBQWU7cUJBQ2hCO29CQUNELFNBQVMsRUFBRTt3QkFDVCxlQUFlO3dCQUNmLHNCQUFzQjtxQkFDdkI7aUJBQ0Y7O0lBVUQscUJBQUM7Q0FBQSxBQXJFRCxJQXFFQztTQVRZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKEMpIEdudWNvb3Agc29jLiBjb29wLlxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpLlxuICpcbiAqIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLFxuICogb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm9cbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8uXG4gKlxuICovXG5cbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7SW9uaWNNb2R1bGV9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7R2ljTW9kdWxlfSBmcm9tICdAZ2ljL2FuZ3VsYXInO1xuXG5pbXBvcnQge1RyYW5zbGF0ZU1vZHVsZX0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbmltcG9ydCB7QWpmQ29tbW9uTW9kdWxlfSBmcm9tICdAYWpmL2NvcmUvY29tbW9uJztcbmltcG9ydCB7QWpmRm9ybXNNb2R1bGUgYXMgQWpmQ29yZUZvcm1zTW9kdWxlfSBmcm9tICdAYWpmL2NvcmUvZm9ybXMnO1xuaW1wb3J0IHtBamZCYXJjb2RlTW9kdWxlfSBmcm9tICdAYWpmL2lvbmljL2JhcmNvZGUnO1xuaW1wb3J0IHtBamZDYWxlbmRhck1vZHVsZX0gZnJvbSAnQGFqZi9pb25pYy9jYWxlbmRhcic7XG5pbXBvcnQge0FqZkNoZWNrYm94R3JvdXBNb2R1bGV9IGZyb20gJ0BhamYvaW9uaWMvY2hlY2tib3gtZ3JvdXAnO1xuaW1wb3J0IHtBamZQYWdlU2xpZGVyTW9kdWxlfSBmcm9tICdAYWpmL2lvbmljL3BhZ2Utc2xpZGVyJztcbmltcG9ydCB7QWpmVGltZU1vZHVsZX0gZnJvbSAnQGFqZi9pb25pYy90aW1lJztcblxuaW1wb3J0IHtBamZCYXJjb2RlRmllbGRDb21wb25lbnR9IGZyb20gJy4vYmFyY29kZS1maWVsZCc7XG5pbXBvcnQge0FqZkJvb2xlYW5GaWVsZENvbXBvbmVudH0gZnJvbSAnLi9ib29sZWFuLWZpZWxkJztcbmltcG9ydCB7QWpmRGF0ZUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL2RhdGUtZmllbGQnO1xuaW1wb3J0IHtBamZEYXRlSW5wdXRGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9kYXRlLWlucHV0LWZpZWxkJztcbmltcG9ydCB7QWpmRW1wdHlGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9lbXB0eS1maWVsZCc7XG5pbXBvcnQge0FqZkZvcm1GaWVsZH0gZnJvbSAnLi9maWVsZCc7XG5pbXBvcnQge0FqZkZpZWxkU2VydmljZX0gZnJvbSAnLi9maWVsZC1zZXJ2aWNlJztcbmltcG9ydCB7QWpmRm9ybVBhZ2V9IGZyb20gJy4vZm9ybS1wYWdlJztcbmltcG9ydCB7QWpmRm9ybVJlbmRlcmVyfSBmcm9tICcuL2Zvcm0nO1xuaW1wb3J0IHtBamZGb3JtdWxhRmllbGRDb21wb25lbnR9IGZyb20gJy4vZm9ybXVsYS1maWVsZCc7XG5pbXBvcnQge0FqZklucHV0RmllbGRDb21wb25lbnR9IGZyb20gJy4vaW5wdXQtZmllbGQnO1xuaW1wb3J0IHtBamZNdWx0aXBsZUNob2ljZUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL211bHRpcGxlLWNob2ljZS1maWVsZCc7XG5pbXBvcnQge0FqZk51bWJlckZpZWxkQ29tcG9uZW50fSBmcm9tICcuL251bWJlci1maWVsZCc7XG5pbXBvcnQge0FqZlNlbGVjdEhhc1NlYXJjaEJhclBpcGV9IGZyb20gJy4vc2VsZWN0LWhhcy1zZWFyY2gtYmFyLnBpcGUnO1xuaW1wb3J0IHtBamZTZWxlY3RVc2VWaXJ0dWFsU2Nyb2xsfSBmcm9tICcuL3NlbGVjdC11c2UtdmlydHVhbC1zY3JvbGwucGlwZSc7XG5pbXBvcnQge0FqZlNpbmdsZUNob2ljZUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL3NpbmdsZS1jaG9pY2UtZmllbGQnO1xuaW1wb3J0IHtBamZUYWJsZUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL3RhYmxlLWZpZWxkJztcbmltcG9ydCB7QWpmVGV4dGFyZWFGaWVsZENvbXBvbmVudH0gZnJvbSAnLi90ZXh0YXJlYS1maWVsZCc7XG5pbXBvcnQge0FqZlRpbWVGaWVsZENvbXBvbmVudH0gZnJvbSAnLi90aW1lLWZpZWxkJztcbmltcG9ydCB7QWpmV2FybmluZ0FsZXJ0U2VydmljZX0gZnJvbSAnLi93YXJuaW5nLWFsZXJ0LXNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgSW9uaWNNb2R1bGUsXG4gICAgR2ljTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBBamZDb21tb25Nb2R1bGUsXG4gICAgQWpmQ29yZUZvcm1zTW9kdWxlLFxuICAgIEFqZkNhbGVuZGFyTW9kdWxlLFxuICAgIEFqZkJhcmNvZGVNb2R1bGUsXG4gICAgQWpmQ2hlY2tib3hHcm91cE1vZHVsZSxcbiAgICBBamZQYWdlU2xpZGVyTW9kdWxlLFxuICAgIEFqZlRpbWVNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFqZkJhcmNvZGVGaWVsZENvbXBvbmVudCxcbiAgICBBamZCb29sZWFuRmllbGRDb21wb25lbnQsXG4gICAgQWpmRGF0ZUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZkRhdGVJbnB1dEZpZWxkQ29tcG9uZW50LFxuICAgIEFqZkVtcHR5RmllbGRDb21wb25lbnQsXG4gICAgQWpmRm9ybUZpZWxkLFxuICAgIEFqZkZvcm1QYWdlLFxuICAgIEFqZkZvcm1SZW5kZXJlcixcbiAgICBBamZGb3JtdWxhRmllbGRDb21wb25lbnQsXG4gICAgQWpmSW5wdXRGaWVsZENvbXBvbmVudCxcbiAgICBBamZNdWx0aXBsZUNob2ljZUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZk51bWJlckZpZWxkQ29tcG9uZW50LFxuICAgIEFqZlNlbGVjdEhhc1NlYXJjaEJhclBpcGUsXG4gICAgQWpmU2VsZWN0VXNlVmlydHVhbFNjcm9sbCxcbiAgICBBamZTaW5nbGVDaG9pY2VGaWVsZENvbXBvbmVudCxcbiAgICBBamZUYWJsZUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZlRleHRhcmVhRmllbGRDb21wb25lbnQsXG4gICAgQWpmVGltZUZpZWxkQ29tcG9uZW50XG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIEFqZkJhcmNvZGVGaWVsZENvbXBvbmVudCxcbiAgICBBamZCb29sZWFuRmllbGRDb21wb25lbnQsXG4gICAgQWpmRGF0ZUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZkRhdGVJbnB1dEZpZWxkQ29tcG9uZW50LFxuICAgIEFqZkVtcHR5RmllbGRDb21wb25lbnQsXG4gICAgQWpmRm9ybXVsYUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZklucHV0RmllbGRDb21wb25lbnQsXG4gICAgQWpmTXVsdGlwbGVDaG9pY2VGaWVsZENvbXBvbmVudCxcbiAgICBBamZOdW1iZXJGaWVsZENvbXBvbmVudCxcbiAgICBBamZTaW5nbGVDaG9pY2VGaWVsZENvbXBvbmVudCxcbiAgICBBamZUYWJsZUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZlRleHRhcmVhRmllbGRDb21wb25lbnQsXG4gICAgQWpmVGltZUZpZWxkQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBBamZGb3JtRmllbGQsXG4gICAgQWpmRm9ybVJlbmRlcmVyXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEFqZkZpZWxkU2VydmljZSxcbiAgICBBamZXYXJuaW5nQWxlcnRTZXJ2aWNlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBBamZGb3Jtc01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQWpmRm9ybXNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQWpmRmllbGRTZXJ2aWNlLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=