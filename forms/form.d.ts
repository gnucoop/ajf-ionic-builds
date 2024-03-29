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
import { AjfFormRenderer as CoreFormRenderer, AjfFormRendererService } from '@ajf/core/forms';
import { BooleanInput } from '@angular/cdk/coercion';
import { AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import * as i0 from "@angular/core";
export declare class AjfFormRenderer extends CoreFormRenderer implements AfterViewInit, OnDestroy {
    popoverController: PopoverController;
    topBar: boolean;
    private _longSlide;
    get longSlide(): boolean;
    private _viewInitEvt;
    private _scrollFinishSub;
    constructor(rendererService: AjfFormRendererService, cdr: ChangeDetectorRef, popoverController: PopoverController);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    openPopover(ev: any, hint: string): void;
    private _updateLongSlide;
    static ngAcceptInputType_fixedOrientation: BooleanInput;
    static ngAcceptInputType_hasEndMessage: BooleanInput;
    static ngAcceptInputType_hasStartMessage: BooleanInput;
    static ngAcceptInputType_hideBottomToolbar: BooleanInput;
    static ngAcceptInputType_hideNavigationButtons: BooleanInput;
    static ngAcceptInputType_hideTopToolbar: BooleanInput;
    static ngAcceptInputType_saveDisabled: BooleanInput;
    static ngAcceptInputType_readonly: BooleanInput;
    static ɵfac: i0.ɵɵFactoryDeclaration<AjfFormRenderer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AjfFormRenderer, "ajf-form", never, { "topBar": "topBar"; }, {}, never, ["[ajfFormTopToolbarButtons]", "[ajfFormSaveButton]", "[ajfFormStartMessageTitle]", "[ajfFormStartMessage]", "[ajfFormEndMessageTitle]", "[ajfFormEndMessage]"], false, never>;
}
