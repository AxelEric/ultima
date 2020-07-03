import { Interfaces } from '../../insterfaces/interfaces';
import * as Config from '../../configs/Configs'

export default class GlobLang implements Interfaces._ILang {

     constructor() {

          let result = (this instanceof GlobLang) ? this : Config.Configs._setDefaultLangValues(new GlobLang())

     }
     noFirst: boolean;
     multiline: boolean;
     plainText: boolean;
     supported: boolean;
     langId: string;
     jsDoc: boolean;
     mono: boolean;
     langTags: Interfaces._ILangTag;
     sensitive: boolean;

}
