<template>
  <Form @submit="onSubmit">
    <Field
      v-slot="{ field, errorMessage }"
      v-model="account"
      label="账号"
      name="account"
      :rules="{ required: true, email: true }"
      :validate-on-input="true"
    >
      <input v-model="account" v-bind="field" />
      <p class="text-white text-sm font-mono">{{ errorMessage }}</p>
    </Field>
    <button>提交表单</button>
    <!-- <input type="text" /> -->
  </Form>
</template>

<script setup lang="ts">
import v from '@/plugins/validate';
const { Form, Field } = v;
// import { Form, Field, defineRule, configure } from 'vee-validate';
// import { required, email } from '@vee-validate/rules';
import { ref } from 'vue';
// import { localize } from '@vee-validate/i18n';
// import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json';

const account = ref<string>('JerryChen');

// defineRule('required', required);
// defineRule('email', email);

// configure({
//   generateMessage: localize('zh_CN', zh_CN),
// });
// const emailRule = (value: any) => {
//   return /@/.test(value) ? true : '邮箱格式错误';
// };

const onSubmit = (value: any) => {
  alert('验证通过！');
  console.log(value);
};
</script>

<style lang="scss" scoped>
form {
  @apply flex flex-col w-screen h-screen justify-center items-center bg-gray-800;
  input {
    @apply border p-2 rounded-md border-violet-500 outline-none;
  }
  button {
    @apply border bg-gray-600 px-4 py-2 rounded-md text-white mt-4;
  }
}
</style>
