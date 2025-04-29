import { transformerTwoslash } from "@shikijs/vitepress-twoslash";
import UnoCSS from "unocss/vite";
import { ElementPlusResolver, VantResolver } from "unplugin-vue-components/resolvers";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vitepress";
import { vitepressDemoPlugin } from "vitepress-demo-plugin";
import { groupIconMdPlugin, groupIconVitePlugin } from "vitepress-plugin-group-icons";
export default defineConfig({
  title: `Vue3命令组件`,
  description: "带给你不一样的开发体验",
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@600&family=IBM+Plex+Mono:wght@400&display=swap",
      },
    ],
    ["meta", { name: "theme-color", content: "#646cff" }],
  ],
  themeConfig: {
    logo: "/logo.svg",
    socialLinks: [{ icon: "github", link: "https://github.com/pandavips/Vue3-Command-Component" }],
    footer: {
      message: `Released under the MIT License.`,
      copyright: "Copyright © 2019-present pandavips",
    },

    nav: [
      { text: "指南", link: "/guide/quick-start", activeMatch: "/guide/" },
      { text: "示例", link: "/example/", activeMatch: "/example/" },
      { text: "API", link: "/api/", activeMatch: "/api/" },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "介绍",
          items: [
            {
              text: "什么是命令式组件?",
              link: "/guide/what",
            },
            {
              text: "快速开始",
              link: "/guide/quick-start",
            },
          ],
        },
        {
          text: "指南",
          items: [
            {
              text: "实现原理",
              link: "/guide/principle",
            },
            {
              text: "适配其他ui库组件",
              link: "/guide/adapter",
            },
            {
              text: "常见问题",
              link: "/guide/faq",
            },
          ],
        },
      ],
      "/example/": [
        {
          items: [
            {
              text: "基础用法",
              link: "/example/base",
            },
            {
              text: "进阶用法",
              link: "/example/advanced",
            },
          ],
        },
      ],
    },
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
    plugins: [
      Components({
        resolvers: [VantResolver(), ElementPlusResolver()],
      }),
      vueJsx(),
      UnoCSS(),
      groupIconVitePlugin({
        customIcon: {
          firebase: "vscode-icons:file-type-firebase",
          ".gitlab-ci.yml": "vscode-icons:file-type-gitlab",
        },
      }) as any,
    ],
  },
});
