/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/forms/warning-alert-service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright (C) 2018 Gnucoop soc. coop.
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
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
export class AjfWarningAlertService {
    /**
     * @param {?} _alertCtrl
     */
    constructor(_alertCtrl) {
        this._alertCtrl = _alertCtrl;
    }
    /**
     * @param {?} warnings
     * @return {?}
     */
    showWarningAlertPrompt(warnings) {
        return new Observable((/**
         * @param {?} subscriber
         * @return {?}
         */
        subscriber => {
            this._alertCtrl.create({
                header: 'Warning',
                message: warnings.join('\n'),
                buttons: [
                    {
                        text: 'No',
                        handler: (/**
                         * @return {?}
                         */
                        () => {
                            subscriber.next((/** @type {?} */ ({ result: false })));
                            subscriber.complete();
                        })
                    },
                    {
                        text: 'Yes',
                        handler: (/**
                         * @return {?}
                         */
                        () => {
                            subscriber.next((/** @type {?} */ ({ result: true })));
                            subscriber.complete();
                        })
                    }
                ]
            }).then((/**
             * @param {?} alert
             * @return {?}
             */
            (alert) => {
                alert.present();
            }));
        }));
    }
}
AjfWarningAlertService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AjfWarningAlertService.ctorParameters = () => [
    { type: AlertController }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AjfWarningAlertService.prototype._alertCtrl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FybmluZy1hbGVydC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2lvbmljL2Zvcm1zL3dhcm5pbmctYWxlcnQtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBR2hDLE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFDakMsWUFBb0IsVUFBMkI7UUFBM0IsZUFBVSxHQUFWLFVBQVUsQ0FBaUI7SUFBSSxDQUFDOzs7OztJQUVwRCxzQkFBc0IsQ0FBQyxRQUFrQjtRQUN2QyxPQUFPLElBQUksVUFBVTs7OztRQUE2QixVQUFVLENBQUMsRUFBRTtZQUM3RCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztnQkFDckIsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLE9BQU8sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDNUIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxJQUFJO3dCQUNWLE9BQU87Ozt3QkFBRSxHQUFHLEVBQUU7NEJBQ1osVUFBVSxDQUFDLElBQUksQ0FBQyxtQkFBNEIsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLEVBQUEsQ0FBQyxDQUFDOzRCQUM3RCxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBQ3hCLENBQUMsQ0FBQTtxQkFDRjtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsS0FBSzt3QkFDWCxPQUFPOzs7d0JBQUUsR0FBRyxFQUFFOzRCQUNaLFVBQVUsQ0FBQyxJQUFJLENBQUMsbUJBQTRCLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxFQUFBLENBQUMsQ0FBQzs0QkFDNUQsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO3dCQUN4QixDQUFDLENBQUE7cUJBQ0Y7aUJBQ0Y7YUFDRixDQUFDLENBQUMsSUFBSTs7OztZQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ2hCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNsQixDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBN0JGLFVBQVU7Ozs7WUFISCxlQUFlOzs7Ozs7O0lBS1QsNENBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChDKSAyMDE4IEdudWNvb3Agc29jLiBjb29wLlxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpLlxuICpcbiAqIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLFxuICogb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm9cbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8uXG4gKlxuICovXG5cbmltcG9ydCB7XG4gIEFqZkZpZWxkV2FybmluZ0FsZXJ0UmVzdWx0LCBBamZXYXJuaW5nQWxlcnRTZXJ2aWNlIGFzIENvcmVXYXJuaW5nQWxlcnRTZXJ2aWNlXG59IGZyb20gJ0BhamYvY29yZS9mb3Jtcyc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBbGVydENvbnRyb2xsZXJ9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBamZXYXJuaW5nQWxlcnRTZXJ2aWNlIGltcGxlbWVudHMgQ29yZVdhcm5pbmdBbGVydFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hbGVydEN0cmw6IEFsZXJ0Q29udHJvbGxlcikgeyB9XG5cbiAgc2hvd1dhcm5pbmdBbGVydFByb21wdCh3YXJuaW5nczogc3RyaW5nW10pOiBPYnNlcnZhYmxlPEFqZkZpZWxkV2FybmluZ0FsZXJ0UmVzdWx0PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPEFqZkZpZWxkV2FybmluZ0FsZXJ0UmVzdWx0PihzdWJzY3JpYmVyID0+IHtcbiAgICAgIHRoaXMuX2FsZXJ0Q3RybC5jcmVhdGUoe1xuICAgICAgICBoZWFkZXI6ICdXYXJuaW5nJyxcbiAgICAgICAgbWVzc2FnZTogd2FybmluZ3Muam9pbignXFxuJyksXG4gICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnTm8nLFxuICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoPEFqZkZpZWxkV2FybmluZ0FsZXJ0UmVzdWx0PntyZXN1bHQ6IGZhbHNlfSk7XG4gICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdZZXMnLFxuICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoPEFqZkZpZWxkV2FybmluZ0FsZXJ0UmVzdWx0PntyZXN1bHQ6IHRydWV9KTtcbiAgICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSkudGhlbigoYWxlcnQpID0+IHtcbiAgICAgICAgYWxlcnQucHJlc2VudCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==