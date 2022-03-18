import * as i1 from '@ajf/core/forms';
import { AjfBaseFieldComponent, AJF_WARNING_ALERT_SERVICE, AjfInputFieldComponent as AjfInputFieldComponent$1, AjfFieldWithChoicesComponent, AJF_SEARCH_ALERT_THRESHOLD, AjfTableFieldComponent as AjfTableFieldComponent$1, AjfVideoUrlFieldComponent as AjfVideoUrlFieldComponent$1, AjfFieldService as AjfFieldService$1, AjfFieldType, AjfReadOnlyFieldComponent, AjfReadOnlyTableFieldComponent, AjfReadOnlySelectFieldComponent, AjfFileFieldComponent, AjfReadOnlyFileFieldComponent, AjfImageFieldComponent, AjfReadOnlyImageFieldComponent, AjfReadOnlyVideoUrlFieldComponent, AjfFormField as AjfFormField$1, AjfFormRenderer as AjfFormRenderer$1, AjfFormsModule as AjfFormsModule$1 } from '@ajf/core/forms';
import * as i0 from '@angular/core';
import { Injectable, Component, ChangeDetectionStrategy, ViewEncapsulation, Inject, ViewChild, EventEmitter, Pipe, Optional, Input, Directive, NgModule } from '@angular/core';
import * as i2 from '@ionic/angular';
import { IonInput, IonicModule } from '@ionic/angular';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i4 from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, Subscription, defer } from 'rxjs';
import * as i3$1 from '@ajf/ionic/calendar';
import { AjfCalendarModule } from '@ajf/ionic/calendar';
import * as i2$1 from '@ajf/ionic/barcode';
import { AjfBarcodeModule } from '@ajf/ionic/barcode';
import { filter, switchMap, map, startWith, withLatestFrom, delayWhen } from 'rxjs/operators';
import * as i2$2 from '@gic/angular';
import { GicModule } from '@gic/angular';
import * as i4$1 from '@ajf/ionic/checkbox-group';
import { AjfCheckboxGroupModule } from '@ajf/ionic/checkbox-group';
import * as i7 from '@ajf/core/checkbox-group';
import * as i10 from '@ngneat/transloco';
import { AjfRange } from '@ajf/core/range';
import * as i4$2 from '@ajf/core/common';
import { AjfCommonModule } from '@ajf/core/common';
import * as i2$3 from '@ajf/ionic/time';
import { AjfTimeModule } from '@ajf/ionic/time';
import * as i2$4 from '@angular/platform-browser';
import * as i3$2 from '@angular/common/http';
import * as i3$3 from '@ajf/ionic/page-slider';
import { AjfPageSliderModule } from '@ajf/ionic/page-slider';
import * as i4$3 from '@ajf/core/page-slider';
import { AjfTranslocoModule } from '@ajf/core/transloco';

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
                        },
                    },
                    {
                        text: 'Yes',
                        handler: () => {
                            subscriber.next({ result: true });
                            subscriber.complete();
                        },
                    },
                ],
            })
                .then(alert => {
                alert.present();
            });
        });
    }
}
AjfWarningAlertService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfWarningAlertService, deps: [{ token: i2.AlertController }], target: i0.ɵɵFactoryTarget.Injectable });
AjfWarningAlertService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfWarningAlertService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfWarningAlertService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i2.AlertController }]; } });

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
AjfBooleanFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfBooleanFieldComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.AjfFormRendererService }, { token: AJF_WARNING_ALERT_SERVICE }], target: i0.ɵɵFactoryTarget.Component });
AjfBooleanFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.5", type: AjfBooleanFieldComponent, selector: "ng-component", usesInheritance: true, ngImport: i0, template: "<ion-toggle *ngIf=\"control|async as ctrl\" [formControl]=\"ctrl!\"></ion-toggle>\n", styles: [""], components: [{ type: i2.IonToggle, selector: "ion-toggle", inputs: ["checked", "color", "disabled", "mode", "name", "value"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.BooleanValueAccessor, selector: "ion-checkbox,ion-toggle" }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], pipes: { "async": i3.AsyncPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfBooleanFieldComponent, decorators: [{
            type: Component,
            args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ion-toggle *ngIf=\"control|async as ctrl\" [formControl]=\"ctrl!\"></ion-toggle>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.AjfFormRendererService }, { type: AjfWarningAlertService, decorators: [{
                    type: Inject,
                    args: [AJF_WARNING_ALERT_SERVICE]
                }] }]; } });

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
AjfDateFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfDateFieldComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.AjfFormRendererService }, { token: AJF_WARNING_ALERT_SERVICE }], target: i0.ɵɵFactoryTarget.Component });
AjfDateFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.5", type: AjfDateFieldComponent, selector: "ng-component", usesInheritance: true, ngImport: i0, template: "<ion-item>\n  <ajf-calendar\n      *ngIf=\"control|async as ctrl\"\n      selectionMode=\"day\"\n      [dateOnlyForDay]=\"true\"\n      [minDate]=\"instance!.node.minDate|ajfDateValue\"\n      [maxDate]=\"instance!.node.maxDate|ajfDateValue\"\n      [formControl]=\"ctrl!\"></ajf-calendar>\n</ion-item>\n", styles: [""], components: [{ type: i2.IonItem, selector: "ion-item", inputs: ["button", "color", "detail", "detailIcon", "disabled", "download", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] }, { type: i3$1.AjfCalendarComponent, selector: "ajf-calendar" }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], pipes: { "ajfDateValue": i1.AjfDateValuePipe, "async": i3.AsyncPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfDateFieldComponent, decorators: [{
            type: Component,
            args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ion-item>\n  <ajf-calendar\n      *ngIf=\"control|async as ctrl\"\n      selectionMode=\"day\"\n      [dateOnlyForDay]=\"true\"\n      [minDate]=\"instance!.node.minDate|ajfDateValue\"\n      [maxDate]=\"instance!.node.maxDate|ajfDateValue\"\n      [formControl]=\"ctrl!\"></ajf-calendar>\n</ion-item>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.AjfFormRendererService }, { type: AjfWarningAlertService, decorators: [{
                    type: Inject,
                    args: [AJF_WARNING_ALERT_SERVICE]
                }] }]; } });

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
        if (this.instance == null) {
            return;
        }
        this._minDateStr = this._dvs.transform(this.instance.node.minDate);
        this._maxDateStr = this._dvs.transform(this.instance.node.maxDate);
    }
}
AjfDateInputFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfDateInputFieldComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.AjfFormRendererService }, { token: AJF_WARNING_ALERT_SERVICE }, { token: i1.AjfDateValueStringPipe }], target: i0.ɵɵFactoryTarget.Component });
AjfDateInputFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.5", type: AjfDateInputFieldComponent, selector: "ng-component", viewQueries: [{ propertyName: "input", first: true, predicate: IonInput, descendants: true }], usesInheritance: true, ngImport: i0, template: "<ion-input\n    type=\"date\"\n    *ngIf=\"control|async as ctrl\"\n    [attr.aria-label]=\"instance!|ajfNodeCompleteName\"\n    [min]=\"instance!.node.minDate|ajfDateValueString\"\n    [max]=\"instance!.node.maxDate|ajfDateValueString\"\n    (ionChange)=\"onChange($event)\"\n    [formControl]=\"ctrl!\"></ion-input>\n", styles: [""], components: [{ type: i2.IonInput, selector: "ion-input", inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "spellcheck", "step", "type", "value"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.TextValueAccessor, selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar" }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], pipes: { "ajfNodeCompleteName": i1.AjfNodeCompleteNamePipe, "ajfDateValueString": i1.AjfDateValueStringPipe, "async": i3.AsyncPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfDateInputFieldComponent, decorators: [{
            type: Component,
            args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ion-input\n    type=\"date\"\n    *ngIf=\"control|async as ctrl\"\n    [attr.aria-label]=\"instance!|ajfNodeCompleteName\"\n    [min]=\"instance!.node.minDate|ajfDateValueString\"\n    [max]=\"instance!.node.maxDate|ajfDateValueString\"\n    (ionChange)=\"onChange($event)\"\n    [formControl]=\"ctrl!\"></ion-input>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.AjfFormRendererService }, { type: AjfWarningAlertService, decorators: [{
                    type: Inject,
                    args: [AJF_WARNING_ALERT_SERVICE]
                }] }, { type: i1.AjfDateValueStringPipe }]; }, propDecorators: { input: [{
                type: ViewChild,
                args: [IonInput, { static: false }]
            }] } });

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
AjfEmptyFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfEmptyFieldComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.AjfFormRendererService }, { token: AJF_WARNING_ALERT_SERVICE }], target: i0.ɵɵFactoryTarget.Component });
AjfEmptyFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.5", type: AjfEmptyFieldComponent, selector: "ng-component", usesInheritance: true, ngImport: i0, template: "<div *ngIf=\"instance\" [innerHTML]=\"instance.node.HTML\"></div>\n", styles: [""], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfEmptyFieldComponent, decorators: [{
            type: Component,
            args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div *ngIf=\"instance\" [innerHTML]=\"instance.node.HTML\"></div>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.AjfFormRendererService }, { type: AjfWarningAlertService, decorators: [{
                    type: Inject,
                    args: [AJF_WARNING_ALERT_SERVICE]
                }] }]; } });

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
AjfBarcodeFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfBarcodeFieldComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.AjfFormRendererService }, { token: AJF_WARNING_ALERT_SERVICE }], target: i0.ɵɵFactoryTarget.Component });
AjfBarcodeFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.5", type: AjfBarcodeFieldComponent, selector: "ng-component", usesInheritance: true, ngImport: i0, template: "<ajf-barcode *ngIf=\"control|async as ctrl\" [formControl]=\"ctrl!\"></ajf-barcode>\n", styles: [""], components: [{ type: i2$1.AjfBarcodeComponent, selector: "ajf-barcode" }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], pipes: { "async": i3.AsyncPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfBarcodeFieldComponent, decorators: [{
            type: Component,
            args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ajf-barcode *ngIf=\"control|async as ctrl\" [formControl]=\"ctrl!\"></ajf-barcode>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.AjfFormRendererService }, { type: AjfWarningAlertService, decorators: [{
                    type: Inject,
                    args: [AJF_WARNING_ALERT_SERVICE]
                }] }]; } });

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
            catch (e) { }
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
AjfFormulaFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfFormulaFieldComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.AjfFormRendererService }, { token: AJF_WARNING_ALERT_SERVICE }], target: i0.ɵɵFactoryTarget.Component });
AjfFormulaFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.5", type: AjfFormulaFieldComponent, selector: "ng-component", viewQueries: [{ propertyName: "input", first: true, predicate: IonInput, descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<ion-input type=\"text\" [readonly]=\"true\" [value]=\"value|async\" (ionChange)=\"onChange($event)\"></ion-input>\n", styles: [""], components: [{ type: i2.IonInput, selector: "ion-input", inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "spellcheck", "step", "type", "value"] }], directives: [{ type: i2.TextValueAccessor, selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar" }], pipes: { "async": i3.AsyncPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfFormulaFieldComponent, decorators: [{
            type: Component,
            args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ion-input type=\"text\" [readonly]=\"true\" [value]=\"value|async\" (ionChange)=\"onChange($event)\"></ion-input>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.AjfFormRendererService }, { type: AjfWarningAlertService, decorators: [{
                    type: Inject,
                    args: [AJF_WARNING_ALERT_SERVICE]
                }] }]; }, propDecorators: { input: [{
                type: ViewChild,
                args: [IonInput, { static: true }]
            }] } });

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
AjfInputFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfInputFieldComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.AjfFormRendererService }, { token: AJF_WARNING_ALERT_SERVICE }], target: i0.ɵɵFactoryTarget.Component });
AjfInputFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.5", type: AjfInputFieldComponent, selector: "ng-component", usesInheritance: true, ngImport: i0, template: "<ion-input *ngIf=\"control|async as ctrl\" [type]=\"type\" [formControl]=\"ctrl!\" [readonly]=\"instance!|ajfIsReadonlyInputField\">\n</ion-input>\n", styles: [""], components: [{ type: i2.IonInput, selector: "ion-input", inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "spellcheck", "step", "type", "value"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.TextValueAccessor, selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar" }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], pipes: { "ajfIsReadonlyInputField": i1.AjfIsReadonlyInputFieldPipe, "async": i3.AsyncPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfInputFieldComponent, decorators: [{
            type: Component,
            args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ion-input *ngIf=\"control|async as ctrl\" [type]=\"type\" [formControl]=\"ctrl!\" [readonly]=\"instance!|ajfIsReadonlyInputField\">\n</ion-input>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.AjfFormRendererService }, { type: AjfWarningAlertService, decorators: [{
                    type: Inject,
                    args: [AJF_WARNING_ALERT_SERVICE]
                }] }]; } });

