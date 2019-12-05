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
import { AjfBaseFieldComponent, AjfFormRendererService, AjfDateValueStringPipe, AjfInputFieldComponent as AjfInputFieldComponent$1, AjfFieldWithChoicesComponent, AJF_SEARCH_ALERT_THRESHOLD, AjfFieldService as AjfFieldService$1, AjfFieldType, AjfFormField as AjfFormField$1, AjfFieldHost, AjfFormRenderer as AjfFormRenderer$1, AjfFormsModule as AjfFormsModule$1 } from '@ajf/core/forms';
import { Injectable, Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, ViewChild, EventEmitter, Optional, Inject, ɵɵdefineInjectable, ComponentFactoryResolver, ViewChildren, Directive, Pipe, NgModule } from '@angular/core';
import { AlertController, IonInput, IonicModule } from '@ionic/angular';
import { Observable, Subscription, defer } from 'rxjs';
import { filter, switchMap, map, startWith, withLatestFrom, delayWhen } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GicModule } from '@gic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { AjfCommonModule } from '@ajf/core/common';
import { AjfTimeModule } from '@ajf/core/time';
import { AjfBarcodeModule } from '@ajf/ionic/barcode';
import { AjfCalendarModule } from '@ajf/ionic/calendar';
import { AjfCheckboxGroupModule } from '@ajf/ionic/checkbox-group';
import { AjfPageSliderModule } from '@ajf/ionic/page-slider';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AjfWarningAlertService {
    /**
     * @param {?} _alertCtrl
     */
    constructor(_alertCtrl) {
        this._alertCtrl = _alertCtrl;
    }
    /**
     * @param {?} warnings
     * @return {?}
     */
    showWarningAlertPrompt(warnings) {
        return new Observable((/**
         * @param {?} subscriber
         * @return {?}
         */
        subscriber => {
            this._alertCtrl.create({
                header: 'Warning',
                message: warnings.join('\n'),
                buttons: [
                    {
                        text: 'No',
                        handler: (/**
                         * @return {?}
                         */
                        () => {
                            subscriber.next((/** @type {?} */ ({ result: false })));
                            subscriber.complete();
                        })
                    },
                    {
                        text: 'Yes',
                        handler: (/**
                         * @return {?}
                         */
                        () => {
                            subscriber.next((/** @type {?} */ ({ result: true })));
                            subscriber.complete();
                        })
                    }
                ]
            }).then((/**
             * @param {?} alert
             * @return {?}
             */
            (alert) => {
                alert.present();
            }));
        }));
    }
}
AjfWarningAlertService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AjfWarningAlertService.ctorParameters = () => [
    { type: AlertController }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AjfBooleanFieldComponent extends AjfBaseFieldComponent {
    /**
     * @param {?} cdr
     * @param {?} service
     * @param {?} was
     */
    constructor(cdr, service, was) {
        super(cdr, service, was);
    }
}
AjfBooleanFieldComponent.decorators = [
    { type: Component, args: [{template: "<ion-toggle [disabled]=\"readonly\" [formControl]=\"control|async\"></ion-toggle>",
                styles: [""],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            },] },
];
/** @nocollapse */
AjfBooleanFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AjfDateFieldComponent extends AjfBaseFieldComponent {
    /**
     * @param {?} cdr
     * @param {?} service
     * @param {?} was
     */
    constructor(cdr, service, was) {
        super(cdr, service, was);
    }
}
AjfDateFieldComponent.decorators = [
    { type: Component, args: [{template: "<ion-item><ajf-calendar selectionMode=\"day\" dateOnlyForDay [minDate]=\"instance.node.minDate|ajfDateValue\" [maxDate]=\"instance.node.maxDate|ajfDateValue\" [disabled]=\"readonly\" [formControl]=\"control|async\"></ajf-calendar></ion-item>",
                styles: [""],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            },] },
];
/** @nocollapse */
AjfDateFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AjfDateInputFieldComponent extends AjfBaseFieldComponent {
    /**
     * @param {?} cdr
     * @param {?} service
     * @param {?} was
     * @param {?} _dvs
     */
    constructor(cdr, service, was, _dvs) {
        super(cdr, service, was);
        this._dvs = _dvs;
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onChange(evt) {
        if (this.input == null) {
            return;
        }
        /** @type {?} */
        const val = evt.detail.value || '';
        if (val.length > 0) {
            if ((this._minDateStr != null && val < this._minDateStr)
                || (this._maxDateStr != null && val > this._maxDateStr)) {
                this.input.value = '';
            }
        }
    }
    /**
     * @protected
     * @return {?}
     */
    _onInstanceChange() {
        this._minDateStr = this._dvs.transform(this.instance.node.minDate);
        this._maxDateStr = this._dvs.transform(this.instance.node.maxDate);
    }
}
AjfDateInputFieldComponent.decorators = [
    { type: Component, args: [{template: "<ion-input type=\"date\" [min]=\"instance.node.minDate|ajfDateValueString\" [max]=\"instance.node.maxDate|ajfDateValueString\" [readonly]=\"readonly\" (ionChange)=\"onChange($event)\" [formControl]=\"control|async\"></ion-input>",
                styles: [""],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            },] },
];
/** @nocollapse */
AjfDateInputFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService },
    { type: AjfDateValueStringPipe }
];
AjfDateInputFieldComponent.propDecorators = {
    input: [{ type: ViewChild, args: [IonInput, { static: true },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AjfEmptyFieldComponent extends AjfBaseFieldComponent {
    /**
     * @param {?} cdr
     * @param {?} service
     * @param {?} was
     */
    constructor(cdr, service, was) {
        super(cdr, service, was);
    }
}
AjfEmptyFieldComponent.decorators = [
    { type: Component, args: [{template: "<div [innerHTML]=\"instance.node.HTML\"></div>",
                styles: [""],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            },] },
];
/** @nocollapse */
AjfEmptyFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AjfBarcodeFieldComponent extends AjfBaseFieldComponent {
    /**
     * @param {?} cdr
     * @param {?} service
     * @param {?} was
     */
    constructor(cdr, service, was) {
        super(cdr, service, was);
    }
}
AjfBarcodeFieldComponent.decorators = [
    { type: Component, args: [{template: "<ajf-barcode [formControl]=\"control|async\" [readonly]=\"readonly\"></ajf-barcode>",
                styles: [""],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            },] },
];
/** @nocollapse */
AjfBarcodeFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AjfFormulaFieldComponent extends AjfBaseFieldComponent {
    /**
     * @param {?} cdr
     * @param {?} service
     * @param {?} was
     */
    constructor(cdr, service, was) {
        super(cdr, service, was);
        this._onChangeEvt = new EventEmitter();
        this._onChangeSub = Subscription.EMPTY;
        /** @type {?} */
        const control$ = this.control.pipe(filter((/**
         * @param {?} control
         * @return {?}
         */
        control => control != null)));
        this._onChangeSub = control$.pipe(switchMap((/**
         * @param {?} control
         * @return {?}
         */
        control => this._onChangeEvt.pipe(map((/**
         * @param {?} value
         * @return {?}
         */
        value => ({ control, value }))))))).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ control, value }) => {
            try {
                /** @type {?} */
                const v = parseFloat(value);
                value = v;
            }
            catch (e) { }
            (/** @type {?} */ (control)).setValue(value);
        }));
        this.value = this.control.pipe(filter((/**
         * @param {?} control
         * @return {?}
         */
        control => control != null)), switchMap((/**
         * @param {?} control
         * @return {?}
         */
        control => (/** @type {?} */ (control)).valueChanges.pipe(startWith((/** @type {?} */ (control)).value)))));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._onChangeEvt.complete();
        this._onChangeSub.unsubscribe();
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onChange(evt) {
        this._onChangeEvt.emit(evt.detail.value);
    }
}
AjfFormulaFieldComponent.decorators = [
    { type: Component, args: [{template: "<ion-input type=\"text\" readonly=\"readonly\" [value]=\"value|async\" (ionChange)=\"onChange($event)\"></ion-input>",
                styles: [""],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            },] },
];
/** @nocollapse */
AjfFormulaFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService }
];
AjfFormulaFieldComponent.propDecorators = {
    input: [{ type: ViewChild, args: [IonInput, { static: true },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AjfInputFieldComponent extends AjfInputFieldComponent$1 {
    /**
     * @param {?} cdr
     * @param {?} service
     * @param {?} was
     */
    constructor(cdr, service, was) {
        super(cdr, service, was);
    }
}
AjfInputFieldComponent.decorators = [
    { type: Component, args: [{template: "<ion-input [type]=\"type\" [formControl]=\"control|async\" [attr.disabled]=\"readonly\"></ion-input>",
                styles: [""],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            },] },
];
/** @nocollapse */
AjfInputFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class AjfMultipleChoiceFieldComponent extends AjfFieldWithChoicesComponent {
    /**
     * @param {?} cdr
     * @param {?} service
     * @param {?} was
     * @param {?} searchThreshold
     */
    constructor(cdr, service, was, searchThreshold) {
        super(cdr, service, was, searchThreshold);
    }
}
AjfMultipleChoiceFieldComponent.decorators = [
    { type: Component, args: [{template: "<ng-container *ngIf=\"!(instance|ajfExpandFieldWithChoices:searchThreshold); else expanded\"><div class=\"ajf-item-container\"><gic-select *ngIf=\"instance.filteredChoices as cs\" #multipleChoiceSelect multiple=\"multiple\" [searchBar]=\"instance|ajfSelectHasSearchBar:searchThreshold\" [useVirtualScroll]=\"instance|ajfSelectUseVirtualScroll:100\" [placeholder]=\"instance.node.label\" [formControl]=\"control|async\" [disabled]=\"readonly\"><gic-select-option *ngFor=\"let item of cs\" [value]=\"item.value\">{{ item.label|translate }}</gic-select-option></gic-select></div></ng-container><ng-template #expanded><div ajf-checkbox-group [formControl]=\"control|async\" class=\"ajf-choices-container\"><ion-card *ngFor=\"let choice of instance.filteredChoices\"><ajf-checkbox-group-item [readonly]=\"readonly\" [value]=\"choice.value\">{{ choice.label | translate }}</ajf-checkbox-group-item></ion-card></div></ng-template>",
                styles: [""],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            },] },
];
/** @nocollapse */
AjfMultipleChoiceFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService },
    { type: Number, decorators: [{ type: Optional }, { type: Inject, args: [AJF_SEARCH_ALERT_THRESHOLD,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AjfNumberFieldComponent extends AjfInputFieldComponent$1 {
    /**
     * @param {?} cdr
     * @param {?} service
     * @param {?} was
     */
    constructor(cdr, service, was) {
        super(cdr, service, was);
        this._setValueEvt = new EventEmitter();
        this._setValueSub = Subscription.EMPTY;
        this.type = 'number';
        this.value = defer((/**
         * @return {?}
         */
        () => this.control.pipe(filter((/**
         * @param {?} control
         * @return {?}
         */
        control => control != null)), switchMap((/**
         * @param {?} control
         * @return {?}
         */
        control => (/** @type {?} */ (control)).valueChanges.pipe(startWith((/** @type {?} */ (control)).value)))))));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
        this._setValueEvt.complete();
        this._setValueSub.unsubscribe();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this._setValueSub = this._setValueEvt.pipe(withLatestFrom(this.control)).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ([value, control]) => {
            if (control == null) {
                return;
            }
            control.setValue(value);
        }));
    }
    /**
     * @param {?} value
     * @return {?}
     */
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
    { type: Component, args: [{template: "<ion-input [ngModel]=\"value|async\" (ngModelChange)=\"setValue($event)\" [readonly]=\"readonly\"></ion-input>",
                styles: [""],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            },] },
];
/** @nocollapse */
AjfNumberFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class AjfSingleChoiceFieldComponent extends AjfFieldWithChoicesComponent {
    /**
     * @param {?} cdr
     * @param {?} service
     * @param {?} was
     * @param {?} searchThreshold
     */
    constructor(cdr, service, was, searchThreshold) {
        super(cdr, service, was, searchThreshold);
    }
}
AjfSingleChoiceFieldComponent.decorators = [
    { type: Component, args: [{template: "<ng-container *ngIf=\"!(instance|ajfExpandFieldWithChoices:searchThreshold); else expanded\"><div class=\"ajf-item-container\"><gic-select *ngIf=\"instance.filteredChoices as cs\" #singleChoiceSelect [disabled]=\"readonly\" [searchBar]=\"instance|ajfSelectHasSearchBar:searchThreshold\" [useVirtualScroll]=\"instance|ajfSelectUseVirtualScroll:100\" [placeholder]=\"instance.node.label\" [formControl]=\"control|async\"><ion-content><ion-virtual-scroll [items]=\"cs\"><gic-select-option *virtualItem=\"let item\" [value]=\"item.value\">{{ item.label|translate }}</gic-select-option></ion-virtual-scroll></ion-content></gic-select></div></ng-container><ng-template #expanded><div class=\"ajf-choices-container\"><ion-radio-group [formControl]=\"control|async\"><ion-item *ngFor=\"let choice of instance.filteredChoices\"><ion-label>{{ choice.label | translate}}</ion-label><ion-radio [disabled]=\"readonly\" [value]=\"choice.value\"></ion-radio></ion-item></ion-radio-group></div></ng-template>",
                styles: [""],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            },] },
];
/** @nocollapse */
AjfSingleChoiceFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService },
    { type: Number, decorators: [{ type: Optional }, { type: Inject, args: [AJF_SEARCH_ALERT_THRESHOLD,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AjfTableFieldComponent extends AjfBaseFieldComponent {
    /**
     * @param {?} cdr
     * @param {?} service
     * @param {?} was
     */
    constructor(cdr, service, was) {
        super(cdr, service, was);
    }
}
AjfTableFieldComponent.decorators = [
    { type: Component, args: [{template: "<div class=\"ajf-table-container\"><table><ng-container *ngFor=\"let columns of (instance|ajfTableVisibleColumns); let i = index\"><tr [ngClass]=\"i | ajfTableRowClass\"><td *ngFor=\"let cellValue of columns\">{{ cellValue | ajfTranslateIfString | ajfFormatIfNumber: '.0-2' }}</td></tr></ng-container></table></div>",
                styles: ["table.ajf-table-field{width:100%}"],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            },] },
];
/** @nocollapse */
AjfTableFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AjfTextareaFieldComponent extends AjfBaseFieldComponent {
    /**
     * @param {?} cdr
     * @param {?} service
     * @param {?} was
     */
    constructor(cdr, service, was) {
        super(cdr, service, was);
    }
}
AjfTextareaFieldComponent.decorators = [
    { type: Component, args: [{template: "<ion-textarea [formControl]=\"control|async\"></ion-textarea>",
                styles: [""],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            },] },
];
/** @nocollapse */
AjfTextareaFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AjfTimeFieldComponent extends AjfBaseFieldComponent {
    /**
     * @param {?} cdr
     * @param {?} service
     * @param {?} was
     */
    constructor(cdr, service, was) {
        super(cdr, service, was);
    }
}
AjfTimeFieldComponent.decorators = [
    { type: Component, args: [{template: "<ajf-time [formControl]=\"control|async\" [readonly]=\"readonly\">></ajf-time>",
                styles: [""],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            },] },
];
/** @nocollapse */
AjfTimeFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AjfFieldService extends AjfFieldService$1 {
    constructor() {
        super();
        this.componentsMap[AjfFieldType.String] = { component: AjfInputFieldComponent };
        this.componentsMap[AjfFieldType.Text] = { component: AjfTextareaFieldComponent };
        this.componentsMap[AjfFieldType.Number] = { component: AjfNumberFieldComponent };
        this.componentsMap[AjfFieldType.Boolean] = { component: AjfBooleanFieldComponent };
        this.componentsMap[AjfFieldType.Formula] = { component: AjfFormulaFieldComponent };
        this.componentsMap[AjfFieldType.Date] = { component: AjfDateFieldComponent };
        this.componentsMap[AjfFieldType.DateInput] = { component: AjfDateInputFieldComponent };
        this.componentsMap[AjfFieldType.Table] = { component: AjfTableFieldComponent };
        this.componentsMap[AjfFieldType.Empty] = { component: AjfEmptyFieldComponent };
        this.componentsMap[AjfFieldType.SingleChoice] = { component: AjfSingleChoiceFieldComponent };
        this.componentsMap[AjfFieldType.MultipleChoice] = { component: AjfMultipleChoiceFieldComponent };
        this.componentsMap[AjfFieldType.Time] = { component: AjfTimeFieldComponent };
        this.componentsMap[AjfFieldType.Barcode] = { component: AjfBarcodeFieldComponent };
    }
}
AjfFieldService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
AjfFieldService.ctorParameters = () => [];
/** @nocollapse */ AjfFieldService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AjfFieldService_Factory() { return new AjfFieldService(); }, token: AjfFieldService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AjfFormField extends AjfFormField$1 {
    /**
     * @param {?} cdr
     * @param {?} cfr
     * @param {?} fieldService
     */
    constructor(cdr, cfr, fieldService) {
        super(cdr, cfr);
        this.componentsMap = fieldService.componentsMap;
    }
}
AjfFormField.decorators = [
    { type: Component, args: [{selector: 'ajf-field,ajf-form-field',
                template: "<div [ngClass]=\"'ajf-field-' + (instance|ajfNodeCompleteName)\" [class.ajf-validated]=\"instance.validationResults|ajfFieldIsValid\"><ng-template ajf-field-host></ng-template></div><ng-container *ngIf=\"instance.node.attachments\"><ng-container *ngFor=\"let attachment of instance.node.attachments\"><a [href]=\"attachment.value\" target=\"_blank\">{{attachment.label}}</a></ng-container></ng-container><ng-container *ngIf=\"instance.validationResults\"><div class=\"ajf-errors\"><ng-container *ngFor=\"let res of instance.validationResults\"><div class=\"error\" *ngIf=\"!res.result\">{{ res.error | translate }}</div></ng-container></div></ng-container>",
                styles: ["ajf-field ion-select{position:relative}ajf-field ion-input,ajf-field ion-textarea{border:dashed 2px #eee}ajf-field .ajf-choices-container{flex-direction:row;align-items:stretch;flex-wrap:wrap;display:flex}ajf-field .ajf-choices-container>ion-radio-group{display:flex;flex-wrap:wrap}ajf-field .ajf-choices-container>ion-radio-group ion-item{--ion-item-border-color:transparent}ajf-field .ajf-choices-container>ion-radio-group ion-item ion-label{margin-right:10px}ajf-field .ajf-choices-container>ion-card{margin-top:0;width:33%;display:flex;font-size:13px;flex-wrap:wrap;flex-basis:21%!important;flex-shrink:3!important}ajf-field .ajf-choices-container>ion-card>ajf-checkbox-group-item{width:100%;display:flex;flex-direction:column;align-items:stretch;justify-content:center}ajf-field .ajf-choices-container>ion-card>ion-item{font-size:13px;flex:1 0 auto;flex-shrink:3!important;flex-basis:21%!important;margin:0 10px}ajf-field .ajf-item-container{position:relative}ajf-field .ajf-errors{font-style:italic;padding:5px}ajf-field tr.ajf-row-odd{background-color:grey}ajf-field .ajf-table-container{overflow-x:auto}ajf-field .ajf-table-container table{width:100%}"],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                inputs: ['instance', 'readonly'],
                queries: {
                    fieldHost: new ViewChild(AjfFieldHost, { static: true }),
                },
            },] },
];
/** @nocollapse */
AjfFormField.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ComponentFactoryResolver },
    { type: AjfFieldService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This class will define an ajf form renderer
 * @implements : AfterViewInit
 * @implements : AfterViewInit
 */
class AjfFormRenderer extends AjfFormRenderer$1 {
    /**
     * @param {?} rendererService
     * @param {?} cdr
     */
    constructor(rendererService, cdr) {
        super(rendererService, cdr);
        this._longSlide = false;
        this._viewInitEvt = new EventEmitter();
        this._scrollFinishSub = Subscription.EMPTY;
        this._scrollFinishSub = this._viewInitEvt.pipe(delayWhen((/**
         * @return {?}
         */
        () => this.formGroup)), switchMap((/**
         * @return {?}
         */
        () => this.formSlider.pageScrollFinish))).subscribe((/**
         * @param {?} _
         * @return {?}
         */
        _ => this._updateLongSlide()));
    }
    /**
     * @return {?}
     */
    get longSlide() { return this._longSlide; }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this._viewInitEvt.emit();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
        this._scrollFinishSub.unsubscribe();
    }
    /**
     * @private
     * @return {?}
     */
    _updateLongSlide() {
        /** @type {?} */
        const longSlide = this.formSlider.isCurrentPageLong();
        if (longSlide !== this._longSlide) {
            this._longSlide = longSlide;
            this._changeDetectorRef.markForCheck();
        }
    }
}
AjfFormRenderer.decorators = [
    { type: Component, args: [{selector: 'ajf-form',
                template: "<ng-container *ngIf=\"formGroup|async as currentFormGroup\"><form novalidate [formGroup]=\"currentFormGroup\"><div class=\"ajf-form-container\"><ion-toolbar *ngIf=\"!hideTopToolbar\">{{ title | translate }}<ion-buttons slot=\"end\"><ion-button *ngIf=\"!saveDisabled\" (click)=\"onSave($event)\">{{ 'Save' | translate }}</ion-button></ion-buttons></ion-toolbar><div class=\"ajf-slider-container\"><ajf-page-slider (orientationChange)=\"orientationChangeHandler($event)\" [hideNavigationButtons]=\"hideNavigationButtons\" [fixedOrientation]=\"fixedOrientation\" [orientation]=\"orientation\" #formSlider><ng-container *ngIf=\"(slides|async) as curSlides\"><ng-container *ngIf=\"curSlides.length > 0 && hasStartMessage\"><ajf-page-slider-item><div ajfFormPage class=\"ajf-form-page\"><ion-card><ion-card-header><div class=\"ajf-page-slider-item-header\"><h2><span class=\"ajf-form-header-number\">1 &rarr; </span><span class=\"ajf-title\"><ng-content select=\"[ajfFormStartMessageTitle]\"></ng-content></span></h2></div></ion-card-header><ion-card-content><ng-content select=\"[ajfFormStartMessage]\"></ng-content></ion-card-content></ion-card></div></ajf-page-slider-item></ng-container><ng-container *ngFor=\"let slideInstance of curSlides; trackBy: trackNodeById\"><ng-container *ngIf=\"(!(slideInstance|ajfIsRepeatingSlideInstance)) && slideInstance.visible\"><ajf-page-slider-item><div ajfFormPage class=\"ajf-form-page\"><ion-card><ion-card-header><div class=\"ajf-page-slider-item-header\"><h2><span class=\"ajf-form-header-number\">{{ slideInstance.position + (hasStartMessage | ajfBoolToInt) }} &rarr;</span> <span class=\"ajf-title\">{{ slideInstance.node.label | translate}}</span></h2><ion-icon color=\"danger\" name=\"warning\" *ngIf=\"!slideInstance.valid\"></ion-icon><ion-icon color=\"secondary\" name=\"checkmark\" *ngIf=\"slideInstance.valid\"></ion-icon></div></ion-card-header><ion-card-content><ng-container *ngFor=\"let fieldInstance of slideInstance.flatNodes; trackBy: trackNodeById\"><div [ngClass]=\"'ajf-' + fieldInstance.node.size\" class=\"ajf-field-entry\" *ngIf=\"fieldInstance.visible\"><i [class]=\"fieldInstance.node.fieldType | ajfFieldIcon\" item-right></i><p>{{ fieldInstance.node.description }}</p><ion-label [innerHTML]=\"fieldInstance.node.label | translate\"></ion-label><ajf-field [instance]=\"fieldInstance\" [readonly]=\"readonly\"></ajf-field></div></ng-container></ion-card-content></ion-card></div></ajf-page-slider-item></ng-container><ng-container *ngIf=\"(slideInstance|ajfIsRepeatingSlideInstance) && slideInstance.visible\"><ajf-page-slider-item *ngFor=\"let curRep of (slideInstance.reps|ajfRange); let idx = index; let lastSlide = last\"><div ajfFormPage class=\"ajf-form-page\"><ion-card><ion-card-header><div class=\"ajf-page-slider-item-header\"><h2><span class=\"ajf-form-header-number\">{{ slideInstance.position|ajfIncrement:idx }} &rarr;</span> <span class=\"ajf-title\">{{ slideInstance.node.label | translate }}</span></h2><ion-icon color=\"danger\" name=\"ajf-warning\" *ngIf=\"!(slideInstance|ajfValidSlide:idx)\"></ion-icon><ion-icon color=\"secondary\" name=\"checkmark\" *ngIf=\"(slideInstance|ajfValidSlide:idx)\"></ion-icon></div><div *ngIf=\"lastSlide\" class=\"ajf-group-actions\"><ion-fab-button size=\"small\" (click)=\"addGroup(slideInstance)\" [disabled]=\"!slideInstance.canAdd\"><ion-icon name=\"add\"></ion-icon></ion-fab-button><ion-fab-button size=\"small\" (click)=\"removeGroup(slideInstance)\" [disabled]=\"!slideInstance.canRemove\"><ion-icon name=\"remove\"></ion-icon></ion-fab-button></div></ion-card-header><ion-card-content><ng-container *ngFor=\"let fieldInstance of slideInstance.slideNodes[idx]; trackBy: trackNodeById\"><div [ngClass]=\"'ajf-' + fieldInstance.node.size\" class=\"ajf-field-entry\" *ngIf=\"fieldInstance.visible\"><i [class]=\"fieldInstance.node.fieldType | ajfFieldIcon\" item-right></i><p>{{ fieldInstance.node.description }}</p><ion-label [innerHTML]=\"fieldInstance.node.label | translate\"></ion-label><ajf-field [instance]=\"fieldInstance\" [readonly]=\"readonly\"></ajf-field></div></ng-container><div *ngIf=\"lastSlide && longSlide\" class=\"ajf-group-actions ajf-group-actions-bottom\"><ion-fab-button size=\"small\" (click)=\"addGroup(slideInstance)\" [disabled]=\"!slideInstance.canAdd\" mat-mini-fab><ion-icon name=\"add\"></ion-icon></ion-fab-button><ion-fab-button size=\"small\" (click)=\"removeGroup(slideInstance)\" [disabled]=\"!slideInstance.canRemove\" mat-mini-fab><ion-icon name=\"remove\"></ion-icon></ion-fab-button></div></ion-card-content></ion-card></div></ajf-page-slider-item></ng-container></ng-container><ng-container *ngIf=\"curSlides.length > 0 && hasEndMessage\"><ajf-page-slider-item><div ajfFormPage class=\"ajf-form-page\"><ion-card><ion-card-header><div class=\"ajf-page-slider-item-header\"><h2><span *ngIf=\"(slidesNum|async) as snum\" class=\"ajf-form-header-number\">{{ snum + (hasStartMessage | ajfBoolToInt) + 1 }} &rarr; </span><span class=\"ajf-title\"><ng-content select=\"[ajfFormEndMessageTitle]\"></ng-content></span></h2></div></ion-card-header><ion-card-content><ng-content select=\"[ajfFormEndMessage]\"></ng-content></ion-card-content></ion-card></div></ajf-page-slider-item></ng-container></ng-container><div ajfPageSliderBar *ngIf=\"!hideBottomToolbar\"><div class=\"ajf-left-bar\"><ion-buttons class=\"ajf-errors\" *ngIf=\"((errors | async) || 0) > 0\"><ion-button (click)=\"goToPrevError()\" color=\"danger\"><ion-icon name=\"arrow-up\"></ion-icon></ion-button><ion-button (click)=\"goToNextError()\" color=\"danger\"><ion-icon name=\"arrow-down\"></ion-icon></ion-button></ion-buttons><div class=\"ajf-info-box ajf-error\"><div class=\"ajf-title\" translate>Errors</div><div class=\"ajf-content\">{{ errors | async }} / {{ slidesNum|async }}</div></div></div></div></ajf-page-slider></div></div></form></ng-container>",
                styles: ["ajf-form{display:block;position:relative}ajf-form form{display:block;position:absolute;top:0;right:0;bottom:0;left:0}ajf-form form .ajf-form-container{display:flex;flex-direction:column;height:100%}ajf-form form .ajf-form-container ion-toolbar{flex:0 0 auto;height:56px}ajf-form form .ajf-form-container ion-toolbar.ajf-hidden{opacity:0}ajf-form form .ajf-form-container>.ajf-slider-container{flex:1 1 auto;position:relative;height:calc(100% - 56px)}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider{height:100%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content{padding:16px}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page{flex:1;max-height:100%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card{flex:1;margin-bottom:2em}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-header{overflow:visible!important}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-header .ajf-group-actions{position:absolute;left:calc(100vw - 160px - 6em);width:160px;margin-top:-2em;padding:15px;z-index:10;white-space:nowrap;overflow:visible!important}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-header .ajf-group-actions ion-fab-button{display:inline-block;overflow:visible!important}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content{display:flex;flex-wrap:wrap;flex-direction:row;align-content:flex-start;position:relative}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content .ajf-group-actions-bottom{width:100%;text-align:right;overflow:visible!important}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content .ajf-group-actions-bottom ion-fab-button{overflow:visible!important;display:inline-block}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry{flex:1 0 auto;padding-left:10px;padding-right:10px;width:100%;box-sizing:border-box}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-normal{width:100%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-small{width:50%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-smaller{width:33%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-tiny{width:25%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-mini{width:20%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider .ajf-page-slider-item-header{display:flex;align-items:center;width:100%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider .ajf-page-slider-item-header>h2{flex:1}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider .ajf-page-slider-item-header>h2>.ajf-form-header-number{margin-right:.5em}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider .ajf-page-slider-item-header>h2>.ajf-title{display:inline-block;margin-right:40px;white-space:normal;vertical-align:top}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar{display:flex;align-items:flex-start;flex-direction:row;position:absolute;bottom:0}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar ion-buttons.ajf-errors{order:1;color:red}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar .ajf-info-box{height:40px;padding:4px}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar .ajf-info-box>div{height:16px;line-height:16px}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar .ajf-info-box>div.ajf-content{font-weight:700}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar .ajf-info-box.ajf-error{order:2;color:red}ajf-form form .ajf-form-container .ajf-spacer{flex:1 0 auto}"],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                inputs: [
                    'hasStartMessage',
                    'hasEndMessage',
                    'readonly',
                    'form',
                    'formSchema',
                    'saveDisabled',
                    'title',
                    'showTopToolbar',
                    'showBottomToolbar',
                    'showNavigationButtons',
                    'orientation',
                    'fixedOrientation',
                ],
                outputs: [
                    'formSave',
                    'formAction',
                    'orientationChange',
                ],
                queries: {
                    formSlider: new ViewChild('formSlider', { static: false }),
                    fields: new ViewChildren(AjfFormField)
                }
            },] },
];
/** @nocollapse */
AjfFormRenderer.ctorParameters = () => [
    { type: AjfFormRendererService },
    { type: ChangeDetectorRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AjfFormPage {
}
AjfFormPage.decorators = [
    { type: Directive, args: [{ selector: '[ajfFormPage]' },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AjfSelectHasSearchBarPipe {
    /**
     * @param {?} instance
     * @param {?} searchThreshold
     * @return {?}
     */
    transform(instance, searchThreshold) {
        return instance.filteredChoices && instance.filteredChoices.length > searchThreshold;
    }
}
AjfSelectHasSearchBarPipe.decorators = [
    { type: Pipe, args: [{ name: 'ajfSelectHasSearchBar' },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AjfSelectUseVirtualScroll {
    /**
     * @param {?} instance
     * @param {?} vsThreshold
     * @return {?}
     */
    transform(instance, vsThreshold) {
        return instance.filteredChoices && instance.filteredChoices.length > vsThreshold;
    }
}
AjfSelectUseVirtualScroll.decorators = [
    { type: Pipe, args: [{ name: 'ajfSelectUseVirtualScroll' },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AjfFormsModule {
    /**
     * @return {?}
     */
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
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    IonicModule,
                    GicModule,
                    TranslateModule,
                    AjfCommonModule,
                    AjfFormsModule$1,
                    AjfCalendarModule,
                    AjfBarcodeModule,
                    AjfCheckboxGroupModule,
                    AjfPageSliderModule,
                    AjfTimeModule,
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
                    AjfSelectHasSearchBarPipe,
                    AjfSelectUseVirtualScroll,
                    AjfSingleChoiceFieldComponent,
                    AjfTableFieldComponent,
                    AjfTextareaFieldComponent,
                    AjfTimeFieldComponent
                ],
                exports: [
                    AjfFormField,
                    AjfFormRenderer
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
                    AjfSingleChoiceFieldComponent,
                    AjfTableFieldComponent,
                    AjfTextareaFieldComponent,
                    AjfTimeFieldComponent
                ],
                providers: [
                    AjfFieldService,
                    AjfWarningAlertService,
                ],
            },] },
];

export { AjfBooleanFieldComponent, AjfDateFieldComponent, AjfDateInputFieldComponent, AjfEmptyFieldComponent, AjfFieldService, AjfFormField, AjfFormRenderer, AjfFormsModule, AjfInputFieldComponent, AjfMultipleChoiceFieldComponent, AjfNumberFieldComponent, AjfSingleChoiceFieldComponent, AjfTableFieldComponent, AjfTextareaFieldComponent, AjfTimeFieldComponent, AjfWarningAlertService, AjfBarcodeFieldComponent as ɵa, AjfFormPage as ɵb, AjfFormulaFieldComponent as ɵc, AjfSelectHasSearchBarPipe as ɵd, AjfSelectUseVirtualScroll as ɵe };
//# sourceMappingURL=forms.js.map
