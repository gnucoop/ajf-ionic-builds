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
import { AjfCheckboxGroupModule as CoreCheckboxGroupModule } from '@ajf/core/checkbox-group';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AjfCheckboxGroupItem } from './checkbox-group-item';
import * as i0 from "@angular/core";
export class AjfCheckboxGroupModule {
}
AjfCheckboxGroupModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfCheckboxGroupModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AjfCheckboxGroupModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfCheckboxGroupModule, declarations: [AjfCheckboxGroupItem], imports: [CommonModule, CoreCheckboxGroupModule, IonicModule], exports: [AjfCheckboxGroupItem, CoreCheckboxGroupModule] });
AjfCheckboxGroupModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfCheckboxGroupModule, imports: [[CommonModule, CoreCheckboxGroupModule, IonicModule], CoreCheckboxGroupModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfCheckboxGroupModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, CoreCheckboxGroupModule, IonicModule],
                    declarations: [AjfCheckboxGroupItem],
                    exports: [AjfCheckboxGroupItem, CoreCheckboxGroupModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtZ3JvdXAtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvaW9uaWMvY2hlY2tib3gtZ3JvdXAvc3JjL2NoZWNrYm94LWdyb3VwLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFFSCxPQUFPLEVBQUMsc0JBQXNCLElBQUksdUJBQXVCLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRixPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7O0FBTzNELE1BQU0sT0FBTyxzQkFBc0I7O21IQUF0QixzQkFBc0I7b0hBQXRCLHNCQUFzQixpQkFIbEIsb0JBQW9CLGFBRHpCLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxXQUFXLGFBRWxELG9CQUFvQixFQUFFLHVCQUF1QjtvSEFFNUMsc0JBQXNCLFlBSnhCLENBQUMsWUFBWSxFQUFFLHVCQUF1QixFQUFFLFdBQVcsQ0FBQyxFQUU3Qix1QkFBdUI7MkZBRTVDLHNCQUFzQjtrQkFMbEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsV0FBVyxDQUFDO29CQUM3RCxZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDcEMsT0FBTyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsdUJBQXVCLENBQUM7aUJBQ3pEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChDKSBHbnVjb29wIHNvYy4gY29vcC5cbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSxcbiAqIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKiBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvLlxuICpcbiAqL1xuXG5pbXBvcnQge0FqZkNoZWNrYm94R3JvdXBNb2R1bGUgYXMgQ29yZUNoZWNrYm94R3JvdXBNb2R1bGV9IGZyb20gJ0BhamYvY29yZS9jaGVja2JveC1ncm91cCc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJb25pY01vZHVsZX0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5pbXBvcnQge0FqZkNoZWNrYm94R3JvdXBJdGVtfSBmcm9tICcuL2NoZWNrYm94LWdyb3VwLWl0ZW0nO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDb3JlQ2hlY2tib3hHcm91cE1vZHVsZSwgSW9uaWNNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtBamZDaGVja2JveEdyb3VwSXRlbV0sXG4gIGV4cG9ydHM6IFtBamZDaGVja2JveEdyb3VwSXRlbSwgQ29yZUNoZWNrYm94R3JvdXBNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBBamZDaGVja2JveEdyb3VwTW9kdWxlIHt9XG4iXX0=