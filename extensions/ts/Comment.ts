//    |─────────────────────────────────────────────────────────────────────────────────────── |
//    |─────────────────────────────────────────────────────────────────────────────────────── |
//    |    :   :   :  :  :  : : : :::::: Coloreds Comments :::::: : : :  :  :  :   :   :   :   |
//    |─────────────────────────────────────────────────────────────────────────────────────── |
//    |─────────────────────────────────────────────────────────────────────────────────────── |



//#region                                               |  Imports                             ─── |

     require('module-alias/register');
     import {Interfaces} from '../../insterfaces/interfaces';
     import { Globals } from '../../globals/Globals';
     import * as vscode  from 'vscode';
     import roman = require('../../lang/ts/roman');
     import * as dictionary from '../../lang/ts/dictionary';

//#endregion                                                                                   ─── |

//#region                                               |  Properties                          ─── |

     var activeTextEditor: vscode.TextEditor;
     var firstSpaces = {spaces: 0, tabs: 0};
     const coLineCo = '\u2500';
     const lineRegEx =  /^\s*([a-z ]|[0-9][0-9\.]*|[\:\-\+\@\!\?])+\s*$/i;
     const RegExErrMsg = "Error: Comments only supports [a-z,A-Z][0-9][:,-,+,@,?,!]";

     var lang = new Globals.Lang();
     var line = new Globals.Line();
     const colTag = { r:" ", g:" ", y:" ", b:" ", o:" ", n:" ", z:" ", w:" ",  }
//#endregion                                                                                   ─── |

//#region                                               |  Impementation                       ─── |

     //#region                                          |  Activate - Deactivate          ─── |


     export function activate ( context: { subscriptions: vscode.Disposable[]; } ) {

          context.subscriptions.push( vscode.commands.registerCommand(

               'comment.makeFlagComment',

                         () => doReplace( genFlag() )
          ))

          context.subscriptions.push( vscode.commands.registerCommand(

               'comment.makeSectionComment',

                         () => doReplace( genSect( true ) )
          ))

          context.subscriptions.push( vscode.commands.registerCommand(

               'comment.makeReverseSectionComment',

                         () => doReplace( genSect( false ) )
          ))

          context.subscriptions.push( vscode.commands.registerCommand (

               'comment.makeLineComment',

                         () => doReplace( genLine() )
          ))

          vscode.window.onDidChangeActiveTextEditor(

               ( activeTextEditor = vscode.window.activeTextEditor as vscode.TextEditor ) => {

                    lang.langId = activeTextEditor.document.languageId;

                    lang = dictionary.setLangTags( lang )

               }, null, context.subscriptions
          );

          vscode.workspace.onDidChangeTextDocument(

               event => {

                    if (activeTextEditor && event.document === activeTextEditor.document) {

                         line.line        = activeTextEditor.selection.active.line;
                         line.text        = activeTextEditor.document.lineAt( line.line ).text;
                         lang.langId      = activeTextEditor.document.languageId;
                         line.spaceStatus = activeTextEditor.options.insertSpaces as boolean;
                         line.tabSize     = activeTextEditor.options.tabSize as number;
                         line.spacing     = getSpaces();
                         line.indent      = line.spacing.tabs + Math.floor( line.spacing.spaces / line.tabSize );
                         line.realIndent  = Math.floor( line.indent / 2 );
                    }
               }, null, context.subscriptions
          );

          function getSpaces ( ) {

               let spc = { tabs:0, spaces:0 };
               let i = 0;
               let elem: string;

               while ( line.text[i] ) {

                    elem = line.text[i++]
                    if(elem == ('\t' || ' ')){

                         spc.tabs = (elem=='\t')
                              ? spc.tabs+1
                              : spc.tabs;
                         spc.spaces = (elem != '\t')
                              ? spc.spaces+1
                              : spc.spaces;
                    }
               }
               return spc;
          }

     }

     export function deactivate () {
          vscode.window.showInformationMessage('Bye, bye ...... Hope we\'ll see us again ');
     }
     //#endregion                                                                         ─── |

     //#region                           Main Function  |  doReplace()                    ─── |

     function doReplace (str: string) {

          activeTextEditor.edit( textEditorEdit => {
               textEditorEdit.replace(
                    activeTextEditor.document.lineAt(line.line).range,str
               )
          })
          vscode.commands.executeCommand('cancelSelection');

     }

     //#endregion                                                                         ─── |

     //#region                      Comment Generation  |  genFlag()                      ─── |

     function genFlag () {

          const line90 = repeat(coLineCo, (90));
          const str = line.text.trim();
          const indent = genIndent();
          let mult = Math.floor((28 - str.length)/2);
          let rab = repeat(':',  mult);
          let result = '';
          const l9g = `${indent}${lang.langTags.middle}${colTag.g}${line90}\n`
          const l9r = `${indent}${lang.langTags.middle}${colTag.r}${line90}\n`
          result += (lang.sensitive||!lang.mono) ? `${indent}${lang.langTags.start}\n` : `${l9r}`;
          result += `${l9g}`
          result += `${indent}${lang.langTags.middle}${colTag.y} |:   :   :   :  :  :  : : : ::`;
          result += `${rab} ${str} ${rab}:: : : :  :  :  :   :   :   :|\n`;
          result += `${l9g}`;
          result += (lang.sensitive||!lang.mono) ? indent + lang.langTags.end + "\n" : `${l9r}`;
          return result;
     }

     //#endregion                                                                         ─── |

     //#region                      Comment Generation  |  genLine()                      ─── |

     function genLine ( ) {

          const txt = repeat( coLineCo, 90, true )
          const indent = genIndent();
          return (lang.mono)
          ? `\n${indent}${lang.langTags.middle}${colTag.r}${txt}\n`
          : `\n${indent}${lang.langTags.start}${colTag.r}${txt} ${lang.langTags.end}\n`;
     }

     //#endregion                                                                         ─── |

     //#region                      Comment Generation  |  genSect()                      ─── |

     function genSect (normal: boolean) {
          let result='';
          const width = (line.realIndent===0) ? 90 : 80;
          const str = (lineRegEx.test(line.text)) ? line.text.toUpperCase().trim() : "";
          const indent = genIndent();
          const startChars = repeat(coLineCo, 10);
          const tailsChars = repeat(coLineCo, width - str.length - 9);
          result+=(lang.sensitive||!lang.mono)?'':`${indent}${lang.langTags.start}\n`;
          result+= (normal)
               ? `\n${indent}${lang.langTags.middle}${colTag.y} ${startChars} ${str} ${tailsChars}\n`              
               : `\n${indent}${lang.langTags.middle}${colTag.g} ${tailsChars} ${str} ${startChars}\n`;
          result+=(lang.sensitive || !lang.mono)?'':`${indent}${lang.langTags.end}\n`;
          return result+genSpace();
     }

     //#endregion                                                                         ─── |

     //#region                                          |  Utils Functions                ─── |

     function genSpace ( ) {
          if ( lang.sensitive || !lang.mono ) {
              return "\n"
          } else {
              let spacings =
                  "\n" + genIndent( )
              if ( line.realIndent < 2 )
                  spacings += (line.spaceStatus)
                    ? repeat(' ',line.tabSize*1)
                    : repeat('\t',1)
              return spacings
          }
     }

     function genIndent ( ) {
          return repeat( ' ' , line.spacing.spaces )
               + (line.spaceStatus)
                 ? repeat(' ',line.tabSize*line.spacing.tabs)
                 : repeat('\t',line.spacing.tabs)

     }

     function repeat ( text: string, times: number, bol?: boolean | undefined ) {
          let result = ''
          if (bol){
          let tim = times/6
          let res = ''
          for ( let index = 0; index < (tim-2); index ++ )
               res += text
          return res+' END '+res+res+' END '+res+res+' END '+res;
          }
          for ( let index = 0; index < times; index ++ )
          result += text
          return result
     }

     //#endregion                                                                         ─── |

