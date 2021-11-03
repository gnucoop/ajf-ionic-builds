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
AjfFormsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: AjfFormsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AjfFormsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: AjfFormsModule, declarations: [AjfBarcodeFieldComponent,
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
        AjfCoreFormsModule,
        AjfPageSliderModule,
        AjfTimeModule,
        CommonModule,
        FormsModule,
        GicModule,
        IonicModule,
        ReactiveFormsModule,
        AjfTranslocoModule], exports: [AjfFormField, AjfFormRenderer] });
AjfFormsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: AjfFormsModule, providers: [
        AjfFieldService,
        { provide: AJF_WARNING_ALERT_SERVICE, useClass: AjfWarningAlertService },
    ], imports: [[
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
            AjfTranslocoModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: AjfFormsModule, decorators: [{
            type: NgModule,
            args: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2lvbmljL2Zvcm1zL2Zvcm1zLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFFSCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFDLHlCQUF5QixFQUFFLGNBQWMsSUFBSSxrQkFBa0IsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ2hHLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFzQixRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGNBQWMs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QkFDdEIsZUFBZTt3QkFDZixrQkFBa0I7d0JBQ2xCLG1CQUFtQjt3QkFDbkIsYUFBYTt3QkFDYixZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsU0FBUzt3QkFDVCxXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsa0JBQWtCO3FCQUNuQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osd0JBQXdCO3dCQUN4Qix3QkFBd0I7d0JBQ3hCLHFCQUFxQjt3QkFDckIsMEJBQTBCO3dCQUMxQixzQkFBc0I7d0JBQ3RCLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxlQUFlO3dCQUNmLHdCQUF3Qjt3QkFDeEIsc0JBQXNCO3dCQUN0QiwrQkFBK0I7d0JBQy9CLHVCQUF1Qjt3QkFDdkIsVUFBVTt3QkFDVixzQkFBc0I7d0JBQ3RCLHlCQUF5Qjt3QkFDekIseUJBQXlCO3dCQUN6Qiw2QkFBNkI7d0JBQzdCLHNCQUFzQjt3QkFDdEIseUJBQXlCO3dCQUN6QixxQkFBcUI7d0JBQ3JCLHlCQUF5QjtxQkFDMUI7b0JBQ0QsZUFBZSxFQUFFO3dCQUNmLHdCQUF3Qjt3QkFDeEIsd0JBQXdCO3dCQUN4QixxQkFBcUI7d0JBQ3JCLDBCQUEwQjt3QkFDMUIsc0JBQXNCO3dCQUN0Qix3QkFBd0I7d0JBQ3hCLHNCQUFzQjt3QkFDdEIsK0JBQStCO3dCQUMvQix1QkFBdUI7d0JBQ3ZCLFVBQVU7d0JBQ1Ysc0JBQXNCO3dCQUN0Qiw2QkFBNkI7d0JBQzdCLHNCQUFzQjt3QkFDdEIseUJBQXlCO3dCQUN6QixxQkFBcUI7d0JBQ3JCLHlCQUF5QjtxQkFDMUI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQztvQkFDeEMsU0FBUyxFQUFFO3dCQUNULGVBQWU7d0JBQ2YsRUFBQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFDO3FCQUN2RTtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoQykgR251Y29vcCBzb2MuIGNvb3AuXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhc1xuICogcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsXG4gKiBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVyb1xuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpLlxuICogSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLy5cbiAqXG4gKi9cblxuaW1wb3J0IHtBamZDb21tb25Nb2R1bGV9IGZyb20gJ0BhamYvY29yZS9jb21tb24nO1xuaW1wb3J0IHtBSkZfV0FSTklOR19BTEVSVF9TRVJWSUNFLCBBamZGb3Jtc01vZHVsZSBhcyBBamZDb3JlRm9ybXNNb2R1bGV9IGZyb20gJ0BhamYvY29yZS9mb3Jtcyc7XG5pbXBvcnQge0FqZlRyYW5zbG9jb01vZHVsZX0gZnJvbSAnQGFqZi9jb3JlL3RyYW5zbG9jbyc7XG5pbXBvcnQge0FqZkJhcmNvZGVNb2R1bGV9IGZyb20gJ0BhamYvaW9uaWMvYmFyY29kZSc7XG5pbXBvcnQge0FqZkNhbGVuZGFyTW9kdWxlfSBmcm9tICdAYWpmL2lvbmljL2NhbGVuZGFyJztcbmltcG9ydCB7QWpmQ2hlY2tib3hHcm91cE1vZHVsZX0gZnJvbSAnQGFqZi9pb25pYy9jaGVja2JveC1ncm91cCc7XG5pbXBvcnQge0FqZlBhZ2VTbGlkZXJNb2R1bGV9IGZyb20gJ0BhamYvaW9uaWMvcGFnZS1zbGlkZXInO1xuaW1wb3J0IHtBamZUaW1lTW9kdWxlfSBmcm9tICdAYWpmL2lvbmljL3RpbWUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7R2ljTW9kdWxlfSBmcm9tICdAZ2ljL2FuZ3VsYXInO1xuaW1wb3J0IHtJb25pY01vZHVsZX0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5pbXBvcnQge0FqZkJhcmNvZGVGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9iYXJjb2RlLWZpZWxkJztcbmltcG9ydCB7QWpmQm9vbGVhbkZpZWxkQ29tcG9uZW50fSBmcm9tICcuL2Jvb2xlYW4tZmllbGQnO1xuaW1wb3J0IHtBamZEYXRlRmllbGRDb21wb25lbnR9IGZyb20gJy4vZGF0ZS1maWVsZCc7XG5pbXBvcnQge0FqZkRhdGVJbnB1dEZpZWxkQ29tcG9uZW50fSBmcm9tICcuL2RhdGUtaW5wdXQtZmllbGQnO1xuaW1wb3J0IHtBamZFbXB0eUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL2VtcHR5LWZpZWxkJztcbmltcG9ydCB7QWpmRm9ybUZpZWxkfSBmcm9tICcuL2ZpZWxkJztcbmltcG9ydCB7QWpmRmllbGRTZXJ2aWNlfSBmcm9tICcuL2ZpZWxkLXNlcnZpY2UnO1xuaW1wb3J0IHtBamZGb3JtUmVuZGVyZXJ9IGZyb20gJy4vZm9ybSc7XG5pbXBvcnQge0FqZkZvcm1QYWdlfSBmcm9tICcuL2Zvcm0tcGFnZSc7XG5pbXBvcnQge0FqZkZvcm11bGFGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9mb3JtdWxhLWZpZWxkJztcbmltcG9ydCB7QWpmSW5wdXRGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9pbnB1dC1maWVsZCc7XG5pbXBvcnQge0FqZk11bHRpcGxlQ2hvaWNlRmllbGRDb21wb25lbnR9IGZyb20gJy4vbXVsdGlwbGUtY2hvaWNlLWZpZWxkJztcbmltcG9ydCB7QWpmTnVtYmVyRmllbGRDb21wb25lbnR9IGZyb20gJy4vbnVtYmVyLWZpZWxkJztcbmltcG9ydCB7QWpmUG9wb3Zlcn0gZnJvbSAnLi9wb3BvdmVyJztcbmltcG9ydCB7QWpmUmFuZ2VGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9yYW5nZS1maWVsZCc7XG5pbXBvcnQge0FqZlNlbGVjdEhhc1NlYXJjaEJhclBpcGV9IGZyb20gJy4vc2VsZWN0LWhhcy1zZWFyY2gtYmFyLnBpcGUnO1xuaW1wb3J0IHtBamZTZWxlY3RVc2VWaXJ0dWFsU2Nyb2xsfSBmcm9tICcuL3NlbGVjdC11c2UtdmlydHVhbC1zY3JvbGwucGlwZSc7XG5pbXBvcnQge0FqZlNpbmdsZUNob2ljZUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL3NpbmdsZS1jaG9pY2UtZmllbGQnO1xuaW1wb3J0IHtBamZUYWJsZUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL3RhYmxlLWZpZWxkJztcbmltcG9ydCB7QWpmVGV4dGFyZWFGaWVsZENvbXBvbmVudH0gZnJvbSAnLi90ZXh0YXJlYS1maWVsZCc7XG5pbXBvcnQge0FqZlRpbWVGaWVsZENvbXBvbmVudH0gZnJvbSAnLi90aW1lLWZpZWxkJztcbmltcG9ydCB7QWpmVmlkZW9VcmxGaWVsZENvbXBvbmVudH0gZnJvbSAnLi92aWRlby11cmwtZmllbGQnO1xuaW1wb3J0IHtBamZXYXJuaW5nQWxlcnRTZXJ2aWNlfSBmcm9tICcuL3dhcm5pbmctYWxlcnQtc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBBamZCYXJjb2RlTW9kdWxlLFxuICAgIEFqZkNhbGVuZGFyTW9kdWxlLFxuICAgIEFqZkNoZWNrYm94R3JvdXBNb2R1bGUsXG4gICAgQWpmQ29tbW9uTW9kdWxlLFxuICAgIEFqZkNvcmVGb3Jtc01vZHVsZSxcbiAgICBBamZQYWdlU2xpZGVyTW9kdWxlLFxuICAgIEFqZlRpbWVNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEdpY01vZHVsZSxcbiAgICBJb25pY01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEFqZlRyYW5zbG9jb01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQWpmQmFyY29kZUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZkJvb2xlYW5GaWVsZENvbXBvbmVudCxcbiAgICBBamZEYXRlRmllbGRDb21wb25lbnQsXG4gICAgQWpmRGF0ZUlucHV0RmllbGRDb21wb25lbnQsXG4gICAgQWpmRW1wdHlGaWVsZENvbXBvbmVudCxcbiAgICBBamZGb3JtRmllbGQsXG4gICAgQWpmRm9ybVBhZ2UsXG4gICAgQWpmRm9ybVJlbmRlcmVyLFxuICAgIEFqZkZvcm11bGFGaWVsZENvbXBvbmVudCxcbiAgICBBamZJbnB1dEZpZWxkQ29tcG9uZW50LFxuICAgIEFqZk11bHRpcGxlQ2hvaWNlRmllbGRDb21wb25lbnQsXG4gICAgQWpmTnVtYmVyRmllbGRDb21wb25lbnQsXG4gICAgQWpmUG9wb3ZlcixcbiAgICBBamZSYW5nZUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZlNlbGVjdEhhc1NlYXJjaEJhclBpcGUsXG4gICAgQWpmU2VsZWN0VXNlVmlydHVhbFNjcm9sbCxcbiAgICBBamZTaW5nbGVDaG9pY2VGaWVsZENvbXBvbmVudCxcbiAgICBBamZUYWJsZUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZlRleHRhcmVhRmllbGRDb21wb25lbnQsXG4gICAgQWpmVGltZUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZlZpZGVvVXJsRmllbGRDb21wb25lbnQsXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIEFqZkJhcmNvZGVGaWVsZENvbXBvbmVudCxcbiAgICBBamZCb29sZWFuRmllbGRDb21wb25lbnQsXG4gICAgQWpmRGF0ZUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZkRhdGVJbnB1dEZpZWxkQ29tcG9uZW50LFxuICAgIEFqZkVtcHR5RmllbGRDb21wb25lbnQsXG4gICAgQWpmRm9ybXVsYUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZklucHV0RmllbGRDb21wb25lbnQsXG4gICAgQWpmTXVsdGlwbGVDaG9pY2VGaWVsZENvbXBvbmVudCxcbiAgICBBamZOdW1iZXJGaWVsZENvbXBvbmVudCxcbiAgICBBamZQb3BvdmVyLFxuICAgIEFqZlJhbmdlRmllbGRDb21wb25lbnQsXG4gICAgQWpmU2luZ2xlQ2hvaWNlRmllbGRDb21wb25lbnQsXG4gICAgQWpmVGFibGVGaWVsZENvbXBvbmVudCxcbiAgICBBamZUZXh0YXJlYUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZlRpbWVGaWVsZENvbXBvbmVudCxcbiAgICBBamZWaWRlb1VybEZpZWxkQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbQWpmRm9ybUZpZWxkLCBBamZGb3JtUmVuZGVyZXJdLFxuICBwcm92aWRlcnM6IFtcbiAgICBBamZGaWVsZFNlcnZpY2UsXG4gICAge3Byb3ZpZGU6IEFKRl9XQVJOSU5HX0FMRVJUX1NFUlZJQ0UsIHVzZUNsYXNzOiBBamZXYXJuaW5nQWxlcnRTZXJ2aWNlfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQWpmRm9ybXNNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEFqZkZvcm1zTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBBamZGb3Jtc01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW0FqZkZpZWxkU2VydmljZV0sXG4gICAgfTtcbiAgfVxufVxuIl19