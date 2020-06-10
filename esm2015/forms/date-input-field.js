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
import { AJF_WARNING_ALERT_SERVICE, AjfBaseFieldComponent, AjfDateValueStringPipe, AjfFormRendererService } from '@ajf/core/forms';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, ViewChild, ViewEncapsulation } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { AjfWarningAlertService } from './warning-alert-service';
let AjfDateInputFieldComponent = /** @class */ (() => {
    class AjfDateInputFieldComponent extends AjfBaseFieldComponent {
        constructor(cdr, service, was, _dvs) {
            super(cdr, service, was);
            this._dvs = _dvs;
        }
        onChange(event) {
            const evt = event;
            if (this.input == null || evt.detail == null) {
                return;
            }
            const val = evt.detail.value || '';
            if (val.length > 0) {
                if ((this._minDateStr != null && val < this._minDateStr) ||
                    (this._maxDateStr != null && val > this._maxDateStr)) {
                    this.input.value = '';
                }
            }
        }
        _onInstanceChange() {
            this._minDateStr = this._dvs.transform(this.instance.node.minDate);
            this._maxDateStr = this._dvs.transform(this.instance.node.maxDate);
        }
    }
    AjfDateInputFieldComponent.decorators = [
        { type: Component, args: [{
                    template: "<ion-input\n    type=\"date\"\n    *ngIf=\"control|async as ctrl\"\n    [min]=\"instance.node.minDate|ajfDateValueString\"\n    [max]=\"instance.node.maxDate|ajfDateValueString\"\n    (ionChange)=\"onChange($event)\"\n    [formControl]=\"ctrl!\"></ion-input>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: ["\n"]
                }] }
    ];
    /** @nocollapse */
    AjfDateInputFieldComponent.ctorParameters = () => [
        { type: ChangeDetectorRef },
        { type: AjfFormRendererService },
        { type: AjfWarningAlertService, decorators: [{ type: Inject, args: [AJF_WARNING_ALERT_SERVICE,] }] },
        { type: AjfDateValueStringPipe }
    ];
    AjfDateInputFieldComponent.propDecorators = {
        input: [{ type: ViewChild, args: [IonInput, { static: false },] }]
    };
    return AjfDateInputFieldComponent;
})();
export { AjfDateInputFieldComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1pbnB1dC1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9pb25pYy9mb3Jtcy9kYXRlLWlucHV0LWZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRztBQUVILE9BQU8sRUFDTCx5QkFBeUIsRUFDekIscUJBQXFCLEVBRXJCLHNCQUFzQixFQUN0QixzQkFBc0IsRUFDdkIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBR3hDLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRS9EO0lBQUEsTUFNYSwwQkFBMkIsU0FBUSxxQkFBMkM7UUFNekYsWUFDSSxHQUFzQixFQUFFLE9BQStCLEVBQ3BCLEdBQTJCLEVBQ3RELElBQTRCO1lBQ3RDLEtBQUssQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRGYsU0FBSSxHQUFKLElBQUksQ0FBd0I7UUFFeEMsQ0FBQztRQUVELFFBQVEsQ0FBQyxLQUFZO1lBQ25CLE1BQU0sR0FBRyxHQUFHLEtBQTRDLENBQUM7WUFDekQsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtnQkFDNUMsT0FBTzthQUNSO1lBQ0QsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ25DLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztvQkFDcEQsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO29CQUN4RCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7aUJBQ3ZCO2FBQ0Y7UUFDSCxDQUFDO1FBRVMsaUJBQWlCO1lBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyRSxDQUFDOzs7Z0JBcENGLFNBQVMsU0FBQztvQkFDVCxnUkFBb0M7b0JBRXBDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7O2dCQWhCQyxpQkFBaUI7Z0JBSmpCLHNCQUFzQjtnQkFhaEIsc0JBQXNCLHVCQWdCdkIsTUFBTSxTQUFDLHlCQUF5QjtnQkE5QnJDLHNCQUFzQjs7O3dCQXVCckIsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7O0lBOEJ0QyxpQ0FBQztLQUFBO1NBL0JZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoQykgR251Y29vcCBzb2MuIGNvb3AuXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhc1xuICogcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsXG4gKiBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVyb1xuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpLlxuICogSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLy5cbiAqXG4gKi9cblxuaW1wb3J0IHtcbiAgQUpGX1dBUk5JTkdfQUxFUlRfU0VSVklDRSxcbiAgQWpmQmFzZUZpZWxkQ29tcG9uZW50LFxuICBBamZEYXRlRmllbGRJbnN0YW5jZSxcbiAgQWpmRGF0ZVZhbHVlU3RyaW5nUGlwZSxcbiAgQWpmRm9ybVJlbmRlcmVyU2VydmljZVxufSBmcm9tICdAYWpmL2NvcmUvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEluamVjdCxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SW9uSW5wdXR9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7SW5wdXRDaGFuZ2VFdmVudERldGFpbH0gZnJvbSAnQGlvbmljL2NvcmUnO1xuXG5pbXBvcnQge0FqZldhcm5pbmdBbGVydFNlcnZpY2V9IGZyb20gJy4vd2FybmluZy1hbGVydC1zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAnZGF0ZS1pbnB1dC1maWVsZC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGUtaW5wdXQtZmllbGQuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBBamZEYXRlSW5wdXRGaWVsZENvbXBvbmVudCBleHRlbmRzIEFqZkJhc2VGaWVsZENvbXBvbmVudDxBamZEYXRlRmllbGRJbnN0YW5jZT4ge1xuICBAVmlld0NoaWxkKElvbklucHV0LCB7c3RhdGljOiBmYWxzZX0pIGlucHV0OiBJb25JbnB1dDtcblxuICBwcml2YXRlIF9taW5EYXRlU3RyOiBzdHJpbmd8dW5kZWZpbmVkO1xuICBwcml2YXRlIF9tYXhEYXRlU3RyOiBzdHJpbmd8dW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgc2VydmljZTogQWpmRm9ybVJlbmRlcmVyU2VydmljZSxcbiAgICAgIEBJbmplY3QoQUpGX1dBUk5JTkdfQUxFUlRfU0VSVklDRSkgd2FzOiBBamZXYXJuaW5nQWxlcnRTZXJ2aWNlLFxuICAgICAgcHJpdmF0ZSBfZHZzOiBBamZEYXRlVmFsdWVTdHJpbmdQaXBlKSB7XG4gICAgc3VwZXIoY2RyLCBzZXJ2aWNlLCB3YXMpO1xuICB9XG5cbiAgb25DaGFuZ2UoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgZXZ0ID0gZXZlbnQgYXMgQ3VzdG9tRXZlbnQ8SW5wdXRDaGFuZ2VFdmVudERldGFpbD47XG4gICAgaWYgKHRoaXMuaW5wdXQgPT0gbnVsbCB8fCBldnQuZGV0YWlsID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdmFsID0gZXZ0LmRldGFpbC52YWx1ZSB8fCAnJztcbiAgICBpZiAodmFsLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmICgodGhpcy5fbWluRGF0ZVN0ciAhPSBudWxsICYmIHZhbCA8IHRoaXMuX21pbkRhdGVTdHIpIHx8XG4gICAgICAgICAgKHRoaXMuX21heERhdGVTdHIgIT0gbnVsbCAmJiB2YWwgPiB0aGlzLl9tYXhEYXRlU3RyKSkge1xuICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9vbkluc3RhbmNlQ2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMuX21pbkRhdGVTdHIgPSB0aGlzLl9kdnMudHJhbnNmb3JtKHRoaXMuaW5zdGFuY2Uubm9kZS5taW5EYXRlKTtcbiAgICB0aGlzLl9tYXhEYXRlU3RyID0gdGhpcy5fZHZzLnRyYW5zZm9ybSh0aGlzLmluc3RhbmNlLm5vZGUubWF4RGF0ZSk7XG4gIH1cbn1cbiJdfQ==