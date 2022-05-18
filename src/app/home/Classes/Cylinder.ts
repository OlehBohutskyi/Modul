import { IRadius } from "../Interfaces/IRadius";
import { D3Figure } from "./3DFigure";

export class Cylinder extends D3Figure{
    
    r: number;
    constructor(h:number=1, r:number=1){
        super(h);
        this.r = r;
    }

    show(){
        return "Циліндр: h = " + this.h + ", r = " + this.r + ", площа = " 
        + this.square() + ", об'єм = " + this.volume();
    }
    volume() {
        return Math.PI * this.r * this.r * this.h;
    }
    square() {
        return 2 * Math.PI * this.r * this.r + 2 * Math.PI * this.r * this.h;
    }
}