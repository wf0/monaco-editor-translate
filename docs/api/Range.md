# Range
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#classes/Range.html
:::

编辑器中的范围。（startLineNumber，startColumn）<=（endLineNumber，endColumn）

## 快捷链接
<script setup>
const data = [
  { icon: "C", link: "constructor" },
  { icon: "P", link: "endColumn" },
  { icon: "P", link: "endLineNumber" },
  { icon: "P", link: "startColumn" },
  { icon: "P", link: "startLineNumber" },
  { icon: "M", link: "collapseToEnd" },
  { icon: "M", link: "collapseToStart" },
  { icon: "M", link: "containsPosition" },
  { icon: "M", link: "containsRange" },
  { icon: "M", link: "delta" },
  { icon: "M", link: "equalsRange" },
  { icon: "M", link: "getEndPosition" },
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
  { icon: "M", link: "equalsRange" },
  { icon: "M", link: "fromPositions" },
  { icon: "M", link: "getEndPosition" },
  { icon: "M", link: "getStartPosition" },
  { icon: "M", link: "intersectRanges" },
  { icon: "M", link: "isEmpty" },
  { icon: "M", link: "isIRange" },
  { icon: "M", link: "lift" },
  { icon: "M", link: "plusRange" },
  { icon: "M", link: "spansMultipleLines" },
  { icon: "M", link: "strictContainsRange" },
];

</script>

<dataItems :data="data" />

## constructor
- 语法：`new Range(startLineNumber, startColumn, endLineNumber, endColumn): Range`
- 参数：
  - `startLineNumber`: `number` 起始行号
  - `startColumn`: `number` 起始列号
  - `endLineNumber`: `number` 结束行号
  - `endColumn`: `number` 结束列号
- 返回值：[Range](/api/Range.md)


## endColumn
- 类型：`number`
- 描述：结束列号


## endLineNumber
- 类型：`number`
- 描述：结束行号


## startColumn
- 类型：`number`
- 描述：起始列号


## startLineNumber
- 类型：`number`
- 描述：起始行号


## collapseToEnd
- 语法：`collapseToEnd(): Range`
- 描述：使用此范围的结束位置创建一个新的空范围。


## collapseToStart
- 语法：`collapseToStart(): Range`
- 描述：使用此范围的起始位置创建一个新的空范围。


## containsPosition
- 语法：`containsPosition(position): boolean`
- 参数：`position`: [IPosition](/api/IPosition.md)
- 返回值：`boolean`
- 描述：测试位置是否在此范围内,如果位置在边缘，将返回true。
- 示例：
```js
const range = new Range(1, 0, 1, 6);
const position = new Position(1, 2);
// 1,2 的光标位置在选区 [1,0]-[1,6] 中
const result = range.containsPosition(position); 
console.log(result); // true
```


## containsRange
- 语法：`containsRange(range): boolean`
- 参数：`range`: [IRange](/api/IRange.md)
- 返回值：`boolean`
- 描述：判断当前选区是否包含另一个选区。


## delta
- 语法：`delta(lineCount): Range`
- 参数：`lineCount`: `number`
- 返回值：[IRange](/api/IRange.md)
- 描述：将范围移动给定的行数。
- 示例：
```js
const range = new Range(1, 0, 1, 6);
const newRange = range.delta(3);
console.group("Range.delta");
console.log(range);
console.log("执行 range.delta(3)");
console.log(newRange);
```
<img src='/Range.delta.png' />

## equalsRange
- 语法：`equalsRange(other: IRange): boolean`
- 参数：`other`: [IRange](/api/IRange.md)
- 返回值：`boolean`
- 描述：判断两个范围是否相等。


## getEndPosition
- 语法：`getEndPosition(): Position`
- 返回值：[Position](/api/Position.md)
- 描述：获取范围的结束位置。


## getStartPosition
- 语法：`getStartPosition(): Position`
- 返回值：[Position](/api/Position.md)
- 描述：获取范围的开始位置。


## intersectRanges
- 语法：`intersectRanges(range: IRange): Range`
- 参数：`range`: [IRange](/api/IRange.md)
- 描述：获取两个范围的交集。


## isEmpty
- 语法：`isEmpty(): boolean`
- 返回值：`boolean`
- 描述：判断当前范围是否为空。


## plusRange
- 语法：`plusRange(range: IRange): Range`
- 参数：`range`: [IRange](/api/IRange.md)
- 描述：将两个范围进行合并，最小的位置将用作起点，最大的位置将用作终点。


## setEndPosition
- 语法：`setEndPosition(endLineNumber, endColumn): Range`
- 参数：
  - `endLineNumber`: `number`
  - `endColumn`: `number`
- 描述：设置范围的结束位置。

## setStartPosition
- 语法：`setStartPosition(startLineNumber, startColumn): Range`
- 参数：
  - `startLineNumber`: `number`
  - `startColumn`: `number`
- 描述：设置范围的开始位置。


## strictContainsRange
- 语法：`strictContainsRange(range: IRange): boolean`
- 参数：`range`: [IRange](/api/IRange.md)
- 返回值：`boolean`
- 描述：测试范围是否严格在此范围内,范围必须在此范围之后开始，在此范围之前结束，结果才能为true。


