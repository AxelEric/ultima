//import * as VSEnv from './ts/VSEnv';
//import Assoc from './ts/assoc';
import InvisibleChars from './ts/invisibleChars';
import Lang from './ts/lang';
import LangTag from './ts/langTag';
import Line from './ts/line';
import TagAssoc from './ts/tagAssoc';
import UserSet from './ts/userSet';
import Assoc from './ts/assoc';

//import {VSEnv} from './ts/VSEnv';

export module Interfaces {

     
     export type _IAssoc =  Assoc.IAssoc; 
     export type _IInvisibleChars = InvisibleChars.IInvisibleChar ;
     export type _ILang = Lang.ILang;
     export type _ILangTag = LangTag.ILangTag;
     export type _ILine = Line.ILine;
     export type _IUserSet = UserSet.IUserSet;
     export type _ITagAssoc = TagAssoc.ITagAssoc;
     
     export type _AssocList = Array<Assoc.IAssoc>;
     export type _InvisibleCharList = Array<InvisibleChars.IInvisibleChar>;
     export type _LangList = Array<Lang.ILang>;
     export type _LangTagList = Array<LangTag.ILangTag>;
     export type _TagAssocList = Array<TagAssoc.ITagAssoc>;
}

//export default Interfaces;