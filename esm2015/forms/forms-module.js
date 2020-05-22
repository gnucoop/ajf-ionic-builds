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
import { __decorate } from "tslib";
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
let AjfFormsModule = /** @class */ (() => {
    var AjfFormsModule_1;
    let AjfFormsModule = AjfFormsModule_1 = class AjfFormsModule {
        static forRoot() {
            return {
                ngModule: AjfFormsModule_1,
                providers: [
                    AjfFieldService,
                ],
            };
        }
    };
    AjfFormsModule = AjfFormsModule_1 = __decorate([
        NgModule({
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
        })
    ], AjfFormsModule);
    return AjfFormsModule;
})();
export { AjfFormsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2lvbmljL2Zvcm1zL2Zvcm1zLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7O0FBRUgsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBQyx5QkFBeUIsRUFBRSxjQUFjLElBQUksa0JBQWtCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBc0IsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBQyxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFFcEQsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sY0FBYyxD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KiBDb3B5cmlnaHQgKEMpIEdudWNvb3Agc29jLiBjb29wLlxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpLlxuICpcbiAqIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLFxuICogb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm9cbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8uXG4gKlxuICovXG5cbmltcG9ydCB7QWpmQ29tbW9uTW9kdWxlfSBmcm9tICdAYWpmL2NvcmUvY29tbW9uJztcbmltcG9ydCB7QUpGX1dBUk5JTkdfQUxFUlRfU0VSVklDRSwgQWpmRm9ybXNNb2R1bGUgYXMgQWpmQ29yZUZvcm1zTW9kdWxlfSBmcm9tICdAYWpmL2NvcmUvZm9ybXMnO1xuaW1wb3J0IHtBamZCYXJjb2RlTW9kdWxlfSBmcm9tICdAYWpmL2lvbmljL2JhcmNvZGUnO1xuaW1wb3J0IHtBamZDYWxlbmRhck1vZHVsZX0gZnJvbSAnQGFqZi9pb25pYy9jYWxlbmRhcic7XG5pbXBvcnQge0FqZkNoZWNrYm94R3JvdXBNb2R1bGV9IGZyb20gJ0BhamYvaW9uaWMvY2hlY2tib3gtZ3JvdXAnO1xuaW1wb3J0IHtBamZQYWdlU2xpZGVyTW9kdWxlfSBmcm9tICdAYWpmL2lvbmljL3BhZ2Utc2xpZGVyJztcbmltcG9ydCB7QWpmVGltZU1vZHVsZX0gZnJvbSAnQGFqZi9pb25pYy90aW1lJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0dpY01vZHVsZX0gZnJvbSAnQGdpYy9hbmd1bGFyJztcbmltcG9ydCB7SW9uaWNNb2R1bGV9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7VHJhbnNsYXRlTW9kdWxlfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuaW1wb3J0IHtBamZCYXJjb2RlRmllbGRDb21wb25lbnR9IGZyb20gJy4vYmFyY29kZS1maWVsZCc7XG5pbXBvcnQge0FqZkJvb2xlYW5GaWVsZENvbXBvbmVudH0gZnJvbSAnLi9ib29sZWFuLWZpZWxkJztcbmltcG9ydCB7QWpmRGF0ZUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL2RhdGUtZmllbGQnO1xuaW1wb3J0IHtBamZEYXRlSW5wdXRGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9kYXRlLWlucHV0LWZpZWxkJztcbmltcG9ydCB7QWpmRW1wdHlGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9lbXB0eS1maWVsZCc7XG5pbXBvcnQge0FqZkZvcm1GaWVsZH0gZnJvbSAnLi9maWVsZCc7XG5pbXBvcnQge0FqZkZpZWxkU2VydmljZX0gZnJvbSAnLi9maWVsZC1zZXJ2aWNlJztcbmltcG9ydCB7QWpmRm9ybVJlbmRlcmVyfSBmcm9tICcuL2Zvcm0nO1xuaW1wb3J0IHtBamZGb3JtUGFnZX0gZnJvbSAnLi9mb3JtLXBhZ2UnO1xuaW1wb3J0IHtBamZGb3JtdWxhRmllbGRDb21wb25lbnR9IGZyb20gJy4vZm9ybXVsYS1maWVsZCc7XG5pbXBvcnQge0FqZklucHV0RmllbGRDb21wb25lbnR9IGZyb20gJy4vaW5wdXQtZmllbGQnO1xuaW1wb3J0IHtBamZNdWx0aXBsZUNob2ljZUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL211bHRpcGxlLWNob2ljZS1maWVsZCc7XG5pbXBvcnQge0FqZk51bWJlckZpZWxkQ29tcG9uZW50fSBmcm9tICcuL251bWJlci1maWVsZCc7XG5pbXBvcnQge0FqZlNlbGVjdEhhc1NlYXJjaEJhclBpcGV9IGZyb20gJy4vc2VsZWN0LWhhcy1zZWFyY2gtYmFyLnBpcGUnO1xuaW1wb3J0IHtBamZTZWxlY3RVc2VWaXJ0dWFsU2Nyb2xsfSBmcm9tICcuL3NlbGVjdC11c2UtdmlydHVhbC1zY3JvbGwucGlwZSc7XG5pbXBvcnQge0FqZlNpbmdsZUNob2ljZUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL3NpbmdsZS1jaG9pY2UtZmllbGQnO1xuaW1wb3J0IHtBamZUYWJsZUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL3RhYmxlLWZpZWxkJztcbmltcG9ydCB7QWpmVGV4dGFyZWFGaWVsZENvbXBvbmVudH0gZnJvbSAnLi90ZXh0YXJlYS1maWVsZCc7XG5pbXBvcnQge0FqZlRpbWVGaWVsZENvbXBvbmVudH0gZnJvbSAnLi90aW1lLWZpZWxkJztcbmltcG9ydCB7QWpmV2FybmluZ0FsZXJ0U2VydmljZX0gZnJvbSAnLi93YXJuaW5nLWFsZXJ0LXNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQWpmQmFyY29kZU1vZHVsZSxcbiAgICBBamZDYWxlbmRhck1vZHVsZSxcbiAgICBBamZDaGVja2JveEdyb3VwTW9kdWxlLFxuICAgIEFqZkNvbW1vbk1vZHVsZSxcbiAgICBBamZDb3JlRm9ybXNNb2R1bGUsXG4gICAgQWpmUGFnZVNsaWRlck1vZHVsZSxcbiAgICBBamZUaW1lTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBHaWNNb2R1bGUsXG4gICAgSW9uaWNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFqZkJhcmNvZGVGaWVsZENvbXBvbmVudCxcbiAgICBBamZCb29sZWFuRmllbGRDb21wb25lbnQsXG4gICAgQWpmRGF0ZUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZkRhdGVJbnB1dEZpZWxkQ29tcG9uZW50LFxuICAgIEFqZkVtcHR5RmllbGRDb21wb25lbnQsXG4gICAgQWpmRm9ybUZpZWxkLFxuICAgIEFqZkZvcm1QYWdlLFxuICAgIEFqZkZvcm1SZW5kZXJlcixcbiAgICBBamZGb3JtdWxhRmllbGRDb21wb25lbnQsXG4gICAgQWpmSW5wdXRGaWVsZENvbXBvbmVudCxcbiAgICBBamZNdWx0aXBsZUNob2ljZUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZk51bWJlckZpZWxkQ29tcG9uZW50LFxuICAgIEFqZlNlbGVjdEhhc1NlYXJjaEJhclBpcGUsXG4gICAgQWpmU2VsZWN0VXNlVmlydHVhbFNjcm9sbCxcbiAgICBBamZTaW5nbGVDaG9pY2VGaWVsZENvbXBvbmVudCxcbiAgICBBamZUYWJsZUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZlRleHRhcmVhRmllbGRDb21wb25lbnQsXG4gICAgQWpmVGltZUZpZWxkQ29tcG9uZW50LFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBBamZCYXJjb2RlRmllbGRDb21wb25lbnQsXG4gICAgQWpmQm9vbGVhbkZpZWxkQ29tcG9uZW50LFxuICAgIEFqZkRhdGVGaWVsZENvbXBvbmVudCxcbiAgICBBamZEYXRlSW5wdXRGaWVsZENvbXBvbmVudCxcbiAgICBBamZFbXB0eUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZkZvcm11bGFGaWVsZENvbXBvbmVudCxcbiAgICBBamZJbnB1dEZpZWxkQ29tcG9uZW50LFxuICAgIEFqZk11bHRpcGxlQ2hvaWNlRmllbGRDb21wb25lbnQsXG4gICAgQWpmTnVtYmVyRmllbGRDb21wb25lbnQsXG4gICAgQWpmU2luZ2xlQ2hvaWNlRmllbGRDb21wb25lbnQsXG4gICAgQWpmVGFibGVGaWVsZENvbXBvbmVudCxcbiAgICBBamZUZXh0YXJlYUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZlRpbWVGaWVsZENvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEFqZkZvcm1GaWVsZCxcbiAgICBBamZGb3JtUmVuZGVyZXIsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEFqZkZpZWxkU2VydmljZSxcbiAgICB7cHJvdmlkZTogQUpGX1dBUk5JTkdfQUxFUlRfU0VSVklDRSwgdXNlQ2xhc3M6IEFqZldhcm5pbmdBbGVydFNlcnZpY2V9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBBamZGb3Jtc01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8QWpmRm9ybXNNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFqZkZvcm1zTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEFqZkZpZWxkU2VydmljZSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19