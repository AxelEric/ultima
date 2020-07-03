import { Interfaces } from '../../insterfaces/interfaces';


export default class GlobLine implements Interfaces._ILine {

     constructor() {

          return (this instanceof GlobLine) ? this : new GlobLine();

     }     

     line: number;
     text: string;
     spaceStatus: boolean;
     tabSize: number;
     spacing: {tabs: number, spaces:number};
     indent: any;
     realIndent: any;

}