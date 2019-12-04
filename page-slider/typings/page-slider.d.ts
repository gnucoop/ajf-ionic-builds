/**
 * @license
 * Copyright (C) 2018 Gnucoop soc. coop.
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
import { AjfPageSlider as AjfCorePageSlider } from '@ajf/core/page-slider';
import { AnimationBuilder } from '@angular/animations';
import { AfterContentInit, ChangeDetectorRef, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
export declare class AjfPageSlider extends AjfCorePageSlider implements AfterContentInit, OnDestroy {
    private _el;
    private _scrollSub;
    constructor(animationBuilder: AnimationBuilder, cdr: ChangeDetectorRef, renderer: Renderer2, _el: ElementRef);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    private _fixRippleFromRadioButton;
    private _fixToggleButtons;
}
