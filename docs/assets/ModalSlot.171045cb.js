const t=`<script setup lang="ts">\r
const show = ref(false)\r
<\/script>\r
\r
<template>\r
  <div>\r
    <IuButton @click="show = !show">\r
      \u6253\u5F00\r
    </IuButton>\r
    <IuModal v-model:show="show">\r
      <template #header>\r
        #header\r
      </template>\r
      <div style="width: 300px;">\r
        default\r
      </div>\r
      <template #footer>\r
        #footer\r
      </template>\r
      <template #action>\r
        #action\r
      </template>\r
    </IuModal>\r
  </div>\r
</template>\r
`;export{t as default};
