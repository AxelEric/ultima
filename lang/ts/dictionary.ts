import {Interfaces} from '../../insterfaces/Interfaces'
import Lang from 'insterfaces/ts/lang';

 function setCommentFormat( lang: Interfaces._ILang) {
     
     lang.langTags.delimiter =  (lang.langTags.middle) ? escapeRegExp(lang.langTags.middle) : ()=>{lang.mono = false;}
     lang.langTags.start = escapeRegExp(lang.langTags.start);
     lang.langTags.end = escapeRegExp(lang.langTags.end);
     
 }
 function escapeRegExp(input) {
     return input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
 }


    export function setLangTags (lang: Interfaces._ILang ) {

     const thisLang = lang;
     /*
     let plainText: boolean                  = lang.plainText;
     let sensitive: boolean                  = lang.sensitive;
     let supported: boolean                   = lang.supported;
     let langTags: Interfaces._ILangTag      = lang.langTags;
     let noFirst: boolean                    = lang.noFirst;
     let langId: string                      = lang.langId;	
     let jsDoc: boolean                      = lang.jsDoc;
     let mono: boolean                       = lang.mono;
     */


        switch (thisLang.langId) {

            case "asciidoc":
                this.setCommentFormat("//", "////", "////");
                break;

            case "apex":
            case "javascript":          //#
            case "javascriptreact":     //#
            case "typescript":          //#     
            case "typescriptreact":     //#
                thisLang.langTags = { start: "/*", middle: "//", end: "*/", escape: "" };
                setCommentFormat(thisLang);
                thisLang.jsDoc = true;
                break;
     
     
     
            case 'arendelle':
            case 'glsl':
            case 'javascriptreact':
            case 'jison':
            case 'karyscript':
            case 'objective-c':
            case 'ohm':
            case 'pegjs':
            case 'processing':
            case 'qml':
                                
            case "al":
            case "c":
            case "cpp":
            case "csharp":
            case "dart":
            case "flax":
            case "fsharp":
            case "go":
            case "groovy":
            case "haxe":
            case "java":
            case "jsonc":
            case "kotlin":
            case "less":
            case "pascal":
            case "objectpascal":
            case "php":
            case "rust":
            case "scala":
            case "scss":
            case "stylus":
            case "swift":
            case "verilog":
            case "vue":
                thisLang.langTags = { start: "/*", middle: "//", end: "*/"  };
                setCommentFormat(thisLang);
                break;


            case "css":
                thisLang.langTags = { start: "/*", middle: "//", end: "*/" };
                setCommentFormat(thisLang);
                break;

            case "coffeescript":        
            case 'crystal':
            case 'fish':
            case 'make':
            case 'bash':
            case 'nearley':
            case 'shell':           
            case "dockerfile":          
            case "gdscript":            
            case "graphql":             
            case "julia":               
            case "makefile":            
            case "perl":                
            case "perl6":               
            case "puppet":              
            case "r":                   
            case "ruby":                
            case "shellscript":         
            case "tcl":                 
            case "yaml":                
                thisLang.langTags.delimiter = "#";
                break;

            case "tcl":
                thisLang.langTags.delimiter = "#";
                thisLang.noFirst = true;
                break;

            case "elixir":
            case "python":
                thisLang.langTags = { start: '"""', middle: "#", end: '"""' };
                setCommentFormat(thisLang);
                thisLang.noFirst = true;
                break;

            case "nim":
                thisLang.langTags = { start: "#[", middle: "#", end: "]#" };
                setCommentFormat(thisLang);
                break;

            case "powershell":
                thisLang.langTags = { start: "<#", middle: "#", end: "#>" };
                this.setCommentFormat(thisLang);
                break;

            case "ada":
            case "hive-sql":
            case "pig":
            case "plsql":
            case "sql":
                thisLang.langTags.delimiter = "--";
                break;

            case "lua":
                thisLang.langTags = { start: "--[[", middle: "--", end: "]]" };
                this.setCommentFormat(thisLang);
                break;

            case "elm":
            case "haskell":
                thisLang.langTags = { start: "{-", middle: "--", end: "-}" };
                setCommentFormat(thisLang);
                break;

            case "vb":
            case "diagram": // ? PlantUML is recognized as Diagram (diagram)
                thisLang.langTags.delimiter = "'";
                break;

            case "bibtex":
            case "erlang":
            case "latex":
            case "matlab":
                thisLang.langTags.delimiter = "%";
                break;

            case "clojure":
            case "racket":
            case "lisp":
                thisLang.langTags.delimiter = ";";
                break;

            case "terraform":
                thisLang.langTags = { start: "/*", middle: "#", end: "*/" };
                setCommentFormat(thisLang);
                break;

            case "COBOL":
               thisLang.langTags.delimiter = this.escapeRegExp("*>");
                break;

            case "fortran-modern":
               thisLang.langTags.delimiter = "c";
                break;

            case "SAS":
            case "stata":
                thisLang.langTags = { start: "/*", middle: "*", end: "*/" };
                setCommentFormat(thisLang);
                break;

            case "html":
            case "markdown":
                thisLang.langTags = { start: "<!--", middle: "<!--", end: "-->" };
                setCommentFormat(thisLang);
                break;

            case "twig":
                thisLang.langTags = { start: "{#", middle: "{#", end: "#}" };
                setCommentFormat(thisLang);
                break;

            case "genstat":
                thisLang.langTags = { start: '"', middle: "//", end: '"' };
                setCommentFormat(thisLang);
                break;

            case "cfml":
                thisLang.langTags = { start: "<!---", middle: "<!---", end: "--->" };
                setCommentFormat(thisLang);
                break;

            case "plaintext":
                thisLang.plainText = true;
                thisLang.supported = thisLang.plainText;
                break;

            default:
                thisLang.supported = false;
                break;
        

        }
        return thisLang;
    }






