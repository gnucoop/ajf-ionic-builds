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
import { AJF_WARNING_ALERT_SERVICE, AjfVideoUrlFieldComponent as CoreComponent, } from '@ajf/core/forms';
import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ajf/core/forms";
import * as i2 from "@angular/platform-browser";
import * as i3 from "@angular/common/http";
import * as i4 from "@ionic/angular";
import * as i5 from "@angular/common";
import * as i6 from "@angular/forms";
import * as i7 from "./warning-alert-service";
export class AjfVideoUrlFieldComponent extends CoreComponent {
    constructor(cdr, service, was, domSanitizer, httpClient) {
        super(cdr, service, was, domSanitizer, httpClient);
    }
}
AjfVideoUrlFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfVideoUrlFieldComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.AjfFormRendererService }, { token: AJF_WARNING_ALERT_SERVICE }, { token: i2.DomSanitizer }, { token: i3.HttpClient }], target: i0.ɵɵFactoryTarget.Component });
AjfVideoUrlFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.5", type: AjfVideoUrlFieldComponent, selector: "ng-component", usesInheritance: true, ngImport: i0, template: "<ng-container *ngIf=\"control|async as ctrl\">\n  <ion-input class=\"ajf-video-input\" [formControl]=\"ctrl!\"></ion-input>\n  <div class=\"ajf-video-thumbnail\">\n    <ng-container *ngIf=\"validUrl|async\">\n      <a target=\"_blank\" [href]=\"ctrl.value\">\n        <img *ngIf=\"videoThumbnail|async as thumb\" [src]=\"thumb\" class=\"\" alt=\"\">\n      </a>\n    </ng-container>\n  </div>\n</ng-container>\n", styles: [".ajf-video-input{width:100%}.ajf-video-thumbnail{margin-top:1em;width:212px;height:120px;background-color:#eee;display:flex;align-items:center;justify-content:center}.ajf-video-thumbnail img{flex:1 1 auto}\n"], components: [{ type: i4.IonInput, selector: "ion-input", inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "spellcheck", "step", "type", "value"] }], directives: [{ type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.TextValueAccessor, selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar" }, { type: i6.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i6.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], pipes: { "async": i5.AsyncPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfVideoUrlFieldComponent, decorators: [{
            type: Component,
            args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-container *ngIf=\"control|async as ctrl\">\n  <ion-input class=\"ajf-video-input\" [formControl]=\"ctrl!\"></ion-input>\n  <div class=\"ajf-video-thumbnail\">\n    <ng-container *ngIf=\"validUrl|async\">\n      <a target=\"_blank\" [href]=\"ctrl.value\">\n        <img *ngIf=\"videoThumbnail|async as thumb\" [src]=\"thumb\" class=\"\" alt=\"\">\n      </a>\n    </ng-container>\n  </div>\n</ng-container>\n", styles: [".ajf-video-input{width:100%}.ajf-video-thumbnail{margin-top:1em;width:212px;height:120px;background-color:#eee;display:flex;align-items:center;justify-content:center}.ajf-video-thumbnail img{flex:1 1 auto}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.AjfFormRendererService }, { type: i7.AjfWarningAlertService, decorators: [{
                    type: Inject,
                    args: [AJF_WARNING_ALERT_SERVICE]
                }] }, { type: i2.DomSanitizer }, { type: i3.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8tdXJsLWZpZWxkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvaW9uaWMvZm9ybXMvc3JjL3ZpZGVvLXVybC1maWVsZC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL2lvbmljL2Zvcm1zL3NyYy92aWRlby11cmwtZmllbGQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFFSCxPQUFPLEVBQ0wseUJBQXlCLEVBRXpCLHlCQUF5QixJQUFJLGFBQWEsR0FDM0MsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxNQUFNLEVBQ04saUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7QUFXdkIsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGFBQWE7SUFDMUQsWUFDRSxHQUFzQixFQUN0QixPQUErQixFQUNJLEdBQTJCLEVBQzlELFlBQTBCLEVBQzFCLFVBQXNCO1FBRXRCLEtBQUssQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7c0hBVFUseUJBQXlCLHlGQUkxQix5QkFBeUI7MEdBSnhCLHlCQUF5QiwyRUM3Q3RDLDZaQVVBOzJGRG1DYSx5QkFBeUI7a0JBTnJDLFNBQVM7c0NBR1MsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSTs7MEJBTWxDLE1BQU07MkJBQUMseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChDKSBHbnVjb29wIHNvYy4gY29vcC5cbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSxcbiAqIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKiBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvLlxuICpcbiAqL1xuXG5pbXBvcnQge1xuICBBSkZfV0FSTklOR19BTEVSVF9TRVJWSUNFLFxuICBBamZGb3JtUmVuZGVyZXJTZXJ2aWNlLFxuICBBamZWaWRlb1VybEZpZWxkQ29tcG9uZW50IGFzIENvcmVDb21wb25lbnQsXG59IGZyb20gJ0BhamYvY29yZS9mb3Jtcyc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbmplY3QsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RG9tU2FuaXRpemVyfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHtBamZXYXJuaW5nQWxlcnRTZXJ2aWNlfSBmcm9tICcuL3dhcm5pbmctYWxlcnQtc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogJ3ZpZGVvLXVybC1maWVsZC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3ZpZGVvLXVybC1maWVsZC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBBamZWaWRlb1VybEZpZWxkQ29tcG9uZW50IGV4dGVuZHMgQ29yZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgc2VydmljZTogQWpmRm9ybVJlbmRlcmVyU2VydmljZSxcbiAgICBASW5qZWN0KEFKRl9XQVJOSU5HX0FMRVJUX1NFUlZJQ0UpIHdhczogQWpmV2FybmluZ0FsZXJ0U2VydmljZSxcbiAgICBkb21TYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBodHRwQ2xpZW50OiBIdHRwQ2xpZW50LFxuICApIHtcbiAgICBzdXBlcihjZHIsIHNlcnZpY2UsIHdhcywgZG9tU2FuaXRpemVyLCBodHRwQ2xpZW50KTtcbiAgfVxufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRyb2x8YXN5bmMgYXMgY3RybFwiPlxuICA8aW9uLWlucHV0IGNsYXNzPVwiYWpmLXZpZGVvLWlucHV0XCIgW2Zvcm1Db250cm9sXT1cImN0cmwhXCI+PC9pb24taW5wdXQ+XG4gIDxkaXYgY2xhc3M9XCJhamYtdmlkZW8tdGh1bWJuYWlsXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInZhbGlkVXJsfGFzeW5jXCI+XG4gICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBbaHJlZl09XCJjdHJsLnZhbHVlXCI+XG4gICAgICAgIDxpbWcgKm5nSWY9XCJ2aWRlb1RodW1ibmFpbHxhc3luYyBhcyB0aHVtYlwiIFtzcmNdPVwidGh1bWJcIiBjbGFzcz1cIlwiIGFsdD1cIlwiPlxuICAgICAgPC9hPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cbjwvbmctY29udGFpbmVyPlxuIl19