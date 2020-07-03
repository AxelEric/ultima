import LangTag from './langTag';

module Lang {

     export interface ILang {

          langId: string;
          langTags: LangTag.ILangTag;
          noFirst: boolean; //default false
          multiline: boolean; // default false
          plainText: boolean; // default true
          supported: boolean; // default true 
          jsDoc: boolean; // default false
          mono: boolean; // default true
          sensitive: boolean; //??
     }
}

export default Lang;