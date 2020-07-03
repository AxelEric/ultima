
module UserSet {

     export interface IUserSet {
          useMultiline: boolean;
          useJSDocStyle: boolean;
          usePlainText: boolean;
          ClorTags: [{
               tag: string;
               //color: Modules.Provider.Color;
               strikethrough: boolean;
               backgroundColor: string;
          }];
     }
}

export default UserSet;