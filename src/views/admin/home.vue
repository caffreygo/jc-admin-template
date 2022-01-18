<template>
  <div class="grid md:grid-cols-4 gap-3 bg-gray-100">
    <el-card
      v-for="(card, index) of cards"
      :key="index"
      shadow="hover"
      :body-style="{ padding: '20px' }"
    >
      <template #header>
        <div class="flex justify-between items-center">
          {{ card.title }}
          <el-tag type="danger" size="small" effect="dark">月</el-tag>
        </div>
      </template>
      <section class="flex mt-3 justify-between items-center">
        <span class="text-3xl">{{ card.price }}</span>
        <i :class="[card.icon, card.iconColor]" class="text-5xl"> </i>
      </section>
      <section class="text-base mt-6 flex justify-between">
        {{ card.totalTitle }}
        <span>{{ card.total }}</span>
      </section>
    </el-card>
  </div>
  <div class="mt-5 grid md:grid-cols-2 gap-3">
    <el-card shadow="hover">
      <template #header> 用户统计 </template>
      <div id="chart1" class="h-72 w-full"></div>
    </el-card>
    <el-card shadow="hover">
      <template #header> 销售额 </template>
      <div id="chart2" class="h-72 w-full"></div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue';
import echarts, { echart1, echart2 } from './echart';

nextTick(() => {
  const chart1 = echarts.init(document.getElementById('chart1'));
  const chart2 = echarts.init(document.getElementById('chart2'));
  chart1.setOption(echart1);
  chart2.setOption(echart2);
});

interface ICard {
  title: string;
  price: number;
  icon: string;
  iconColor: string;
  total: number;
  totalTitle: string;
}

const cards = ref<ICard[]>([
  {
    title: '总人数',
    price: 23131,
    icon: 'fas fa-apple-alt',
    iconColor: 'text-violet-500',
    total: 745323,
    totalTitle: '总人数',
  },
  {
    title: '销售额',
    price: 12331,
    icon: 'fab fa-angellist',
    iconColor: 'text-green-600',
    total: 31223,
    totalTitle: '总销售额',
  },
  {
    title: '订单数',
    price: 54431,
    icon: 'fab fa-angrycreative',
    iconColor: 'text-red-500',
    total: 765323,
    totalTitle: '总订单数',
  },
  {
    title: '评论数',
    price: 2131,
    icon: 'fab fa-app-store',
    iconColor: 'text-gray-500',
    total: 93523,
    totalTitle: '总评论数',
  },
]);
</script>

<style scoped></style>
