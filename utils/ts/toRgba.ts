import * as vscode from 'vscode';
// ! ──────────────────────────────────────────────────────────────────────── A ETUDIER ──────────
export function toRgba(n: string): vscode.Color {
	n = n.replace('#', '');
	const r = parseInt(n.slice(0, 2), 16) / 255;
	const g = parseInt(n.slice(2, 4), 16) / 255;
	const b = parseInt(n.slice(4, 6), 16) / 255;
	const a = n.length > 7 ? parseInt(n.slice(4, 6), 16) / 255 : 1;
	return new vscode.Color(r, g, b, a);
}
