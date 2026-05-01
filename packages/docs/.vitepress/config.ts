import { transformerTwoslash } from "@shikijs/vitepress-twoslash";
import UnoCSS from "unocss/vite";
import {
  ElementPlusResolver,
  VantResolver,
} from "unplugin-vue-components/resolvers";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vitepress";
import { vitepressDemoPlugin } from "vitepress-demo-plugin";
import libCss from "vite-plugin-libcss";
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from "vitepress-plugin-group-icons";

const zhNav = [
  { text: "指南", link: "/guide/quick-start", activeMatch: "/guide/" },
  { text: "示例", link: "/example/base", activeMatch: "/example/" },
];

const enNav = [
  { text: "Guide", link: "/en/guide/quick-start", activeMatch: "/en/guide/" },
  { text: "Examples", link: "/en/example/base", activeMatch: "/en/example/" },
];

const zhSidebar = {
  "/guide/": [
    {
      text: "介绍",
      items: [
        { text: "什么是命令式组件?", link: "/guide/what" },
        { text: "快速开始", link: "/guide/quick-start" },
        { text: "命令式 vs 传统方式对比", link: "/guide/comparison" },
      ],
    },
    {
      text: "指南",
      items: [
        { text: "实现原理", link: "/guide/principle" },
        { text: "适配其他ui库组件", link: "/guide/adapter" },
        { text: "常见问题", link: "/guide/faq" },
      ],
    },
  ],
  "/example/": [
    {
      items: [
        { text: "基础用法", link: "/example/base" },
        { text: "进阶用法", link: "/example/advanced" },
        { text: "NaiveUI", link: "/example/naive" },
        { text: "Vant", link: "/example/vant" },
      ],
    },
  ],
};

const enSidebar = {
  "/en/guide/": [
    {
      text: "Introduction",
      items: [
        { text: "What Is an Imperative Component?", link: "/en/guide/what" },
        { text: "Quick Start", link: "/en/guide/quick-start" },
        {
          text: "Imperative vs. Traditional Usage",
          link: "/en/guide/comparison",
        },
      ],
    },
    {
      text: "Guide",
      items: [
        { text: "How It Works", link: "/en/guide/principle" },
        { text: "Adapting Other UI Libraries", link: "/en/guide/adapter" },
        { text: "FAQ", link: "/en/guide/faq" },
      ],
    },
  ],
  "/en/example/": [
    {
      items: [
        { text: "Basic Usage", link: "/en/example/base" },
        { text: "Advanced Usage", link: "/en/example/advanced" },
        { text: "Naive UI", link: "/en/example/naive" },
        { text: "Vant", link: "/en/example/vant" },
      ],
    },
  ],
};

export default defineConfig({
  title: "Vue Command Component",
  base: "/Vue-Command-Component/",
  assetsDir: "/Vue-Command-Component/assets",
  description: "Call Vue components imperatively with ease",
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      title: "Vue命令式组件",
      description: "轻松实现Vue组件的命令式调用",
      themeConfig: {
        nav: zhNav,
        sidebar: zhSidebar,
        outline: {
          label: "页面导航",
        },
      },
    },
    en: {
      label: "English",
      lang: "en-US",
      link: "/en/",
      title: "Vue Command Component",
      description: "Call Vue components imperatively with ease",
      themeConfig: {
        nav: enNav,
        sidebar: enSidebar,
        outline: {
          label: "On this page",
        },
        docFooter: {
          prev: "Previous page",
          next: "Next page",
        },
        darkModeSwitchLabel: "Appearance",
        sidebarMenuLabel: "Menu",
        returnToTopLabel: "Return to top",
        langMenuLabel: "Change language",
      },
    },
  },
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@600&family=IBM+Plex+Mono:wght@400&display=swap",
      },
    ],
    // ["meta", { name: "theme-color", content: "#41B883" }],
  ],
  themeConfig: {
    logo: "/logo.svg",
    logoLink: "/Vue-Command-Component/",
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/pandavips/Vue-Command-Component",
      },
    ],
    footer: {
      message: `Released under the MIT License.`,
      copyright: "Copyright © 2019-present pandavips",
    },

    nav: zhNav,
    sidebar: zhSidebar,
    outline: {
      level: [2, 4],
    },
  },
  markdown: {
    codeTransformers: [transformerTwoslash() as any],
    config(md) {
      md.use(groupIconMdPlugin);
      md.use(vitepressDemoPlugin);
    },
  },
  vite: {
    ssr: {
      noExternal: ["element-plus", "vant", "naive-ui"],
    },
    resolve: {},
    plugins: [
      Components({
        resolvers: [
          VantResolver({
            importStyle: false,
          }),
          ElementPlusResolver({
            ssr: false,
          }),
        ],
      }),
      vueJsx(),
      UnoCSS(),
      groupIconVitePlugin({
        customIcon: {
          firebase: "vscode-icons:file-type-firebase",
          ".gitlab-ci.yml": "vscode-icons:file-type-gitlab",
        },
      }),
      libCss(),
    ],
  },
});
