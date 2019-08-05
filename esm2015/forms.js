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
import { InjectionToken, Component, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, ChangeDetectorRef, Optional, Inject, EventEmitter, ViewChildren, Directive, Pipe, NgModule } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AlertController, IonicModule } from '@ionic/angular';
import { AjfFormField as AjfFormField$1, AjfFormRendererService, AjfFormRenderer as AjfFormRenderer$1, AjfFormsModule as AjfFormsModule$1 } from '@ajf/core/forms';
import { delayWhen, switchMap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GicModule } from '@gic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { AjfCommonModule } from '@ajf/core/common';
import { AjfCalendarModule } from '@ajf/ionic/calendar';
import { AjfCheckboxGroupModule } from '@ajf/ionic/checkbox-group';
import { AjfPageSliderModule } from '@ajf/ionic/page-slider';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const AJF_SEARCH_ALERT_TRESHOLD = new InjectionToken('AJF_SEARCH_ALERT_TRESHOLD');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AjfFormField extends AjfFormField$1 {
    /**
     * @param {?} _rendererService
     * @param {?} _changeDetectionRef
     * @param {?} _alertCtrl
     * @param {?} _searchTreshold
     */
    constructor(_rendererService, _changeDetectionRef, _alertCtrl, _searchTreshold) {
        super(_rendererService, _changeDetectionRef);
        this._alertCtrl = _alertCtrl;
        this._searchTreshold = _searchTreshold;
        if (this._searchTreshold == null) {
            this._searchTreshold = 5;
        }
    }
    /**
     * @return {?}
     */
    get searchTreshold() { return this._searchTreshold; }
    /**
     * @param {?} messagesWarning
     * @return {?}
     */
    showWarningAlertPrompt(messagesWarning) {
        return new Observable((/**
         * @param {?} subscriber
         * @return {?}
         */
        (subscriber) => {
            this._alertCtrl.create({
                header: 'Warning',
                message: messagesWarning.join('\n'),
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
                this.alert = alert;
                alert.onDidDismiss().then((/**
                 * @return {?}
                 */
                () => { this.alert = null; }));
            }));
        }));
    }
    /**
     * @return {?}
     */
    hasSearch() {
        /** @type {?} */
        const fieldInstance = (/** @type {?} */ (this.fieldInstance));
        return fieldInstance.filteredChoices
            && fieldInstance.filteredChoices.length > this._searchTreshold;
    }
}
AjfFormField.decorators = [
    { type: Component, args: [{selector: 'ajf-field',
                template: "<ng-container *ngIf=\"control|async as curControl\"><div [ngSwitch]=\"fieldInstance.field.fieldType\" [ngClass]=\"'ajf-field-' + fieldInstance.completeName\" [class.ajf-validated]=\"fieldInstance|ajfFieldIsValid\"><ion-input *ngSwitchCase=\"ajfFieldTypes.String\" type=\"text\" [formControl]=\"curControl\"></ion-input><ng-container *ngSwitchCase=\"ajfFieldTypes.Text\"><ion-textarea [formControl]=\"curControl\"></ion-textarea></ng-container><ion-input *ngSwitchCase=\"ajfFieldTypes.Number\" type=\"number\" [formControl]=\"curControl\"></ion-input><ion-toggle *ngSwitchCase=\"ajfFieldTypes.Boolean\" [formControl]=\"curControl\"></ion-toggle><ng-container *ngSwitchCase=\"ajfFieldTypes.SingleChoice\"><ng-container *ngIf=\"(!fwc.forceExpanded && fwcInst.filteredChoices && fwcInst.filteredChoices.length > searchTreshold) || fwc.forceNarrow\"><div class=\"ajf-item-container\"><gic-select *ngIf=\"fwcInst.filteredChoices as cs\" #singleChoiceSelect [searchBar]=\"fwcInst|ajfSelectHasSearchBar:searchTreshold\" [useVirtualScroll]=\"fwcInst|ajfSelectUseVirtualScroll:100\" [placeholder]=\"fieldInstance.field.label\" [formControl]=\"curControl\"><ion-virtual-scroll [items]=\"cs\"><gic-select-option *virtualItem=\"let item\" [value]=\"item.value\">{{ item.label|translate }}</gic-select-option></ion-virtual-scroll></gic-select></div></ng-container><div class=\"ajf-choices-container\" *ngIf=\"!fwc.forceNarrow && (fwcInst.field.forceExpanded || (fwcInst.filteredChoices && fwcInst.filteredChoices.length <= searchTreshold))\"><ion-radio-group [formControl]=\"curControl\"><ion-item *ngFor=\"let choice of fwcInst.filteredChoices\"><ion-label>{{ choice.label | translate}}</ion-label><ion-radio [value]=\"choice.value\"></ion-radio></ion-item></ion-radio-group></div></ng-container><ng-container *ngSwitchCase=\"ajfFieldTypes.MultipleChoice\"><ng-container *ngIf=\"(!fwc.forceExpanded && fwcInst.filteredChoices && fwcInst.filteredChoices.length > searchTreshold) || fwcInst.field.forceNarrow\"><div class=\"ajf-item-container\"><gic-select *ngIf=\"fwcInst.filteredChoices as cs\" #multipleChoiceSelect multiple=\"multiple\" [searchBar]=\"fwcInst|ajfSelectHasSearchBar:searchTreshold\" [useVirtualScroll]=\"fwcInst|ajfSelectUseVirtualScroll:100\" [placeholder]=\"fieldInstance.field.label\" [formControl]=\"curControl\"><gic-select-option *ngFor=\"let item of cs\" [value]=\"item.value\">{{ item.label|translate }}</gic-select-option></gic-select></div></ng-container><ng-container *ngIf=\"!fwc.forceNarrow && (fwcInst.field.forceExpanded || (fwcInst.filteredChoices && fwcInst.filteredChoices.length <= searchTreshold))\"><div ajf-checkbox-group [formControl]=\"curControl\" class=\"ajf-choices-container\"><ion-card *ngFor=\"let choice of fwcInst.filteredChoices\"><ajf-checkbox-group-item [value]=\"choice.value\">{{ choice.label | translate }}</ajf-checkbox-group-item></ion-card></div></ng-container></ng-container><ion-input *ngSwitchCase=\"ajfFieldTypes.Formula\" [formControl]=\"curControl\" type=\"text\" readonly=\"readonly\"></ion-input><ion-item *ngSwitchCase=\"ajfFieldTypes.Date\"><ajf-calendar selectionMode=\"day\" dateOnlyForDay [minDate]=\"datefInst.field.minDateValue\" [maxDate]=\"datefInst.field.maxDateValue\" [formControl]=\"curControl\"></ajf-calendar></ion-item><ion-item *ngSwitchCase=\"ajfFieldTypes.DateInput\"><ion-input type=\"date\" [formControl]=\"control | async\"></ion-input></ion-item><ng-container *ngSwitchCase=\"ajfFieldTypes.Empty\"><div [innerHTML]=\"emptyfInst.field.HTML\"></div></ng-container><ng-container *ngSwitchCase=\"ajfFieldTypes.Table\"><div class=\"ajf-table-container\"><table><ng-container *ngFor=\"let columns of tablefInst.visibleColumns; let i = index\"><tr [ngClass]=\"i | tableRowClass\"><td *ngFor=\"let cellValue of columns\">{{ cellValue | ajfTranslateIfString | ajfFormatIfNumber: '.2' }}</td></tr></ng-container></table></div></ng-container></div><ng-container *ngIf=\"fieldInstance.field.hasAttachments\"><ng-container *ngFor=\"let attachment of fieldInstance.field.attachments\"><a [href]=\"attachment.value\" target=\"_blank\">{{attachment.label}}</a></ng-container></ng-container><ng-container *ngIf=\"fieldInstance.validationResults\"><div class=\"ajf-errors\"><ng-container *ngFor=\"let res of fieldInstance.validationResults\"><div class=\"error\" *ngIf=\"!res.result\">{{ res.error | translate }}</div></ng-container></div></ng-container></ng-container>",
                styles: ["ajf-field ion-select{position:relative}ajf-field ion-input,ajf-field ion-textarea{border:dashed 2px #eee}ajf-field .ajf-choices-container{flex-direction:row;align-items:stretch;flex-wrap:wrap;display:flex}ajf-field .ajf-choices-container>ion-radio-group{display:flex;flex-wrap:wrap}ajf-field .ajf-choices-container>ion-radio-group ion-item{--ion-item-border-color:transparent}ajf-field .ajf-choices-container>ion-radio-group ion-item ion-label{margin-right:10px}ajf-field .ajf-choices-container>ion-card{margin-top:0;width:33%;display:flex;font-size:13px;flex-wrap:wrap;flex-basis:21%!important;flex-shrink:3!important}ajf-field .ajf-choices-container>ion-card>ajf-checkbox-group-item{width:100%;display:flex;flex-direction:column;align-items:stretch;justify-content:center}ajf-field .ajf-choices-container>ion-card>ion-item{font-size:13px;flex:1 0 auto;flex-shrink:3!important;flex-basis:21%!important;margin:0 10px}ajf-field .ajf-item-container{position:relative}ajf-field .ajf-errors{font-style:italic;padding:5px}ajf-field tr.ajf-row-odd{background-color:grey}ajf-field .ajf-table-container{overflow-x:auto}ajf-field .ajf-table-container table{width:100%}"],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                inputs: [
                    'fieldInstance'
                ],
                outputs: [
                    'valueChanged'
                ],
                queries: {
                    singleChoiceSelect: new ViewChild('singleChoiceSelect', { static: false }),
                    multipleChoiceSelect: new ViewChild('multipleChoiceSelect', { static: false })
                }
            },] },
];
/** @nocollapse */
AjfFormField.ctorParameters = () => [
    { type: AjfFormRendererService },
    { type: ChangeDetectorRef },
    { type: AlertController },
    { type: Number, decorators: [{ type: Optional }, { type: Inject, args: [AJF_SEARCH_ALERT_TRESHOLD,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                template: "<ng-container *ngIf=\"formGroup|async as currentFormGroup\"><form novalidate [formGroup]=\"currentFormGroup\"><div class=\"ajf-form-container\"><ion-toolbar *ngIf=\"!hideTopToolbar\">{{ title | translate }}<ion-buttons slot=\"end\"><ion-button *ngIf=\"!saveDisabled\" (click)=\"onSave($event)\">{{ 'Save' | translate }}</ion-button></ion-buttons></ion-toolbar><div class=\"ajf-slider-container\"><ajf-page-slider (orientationChange)=\"orientationChangeHandler($event)\" [hideNavigationButtons]=\"hideNavigationButtons\" [fixedOrientation]=\"fixedOrientation\" [orientation]=\"orientation\" #formSlider><ng-container *ngIf=\"(slides|async) as curSlides\"><ng-container *ngIf=\"curSlides.length > 0 && hasStartMessage\"><ajf-page-slider-item><div ajfFormPage class=\"ajf-form-page\"><ion-card><ion-card-header><div class=\"ajf-page-slider-item-header\"><h2><span class=\"ajf-form-header-number\">1 &rarr; </span><span class=\"ajf-title\"><ng-content select=\"[ajfFormStartMessageTitle]\"></ng-content></span></h2></div></ion-card-header><ion-card-content><ng-content select=\"[ajfFormStartMessage]\"></ng-content></ion-card-content></ion-card></div></ajf-page-slider-item></ng-container><ng-container *ngFor=\"let slideInstance of curSlides; trackBy: trackNodeById\"><ng-container *ngIf=\"(!isRepeatingSlide(slideInstance)) && slideInstance.visible\"><ajf-page-slider-item><div ajfFormPage class=\"ajf-form-page\"><ion-card><ion-card-header><div class=\"ajf-page-slider-item-header\"><h2><span class=\"ajf-form-header-number\">{{ slideInstance.position + (hasStartMessage | boolToInt) }} &rarr;</span> <span class=\"ajf-title\">{{ slideInstance.slide.label | translate}}</span></h2><ion-icon color=\"danger\" name=\"warning\" *ngIf=\"!slideInstance.valid\"></ion-icon><ion-icon color=\"secondary\" name=\"checkmark\" *ngIf=\"slideInstance.valid\"></ion-icon></div></ion-card-header><ion-card-content><ng-container *ngFor=\"let fieldInstance of slideInstance.flatNodes; trackBy: trackNodeById\"><div [ngClass]=\"'ajf-' + fieldInstance.field.size\" class=\"ajf-field-entry\" *ngIf=\"fieldInstance.visible\"><i [class]=\"fieldInstance.field | fieldIcon\" item-right></i><p>{{ fieldInstance.field.description }}</p><ion-label [innerHTML]=\"fieldInstance.field.label | translate\"></ion-label><ajf-field [fieldInstance]=\"fieldInstance\"></ajf-field></div></ng-container></ion-card-content></ion-card></div></ajf-page-slider-item></ng-container><ng-container *ngIf=\"isRepeatingSlide(slideInstance) && slideInstance.visible\"><ajf-page-slider-item *ngFor=\"let curRep of slideInstance.repsArr; let idx = index; let lastSlide = last\"><div ajfFormPage class=\"ajf-form-page\"><ion-card><ion-card-header><div class=\"ajf-page-slider-item-header\"><h2><span class=\"ajf-form-header-number\">{{ slideInstance.slidePosition(idx) }} &rarr;</span> <span class=\"ajf-title\">{{ slideInstance.slide.label | translate }}</span></h2><ion-icon color=\"danger\" name=\"ajf-warning\" *ngIf=\"!slideInstance.validSlide(idx)\"></ion-icon><ion-icon color=\"secondary\" name=\"checkmark\" *ngIf=\"slideInstance.validSlide(idx)\"></ion-icon></div><div *ngIf=\"lastSlide\" class=\"ajf-group-actions\"><ion-fab-button size=\"small\" (click)=\"addGroup(slideInstance)\" [disabled]=\"!slideInstance.canAddGroup\"><ion-icon name=\"add\"></ion-icon></ion-fab-button><ion-fab-button size=\"small\" (click)=\"removeGroup(slideInstance)\" [disabled]=\"!slideInstance.canRemoveGroup\"><ion-icon name=\"remove\"></ion-icon></ion-fab-button></div></ion-card-header><ion-card-content><ng-container *ngFor=\"let fieldInstance of slideInstance.slideNodes[idx]; trackBy: trackNodeById\"><div [ngClass]=\"'ajf-' + fieldInstance.field.size\" class=\"ajf-field-entry\" *ngIf=\"fieldInstance.visible\"><i [class]=\"fieldInstance.field | fieldIcon\" item-right></i><p>{{ fieldInstance.field.description }}</p><ion-label [innerHTML]=\"fieldInstance.field.label | translate\"></ion-label><ajf-field [fieldInstance]=\"fieldInstance\"></ajf-field></div></ng-container><div *ngIf=\"lastSlide && longSlide\" class=\"ajf-group-actions ajf-group-actions-bottom\"><ion-fab-button size=\"small\" (click)=\"addGroup(slideInstance)\" [disabled]=\"!slideInstance.canAddGroup\" mat-mini-fab><ion-icon name=\"add\"></ion-icon></ion-fab-button><ion-fab-button size=\"small\" (click)=\"removeGroup(slideInstance)\" [disabled]=\"!slideInstance.canRemoveGroup\" mat-mini-fab><ion-icon name=\"remove\"></ion-icon></ion-fab-button></div></ion-card-content></ion-card></div></ajf-page-slider-item></ng-container></ng-container><ng-container *ngIf=\"curSlides.length > 0 && hasEndMessage\"><ajf-page-slider-item><div ajfFormPage class=\"ajf-form-page\"><ion-card><ion-card-header><div class=\"ajf-page-slider-item-header\"><h2><span *ngIf=\"(slidesNum|async) as snum\" class=\"ajf-form-header-number\">{{ snum + (hasStartMessage | boolToInt) + 1 }} &rarr; </span><span class=\"ajf-title\"><ng-content select=\"[ajfFormEndMessageTitle]\"></ng-content></span></h2></div></ion-card-header><ion-card-content><ng-content select=\"[ajfFormEndMessage]\"></ng-content></ion-card-content></ion-card></div></ajf-page-slider-item></ng-container></ng-container><div ajfPageSliderBar *ngIf=\"!hideBottomToolbar\"><div class=\"ajf-left-bar\"><ion-buttons class=\"ajf-errors\" *ngIf=\"((errors | async) || 0) > 0\"><ion-button (click)=\"goToPrevError()\" color=\"danger\"><ion-icon name=\"arrow-up\"></ion-icon></ion-button><ion-button (click)=\"goToNextError()\" color=\"danger\"><ion-icon name=\"arrow-down\"></ion-icon></ion-button></ion-buttons><div class=\"ajf-info-box ajf-error\"><div class=\"ajf-title\" translate>Errors</div><div class=\"ajf-content\">{{ errors | async }} / {{ slidesNum|async }}</div></div></div></div></ajf-page-slider></div></div></form></ng-container>",
                styles: ["ajf-form{display:block;position:relative}ajf-form form{display:block;position:absolute;top:0;right:0;bottom:0;left:0}ajf-form form .ajf-form-container{display:flex;flex-direction:column;height:100%}ajf-form form .ajf-form-container ion-toolbar{flex:0 0 auto;height:56px}ajf-form form .ajf-form-container ion-toolbar.ajf-hidden{opacity:0}ajf-form form .ajf-form-container>.ajf-slider-container{flex:1 1 auto;position:relative;height:calc(100% - 56px)}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider{height:100%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content{padding:16px}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page{flex:1;max-height:100%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card{flex:1;margin-bottom:2em}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-header{overflow:visible!important}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-header .ajf-group-actions{position:absolute;left:calc(100vw - 160px - 6em);width:160px;margin-top:-2em;padding:15px;z-index:10;white-space:nowrap;overflow:visible!important}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-header .ajf-group-actions ion-fab-button{display:inline-block;overflow:visible!important}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content{display:flex;flex-wrap:wrap;flex-direction:row;align-content:flex-start;position:relative}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content .ajf-group-actions-bottom{width:100%;text-align:right;overflow:visible!important}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content .ajf-group-actions-bottom ion-fab-button{overflow:visible!important;display:inline-block}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry{flex:1 0 auto;padding-left:10px;padding-right:10px;width:100%;box-sizing:border-box}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-normal{width:100%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-small{width:50%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-smaller{width:33%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-tiny{width:25%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-mini{width:20%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider .ajf-page-slider-item-header{display:flex;align-items:center;width:100%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider .ajf-page-slider-item-header>h2{flex:1}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider .ajf-page-slider-item-header>h2>.ajf-form-header-number{margin-right:.5em}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider .ajf-page-slider-item-header>h2>.ajf-title{display:inline-block;margin-right:40px;white-space:normal;vertical-align:top}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar{display:flex;align-items:flex-start;flex-direction:row;position:absolute;bottom:0}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar ion-buttons.ajf-errors{order:1;color:red}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar .ajf-info-box{height:40px;padding:4px}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar .ajf-info-box>div{height:16px;line-height:16px}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar .ajf-info-box>div.ajf-content{font-weight:700}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar .ajf-info-box.ajf-error{order:2;color:red}ajf-form form .ajf-form-container .ajf-spacer{flex:1 0 auto}"],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                inputs: [
                    'hasStartMessage',
                    'hasEndMessage',
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AjfFormPage {
}
AjfFormPage.decorators = [
    { type: Directive, args: [{ selector: '[ajfFormPage]' },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AjfSelectHasSearchBarPipe {
    /**
     * @param {?} instance
     * @param {?} searchTreshold
     * @return {?}
     */
    transform(instance, searchTreshold) {
        return instance.filteredChoices && instance.filteredChoices.length > searchTreshold;
    }
}
AjfSelectHasSearchBarPipe.decorators = [
    { type: Pipe, args: [{ name: 'ajfSelectHasSearchBar' },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AjfSelectUseVirtualScroll {
    /**
     * @param {?} instance
     * @param {?} vsTreshold
     * @return {?}
     */
    transform(instance, vsTreshold) {
        return instance.filteredChoices && instance.filteredChoices.length > vsTreshold;
    }
}
AjfSelectUseVirtualScroll.decorators = [
    { type: Pipe, args: [{ name: 'ajfSelectUseVirtualScroll' },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AjfFormsModule {
}
AjfFormsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    IonicModule,
                    GicModule,
                    TranslateModule,
                    AjfCommonModule,
                    AjfFormsModule$1,
                    AjfCalendarModule,
                    AjfCheckboxGroupModule,
                    AjfPageSliderModule,
                ],
                declarations: [
                    AjfFormField,
                    AjfFormPage,
                    AjfFormRenderer,
                    AjfSelectHasSearchBarPipe,
                    AjfSelectUseVirtualScroll,
                ],
                exports: [
                    AjfFormField,
                    AjfFormRenderer,
                ]
            },] },
];

export { AJF_SEARCH_ALERT_TRESHOLD, AjfFormField, AjfFormRenderer, AjfFormsModule, AjfFormPage as ɵa, AjfSelectHasSearchBarPipe as ɵb, AjfSelectUseVirtualScroll as ɵc };
//# sourceMappingURL=forms.js.map
