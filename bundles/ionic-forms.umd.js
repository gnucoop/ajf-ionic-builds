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
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@ionic/angular'), require('@ajf/core/forms'), require('rxjs/operators'), require('@angular/common'), require('@angular/forms'), require('ionic-selectable'), require('@ngx-translate/core'), require('@ajf/ionic/calendar'), require('@ajf/ionic/checkbox-group'), require('@ajf/ionic/page-slider')) :
    typeof define === 'function' && define.amd ? define('@ajf/ionic/forms', ['exports', '@angular/core', 'rxjs', '@ionic/angular', '@ajf/core/forms', 'rxjs/operators', '@angular/common', '@angular/forms', 'ionic-selectable', '@ngx-translate/core', '@ajf/ionic/calendar', '@ajf/ionic/checkbox-group', '@ajf/ionic/page-slider'], factory) :
    (global = global || self, factory((global.ajf = global.ajf || {}, global.ajf.ionic = global.ajf.ionic || {}, global.ajf.ionic.forms = {}), global.ng.core, global.rxjs, global.ionic.angular, global.ajf.core.forms, global.rxjs.operators, global.ng.common, global.ng.forms, global.ionicSelectable, global.ngxt.core, global.ajf.ionic.calendar, global.ajf.ionic.checkboxGroup, global.ajf.ionic.pageSlider));
}(this, function (exports, core, rxjs, angular, forms, operators, common, forms$1, ionicSelectable, core$1, calendar, checkboxGroup, pageSlider) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var AJF_SEARCH_ALERT_TRESHOLD = new core.InjectionToken('AJF_SEARCH_ALERT_TRESHOLD');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AjfFormField = /** @class */ (function (_super) {
        __extends(AjfFormField, _super);
        function AjfFormField(_rendererService, _changeDetectionRef, _alertCtrl, _searchTreshold) {
            var _this = _super.call(this, _rendererService, _changeDetectionRef) || this;
            _this._alertCtrl = _alertCtrl;
            _this._searchTreshold = _searchTreshold;
            if (_this._searchTreshold == null) {
                _this._searchTreshold = 5;
            }
            return _this;
        }
        Object.defineProperty(AjfFormField.prototype, "searchTreshold", {
            get: /**
             * @return {?}
             */
            function () { return this._searchTreshold; },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} messagesWarning
         * @return {?}
         */
        AjfFormField.prototype.showWarningAlertPrompt = /**
         * @param {?} messagesWarning
         * @return {?}
         */
        function (messagesWarning) {
            var _this = this;
            return new rxjs.Observable((/**
             * @param {?} subscriber
             * @return {?}
             */
            function (subscriber) {
                _this._alertCtrl.create({
                    header: 'Warning',
                    message: messagesWarning.join('\n'),
                    buttons: [
                        {
                            text: 'No',
                            handler: (/**
                             * @return {?}
                             */
                            function () {
                                subscriber.next((/** @type {?} */ ({ result: false })));
                                subscriber.complete();
                            })
                        },
                        {
                            text: 'Yes',
                            handler: (/**
                             * @return {?}
                             */
                            function () {
                                subscriber.next((/** @type {?} */ ({ result: true })));
                                subscriber.complete();
                            })
                        }
                    ]
                }).then((/**
                 * @param {?} alert
                 * @return {?}
                 */
                function (alert) {
                    _this.alert = alert;
                    alert.onDidDismiss().then((/**
                     * @return {?}
                     */
                    function () { _this.alert = null; }));
                }));
            }));
        };
        /**
         * @return {?}
         */
        AjfFormField.prototype.hasSearch = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var fieldInstance = (/** @type {?} */ (this.fieldInstance));
            return fieldInstance.filteredChoices
                && fieldInstance.filteredChoices.length > this._searchTreshold;
        };
        AjfFormField.decorators = [
            { type: core.Component, args: [{selector: 'ajf-field',
                        template: "<ng-container *ngIf=\"control|async as curControl\"><div [ngSwitch]=\"fieldInstance.field.fieldType\"><ion-input *ngSwitchCase=\"ajfFieldTypes.String\" type=\"text\" [formControl]=\"curControl\"></ion-input><ng-container *ngSwitchCase=\"ajfFieldTypes.Text\"><ion-textarea [formControl]=\"curControl\"></ion-textarea></ng-container><ion-input *ngSwitchCase=\"ajfFieldTypes.Number\" type=\"number\" [formControl]=\"curControl\"></ion-input><ion-toggle *ngSwitchCase=\"ajfFieldTypes.Boolean\" [formControl]=\"curControl\"></ion-toggle><ng-container *ngSwitchCase=\"ajfFieldTypes.SingleChoice\"><ng-container *ngIf=\"(!fwc.forceExpanded && fwcInst.filteredChoices && fwcInst.filteredChoices.length > searchTreshold) || fwc.forceNarrow\"><div class=\"ajf-item-container\"><ionic-selectable *ngIf=\"fwcInst.filteredChoices|ajfChoicesMap as cm\" #singleChoiceSelect [canSearch]=\"hasSearch()\" [items]=\"cm.array\" [placeholder]=\"fieldInstance.field.label\" [formControl]=\"curControl\"><ng-template ionicSelectableItemTemplate let-choice=\"item\">{{ cm.map[choice] | translate }}</ng-template><ng-template ionicSelectableValueTemplate let-selChoice=\"value\">{{ cm.map[selChoice] | translate }}</ng-template></ionic-selectable></div></ng-container><div class=\"ajf-choices-container\" *ngIf=\"!fwc.forceNarrow && (fwcInst.field.forceExpanded || (fwcInst.filteredChoices && fwcInst.filteredChoices.length <= searchTreshold))\"><ion-radio-group [formControl]=\"curControl\"><ion-item *ngFor=\"let choice of fwcInst.filteredChoices\"><ion-label>{{ choice.label | translate}}</ion-label><ion-radio [value]=\"choice.value\"></ion-radio></ion-item></ion-radio-group></div></ng-container><ng-container *ngSwitchCase=\"ajfFieldTypes.MultipleChoice\"><ng-container *ngIf=\"(!fwc.forceExpanded && fwcInst.filteredChoices && fwcInst.filteredChoices.length > searchTreshold) || fwcInst.field.forceNarrow\"><div class=\"ajf-item-container\"><ionic-selectable *ngIf=\"fwcInst.filteredChoices|ajfChoicesMap as cm\" #multipleChoiceSelect [isMultiple]=\"true\" [canSearch]=\"hasSearch()\" [items]=\"cm.array\" [placeholder]=\"fieldInstance.field.label\" [formControl]=\"curControl\"><ng-template ionicSelectableItemTemplate let-choice=\"item\">{{ cm.map[choice] | translate }}</ng-template><ng-template ionicSelectableValueTemplate let-selChoices=\"value\"><div class=\"ionic-selectable-value-item\" *ngFor=\"let selChoice of selChoices\">{{ cm.map[selChoice] | translate }}</div></ng-template></ionic-selectable></div></ng-container><ng-container *ngIf=\"!fwc.forceNarrow && (fwcInst.field.forceExpanded || (fwcInst.filteredChoices && fwcInst.filteredChoices.length <= searchTreshold))\"><div ajf-checkbox-group [formControl]=\"curControl\" class=\"ajf-choices-container\"><ion-card *ngFor=\"let choice of fwcInst.filteredChoices\"><ajf-checkbox-group-item [value]=\"choice.value\">{{ choice.label | translate }}</ajf-checkbox-group-item></ion-card></div></ng-container></ng-container><ion-input *ngSwitchCase=\"ajfFieldTypes.Formula\" [formControl]=\"curControl\" type=\"text\" readonly=\"readonly\"></ion-input><ion-item *ngSwitchCase=\"ajfFieldTypes.Date\"><ajf-calendar selectionMode=\"day\" dateOnlyForDay [minDate]=\"datefInst.field.minDateValue\" [maxDate]=\"datefInst.field.maxDateValue\" [formControl]=\"curControl\"></ajf-calendar></ion-item><ion-item *ngSwitchCase=\"ajfFieldTypes.DateInput\"><ion-input type=\"date\" [formControl]=\"control | async\"></ion-input></ion-item><ng-container *ngSwitchCase=\"ajfFieldTypes.Empty\"><div [innerHTML]=\"emptyfInst.field.HTML\"></div></ng-container><ng-container *ngSwitchCase=\"ajfFieldTypes.Table\"><div class=\"ajf-table-container\"><table><ng-container *ngFor=\"let columns of tablefInst.visibleColumns; let i = index\"><tr [ngClass]=\"i | tableRowClass\"><td *ngFor=\"let cellValue of columns\">{{ cellValue | translate }}</td></tr></ng-container></table></div></ng-container></div><ng-container *ngIf=\"fieldInstance.field.hasAttachments\"><ng-container *ngFor=\"let attachment of fieldInstance.field.attachments\"><a [href]=\"attachment.value\" target=\"_blank\">{{attachment.label}}</a></ng-container></ng-container><ng-container *ngIf=\"fieldInstance.validationResults\"><div class=\"ajf-errors\"><ng-container *ngFor=\"let res of fieldInstance.validationResults\"><div class=\"error\" *ngIf=\"!res.result\">{{ res.error | translate }}</div></ng-container></div></ng-container></ng-container>",
                        styles: ["ajf-field ion-select{position:relative}ajf-field ion-input,ajf-field ion-textarea{border:dashed 2px #eee}ajf-field .ajf-choices-container{flex-direction:row;align-items:stretch;flex-wrap:wrap;display:flex}ajf-field .ajf-choices-container>ion-radio-group{display:flex;flex-wrap:wrap}ajf-field .ajf-choices-container>ion-radio-group ion-item{--ion-item-border-color:transparent}ajf-field .ajf-choices-container>ion-radio-group ion-item ion-label{margin-right:10px}ajf-field .ajf-choices-container>ion-card{margin-top:0;width:33%;display:flex;font-size:13px;flex-wrap:wrap;flex-basis:21%!important;flex-shrink:3!important}ajf-field .ajf-choices-container>ion-card>ajf-checkbox-group-item{width:100%;display:flex;flex-direction:column;align-items:stretch;justify-content:center}ajf-field .ajf-choices-container>ion-card>ion-item{font-size:13px;flex:1 0 auto;flex-shrink:3!important;flex-basis:21%!important;margin:0 10px}ajf-field .ajf-item-container{position:relative}ajf-field .ajf-errors{font-style:italic;padding:5px}ajf-field tr.ajf-row-odd{background-color:grey}ajf-field .ajf-table-container{overflow-x:auto}ajf-field .ajf-table-container table{width:100%}"],
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        inputs: [
                            'fieldInstance'
                        ],
                        outputs: [
                            'valueChanged'
                        ],
                        queries: {
                            singleChoiceSelect: new core.ViewChild('singleChoiceSelect'),
                            multipleChoiceSelect: new core.ViewChild('multipleChoiceSelect')
                        }
                    },] },
        ];
        /** @nocollapse */
        AjfFormField.ctorParameters = function () { return [
            { type: forms.AjfFormRendererService },
            { type: core.ChangeDetectorRef },
            { type: angular.AlertController },
            { type: Number, decorators: [{ type: core.Optional }, { type: core.Inject, args: [AJF_SEARCH_ALERT_TRESHOLD,] }] }
        ]; };
        return AjfFormField;
    }(forms.AjfFormField));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AjfFormRenderer = /** @class */ (function (_super) {
        __extends(AjfFormRenderer, _super);
        function AjfFormRenderer(rendererService, cdr) {
            var _this = _super.call(this, rendererService, cdr) || this;
            _this._longSlide = false;
            _this._viewInitEvt = new core.EventEmitter();
            _this._scrollFinishSub = rxjs.Subscription.EMPTY;
            _this._scrollFinishSub = _this._viewInitEvt.pipe(operators.delayWhen((/**
             * @return {?}
             */
            function () { return _this.formGroup; })), operators.switchMap((/**
             * @return {?}
             */
            function () { return _this.formSlider.pageScrollFinish; }))).subscribe((/**
             * @param {?} _
             * @return {?}
             */
            function (_) { return _this._updateLongSlide(); }));
            return _this;
        }
        Object.defineProperty(AjfFormRenderer.prototype, "longSlide", {
            get: /**
             * @return {?}
             */
            function () { return this._longSlide; },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        AjfFormRenderer.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            _super.prototype.ngAfterViewInit.call(this);
            this._viewInitEvt.emit();
        };
        /**
         * @return {?}
         */
        AjfFormRenderer.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            _super.prototype.ngOnDestroy.call(this);
            this._scrollFinishSub.unsubscribe();
        };
        /**
         * @private
         * @return {?}
         */
        AjfFormRenderer.prototype._updateLongSlide = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var longSlide = this.formSlider.isCurrentPageLong();
            if (longSlide !== this._longSlide) {
                this._longSlide = longSlide;
                this._changeDetectorRef.markForCheck();
            }
        };
        AjfFormRenderer.decorators = [
            { type: core.Component, args: [{selector: 'ajf-form',
                        template: "<ng-container *ngIf=\"formGroup|async as currentFormGroup\"><form novalidate [formGroup]=\"currentFormGroup\"><div class=\"ajf-form-container\"><ion-toolbar *ngIf=\"!hideTopToolbar\">{{ title | translate }}<ion-buttons slot=\"end\"><ion-button *ngIf=\"!saveDisabled\" (click)=\"onSave($event)\">{{ 'Save' | translate }}</ion-button></ion-buttons></ion-toolbar><div class=\"ajf-slider-container\"><ajf-page-slider (orientationChange)=\"orientationChangeHandler($event)\" [hideNavigationButtons]=\"hideNavigationButtons\" [fixedOrientation]=\"fixedOrientation\" [orientation]=\"orientation\" #formSlider><ng-container *ngIf=\"(slides|async) as curSlides\"><ng-container *ngIf=\"curSlides.length > 0 && hasStartMessage\"><ajf-page-slider-item><div ajfFormPage class=\"ajf-form-page\"><ion-card><ion-card-header><div class=\"ajf-page-slider-item-header\"><h2><span class=\"ajf-form-header-number\">1 &rarr; </span><span class=\"ajf-title\"><ng-content select=\"[ajfFormStartMessageTitle]\"></ng-content></span></h2></div></ion-card-header><ion-card-content><ng-content select=\"[ajfFormStartMessage]\"></ng-content></ion-card-content></ion-card></div></ajf-page-slider-item></ng-container><ng-container *ngFor=\"let slideInstance of curSlides; trackBy: trackNodeById\"><ng-container *ngIf=\"(!isRepeatingSlide(slideInstance)) && slideInstance.visible\"><ajf-page-slider-item><div ajfFormPage class=\"ajf-form-page\"><ion-card><ion-card-header><div class=\"ajf-page-slider-item-header\"><h2><span class=\"ajf-form-header-number\">{{ slideInstance.position + (hasStartMessage | boolToInt) }} &rarr;</span> <span class=\"ajf-title\">{{ slideInstance.slide.label | translate}}</span></h2><ion-icon color=\"danger\" name=\"warning\" *ngIf=\"!slideInstance.valid\"></ion-icon><ion-icon color=\"secondary\" name=\"checkmark\" *ngIf=\"slideInstance.valid\"></ion-icon></div></ion-card-header><ion-card-content><ng-container *ngFor=\"let fieldInstance of slideInstance.flatNodes; trackBy: trackNodeById\"><div [ngClass]=\"'ajf-' + fieldInstance.field.size\" class=\"ajf-field-entry\" *ngIf=\"fieldInstance.visible\"><i [class]=\"fieldInstance.field | fieldIcon\" item-right></i><p>{{ fieldInstance.field.description }}</p><ion-label [innerHTML]=\"fieldInstance.field.label | translate\"></ion-label><ajf-field [fieldInstance]=\"fieldInstance\"></ajf-field></div></ng-container></ion-card-content></ion-card></div></ajf-page-slider-item></ng-container><ng-container *ngIf=\"isRepeatingSlide(slideInstance) && slideInstance.visible\"><ajf-page-slider-item *ngFor=\"let curRep of slideInstance.repsArr; let idx = index; let lastSlide = last\"><div ajfFormPage class=\"ajf-form-page\"><ion-card><ion-card-header><div class=\"ajf-page-slider-item-header\"><h2><span class=\"ajf-form-header-number\">{{ slideInstance.slidePosition(idx) }} &rarr;</span> <span class=\"ajf-title\">{{ slideInstance.slide.label | translate }}</span></h2><ion-icon color=\"danger\" name=\"ajf-warning\" *ngIf=\"!slideInstance.validSlide(idx)\"></ion-icon><ion-icon color=\"secondary\" name=\"checkmark\" *ngIf=\"slideInstance.validSlide(idx)\"></ion-icon></div><div *ngIf=\"lastSlide\" class=\"ajf-group-actions\"><ion-fab-button size=\"small\" (click)=\"addGroup(slideInstance)\" [disabled]=\"!slideInstance.canAddGroup\"><ion-icon name=\"add\"></ion-icon></ion-fab-button><ion-fab-button size=\"small\" (click)=\"removeGroup(slideInstance)\" [disabled]=\"!slideInstance.canRemoveGroup\"><ion-icon name=\"remove\"></ion-icon></ion-fab-button></div></ion-card-header><ion-card-content><ng-container *ngFor=\"let fieldInstance of slideInstance.slideNodes[idx]; trackBy: trackNodeById\"><div [ngClass]=\"'ajf-' + fieldInstance.field.size\" class=\"ajf-field-entry\" *ngIf=\"fieldInstance.visible\"><i [class]=\"fieldInstance.field | fieldIcon\" item-right></i><p>{{ fieldInstance.field.description }}</p><ion-label [innerHTML]=\"fieldInstance.field.label | translate\"></ion-label><ajf-field [fieldInstance]=\"fieldInstance\"></ajf-field></div></ng-container><div *ngIf=\"lastSlide && longSlide\" class=\"ajf-group-actions ajf-group-actions-bottom\"><ion-fab-button size=\"small\" (click)=\"addGroup(slideInstance)\" [disabled]=\"!slideInstance.canAddGroup\" mat-mini-fab><ion-icon name=\"add\"></ion-icon></ion-fab-button><ion-fab-button size=\"small\" (click)=\"removeGroup(slideInstance)\" [disabled]=\"!slideInstance.canRemoveGroup\" mat-mini-fab><ion-icon name=\"remove\"></ion-icon></ion-fab-button></div></ion-card-content></ion-card></div></ajf-page-slider-item></ng-container></ng-container><ng-container *ngIf=\"curSlides.length > 0 && hasEndMessage\"><ajf-page-slider-item><div ajfFormPage class=\"ajf-form-page\"><ion-card><ion-card-header><div class=\"ajf-page-slider-item-header\"><h2><span *ngIf=\"(slidesNum|async) as snum\" class=\"ajf-form-header-number\">{{ snum + (hasStartMessage | boolToInt) + 1 }} &rarr; </span><span class=\"ajf-title\"><ng-content select=\"[ajfFormEndMessageTitle]\"></ng-content></span></h2></div></ion-card-header><ion-card-content><ng-content select=\"[ajfFormEndMessage]\"></ng-content></ion-card-content></ion-card></div></ajf-page-slider-item></ng-container></ng-container><div ajfPageSliderBar *ngIf=\"!hideBottomToolbar\"><div class=\"ajf-left-bar\"><ion-buttons class=\"ajf-errors\" *ngIf=\"((errors | async) || 0) > 0\"><ion-button (click)=\"goToPrevError()\" color=\"danger\"><ion-icon name=\"arrow-up\"></ion-icon></ion-button><ion-button (click)=\"goToNextError()\" color=\"danger\"><ion-icon name=\"arrow-down\"></ion-icon></ion-button></ion-buttons><div class=\"ajf-info-box ajf-error\"><div class=\"ajf-title\" translate>Errors</div><div class=\"ajf-content\">{{ errors | async }} / {{ slidesNum|async }}</div></div></div></div></ajf-page-slider></div></div></form></ng-container>",
                        styles: ["ajf-form{display:block;position:relative}ajf-form form{display:block;position:absolute;top:0;right:0;bottom:0;left:0}ajf-form form .ajf-form-container{display:flex;flex-direction:column;height:100%}ajf-form form .ajf-form-container ion-toolbar{flex:0 0 auto;height:56px}ajf-form form .ajf-form-container ion-toolbar.ajf-hidden{opacity:0}ajf-form form .ajf-form-container>.ajf-slider-container{flex:1 1 auto;position:relative;height:calc(100% - 56px)}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider{height:100%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content{padding:16px}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page{flex:1;max-height:100%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card{flex:1;margin-bottom:2em}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-header{overflow:visible!important}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-header .ajf-group-actions{position:absolute;left:calc(100vw - 160px - 6em);width:160px;margin-top:-2em;padding:15px;z-index:10;white-space:nowrap;overflow:visible!important}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-header .ajf-group-actions ion-fab-button{display:inline-block;overflow:visible!important}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content{display:flex;flex-wrap:wrap;flex-direction:row;align-content:flex-start;position:relative}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content .ajf-group-actions-bottom{width:100%;text-align:right;overflow:visible!important}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content .ajf-group-actions-bottom ion-fab-button{overflow:visible!important;display:inline-block}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry{flex:1 0 auto;padding-left:10px;padding-right:10px;width:100%;box-sizing:border-box}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-normal{width:100%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-small{width:50%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-smaller{width:33%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-tiny{width:25%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider ajf-page-slider-item .ajf-page-slider-item-content .ajf-form-page>ion-card>ion-card-content>.ajf-field-entry.ajf-mini{width:20%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider .ajf-page-slider-item-header{display:flex;align-items:center;width:100%}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider .ajf-page-slider-item-header>h2{flex:1}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider .ajf-page-slider-item-header>h2>.ajf-form-header-number{margin-right:.5em}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider .ajf-page-slider-item-header>h2>.ajf-title{display:inline-block;margin-right:40px;white-space:normal;vertical-align:top}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar{display:flex;align-items:flex-start;flex-direction:row;position:absolute;bottom:0}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar ion-buttons.ajf-errors{order:1;color:red}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar .ajf-info-box{height:40px;padding:4px}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar .ajf-info-box>div{height:16px;line-height:16px}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar .ajf-info-box>div.ajf-content{font-weight:700}ajf-form form .ajf-form-container>.ajf-slider-container>ajf-page-slider [ajfPageSliderBar] .ajf-left-bar .ajf-info-box.ajf-error{order:2;color:red}ajf-form form .ajf-form-container .ajf-spacer{flex:1 0 auto}"],
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
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
                            formSlider: new core.ViewChild('formSlider'),
                            fields: new core.ViewChildren(AjfFormField)
                        }
                    },] },
        ];
        /** @nocollapse */
        AjfFormRenderer.ctorParameters = function () { return [
            { type: forms.AjfFormRendererService },
            { type: core.ChangeDetectorRef }
        ]; };
        return AjfFormRenderer;
    }(forms.AjfFormRenderer));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AjfChoicesMapPipe = /** @class */ (function () {
        function AjfChoicesMapPipe() {
        }
        /**
         * @param {?} value
         * @return {?}
         */
        AjfChoicesMapPipe.prototype.transform = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value == null || value.length === 0) {
                return { array: [], map: {} };
            }
            /** @type {?} */
            var choicesMap = value.reduce((/**
             * @param {?} p
             * @param {?} c
             * @return {?}
             */
            function (p, c) {
                p[c.value] = c.label;
                return p;
            }), (/** @type {?} */ ({})));
            /** @type {?} */
            var choicesArr = Object.keys(choicesMap);
            return { array: choicesArr, map: choicesMap };
        };
        AjfChoicesMapPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'ajfChoicesMap' },] },
        ];
        return AjfChoicesMapPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AjfFormPage = /** @class */ (function () {
        function AjfFormPage() {
        }
        AjfFormPage.decorators = [
            { type: core.Directive, args: [{ selector: '[ajfFormPage]' },] },
        ];
        return AjfFormPage;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AjfFormsModule = /** @class */ (function () {
        function AjfFormsModule() {
        }
        AjfFormsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms$1.ReactiveFormsModule,
                            angular.IonicModule,
                            ionicSelectable.IonicSelectableModule,
                            core$1.TranslateModule,
                            forms.AjfFormsModule,
                            calendar.AjfCalendarModule,
                            checkboxGroup.AjfCheckboxGroupModule,
                            pageSlider.AjfPageSliderModule,
                        ],
                        declarations: [
                            AjfChoicesMapPipe,
                            AjfFormField,
                            AjfFormPage,
                            AjfFormRenderer,
                        ],
                        exports: [
                            AjfFormField,
                            AjfFormRenderer
                        ]
                    },] },
        ];
        return AjfFormsModule;
    }());

    exports.AjfFormField = AjfFormField;
    exports.AjfFormRenderer = AjfFormRenderer;
    exports.AjfFormsModule = AjfFormsModule;
    exports.AJF_SEARCH_ALERT_TRESHOLD = AJF_SEARCH_ALERT_TRESHOLD;
    exports.ɵa = AjfChoicesMapPipe;
    exports.ɵb = AjfFormPage;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ionic-forms.umd.js.map
