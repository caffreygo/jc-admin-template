<script lang="ts" setup>
import { nextTick } from 'vue';
import wangEditor from './wangEditor';

interface IProps {
  height?: number;
  modelValue?: string;
  uploadImgServer?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  height: 300,
  modelValue: '',
  uploadImgServer: '/api/upload/image',
});

const emit = defineEmits(['update:modelValue']);

nextTick(() => {
  new wangEditor(
    '#wangEditor',
    (newHtml: string) => {
      emit('update:modelValue', newHtml);
    },
    props
  );
});
</script>

<template>
  <div id="wangEditor"></div>
</template>
