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
import { AjfChartModule } from '@ajf/core/chart';
import { AjfCommonModule } from '@ajf/core/common';
import { AjfHeatMapModule } from '@ajf/core/heat-map';
import { AjfMapModule } from '@ajf/core/map';
import { AjfPageBreakModule } from '@ajf/core/page-break';
import { AjfReportsModule as CoreModule } from '@ajf/core/reports';
import { AjfTableModule } from '@ajf/core/table';
import { AjfTextModule } from '@ajf/core/text';
import { AjfTranslocoModule } from '@ajf/core/transloco';
import { AjfImageModule } from '@ajf/ionic/image';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AjfChartWidgetComponent } from './chart-widget';
import { AjfFormulaWidgetComponent } from './formula-widget';
import { AjfHeatMapWidgetComponent } from './heat-map-widget';
import { AjfImageContainerWidgetComponent } from './image-container-widget';
import { AjfImageWidgetComponent } from './image-widget';
import { AjfMapWidgetComponent } from './map-widget';
import { AjfPageBreakWidgetComponent } from './page-break-widget';
import { AjfReportRenderer } from './report';
import { AjfTableWidgetComponent } from './table-widget';
import { AjfTextWidgetComponent } from './text-widget';
import { AjfColumnWidgetComponent, AjfDialogModal, AjfDialogWidgetComponent, AjfLayoutWidgetComponent, AjfPaginatedListWidgetComponent, AjfReportWidget, } from './widget';
import * as i0 from "@angular/core";
export class AjfReportsModule {
}
AjfReportsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: AjfReportsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AjfReportsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.4", ngImport: i0, type: AjfReportsModule, declarations: [AjfChartWidgetComponent,
        AjfColumnWidgetComponent,
        AjfDialogModal,
        AjfDialogWidgetComponent,
        AjfFormulaWidgetComponent,
        AjfHeatMapWidgetComponent,
        AjfImageContainerWidgetComponent,
        AjfImageWidgetComponent,
        AjfLayoutWidgetComponent,
        AjfMapWidgetComponent,
        AjfPageBreakWidgetComponent,
        AjfPaginatedListWidgetComponent,
        AjfReportRenderer,
        AjfReportWidget,
        AjfTableWidgetComponent,
        AjfTextWidgetComponent], imports: [AjfChartModule,
        AjfCommonModule,
        AjfHeatMapModule,
        AjfImageModule,
        AjfMapModule,
        AjfPageBreakModule,
        AjfTableModule,
        AjfTextModule,
        AjfTranslocoModule,
        CommonModule,
        CoreModule], exports: [AjfReportRenderer, AjfReportWidget] });
AjfReportsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: AjfReportsModule, imports: [AjfChartModule,
        AjfCommonModule,
        AjfHeatMapModule,
        AjfImageModule,
        AjfMapModule,
        AjfPageBreakModule,
        AjfTableModule,
        AjfTextModule,
        AjfTranslocoModule,
        CommonModule,
        CoreModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: AjfReportsModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        AjfChartModule,
                        AjfCommonModule,
                        AjfHeatMapModule,
                        AjfImageModule,
                        AjfMapModule,
                        AjfPageBreakModule,
                        AjfTableModule,
                        AjfTextModule,
                        AjfTranslocoModule,
                        CommonModule,
                        CoreModule,
                    ],
                    declarations: [
                        AjfChartWidgetComponent,
                        AjfColumnWidgetComponent,
                        AjfDialogModal,
                        AjfDialogWidgetComponent,
                        AjfFormulaWidgetComponent,
                        AjfHeatMapWidgetComponent,
                        AjfImageContainerWidgetComponent,
                        AjfImageWidgetComponent,
                        AjfLayoutWidgetComponent,
                        AjfMapWidgetComponent,
                        AjfPageBreakWidgetComponent,
                        AjfPaginatedListWidgetComponent,
                        AjfReportRenderer,
                        AjfReportWidget,
                        AjfTableWidgetComponent,
                        AjfTextWidgetComponent,
                    ],
                    exports: [AjfReportRenderer, AjfReportWidget],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0cy1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9pb25pYy9yZXBvcnRzL3NyYy9yZXBvcnRzLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFFSCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFDLGdCQUFnQixJQUFJLFVBQVUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2pFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXZDLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQzNELE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzVELE9BQU8sRUFBQyxnQ0FBZ0MsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQzFFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNuRCxPQUFPLEVBQUMsMkJBQTJCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDM0MsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsY0FBYyxFQUNkLHdCQUF3QixFQUN4Qix3QkFBd0IsRUFDeEIsK0JBQStCLEVBQy9CLGVBQWUsR0FDaEIsTUFBTSxVQUFVLENBQUM7O0FBb0NsQixNQUFNLE9BQU8sZ0JBQWdCOzs2R0FBaEIsZ0JBQWdCOzhHQUFoQixnQkFBZ0IsaUJBbkJ6Qix1QkFBdUI7UUFDdkIsd0JBQXdCO1FBQ3hCLGNBQWM7UUFDZCx3QkFBd0I7UUFDeEIseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUN6QixnQ0FBZ0M7UUFDaEMsdUJBQXVCO1FBQ3ZCLHdCQUF3QjtRQUN4QixxQkFBcUI7UUFDckIsMkJBQTJCO1FBQzNCLCtCQUErQjtRQUMvQixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLHVCQUF1QjtRQUN2QixzQkFBc0IsYUE1QnRCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixVQUFVLGFBb0JGLGlCQUFpQixFQUFFLGVBQWU7OEdBRWpDLGdCQUFnQixZQWhDekIsY0FBYztRQUNkLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFVBQVU7MkZBc0JELGdCQUFnQjtrQkFsQzVCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLGNBQWM7d0JBQ2QsWUFBWTt3QkFDWixrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixrQkFBa0I7d0JBQ2xCLFlBQVk7d0JBQ1osVUFBVTtxQkFDWDtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osdUJBQXVCO3dCQUN2Qix3QkFBd0I7d0JBQ3hCLGNBQWM7d0JBQ2Qsd0JBQXdCO3dCQUN4Qix5QkFBeUI7d0JBQ3pCLHlCQUF5Qjt3QkFDekIsZ0NBQWdDO3dCQUNoQyx1QkFBdUI7d0JBQ3ZCLHdCQUF3Qjt3QkFDeEIscUJBQXFCO3dCQUNyQiwyQkFBMkI7d0JBQzNCLCtCQUErQjt3QkFDL0IsaUJBQWlCO3dCQUNqQixlQUFlO3dCQUNmLHVCQUF1Qjt3QkFDdkIsc0JBQXNCO3FCQUN2QjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxlQUFlLENBQUM7aUJBQzlDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChDKSBHbnVjb29wIHNvYy4gY29vcC5cbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSxcbiAqIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKiBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvLlxuICpcbiAqL1xuXG5pbXBvcnQge0FqZkNoYXJ0TW9kdWxlfSBmcm9tICdAYWpmL2NvcmUvY2hhcnQnO1xuaW1wb3J0IHtBamZDb21tb25Nb2R1bGV9IGZyb20gJ0BhamYvY29yZS9jb21tb24nO1xuaW1wb3J0IHtBamZIZWF0TWFwTW9kdWxlfSBmcm9tICdAYWpmL2NvcmUvaGVhdC1tYXAnO1xuaW1wb3J0IHtBamZNYXBNb2R1bGV9IGZyb20gJ0BhamYvY29yZS9tYXAnO1xuaW1wb3J0IHtBamZQYWdlQnJlYWtNb2R1bGV9IGZyb20gJ0BhamYvY29yZS9wYWdlLWJyZWFrJztcbmltcG9ydCB7QWpmUmVwb3J0c01vZHVsZSBhcyBDb3JlTW9kdWxlfSBmcm9tICdAYWpmL2NvcmUvcmVwb3J0cyc7XG5pbXBvcnQge0FqZlRhYmxlTW9kdWxlfSBmcm9tICdAYWpmL2NvcmUvdGFibGUnO1xuaW1wb3J0IHtBamZUZXh0TW9kdWxlfSBmcm9tICdAYWpmL2NvcmUvdGV4dCc7XG5pbXBvcnQge0FqZlRyYW5zbG9jb01vZHVsZX0gZnJvbSAnQGFqZi9jb3JlL3RyYW5zbG9jbyc7XG5pbXBvcnQge0FqZkltYWdlTW9kdWxlfSBmcm9tICdAYWpmL2lvbmljL2ltYWdlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7QWpmQ2hhcnRXaWRnZXRDb21wb25lbnR9IGZyb20gJy4vY2hhcnQtd2lkZ2V0JztcbmltcG9ydCB7QWpmRm9ybXVsYVdpZGdldENvbXBvbmVudH0gZnJvbSAnLi9mb3JtdWxhLXdpZGdldCc7XG5pbXBvcnQge0FqZkhlYXRNYXBXaWRnZXRDb21wb25lbnR9IGZyb20gJy4vaGVhdC1tYXAtd2lkZ2V0JztcbmltcG9ydCB7QWpmSW1hZ2VDb250YWluZXJXaWRnZXRDb21wb25lbnR9IGZyb20gJy4vaW1hZ2UtY29udGFpbmVyLXdpZGdldCc7XG5pbXBvcnQge0FqZkltYWdlV2lkZ2V0Q29tcG9uZW50fSBmcm9tICcuL2ltYWdlLXdpZGdldCc7XG5pbXBvcnQge0FqZk1hcFdpZGdldENvbXBvbmVudH0gZnJvbSAnLi9tYXAtd2lkZ2V0JztcbmltcG9ydCB7QWpmUGFnZUJyZWFrV2lkZ2V0Q29tcG9uZW50fSBmcm9tICcuL3BhZ2UtYnJlYWstd2lkZ2V0JztcbmltcG9ydCB7QWpmUmVwb3J0UmVuZGVyZXJ9IGZyb20gJy4vcmVwb3J0JztcbmltcG9ydCB7QWpmVGFibGVXaWRnZXRDb21wb25lbnR9IGZyb20gJy4vdGFibGUtd2lkZ2V0JztcbmltcG9ydCB7QWpmVGV4dFdpZGdldENvbXBvbmVudH0gZnJvbSAnLi90ZXh0LXdpZGdldCc7XG5pbXBvcnQge1xuICBBamZDb2x1bW5XaWRnZXRDb21wb25lbnQsXG4gIEFqZkRpYWxvZ01vZGFsLFxuICBBamZEaWFsb2dXaWRnZXRDb21wb25lbnQsXG4gIEFqZkxheW91dFdpZGdldENvbXBvbmVudCxcbiAgQWpmUGFnaW5hdGVkTGlzdFdpZGdldENvbXBvbmVudCxcbiAgQWpmUmVwb3J0V2lkZ2V0LFxufSBmcm9tICcuL3dpZGdldCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBBamZDaGFydE1vZHVsZSxcbiAgICBBamZDb21tb25Nb2R1bGUsXG4gICAgQWpmSGVhdE1hcE1vZHVsZSxcbiAgICBBamZJbWFnZU1vZHVsZSxcbiAgICBBamZNYXBNb2R1bGUsXG4gICAgQWpmUGFnZUJyZWFrTW9kdWxlLFxuICAgIEFqZlRhYmxlTW9kdWxlLFxuICAgIEFqZlRleHRNb2R1bGUsXG4gICAgQWpmVHJhbnNsb2NvTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDb3JlTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBamZDaGFydFdpZGdldENvbXBvbmVudCxcbiAgICBBamZDb2x1bW5XaWRnZXRDb21wb25lbnQsXG4gICAgQWpmRGlhbG9nTW9kYWwsXG4gICAgQWpmRGlhbG9nV2lkZ2V0Q29tcG9uZW50LFxuICAgIEFqZkZvcm11bGFXaWRnZXRDb21wb25lbnQsXG4gICAgQWpmSGVhdE1hcFdpZGdldENvbXBvbmVudCxcbiAgICBBamZJbWFnZUNvbnRhaW5lcldpZGdldENvbXBvbmVudCxcbiAgICBBamZJbWFnZVdpZGdldENvbXBvbmVudCxcbiAgICBBamZMYXlvdXRXaWRnZXRDb21wb25lbnQsXG4gICAgQWpmTWFwV2lkZ2V0Q29tcG9uZW50LFxuICAgIEFqZlBhZ2VCcmVha1dpZGdldENvbXBvbmVudCxcbiAgICBBamZQYWdpbmF0ZWRMaXN0V2lkZ2V0Q29tcG9uZW50LFxuICAgIEFqZlJlcG9ydFJlbmRlcmVyLFxuICAgIEFqZlJlcG9ydFdpZGdldCxcbiAgICBBamZUYWJsZVdpZGdldENvbXBvbmVudCxcbiAgICBBamZUZXh0V2lkZ2V0Q29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbQWpmUmVwb3J0UmVuZGVyZXIsIEFqZlJlcG9ydFdpZGdldF0sXG59KVxuZXhwb3J0IGNsYXNzIEFqZlJlcG9ydHNNb2R1bGUge31cbiJdfQ==