<template>
  <Form v-slot="{ errors }" :validation-schema="schema" @submit="onSubmit">
    <div
      class="w-[720px] translate-y-32 md:translate-y-0 bg-white md:grid grid-cols-2 rounded-md shadow-md overflow-hidden"
    >
      <div class="p-6 flex-col justify-between">
        <div>
          <h2 class="text-center text-gray-700 text-lg mt-3">会员登录</h2>
          <div class="mt-8">
            <!-- <Field
            v-slot="{ field }"
            name="account"
            :rules="{ required: true, email: true }"
            class="jc-input"
          >
            <input v-bind="field" class="jc-input" />
          </Field> -->
            <Field
              name="account"
              class="jc-input"
              label="账号"
              placeholder="请输入邮箱或者手机号"
            />
            <p v-if="errors.account" class="jc-error">请输入邮箱或者手机号</p>
            <!-- <ErrorMessage name="account" as="p" class="jc-error" /> -->
            <Field
              name="password"
              class="jc-input mt-3"
              label="密码"
              type="password"
            />
            <ErrorMessage name="password" as="p" class="jc-error" />
            <!-- <jc-input v-model="form.account" placeholder="请输入手机号或邮箱" />
          <jc-input class="mt-4" placeholder="请输入登录密码" /> -->
          </div>
          <jc-button class="mt-5" />
          <div class="flex justify-center mt-3">
            <i
              class="fab fa-weixin bg-green-600 text-white rounded-full p-1 cursor-pointer"
            ></i>
          </div>
        </div>
        <div class="flex gap-2 justify-center mt-5">
          <jc-link />
          <jc-link />
          <jc-link />
        </div>
      </div>
      <div class="hidden md:block relative">
        <img
          src="/images/login.jpg"
          class="w-full h-full object-cover absolute"
        />
      </div>
    </div>
  </Form>
</template>

<script setup lang="ts">
import v from '@/plugins/validate';

const { Form, Field, ErrorMessage } = v;

// :rules="{ required: true, email: true }" (Field component)
// const schema = v.yup.object({
//   account: v.yup.string().required().email().label('账号'),
//   password: v.yup.string().required().min(3).label('密码'),
// });

const schema = {
  account: { required: true, regex: /.+@.+|\d{11}/i },
  password: { required: true, min: 3 },
};

const onSubmit = (value: any) => {
  console.log(value);
};
</script>

<style lang="scss" scoped>
form {
  @apply bg-slate-300 h-screen flex justify-center items-start md:items-center p-5;
}
</style>
