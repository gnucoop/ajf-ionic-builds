import { AjfBaseFieldComponent, AjfFormRendererService, AJF_WARNING_ALERT_SERVICE, AjfDateValueStringPipe, AjfInputFieldComponent as AjfInputFieldComponent$1, AjfFieldWithChoicesComponent, AJF_SEARCH_ALERT_THRESHOLD, AjfTableFieldComponent as AjfTableFieldComponent$1, AjfVideoUrlFieldComponent as AjfVideoUrlFieldComponent$1, AjfFieldService as AjfFieldService$1, AjfFieldType, AjfReadOnlyFieldComponent, AjfReadOnlyTableFieldComponent, AjfReadOnlySelectFieldComponent, AjfFileFieldComponent, AjfReadOnlyFileFieldComponent, AjfImageFieldComponent, AjfReadOnlyImageFieldComponent, AjfReadOnlyVideoUrlFieldComponent, AjfFormField as AjfFormField$1, AjfFormRenderer as AjfFormRenderer$1, AjfFormsModule as AjfFormsModule$1 } from '@ajf/core/forms';
import * as i0 from '@angular/core';
import { Injectable, Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, Inject, ViewChild, EventEmitter, Optional, ComponentFactoryResolver, Input, Directive, Pipe, NgModule } from '@angular/core';
import { AlertController, IonInput, PopoverController, IonicModule } from '@ionic/angular';
import { Observable, Subscription, defer } from 'rxjs';
import { filter, switchMap, map, startWith, withLatestFrom, delayWhen } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { AjfCommonModule } from '@ajf/core/common';
import { AjfBarcodeModule } from '@ajf/ionic/barcode';
import { AjfCalendarModule } from '@ajf/ionic/calendar';
import { AjfCheckboxGroupModule } from '@ajf/ionic/checkbox-group';
import { AjfPageSliderModule } from '@ajf/ionic/page-slider';
import { AjfTimeModule } from '@ajf/ionic/time';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GicModule } from '@gic/angular';
import { TranslateModule } from '@ngx-translate/core';

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
class AjfWarningAlertService {
    constructor(_alertCtrl) {
        this._alertCtrl = _alertCtrl;
    }
    showWarningAlertPrompt(warnings) {
        return new Observable(subscriber => {
            this._alertCtrl
                .create({
                header: 'Warning',
                message: warnings.join('\n'),
                buttons: [
                    {
                        text: 'No',
                        handler: () => {
                            subscriber.next({ result: false });
                            subscriber.complete();
                        }
                    },
                    {
                        text: 'Yes',
                        handler: () => {
                            subscriber.next({ result: true });
                            subscriber.complete();
                        }
                    }
                ]
            })
                .then((alert) => {
                alert.present();
            });
        });
    }
}
AjfWarningAlertService.decorators = [
    { type: Injectable }
];
AjfWarningAlertService.ctorParameters = () => [
    { type: AlertController }
];

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
class AjfBooleanFieldComponent extends AjfBaseFieldComponent {
    constructor(cdr, service, was) {
        super(cdr, service, was);
    }
}
AjfBooleanFieldComponent.decorators = [
    { type: Component, args: [{
                template: "<ion-toggle *ngIf=\"control|async as ctrl\" [formControl]=\"ctrl!\"></ion-toggle>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["\n"]
            },] }
];
AjfBooleanFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService, decorators: [{ type: Inject, args: [AJF_WARNING_ALERT_SERVICE,] }] }
];

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
class AjfDateFieldComponent extends AjfBaseFieldComponent {
    constructor(cdr, service, was) {
        super(cdr, service, was);
    }
}
AjfDateFieldComponent.decorators = [
    { type: Component, args: [{
                template: "<ion-item>\n  <ajf-calendar\n      *ngIf=\"control|async as ctrl\"\n      selectionMode=\"day\"\n      [dateOnlyForDay]=\"true\"\n      [minDate]=\"instance.node.minDate|ajfDateValue\"\n      [maxDate]=\"instance.node.maxDate|ajfDateValue\"\n      [formControl]=\"ctrl!\"></ajf-calendar>\n</ion-item>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["\n"]
            },] }
];
AjfDateFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService, decorators: [{ type: Inject, args: [AJF_WARNING_ALERT_SERVICE,] }] }
];

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
class AjfDateInputFieldComponent extends AjfBaseFieldComponent {
    constructor(cdr, service, was, _dvs) {
        super(cdr, service, was);
        this._dvs = _dvs;
    }
    onChange(event) {
        const evt = event;
        if (this.input == null || evt.detail == null) {
            return;
        }
        const val = evt.detail.value || '';
        if (val.length > 0) {
            if ((this._minDateStr != null && val < this._minDateStr) ||
                (this._maxDateStr != null && val > this._maxDateStr)) {
                this.input.value = '';
            }
        }
    }
    _onInstanceChange() {
        this._minDateStr = this._dvs.transform(this.instance.node.minDate);
        this._maxDateStr = this._dvs.transform(this.instance.node.maxDate);
    }
}
AjfDateInputFieldComponent.decorators = [
    { type: Component, args: [{
                template: "<ion-input\n    type=\"date\"\n    *ngIf=\"control|async as ctrl\"\n    [min]=\"instance.node.minDate|ajfDateValueString\"\n    [max]=\"instance.node.maxDate|ajfDateValueString\"\n    (ionChange)=\"onChange($event)\"\n    [formControl]=\"ctrl!\"></ion-input>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["\n"]
            },] }
];
AjfDateInputFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService, decorators: [{ type: Inject, args: [AJF_WARNING_ALERT_SERVICE,] }] },
    { type: AjfDateValueStringPipe }
];
AjfDateInputFieldComponent.propDecorators = {
    input: [{ type: ViewChild, args: [IonInput, { static: false },] }]
};

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
class AjfEmptyFieldComponent extends AjfBaseFieldComponent {
    constructor(cdr, service, was) {
        super(cdr, service, was);
    }
}
AjfEmptyFieldComponent.decorators = [
    { type: Component, args: [{
                template: "<div [innerHTML]=\"instance.node.HTML\"></div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["\n"]
            },] }
];
AjfEmptyFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService, decorators: [{ type: Inject, args: [AJF_WARNING_ALERT_SERVICE,] }] }
];

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
class AjfBarcodeFieldComponent extends AjfBaseFieldComponent {
    constructor(cdr, service, was) {
        super(cdr, service, was);
    }
}
AjfBarcodeFieldComponent.decorators = [
    { type: Component, args: [{
                template: "<ajf-barcode *ngIf=\"control|async as ctrl\" [formControl]=\"ctrl!\"></ajf-barcode>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["\n"]
            },] }
];
AjfBarcodeFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService, decorators: [{ type: Inject, args: [AJF_WARNING_ALERT_SERVICE,] }] }
];

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
class AjfFormulaFieldComponent extends AjfBaseFieldComponent {
    constructor(cdr, service, was) {
        super(cdr, service, was);
        this._onChangeEvt = new EventEmitter();
        this._onChangeSub = Subscription.EMPTY;
        const control$ = this.control.pipe(filter(control => control != null));
        const controlValue$ = control$.pipe(switchMap(control => this._onChangeEvt.pipe(map(value => ({ control, value })))));
        this._onChangeSub = controlValue$.subscribe(({ control, value }) => {
            try {
                const v = parseFloat(value);
                value = v;
            }
            catch (e) {
            }
            control.setValue(value);
        });
        this.value = this.control.pipe(filter(control => control != null), switchMap(control => control.valueChanges.pipe(startWith(control.value))));
    }
    ngOnDestroy() {
        this._onChangeEvt.complete();
        this._onChangeSub.unsubscribe();
    }
    onChange(event) {
        const evt = event;
        if (evt.detail == null) {
            return;
        }
        this._onChangeEvt.emit(evt.detail.value);
    }
}
AjfFormulaFieldComponent.decorators = [
    { type: Component, args: [{
                template: "<ion-input type=\"text\" [readonly]=\"true\" [value]=\"value|async\" (ionChange)=\"onChange($event)\"></ion-input>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["\n"]
            },] }
];
AjfFormulaFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService, decorators: [{ type: Inject, args: [AJF_WARNING_ALERT_SERVICE,] }] }
];
AjfFormulaFieldComponent.propDecorators = {
    input: [{ type: ViewChild, args: [IonInput, { static: true },] }]
};

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
class AjfInputFieldComponent extends AjfInputFieldComponent$1 {
    constructor(cdr, service, was) {
        super(cdr, service, was);
    }
}
AjfInputFieldComponent.decorators = [
    { type: Component, args: [{
                template: "<ion-input *ngIf=\"control|async as ctrl\" [type]=\"type\" [formControl]=\"ctrl!\" [readonly]=\"instance|ajfIsReadonlyInputField\">\n</ion-input>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["\n"]
            },] }
];
AjfInputFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService, decorators: [{ type: Inject, args: [AJF_WARNING_ALERT_SERVICE,] }] }
];

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
class AjfMultipleChoiceFieldComponent extends AjfFieldWithChoicesComponent {
    constructor(cdr, service, was, searchThreshold) {
        super(cdr, service, was, searchThreshold);
    }
}
AjfMultipleChoiceFieldComponent.decorators = [
    { type: Component, args: [{
                template: "<ng-container *ngIf=\"!(instance|ajfExpandFieldWithChoices:searchThreshold); else expanded\">\n  <div class=\"ajf-item-container\">\n    <ng-container *ngIf=\"instance.filteredChoices as cs\">\n      <gic-select\n          #multipleChoiceSelect\n          *ngIf=\"control|async as ctrl\"\n          [multiple]=\"true\"\n          [searchBar]=\"instance|ajfSelectHasSearchBar:searchThreshold\"\n          [useVirtualScroll]=\"instance|ajfSelectUseVirtualScroll:100\"\n          [placeholder]=\"instance.node.label\"\n          [formControl]=\"ctrl!\">\n        <gic-select-option *ngFor=\"let item of cs\"\n            [value]=\"item.value\">{{ item.label|translate }}</gic-select-option>\n      </gic-select>\n    </ng-container>\n  </div>\n</ng-container>\n<ng-template #expanded>\n  <div ajf-checkbox-group\n      *ngIf=\"control|async as ctrl\"\n      [formControl]=\"ctrl!\"\n      class=\"ajf-choices-container\"\n  >\n    <ion-card *ngFor=\"let choice of instance.filteredChoices\">\n      <ajf-checkbox-group-item\n        [value]=\"choice.value\">\n        {{ choice.label | translate }}\n      </ajf-checkbox-group-item>\n    </ion-card>\n  </div>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["\n"]
            },] }
];
AjfMultipleChoiceFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService, decorators: [{ type: Inject, args: [AJF_WARNING_ALERT_SERVICE,] }] },
    { type: Number, decorators: [{ type: Optional }, { type: Inject, args: [AJF_SEARCH_ALERT_THRESHOLD,] }] }
];

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
class AjfNumberFieldComponent extends AjfInputFieldComponent$1 {
    constructor(cdr, service, was) {
        super(cdr, service, was);
        this._setValueEvt = new EventEmitter();
        this._setValueSub = Subscription.EMPTY;
        this.type = 'number';
        this.value = defer(() => this.control.pipe(filter(control => control != null), switchMap(control => control.valueChanges.pipe(startWith(control.value)))));
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this._setValueEvt.complete();
        this._setValueSub.unsubscribe();
    }
    ngOnInit() {
        super.ngOnInit();
        this._setValueSub = this._setValueEvt
            .pipe(withLatestFrom(this.control))
            .subscribe(([value, ctrl]) => {
            if (ctrl == null) {
                return;
            }
            const control = ctrl;
            control.setValue(value);
        });
    }
    setValue(value) {
        try {
            value = parseFloat(`${value}`);
            if (isNaN(value)) {
                value = null;
            }
        }
        catch (e) {
            value = null;
        }
        this._setValueEvt.emit(value);
    }
}
AjfNumberFieldComponent.decorators = [
    { type: Component, args: [{
                template: "<ion-input [ngModel]=\"value|async\" (ngModelChange)=\"setValue($event)\"></ion-input>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["\n"]
            },] }
];
AjfNumberFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService, decorators: [{ type: Inject, args: [AJF_WARNING_ALERT_SERVICE,] }] }
];

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
class AjfSingleChoiceFieldComponent extends AjfFieldWithChoicesComponent {
    constructor(cdr, service, was, searchThreshold) {
        super(cdr, service, was, searchThreshold);
    }
}
AjfSingleChoiceFieldComponent.decorators = [
    { type: Component, args: [{
                template: "<ng-container *ngIf=\"!(instance|ajfExpandFieldWithChoices:searchThreshold); else expanded\">\n  <div class=\"ajf-item-container\">\n    <ng-container *ngIf=\"instance.filteredChoices as cs\">\n      <gic-select *ngIf=\"control|async as ctrl\"\n          #singleChoiceSelect\n          [searchBar]=\"instance|ajfSelectHasSearchBar:searchThreshold\"\n          [useVirtualScroll]=\"instance|ajfSelectUseVirtualScroll:100\"\n          [placeholder]=\"instance.node.label\"\n          [formControl]=\"ctrl!\">\n        <gic-select-option *ngFor=\"let item of cs\" [value]=\"item.value\">{{ item.label|translate }}</gic-select-option>\n      </gic-select>\n    </ng-container>\n  </div>\n</ng-container>\n<ng-template #expanded>\n  <div class=\"ajf-choices-container\">\n    <ion-radio-group\n      *ngIf=\"control|async as ctrl\"\n      [formControl]=\"ctrl!\">\n      <ion-item *ngFor=\"let choice of instance.filteredChoices\">\n        <ion-label>{{ choice.label | translate }}</ion-label>\n        <ion-radio [value]=\"choice.value\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </div>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["\n"]
            },] }
];
AjfSingleChoiceFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService, decorators: [{ type: Inject, args: [AJF_WARNING_ALERT_SERVICE,] }] },
    { type: Number, decorators: [{ type: Optional }, { type: Inject, args: [AJF_SEARCH_ALERT_THRESHOLD,] }] }
];

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
class AjfTableFieldComponent extends AjfTableFieldComponent$1 {
    constructor(cdr, service, was) {
        super(cdr, service, was);
    }
}
AjfTableFieldComponent.decorators = [
    { type: Component, args: [{
                template: "<table class=\"ajf-table-field\">\n  <ng-container *ngIf=\"instance.node as node\">\n    <ng-container *ngFor=\"let columns of instance.controls; let row = index\">\n      <tr [ngClass]=\"row | ajfTableRowClass\">\n        <td>\n          <ng-container *ngIf=\"columns.length > 0 && columns[0] != null\">\n            {{ columns[0] | ajfTranslateIfString | ajfFormatIfNumber: '.0-2' }}\n          </ng-container>\n        </td>\n        <ng-container *ngIf=\"columns.length > 1\">\n          <td *ngFor=\"let c of columns[1]; let column = index\">\n            <ng-container *ngIf=\"row == 0; else controlCell\">\n              {{ c | ajfTranslateIfString | ajfFormatIfNumber: '.0-2' }}\n            </ng-container>\n            <ng-template #controlCell>\n              <ng-container *ngIf=\"c|ajfGetTableCellControl as contr\">\n                <ng-container *ngIf=\"contr != null\">\n                  <input\n                    *ngIf=\"contr.show && (node.rows[row-1][column]|ajfIsCellEditable); else plainTextCell\"\n                    (focusout)=\"contr!.show = false\"\n                    [type]=\"contr.type\"\n                    [formControl]=\"contr.control\"\n                    autofocus\n                  />\n                  <ng-template #plainTextCell>\n                    <span class=\"ajf-table-cell\" (click)=\"goToCell(row, column)\"\n                      >{{ contr.control!.value | ajfTranslateIfString |\n                      ajfFormatIfNumber: '.0-2' }}</span\n                    >\n                  </ng-template>\n                </ng-container>\n              </ng-container>\n            </ng-template>\n          </td>\n        </ng-container>\n      </tr>\n    </ng-container>\n  </ng-container>\n</table>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["table.ajf-table-field{width:100%}\n"]
            },] }
];
AjfTableFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService, decorators: [{ type: Inject, args: [AJF_WARNING_ALERT_SERVICE,] }] }
];

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
class AjfTextareaFieldComponent extends AjfBaseFieldComponent {
    constructor(cdr, service, was) {
        super(cdr, service, was);
    }
}
AjfTextareaFieldComponent.decorators = [
    { type: Component, args: [{
                template: "<ion-textarea *ngIf=\"control|async as ctrl\" [formControl]=\"ctrl!\"></ion-textarea>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["\n"]
            },] }
];
AjfTextareaFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService, decorators: [{ type: Inject, args: [AJF_WARNING_ALERT_SERVICE,] }] }
];

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
class AjfTimeFieldComponent extends AjfBaseFieldComponent {
    constructor(cdr, service, was) {
        super(cdr, service, was);
    }
}
AjfTimeFieldComponent.decorators = [
    { type: Component, args: [{
                template: "<ajf-time *ngIf=\"control|async as ctrl\" [formControl]=\"ctrl!\"></ajf-time>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["\n"]
            },] }
];
AjfTimeFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService, decorators: [{ type: Inject, args: [AJF_WARNING_ALERT_SERVICE,] }] }
];

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
class AjfVideoUrlFieldComponent extends AjfVideoUrlFieldComponent$1 {
    constructor(cdr, service, was, domSanitizer, httpClient) {
        super(cdr, service, was, domSanitizer, httpClient);
    }
}
AjfVideoUrlFieldComponent.decorators = [
    { type: Component, args: [{
                template: "<ng-container *ngIf=\"control|async as ctrl\">\n  <ion-input class=\"ajf-video-input\" [formControl]=\"ctrl!\"></ion-input>\n  <div class=\"ajf-video-thumbnail\">\n    <ng-container *ngIf=\"validUrl|async\">\n      <a target=\"_blank\" [href]=\"ctrl.value\">\n        <img *ngIf=\"videoThumbnail|async as thumb\" [src]=\"thumb\" class=\"\" alt=\"\">\n      </a>\n    </ng-container>\n  </div>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".ajf-video-input{width:100%}.ajf-video-thumbnail{margin-top:1em;width:212px;height:120px;background-color:#eee;display:flex;align-items:center;justify-content:center}.ajf-video-thumbnail img{flex:1 1 auto}\n"]
            },] }
];
AjfVideoUrlFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService, decorators: [{ type: Inject, args: [AJF_WARNING_ALERT_SERVICE,] }] },
    { type: DomSanitizer },
    { type: HttpClient }
];

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
class AjfFieldService extends AjfFieldService$1 {
    constructor() {
        super();
        this.componentsMap[AjfFieldType.String] = {
            component: AjfInputFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent
        };
        this.componentsMap[AjfFieldType.Text] = {
            component: AjfTextareaFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent
        };
        this.componentsMap[AjfFieldType.Number] = {
            component: AjfNumberFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent
        };
        this.componentsMap[AjfFieldType.Boolean] = {
            component: AjfBooleanFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent
        };
        this.componentsMap[AjfFieldType.Formula] = {
            component: AjfFormulaFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent
        };
        this.componentsMap[AjfFieldType.Date] = {
            component: AjfDateFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent
        };
        this.componentsMap[AjfFieldType.DateInput] = {
            component: AjfDateInputFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent
        };
        this.componentsMap[AjfFieldType.Table] = {
            component: AjfTableFieldComponent,
            readOnlyComponent: AjfReadOnlyTableFieldComponent
        };
        this.componentsMap[AjfFieldType.Empty] = {
            component: AjfEmptyFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent
        };
        this.componentsMap[AjfFieldType.SingleChoice] = {
            component: AjfSingleChoiceFieldComponent,
            readOnlyComponent: AjfReadOnlySelectFieldComponent
        };
        this.componentsMap[AjfFieldType.MultipleChoice] = {
            component: AjfMultipleChoiceFieldComponent,
            readOnlyComponent: AjfReadOnlySelectFieldComponent
        };
        this.componentsMap[AjfFieldType.Time] = {
            component: AjfTimeFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent
        };
        this.componentsMap[AjfFieldType.Barcode] = {
            component: AjfBarcodeFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent
        };
        this.componentsMap[AjfFieldType.File] = {
            component: AjfFileFieldComponent,
            readOnlyComponent: AjfReadOnlyFileFieldComponent
        };
        this.componentsMap[AjfFieldType.Image] = {
            component: AjfImageFieldComponent,
            readOnlyComponent: AjfReadOnlyImageFieldComponent
        };
        this.componentsMap[AjfFieldType.VideoUrl] = {
            component: AjfVideoUrlFieldComponent,
            readOnlyComponent: AjfReadOnlyVideoUrlFieldComponent
        };
    }
}
AjfFieldService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AjfFieldService_Factory() { return new AjfFieldService(); }, token: AjfFieldService, providedIn: "root" });
AjfFieldService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
AjfFieldService.ctorParameters = () => [];

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
class AjfFormField extends AjfFormField$1 {
    constructor(cdr, cfr, fieldService) {
        super(cdr, cfr);
        this.componentsMap = fieldService.componentsMap;
    }
}
AjfFormField.decorators = [
    { type: Component, args: [{
                selector: 'ajf-field,ajf-form-field',
                template: "<div\n    [ngClass]=\"'ajf-field-' + (instance|ajfNodeCompleteName)\"\n    [class.ajf-validated]=\"instance.validationResults|ajfFieldIsValid\"\n>\n  <ng-template ajf-field-host></ng-template>\n</div>\n<ng-container *ngIf=\"instance.node.attachments\">\n  <ng-container *ngFor=\"let attachment of instance.node.attachments\">\n    <a [href]=\"attachment.value\" target=\"_blank\">{{attachment.label}}</a>\n  </ng-container>\n</ng-container>\n<ng-container *ngIf=\"!readonly && instance.validationResults\">\n  <div class=\"ajf-errors\">\n    <ng-container *ngFor=\"let res of instance.validationResults\">\n      <div class=\"error\" *ngIf=\"!res.result\">\n        {{ res.error | translate }}\n      </div>\n    </ng-container>\n  </div>\n</ng-container>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["ajf-field ion-select{position:relative}ajf-field ion-input,ajf-field ion-textarea{border:dashed 2px #eee}ajf-field .ajf-choices-container{flex-direction:row;align-items:stretch;flex-wrap:wrap;display:flex}ajf-field .ajf-choices-container>ion-radio-group{display:flex;flex-wrap:wrap}ajf-field .ajf-choices-container>ion-radio-group ion-item{--ion-item-border-color: transparent}ajf-field .ajf-choices-container>ion-radio-group ion-item ion-label{margin-right:10px}ajf-field .ajf-choices-container>ion-card{margin-top:0;width:33%;display:flex;font-size:13px;flex-wrap:wrap;flex-basis:21% !important;flex-shrink:3 !important}ajf-field .ajf-choices-container>ion-card>ajf-checkbox-group-item{width:100%;display:flex;flex-direction:column;align-items:stretch;justify-content:center}ajf-field .ajf-choices-container>ion-card>ion-item{font-size:13px;flex:1 0 auto;flex-shrink:3 !important;flex-basis:21% !important;margin:0 10px}ajf-field .ajf-item-container{position:relative}ajf-field .ajf-errors{font-style:italic;padding:5px}ajf-field tr.ajf-row-odd{background-color:gray}ajf-field .ajf-table-container{overflow-x:auto}ajf-field .ajf-table-container table{width:100%}\n"]
            },] }
];
AjfFormField.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ComponentFactoryResolver },
    { type: AjfFieldService }
];

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
class AjfPopover {
}
AjfPopover.decorators = [
    { type: Component, args: [{
                selector: 'ajf-ion-popover',
                template: `<span>{{hint}}</span>`,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
AjfPopover.propDecorators = {
    hint: [{ type: Input, args: ['hint',] }]
};

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
/**
 * This class will define an ajf form renderer
 * @implements : AfterViewInit
 * @implements : AfterViewInit
 */
class AjfFormRenderer extends AjfFormRenderer$1 {
    constructor(rendererService, cdr, popoverController) {
        super(rendererService, cdr);
        this.popoverController = popoverController;
        this.topBar = false;
        this._longSlide = false;
        this._viewInitEvt = new EventEmitter();
        this._scrollFinishSub = Subscription.EMPTY;
        this._scrollFinishSub = this._viewInitEvt
            .pipe(delayWhen(() => this.formGroup), switchMap(() => this.formSlider.pageScrollFinish))
            .subscribe(_ => this._updateLongSlide());
    }
    get longSlide() {
        return this._longSlide;
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this._viewInitEvt.emit();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this._scrollFinishSub.unsubscribe();
    }
    openPopover(ev, hint) {
        const popover = this.popoverController.create({
            component: AjfPopover,
            cssClass: 'ajf-popover',
            translucent: true,
            event: ev,
            componentProps: { hint }
        });
        popover.then((pop) => pop.present());
    }
    _updateLongSlide() {
        const longSlide = this.formSlider.isCurrentPageLong();
        if (longSlide !== this._longSlide) {
            this._longSlide = longSlide;
            this._changeDetectorRef.markForCheck();
        }
    }
}
AjfFormRenderer.decorators = [
    { type: Component, args: [{
                selector: 'ajf-form',
                template: "<ng-container *ngIf=\"formGroup|async as currentFormGroup\">\n  <form novalidate [formGroup]=\"currentFormGroup!\">\n    <div class=\"ajf-form-container\">\n      <ion-toolbar *ngIf=\"!hideTopToolbar && topBar\" class=\"ajf-btn-strip\">\n          <div class=\"ajf-topbar-buttons\">\n            <ng-container *ngFor=\"let slideInstance of (slides|async)\">\n              <ion-button class=\"ajf-topbar-button\"\n              *ngIf=\"slideInstance.node != null && slideInstance.node.label != null && slideInstance.node.label.length > 0\"\n              (click)=\"scrollToSlide(slideInstance)\">{{slideInstance.node.label | translate}}</ion-button>\n            </ng-container>\n          </div>\n      </ion-toolbar>\n      <ion-toolbar *ngIf=\"!hideTopToolbar\">\n        {{ title | translate }}\n        <ion-buttons slot=\"end\">\n          <!-- this content projection  allow to add buttons on toolbar-->\n          <ng-content select=\"[ajfFormTopToolbarButtons]\"></ng-content>\n          <!-- apply a default save button only when ajfFormSaveButton is empty-->\n          <span *ngIf=\"!saveDisabled\" (click)=\"onSave($event)\">\n            <span #saveButton><ng-content select=\"[ajfFormSaveButton]\"></ng-content></span> \n            <ion-button *ngIf=\"saveButton != null  && saveButton.childNodes != null && saveButton.childNodes.length == 0\">{{ 'Save' | translate }}</ion-button>\n          </span>\n        </ion-buttons>\n      </ion-toolbar>\n      <div class=\"ajf-slider-container\">\n        <ajf-page-slider (orientationChange)=\"orientationChangeHandler($event)\"\n            [hideNavigationButtons]=\"hideNavigationButtons\"\n            [fixedOrientation]=\"fixedOrientation\"\n            [orientation]=\"orientation\"\n            #formSlider>\n          <ng-container *ngIf=\"(slides|async) as curSlides\">\n            <ng-container *ngIf=\"curSlides && curSlides!.length > 0 && hasStartMessage\">\n              <ajf-page-slider-item>\n                <div ajfFormPage class=\"ajf-form-page\">\n                  <ion-card>\n                    <ion-card-header>\n                      <div class=\"ajf-page-slider-item-header\">\n                        <h2>\n                          <span class=\"ajf-form-header-number\">\n                            1  &rarr;\n                          </span>\n                          <span class=\"ajf-title\">\n                            <ng-content select=\"[ajfFormStartMessageTitle]\"></ng-content>\n                          </span>\n                        </h2>\n                      </div>\n                    </ion-card-header>\n                    <ion-card-content>\n                      <ng-content select=\"[ajfFormStartMessage]\"></ng-content>\n                    </ion-card-content>\n                  </ion-card>\n                </div>\n              </ajf-page-slider-item>\n            </ng-container>\n            <ng-container *ngFor=\"let slideInstance of curSlides; trackBy: trackNodeById\">\n              <ng-container *ngIf=\"(!(slideInstance|ajfIsRepeatingSlideInstance)) && slideInstance.visible\">\n                <ajf-page-slider-item>\n                  <div ajfFormPage class=\"ajf-form-page\">\n                    <ion-card>\n                      <ion-card-header>\n                        <div class=\"ajf-page-slider-item-header\">\n                          <h2>\n                            <span class=\"ajf-form-header-number\">{{ slideInstance.position + (hasStartMessage | ajfBoolToInt) }} &rarr;</span>\n                            <span class=\"ajf-title\">{{ slideInstance.node.label | translate}}</span>\n                          </h2>\n                          <ion-icon color=\"danger\" name=\"warning\" *ngIf=\"!slideInstance.valid\"></ion-icon>\n                          <ion-icon color=\"secondary\" name=\"checkmark\" *ngIf=\"slideInstance.valid\"></ion-icon>\n                        </div>\n                      </ion-card-header>\n                      <ion-card-content>\n                        <ng-container *ngFor=\"let fieldInstance of slideInstance.flatNodes; trackBy: trackNodeById\">\n                          <div [ngClass]=\"'ajf-' + (fieldInstance|ajfAsFieldInstance).node.size\" class=\"ajf-field-entry\"\n                              *ngIf=\"fieldInstance.visible\">\n                              <i [class]=\"(fieldInstance|ajfAsFieldInstance).node.fieldType | ajfFieldIcon\" item-right></i>\n                            <p>{{ (fieldInstance|ajfAsFieldInstance).node.description }}</p>\n                            <ion-label [innerHTML]=\"fieldInstance.node.label | translate\"></ion-label>\n                            <ion-icon *ngIf=\"(fieldInstance|ajfAsFieldInstance).node?.hint as hint\" \n                            [name]=\"(fieldInstance|ajfAsFieldInstance).node?.hintIcon || 'help-outline'\" \n                              (click)=\"openPopover($event, hint)\"></ion-icon>\n                            <ajf-field [instance]=\"fieldInstance|ajfAsFieldInstance\" [readonly]=\"readonly\">\n                            </ajf-field>\n                          </div>\n                        </ng-container>\n                      </ion-card-content>\n                    </ion-card>\n                  </div>\n                </ajf-page-slider-item>\n              </ng-container>\n              <ng-container *ngIf=\"(slideInstance|ajfIsRepeatingSlideInstance) && slideInstance.visible\">\n                <ajf-page-slider-item *ngFor=\"let curRep of ((slideInstance|ajfAsRepeatingSlideInstance).reps|ajfRange); let idx = index; let lastSlide = last\">\n                  <div ajfFormPage class=\"ajf-form-page\">\n                    <ion-card>\n                      <ion-card-header>\n                        <div class=\"ajf-page-slider-item-header\">\n                          <h2>\n                            <span class=\"ajf-form-header-number\">{{ slideInstance.position|ajfIncrement:idx }} &rarr;</span>\n                            <span class=\"ajf-title\">{{ slideInstance.node.label | translate }}</span>\n                          </h2>\n                          <ion-icon color=\"danger\" name=\"ajf-warning\" *ngIf=\"!(slideInstance|ajfValidSlide:idx)\"></ion-icon>\n                          <ion-icon color=\"secondary\" name=\"checkmark\" *ngIf=\"(slideInstance|ajfValidSlide:idx)\"></ion-icon>\n                        </div>\n                        <div *ngIf=\"lastSlide && !readonly\" class=\"ajf-group-actions\">\n                          <ion-fab-button size=\"small\" (click)=\"addGroup(slideInstance)\" [disabled]=\"!(slideInstance|ajfAsRepeatingSlideInstance).canAdd || ((slideInstance|ajfAsRepeatingSlideInstance).node?.disableRemoval && !slideInstance.valid)\">\n                            <ion-icon name=\"add\"></ion-icon>\n                          </ion-fab-button>\n                          <ion-fab-button size=\"small\" (click)=\"removeGroup(slideInstance)\" [disabled]=\"!(slideInstance|ajfAsRepeatingSlideInstance).canRemove || (slideInstance|ajfAsRepeatingSlideInstance).node?.disableRemoval\">\n                            <ion-icon name=\"remove\"></ion-icon>\n                          </ion-fab-button>\n                        </div>\n                      </ion-card-header>\n                      <ion-card-content>\n                        <ng-container *ngFor=\"let fieldInstance of slideInstance.slideNodes[idx]; trackBy: trackNodeById\">\n                          <div [ngClass]=\"'ajf-' + (fieldInstance|ajfAsFieldInstance).node.size\" class=\"ajf-field-entry\"\n                              *ngIf=\"fieldInstance.visible\">\n                            <i [class]=\"(fieldInstance|ajfAsFieldInstance).node.fieldType | ajfFieldIcon\" item-right></i>\n                            <p>{{ (fieldInstance|ajfAsFieldInstance).node.description }}</p>\n                            <ion-label [innerHTML]=\"fieldInstance.node.label | translate\"></ion-label>\n                            <ajf-field [instance]=\"fieldInstance|ajfAsFieldInstance\" \n                              [readonly]=\"readonly || (!lastSlide && (slideInstance|ajfAsRepeatingSlideInstance).node?.disableRemoval)\"></ajf-field>\n                          </div>\n                        </ng-container>\n                        <div *ngIf=\"lastSlide && longSlide\" class=\"ajf-group-actions ajf-group-actions-bottom\">\n                          <ion-fab-button size=\"small\" (click)=\"addGroup(slideInstance)\" [disabled]=\"!(slideInstance|ajfAsRepeatingSlideInstance).canAdd\" mat-mini-fab>\n                            <ion-icon name=\"add\"></ion-icon>\n                          </ion-fab-button>\n                          <ion-fab-button size=\"small\" (click)=\"removeGroup(slideInstance)\" [disabled]=\"!(slideInstance|ajfAsRepeatingSlideInstance).canRemove\" mat-mini-fab>\n                            <ion-icon name=\"remove\"></ion-icon>\n                          </ion-fab-button>\n                        </div>\n                      </ion-card-content>\n                    </ion-card>\n                  </div>\n                </ajf-page-slider-item>\n              </ng-container>\n            </ng-container>\n            <ng-container *ngIf=\"curSlides && curSlides!.length > 0 && hasEndMessage\">\n              <ajf-page-slider-item>\n                <div ajfFormPage class=\"ajf-form-page\">\n                  <ion-card>\n                    <ion-card-header>\n                      <div class=\"ajf-page-slider-item-header\">\n                        <h2>\n                          <span *ngIf=\"(slidesNum|async) as snum\" class=\"ajf-form-header-number\">\n                            {{ snum! + (hasStartMessage | ajfBoolToInt) + 1 }} &rarr;\n                          </span>\n                          <span class=\"ajf-title\">\n                            <ng-content select=\"[ajfFormEndMessageTitle]\"></ng-content>\n                          </span>\n                        </h2>\n                      </div>\n                    </ion-card-header>\n                    <ion-card-content>\n                      <ng-content select=\"[ajfFormEndMessage]\"></ng-content>\n                    </ion-card-content>\n                  </ion-card>\n                </div>\n              </ajf-page-slider-item>\n            </ng-container>\n          </ng-container>\n          <div ajfPageSliderBar *ngIf=\"!hideBottomToolbar\">\n            <div class=\"ajf-left-bar\">\n              <ion-buttons class=\"ajf-errors\" *ngIf=\"((errors | async) || 0) > 0\">\n                <ion-button (click)=\"goToPrevError()\" color=\"danger\">\n                  <ion-icon name=\"arrow-up\"></ion-icon>\n                </ion-button>\n                <ion-button (click)=\"goToNextError()\" color=\"danger\">\n                  <ion-icon name=\"arrow-down\"></ion-icon>\n                </ion-button>\n              </ion-buttons>\n              <div class=\"ajf-info-box ajf-error\">\n                <div class=\"ajf-title\" translate>\n                  Errors\n                </div>\n                <div class=\"ajf-content\">\n                  {{ errors | async }} / {{ slidesNum|async }}\n                </div>\n              </div>\n            </div>\n          </div>\n        </ajf-page-slider>\n      </div>\n    </div>\n  </form>\n</ng-container>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["ajf-form{display:block;position:relative}ajf-form form{display:block;position:absolute;top:0;right:0;bottom:0;left:0}ajf-form form .ajf-form-container{display:flex;flex-direction:column;height:100%}ajf-form form .ajf-form-container .ajf-topbar-buttons{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-content:stretch;align-items:flex-start;overflow-x:auto}ajf-form form .ajf-form-container .ajf-topbar-buttons ion-button{flex:0 1 auto;align-self:auto}ajf-form form .ajf-form-container ion-toolbar{flex:0 0 auto;height:56px}ajf-form form .ajf-form-container ion-toolbar.ajf-hidden{opacity:0}ajf-form form .ajf-form-container>.ajf-slider-container{flex:1 1 auto;position:relative;height:calc(100% - 56px)}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider{height:100%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content{padding:16px}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page{flex:1;max-height:100%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card{flex:1;margin-bottom:2em}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-header{overflow:visible !important}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-header .ajf-group-actions{position:absolute;left:calc(100vw - 160px - 6em);width:160px;margin-top:-2em;padding:15px;z-index:10;white-space:nowrap;overflow:visible !important}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-header .ajf-group-actions ion-fab-button{display:inline-block;overflow:visible !important}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content{display:flex;flex-wrap:wrap;flex-direction:row;align-content:flex-start;position:relative}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content .ajf-group-actions-bottom{width:100%;text-align:right;overflow:visible !important}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content .ajf-group-actions-bottom ion-fab-button{overflow:visible !important;display:inline-block}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry{flex:1 0 auto;padding-left:10px;padding-right:10px;width:100%;box-sizing:border-box}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-normal{width:100%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-small{width:50%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-smaller{width:33%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-tiny{width:25%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-mini{width:20%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider .ajf-page-slider-item-header{display:flex;align-items:center;width:100%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider .ajf-page-slider-item-header>h2{flex:1}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider .ajf-page-slider-item-header>h2>.ajf-form-header-number{margin-right:.5em}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider .ajf-page-slider-item-header>h2>.ajf-title{display:inline-block;margin-right:40px;white-space:normal;vertical-align:top}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar{display:flex;align-items:flex-start;flex-direction:row;position:absolute;bottom:0}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar ion-buttons.ajf-errors{order:1;color:red}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar .ajf-info-box{height:40px;padding:4px}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar .ajf-info-box>div{height:16px;line-height:16px}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar .ajf-info-box>div.ajf-content{font-weight:bold}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar .ajf-info-box.ajf-error{order:2;color:red}ajf-form form .ajf-form-container .ajf-spacer{flex:1 0 auto}\n"]
            },] }
];
AjfFormRenderer.ctorParameters = () => [
    { type: AjfFormRendererService },
    { type: ChangeDetectorRef },
    { type: PopoverController }
];
AjfFormRenderer.propDecorators = {
    topBar: [{ type: Input }]
};

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
class AjfFormPage {
}
AjfFormPage.decorators = [
    { type: Directive, args: [{ selector: '[ajfFormPage]' },] }
];

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
class AjfSelectHasSearchBarPipe {
    transform(instance, searchThreshold) {
        return instance.filteredChoices && instance.filteredChoices.length > searchThreshold;
    }
}
AjfSelectHasSearchBarPipe.decorators = [
    { type: Pipe, args: [{ name: 'ajfSelectHasSearchBar' },] }
];

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
class AjfSelectUseVirtualScroll {
    transform(instance, vsThreshold) {
        return instance.filteredChoices && instance.filteredChoices.length > vsThreshold;
    }
}
AjfSelectUseVirtualScroll.decorators = [
    { type: Pipe, args: [{ name: 'ajfSelectUseVirtualScroll' },] }
];

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
class AjfFormsModule {
    static forRoot() {
        return {
            ngModule: AjfFormsModule,
            providers: [
                AjfFieldService,
            ],
        };
    }
}
AjfFormsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    AjfBarcodeModule,
                    AjfCalendarModule,
                    AjfCheckboxGroupModule,
                    AjfCommonModule,
                    AjfFormsModule$1,
                    AjfPageSliderModule,
                    AjfTimeModule,
                    CommonModule,
                    FormsModule,
                    GicModule,
                    IonicModule,
                    ReactiveFormsModule,
                    TranslateModule,
                ],
                declarations: [
                    AjfBarcodeFieldComponent,
                    AjfBooleanFieldComponent,
                    AjfDateFieldComponent,
                    AjfDateInputFieldComponent,
                    AjfEmptyFieldComponent,
                    AjfFormField,
                    AjfFormPage,
                    AjfFormRenderer,
                    AjfFormulaFieldComponent,
                    AjfInputFieldComponent,
                    AjfMultipleChoiceFieldComponent,
                    AjfNumberFieldComponent,
                    AjfPopover,
                    AjfSelectHasSearchBarPipe,
                    AjfSelectUseVirtualScroll,
                    AjfSingleChoiceFieldComponent,
                    AjfTableFieldComponent,
                    AjfTextareaFieldComponent,
                    AjfTimeFieldComponent,
                    AjfVideoUrlFieldComponent,
                ],
                entryComponents: [
                    AjfBarcodeFieldComponent,
                    AjfBooleanFieldComponent,
                    AjfDateFieldComponent,
                    AjfDateInputFieldComponent,
                    AjfEmptyFieldComponent,
                    AjfFormulaFieldComponent,
                    AjfInputFieldComponent,
                    AjfMultipleChoiceFieldComponent,
                    AjfNumberFieldComponent,
                    AjfPopover,
                    AjfSingleChoiceFieldComponent,
                    AjfTableFieldComponent,
                    AjfTextareaFieldComponent,
                    AjfTimeFieldComponent,
                    AjfVideoUrlFieldComponent,
                ],
                exports: [
                    AjfFormField,
                    AjfFormRenderer,
                ],
                providers: [
                    AjfFieldService,
                    { provide: AJF_WARNING_ALERT_SERVICE, useClass: AjfWarningAlertService },
                ],
            },] }
];

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

/**
 * Generated bundle index. Do not edit.
 */

export { AjfBooleanFieldComponent, AjfDateFieldComponent, AjfDateInputFieldComponent, AjfEmptyFieldComponent, AjfFieldService, AjfFormField, AjfFormRenderer, AjfFormsModule, AjfInputFieldComponent, AjfMultipleChoiceFieldComponent, AjfNumberFieldComponent, AjfSingleChoiceFieldComponent, AjfTableFieldComponent, AjfTextareaFieldComponent, AjfTimeFieldComponent, AjfWarningAlertService, AjfBarcodeFieldComponent as ɵgc_ajf_src_ionic_forms_forms_a, AjfFormPage as ɵgc_ajf_src_ionic_forms_forms_b, AjfFormulaFieldComponent as ɵgc_ajf_src_ionic_forms_forms_c, AjfPopover as ɵgc_ajf_src_ionic_forms_forms_d, AjfSelectHasSearchBarPipe as ɵgc_ajf_src_ionic_forms_forms_e, AjfSelectUseVirtualScroll as ɵgc_ajf_src_ionic_forms_forms_f, AjfVideoUrlFieldComponent as ɵgc_ajf_src_ionic_forms_forms_g };
//# sourceMappingURL=forms.js.map
