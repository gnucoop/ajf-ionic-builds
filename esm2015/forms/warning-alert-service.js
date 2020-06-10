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
let AjfWarningAlertService = /** @class */ (() => {
    class AjfWarningAlertService {
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
    /** @nocollapse */
    AjfWarningAlertService.ctorParameters = () => [
        { type: AlertController }
    ];
    return AjfWarningAlertService;
})();
export { AjfWarningAlertService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FybmluZy1hbGVydC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2lvbmljL2Zvcm1zL3dhcm5pbmctYWxlcnQtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFNSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRWhDO0lBQUEsTUFDYSxzQkFBc0I7UUFDakMsWUFBb0IsVUFBMkI7WUFBM0IsZUFBVSxHQUFWLFVBQVUsQ0FBaUI7UUFBRyxDQUFDO1FBRW5ELHNCQUFzQixDQUFDLFFBQWtCO1lBQ3ZDLE9BQU8sSUFBSSxVQUFVLENBQTZCLFVBQVUsQ0FBQyxFQUFFO2dCQUM3RCxJQUFJLENBQUMsVUFBVTtxQkFDVixNQUFNLENBQUM7b0JBQ04sTUFBTSxFQUFFLFNBQVM7b0JBQ2pCLE9BQU8sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztvQkFDNUIsT0FBTyxFQUFFO3dCQUNQOzRCQUNFLElBQUksRUFBRSxJQUFJOzRCQUNWLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0NBQ1osVUFBVSxDQUFDLElBQUksQ0FBNkIsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztnQ0FDN0QsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDOzRCQUN4QixDQUFDO3lCQUNGO3dCQUNEOzRCQUNFLElBQUksRUFBRSxLQUFLOzRCQUNYLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0NBQ1osVUFBVSxDQUFDLElBQUksQ0FBNkIsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztnQ0FDNUQsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDOzRCQUN4QixDQUFDO3lCQUNGO3FCQUNGO2lCQUNGLENBQUM7cUJBQ0QsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQ2QsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNsQixDQUFDLENBQUMsQ0FBQztZQUNULENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQzs7O2dCQS9CRixVQUFVOzs7O2dCQUhILGVBQWU7O0lBbUN2Qiw2QkFBQztLQUFBO1NBL0JZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoQykgR251Y29vcCBzb2MuIGNvb3AuXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhc1xuICogcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsXG4gKiBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVyb1xuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpLlxuICogSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLy5cbiAqXG4gKi9cblxuaW1wb3J0IHtcbiAgQWpmRmllbGRXYXJuaW5nQWxlcnRSZXN1bHQsXG4gIEFqZldhcm5pbmdBbGVydFNlcnZpY2UgYXMgQ29yZVdhcm5pbmdBbGVydFNlcnZpY2Vcbn0gZnJvbSAnQGFqZi9jb3JlL2Zvcm1zJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FsZXJ0Q29udHJvbGxlcn0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFqZldhcm5pbmdBbGVydFNlcnZpY2UgaW1wbGVtZW50cyBDb3JlV2FybmluZ0FsZXJ0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FsZXJ0Q3RybDogQWxlcnRDb250cm9sbGVyKSB7fVxuXG4gIHNob3dXYXJuaW5nQWxlcnRQcm9tcHQod2FybmluZ3M6IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxBamZGaWVsZFdhcm5pbmdBbGVydFJlc3VsdD4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxBamZGaWVsZFdhcm5pbmdBbGVydFJlc3VsdD4oc3Vic2NyaWJlciA9PiB7XG4gICAgICB0aGlzLl9hbGVydEN0cmxcbiAgICAgICAgICAuY3JlYXRlKHtcbiAgICAgICAgICAgIGhlYWRlcjogJ1dhcm5pbmcnLFxuICAgICAgICAgICAgbWVzc2FnZTogd2FybmluZ3Muam9pbignXFxuJyksXG4gICAgICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiAnTm8nLFxuICAgICAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCg8QWpmRmllbGRXYXJuaW5nQWxlcnRSZXN1bHQ+e3Jlc3VsdDogZmFsc2V9KTtcbiAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiAnWWVzJyxcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoPEFqZkZpZWxkV2FybmluZ0FsZXJ0UmVzdWx0PntyZXN1bHQ6IHRydWV9KTtcbiAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKChhbGVydCkgPT4ge1xuICAgICAgICAgICAgYWxlcnQucHJlc2VudCgpO1xuICAgICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=