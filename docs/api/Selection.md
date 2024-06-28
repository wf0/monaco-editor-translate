# Selection
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#classes/Selection.html
:::

## 快捷链接

<script setup>
const data = [
  { icon: "C", link: "constructor" },
  { icon: "P", link: "endColumn" },
  { icon: "P", link: "endLineNumber" },
  { icon: "P", link: "positionColumn" },
  { icon: "P", link: "positionLineNumber" },
  { icon: "P", link: "selectionStartColumn" },
  { icon: "P", link: "selectionStartLineNumber" },
  { icon: "P", link: "startColumn" },
  { icon: "P", link: "startLineNumber" },
  { icon: "M", link: "collapseToEnd" },
  { icon: "M", link: "collapseToStart" },
  { icon: "M", link: "containsPosition" },
  { icon: "M", link: "containsRange" },
  { icon: "M", link: "delta" },
  { icon: "M", link: "equalsRange" },
  { icon: "M", link: "equalsSelection" },
  { icon: "M", link: "getDirection" },
  { icon: "M", link: "getEndPosition" },
  { icon: "M", link: "getPosition" },
  { icon: "M", link: "getSelectionStart" },
  { icon: "M", link: "getStartPosition" },
  { icon: "M", link: "intersectRanges" },
  { icon: "M", link: "isEmpty" },
  { icon: "M", link: "plusRange" },
  { icon: "M", link: "setEndPosition" },
  { icon: "M", link: "setStartPosition" },
  { icon: "M", link: "strictContainsRange" },
  { icon: "M", link: "toJSON" },
  { icon: "M", link: "toString" },
  { icon: "M", link: "areIntersecting" },
  { icon: "M", link: "areIntersectingOrTouching" },
  { icon: "M", link: "collapseToEnd" },
  { icon: "M", link: "collapseToStart" },
  { icon: "M", link: "compareRangesUsingEnds" },
  { icon: "M", link: "compareRangesUsingStarts" },
  { icon: "M", link: "containsPosition" },
  { icon: "M", link: "containsRange" },
  { icon: "M", link: "createWithDirection" },
  { icon: "M", link: "equalsRange" },
  { icon: "M", link: "fromPositions" },
  { icon: "M", link: "fromRange" },
  { icon: "M", link: "getEndPosition" },
  { icon: "M", link: "getStartPosition" },
  { icon: "M", link: "intersectRanges" },
  { icon: "M", link: "isEmpty" },
  { icon: "M", link: "isIRange" },
  { icon: "M", link: "isISelection" },
  { icon: "M", link: "lift" },
  { icon: "M", link: "liftSelection" },
  { icon: "M", link: "plusRange" },
  { icon: "M", link: "selectionsArrEqual" },
  { icon: "M", link: "selectionsEqual" },
  { icon: "M", link: "spansMultipleLines" },
  { icon: "M", link: "strictContainsRange" },
];

</script>

<dataItems :data="data" />


## constructor
- 语法：`new Selection(selectionStartLineNumber, selectionStartColumn, positionLineNumber, positionColumn): Selection`
- 参数：
  - `selectionStartLineNumber`: `number`
  - `selectionStartColumn`: `number`
  - `positionLineNumber`: `number`
  - `positionColumn`: `number`
- 返回值：[Selection](/api/Selection.md)

## endColumn
- 类型：`number`
- 描述：结束列


## endLineNumber
- 类型：`number`
- 描述：结束行


## positionColumn
- 类型：`number`
- 描述：位置LineNumber上选择已结束的列。


## positionLineNumber
- 类型：`number`
- 描述：选择结束的行号


## selectionStartColumn
- 类型：`number`
- 描述：selectionStartLineNumber上所选内容开始的列。


## selectionStartLineNumber
- 类型：`number`
- 描述：选择开始的行号


## startColumn
- 类型：`number`
- 描述：选择开始列。


## startLineNumber
- 类型：`number`
- 描述：选择开始行。


## collapseToEnd
- 语法：`collapseToEnd(): Selection`
- 描述：使用此范围的结束位置创建一个新的空范围。


## collapseToStart
- 语法：`collapseToStart(): Selection`
- 描述：使用此范围的开始位置创建一个新的空范围。


## containsPosition
- 语法：`containsPosition(position: Position): boolean`
- 参数：`position`: [Position](/api/Position.md)
- 描述：测试位置是否在此范围内，如果位置在边缘，将返回true。


