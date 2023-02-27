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
AjfCheckboxGroupModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: AjfCheckboxGroupModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AjfCheckboxGroupModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.4", ngImport: i0, type: AjfCheckboxGroupModule, declarations: [AjfCheckboxGroupItem], imports: [CommonModule, CoreCheckboxGroupModule, IonicModule], exports: [AjfCheckboxGroupItem, CoreCheckboxGroupModule] });
AjfCheckboxGroupModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: AjfCheckboxGroupModule, imports: [CommonModule, CoreCheckboxGroupModule, IonicModule, CoreCheckboxGroupModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: AjfCheckboxGroupModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, CoreCheckboxGroupModule, IonicModule],
                    declarations: [AjfCheckboxGroupItem],
                    exports: [AjfCheckboxGroupItem, CoreCheckboxGroupModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtZ3JvdXAtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvaW9uaWMvY2hlY2tib3gtZ3JvdXAvc3JjL2NoZWNrYm94LWdyb3VwLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFFSCxPQUFPLEVBQUMsc0JBQXNCLElBQUksdUJBQXVCLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRixPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7O0FBTzNELE1BQU0sT0FBTyxzQkFBc0I7O21IQUF0QixzQkFBc0I7b0hBQXRCLHNCQUFzQixpQkFIbEIsb0JBQW9CLGFBRHpCLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxXQUFXLGFBRWxELG9CQUFvQixFQUFFLHVCQUF1QjtvSEFFNUMsc0JBQXNCLFlBSnZCLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxXQUFXLEVBRTVCLHVCQUF1QjsyRkFFNUMsc0JBQXNCO2tCQUxsQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxXQUFXLENBQUM7b0JBQzdELFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUNwQyxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSx1QkFBdUIsQ0FBQztpQkFDekQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKEMpIEdudWNvb3Agc29jLiBjb29wLlxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpLlxuICpcbiAqIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLFxuICogb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm9cbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8uXG4gKlxuICovXG5cbmltcG9ydCB7QWpmQ2hlY2tib3hHcm91cE1vZHVsZSBhcyBDb3JlQ2hlY2tib3hHcm91cE1vZHVsZX0gZnJvbSAnQGFqZi9jb3JlL2NoZWNrYm94LWdyb3VwJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lvbmljTW9kdWxlfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5cbmltcG9ydCB7QWpmQ2hlY2tib3hHcm91cEl0ZW19IGZyb20gJy4vY2hlY2tib3gtZ3JvdXAtaXRlbSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIENvcmVDaGVja2JveEdyb3VwTW9kdWxlLCBJb25pY01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0FqZkNoZWNrYm94R3JvdXBJdGVtXSxcbiAgZXhwb3J0czogW0FqZkNoZWNrYm94R3JvdXBJdGVtLCBDb3JlQ2hlY2tib3hHcm91cE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEFqZkNoZWNrYm94R3JvdXBNb2R1bGUge31cbiJdfQ==