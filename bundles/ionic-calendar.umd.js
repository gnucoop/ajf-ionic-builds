(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ajf/core/calendar'), require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@ngx-translate/core'), require('@ionic/angular'), require('tslib')) :
    typeof define === 'function' && define.amd ? define('@ajf/ionic/calendar', ['exports', '@ajf/core/calendar', '@angular/common', '@angular/core', '@angular/forms', '@ngx-translate/core', '@ionic/angular', 'tslib'], factory) :
    (global = global || self, factory((global.ajf = global.ajf || {}, global.ajf.ionic = global.ajf.ionic || {}, global.ajf.ionic.calendar = {}), global.ng.core.calendar, global.ng.common, global.ng.core, global.ng.forms, global.ngxTranslate.core, global.ionic.angular, global.tslib));
}(this, (function (exports, calendar, common, core, forms, core$1, angular, tslib) { 'use strict';

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
    var CALENDAR_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return AjfCalendarComponent; }),
        multi: true
    };
    var AjfCalendarComponent = /** @class */ (function (_super) {
        tslib.__extends(AjfCalendarComponent, _super);
        function AjfCalendarComponent(cdr, service) {
            return _super.call(this, cdr, service) || this;
        }
        AjfCalendarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ajf-calendar',
                        template: "<div class=\"ajf-calendar-header\">\n  <ion-fab-button mini left [disabled]=\"disabled\" (click)=\"prevPage()\">&#8592;</ion-fab-button>\n  <ion-button [disabled]=\"disabled\" (click)=\"previousViewMode()\" light class=\"ajf-calendar-header-title\">\n    {{ viewHeader | translate }}\n  </ion-button>\n  <ion-fab-button mini right [disabled]=\"disabled\" (click)=\"nextPage()\">&#8594;</ion-fab-button>\n</div>\n<div class=\"ajf-calendar-row\" *ngIf=\"calendarHeaders.length > 0\">\n  <div *ngFor=\"let calendarHeader of calendarHeaders\">\n    <div class=\"button-label\">{{ calendarHeader | translate }}</div>\n  </div>\n</div>\n<div class=\"ajf-calendar-row\" *ngFor=\"let row of calendarRows\">\n  <ion-button\n      [color]=\"entry.selected == 'none' ? 'light' : 'danger'\"\n      [disabled]=\"disabled || (entry.disabled || false)\"\n      [class.ajf-calendar-partial-selection]=\"entry.selected == 'partial'\"\n      [class.ajf-calendar-highlight]=\"entry.selected === 'none' && entry.highlight\"\n      (click)=\"selectEntry(entry)\"\n      *ngFor=\"let entry of row\">\n    {{ entry|ajfCalendarEntryLabel }}\n  </ion-button>\n</div>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [
                            CALENDAR_CONTROL_VALUE_ACCESSOR,
                        ],
                        styles: ["ajf-calendar{display:flex;box-sizing:border-box;width:100%;height:320px;flex-direction:column}ajf-calendar .ajf-calendar-header,ajf-calendar .ajf-calendar-row{display:flex;box-sizing:border-box;width:100%;flex-direction:row}ajf-calendar .ajf-calendar-header{height:40px}ajf-calendar .ajf-calendar-header ion-fab-button,ajf-calendar .ajf-calendar-header ion-button{--margin-top: 0;--margin-bottom: 0;--margin-start: 0;--margin-end: 0}ajf-calendar .ajf-calendar-header ion-fab-button{position:relative;left:0;right:0}ajf-calendar .ajf-calendar-header ion-button{--height: 40px;--width: 100%}ajf-calendar .ajf-calendar-header .ajf-calendar-header-title{flex:1;margin:0 10px}ajf-calendar .ajf-calendar-row{flex:1}ajf-calendar .ajf-calendar-row ion-button,ajf-calendar .ajf-calendar-row div{flex:1;margin:3px;height:auto}ajf-calendar .ajf-calendar-row ion-button{--width: 100%;--height: 100%}ajf-calendar .ajf-calendar-row div{line-height:40px;text-align:center}ajf-calendar .ajf-calendar-row .ajf-calendar-partial-selection{--ion-color-base: rgba(240, 65, 65, 0.5) !important}ajf-calendar .ajf-calendar-row .ajf-calendar-highlight{--ion-color-base: #fcd739 !important}\n"]
                    }] }
        ];
        /** @nocollapse */
        AjfCalendarComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: calendar.AjfCalendarService }
        ]; };
        return AjfCalendarComponent;
    }(calendar.AjfCalendar));

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
    var AjfCalendarModule = /** @class */ (function () {
        function AjfCalendarModule() {
        }
        AjfCalendarModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            calendar.AjfCalendarModule,
                            forms.FormsModule,
                            angular.IonicModule,
                            core$1.TranslateModule,
                        ],
                        declarations: [
                            AjfCalendarComponent,
                        ],
                        exports: [
                            AjfCalendarComponent,
                        ],
                    },] }
        ];
        return AjfCalendarModule;
    }());

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

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AjfCalendarComponent = AjfCalendarComponent;
    exports.AjfCalendarModule = AjfCalendarModule;
    exports.CALENDAR_CONTROL_VALUE_ACCESSOR = CALENDAR_CONTROL_VALUE_ACCESSOR;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ionic-calendar.umd.js.map
