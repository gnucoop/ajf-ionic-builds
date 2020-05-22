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
import { __decorate } from "tslib";
import { AjfCalendarModule as CoreModule } from '@ajf/core/calendar';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { AjfCalendarComponent } from './calendar';
let AjfCalendarModule = /** @class */ (() => {
    let AjfCalendarModule = class AjfCalendarModule {
    };
    AjfCalendarModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                CoreModule,
                FormsModule,
                IonicModule,
                TranslateModule,
            ],
            declarations: [
                AjfCalendarComponent,
            ],
            exports: [
                AjfCalendarComponent,
            ],
        })
    ], AjfCalendarModule);
    return AjfCalendarModule;
})();
export { AjfCalendarModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2lvbmljL2NhbGVuZGFyL2NhbGVuZGFyLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7O0FBRUgsT0FBTyxFQUFDLGlCQUFpQixJQUFJLFVBQVUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ25FLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBRXBELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLFlBQVksQ0FBQztBQWlCaEQ7SUFBQSxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtLQUM3QixDQUFBO0lBRFksaUJBQWlCO1FBZjdCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLFVBQVU7Z0JBQ1YsV0FBVztnQkFDWCxXQUFXO2dCQUNYLGVBQWU7YUFDaEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osb0JBQW9CO2FBQ3JCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLG9CQUFvQjthQUNyQjtTQUNGLENBQUM7T0FDVyxpQkFBaUIsQ0FDN0I7SUFBRCx3QkFBQztLQUFBO1NBRFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChDKSBHbnVjb29wIHNvYy4gY29vcC5cbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSxcbiAqIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKiBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvLlxuICpcbiAqL1xuXG5pbXBvcnQge0FqZkNhbGVuZGFyTW9kdWxlIGFzIENvcmVNb2R1bGV9IGZyb20gJ0BhamYvY29yZS9jYWxlbmRhcic7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtJb25pY01vZHVsZX0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHtUcmFuc2xhdGVNb2R1bGV9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5pbXBvcnQge0FqZkNhbGVuZGFyQ29tcG9uZW50fSBmcm9tICcuL2NhbGVuZGFyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDb3JlTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQWpmQ2FsZW5kYXJDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBBamZDYWxlbmRhckNvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQWpmQ2FsZW5kYXJNb2R1bGUge1xufVxuIl19