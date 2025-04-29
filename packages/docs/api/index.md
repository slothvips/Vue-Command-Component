# API 参考

## 核心 API

### useElementPlusDialog

创建一个基于 Element Plus Dialog 的命令式弹窗组件。

```typescript
const CommandDialog = useElementPlusDialog();

// 使用方式
CommandDialog(<YourComponent props={...} />, {
  title: "弹窗标题",
  // 其他配置项...
});
```

#### 配置项

- `title`: 弹窗标题
- `visible`: 控制弹窗显示状态的 ref 对象
- `appendTo`: 指定弹窗挂载的 DOM 节点
- `customClassName`: 自定义弹窗容器的类名
- `meta`: 弹窗的元数据信息
- `provideProps`: 注入到弹窗内部的属性

## Hooks

### useConsumer

获取当前命令式组件的 Consumer 实例。

```typescript
const consumer = useConsumer(warn?: boolean);
```

#### 参数

- `warn`: 是否在获取失败时显示警告信息，默认为 true

#### 返回值

返回 Consumer 实例，包含以下方法和属性：

- `hide()`: 隐藏弹窗
- `show()`: 显示弹窗
- `destroy()`: 销毁弹窗
- `destroyWithResolve(val)`: 销毁弹窗并返回成功值
- `destroyWithReject(reason)`: 销毁弹窗并返回错误原因
- `promise`: 弹窗操作的 Promise 对象
- `visible`: 弹窗显示状态
- `meta`: 弹窗元数据

### useCloseAllOnRouteChange

监听路由变化并自动关闭所有打开的弹窗。

```typescript
useCloseAllOnRouteChange();
```

## 事件系统

Consumer 实例提供了完整的事件系统支持：

### 事件方法

- `on(name, callback, config?)`: 监听事件
  ```typescript
  consumer.on('eventName', (data) => {
    // 处理事件
  }, {
    once: false,
    callImmediatelyAfterDelay: 3000
  });
  ```

- `once(name, callback)`: 一次性监听事件
  ```typescript
  consumer.once('eventName', (data) => {
    // 处理事件，只会触发一次
  });
  ```

- `emit(name, ...args)`: 触发事件
  ```typescript
  consumer.emit('eventName', data);
  ```

- `off(name, callback)`: 移除事件监听
  ```typescript
  consumer.off('eventName', callback);
  ```

### 预定义事件

- `destroy`: 弹窗销毁时触发

## 类型定义

### IConsumer

```typescript
interface IConsumer {
  meta: Record<string, any>;
  promise: Promise<unknown>;
  resolve: (value: unknown) => void;
  reject: (reason?: any) => void;
  destroyWithResolve: (val: unknown) => void;
  destroyWithReject: (reason: unknown) => void;
  hide: () => void;
  show: () => void;
  destroy: (external?: boolean) => void;
  container: HTMLElement;
  visible: Ref<boolean>;
  on: (name: string | symbol, callback: EventCallback, config?: IOnConfig) => void;
  once: (name: string | symbol, callback: EventCallback) => void;
  emit: (name: string | symbol, ...args: unknown[]) => void;
  off: (name: string | symbol, callback: EventCallback) => void;
  stack: IConsumer[];
  stackIndex: number;
  componentRef?: ComponentInternalInstance;
  mounted: boolean;
  destroyed: boolean;
}
```

### ICommandComponentProviderConfig

```typescript
interface ICommandComponentProviderConfig {
  visible: Ref<boolean>;
  appendTo?: string | HTMLElement;
  customClassName?: string;
  meta?: Record<string, any>;
  provideProps?: Record<string | symbol, any>;
}
