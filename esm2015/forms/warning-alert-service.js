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
import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
let AjfWarningAlertService = /** @class */ (() => {
    let AjfWarningAlertService = class AjfWarningAlertService {
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
    };
    AjfWarningAlertService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AlertController])
    ], AjfWarningAlertService);
    return AjfWarningAlertService;
})();
export { AjfWarningAlertService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FybmluZy1hbGVydC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2lvbmljL2Zvcm1zL3dhcm5pbmctYWxlcnQtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7O0FBTUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0MsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUdoQztJQUFBLElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO1FBQ2pDLFlBQW9CLFVBQTJCO1lBQTNCLGVBQVUsR0FBVixVQUFVLENBQWlCO1FBQUcsQ0FBQztRQUVuRCxzQkFBc0IsQ0FBQyxRQUFrQjtZQUN2QyxPQUFPLElBQUksVUFBVSxDQUE2QixVQUFVLENBQUMsRUFBRTtnQkFDN0QsSUFBSSxDQUFDLFVBQVU7cUJBQ1YsTUFBTSxDQUFDO29CQUNOLE1BQU0sRUFBRSxTQUFTO29CQUNqQixPQUFPLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQzVCLE9BQU8sRUFBRTt3QkFDUDs0QkFDRSxJQUFJLEVBQUUsSUFBSTs0QkFDVixPQUFPLEVBQUUsR0FBRyxFQUFFO2dDQUNaLFVBQVUsQ0FBQyxJQUFJLENBQTZCLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7Z0NBQzdELFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQzs0QkFDeEIsQ0FBQzt5QkFDRjt3QkFDRDs0QkFDRSxJQUFJLEVBQUUsS0FBSzs0QkFDWCxPQUFPLEVBQUUsR0FBRyxFQUFFO2dDQUNaLFVBQVUsQ0FBQyxJQUFJLENBQTZCLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7Z0NBQzVELFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQzs0QkFDeEIsQ0FBQzt5QkFDRjtxQkFDRjtpQkFDRixDQUFDO3FCQUNELElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO29CQUNkLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDbEIsQ0FBQyxDQUFDLENBQUM7WUFDVCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7S0FDRixDQUFBO0lBL0JZLHNCQUFzQjtRQURsQyxVQUFVLEVBQUU7eUNBRXFCLGVBQWU7T0FEcEMsc0JBQXNCLENBK0JsQztJQUFELDZCQUFDO0tBQUE7U0EvQlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChDKSBHbnVjb29wIHNvYy4gY29vcC5cbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSxcbiAqIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKiBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvLlxuICpcbiAqL1xuXG5pbXBvcnQge1xuICBBamZGaWVsZFdhcm5pbmdBbGVydFJlc3VsdCxcbiAgQWpmV2FybmluZ0FsZXJ0U2VydmljZSBhcyBDb3JlV2FybmluZ0FsZXJ0U2VydmljZVxufSBmcm9tICdAYWpmL2NvcmUvZm9ybXMnO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWxlcnRDb250cm9sbGVyfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWpmV2FybmluZ0FsZXJ0U2VydmljZSBpbXBsZW1lbnRzIENvcmVXYXJuaW5nQWxlcnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWxlcnRDdHJsOiBBbGVydENvbnRyb2xsZXIpIHt9XG5cbiAgc2hvd1dhcm5pbmdBbGVydFByb21wdCh3YXJuaW5nczogc3RyaW5nW10pOiBPYnNlcnZhYmxlPEFqZkZpZWxkV2FybmluZ0FsZXJ0UmVzdWx0PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPEFqZkZpZWxkV2FybmluZ0FsZXJ0UmVzdWx0PihzdWJzY3JpYmVyID0+IHtcbiAgICAgIHRoaXMuX2FsZXJ0Q3RybFxuICAgICAgICAgIC5jcmVhdGUoe1xuICAgICAgICAgICAgaGVhZGVyOiAnV2FybmluZycsXG4gICAgICAgICAgICBtZXNzYWdlOiB3YXJuaW5ncy5qb2luKCdcXG4nKSxcbiAgICAgICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6ICdObycsXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KDxBamZGaWVsZFdhcm5pbmdBbGVydFJlc3VsdD57cmVzdWx0OiBmYWxzZX0pO1xuICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6ICdZZXMnLFxuICAgICAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCg8QWpmRmllbGRXYXJuaW5nQWxlcnRSZXN1bHQ+e3Jlc3VsdDogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oKGFsZXJ0KSA9PiB7XG4gICAgICAgICAgICBhbGVydC5wcmVzZW50KCk7XG4gICAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==