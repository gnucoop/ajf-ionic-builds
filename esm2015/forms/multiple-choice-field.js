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
import { AJF_SEARCH_ALERT_THRESHOLD, AJF_WARNING_ALERT_SERVICE, AjfFieldWithChoicesComponent, AjfFormRendererService } from '@ajf/core/forms';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Optional, ViewEncapsulation } from '@angular/core';
import { AjfWarningAlertService } from './warning-alert-service';
export class AjfMultipleChoiceFieldComponent extends AjfFieldWithChoicesComponent {
    constructor(cdr, service, was, searchThreshold) {
        super(cdr, service, was, searchThreshold);
    }
}
AjfMultipleChoiceFieldComponent.decorators = [
    { type: Component, args: [{
                template: "<ng-container *ngIf=\"!(instance|ajfExpandFieldWithChoices:searchThreshold); else expanded\">\n  <div class=\"ajf-item-container\">\n    <ng-container *ngIf=\"instance.filteredChoices as cs\">\n      <gic-select\n          #multipleChoiceSelect\n          *ngIf=\"control|async as ctrl\"\n          [multiple]=\"true\"\n          [searchBar]=\"instance|ajfSelectHasSearchBar:searchThreshold\"\n          [useVirtualScroll]=\"instance|ajfSelectUseVirtualScroll:100\"\n          [placeholder]=\"instance.node.label\"\n          [formControl]=\"ctrl!\">\n        <gic-select-option *ngFor=\"let item of cs\"\n            [value]=\"item.value\">{{ item.label|transloco }}</gic-select-option>\n      </gic-select>\n    </ng-container>\n  </div>\n</ng-container>\n<ng-template #expanded>\n  <div ajf-checkbox-group\n      *ngIf=\"control|async as ctrl\"\n      [formControl]=\"ctrl!\"\n      class=\"ajf-choices-container\"\n  >\n    <ion-card *ngFor=\"let choice of instance.filteredChoices\">\n      <ajf-checkbox-group-item\n        [value]=\"choice.value\">\n        {{ choice.label | transloco }}\n      </ajf-checkbox-group-item>\n    </ion-card>\n  </div>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["\n"]
            },] }
];
AjfMultipleChoiceFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService, decorators: [{ type: Inject, args: [AJF_WARNING_ALERT_SERVICE,] }] },
    { type: Number, decorators: [{ type: Optional }, { type: Inject, args: [AJF_SEARCH_ALERT_THRESHOLD,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlwbGUtY2hvaWNlLWZpZWxkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2lvbmljL2Zvcm1zL211bHRpcGxlLWNob2ljZS1maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFFSCxPQUFPLEVBQ0wsMEJBQTBCLEVBQzFCLHlCQUF5QixFQUN6Qiw0QkFBNEIsRUFDNUIsc0JBQXNCLEVBQ3ZCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULE1BQU0sRUFDTixRQUFRLEVBQ1IsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBUS9ELE1BQU0sT0FBTywrQkFBbUMsU0FBUSw0QkFBK0I7SUFDckYsWUFDSSxHQUFzQixFQUFFLE9BQStCLEVBQ3BCLEdBQTJCLEVBQ2QsZUFBdUI7UUFDekUsS0FBSyxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7OztZQVpGLFNBQVMsU0FBQztnQkFDVCxrcUNBQXlDO2dCQUV6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7WUFkQyxpQkFBaUI7WUFKakIsc0JBQXNCO1lBV2hCLHNCQUFzQix1QkFXdkIsTUFBTSxTQUFDLHlCQUF5Qjt5Q0FDaEMsUUFBUSxZQUFJLE1BQU0sU0FBQywwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKEMpIEdudWNvb3Agc29jLiBjb29wLlxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpLlxuICpcbiAqIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLFxuICogb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm9cbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8uXG4gKlxuICovXG5cbmltcG9ydCB7XG4gIEFKRl9TRUFSQ0hfQUxFUlRfVEhSRVNIT0xELFxuICBBSkZfV0FSTklOR19BTEVSVF9TRVJWSUNFLFxuICBBamZGaWVsZFdpdGhDaG9pY2VzQ29tcG9uZW50LFxuICBBamZGb3JtUmVuZGVyZXJTZXJ2aWNlXG59IGZyb20gJ0BhamYvY29yZS9mb3Jtcyc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5qZWN0LFxuICBPcHRpb25hbCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7QWpmV2FybmluZ0FsZXJ0U2VydmljZX0gZnJvbSAnLi93YXJuaW5nLWFsZXJ0LXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGVVcmw6ICdtdWx0aXBsZS1jaG9pY2UtZmllbGQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydtdWx0aXBsZS1jaG9pY2UtZmllbGQuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBBamZNdWx0aXBsZUNob2ljZUZpZWxkQ29tcG9uZW50PFQ+IGV4dGVuZHMgQWpmRmllbGRXaXRoQ2hvaWNlc0NvbXBvbmVudDxUPiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgc2VydmljZTogQWpmRm9ybVJlbmRlcmVyU2VydmljZSxcbiAgICAgIEBJbmplY3QoQUpGX1dBUk5JTkdfQUxFUlRfU0VSVklDRSkgd2FzOiBBamZXYXJuaW5nQWxlcnRTZXJ2aWNlLFxuICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChBSkZfU0VBUkNIX0FMRVJUX1RIUkVTSE9MRCkgc2VhcmNoVGhyZXNob2xkOiBudW1iZXIpIHtcbiAgICBzdXBlcihjZHIsIHNlcnZpY2UsIHdhcywgc2VhcmNoVGhyZXNob2xkKTtcbiAgfVxufVxuIl19