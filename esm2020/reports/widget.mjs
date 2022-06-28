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
import { AjfBaseWidgetComponent, AjfReportWidget as CoreComponent, AjfWidgetService as CoreService, AjfWidgetType as wt, } from '@ajf/core/reports';
import { ChangeDetectionStrategy, Component, Injectable, Input, ViewEncapsulation, } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AjfChartWidgetComponent } from './chart-widget';
import { AjfFormulaWidgetComponent } from './formula-widget';
import { AjfHeatMapWidgetComponent } from './heat-map-widget';
import { AjfImageContainerWidgetComponent } from './image-container-widget';
import { AjfImageWidgetComponent } from './image-widget';
import { AjfMapWidgetComponent } from './map-widget';
import { AjfPageBreakWidgetComponent } from './page-break-widget';
import { AjfTableWidgetComponent } from './table-widget';
import { AjfTextWidgetComponent } from './text-widget';
import * as i0 from "@angular/core";
import * as i1 from "@ajf/core/reports";
import * as i2 from "@angular/common";
import * as i3 from "@ionic/angular";
const defaultWidgetsFactory = () => {
    const defaultWidgets = {};
    defaultWidgets[wt.Layout] = { component: AjfLayoutWidgetComponent };
    defaultWidgets[wt.PageBreak] = { component: AjfPageBreakWidgetComponent };
    defaultWidgets[wt.Image] = { component: AjfImageWidgetComponent };
    defaultWidgets[wt.Text] = { component: AjfTextWidgetComponent };
    defaultWidgets[wt.Chart] = { component: AjfChartWidgetComponent };
    defaultWidgets[wt.Table] = { component: AjfTableWidgetComponent };
    defaultWidgets[wt.DynamicTable] = { component: AjfTableWidgetComponent };
    defaultWidgets[wt.Map] = { component: AjfMapWidgetComponent };
    defaultWidgets[wt.Column] = { component: AjfColumnWidgetComponent };
    defaultWidgets[wt.Formula] = { component: AjfFormulaWidgetComponent };
    defaultWidgets[wt.ImageContainer] = { component: AjfImageContainerWidgetComponent };
    defaultWidgets[wt.PaginatedList] = { component: AjfPaginatedListWidgetComponent };
    defaultWidgets[wt.Dialog] = { component: AjfDialogWidgetComponent };
    defaultWidgets[wt.HeatMap] = { component: AjfHeatMapWidgetComponent };
    return defaultWidgets;
};
export class AjfWidgetService extends CoreService {
    constructor() {
        super(defaultWidgetsFactory());
    }
}
AjfWidgetService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfWidgetService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
AjfWidgetService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfWidgetService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfWidgetService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return []; } });
export class AjfReportWidget extends CoreComponent {
    constructor(renderer, widgetService) {
        super(renderer);
        this.widgetsMap = widgetService.componentsMap;
    }
}
AjfReportWidget.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfReportWidget, deps: [{ token: i0.Renderer2 }, { token: AjfWidgetService }], target: i0.ɵɵFactoryTarget.Component });
AjfReportWidget.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.5", type: AjfReportWidget, selector: "ajf-widget", usesInheritance: true, ngImport: i0, template: "<ng-template ajf-widget-host></ng-template>\n", styles: ["ajf-widget{display:flex;flex:1 1 auto;box-sizing:border-box}ajf-widget>ng-component{flex:1 1 auto;display:flex;align-items:center;box-sizing:border-box;background-color:transparent}\n"], directives: [{ type: i1.AjfWidgetHost, selector: "[ajf-widget-host]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfReportWidget, decorators: [{
            type: Component,
            args: [{ selector: 'ajf-widget', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-template ajf-widget-host></ng-template>\n", styles: ["ajf-widget{display:flex;flex:1 1 auto;box-sizing:border-box}ajf-widget>ng-component{flex:1 1 auto;display:flex;align-items:center;box-sizing:border-box;background-color:transparent}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: AjfWidgetService }]; } });
