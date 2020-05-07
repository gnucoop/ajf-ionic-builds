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
import { __extends } from "tslib";
import { AJF_WARNING_ALERT_SERVICE, AjfBaseFieldComponent, AjfFormRendererService } from '@ajf/core/forms';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, ViewChild, ViewEncapsulation } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { filter, map, startWith, switchMap } from 'rxjs/operators';
import { AjfWarningAlertService } from './warning-alert-service';
var AjfFormulaFieldComponent = /** @class */ (function (_super) {
    __extends(AjfFormulaFieldComponent, _super);
    function AjfFormulaFieldComponent(cdr, service, was) {
        var _this = _super.call(this, cdr, service, was) || this;
        _this._onChangeEvt = new EventEmitter();
        _this._onChangeSub = Subscription.EMPTY;
        var control$ = _this.control.pipe(filter(function (control) { return control != null; }));
        _this._onChangeSub =
            control$
                .pipe(switchMap(function (control) { return _this._onChangeEvt.pipe(map(function (value) { return ({ control: control, value: value }); })); }))
                .subscribe(function (_a) {
                var control = _a.control, value = _a.value;
                try {
                    var v = parseFloat(value);
                    value = v;
                }
                catch (e) {
                }
                control.setValue(value);
            });
        _this.value = _this.control.pipe(filter(function (control) { return control != null; }), switchMap(function (control) { return control.valueChanges.pipe(startWith(control.value)); }));
        return _this;
    }
    AjfFormulaFieldComponent.prototype.ngOnDestroy = function () {
        this._onChangeEvt.complete();
        this._onChangeSub.unsubscribe();
    };
    AjfFormulaFieldComponent.prototype.onChange = function (event) {
        var evt = event;
        if (evt.detail == null) {
            return;
        }
        this._onChangeEvt.emit(evt.detail.value);
    };
    AjfFormulaFieldComponent.decorators = [
        { type: Component, args: [{
                    template: "<ion-input type=\"text\" [readonly]=\"true\" [value]=\"value|async\" (ionChange)=\"onChange($event)\"></ion-input>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: ["\n"]
                }] }
    ];
    /** @nocollapse */
    AjfFormulaFieldComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: AjfFormRendererService },
        { type: AjfWarningAlertService, decorators: [{ type: Inject, args: [AJF_WARNING_ALERT_SERVICE,] }] }
    ]; };
    AjfFormulaFieldComponent.propDecorators = {
        input: [{ type: ViewChild, args: [IonInput, { static: true },] }]
    };
    return AjfFormulaFieldComponent;
}(AjfBaseFieldComponent));
export { AjfFormulaFieldComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXVsYS1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9pb25pYy9mb3Jtcy9mb3JtdWxhLWZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRzs7QUFFSCxPQUFPLEVBQ0wseUJBQXlCLEVBQ3pCLHFCQUFxQixFQUNyQixzQkFBc0IsRUFFdkIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLE1BQU0sRUFFTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QyxPQUFPLEVBQWEsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUUvRDtJQU9JLDRDQUE4QztJQVFoRCxrQ0FDSSxHQUFzQixFQUFFLE9BQStCLEVBQ3BCLEdBQTJCO1FBRmxFLFlBR0Usa0JBQU0sR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsU0EyQnpCO1FBakNPLGtCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN2QyxrQkFBWSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFPeEMsSUFBTSxRQUFRLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQzlCLE1BQU0sQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sSUFBSSxJQUFJLEVBQWYsQ0FBZSxDQUFDLENBQ3JDLENBQUM7UUFFRixLQUFJLENBQUMsWUFBWTtZQUNiLFFBQVE7aUJBQ0gsSUFBSSxDQUNELFNBQVMsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLENBQUMsRUFBQyxPQUFPLFNBQUEsRUFBRSxLQUFLLE9BQUEsRUFBQyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQyxFQUF4RCxDQUF3RCxDQUFDLENBQzdFO2lCQUNKLFNBQVMsQ0FBQyxVQUFDLEVBQWdCO29CQUFmLG9CQUFPLEVBQUUsZ0JBQUs7Z0JBQ3pCLElBQUk7b0JBQ0YsSUFBTSxDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM1QixLQUFLLEdBQUcsQ0FBQyxDQUFDO2lCQUNYO2dCQUFDLE9BQU8sQ0FBQyxFQUFFO2lCQUNYO2dCQUNELE9BQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFFWCxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUMxQixNQUFNLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLElBQUksSUFBSSxFQUFmLENBQWUsQ0FBQyxFQUNsQyxTQUFTLENBQ0wsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDakMsU0FBUyxDQUFDLE9BQVEsQ0FBQyxLQUFLLENBQUMsQ0FDeEIsRUFGTSxDQUVOLENBQUMsQ0FDYixDQUFDOztJQUNKLENBQUM7SUFFRCw4Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCwyQ0FBUSxHQUFSLFVBQVMsS0FBWTtRQUNuQixJQUFNLEdBQUcsR0FBRyxLQUE0QyxDQUFDO1FBQ3pELElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDdEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDOztnQkExREYsU0FBUyxTQUFDO29CQUNULGdJQUFpQztvQkFFakMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7Ozs7Z0JBcEJDLGlCQUFpQjtnQkFMakIsc0JBQXNCO2dCQWtCaEIsc0JBQXNCLHVCQW1CdkIsTUFBTSxTQUFDLHlCQUF5Qjs7O3dCQVRwQyxTQUFTLFNBQUMsUUFBUSxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQzs7SUFtRHJDLCtCQUFDO0NBQUEsQUEzREQsQ0FPSSxxQkFBcUIsR0FvRHhCO1NBckRZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoQykgR251Y29vcCBzb2MuIGNvb3AuXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhc1xuICogcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsXG4gKiBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVyb1xuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpLlxuICogSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLy5cbiAqXG4gKi9cblxuaW1wb3J0IHtcbiAgQUpGX1dBUk5JTkdfQUxFUlRfU0VSVklDRSxcbiAgQWpmQmFzZUZpZWxkQ29tcG9uZW50LFxuICBBamZGb3JtUmVuZGVyZXJTZXJ2aWNlLFxuICBBamZGb3JtdWxhRmllbGRJbnN0YW5jZVxufSBmcm9tICdAYWpmL2NvcmUvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBPbkRlc3Ryb3ksXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lvbklucHV0fSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQge0lucHV0Q2hhbmdlRXZlbnREZXRhaWx9IGZyb20gJ0Bpb25pYy9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZmlsdGVyLCBtYXAsIHN0YXJ0V2l0aCwgc3dpdGNoTWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7QWpmV2FybmluZ0FsZXJ0U2VydmljZX0gZnJvbSAnLi93YXJuaW5nLWFsZXJ0LXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGVVcmw6ICdmb3JtdWxhLWZpZWxkLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZm9ybXVsYS1maWVsZC5jc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEFqZkZvcm11bGFGaWVsZENvbXBvbmVudCBleHRlbmRzXG4gICAgQWpmQmFzZUZpZWxkQ29tcG9uZW50PEFqZkZvcm11bGFGaWVsZEluc3RhbmNlPiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoSW9uSW5wdXQsIHtzdGF0aWM6IHRydWV9KSBpbnB1dDogSW9uSW5wdXQ7XG5cbiAgcmVhZG9ubHkgdmFsdWU6IE9ic2VydmFibGU8YW55PjtcblxuICBwcml2YXRlIF9vbkNoYW5nZUV2dCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBwcml2YXRlIF9vbkNoYW5nZVN1YiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHNlcnZpY2U6IEFqZkZvcm1SZW5kZXJlclNlcnZpY2UsXG4gICAgICBASW5qZWN0KEFKRl9XQVJOSU5HX0FMRVJUX1NFUlZJQ0UpIHdhczogQWpmV2FybmluZ0FsZXJ0U2VydmljZSkge1xuICAgIHN1cGVyKGNkciwgc2VydmljZSwgd2FzKTtcblxuICAgIGNvbnN0IGNvbnRyb2wkID0gdGhpcy5jb250cm9sLnBpcGUoXG4gICAgICAgIGZpbHRlcihjb250cm9sID0+IGNvbnRyb2wgIT0gbnVsbCksXG4gICAgKTtcblxuICAgIHRoaXMuX29uQ2hhbmdlU3ViID1cbiAgICAgICAgY29udHJvbCRcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIHN3aXRjaE1hcChjb250cm9sID0+IHRoaXMuX29uQ2hhbmdlRXZ0LnBpcGUobWFwKHZhbHVlID0+ICh7Y29udHJvbCwgdmFsdWV9KSkpKSxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCh7Y29udHJvbCwgdmFsdWV9KSA9PiB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdiA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdjtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRyb2whLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuY29udHJvbC5waXBlKFxuICAgICAgICBmaWx0ZXIoY29udHJvbCA9PiBjb250cm9sICE9IG51bGwpLFxuICAgICAgICBzd2l0Y2hNYXAoXG4gICAgICAgICAgICBjb250cm9sID0+IGNvbnRyb2whLnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgICAgICAgICAgIHN0YXJ0V2l0aChjb250cm9sIS52YWx1ZSksXG4gICAgICAgICAgICAgICAgKSksXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlRXZ0LmNvbXBsZXRlKCk7XG4gICAgdGhpcy5fb25DaGFuZ2VTdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGV2dCA9IGV2ZW50IGFzIEN1c3RvbUV2ZW50PElucHV0Q2hhbmdlRXZlbnREZXRhaWw+O1xuICAgIGlmIChldnQuZGV0YWlsID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fb25DaGFuZ2VFdnQuZW1pdChldnQuZGV0YWlsLnZhbHVlKTtcbiAgfVxufVxuIl19