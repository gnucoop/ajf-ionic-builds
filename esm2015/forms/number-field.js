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
import { __decorate, __metadata, __param } from "tslib";
import { AJF_WARNING_ALERT_SERVICE, AjfFormRendererService, AjfInputFieldComponent as CoreComponent } from '@ajf/core/forms';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, ViewEncapsulation } from '@angular/core';
import { defer, Subscription } from 'rxjs';
import { filter, startWith, switchMap, withLatestFrom } from 'rxjs/operators';
import { AjfWarningAlertService } from './warning-alert-service';
let AjfNumberFieldComponent = /** @class */ (() => {
    let AjfNumberFieldComponent = class AjfNumberFieldComponent extends CoreComponent {
        constructor(cdr, service, was) {
            super(cdr, service, was);
            this._setValueEvt = new EventEmitter();
            this._setValueSub = Subscription.EMPTY;
            this.type = 'number';
            this.value = defer(() => this.control.pipe(filter(control => control != null), switchMap(control => control.valueChanges.pipe(startWith(control.value)))));
        }
        ngOnDestroy() {
            super.ngOnDestroy();
            this._setValueEvt.complete();
            this._setValueSub.unsubscribe();
        }
        ngOnInit() {
            super.ngOnInit();
            this._setValueSub = this._setValueEvt
                .pipe(withLatestFrom(this.control))
                .subscribe(([value, control]) => {
                if (control == null) {
                    return;
                }
                control.setValue(value);
            });
        }
        setValue(value) {
            try {
                value = parseFloat(`${value}`);
                if (isNaN(value)) {
                    value = null;
                }
            }
            catch (e) {
                value = null;
            }
            this._setValueEvt.emit(value);
        }
    };
    AjfNumberFieldComponent = __decorate([
        Component({
            template: "<ion-input [ngModel]=\"value|async\" (ngModelChange)=\"setValue($event)\"></ion-input>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            styles: ["\n"]
        }),
        __param(2, Inject(AJF_WARNING_ALERT_SERVICE)),
        __metadata("design:paramtypes", [ChangeDetectorRef, AjfFormRendererService,
            AjfWarningAlertService])
    ], AjfNumberFieldComponent);
    return AjfNumberFieldComponent;
})();
export { AjfNumberFieldComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWZpZWxkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2lvbmljL2Zvcm1zL251bWJlci1maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7O0FBRUgsT0FBTyxFQUNMLHlCQUF5QixFQUN6QixzQkFBc0IsRUFDdEIsc0JBQXNCLElBQUksYUFBYSxFQUN4QyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUMsS0FBSyxFQUFjLFlBQVksRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFRL0Q7SUFBQSxJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF3QixTQUFRLGFBQWE7UUFNeEQsWUFDSSxHQUFzQixFQUFFLE9BQStCLEVBQ3BCLEdBQTJCO1lBQ2hFLEtBQUssQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBTm5CLGlCQUFZLEdBQThCLElBQUksWUFBWSxFQUFlLENBQUM7WUFDMUUsaUJBQVksR0FBaUIsWUFBWSxDQUFDLEtBQUssQ0FBQztZQU10RCxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztZQUVyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FDZCxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDbkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxFQUNsQyxTQUFTLENBQ0wsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDakMsU0FBUyxDQUFDLE9BQVEsQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQyxDQUNULENBQUMsQ0FBQztRQUNiLENBQUM7UUFFRCxXQUFXO1lBQ1QsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNsQyxDQUFDO1FBRUQsUUFBUTtZQUNOLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZO2lCQUNaLElBQUksQ0FDRCxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUMzQjtpQkFDSixTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFO2dCQUM5QixJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7b0JBQ25CLE9BQU87aUJBQ1I7Z0JBQ0QsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQztRQUM3QixDQUFDO1FBRUQsUUFBUSxDQUFDLEtBQVU7WUFDakIsSUFBSTtnQkFDRixLQUFLLEdBQUcsVUFBVSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ2hCLEtBQUssR0FBRyxJQUFJLENBQUM7aUJBQ2Q7YUFDRjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLEtBQUssR0FBRyxJQUFJLENBQUM7YUFDZDtZQUNELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUM7S0FDRixDQUFBO0lBckRZLHVCQUF1QjtRQU5uQyxTQUFTLENBQUM7WUFDVCxvR0FBZ0M7WUFFaEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07WUFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O1NBQ3RDLENBQUM7UUFTSyxXQUFBLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO3lDQUQ3QixpQkFBaUIsRUFBVyxzQkFBc0I7WUFDZixzQkFBc0I7T0FSdkQsdUJBQXVCLENBcURuQztJQUFELDhCQUFDO0tBQUE7U0FyRFksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChDKSBHbnVjb29wIHNvYy4gY29vcC5cbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSxcbiAqIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKiBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvLlxuICpcbiAqL1xuXG5pbXBvcnQge1xuICBBSkZfV0FSTklOR19BTEVSVF9TRVJWSUNFLFxuICBBamZGb3JtUmVuZGVyZXJTZXJ2aWNlLFxuICBBamZJbnB1dEZpZWxkQ29tcG9uZW50IGFzIENvcmVDb21wb25lbnRcbn0gZnJvbSAnQGFqZi9jb3JlL2Zvcm1zJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge2RlZmVyLCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtmaWx0ZXIsIHN0YXJ0V2l0aCwgc3dpdGNoTWFwLCB3aXRoTGF0ZXN0RnJvbX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge0FqZldhcm5pbmdBbGVydFNlcnZpY2V9IGZyb20gJy4vd2FybmluZy1hbGVydC1zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAnbnVtYmVyLWZpZWxkLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbnVtYmVyLWZpZWxkLmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQWpmTnVtYmVyRmllbGRDb21wb25lbnQgZXh0ZW5kcyBDb3JlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xuICByZWFkb25seSB2YWx1ZTogT2JzZXJ2YWJsZTxudW1iZXJ8bnVsbD47XG5cbiAgcHJpdmF0ZSBfc2V0VmFsdWVFdnQ6IEV2ZW50RW1pdHRlcjxudW1iZXJ8bnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcnxudWxsPigpO1xuICBwcml2YXRlIF9zZXRWYWx1ZVN1YjogU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgc2VydmljZTogQWpmRm9ybVJlbmRlcmVyU2VydmljZSxcbiAgICAgIEBJbmplY3QoQUpGX1dBUk5JTkdfQUxFUlRfU0VSVklDRSkgd2FzOiBBamZXYXJuaW5nQWxlcnRTZXJ2aWNlKSB7XG4gICAgc3VwZXIoY2RyLCBzZXJ2aWNlLCB3YXMpO1xuICAgIHRoaXMudHlwZSA9ICdudW1iZXInO1xuXG4gICAgdGhpcy52YWx1ZSA9IGRlZmVyKFxuICAgICAgICAoKSA9PiB0aGlzLmNvbnRyb2wucGlwZShcbiAgICAgICAgICAgIGZpbHRlcihjb250cm9sID0+IGNvbnRyb2wgIT0gbnVsbCksXG4gICAgICAgICAgICBzd2l0Y2hNYXAoXG4gICAgICAgICAgICAgICAgY29udHJvbCA9PiBjb250cm9sIS52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRXaXRoKGNvbnRyb2whLnZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgKSksXG4gICAgICAgICAgICApKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gICAgdGhpcy5fc2V0VmFsdWVFdnQuY29tcGxldGUoKTtcbiAgICB0aGlzLl9zZXRWYWx1ZVN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICB0aGlzLl9zZXRWYWx1ZVN1YiA9IHRoaXMuX3NldFZhbHVlRXZ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuY29udHJvbCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChbdmFsdWUsIGNvbnRyb2xdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udHJvbCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2wuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB2YWx1ZSA9IHBhcnNlRmxvYXQoYCR7dmFsdWV9YCk7XG4gICAgICBpZiAoaXNOYU4odmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB2YWx1ZSA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuX3NldFZhbHVlRXZ0LmVtaXQodmFsdWUpO1xuICB9XG59XG4iXX0=