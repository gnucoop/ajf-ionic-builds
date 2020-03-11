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
import { AjfBaseFieldComponent, AjfFormulaFieldInstance, AjfFormRendererService } from '@ajf/core/forms';
import { BooleanInput } from '@angular/cdk/coercion';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AjfWarningAlertService } from './warning-alert-service';
export declare class AjfFormulaFieldComponent extends AjfBaseFieldComponent<AjfFormulaFieldInstance> implements OnDestroy {
    input: IonInput;
    readonly value: Observable<any>;
    private _onChangeEvt;
    private _onChangeSub;
    constructor(cdr: ChangeDetectorRef, service: AjfFormRendererService, was: AjfWarningAlertService);
    ngOnDestroy(): void;
    onChange(event: Event): void;
    static ngAcceptInputType_readonly: BooleanInput;
}
