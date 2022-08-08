const e=`<script setup lang="ts">\r
const value = ref(true)\r
<\/script>\r
\r
<template>\r
  <IuSpace align="center">\r
    <IuCheckbox v-model="value">\r
      \u7981\u7528\r
    </IuCheckbox>\r
    <IuCheckbox v-model="value" disabled />\r
    <IuCheckbox v-model="value" :disabled="value">\r
      disabled\r
    </IuCheckbox>\r
  </IuSpace>\r
</template>\r
`;export{e as default};
