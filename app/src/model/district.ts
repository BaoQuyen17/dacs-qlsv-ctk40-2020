import { Injectable } from "@angular/core";

@Injectable()
export class District{
    id:string;
    name:string;
    type:string;

    constructor(id:string, name:string, type:string){
        this.id = id;
        this.name = name;
        this.type = type;
    }
}