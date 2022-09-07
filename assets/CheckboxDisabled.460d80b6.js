const e=`<script setup lang="ts">
const value = ref(true)
<\/script>

<template>
  <IuSpace align="center">
    <IuCheckbox v-model="value">
      \u7981\u7528
    </IuCheckbox>
    <IuCheckbox v-model="value" disabled />
    <IuCheckbox v-model="value" :disabled="value">
      disabled
    </IuCheckbox>
  </IuSpace>
</template>
`;export{e as default};
