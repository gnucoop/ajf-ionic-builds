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
AjfWidgetService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: AjfWidgetService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
AjfWidgetService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: AjfWidgetService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: AjfWidgetService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return []; } });
export class AjfReportWidget extends CoreComponent {
    constructor(renderer, widgetService) {
        super(renderer);
        this.widgetsMap = widgetService.componentsMap;
    }
}
AjfReportWidget.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: AjfReportWidget, deps: [{ token: i0.Renderer2 }, { token: AjfWidgetService }], target: i0.ɵɵFactoryTarget.Component });
AjfReportWidget.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.4", type: AjfReportWidget, selector: "ajf-widget", usesInheritance: true, ngImport: i0, template: "<ng-template ajf-widget-host></ng-template>\n", styles: ["ajf-widget{display:flex;flex:1 1 auto;box-sizing:border-box}ajf-widget>ng-component{flex:1 1 auto;display:flex;align-items:center;box-sizing:border-box;background-color:transparent}\n"], dependencies: [{ kind: "directive", type: i1.AjfWidgetHost, selector: "[ajf-widget-host]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: AjfReportWidget, decorators: [{
            type: Component,
            args: [{ selector: 'ajf-widget', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-template ajf-widget-host></ng-template>\n", styles: ["ajf-widget{display:flex;flex:1 1 auto;box-sizing:border-box}ajf-widget>ng-component{flex:1 1 auto;display:flex;align-items:center;box-sizing:border-box;background-color:transparent}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: AjfWidgetService }]; } });
