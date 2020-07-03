
module Line {

     export interface ILine {
          line: number;
          text: string;
          spaceStatus: boolean;
          tabSize: number;
          spacing: {tabs: number,spaces:number };
          indent: number;
          realIndent: number;
     }
}

export default Line;