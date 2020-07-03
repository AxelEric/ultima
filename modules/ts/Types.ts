// (:r:) ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
// (:g:) ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
// (:y:) :    :    :    :   :   :   : : : :::::::::::::  T Y P E - A L I A S  :::::::::::::::: : : :  :  :  :   :    :    :     :      :
// (:g:) ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
//#region (:n:)─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

require('module-alias/register');
import * as vscode from 'vscode';
import { type } from 'os';

export module Types {

     export type ITextEditorDecorationType = vscode.TextEditorDecorationType;
	export type ActiveTextEditor = typeof vscode.window.activeTextEditor;
	export type DocumentColorProvider = vscode.DocumentColorProvider;
	export type IDecorationOptions = vscode.DecorationOptions;
	export type IExtensionContext = vscode.ExtensionContext;
	export type TextDocument = vscode.TextDocument;
	export type Token = vscode.CancellationToken;
	export type selection = vscode.Selection;
	export type Memento = vscode.Memento;
	export type Color = vscode.Color;

     export type Position = vscode.Position;
     export const position = vscode.Position;
     export const window = vscode.window;
     export const workspace = vscode.workspace;
     export type ExtensionContext = vscode.ExtensionContext;


     export type Range = vscode.Range;
     export const range = vscode.Range;
     export type ColorInformation = vscode.ColorInformation;
     export const colorInformation = typeof vscode.ColorInformation;
     
     //export const onDidChangeTextDocument = vscode.workspace.onDidChangeTextDocument;




//#endregion (:n:))── |                                                              											     ─── |
// (:g:) ──────────────────────────────────────────────────── Powered by ───────────────────────────────────────────────────────────────
// (:r:) ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
// (:y:) :     :     :    :   :   :  :  : : : : : ::::::::: A X E L E R I C :::::::::: : : :  :  :  :   :   :   :    :     :     :     :
// (:r:) ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
// (:g:) ────────────────────────────────────────────────── axel@axeleric.eu ───────────────────────────────────────────────────────────
}
