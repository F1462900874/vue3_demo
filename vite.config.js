import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import SetEnvByCommandArg, { getCommandArgv } from 'vite-plugin-env-command';

// https://vitejs.dev/config/
export default defineConfig({
  // 服务器配置  https://cn.vitejs.dev/config/server-options.html
  server: {
    host: '0.0.0.0',  //  设置本地端口监听 防止占用端口情况
    open: false,  // 启动服务是否自动打开浏览器窗口
    cors: true,
    proxy: {  //  代理设置
      '/proxy': {
        target: "",  // 代理服务器地址
        changeOrigin: true,  //  跨域设置  https://github.com/expressjs/cors#configuration-options
      }
    },
  },
  plugins: [
    vue(),
    Inspect(),
    // 自动导入依赖 API  https://github.com/antfu/unplugin-auto-import  
    AutoImport({
      imports: ['vue', '@vueuse/core', 'pinia', 'vue-router'],
      dirs: [
        'src/composables/**',
        'src/constants/**',
        'src/utils/**',
        'src/store/**'
      ],
      dts: true
    }),
    // Vue 按需自动导入组件  https://github.com/antfu/unplugin-vue-components
    Components({
      // 要搜索组件的目录的相对路径
      dirs: ['src/components'],
      // 组件的有效文件扩展名。
      extensions: ['vue'],
      resolvers: [ElementPlusResolver()],
      // 搜索子目录
      dts: true
    }),
    //  打包配置； 还在更新中...
    SetEnvByCommandArg({
      key: "APP_ENV",
      defaultEnv: "test123"
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
