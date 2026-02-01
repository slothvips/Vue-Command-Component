import * as _vue_cmd_core2 from "@vue-cmd/core";
import { ICommandConfig, IUseConfigOrGetter } from "@vue-cmd/core";
import { VNode } from "vue";
import { DialogProps, DrawerProps } from "element-plus";
export * from "@vue-cmd/core";

//#region src/dialog.d.ts
type IDialogConfig = ICommandConfig<Partial<DialogProps>> & {
  title?: string;
  width?: string;
};
declare const useDialog: (useConfig?: IUseConfigOrGetter) => (contentVNode: VNode | (() => VNode), commandConfig?: _vue_cmd_core2.ValueOrGetter<IDialogConfig> | undefined) => _vue_cmd_core2.IConsumer;
/**
 * 可拖拽,遮罩无法关闭,按esc无法关闭
 * @returns
 */
declare const useDialogWithDrag: (useConfig?: IUseConfigOrGetter) => (contentVNode: VNode, config?: IDialogConfig) => _vue_cmd_core2.IConsumer;
//#endregion
//#region src/drawer.d.ts
type IDrawerConfig = {
  size?: string;
  title?: string;
} & ICommandConfig<Partial<DrawerProps>>;
declare const useDrawer: (useConfig?: _vue_cmd_core2.IUseConfigOrGetter) => (contentVNode: VNode | (() => VNode), commandConfig?: _vue_cmd_core2.ValueOrGetter<IDrawerConfig> | undefined) => _vue_cmd_core2.IConsumer;
//#endregion
export { type IDialogConfig, type IDrawerConfig, useDialog, useDialogWithDrag, useDrawer };