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
import { AjfCalendarService, AjfCalendar, AjfCalendarModule as AjfCalendarModule$1 } from '@ajf/core/calendar';
import { CommonModule } from '@angular/common';
import { forwardRef, Component, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { __extends } from 'tslib';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CALENDAR_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return AjfCalendarComponent; })),
    multi: true
};
var AjfCalendarComponent = /** @class */ (function (_super) {
    __extends(AjfCalendarComponent, _super);
    function AjfCalendarComponent(cdr, service) {
        return _super.call(this, cdr, service) || this;
    }
    AjfCalendarComponent.decorators = [
        { type: Component, args: [{selector: 'ajf-calendar',
                    template: "<div class=\"ajf-calendar-header\"><ion-fab-button mini left [disabled]=\"disabled\" (click)=\"prevPage()\">&#8592;</ion-fab-button><ion-button [disabled]=\"disabled\" (click)=\"previousViewMode()\" light class=\"ajf-calendar-header-title\">{{ viewHeader | translate }}</ion-button><ion-fab-button mini right [disabled]=\"disabled\" (click)=\"nextPage()\">&#8594;</ion-fab-button></div><div class=\"ajf-calendar-row\" *ngIf=\"calendarHeaders.length > 0\"><div *ngFor=\"let calendarHeader of calendarHeaders\"><div class=\"button-label\">{{ calendarHeader | translate }}</div></div></div><div class=\"ajf-calendar-row\" *ngFor=\"let row of calendarRows\"><ion-button [color]=\"entry.selected == 'none' ? 'light' : 'danger'\" [disabled]=\"disabled || entry.disabled\" [class.ajf-calendar-partial-selection]=\"entry.selected == 'partial'\" [class.ajf-calendar-highlight]=\"entry.selected === 'none' && entry.highlight\" (click)=\"selectEntry(entry)\" *ngFor=\"let entry of row\">{{ entry|ajfCalendarEntryLabel }}</ion-button></div>",
                    styles: ["ajf-calendar{display:flex;box-sizing:border-box;width:100%;height:320px;flex-direction:column}ajf-calendar .ajf-calendar-header,ajf-calendar .ajf-calendar-row{display:flex;box-sizing:border-box;width:100%;flex-direction:row}ajf-calendar .ajf-calendar-header{height:40px}ajf-calendar .ajf-calendar-header ion-button,ajf-calendar .ajf-calendar-header ion-fab-button{--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0}ajf-calendar .ajf-calendar-header ion-fab-button{position:relative;left:0;right:0}ajf-calendar .ajf-calendar-header ion-button{--height:40px;--width:100%}ajf-calendar .ajf-calendar-header .ajf-calendar-header-title{flex:1;margin:0 10px}ajf-calendar .ajf-calendar-row{flex:1}ajf-calendar .ajf-calendar-row div,ajf-calendar .ajf-calendar-row ion-button{flex:1;margin:3px;height:auto}ajf-calendar .ajf-calendar-row ion-button{--width:100%;--height:100%}ajf-calendar .ajf-calendar-row div{line-height:40px;text-align:center}ajf-calendar .ajf-calendar-row .ajf-calendar-partial-selection{--ion-color-base:rgba(240, 65, 65, 0.5)!important}ajf-calendar .ajf-calendar-row .ajf-calendar-highlight{--ion-color-base:#fcd739!important}"],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    inputs: [
                        'viewDate',
                        'disabled',
                        'dateOnlyForDay',
                        'viewMode',
                        'selectionMode',
                        'startOfWeekDay',
                        'isoMode',
                        'minDate',
                        'maxDate',
                        'selectedPeriod',
                    ],
                    outputs: [
                        'change'
                    ],
                    providers: [
                        CALENDAR_CONTROL_VALUE_ACCESSOR,
                    ]
                },] },
    ];
    /** @nocollapse */
    AjfCalendarComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: AjfCalendarService }
    ]; };
    return AjfCalendarComponent;
}(AjfCalendar));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AjfCalendarModule = /** @class */ (function () {
    function AjfCalendarModule() {
    }
    AjfCalendarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        AjfCalendarModule$1,
                        FormsModule,
                        IonicModule,
                        TranslateModule,
                    ],
                    declarations: [
                        AjfCalendarComponent,
                    ],
                    exports: [
                        AjfCalendarComponent,
                    ],
                },] },
    ];
    return AjfCalendarModule;
}());

export { AjfCalendarComponent, AjfCalendarModule, CALENDAR_CONTROL_VALUE_ACCESSOR };
//# sourceMappingURL=calendar.es5.js.map
