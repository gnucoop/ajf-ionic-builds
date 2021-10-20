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
import { AjfPageSliderModule as AjfCorePageSliderModule } from '@ajf/core/page-slider';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AjfPageSlider } from './page-slider';
import * as i0 from "@angular/core";
export class AjfPageSliderModule {
}
AjfPageSliderModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: AjfPageSliderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AjfPageSliderModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: AjfPageSliderModule, declarations: [AjfPageSlider], imports: [AjfCorePageSliderModule, CommonModule, IonicModule], exports: [AjfCorePageSliderModule, AjfPageSlider] });
AjfPageSliderModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: AjfPageSliderModule, imports: [[AjfCorePageSliderModule, CommonModule, IonicModule], AjfCorePageSliderModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: AjfPageSliderModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [AjfCorePageSliderModule, CommonModule, IonicModule],
                    declarations: [AjfPageSlider],
                    exports: [AjfCorePageSliderModule, AjfPageSlider],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zbGlkZXItbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2lvbmljL3BhZ2Utc2xpZGVyL3BhZ2Utc2xpZGVyLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFFSCxPQUFPLEVBQUMsbUJBQW1CLElBQUksdUJBQXVCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRixPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFPNUMsTUFBTSxPQUFPLG1CQUFtQjs7d0hBQW5CLG1CQUFtQjt5SEFBbkIsbUJBQW1CLGlCQUhmLGFBQWEsYUFEbEIsdUJBQXVCLEVBQUUsWUFBWSxFQUFFLFdBQVcsYUFFbEQsdUJBQXVCLEVBQUUsYUFBYTt5SEFFckMsbUJBQW1CLFlBSnJCLENBQUMsdUJBQXVCLEVBQUUsWUFBWSxFQUFFLFdBQVcsQ0FBQyxFQUVuRCx1QkFBdUI7bUdBRXRCLG1CQUFtQjtrQkFML0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxZQUFZLEVBQUUsV0FBVyxDQUFDO29CQUM3RCxZQUFZLEVBQUUsQ0FBQyxhQUFhLENBQUM7b0JBQzdCLE9BQU8sRUFBRSxDQUFDLHVCQUF1QixFQUFFLGFBQWEsQ0FBQztpQkFDbEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKEMpIEdudWNvb3Agc29jLiBjb29wLlxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpLlxuICpcbiAqIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLFxuICogb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm9cbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8uXG4gKlxuICovXG5cbmltcG9ydCB7QWpmUGFnZVNsaWRlck1vZHVsZSBhcyBBamZDb3JlUGFnZVNsaWRlck1vZHVsZX0gZnJvbSAnQGFqZi9jb3JlL3BhZ2Utc2xpZGVyJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lvbmljTW9kdWxlfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5cbmltcG9ydCB7QWpmUGFnZVNsaWRlcn0gZnJvbSAnLi9wYWdlLXNsaWRlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtBamZDb3JlUGFnZVNsaWRlck1vZHVsZSwgQ29tbW9uTW9kdWxlLCBJb25pY01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0FqZlBhZ2VTbGlkZXJdLFxuICBleHBvcnRzOiBbQWpmQ29yZVBhZ2VTbGlkZXJNb2R1bGUsIEFqZlBhZ2VTbGlkZXJdLFxufSlcbmV4cG9ydCBjbGFzcyBBamZQYWdlU2xpZGVyTW9kdWxlIHt9XG4iXX0=