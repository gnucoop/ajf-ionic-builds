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
var AjfWarningAlertService = /** @class */ (function () {
    function AjfWarningAlertService(_alertCtrl) {
        this._alertCtrl = _alertCtrl;
    }
    AjfWarningAlertService.prototype.showWarningAlertPrompt = function (warnings) {
        var _this = this;
        return new Observable(function (subscriber) {
            _this._alertCtrl.create({
                header: 'Warning',
                message: warnings.join('\n'),
                buttons: [
                    {
                        text: 'No',
                        handler: function () {
                            subscriber.next({ result: false });
                            subscriber.complete();
                        }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                            subscriber.next({ result: true });
                            subscriber.complete();
                        }
                    }
                ]
            }).then(function (alert) {
                alert.present();
            });
        });
    };
    AjfWarningAlertService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AjfWarningAlertService.ctorParameters = function () { return [
        { type: AlertController }
    ]; };
    return AjfWarningAlertService;
}());
export { AjfWarningAlertService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FybmluZy1hbGVydC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2lvbmljL2Zvcm1zL3dhcm5pbmctYWxlcnQtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFLSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRWhDO0lBRUUsZ0NBQW9CLFVBQTJCO1FBQTNCLGVBQVUsR0FBVixVQUFVLENBQWlCO0lBQUksQ0FBQztJQUVwRCx1REFBc0IsR0FBdEIsVUFBdUIsUUFBa0I7UUFBekMsaUJBeUJDO1FBeEJDLE9BQU8sSUFBSSxVQUFVLENBQTZCLFVBQUEsVUFBVTtZQUMxRCxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztnQkFDckIsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLE9BQU8sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDNUIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxJQUFJO3dCQUNWLE9BQU8sRUFBRTs0QkFDUCxVQUFVLENBQUMsSUFBSSxDQUE2QixFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDOzRCQUM3RCxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBQ3hCLENBQUM7cUJBQ0Y7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLEtBQUs7d0JBQ1gsT0FBTyxFQUFFOzRCQUNQLFVBQVUsQ0FBQyxJQUFJLENBQTZCLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7NEJBQzVELFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDeEIsQ0FBQztxQkFDRjtpQkFDRjthQUNGLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFLO2dCQUNaLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBN0JGLFVBQVU7Ozs7Z0JBSEgsZUFBZTs7SUFpQ3ZCLDZCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0E3Qlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChDKSBHbnVjb29wIHNvYy4gY29vcC5cbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSxcbiAqIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKiBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvLlxuICpcbiAqL1xuXG5pbXBvcnQge1xuICBBamZGaWVsZFdhcm5pbmdBbGVydFJlc3VsdCwgQWpmV2FybmluZ0FsZXJ0U2VydmljZSBhcyBDb3JlV2FybmluZ0FsZXJ0U2VydmljZVxufSBmcm9tICdAYWpmL2NvcmUvZm9ybXMnO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWxlcnRDb250cm9sbGVyfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWpmV2FybmluZ0FsZXJ0U2VydmljZSBpbXBsZW1lbnRzIENvcmVXYXJuaW5nQWxlcnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWxlcnRDdHJsOiBBbGVydENvbnRyb2xsZXIpIHsgfVxuXG4gIHNob3dXYXJuaW5nQWxlcnRQcm9tcHQod2FybmluZ3M6IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxBamZGaWVsZFdhcm5pbmdBbGVydFJlc3VsdD4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxBamZGaWVsZFdhcm5pbmdBbGVydFJlc3VsdD4oc3Vic2NyaWJlciA9PiB7XG4gICAgICB0aGlzLl9hbGVydEN0cmwuY3JlYXRlKHtcbiAgICAgICAgaGVhZGVyOiAnV2FybmluZycsXG4gICAgICAgIG1lc3NhZ2U6IHdhcm5pbmdzLmpvaW4oJ1xcbicpLFxuICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ05vJyxcbiAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcbiAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KDxBamZGaWVsZFdhcm5pbmdBbGVydFJlc3VsdD57cmVzdWx0OiBmYWxzZX0pO1xuICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnWWVzJyxcbiAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcbiAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KDxBamZGaWVsZFdhcm5pbmdBbGVydFJlc3VsdD57cmVzdWx0OiB0cnVlfSk7XG4gICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0pLnRoZW4oKGFsZXJ0KSA9PiB7XG4gICAgICAgIGFsZXJ0LnByZXNlbnQoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=