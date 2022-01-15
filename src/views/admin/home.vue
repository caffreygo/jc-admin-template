<template>
  <div class="grid grid-flow-col gap-3">
    <el-card
      v-for="n of 4"
      :key="n"
      shadow="never"
      :body-style="{ padding: '20px' }"
    >
      <template #header>
        <div>
          <span>Admin</span>
        </div>
      </template>
      hello world
    </el-card>
  </div>
</template>

<script lang="ts"></script>

<style scoped></style>
