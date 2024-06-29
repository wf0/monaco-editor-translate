<template>
  <div class="data-item-box">
    <div
      class="data-item-box-item"
      v-for="item in data"
      :key="item.link"
      @click="patchURL(item.link)"
    >
      <span class="icon" :style="{ borderColor: getColor(item.icon) }">
        {{ item.icon }}
      </span>
      <span class="title" :title="item.title || item.link">
        {{ item.title || item.link }}
      </span>
    </div>
  </div>
</template>

<script setup>
/**
 * [{icon:"P",link:""}]
 */
const { data } = defineProps({
  data: {
    type: Array,
    required: true,
  },
});

function getColor(t) {
  const map = {
    P: "#FF984D",
    F: "#8060EC",
    M: "#FD6AC4",
    A: "#FB8081",
    C: "#4D7FFF",
    I: "#38944A",
    T: "#DD4D94",
    V: "#7487EF",
  };
  if (map[t]) return map[t];
}
function patchURL(url) {
  if (url.split(".").length > 1) window.location.href = url;
  else window.location.hash = url.toLowerCase();
}
</script>

<style lang="css" scoped>
.data-item-box {
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
}
.data-item-box-item {
  height: 40px;
  padding: 0 5px;
  display: flex;
  align-items: center;
  width: calc(100% / 3);

  cursor: pointer;
}

.data-item-box-item .icon {
  height: 20px;
  width: 20px;
  font-size: 12px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid #eff0f3 2px;
  border-radius: 50%;
}
.data-item-box-item .title {
  box-sizing: content-box;
  align-items: center;
  display: flex;
  height: 40px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: solid transparent 1px;
}

.data-item-box-item:hover .title {
  border-bottom-color: #0076fc;
}
</style>
