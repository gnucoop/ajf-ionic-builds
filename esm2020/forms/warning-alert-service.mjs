import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
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
                        },
                    },
                    {
                        text: 'Yes',
                        handler: () => {
                            subscriber.next({ result: true });
                            subscriber.complete();
                        },
                    },
                ],
            })
                .then(alert => {
                alert.present();
            });
        });
    }
}
AjfWarningAlertService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: AjfWarningAlertService, deps: [{ token: i1.AlertController }], target: i0.ɵɵFactoryTarget.Injectable });
AjfWarningAlertService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: AjfWarningAlertService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: AjfWarningAlertService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.AlertController }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FybmluZy1hbGVydC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2lvbmljL2Zvcm1zL3dhcm5pbmctYWxlcnQtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQkEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0MsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLE1BQU0sQ0FBQzs7O0FBR2hDLE1BQU0sT0FBTyxzQkFBc0I7SUFDakMsWUFBb0IsVUFBMkI7UUFBM0IsZUFBVSxHQUFWLFVBQVUsQ0FBaUI7SUFBRyxDQUFDO0lBRW5ELHNCQUFzQixDQUFDLFFBQWtCO1FBQ3ZDLE9BQU8sSUFBSSxVQUFVLENBQTZCLFVBQVUsQ0FBQyxFQUFFO1lBQzdELElBQUksQ0FBQyxVQUFVO2lCQUNaLE1BQU0sQ0FBQztnQkFDTixNQUFNLEVBQUUsU0FBUztnQkFDakIsT0FBTyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUM1QixPQUFPLEVBQUU7b0JBQ1A7d0JBQ0UsSUFBSSxFQUFFLElBQUk7d0JBQ1YsT0FBTyxFQUFFLEdBQUcsRUFBRTs0QkFDWixVQUFVLENBQUMsSUFBSSxDQUE2QixFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDOzRCQUM3RCxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBQ3hCLENBQUM7cUJBQ0Y7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLEtBQUs7d0JBQ1gsT0FBTyxFQUFFLEdBQUcsRUFBRTs0QkFDWixVQUFVLENBQUMsSUFBSSxDQUE2QixFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDOzRCQUM1RCxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBQ3hCLENBQUM7cUJBQ0Y7aUJBQ0Y7YUFDRixDQUFDO2lCQUNELElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDWixLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O3dIQTlCVSxzQkFBc0I7NEhBQXRCLHNCQUFzQjtnR0FBdEIsc0JBQXNCO2tCQURsQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChDKSBHbnVjb29wIHNvYy4gY29vcC5cbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSxcbiAqIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKiBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvLlxuICpcbiAqL1xuXG5pbXBvcnQge1xuICBBamZGaWVsZFdhcm5pbmdBbGVydFJlc3VsdCxcbiAgQWpmV2FybmluZ0FsZXJ0U2VydmljZSBhcyBDb3JlV2FybmluZ0FsZXJ0U2VydmljZSxcbn0gZnJvbSAnQGFqZi9jb3JlL2Zvcm1zJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FsZXJ0Q29udHJvbGxlcn0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFqZldhcm5pbmdBbGVydFNlcnZpY2UgaW1wbGVtZW50cyBDb3JlV2FybmluZ0FsZXJ0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FsZXJ0Q3RybDogQWxlcnRDb250cm9sbGVyKSB7fVxuXG4gIHNob3dXYXJuaW5nQWxlcnRQcm9tcHQod2FybmluZ3M6IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxBamZGaWVsZFdhcm5pbmdBbGVydFJlc3VsdD4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxBamZGaWVsZFdhcm5pbmdBbGVydFJlc3VsdD4oc3Vic2NyaWJlciA9PiB7XG4gICAgICB0aGlzLl9hbGVydEN0cmxcbiAgICAgICAgLmNyZWF0ZSh7XG4gICAgICAgICAgaGVhZGVyOiAnV2FybmluZycsXG4gICAgICAgICAgbWVzc2FnZTogd2FybmluZ3Muam9pbignXFxuJyksXG4gICAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnTm8nLFxuICAgICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KDxBamZGaWVsZFdhcm5pbmdBbGVydFJlc3VsdD57cmVzdWx0OiBmYWxzZX0pO1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdZZXMnLFxuICAgICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KDxBamZGaWVsZFdhcm5pbmdBbGVydFJlc3VsdD57cmVzdWx0OiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9KVxuICAgICAgICAudGhlbihhbGVydCA9PiB7XG4gICAgICAgICAgYWxlcnQucHJlc2VudCgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19