import { DecimalPipe } from '@angular/common';

export class Ingredient {
    constructor(public name: string, public amount: number, public checked: boolean = false) {}
}
