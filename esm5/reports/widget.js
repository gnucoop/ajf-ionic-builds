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
import { __extends } from "tslib";
import { AjfReportWidget as CoreComponent, AjfWidgetType } from '@ajf/core/reports';
import { ChangeDetectionStrategy, ComponentFactoryResolver, Component, Renderer2, ViewEncapsulation } from '@angular/core';
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
var AjfReportWidget = /** @class */ (function (_super) {
    __extends(AjfReportWidget, _super);
    function AjfReportWidget(cfr, renderer) {
        var _a;
        var _this = _super.call(this, cfr, renderer) || this;
        _this.widgetsMap = (_a = {},
            _a[AjfWidgetType.Layout] = { component: AjfLayoutWidgetComponent },
            _a[AjfWidgetType.PageBreak] = { component: AjfPageBreakWidgetComponent },
            _a[AjfWidgetType.Image] = { component: AjfImageWidgetComponent },
            _a[AjfWidgetType.Text] = { component: AjfTextWidgetComponent },
            _a[AjfWidgetType.Chart] = { component: AjfChartWidgetComponent },
            _a[AjfWidgetType.Table] = { component: AjfTableWidgetComponent },
            _a[AjfWidgetType.Map] = { component: AjfMapWidgetComponent },
            _a[AjfWidgetType.Column] = { component: AjfColumnWidgetComponent },
            _a[AjfWidgetType.Formula] = { component: AjfFormulaWidgetComponent },
            _a[AjfWidgetType.ImageContainer] = { component: AjfImageContainerWidgetComponent },
            _a);
        return _this;
    }
    AjfReportWidget.decorators = [
        { type: Component, args: [{
                    selector: 'ajf-widget',
                    template: "<ng-template ajf-widget-host></ng-template>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["ajf-widget{display:flex;flex:1 1 auto;box-sizing:border-box}ajf-widget>ng-component{flex:1 1 auto;display:flex;align-items:center;box-sizing:border-box;background-color:transparent}\n"]
                }] }
    ];
    /** @nocollapse */
    AjfReportWidget.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: Renderer2 }
    ]; };
    return AjfReportWidget;
}(CoreComponent));
export { AjfReportWidget };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2lvbmljL3JlcG9ydHMvd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRzs7QUFFSCxPQUFPLEVBQUMsZUFBZSxJQUFJLGFBQWEsRUFBRSxhQUFhLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRixPQUFPLEVBQ0wsdUJBQXVCLEVBQUUsd0JBQXdCLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFDdkUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGdDQUFnQyxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDMUUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ25ELE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVyRDtJQU9xQyxtQ0FBYTtJQUNoRCx5QkFBWSxHQUE2QixFQUFFLFFBQW1COztRQUE5RCxZQUNFLGtCQUFNLEdBQUcsRUFBRSxRQUFRLENBQUMsU0FDckI7UUFFRCxnQkFBVTtZQUNSLEdBQUMsYUFBYSxDQUFDLE1BQU0sSUFBRyxFQUFDLFNBQVMsRUFBRSx3QkFBd0IsRUFBQztZQUM3RCxHQUFDLGFBQWEsQ0FBQyxTQUFTLElBQUcsRUFBQyxTQUFTLEVBQUUsMkJBQTJCLEVBQUM7WUFDbkUsR0FBQyxhQUFhLENBQUMsS0FBSyxJQUFHLEVBQUMsU0FBUyxFQUFFLHVCQUF1QixFQUFDO1lBQzNELEdBQUMsYUFBYSxDQUFDLElBQUksSUFBRyxFQUFDLFNBQVMsRUFBRSxzQkFBc0IsRUFBQztZQUN6RCxHQUFDLGFBQWEsQ0FBQyxLQUFLLElBQUcsRUFBQyxTQUFTLEVBQUUsdUJBQXVCLEVBQUM7WUFDM0QsR0FBQyxhQUFhLENBQUMsS0FBSyxJQUFHLEVBQUMsU0FBUyxFQUFFLHVCQUF1QixFQUFDO1lBQzNELEdBQUMsYUFBYSxDQUFDLEdBQUcsSUFBRyxFQUFDLFNBQVMsRUFBRSxxQkFBcUIsRUFBQztZQUN2RCxHQUFDLGFBQWEsQ0FBQyxNQUFNLElBQUcsRUFBQyxTQUFTLEVBQUUsd0JBQXdCLEVBQUM7WUFDN0QsR0FBQyxhQUFhLENBQUMsT0FBTyxJQUFHLEVBQUMsU0FBUyxFQUFFLHlCQUF5QixFQUFDO1lBQy9ELEdBQUMsYUFBYSxDQUFDLGNBQWMsSUFBRyxFQUFDLFNBQVMsRUFBRSxnQ0FBZ0MsRUFBQztnQkFDN0U7O0lBYkYsQ0FBQzs7Z0JBVkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0Qix5REFBMEI7b0JBRTFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7O2dCQXBCMEIsd0JBQXdCO2dCQUFhLFNBQVM7O0lBc0N6RSxzQkFBQztDQUFBLEFBeEJELENBT3FDLGFBQWEsR0FpQmpEO1NBakJZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKEMpIEdudWNvb3Agc29jLiBjb29wLlxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpLlxuICpcbiAqIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLFxuICogb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm9cbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8uXG4gKlxuICovXG5cbmltcG9ydCB7QWpmUmVwb3J0V2lkZ2V0IGFzIENvcmVDb21wb25lbnQsIEFqZldpZGdldFR5cGV9IGZyb20gJ0BhamYvY29yZS9yZXBvcnRzJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudCwgUmVuZGVyZXIyLFxuICBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7QWpmQ2hhcnRXaWRnZXRDb21wb25lbnR9IGZyb20gJy4vY2hhcnQtd2lkZ2V0JztcbmltcG9ydCB7QWpmQ29sdW1uV2lkZ2V0Q29tcG9uZW50fSBmcm9tICcuL2NvbHVtbi13aWRnZXQnO1xuaW1wb3J0IHtBamZGb3JtdWxhV2lkZ2V0Q29tcG9uZW50fSBmcm9tICcuL2Zvcm11bGEtd2lkZ2V0JztcbmltcG9ydCB7QWpmSW1hZ2VDb250YWluZXJXaWRnZXRDb21wb25lbnR9IGZyb20gJy4vaW1hZ2UtY29udGFpbmVyLXdpZGdldCc7XG5pbXBvcnQge0FqZkltYWdlV2lkZ2V0Q29tcG9uZW50fSBmcm9tICcuL2ltYWdlLXdpZGdldCc7XG5pbXBvcnQge0FqZkxheW91dFdpZGdldENvbXBvbmVudH0gZnJvbSAnLi9sYXlvdXQtd2lkZ2V0JztcbmltcG9ydCB7QWpmTWFwV2lkZ2V0Q29tcG9uZW50fSBmcm9tICcuL21hcC13aWRnZXQnO1xuaW1wb3J0IHtBamZQYWdlQnJlYWtXaWRnZXRDb21wb25lbnR9IGZyb20gJy4vcGFnZS1icmVhay13aWRnZXQnO1xuaW1wb3J0IHtBamZUYWJsZVdpZGdldENvbXBvbmVudH0gZnJvbSAnLi90YWJsZS13aWRnZXQnO1xuaW1wb3J0IHtBamZUZXh0V2lkZ2V0Q29tcG9uZW50fSBmcm9tICcuL3RleHQtd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWpmLXdpZGdldCcsXG4gIHRlbXBsYXRlVXJsOiAnd2lkZ2V0Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnd2lkZ2V0LmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQWpmUmVwb3J0V2lkZ2V0IGV4dGVuZHMgQ29yZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGNmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgc3VwZXIoY2ZyLCByZW5kZXJlcik7XG4gIH1cblxuICB3aWRnZXRzTWFwID0ge1xuICAgIFtBamZXaWRnZXRUeXBlLkxheW91dF06IHtjb21wb25lbnQ6IEFqZkxheW91dFdpZGdldENvbXBvbmVudH0sXG4gICAgW0FqZldpZGdldFR5cGUuUGFnZUJyZWFrXToge2NvbXBvbmVudDogQWpmUGFnZUJyZWFrV2lkZ2V0Q29tcG9uZW50fSxcbiAgICBbQWpmV2lkZ2V0VHlwZS5JbWFnZV06IHtjb21wb25lbnQ6IEFqZkltYWdlV2lkZ2V0Q29tcG9uZW50fSxcbiAgICBbQWpmV2lkZ2V0VHlwZS5UZXh0XToge2NvbXBvbmVudDogQWpmVGV4dFdpZGdldENvbXBvbmVudH0sXG4gICAgW0FqZldpZGdldFR5cGUuQ2hhcnRdOiB7Y29tcG9uZW50OiBBamZDaGFydFdpZGdldENvbXBvbmVudH0sXG4gICAgW0FqZldpZGdldFR5cGUuVGFibGVdOiB7Y29tcG9uZW50OiBBamZUYWJsZVdpZGdldENvbXBvbmVudH0sXG4gICAgW0FqZldpZGdldFR5cGUuTWFwXToge2NvbXBvbmVudDogQWpmTWFwV2lkZ2V0Q29tcG9uZW50fSxcbiAgICBbQWpmV2lkZ2V0VHlwZS5Db2x1bW5dOiB7Y29tcG9uZW50OiBBamZDb2x1bW5XaWRnZXRDb21wb25lbnR9LFxuICAgIFtBamZXaWRnZXRUeXBlLkZvcm11bGFdOiB7Y29tcG9uZW50OiBBamZGb3JtdWxhV2lkZ2V0Q29tcG9uZW50fSxcbiAgICBbQWpmV2lkZ2V0VHlwZS5JbWFnZUNvbnRhaW5lcl06IHtjb21wb25lbnQ6IEFqZkltYWdlQ29udGFpbmVyV2lkZ2V0Q29tcG9uZW50fSxcbiAgfTtcbn1cbiJdfQ==