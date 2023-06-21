# vue-use-print
Vue based browser local printing or async template printing（基于vue的浏览器局部打印或模板/异步模板打印）

## Preview
- [vue3-use-print](https://use-print.vercel.app)
- [vue3-use-print -- 国内网址](https://print.osrc.com)

## Install 
```bash
yarn add vue3-use-print
```

## Usage
```vue
<script setup lang="ts">
import { shallowRef, defineAsyncComponent } from 'vue'
import usePrint from 'vue3-use-print'
import LocalTemp from './template/LocalTemp.vue'
import ComponentTemp from './template/ComponentTemp.vue'
const AsyncCompTemp = defineAsyncComponent(() => import('./template/AsyncCompTemp.vue'))

const localTempRef = shallowRef()
</script>

<template>
  <!-- 传递"DOM"元素进行打印 -->
  <button @click="usePrint(localTempRef)">
    local print（局部打印）
  </button>
  <div ref="localTempRef">
    <PrintTemp />
  </div>

  <!-- 传递"Component"组件进行打印 -->
  <el-button @click="usePrint(ComponentTemp)">
    component print（模板打印）
  </el-button>

  <!-- 传递"Async Component"组件进行打印 -->
  <el-button @click="usePrint(AsyncCompTemp)">
    async print（异步模板打印）
  </el-button>
</template>  
```