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
import { AJF_WARNING_ALERT_SERVICE, AjfBaseFieldComponent, AjfDateValueStringPipe, AjfFormRendererService } from '@ajf/core/forms';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, ViewChild, ViewEncapsulation } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { AjfWarningAlertService } from './warning-alert-service';
let AjfDateInputFieldComponent = /** @class */ (() => {
    let AjfDateInputFieldComponent = class AjfDateInputFieldComponent extends AjfBaseFieldComponent {
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
    };
    __decorate([
        ViewChild(IonInput, { static: false }),
        __metadata("design:type", IonInput)
    ], AjfDateInputFieldComponent.prototype, "input", void 0);
    AjfDateInputFieldComponent = __decorate([
        Component({
            template: "<ion-input\n    type=\"date\"\n    *ngIf=\"control|async as ctrl\"\n    [min]=\"instance.node.minDate|ajfDateValueString\"\n    [max]=\"instance.node.maxDate|ajfDateValueString\"\n    (ionChange)=\"onChange($event)\"\n    [formControl]=\"ctrl!\"></ion-input>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            styles: ["\n"]
        }),
        __param(2, Inject(AJF_WARNING_ALERT_SERVICE)),
        __metadata("design:paramtypes", [ChangeDetectorRef, AjfFormRendererService,
            AjfWarningAlertService,
            AjfDateValueStringPipe])
    ], AjfDateInputFieldComponent);
    return AjfDateInputFieldComponent;
})();
export { AjfDateInputFieldComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1pbnB1dC1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9pb25pYy9mb3Jtcy9kYXRlLWlucHV0LWZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRzs7QUFFSCxPQUFPLEVBQ0wseUJBQXlCLEVBQ3pCLHFCQUFxQixFQUVyQixzQkFBc0IsRUFDdEIsc0JBQXNCLEVBQ3ZCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUd4QyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQVEvRDtJQUFBLElBQWEsMEJBQTBCLEdBQXZDLE1BQWEsMEJBQTJCLFNBQVEscUJBQTJDO1FBTXpGLFlBQ0ksR0FBc0IsRUFBRSxPQUErQixFQUNwQixHQUEyQixFQUN0RCxJQUE0QjtZQUN0QyxLQUFLLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztZQURmLFNBQUksR0FBSixJQUFJLENBQXdCO1FBRXhDLENBQUM7UUFFRCxRQUFRLENBQUMsS0FBWTtZQUNuQixNQUFNLEdBQUcsR0FBRyxLQUE0QyxDQUFDO1lBQ3pELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7Z0JBQzVDLE9BQU87YUFDUjtZQUNELE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUNuQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7b0JBQ3BELENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTtvQkFDeEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2lCQUN2QjthQUNGO1FBQ0gsQ0FBQztRQUVTLGlCQUFpQjtZQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ25FLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckUsQ0FBQztLQUNGLENBQUE7SUE5QnVDO1FBQXJDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7a0NBQVEsUUFBUTs2REFBQztJQUQzQywwQkFBMEI7UUFOdEMsU0FBUyxDQUFDO1lBQ1QsZ1JBQW9DO1lBRXBDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1lBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztTQUN0QyxDQUFDO1FBU0ssV0FBQSxNQUFNLENBQUMseUJBQXlCLENBQUMsQ0FBQTt5Q0FEN0IsaUJBQWlCLEVBQVcsc0JBQXNCO1lBQ2Ysc0JBQXNCO1lBQ2hELHNCQUFzQjtPQVQ3QiwwQkFBMEIsQ0ErQnRDO0lBQUQsaUNBQUM7S0FBQTtTQS9CWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKEMpIEdudWNvb3Agc29jLiBjb29wLlxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpLlxuICpcbiAqIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLFxuICogb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm9cbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8uXG4gKlxuICovXG5cbmltcG9ydCB7XG4gIEFKRl9XQVJOSU5HX0FMRVJUX1NFUlZJQ0UsXG4gIEFqZkJhc2VGaWVsZENvbXBvbmVudCxcbiAgQWpmRGF0ZUZpZWxkSW5zdGFuY2UsXG4gIEFqZkRhdGVWYWx1ZVN0cmluZ1BpcGUsXG4gIEFqZkZvcm1SZW5kZXJlclNlcnZpY2Vcbn0gZnJvbSAnQGFqZi9jb3JlL2Zvcm1zJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbmplY3QsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lvbklucHV0fSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQge0lucHV0Q2hhbmdlRXZlbnREZXRhaWx9IGZyb20gJ0Bpb25pYy9jb3JlJztcblxuaW1wb3J0IHtBamZXYXJuaW5nQWxlcnRTZXJ2aWNlfSBmcm9tICcuL3dhcm5pbmctYWxlcnQtc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogJ2RhdGUtaW5wdXQtZmllbGQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXRlLWlucHV0LWZpZWxkLmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQWpmRGF0ZUlucHV0RmllbGRDb21wb25lbnQgZXh0ZW5kcyBBamZCYXNlRmllbGRDb21wb25lbnQ8QWpmRGF0ZUZpZWxkSW5zdGFuY2U+IHtcbiAgQFZpZXdDaGlsZChJb25JbnB1dCwge3N0YXRpYzogZmFsc2V9KSBpbnB1dDogSW9uSW5wdXQ7XG5cbiAgcHJpdmF0ZSBfbWluRGF0ZVN0cjogc3RyaW5nfHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBfbWF4RGF0ZVN0cjogc3RyaW5nfHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHNlcnZpY2U6IEFqZkZvcm1SZW5kZXJlclNlcnZpY2UsXG4gICAgICBASW5qZWN0KEFKRl9XQVJOSU5HX0FMRVJUX1NFUlZJQ0UpIHdhczogQWpmV2FybmluZ0FsZXJ0U2VydmljZSxcbiAgICAgIHByaXZhdGUgX2R2czogQWpmRGF0ZVZhbHVlU3RyaW5nUGlwZSkge1xuICAgIHN1cGVyKGNkciwgc2VydmljZSwgd2FzKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGV2dCA9IGV2ZW50IGFzIEN1c3RvbUV2ZW50PElucHV0Q2hhbmdlRXZlbnREZXRhaWw+O1xuICAgIGlmICh0aGlzLmlucHV0ID09IG51bGwgfHwgZXZ0LmRldGFpbCA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHZhbCA9IGV2dC5kZXRhaWwudmFsdWUgfHwgJyc7XG4gICAgaWYgKHZhbC5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAoKHRoaXMuX21pbkRhdGVTdHIgIT0gbnVsbCAmJiB2YWwgPCB0aGlzLl9taW5EYXRlU3RyKSB8fFxuICAgICAgICAgICh0aGlzLl9tYXhEYXRlU3RyICE9IG51bGwgJiYgdmFsID4gdGhpcy5fbWF4RGF0ZVN0cikpIHtcbiAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBfb25JbnN0YW5jZUNoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9taW5EYXRlU3RyID0gdGhpcy5fZHZzLnRyYW5zZm9ybSh0aGlzLmluc3RhbmNlLm5vZGUubWluRGF0ZSk7XG4gICAgdGhpcy5fbWF4RGF0ZVN0ciA9IHRoaXMuX2R2cy50cmFuc2Zvcm0odGhpcy5pbnN0YW5jZS5ub2RlLm1heERhdGUpO1xuICB9XG59XG4iXX0=