import { AjfBaseFieldComponent, AjfFormRendererService, AjfDateValueStringPipe, AjfInputFieldComponent as AjfInputFieldComponent$1, AjfFieldWithChoicesComponent, AJF_SEARCH_ALERT_THRESHOLD, AjfFieldService as AjfFieldService$1, AjfFieldType, AjfFormField as AjfFormField$1, AjfFormRenderer as AjfFormRenderer$1, AjfFormsModule as AjfFormsModule$1 } from '@ajf/core/forms';
import { Injectable, Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, ViewChild, EventEmitter, Optional, Inject, ɵɵdefineInjectable, ComponentFactoryResolver, Directive, Pipe, NgModule } from '@angular/core';
import { AlertController, IonInput, IonicModule } from '@ionic/angular';
import { Observable, Subscription, defer } from 'rxjs';
import { filter, switchMap, map, startWith, withLatestFrom, delayWhen } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GicModule } from '@gic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { AjfCommonModule } from '@ajf/core/common';
import { AjfBarcodeModule } from '@ajf/ionic/barcode';
import { AjfCalendarModule } from '@ajf/ionic/calendar';
import { AjfCheckboxGroupModule } from '@ajf/ionic/checkbox-group';
import { AjfPageSliderModule } from '@ajf/ionic/page-slider';
import { AjfTimeModule } from '@ajf/ionic/time';

