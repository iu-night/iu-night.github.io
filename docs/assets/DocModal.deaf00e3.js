const n=`<script setup lang="ts">\r
const show = ref(false)\r
<\/script>\r
\r
<template>\r
  <div>\r
    <IuButton @click="show = !show">\r
      modal\r
    </IuButton>\r
    <IuModal v-model:show="show" title="Modal">\r
      <div style="width: 300px;">\r
        modal\r
      </div>\r
    </IuModal>\r
  </div>\r
</template>\r
`;export{n as default};