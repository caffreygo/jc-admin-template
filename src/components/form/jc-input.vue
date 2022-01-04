<template>
  <input
    type="text"
    :value="modelValue"
    class="jc-input"
    @input="$emit('update:modelValue', $event.target?.value)"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();
</script>

<style lang="scss" scoped>
.jc-input {
  @apply border border-gray-200 w-full rounded-sm py-1 px-2 outline-none placeholder:text-xs focus:ring-2 ring-offset-2 ring-violet-400 duration-300 focus:border-white;
}
</style>
