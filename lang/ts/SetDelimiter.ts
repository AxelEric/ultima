/**
	 * Sets the comment delimiter [//, #, --, '] of a given language
	 * @param languageCode The short code of the current language
	 * https://code.visualstudio.com/docs/languages/identifiers
	 */
	export default function(languageCode: string): void {
        let supportedLanguage: Boolean = true;
        let ignoreFirstLine: Boolean = false;
        let isPlainText: Boolean = false;
        let sensitive: boolean = false;
        let highlightJSDoc: boolean = false;
        var chars: { start: string, middle: string, end: string };






    switch(languageCode) {

	case "asciidoc":
    this.setCommentFormat("//", "////", "////");
    break;

    case "apex":
    case "javascript":
    case "javascriptreact":
    case "typescript":
    case "typescriptreact":
    chars = { start: "//", middle: "//", end: "//" };
    this.setCommentFormat("//", "/*", "*/");
    this.highlightJSDoc = true;
    break;

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
    chars = { start: "//", middle: "//", end: "//" };
//    this.setCommentFormat("//", "/*", "*/");
    break;

    case "css":
    this.setCommentFormat("/*", "/*", "*/");
    break;

    case "coffeescript":
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
    this.delimiter = "#";
    break;

    case "tcl":
    this.delimiter = "#";
    this.ignoreFirstLine = true;
    break;

    case "elixir":
    case "python":
    this.setCommentFormat("#", '"""', '"""');
    this.ignoreFirstLine = true;
    break;

    case "nim":
    this.setCommentFormat("#", "#[", "]#");
    break;

    case "powershell":
    this.setCommentFormat("#", "<#", "#>");
    break;

    case "ada":
    case "hive-sql":
    case "pig":
    case "plsql":
    case "sql":
    this.delimiter = "--";
    break;

    case "lua":
    this.setCommentFormat("--", "--[[", "]]");
    break;

    case "elm":
    case "haskell":
    this.setCommentFormat("--", "{-", "-}");
    break;

    case "vb":
    case "diagram": // ? PlantUML is recognized as Diagram (diagram)
    this.delimiter = "'";
    break;

    case "bibtex":
    case "erlang":
    case "latex":
    case "matlab":
    this.delimiter = "%";
    break;

    case "clojure":
    case "racket":
    case "lisp":
    this.delimiter = ";";
    break;

    case "terraform":
    this.setCommentFormat("#", "/*", "*/");
    break;

    case "COBOL":
    this.delimiter = this.escapeRegExp("*>");
    break;

    case "fortran-modern":
    this.delimiter = "c";
    break;

    case "SAS":
    case "stata":
    this.setCommentFormat("*", "/*", "*/");
    break;

    case "html":
    case "markdown":
    this.setCommentFormat("<!--", "<!--", "-->");
    break;

    case "twig":
    this.setCommentFormat("{#", "{#", "#}");
    break;

    case "genstat":
    this.setCommentFormat("\\", '"', '"');
    break;

    case "cfml":
    this.setCommentFormat("<!---", "<!---", "--->");
    break;

    case "plaintext":
    this.isPlainText = true;

    // If highlight plaintext is enabeld, this is a supported language
    this.supportedLanguage = this.contributions.highlightPlainText;
    break;

    default:
        this.supportedLanguage = false;
    break;
}
	}