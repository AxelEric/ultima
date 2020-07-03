//       |────────────────────────────────────────────────────────────────────────────────────────────────── |
//       |────────────────────────────────────────────────────────────────────────────────────────────────── |
//       |      :    :    :    :  :  : : :::::::: UltimaColors ::::::::: : :  :  :  :   :   :    :    :      |
//       |────────────────────────────────────────────────────────────────────────────────────────────────── |
//       |────────────────────────────────────────────────────────────────────────────────────────────────── |
import { Types } from "./Types";

     export const colTag = { r:" ", g:" ", y:" ", b:" ", o:" ", n:" ", z:" ", w:" ",  }

     export module UltimaColors {
     
     export const colTag = { r:" ", g:" ", y:" ", b:" ", o:" ", n:" ", z:" ", w:" ",  }
     



     //#region                                        |  ColorTags         ─── |

     export interface ColorTag {

          tag: string,
          color: string,
          backgroundColor: string,
          strikethrough: boolean
     }

     export type ColorTagList = Array<ColorTag> ;

     export const colorTagList: ColorTagList = [

          { tag: "#endregion "   ,color: "#303030"      ,strikethrough: false       ,backgroundColor: "transparent"},
          { tag: "#region "      ,color: "#303030"      ,strikethrough: false       ,backgroundColor: "transparent"},
          { tag: " "             ,color: "#ff2d00"      ,strikethrough: false       ,backgroundColor: "transparent"},
          { tag: " "             ,color: "#00FF00"      ,strikethrough: false       ,backgroundColor: "transparent"},
          { tag: " "             ,color: "#fff000"      ,strikethrough: false       ,backgroundColor: "transparent"},
          { tag: " "             ,color: "#0050ff"      ,strikethrough: false       ,backgroundColor: "transparent"},
          { tag: " "             ,color: "#ff8c00"      ,strikethrough: false       ,backgroundColor: "transparent"},
          { tag: " "             ,color: "#474747"      ,strikethrough: false       ,backgroundColor: "transparent"},
          { tag: " "             ,color: "#000000"      ,strikethrough: false       ,backgroundColor: "transparent"},
          { tag: " "             ,color: "#ffffff"      ,strikethrough: false       ,backgroundColor: "transparent"},

     ]
     //#endregion                                                          ─── |

     export interface Colors {

          "red":    {colorTag:" ", color: "#FF2D00" },
          "green":  {colorTag:" ", color: "#00FF00" },
          "yellow": {colorTag:" ", color: "#fff000" },
          "blue":   {colorTag:" ", color: "#0000ff" },
          "orange": {colorTag:" ", color: "#ff8c00" },
          "negra":  {colorTag:" ", color: "#474747" },
          "black":  {colorTag:" ", color: "#000000" },
          "withe":  {colorTag:" ", color: "#ffffff" },
     }

}

/*
| Code                   | Sample            | Name                                        | Description                                                    |
|────────────────────────|────────────────── |────────────────────────────────────        |────────────────────────────────────────────────────────────────|
| Utf8Id: "U+0020",      | char: " ",        | name: "SPACE",                             | descript: "Depends on font, typically 1/4 em, often adjusted", |
| Utf8Id: "U+00A0",      | char: " ",        | name: "NO-BREAK SPACE",                    | descript: "As a space, but often not adjusted",                |
| Utf8Id: "U+1680",      | char: " ",　　　　 | name: "OGHAM SPACE MARK",                  | descript: "Unspecified; usually not really a space but a dash",|
| Utf8Id: "U+180E",      | char: "᠎",         | name: "MONGOLIAN VOWEL SEPARATOR",         | descript: "0",
| Utf8Id: "U+2000",      | char: " ",        | name: "EN QUAD",                           | descript: "1 en (= 1/2 em)",
| Utf8Id: "U+2001",      | char: " ",        | name: "EM QUAD",                           | descript: "1 em (nominally, the height of the font)",
| Utf8Id: "U+2002",      | char: " ",        | name: "EN SPACE (nut)",                    | descript: "1 en (= 1/2 em)",
| Utf8Id: "U+2003",      | char: " ",        | name: "EM SPACE (mutton)",                 | descript: "1 em",
| Utf8Id: "U+2004",      | char: " ",        | name: "THREE-PER-EM SPACE (thick space)",  | descript: "1/3 em",
| Utf8Id: "U+2005",      | char: " ",        | name: "FOUR-PER-EM SPACE (mid space)",     | descript: "1/4 em",
| Utf8Id: "U+2006",      | char: " ",        | name: "SIX-PER-EM SPACE",                  | descript: "1/6 em",
| Utf8Id: "U+2007",      | char: " ",        | name: "FIGURE SPACE",                      | descript: "“Tabular width”, the width of digits",
| Utf8Id: "U+2008",      | char: " ",        | name: "PUNCTUATION SPACE",                 | descript: "The width of a period “.”",
| Utf8Id: "U+2009        | char: " ",        | name: "THIN SPACE",                        | descript: "1/5 em (or sometimes 1/6 em)",
| Utf8Id: "U+200A",      | char: " ",        | name: "HAIR SPACE",                        | descript: "Narrower than THIN SPACE",
| Utf8Id: "U+200B",      | char: "​",         | name: "ZERO WIDTH SPACE",                  | descript: "0",
| Utf8Id: "U+202F",      | char: " ",        | name: "NARROW NO-BREAK SPACE",             | descript: "Narrower than NO-BREAK SPACE (or SPACE), “typically the width of a thin space or a mid space”",
| Utf8Id: "U+205F",      | char: " ",        | name: "MEDIUM MATHEMATICAL SPACE",         | descript: "4/18 em",
| Utf8Id: "U+3000",      | char: "　",　　　　| name: "IDEOGRAPHIC SPACE",                 | descript: "The width of ideographic (CJK) characters.",
*/
//       |──────────────────────────────────────── Powered by ────────────────────────────────────────────── |
//       |────────────────────────────────────────────────────────────────────────────────────────────────── |
//       |    :   :   :  :  :  : : : :::::::::: A X E L E R I C :::::::::: : : :  :  :  :   :   :    :       |
//       |────────────────────────────────────────────────────────────────────────────────────────────────── |
//       |───────────────────────────────────── axel@axeleric.eu ─────────────────────────────────────────── |
