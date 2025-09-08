import { Pipe, PipeTransform } from '@angular/core';
import { MenuItem, MenuType } from '../../features/colleges/Al-Alsun/model/menu.model';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(items: MenuItem[], filterType: string): MenuItem[] {
    if (!items || !filterType) {
      return items;
    }
    
    return items.filter(item => item.type === filterType);
  }
}