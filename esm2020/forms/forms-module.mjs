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
AjfFormsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: AjfFormsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AjfFormsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.4", ngImport: i0, type: AjfFormsModule, declarations: [AjfBarcodeFieldComponent,
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
AjfFormsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: AjfFormsModule, providers: [
        AjfFieldService,
        { provide: AJF_WARNING_ALERT_SERVICE, useClass: AjfWarningAlertService },
    ], imports: [AjfBarcodeModule,
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
        AjfTranslocoModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: AjfFormsModule, decorators: [{
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
                    exports: [AjfFormField, AjfFormRenderer],
                    providers: [
                        AjfFieldService,
                        { provide: AJF_WARNING_ALERT_SERVICE, useClass: AjfWarningAlertService },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvaW9uaWMvZm9ybXMvc3JjL2Zvcm1zLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFFSCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFDLHlCQUF5QixFQUFFLGNBQWMsSUFBSSxlQUFlLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3RixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBc0IsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBQyxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxjQUFj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LG1CQUFtQjt3QkFDbkIsYUFBYTt3QkFDYixZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsV0FBVzt3QkFDWCxTQUFTO3dCQUNULFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixrQkFBa0I7cUJBQ25CO29CQUNELFlBQVksRUFBRTt3QkFDWix3QkFBd0I7d0JBQ3hCLHdCQUF3Qjt3QkFDeEIscUJBQXFCO3dCQUNyQiwwQkFBMEI7d0JBQzFCLHNCQUFzQjt3QkFDdEIsWUFBWTt3QkFDWixXQUFXO3dCQUNYLGVBQWU7d0JBQ2Ysd0JBQXdCO3dCQUN4QixzQkFBc0I7d0JBQ3RCLCtCQUErQjt3QkFDL0IsdUJBQXVCO3dCQUN2QixVQUFVO3dCQUNWLHNCQUFzQjt3QkFDdEIseUJBQXlCO3dCQUN6Qix5QkFBeUI7d0JBQ3pCLDZCQUE2Qjt3QkFDN0Isc0JBQXNCO3dCQUN0Qix5QkFBeUI7d0JBQ3pCLHFCQUFxQjt3QkFDckIseUJBQXlCO3FCQUMxQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDO29CQUN4QyxTQUFTLEVBQUU7d0JBQ1QsZUFBZTt3QkFDZixFQUFDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUM7cUJBQ3ZFO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChDKSBHbnVjb29wIHNvYy4gY29vcC5cbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSxcbiAqIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKiBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvLlxuICpcbiAqL1xuXG5pbXBvcnQge0FqZkNvbW1vbk1vZHVsZX0gZnJvbSAnQGFqZi9jb3JlL2NvbW1vbic7XG5pbXBvcnQge0FKRl9XQVJOSU5HX0FMRVJUX1NFUlZJQ0UsIEFqZkZvcm1zTW9kdWxlIGFzIENvcmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFqZi9jb3JlL2Zvcm1zJztcbmltcG9ydCB7QWpmVHJhbnNsb2NvTW9kdWxlfSBmcm9tICdAYWpmL2NvcmUvdHJhbnNsb2NvJztcbmltcG9ydCB7QWpmQmFyY29kZU1vZHVsZX0gZnJvbSAnQGFqZi9pb25pYy9iYXJjb2RlJztcbmltcG9ydCB7QWpmQ2FsZW5kYXJNb2R1bGV9IGZyb20gJ0BhamYvaW9uaWMvY2FsZW5kYXInO1xuaW1wb3J0IHtBamZDaGVja2JveEdyb3VwTW9kdWxlfSBmcm9tICdAYWpmL2lvbmljL2NoZWNrYm94LWdyb3VwJztcbmltcG9ydCB7QWpmUGFnZVNsaWRlck1vZHVsZX0gZnJvbSAnQGFqZi9pb25pYy9wYWdlLXNsaWRlcic7XG5pbXBvcnQge0FqZlRpbWVNb2R1bGV9IGZyb20gJ0BhamYvaW9uaWMvdGltZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtHaWNNb2R1bGV9IGZyb20gJ0BnaWMvYW5ndWxhcic7XG5pbXBvcnQge0lvbmljTW9kdWxlfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5cbmltcG9ydCB7QWpmQmFyY29kZUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL2JhcmNvZGUtZmllbGQnO1xuaW1wb3J0IHtBamZCb29sZWFuRmllbGRDb21wb25lbnR9IGZyb20gJy4vYm9vbGVhbi1maWVsZCc7XG5pbXBvcnQge0FqZkRhdGVGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9kYXRlLWZpZWxkJztcbmltcG9ydCB7QWpmRGF0ZUlucHV0RmllbGRDb21wb25lbnR9IGZyb20gJy4vZGF0ZS1pbnB1dC1maWVsZCc7XG5pbXBvcnQge0FqZkVtcHR5RmllbGRDb21wb25lbnR9IGZyb20gJy4vZW1wdHktZmllbGQnO1xuaW1wb3J0IHtBamZGb3JtRmllbGR9IGZyb20gJy4vZmllbGQnO1xuaW1wb3J0IHtBamZGaWVsZFNlcnZpY2V9IGZyb20gJy4vZmllbGQtc2VydmljZSc7XG5pbXBvcnQge0FqZkZvcm1SZW5kZXJlcn0gZnJvbSAnLi9mb3JtJztcbmltcG9ydCB7QWpmRm9ybVBhZ2V9IGZyb20gJy4vZm9ybS1wYWdlJztcbmltcG9ydCB7QWpmRm9ybXVsYUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL2Zvcm11bGEtZmllbGQnO1xuaW1wb3J0IHtBamZJbnB1dEZpZWxkQ29tcG9uZW50fSBmcm9tICcuL2lucHV0LWZpZWxkJztcbmltcG9ydCB7QWpmTXVsdGlwbGVDaG9pY2VGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9tdWx0aXBsZS1jaG9pY2UtZmllbGQnO1xuaW1wb3J0IHtBamZOdW1iZXJGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9udW1iZXItZmllbGQnO1xuaW1wb3J0IHtBamZQb3BvdmVyfSBmcm9tICcuL3BvcG92ZXInO1xuaW1wb3J0IHtBamZSYW5nZUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL3JhbmdlLWZpZWxkJztcbmltcG9ydCB7QWpmU2VsZWN0SGFzU2VhcmNoQmFyUGlwZX0gZnJvbSAnLi9zZWxlY3QtaGFzLXNlYXJjaC1iYXIucGlwZSc7XG5pbXBvcnQge0FqZlNlbGVjdFVzZVZpcnR1YWxTY3JvbGx9IGZyb20gJy4vc2VsZWN0LXVzZS12aXJ0dWFsLXNjcm9sbC5waXBlJztcbmltcG9ydCB7QWpmU2luZ2xlQ2hvaWNlRmllbGRDb21wb25lbnR9IGZyb20gJy4vc2luZ2xlLWNob2ljZS1maWVsZCc7XG5pbXBvcnQge0FqZlRhYmxlRmllbGRDb21wb25lbnR9IGZyb20gJy4vdGFibGUtZmllbGQnO1xuaW1wb3J0IHtBamZUZXh0YXJlYUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL3RleHRhcmVhLWZpZWxkJztcbmltcG9ydCB7QWpmVGltZUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL3RpbWUtZmllbGQnO1xuaW1wb3J0IHtBamZWaWRlb1VybEZpZWxkQ29tcG9uZW50fSBmcm9tICcuL3ZpZGVvLXVybC1maWVsZCc7XG5pbXBvcnQge0FqZldhcm5pbmdBbGVydFNlcnZpY2V9IGZyb20gJy4vd2FybmluZy1hbGVydC1zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEFqZkJhcmNvZGVNb2R1bGUsXG4gICAgQWpmQ2FsZW5kYXJNb2R1bGUsXG4gICAgQWpmQ2hlY2tib3hHcm91cE1vZHVsZSxcbiAgICBBamZDb21tb25Nb2R1bGUsXG4gICAgQWpmUGFnZVNsaWRlck1vZHVsZSxcbiAgICBBamZUaW1lTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDb3JlRm9ybXNNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgR2ljTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgQWpmVHJhbnNsb2NvTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBamZCYXJjb2RlRmllbGRDb21wb25lbnQsXG4gICAgQWpmQm9vbGVhbkZpZWxkQ29tcG9uZW50LFxuICAgIEFqZkRhdGVGaWVsZENvbXBvbmVudCxcbiAgICBBamZEYXRlSW5wdXRGaWVsZENvbXBvbmVudCxcbiAgICBBamZFbXB0eUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZkZvcm1GaWVsZCxcbiAgICBBamZGb3JtUGFnZSxcbiAgICBBamZGb3JtUmVuZGVyZXIsXG4gICAgQWpmRm9ybXVsYUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZklucHV0RmllbGRDb21wb25lbnQsXG4gICAgQWpmTXVsdGlwbGVDaG9pY2VGaWVsZENvbXBvbmVudCxcbiAgICBBamZOdW1iZXJGaWVsZENvbXBvbmVudCxcbiAgICBBamZQb3BvdmVyLFxuICAgIEFqZlJhbmdlRmllbGRDb21wb25lbnQsXG4gICAgQWpmU2VsZWN0SGFzU2VhcmNoQmFyUGlwZSxcbiAgICBBamZTZWxlY3RVc2VWaXJ0dWFsU2Nyb2xsLFxuICAgIEFqZlNpbmdsZUNob2ljZUZpZWxkQ29tcG9uZW50LFxuICAgIEFqZlRhYmxlRmllbGRDb21wb25lbnQsXG4gICAgQWpmVGV4dGFyZWFGaWVsZENvbXBvbmVudCxcbiAgICBBamZUaW1lRmllbGRDb21wb25lbnQsXG4gICAgQWpmVmlkZW9VcmxGaWVsZENvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW0FqZkZvcm1GaWVsZCwgQWpmRm9ybVJlbmRlcmVyXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQWpmRmllbGRTZXJ2aWNlLFxuICAgIHtwcm92aWRlOiBBSkZfV0FSTklOR19BTEVSVF9TRVJWSUNFLCB1c2VDbGFzczogQWpmV2FybmluZ0FsZXJ0U2VydmljZX0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEFqZkZvcm1zTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxBamZGb3Jtc01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQWpmRm9ybXNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtBamZGaWVsZFNlcnZpY2VdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==