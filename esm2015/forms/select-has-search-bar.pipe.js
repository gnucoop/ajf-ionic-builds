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
import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let AjfSelectHasSearchBarPipe = /** @class */ (() => {
    let AjfSelectHasSearchBarPipe = class AjfSelectHasSearchBarPipe {
        transform(instance, searchThreshold) {
            return instance.filteredChoices && instance.filteredChoices.length > searchThreshold;
        }
    };
    AjfSelectHasSearchBarPipe = __decorate([
        Pipe({ name: 'ajfSelectHasSearchBar' })
    ], AjfSelectHasSearchBarPipe);
    return AjfSelectHasSearchBarPipe;
})();
export { AjfSelectHasSearchBarPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWhhcy1zZWFyY2gtYmFyLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvaW9uaWMvZm9ybXMvc2VsZWN0LWhhcy1zZWFyY2gtYmFyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHOztBQUdILE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBR2xEO0lBQUEsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBeUI7UUFDcEMsU0FBUyxDQUFDLFFBQTBDLEVBQUUsZUFBdUI7WUFDM0UsT0FBTyxRQUFRLENBQUMsZUFBZSxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQztRQUN2RixDQUFDO0tBQ0YsQ0FBQTtJQUpZLHlCQUF5QjtRQURyQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsdUJBQXVCLEVBQUMsQ0FBQztPQUN6Qix5QkFBeUIsQ0FJckM7SUFBRCxnQ0FBQztLQUFBO1NBSlkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChDKSBHbnVjb29wIHNvYy4gY29vcC5cbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKS5cbiAqXG4gKiBBZHZhbmNlZCBKU09OIGZvcm1zIChhamYpIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXG4gKiBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSxcbiAqIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogQWR2YW5jZWQgSlNPTiBmb3JtcyAoYWpmKSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkdmFuY2VkIEpTT04gZm9ybXMgKGFqZikuXG4gKiBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvLlxuICpcbiAqL1xuXG5pbXBvcnQge0FqZkZpZWxkV2l0aENob2ljZXNJbnN0YW5jZX0gZnJvbSAnQGFqZi9jb3JlL2Zvcm1zJztcbmltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtuYW1lOiAnYWpmU2VsZWN0SGFzU2VhcmNoQmFyJ30pXG5leHBvcnQgY2xhc3MgQWpmU2VsZWN0SGFzU2VhcmNoQmFyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oaW5zdGFuY2U6IEFqZkZpZWxkV2l0aENob2ljZXNJbnN0YW5jZTxhbnk+LCBzZWFyY2hUaHJlc2hvbGQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpbnN0YW5jZS5maWx0ZXJlZENob2ljZXMgJiYgaW5zdGFuY2UuZmlsdGVyZWRDaG9pY2VzLmxlbmd0aCA+IHNlYXJjaFRocmVzaG9sZDtcbiAgfVxufVxuIl19