export class AjfColumnWidgetComponent extends AjfBaseWidgetComponent {
    constructor(cdr, el) {
        super(cdr, el);
    }
}
AjfColumnWidgetComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: AjfColumnWidgetComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
AjfColumnWidgetComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.4", type: AjfColumnWidgetComponent, selector: "ng-component", usesInheritance: true, ngImport: i0, template: "<div *ngIf=\"instance\" class=\"ajf-column-container\">\n  <ng-container *ngFor=\"let w of instance.content\">\n    <ajf-widget [instance]=\"w\">\n    </ajf-widget>\n  </ng-container>\n</div>\n", styles: [".ajf-column-container{flex:1 1 auto}\n"], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: AjfReportWidget, selector: "ajf-widget" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: AjfColumnWidgetComponent, decorators: [{
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
AjfLayoutWidgetComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: AjfLayoutWidgetComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
AjfLayoutWidgetComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.4", type: AjfLayoutWidgetComponent, selector: "ng-component", usesInheritance: true, ngImport: i0, template: "<div *ngIf=\"instance\" class=\"ajf-columns\">\n    <div *ngFor=\"let column of instance.widget.columns; let idx = index\"\n        [ngStyle]=\"{'flex-grow': column > -1 ? 1 : null, 'flex-basis' : column > -1 ? (column * 100) + '%' : null}\"\n        class=\"ajf-column\">\n        <ng-container *ngIf=\"allcolumnsRendered$|async\">\n            <ajf-widget *ngIf=\"(instance|ajfGetColumnContent:idx) as cc\" [instance]=\"cc!\">\n            </ajf-widget>\n        </ng-container>\n    </div>\n</div>\n", styles: [".ajf-columns{flex:1 1 auto;display:flex;align-items:inherit;box-sizing:border-box}.ajf-columns>.ajf-column{box-sizing:border-box;display:flex;align-items:inherit;flex-shrink:1}\n"], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: AjfReportWidget, selector: "ajf-widget" }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }, { kind: "pipe", type: i1.AjfGetColumnContentPipe, name: "ajfGetColumnContent" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: AjfLayoutWidgetComponent, decorators: [{
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
AjfDialogWidgetComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: AjfDialogWidgetComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i3.ModalController }], target: i0.ɵɵFactoryTarget.Component });
AjfDialogWidgetComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.4", type: AjfDialogWidgetComponent, selector: "ng-component", usesInheritance: true, ngImport: i0, template: "<a *ngIf=\"instance\" class=\"ajf-dialog-toggle\" (click)=\"openDialog()\">\n  <ajf-widget [instance]=\"instance.toggle\"></ajf-widget>\n</a>\n", styles: [".ajf-dialog-toggle{display:block;cursor:pointer}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: AjfReportWidget, selector: "ajf-widget" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: AjfDialogWidgetComponent, decorators: [{
            type: Component,
            args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<a *ngIf=\"instance\" class=\"ajf-dialog-toggle\" (click)=\"openDialog()\">\n  <ajf-widget [instance]=\"instance.toggle\"></ajf-widget>\n</a>\n", styles: [".ajf-dialog-toggle{display:block;cursor:pointer}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i3.ModalController }]; } });
export class AjfDialogModal {
    constructor() {
        this.content = [];
    }
}
AjfDialogModal.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: AjfDialogModal, deps: [], target: i0.ɵɵFactoryTarget.Component });
AjfDialogModal.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.4", type: AjfDialogModal, selector: "ng-component", inputs: { content: "content" }, ngImport: i0, template: "<ajf-widget *ngFor=\"let instance of content\" [instance]=\"instance\"></ajf-widget>\n", styles: [""], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: AjfReportWidget, selector: "ajf-widget" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: AjfDialogModal, decorators: [{
            type: Component,
            args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ajf-widget *ngFor=\"let instance of content\" [instance]=\"instance\"></ajf-widget>\n" }]
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
AjfPaginatedListWidgetComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: AjfPaginatedListWidgetComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
AjfPaginatedListWidgetComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.4", type: AjfPaginatedListWidgetComponent, selector: "ng-component", usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div class=\"ajf-paginated-list\" *ngIf=\"instance && pages > 0\">\n  <div class=\"ajf-paginated-list-title-container\">\n    <div class=\"ajf-paginated-list-title\">{{ instance.widget.title }}</div>\n    <div class=\"ajf-spacer\"></div>\n    <div class=\"ajf-paginated-list-paginator\">\n      <a (click)=\"goToPage('previous')\" class=\"ajf-paginated-list-btn ajf-paginated-list-back-btn\"\n          [class.ajf-paginated-list-btn-disabled]=\"canGoBackward === false\"></a>\n      <div class=\"ajf-paginated-list-paginator-page\">{{ currentPage }}</div>\n      <div class=\"ajf-paginated-list-paginator-separator\"></div>\n      <div class=\"ajf-paginated-list-paginator-pages\">{{ pages }}</div>\n      <a (click)=\"goToPage('next')\" class=\"ajf-paginated-list-btn ajf-paginated-list-forward-btn\"\n        [class.ajf-paginated-list-btn-disabled]=\"canGoForward === false\"></a>\n    </div>\n  </div>\n  <div class=\"ajf-paginated-list-item\" *ngFor=\"let item of currentContent\">\n    <ajf-widget [instance]=\"item\"></ajf-widget>\n  </div>\n</div>\n", styles: [".ajf-paginated-list-title-container{display:flex;align-items:center}.ajf-spacer{flex:1 0 auto}.ajf-paginated-list-btn{cursor:pointer;display:block;width:32px;height:32px;position:relative}.ajf-paginated-list-btn:after{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.ajf-paginated-list-paginator-separator{width:16px;height:32px;position:relative}.ajf-paginated-list-paginator-separator:after{width:100%;height:100%;display:flex;justify-content:center;align-items:center;content:\"/\"}.ajf-paginated-list-btn-disabled{opacity:.5;cursor:default}.ajf-paginated-list-back-btn:after{content:\"<\"}.ajf-paginated-list-forward-btn:after{content:\">\"}.ajf-paginated-list-paginator{display:flex;align-items:center}.ajf-paginated-list-paginator>*{margin:0 .5em}\n"], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: AjfReportWidget, selector: "ajf-widget" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: AjfPaginatedListWidgetComponent, decorators: [{
            type: Component,
            args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div class=\"ajf-paginated-list\" *ngIf=\"instance && pages > 0\">\n  <div class=\"ajf-paginated-list-title-container\">\n    <div class=\"ajf-paginated-list-title\">{{ instance.widget.title }}</div>\n    <div class=\"ajf-spacer\"></div>\n    <div class=\"ajf-paginated-list-paginator\">\n      <a (click)=\"goToPage('previous')\" class=\"ajf-paginated-list-btn ajf-paginated-list-back-btn\"\n          [class.ajf-paginated-list-btn-disabled]=\"canGoBackward === false\"></a>\n      <div class=\"ajf-paginated-list-paginator-page\">{{ currentPage }}</div>\n      <div class=\"ajf-paginated-list-paginator-separator\"></div>\n      <div class=\"ajf-paginated-list-paginator-pages\">{{ pages }}</div>\n      <a (click)=\"goToPage('next')\" class=\"ajf-paginated-list-btn ajf-paginated-list-forward-btn\"\n        [class.ajf-paginated-list-btn-disabled]=\"canGoForward === false\"></a>\n    </div>\n  </div>\n  <div class=\"ajf-paginated-list-item\" *ngFor=\"let item of currentContent\">\n    <ajf-widget [instance]=\"item\"></ajf-widget>\n  </div>\n</div>\n", styles: [".ajf-paginated-list-title-container{display:flex;align-items:center}.ajf-spacer{flex:1 0 auto}.ajf-paginated-list-btn{cursor:pointer;display:block;width:32px;height:32px;position:relative}.ajf-paginated-list-btn:after{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.ajf-paginated-list-paginator-separator{width:16px;height:32px;position:relative}.ajf-paginated-list-paginator-separator:after{width:100%;height:100%;display:flex;justify-content:center;align-items:center;content:\"/\"}.ajf-paginated-list-btn-disabled{opacity:.5;cursor:default}.ajf-paginated-list-back-btn:after{content:\"<\"}.ajf-paginated-list-forward-btn:after{content:\">\"}.ajf-paginated-list-paginator{display:flex;align-items:center}.ajf-paginated-list-paginator>*{margin:0 .5em}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvaW9uaWMvcmVwb3J0cy9zcmMvd2lkZ2V0LnRzIiwiLi4vLi4vLi4vLi4vcHJvamVjdHMvaW9uaWMvcmVwb3J0cy9zcmMvd2lkZ2V0Lmh0bWwiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9pb25pYy9yZXBvcnRzL3NyYy9jb2x1bW4td2lkZ2V0Lmh0bWwiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9pb25pYy9yZXBvcnRzL3NyYy9sYXlvdXQtd2lkZ2V0Lmh0bWwiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9pb25pYy9yZXBvcnRzL3NyYy9kaWFsb2ctd2lkZ2V0Lmh0bWwiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9pb25pYy9yZXBvcnRzL3NyYy9kaWFsb2ctbW9kYWwuaHRtbCIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL2lvbmljL3JlcG9ydHMvc3JjL3BhZ2luYXRlZC1saXN0LXdpZGdldC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRztBQUVILE9BQU8sRUFDTCxzQkFBc0IsRUFLdEIsZUFBZSxJQUFJLGFBQWEsRUFHaEMsZ0JBQWdCLElBQUksV0FBVyxFQUMvQixhQUFhLElBQUksRUFBRSxHQUNwQixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULFVBQVUsRUFDVixLQUFLLEVBTUwsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBQyxlQUFlLEVBQWEsTUFBTSxNQUFNLENBQUM7QUFFakQsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDM0QsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFD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Q0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQ2pELElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7NEhBaEZVLCtCQUErQjtnSEFBL0IsK0JBQStCLGdHTWxNNUMsa2lDQWtCQSw0aUNONkVhLGVBQWU7MkZBbUdmLCtCQUErQjtrQkFOM0MsU0FBUztzQ0FHUyx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChDKSBHbnVjb29wIHNvYy4gY29vcC5cbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSxcbiAqIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKiBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvLlxuICpcbiAqL1xuXG5pbXBvcnQge1xuICBBamZCYXNlV2lkZ2V0Q29tcG9uZW50LFxuICBBamZDb2x1bW5XaWRnZXRJbnN0YW5jZSxcbiAgQWpmRGlhbG9nV2lkZ2V0SW5zdGFuY2UsXG4gIEFqZkxheW91dFdpZGdldEluc3RhbmNlLFxuICBBamZQYWdpbmF0ZWRMaXN0V2lkZ2V0SW5zdGFuY2UsXG4gIEFqZlJlcG9ydFdpZGdldCBhcyBDb3JlQ29tcG9uZW50LFxuICBBamZXaWRnZXRDb21wb25lbnRzTWFwLFxuICBBamZXaWRnZXRJbnN0YW5jZSxcbiAgQWpmV2lkZ2V0U2VydmljZSBhcyBDb3JlU2VydmljZSxcbiAgQWpmV2lkZ2V0VHlwZSBhcyB3dCxcbn0gZnJvbSAnQGFqZi9jb3JlL3JlcG9ydHMnO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdGFibGUsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TW9kYWxDb250cm9sbGVyfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7QWpmQ2hhcnRXaWRnZXRDb21wb25lbnR9IGZyb20gJy4vY2hhcnQtd2lkZ2V0JztcbmltcG9ydCB7QWpmRm9ybXVsYVdpZGdldENvbXBvbmVudH0gZnJvbSAnLi9mb3JtdWxhLXdpZGdldCc7XG5pbXBvcnQge0FqZkhlYXRNYXBXaWRnZXRDb21wb25lbnR9IGZyb20gJy4vaGVhdC1tYXAtd2lkZ2V0JztcbmltcG9ydCB7QWpmSW1hZ2VDb250YWluZXJXaWRnZXRDb21wb25lbnR9IGZyb20gJy4vaW1hZ2UtY29udGFpbmVyLXdpZGdldCc7XG5pbXBvcnQge0FqZkltYWdlV2lkZ2V0Q29tcG9uZW50fSBmcm9tICcuL2ltYWdlLXdpZGdldCc7XG5pbXBvcnQge0FqZk1hcFdpZGdldENvbXBvbmVudH0gZnJvbSAnLi9tYXAtd2lkZ2V0JztcbmltcG9ydCB7QWpmUGFnZUJyZWFrV2lkZ2V0Q29tcG9uZW50fSBmcm9tICcuL3BhZ2UtYnJlYWstd2lkZ2V0JztcbmltcG9ydCB7QWpmVGFibGVXaWRnZXRDb21wb25lbnR9IGZyb20gJy4vdGFibGUtd2lkZ2V0JztcbmltcG9ydCB7QWpmVGV4dFdpZGdldENvbXBvbmVudH0gZnJvbSAnLi90ZXh0LXdpZGdldCc7XG5cbmNvbnN0IGRlZmF1bHRXaWRnZXRzRmFjdG9yeSA9ICgpOiBBamZXaWRnZXRDb21wb25lbnRzTWFwID0+IHtcbiAgY29uc3QgZGVmYXVsdFdpZGdldHM6IEFqZldpZGdldENvbXBvbmVudHNNYXAgPSB7fTtcbiAgZGVmYXVsdFdpZGdldHNbd3QuTGF5b3V0XSA9IHtjb21wb25lbnQ6IEFqZkxheW91dFdpZGdldENvbXBvbmVudH07XG4gIGRlZmF1bHRXaWRnZXRzW3d0LlBhZ2VCcmVha10gPSB7Y29tcG9uZW50OiBBamZQYWdlQnJlYWtXaWRnZXRDb21wb25lbnR9O1xuICBkZWZhdWx0V2lkZ2V0c1t3dC5JbWFnZV0gPSB7Y29tcG9uZW50OiBBamZJbWFnZVdpZGdldENvbXBvbmVudH07XG4gIGRlZmF1bHRXaWRnZXRzW3d0LlRleHRdID0ge2NvbXBvbmVudDogQWpmVGV4dFdpZGdldENvbXBvbmVudH07XG4gIGRlZmF1bHRXaWRnZXRzW3d0LkNoYXJ0XSA9IHtjb21wb25lbnQ6IEFqZkNoYXJ0V2lkZ2V0Q29tcG9uZW50fTtcbiAgZGVmYXVsdFdpZGdldHNbd3QuVGFibGVdID0ge2NvbXBvbmVudDogQWpmVGFibGVXaWRnZXRDb21wb25lbnR9O1xuICBkZWZhdWx0V2lkZ2V0c1t3dC5EeW5hbWljVGFibGVdID0ge2NvbXBvbmVudDogQWpmVGFibGVXaWRnZXRDb21wb25lbnR9O1xuICBkZWZhdWx0V2lkZ2V0c1t3dC5NYXBdID0ge2NvbXBvbmVudDogQWpmTWFwV2lkZ2V0Q29tcG9uZW50fTtcbiAgZGVmYXVsdFdpZGdldHNbd3QuQ29sdW1uXSA9IHtjb21wb25lbnQ6IEFqZkNvbHVtbldpZGdldENvbXBvbmVudH07XG4gIGRlZmF1bHRXaWRnZXRzW3d0LkZvcm11bGFdID0ge2NvbXBvbmVudDogQWpmRm9ybXVsYVdpZGdldENvbXBvbmVudH07XG4gIGRlZmF1bHRXaWRnZXRzW3d0LkltYWdlQ29udGFpbmVyXSA9IHtjb21wb25lbnQ6IEFqZkltYWdlQ29udGFpbmVyV2lkZ2V0Q29tcG9uZW50fTtcbiAgZGVmYXVsdFdpZGdldHNbd3QuUGFnaW5hdGVkTGlzdF0gPSB7Y29tcG9uZW50OiBBamZQYWdpbmF0ZWRMaXN0V2lkZ2V0Q29tcG9uZW50fTtcbiAgZGVmYXVsdFdpZGdldHNbd3QuRGlhbG9nXSA9IHtjb21wb25lbnQ6IEFqZkRpYWxvZ1dpZGdldENvbXBvbmVudH07XG4gIGRlZmF1bHRXaWRnZXRzW3d0LkhlYXRNYXBdID0ge2NvbXBvbmVudDogQWpmSGVhdE1hcFdpZGdldENvbXBvbmVudH07XG4gIHJldHVybiBkZWZhdWx0V2lkZ2V0cztcbn07XG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIEFqZldpZGdldFNlcnZpY2UgZXh0ZW5kcyBDb3JlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKGRlZmF1bHRXaWRnZXRzRmFjdG9yeSgpKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhamYtd2lkZ2V0JyxcbiAgdGVtcGxhdGVVcmw6ICd3aWRnZXQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd3aWRnZXQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQWpmUmVwb3J0V2lkZ2V0IGV4dGVuZHMgQ29yZUNvbXBvbmVudCB7XG4gIHJlYWRvbmx5IHdpZGdldHNNYXA6IEFqZldpZGdldENvbXBvbmVudHNNYXA7XG5cbiAgY29uc3RydWN0b3IocmVuZGVyZXI6IFJlbmRlcmVyMiwgd2lkZ2V0U2VydmljZTogQWpmV2lkZ2V0U2VydmljZSkge1xuICAgIHN1cGVyKHJlbmRlcmVyKTtcbiAgICB0aGlzLndpZGdldHNNYXAgPSB3aWRnZXRTZXJ2aWNlLmNvbXBvbmVudHNNYXA7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAnY29sdW1uLXdpZGdldC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2NvbHVtbi13aWRnZXQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQWpmQ29sdW1uV2lkZ2V0Q29tcG9uZW50IGV4dGVuZHMgQWpmQmFzZVdpZGdldENvbXBvbmVudDxBamZDb2x1bW5XaWRnZXRJbnN0YW5jZT4ge1xuICBjb25zdHJ1Y3RvcihjZHI6IENoYW5nZURldGVjdG9yUmVmLCBlbDogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGNkciwgZWwpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogJ2xheW91dC13aWRnZXQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydsYXlvdXQtd2lkZ2V0LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEFqZkxheW91dFdpZGdldENvbXBvbmVudFxuICBleHRlbmRzIEFqZkJhc2VXaWRnZXRDb21wb25lbnQ8QWpmTGF5b3V0V2lkZ2V0SW5zdGFuY2U+XG4gIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZFxue1xuICBwcml2YXRlIF9hbGxjb2x1bW5zUmVuZGVyZWQkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgcmVhZG9ubHkgYWxsY29sdW1uc1JlbmRlcmVkJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXNcbiAgICAuX2FsbGNvbHVtbnNSZW5kZXJlZCQgYXMgT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICBjb25zdHJ1Y3RvcihjZHI6IENoYW5nZURldGVjdG9yUmVmLCBlbDogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGNkciwgZWwpO1xuICB9XG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICB0aGlzLl9hbGxjb2x1bW5zUmVuZGVyZWQkLm5leHQodHJ1ZSk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLXdpZGdldC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RpYWxvZy13aWRnZXQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQWpmRGlhbG9nV2lkZ2V0Q29tcG9uZW50XG4gIGV4dGVuZHMgQWpmQmFzZVdpZGdldENvbXBvbmVudDxBamZEaWFsb2dXaWRnZXRJbnN0YW5jZT5cbiAgaW1wbGVtZW50cyBPbkRlc3Ryb3lcbntcbiAgcHJpdmF0ZSBfbW9kYWw/OiBIVE1MSW9uTW9kYWxFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIF9tb2RhbEN0cmw6IE1vZGFsQ29udHJvbGxlcikge1xuICAgIHN1cGVyKGNkciwgZWwpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX21vZGFsKSB7XG4gICAgICB0aGlzLl9tb2RhbC5kaXNtaXNzKCk7XG4gICAgfVxuICB9XG5cbiAgb3BlbkRpYWxvZygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSA9PSBudWxsIHx8IHRoaXMuaW5zdGFuY2UuY29udGVudC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbW9kYWxDdHJsXG4gICAgICAuY3JlYXRlKHtcbiAgICAgICAgY29tcG9uZW50OiBBamZEaWFsb2dNb2RhbCxcbiAgICAgICAgY29tcG9uZW50UHJvcHM6IHtcbiAgICAgICAgICBjb250ZW50OiB0aGlzLmluc3RhbmNlLmNvbnRlbnQsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLnRoZW4obW9kYWwgPT4ge1xuICAgICAgICB0aGlzLl9tb2RhbCA9IG1vZGFsO1xuICAgICAgICBtb2RhbC5wcmVzZW50KCk7XG4gICAgICB9KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGVVcmw6ICdkaWFsb2ctbW9kYWwuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkaWFsb2ctbW9kYWwuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQWpmRGlhbG9nTW9kYWwge1xuICBASW5wdXQoKSBjb250ZW50OiBBamZXaWRnZXRJbnN0YW5jZVtdID0gW107XG59XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogJ3BhZ2luYXRlZC1saXN0LXdpZGdldC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3BhZ2luYXRlZC1saXN0LXdpZGdldC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBBamZQYWdpbmF0ZWRMaXN0V2lkZ2V0Q29tcG9uZW50XG4gIGV4dGVuZHMgQWpmQmFzZVdpZGdldENvbXBvbmVudDxBamZQYWdpbmF0ZWRMaXN0V2lkZ2V0SW5zdGFuY2U+XG4gIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXRcbntcbiAgZ2V0IGN1cnJlbnRQYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRQYWdlO1xuICB9XG4gIHByaXZhdGUgX2N1cnJlbnRQYWdlID0gMDtcblxuICBnZXQgcGFnZXMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZXM7XG4gIH1cbiAgcHJpdmF0ZSBfcGFnZXMgPSAwO1xuXG4gIGdldCBjdXJyZW50Q29udGVudCgpOiBBamZXaWRnZXRJbnN0YW5jZVtdIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudENvbnRlbnQ7XG4gIH1cbiAgcHJpdmF0ZSBfY3VycmVudENvbnRlbnQ6IEFqZldpZGdldEluc3RhbmNlW10gPSBbXTtcblxuICBnZXQgY2FuR29Gb3J3YXJkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jYW5Hb0ZvcndhcmQ7XG4gIH1cbiAgcHJpdmF0ZSBfY2FuR29Gb3J3YXJkID0gZmFsc2U7XG5cbiAgZ2V0IGNhbkdvQmFja3dhcmQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NhbkdvQmFja3dhcmQ7XG4gIH1cbiAgcHJpdmF0ZSBfY2FuR29CYWNrd2FyZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIGVsOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIoY2RyLCBlbCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXNbJ2luc3RhbmNlJ10pIHtcbiAgICAgIHRoaXMuX3VwZGF0ZUN1cnJlbnRDb250ZW50KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fdXBkYXRlQ3VycmVudENvbnRlbnQoKTtcbiAgfVxuXG4gIGdvVG9QYWdlKGRpcmVjdGlvbjogJ25leHQnIHwgJ3ByZXZpb3VzJyk6IHZvaWQge1xuICAgIGNvbnN0IGRpZmYgPSBkaXJlY3Rpb24gPT09ICduZXh0JyA/IDEgOiAtMTtcbiAgICBjb25zdCBuZXdQYWdlID0gdGhpcy5fY3VycmVudFBhZ2UgKyBkaWZmO1xuICAgIGlmIChuZXdQYWdlIDw9IDAgfHwgbmV3UGFnZSA+IHRoaXMuX3BhZ2VzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2N1cnJlbnRQYWdlID0gbmV3UGFnZTtcbiAgICB0aGlzLl9jYW5Hb0ZvcndhcmQgPSBuZXdQYWdlIDwgdGhpcy5fcGFnZXM7XG4gICAgdGhpcy5fY2FuR29CYWNrd2FyZCA9IG5ld1BhZ2UgPiAxO1xuICAgIHRoaXMuX2ZpbGxDdXJyZW50Q29udGVudCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlQ3VycmVudENvbnRlbnQoKTogdm9pZCB7XG4gICAgdGhpcy5fY2FuR29CYWNrd2FyZCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmluc3RhbmNlID09IG51bGwgfHwgdGhpcy5pbnN0YW5jZS5jb250ZW50Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5fY3VycmVudFBhZ2UgPSAwO1xuICAgICAgdGhpcy5fcGFnZXMgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jdXJyZW50UGFnZSA9IDE7XG4gICAgICBjb25zdCB7Y29udGVudH0gPSB0aGlzLmluc3RhbmNlO1xuICAgICAgY29uc3Qge3BhZ2VTaXplfSA9IHRoaXMuaW5zdGFuY2Uud2lkZ2V0O1xuICAgICAgdGhpcy5fcGFnZXMgPSBNYXRoLmNlaWwoY29udGVudC5sZW5ndGggLyBwYWdlU2l6ZSk7XG4gICAgICB0aGlzLl9jYW5Hb0ZvcndhcmQgPSB0aGlzLl9wYWdlcyA+IDE7XG4gICAgfVxuICAgIHRoaXMuX2ZpbGxDdXJyZW50Q29udGVudCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsbEN1cnJlbnRDb250ZW50KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluc3RhbmNlID09IG51bGwgfHwgdGhpcy5pbnN0YW5jZS5jb250ZW50Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5fY3VycmVudENvbnRlbnQgPSBbXTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qge2NvbnRlbnR9ID0gdGhpcy5pbnN0YW5jZTtcbiAgICBjb25zdCB7cGFnZVNpemV9ID0gdGhpcy5pbnN0YW5jZS53aWRnZXQ7XG4gICAgY29uc3Qgc3RhcnQgPSAodGhpcy5fY3VycmVudFBhZ2UgLSAxKSAqIHBhZ2VTaXplO1xuICAgIHRoaXMuX2N1cnJlbnRDb250ZW50ID0gY29udGVudC5zbGljZShzdGFydCwgc3RhcnQgKyBwYWdlU2l6ZSk7XG4gICAgdGhpcy5fY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG4iLCI8bmctdGVtcGxhdGUgYWpmLXdpZGdldC1ob3N0PjwvbmctdGVtcGxhdGU+XG4iLCI8ZGl2ICpuZ0lmPVwiaW5zdGFuY2VcIiBjbGFzcz1cImFqZi1jb2x1bW4tY29udGFpbmVyXCI+XG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHcgb2YgaW5zdGFuY2UuY29udGVudFwiPlxuICAgIDxhamYtd2lkZ2V0IFtpbnN0YW5jZV09XCJ3XCI+XG4gICAgPC9hamYtd2lkZ2V0PlxuICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuIiwiPGRpdiAqbmdJZj1cImluc3RhbmNlXCIgY2xhc3M9XCJhamYtY29sdW1uc1wiPlxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBpbnN0YW5jZS53aWRnZXQuY29sdW1uczsgbGV0IGlkeCA9IGluZGV4XCJcbiAgICAgICAgW25nU3R5bGVdPVwieydmbGV4LWdyb3cnOiBjb2x1bW4gPiAtMSA/IDEgOiBudWxsLCAnZmxleC1iYXNpcycgOiBjb2x1bW4gPiAtMSA/IChjb2x1bW4gKiAxMDApICsgJyUnIDogbnVsbH1cIlxuICAgICAgICBjbGFzcz1cImFqZi1jb2x1bW5cIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImFsbGNvbHVtbnNSZW5kZXJlZCR8YXN5bmNcIj5cbiAgICAgICAgICAgIDxhamYtd2lkZ2V0ICpuZ0lmPVwiKGluc3RhbmNlfGFqZkdldENvbHVtbkNvbnRlbnQ6aWR4KSBhcyBjY1wiIFtpbnN0YW5jZV09XCJjYyFcIj5cbiAgICAgICAgICAgIDwvYWpmLXdpZGdldD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiIsIjxhICpuZ0lmPVwiaW5zdGFuY2VcIiBjbGFzcz1cImFqZi1kaWFsb2ctdG9nZ2xlXCIgKGNsaWNrKT1cIm9wZW5EaWFsb2coKVwiPlxuICA8YWpmLXdpZGdldCBbaW5zdGFuY2VdPVwiaW5zdGFuY2UudG9nZ2xlXCI+PC9hamYtd2lkZ2V0PlxuPC9hPlxuIiwiPGFqZi13aWRnZXQgKm5nRm9yPVwibGV0IGluc3RhbmNlIG9mIGNvbnRlbnRcIiBbaW5zdGFuY2VdPVwiaW5zdGFuY2VcIj48L2FqZi13aWRnZXQ+XG4iLCI8ZGl2IGNsYXNzPVwiYWpmLXBhZ2luYXRlZC1saXN0XCIgKm5nSWY9XCJpbnN0YW5jZSAmJiBwYWdlcyA+IDBcIj5cbiAgPGRpdiBjbGFzcz1cImFqZi1wYWdpbmF0ZWQtbGlzdC10aXRsZS1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiYWpmLXBhZ2luYXRlZC1saXN0LXRpdGxlXCI+e3sgaW5zdGFuY2Uud2lkZ2V0LnRpdGxlIH19PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImFqZi1zcGFjZXJcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYWpmLXBhZ2luYXRlZC1saXN0LXBhZ2luYXRvclwiPlxuICAgICAgPGEgKGNsaWNrKT1cImdvVG9QYWdlKCdwcmV2aW91cycpXCIgY2xhc3M9XCJhamYtcGFnaW5hdGVkLWxpc3QtYnRuIGFqZi1wYWdpbmF0ZWQtbGlzdC1iYWNrLWJ0blwiXG4gICAgICAgICAgW2NsYXNzLmFqZi1wYWdpbmF0ZWQtbGlzdC1idG4tZGlzYWJsZWRdPVwiY2FuR29CYWNrd2FyZCA9PT0gZmFsc2VcIj48L2E+XG4gICAgICA8ZGl2IGNsYXNzPVwiYWpmLXBhZ2luYXRlZC1saXN0LXBhZ2luYXRvci1wYWdlXCI+e3sgY3VycmVudFBhZ2UgfX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhamYtcGFnaW5hdGVkLWxpc3QtcGFnaW5hdG9yLXNlcGFyYXRvclwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImFqZi1wYWdpbmF0ZWQtbGlzdC1wYWdpbmF0b3ItcGFnZXNcIj57eyBwYWdlcyB9fTwvZGl2PlxuICAgICAgPGEgKGNsaWNrKT1cImdvVG9QYWdlKCduZXh0JylcIiBjbGFzcz1cImFqZi1wYWdpbmF0ZWQtbGlzdC1idG4gYWpmLXBhZ2luYXRlZC1saXN0LWZvcndhcmQtYnRuXCJcbiAgICAgICAgW2NsYXNzLmFqZi1wYWdpbmF0ZWQtbGlzdC1idG4tZGlzYWJsZWRdPVwiY2FuR29Gb3J3YXJkID09PSBmYWxzZVwiPjwvYT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJhamYtcGFnaW5hdGVkLWxpc3QtaXRlbVwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGN1cnJlbnRDb250ZW50XCI+XG4gICAgPGFqZi13aWRnZXQgW2luc3RhbmNlXT1cIml0ZW1cIj48L2FqZi13aWRnZXQ+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=