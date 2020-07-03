
import {Interfaces} from '../../insterfaces/interfaces'


 module ColoredsLinesConfig {


     export function setDefaultLangValues(lang: Interfaces._ILang ) {

          lang.langId = 'TypeScript';
          lang.langTags = { start: '/*', middle: '//', end:'*/', delimiter: '', escape: '*' };
          lang.noFirst = false; //default false
          lang.multiline = false; // default false
          lang.plainText = true; // default true
          lang.supported = true; // default true 
          lang.jsDoc = false; // default false
          lang.mono = true; // default true
          lang.sensitive = false; //??
     }
}

export default ColoredsLinesConfig;




