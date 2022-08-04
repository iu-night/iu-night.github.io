const e=`<script setup lang="ts">\r
const value = ref<boolean>(true)\r
<\/script>\r
\r
<template>\r
  <IuSpace align="center">\r
    <IuSwitch v-model="value" :round="value" />\r
    <IuSwitch v-model="value" :round="false" />\r
    <IuSwitch v-model="value" :round="!value" />\r
  </IuSpace>\r
</template>\r
`;export{e as default};
