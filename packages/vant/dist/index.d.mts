import * as _vue_cmd_core0 from "@vue-cmd/core";
import { ICommandConfig, IUseConfig } from "@vue-cmd/core";
import { CSSProperties, VNode } from "vue";
import { PopupPosition, PopupProps } from "vant";
export * from "@vue-cmd/core";

//#region src/popup.d.ts
type VantPopupConfig = {
  position?: PopupPosition;
  style?: CSSProperties;
  closeable?: boolean;
} & ICommandConfig<Partial<PopupProps>>;
declare const usePopup: (useConfig?: _vue_cmd_core0.IUseConfigOrGetter) => (contentVNode: VNode, commandConfig?: _vue_cmd_core0.ValueOrGetter<VantPopupConfig> | undefined) => _vue_cmd_core0.IConsumer;
declare const usePopupOnBottom: (createConfig?: IUseConfig) => (ContentVNode: VNode, config?: ICommandConfig) => _vue_cmd_core0.IConsumer;
//#endregion
export { usePopup, usePopupOnBottom };