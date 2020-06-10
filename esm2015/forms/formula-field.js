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
let AjfFormulaFieldComponent = /** @class */ (() => {
    class AjfFormulaFieldComponent extends AjfBaseFieldComponent {
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
    return AjfFormulaFieldComponent;
})();
export { AjfFormulaFieldComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXVsYS1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9pb25pYy9mb3Jtcy9mb3JtdWxhLWZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRztBQUVILE9BQU8sRUFDTCx5QkFBeUIsRUFDekIscUJBQXFCLEVBQ3JCLHNCQUFzQixFQUV2QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRXhDLE9BQU8sRUFBYSxZQUFZLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRWpFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRS9EO0lBQUEsTUFNYSx3QkFBeUIsU0FDbEMscUJBQThDO1FBUWhELFlBQ0ksR0FBc0IsRUFBRSxPQUErQixFQUNwQixHQUEyQjtZQUNoRSxLQUFLLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztZQU5uQixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7WUFDdkMsaUJBQVksR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBT3hDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUM5QixNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQ3JDLENBQUM7WUFFRixJQUFJLENBQUMsWUFBWTtnQkFDYixRQUFRO3FCQUNILElBQUksQ0FDRCxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQzdFO3FCQUNKLFNBQVMsQ0FBQyxDQUFDLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBQyxFQUFFLEVBQUU7b0JBQzlCLElBQUk7d0JBQ0YsTUFBTSxDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUM1QixLQUFLLEdBQUcsQ0FBQyxDQUFDO3FCQUNYO29CQUFDLE9BQU8sQ0FBQyxFQUFFO3FCQUNYO29CQUNELE9BQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNCLENBQUMsQ0FBQyxDQUFDO1lBRVgsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDMUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxFQUNsQyxTQUFTLENBQ0wsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDakMsU0FBUyxDQUFDLE9BQVEsQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQyxDQUNiLENBQUM7UUFDSixDQUFDO1FBRUQsV0FBVztZQUNULElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNsQyxDQUFDO1FBRUQsUUFBUSxDQUFDLEtBQVk7WUFDbkIsTUFBTSxHQUFHLEdBQUcsS0FBNEMsQ0FBQztZQUN6RCxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO2dCQUN0QixPQUFPO2FBQ1I7WUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLENBQUM7OztnQkExREYsU0FBUyxTQUFDO29CQUNULGdJQUFpQztvQkFFakMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7Ozs7Z0JBcEJDLGlCQUFpQjtnQkFMakIsc0JBQXNCO2dCQWtCaEIsc0JBQXNCLHVCQW1CdkIsTUFBTSxTQUFDLHlCQUF5Qjs7O3dCQVRwQyxTQUFTLFNBQUMsUUFBUSxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQzs7SUFtRHJDLCtCQUFDO0tBQUE7U0FyRFksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChDKSBHbnVjb29wIHNvYy4gY29vcC5cbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSxcbiAqIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKiBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvLlxuICpcbiAqL1xuXG5pbXBvcnQge1xuICBBSkZfV0FSTklOR19BTEVSVF9TRVJWSUNFLFxuICBBamZCYXNlRmllbGRDb21wb25lbnQsXG4gIEFqZkZvcm1SZW5kZXJlclNlcnZpY2UsXG4gIEFqZkZvcm11bGFGaWVsZEluc3RhbmNlXG59IGZyb20gJ0BhamYvY29yZS9mb3Jtcyc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIE9uRGVzdHJveSxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SW9uSW5wdXR9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7SW5wdXRDaGFuZ2VFdmVudERldGFpbH0gZnJvbSAnQGlvbmljL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtmaWx0ZXIsIG1hcCwgc3RhcnRXaXRoLCBzd2l0Y2hNYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtBamZXYXJuaW5nQWxlcnRTZXJ2aWNlfSBmcm9tICcuL3dhcm5pbmctYWxlcnQtc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogJ2Zvcm11bGEtZmllbGQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmb3JtdWxhLWZpZWxkLmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQWpmRm9ybXVsYUZpZWxkQ29tcG9uZW50IGV4dGVuZHNcbiAgICBBamZCYXNlRmllbGRDb21wb25lbnQ8QWpmRm9ybXVsYUZpZWxkSW5zdGFuY2U+IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZChJb25JbnB1dCwge3N0YXRpYzogdHJ1ZX0pIGlucHV0OiBJb25JbnB1dDtcblxuICByZWFkb25seSB2YWx1ZTogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIHByaXZhdGUgX29uQ2hhbmdlRXZ0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIHByaXZhdGUgX29uQ2hhbmdlU3ViID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgc2VydmljZTogQWpmRm9ybVJlbmRlcmVyU2VydmljZSxcbiAgICAgIEBJbmplY3QoQUpGX1dBUk5JTkdfQUxFUlRfU0VSVklDRSkgd2FzOiBBamZXYXJuaW5nQWxlcnRTZXJ2aWNlKSB7XG4gICAgc3VwZXIoY2RyLCBzZXJ2aWNlLCB3YXMpO1xuXG4gICAgY29uc3QgY29udHJvbCQgPSB0aGlzLmNvbnRyb2wucGlwZShcbiAgICAgICAgZmlsdGVyKGNvbnRyb2wgPT4gY29udHJvbCAhPSBudWxsKSxcbiAgICApO1xuXG4gICAgdGhpcy5fb25DaGFuZ2VTdWIgPVxuICAgICAgICBjb250cm9sJFxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgc3dpdGNoTWFwKGNvbnRyb2wgPT4gdGhpcy5fb25DaGFuZ2VFdnQucGlwZShtYXAodmFsdWUgPT4gKHtjb250cm9sLCB2YWx1ZX0pKSkpLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHtjb250cm9sLCB2YWx1ZX0pID0+IHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2ID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2O1xuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29udHJvbCEuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB0aGlzLnZhbHVlID0gdGhpcy5jb250cm9sLnBpcGUoXG4gICAgICAgIGZpbHRlcihjb250cm9sID0+IGNvbnRyb2wgIT0gbnVsbCksXG4gICAgICAgIHN3aXRjaE1hcChcbiAgICAgICAgICAgIGNvbnRyb2wgPT4gY29udHJvbCEudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICAgICAgICAgICAgc3RhcnRXaXRoKGNvbnRyb2whLnZhbHVlKSxcbiAgICAgICAgICAgICAgICApKSxcbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fb25DaGFuZ2VFdnQuY29tcGxldGUoKTtcbiAgICB0aGlzLl9vbkNoYW5nZVN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgb25DaGFuZ2UoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgZXZ0ID0gZXZlbnQgYXMgQ3VzdG9tRXZlbnQ8SW5wdXRDaGFuZ2VFdmVudERldGFpbD47XG4gICAgaWYgKGV2dC5kZXRhaWwgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9vbkNoYW5nZUV2dC5lbWl0KGV2dC5kZXRhaWwudmFsdWUpO1xuICB9XG59XG4iXX0=