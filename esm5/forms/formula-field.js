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
import { AjfBaseFieldComponent, AjfFormRendererService } from '@ajf/core/forms';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, ViewChild, ViewEncapsulation } from '@angular/core';
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
        _this._onChangeSub = control$.pipe(switchMap(function (control) { return _this._onChangeEvt.pipe(map(function (value) { return ({ control: control, value: value }); })); })).subscribe(function (_a) {
            var control = _a.control, value = _a.value;
            try {
                var v = parseFloat(value);
                value = v;
            }
            catch (e) { }
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
        { type: AjfWarningAlertService }
    ]; };
    AjfFormulaFieldComponent.propDecorators = {
        input: [{ type: ViewChild, args: [IonInput, { static: true },] }]
    };
    return AjfFormulaFieldComponent;
}(AjfBaseFieldComponent));
export { AjfFormulaFieldComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXVsYS1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9pb25pYy9mb3Jtcy9mb3JtdWxhLWZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRzs7QUFFSCxPQUFPLEVBQUMscUJBQXFCLEVBQzNCLHNCQUFzQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFakQsT0FBTyxFQUFDLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQWEsU0FBUyxFQUMvRixpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFhLFlBQVksRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFakUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFFL0Q7SUFNOEMsNENBQThDO0lBUzFGLGtDQUNJLEdBQXNCLEVBQUUsT0FBK0IsRUFBRSxHQUEyQjtRQUR4RixZQUVFLGtCQUFNLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLFNBc0J6QjtRQTNCTyxrQkFBWSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdkMsa0JBQVksR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBTXhDLElBQU0sUUFBUSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUNoQyxNQUFNLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLElBQUksSUFBSSxFQUFmLENBQWUsQ0FBQyxDQUNuQyxDQUFDO1FBRUYsS0FBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUMvQixTQUFTLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLEVBQUMsT0FBTyxTQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUMsQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUMsRUFBeEQsQ0FBd0QsQ0FBQyxDQUMvRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQWdCO2dCQUFmLG9CQUFPLEVBQUUsZ0JBQUs7WUFDMUIsSUFBSTtnQkFDRixJQUFNLENBQUMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVCLEtBQUssR0FBRyxDQUFDLENBQUM7YUFDWDtZQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUc7WUFDZixPQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO1FBRUgsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDNUIsTUFBTSxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxJQUFJLElBQUksRUFBZixDQUFlLENBQUMsRUFDbEMsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQzdDLFNBQVMsQ0FBQyxPQUFRLENBQUMsS0FBSyxDQUFDLENBQzFCLEVBRm9CLENBRXBCLENBQUMsQ0FDSCxDQUFDOztJQUNKLENBQUM7SUFFRCw4Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCwyQ0FBUSxHQUFSLFVBQVMsS0FBWTtRQUNuQixJQUFNLEdBQUcsR0FBRyxLQUE0QyxDQUFDO1FBQ3pELElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDOztnQkFsREYsU0FBUyxTQUFDO29CQUNULGdJQUFpQztvQkFFakMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7Ozs7Z0JBZGdDLGlCQUFpQjtnQkFGaEQsc0JBQXNCO2dCQVNoQixzQkFBc0I7Ozt3QkFVM0IsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7O0lBNkNyQywrQkFBQztDQUFBLEFBckRELENBTThDLHFCQUFxQixHQStDbEU7U0EvQ1ksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChDKSBHbnVjb29wIHNvYy4gY29vcC5cbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSxcbiAqIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKiBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvLlxuICpcbiAqL1xuXG5pbXBvcnQge0FqZkJhc2VGaWVsZENvbXBvbmVudCwgQWpmRm9ybXVsYUZpZWxkSW5zdGFuY2UsXG4gIEFqZkZvcm1SZW5kZXJlclNlcnZpY2V9IGZyb20gJ0BhamYvY29yZS9mb3Jtcyc7XG5pbXBvcnQge0Jvb2xlYW5JbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95LCBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SW9uSW5wdXR9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7SW5wdXRDaGFuZ2VFdmVudERldGFpbH0gZnJvbSAnQGlvbmljL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtmaWx0ZXIsIG1hcCwgc3RhcnRXaXRoLCBzd2l0Y2hNYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtBamZXYXJuaW5nQWxlcnRTZXJ2aWNlfSBmcm9tICcuL3dhcm5pbmctYWxlcnQtc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogJ2Zvcm11bGEtZmllbGQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmb3JtdWxhLWZpZWxkLmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQWpmRm9ybXVsYUZpZWxkQ29tcG9uZW50IGV4dGVuZHMgQWpmQmFzZUZpZWxkQ29tcG9uZW50PEFqZkZvcm11bGFGaWVsZEluc3RhbmNlPlxuICAgIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZChJb25JbnB1dCwge3N0YXRpYzogdHJ1ZX0pIGlucHV0OiBJb25JbnB1dDtcblxuICByZWFkb25seSB2YWx1ZTogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIHByaXZhdGUgX29uQ2hhbmdlRXZ0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIHByaXZhdGUgX29uQ2hhbmdlU3ViID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgc2VydmljZTogQWpmRm9ybVJlbmRlcmVyU2VydmljZSwgd2FzOiBBamZXYXJuaW5nQWxlcnRTZXJ2aWNlKSB7XG4gICAgc3VwZXIoY2RyLCBzZXJ2aWNlLCB3YXMpO1xuXG4gICAgY29uc3QgY29udHJvbCQgPSB0aGlzLmNvbnRyb2wucGlwZShcbiAgICAgIGZpbHRlcihjb250cm9sID0+IGNvbnRyb2wgIT0gbnVsbCksXG4gICAgKTtcblxuICAgIHRoaXMuX29uQ2hhbmdlU3ViID0gY29udHJvbCQucGlwZShcbiAgICAgIHN3aXRjaE1hcChjb250cm9sID0+IHRoaXMuX29uQ2hhbmdlRXZ0LnBpcGUobWFwKHZhbHVlID0+ICh7Y29udHJvbCwgdmFsdWV9KSkpKSxcbiAgICApLnN1YnNjcmliZSgoe2NvbnRyb2wsIHZhbHVlfSkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdiA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgICAgICB2YWx1ZSA9IHY7XG4gICAgICB9IGNhdGNoIChlKSB7IH1cbiAgICAgIGNvbnRyb2whLnNldFZhbHVlKHZhbHVlKTtcbiAgICB9KTtcblxuICAgIHRoaXMudmFsdWUgPSB0aGlzLmNvbnRyb2wucGlwZShcbiAgICAgIGZpbHRlcihjb250cm9sID0+IGNvbnRyb2wgIT0gbnVsbCksXG4gICAgICBzd2l0Y2hNYXAoY29udHJvbCA9PiBjb250cm9sIS52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgICAgc3RhcnRXaXRoKGNvbnRyb2whLnZhbHVlKSxcbiAgICAgICkpLFxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZUV2dC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX29uQ2hhbmdlU3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBvbkNoYW5nZShldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBldnQgPSBldmVudCBhcyBDdXN0b21FdmVudDxJbnB1dENoYW5nZUV2ZW50RGV0YWlsPjtcbiAgICBpZiAoZXZ0LmRldGFpbCA9PSBudWxsKSB7IHJldHVybjsgfVxuICAgIHRoaXMuX29uQ2hhbmdlRXZ0LmVtaXQoZXZ0LmRldGFpbC52YWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcmVhZG9ubHk6IEJvb2xlYW5JbnB1dDtcbn1cbiJdfQ==