# Environment
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/Environment.html
:::

```ts
interface Environment {
    baseUrl?: string;
    globalAPI?: boolean;
    createTrustedTypesPolicy?(policyName, policyOptions?): ITrustedTypePolicy;
    getWorker?(workerId, label): Worker | Promise<Worker>;
    getWorkerUrl?(workerId, label): string;
}
```

## baseUrl
- 类型：`string`
- 描述：编辑器源所在的基本url（包含vs文件夹）


## globalAPI
- 类型：`boolean`
- 描述：是否启用全局API


## createTrustedTypesPolicy
- 语法：`createTrustedTypesPolicy(policyName, policyOptions?): ITrustedTypePolicy`
- 参数：
  - `policyName`: `string`
  - `policyOptions?`: [ITrustedTypePolicyOptions](/api/ITrustedTypePolicyOptions.md)
- 描述：创建受信任类型策略（与window.trustedTypes.createPolicy相同的API）


## getWorker
- 语法：`getWorker(workerId, label): Worker | Promise<Worker>`
- 参数：
  - `workerId`: `string`
  - `label`: `string`
- 描述：获取worker。（注意：如果定义了getWorker，则不会调用getWorkerUrl。）


## getWorkerUrl
- 语法：`getWorkerUrl(workerId, label): string`
- 参数：
  - `workerId`: `string`
  - `label`: `string`
- 描述：获取worker的url。

