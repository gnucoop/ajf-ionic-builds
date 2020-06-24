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
                },] }
    ];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXVsYS1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9pb25pYy9mb3Jtcy9mb3JtdWxhLWZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRztBQUVILE9BQU8sRUFDTCx5QkFBeUIsRUFDekIscUJBQXFCLEVBQ3JCLHNCQUFzQixFQUV2QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRXhDLE9BQU8sRUFBYSxZQUFZLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRWpFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRS9EO0lBQUEsTUFNYSx3QkFBeUIsU0FDbEMscUJBQThDO1FBUWhELFlBQ0ksR0FBc0IsRUFBRSxPQUErQixFQUNwQixHQUEyQjtZQUNoRSxLQUFLLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztZQU5uQixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7WUFDdkMsaUJBQVksR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBT3hDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUM5QixNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQ3JDLENBQUM7WUFFRixJQUFJLENBQUMsWUFBWTtnQkFDYixRQUFRO3FCQUNILElBQUksQ0FDRCxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQzdFO3FCQUNKLFNBQVMsQ0FBQyxDQUFDLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBQyxFQUFFLEVBQUU7b0JBQzlCLElBQUk7d0JBQ0YsTUFBTSxDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUM1QixLQUFLLEdBQUcsQ0FBQyxDQUFDO3FCQUNYO29CQUFDLE9BQU8sQ0FBQyxFQUFFO3FCQUNYO29CQUNELE9BQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNCLENBQUMsQ0FBQyxDQUFDO1lBRVgsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDMUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxFQUNsQyxTQUFTLENBQ0wsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDakMsU0FBUyxDQUFDLE9BQVEsQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQyxDQUNiLENBQUM7UUFDSixDQUFDO1FBRUQsV0FBVztZQUNULElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNsQyxDQUFDO1FBRUQsUUFBUSxDQUFDLEtBQVk7WUFDbkIsTUFBTSxHQUFHLEdBQUcsS0FBNEMsQ0FBQztZQUN6RCxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO2dCQUN0QixPQUFPO2FBQ1I7WUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLENBQUM7OztnQkExREYsU0FBUyxTQUFDO29CQUNULGdJQUFpQztvQkFFakMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7OztnQkFwQkMsaUJBQWlCO2dCQUxqQixzQkFBc0I7Z0JBa0JoQixzQkFBc0IsdUJBbUJ2QixNQUFNLFNBQUMseUJBQXlCOzs7d0JBVHBDLFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDOztJQW1EckMsK0JBQUM7S0FBQTtTQXJEWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKEMpIEdudWNvb3Agc29jLiBjb29wLlxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpLlxuICpcbiAqIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLFxuICogb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm9cbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8uXG4gKlxuICovXG5cbmltcG9ydCB7XG4gIEFKRl9XQVJOSU5HX0FMRVJUX1NFUlZJQ0UsXG4gIEFqZkJhc2VGaWVsZENvbXBvbmVudCxcbiAgQWpmRm9ybVJlbmRlcmVyU2VydmljZSxcbiAgQWpmRm9ybXVsYUZpZWxkSW5zdGFuY2Vcbn0gZnJvbSAnQGFqZi9jb3JlL2Zvcm1zJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgT25EZXN0cm95LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJb25JbnB1dH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHtJbnB1dENoYW5nZUV2ZW50RGV0YWlsfSBmcm9tICdAaW9uaWMvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2ZpbHRlciwgbWFwLCBzdGFydFdpdGgsIHN3aXRjaE1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge0FqZldhcm5pbmdBbGVydFNlcnZpY2V9IGZyb20gJy4vd2FybmluZy1hbGVydC1zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAnZm9ybXVsYS1maWVsZC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Zvcm11bGEtZmllbGQuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBBamZGb3JtdWxhRmllbGRDb21wb25lbnQgZXh0ZW5kc1xuICAgIEFqZkJhc2VGaWVsZENvbXBvbmVudDxBamZGb3JtdWxhRmllbGRJbnN0YW5jZT4gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKElvbklucHV0LCB7c3RhdGljOiB0cnVlfSkgaW5wdXQ6IElvbklucHV0O1xuXG4gIHJlYWRvbmx5IHZhbHVlOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgcHJpdmF0ZSBfb25DaGFuZ2VFdnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgcHJpdmF0ZSBfb25DaGFuZ2VTdWIgPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBzZXJ2aWNlOiBBamZGb3JtUmVuZGVyZXJTZXJ2aWNlLFxuICAgICAgQEluamVjdChBSkZfV0FSTklOR19BTEVSVF9TRVJWSUNFKSB3YXM6IEFqZldhcm5pbmdBbGVydFNlcnZpY2UpIHtcbiAgICBzdXBlcihjZHIsIHNlcnZpY2UsIHdhcyk7XG5cbiAgICBjb25zdCBjb250cm9sJCA9IHRoaXMuY29udHJvbC5waXBlKFxuICAgICAgICBmaWx0ZXIoY29udHJvbCA9PiBjb250cm9sICE9IG51bGwpLFxuICAgICk7XG5cbiAgICB0aGlzLl9vbkNoYW5nZVN1YiA9XG4gICAgICAgIGNvbnRyb2wkXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICBzd2l0Y2hNYXAoY29udHJvbCA9PiB0aGlzLl9vbkNoYW5nZUV2dC5waXBlKG1hcCh2YWx1ZSA9PiAoe2NvbnRyb2wsIHZhbHVlfSkpKSksXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoe2NvbnRyb2wsIHZhbHVlfSkgPT4ge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHY7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb250cm9sIS5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgIHRoaXMudmFsdWUgPSB0aGlzLmNvbnRyb2wucGlwZShcbiAgICAgICAgZmlsdGVyKGNvbnRyb2wgPT4gY29udHJvbCAhPSBudWxsKSxcbiAgICAgICAgc3dpdGNoTWFwKFxuICAgICAgICAgICAgY29udHJvbCA9PiBjb250cm9sIS52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgICAgICAgICAgICBzdGFydFdpdGgoY29udHJvbCEudmFsdWUpLFxuICAgICAgICAgICAgICAgICkpLFxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZUV2dC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX29uQ2hhbmdlU3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBvbkNoYW5nZShldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBldnQgPSBldmVudCBhcyBDdXN0b21FdmVudDxJbnB1dENoYW5nZUV2ZW50RGV0YWlsPjtcbiAgICBpZiAoZXZ0LmRldGFpbCA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX29uQ2hhbmdlRXZ0LmVtaXQoZXZ0LmRldGFpbC52YWx1ZSk7XG4gIH1cbn1cbiJdfQ==