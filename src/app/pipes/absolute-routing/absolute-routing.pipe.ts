import { Pipe, PipeTransform } from '@angular/core';
import * as routes from '../../constants/routes';

@Pipe({
  name: 'absolutePath'
})

export class AbsoluteRoutingPipe implements PipeTransform {
  transform(route, id?) {    
    try {
      if (id) {
        return routes[route].fullUrl + '/' + id;
      }
      return routes[route].fullUrl;
    } catch (error) {
      return '';
    }
  }
}