export type AnyFunction = (...args: any[]) => any;

export enum EVENT_NAME {
  confirm = "confirm",
  cancel = "cancel",
  // 组件销毁时
  destory = "destory",
}
