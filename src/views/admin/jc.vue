<template>
  <Form @submit="onSubmit">
    <Field
      v-slot="{ field, errorMessage }"
      v-model="account"
      name="account"
      :rules="emailRule"
      :validate-on-input="true"
    >
      <input v-model="account" v-bind="field" />
      <hr />
      <p>{{ errorMessage }}</p>
    </Field>
    <button>提交表单</button>
    <!-- <input type="text" /> -->
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import { ref } from 'vue';

const account = ref<string>('JerryChen');
const emailRule = (value: any) => {
  return /@/.test(value) ? true : '邮箱格式错误';
};

const onSubmit = (value: any) => {
  alert('验证通过！');
  console.log(value);
};
</script>

<style lang="scss" scoped>
div {
  @apply flex w-screen h-screen justify-center items-center bg-gray-800;
  input {
    @apply border p-2 rounded-md border-violet-500 outline-none;
  }
  button {
    @apply border bg-gray-600 px-4 py-2 rounded-md text-white mt-2;
  }
}
</style>
