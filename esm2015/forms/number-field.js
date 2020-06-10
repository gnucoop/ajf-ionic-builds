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
import { AJF_WARNING_ALERT_SERVICE, AjfFormRendererService, AjfInputFieldComponent as CoreComponent } from '@ajf/core/forms';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, ViewEncapsulation } from '@angular/core';
import { defer, Subscription } from 'rxjs';
import { filter, startWith, switchMap, withLatestFrom } from 'rxjs/operators';
import { AjfWarningAlertService } from './warning-alert-service';
let AjfNumberFieldComponent = /** @class */ (() => {
    class AjfNumberFieldComponent extends CoreComponent {
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
    }
    AjfNumberFieldComponent.decorators = [
        { type: Component, args: [{
                    template: "<ion-input [ngModel]=\"value|async\" (ngModelChange)=\"setValue($event)\"></ion-input>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: ["\n"]
                }] }
    ];
    /** @nocollapse */
    AjfNumberFieldComponent.ctorParameters = () => [
        { type: ChangeDetectorRef },
        { type: AjfFormRendererService },
        { type: AjfWarningAlertService, decorators: [{ type: Inject, args: [AJF_WARNING_ALERT_SERVICE,] }] }
    ];
    return AjfNumberFieldComponent;
})();
export { AjfNumberFieldComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWZpZWxkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2lvbmljL2Zvcm1zL251bWJlci1maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFFSCxPQUFPLEVBQ0wseUJBQXlCLEVBQ3pCLHNCQUFzQixFQUN0QixzQkFBc0IsSUFBSSxhQUFhLEVBQ3hDLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBR04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBQyxLQUFLLEVBQWMsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUUvRDtJQUFBLE1BTWEsdUJBQXdCLFNBQVEsYUFBYTtRQU14RCxZQUNJLEdBQXNCLEVBQUUsT0FBK0IsRUFDcEIsR0FBMkI7WUFDaEUsS0FBSyxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFObkIsaUJBQVksR0FBOEIsSUFBSSxZQUFZLEVBQWUsQ0FBQztZQUMxRSxpQkFBWSxHQUFpQixZQUFZLENBQUMsS0FBSyxDQUFDO1lBTXRELElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1lBRXJCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUNkLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUNuQixNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEVBQ2xDLFNBQVMsQ0FDTCxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUNqQyxTQUFTLENBQUMsT0FBUSxDQUFDLEtBQUssQ0FBQyxDQUN4QixDQUFDLENBQ1QsQ0FBQyxDQUFDO1FBQ2IsQ0FBQztRQUVELFdBQVc7WUFDVCxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xDLENBQUM7UUFFRCxRQUFRO1lBQ04sS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVk7aUJBQ1osSUFBSSxDQUNELGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQzNCO2lCQUNKLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUU7Z0JBQzlCLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtvQkFDbkIsT0FBTztpQkFDUjtnQkFDRCxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFDO1FBQzdCLENBQUM7UUFFRCxRQUFRLENBQUMsS0FBVTtZQUNqQixJQUFJO2dCQUNGLEtBQUssR0FBRyxVQUFVLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUMvQixJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDaEIsS0FBSyxHQUFHLElBQUksQ0FBQztpQkFDZDthQUNGO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsS0FBSyxHQUFHLElBQUksQ0FBQzthQUNkO1lBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQzs7O2dCQTFERixTQUFTLFNBQUM7b0JBQ1Qsb0dBQWdDO29CQUVoQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7OztnQkFuQkMsaUJBQWlCO2dCQUxqQixzQkFBc0I7Z0JBaUJoQixzQkFBc0IsdUJBZ0J2QixNQUFNLFNBQUMseUJBQXlCOztJQTZDdkMsOEJBQUM7S0FBQTtTQXJEWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKEMpIEdudWNvb3Agc29jLiBjb29wLlxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpLlxuICpcbiAqIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLFxuICogb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm9cbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8uXG4gKlxuICovXG5cbmltcG9ydCB7XG4gIEFKRl9XQVJOSU5HX0FMRVJUX1NFUlZJQ0UsXG4gIEFqZkZvcm1SZW5kZXJlclNlcnZpY2UsXG4gIEFqZklucHV0RmllbGRDb21wb25lbnQgYXMgQ29yZUNvbXBvbmVudFxufSBmcm9tICdAYWpmL2NvcmUvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7ZGVmZXIsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2ZpbHRlciwgc3RhcnRXaXRoLCBzd2l0Y2hNYXAsIHdpdGhMYXRlc3RGcm9tfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7QWpmV2FybmluZ0FsZXJ0U2VydmljZX0gZnJvbSAnLi93YXJuaW5nLWFsZXJ0LXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGVVcmw6ICdudW1iZXItZmllbGQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydudW1iZXItZmllbGQuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBBamZOdW1iZXJGaWVsZENvbXBvbmVudCBleHRlbmRzIENvcmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIHJlYWRvbmx5IHZhbHVlOiBPYnNlcnZhYmxlPG51bWJlcnxudWxsPjtcblxuICBwcml2YXRlIF9zZXRWYWx1ZUV2dDogRXZlbnRFbWl0dGVyPG51bWJlcnxudWxsPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyfG51bGw+KCk7XG4gIHByaXZhdGUgX3NldFZhbHVlU3ViOiBTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBzZXJ2aWNlOiBBamZGb3JtUmVuZGVyZXJTZXJ2aWNlLFxuICAgICAgQEluamVjdChBSkZfV0FSTklOR19BTEVSVF9TRVJWSUNFKSB3YXM6IEFqZldhcm5pbmdBbGVydFNlcnZpY2UpIHtcbiAgICBzdXBlcihjZHIsIHNlcnZpY2UsIHdhcyk7XG4gICAgdGhpcy50eXBlID0gJ251bWJlcic7XG5cbiAgICB0aGlzLnZhbHVlID0gZGVmZXIoXG4gICAgICAgICgpID0+IHRoaXMuY29udHJvbC5waXBlKFxuICAgICAgICAgICAgZmlsdGVyKGNvbnRyb2wgPT4gY29udHJvbCAhPSBudWxsKSxcbiAgICAgICAgICAgIHN3aXRjaE1hcChcbiAgICAgICAgICAgICAgICBjb250cm9sID0+IGNvbnRyb2whLnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgICAgICAgICAgICAgICBzdGFydFdpdGgoY29udHJvbCEudmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICApKSxcbiAgICAgICAgICAgICkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcbiAgICB0aGlzLl9zZXRWYWx1ZUV2dC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX3NldFZhbHVlU3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIHRoaXMuX3NldFZhbHVlU3ViID0gdGhpcy5fc2V0VmFsdWVFdnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5jb250cm9sKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKFt2YWx1ZSwgY29udHJvbF0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250cm9sID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHZhbHVlID0gcGFyc2VGbG9hdChgJHt2YWx1ZX1gKTtcbiAgICAgIGlmIChpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZhbHVlID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5fc2V0VmFsdWVFdnQuZW1pdCh2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==