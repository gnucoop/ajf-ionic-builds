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
import { AjfImage as AjfCoreImage } from '@ajf/core/image';
import { ChangeDetectionStrategy, Component, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/common";
export class AjfImage extends AjfCoreImage {
    constructor(el, renderer, ds) {
        super(el, renderer, ds);
    }
}
AjfImage.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: AjfImage, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component });
AjfImage.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-next.15", type: AjfImage, selector: "ajf-image", usesInheritance: true, ngImport: i0, template: "<ng-container [ngSwitch]=\"imageType|async\">\n  <ng-template [ngSwitchCase]=\"imageTypes.Image\">\n    <img *ngIf=\"url|async as iu\" [src]=\"iu\" alt=\"\">\n  </ng-template>\n  <ng-template [ngSwitchCase]=\"imageTypes.Icon\">\n    <i *ngIf=\"iconObj|async as io\"\n        [ngClass]=\"[io!.fontSet, io!.fontIcon]\"></i>\n  </ng-template>\n  <span *ngSwitchCase=\"imageTypes.Flag\" [class]=\"flagName|async\"></span>\n</ng-container>\n", styles: ["ajf-image{display:flex;box-sizing:border-box;align-items:center;position:relative;font-size:inherit;width:inherit;height:inherit}ajf-image img{vertical-align:middle;position:relative;max-height:100%;max-width:100%;height:auto;width:auto}ajf-image span{height:inherit;width:inherit}ajf-image i{font-size:inherit}\n"], directives: [{ type: i2.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i2.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], pipes: { "async": i2.AsyncPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: AjfImage, decorators: [{
            type: Component,
            args: [{ selector: 'ajf-image', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-container [ngSwitch]=\"imageType|async\">\n  <ng-template [ngSwitchCase]=\"imageTypes.Image\">\n    <img *ngIf=\"url|async as iu\" [src]=\"iu\" alt=\"\">\n  </ng-template>\n  <ng-template [ngSwitchCase]=\"imageTypes.Icon\">\n    <i *ngIf=\"iconObj|async as io\"\n        [ngClass]=\"[io!.fontSet, io!.fontIcon]\"></i>\n  </ng-template>\n  <span *ngSwitchCase=\"imageTypes.Flag\" [class]=\"flagName|async\"></span>\n</ng-container>\n", styles: ["ajf-image{display:flex;box-sizing:border-box;align-items:center;position:relative;font-size:inherit;width:inherit;height:inherit}ajf-image img{vertical-align:middle;position:relative;max-height:100%;max-width:100%;height:auto;width:auto}ajf-image span{height:inherit;width:inherit}ajf-image i{font-size:inherit}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.DomSanitizer }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvaW9uaWMvaW1hZ2UvaW1hZ2UudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvaW9uaWMvaW1hZ2UvaW1hZ2UuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFFSCxPQUFPLEVBQUMsUUFBUSxJQUFJLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQVN2RCxNQUFNLE9BQU8sUUFBUyxTQUFRLFlBQVk7SUFDeEMsWUFBWSxFQUFjLEVBQUUsUUFBbUIsRUFBRSxFQUFnQjtRQUMvRCxLQUFLLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxQixDQUFDOzs2R0FIVSxRQUFRO2lHQUFSLFFBQVEsd0VDdkNyQixzYkFVQTttR0Q2QmEsUUFBUTtrQkFQcEIsU0FBUzsrQkFDRSxXQUFXLG1CQUdKLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKEMpIEdudWNvb3Agc29jLiBjb29wLlxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpLlxuICpcbiAqIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLFxuICogb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm9cbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8uXG4gKlxuICovXG5cbmltcG9ydCB7QWpmSW1hZ2UgYXMgQWpmQ29yZUltYWdlfSBmcm9tICdAYWpmL2NvcmUvaW1hZ2UnO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RG9tU2FuaXRpemVyfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWpmLWltYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICdpbWFnZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2ltYWdlLmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQWpmSW1hZ2UgZXh0ZW5kcyBBamZDb3JlSW1hZ2Uge1xuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgZHM6IERvbVNhbml0aXplcikge1xuICAgIHN1cGVyKGVsLCByZW5kZXJlciwgZHMpO1xuICB9XG59XG4iLCI8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJpbWFnZVR5cGV8YXN5bmNcIj5cbiAgPG5nLXRlbXBsYXRlIFtuZ1N3aXRjaENhc2VdPVwiaW1hZ2VUeXBlcy5JbWFnZVwiPlxuICAgIDxpbWcgKm5nSWY9XCJ1cmx8YXN5bmMgYXMgaXVcIiBbc3JjXT1cIml1XCIgYWx0PVwiXCI+XG4gIDwvbmctdGVtcGxhdGU+XG4gIDxuZy10ZW1wbGF0ZSBbbmdTd2l0Y2hDYXNlXT1cImltYWdlVHlwZXMuSWNvblwiPlxuICAgIDxpICpuZ0lmPVwiaWNvbk9ianxhc3luYyBhcyBpb1wiXG4gICAgICAgIFtuZ0NsYXNzXT1cIltpbyEuZm9udFNldCwgaW8hLmZvbnRJY29uXVwiPjwvaT5cbiAgPC9uZy10ZW1wbGF0ZT5cbiAgPHNwYW4gKm5nU3dpdGNoQ2FzZT1cImltYWdlVHlwZXMuRmxhZ1wiIFtjbGFzc109XCJmbGFnTmFtZXxhc3luY1wiPjwvc3Bhbj5cbjwvbmctY29udGFpbmVyPlxuIl19