## containsRange
- 语法：`containsRange(range: IRange): boolean`
- 参数：`range`: [IRange](/api/IRange.md)
- 描述：测试范围是否在此范围内，如果范围等于此范围，将返回true。


## delta
- 语法：`delta(lineCount): Range`
- 参数：`lineCount`: `number`
- 描述：将范围移动给定的行数。


## equalsRange
- 语法：`equalsRange(other: IRange): boolean`
- 参数：`other`: [IRange](/api/IRange.md)
- 描述：测试范围是否等于此范围。


## equalsSelection
- 语法：`equalsSelection(other: ISelection): boolean`
- 参数：`other`: [ISelection](/api/ISelection.md)
- 描述：测试选择是否等于此选择。


## getDirection
- 语法：`getDirection(): SelectionDirection`
- 返回值：[SelectionDirection](/api/SelectionDirection.md)
- 描述：返回此选择方向。

## getEndPosition
- 语法：`getEndPosition(): Position`
- 描述：返回此范围的结束位置。


## getPosition
- 语法：`getPosition(): Position`
- 描述：返回此范围的位置。


## getSelectionStart
- 语法：`getSelectionStart(): Position`
- 描述：返回此范围的开始位置。


## getStartPosition
- 语法：`getStartPosition(): Position`
- 描述：返回此范围的开始位置。


## intersectRanges
- 语法：`intersectRanges(range: IRange): Range`
- 参数：`range`: [IRange](/api/IRange.md)
- 描述：返回此范围与给定范围的交集。


## isEmpty
- 语法：`isEmpty(): boolean`
- 描述：测试此范围是否为空。


## plusRange
- 语法：`plusRange(range: IRange): Range`
- 参数：`range`: [IRange](/api/IRange.md)
- 描述：返回此范围与给定范围的并集。


## setEndPosition
- 语法：`setEndPosition(endLineNumber, endColumn): Selection`
- 参数：
  - `endLineNumber`: `number`
  - `endColumn`: `number`
- 描述：创建具有不同位置LineNumber和位置Column的新选择。


## setStartPosition
- 语法：`setStartPosition(startLineNumber, startColumn): Selection`
- 参数：
  - `startLineNumber`: `number`
  - `startColumn`: `number`
- 描述：创建具有不同位置LineNumber和位置Column的新选择。


## strictContainsRange
- 语法：`strictContainsRange(range: IRange): boolean`
- 参数：`range`: [IRange](/api/IRange.md)
- 描述：测试范围是否在此范围内，如果范围等于此范围，将返回false。


## toJSON
- 语法：`toJSON(): IRange`
- 描述：返回此范围的JSON表示形式。


## toString
- 语法：`toString(): string`
- 描述：返回此范围的字符串表示形式。


## areIntersecting
- 语法：`areIntersecting(a, b): boolean`
- 参数：
  - `a`: [IRange](/api/IRange.md)
  - `b`: [IRange](/api/IRange.md)
- 描述：测试两个范围是否相交，如果范围相接触，则返回true。


## areIntersectingOrTouching
- 语法：`areIntersectingOrTouching(a, b): boolean`
- 参数：
  - `a`: [IRange](/api/IRange.md)
  - `b`: [IRange](/api/IRange.md)
- 描述：测试两个范围是否相交或接触，如果范围相接触，则返回true。


## collapseToEnd
- 语法：`collapseToEnd(range): Range`
- 参数：`range`: [IRange](/api/IRange.md)
- 描述：使用此范围的结束位置创建一个新的空范围。


## collapseToStart
- 语法：`collapseToStart(range): Range`
- 参数：`range`: [IRange](/api/IRange.md)
- 描述：使用此范围的开始位置创建一个新的空范围。


## compareRangesUsingEnds
- 语法：`compareRangesUsingEnds(a, b): number`
- 参数：
  - `a`: [IRange](/api/IRange.md)
  - `b`: [IRange](/api/IRange.md)
- 描述：比较两个范围的结束位置。


## compareRangesUsingStarts
- 语法：`compareRangesUsingStarts(a, b): number`
- 参数：
  - `a`: [IRange](/api/IRange.md)
  - `b`: [IRange](/api/IRange.md)
- 描述：比较两个范围的开始位置。