/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/forms/warning-alert-service.ts
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
    { type: Injectable }
];
/** @nocollapse */
AjfWarningAlertService.ctorParameters = () => [
    { type: AlertController }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AjfWarningAlertService.prototype._alertCtrl;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/forms/boolean-field.ts
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
    { type: Component, args: [{
                template: "<ion-toggle *ngIf=\"control|async as ctrl\" [disabled]=\"readonly\" [formControl]=\"ctrl!\"></ion-toggle>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["\n"]
            }] }
];
/** @nocollapse */
AjfBooleanFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService }
];
if (false) {
    /** @type {?} */
    AjfBooleanFieldComponent.ngAcceptInputType_readonly;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/forms/date-field.ts
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
    { type: Component, args: [{
                template: "<ion-item>\n  <ajf-calendar\n      *ngIf=\"control|async as ctrl\"\n      selectionMode=\"day\"\n      [dateOnlyForDay]=\"true\"\n      [minDate]=\"instance.node.minDate|ajfDateValue\"\n      [maxDate]=\"instance.node.maxDate|ajfDateValue\"\n      [disabled]=\"readonly\"\n      [formControl]=\"ctrl!\"></ajf-calendar>\n</ion-item>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["\n"]
            }] }
];
/** @nocollapse */
AjfDateFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService }
];
if (false) {
    /** @type {?} */
    AjfDateFieldComponent.ngAcceptInputType_readonly;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/forms/date-input-field.ts
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
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        /** @type {?} */
        const evt = (/** @type {?} */ (event));
        if (this.input == null || evt.detail == null) {
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
    { type: Component, args: [{
                template: "<ion-input\n    type=\"date\"\n    *ngIf=\"control|async as ctrl\"\n    [min]=\"instance.node.minDate|ajfDateValueString\"\n    [max]=\"instance.node.maxDate|ajfDateValueString\"\n    [readonly]=\"readonly\"\n    (ionChange)=\"onChange($event)\"\n    [formControl]=\"ctrl!\"></ion-input>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["\n"]
            }] }
];
/** @nocollapse */
AjfDateInputFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService },
    { type: AjfDateValueStringPipe }
];
AjfDateInputFieldComponent.propDecorators = {
    input: [{ type: ViewChild, args: [IonInput, { static: false },] }]
};
if (false) {
    /** @type {?} */
    AjfDateInputFieldComponent.ngAcceptInputType_readonly;
    /** @type {?} */
    AjfDateInputFieldComponent.prototype.input;
    /**
     * @type {?}
     * @private
     */
    AjfDateInputFieldComponent.prototype._minDateStr;
    /**
     * @type {?}
     * @private
     */
    AjfDateInputFieldComponent.prototype._maxDateStr;
    /**
     * @type {?}
     * @private
     */
    AjfDateInputFieldComponent.prototype._dvs;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/forms/empty-field.ts
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
    { type: Component, args: [{
                template: "<div [innerHTML]=\"instance.node.HTML\"></div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["\n"]
            }] }
];
/** @nocollapse */
AjfEmptyFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService }
];
if (false) {
    /** @type {?} */
    AjfEmptyFieldComponent.ngAcceptInputType_readonly;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/forms/barcode-field.ts
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
    { type: Component, args: [{
                template: "<ajf-barcode *ngIf=\"control|async as ctrl\" [formControl]=\"ctrl!\" [readonly]=\"readonly\"></ajf-barcode>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["\n"]
            }] }
];
/** @nocollapse */
AjfBarcodeFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService }
];
if (false) {
    /** @type {?} */
    AjfBarcodeFieldComponent.ngAcceptInputType_readonly;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/forms/formula-field.ts
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
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        /** @type {?} */
        const evt = (/** @type {?} */ (event));
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
            }] }
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
if (false) {
    /** @type {?} */
    AjfFormulaFieldComponent.ngAcceptInputType_readonly;
    /** @type {?} */
    AjfFormulaFieldComponent.prototype.input;
    /** @type {?} */
    AjfFormulaFieldComponent.prototype.value;
    /**
     * @type {?}
     * @private
     */
    AjfFormulaFieldComponent.prototype._onChangeEvt;
    /**
     * @type {?}
     * @private
     */
    AjfFormulaFieldComponent.prototype._onChangeSub;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/forms/input-field.ts
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
    { type: Component, args: [{
                template: "<ion-input *ngIf=\"control|async as ctrl\" [type]=\"type\" [formControl]=\"ctrl!\" [attr.disabled]=\"readonly\"></ion-input>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["\n"]
            }] }
];
/** @nocollapse */
AjfInputFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService }
];
if (false) {
    /** @type {?} */
    AjfInputFieldComponent.ngAcceptInputType_readonly;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/forms/multiple-choice-field.ts
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
    { type: Component, args: [{
                template: "<ng-container *ngIf=\"!(instance|ajfExpandFieldWithChoices:searchThreshold); else expanded\">\n  <div class=\"ajf-item-container\">\n    <ng-container *ngIf=\"instance.filteredChoices as cs\">\n      <gic-select\n          #multipleChoiceSelect\n          *ngIf=\"control|async as ctrl\"\n          [multiple]=\"true\"\n          [searchBar]=\"instance|ajfSelectHasSearchBar:searchThreshold\"\n          [useVirtualScroll]=\"instance|ajfSelectUseVirtualScroll:100\"\n          [placeholder]=\"instance.node.label\"\n          [formControl]=\"ctrl!\"\n          [disabled]=\"readonly\">\n        <gic-select-option *ngFor=\"let item of cs\"\n            [value]=\"item.value\">{{ item.label|translate }}</gic-select-option>\n      </gic-select>\n    </ng-container>\n  </div>\n</ng-container>\n<ng-template #expanded>\n  <div ajf-checkbox-group\n      *ngIf=\"control|async as ctrl\"\n      [formControl]=\"ctrl!\"\n      class=\"ajf-choices-container\"\n  >\n    <ion-card  *ngFor=\"let choice of instance.filteredChoices\">\n      <ajf-checkbox-group-item\n        [readonly]=\"readonly\"\n        [value]=\"choice.value\">\n        {{ choice.label | translate }}\n      </ajf-checkbox-group-item>\n    </ion-card>\n  </div>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["\n"]
            }] }
];
/** @nocollapse */
AjfMultipleChoiceFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService },
    { type: Number, decorators: [{ type: Optional }, { type: Inject, args: [AJF_SEARCH_ALERT_THRESHOLD,] }] }
];
if (false) {
    /** @type {?} */
    AjfMultipleChoiceFieldComponent.ngAcceptInputType_readonly;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/forms/number-field.ts
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
    { type: Component, args: [{
                template: "<ion-input [ngModel]=\"value|async\" (ngModelChange)=\"setValue($event)\" [readonly]=\"readonly\"></ion-input>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["\n"]
            }] }
];
/** @nocollapse */
AjfNumberFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService }
];
if (false) {
    /** @type {?} */
    AjfNumberFieldComponent.ngAcceptInputType_readonly;
    /** @type {?} */
    AjfNumberFieldComponent.prototype.value;
    /**
     * @type {?}
     * @private
     */
    AjfNumberFieldComponent.prototype._setValueEvt;
    /**
     * @type {?}
     * @private
     */
    AjfNumberFieldComponent.prototype._setValueSub;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/forms/single-choice-field.ts
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
    { type: Component, args: [{
                template: "<ng-container *ngIf=\"!(instance|ajfExpandFieldWithChoices:searchThreshold); else expanded\">\n  <div class=\"ajf-item-container\">\n    <ng-container *ngIf=\"instance.filteredChoices as cs\">\n      <gic-select *ngIf=\"control|async as ctrl\"\n          #singleChoiceSelect\n          [disabled]=\"readonly\"\n          [searchBar]=\"instance|ajfSelectHasSearchBar:searchThreshold\"\n          [useVirtualScroll]=\"instance|ajfSelectUseVirtualScroll:100\"\n          [placeholder]=\"instance.node.label\"\n          [formControl]=\"ctrl!\">\n        <gic-select-option *ngFor=\"let item of cs\" [value]=\"item.value\">{{ item.label|translate }}</gic-select-option>\n      </gic-select>\n    </ng-container>\n  </div>\n</ng-container>\n<ng-template #expanded>\n  <div class=\"ajf-choices-container\">\n    <ion-radio-group\n      *ngIf=\"control|async as ctrl\"\n      [formControl]=\"ctrl!\">\n      <ion-item *ngFor=\"let choice of instance.filteredChoices\">\n        <ion-label>{{ choice.label | translate }}</ion-label>\n        <ion-radio [disabled]=\"readonly\" [value]=\"choice.value\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </div>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["\n"]
            }] }
];
/** @nocollapse */
AjfSingleChoiceFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService },
    { type: Number, decorators: [{ type: Optional }, { type: Inject, args: [AJF_SEARCH_ALERT_THRESHOLD,] }] }
];
if (false) {
    /** @type {?} */
    AjfSingleChoiceFieldComponent.ngAcceptInputType_readonly;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/forms/table-field.ts
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
    { type: Component, args: [{
                template: "<div class=\"ajf-table-container\">\n  <table>\n    <ng-container *ngFor=\"let columns of (instance|ajfTableVisibleColumns); let i = index\">\n      <tr [ngClass]=\"i | ajfTableRowClass\">\n        <td *ngFor=\"let cellValue of columns\" >\n          {{ cellValue | ajfTranslateIfString | ajfFormatIfNumber: '.0-2' }}\n        </td>\n      </tr>\n    </ng-container>\n  </table>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["table.ajf-table-field{width:100%}\n"]
            }] }
];
/** @nocollapse */
AjfTableFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService }
];
if (false) {
    /** @type {?} */
    AjfTableFieldComponent.ngAcceptInputType_readonly;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/forms/textarea-field.ts
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
    { type: Component, args: [{
                template: "<ion-textarea *ngIf=\"control|async as ctrl\" [formControl]=\"ctrl!\"></ion-textarea>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["\n"]
            }] }
];
/** @nocollapse */
AjfTextareaFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService }
];
if (false) {
    /** @type {?} */
    AjfTextareaFieldComponent.ngAcceptInputType_readonly;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/forms/time-field.ts
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
    { type: Component, args: [{
                template: "<ajf-time *ngIf=\"control|async as ctrl\" [formControl]=\"ctrl!\" [readonly]=\"readonly\"></ajf-time>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["\n"]
            }] }
];
/** @nocollapse */
AjfTimeFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AjfFormRendererService },
    { type: AjfWarningAlertService }
];
if (false) {
    /** @type {?} */
    AjfTimeFieldComponent.ngAcceptInputType_readonly;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/forms/field-service.ts
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
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
AjfFieldService.ctorParameters = () => [];
/** @nocollapse */ AjfFieldService.ɵprov = ɵɵdefineInjectable({ factory: function AjfFieldService_Factory() { return new AjfFieldService(); }, token: AjfFieldService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/forms/field.ts
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
    { type: Component, args: [{
                selector: 'ajf-field,ajf-form-field',
                template: "<div\n    [ngClass]=\"'ajf-field-' + (instance|ajfNodeCompleteName)\"\n    [class.ajf-validated]=\"instance.validationResults|ajfFieldIsValid\"\n>\n  <ng-template ajf-field-host></ng-template>\n</div>\n<ng-container *ngIf=\"instance.node.attachments\">\n  <ng-container *ngFor=\"let attachment of instance.node.attachments\">\n    <a [href]=\"attachment.value\" target=\"_blank\">{{attachment.label}}</a>\n  </ng-container>\n</ng-container>\n<ng-container *ngIf=\"instance.validationResults\">\n  <div class=\"ajf-errors\">\n    <ng-container *ngFor=\"let res of instance.validationResults\">\n      <div class=\"error\" *ngIf=\"!res.result\">\n        {{ res.error | translate }}\n      </div>\n    </ng-container>\n  </div>\n</ng-container>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["ajf-field ion-select{position:relative}ajf-field ion-input,ajf-field ion-textarea{border:dashed 2px #eee}ajf-field .ajf-choices-container{flex-direction:row;align-items:stretch;flex-wrap:wrap;display:flex}ajf-field .ajf-choices-container>ion-radio-group{display:flex;flex-wrap:wrap}ajf-field .ajf-choices-container>ion-radio-group ion-item{--ion-item-border-color: transparent}ajf-field .ajf-choices-container>ion-radio-group ion-item ion-label{margin-right:10px}ajf-field .ajf-choices-container>ion-card{margin-top:0;width:33%;display:flex;font-size:13px;flex-wrap:wrap;flex-basis:21% !important;flex-shrink:3 !important}ajf-field .ajf-choices-container>ion-card>ajf-checkbox-group-item{width:100%;display:flex;flex-direction:column;align-items:stretch;justify-content:center}ajf-field .ajf-choices-container>ion-card>ion-item{font-size:13px;flex:1 0 auto;flex-shrink:3 !important;flex-basis:21% !important;margin:0 10px}ajf-field .ajf-item-container{position:relative}ajf-field .ajf-errors{font-style:italic;padding:5px}ajf-field tr.ajf-row-odd{background-color:gray}ajf-field .ajf-table-container{overflow-x:auto}ajf-field .ajf-table-container table{width:100%}\n"]
            }] }
];
/** @nocollapse */
AjfFormField.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ComponentFactoryResolver },
    { type: AjfFieldService }
];
if (false) {
    /** @type {?} */
    AjfFormField.ngAcceptInputType_readonly;
    /** @type {?} */
    AjfFormField.prototype.componentsMap;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/forms/form.ts
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
    { type: Component, args: [{
                selector: 'ajf-form',
                template: "<ng-container *ngIf=\"formGroup|async as currentFormGroup\">\n  <form novalidate [formGroup]=\"currentFormGroup!\">\n    <div class=\"ajf-form-container\">\n      <ion-toolbar *ngIf=\"!hideTopToolbar\">\n        {{ title | translate }}\n        <ion-buttons slot=\"end\">\n          <ion-button *ngIf=\"!saveDisabled\" (click)=\"onSave($event)\">{{ 'Save' | translate }}</ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n      <div class=\"ajf-slider-container\">\n        <ajf-page-slider (orientationChange)=\"orientationChangeHandler($event)\"\n            [hideNavigationButtons]=\"hideNavigationButtons\"\n            [fixedOrientation]=\"fixedOrientation\"\n            [orientation]=\"orientation\"\n            #formSlider>\n          <ng-container *ngIf=\"(slides|async) as curSlides\">\n            <ng-container *ngIf=\"curSlides && curSlides!.length > 0 && hasStartMessage\">\n              <ajf-page-slider-item>\n                <div ajfFormPage class=\"ajf-form-page\">\n                  <ion-card>\n                    <ion-card-header>\n                      <div class=\"ajf-page-slider-item-header\">\n                        <h2>\n                          <span class=\"ajf-form-header-number\">\n                            1  &rarr;\n                          </span>\n                          <span class=\"ajf-title\">\n                            <ng-content select=\"[ajfFormStartMessageTitle]\"></ng-content>\n                          </span>\n                        </h2>\n                      </div>\n                    </ion-card-header>\n                    <ion-card-content>\n                      <ng-content select=\"[ajfFormStartMessage]\"></ng-content>\n                    </ion-card-content>\n                  </ion-card>\n                </div>\n              </ajf-page-slider-item>\n            </ng-container>\n            <ng-container *ngFor=\"let slideInstance of curSlides; trackBy: trackNodeById\">\n              <ng-container *ngIf=\"(!(slideInstance|ajfIsRepeatingSlideInstance)) && slideInstance.visible\">\n                <ajf-page-slider-item>\n                  <div ajfFormPage class=\"ajf-form-page\">\n                    <ion-card>\n                      <ion-card-header>\n                        <div class=\"ajf-page-slider-item-header\">\n                          <h2>\n                            <span class=\"ajf-form-header-number\">{{ slideInstance.position + (hasStartMessage | ajfBoolToInt) }} &rarr;</span>\n                            <span class=\"ajf-title\">{{ slideInstance.node.label | translate}}</span>\n                          </h2>\n                          <ion-icon color=\"danger\" name=\"warning\" *ngIf=\"!slideInstance.valid\"></ion-icon>\n                          <ion-icon color=\"secondary\" name=\"checkmark\" *ngIf=\"slideInstance.valid\"></ion-icon>\n                        </div>\n                      </ion-card-header>\n                      <ion-card-content>\n                        <ng-container *ngFor=\"let fieldInstance of slideInstance.flatNodes; trackBy: trackNodeById\">\n                          <div [ngClass]=\"'ajf-' + (fieldInstance|ajfAsFieldInstance).node.size\" class=\"ajf-field-entry\"\n                              *ngIf=\"fieldInstance.visible\">\n                            <i [class]=\"(fieldInstance|ajfAsFieldInstance).node.fieldType | ajfFieldIcon\" item-right></i>\n                            <p>{{ (fieldInstance|ajfAsFieldInstance).node.description }}</p>\n                            <ion-label [innerHTML]=\"fieldInstance.node.label | translate\"></ion-label>\n                            <ajf-field [instance]=\"fieldInstance|ajfAsFieldInstance\" [readonly]=\"readonly\"></ajf-field>\n                          </div>\n                        </ng-container>\n                      </ion-card-content>\n                    </ion-card>\n                  </div>\n                </ajf-page-slider-item>\n              </ng-container>\n              <ng-container *ngIf=\"(slideInstance|ajfIsRepeatingSlideInstance) && slideInstance.visible\">\n                <ajf-page-slider-item *ngFor=\"let curRep of ((slideInstance|ajfAsRepeatingSlideInstance).reps|ajfRange); let idx = index; let lastSlide = last\">\n                  <div ajfFormPage class=\"ajf-form-page\">\n                    <ion-card>\n                      <ion-card-header>\n                        <div class=\"ajf-page-slider-item-header\">\n                          <h2>\n                            <span class=\"ajf-form-header-number\">{{ slideInstance.position|ajfIncrement:idx }} &rarr;</span>\n                            <span class=\"ajf-title\">{{ slideInstance.node.label | translate }}</span>\n                          </h2>\n                          <ion-icon color=\"danger\" name=\"ajf-warning\" *ngIf=\"!(slideInstance|ajfValidSlide:idx)\"></ion-icon>\n                          <ion-icon color=\"secondary\" name=\"checkmark\" *ngIf=\"(slideInstance|ajfValidSlide:idx)\"></ion-icon>\n                        </div>\n                        <div *ngIf=\"lastSlide\" class=\"ajf-group-actions\">\n                          <ion-fab-button size=\"small\" (click)=\"addGroup(slideInstance)\" [disabled]=\"!(slideInstance|ajfAsRepeatingSlideInstance).canAdd\">\n                            <ion-icon name=\"add\"></ion-icon>\n                          </ion-fab-button>\n                          <ion-fab-button size=\"small\" (click)=\"removeGroup(slideInstance)\" [disabled]=\"!(slideInstance|ajfAsRepeatingSlideInstance).canRemove\">\n                            <ion-icon name=\"remove\"></ion-icon>\n                          </ion-fab-button>\n                        </div>\n                      </ion-card-header>\n                      <ion-card-content>\n                        <ng-container *ngFor=\"let fieldInstance of slideInstance.slideNodes[idx]; trackBy: trackNodeById\">\n                          <div [ngClass]=\"'ajf-' + (fieldInstance|ajfAsFieldInstance).node.size\" class=\"ajf-field-entry\"\n                              *ngIf=\"fieldInstance.visible\">\n                            <i [class]=\"(fieldInstance|ajfAsFieldInstance).node.fieldType | ajfFieldIcon\" item-right></i>\n                            <p>{{ (fieldInstance|ajfAsFieldInstance).node.description }}</p>\n                            <ion-label [innerHTML]=\"fieldInstance.node.label | translate\"></ion-label>\n                            <ajf-field [instance]=\"fieldInstance|ajfAsFieldInstance\" [readonly]=\"readonly\"></ajf-field>\n                          </div>\n                        </ng-container>\n                        <div *ngIf=\"lastSlide && longSlide\" class=\"ajf-group-actions ajf-group-actions-bottom\">\n                          <ion-fab-button size=\"small\" (click)=\"addGroup(slideInstance)\" [disabled]=\"!(slideInstance|ajfAsRepeatingSlideInstance).canAdd\" mat-mini-fab>\n                            <ion-icon name=\"add\"></ion-icon>\n                          </ion-fab-button>\n                          <ion-fab-button size=\"small\" (click)=\"removeGroup(slideInstance)\" [disabled]=\"!(slideInstance|ajfAsRepeatingSlideInstance).canRemove\" mat-mini-fab>\n                            <ion-icon name=\"remove\"></ion-icon>\n                          </ion-fab-button>\n                        </div>\n                      </ion-card-content>\n                    </ion-card>\n                  </div>\n                </ajf-page-slider-item>\n              </ng-container>\n            </ng-container>\n            <ng-container *ngIf=\"curSlides && curSlides!.length > 0 && hasEndMessage\">\n              <ajf-page-slider-item>\n                <div ajfFormPage class=\"ajf-form-page\">\n                  <ion-card>\n                    <ion-card-header>\n                      <div class=\"ajf-page-slider-item-header\">\n                        <h2>\n                          <span *ngIf=\"(slidesNum|async) as snum\" class=\"ajf-form-header-number\">\n                            {{ snum! + (hasStartMessage | ajfBoolToInt) + 1 }} &rarr;\n                          </span>\n                          <span class=\"ajf-title\">\n                            <ng-content select=\"[ajfFormEndMessageTitle]\"></ng-content>\n                          </span>\n                        </h2>\n                      </div>\n                    </ion-card-header>\n                    <ion-card-content>\n                      <ng-content select=\"[ajfFormEndMessage]\"></ng-content>\n                    </ion-card-content>\n                  </ion-card>\n                </div>\n              </ajf-page-slider-item>\n            </ng-container>\n          </ng-container>\n          <div ajfPageSliderBar *ngIf=\"!hideBottomToolbar\">\n            <div class=\"ajf-left-bar\">\n              <ion-buttons class=\"ajf-errors\" *ngIf=\"((errors | async) || 0) > 0\">\n                <ion-button (click)=\"goToPrevError()\" color=\"danger\">\n                  <ion-icon name=\"arrow-up\"></ion-icon>\n                </ion-button>\n                <ion-button (click)=\"goToNextError()\" color=\"danger\">\n                  <ion-icon name=\"arrow-down\"></ion-icon>\n                </ion-button>\n              </ion-buttons>\n              <div class=\"ajf-info-box ajf-error\">\n                <div class=\"ajf-title\" translate>\n                  Errors\n                </div>\n                <div class=\"ajf-content\">\n                  {{ errors | async }} / {{ slidesNum|async }}\n                </div>\n              </div>\n            </div>\n          </div>\n        </ajf-page-slider>\n      </div>\n    </div>\n  </form>\n</ng-container>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["ajf-form{display:block;position:relative}ajf-form form{display:block;position:absolute;top:0;right:0;bottom:0;left:0}ajf-form form .ajf-form-container{display:flex;flex-direction:column;height:100%}ajf-form form .ajf-form-container ion-toolbar{flex:0 0 auto;height:56px}ajf-form form .ajf-form-container ion-toolbar.ajf-hidden{opacity:0}ajf-form form .ajf-form-container>.ajf-slider-container{flex:1 1 auto;position:relative;height:calc(100% - 56px)}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider{height:100%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content{padding:16px}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page{flex:1;max-height:100%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card{flex:1;margin-bottom:2em}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-header{overflow:visible !important}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-header .ajf-group-actions{position:absolute;left:calc(100vw - 160px - 6em);width:160px;margin-top:-2em;padding:15px;z-index:10;white-space:nowrap;overflow:visible !important}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-header .ajf-group-actions ion-fab-button{display:inline-block;overflow:visible !important}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content{display:flex;flex-wrap:wrap;flex-direction:row;align-content:flex-start;position:relative}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content .ajf-group-actions-bottom{width:100%;text-align:right;overflow:visible !important}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content .ajf-group-actions-bottom ion-fab-button{overflow:visible !important;display:inline-block}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry{flex:1 0 auto;padding-left:10px;padding-right:10px;width:100%;box-sizing:border-box}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-normal{width:100%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-small{width:50%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-smaller{width:33%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-tiny{width:25%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-mini{width:20%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider .ajf-page-slider-item-header{display:flex;align-items:center;width:100%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider .ajf-page-slider-item-header>h2{flex:1}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider .ajf-page-slider-item-header>h2>.ajf-form-header-number{margin-right:.5em}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider .ajf-page-slider-item-header>h2>.ajf-title{display:inline-block;margin-right:40px;white-space:normal;vertical-align:top}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar{display:flex;align-items:flex-start;flex-direction:row;position:absolute;bottom:0}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar ion-buttons.ajf-errors{order:1;color:red}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar .ajf-info-box{height:40px;padding:4px}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar .ajf-info-box>div{height:16px;line-height:16px}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar .ajf-info-box>div.ajf-content{font-weight:bold}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar .ajf-info-box.ajf-error{order:2;color:red}ajf-form form .ajf-form-container .ajf-spacer{flex:1 0 auto}\n"]
            }] }
];
/** @nocollapse */
AjfFormRenderer.ctorParameters = () => [
    { type: AjfFormRendererService },
    { type: ChangeDetectorRef }
];
if (false) {
    /** @type {?} */
    AjfFormRenderer.ngAcceptInputType_fixedOrientation;
    /** @type {?} */
    AjfFormRenderer.ngAcceptInputType_hasEndMessage;
    /** @type {?} */
    AjfFormRenderer.ngAcceptInputType_hasStartMessage;
    /** @type {?} */
    AjfFormRenderer.ngAcceptInputType_hideBottomToolbar;
    /** @type {?} */
    AjfFormRenderer.ngAcceptInputType_hideNavigationButtons;
    /** @type {?} */
    AjfFormRenderer.ngAcceptInputType_hideTopToolbar;
    /** @type {?} */
    AjfFormRenderer.ngAcceptInputType_saveDisabled;
    /** @type {?} */
    AjfFormRenderer.ngAcceptInputType_readonly;
    /**
     * @type {?}
     * @private
     */
    AjfFormRenderer.prototype._longSlide;
    /**
     * @type {?}
     * @private
     */
    AjfFormRenderer.prototype._viewInitEvt;
    /**
     * @type {?}
     * @private
     */
    AjfFormRenderer.prototype._scrollFinishSub;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/forms/form-page.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AjfFormPage {
}
AjfFormPage.decorators = [
    { type: Directive, args: [{ selector: '[ajfFormPage]' },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/forms/select-has-search-bar.pipe.ts
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
    { type: Pipe, args: [{ name: 'ajfSelectHasSearchBar' },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/forms/select-use-virtual-scroll.pipe.ts
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
    { type: Pipe, args: [{ name: 'ajfSelectUseVirtualScroll' },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/forms/forms-module.ts
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
                exports: [
                    AjfFormField,
                    AjfFormRenderer
                ],
                providers: [
                    AjfFieldService,
                    AjfWarningAlertService,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: src/ionic/forms/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AjfBooleanFieldComponent, AjfDateFieldComponent, AjfDateInputFieldComponent, AjfEmptyFieldComponent, AjfFieldService, AjfFormField, AjfFormRenderer, AjfFormsModule, AjfInputFieldComponent, AjfMultipleChoiceFieldComponent, AjfNumberFieldComponent, AjfSingleChoiceFieldComponent, AjfTableFieldComponent, AjfTextareaFieldComponent, AjfTimeFieldComponent, AjfWarningAlertService, AjfBarcodeFieldComponent as ɵgc_ajf_src_ionic_forms_forms_a, AjfFormPage as ɵgc_ajf_src_ionic_forms_forms_b, AjfFormulaFieldComponent as ɵgc_ajf_src_ionic_forms_forms_c, AjfSelectHasSearchBarPipe as ɵgc_ajf_src_ionic_forms_forms_d, AjfSelectUseVirtualScroll as ɵgc_ajf_src_ionic_forms_forms_e };
//# sourceMappingURL=forms.js.map
