import { defineConfig } from "vitepress";
import { transformerTwoslash } from "@shikijs/vitepress-twoslash";
import { groupIconMdPlugin, groupIconVitePlugin } from "vitepress-plugin-group-icons";
import { containerPreview, componentPreview } from "@vitepress-demo-preview/plugin";
import { plugins } from "../../config/base";
export default defineConfig({
  title: `vue3命令组件`,
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
    socialLinks: [{ icon: "github", link: "todo" }],
    footer: {
      message: `Released under the MIT License.`,
      copyright: "Copyright © 2019-present pandavips",
    },

    nav: [
      { text: "指南", link: "/guide/quick-start", activeMatch: "/guide/" },
      { text: "示例", link: "/example/base", activeMatch: "/example/" },
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
          text: "基础",
          items: [
            {
              text: "hello-world",
              link: "/example/base/hello-world",
            },
            {
              text: "显隐控制",
              link: "/example/base/visible-control",
            },
            {
              text: "消费对象介绍",
              link: "/example/base/consumer-object",
            },
          ],
        },
        {
          text: "高阶",
          items: [
            {
              text: "promise弹窗",
              link: "/example/advanced/promise",
            },
            {
              text: "一些花活儿",
              link: "/example/advanced/some-tricks",
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
      md.use(containerPreview, { clientOnly: true });
      md.use(componentPreview, { clientOnly: true });
      md.use(groupIconMdPlugin);
    },
  },
  vite: {
    plugins: [
      ...plugins,
      groupIconVitePlugin({
        customIcon: {
          firebase: "vscode-icons:file-type-firebase",
          ".gitlab-ci.yml": "vscode-icons:file-type-gitlab",
        },
      }) as any,
    ],
  },
});
