const e=`<script setup lang="ts">\r
const value = ref<boolean>(true)\r
<\/script>\r
\r
<template>\r
  <IuSpace align="center">\r
    <IuSwitch v-model="value" />\r
    <IuSwitch v-model="value" disabled />\r
  </IuSpace>\r
</template>\r
`;export{e as default};
