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
import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { AjfFormField as AjfCoreFormField, AjfFormFieldWarningAlertResult, AjfFormRendererService } from '@ajf/core/forms';
export declare class AjfFormField extends AjfCoreFormField implements OnDestroy, OnInit {
    private _alertCtrl;
    private _searchTreshold;
    alert: HTMLIonAlertElement | null;
    readonly searchTreshold: number;
    constructor(_rendererService: AjfFormRendererService, _changeDetectionRef: ChangeDetectorRef, _alertCtrl: AlertController, _searchTreshold: number);
    showWarningAlertPrompt(messagesWarning: string[]): Observable<AjfFormFieldWarningAlertResult>;
    hasSearch(): boolean;
}
