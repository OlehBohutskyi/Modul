import { AbstractFigure } from "./AbstractFigure";

export abstract class D2Figure extends AbstractFigure{
    a:number;

    constructor(h:number, a:number){
        super(h);
        this.a = a;
    }

    abstract perimetr();
    abstract show();
}