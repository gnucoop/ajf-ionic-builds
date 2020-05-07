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
import { AJF_WARNING_ALERT_SERVICE, AjfFormRendererService, AjfInputFieldComponent as CoreComponent } from '@ajf/core/forms';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, ViewEncapsulation } from '@angular/core';
import { defer, Subscription } from 'rxjs';
import { filter, startWith, switchMap, withLatestFrom } from 'rxjs/operators';
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
        this._setValueSub = this._setValueEvt
            .pipe(withLatestFrom(this.control))
            .subscribe(function (_a) {
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
                    template: "<ion-input [ngModel]=\"value|async\" (ngModelChange)=\"setValue($event)\"></ion-input>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: ["\n"]
                }] }
    ];
    /** @nocollapse */
    AjfNumberFieldComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: AjfFormRendererService },
        { type: AjfWarningAlertService, decorators: [{ type: Inject, args: [AJF_WARNING_ALERT_SERVICE,] }] }
    ]; };
    return AjfNumberFieldComponent;
}(CoreComponent));
export { AjfNumberFieldComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWZpZWxkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2lvbmljL2Zvcm1zL251bWJlci1maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7O0FBRUgsT0FBTyxFQUNMLHlCQUF5QixFQUN6QixzQkFBc0IsRUFDdEIsc0JBQXNCLElBQUksYUFBYSxFQUN4QyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUMsS0FBSyxFQUFjLFlBQVksRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFFL0Q7SUFNNkMsMkNBQWE7SUFNeEQsaUNBQ0ksR0FBc0IsRUFBRSxPQUErQixFQUNwQixHQUEyQjtRQUZsRSxZQUdFLGtCQUFNLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLFNBV3pCO1FBakJPLGtCQUFZLEdBQThCLElBQUksWUFBWSxFQUFlLENBQUM7UUFDMUUsa0JBQVksR0FBaUIsWUFBWSxDQUFDLEtBQUssQ0FBQztRQU10RCxLQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUVyQixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FDZCxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ25CLE1BQU0sQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sSUFBSSxJQUFJLEVBQWYsQ0FBZSxDQUFDLEVBQ2xDLFNBQVMsQ0FDTCxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUNqQyxTQUFTLENBQUMsT0FBUSxDQUFDLEtBQUssQ0FBQyxDQUN4QixFQUZNLENBRU4sQ0FBQyxDQUNULEVBTkMsQ0FNRCxDQUFDLENBQUM7O0lBQ2IsQ0FBQztJQUVELDZDQUFXLEdBQVg7UUFDRSxpQkFBTSxXQUFXLFdBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELDBDQUFRLEdBQVI7UUFDRSxpQkFBTSxRQUFRLFdBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZO2FBQ1osSUFBSSxDQUNELGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQzNCO2FBQ0osU0FBUyxDQUFDLFVBQUMsRUFBZ0I7Z0JBQWhCLGtCQUFnQixFQUFmLGFBQUssRUFBRSxlQUFPO1lBQ3pCLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDbkIsT0FBTzthQUNSO1lBQ0QsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsMENBQVEsR0FBUixVQUFTLEtBQVU7UUFDakIsSUFBSTtZQUNGLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBRyxLQUFPLENBQUMsQ0FBQztZQUMvQixJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDaEIsS0FBSyxHQUFHLElBQUksQ0FBQzthQUNkO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDZDtRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7O2dCQTFERixTQUFTLFNBQUM7b0JBQ1Qsb0dBQWdDO29CQUVoQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7OztnQkFuQkMsaUJBQWlCO2dCQUxqQixzQkFBc0I7Z0JBaUJoQixzQkFBc0IsdUJBZ0J2QixNQUFNLFNBQUMseUJBQXlCOztJQTZDdkMsOEJBQUM7Q0FBQSxBQTNERCxDQU02QyxhQUFhLEdBcUR6RDtTQXJEWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKEMpIEdudWNvb3Agc29jLiBjb29wLlxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpLlxuICpcbiAqIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLFxuICogb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm9cbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8uXG4gKlxuICovXG5cbmltcG9ydCB7XG4gIEFKRl9XQVJOSU5HX0FMRVJUX1NFUlZJQ0UsXG4gIEFqZkZvcm1SZW5kZXJlclNlcnZpY2UsXG4gIEFqZklucHV0RmllbGRDb21wb25lbnQgYXMgQ29yZUNvbXBvbmVudFxufSBmcm9tICdAYWpmL2NvcmUvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7ZGVmZXIsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2ZpbHRlciwgc3RhcnRXaXRoLCBzd2l0Y2hNYXAsIHdpdGhMYXRlc3RGcm9tfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7QWpmV2FybmluZ0FsZXJ0U2VydmljZX0gZnJvbSAnLi93YXJuaW5nLWFsZXJ0LXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGVVcmw6ICdudW1iZXItZmllbGQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydudW1iZXItZmllbGQuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBBamZOdW1iZXJGaWVsZENvbXBvbmVudCBleHRlbmRzIENvcmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIHJlYWRvbmx5IHZhbHVlOiBPYnNlcnZhYmxlPG51bWJlcnxudWxsPjtcblxuICBwcml2YXRlIF9zZXRWYWx1ZUV2dDogRXZlbnRFbWl0dGVyPG51bWJlcnxudWxsPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyfG51bGw+KCk7XG4gIHByaXZhdGUgX3NldFZhbHVlU3ViOiBTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBzZXJ2aWNlOiBBamZGb3JtUmVuZGVyZXJTZXJ2aWNlLFxuICAgICAgQEluamVjdChBSkZfV0FSTklOR19BTEVSVF9TRVJWSUNFKSB3YXM6IEFqZldhcm5pbmdBbGVydFNlcnZpY2UpIHtcbiAgICBzdXBlcihjZHIsIHNlcnZpY2UsIHdhcyk7XG4gICAgdGhpcy50eXBlID0gJ251bWJlcic7XG5cbiAgICB0aGlzLnZhbHVlID0gZGVmZXIoXG4gICAgICAgICgpID0+IHRoaXMuY29udHJvbC5waXBlKFxuICAgICAgICAgICAgZmlsdGVyKGNvbnRyb2wgPT4gY29udHJvbCAhPSBudWxsKSxcbiAgICAgICAgICAgIHN3aXRjaE1hcChcbiAgICAgICAgICAgICAgICBjb250cm9sID0+IGNvbnRyb2whLnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgICAgICAgICAgICAgICBzdGFydFdpdGgoY29udHJvbCEudmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICApKSxcbiAgICAgICAgICAgICkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcbiAgICB0aGlzLl9zZXRWYWx1ZUV2dC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX3NldFZhbHVlU3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIHRoaXMuX3NldFZhbHVlU3ViID0gdGhpcy5fc2V0VmFsdWVFdnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5jb250cm9sKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKFt2YWx1ZSwgY29udHJvbF0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250cm9sID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHZhbHVlID0gcGFyc2VGbG9hdChgJHt2YWx1ZX1gKTtcbiAgICAgIGlmIChpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZhbHVlID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5fc2V0VmFsdWVFdnQuZW1pdCh2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==