## toJSON
- 语法：`toJSON(): IRange`
- 返回值：[IRange](/api/IRange.md)
- 描述：将范围转换为 JSON 格式。


## toString
- 语法：`toString(): string`
- 返回值：`string`
- 描述：将范围转换为字符串。


## areIntersecting
- 语法：`areIntersecting(a: IRange, b: IRange): boolean`
- 参数：
  - `a`: [IRange](/api/IRange.md)
  - `b`: [IRange](/api/IRange.md)
- 描述：测试两个范围是否相交。


## areIntersectingOrTouching
- 语法：`areIntersectingOrTouching(a: IRange, b: IRange): boolean`
- 参数：
  - `a`: [IRange](/api/IRange.md)
  - `b`: [IRange](/api/IRange.md)
- 描述：测试两个范围是否相交或相邻。


## collapseToEnd
- 语法：`collapseToEnd(range): Range`
- 参数：`range`: [IRange](/api/IRange.md)
- 描述：使用此范围的结束位置创建一个新的空范围。


## collapseToStart
- 语法：`collapseToStart(range): Range`
- 参数：`range`: [IRange](/api/IRange.md)
- 描述：使用此范围的起始位置创建一个新的空范围。


## compareRangesUsingEnds
- 语法：`compareRangesUsingEnds(a: IRange, b: IRange): number`
- 参数：
  - `a`: [IRange](/api/IRange.md)
  - `b`: [IRange](/api/IRange.md)
- 返回值：`number`
- 描述：一个比较范围的函数，用于对范围进行排序。它将首先比较endPosition上的范围，然后比较startPosition上的。


## compareRangesUsingStarts
- 语法：`compareRangesUsingStarts(a: IRange, b: IRange): number`
- 参数：
  - `a`: [IRange](/api/IRange.md)
  - `b`: [IRange](/api/IRange.md)
- 返回值：`number`
- 描述：一个比较范围的函数，用于对范围进行排序。它将首先比较startPosition上的范围，然后比较endPosition上的。


## containsPosition
- 语法：`containsPosition(range, position): boolean`
- 参数：
  - `range`: [IRange](/api/IRange.md)
  - `position`: [IPosition](/api/IPosition.md)
- 描述：测试位置是否在此范围内,如果位置在边缘，将返回true。

## containsRange
- 语法：`containsRange(range, otherRange): boolean`
- 参数：
  - `range`: [IRange](/api/IRange.md)
  - `otherRange`: [IRange](/api/IRange.md)
- 描述：判断当前选区是否包含另一个选区。


## equalsRange
- 语法：`equalsRange(a,b): boolean`
- 参数：
  - `a`: [IRange](/api/IRange.md)
  - `b`: [IRange](/api/IRange.md)
- 描述：判断两个范围是否相等。


## fromPositions
- 语法：`fromPositions(start: IPosition, end: IPosition): Range`
- 参数：
  - `start`: [IPosition](/api/IPosition.md)
  - `end`: [IPosition](/api/IPosition.md)
- 描述：创建一个范围，其开始位置和结束位置都是指定的位置。

## getEndPosition
- 语法：`getEndPosition(range): Position`
- 参数：`range`: [IRange](/api/IRange.md)
- 描述：获取范围的结束位置。


## getStartPosition
- 语法：`getStartPosition(range): Position`
- 参数：`range`: [IRange](/api/IRange.md)
- 描述：获取范围的开始位置。


## intersectRanges
- 语法：`intersectRanges(a: IRange, b: IRange): Range`
- 参数：
  - `a`: [IRange](/api/IRange.md)
  - `b`: [IRange](/api/IRange.md)
- 描述：获取两个范围的交集。


## isEmpty
- 语法：`isEmpty(range): boolean`
- 参数：`range`: [IRange](/api/IRange.md)
- 描述：判断当前范围是否为空。


## isIRange
- 语法：`isIRange(obj): boolean`
- 参数：`obj`: any
- 描述：判断对象是否为IRange。


## lift
- 语法：`lift(range: IRange): Range|null`
- 参数：`range`: [IRange](/api/IRange.md)
- 描述：将范围转换为Range。


## plusRange
- 语法：`plusRange(a: IRange, b: IRange): Range`
- 参数：
  - `a`: [IRange](/api/IRange.md)
  - `b`: [IRange](/api/IRange.md)
- 描述：将两个范围进行合并，最小的位置将用作起点，最大的位置将用作终点。


## spansMultipleLines
- 语法：`spansMultipleLines(range): boolean`
- 参数：`range`: [IRange](/api/IRange.md)
- 描述：测试范围是否跨多行。


## strictContainsRange
- 语法：`strictContainsRange(a: IRange, b: IRange): boolean`
- 参数：
  - `a`: [IRange](/api/IRange.md)
  - `b`: [IRange](/api/IRange.md)
- 描述：测试范围是否严格在此范围内,范围必须在此范围之后开始，在此范围之前结束，结果才能为true。