//#endregion                                                                                   ─── |


// ᠎   |──────────────────────────────────── Powered by ─────────────────────────────────────── |
// ᠎   |─────────────────────────────────────────────────────────────────────────────────────── |
//    |:   :   :  :  :  : : : :::::::::: A X E L E R I C :::::::::: : : :  :  :  :   :   :    :|
// ᠎   |─────────────────────────────────────────────────────────────────────────────────────── |
// ᠎   |───────────────────────────────── axel@axeleric.eu ──────────────────────────────────── |
//    |─────────────────────── This code is in completely inspired by ──────────────────────── |
//    |─────────────────────────────────── 'Comment V' ─────────────────────────────────────── |
//    |────────────────────────── written by 'karyfoundation' ──────────────────────────────── |

//               For colors, i use Better Comments written by "aaron-bond"   
//                            aaron-bond.better-comments
//                    simply paste the following in your settings
//  ────────────────────────────────────────────────────────────────────────────────────────────── |
//  ────────────────────────────────────────────────────────────────────────────────────────────── |
// ↓
/*
"better-comments.tags": [
     { "tag": "#endregion "   ,"color": "#303030"      ,"strikethrough": false       ,"backgroundColor": "transparent"},
     { "tag": "#region "      ,"color": "#303030"      ,"strikethrough": false       ,"backgroundColor": "transparent"},
     { "tag": " "             ,"color": "#ff2d00"      ,"strikethrough": false       ,"backgroundColor": "transparent"},
     { "tag": " "             ,"color": "#00FF00"      ,"strikethrough": false       ,"backgroundColor": "transparent"},
     { "tag": " "             ,"color": "#fff000"      ,"strikethrough": false       ,"backgroundColor": "transparent"},
     { "tag": " "             ,"color": "#0050ff"      ,"strikethrough": false       ,"backgroundColor": "transparent"},
     { "tag": " "             ,"color": "#ff8c00"      ,"strikethrough": false       ,"backgroundColor": "transparent"},
     { "tag": " "             ,"color": "#474747"      ,"strikethrough": false       ,"backgroundColor": "transparent"},
     { "tag": " "             ,"color": "#000000"      ,"strikethrough": false       ,"backgroundColor": "transparent"},
     { "tag": " "             ,"color": "#ffffff"      ,"strikethrough": false       ,"backgroundColor": "transparent"}
]
*/

//  ────────────────────────────────────────────────────────────────────────────────────────────── |
//  ────────────────────────────────────────────────────────────────────────────────────────────── |

//#region                                       |  Externals Interfaces and classes            ─── |

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


module LangTag {

     export interface ILangTag {

          start?: string;
          middle?: string;
          end?: string;
          escape?: string;
          delimiter?: string;
          mono?: string;
     }
}

class GlobLang implements Interfaces._ILang {

     constructor() {

          return (this instanceof GlobLang) ? this : new GlobLang();

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
class GlobLine implements Interfaces._ILine {

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
//#endregion                                                                                   ─── |

//  ────────────────────────────────────────────────────────────────────────────────────────────── |
//  ────────────────────────────────────────────────────────────────────────────────────────────── |





