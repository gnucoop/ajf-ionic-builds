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
AjfReportsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfReportsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AjfReportsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfReportsModule, declarations: [AjfChartWidgetComponent,
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
AjfReportsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfReportsModule, imports: [[
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
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfReportsModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0cy1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9pb25pYy9yZXBvcnRzL3NyYy9yZXBvcnRzLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFFSCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFDLGdCQUFnQixJQUFJLFVBQVUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2pFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXZDLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQzNELE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzVELE9BQU8sRUFBQyxnQ0FBZ0MsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQzFFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNuRCxPQUFPLEVBQUMsMkJBQTJCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDM0MsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsY0FBYyxFQUNkLHdCQUF3QixFQUN4Qix3QkFBd0IsRUFDeEIsK0JBQStCLEVBQy9CLGVBQWUsR0FDaEIsTUFBTSxVQUFVLENBQUM7O0FBb0NsQixNQUFNLE9BQU8sZ0JBQWdCOzs2R0FBaEIsZ0JBQWdCOzhHQUFoQixnQkFBZ0IsaUJBbkJ6Qix1QkFBdUI7UUFDdkIsd0JBQXdCO1FBQ3hCLGNBQWM7UUFDZCx3QkFBd0I7UUFDeEIseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUN6QixnQ0FBZ0M7UUFDaEMsdUJBQXVCO1FBQ3ZCLHdCQUF3QjtRQUN4QixxQkFBcUI7UUFDckIsMkJBQTJCO1FBQzNCLCtCQUErQjtRQUMvQixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLHVCQUF1QjtRQUN2QixzQkFBc0IsYUE1QnRCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixVQUFVLGFBb0JGLGlCQUFpQixFQUFFLGVBQWU7OEdBRWpDLGdCQUFnQixZQWpDbEI7WUFDUCxjQUFjO1lBQ2QsZUFBZTtZQUNmLGdCQUFnQjtZQUNoQixjQUFjO1lBQ2QsWUFBWTtZQUNaLGtCQUFrQjtZQUNsQixjQUFjO1lBQ2QsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixZQUFZO1lBQ1osVUFBVTtTQUNYOzJGQXFCVSxnQkFBZ0I7a0JBbEM1QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxjQUFjO3dCQUNkLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQixjQUFjO3dCQUNkLFlBQVk7d0JBQ1osa0JBQWtCO3dCQUNsQixjQUFjO3dCQUNkLGFBQWE7d0JBQ2Isa0JBQWtCO3dCQUNsQixZQUFZO3dCQUNaLFVBQVU7cUJBQ1g7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLHVCQUF1Qjt3QkFDdkIsd0JBQXdCO3dCQUN4QixjQUFjO3dCQUNkLHdCQUF3Qjt3QkFDeEIseUJBQXlCO3dCQUN6Qix5QkFBeUI7d0JBQ3pCLGdDQUFnQzt3QkFDaEMsdUJBQXVCO3dCQUN2Qix3QkFBd0I7d0JBQ3hCLHFCQUFxQjt3QkFDckIsMkJBQTJCO3dCQUMzQiwrQkFBK0I7d0JBQy9CLGlCQUFpQjt3QkFDakIsZUFBZTt3QkFDZix1QkFBdUI7d0JBQ3ZCLHNCQUFzQjtxQkFDdkI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsZUFBZSxDQUFDO2lCQUM5QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoQykgR251Y29vcCBzb2MuIGNvb3AuXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhc1xuICogcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsXG4gKiBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVyb1xuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpLlxuICogSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLy5cbiAqXG4gKi9cblxuaW1wb3J0IHtBamZDaGFydE1vZHVsZX0gZnJvbSAnQGFqZi9jb3JlL2NoYXJ0JztcbmltcG9ydCB7QWpmQ29tbW9uTW9kdWxlfSBmcm9tICdAYWpmL2NvcmUvY29tbW9uJztcbmltcG9ydCB7QWpmSGVhdE1hcE1vZHVsZX0gZnJvbSAnQGFqZi9jb3JlL2hlYXQtbWFwJztcbmltcG9ydCB7QWpmTWFwTW9kdWxlfSBmcm9tICdAYWpmL2NvcmUvbWFwJztcbmltcG9ydCB7QWpmUGFnZUJyZWFrTW9kdWxlfSBmcm9tICdAYWpmL2NvcmUvcGFnZS1icmVhayc7XG5pbXBvcnQge0FqZlJlcG9ydHNNb2R1bGUgYXMgQ29yZU1vZHVsZX0gZnJvbSAnQGFqZi9jb3JlL3JlcG9ydHMnO1xuaW1wb3J0IHtBamZUYWJsZU1vZHVsZX0gZnJvbSAnQGFqZi9jb3JlL3RhYmxlJztcbmltcG9ydCB7QWpmVGV4dE1vZHVsZX0gZnJvbSAnQGFqZi9jb3JlL3RleHQnO1xuaW1wb3J0IHtBamZUcmFuc2xvY29Nb2R1bGV9IGZyb20gJ0BhamYvY29yZS90cmFuc2xvY28nO1xuaW1wb3J0IHtBamZJbWFnZU1vZHVsZX0gZnJvbSAnQGFqZi9pb25pYy9pbWFnZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0FqZkNoYXJ0V2lkZ2V0Q29tcG9uZW50fSBmcm9tICcuL2NoYXJ0LXdpZGdldCc7XG5pbXBvcnQge0FqZkZvcm11bGFXaWRnZXRDb21wb25lbnR9IGZyb20gJy4vZm9ybXVsYS13aWRnZXQnO1xuaW1wb3J0IHtBamZIZWF0TWFwV2lkZ2V0Q29tcG9uZW50fSBmcm9tICcuL2hlYXQtbWFwLXdpZGdldCc7XG5pbXBvcnQge0FqZkltYWdlQ29udGFpbmVyV2lkZ2V0Q29tcG9uZW50fSBmcm9tICcuL2ltYWdlLWNvbnRhaW5lci13aWRnZXQnO1xuaW1wb3J0IHtBamZJbWFnZVdpZGdldENvbXBvbmVudH0gZnJvbSAnLi9pbWFnZS13aWRnZXQnO1xuaW1wb3J0IHtBamZNYXBXaWRnZXRDb21wb25lbnR9IGZyb20gJy4vbWFwLXdpZGdldCc7XG5pbXBvcnQge0FqZlBhZ2VCcmVha1dpZGdldENvbXBvbmVudH0gZnJvbSAnLi9wYWdlLWJyZWFrLXdpZGdldCc7XG5pbXBvcnQge0FqZlJlcG9ydFJlbmRlcmVyfSBmcm9tICcuL3JlcG9ydCc7XG5pbXBvcnQge0FqZlRhYmxlV2lkZ2V0Q29tcG9uZW50fSBmcm9tICcuL3RhYmxlLXdpZGdldCc7XG5pbXBvcnQge0FqZlRleHRXaWRnZXRDb21wb25lbnR9IGZyb20gJy4vdGV4dC13aWRnZXQnO1xuaW1wb3J0IHtcbiAgQWpmQ29sdW1uV2lkZ2V0Q29tcG9uZW50LFxuICBBamZEaWFsb2dNb2RhbCxcbiAgQWpmRGlhbG9nV2lkZ2V0Q29tcG9uZW50LFxuICBBamZMYXlvdXRXaWRnZXRDb21wb25lbnQsXG4gIEFqZlBhZ2luYXRlZExpc3RXaWRnZXRDb21wb25lbnQsXG4gIEFqZlJlcG9ydFdpZGdldCxcbn0gZnJvbSAnLi93aWRnZXQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQWpmQ2hhcnRNb2R1bGUsXG4gICAgQWpmQ29tbW9uTW9kdWxlLFxuICAgIEFqZkhlYXRNYXBNb2R1bGUsXG4gICAgQWpmSW1hZ2VNb2R1bGUsXG4gICAgQWpmTWFwTW9kdWxlLFxuICAgIEFqZlBhZ2VCcmVha01vZHVsZSxcbiAgICBBamZUYWJsZU1vZHVsZSxcbiAgICBBamZUZXh0TW9kdWxlLFxuICAgIEFqZlRyYW5zbG9jb01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ29yZU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQWpmQ2hhcnRXaWRnZXRDb21wb25lbnQsXG4gICAgQWpmQ29sdW1uV2lkZ2V0Q29tcG9uZW50LFxuICAgIEFqZkRpYWxvZ01vZGFsLFxuICAgIEFqZkRpYWxvZ1dpZGdldENvbXBvbmVudCxcbiAgICBBamZGb3JtdWxhV2lkZ2V0Q29tcG9uZW50LFxuICAgIEFqZkhlYXRNYXBXaWRnZXRDb21wb25lbnQsXG4gICAgQWpmSW1hZ2VDb250YWluZXJXaWRnZXRDb21wb25lbnQsXG4gICAgQWpmSW1hZ2VXaWRnZXRDb21wb25lbnQsXG4gICAgQWpmTGF5b3V0V2lkZ2V0Q29tcG9uZW50LFxuICAgIEFqZk1hcFdpZGdldENvbXBvbmVudCxcbiAgICBBamZQYWdlQnJlYWtXaWRnZXRDb21wb25lbnQsXG4gICAgQWpmUGFnaW5hdGVkTGlzdFdpZGdldENvbXBvbmVudCxcbiAgICBBamZSZXBvcnRSZW5kZXJlcixcbiAgICBBamZSZXBvcnRXaWRnZXQsXG4gICAgQWpmVGFibGVXaWRnZXRDb21wb25lbnQsXG4gICAgQWpmVGV4dFdpZGdldENvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW0FqZlJlcG9ydFJlbmRlcmVyLCBBamZSZXBvcnRXaWRnZXRdLFxufSlcbmV4cG9ydCBjbGFzcyBBamZSZXBvcnRzTW9kdWxlIHt9XG4iXX0=