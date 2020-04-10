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
import { __extends } from "tslib";
import { AjfFormRenderer as AjfCoreFormRenderer, AjfFormRendererService } from '@ajf/core/forms';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { delayWhen, switchMap } from 'rxjs/operators';
var AjfFormRenderer = /** @class */ (function (_super) {
    __extends(AjfFormRenderer, _super);
    function AjfFormRenderer(rendererService, cdr) {
        var _this = _super.call(this, rendererService, cdr) || this;
        _this._longSlide = false;
        _this._viewInitEvt = new EventEmitter();
        _this._scrollFinishSub = Subscription.EMPTY;
        _this._scrollFinishSub = _this._viewInitEvt
            .pipe(delayWhen(function () { return _this.formGroup; }), switchMap(function () { return _this.formSlider.pageScrollFinish; }))
            .subscribe(function (_) { return _this._updateLongSlide(); });
        return _this;
    }
    Object.defineProperty(AjfFormRenderer.prototype, "longSlide", {
        get: function () {
            return this._longSlide;
        },
        enumerable: true,
        configurable: true
    });
    AjfFormRenderer.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        this._viewInitEvt.emit();
    };
    AjfFormRenderer.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        this._scrollFinishSub.unsubscribe();
    };
    AjfFormRenderer.prototype._updateLongSlide = function () {
        var longSlide = this.formSlider.isCurrentPageLong();
        if (longSlide !== this._longSlide) {
            this._longSlide = longSlide;
            this._changeDetectorRef.markForCheck();
        }
    };
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
    AjfFormRenderer.ctorParameters = function () { return [
        { type: AjfFormRendererService },
        { type: ChangeDetectorRef }
    ]; };
    return AjfFormRenderer;
}(AjfCoreFormRenderer));
export { AjfFormRenderer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9pb25pYy9mb3Jtcy9mb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRzs7QUFFSCxPQUFPLEVBQUMsZUFBZSxJQUFJLG1CQUFtQixFQUFFLHNCQUFzQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFL0YsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFFWixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRXBEO0lBWXFDLG1DQUFtQjtJQVN0RCx5QkFBWSxlQUF1QyxFQUFFLEdBQXNCO1FBQTNFLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLEdBQUcsQ0FBQyxTQVE1QjtRQWpCTyxnQkFBVSxHQUFHLEtBQUssQ0FBQztRQUtuQixrQkFBWSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBQzVELHNCQUFnQixHQUFpQixZQUFZLENBQUMsS0FBSyxDQUFDO1FBSzFELEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFJLENBQUMsWUFBWTthQUNaLElBQUksQ0FDRCxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxTQUFTLEVBQWQsQ0FBYyxDQUFDLEVBQy9CLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBaEMsQ0FBZ0MsQ0FBQyxDQUNoRDthQUNKLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUF2QixDQUF1QixDQUFDLENBQUM7O0lBQ3ZFLENBQUM7SUFoQkQsc0JBQUksc0NBQVM7YUFBYjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQWdCRCx5Q0FBZSxHQUFmO1FBQ0UsaUJBQU0sZUFBZSxXQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQscUNBQVcsR0FBWDtRQUNFLGlCQUFNLFdBQVcsV0FBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRU8sMENBQWdCLEdBQXhCO1FBQ0UsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3RELElBQUksU0FBUyxLQUFLLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDNUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQzs7Z0JBaERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsb2hUQUF3QjtvQkFFeEIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7Ozs7Z0JBcEIrQyxzQkFBc0I7Z0JBS3BFLGlCQUFpQjs7SUFtRW5CLHNCQUFDO0NBQUEsQUExREQsQ0FZcUMsbUJBQW1CLEdBOEN2RDtTQTlDWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChDKSBHbnVjb29wIHNvYy4gY29vcC5cbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSxcbiAqIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKiBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvLlxuICpcbiAqL1xuXG5pbXBvcnQge0FqZkZvcm1SZW5kZXJlciBhcyBBamZDb3JlRm9ybVJlbmRlcmVyLCBBamZGb3JtUmVuZGVyZXJTZXJ2aWNlfSBmcm9tICdAYWpmL2NvcmUvZm9ybXMnO1xuaW1wb3J0IHtCb29sZWFuSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtkZWxheVdoZW4sIHN3aXRjaE1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhamYtZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnZm9ybS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Zvcm0uY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbi8qKlxuICogVGhpcyBjbGFzcyB3aWxsIGRlZmluZSBhbiBhamYgZm9ybSByZW5kZXJlclxuICogQGltcGxlbWVudHMgOiBBZnRlclZpZXdJbml0XG4gKiBAaW1wbGVtZW50cyA6IEFmdGVyVmlld0luaXRcbiAqL1xuZXhwb3J0IGNsYXNzIEFqZkZvcm1SZW5kZXJlciBleHRlbmRzIEFqZkNvcmVGb3JtUmVuZGVyZXIgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9sb25nU2xpZGUgPSBmYWxzZTtcbiAgZ2V0IGxvbmdTbGlkZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbG9uZ1NsaWRlO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmlld0luaXRFdnQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgcHJpdmF0ZSBfc2Nyb2xsRmluaXNoU3ViOiBTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgY29uc3RydWN0b3IocmVuZGVyZXJTZXJ2aWNlOiBBamZGb3JtUmVuZGVyZXJTZXJ2aWNlLCBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIocmVuZGVyZXJTZXJ2aWNlLCBjZHIpO1xuXG4gICAgdGhpcy5fc2Nyb2xsRmluaXNoU3ViID0gdGhpcy5fdmlld0luaXRFdnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheVdoZW4oKCkgPT4gdGhpcy5mb3JtR3JvdXApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMuZm9ybVNsaWRlci5wYWdlU2Nyb2xsRmluaXNoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShfID0+IHRoaXMuX3VwZGF0ZUxvbmdTbGlkZSgpKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcbiAgICB0aGlzLl92aWV3SW5pdEV2dC5lbWl0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICAgIHRoaXMuX3Njcm9sbEZpbmlzaFN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlTG9uZ1NsaWRlKCk6IHZvaWQge1xuICAgIGNvbnN0IGxvbmdTbGlkZSA9IHRoaXMuZm9ybVNsaWRlci5pc0N1cnJlbnRQYWdlTG9uZygpO1xuICAgIGlmIChsb25nU2xpZGUgIT09IHRoaXMuX2xvbmdTbGlkZSkge1xuICAgICAgdGhpcy5fbG9uZ1NsaWRlID0gbG9uZ1NsaWRlO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2ZpeGVkT3JpZW50YXRpb246IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2hhc0VuZE1lc3NhZ2U6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2hhc1N0YXJ0TWVzc2FnZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaGlkZUJvdHRvbVRvb2xiYXI6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2hpZGVOYXZpZ2F0aW9uQnV0dG9uczogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaGlkZVRvcFRvb2xiYXI6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3NhdmVEaXNhYmxlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcmVhZG9ubHk6IEJvb2xlYW5JbnB1dDtcbn1cbiJdfQ==