import * as vscode from "vscode";

let autoSemiOn = true;

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "auto-semi.toggleAutoSemi",
    () => {
      autoSemiOn = !autoSemiOn;

      const message = `Toggled Auto Semi ${autoSemiOn ? "On" : "Off"}`;
      vscode.window.showInformationMessage(message);
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