export class AjfColumnWidgetComponent extends AjfBaseWidgetComponent {
    constructor(cdr, el) {
        super(cdr, el);
    }
}
AjfColumnWidgetComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfColumnWidgetComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
AjfColumnWidgetComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.5", type: AjfColumnWidgetComponent, selector: "ng-component", usesInheritance: true, ngImport: i0, template: "<div *ngIf=\"instance\" class=\"ajf-column-container\">\n  <ng-container *ngFor=\"let w of instance.content\">\n    <ajf-widget [instance]=\"w\">\n    </ajf-widget>\n  </ng-container>\n</div>\n", styles: [".ajf-column-container{flex:1 1 auto}\n"], components: [{ type: AjfReportWidget, selector: "ajf-widget" }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfColumnWidgetComponent, decorators: [{
            type: Component,
            args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div *ngIf=\"instance\" class=\"ajf-column-container\">\n  <ng-container *ngFor=\"let w of instance.content\">\n    <ajf-widget [instance]=\"w\">\n    </ajf-widget>\n  </ng-container>\n</div>\n", styles: [".ajf-column-container{flex:1 1 auto}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; } });
export class AjfLayoutWidgetComponent extends AjfBaseWidgetComponent {
    constructor(cdr, el) {
        super(cdr, el);
        this._allcolumnsRendered$ = new BehaviorSubject(false);
        this.allcolumnsRendered$ = this
            ._allcolumnsRendered$;
    }
    ngAfterContentChecked() {
        this._allcolumnsRendered$.next(true);
    }
}
AjfLayoutWidgetComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfLayoutWidgetComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
AjfLayoutWidgetComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.5", type: AjfLayoutWidgetComponent, selector: "ng-component", usesInheritance: true, ngImport: i0, template: "<div *ngIf=\"instance\" class=\"ajf-columns\">\n    <div *ngFor=\"let column of instance.widget.columns; let idx = index\"\n        [ngStyle]=\"{'flex-grow': column > -1 ? 1 : null, 'flex-basis' : column > -1 ? (column * 100) + '%' : null}\"\n        class=\"ajf-column\">\n        <ng-container *ngIf=\"allcolumnsRendered$|async\">\n            <ajf-widget *ngIf=\"(instance|ajfGetColumnContent:idx) as cc\" [instance]=\"cc!\">\n            </ajf-widget>\n        </ng-container>\n    </div>\n</div>\n", styles: [".ajf-columns{flex:1 1 auto;display:flex;align-items:inherit;box-sizing:border-box}.ajf-columns>.ajf-column{box-sizing:border-box;display:flex;align-items:inherit;flex-shrink:1}\n"], components: [{ type: AjfReportWidget, selector: "ajf-widget" }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], pipes: { "async": i2.AsyncPipe, "ajfGetColumnContent": i1.AjfGetColumnContentPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfLayoutWidgetComponent, decorators: [{
            type: Component,
            args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div *ngIf=\"instance\" class=\"ajf-columns\">\n    <div *ngFor=\"let column of instance.widget.columns; let idx = index\"\n        [ngStyle]=\"{'flex-grow': column > -1 ? 1 : null, 'flex-basis' : column > -1 ? (column * 100) + '%' : null}\"\n        class=\"ajf-column\">\n        <ng-container *ngIf=\"allcolumnsRendered$|async\">\n            <ajf-widget *ngIf=\"(instance|ajfGetColumnContent:idx) as cc\" [instance]=\"cc!\">\n            </ajf-widget>\n        </ng-container>\n    </div>\n</div>\n", styles: [".ajf-columns{flex:1 1 auto;display:flex;align-items:inherit;box-sizing:border-box}.ajf-columns>.ajf-column{box-sizing:border-box;display:flex;align-items:inherit;flex-shrink:1}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; } });
export class AjfDialogWidgetComponent extends AjfBaseWidgetComponent {
    constructor(cdr, el, _modalCtrl) {
        super(cdr, el);
        this._modalCtrl = _modalCtrl;
    }
    ngOnDestroy() {
        if (this._modal) {
            this._modal.dismiss();
        }
    }
    openDialog() {
        if (this.instance == null || this.instance.content.length === 0) {
            return;
        }
        this._modalCtrl
            .create({
            component: AjfDialogModal,
            componentProps: {
                content: this.instance.content,
            },
        })
            .then(modal => {
            this._modal = modal;
            modal.present();
        });
    }
}
AjfDialogWidgetComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfDialogWidgetComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i3.ModalController }], target: i0.ɵɵFactoryTarget.Component });
AjfDialogWidgetComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.5", type: AjfDialogWidgetComponent, selector: "ng-component", usesInheritance: true, ngImport: i0, template: "<a *ngIf=\"instance\" class=\"ajf-dialog-toggle\" (click)=\"openDialog()\">\n  <ajf-widget [instance]=\"instance.toggle\"></ajf-widget>\n</a>\n", styles: [".ajf-dialog-toggle{display:block;cursor:pointer}\n"], components: [{ type: AjfReportWidget, selector: "ajf-widget" }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfDialogWidgetComponent, decorators: [{
            type: Component,
            args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<a *ngIf=\"instance\" class=\"ajf-dialog-toggle\" (click)=\"openDialog()\">\n  <ajf-widget [instance]=\"instance.toggle\"></ajf-widget>\n</a>\n", styles: [".ajf-dialog-toggle{display:block;cursor:pointer}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i3.ModalController }]; } });
export class AjfDialogModal {
    constructor() {
        this.content = [];
    }
}
AjfDialogModal.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfDialogModal, deps: [], target: i0.ɵɵFactoryTarget.Component });
AjfDialogModal.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.5", type: AjfDialogModal, selector: "ng-component", inputs: { content: "content" }, ngImport: i0, template: "<ajf-widget *ngFor=\"let instance of content\" [instance]=\"instance\"></ajf-widget>\n", styles: [""], components: [{ type: AjfReportWidget, selector: "ajf-widget" }], directives: [{ type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfDialogModal, decorators: [{
            type: Component,
            args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ajf-widget *ngFor=\"let instance of content\" [instance]=\"instance\"></ajf-widget>\n", styles: [""] }]
        }], propDecorators: { content: [{
                type: Input
            }] } });
export class AjfPaginatedListWidgetComponent extends AjfBaseWidgetComponent {
    constructor(cdr, el) {
        super(cdr, el);
        this._currentPage = 0;
        this._pages = 0;
        this._currentContent = [];
        this._canGoForward = false;
        this._canGoBackward = false;
    }
    get currentPage() {
        return this._currentPage;
    }
    get pages() {
        return this._pages;
    }
    get currentContent() {
        return this._currentContent;
    }
    get canGoForward() {
        return this._canGoForward;
    }
    get canGoBackward() {
        return this._canGoBackward;
    }
    ngOnChanges(changes) {
        if (changes['instance']) {
            this._updateCurrentContent();
        }
    }
    ngOnInit() {
        this._updateCurrentContent();
    }
    goToPage(direction) {
        const diff = direction === 'next' ? 1 : -1;
        const newPage = this._currentPage + diff;
        if (newPage <= 0 || newPage > this._pages) {
            return;
        }
        this._currentPage = newPage;
        this._canGoForward = newPage < this._pages;
        this._canGoBackward = newPage > 1;
        this._fillCurrentContent();
    }
    _updateCurrentContent() {
        this._canGoBackward = false;
        if (this.instance == null || this.instance.content.length === 0) {
            this._currentPage = 0;
            this._pages = 0;
        }
        else {
            this._currentPage = 1;
            const { content } = this.instance;
            const { pageSize } = this.instance.widget;
            this._pages = Math.ceil(content.length / pageSize);
            this._canGoForward = this._pages > 1;
        }
        this._fillCurrentContent();
    }
    _fillCurrentContent() {
        if (this.instance == null || this.instance.content.length === 0) {
            this._currentContent = [];
            return;
        }
        const { content } = this.instance;
        const { pageSize } = this.instance.widget;
        const start = (this._currentPage - 1) * pageSize;
        this._currentContent = content.slice(start, start + pageSize);
        this._cdr.markForCheck();
    }
}
AjfPaginatedListWidgetComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfPaginatedListWidgetComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
AjfPaginatedListWidgetComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.5", type: AjfPaginatedListWidgetComponent, selector: "ng-component", usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div class=\"ajf-paginated-list\" *ngIf=\"instance && pages > 0\">\n  <div class=\"ajf-paginated-list-title-container\">\n    <div class=\"ajf-paginated-list-title\">{{ instance.widget.title }}</div>\n    <div class=\"ajf-spacer\"></div>\n    <div class=\"ajf-paginated-list-paginator\">\n      <a (click)=\"goToPage('previous')\" class=\"ajf-paginated-list-btn ajf-paginated-list-back-btn\"\n          [class.ajf-paginated-list-btn-disabled]=\"canGoBackward === false\"></a>\n      <div class=\"ajf-paginated-list-paginator-page\">{{ currentPage }}</div>\n      <div class=\"ajf-paginated-list-paginator-separator\"></div>\n      <div class=\"ajf-paginated-list-paginator-pages\">{{ pages }}</div>\n      <a (click)=\"goToPage('next')\" class=\"ajf-paginated-list-btn ajf-paginated-list-forward-btn\"\n        [class.ajf-paginated-list-btn-disabled]=\"canGoForward === false\"></a>\n    </div>\n  </div>\n  <div class=\"ajf-paginated-list-item\" *ngFor=\"let item of currentContent\">\n    <ajf-widget [instance]=\"item\"></ajf-widget>\n  </div>\n</div>\n", styles: [".ajf-paginated-list-title-container{display:flex;align-items:center}.ajf-spacer{flex:1 0 auto}.ajf-paginated-list-btn{cursor:pointer;display:block;width:32px;height:32px;position:relative}.ajf-paginated-list-btn:after{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.ajf-paginated-list-paginator-separator{width:16px;height:32px;position:relative}.ajf-paginated-list-paginator-separator:after{width:100%;height:100%;display:flex;justify-content:center;align-items:center;content:\"/\"}.ajf-paginated-list-btn-disabled{opacity:.5;cursor:default}.ajf-paginated-list-back-btn:after{content:\"<\"}.ajf-paginated-list-forward-btn:after{content:\">\"}.ajf-paginated-list-paginator{display:flex;align-items:center}.ajf-paginated-list-paginator>*{margin:0 .5em}\n"], components: [{ type: AjfReportWidget, selector: "ajf-widget" }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfPaginatedListWidgetComponent, decorators: [{
            type: Component,
            args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div class=\"ajf-paginated-list\" *ngIf=\"instance && pages > 0\">\n  <div class=\"ajf-paginated-list-title-container\">\n    <div class=\"ajf-paginated-list-title\">{{ instance.widget.title }}</div>\n    <div class=\"ajf-spacer\"></div>\n    <div class=\"ajf-paginated-list-paginator\">\n      <a (click)=\"goToPage('previous')\" class=\"ajf-paginated-list-btn ajf-paginated-list-back-btn\"\n          [class.ajf-paginated-list-btn-disabled]=\"canGoBackward === false\"></a>\n      <div class=\"ajf-paginated-list-paginator-page\">{{ currentPage }}</div>\n      <div class=\"ajf-paginated-list-paginator-separator\"></div>\n      <div class=\"ajf-paginated-list-paginator-pages\">{{ pages }}</div>\n      <a (click)=\"goToPage('next')\" class=\"ajf-paginated-list-btn ajf-paginated-list-forward-btn\"\n        [class.ajf-paginated-list-btn-disabled]=\"canGoForward === false\"></a>\n    </div>\n  </div>\n  <div class=\"ajf-paginated-list-item\" *ngFor=\"let item of currentContent\">\n    <ajf-widget [instance]=\"item\"></ajf-widget>\n  </div>\n</div>\n", styles: [".ajf-paginated-list-title-container{display:flex;align-items:center}.ajf-spacer{flex:1 0 auto}.ajf-paginated-list-btn{cursor:pointer;display:block;width:32px;height:32px;position:relative}.ajf-paginated-list-btn:after{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.ajf-paginated-list-paginator-separator{width:16px;height:32px;position:relative}.ajf-paginated-list-paginator-separator:after{width:100%;height:100%;display:flex;justify-content:center;align-items:center;content:\"/\"}.ajf-paginated-list-btn-disabled{opacity:.5;cursor:default}.ajf-paginated-list-back-btn:after{content:\"<\"}.ajf-paginated-list-forward-btn:after{content:\">\"}.ajf-paginated-list-paginator{display:flex;align-items:center}.ajf-paginated-list-paginator>*{margin:0 .5em}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvaW9uaWMvcmVwb3J0cy9zcmMvd2lkZ2V0LnRzIiwiLi4vLi4vLi4vLi4vcHJvamVjdHMvaW9uaWMvcmVwb3J0cy9zcmMvd2lkZ2V0Lmh0bWwiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9pb25pYy9yZXBvcnRzL3NyYy9jb2x1bW4td2lkZ2V0Lmh0bWwiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9pb25pYy9yZXBvcnRzL3NyYy9sYXlvdXQtd2lkZ2V0Lmh0bWwiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9pb25pYy9yZXBvcnRzL3NyYy9kaWFsb2ctd2lkZ2V0Lmh0bWwiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9pb25pYy9yZXBvcnRzL3NyYy9kaWFsb2ctbW9kYWwuaHRtbCIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL2lvbmljL3JlcG9ydHMvc3JjL3BhZ2luYXRlZC1saXN0LXdpZGdldC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRztBQUVILE9BQU8sRUFDTCxzQkFBc0IsRUFLdEIsZUFBZSxJQUFJLGFBQWEsRUFHaEMsZ0JBQWdCLElBQUksV0FBVyxFQUMvQixhQUFhLElBQUksRUFBRSxHQUNwQixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULFVBQVUsRUFDVixLQUFLLEVBTUwsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBQyxlQUFlLEVBQWEsTUFBTSxNQUFNLENBQUM7QUFFakQsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDM0QsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFD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TUFBTSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUNqRCxJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNCLENBQUM7OzRIQWhGVSwrQkFBK0I7Z0hBQS9CLCtCQUErQixnR01sTTVDLGtpQ0FrQkEsc3pCTjZFYSxlQUFlOzJGQW1HZiwrQkFBK0I7a0JBTjNDLFNBQVM7c0NBR1MsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoQykgR251Y29vcCBzb2MuIGNvb3AuXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhc1xuICogcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsXG4gKiBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVyb1xuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpLlxuICogSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLy5cbiAqXG4gKi9cblxuaW1wb3J0IHtcbiAgQWpmQmFzZVdpZGdldENvbXBvbmVudCxcbiAgQWpmQ29sdW1uV2lkZ2V0SW5zdGFuY2UsXG4gIEFqZkRpYWxvZ1dpZGdldEluc3RhbmNlLFxuICBBamZMYXlvdXRXaWRnZXRJbnN0YW5jZSxcbiAgQWpmUGFnaW5hdGVkTGlzdFdpZGdldEluc3RhbmNlLFxuICBBamZSZXBvcnRXaWRnZXQgYXMgQ29yZUNvbXBvbmVudCxcbiAgQWpmV2lkZ2V0Q29tcG9uZW50c01hcCxcbiAgQWpmV2lkZ2V0SW5zdGFuY2UsXG4gIEFqZldpZGdldFNlcnZpY2UgYXMgQ29yZVNlcnZpY2UsXG4gIEFqZldpZGdldFR5cGUgYXMgd3QsXG59IGZyb20gJ0BhamYvY29yZS9yZXBvcnRzJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudENoZWNrZWQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbmplY3RhYmxlLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01vZGFsQ29udHJvbGxlcn0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge0FqZkNoYXJ0V2lkZ2V0Q29tcG9uZW50fSBmcm9tICcuL2NoYXJ0LXdpZGdldCc7XG5pbXBvcnQge0FqZkZvcm11bGFXaWRnZXRDb21wb25lbnR9IGZyb20gJy4vZm9ybXVsYS13aWRnZXQnO1xuaW1wb3J0IHtBamZIZWF0TWFwV2lkZ2V0Q29tcG9uZW50fSBmcm9tICcuL2hlYXQtbWFwLXdpZGdldCc7XG5pbXBvcnQge0FqZkltYWdlQ29udGFpbmVyV2lkZ2V0Q29tcG9uZW50fSBmcm9tICcuL2ltYWdlLWNvbnRhaW5lci13aWRnZXQnO1xuaW1wb3J0IHtBamZJbWFnZVdpZGdldENvbXBvbmVudH0gZnJvbSAnLi9pbWFnZS13aWRnZXQnO1xuaW1wb3J0IHtBamZNYXBXaWRnZXRDb21wb25lbnR9IGZyb20gJy4vbWFwLXdpZGdldCc7XG5pbXBvcnQge0FqZlBhZ2VCcmVha1dpZGdldENvbXBvbmVudH0gZnJvbSAnLi9wYWdlLWJyZWFrLXdpZGdldCc7XG5pbXBvcnQge0FqZlRhYmxlV2lkZ2V0Q29tcG9uZW50fSBmcm9tICcuL3RhYmxlLXdpZGdldCc7XG5pbXBvcnQge0FqZlRleHRXaWRnZXRDb21wb25lbnR9IGZyb20gJy4vdGV4dC13aWRnZXQnO1xuXG5jb25zdCBkZWZhdWx0V2lkZ2V0c0ZhY3RvcnkgPSAoKTogQWpmV2lkZ2V0Q29tcG9uZW50c01hcCA9PiB7XG4gIGNvbnN0IGRlZmF1bHRXaWRnZXRzOiBBamZXaWRnZXRDb21wb25lbnRzTWFwID0ge307XG4gIGRlZmF1bHRXaWRnZXRzW3d0LkxheW91dF0gPSB7Y29tcG9uZW50OiBBamZMYXlvdXRXaWRnZXRDb21wb25lbnR9O1xuICBkZWZhdWx0V2lkZ2V0c1t3dC5QYWdlQnJlYWtdID0ge2NvbXBvbmVudDogQWpmUGFnZUJyZWFrV2lkZ2V0Q29tcG9uZW50fTtcbiAgZGVmYXVsdFdpZGdldHNbd3QuSW1hZ2VdID0ge2NvbXBvbmVudDogQWpmSW1hZ2VXaWRnZXRDb21wb25lbnR9O1xuICBkZWZhdWx0V2lkZ2V0c1t3dC5UZXh0XSA9IHtjb21wb25lbnQ6IEFqZlRleHRXaWRnZXRDb21wb25lbnR9O1xuICBkZWZhdWx0V2lkZ2V0c1t3dC5DaGFydF0gPSB7Y29tcG9uZW50OiBBamZDaGFydFdpZGdldENvbXBvbmVudH07XG4gIGRlZmF1bHRXaWRnZXRzW3d0LlRhYmxlXSA9IHtjb21wb25lbnQ6IEFqZlRhYmxlV2lkZ2V0Q29tcG9uZW50fTtcbiAgZGVmYXVsdFdpZGdldHNbd3QuRHluYW1pY1RhYmxlXSA9IHtjb21wb25lbnQ6IEFqZlRhYmxlV2lkZ2V0Q29tcG9uZW50fTtcbiAgZGVmYXVsdFdpZGdldHNbd3QuTWFwXSA9IHtjb21wb25lbnQ6IEFqZk1hcFdpZGdldENvbXBvbmVudH07XG4gIGRlZmF1bHRXaWRnZXRzW3d0LkNvbHVtbl0gPSB7Y29tcG9uZW50OiBBamZDb2x1bW5XaWRnZXRDb21wb25lbnR9O1xuICBkZWZhdWx0V2lkZ2V0c1t3dC5Gb3JtdWxhXSA9IHtjb21wb25lbnQ6IEFqZkZvcm11bGFXaWRnZXRDb21wb25lbnR9O1xuICBkZWZhdWx0V2lkZ2V0c1t3dC5JbWFnZUNvbnRhaW5lcl0gPSB7Y29tcG9uZW50OiBBamZJbWFnZUNvbnRhaW5lcldpZGdldENvbXBvbmVudH07XG4gIGRlZmF1bHRXaWRnZXRzW3d0LlBhZ2luYXRlZExpc3RdID0ge2NvbXBvbmVudDogQWpmUGFnaW5hdGVkTGlzdFdpZGdldENvbXBvbmVudH07XG4gIGRlZmF1bHRXaWRnZXRzW3d0LkRpYWxvZ10gPSB7Y29tcG9uZW50OiBBamZEaWFsb2dXaWRnZXRDb21wb25lbnR9O1xuICBkZWZhdWx0V2lkZ2V0c1t3dC5IZWF0TWFwXSA9IHtjb21wb25lbnQ6IEFqZkhlYXRNYXBXaWRnZXRDb21wb25lbnR9O1xuICByZXR1cm4gZGVmYXVsdFdpZGdldHM7XG59O1xuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBBamZXaWRnZXRTZXJ2aWNlIGV4dGVuZHMgQ29yZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihkZWZhdWx0V2lkZ2V0c0ZhY3RvcnkoKSk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWpmLXdpZGdldCcsXG4gIHRlbXBsYXRlVXJsOiAnd2lkZ2V0Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnd2lkZ2V0LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEFqZlJlcG9ydFdpZGdldCBleHRlbmRzIENvcmVDb21wb25lbnQge1xuICByZWFkb25seSB3aWRnZXRzTWFwOiBBamZXaWRnZXRDb21wb25lbnRzTWFwO1xuXG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyOiBSZW5kZXJlcjIsIHdpZGdldFNlcnZpY2U6IEFqZldpZGdldFNlcnZpY2UpIHtcbiAgICBzdXBlcihyZW5kZXJlcik7XG4gICAgdGhpcy53aWRnZXRzTWFwID0gd2lkZ2V0U2VydmljZS5jb21wb25lbnRzTWFwO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogJ2NvbHVtbi13aWRnZXQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjb2x1bW4td2lkZ2V0LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEFqZkNvbHVtbldpZGdldENvbXBvbmVudCBleHRlbmRzIEFqZkJhc2VXaWRnZXRDb21wb25lbnQ8QWpmQ29sdW1uV2lkZ2V0SW5zdGFuY2U+IHtcbiAgY29uc3RydWN0b3IoY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihjZHIsIGVsKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGVVcmw6ICdsYXlvdXQtd2lkZ2V0Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbGF5b3V0LXdpZGdldC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBBamZMYXlvdXRXaWRnZXRDb21wb25lbnRcbiAgZXh0ZW5kcyBBamZCYXNlV2lkZ2V0Q29tcG9uZW50PEFqZkxheW91dFdpZGdldEluc3RhbmNlPlxuICBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWRcbntcbiAgcHJpdmF0ZSBfYWxsY29sdW1uc1JlbmRlcmVkJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gIHJlYWRvbmx5IGFsbGNvbHVtbnNSZW5kZXJlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzXG4gICAgLl9hbGxjb2x1bW5zUmVuZGVyZWQkIGFzIE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IoY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihjZHIsIGVsKTtcbiAgfVxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG4gICAgdGhpcy5fYWxsY29sdW1uc1JlbmRlcmVkJC5uZXh0KHRydWUpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogJ2RpYWxvZy13aWRnZXQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkaWFsb2ctd2lkZ2V0LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEFqZkRpYWxvZ1dpZGdldENvbXBvbmVudFxuICBleHRlbmRzIEFqZkJhc2VXaWRnZXRDb21wb25lbnQ8QWpmRGlhbG9nV2lkZ2V0SW5zdGFuY2U+XG4gIGltcGxlbWVudHMgT25EZXN0cm95XG57XG4gIHByaXZhdGUgX21vZGFsPzogSFRNTElvbk1vZGFsRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihjZHI6IENoYW5nZURldGVjdG9yUmVmLCBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBfbW9kYWxDdHJsOiBNb2RhbENvbnRyb2xsZXIpIHtcbiAgICBzdXBlcihjZHIsIGVsKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9tb2RhbCkge1xuICAgICAgdGhpcy5fbW9kYWwuZGlzbWlzcygpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW5EaWFsb2coKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UgPT0gbnVsbCB8fCB0aGlzLmluc3RhbmNlLmNvbnRlbnQubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX21vZGFsQ3RybFxuICAgICAgLmNyZWF0ZSh7XG4gICAgICAgIGNvbXBvbmVudDogQWpmRGlhbG9nTW9kYWwsXG4gICAgICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICAgICAgY29udGVudDogdGhpcy5pbnN0YW5jZS5jb250ZW50LFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKG1vZGFsID0+IHtcbiAgICAgICAgdGhpcy5fbW9kYWwgPSBtb2RhbDtcbiAgICAgICAgbW9kYWwucHJlc2VudCgpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLW1vZGFsLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGlhbG9nLW1vZGFsLnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEFqZkRpYWxvZ01vZGFsIHtcbiAgQElucHV0KCkgY29udGVudDogQWpmV2lkZ2V0SW5zdGFuY2VbXSA9IFtdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGVVcmw6ICdwYWdpbmF0ZWQtbGlzdC13aWRnZXQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydwYWdpbmF0ZWQtbGlzdC13aWRnZXQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQWpmUGFnaW5hdGVkTGlzdFdpZGdldENvbXBvbmVudFxuICBleHRlbmRzIEFqZkJhc2VXaWRnZXRDb21wb25lbnQ8QWpmUGFnaW5hdGVkTGlzdFdpZGdldEluc3RhbmNlPlxuICBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0XG57XG4gIGdldCBjdXJyZW50UGFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50UGFnZTtcbiAgfVxuICBwcml2YXRlIF9jdXJyZW50UGFnZSA9IDA7XG5cbiAgZ2V0IHBhZ2VzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VzO1xuICB9XG4gIHByaXZhdGUgX3BhZ2VzID0gMDtcblxuICBnZXQgY3VycmVudENvbnRlbnQoKTogQWpmV2lkZ2V0SW5zdGFuY2VbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRDb250ZW50O1xuICB9XG4gIHByaXZhdGUgX2N1cnJlbnRDb250ZW50OiBBamZXaWRnZXRJbnN0YW5jZVtdID0gW107XG5cbiAgZ2V0IGNhbkdvRm9yd2FyZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY2FuR29Gb3J3YXJkO1xuICB9XG4gIHByaXZhdGUgX2NhbkdvRm9yd2FyZCA9IGZhbHNlO1xuXG4gIGdldCBjYW5Hb0JhY2t3YXJkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jYW5Hb0JhY2t3YXJkO1xuICB9XG4gIHByaXZhdGUgX2NhbkdvQmFja3dhcmQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihjZHI6IENoYW5nZURldGVjdG9yUmVmLCBlbDogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGNkciwgZWwpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzWydpbnN0YW5jZSddKSB7XG4gICAgICB0aGlzLl91cGRhdGVDdXJyZW50Q29udGVudCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3VwZGF0ZUN1cnJlbnRDb250ZW50KCk7XG4gIH1cblxuICBnb1RvUGFnZShkaXJlY3Rpb246ICduZXh0JyB8ICdwcmV2aW91cycpOiB2b2lkIHtcbiAgICBjb25zdCBkaWZmID0gZGlyZWN0aW9uID09PSAnbmV4dCcgPyAxIDogLTE7XG4gICAgY29uc3QgbmV3UGFnZSA9IHRoaXMuX2N1cnJlbnRQYWdlICsgZGlmZjtcbiAgICBpZiAobmV3UGFnZSA8PSAwIHx8IG5ld1BhZ2UgPiB0aGlzLl9wYWdlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9jdXJyZW50UGFnZSA9IG5ld1BhZ2U7XG4gICAgdGhpcy5fY2FuR29Gb3J3YXJkID0gbmV3UGFnZSA8IHRoaXMuX3BhZ2VzO1xuICAgIHRoaXMuX2NhbkdvQmFja3dhcmQgPSBuZXdQYWdlID4gMTtcbiAgICB0aGlzLl9maWxsQ3VycmVudENvbnRlbnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUN1cnJlbnRDb250ZW50KCk6IHZvaWQge1xuICAgIHRoaXMuX2NhbkdvQmFja3dhcmQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSA9PSBudWxsIHx8IHRoaXMuaW5zdGFuY2UuY29udGVudC5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRQYWdlID0gMDtcbiAgICAgIHRoaXMuX3BhZ2VzID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY3VycmVudFBhZ2UgPSAxO1xuICAgICAgY29uc3Qge2NvbnRlbnR9ID0gdGhpcy5pbnN0YW5jZTtcbiAgICAgIGNvbnN0IHtwYWdlU2l6ZX0gPSB0aGlzLmluc3RhbmNlLndpZGdldDtcbiAgICAgIHRoaXMuX3BhZ2VzID0gTWF0aC5jZWlsKGNvbnRlbnQubGVuZ3RoIC8gcGFnZVNpemUpO1xuICAgICAgdGhpcy5fY2FuR29Gb3J3YXJkID0gdGhpcy5fcGFnZXMgPiAxO1xuICAgIH1cbiAgICB0aGlzLl9maWxsQ3VycmVudENvbnRlbnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbGxDdXJyZW50Q29udGVudCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSA9PSBudWxsIHx8IHRoaXMuaW5zdGFuY2UuY29udGVudC5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRDb250ZW50ID0gW107XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHtjb250ZW50fSA9IHRoaXMuaW5zdGFuY2U7XG4gICAgY29uc3Qge3BhZ2VTaXplfSA9IHRoaXMuaW5zdGFuY2Uud2lkZ2V0O1xuICAgIGNvbnN0IHN0YXJ0ID0gKHRoaXMuX2N1cnJlbnRQYWdlIC0gMSkgKiBwYWdlU2l6ZTtcbiAgICB0aGlzLl9jdXJyZW50Q29udGVudCA9IGNvbnRlbnQuc2xpY2Uoc3RhcnQsIHN0YXJ0ICsgcGFnZVNpemUpO1xuICAgIHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIiwiPG5nLXRlbXBsYXRlIGFqZi13aWRnZXQtaG9zdD48L25nLXRlbXBsYXRlPlxuIiwiPGRpdiAqbmdJZj1cImluc3RhbmNlXCIgY2xhc3M9XCJhamYtY29sdW1uLWNvbnRhaW5lclwiPlxuICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCB3IG9mIGluc3RhbmNlLmNvbnRlbnRcIj5cbiAgICA8YWpmLXdpZGdldCBbaW5zdGFuY2VdPVwid1wiPlxuICAgIDwvYWpmLXdpZGdldD5cbiAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cbiIsIjxkaXYgKm5nSWY9XCJpbnN0YW5jZVwiIGNsYXNzPVwiYWpmLWNvbHVtbnNcIj5cbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgaW5zdGFuY2Uud2lkZ2V0LmNvbHVtbnM7IGxldCBpZHggPSBpbmRleFwiXG4gICAgICAgIFtuZ1N0eWxlXT1cInsnZmxleC1ncm93JzogY29sdW1uID4gLTEgPyAxIDogbnVsbCwgJ2ZsZXgtYmFzaXMnIDogY29sdW1uID4gLTEgPyAoY29sdW1uICogMTAwKSArICclJyA6IG51bGx9XCJcbiAgICAgICAgY2xhc3M9XCJhamYtY29sdW1uXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJhbGxjb2x1bW5zUmVuZGVyZWQkfGFzeW5jXCI+XG4gICAgICAgICAgICA8YWpmLXdpZGdldCAqbmdJZj1cIihpbnN0YW5jZXxhamZHZXRDb2x1bW5Db250ZW50OmlkeCkgYXMgY2NcIiBbaW5zdGFuY2VdPVwiY2MhXCI+XG4gICAgICAgICAgICA8L2FqZi13aWRnZXQ+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuPC9kaXY+XG4iLCI8YSAqbmdJZj1cImluc3RhbmNlXCIgY2xhc3M9XCJhamYtZGlhbG9nLXRvZ2dsZVwiIChjbGljayk9XCJvcGVuRGlhbG9nKClcIj5cbiAgPGFqZi13aWRnZXQgW2luc3RhbmNlXT1cImluc3RhbmNlLnRvZ2dsZVwiPjwvYWpmLXdpZGdldD5cbjwvYT5cbiIsIjxhamYtd2lkZ2V0ICpuZ0Zvcj1cImxldCBpbnN0YW5jZSBvZiBjb250ZW50XCIgW2luc3RhbmNlXT1cImluc3RhbmNlXCI+PC9hamYtd2lkZ2V0PlxuIiwiPGRpdiBjbGFzcz1cImFqZi1wYWdpbmF0ZWQtbGlzdFwiICpuZ0lmPVwiaW5zdGFuY2UgJiYgcGFnZXMgPiAwXCI+XG4gIDxkaXYgY2xhc3M9XCJhamYtcGFnaW5hdGVkLWxpc3QtdGl0bGUtY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImFqZi1wYWdpbmF0ZWQtbGlzdC10aXRsZVwiPnt7IGluc3RhbmNlLndpZGdldC50aXRsZSB9fTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJhamYtc3BhY2VyXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImFqZi1wYWdpbmF0ZWQtbGlzdC1wYWdpbmF0b3JcIj5cbiAgICAgIDxhIChjbGljayk9XCJnb1RvUGFnZSgncHJldmlvdXMnKVwiIGNsYXNzPVwiYWpmLXBhZ2luYXRlZC1saXN0LWJ0biBhamYtcGFnaW5hdGVkLWxpc3QtYmFjay1idG5cIlxuICAgICAgICAgIFtjbGFzcy5hamYtcGFnaW5hdGVkLWxpc3QtYnRuLWRpc2FibGVkXT1cImNhbkdvQmFja3dhcmQgPT09IGZhbHNlXCI+PC9hPlxuICAgICAgPGRpdiBjbGFzcz1cImFqZi1wYWdpbmF0ZWQtbGlzdC1wYWdpbmF0b3ItcGFnZVwiPnt7IGN1cnJlbnRQYWdlIH19PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYWpmLXBhZ2luYXRlZC1saXN0LXBhZ2luYXRvci1zZXBhcmF0b3JcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhamYtcGFnaW5hdGVkLWxpc3QtcGFnaW5hdG9yLXBhZ2VzXCI+e3sgcGFnZXMgfX08L2Rpdj5cbiAgICAgIDxhIChjbGljayk9XCJnb1RvUGFnZSgnbmV4dCcpXCIgY2xhc3M9XCJhamYtcGFnaW5hdGVkLWxpc3QtYnRuIGFqZi1wYWdpbmF0ZWQtbGlzdC1mb3J3YXJkLWJ0blwiXG4gICAgICAgIFtjbGFzcy5hamYtcGFnaW5hdGVkLWxpc3QtYnRuLWRpc2FibGVkXT1cImNhbkdvRm9yd2FyZCA9PT0gZmFsc2VcIj48L2E+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiYWpmLXBhZ2luYXRlZC1saXN0LWl0ZW1cIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjdXJyZW50Q29udGVudFwiPlxuICAgIDxhamYtd2lkZ2V0IFtpbnN0YW5jZV09XCJpdGVtXCI+PC9hamYtd2lkZ2V0PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19