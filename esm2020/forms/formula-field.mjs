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
import { AJF_WARNING_ALERT_SERVICE, AjfBaseFieldComponent, } from '@ajf/core/forms';
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, ViewChild, ViewEncapsulation, } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { filter, map, startWith, switchMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@ajf/core/forms";
import * as i2 from "@ionic/angular";
import * as i3 from "@angular/common";
import * as i4 from "./warning-alert-service";
export class AjfFormulaFieldComponent extends AjfBaseFieldComponent {
    constructor(cdr, service, was) {
        super(cdr, service, was);
        this._onChangeEvt = new EventEmitter();
        this._onChangeSub = Subscription.EMPTY;
        const control$ = this.control.pipe(filter(control => control != null));
        const controlValue$ = control$.pipe(switchMap(control => this._onChangeEvt.pipe(map(value => ({ control, value })))));
        this._onChangeSub = controlValue$.subscribe(({ control, value }) => {
            try {
                const v = parseFloat(value);
                value = v;
            }
            catch (e) { }
            control.setValue(value);
        });
        this.value = this.control.pipe(filter(control => control != null), switchMap(control => control.valueChanges.pipe(startWith(control.value))));
    }
    ngOnDestroy() {
        this._onChangeEvt.complete();
        this._onChangeSub.unsubscribe();
    }
    onChange(event) {
        const evt = event;
        if (evt.detail == null) {
            return;
        }
        this._onChangeEvt.emit(evt.detail.value);
    }
}
AjfFormulaFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: AjfFormulaFieldComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.AjfFormRendererService }, { token: AJF_WARNING_ALERT_SERVICE }], target: i0.ɵɵFactoryTarget.Component });
AjfFormulaFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.4", type: AjfFormulaFieldComponent, selector: "ng-component", viewQueries: [{ propertyName: "input", first: true, predicate: IonInput, descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<ion-input type=\"text\" [readonly]=\"true\" [value]=\"value|async\" (ionChange)=\"onChange($event)\"></ion-input>\n", styles: [""], dependencies: [{ kind: "component", type: i2.IonInput, selector: "ion-input", inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "spellcheck", "step", "type", "value"] }, { kind: "directive", type: i2.TextValueAccessor, selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar" }, { kind: "pipe", type: i3.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: AjfFormulaFieldComponent, decorators: [{
            type: Component,
            args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ion-input type=\"text\" [readonly]=\"true\" [value]=\"value|async\" (ionChange)=\"onChange($event)\"></ion-input>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.AjfFormRendererService }, { type: i4.AjfWarningAlertService, decorators: [{
                    type: Inject,
                    args: [AJF_WARNING_ALERT_SERVICE]
                }] }]; }, propDecorators: { input: [{
                type: ViewChild,
                args: [IonInput, { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXVsYS1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2lvbmljL2Zvcm1zL3NyYy9mb3JtdWxhLWZpZWxkLnRzIiwiLi4vLi4vLi4vLi4vcHJvamVjdHMvaW9uaWMvZm9ybXMvc3JjL2Zvcm11bGEtZmllbGQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFFSCxPQUFPLEVBQ0wseUJBQXlCLEVBQ3pCLHFCQUFxQixHQUd0QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBRU4sU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFhLFlBQVksRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQVVqRSxNQUFNLE9BQU8sd0JBQ1gsU0FBUSxxQkFBOEM7SUFVdEQsWUFDRSxHQUFzQixFQUN0QixPQUErQixFQUNJLEdBQTJCO1FBRTlELEtBQUssQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBUm5CLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN2QyxpQkFBWSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFTeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ2hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FDRCxDQUFDO1FBQ3BDLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQ2pDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDdEIsQ0FBQztRQUUzRCxJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUMsRUFBRSxFQUFFO1lBQy9ELElBQUk7Z0JBQ0YsTUFBTSxDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1QixLQUFLLEdBQUcsQ0FBQyxDQUFDO2FBQ1g7WUFBQyxPQUFPLENBQUMsRUFBRSxHQUFFO1lBQ2QsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQzVCLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsRUFDbEMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQzVFLENBQUM7SUFDSixDQUFDO0lBRVEsV0FBVztRQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFZO1FBQ25CLE1BQU0sR0FBRyxHQUFHLEtBQTRDLENBQUM7UUFDekQsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtZQUN0QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7O3FIQWxEVSx3QkFBd0IseUZBY3pCLHlCQUF5Qjt5R0FkeEIsd0JBQXdCLDJGQUl4QixRQUFRLHFGQ3hEckIsc0hBQ0E7MkZEbURhLHdCQUF3QjtrQkFOcEMsU0FBUztzQ0FHUyx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJOzswQkFnQmxDLE1BQU07MkJBQUMseUJBQXlCOzRDQVZFLEtBQUs7c0JBQXpDLFNBQVM7dUJBQUMsUUFBUSxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoQykgR251Y29vcCBzb2MuIGNvb3AuXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhc1xuICogcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsXG4gKiBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVyb1xuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpLlxuICogSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLy5cbiAqXG4gKi9cblxuaW1wb3J0IHtcbiAgQUpGX1dBUk5JTkdfQUxFUlRfU0VSVklDRSxcbiAgQWpmQmFzZUZpZWxkQ29tcG9uZW50LFxuICBBamZGb3JtUmVuZGVyZXJTZXJ2aWNlLFxuICBBamZGb3JtdWxhRmllbGRJbnN0YW5jZSxcbn0gZnJvbSAnQGFqZi9jb3JlL2Zvcm1zJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgT25EZXN0cm95LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VW50eXBlZEZvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0lvbklucHV0fSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQge0lucHV0Q2hhbmdlRXZlbnREZXRhaWx9IGZyb20gJ0Bpb25pYy9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZmlsdGVyLCBtYXAsIHN0YXJ0V2l0aCwgc3dpdGNoTWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7QWpmV2FybmluZ0FsZXJ0U2VydmljZX0gZnJvbSAnLi93YXJuaW5nLWFsZXJ0LXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGVVcmw6ICdmb3JtdWxhLWZpZWxkLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZm9ybXVsYS1maWVsZC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBBamZGb3JtdWxhRmllbGRDb21wb25lbnRcbiAgZXh0ZW5kcyBBamZCYXNlRmllbGRDb21wb25lbnQ8QWpmRm9ybXVsYUZpZWxkSW5zdGFuY2U+XG4gIGltcGxlbWVudHMgT25EZXN0cm95XG57XG4gIEBWaWV3Q2hpbGQoSW9uSW5wdXQsIHtzdGF0aWM6IHRydWV9KSBpbnB1dCE6IElvbklucHV0O1xuXG4gIHJlYWRvbmx5IHZhbHVlOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgcHJpdmF0ZSBfb25DaGFuZ2VFdnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgcHJpdmF0ZSBfb25DaGFuZ2VTdWIgPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBzZXJ2aWNlOiBBamZGb3JtUmVuZGVyZXJTZXJ2aWNlLFxuICAgIEBJbmplY3QoQUpGX1dBUk5JTkdfQUxFUlRfU0VSVklDRSkgd2FzOiBBamZXYXJuaW5nQWxlcnRTZXJ2aWNlLFxuICApIHtcbiAgICBzdXBlcihjZHIsIHNlcnZpY2UsIHdhcyk7XG5cbiAgICBjb25zdCBjb250cm9sJCA9IHRoaXMuY29udHJvbC5waXBlKFxuICAgICAgZmlsdGVyKGNvbnRyb2wgPT4gY29udHJvbCAhPSBudWxsKSxcbiAgICApIGFzIE9ic2VydmFibGU8VW50eXBlZEZvcm1Db250cm9sPjtcbiAgICBjb25zdCBjb250cm9sVmFsdWUkID0gY29udHJvbCQucGlwZShcbiAgICAgIHN3aXRjaE1hcChjb250cm9sID0+IHRoaXMuX29uQ2hhbmdlRXZ0LnBpcGUobWFwKHZhbHVlID0+ICh7Y29udHJvbCwgdmFsdWV9KSkpKSxcbiAgICApIGFzIE9ic2VydmFibGU8e2NvbnRyb2w6IFVudHlwZWRGb3JtQ29udHJvbDsgdmFsdWU6IGFueX0+O1xuXG4gICAgdGhpcy5fb25DaGFuZ2VTdWIgPSBjb250cm9sVmFsdWUkLnN1YnNjcmliZSgoe2NvbnRyb2wsIHZhbHVlfSkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdiA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgICAgICB2YWx1ZSA9IHY7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgY29udHJvbC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnZhbHVlID0gdGhpcy5jb250cm9sLnBpcGUoXG4gICAgICBmaWx0ZXIoY29udHJvbCA9PiBjb250cm9sICE9IG51bGwpLFxuICAgICAgc3dpdGNoTWFwKGNvbnRyb2wgPT4gY29udHJvbCEudmFsdWVDaGFuZ2VzLnBpcGUoc3RhcnRXaXRoKGNvbnRyb2whLnZhbHVlKSkpLFxuICAgICk7XG4gIH1cblxuICBvdmVycmlkZSBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZUV2dC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX29uQ2hhbmdlU3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBvbkNoYW5nZShldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBldnQgPSBldmVudCBhcyBDdXN0b21FdmVudDxJbnB1dENoYW5nZUV2ZW50RGV0YWlsPjtcbiAgICBpZiAoZXZ0LmRldGFpbCA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX29uQ2hhbmdlRXZ0LmVtaXQoZXZ0LmRldGFpbC52YWx1ZSk7XG4gIH1cbn1cbiIsIjxpb24taW5wdXQgdHlwZT1cInRleHRcIiBbcmVhZG9ubHldPVwidHJ1ZVwiIFt2YWx1ZV09XCJ2YWx1ZXxhc3luY1wiIChpb25DaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiPjwvaW9uLWlucHV0PlxuIl19