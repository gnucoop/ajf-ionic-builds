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
import { __decorate, __metadata } from "tslib";
import { AjfCalendar, AjfCalendarService } from '@ajf/core/calendar';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export const CALENDAR_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AjfCalendarComponent),
    multi: true
};
let AjfCalendarComponent = /** @class */ (() => {
    let AjfCalendarComponent = class AjfCalendarComponent extends AjfCalendar {
        constructor(cdr, service) {
            super(cdr, service);
        }
    };
    AjfCalendarComponent = __decorate([
        Component({
            selector: 'ajf-calendar',
            template: "<div class=\"ajf-calendar-header\">\n  <ion-fab-button mini left [disabled]=\"disabled\" (click)=\"prevPage()\">&#8592;</ion-fab-button>\n  <ion-button [disabled]=\"disabled\" (click)=\"previousViewMode()\" light class=\"ajf-calendar-header-title\">\n    {{ viewHeader | translate }}\n  </ion-button>\n  <ion-fab-button mini right [disabled]=\"disabled\" (click)=\"nextPage()\">&#8594;</ion-fab-button>\n</div>\n<div class=\"ajf-calendar-row\" *ngIf=\"calendarHeaders.length > 0\">\n  <div *ngFor=\"let calendarHeader of calendarHeaders\">\n    <div class=\"button-label\">{{ calendarHeader | translate }}</div>\n  </div>\n</div>\n<div class=\"ajf-calendar-row\" *ngFor=\"let row of calendarRows\">\n  <ion-button\n      [color]=\"entry.selected == 'none' ? 'light' : 'danger'\"\n      [disabled]=\"disabled || (entry.disabled || false)\"\n      [class.ajf-calendar-partial-selection]=\"entry.selected == 'partial'\"\n      [class.ajf-calendar-highlight]=\"entry.selected === 'none' && entry.highlight\"\n      (click)=\"selectEntry(entry)\"\n      *ngFor=\"let entry of row\">\n    {{ entry|ajfCalendarEntryLabel }}\n  </ion-button>\n</div>\n",
            encapsulation: ViewEncapsulation.None,
            changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [
                CALENDAR_CONTROL_VALUE_ACCESSOR,
            ],
            styles: ["ajf-calendar{display:flex;box-sizing:border-box;width:100%;height:320px;flex-direction:column}ajf-calendar .ajf-calendar-header,ajf-calendar .ajf-calendar-row{display:flex;box-sizing:border-box;width:100%;flex-direction:row}ajf-calendar .ajf-calendar-header{height:40px}ajf-calendar .ajf-calendar-header ion-fab-button,ajf-calendar .ajf-calendar-header ion-button{--margin-top: 0;--margin-bottom: 0;--margin-start: 0;--margin-end: 0}ajf-calendar .ajf-calendar-header ion-fab-button{position:relative;left:0;right:0}ajf-calendar .ajf-calendar-header ion-button{--height: 40px;--width: 100%}ajf-calendar .ajf-calendar-header .ajf-calendar-header-title{flex:1;margin:0 10px}ajf-calendar .ajf-calendar-row{flex:1}ajf-calendar .ajf-calendar-row ion-button,ajf-calendar .ajf-calendar-row div{flex:1;margin:3px;height:auto}ajf-calendar .ajf-calendar-row ion-button{--width: 100%;--height: 100%}ajf-calendar .ajf-calendar-row div{line-height:40px;text-align:center}ajf-calendar .ajf-calendar-row .ajf-calendar-partial-selection{--ion-color-base: rgba(240, 65, 65, 0.5) !important}ajf-calendar .ajf-calendar-row .ajf-calendar-highlight{--ion-color-base: #fcd739 !important}\n"]
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef, AjfCalendarService])
    ], AjfCalendarComponent);
    return AjfCalendarComponent;
})();
export { AjfCalendarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvaW9uaWMvY2FsZW5kYXIvY2FsZW5kYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHOztBQUVILE9BQU8sRUFBQyxXQUFXLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRCxNQUFNLENBQUMsTUFBTSwrQkFBK0IsR0FBUTtJQUNsRCxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsb0JBQW9CLENBQUM7SUFDbkQsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBWUY7SUFBQSxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFxQixTQUFRLFdBQVc7UUFDbkQsWUFBWSxHQUFzQixFQUFFLE9BQTJCO1lBQzdELEtBQUssQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEIsQ0FBQztLQUNGLENBQUE7SUFKWSxvQkFBb0I7UUFWaEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsbW9DQUE0QjtZQUU1QixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtZQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtZQUMvQyxTQUFTLEVBQUU7Z0JBQ1QsK0JBQStCO2FBQ2hDOztTQUNGLENBQUM7eUNBRWlCLGlCQUFpQixFQUFXLGtCQUFrQjtPQURwRCxvQkFBb0IsQ0FJaEM7SUFBRCwyQkFBQztLQUFBO1NBSlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChDKSBHbnVjb29wIHNvYy4gY29vcC5cbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSxcbiAqIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKiBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvLlxuICpcbiAqL1xuXG5pbXBvcnQge0FqZkNhbGVuZGFyLCBBamZDYWxlbmRhclNlcnZpY2V9IGZyb20gJ0BhamYvY29yZS9jYWxlbmRhcic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgZm9yd2FyZFJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjb25zdCBDQUxFTkRBUl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBBamZDYWxlbmRhckNvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhamYtY2FsZW5kYXInLFxuICB0ZW1wbGF0ZVVybDogJ2NhbGVuZGFyLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2FsZW5kYXIuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICBDQUxFTkRBUl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFqZkNhbGVuZGFyQ29tcG9uZW50IGV4dGVuZHMgQWpmQ2FsZW5kYXIge1xuICBjb25zdHJ1Y3RvcihjZHI6IENoYW5nZURldGVjdG9yUmVmLCBzZXJ2aWNlOiBBamZDYWxlbmRhclNlcnZpY2UpIHtcbiAgICBzdXBlcihjZHIsIHNlcnZpY2UpO1xuICB9XG59XG4iXX0=