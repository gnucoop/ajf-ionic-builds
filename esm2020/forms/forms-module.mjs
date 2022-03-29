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
import { AJF_WARNING_ALERT_SERVICE, AjfFormsModule as CoreFormsModule } from '@ajf/core/forms';
import { AjfTranslocoModule } from '@ajf/core/transloco';
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
import { AjfPopover } from './popover';
import { AjfRangeFieldComponent } from './range-field';
import { AjfSelectHasSearchBarPipe } from './select-has-search-bar.pipe';
import { AjfSelectUseVirtualScroll } from './select-use-virtual-scroll.pipe';
import { AjfSingleChoiceFieldComponent } from './single-choice-field';
import { AjfTableFieldComponent } from './table-field';
import { AjfTextareaFieldComponent } from './textarea-field';
import { AjfTimeFieldComponent } from './time-field';
import { AjfVideoUrlFieldComponent } from './video-url-field';
import { AjfWarningAlertService } from './warning-alert-service';
import * as i0 from "@angular/core";
export class AjfFormsModule {
    static forRoot() {
        return {
            ngModule: AjfFormsModule,
            providers: [AjfFieldService],
        };
    }
}
AjfFormsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfFormsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AjfFormsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfFormsModule, declarations: [AjfBarcodeFieldComponent,
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
        AjfPopover,
        AjfRangeFieldComponent,
        AjfSelectHasSearchBarPipe,
        AjfSelectUseVirtualScroll,
        AjfSingleChoiceFieldComponent,
        AjfTableFieldComponent,
        AjfTextareaFieldComponent,
        AjfTimeFieldComponent,
        AjfVideoUrlFieldComponent], imports: [AjfBarcodeModule,
        AjfCalendarModule,
        AjfCheckboxGroupModule,
        AjfCommonModule,
        AjfPageSliderModule,
        AjfTimeModule,
        CommonModule,
        CoreFormsModule,
        FormsModule,
        GicModule,
        IonicModule,
        ReactiveFormsModule,
        AjfTranslocoModule], exports: [AjfFormField, AjfFormRenderer] });
AjfFormsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfFormsModule, providers: [
        AjfFieldService,
        { provide: AJF_WARNING_ALERT_SERVICE, useClass: AjfWarningAlertService },
    ], imports: [[
            AjfBarcodeModule,
            AjfCalendarModule,
            AjfCheckboxGroupModule,
            AjfCommonModule,
            AjfPageSliderModule,
            AjfTimeModule,
            CommonModule,
            CoreFormsModule,
            FormsModule,
            GicModule,
            IonicModule,
            ReactiveFormsModule,
            AjfTranslocoModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfFormsModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        AjfBarcodeModule,
                        AjfCalendarModule,
                        AjfCheckboxGroupModule,
                        AjfCommonModule,
                        AjfPageSliderModule,
                        AjfTimeModule,
                        CommonModule,
                        CoreFormsModule,
                        FormsModule,
                        GicModule,
                        IonicModule,
                        ReactiveFormsModule,
                        AjfTranslocoModule,
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
                        AjfPopover,
                        AjfRangeFieldComponent,
                        AjfSelectHasSearchBarPipe,
                        AjfSelectUseVirtualScroll,
                        AjfSingleChoiceFieldComponent,
                        AjfTableFieldComponent,
                        AjfTextareaFieldComponent,
                        AjfTimeFieldComponent,
                        AjfVideoUrlFieldComponent,
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
                        AjfPopover,
                        AjfRangeFieldComponent,
                        AjfSingleChoiceFieldComponent,
                        AjfTableFieldComponent,
                        AjfTextareaFieldComponent,
                        AjfTimeFieldComponent,
                        AjfVideoUrlFieldComponent,
                    ],
                    exports: [AjfFormField, AjfFormRenderer],
                    providers: [
                        AjfFieldService,
                        { provide: AJF_WARNING_ALERT_SERVICE, useClass: AjfWarningAlertService },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvaW9uaWMvZm9ybXMvc3JjL2Zvcm1zLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFFSCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFDLHlCQUF5QixFQUFFLGNBQWMsSUFBSSxlQUFlLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3RixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBc0IsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBQyxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxjQUFj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LGVBQWU7d0JBQ2YsbUJBQW1CO3dCQUNuQixhQUFhO3dCQUNiLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixXQUFXO3dCQUNYLFNBQVM7d0JBQ1QsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGtCQUFrQjtxQkFDbkI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLHdCQUF3Qjt3QkFDeEIsd0JBQXdCO3dCQUN4QixxQkFBcUI7d0JBQ3JCLDBCQUEwQjt3QkFDMUIsc0JBQXNCO3dCQUN0QixZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsZUFBZTt3QkFDZix3QkFBd0I7d0JBQ3hCLHNCQUFzQjt3QkFDdEIsK0JBQStCO3dCQUMvQix1QkFBdUI7d0JBQ3ZCLFVBQVU7d0JBQ1Ysc0JBQXNCO3dCQUN0Qix5QkFBeUI7d0JBQ3pCLHlCQUF5Qjt3QkFDekIsNkJBQTZCO3dCQUM3QixzQkFBc0I7d0JBQ3RCLHlCQUF5Qjt3QkFDekIscUJBQXFCO3dCQUNyQix5QkFBeUI7cUJBQzFCO29CQUNELGVBQWUsRUFBRTt3QkFDZix3QkFBd0I7d0JBQ3hCLHdCQUF3Qjt3QkFDeEIscUJBQXFCO3dCQUNyQiwwQkFBMEI7d0JBQzFCLHNCQUFzQjt3QkFDdEIsd0JBQXdCO3dCQUN4QixzQkFBc0I7d0JBQ3RCLCtCQUErQjt3QkFDL0IsdUJBQXVCO3dCQUN2QixVQUFVO3dCQUNWLHNCQUFzQjt3QkFDdEIsNkJBQTZCO3dCQUM3QixzQkFBc0I7d0JBQ3RCLHlCQUF5Qjt3QkFDekIscUJBQXFCO3dCQUNyQix5QkFBeUI7cUJBQzFCO29CQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUM7b0JBQ3hDLFNBQVMsRUFBRTt3QkFDVCxlQUFlO3dCQUNmLEVBQUMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBQztxQkFDdkU7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKEMpIEdudWNvb3Agc29jLiBjb29wLlxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpLlxuICpcbiAqIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLFxuICogb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm9cbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8uXG4gKlxuICovXG5cbmltcG9ydCB7QWpmQ29tbW9uTW9kdWxlfSBmcm9tICdAYWpmL2NvcmUvY29tbW9uJztcbmltcG9ydCB7QUpGX1dBUk5JTkdfQUxFUlRfU0VSVklDRSwgQWpmRm9ybXNNb2R1bGUgYXMgQ29yZUZvcm1zTW9kdWxlfSBmcm9tICdAYWpmL2NvcmUvZm9ybXMnO1xuaW1wb3J0IHtBamZUcmFuc2xvY29Nb2R1bGV9IGZyb20gJ0BhamYvY29yZS90cmFuc2xvY28nO1xuaW1wb3J0IHtBamZCYXJjb2RlTW9kdWxlfSBmcm9tICdAYWpmL2lvbmljL2JhcmNvZGUnO1xuaW1wb3J0IHtBamZDYWxlbmRhck1vZHVsZX0gZnJvbSAnQGFqZi9pb25pYy9jYWxlbmRhcic7XG5pbXBvcnQge0FqZkNoZWNrYm94R3JvdXBNb2R1bGV9IGZyb20gJ0BhamYvaW9uaWMvY2hlY2tib3gtZ3JvdXAnO1xuaW1wb3J0IHtBamZQYWdlU2xpZGVyTW9kdWxlfSBmcm9tICdAYWpmL2lvbmljL3BhZ2Utc2xpZGVyJztcbmltcG9ydCB7QWpmVGltZU1vZHVsZX0gZnJvbSAnQGFqZi9pb25pYy90aW1lJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0dpY01vZHVsZX0gZnJvbSAnQGdpYy9hbmd1bGFyJztcbmltcG9ydCB7SW9uaWNNb2R1bGV9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcblxuaW1wb3J0IHtBamZCYXJjb2RlRmllbGRDb21wb25lbnR9IGZyb20gJy4vYmFyY29kZS1maWVsZCc7XG5pbXBvcnQge0FqZkJvb2xlYW5GaWVsZENvbXBvbmVudH0gZnJvbSAnLi9ib29sZWFuLWZpZWxkJztcbmltcG9ydCB7QWpmRGF0ZUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL2RhdGUtZmllbGQnO1xuaW1wb3J0IHtBamZEYXRlSW5wdXRGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9kYXRlLWlucHV0LWZpZWxkJztcbmltcG9ydCB7QWpmRW1wdHlGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9lbXB0eS1maWVsZCc7XG5pbXBvcnQge0FqZkZvcm1GaWVsZH0gZnJvbSAnLi9maWVsZCc7XG5pbXBvcnQge0FqZkZpZWxkU2VydmljZX0gZnJvbSAnLi9maWVsZC1zZXJ2aWNlJztcbmltcG9ydCB7QWpmRm9ybVJlbmRlcmVyfSBmcm9tICcuL2Zvcm0nO1xuaW1wb3J0IHtBamZGb3JtUGFnZX0gZnJvbSAnLi9mb3JtLXBhZ2UnO1xuaW1wb3J0IHtBamZGb3JtdWxhRmllbGRDb21wb25lbnR9IGZyb20gJy4vZm9ybXVsYS1maWVsZCc7XG5pbXBvcnQge0FqZklucHV0RmllbGRDb21wb25lbnR9IGZyb20gJy4vaW5wdXQtZmllbGQnO1xuaW1wb3J0IHtBamZNdWx0aXBsZUNob2ljZUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL211bHRpcGxlLWNob2ljZS1maWVsZCc7XG5pbXBvcnQge0FqZk51bWJlckZpZWxkQ29tcG9uZW50fSBmcm9tICcuL251bWJlci1maWVsZCc7XG5pbXBvcnQge0FqZlBvcG92ZXJ9IGZyb20gJy4vcG9wb3Zlcic7XG5pbXBvcnQge0FqZlJhbmdlRmllbGRDb21wb25lbnR9IGZyb20gJy4vcmFuZ2UtZmllbGQnO1xuaW1wb3J0IHtBamZTZWxlY3RIYXNTZWFyY2hCYXJQaXBlfSBmcm9tICcuL3NlbGVjdC1oYXMtc2VhcmNoLWJhci5waXBlJztcbmltcG9ydCB7QWpmU2VsZWN0VXNlVmlydHVhbFNjcm9sbH0gZnJvbSAnLi9zZWxlY3QtdXNlLXZpcnR1YWwtc2Nyb2xsLnBpcGUnO1xuaW1wb3J0IHtBamZTaW5nbGVDaG9pY2VGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9zaW5nbGUtY2hvaWNlLWZpZWxkJztcbmltcG9ydCB7QWpmVGFibGVGaWVsZENvbXBvbmVudH0gZnJvbSAnLi90YWJsZS1maWVsZCc7XG5pbXBvcnQge0FqZlRleHRhcmVhRmllbGRDb21wb25lbnR9IGZyb20gJy4vdGV4dGFyZWEtZmllbGQnO1xuaW1wb3J0IHtBamZUaW1lRmllbGRDb21wb25lbnR9IGZyb20gJy4vdGltZS1maWVsZCc7XG5pbXBvcnQge0FqZlZpZGVvVXJsRmllbGRDb21wb25lbnR9IGZyb20gJy4vdmlkZW8tdXJsLWZpZWxkJztcbmltcG9ydCB7QWpmV2FybmluZ0FsZXJ0U2VydmljZX0gZnJvbSAnLi93YXJuaW5nLWFsZXJ0LXNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQWpmQmFyY29kZU1vZHVsZSxcbiAgICBBamZDYWxlbmRhck1vZHVsZSxcbiAgICBBamZDaGVja2JveEdyb3VwTW9kdWxlLFxuICAgIEFqZkNvbW1vbk1vZHVsZSxcbiAgICBBamZQYWdlU2xpZGVyTW9kdWxlLFxuICAgIEFqZlRpbWVNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENvcmVGb3Jtc01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBHaWNNb2R1bGUsXG4gICAgSW9uaWNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBBamZUcmFuc2xvY29Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFqZkJhcmNvZGVGaWVsZENvbXBvbmVudCxcbiAgICBBamZCb29sZWFuRmllbGRDb21wb25lbnQsXG4gICAgQWpmRGF0ZUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZkRhdGVJbnB1dEZpZWxkQ29tcG9uZW50LFxuICAgIEFqZkVtcHR5RmllbGRDb21wb25lbnQsXG4gICAgQWpmRm9ybUZpZWxkLFxuICAgIEFqZkZvcm1QYWdlLFxuICAgIEFqZkZvcm1SZW5kZXJlcixcbiAgICBBamZGb3JtdWxhRmllbGRDb21wb25lbnQsXG4gICAgQWpmSW5wdXRGaWVsZENvbXBvbmVudCxcbiAgICBBamZNdWx0aXBsZUNob2ljZUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZk51bWJlckZpZWxkQ29tcG9uZW50LFxuICAgIEFqZlBvcG92ZXIsXG4gICAgQWpmUmFuZ2VGaWVsZENvbXBvbmVudCxcbiAgICBBamZTZWxlY3RIYXNTZWFyY2hCYXJQaXBlLFxuICAgIEFqZlNlbGVjdFVzZVZpcnR1YWxTY3JvbGwsXG4gICAgQWpmU2luZ2xlQ2hvaWNlRmllbGRDb21wb25lbnQsXG4gICAgQWpmVGFibGVGaWVsZENvbXBvbmVudCxcbiAgICBBamZUZXh0YXJlYUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZlRpbWVGaWVsZENvbXBvbmVudCxcbiAgICBBamZWaWRlb1VybEZpZWxkQ29tcG9uZW50LFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBBamZCYXJjb2RlRmllbGRDb21wb25lbnQsXG4gICAgQWpmQm9vbGVhbkZpZWxkQ29tcG9uZW50LFxuICAgIEFqZkRhdGVGaWVsZENvbXBvbmVudCxcbiAgICBBamZEYXRlSW5wdXRGaWVsZENvbXBvbmVudCxcbiAgICBBamZFbXB0eUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZkZvcm11bGFGaWVsZENvbXBvbmVudCxcbiAgICBBamZJbnB1dEZpZWxkQ29tcG9uZW50LFxuICAgIEFqZk11bHRpcGxlQ2hvaWNlRmllbGRDb21wb25lbnQsXG4gICAgQWpmTnVtYmVyRmllbGRDb21wb25lbnQsXG4gICAgQWpmUG9wb3ZlcixcbiAgICBBamZSYW5nZUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZlNpbmdsZUNob2ljZUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZlRhYmxlRmllbGRDb21wb25lbnQsXG4gICAgQWpmVGV4dGFyZWFGaWVsZENvbXBvbmVudCxcbiAgICBBamZUaW1lRmllbGRDb21wb25lbnQsXG4gICAgQWpmVmlkZW9VcmxGaWVsZENvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW0FqZkZvcm1GaWVsZCwgQWpmRm9ybVJlbmRlcmVyXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQWpmRmllbGRTZXJ2aWNlLFxuICAgIHtwcm92aWRlOiBBSkZfV0FSTklOR19BTEVSVF9TRVJWSUNFLCB1c2VDbGFzczogQWpmV2FybmluZ0FsZXJ0U2VydmljZX0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEFqZkZvcm1zTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxBamZGb3Jtc01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQWpmRm9ybXNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtBamZGaWVsZFNlcnZpY2VdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==