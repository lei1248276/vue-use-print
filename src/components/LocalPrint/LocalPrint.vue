<template>
  <div class="w-[1000px] mx-auto flex justify-center">
    <div class="flex-1">
      <el-button
        type="primary"
        @click="usePrint(pieChartRef)"
      >
        打印图表
      </el-button>

      <div ref="pieChartRef">
        <pie-chart />
      </div>

      <el-button
        type="primary"
        @click="usePrint(lineChartRef)"
      >
        打印图表
      </el-button>

      <div ref="lineChartRef">
        <line-chart
          :chart-data="{
            expectedData: [100, 120, 161, 134, 105, 160, 165, 161, 134, 105, 160, 165],
            actualData: [120, 82, 91, 154, 162, 140, 145, 91, 154, 162, 140, 145]
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PieChart from './components/PieChart.vue'
import LineChart from './components/LineChart.vue'
import { ElButton } from 'element-plus'
import usePrint from 'vue3-use-print'
import { shallowRef } from 'vue'

defineOptions({
  name: 'LocalPrint'
})

const pieChartRef = shallowRef()
const lineChartRef = shallowRef()

</script>