class AjfSelectHasSearchBarPipe {
    transform(instance, searchThreshold) {
        return instance.filteredChoices && instance.filteredChoices.length > searchThreshold;
    }
}
AjfSelectHasSearchBarPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfSelectHasSearchBarPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
AjfSelectHasSearchBarPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfSelectHasSearchBarPipe, name: "ajfSelectHasSearchBar" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfSelectHasSearchBarPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'ajfSelectHasSearchBar' }]
        }] });

class AjfSelectUseVirtualScroll {
    transform(instance, vsThreshold) {
        return instance.filteredChoices && instance.filteredChoices.length > vsThreshold;
    }
}
AjfSelectUseVirtualScroll.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfSelectUseVirtualScroll, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
AjfSelectUseVirtualScroll.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfSelectUseVirtualScroll, name: "ajfSelectUseVirtualScroll" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfSelectUseVirtualScroll, decorators: [{
            type: Pipe,
            args: [{ name: 'ajfSelectUseVirtualScroll' }]
        }] });

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
AjfMultipleChoiceFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfMultipleChoiceFieldComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.AjfFormRendererService }, { token: AJF_WARNING_ALERT_SERVICE }, { token: AJF_SEARCH_ALERT_THRESHOLD, optional: true }], target: i0.ɵɵFactoryTarget.Component });
AjfMultipleChoiceFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.5", type: AjfMultipleChoiceFieldComponent, selector: "ng-component", usesInheritance: true, ngImport: i0, template: "<ng-container *ngIf=\"instance\">\n  <ng-container *ngIf=\"!(instance|ajfExpandFieldWithChoices:searchThreshold); else expanded\">\n    <div class=\"ajf-item-container\">\n      <ng-container *ngIf=\"instance.filteredChoices as cs\">\n        <gic-select\n            #multipleChoiceSelect\n            *ngIf=\"control|async as ctrl\"\n            [multiple]=\"true\"\n            [searchBar]=\"instance|ajfSelectHasSearchBar:searchThreshold\"\n            [useVirtualScroll]=\"instance|ajfSelectUseVirtualScroll:100\"\n            [placeholder]=\"instance.node.label\"\n            [formControl]=\"ctrl!\">\n          <gic-select-option *ngFor=\"let item of cs\"\n              [value]=\"item.value\">{{ item.label|transloco }}</gic-select-option>\n        </gic-select>\n      </ng-container>\n    </div>\n  </ng-container>\n</ng-container>\n<ng-template #expanded>\n  <div ajf-checkbox-group\n      *ngIf=\"control|async as ctrl\"\n      [formControl]=\"ctrl!\"\n      class=\"ajf-choices-container\"\n  >\n    <ion-card *ngFor=\"let choice of instance!.filteredChoices\">\n      <ajf-checkbox-group-item\n        [value]=\"choice.value\">\n        {{ choice.label | transloco }}\n      </ajf-checkbox-group-item>\n    </ion-card>\n  </div>\n</ng-template>\n", styles: [""], components: [{ type: i2$2.GicSelect, selector: "gic-select", inputs: ["cancelText", "compareWith", "disabled", "interface", "interfaceOptions", "multiple", "name", "okText", "placeholder", "searchBar", "selectedText", "useVirtualScroll", "value"] }, { type: i2$2.GicSelectOption, selector: "gic-select-option", inputs: ["disabled", "value"] }, { type: i2.IonCard, selector: "ion-card", inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] }, { type: i4$1.AjfCheckboxGroupItem, selector: "ajf-checkbox-group-item" }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2$2.SelectValueAccessor, selector: "gic-select" }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i7.AjfCheckboxGroup, selector: "ajf-checkbox-group,[ajf-checkbox-group]", inputs: ["value", "name", "disabled"], outputs: ["change"] }], pipes: { "ajfExpandFieldWithChoices": i1.AjfExpandFieldWithChoicesPipe, "ajfSelectHasSearchBar": AjfSelectHasSearchBarPipe, "ajfSelectUseVirtualScroll": AjfSelectUseVirtualScroll, "async": i3.AsyncPipe, "transloco": i10.TranslocoPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfMultipleChoiceFieldComponent, decorators: [{
            type: Component,
            args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-container *ngIf=\"instance\">\n  <ng-container *ngIf=\"!(instance|ajfExpandFieldWithChoices:searchThreshold); else expanded\">\n    <div class=\"ajf-item-container\">\n      <ng-container *ngIf=\"instance.filteredChoices as cs\">\n        <gic-select\n            #multipleChoiceSelect\n            *ngIf=\"control|async as ctrl\"\n            [multiple]=\"true\"\n            [searchBar]=\"instance|ajfSelectHasSearchBar:searchThreshold\"\n            [useVirtualScroll]=\"instance|ajfSelectUseVirtualScroll:100\"\n            [placeholder]=\"instance.node.label\"\n            [formControl]=\"ctrl!\">\n          <gic-select-option *ngFor=\"let item of cs\"\n              [value]=\"item.value\">{{ item.label|transloco }}</gic-select-option>\n        </gic-select>\n      </ng-container>\n    </div>\n  </ng-container>\n</ng-container>\n<ng-template #expanded>\n  <div ajf-checkbox-group\n      *ngIf=\"control|async as ctrl\"\n      [formControl]=\"ctrl!\"\n      class=\"ajf-choices-container\"\n  >\n    <ion-card *ngFor=\"let choice of instance!.filteredChoices\">\n      <ajf-checkbox-group-item\n        [value]=\"choice.value\">\n        {{ choice.label | transloco }}\n      </ajf-checkbox-group-item>\n    </ion-card>\n  </div>\n</ng-template>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.AjfFormRendererService }, { type: AjfWarningAlertService, decorators: [{
                    type: Inject,
                    args: [AJF_WARNING_ALERT_SERVICE]
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [AJF_SEARCH_ALERT_THRESHOLD]
                }] }]; } });

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
AjfNumberFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfNumberFieldComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.AjfFormRendererService }, { token: AJF_WARNING_ALERT_SERVICE }], target: i0.ɵɵFactoryTarget.Component });
AjfNumberFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.5", type: AjfNumberFieldComponent, selector: "ng-component", usesInheritance: true, ngImport: i0, template: "<ion-input aria-label=\"\" [ngModel]=\"value|async\" (ngModelChange)=\"setValue($event)\"></ion-input>\n", styles: [""], components: [{ type: i2.IonInput, selector: "ion-input", inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "spellcheck", "step", "type", "value"] }], directives: [{ type: i2.TextValueAccessor, selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar" }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], pipes: { "async": i3.AsyncPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfNumberFieldComponent, decorators: [{
            type: Component,
            args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ion-input aria-label=\"\" [ngModel]=\"value|async\" (ngModelChange)=\"setValue($event)\"></ion-input>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.AjfFormRendererService }, { type: AjfWarningAlertService, decorators: [{
                    type: Inject,
                    args: [AJF_WARNING_ALERT_SERVICE]
                }] }]; } });

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
class AjfRangeFieldComponent extends AjfRange {
    constructor(cdr, service, was) {
        super(cdr, service, was);
    }
}
AjfRangeFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfRangeFieldComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.AjfFormRendererService }, { token: AJF_WARNING_ALERT_SERVICE }], target: i0.ɵɵFactoryTarget.Component });
AjfRangeFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.5", type: AjfRangeFieldComponent, selector: "ajf-range", usesInheritance: true, ngImport: i0, template: "<ion-range\n  snaps=\"true\"\n  ticks=\"true\"\n  debounce=\"500\"\n  *ngIf=\"control|async as ctrl\"\n  [attr.aria-label]=\"name\"\n  [formControl]=\"ctrl!\"\n  [name]=\"name\"\n  [step]=\"step\"\n  [min]=\"start\"\n  [max]=\"end\"\n></ion-range>\n", styles: [""], components: [{ type: i2.IonRange, selector: "ion-range", inputs: ["color", "debounce", "disabled", "dualKnobs", "max", "min", "mode", "name", "pin", "snaps", "step", "ticks", "value"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.SelectValueAccessor, selector: "ion-range, ion-select, ion-radio-group, ion-segment, ion-datetime" }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], pipes: { "async": i3.AsyncPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfRangeFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ajf-range', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ion-range\n  snaps=\"true\"\n  ticks=\"true\"\n  debounce=\"500\"\n  *ngIf=\"control|async as ctrl\"\n  [attr.aria-label]=\"name\"\n  [formControl]=\"ctrl!\"\n  [name]=\"name\"\n  [step]=\"step\"\n  [min]=\"start\"\n  [max]=\"end\"\n></ion-range>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.AjfFormRendererService }, { type: AjfWarningAlertService, decorators: [{
                    type: Inject,
                    args: [AJF_WARNING_ALERT_SERVICE]
                }] }]; } });

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
AjfSingleChoiceFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfSingleChoiceFieldComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.AjfFormRendererService }, { token: AJF_WARNING_ALERT_SERVICE }, { token: AJF_SEARCH_ALERT_THRESHOLD, optional: true }], target: i0.ɵɵFactoryTarget.Component });
AjfSingleChoiceFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.5", type: AjfSingleChoiceFieldComponent, selector: "ng-component", usesInheritance: true, ngImport: i0, template: "<ng-container *ngIf=\"instance\">\n  <ng-container *ngIf=\"!(instance|ajfExpandFieldWithChoices:searchThreshold); else expanded\">\n    <div class=\"ajf-item-container\">\n      <ng-container *ngIf=\"instance.filteredChoices as cs\">\n        <gic-select *ngIf=\"control|async as ctrl\"\n            #singleChoiceSelect\n            [searchBar]=\"instance|ajfSelectHasSearchBar:searchThreshold\"\n            [useVirtualScroll]=\"instance|ajfSelectUseVirtualScroll:100\"\n            [placeholder]=\"instance.node.label\"\n            [formControl]=\"ctrl!\">\n          <gic-select-option *ngFor=\"let item of cs\" [value]=\"item.value\">{{ item.label|transloco }}</gic-select-option>\n        </gic-select>\n      </ng-container>\n    </div>\n  </ng-container>\n</ng-container>\n<ng-template #expanded>\n  <div class=\"ajf-choices-container\">\n    <ion-radio-group\n      *ngIf=\"control|async as ctrl\"\n      [formControl]=\"ctrl!\">\n      <ion-item *ngFor=\"let choice of instance!.filteredChoices\">\n        <ion-label>{{ choice.label | transloco }}</ion-label>\n        <ion-radio [value]=\"choice.value\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </div>\n</ng-template>\n", styles: [""], components: [{ type: i2$2.GicSelect, selector: "gic-select", inputs: ["cancelText", "compareWith", "disabled", "interface", "interfaceOptions", "multiple", "name", "okText", "placeholder", "searchBar", "selectedText", "useVirtualScroll", "value"] }, { type: i2$2.GicSelectOption, selector: "gic-select-option", inputs: ["disabled", "value"] }, { type: i2.IonRadioGroup, selector: "ion-radio-group", inputs: ["allowEmptySelection", "name", "value"] }, { type: i2.IonItem, selector: "ion-item", inputs: ["button", "color", "detail", "detailIcon", "disabled", "download", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] }, { type: i2.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i2.IonRadio, selector: "ion-radio", inputs: ["color", "disabled", "mode", "name", "value"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2$2.SelectValueAccessor, selector: "gic-select" }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.SelectValueAccessor, selector: "ion-range, ion-select, ion-radio-group, ion-segment, ion-datetime" }, { type: i2.RadioValueAccessor, selector: "ion-radio" }], pipes: { "ajfExpandFieldWithChoices": i1.AjfExpandFieldWithChoicesPipe, "ajfSelectHasSearchBar": AjfSelectHasSearchBarPipe, "ajfSelectUseVirtualScroll": AjfSelectUseVirtualScroll, "async": i3.AsyncPipe, "transloco": i10.TranslocoPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfSingleChoiceFieldComponent, decorators: [{
            type: Component,
            args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-container *ngIf=\"instance\">\n  <ng-container *ngIf=\"!(instance|ajfExpandFieldWithChoices:searchThreshold); else expanded\">\n    <div class=\"ajf-item-container\">\n      <ng-container *ngIf=\"instance.filteredChoices as cs\">\n        <gic-select *ngIf=\"control|async as ctrl\"\n            #singleChoiceSelect\n            [searchBar]=\"instance|ajfSelectHasSearchBar:searchThreshold\"\n            [useVirtualScroll]=\"instance|ajfSelectUseVirtualScroll:100\"\n            [placeholder]=\"instance.node.label\"\n            [formControl]=\"ctrl!\">\n          <gic-select-option *ngFor=\"let item of cs\" [value]=\"item.value\">{{ item.label|transloco }}</gic-select-option>\n        </gic-select>\n      </ng-container>\n    </div>\n  </ng-container>\n</ng-container>\n<ng-template #expanded>\n  <div class=\"ajf-choices-container\">\n    <ion-radio-group\n      *ngIf=\"control|async as ctrl\"\n      [formControl]=\"ctrl!\">\n      <ion-item *ngFor=\"let choice of instance!.filteredChoices\">\n        <ion-label>{{ choice.label | transloco }}</ion-label>\n        <ion-radio [value]=\"choice.value\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </div>\n</ng-template>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.AjfFormRendererService }, { type: AjfWarningAlertService, decorators: [{
                    type: Inject,
                    args: [AJF_WARNING_ALERT_SERVICE]
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [AJF_SEARCH_ALERT_THRESHOLD]
                }] }]; } });

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
AjfTableFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfTableFieldComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.AjfFormRendererService }, { token: AJF_WARNING_ALERT_SERVICE }], target: i0.ɵɵFactoryTarget.Component });
AjfTableFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.5", type: AjfTableFieldComponent, selector: "ng-component", usesInheritance: true, ngImport: i0, template: "<table *ngIf=\"instance\" class=\"ajf-table-field\">\n  <ng-container *ngIf=\"instance.node as node\">\n    <ng-container *ngFor=\"let columns of instance.controls; let row = index\">\n      <tr [ngClass]=\"row | ajfTableRowClass\">\n        <td>\n          <ng-container *ngIf=\"columns.length > 0 && columns[0]\">\n            {{ columns[0] | ajfTranslateIfString | ajfFormatIfNumber: '.0-2' }}\n          </ng-container>\n        </td>\n        <ng-container *ngIf=\"columns.length > 1\">\n          <td *ngFor=\"let c of columns[1]; let column = index\">\n            <ng-container *ngIf=\"row === 0; else controlCell\">\n              {{ c | ajfTranslateIfString | ajfFormatIfNumber: '.0-2' }}\n            </ng-container>\n            <ng-template #controlCell>\n              <ng-container *ngIf=\"c|ajfGetTableCellControl as contr\">\n                <ng-container *ngIf=\"contr\">\n                  <ng-container\n                    *ngIf=\"contr.show && (node.rows[row-1][column]|ajfIsCellEditable); else plainTextCell\"\n                  >\n                    <ng-container\n                      *ngIf=\"contr.type === 'number';else genericInput\"\n                    >\n                      <input\n                        (focusout)=\"contr!.show = false\"\n                        type=\"number\"\n                        [formControl]=\"contr.control\"\n                        (keydown.tab)=\"goToNextCell($event, row, column)\"\n                        autofocus\n                      />\n                    </ng-container>\n                    <ng-template #genericInput>\n                      <input\n                        (focusout)=\"contr!.show = false\"\n                        [type]=\"contr.type\"\n                        [formControl]=\"contr.control\"\n                        (keydown.tab)=\"goToNextCell($event, row, column)\"\n                        autofocus\n                      />\n                    </ng-template>\n                  </ng-container>\n                  <ng-template #plainTextCell>\n                    <span class=\"ajf-table-cell\" (click)=\"goToCell(row, column)\"\n                      >{{ contr.control?.value | ajfTranslateIfString |\n                      ajfFormatIfNumber: '.0-2' }}</span\n                    >\n                  </ng-template>\n                </ng-container>\n              </ng-container>\n            </ng-template>\n          </td>\n        </ng-container>\n      </tr>\n    </ng-container>\n  </ng-container>\n</table>\n", styles: ["table.ajf-table-field{border-collapse:collapse;border-spacing:0;width:100%}table.ajf-table-field tr td{position:relative;min-width:1em}table.ajf-table-field tr td span,table.ajf-table-field tr td input{cursor:text;position:absolute;width:100%;box-sizing:border-box;outline:none;top:0;right:0;bottom:0;left:0;display:inline-block;border-top:solid 1px #cccccc;border-right:solid 1px transparent;border-bottom:solid 1px transparent;border-left:solid 1px #cccccc;font-family:inherit;font-size:inherit;line-height:inherit;text-align:center}table.ajf-table-field tr td:last-child span,table.ajf-table-field tr td:last-child input{border-right-color:#ccc}table.ajf-table-field tr:last-of-type td span,table.ajf-table-field tr:last-of-type td input{border-bottom-color:#ccc}\n"], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], pipes: { "ajfTableRowClass": i1.AjfTableRowClass, "ajfFormatIfNumber": i4$2.FormatIfNumber, "ajfTranslateIfString": i4$2.TranslateIfString, "ajfGetTableCellControl": i1.AjfGetTableCellControlPipe, "ajfIsCellEditable": i1.AjfIsCellEditablePipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfTableFieldComponent, decorators: [{
            type: Component,
            args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<table *ngIf=\"instance\" class=\"ajf-table-field\">\n  <ng-container *ngIf=\"instance.node as node\">\n    <ng-container *ngFor=\"let columns of instance.controls; let row = index\">\n      <tr [ngClass]=\"row | ajfTableRowClass\">\n        <td>\n          <ng-container *ngIf=\"columns.length > 0 && columns[0]\">\n            {{ columns[0] | ajfTranslateIfString | ajfFormatIfNumber: '.0-2' }}\n          </ng-container>\n        </td>\n        <ng-container *ngIf=\"columns.length > 1\">\n          <td *ngFor=\"let c of columns[1]; let column = index\">\n            <ng-container *ngIf=\"row === 0; else controlCell\">\n              {{ c | ajfTranslateIfString | ajfFormatIfNumber: '.0-2' }}\n            </ng-container>\n            <ng-template #controlCell>\n              <ng-container *ngIf=\"c|ajfGetTableCellControl as contr\">\n                <ng-container *ngIf=\"contr\">\n                  <ng-container\n                    *ngIf=\"contr.show && (node.rows[row-1][column]|ajfIsCellEditable); else plainTextCell\"\n                  >\n                    <ng-container\n                      *ngIf=\"contr.type === 'number';else genericInput\"\n                    >\n                      <input\n                        (focusout)=\"contr!.show = false\"\n                        type=\"number\"\n                        [formControl]=\"contr.control\"\n                        (keydown.tab)=\"goToNextCell($event, row, column)\"\n                        autofocus\n                      />\n                    </ng-container>\n                    <ng-template #genericInput>\n                      <input\n                        (focusout)=\"contr!.show = false\"\n                        [type]=\"contr.type\"\n                        [formControl]=\"contr.control\"\n                        (keydown.tab)=\"goToNextCell($event, row, column)\"\n                        autofocus\n                      />\n                    </ng-template>\n                  </ng-container>\n                  <ng-template #plainTextCell>\n                    <span class=\"ajf-table-cell\" (click)=\"goToCell(row, column)\"\n                      >{{ contr.control?.value | ajfTranslateIfString |\n                      ajfFormatIfNumber: '.0-2' }}</span\n                    >\n                  </ng-template>\n                </ng-container>\n              </ng-container>\n            </ng-template>\n          </td>\n        </ng-container>\n      </tr>\n    </ng-container>\n  </ng-container>\n</table>\n", styles: ["table.ajf-table-field{border-collapse:collapse;border-spacing:0;width:100%}table.ajf-table-field tr td{position:relative;min-width:1em}table.ajf-table-field tr td span,table.ajf-table-field tr td input{cursor:text;position:absolute;width:100%;box-sizing:border-box;outline:none;top:0;right:0;bottom:0;left:0;display:inline-block;border-top:solid 1px #cccccc;border-right:solid 1px transparent;border-bottom:solid 1px transparent;border-left:solid 1px #cccccc;font-family:inherit;font-size:inherit;line-height:inherit;text-align:center}table.ajf-table-field tr td:last-child span,table.ajf-table-field tr td:last-child input{border-right-color:#ccc}table.ajf-table-field tr:last-of-type td span,table.ajf-table-field tr:last-of-type td input{border-bottom-color:#ccc}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.AjfFormRendererService }, { type: AjfWarningAlertService, decorators: [{
                    type: Inject,
                    args: [AJF_WARNING_ALERT_SERVICE]
                }] }]; } });

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
AjfTextareaFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfTextareaFieldComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.AjfFormRendererService }, { token: AJF_WARNING_ALERT_SERVICE }], target: i0.ɵɵFactoryTarget.Component });
AjfTextareaFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.5", type: AjfTextareaFieldComponent, selector: "ng-component", usesInheritance: true, ngImport: i0, template: "<ion-textarea *ngIf=\"control|async as ctrl\" [formControl]=\"ctrl!\"></ion-textarea>\n", styles: [""], components: [{ type: i2.IonTextarea, selector: "ion-textarea", inputs: ["autoGrow", "autocapitalize", "autofocus", "clearOnEdit", "color", "cols", "debounce", "disabled", "enterkeyhint", "inputmode", "maxlength", "minlength", "mode", "name", "placeholder", "readonly", "required", "rows", "spellcheck", "value", "wrap"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.TextValueAccessor, selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar" }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], pipes: { "async": i3.AsyncPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfTextareaFieldComponent, decorators: [{
            type: Component,
            args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ion-textarea *ngIf=\"control|async as ctrl\" [formControl]=\"ctrl!\"></ion-textarea>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.AjfFormRendererService }, { type: AjfWarningAlertService, decorators: [{
                    type: Inject,
                    args: [AJF_WARNING_ALERT_SERVICE]
                }] }]; } });

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
AjfTimeFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfTimeFieldComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.AjfFormRendererService }, { token: AJF_WARNING_ALERT_SERVICE }], target: i0.ɵɵFactoryTarget.Component });
AjfTimeFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.5", type: AjfTimeFieldComponent, selector: "ng-component", usesInheritance: true, ngImport: i0, template: "<ajf-time *ngIf=\"control|async as ctrl\" [formControl]=\"ctrl!\"></ajf-time>\n", styles: [""], components: [{ type: i2$3.AjfTime, selector: "ajf-time" }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], pipes: { "async": i3.AsyncPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfTimeFieldComponent, decorators: [{
            type: Component,
            args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ajf-time *ngIf=\"control|async as ctrl\" [formControl]=\"ctrl!\"></ajf-time>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.AjfFormRendererService }, { type: AjfWarningAlertService, decorators: [{
                    type: Inject,
                    args: [AJF_WARNING_ALERT_SERVICE]
                }] }]; } });

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
AjfVideoUrlFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfVideoUrlFieldComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.AjfFormRendererService }, { token: AJF_WARNING_ALERT_SERVICE }, { token: i2$4.DomSanitizer }, { token: i3$2.HttpClient }], target: i0.ɵɵFactoryTarget.Component });
AjfVideoUrlFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.5", type: AjfVideoUrlFieldComponent, selector: "ng-component", usesInheritance: true, ngImport: i0, template: "<ng-container *ngIf=\"control|async as ctrl\">\n  <ion-input class=\"ajf-video-input\" [formControl]=\"ctrl!\"></ion-input>\n  <div class=\"ajf-video-thumbnail\">\n    <ng-container *ngIf=\"validUrl|async\">\n      <a target=\"_blank\" [href]=\"ctrl.value\">\n        <img *ngIf=\"videoThumbnail|async as thumb\" [src]=\"thumb\" class=\"\" alt=\"\">\n      </a>\n    </ng-container>\n  </div>\n</ng-container>\n", styles: [".ajf-video-input{width:100%}.ajf-video-thumbnail{margin-top:1em;width:212px;height:120px;background-color:#eee;display:flex;align-items:center;justify-content:center}.ajf-video-thumbnail img{flex:1 1 auto}\n"], components: [{ type: i2.IonInput, selector: "ion-input", inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "spellcheck", "step", "type", "value"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.TextValueAccessor, selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar" }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], pipes: { "async": i3.AsyncPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfVideoUrlFieldComponent, decorators: [{
            type: Component,
            args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-container *ngIf=\"control|async as ctrl\">\n  <ion-input class=\"ajf-video-input\" [formControl]=\"ctrl!\"></ion-input>\n  <div class=\"ajf-video-thumbnail\">\n    <ng-container *ngIf=\"validUrl|async\">\n      <a target=\"_blank\" [href]=\"ctrl.value\">\n        <img *ngIf=\"videoThumbnail|async as thumb\" [src]=\"thumb\" class=\"\" alt=\"\">\n      </a>\n    </ng-container>\n  </div>\n</ng-container>\n", styles: [".ajf-video-input{width:100%}.ajf-video-thumbnail{margin-top:1em;width:212px;height:120px;background-color:#eee;display:flex;align-items:center;justify-content:center}.ajf-video-thumbnail img{flex:1 1 auto}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.AjfFormRendererService }, { type: AjfWarningAlertService, decorators: [{
                    type: Inject,
                    args: [AJF_WARNING_ALERT_SERVICE]
                }] }, { type: i2$4.DomSanitizer }, { type: i3$2.HttpClient }]; } });

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
            readOnlyComponent: AjfReadOnlyFieldComponent,
        };
        this.componentsMap[AjfFieldType.Text] = {
            component: AjfTextareaFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent,
        };
        this.componentsMap[AjfFieldType.Number] = {
            component: AjfNumberFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent,
        };
        this.componentsMap[AjfFieldType.Boolean] = {
            component: AjfBooleanFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent,
        };
        this.componentsMap[AjfFieldType.Formula] = {
            component: AjfFormulaFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent,
        };
        this.componentsMap[AjfFieldType.Date] = {
            component: AjfDateFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent,
        };
        this.componentsMap[AjfFieldType.DateInput] = {
            component: AjfDateInputFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent,
        };
        this.componentsMap[AjfFieldType.Table] = {
            component: AjfTableFieldComponent,
            readOnlyComponent: AjfReadOnlyTableFieldComponent,
        };
        this.componentsMap[AjfFieldType.Empty] = {
            component: AjfEmptyFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent,
        };
        this.componentsMap[AjfFieldType.SingleChoice] = {
            component: AjfSingleChoiceFieldComponent,
            readOnlyComponent: AjfReadOnlySelectFieldComponent,
        };
        this.componentsMap[AjfFieldType.MultipleChoice] = {
            component: AjfMultipleChoiceFieldComponent,
            readOnlyComponent: AjfReadOnlySelectFieldComponent,
        };
        this.componentsMap[AjfFieldType.Time] = {
            component: AjfTimeFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent,
        };
        this.componentsMap[AjfFieldType.Barcode] = {
            component: AjfBarcodeFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent,
        };
        this.componentsMap[AjfFieldType.File] = {
            component: AjfFileFieldComponent,
            readOnlyComponent: AjfReadOnlyFileFieldComponent,
        };
        this.componentsMap[AjfFieldType.Image] = {
            component: AjfImageFieldComponent,
            readOnlyComponent: AjfReadOnlyImageFieldComponent,
        };
        this.componentsMap[AjfFieldType.VideoUrl] = {
            component: AjfVideoUrlFieldComponent,
            readOnlyComponent: AjfReadOnlyVideoUrlFieldComponent,
        };
        this.componentsMap[AjfFieldType.Range] = {
            component: AjfRangeFieldComponent,
            readOnlyComponent: AjfReadOnlyFieldComponent,
        };
    }
}
AjfFieldService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfFieldService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
AjfFieldService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfFieldService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfFieldService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return []; } });

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
AjfFormField.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfFormField, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ComponentFactoryResolver }, { token: AjfFieldService }], target: i0.ɵɵFactoryTarget.Component });
AjfFormField.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.5", type: AjfFormField, selector: "ajf-field,ajf-form-field", usesInheritance: true, ngImport: i0, template: "<div\n    *ngIf=\"instance\"\n    [ngClass]=\"'ajf-field-' + (instance|ajfNodeCompleteName)\"\n    [class.ajf-validated]=\"instance.validationResults|ajfFieldIsValid\"\n>\n  <ng-template ajf-field-host></ng-template>\n</div>\n<ng-container *ngIf=\"instance && instance.node.attachments\">\n  <ng-container *ngFor=\"let attachment of instance.node.attachments\">\n    <a [href]=\"attachment.value\" target=\"_blank\">{{attachment.label}}</a>\n  </ng-container>\n</ng-container>\n<ng-container *ngIf=\"!readonly && instance && instance.validationResults\">\n  <div class=\"ajf-errors\">\n    <ng-container *ngFor=\"let res of instance.validationResults\">\n      <div class=\"error\" *ngIf=\"!res.result\">\n        {{ res.error | transloco }}\n      </div>\n    </ng-container>\n  </div>\n</ng-container>\n", styles: ["ajf-field ion-select{position:relative}ajf-field ion-input,ajf-field ion-textarea{border:dashed 2px #eeeeee}ajf-field .ajf-choices-container{flex-direction:row;align-items:stretch;flex-wrap:wrap;display:flex}ajf-field .ajf-choices-container>ion-radio-group{display:flex;flex-wrap:wrap}ajf-field .ajf-choices-container>ion-radio-group ion-item{--ion-item-border-color: transparent}ajf-field .ajf-choices-container>ion-radio-group ion-item ion-label{margin-right:10px}ajf-field .ajf-choices-container>ion-card{margin-top:0;width:33%;display:flex;font-size:13px;flex-wrap:wrap;flex-basis:21%!important;flex-shrink:3!important}ajf-field .ajf-choices-container>ion-card>ajf-checkbox-group-item{width:100%;display:flex;flex-direction:column;align-items:stretch;justify-content:center}ajf-field .ajf-choices-container>ion-card>ion-item{font-size:13px;flex:1 0 auto;flex-shrink:3!important;flex-basis:21%!important;margin:0 10px}ajf-field .ajf-item-container{position:relative}ajf-field .ajf-errors{font-style:italic;padding:5px}ajf-field tr.ajf-row-odd{background-color:gray}ajf-field .ajf-table-container{overflow-x:auto}ajf-field .ajf-table-container table{width:100%}\n"], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.AjfFieldHost, selector: "[ajf-field-host]" }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "ajfNodeCompleteName": i1.AjfNodeCompleteNamePipe, "ajfFieldIsValid": i1.AjfFieldIsValidPipe, "transloco": i10.TranslocoPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfFormField, decorators: [{
            type: Component,
            args: [{ selector: 'ajf-field,ajf-form-field', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\n    *ngIf=\"instance\"\n    [ngClass]=\"'ajf-field-' + (instance|ajfNodeCompleteName)\"\n    [class.ajf-validated]=\"instance.validationResults|ajfFieldIsValid\"\n>\n  <ng-template ajf-field-host></ng-template>\n</div>\n<ng-container *ngIf=\"instance && instance.node.attachments\">\n  <ng-container *ngFor=\"let attachment of instance.node.attachments\">\n    <a [href]=\"attachment.value\" target=\"_blank\">{{attachment.label}}</a>\n  </ng-container>\n</ng-container>\n<ng-container *ngIf=\"!readonly && instance && instance.validationResults\">\n  <div class=\"ajf-errors\">\n    <ng-container *ngFor=\"let res of instance.validationResults\">\n      <div class=\"error\" *ngIf=\"!res.result\">\n        {{ res.error | transloco }}\n      </div>\n    </ng-container>\n  </div>\n</ng-container>\n", styles: ["ajf-field ion-select{position:relative}ajf-field ion-input,ajf-field ion-textarea{border:dashed 2px #eeeeee}ajf-field .ajf-choices-container{flex-direction:row;align-items:stretch;flex-wrap:wrap;display:flex}ajf-field .ajf-choices-container>ion-radio-group{display:flex;flex-wrap:wrap}ajf-field .ajf-choices-container>ion-radio-group ion-item{--ion-item-border-color: transparent}ajf-field .ajf-choices-container>ion-radio-group ion-item ion-label{margin-right:10px}ajf-field .ajf-choices-container>ion-card{margin-top:0;width:33%;display:flex;font-size:13px;flex-wrap:wrap;flex-basis:21%!important;flex-shrink:3!important}ajf-field .ajf-choices-container>ion-card>ajf-checkbox-group-item{width:100%;display:flex;flex-direction:column;align-items:stretch;justify-content:center}ajf-field .ajf-choices-container>ion-card>ion-item{font-size:13px;flex:1 0 auto;flex-shrink:3!important;flex-basis:21%!important;margin:0 10px}ajf-field .ajf-item-container{position:relative}ajf-field .ajf-errors{font-style:italic;padding:5px}ajf-field tr.ajf-row-odd{background-color:gray}ajf-field .ajf-table-container{overflow-x:auto}ajf-field .ajf-table-container table{width:100%}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ComponentFactoryResolver }, { type: AjfFieldService }]; } });

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
    constructor() {
        // eslint-disable-next-line
        this.hint = '';
    }
}
AjfPopover.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfPopover, deps: [], target: i0.ɵɵFactoryTarget.Component });
AjfPopover.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.5", type: AjfPopover, selector: "ajf-ion-popover", inputs: { hint: "hint" }, ngImport: i0, template: `<span>{{hint}}</span>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfPopover, decorators: [{
            type: Component,
            args: [{
                    selector: 'ajf-ion-popover',
                    template: `<span>{{hint}}</span>`,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { hint: [{
                type: Input,
                args: ['hint']
            }] } });

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
AjfFormPage.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfFormPage, deps: [], target: i0.ɵɵFactoryTarget.Directive });
AjfFormPage.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.2.5", type: AjfFormPage, selector: "[ajfFormPage]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfFormPage, decorators: [{
            type: Directive,
            args: [{ selector: '[ajfFormPage]' }]
        }] });

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
            componentProps: { hint },
        });
        popover.then(pop => pop.present());
    }
    _updateLongSlide() {
        const longSlide = this.formSlider.isCurrentPageLong();
        if (longSlide !== this._longSlide) {
            this._longSlide = longSlide;
            this._changeDetectorRef.markForCheck();
        }
    }
}
AjfFormRenderer.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfFormRenderer, deps: [{ token: i1.AjfFormRendererService }, { token: i0.ChangeDetectorRef }, { token: i2.PopoverController }], target: i0.ɵɵFactoryTarget.Component });
AjfFormRenderer.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.5", type: AjfFormRenderer, selector: "ajf-form", inputs: { topBar: "topBar" }, usesInheritance: true, ngImport: i0, template: "<ng-container *ngIf=\"formGroup|async as currentFormGroup\">\n  <form novalidate [formGroup]=\"currentFormGroup!\">\n    <div class=\"ajf-form-container\">\n      <ion-toolbar *ngIf=\"!hideTopToolbar && topBar\" class=\"ajf-btn-strip\">\n        <div class=\"ajf-topbar-buttons\">\n          <ng-container *ngFor=\"let slideInstance of (slides|async)\">\n            <ion-button\n              class=\"ajf-topbar-button\"\n              *ngIf=\"slideInstance.node && slideInstance.node.label && slideInstance.node.label.length > 0\"\n              (click)=\"scrollToSlide(slideInstance)\"\n              >{{slideInstance.node.label | transloco}}</ion-button\n            >\n          </ng-container>\n        </div>\n      </ion-toolbar>\n      <ion-toolbar *ngIf=\"!hideTopToolbar\">\n        {{ title | transloco }}\n        <ion-buttons slot=\"end\">\n          <!-- this content projection  allow to add buttons on toolbar-->\n          <ng-content select=\"[ajfFormTopToolbarButtons]\"></ng-content>\n          <!-- apply a default save button only when ajfFormSaveButton is empty-->\n          <span *ngIf=\"!saveDisabled\" (click)=\"onSave($event)\">\n            <span #saveButton\n              ><ng-content select=\"[ajfFormSaveButton]\"></ng-content\n            ></span>\n            <ion-button\n              *ngIf=\"saveButton && saveButton.childNodes && saveButton.childNodes.length === 0\"\n              >{{ 'Save' | transloco }}</ion-button\n            >\n          </span>\n        </ion-buttons>\n      </ion-toolbar>\n      <div class=\"ajf-slider-container\">\n        <ajf-page-slider\n          (orientationChange)=\"orientationChangeHandler($event)\"\n          [hideNavigationButtons]=\"hideNavigationButtons\"\n          [fixedOrientation]=\"fixedOrientation\"\n          [orientation]=\"orientation\"\n          #formSlider\n        >\n          <ng-container *ngIf=\"(slides|async) as curSlides\">\n            <ng-container\n              *ngIf=\"curSlides && curSlides!.length > 0 && hasStartMessage\"\n            >\n              <ajf-page-slider-item>\n                <div ajfFormPage class=\"ajf-form-page\">\n                  <ion-card>\n                    <ion-card-header>\n                      <div class=\"ajf-page-slider-item-header\">\n                        <h2>\n                          <span class=\"ajf-form-header-number\"> 1 &rarr; </span>\n                          <span class=\"ajf-title\">\n                            <ng-content\n                              select=\"[ajfFormStartMessageTitle]\"\n                            ></ng-content>\n                          </span>\n                        </h2>\n                      </div>\n                    </ion-card-header>\n                    <ion-card-content>\n                      <ng-content select=\"[ajfFormStartMessage]\"></ng-content>\n                    </ion-card-content>\n                  </ion-card>\n                </div>\n              </ajf-page-slider-item>\n            </ng-container>\n            <ng-container\n              *ngFor=\"let slideInstance of curSlides; trackBy: trackNodeById\"\n            >\n              <ng-container\n                *ngIf=\"(!(slideInstance|ajfIsRepeatingSlideInstance)) && slideInstance.visible\"\n              >\n                <ajf-page-slider-item>\n                  <div ajfFormPage class=\"ajf-form-page\">\n                    <ion-card>\n                      <ion-card-header>\n                        <div class=\"ajf-page-slider-item-header\">\n                          <h2>\n                            <span class=\"ajf-form-header-number\"\n                              >{{ slideInstance.position + (hasStartMessage |\n                              ajfBoolToInt) }} &rarr;</span\n                            >\n                            <span class=\"ajf-title\"\n                              >{{ slideInstance.node.label | transloco}}</span\n                            >\n                          </h2>\n                          <ion-icon\n                            color=\"danger\"\n                            name=\"warning\"\n                            *ngIf=\"!slideInstance.valid\"\n                          ></ion-icon>\n                          <ion-icon\n                            color=\"secondary\"\n                            name=\"checkmark\"\n                            *ngIf=\"slideInstance.valid\"\n                          ></ion-icon>\n                        </div>\n                      </ion-card-header>\n                      <ion-card-content>\n                        <ng-container\n                          *ngFor=\"let fieldInstance of slideInstance.flatNodes; trackBy: trackNodeById\"\n                        >\n                          <div\n                            [ngClass]=\"'ajf-' + (fieldInstance|ajfAsFieldInstance).node.size\"\n                            class=\"ajf-field-entry\"\n                            *ngIf=\"fieldInstance.visible\"\n                          >\n                            <i\n                              [class]=\"(fieldInstance|ajfAsFieldInstance).node.fieldType | ajfFieldIcon\"\n                              item-right\n                            ></i>\n                            <p>\n                              {{\n                              (fieldInstance|ajfAsFieldInstance).node.description\n                              }}\n                            </p>\n                            <ion-label\n                              [innerHTML]=\"fieldInstance.node.label | transloco\"\n                            ></ion-label>\n                            <ion-icon\n                              *ngIf=\"(fieldInstance|ajfAsFieldInstance).node?.hint as hint\"\n                              [name]=\"(fieldInstance|ajfAsFieldInstance).node?.hintIcon || 'help-outline'\"\n                              (click)=\"openPopover($event, hint)\"\n                            ></ion-icon>\n                            <ajf-field\n                              [instance]=\"fieldInstance|ajfAsFieldInstance\"\n                              [readonly]=\"readonly || !slideInstance.editable\"\n                            >\n                            </ajf-field>\n                          </div>\n                        </ng-container>\n                      </ion-card-content>\n                    </ion-card>\n                  </div>\n                </ajf-page-slider-item>\n              </ng-container>\n              <ng-container\n                *ngIf=\"(slideInstance|ajfIsRepeatingSlideInstance) && slideInstance.visible\"\n              >\n                <ajf-page-slider-item\n                  *ngFor=\"let curRep of ((slideInstance|ajfAsRepeatingSlideInstance).reps|ajfRange); let idx = index; let lastSlide = last\"\n                >\n                  <div ajfFormPage class=\"ajf-form-page\">\n                    <ion-card>\n                      <ion-card-header>\n                        <div class=\"ajf-page-slider-item-header\">\n                          <h2>\n                            <span class=\"ajf-form-header-number\"\n                              >{{ slideInstance.position|ajfIncrement:idx }}\n                              &rarr;</span\n                            >\n                            <span class=\"ajf-title\"\n                              >{{ slideInstance.node.label | transloco }}</span\n                            >\n                          </h2>\n                          <ion-icon\n                            color=\"danger\"\n                            name=\"ajf-warning\"\n                            *ngIf=\"!(slideInstance|ajfValidSlide:idx)\"\n                          ></ion-icon>\n                          <ion-icon\n                            color=\"secondary\"\n                            name=\"checkmark\"\n                            *ngIf=\"(slideInstance|ajfValidSlide:idx)\"\n                          ></ion-icon>\n                        </div>\n                        <div\n                          *ngIf=\"lastSlide && !readonly\"\n                          class=\"ajf-group-actions\"\n                        >\n                          <ion-fab-button\n                            size=\"small\"\n                            (click)=\"addGroup(slideInstance)\"\n                            [disabled]=\"!(slideInstance|ajfAsRepeatingSlideInstance).canAdd || ((slideInstance|ajfAsRepeatingSlideInstance).node?.disableRemoval && !slideInstance.valid)\"\n                          >\n                            <ion-icon name=\"add\"></ion-icon>\n                          </ion-fab-button>\n                          <ion-fab-button\n                            size=\"small\"\n                            (click)=\"removeGroup(slideInstance)\"\n                            [disabled]=\"!(slideInstance|ajfAsRepeatingSlideInstance).canRemove || (slideInstance|ajfAsRepeatingSlideInstance).node?.disableRemoval\"\n                          >\n                            <ion-icon name=\"remove\"></ion-icon>\n                          </ion-fab-button>\n                        </div>\n                      </ion-card-header>\n                      <ion-card-content>\n                        <ng-container\n                          *ngFor=\"let fieldInstance of slideInstance.slideNodes[idx]; trackBy: trackNodeById\"\n                        >\n                          <div\n                            [ngClass]=\"'ajf-' + (fieldInstance|ajfAsFieldInstance).node.size\"\n                            class=\"ajf-field-entry\"\n                            *ngIf=\"fieldInstance.visible\"\n                          >\n                            <i\n                              [class]=\"(fieldInstance|ajfAsFieldInstance).node.fieldType | ajfFieldIcon\"\n                              item-right\n                            ></i>\n                            <p>\n                              {{\n                              (fieldInstance|ajfAsFieldInstance).node.description\n                              }}\n                            </p>\n                            <ion-label\n                              [innerHTML]=\"fieldInstance.node.label | transloco\"\n                            ></ion-label>\n                            <ajf-field\n                              [instance]=\"fieldInstance|ajfAsFieldInstance\"\n                              [readonly]=\"readonly || (!lastSlide && (slideInstance|ajfAsRepeatingSlideInstance).node?.disableRemoval)\"\n                            ></ajf-field>\n                          </div>\n                        </ng-container>\n                        <div\n                          *ngIf=\"lastSlide && longSlide\"\n                          class=\"ajf-group-actions ajf-group-actions-bottom\"\n                        >\n                          <ion-fab-button\n                            size=\"small\"\n                            (click)=\"addGroup(slideInstance)\"\n                            [disabled]=\"!(slideInstance|ajfAsRepeatingSlideInstance).canAdd\"\n                            mat-mini-fab\n                          >\n                            <ion-icon name=\"add\"></ion-icon>\n                          </ion-fab-button>\n                          <ion-fab-button\n                            size=\"small\"\n                            (click)=\"removeGroup(slideInstance)\"\n                            [disabled]=\"!(slideInstance|ajfAsRepeatingSlideInstance).canRemove\"\n                            mat-mini-fab\n                          >\n                            <ion-icon name=\"remove\"></ion-icon>\n                          </ion-fab-button>\n                        </div>\n                      </ion-card-content>\n                    </ion-card>\n                  </div>\n                </ajf-page-slider-item>\n              </ng-container>\n            </ng-container>\n            <ng-container\n              *ngIf=\"curSlides && curSlides!.length > 0 && hasEndMessage\"\n            >\n              <ajf-page-slider-item>\n                <div ajfFormPage class=\"ajf-form-page\">\n                  <ion-card>\n                    <ion-card-header>\n                      <div class=\"ajf-page-slider-item-header\">\n                        <h2>\n                          <span\n                            *ngIf=\"(slidesNum|async) as snum\"\n                            class=\"ajf-form-header-number\"\n                          >\n                            {{ snum! + (hasStartMessage | ajfBoolToInt) + 1 }}\n                            &rarr;\n                          </span>\n                          <span class=\"ajf-title\">\n                            <ng-content\n                              select=\"[ajfFormEndMessageTitle]\"\n                            ></ng-content>\n                          </span>\n                        </h2>\n                      </div>\n                    </ion-card-header>\n                    <ion-card-content>\n                      <ng-content select=\"[ajfFormEndMessage]\"></ng-content>\n                    </ion-card-content>\n                  </ion-card>\n                </div>\n              </ajf-page-slider-item>\n            </ng-container>\n          </ng-container>\n          <div ajfPageSliderBar *ngIf=\"!hideBottomToolbar\">\n            <div class=\"ajf-left-bar\">\n              <ion-buttons\n                class=\"ajf-errors\"\n                *ngIf=\"((errors | async) || 0) > 0\"\n              >\n                <ion-button (click)=\"goToPrevError()\" color=\"danger\">\n                  <ion-icon name=\"arrow-up\"></ion-icon>\n                </ion-button>\n                <ion-button (click)=\"goToNextError()\" color=\"danger\">\n                  <ion-icon name=\"arrow-down\"></ion-icon>\n                </ion-button>\n              </ion-buttons>\n              <div class=\"ajf-info-box ajf-error\">\n                <div class=\"ajf-title\">{{'Errors'|transloco}}</div>\n                <div class=\"ajf-content\">\n                  {{ errors | async }} / {{ slidesNum|async }}\n                </div>\n              </div>\n            </div>\n          </div>\n        </ajf-page-slider>\n      </div>\n    </div>\n  </form>\n</ng-container>\n", styles: ["ajf-form{display:block;position:relative}ajf-form form{display:block;position:absolute;top:0;right:0;bottom:0;left:0}ajf-form form .ajf-form-container{display:flex;flex-direction:column;height:100%}ajf-form form .ajf-form-container .ajf-topbar-buttons{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-content:stretch;align-items:flex-start;overflow-x:auto}ajf-form form .ajf-form-container .ajf-topbar-buttons ion-button{flex:0 1 auto;align-self:auto}ajf-form form .ajf-form-container ion-toolbar{flex:0 0 auto;height:56px}ajf-form form .ajf-form-container ion-toolbar.ajf-hidden{opacity:0}ajf-form form .ajf-form-container>.ajf-slider-container{flex:1 1 auto;position:relative;height:calc(100% - 56px)}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider{height:100%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content{padding:16px}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page{flex:1;max-height:100%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card{flex:1;margin-bottom:2em}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-header{overflow:visible!important}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-header .ajf-group-actions{position:absolute;left:calc(100vw - 160px - 6em);width:160px;margin-top:-2em;padding:15px;z-index:10;white-space:nowrap;overflow:visible!important}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-header .ajf-group-actions ion-fab-button{display:inline-block;overflow:visible!important}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content{display:flex;flex-wrap:wrap;flex-direction:row;align-content:flex-start;position:relative}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content .ajf-group-actions-bottom{width:100%;text-align:right;overflow:visible!important}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content .ajf-group-actions-bottom ion-fab-button{overflow:visible!important;display:inline-block}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry{flex:1 0 auto;padding-left:10px;padding-right:10px;width:100%;box-sizing:border-box}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-normal{width:100%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-small{width:50%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-smaller{width:33%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-tiny{width:25%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-mini{width:20%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider .ajf-page-slider-item-header{display:flex;align-items:center;width:100%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider .ajf-page-slider-item-header>h2{flex:1}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider .ajf-page-slider-item-header>h2>.ajf-form-header-number{margin-right:.5em}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider .ajf-page-slider-item-header>h2>.ajf-title{display:inline-block;margin-right:40px;white-space:normal;vertical-align:top}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar{display:flex;align-items:flex-start;flex-direction:row;position:absolute;bottom:0}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar ion-buttons.ajf-errors{order:1;color:red}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar .ajf-info-box{height:40px;padding:4px}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar .ajf-info-box>div{height:16px;line-height:16px}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar .ajf-info-box>div.ajf-content{font-weight:700}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar .ajf-info-box.ajf-error{order:2;color:red}ajf-form form .ajf-form-container .ajf-spacer{flex:1 0 auto}\n"], components: [{ type: i2.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i2.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { type: i2.IonButtons, selector: "ion-buttons", inputs: ["collapse"] }, { type: i3$3.AjfPageSlider, selector: "ajf-page-slider" }, { type: i4$3.AjfPageSliderItem, selector: "ajf-page-slider-item", outputs: ["scroll"] }, { type: i2.IonCard, selector: "ion-card", inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] }, { type: i2.IonCardHeader, selector: "ion-card-header", inputs: ["color", "mode", "translucent"] }, { type: i2.IonCardContent, selector: "ion-card-content", inputs: ["mode"] }, { type: i2.IonIcon, selector: "ion-icon", inputs: ["ariaHidden", "ariaLabel", "color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] }, { type: i2.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: AjfFormField, selector: "ajf-field,ajf-form-field" }, { type: i2.IonFabButton, selector: "ion-fab-button", inputs: ["activated", "closeIcon", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "show", "size", "target", "translucent", "type"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: AjfFormPage, selector: "[ajfFormPage]" }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], pipes: { "async": i3.AsyncPipe, "transloco": i10.TranslocoPipe, "ajfIsRepeatingSlideInstance": i1.AjfIsRepeatingSlideInstancePipe, "ajfBoolToInt": i1.AjfBoolToIntPipe, "ajfAsFieldInstance": i1.AjfAsFieldInstancePipe, "ajfFieldIcon": i1.AjfFieldIconPipe, "ajfRange": i1.AjfRangePipe, "ajfAsRepeatingSlideInstance": i1.AjfAsRepeatingSlideInstancePipe, "ajfIncrement": i1.AjfIncrementPipe, "ajfValidSlide": i1.AjfValidSlidePipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfFormRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'ajf-form', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-container *ngIf=\"formGroup|async as currentFormGroup\">\n  <form novalidate [formGroup]=\"currentFormGroup!\">\n    <div class=\"ajf-form-container\">\n      <ion-toolbar *ngIf=\"!hideTopToolbar && topBar\" class=\"ajf-btn-strip\">\n        <div class=\"ajf-topbar-buttons\">\n          <ng-container *ngFor=\"let slideInstance of (slides|async)\">\n            <ion-button\n              class=\"ajf-topbar-button\"\n              *ngIf=\"slideInstance.node && slideInstance.node.label && slideInstance.node.label.length > 0\"\n              (click)=\"scrollToSlide(slideInstance)\"\n              >{{slideInstance.node.label | transloco}}</ion-button\n            >\n          </ng-container>\n        </div>\n      </ion-toolbar>\n      <ion-toolbar *ngIf=\"!hideTopToolbar\">\n        {{ title | transloco }}\n        <ion-buttons slot=\"end\">\n          <!-- this content projection  allow to add buttons on toolbar-->\n          <ng-content select=\"[ajfFormTopToolbarButtons]\"></ng-content>\n          <!-- apply a default save button only when ajfFormSaveButton is empty-->\n          <span *ngIf=\"!saveDisabled\" (click)=\"onSave($event)\">\n            <span #saveButton\n              ><ng-content select=\"[ajfFormSaveButton]\"></ng-content\n            ></span>\n            <ion-button\n              *ngIf=\"saveButton && saveButton.childNodes && saveButton.childNodes.length === 0\"\n              >{{ 'Save' | transloco }}</ion-button\n            >\n          </span>\n        </ion-buttons>\n      </ion-toolbar>\n      <div class=\"ajf-slider-container\">\n        <ajf-page-slider\n          (orientationChange)=\"orientationChangeHandler($event)\"\n          [hideNavigationButtons]=\"hideNavigationButtons\"\n          [fixedOrientation]=\"fixedOrientation\"\n          [orientation]=\"orientation\"\n          #formSlider\n        >\n          <ng-container *ngIf=\"(slides|async) as curSlides\">\n            <ng-container\n              *ngIf=\"curSlides && curSlides!.length > 0 && hasStartMessage\"\n            >\n              <ajf-page-slider-item>\n                <div ajfFormPage class=\"ajf-form-page\">\n                  <ion-card>\n                    <ion-card-header>\n                      <div class=\"ajf-page-slider-item-header\">\n                        <h2>\n                          <span class=\"ajf-form-header-number\"> 1 &rarr; </span>\n                          <span class=\"ajf-title\">\n                            <ng-content\n                              select=\"[ajfFormStartMessageTitle]\"\n                            ></ng-content>\n                          </span>\n                        </h2>\n                      </div>\n                    </ion-card-header>\n                    <ion-card-content>\n                      <ng-content select=\"[ajfFormStartMessage]\"></ng-content>\n                    </ion-card-content>\n                  </ion-card>\n                </div>\n              </ajf-page-slider-item>\n            </ng-container>\n            <ng-container\n              *ngFor=\"let slideInstance of curSlides; trackBy: trackNodeById\"\n            >\n              <ng-container\n                *ngIf=\"(!(slideInstance|ajfIsRepeatingSlideInstance)) && slideInstance.visible\"\n              >\n                <ajf-page-slider-item>\n                  <div ajfFormPage class=\"ajf-form-page\">\n                    <ion-card>\n                      <ion-card-header>\n                        <div class=\"ajf-page-slider-item-header\">\n                          <h2>\n                            <span class=\"ajf-form-header-number\"\n                              >{{ slideInstance.position + (hasStartMessage |\n                              ajfBoolToInt) }} &rarr;</span\n                            >\n                            <span class=\"ajf-title\"\n                              >{{ slideInstance.node.label | transloco}}</span\n                            >\n                          </h2>\n                          <ion-icon\n                            color=\"danger\"\n                            name=\"warning\"\n                            *ngIf=\"!slideInstance.valid\"\n                          ></ion-icon>\n                          <ion-icon\n                            color=\"secondary\"\n                            name=\"checkmark\"\n                            *ngIf=\"slideInstance.valid\"\n                          ></ion-icon>\n                        </div>\n                      </ion-card-header>\n                      <ion-card-content>\n                        <ng-container\n                          *ngFor=\"let fieldInstance of slideInstance.flatNodes; trackBy: trackNodeById\"\n                        >\n                          <div\n                            [ngClass]=\"'ajf-' + (fieldInstance|ajfAsFieldInstance).node.size\"\n                            class=\"ajf-field-entry\"\n                            *ngIf=\"fieldInstance.visible\"\n                          >\n                            <i\n                              [class]=\"(fieldInstance|ajfAsFieldInstance).node.fieldType | ajfFieldIcon\"\n                              item-right\n                            ></i>\n                            <p>\n                              {{\n                              (fieldInstance|ajfAsFieldInstance).node.description\n                              }}\n                            </p>\n                            <ion-label\n                              [innerHTML]=\"fieldInstance.node.label | transloco\"\n                            ></ion-label>\n                            <ion-icon\n                              *ngIf=\"(fieldInstance|ajfAsFieldInstance).node?.hint as hint\"\n                              [name]=\"(fieldInstance|ajfAsFieldInstance).node?.hintIcon || 'help-outline'\"\n                              (click)=\"openPopover($event, hint)\"\n                            ></ion-icon>\n                            <ajf-field\n                              [instance]=\"fieldInstance|ajfAsFieldInstance\"\n                              [readonly]=\"readonly || !slideInstance.editable\"\n                            >\n                            </ajf-field>\n                          </div>\n                        </ng-container>\n                      </ion-card-content>\n                    </ion-card>\n                  </div>\n                </ajf-page-slider-item>\n              </ng-container>\n              <ng-container\n                *ngIf=\"(slideInstance|ajfIsRepeatingSlideInstance) && slideInstance.visible\"\n              >\n                <ajf-page-slider-item\n                  *ngFor=\"let curRep of ((slideInstance|ajfAsRepeatingSlideInstance).reps|ajfRange); let idx = index; let lastSlide = last\"\n                >\n                  <div ajfFormPage class=\"ajf-form-page\">\n                    <ion-card>\n                      <ion-card-header>\n                        <div class=\"ajf-page-slider-item-header\">\n                          <h2>\n                            <span class=\"ajf-form-header-number\"\n                              >{{ slideInstance.position|ajfIncrement:idx }}\n                              &rarr;</span\n                            >\n                            <span class=\"ajf-title\"\n                              >{{ slideInstance.node.label | transloco }}</span\n                            >\n                          </h2>\n                          <ion-icon\n                            color=\"danger\"\n                            name=\"ajf-warning\"\n                            *ngIf=\"!(slideInstance|ajfValidSlide:idx)\"\n                          ></ion-icon>\n                          <ion-icon\n                            color=\"secondary\"\n                            name=\"checkmark\"\n                            *ngIf=\"(slideInstance|ajfValidSlide:idx)\"\n                          ></ion-icon>\n                        </div>\n                        <div\n                          *ngIf=\"lastSlide && !readonly\"\n                          class=\"ajf-group-actions\"\n                        >\n                          <ion-fab-button\n                            size=\"small\"\n                            (click)=\"addGroup(slideInstance)\"\n                            [disabled]=\"!(slideInstance|ajfAsRepeatingSlideInstance).canAdd || ((slideInstance|ajfAsRepeatingSlideInstance).node?.disableRemoval && !slideInstance.valid)\"\n                          >\n                            <ion-icon name=\"add\"></ion-icon>\n                          </ion-fab-button>\n                          <ion-fab-button\n                            size=\"small\"\n                            (click)=\"removeGroup(slideInstance)\"\n                            [disabled]=\"!(slideInstance|ajfAsRepeatingSlideInstance).canRemove || (slideInstance|ajfAsRepeatingSlideInstance).node?.disableRemoval\"\n                          >\n                            <ion-icon name=\"remove\"></ion-icon>\n                          </ion-fab-button>\n                        </div>\n                      </ion-card-header>\n                      <ion-card-content>\n                        <ng-container\n                          *ngFor=\"let fieldInstance of slideInstance.slideNodes[idx]; trackBy: trackNodeById\"\n                        >\n                          <div\n                            [ngClass]=\"'ajf-' + (fieldInstance|ajfAsFieldInstance).node.size\"\n                            class=\"ajf-field-entry\"\n                            *ngIf=\"fieldInstance.visible\"\n                          >\n                            <i\n                              [class]=\"(fieldInstance|ajfAsFieldInstance).node.fieldType | ajfFieldIcon\"\n                              item-right\n                            ></i>\n                            <p>\n                              {{\n                              (fieldInstance|ajfAsFieldInstance).node.description\n                              }}\n                            </p>\n                            <ion-label\n                              [innerHTML]=\"fieldInstance.node.label | transloco\"\n                            ></ion-label>\n                            <ajf-field\n                              [instance]=\"fieldInstance|ajfAsFieldInstance\"\n                              [readonly]=\"readonly || (!lastSlide && (slideInstance|ajfAsRepeatingSlideInstance).node?.disableRemoval)\"\n                            ></ajf-field>\n                          </div>\n                        </ng-container>\n                        <div\n                          *ngIf=\"lastSlide && longSlide\"\n                          class=\"ajf-group-actions ajf-group-actions-bottom\"\n                        >\n                          <ion-fab-button\n                            size=\"small\"\n                            (click)=\"addGroup(slideInstance)\"\n                            [disabled]=\"!(slideInstance|ajfAsRepeatingSlideInstance).canAdd\"\n                            mat-mini-fab\n                          >\n                            <ion-icon name=\"add\"></ion-icon>\n                          </ion-fab-button>\n                          <ion-fab-button\n                            size=\"small\"\n                            (click)=\"removeGroup(slideInstance)\"\n                            [disabled]=\"!(slideInstance|ajfAsRepeatingSlideInstance).canRemove\"\n                            mat-mini-fab\n                          >\n                            <ion-icon name=\"remove\"></ion-icon>\n                          </ion-fab-button>\n                        </div>\n                      </ion-card-content>\n                    </ion-card>\n                  </div>\n                </ajf-page-slider-item>\n              </ng-container>\n            </ng-container>\n            <ng-container\n              *ngIf=\"curSlides && curSlides!.length > 0 && hasEndMessage\"\n            >\n              <ajf-page-slider-item>\n                <div ajfFormPage class=\"ajf-form-page\">\n                  <ion-card>\n                    <ion-card-header>\n                      <div class=\"ajf-page-slider-item-header\">\n                        <h2>\n                          <span\n                            *ngIf=\"(slidesNum|async) as snum\"\n                            class=\"ajf-form-header-number\"\n                          >\n                            {{ snum! + (hasStartMessage | ajfBoolToInt) + 1 }}\n                            &rarr;\n                          </span>\n                          <span class=\"ajf-title\">\n                            <ng-content\n                              select=\"[ajfFormEndMessageTitle]\"\n                            ></ng-content>\n                          </span>\n                        </h2>\n                      </div>\n                    </ion-card-header>\n                    <ion-card-content>\n                      <ng-content select=\"[ajfFormEndMessage]\"></ng-content>\n                    </ion-card-content>\n                  </ion-card>\n                </div>\n              </ajf-page-slider-item>\n            </ng-container>\n          </ng-container>\n          <div ajfPageSliderBar *ngIf=\"!hideBottomToolbar\">\n            <div class=\"ajf-left-bar\">\n              <ion-buttons\n                class=\"ajf-errors\"\n                *ngIf=\"((errors | async) || 0) > 0\"\n              >\n                <ion-button (click)=\"goToPrevError()\" color=\"danger\">\n                  <ion-icon name=\"arrow-up\"></ion-icon>\n                </ion-button>\n                <ion-button (click)=\"goToNextError()\" color=\"danger\">\n                  <ion-icon name=\"arrow-down\"></ion-icon>\n                </ion-button>\n              </ion-buttons>\n              <div class=\"ajf-info-box ajf-error\">\n                <div class=\"ajf-title\">{{'Errors'|transloco}}</div>\n                <div class=\"ajf-content\">\n                  {{ errors | async }} / {{ slidesNum|async }}\n                </div>\n              </div>\n            </div>\n          </div>\n        </ajf-page-slider>\n      </div>\n    </div>\n  </form>\n</ng-container>\n", styles: ["ajf-form{display:block;position:relative}ajf-form form{display:block;position:absolute;top:0;right:0;bottom:0;left:0}ajf-form form .ajf-form-container{display:flex;flex-direction:column;height:100%}ajf-form form .ajf-form-container .ajf-topbar-buttons{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-content:stretch;align-items:flex-start;overflow-x:auto}ajf-form form .ajf-form-container .ajf-topbar-buttons ion-button{flex:0 1 auto;align-self:auto}ajf-form form .ajf-form-container ion-toolbar{flex:0 0 auto;height:56px}ajf-form form .ajf-form-container ion-toolbar.ajf-hidden{opacity:0}ajf-form form .ajf-form-container>.ajf-slider-container{flex:1 1 auto;position:relative;height:calc(100% - 56px)}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider{height:100%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content{padding:16px}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page{flex:1;max-height:100%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card{flex:1;margin-bottom:2em}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-header{overflow:visible!important}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-header .ajf-group-actions{position:absolute;left:calc(100vw - 160px - 6em);width:160px;margin-top:-2em;padding:15px;z-index:10;white-space:nowrap;overflow:visible!important}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-header .ajf-group-actions ion-fab-button{display:inline-block;overflow:visible!important}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content{display:flex;flex-wrap:wrap;flex-direction:row;align-content:flex-start;position:relative}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content .ajf-group-actions-bottom{width:100%;text-align:right;overflow:visible!important}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content .ajf-group-actions-bottom ion-fab-button{overflow:visible!important;display:inline-block}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry{flex:1 0 auto;padding-left:10px;padding-right:10px;width:100%;box-sizing:border-box}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-normal{width:100%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-small{width:50%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-smaller{width:33%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-tiny{width:25%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-mini{width:20%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider .ajf-page-slider-item-header{display:flex;align-items:center;width:100%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider .ajf-page-slider-item-header>h2{flex:1}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider .ajf-page-slider-item-header>h2>.ajf-form-header-number{margin-right:.5em}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider .ajf-page-slider-item-header>h2>.ajf-title{display:inline-block;margin-right:40px;white-space:normal;vertical-align:top}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar{display:flex;align-items:flex-start;flex-direction:row;position:absolute;bottom:0}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar ion-buttons.ajf-errors{order:1;color:red}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar .ajf-info-box{height:40px;padding:4px}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar .ajf-info-box>div{height:16px;line-height:16px}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar .ajf-info-box>div.ajf-content{font-weight:700}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar .ajf-info-box.ajf-error{order:2;color:red}ajf-form form .ajf-form-container .ajf-spacer{flex:1 0 auto}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.AjfFormRendererService }, { type: i0.ChangeDetectorRef }, { type: i2.PopoverController }]; }, propDecorators: { topBar: [{
                type: Input
            }] } });

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
            providers: [AjfFieldService],
        };
    }
}
AjfFormsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfFormsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AjfFormsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfFormsModule, declarations: [AjfBarcodeFieldComponent,
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
        AjfRangeFieldComponent,
        AjfSelectHasSearchBarPipe,
        AjfSelectUseVirtualScroll,
        AjfSingleChoiceFieldComponent,
        AjfTableFieldComponent,
        AjfTextareaFieldComponent,
        AjfTimeFieldComponent,
        AjfVideoUrlFieldComponent], imports: [AjfBarcodeModule,
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
        AjfTranslocoModule], exports: [AjfFormField, AjfFormRenderer] });
AjfFormsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfFormsModule, providers: [
        AjfFieldService,
        { provide: AJF_WARNING_ALERT_SERVICE, useClass: AjfWarningAlertService },
    ], imports: [[
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
            AjfTranslocoModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AjfFormsModule, decorators: [{
            type: NgModule,
            args: [{
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
                        AjfTranslocoModule,
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
                        AjfRangeFieldComponent,
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
                        AjfRangeFieldComponent,
                        AjfSingleChoiceFieldComponent,
                        AjfTableFieldComponent,
                        AjfTextareaFieldComponent,
                        AjfTimeFieldComponent,
                        AjfVideoUrlFieldComponent,
                    ],
                    exports: [AjfFormField, AjfFormRenderer],
                    providers: [
                        AjfFieldService,
                        { provide: AJF_WARNING_ALERT_SERVICE, useClass: AjfWarningAlertService },
                    ],
                }]
        }] });

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

export { AjfBooleanFieldComponent, AjfDateFieldComponent, AjfDateInputFieldComponent, AjfEmptyFieldComponent, AjfFieldService, AjfFormField, AjfFormRenderer, AjfFormsModule, AjfInputFieldComponent, AjfMultipleChoiceFieldComponent, AjfNumberFieldComponent, AjfRangeFieldComponent, AjfSingleChoiceFieldComponent, AjfTableFieldComponent, AjfTextareaFieldComponent, AjfTimeFieldComponent, AjfWarningAlertService };
//# sourceMappingURL=ajf-ionic-forms.mjs.map
