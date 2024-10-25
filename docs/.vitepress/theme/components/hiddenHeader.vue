<template></template>

<script setup>
import { onMounted } from "vue";
onMounted(() => {
  const header = document.querySelector("header");
  if (!header) return;
  header.remove();
});
</script>
