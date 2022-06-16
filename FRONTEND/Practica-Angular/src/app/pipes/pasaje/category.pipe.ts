import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(categoria: string): string {
    if(categoria == "m") return "Menor"
    else if(categoria == "j") return "Jubilado"
    return "Adulto"
  }

}
