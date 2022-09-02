const e=`<script setup lang="ts">\r
const value = $ref<string>('')\r
<\/script>\r
\r
<template>\r
  <IuSpace vertical>\r
    inputValue: {{ value }}\r
    <IuInput v-model="value" placeholder="placeholder" />\r
  </IuSpace>\r
</template>\r
`;export{e as default};
