const e=`<script setup lang="ts">\r
const value = ref(true)\r
<\/script>\r
\r
<template>\r
  <IuSpace align="center">\r
    <IuCheckbox v-model="value" round />\r
    <IuCheckbox v-model="value" :round="!value" />\r
    <IuCheckbox v-model="value" :round="value">\r
      round\r
    </IuCheckbox>\r
  </IuSpace>\r
</template>\r
`;export{e as default};
