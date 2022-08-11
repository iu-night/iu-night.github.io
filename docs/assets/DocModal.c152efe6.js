const r=`<script setup lang="ts">\r
const show = ref(false)\r
<\/script>\r
\r
<template>\r
  <div>\r
    <IuButton type="primary" @click="show = !show">\r
      \u6253\u5F00\r
    </IuButton>\r
    <IuModal v-model:show="show">\r
      <div style="width: 300px;">\r
        modal\r
      </div>\r
    </IuModal>\r
  </div>\r
</template>\r
`;export{r as default};
