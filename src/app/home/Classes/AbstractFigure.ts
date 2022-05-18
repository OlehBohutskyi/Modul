import { IShow } from "../Interfaces/IShow";

export abstract class AbstractFigure implements IShow{
    h:number;

    constructor(h:number){
        this.h = h;
    }

    abstract square();
    abstract show();
}