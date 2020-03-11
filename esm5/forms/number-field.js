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
import { __extends, __read } from "tslib";
import { AjfInputFieldComponent as CoreComponent, AjfFormRendererService } from '@ajf/core/forms';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, ViewEncapsulation } from '@angular/core';
import { defer, Subscription } from 'rxjs';
import { filter, switchMap, startWith, withLatestFrom } from 'rxjs/operators';
import { AjfWarningAlertService } from './warning-alert-service';
var AjfNumberFieldComponent = /** @class */ (function (_super) {
    __extends(AjfNumberFieldComponent, _super);
    function AjfNumberFieldComponent(cdr, service, was) {
        var _this = _super.call(this, cdr, service, was) || this;
        _this._setValueEvt = new EventEmitter();
        _this._setValueSub = Subscription.EMPTY;
        _this.type = 'number';
        _this.value = defer(function () { return _this.control.pipe(filter(function (control) { return control != null; }), switchMap(function (control) { return control.valueChanges.pipe(startWith(control.value)); })); });
        return _this;
    }
    AjfNumberFieldComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        this._setValueEvt.complete();
        this._setValueSub.unsubscribe();
    };
    AjfNumberFieldComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this._setValueSub = this._setValueEvt.pipe(withLatestFrom(this.control)).subscribe(function (_a) {
            var _b = __read(_a, 2), value = _b[0], control = _b[1];
            if (control == null) {
                return;
            }
            control.setValue(value);
        });
    };
    AjfNumberFieldComponent.prototype.setValue = function (value) {
        try {
            value = parseFloat("" + value);
            if (isNaN(value)) {
                value = null;
            }
        }
        catch (e) {
            value = null;
        }
        this._setValueEvt.emit(value);
    };
    AjfNumberFieldComponent.decorators = [
        { type: Component, args: [{
                    template: "<ion-input [ngModel]=\"value|async\" (ngModelChange)=\"setValue($event)\" [readonly]=\"readonly\"></ion-input>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: ["\n"]
                }] }
    ];
    /** @nocollapse */
    AjfNumberFieldComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: AjfFormRendererService },
        { type: AjfWarningAlertService }
    ]; };
    return AjfNumberFieldComponent;
}(CoreComponent));
export { AjfNumberFieldComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWZpZWxkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2lvbmljL2Zvcm1zL251bWJlci1maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7O0FBRUgsT0FBTyxFQUFDLHNCQUFzQixJQUFJLGFBQWEsRUFBRSxzQkFBc0IsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRWhHLE9BQU8sRUFDTCx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUNuRSxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLEtBQUssRUFBYyxZQUFZLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRTVFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRS9EO0lBTTZDLDJDQUFhO0lBTXhELGlDQUNFLEdBQXNCLEVBQUUsT0FBK0IsRUFBRSxHQUEyQjtRQUR0RixZQUVFLGtCQUFNLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLFNBU3pCO1FBZE8sa0JBQVksR0FBZ0MsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFDOUUsa0JBQVksR0FBaUIsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUt0RCxLQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUVyQixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ3hDLE1BQU0sQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sSUFBSSxJQUFJLEVBQWYsQ0FBZSxDQUFDLEVBQ2xDLFNBQVMsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUM3QyxTQUFTLENBQUMsT0FBUSxDQUFDLEtBQUssQ0FBQyxDQUMxQixFQUZvQixDQUVwQixDQUFDLENBQ0gsRUFMd0IsQ0FLeEIsQ0FBQyxDQUFDOztJQUNMLENBQUM7SUFFRCw2Q0FBVyxHQUFYO1FBQ0UsaUJBQU0sV0FBVyxXQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCwwQ0FBUSxHQUFSO1FBQ0UsaUJBQU0sUUFBUSxXQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDeEMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FDN0IsQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFnQjtnQkFBaEIsa0JBQWdCLEVBQWYsYUFBSyxFQUFFLGVBQU87WUFDMUIsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO2dCQUFFLE9BQU87YUFBRTtZQUNoQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDBDQUFRLEdBQVIsVUFBUyxLQUFVO1FBQ2pCLElBQUk7WUFDRixLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUcsS0FBTyxDQUFDLENBQUM7WUFDL0IsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2hCLEtBQUssR0FBRyxJQUFJLENBQUM7YUFDZDtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ2Q7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOztnQkFuREYsU0FBUyxTQUFDO29CQUNULDRIQUFnQztvQkFFaEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7Ozs7Z0JBYjBCLGlCQUFpQjtnQkFISyxzQkFBc0I7Z0JBUy9ELHNCQUFzQjs7SUF3RDlCLDhCQUFDO0NBQUEsQUF0REQsQ0FNNkMsYUFBYSxHQWdEekQ7U0FoRFksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChDKSBHbnVjb29wIHNvYy4gY29vcC5cbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSxcbiAqIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKiBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvLlxuICpcbiAqL1xuXG5pbXBvcnQge0FqZklucHV0RmllbGRDb21wb25lbnQgYXMgQ29yZUNvbXBvbmVudCwgQWpmRm9ybVJlbmRlcmVyU2VydmljZX0gZnJvbSAnQGFqZi9jb3JlL2Zvcm1zJztcbmltcG9ydCB7Qm9vbGVhbklucHV0fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95LCBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtkZWZlciwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZmlsdGVyLCBzd2l0Y2hNYXAsIHN0YXJ0V2l0aCwgd2l0aExhdGVzdEZyb219IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtBamZXYXJuaW5nQWxlcnRTZXJ2aWNlfSBmcm9tICcuL3dhcm5pbmctYWxlcnQtc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogJ251bWJlci1maWVsZC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ251bWJlci1maWVsZC5jc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEFqZk51bWJlckZpZWxkQ29tcG9uZW50IGV4dGVuZHMgQ29yZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgcmVhZG9ubHkgdmFsdWU6IE9ic2VydmFibGU8bnVtYmVyIHwgbnVsbD47XG5cbiAgcHJpdmF0ZSBfc2V0VmFsdWVFdnQ6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBudWxsPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgbnVsbD4oKTtcbiAgcHJpdmF0ZSBfc2V0VmFsdWVTdWI6IFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBzZXJ2aWNlOiBBamZGb3JtUmVuZGVyZXJTZXJ2aWNlLCB3YXM6IEFqZldhcm5pbmdBbGVydFNlcnZpY2UpIHtcbiAgICBzdXBlcihjZHIsIHNlcnZpY2UsIHdhcyk7XG4gICAgdGhpcy50eXBlID0gJ251bWJlcic7XG5cbiAgICB0aGlzLnZhbHVlID0gZGVmZXIoKCkgPT4gdGhpcy5jb250cm9sLnBpcGUoXG4gICAgICBmaWx0ZXIoY29udHJvbCA9PiBjb250cm9sICE9IG51bGwpLFxuICAgICAgc3dpdGNoTWFwKGNvbnRyb2wgPT4gY29udHJvbCEudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICAgIHN0YXJ0V2l0aChjb250cm9sIS52YWx1ZSksXG4gICAgICApKSxcbiAgICApKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gICAgdGhpcy5fc2V0VmFsdWVFdnQuY29tcGxldGUoKTtcbiAgICB0aGlzLl9zZXRWYWx1ZVN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICB0aGlzLl9zZXRWYWx1ZVN1YiA9IHRoaXMuX3NldFZhbHVlRXZ0LnBpcGUoXG4gICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLmNvbnRyb2wpLFxuICAgICkuc3Vic2NyaWJlKChbdmFsdWUsIGNvbnRyb2xdKSA9PiB7XG4gICAgICBpZiAoY29udHJvbCA9PSBudWxsKSB7IHJldHVybjsgfVxuICAgICAgY29udHJvbC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHZhbHVlID0gcGFyc2VGbG9hdChgJHt2YWx1ZX1gKTtcbiAgICAgIGlmIChpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZhbHVlID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5fc2V0VmFsdWVFdnQuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcmVhZG9ubHk6IEJvb2xlYW5JbnB1dDtcbn1cbiJdfQ==