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
import { AJF_WARNING_ALERT_SERVICE, AjfBaseFieldComponent, AjfFormRendererService } from '@ajf/core/forms';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, ViewChild, ViewEncapsulation } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { filter, map, startWith, switchMap } from 'rxjs/operators';
import { AjfWarningAlertService } from './warning-alert-service';
let AjfFormulaFieldComponent = /** @class */ (() => {
    let AjfFormulaFieldComponent = class AjfFormulaFieldComponent extends AjfBaseFieldComponent {
        constructor(cdr, service, was) {
            super(cdr, service, was);
            this._onChangeEvt = new EventEmitter();
            this._onChangeSub = Subscription.EMPTY;
            const control$ = this.control.pipe(filter(control => control != null));
            this._onChangeSub =
                control$
                    .pipe(switchMap(control => this._onChangeEvt.pipe(map(value => ({ control, value })))))
                    .subscribe(({ control, value }) => {
                    try {
                        const v = parseFloat(value);
                        value = v;
                    }
                    catch (e) {
                    }
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
    };
    __decorate([
        ViewChild(IonInput, { static: true }),
        __metadata("design:type", IonInput)
    ], AjfFormulaFieldComponent.prototype, "input", void 0);
    AjfFormulaFieldComponent = __decorate([
        Component({
            template: "<ion-input type=\"text\" [readonly]=\"true\" [value]=\"value|async\" (ionChange)=\"onChange($event)\"></ion-input>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            styles: ["\n"]
        }),
        __param(2, Inject(AJF_WARNING_ALERT_SERVICE)),
        __metadata("design:paramtypes", [ChangeDetectorRef, AjfFormRendererService,
            AjfWarningAlertService])
    ], AjfFormulaFieldComponent);
    return AjfFormulaFieldComponent;
})();
export { AjfFormulaFieldComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXVsYS1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9pb25pYy9mb3Jtcy9mb3JtdWxhLWZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRzs7QUFFSCxPQUFPLEVBQ0wseUJBQXlCLEVBQ3pCLHFCQUFxQixFQUNyQixzQkFBc0IsRUFFdkIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLE1BQU0sRUFFTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QyxPQUFPLEVBQWEsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQVEvRDtJQUFBLElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXlCLFNBQ2xDLHFCQUE4QztRQVFoRCxZQUNJLEdBQXNCLEVBQUUsT0FBK0IsRUFDcEIsR0FBMkI7WUFDaEUsS0FBSyxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFObkIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1lBQ3ZDLGlCQUFZLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztZQU94QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDOUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUNyQyxDQUFDO1lBRUYsSUFBSSxDQUFDLFlBQVk7Z0JBQ2IsUUFBUTtxQkFDSCxJQUFJLENBQ0QsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUM3RTtxQkFDSixTQUFTLENBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUMsRUFBRSxFQUFFO29CQUM5QixJQUFJO3dCQUNGLE1BQU0sQ0FBQyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDNUIsS0FBSyxHQUFHLENBQUMsQ0FBQztxQkFDWDtvQkFBQyxPQUFPLENBQUMsRUFBRTtxQkFDWDtvQkFDRCxPQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzQixDQUFDLENBQUMsQ0FBQztZQUVYLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQzFCLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsRUFDbEMsU0FBUyxDQUNMLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQ2pDLFNBQVMsQ0FBQyxPQUFRLENBQUMsS0FBSyxDQUFDLENBQ3hCLENBQUMsQ0FDYixDQUFDO1FBQ0osQ0FBQztRQUVELFdBQVc7WUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEMsQ0FBQztRQUVELFFBQVEsQ0FBQyxLQUFZO1lBQ25CLE1BQU0sR0FBRyxHQUFHLEtBQTRDLENBQUM7WUFDekQsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtnQkFDdEIsT0FBTzthQUNSO1lBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxDQUFDO0tBQ0YsQ0FBQTtJQW5Ec0M7UUFBcEMsU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQztrQ0FBUSxRQUFROzJEQUFDO0lBRjFDLHdCQUF3QjtRQU5wQyxTQUFTLENBQUM7WUFDVCxnSUFBaUM7WUFFakMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07WUFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O1NBQ3RDLENBQUM7UUFZSyxXQUFBLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO3lDQUQ3QixpQkFBaUIsRUFBVyxzQkFBc0I7WUFDZixzQkFBc0I7T0FYdkQsd0JBQXdCLENBcURwQztJQUFELCtCQUFDO0tBQUE7U0FyRFksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChDKSBHbnVjb29wIHNvYy4gY29vcC5cbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSxcbiAqIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKiBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvLlxuICpcbiAqL1xuXG5pbXBvcnQge1xuICBBSkZfV0FSTklOR19BTEVSVF9TRVJWSUNFLFxuICBBamZCYXNlRmllbGRDb21wb25lbnQsXG4gIEFqZkZvcm1SZW5kZXJlclNlcnZpY2UsXG4gIEFqZkZvcm11bGFGaWVsZEluc3RhbmNlXG59IGZyb20gJ0BhamYvY29yZS9mb3Jtcyc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIE9uRGVzdHJveSxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SW9uSW5wdXR9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7SW5wdXRDaGFuZ2VFdmVudERldGFpbH0gZnJvbSAnQGlvbmljL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtmaWx0ZXIsIG1hcCwgc3RhcnRXaXRoLCBzd2l0Y2hNYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtBamZXYXJuaW5nQWxlcnRTZXJ2aWNlfSBmcm9tICcuL3dhcm5pbmctYWxlcnQtc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogJ2Zvcm11bGEtZmllbGQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmb3JtdWxhLWZpZWxkLmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQWpmRm9ybXVsYUZpZWxkQ29tcG9uZW50IGV4dGVuZHNcbiAgICBBamZCYXNlRmllbGRDb21wb25lbnQ8QWpmRm9ybXVsYUZpZWxkSW5zdGFuY2U+IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZChJb25JbnB1dCwge3N0YXRpYzogdHJ1ZX0pIGlucHV0OiBJb25JbnB1dDtcblxuICByZWFkb25seSB2YWx1ZTogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIHByaXZhdGUgX29uQ2hhbmdlRXZ0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIHByaXZhdGUgX29uQ2hhbmdlU3ViID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgc2VydmljZTogQWpmRm9ybVJlbmRlcmVyU2VydmljZSxcbiAgICAgIEBJbmplY3QoQUpGX1dBUk5JTkdfQUxFUlRfU0VSVklDRSkgd2FzOiBBamZXYXJuaW5nQWxlcnRTZXJ2aWNlKSB7XG4gICAgc3VwZXIoY2RyLCBzZXJ2aWNlLCB3YXMpO1xuXG4gICAgY29uc3QgY29udHJvbCQgPSB0aGlzLmNvbnRyb2wucGlwZShcbiAgICAgICAgZmlsdGVyKGNvbnRyb2wgPT4gY29udHJvbCAhPSBudWxsKSxcbiAgICApO1xuXG4gICAgdGhpcy5fb25DaGFuZ2VTdWIgPVxuICAgICAgICBjb250cm9sJFxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgc3dpdGNoTWFwKGNvbnRyb2wgPT4gdGhpcy5fb25DaGFuZ2VFdnQucGlwZShtYXAodmFsdWUgPT4gKHtjb250cm9sLCB2YWx1ZX0pKSkpLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHtjb250cm9sLCB2YWx1ZX0pID0+IHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2ID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2O1xuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29udHJvbCEuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB0aGlzLnZhbHVlID0gdGhpcy5jb250cm9sLnBpcGUoXG4gICAgICAgIGZpbHRlcihjb250cm9sID0+IGNvbnRyb2wgIT0gbnVsbCksXG4gICAgICAgIHN3aXRjaE1hcChcbiAgICAgICAgICAgIGNvbnRyb2wgPT4gY29udHJvbCEudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICAgICAgICAgICAgc3RhcnRXaXRoKGNvbnRyb2whLnZhbHVlKSxcbiAgICAgICAgICAgICAgICApKSxcbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fb25DaGFuZ2VFdnQuY29tcGxldGUoKTtcbiAgICB0aGlzLl9vbkNoYW5nZVN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgb25DaGFuZ2UoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgZXZ0ID0gZXZlbnQgYXMgQ3VzdG9tRXZlbnQ8SW5wdXRDaGFuZ2VFdmVudERldGFpbD47XG4gICAgaWYgKGV2dC5kZXRhaWwgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9vbkNoYW5nZUV2dC5lbWl0KGV2dC5kZXRhaWwudmFsdWUpO1xuICB9XG59XG4iXX0=