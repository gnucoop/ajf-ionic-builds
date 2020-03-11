/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/forms/formula-field.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
import { AjfBaseFieldComponent, AjfFormRendererService } from '@ajf/core/forms';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, ViewChild, ViewEncapsulation } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { filter, map, startWith, switchMap } from 'rxjs/operators';
import { AjfWarningAlertService } from './warning-alert-service';
export class AjfFormulaFieldComponent extends AjfBaseFieldComponent {
    /**
     * @param {?} cdr
     * @param {?} service
     * @param {?} was
     */
    constructor(cdr, service, was) {
        super(cdr, service, was);
        this._onChangeEvt = new EventEmitter();
        this._onChangeSub = Subscription.EMPTY;
        /** @type {?} */
        const control$ = this.control.pipe(filter((/**
         * @param {?} control
         * @return {?}
         */
        control => control != null)));
        this._onChangeSub = control$.pipe(switchMap((/**
         * @param {?} control
         * @return {?}
         */
        control => this._onChangeEvt.pipe(map((/**
         * @param {?} value
         * @return {?}
         */
        value => ({ control, value }))))))).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ control, value }) => {
            try {
                /** @type {?} */
                const v = parseFloat(value);
                value = v;
            }
            catch (e) { }
            (/** @type {?} */ (control)).setValue(value);
        }));
        this.value = this.control.pipe(filter((/**
         * @param {?} control
         * @return {?}
         */
        control => control != null)), switchMap((/**
         * @param {?} control
         * @return {?}
         */
        control => (/** @type {?} */ (control)).valueChanges.pipe(startWith((/** @type {?} */ (control)).value)))));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._onChangeEvt.complete();
        this._onChangeSub.unsubscribe();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        /** @type {?} */
        const evt = (/** @type {?} */ (event));
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
    { type: AjfWarningAlertService }
];
AjfFormulaFieldComponent.propDecorators = {
    input: [{ type: ViewChild, args: [IonInput, { static: true },] }]
};
if (false) {
    /** @type {?} */
    AjfFormulaFieldComponent.ngAcceptInputType_readonly;
    /** @type {?} */
    AjfFormulaFieldComponent.prototype.input;
    /** @type {?} */
    AjfFormulaFieldComponent.prototype.value;
    /**
     * @type {?}
     * @private
     */
    AjfFormulaFieldComponent.prototype._onChangeEvt;
    /**
     * @type {?}
     * @private
     */
    AjfFormulaFieldComponent.prototype._onChangeSub;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXVsYS1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9pb25pYy9mb3Jtcy9mb3JtdWxhLWZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBLE9BQU8sRUFBQyxxQkFBcUIsRUFDM0Isc0JBQXNCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRCxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBYSxTQUFTLEVBQy9GLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QyxPQUFPLEVBQWEsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQVEvRCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEscUJBQThDOzs7Ozs7SUFTMUYsWUFDSSxHQUFzQixFQUFFLE9BQStCLEVBQUUsR0FBMkI7UUFDdEYsS0FBSyxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFMbkIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3ZDLGlCQUFZLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQzs7Y0FNbEMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUNoQyxNQUFNOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFDLENBQ25DO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUMvQixTQUFTOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQy9FLENBQUMsU0FBUzs7OztRQUFDLENBQUMsRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFDLEVBQUUsRUFBRTtZQUMvQixJQUFJOztzQkFDSSxDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztnQkFDM0IsS0FBSyxHQUFHLENBQUMsQ0FBQzthQUNYO1lBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRztZQUNmLG1CQUFBLE9BQU8sRUFBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQzVCLE1BQU07Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUMsRUFDbEMsU0FBUzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsbUJBQUEsT0FBTyxFQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDN0MsU0FBUyxDQUFDLG1CQUFBLE9BQU8sRUFBQyxDQUFDLEtBQUssQ0FBQyxDQUMxQixFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQVk7O2NBQ2IsR0FBRyxHQUFHLG1CQUFBLEtBQUssRUFBdUM7UUFDeEQsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE9BQU87U0FBRTtRQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7OztZQWxERixTQUFTLFNBQUM7Z0JBQ1QsZ0lBQWlDO2dCQUVqQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7O1lBZGdDLGlCQUFpQjtZQUZoRCxzQkFBc0I7WUFTaEIsc0JBQXNCOzs7b0JBVTNCLFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDOzs7O0lBNENuQyxvREFBZ0Q7O0lBNUNoRCx5Q0FBcUQ7O0lBRXJELHlDQUFnQzs7Ozs7SUFFaEMsZ0RBQStDOzs7OztJQUMvQyxnREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKEMpIEdudWNvb3Agc29jLiBjb29wLlxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpLlxuICpcbiAqIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLFxuICogb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm9cbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8uXG4gKlxuICovXG5cbmltcG9ydCB7QWpmQmFzZUZpZWxkQ29tcG9uZW50LCBBamZGb3JtdWxhRmllbGRJbnN0YW5jZSxcbiAgQWpmRm9ybVJlbmRlcmVyU2VydmljZX0gZnJvbSAnQGFqZi9jb3JlL2Zvcm1zJztcbmltcG9ydCB7Qm9vbGVhbklucHV0fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJb25JbnB1dH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHtJbnB1dENoYW5nZUV2ZW50RGV0YWlsfSBmcm9tICdAaW9uaWMvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2ZpbHRlciwgbWFwLCBzdGFydFdpdGgsIHN3aXRjaE1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge0FqZldhcm5pbmdBbGVydFNlcnZpY2V9IGZyb20gJy4vd2FybmluZy1hbGVydC1zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAnZm9ybXVsYS1maWVsZC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Zvcm11bGEtZmllbGQuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBBamZGb3JtdWxhRmllbGRDb21wb25lbnQgZXh0ZW5kcyBBamZCYXNlRmllbGRDb21wb25lbnQ8QWpmRm9ybXVsYUZpZWxkSW5zdGFuY2U+XG4gICAgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKElvbklucHV0LCB7c3RhdGljOiB0cnVlfSkgaW5wdXQ6IElvbklucHV0O1xuXG4gIHJlYWRvbmx5IHZhbHVlOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgcHJpdmF0ZSBfb25DaGFuZ2VFdnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgcHJpdmF0ZSBfb25DaGFuZ2VTdWIgPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBzZXJ2aWNlOiBBamZGb3JtUmVuZGVyZXJTZXJ2aWNlLCB3YXM6IEFqZldhcm5pbmdBbGVydFNlcnZpY2UpIHtcbiAgICBzdXBlcihjZHIsIHNlcnZpY2UsIHdhcyk7XG5cbiAgICBjb25zdCBjb250cm9sJCA9IHRoaXMuY29udHJvbC5waXBlKFxuICAgICAgZmlsdGVyKGNvbnRyb2wgPT4gY29udHJvbCAhPSBudWxsKSxcbiAgICApO1xuXG4gICAgdGhpcy5fb25DaGFuZ2VTdWIgPSBjb250cm9sJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKGNvbnRyb2wgPT4gdGhpcy5fb25DaGFuZ2VFdnQucGlwZShtYXAodmFsdWUgPT4gKHtjb250cm9sLCB2YWx1ZX0pKSkpLFxuICAgICkuc3Vic2NyaWJlKCh7Y29udHJvbCwgdmFsdWV9KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB2ID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgICAgIHZhbHVlID0gdjtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgfVxuICAgICAgY29udHJvbCEuc2V0VmFsdWUodmFsdWUpO1xuICAgIH0pO1xuXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuY29udHJvbC5waXBlKFxuICAgICAgZmlsdGVyKGNvbnRyb2wgPT4gY29udHJvbCAhPSBudWxsKSxcbiAgICAgIHN3aXRjaE1hcChjb250cm9sID0+IGNvbnRyb2whLnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgICBzdGFydFdpdGgoY29udHJvbCEudmFsdWUpLFxuICAgICAgKSksXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlRXZ0LmNvbXBsZXRlKCk7XG4gICAgdGhpcy5fb25DaGFuZ2VTdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGV2dCA9IGV2ZW50IGFzIEN1c3RvbUV2ZW50PElucHV0Q2hhbmdlRXZlbnREZXRhaWw+O1xuICAgIGlmIChldnQuZGV0YWlsID09IG51bGwpIHsgcmV0dXJuOyB9XG4gICAgdGhpcy5fb25DaGFuZ2VFdnQuZW1pdChldnQuZGV0YWlsLnZhbHVlKTtcbiAgfVxuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9yZWFkb25seTogQm9vbGVhbklucHV0O1xufVxuIl19