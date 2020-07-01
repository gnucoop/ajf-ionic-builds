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
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
export class AjfWarningAlertService {
    constructor(_alertCtrl) {
        this._alertCtrl = _alertCtrl;
    }
    showWarningAlertPrompt(warnings) {
        return new Observable(subscriber => {
            this._alertCtrl
                .create({
                header: 'Warning',
                message: warnings.join('\n'),
                buttons: [
                    {
                        text: 'No',
                        handler: () => {
                            subscriber.next({ result: false });
                            subscriber.complete();
                        }
                    },
                    {
                        text: 'Yes',
                        handler: () => {
                            subscriber.next({ result: true });
                            subscriber.complete();
                        }
                    }
                ]
            })
                .then((alert) => {
                alert.present();
            });
        });
    }
}
AjfWarningAlertService.decorators = [
    { type: Injectable }
];
AjfWarningAlertService.ctorParameters = () => [
    { type: AlertController }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FybmluZy1hbGVydC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2lvbmljL2Zvcm1zL3dhcm5pbmctYWxlcnQtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFNSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBR2hDLE1BQU0sT0FBTyxzQkFBc0I7SUFDakMsWUFBb0IsVUFBMkI7UUFBM0IsZUFBVSxHQUFWLFVBQVUsQ0FBaUI7SUFBRyxDQUFDO0lBRW5ELHNCQUFzQixDQUFDLFFBQWtCO1FBQ3ZDLE9BQU8sSUFBSSxVQUFVLENBQTZCLFVBQVUsQ0FBQyxFQUFFO1lBQzdELElBQUksQ0FBQyxVQUFVO2lCQUNWLE1BQU0sQ0FBQztnQkFDTixNQUFNLEVBQUUsU0FBUztnQkFDakIsT0FBTyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUM1QixPQUFPLEVBQUU7b0JBQ1A7d0JBQ0UsSUFBSSxFQUFFLElBQUk7d0JBQ1YsT0FBTyxFQUFFLEdBQUcsRUFBRTs0QkFDWixVQUFVLENBQUMsSUFBSSxDQUE2QixFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDOzRCQUM3RCxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBQ3hCLENBQUM7cUJBQ0Y7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLEtBQUs7d0JBQ1gsT0FBTyxFQUFFLEdBQUcsRUFBRTs0QkFDWixVQUFVLENBQUMsSUFBSSxDQUE2QixFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDOzRCQUM1RCxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBQ3hCLENBQUM7cUJBQ0Y7aUJBQ0Y7YUFDRixDQUFDO2lCQUNELElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNkLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQztRQUNULENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBL0JGLFVBQVU7OztZQUhILGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKEMpIEdudWNvb3Agc29jLiBjb29wLlxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpLlxuICpcbiAqIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLFxuICogb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm9cbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8uXG4gKlxuICovXG5cbmltcG9ydCB7XG4gIEFqZkZpZWxkV2FybmluZ0FsZXJ0UmVzdWx0LFxuICBBamZXYXJuaW5nQWxlcnRTZXJ2aWNlIGFzIENvcmVXYXJuaW5nQWxlcnRTZXJ2aWNlXG59IGZyb20gJ0BhamYvY29yZS9mb3Jtcyc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBbGVydENvbnRyb2xsZXJ9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBamZXYXJuaW5nQWxlcnRTZXJ2aWNlIGltcGxlbWVudHMgQ29yZVdhcm5pbmdBbGVydFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hbGVydEN0cmw6IEFsZXJ0Q29udHJvbGxlcikge31cblxuICBzaG93V2FybmluZ0FsZXJ0UHJvbXB0KHdhcm5pbmdzOiBzdHJpbmdbXSk6IE9ic2VydmFibGU8QWpmRmllbGRXYXJuaW5nQWxlcnRSZXN1bHQ+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8QWpmRmllbGRXYXJuaW5nQWxlcnRSZXN1bHQ+KHN1YnNjcmliZXIgPT4ge1xuICAgICAgdGhpcy5fYWxlcnRDdHJsXG4gICAgICAgICAgLmNyZWF0ZSh7XG4gICAgICAgICAgICBoZWFkZXI6ICdXYXJuaW5nJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IHdhcm5pbmdzLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogJ05vJyxcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoPEFqZkZpZWxkV2FybmluZ0FsZXJ0UmVzdWx0PntyZXN1bHQ6IGZhbHNlfSk7XG4gICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogJ1llcycsXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KDxBamZGaWVsZFdhcm5pbmdBbGVydFJlc3VsdD57cmVzdWx0OiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigoYWxlcnQpID0+IHtcbiAgICAgICAgICAgIGFsZXJ0LnByZXNlbnQoKTtcbiAgICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19