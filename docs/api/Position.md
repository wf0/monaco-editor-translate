# Position
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#classes/Position.html
:::

```ts
new Position(lineNumber, column): Position
```

## constructor
- 类型：`new Position(lineNumber, column): Position`
- 参数：
  - `lineNumber`：`number`
  - `column`：`number`
- 返回值：`Position`

## column
- 类型：`number`

## lineNumber
- 类型：`number`

## clone
- 类型：`clone(): Position`
- 描述：克隆这个位置对象

## delta
- 类型：`delta(deltaLineNumber?, deltaColumn?): Position`
- 参数：
  - `deltaLineNumber`：`number`
  - `deltaColumn`：`number`
- 描述：返回一个新位置对象，该对象是当前位置对象的一个偏移量。

## equals
- 类型：`equals(a: IPosition): boolean`
- 参数：[IPosition](/api/IPosition.md)
- 描述：判断两个位置对象是否相等。

## isBefore
- 类型：`isBefore(a: IPosition): boolean`
- 参数：[IPosition](/api/IPosition.md)
- 描述：判断当前位置对象是否在给定的位置对象之前。

## isBeforeOrEqual
- 类型：`isBeforeOrEqual(a: IPosition): boolean`
- 参数：[IPosition](/api/IPosition.md)
- 描述：判断当前位置对象是否在给定的位置对象之前或相等。

## toJSON
- 类型：`toJSON(): IPosition`
- 描述：返回一个 JSON 对象，该对象包含当前位置对象的行号和列号。

## toString
- 类型：`toString(): string`
- 描述：返回一个字符串，该字符串包含当前位置对象的行号和列号。

## with
- 类型：`with(lineNumber?: number, column?: number): Position`
- 参数：
  - `lineNumber`：`number`
  - `column`：`number`
- 描述：返回一个新位置对象，该对象是当前位置对象的一个偏移量。

## compare
- 类型：`compare(a:IPosition, b:IPosition): number`
- 参数：`a,b 均为`[IPosition](/api/IPosition.md)
- 描述：比较两个位置对象，返回一个数字，表示当前位置对象和给定的位置对象之间的比较结果。

## equals
- 类型：`equals(a:IPosition, b:IPosition): boolean`
- 参数：`a,b 均为`[IPosition](/api/IPosition.md)
- 描述：比较两个位置对象，返回一个布尔值，表示当前位置对象和给定的位置对象是否相等。

## isBefore
- 类型：`isBefore(a:IPosition, b:IPosition): boolean`
- 参数：`a,b 均为`[IPosition](/api/IPosition.md)
- 描述：比较两个位置对象，返回一个布尔值，表示当前位置对象是否在给定的位置对象之前或相等。

## isBeforeOrEqual
- 类型：`isBeforeOrEqual(a:IPosition, b:IPosition): boolean`
- 参数：`a,b 均为`[IPosition](/api/IPosition.md)
- 描述：比较两个位置对象，返回一个布尔值，表示当前位置对象是否在给定的位置对象之前。

## isIPosition
- 类型：`isIPosition(obj: any): obj is IPosition`
- 描述：判断给定的对象是否是一个 IPosition 对象。

## lift
- 类型：`lift(position: IPosition): Position`
- 参数：[IPosition](/api/IPosition.md)
- 描述：将给定的 IPosition 对象转换为 Position 对象。
