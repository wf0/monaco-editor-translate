# Uri

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#classes/Uri.html
:::

```txt
foo://example.com:8042/over/there?name=ferret#nose
      \_/   \______________/\_________/ \_________/ \__/
       |           |            |            |        |
    scheme     authority       path        query   fragment
       |   _____________________|__
      / \ /                        \
      urn:example:animal:ferret:nose
```


## 快捷链接
<script setup>
  const data = [
  { icon: "C", link: "constructor" },
  { icon: "P", link: "authority" },
  { icon: "P", link: "fragment" },
  { icon: "P", link: "path" },
  { icon: "P", link: "query" },
  { icon: "P", link: "scheme" },
  { icon: "A", link: "fsPath" },
  { icon: "M", link: "toJSON" },
  { icon: "M", link: "toString" },
  { icon: "M", link: "with" },
  { icon: "M", link: "file" },
  { icon: "M", link: "from" },
  { icon: "M", link: "isUri" },
  { icon: "M", link: "joinPath" },
  { icon: "M", link: "parse" },
  { icon: "M", link: "revive" },
];

</script>
<dataItems :data="data" />

## Implements
- [UriComponents](/api/UriComponents.md)


## constructor

```ts
new Uri(): Uri
```

## authority
- 类型: `string`
- 描述: authority是 www.example.com , http://www.example.com/some/path?query#fragment ==> host+port 部分。
- 示例：
```js
http://www.example.com/
authority	=	www.example.com
host		=	www.example.com

http://255.255.255.255:8080/
authority	=	255.255.255.255:8080
host		=	255.255.255.255
```

## fragment
- 类型: `string`
- 描述: fragment是 http://www.example.com/some/path?query#fragment ==> #fragment 

## path
- 类型: `string`
- 描述: path是 http://www.example.com/some/path?query#fragment ==> /some/path 

## query
- 类型: `string`
- 描述: query是 http://www.example.com/some/path?query#fragment ==> ?query 

## scheme
- 类型: `string`
- 描述: scheme是 http://www.example.com/some/path?query#fragment ==> http 

## fsPath
- 类型: `string`
- 描述: fsPath是 http://www.example.com/some/path?query#fragment ==> /some/path

## toJSON
- 语法: `() => `[UriComponents](/api/UriComponents.md)
- 描述: 将 Uri 转换为 JSON, 可快速获取 query、path等属性

## toString
- 语法: `(skipEncoding?: boolean) => string`
- 参数：`skipEncoding`: `是否对结果进行编码`
- 描述: 将 Uri 转换为字符串

## with
- 语法: `with(change): Uri`
- 参数：
  - `authority`:`string`;
  - `fragment`:`string`;
  - `path`:`string`;
  - `query`:`string`;
  - `scheme`:`string`;
- 描述: 创建一个新的 Uri，使用提供的参数替换当前 Uri 的参数

## file
- 语法：`file(path): Uri`
- 参数：`path`:`string` 详见 [fsPath](/api/Uri.html#fspath);
- 描述：创建一个文件 Uri
- 示例：
```js
const good = Uri.file('/coding/c#/project1');
good.scheme === 'file';
good.path === '/coding/c#/project1';
good.fragment === '';
const bad = Uri.parse('file://' + '/coding/c#/project1');
bad.scheme === 'file';
bad.path === '/coding/c'; // path is now broken
bad.fragment === '/project1';
```

## from
- 语法：`from(components, strict?): Uri`
- 参数：
  - `components`:[UriComponents](/api/UriComponents.md);
  - `strict`:`boolean`;

## isUri
- 语法：`isUri(thing): boolean`
- 参数：`thing`:`any`;
- 描述：判断是否为 Uri

## joinPath
- 语法：`joinPath(uri: Uri, ...pathFragment: string[]): Uri`
- 参数：
  - `uri`:`Uri`;
  - `pathFragment`:`string[]`;
- 描述：将多个路径片段拼接成一个 Uri

## parse
- 语法：`revive(value: string, _strict?: boolean): Uri`
- 参数：
  - `value`:`string`;
  - `_strict`:`boolean`;
- 描述：将字符串解析为 Uri

## revive
- 语法：`revive(data): Uri`
- 参数：`data`:` Uri | UriComponents`;
- 描述：将 UriComponents 转换为 Uri
