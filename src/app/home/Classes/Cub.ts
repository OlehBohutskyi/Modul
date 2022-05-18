import { IRadius } from "../Interfaces/IRadius";
import { D3Figure } from "./3DFigure";

export class Cub extends D3Figure implements IRadius{

    constructor(h:number=1){
        super(h);
    }

    show() {
        return "Куб: h = " + this.h + ", площа = " 
        + this.square() + ", об'єм = " + this.volume() + ", радіуси = " + this.inner() + ", " + this.outter();
    }

    volume() {
        return this.h * this.h * this.h;
    }

    square() {
        return 6 * this.h * this.h;
    }
    inner(){
        return this.h/2;
    }
    outter() {
        return Math.sqrt(2)/2 * this.h;
    }
}