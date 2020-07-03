import {Configs} from './Configs/Configs';
import {Extensions} from './extensions/Extensions'
import {Globals} from './globals/Globals';
import {Modules} from './modules/Modules';
import {Types} from './typings/Types';
import {Interfaces} from './insterfaces/Interfaces';



export module Ultima {

     export const MogoDistant      =    Configs._MogoDistant;
     export const MongoLocal       =    Configs._MongoLocal;
     export const ColorTags        =    Configs._ColorTags;
     export const Colors           =    Configs._Colors;
     
     export const ColoredsComments =    Extensions._ColoredsComments;
     export const LinesComments    =    Extensions._LinesComments;
     
     //export const ColorProvider    =    Modules._ColorProvider;
     export const UltimaColors     =    Modules._UltimaColors;
     export const Parser           =    Modules._Parser;
     export const Types            =    Modules._Types;

     export type IInvisibleChars   =    Interfaces._IInvisibleChars;
     export type ILangTag          =    Interfaces._ILangTag;
     export type ITagAssoc         =    Interfaces._ITagAssoc;
     export type IUserSet          =    Interfaces._IUserSet;
     export type IAssocs           =    Interfaces._IAssoc;
     export type ILangs            =    Interfaces._ILang;
     export type ILine             =    Interfaces._ILine;
     
     export type InvisibleCharList =    Interfaces._InvisibleCharList;
     export type TagAssocList      =    Interfaces._TagAssocList;
     export type LangTagList       =    Interfaces._LangTagList;
     export type AssocList         =    Interfaces._AssocList;
     export type LangList          =    Interfaces._LangList;
    
}