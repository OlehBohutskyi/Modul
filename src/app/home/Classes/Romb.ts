import { IRadius } from "../Interfaces/IRadius";
import { D2Figure } from "./2DFigure";

export class Romb extends D2Figure implements IRadius{

    constructor(h:number=1, a:number=1){
        super(h,a);
    }

    show() {
        return "Ромб: a = " + this.a + ", h = " + this.h + ", площа = " 
        + this.square() + ", периметр = " + this.perimetr() + ", радіуси = " + this.inner() + ", " + this.outter();;
    }
    perimetr() {
        return 4 * this.a;
    }
    square() {
        return this.a * this.h;
    }
    inner() {
        return this.h/2;
    }
    outter() {
        return "Не можна вписати ромб у коло"
    }
}