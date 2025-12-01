import * as _vue_cmd_core2 from "@vue-cmd/core";
import { ICommandConfig, IUseConfigOrGetter, ValueOrGetter } from "@vue-cmd/core";
import { VNode } from "vue";
import { DrawerContentProps, DrawerProps } from "naive-ui";
export * from "@vue-cmd/core";

//#region src/modal.d.ts
interface INaiveModalConfig extends ICommandConfig {
  title?: string;
  width?: string | number;
  height?: string | number;
}
declare const useModal: (useConfig?: IUseConfigOrGetter) => (contentVNode: VNode, commandConfig?: ValueOrGetter<INaiveModalConfig> | undefined) => _vue_cmd_core2.IConsumer;
declare const useDialog: (useConfig?: IUseConfigOrGetter) => (content: VNode, config: INaiveModalConfig) => _vue_cmd_core2.IConsumer;
//#endregion
//#region src/drawer.d.ts
interface INaiveDrawerConfig extends ICommandConfig<Partial<{
  drawerAttrs: Partial<DrawerProps>;
  contentAttrs: Partial<DrawerContentProps>;
}>> {
  title?: string;
  width?: string | number;
  height?: string | number;
  placement?: "top" | "right" | "bottom" | "left";
}
declare const useDrawer: (useConfig?: _vue_cmd_core2.IUseConfigOrGetter) => (contentVNode: VNode, commandConfig?: _vue_cmd_core2.ValueOrGetter<INaiveDrawerConfig> | undefined) => _vue_cmd_core2.IConsumer;
//#endregion
export { type INaiveDrawerConfig, type INaiveModalConfig, useDialog, useDrawer, useModal };