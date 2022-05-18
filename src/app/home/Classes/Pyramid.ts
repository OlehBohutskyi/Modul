import { IRadius } from "../Interfaces/IRadius";
import { D3Figure } from "./3DFigure";

export class Pyramid extends D3Figure implements IRadius{

    a:number;
    constructor(h:number=1, a:number=1){
        super(h);
        this.a = a;
    }

    show() {
        return "Трикутна піраміда: h = " + this.h + ", a = " + this.a + ", площа = " 
        + this.square() + ", об'єм = " + this.volume() + ", радіуси = " + this.inner() + ", " + this.outter();
    }
    square() {
        let am = Math.sqrt(this.h*this.h + this.outter()*this.outter());
        return Math.sqrt(3)/4*this.a*this.a + 3 * 0.5 * am * this.a;
    }
    volume() {
        return 1/3 * Math.sqrt(3)/4*this.a*this.a * this.h;
    }
    inner() {
        return Math.sqrt(3)/6*this.a;
    }
    outter() {
        return Math.sqrt(3)/3*this.a;
    }
}