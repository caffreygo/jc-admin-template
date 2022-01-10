<template>
  <form @submit="onSubmit">
    <div>
      <input v-model="usernameValue" type="text" />
      <p v-if="errors.username" class="error">{{ errors.username }}</p>
    </div>
    <div>
      <input v-model="passwordValue" type="text" />
      <p v-if="errors.password" class="error">{{ errors.password }}</p>
    </div>
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

const { handleSubmit, errors } = useForm({
  initialValues: {
    username: 'JerryChen@163.com',
    password: '',
  },
  validationSchema: {
    username: {
      required: true,
      email: true,
    },
    password: {
      required: true,
    },
  },
});

const onSubmit = handleSubmit((value) => {
  console.log(value);
  alert('提交成功');
});

const { value: usernameValue } = useField(
  'username',
  {},
  {
    label: '用户名',
  }
);
const { value: passwordValue } = useField(
  'password',
  {},
  {
    label: '密码',
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
  .error {
    @apply bg-red-600 border border-gray-800 p-2 text-white;
  }
}
</style>
