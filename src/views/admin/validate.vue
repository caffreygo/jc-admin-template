<template>
  <form @submit="onSubmit">
    <input v-model="usernameValue" type="text" />
    <p>{{ errors.username }}</p>
    <button>提交</button>
  </form>
</template>

<script setup lang="ts">
import { defineRule, useField, useForm, configure } from 'vee-validate';
import { required, email } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';
import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json';

defineRule('required', required);
defineRule('email', email);

configure({
  generateMessage: localize('zh_CN', zh_CN),
});

const { handleSubmit, errors } = useForm();

const onSubmit = handleSubmit((value) => {
  console.log(value);
  alert('提交成功');
});

const { value: usernameValue } = useField(
  'username',
  {
    required: true,
    email: true,
  },
  {
    label: '用户名',
  }
);
</script>

<style lang="scss" scoped>
form {
  @apply flex w-screen h-screen flex-col justify-center items-center bg-gray-200;
  input {
    @apply border p-2 rounded-md border-violet-500 outline-none;
  }
  button {
    @apply border bg-gray-600 px-4 py-2 rounded-md text-white mt-2;
  }
}
</style>
