import fs from "fs";
import { minify } from "terser";
import { glob } from "glob";

async function minifyFile(filePath) {
  console.log(`Processing file: ${filePath}`);

  try {
    // 读取文件内容
    const code = fs.readFileSync(filePath, "utf8");

    // 使用Terser进行极致压缩
    const result = await minify(code, {
      compress: {
        ecma: 2020,
        pure_getters: true,
        passes: 3,
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_methods: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true,
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info", "console.debug"],
      },
      mangle: {
        properties: {
          regex: /^_/, // 仅处理下划线开头的私有属性
        },
      },
      format: {
        comments: false,
        ecma: 2020,
        beautify: false,
        indent_level: 0,
        ascii_only: false,
        braces: false,
        semicolons: true,
      },
      ecma: 2020,
      module: true,
    });

    if (result.code) {
      // 将结果写回文件
      fs.writeFileSync(filePath, result.code);
      console.log(`Successfully minified: ${filePath}`);
    } else {
      console.error(`No output generated for: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

// 处理所有包的dist目录下的js文件
async function processAllFiles() {
  const files = await glob("packages/*/dist/**/*.js");

  for (const file of files) {
    await minifyFile(file);
  }

  console.log("All files have been processed!");
}

// 执行
processAllFiles();
