// vite.config.ts
import { resolve } from "path";
import { defineConfig } from "file:///Users/li_shuai/%E6%88%91%E7%9A%84%E4%BB%A3%E7%A0%81/%E5%89%8D%E7%AB%AF%E5%AD%A6%E4%B9%A0/%E7%BB%84%E4%BB%B6%E5%BA%93-%E4%B9%9D%E5%BD%B1/NineShadow-components/node_modules/.pnpm/vite@5.4.19_@types+node@20.17.50_sass@1.89.2_terser@5.41.0/node_modules/vite/dist/node/index.js";
import { last, split, first, includes } from "file:///Users/li_shuai/%E6%88%91%E7%9A%84%E4%BB%A3%E7%A0%81/%E5%89%8D%E7%AB%AF%E5%AD%A6%E4%B9%A0/%E7%BB%84%E4%BB%B6%E5%BA%93-%E4%B9%9D%E5%BD%B1/NineShadow-components/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js";
import { hooksPlugin as hooks } from "file:///Users/li_shuai/%E6%88%91%E7%9A%84%E4%BB%A3%E7%A0%81/%E5%89%8D%E7%AB%AF%E5%AD%A6%E4%B9%A0/%E7%BB%84%E4%BB%B6%E5%BA%93-%E4%B9%9D%E5%BD%B1/NineShadow-components/libs/vite-plugins/.dist/index.js";
import dts from "file:///Users/li_shuai/%E6%88%91%E7%9A%84%E4%BB%A3%E7%A0%81/%E5%89%8D%E7%AB%AF%E5%AD%A6%E4%B9%A0/%E7%BB%84%E4%BB%B6%E5%BA%93-%E4%B9%9D%E5%BD%B1/NineShadow-components/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.17.50_rollup@4.41.1_typescript@5.8.3_vite@5.4.19_@_e14bacbe4ca3586ab57cc99cf6f04660/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/li_shuai/\u6211\u7684\u4EE3\u7801/\u524D\u7AEF\u5B66\u4E60/\u7EC4\u4EF6\u5E93-\u4E5D\u5F71/NineShadow-components/packages/hooks";
var vite_config_default = defineConfig({
  plugins: [
    dts({
      include: ["./**/*.ts"],
      exclude: ["./vite.config.ts"]
    }),
    hooks({
      rmFiles: ["./dist"]
    })
  ],
  build: {
    minify: false,
    lib: {
      entry: resolve(__vite_injected_original_dirname, "./index.ts"),
      name: "hooks",
      fileName: "index",
      formats: ["es"]
    },
    rollupOptions: {
      external: ["vue", "lodash-es", "vue3-i18n"],
      output: {
        manualChunks(id) {
          if (includes(id, "/packages/hooks/use"))
            return first(split(last(split(id, "/")), "."));
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbGlfc2h1YWkvXHU2MjExXHU3Njg0XHU0RUUzXHU3ODAxL1x1NTI0RFx1N0FFRlx1NUI2Nlx1NEU2MC9cdTdFQzRcdTRFRjZcdTVFOTMtXHU0RTVEXHU1RjcxL05pbmVTaGFkb3ctY29tcG9uZW50cy9wYWNrYWdlcy9ob29rc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2xpX3NodWFpL1x1NjIxMVx1NzY4NFx1NEVFM1x1NzgwMS9cdTUyNERcdTdBRUZcdTVCNjZcdTRFNjAvXHU3RUM0XHU0RUY2XHU1RTkzLVx1NEU1RFx1NUY3MS9OaW5lU2hhZG93LWNvbXBvbmVudHMvcGFja2FnZXMvaG9va3Mvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2xpX3NodWFpLyVFNiU4OCU5MSVFNyU5QSU4NCVFNCVCQiVBMyVFNyVBMCU4MS8lRTUlODklOEQlRTclQUIlQUYlRTUlQUQlQTYlRTQlQjklQTAvJUU3JUJCJTg0JUU0JUJCJUI2JUU1JUJBJTkzLSVFNCVCOSU5RCVFNSVCRCVCMS9OaW5lU2hhZG93LWNvbXBvbmVudHMvcGFja2FnZXMvaG9va3Mvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgeyBsYXN0LCBzcGxpdCwgZmlyc3QsIGluY2x1ZGVzIH0gZnJvbSAnbG9kYXNoLWVzJ1xuaW1wb3J0IHsgaG9va3NQbHVnaW4gYXMgaG9va3MgfSBmcm9tICdAc2hhZG93LXVpL3ZpdGUtcGx1Z2lucydcblxuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICBkdHMoe1xuICAgICAgaW5jbHVkZTogWycuLyoqLyoudHMnXSxcbiAgICAgIGV4Y2x1ZGU6IFsnLi92aXRlLmNvbmZpZy50cyddLFxuICAgIH0pLFxuICAgIGhvb2tzKHtcbiAgICAgIHJtRmlsZXM6IFsnLi9kaXN0J10sXG4gICAgfSksXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgbWluaWZ5OiBmYWxzZSxcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJy4vaW5kZXgudHMnKSxcbiAgICAgIG5hbWU6ICdob29rcycsXG4gICAgICBmaWxlTmFtZTogJ2luZGV4JyxcbiAgICAgIGZvcm1hdHM6IFsnZXMnXSxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbJ3Z1ZScsICdsb2Rhc2gtZXMnLCAndnVlMy1pMThuJ10sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgbWFudWFsQ2h1bmtzKGlkKSB7XG4gICAgICAgICAgaWYgKGluY2x1ZGVzKGlkLCAnL3BhY2thZ2VzL2hvb2tzL3VzZScpKVxuICAgICAgICAgICAgcmV0dXJuIGZpcnN0KHNwbGl0KGxhc3Qoc3BsaXQoaWQsICcvJykpLCAnLicpKVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeWUsU0FBUyxlQUFlO0FBQ2pnQixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLE1BQU0sT0FBTyxPQUFPLGdCQUFnQjtBQUM3QyxTQUFTLGVBQWUsYUFBYTtBQUVyQyxPQUFPLFNBQVM7QUFMaEIsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLE1BQ0YsU0FBUyxDQUFDLFdBQVc7QUFBQSxNQUNyQixTQUFTLENBQUMsa0JBQWtCO0FBQUEsSUFDOUIsQ0FBQztBQUFBLElBQ0QsTUFBTTtBQUFBLE1BQ0osU0FBUyxDQUFDLFFBQVE7QUFBQSxJQUNwQixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLGtDQUFXLFlBQVk7QUFBQSxNQUN0QyxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixTQUFTLENBQUMsSUFBSTtBQUFBLElBQ2hCO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsT0FBTyxhQUFhLFdBQVc7QUFBQSxNQUMxQyxRQUFRO0FBQUEsUUFDTixhQUFhLElBQUk7QUFDZixjQUFJLFNBQVMsSUFBSSxxQkFBcUI7QUFDcEMsbUJBQU8sTUFBTSxNQUFNLEtBQUssTUFBTSxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUFBLFFBQ2pEO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
