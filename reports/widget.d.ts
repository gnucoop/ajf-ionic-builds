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
import { AjfBaseWidgetComponent, AjfColumnWidgetInstance, AjfDialogWidgetInstance, AjfLayoutWidgetInstance, AjfPaginatedListWidgetInstance, AjfReportWidget as CoreComponent, AjfWidgetComponentsMap, AjfWidgetInstance, AjfWidgetService as CoreService } from '@ajf/core/reports';
import { AfterContentChecked, ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class AjfWidgetService extends CoreService {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<AjfWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AjfWidgetService>;
}
export declare class AjfReportWidget extends CoreComponent {
    readonly widgetsMap: AjfWidgetComponentsMap;
    constructor(renderer: Renderer2, widgetService: AjfWidgetService);
    static ɵfac: i0.ɵɵFactoryDeclaration<AjfReportWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AjfReportWidget, "ajf-widget", never, {}, {}, never, never, false, never>;
}
export declare class AjfColumnWidgetComponent extends AjfBaseWidgetComponent<AjfColumnWidgetInstance> {
    constructor(cdr: ChangeDetectorRef, el: ElementRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<AjfColumnWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AjfColumnWidgetComponent, "ng-component", never, {}, {}, never, never, false, never>;
}
export declare class AjfLayoutWidgetComponent extends AjfBaseWidgetComponent<AjfLayoutWidgetInstance> implements AfterContentChecked {
    private _allcolumnsRendered$;
    readonly allcolumnsRendered$: Observable<boolean>;
    constructor(cdr: ChangeDetectorRef, el: ElementRef);
    ngAfterContentChecked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AjfLayoutWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AjfLayoutWidgetComponent, "ng-component", never, {}, {}, never, never, false, never>;
}
export declare class AjfDialogWidgetComponent extends AjfBaseWidgetComponent<AjfDialogWidgetInstance> implements OnDestroy {
    private _modalCtrl;
    private _modal?;
    constructor(cdr: ChangeDetectorRef, el: ElementRef, _modalCtrl: ModalController);
    ngOnDestroy(): void;
    openDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AjfDialogWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AjfDialogWidgetComponent, "ng-component", never, {}, {}, never, never, false, never>;
}
export declare class AjfDialogModal {
    content: AjfWidgetInstance[];
    static ɵfac: i0.ɵɵFactoryDeclaration<AjfDialogModal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AjfDialogModal, "ng-component", never, { "content": "content"; }, {}, never, never, false, never>;
}
export declare class AjfPaginatedListWidgetComponent extends AjfBaseWidgetComponent<AjfPaginatedListWidgetInstance> implements OnChanges, OnInit {
    get currentPage(): number;
    private _currentPage;
    get pages(): number;
    private _pages;
    get currentContent(): AjfWidgetInstance[];
    private _currentContent;
    get canGoForward(): boolean;
    private _canGoForward;
    get canGoBackward(): boolean;
    private _canGoBackward;
    constructor(cdr: ChangeDetectorRef, el: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    goToPage(direction: 'next' | 'previous'): void;
    private _updateCurrentContent;
    private _fillCurrentContent;
    static ɵfac: i0.ɵɵFactoryDeclaration<AjfPaginatedListWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AjfPaginatedListWidgetComponent, "ng-component", never, {}, {}, never, never, false, never>;
}
