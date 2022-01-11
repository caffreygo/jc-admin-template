import * as veeValidate from 'vee-validate';
import rules from '@vee-validate/rules';
import { loadLocaleFromURL, localize } from '@vee-validate/i18n';
// import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json';
import yup from './yup';

loadLocaleFromURL(
  'https://unpkg.com/@vee-validate/i18n@4.0.2/dist/locale/zh_CN.json'
);

veeValidate.configure({
  generateMessage: localize('zh_CN'),
  // validateOnInput: true,
});

Object.keys(rules).forEach((key) => {
  veeValidate.defineRule(key, rules[key]);
});

const module = { yup, ...veeValidate };

export default module;