// * ──────────────────────────────────────────────────────────────────────────────── 2 ──────────
// ! ───────────── END ────────────────────────── END ────────────────────────── END ─────────────
// * ──────────────────────────────────────────────────────────────────────────────── 2 ──────────
// ! ───────────── END ────────────────────────── END ────────────────────────── END ─────────────
// * ──────────────────────────────────────────────────────────────────────────────── 2 ──────────    
// ! ───────────── END ────────────────────────── END ────────────────────────── END ─────────────

  /*



                                   case 'arendelle':
            case 'cpp':
            case 'csharp':
                                   case 'glsl':
            case 'groovy':
            case 'haxe':
            case 'java':
            case 'javascript':
            case 'javascriptreact':
                                   case 'jison':
            case 'json':
                                   case 'karyscript':
            case 'less':
                                   case 'objective-c':
                                   case 'ohm':
                                   case 'pegjs':
            case 'php':
                                   case 'processing':
                                   case 'qml':
            case 'rust':
            case 'scala':
            case 'swift':
            case 'typescript':          
            case 'typescriptreact':     
                                   case 'uno':
                return {
                    sensitive: false,
                    chars: { start: "//", middle: "//", end: "//" },
                }

            case 'fsharp':
            case 'go':
            case 'pageman':
            case 'stylus':
            case 'yuml':
                return {
                    sensitive: true,
                    chars: { start: "//", middle: "//", end: "//" },
                }

            case 'bash':
            case 'crystal':
            case 'fish':
            case 'make':
            case 'makefile':
            case 'nearley':
            case 'perl':
            case 'powershell':
            case 'r':
            case 'ruby':
            case 'shell':
            case 'shellscript':
                return {
                    sensitive: false,
                    chars: { start: "#", middle: "#", end: "#" },
                }

            case 'coffeescript':
            case 'julia':
            case 'python':
            case 'nix':
            case 'yml':
            case 'yaml':
                return {
                    sensitive: true,
                    chars: { start: "#", middle: "#", end: "#" },
                }


            case 'latex':
            case 'matlab':
            case 'octave':
            case 'tex':
                return {
                    sensitive: false,
                    chars: { start: "%", middle: "%", end: "%" },
                }

            case 'elm':
            case 'haskell':
            case 'purescript':
                return {
                    sensitive: true,
                    chars: { start: "--", middle: "--", end: "--" },
                }

            case 'lua':
            case 'sql':
                return {
                    sensitive: false,
                    chars: { start: "--", middle: "--", end: "--" },
                }

            case 'clojure':
            case 'lisp':
            case 'racket':
            case 'scheme':
                return {
                    sensitive: false,
                    chars: { start: ";;", middle: ";;", end: ";;" },
                }

            case 'bat':
                return {
                    sensitive: false,
                    chars: { start: "::", middle: "::", end: "::" },
                }

            case 'vb':
                return {
                    sensitive: false,
                    chars: { start: "'", middle: "'", end: "'" },
                }

            case "css":
            case "c":
                return {
                    sensitive: false,
                   chars: { start: "/*", middle: " *", end: " *///" },
    /*            }

            case "html":
            case "xml":
            case "xhtml":
            case "us":
            case "xaml":
            case "plist":
                return {
                    sensitive: false,
                    chars: { start: "<!--", middle: "  --", end: "  -->" },
                }

            case 'plaintext':
                return {
                    sensitive: false,
                    chars: { start: "--", middle: "--", end: "--" },
                }

            default:
                return null
        }
    }

// ────────────────────────────────────────────────────────────────────────────────
*/