## containsPosition
- 语法：`containsPosition(range, position): boolean`
- 参数：
  - `range`: [IRange](/api/IRange.md)
  - `position`: [Position](/api/Position.md)
- 描述：测试位置是否在此范围内，如果位置在边缘，将返回true。


## containsRange
- 语法：`containsRange(range, otherRange): boolean`
- 参数：
  - `range`: [IRange](/api/IRange.md)
  - `otherRange`: [IRange](/api/IRange.md)
- 描述：测试范围是否在此范围内，如果范围等于此范围，将返回true。


## createWithDirection
- 语法：`createWithDirection(startLineNumber, startColumn, endLineNumber, endColumn, direction): Selection`
- 参数:
  - `startLineNumber`: `number`
  - `startColumn`: `number`
  - `endLineNumber`: `number`
  - `endColumn`: `number`
  - `direction`: [SelectionDirection](/api/SelectionDirection.md)
- 描述：创建具有给定方向的新选择。


## equalsRange
- 语法：`equalsRange(a, b): boolean`
- 参数：
  - `a`: [IRange](/api/IRange.md)
  - `b`: [IRange](/api/IRange.md)
- 描述：测试范围是否等于此范围。


## fromPositions
- 语法：`fromPositions(start, end): Selection`
- 参数：
  - `start`: [IPosition](/api/IPosition.md)
  - `end`: [IPosition](/api/IPosition.md)
- 描述：创建具有给定位置的新选择。


## fromRange
- 语法：`fromRange(range, direction): Selection`
- 参数：
  - `range`: [IRange](/api/IRange.md)
  - `direction`: [SelectionDirection](/api/SelectionDirection.md)
- 描述：创建具有给定方向的新选择。


## getEndPosition
- 语法：`getEndPosition(range): Position`
- 参数：`range`: [IRange](/api/IRange.md)
- 描述：返回此范围的结束位置。


## getStartPosition
- 语法：`getStartPosition(range): Position`
- 参数：`range`: [IRange](/api/IRange.md)
- 描述：返回此范围的开始位置。


## intersectRanges
- 语法：`intersectRanges(a, b): Range`
- 参数：
  - `a`: [IRange](/api/IRange.md)
  - `b`: [IRange](/api/IRange.md)
- 描述：返回此范围与给定范围的交集。

## isEmpty
- 语法：`isEmpty(range): boolean`
- 参数：`range`: [IRange](/api/IRange.md)
- 描述：测试此范围是否为空。


## isIRange
- 语法：`isIRange(obj): obj is IRange`
- 参数：`obj`: `any`
- 描述：测试对象是否为IRange。


## isISelection
- 语法：`isISelection(obj): obj is ISelection`
- 参数：`obj`: `any`
- 描述：测试对象是否为ISelection。


## lift
- 语法：`lift(range): null`
- 参数：`range`: [IRange](/api/IRange.md)
- 描述：创建具有给定方向的新选择。


## liftSelection
- 语法：`liftSelection(selection): null`
- 参数：`selection`: [ISelection](/api/ISelection.md)
- 描述：创建具有给定方向的新选择。


## plusRange
- 语法：`plusRange(a, b): Range`
- 参数：
  - `a`: [IRange](/api/IRange.md)
  - `b`: [IRange](/api/IRange.md)
- 描述：返回此范围与给定范围的交集。


## selectionsArrEqual
- 语法：`selectionsArrEqual(a, b): boolean`
- 参数：
  - `a`: [ISelection](/api/ISelection.md)[]
  - `b`: [ISelection](/api/ISelection.md)[]
- 描述：测试两个选择数组是否相等。


## selectionsEqual
- 语法：`selectionsEqual(a, b): boolean`
- 参数：
  - `a`: [ISelection](/api/ISelection.md)
  - `b`: [ISelection](/api/ISelection.md)
- 描述：测试两个选择是否相等。


## spansMultipleLines
- 语法：`spansMultipleLines(range): boolean`
- 参数：`range`: [IRange](/api/IRange.md)
- 描述：测试范围是否跨多行。


## strictContainsRange
- 语法：`strictContainsRange(range, otherRange): boolean`
- 参数：
  - `range`: [IRange](/api/IRange.md)
  - `otherRange`: [IRange](/api/IRange.md)
- 描述：测试范围是否严格包含其他范围。

