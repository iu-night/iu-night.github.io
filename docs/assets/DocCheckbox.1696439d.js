const e=`<script setup lang="ts">\r
const value = ref(true)\r
<\/script>\r
\r
<template>\r
  <IuSpace align="center">\r
    <IuCheckbox v-model="value" />\r
    <IuCheckbox v-model="value">\r
      checkbox\r
    </IuCheckbox>\r
  </IuSpace>\r
</template>\r
`;export{e as default};
