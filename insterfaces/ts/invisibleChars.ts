import Assoc from './assoc'

module InvisibleChars {

     export interface IInvisibleChar {
     
          char: string ,
          Utf8Id: string,
          htmlCode: string,
          hexaCode: string,
          shortCall: string,
          name: string,
          assocList: Array<Assoc.IAssoc>;
     }
     
      type InvisibleCharList = Array<IInvisibleChar>

      const invisibleCharList : InvisibleCharList = [
     { Utf8Id: "U+0020", char: " ", htmlCode: "", hexaCode: "", shortCall: "", name: "", assocList: [] },

     { Utf8Id: "U+00A0", char: " ", htmlCode: "", hexaCode: "", shortCall: "", name: "", assocList: [] },

     { Utf8Id: "U+180E", char: "᠎", htmlCode: "", hexaCode: "", shortCall: "", name: "", assocList: [] },

     { Utf8Id: "U+2000", char: " ", htmlCode: "", hexaCode: "", shortCall: "", name: "", assocList: [] },

     { Utf8Id: "U+2001", char: " ", htmlCode: "", hexaCode: "", shortCall: "", name: "", assocList: [] },

     { Utf8Id: "U+2002", char: " ", htmlCode: "", hexaCode: "", shortCall: "", name: "", assocList: [] },

     { Utf8Id: "U+2003", char: " ", htmlCode: "", hexaCode: "", shortCall: "", name: "", assocList: [] },

     { Utf8Id: "U+2004", char: " ", htmlCode: "", hexaCode: "", shortCall: "", name: "", assocList: [] },

     { Utf8Id: "U+2005", char: " ", htmlCode: "", hexaCode: "", shortCall: "", name: "", assocList: [] },

     { Utf8Id: "U+2006", char: " ", htmlCode: "", hexaCode: "", shortCall: "", name: "", assocList: [] },

     { Utf8Id: "U+2007", char: " ", htmlCode: "", hexaCode: "", shortCall: "", name: "", assocList: [] },

     { Utf8Id: "U+2008", char: " ", htmlCode: "", hexaCode: "", shortCall: "", name: "", assocList: [] },

     { Utf8Id: "U+2009", char: " ", htmlCode: "", hexaCode: "", shortCall: "", name: "", assocList: [] },

     { Utf8Id: "U+200A", char: " ", htmlCode: "", hexaCode: "", shortCall: "", name: "", assocList: [] },

     { Utf8Id: "U+200B", char: "​", htmlCode: "", hexaCode: "", shortCall: "", name: "", assocList: [] },

     { Utf8Id: "U+202F", char: " ", htmlCode: "", hexaCode: "", shortCall: "", name: "", assocList: [] },

     { Utf8Id: "U+205F", char: " ", htmlCode: "", hexaCode: "", shortCall: "", name: "", assocList: [] },

     { Utf8Id: "U+3000", char: "　", htmlCode: "", hexaCode: "", shortCall: "", name: "", assocList: [] }
     ];
  
}

export default InvisibleChars;