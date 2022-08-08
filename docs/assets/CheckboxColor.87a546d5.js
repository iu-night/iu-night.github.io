const r=`<script setup lang="ts">\r
const value = ref(true)\r
const color = '#c12c1f'\r
<\/script>\r
\r
<template>\r
  <IuSpace align="center">\r
    <IuCheckbox v-model="value" :color="color" />\r
    <IuCheckbox\r
      v-model="value"\r
      :color="color"\r
      round\r
    />\r
    <IuCheckbox\r
      v-model="value"\r
      :color="color"\r
      disabled\r
    />\r
    <IuCheckbox\r
      v-model="value"\r
      :color="color"\r
      round\r
      disabled\r
    />\r
  </IuSpace>\r
</template>\r
`;export{r as default};
