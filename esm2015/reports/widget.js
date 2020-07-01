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
import { AjfReportWidget as CoreComponent, AjfWidgetType } from '@ajf/core/reports';
import { ChangeDetectionStrategy, Component, ComponentFactoryResolver, Renderer2, ViewEncapsulation } from '@angular/core';
import { AjfChartWidgetComponent } from './chart-widget';
import { AjfColumnWidgetComponent } from './column-widget';
import { AjfFormulaWidgetComponent } from './formula-widget';
import { AjfImageContainerWidgetComponent } from './image-container-widget';
import { AjfImageWidgetComponent } from './image-widget';
import { AjfLayoutWidgetComponent } from './layout-widget';
import { AjfMapWidgetComponent } from './map-widget';
import { AjfPageBreakWidgetComponent } from './page-break-widget';
import { AjfTableWidgetComponent } from './table-widget';
import { AjfTextWidgetComponent } from './text-widget';
export class AjfReportWidget extends CoreComponent {
    constructor(cfr, renderer) {
        super(cfr, renderer);
        this.widgetsMap = {
            [AjfWidgetType.Layout]: { component: AjfLayoutWidgetComponent },
            [AjfWidgetType.PageBreak]: { component: AjfPageBreakWidgetComponent },
            [AjfWidgetType.Image]: { component: AjfImageWidgetComponent },
            [AjfWidgetType.Text]: { component: AjfTextWidgetComponent },
            [AjfWidgetType.Chart]: { component: AjfChartWidgetComponent },
            [AjfWidgetType.Table]: { component: AjfTableWidgetComponent },
            [AjfWidgetType.DynamicTable]: { component: AjfTableWidgetComponent },
            [AjfWidgetType.Map]: { component: AjfMapWidgetComponent },
            [AjfWidgetType.Column]: { component: AjfColumnWidgetComponent },
            [AjfWidgetType.Formula]: { component: AjfFormulaWidgetComponent },
            [AjfWidgetType.ImageContainer]: { component: AjfImageContainerWidgetComponent },
        };
    }
}
AjfReportWidget.decorators = [
    { type: Component, args: [{
                selector: 'ajf-widget',
                template: "<ng-template ajf-widget-host></ng-template>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["ajf-widget{display:flex;flex:1 1 auto;box-sizing:border-box}ajf-widget>ng-component{flex:1 1 auto;display:flex;align-items:center;box-sizing:border-box;background-color:transparent}\n"]
            },] }
];
AjfReportWidget.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: Renderer2 }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2lvbmljL3JlcG9ydHMvd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRztBQUVILE9BQU8sRUFBQyxlQUFlLElBQUksYUFBYSxFQUFFLGFBQWEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2xGLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULHdCQUF3QixFQUN4QixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQzNELE9BQU8sRUFBQyxnQ0FBZ0MsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQzFFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNuRCxPQUFPLEVBQUMsMkJBQTJCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFTckQsTUFBTSxPQUFPLGVBQWdCLFNBQVEsYUFBYTtJQUNoRCxZQUFZLEdBQTZCLEVBQUUsUUFBbUI7UUFDNUQsS0FBSyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUd2QixlQUFVLEdBQUc7WUFDWCxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFDLFNBQVMsRUFBRSx3QkFBd0IsRUFBQztZQUM3RCxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFDLFNBQVMsRUFBRSwyQkFBMkIsRUFBQztZQUNuRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFDLFNBQVMsRUFBRSx1QkFBdUIsRUFBQztZQUMzRCxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLFNBQVMsRUFBRSxzQkFBc0IsRUFBQztZQUN6RCxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFDLFNBQVMsRUFBRSx1QkFBdUIsRUFBQztZQUMzRCxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFDLFNBQVMsRUFBRSx1QkFBdUIsRUFBQztZQUMzRCxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFDLFNBQVMsRUFBRSx1QkFBdUIsRUFBQztZQUNsRSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFDLFNBQVMsRUFBRSxxQkFBcUIsRUFBQztZQUN2RCxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFDLFNBQVMsRUFBRSx3QkFBd0IsRUFBQztZQUM3RCxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFDLFNBQVMsRUFBRSx5QkFBeUIsRUFBQztZQUMvRCxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFDLFNBQVMsRUFBRSxnQ0FBZ0MsRUFBQztTQUM5RSxDQUFDO0lBZEYsQ0FBQzs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0Qix5REFBMEI7Z0JBRTFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7OztZQXRCQyx3QkFBd0I7WUFDeEIsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoQykgR251Y29vcCBzb2MuIGNvb3AuXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhc1xuICogcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsXG4gKiBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVyb1xuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpLlxuICogSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLy5cbiAqXG4gKi9cblxuaW1wb3J0IHtBamZSZXBvcnRXaWRnZXQgYXMgQ29yZUNvbXBvbmVudCwgQWpmV2lkZ2V0VHlwZX0gZnJvbSAnQGFqZi9jb3JlL3JlcG9ydHMnO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBSZW5kZXJlcjIsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0FqZkNoYXJ0V2lkZ2V0Q29tcG9uZW50fSBmcm9tICcuL2NoYXJ0LXdpZGdldCc7XG5pbXBvcnQge0FqZkNvbHVtbldpZGdldENvbXBvbmVudH0gZnJvbSAnLi9jb2x1bW4td2lkZ2V0JztcbmltcG9ydCB7QWpmRm9ybXVsYVdpZGdldENvbXBvbmVudH0gZnJvbSAnLi9mb3JtdWxhLXdpZGdldCc7XG5pbXBvcnQge0FqZkltYWdlQ29udGFpbmVyV2lkZ2V0Q29tcG9uZW50fSBmcm9tICcuL2ltYWdlLWNvbnRhaW5lci13aWRnZXQnO1xuaW1wb3J0IHtBamZJbWFnZVdpZGdldENvbXBvbmVudH0gZnJvbSAnLi9pbWFnZS13aWRnZXQnO1xuaW1wb3J0IHtBamZMYXlvdXRXaWRnZXRDb21wb25lbnR9IGZyb20gJy4vbGF5b3V0LXdpZGdldCc7XG5pbXBvcnQge0FqZk1hcFdpZGdldENvbXBvbmVudH0gZnJvbSAnLi9tYXAtd2lkZ2V0JztcbmltcG9ydCB7QWpmUGFnZUJyZWFrV2lkZ2V0Q29tcG9uZW50fSBmcm9tICcuL3BhZ2UtYnJlYWstd2lkZ2V0JztcbmltcG9ydCB7QWpmVGFibGVXaWRnZXRDb21wb25lbnR9IGZyb20gJy4vdGFibGUtd2lkZ2V0JztcbmltcG9ydCB7QWpmVGV4dFdpZGdldENvbXBvbmVudH0gZnJvbSAnLi90ZXh0LXdpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FqZi13aWRnZXQnLFxuICB0ZW1wbGF0ZVVybDogJ3dpZGdldC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3dpZGdldC5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEFqZlJlcG9ydFdpZGdldCBleHRlbmRzIENvcmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihjZnI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHN1cGVyKGNmciwgcmVuZGVyZXIpO1xuICB9XG5cbiAgd2lkZ2V0c01hcCA9IHtcbiAgICBbQWpmV2lkZ2V0VHlwZS5MYXlvdXRdOiB7Y29tcG9uZW50OiBBamZMYXlvdXRXaWRnZXRDb21wb25lbnR9LFxuICAgIFtBamZXaWRnZXRUeXBlLlBhZ2VCcmVha106IHtjb21wb25lbnQ6IEFqZlBhZ2VCcmVha1dpZGdldENvbXBvbmVudH0sXG4gICAgW0FqZldpZGdldFR5cGUuSW1hZ2VdOiB7Y29tcG9uZW50OiBBamZJbWFnZVdpZGdldENvbXBvbmVudH0sXG4gICAgW0FqZldpZGdldFR5cGUuVGV4dF06IHtjb21wb25lbnQ6IEFqZlRleHRXaWRnZXRDb21wb25lbnR9LFxuICAgIFtBamZXaWRnZXRUeXBlLkNoYXJ0XToge2NvbXBvbmVudDogQWpmQ2hhcnRXaWRnZXRDb21wb25lbnR9LFxuICAgIFtBamZXaWRnZXRUeXBlLlRhYmxlXToge2NvbXBvbmVudDogQWpmVGFibGVXaWRnZXRDb21wb25lbnR9LFxuICAgIFtBamZXaWRnZXRUeXBlLkR5bmFtaWNUYWJsZV06IHtjb21wb25lbnQ6IEFqZlRhYmxlV2lkZ2V0Q29tcG9uZW50fSxcbiAgICBbQWpmV2lkZ2V0VHlwZS5NYXBdOiB7Y29tcG9uZW50OiBBamZNYXBXaWRnZXRDb21wb25lbnR9LFxuICAgIFtBamZXaWRnZXRUeXBlLkNvbHVtbl06IHtjb21wb25lbnQ6IEFqZkNvbHVtbldpZGdldENvbXBvbmVudH0sXG4gICAgW0FqZldpZGdldFR5cGUuRm9ybXVsYV06IHtjb21wb25lbnQ6IEFqZkZvcm11bGFXaWRnZXRDb21wb25lbnR9LFxuICAgIFtBamZXaWRnZXRUeXBlLkltYWdlQ29udGFpbmVyXToge2NvbXBvbmVudDogQWpmSW1hZ2VDb250YWluZXJXaWRnZXRDb21wb25lbnR9LFxuICB9O1xufVxuIl19