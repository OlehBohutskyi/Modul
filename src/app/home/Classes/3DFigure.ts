import { AbstractFigure } from "./AbstractFigure"

export abstract class D3Figure extends AbstractFigure{
    constructor(h:number){
        super(h);
    }

    abstract volume();
    abstract show();
}