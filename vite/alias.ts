import { resolve } from 'path';
import { AliasOptions } from 'vite';

const alias = {
  '@': resolve(__dirname, '../src'),
  '#': resolve(__dirname, '../types'),
} as AliasOptions;

export default alias;
