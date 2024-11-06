---
navbar: false
---


# 类型接口

<backTop/>

::: warning 更多类型接口请查看
文档都是一样的哈，只是提供不同的分支，以确保文件存在：

 [master-alpha => index.d.ts](https://gitee.com/wfeng0/uni-pptx/blob/master-alpha/dist/src/core/index.d.ts)

 [master => index.d.ts](https://gitee.com/wfeng0/uni-pptx/blob/master/dist/src/core/index.d.ts)
:::

## UniPPTX

```ts
export declare class UniPPTX {
    command: Command;
    register: Register;
    render: () => void;
    destroy: () => void;
    eventBus: EventBus<EventBusMap>;
    constructor(options: IPptxOptions);
}
```
## IPptxOptions

```ts
export interface IPptxOptions {
    container: Element | HTMLElement | string;
    width?: number;
    height?: number;
    websocket?: IYjsWebsocket;
}
```

## IYjsWebsocket

```ts
export interface IYjsWebsocket {
    url: string;
    userid: string;
    username?: string;
}
```

## Command
::: details command
```ts
export declare class Command {
    executePrevSlide: CommandAdapt["prevSlide"];
    executeNextSlide: CommandAdapt["nextSlide"];
    executeSwitchSlide: CommandAdapt["switchSlide"];
    executeAddSlide: CommandAdapt["addSlide"];
    getSlideImage: CommandAdapt["getSlideImage"];
    executePreviewBeginning: CommandAdapt["previewBeginning"];
    executePreviewCurrent: CommandAdapt["previewCurrent"];
    executePreviewSlide: CommandAdapt["previewSlide"];
    executeRecord: CommandAdapt["record"];
    executeSetBackground: CommandAdapt["setBackground"];
    executeDeleteSlide: CommandAdapt["deleteSlide"];
    executeRename: CommandAdapt["rename"];
    executeImportPptx: CommandAdapt["importPptx"];
    executeExportPptx: CommandAdapt["exportPptx"];
    executeExportPdf: CommandAdapt["exportPdf"];
    executeExportImage: CommandAdapt["exportImage"];
    executeShare: CommandAdapt["share"];
    executeEncrypt: CommandAdapt["encrypt"];
    executePrint: CommandAdapt["print"];
    executeHelp: CommandAdapt["help"];
    executeSave: CommandAdapt["save"];
    executeUndo: CommandAdapt["undo"];
    executeRedo: CommandAdapt["redo"];
    executeCut: CommandAdapt["cut"];
    executeCopy: CommandAdapt["copy"];
    executePaste: CommandAdapt["paste"];
    executeTop: CommandAdapt["top"];
    executeHoldUp: CommandAdapt["holdup"];
    executePutDown: CommandAdapt["putdown"];
    executeBottom: CommandAdapt["bottom"];
    executeHorizontLeft: CommandAdapt["horizontleft"];
    executeHorizonCenter: CommandAdapt["horizoncenter"];
    executeHorizonRight: CommandAdapt["horizonright"];
    executeVerticalTop: CommandAdapt["verticaltop"];
    executeVerticalCenter: CommandAdapt["verticalcenter"];
    executeVerticalBottom: CommandAdapt["verticalbottom"];
    executeAnimation: CommandAdapt["animation"];
    executeOpenSetting: CommandAdapt["openSetting"];
    executeUpdateShapeOptions: CommandAdapt["updateShapeOptions"];
    executeInsertImage: CommandAdapt["insertImage"];
    executeInsertMedia: CommandAdapt["insertMedia"];
    executeInsertLatex: CommandAdapt["insertLatex"];
    executeInsertTable: CommandAdapt["insertTable"];
    executeInsertChart: CommandAdapt["insertChart"];
    executeInsertRichText: CommandAdapt["insertRichText"];
    executeDeleteGraph: CommandAdapt["deleteGraph"];
    executeMoveGraph: CommandAdapt["moveGraph"];
    executeSelectAll: CommandAdapt["selectAll"];
    setTheme: CommandAdapt["setTheme"];
    executeBeautify: CommandAdapt["beautify"];
    executeOpenSlideTemp: CommandAdapt["openSlideTemp"];
    executeOpenMessage: CommandAdapt["openMessage"];
    executeUpdateLineOptions: CommandAdapt["updateLineOptions"];
    constructor(adapt: CommandAdapt);
}
```
:::

## Register
```ts
export declare class Register {
    shortcutList: (payload: IRegisterShortcut[]) => void;
    constructor(payload: IRegisterPayload);
}
```

## IRegisterShortcut
```ts
/** 快捷键 */
export interface IRegisterShortcut {
    key: KeyMap;
    desc: string;
    ctrl?: boolean;
    meta?: boolean;
    mod?: boolean;
    shift?: boolean;
    alt?: boolean;
    callback?: (command: Command, e?: Event) => void;
    when?: (p: {
        e: KeyboardEvent;
        draw: Draw;
    }) => boolean;
    preventDefault?: boolean;
    stopPropagation?: boolean;
}
```
