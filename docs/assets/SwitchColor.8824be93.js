const r=`<script setup lang="ts">\r
const value = ref<boolean>(true)\r
const color = '#c12c1f'\r
<\/script>\r
\r
<template>\r
  <IuSpace align="center">\r
    <IuSwitch\r
      v-model="value"\r
      :color="color"\r
    />\r
    <IuSwitch\r
      v-model="value"\r
      :color="color"\r
      :round="false"\r
    />\r
  </IuSpace>\r
</template>\r
`;export{r as default};
