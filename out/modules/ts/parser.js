"use strict";
// (:g:) |────────────────────────────────────────────────────────────────────────────────────────────────── |
// (:r:) |────────────────────────────────────────────────────────────────────────────────────────────────── |
// (:y:) |:    :    :    :  :  :  : : : ::::::::::     Parser    :::::::::: : : :  :  :  :   :   :    :     :|
// (:r:) |────────────────────────────────────────────────────────────────────────────────────────────────── |
// (:g:) |────────────────────────────────────────────────────────────────────────────────────────────────── |
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
//#region (:g:)                                              | Imports          ─── |
const vscode = require("vscode");
const Modules_1 = require("modules/Modules");
var Parser;
(function (Parser) {
    //#endregion (:n:)                                                              ─── |
    //#region (:y:)                                              | Properties      ─── |
    var expression = "";
    var delimiter = "";
    var blockCommentStart = "";
    var blockCommentEnd = "";
    var highlightSingleLineComments = true;
    var highlightMultilineComments = false;
    var highlightJSDoc = false;
    var isPlainText = false;
    var ignoreFirstLine = false;
    var supportedLanguage = true;
    // Read from the package.json
    var workSaceConfig = vscode.workspace.getConfiguration('better-comments');
    //#region (:o:)                                              | Parsing               ─── |
    function FindSingleLineComments(activeEditor) {
        // If highlight single line comments is off, single line comments are not supported for this language
        if (!highlightSingleLineComments)
            return;
        let text = activeEditor.document.getText();
        // if it's plain text, we have to do mutliline regex to catch the start of the line with ^
        let regexFlags = (isPlainText) ? "igm" : "ig";
        let regEx = new RegExp(expression, regexFlags);
        let regExpExecResult;
        while (regExpExecResult = regEx.exec(text)) {
            let startPos = activeEditor.document.positionAt(regExpExecResult.index);
            let endPos = activeEditor.document.positionAt(regExpExecResult.index + regExpExecResult[0].length);
            //!
            let range;
            range = { range: new vscode.Range(startPos, endPos) };
            // Required to ignore the first line of .py files (#61)
            if (ignoreFirstLine && startPos.line === 0 && startPos.character === 0) {
                continue;
            }
            // Find which custom delimiter was used in order to add it to the collection
            //var matchTag: { ranges: { range: vscode.Range; }[]; }= null;
            //!
            var matchTag;
            matchTag = Parser.vsTags.find((item) => item.tag.toLowerCase() === (regExpExecResult != null)[3].toLowerCase());
            if (matchTag) {
                matchTag.ranges.push(range);
            }
        }
    }
    Parser.FindSingleLineComments = FindSingleLineComments;
    function FindBlockComments(activeEditor) {
        // If highlight multiline is off in package.json or doesn't apply to his language, return
        if (!highlightMultilineComments)
            return;
        let text = activeEditor.document.getText();
        // Build up regex matcher for custom delimter tags
        let characters = [];
        for (let commentTag of Parser.vsTags) {
            characters.push(commentTag.escapedTag);
        }
        // Combine custom delimiters and the rest of the comment block matcher
        let commentMatchString = "(^)+([ \\t]*[ \\t]*)(";
        commentMatchString += characters.join("|");
        commentMatchString += ")([ ]*|[:])+([^*/][^\\r\\n]*)";
        // Use start and end delimiters to find block comments
        let regExString = "(^|[ \\t])(";
        regExString += blockCommentStart;
        regExString += "[\\s])+([\\s\\S]*?)(";
        regExString += blockCommentEnd;
        regExString += ")";
        let regEx = new RegExp(regExString, "gm");
        let commentRegEx = new RegExp(commentMatchString, "igm");
        // Find the multiline comment block
        let regExpExecResult;
        while (regExpExecResult = regEx.exec(text)) {
            let commentBlock = regExpExecResult[0];
            // Find the line
            let line;
            while (line = commentRegEx.exec(commentBlock)) {
                let startPos = activeEditor.document.positionAt(regExpExecResult.index + line.index + line[2].length);
                let endPos = activeEditor.document.positionAt(regExpExecResult.index + line.index + line[0].length);
                //*
                let range;
                range = { range: new vscode.Range(startPos, endPos) };
                // Find which custom delimiter was used in order to add it to the collection
                let matchString = line[3];
                //*
                var matchTag;
                matchTag = Parser.vsTags.find(item => item.tag.toLowerCase() === matchString.toLowerCase());
                if (matchTag) {
                    matchTag.ranges.range = range;
                }
            }
        }
    }
    Parser.FindBlockComments = FindBlockComments;
    function FindJSDocComments(activeEditor) {
        // If highlight multiline is off in package.json or doesn't apply to his language, return
        if (!highlightMultilineComments && !highlightJSDoc)
            return;
        let text = activeEditor.document.getText();
        // Build up regex matcher for custom delimter tags
        let characters = [];
        for (let commentTag of Parser.vsTags) {
            characters.push(commentTag.escapedTag);
        }
        // Combine custom delimiters and the rest of the comment block matcher
        let commentMatchString = "(^)+([ \\t]*\\*[ \\t]*)("; // Highlight after leading *
        let regEx = /(^|[ \t])(\/\*\*)+([\s\S]*?)(\*\/)/gm; // Find rows of comments matching pattern /** */
        commentMatchString += characters.join("|");
        commentMatchString += ")([ ]*|[:])+([^*/][^\\r\\n]*)";
        let commentRegEx = new RegExp(commentMatchString, "igm");
        // Find the multiline comment block
        let match;
        while (match = regEx.exec(text)) {
            let commentBlock = match[0];
            // Find the line
            let line;
            while (line = commentRegEx.exec(commentBlock)) {
                let startPos = activeEditor.document.positionAt(match.index + line.index + line[2].length);
                let endPos = activeEditor.document.positionAt(match.index + line.index + line[0].length);
                //?
                let range;
                range = { range: new vscode.Range(startPos, endPos) };
                // Find which custom delimiter was used in order to add it to the collection
                let matchString = line[3];
                // ?
                let matchTag;
                matchTag = Parser.vsTags.find(item => item.tag.toLowerCase() === matchString.toLowerCase());
                if (matchTag) {
                    matchTag.ranges.push(range);
                }
            }
        }
    }
    Parser.FindJSDocComments = FindJSDocComments;
    //#endregion (:n:)                                                                   ─── |
    function ApplyDecorations(activeEditor) {
        Parser.vsTags.forEach(tag => {
            activeEditor.setDecorations(tag.decoration, tag.ranges);
            // clear the ranges for the next pass
            tag.ranges.length = 0;
        });
    }
    Parser.ApplyDecorations = ApplyDecorations;
    function updateDecorations(editor) {
        if (supportedLanguage) {
            FindSingleLineComments(editor);
            FindBlockComments(editor);
            FindJSDocComments(editor);
            ApplyDecorations(editor);
        }
    }
    Parser.updateDecorations = updateDecorations;
    //#region (:y:)                                              | Initial Setup         ─── |
    function setTags() {
        for (let colorTag of Modules_1.Modules._UltimaColors.colorTagList) {
            let options;
            options = { color: colorTag.color, backgroundColor: colorTag.backgroundColor, textDecoration: '' };
            if (colorTag.strikethrough) {
                options.textDecoration = "line-through";
            }
            let escapedSequence = colorTag.tag.replace(/([()[{*+.$^\\|?])/g, '\\$1');
            Parser.vsTags.push({
                tag: colorTag.tag,
                escapedTag: escapedSequence.replace(/\//gi, "\\/"),
                ranges: { range: vscode.Range },
                decoration: vscode.window.createTextEditorDecorationType(options)
            });
        }
    }
    Parser.setTags = setTags;
    function setDelimiter(languageCode) {
        supportedLanguage = true;
        ignoreFirstLine = false;
        isPlainText = false;
        switch (languageCode) {
            case "asciidoc":
                setCommentFormat("//", "////", "////");
                break;
            case "apex":
            case "javascript":
            case "javascriptreact":
            case "typescript":
            case "typescriptreact":
                setCommentFormat("//", "/*", "*/");
                highlightJSDoc = true;
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
                setCommentFormat("//", "/*", "*/");
                break;
            case "css":
                setCommentFormat("/*", "/*", "*/");
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
                delimiter = "#";
                break;
            case "tcl":
                delimiter = "#";
                ignoreFirstLine = true;
                break;
            case "elixir":
            case "python":
                setCommentFormat("#", '"""', '"""');
                ignoreFirstLine = true;
                break;
            case "nim":
                setCommentFormat("#", "#[", "]#");
                break;
            case "powershell":
                setCommentFormat("#", "<#", "#>");
                break;
            case "ada":
            case "hive-sql":
            case "pig":
            case "plsql":
            case "sql":
                delimiter = "--";
                break;
            case "lua":
                setCommentFormat("--", "--[[", "]]");
                break;
            case "elm":
            case "haskell":
                setCommentFormat("--", "{-", "-}");
                break;
            case "vb":
            case "diagram": // ? PlantUML is recognized as Diagram (diagram)
                delimiter = "'";
                break;
            case "bibtex":
            case "erlang":
            case "latex":
            case "matlab":
                delimiter = "%";
                break;
            case "clojure":
            case "racket":
            case "lisp":
                delimiter = ";";
                break;
            case "terraform":
                setCommentFormat("#", "/*", "*/");
                break;
            case "COBOL":
                delimiter = this.escapeRegExp("*>");
                break;
            case "fortran-modern":
                delimiter = "c";
                break;
            case "SAS":
            case "stata":
                setCommentFormat("*", "/*", "*/");
                break;
            case "html":
            case "markdown":
                setCommentFormat("<!--", "<!--", "-->");
                break;
            case "twig":
                setCommentFormat("{#", "{#", "#}");
                break;
            case "genstat":
                setCommentFormat("\\", '"', '"');
                break;
            case "cfml":
                setCommentFormat("<!---", "<!---", "--->");
                break;
            case "plaintext":
                isPlainText = true;
                // If highlight plaintext is enabeld, this is a supported language
                supportedLanguage = this.contributions.highlightPlainText;
                break;
            default:
                supportedLanguage = false;
                break;
        }
    }
    function setCommentFormat(singleLine, start, end) {
        // If no single line comment delimiter is passed, single line comments are not supported
        let searchIt = /[.*+?^${}()|[\]\\]/g;
        let replaceWith = '\\$&';
        if (singleLine) {
            delimiter = singleLine.replace(searchIt, replaceWith);
        }
        else {
            highlightSingleLineComments = false;
        }
        blockCommentStart = start.replace(searchIt, replaceWith);
        blockCommentEnd = end.replace(searchIt, replaceWith);
        highlightMultilineComments = workSaceConfig.multilineComments;
    }
    function SetRegex(languageCode) {
        setDelimiter(languageCode);
        // if the language isn't supported, we don't need to go any further
        if (!supportedLanguage) {
            return;
        }
        let vsEscapedTags = [];
        for (let commentTag of Parser.vsTags) {
            vsEscapedTags.push(commentTag.escapedTag);
        }
        if (isPlainText && workSaceConfig.highlightPlainText) {
            // start by tying the regex to the first character in a line
            expression = "(^)+([ \\t]*[ \\t]*)";
        }
        else {
            // start by finding the delimiter (//, --, #, ') with optional spaces or tabs
            expression = "(" + delimiter.replace(/\//ig, "\\/") + ")+( |\t)*";
        }
        // Apply all configurable comment start tags
        expression += "(";
        expression += vsEscapedTags.join("|");
        expression += ")+(.*)";
    }
    Parser.SetRegex = SetRegex;
    //#endregion (:n:)                                                                   ─── |
    function escapeRegExp(input) {
        return input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }
    function setTimer(on) {
        var interval = 200;
        var timer;
        on
            ? (() => { setInterval(updateDecorations, interval); })
            : (() => { clearInterval(timer); });
    }
})(Parser = exports.Parser || (exports.Parser = {}));
//# sourceMappingURL=parser.js.map