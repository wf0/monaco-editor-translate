<template>
	<div></div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
	// 向 head 添加中插入统计代码
	const script = document.createElement("script");
	script.defer = true;
	script.src = "https://cn.vercount.one/js";
	document.head.appendChild(script);
	console.log("vercount.one loaded");

	// Total Page View <span id="vercount_value_page_pv">Loading</span>
	// Total Visits <span id="vercount_value_site_pv">Loading</span>
	// Site Total Visitors <span id="vercount_value_site_uv">Loading</span>
});
</script>
