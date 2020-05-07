/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/forms/formula-field.ts
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
import { AJF_WARNING_ALERT_SERVICE, AjfBaseFieldComponent, AjfFormRendererService } from '@ajf/core/forms';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, ViewChild, ViewEncapsulation } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { filter, map, startWith, switchMap } from 'rxjs/operators';
import { AjfWarningAlertService } from './warning-alert-service';
export class AjfFormulaFieldComponent extends AjfBaseFieldComponent {
    /**
     * @param {?} cdr
     * @param {?} service
     * @param {?} was
     */
    constructor(cdr, service, was) {
        super(cdr, service, was);
        this._onChangeEvt = new EventEmitter();
        this._onChangeSub = Subscription.EMPTY;
        /** @type {?} */
        const control$ = this.control.pipe(filter((/**
         * @param {?} control
         * @return {?}
         */
        control => control != null)));
        this._onChangeSub =
            control$
                .pipe(switchMap((/**
             * @param {?} control
             * @return {?}
             */
            control => this._onChangeEvt.pipe(map((/**
             * @param {?} value
             * @return {?}
             */
            value => ({ control, value })))))))
                .subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            ({ control, value }) => {
                try {
                    /** @type {?} */
                    const v = parseFloat(value);
                    value = v;
                }
                catch (e) {
                }
                (/** @type {?} */ (control)).setValue(value);
            }));
        this.value = this.control.pipe(filter((/**
         * @param {?} control
         * @return {?}
         */
        control => control != null)), switchMap((/**
         * @param {?} control
         * @return {?}
         */
        control => (/** @type {?} */ (control)).valueChanges.pipe(startWith((/** @type {?} */ (control)).value)))));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._onChangeEvt.complete();
        this._onChangeSub.unsubscribe();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        /** @type {?} */
        const evt = (/** @type {?} */ (event));
        if (evt.detail == null) {
            return;
        }
        this._onChangeEvt.emit(evt.detail.value);
    }
}
AjfFormulaFieldComponent.decorators = [
    { type: Component, args: [{
                template: "<ion-input type=\"text\" [readonly]=\"true\" [value]=\"value|async\" (ionChange)=\"onChange($event)\"></ion-input>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["\n"]
            }] }
];
/** @nocollapse */
AjfFormulaFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService, decorators: [{ type: Inject, args: [AJF_WARNING_ALERT_SERVICE,] }] }
];
AjfFormulaFieldComponent.propDecorators = {
    input: [{ type: ViewChild, args: [IonInput, { static: true },] }]
};
if (false) {
    /** @type {?} */
    AjfFormulaFieldComponent.prototype.input;
    /** @type {?} */
    AjfFormulaFieldComponent.prototype.value;
    /**
     * @type {?}
     * @private
     */
    AjfFormulaFieldComponent.prototype._onChangeEvt;
    /**
     * @type {?}
     * @private
     */
    AjfFormulaFieldComponent.prototype._onChangeSub;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXVsYS1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9pb25pYy9mb3Jtcy9mb3JtdWxhLWZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBLE9BQU8sRUFDTCx5QkFBeUIsRUFDekIscUJBQXFCLEVBQ3JCLHNCQUFzQixFQUV2QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRXhDLE9BQU8sRUFBYSxZQUFZLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRWpFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBUS9ELE1BQU0sT0FBTyx3QkFBeUIsU0FDbEMscUJBQThDOzs7Ozs7SUFRaEQsWUFDSSxHQUFzQixFQUFFLE9BQStCLEVBQ3BCLEdBQTJCO1FBQ2hFLEtBQUssQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBTm5CLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN2QyxpQkFBWSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7O2NBT2xDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDOUIsTUFBTTs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxJQUFJLElBQUksRUFBQyxDQUNyQztRQUVELElBQUksQ0FBQyxZQUFZO1lBQ2IsUUFBUTtpQkFDSCxJQUFJLENBQ0QsU0FBUzs7OztZQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztZQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUM3RTtpQkFDSixTQUFTOzs7O1lBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUMsRUFBRSxFQUFFO2dCQUM5QixJQUFJOzswQkFDSSxDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztvQkFDM0IsS0FBSyxHQUFHLENBQUMsQ0FBQztpQkFDWDtnQkFBQyxPQUFPLENBQUMsRUFBRTtpQkFDWDtnQkFDRCxtQkFBQSxPQUFPLEVBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxFQUFDLENBQUM7UUFFWCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUMxQixNQUFNOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFDLEVBQ2xDLFNBQVM7Ozs7UUFDTCxPQUFPLENBQUMsRUFBRSxDQUFDLG1CQUFBLE9BQU8sRUFBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQ2pDLFNBQVMsQ0FBQyxtQkFBQSxPQUFPLEVBQUMsQ0FBQyxLQUFLLENBQUMsQ0FDeEIsRUFBQyxDQUNiLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFZOztjQUNiLEdBQUcsR0FBRyxtQkFBQSxLQUFLLEVBQXVDO1FBQ3hELElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDdEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7WUExREYsU0FBUyxTQUFDO2dCQUNULGdJQUFpQztnQkFFakMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7OztZQXBCQyxpQkFBaUI7WUFMakIsc0JBQXNCO1lBa0JoQixzQkFBc0IsdUJBbUJ2QixNQUFNLFNBQUMseUJBQXlCOzs7b0JBVHBDLFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDOzs7O0lBQW5DLHlDQUFxRDs7SUFFckQseUNBQWdDOzs7OztJQUVoQyxnREFBK0M7Ozs7O0lBQy9DLGdEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoQykgR251Y29vcCBzb2MuIGNvb3AuXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhc1xuICogcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsXG4gKiBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVyb1xuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpLlxuICogSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLy5cbiAqXG4gKi9cblxuaW1wb3J0IHtcbiAgQUpGX1dBUk5JTkdfQUxFUlRfU0VSVklDRSxcbiAgQWpmQmFzZUZpZWxkQ29tcG9uZW50LFxuICBBamZGb3JtUmVuZGVyZXJTZXJ2aWNlLFxuICBBamZGb3JtdWxhRmllbGRJbnN0YW5jZVxufSBmcm9tICdAYWpmL2NvcmUvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBPbkRlc3Ryb3ksXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lvbklucHV0fSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQge0lucHV0Q2hhbmdlRXZlbnREZXRhaWx9IGZyb20gJ0Bpb25pYy9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZmlsdGVyLCBtYXAsIHN0YXJ0V2l0aCwgc3dpdGNoTWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7QWpmV2FybmluZ0FsZXJ0U2VydmljZX0gZnJvbSAnLi93YXJuaW5nLWFsZXJ0LXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGVVcmw6ICdmb3JtdWxhLWZpZWxkLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZm9ybXVsYS1maWVsZC5jc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEFqZkZvcm11bGFGaWVsZENvbXBvbmVudCBleHRlbmRzXG4gICAgQWpmQmFzZUZpZWxkQ29tcG9uZW50PEFqZkZvcm11bGFGaWVsZEluc3RhbmNlPiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoSW9uSW5wdXQsIHtzdGF0aWM6IHRydWV9KSBpbnB1dDogSW9uSW5wdXQ7XG5cbiAgcmVhZG9ubHkgdmFsdWU6IE9ic2VydmFibGU8YW55PjtcblxuICBwcml2YXRlIF9vbkNoYW5nZUV2dCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBwcml2YXRlIF9vbkNoYW5nZVN1YiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHNlcnZpY2U6IEFqZkZvcm1SZW5kZXJlclNlcnZpY2UsXG4gICAgICBASW5qZWN0KEFKRl9XQVJOSU5HX0FMRVJUX1NFUlZJQ0UpIHdhczogQWpmV2FybmluZ0FsZXJ0U2VydmljZSkge1xuICAgIHN1cGVyKGNkciwgc2VydmljZSwgd2FzKTtcblxuICAgIGNvbnN0IGNvbnRyb2wkID0gdGhpcy5jb250cm9sLnBpcGUoXG4gICAgICAgIGZpbHRlcihjb250cm9sID0+IGNvbnRyb2wgIT0gbnVsbCksXG4gICAgKTtcblxuICAgIHRoaXMuX29uQ2hhbmdlU3ViID1cbiAgICAgICAgY29udHJvbCRcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIHN3aXRjaE1hcChjb250cm9sID0+IHRoaXMuX29uQ2hhbmdlRXZ0LnBpcGUobWFwKHZhbHVlID0+ICh7Y29udHJvbCwgdmFsdWV9KSkpKSxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCh7Y29udHJvbCwgdmFsdWV9KSA9PiB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdiA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdjtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRyb2whLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuY29udHJvbC5waXBlKFxuICAgICAgICBmaWx0ZXIoY29udHJvbCA9PiBjb250cm9sICE9IG51bGwpLFxuICAgICAgICBzd2l0Y2hNYXAoXG4gICAgICAgICAgICBjb250cm9sID0+IGNvbnRyb2whLnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgICAgICAgICAgIHN0YXJ0V2l0aChjb250cm9sIS52YWx1ZSksXG4gICAgICAgICAgICAgICAgKSksXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlRXZ0LmNvbXBsZXRlKCk7XG4gICAgdGhpcy5fb25DaGFuZ2VTdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGV2dCA9IGV2ZW50IGFzIEN1c3RvbUV2ZW50PElucHV0Q2hhbmdlRXZlbnREZXRhaWw+O1xuICAgIGlmIChldnQuZGV0YWlsID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fb25DaGFuZ2VFdnQuZW1pdChldnQuZGV0YWlsLnZhbHVlKTtcbiAgfVxufVxuIl19