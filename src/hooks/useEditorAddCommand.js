// addCommand
editor.addCommand({
  id: "command-123",
  run(...args) {
    console.log("执行了 command-123", args);
  },
});

/**
 * Directly trigger a handler or an editor action.
 * @param source The source of the call.
 * @param handlerId The id of the handler or the id of a contribution.
 * @param payload Extra data to be sent to the handler.
 */
//  trigger(source: string | null | undefined, handlerId: string, payload: any): void;
myEditor.trigger(null, "command-123", { a: 100 });
