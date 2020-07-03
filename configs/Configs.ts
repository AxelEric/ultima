import {ColorConfigs}  from "./ts/ColorConfigs";
import {EnvConfigs} from './ts/EnvConfigs'
import ColoredsLinesConfig from './ts/ColoredsLinesConfig';
export module Configs {

     export const _ColorTags = ColorConfigs.ColorTags;
     export const _Colors    = ColorConfigs.Colors;  
     export const _MogoDistant = EnvConfigs.MogoDistant;
     export const _MongoLocal = EnvConfigs.MogoLocal;
     export const _setDefaultLangValues = ColoredsLinesConfig.setDefaultLangValues;
}