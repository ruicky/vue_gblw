<template>
  <mt-tab-container v-model="activeTabbar" class="tab-container">
  <mt-tab-container-item id="首页">
    <!-- <mt-cell v-for="n in 10" title="tab-container 1" :key="n"></mt-cell> -->
    <!-- <PageItem :activeTabbar="activeTabbar"></PageItem> -->
    <Video :activeTabbar="activeTabbar" v-if="activeTabbar=='首页'"></Video>
  </mt-tab-container-item>
  <mt-tab-container-item id="视频">
    <!-- <mt-cell v-for="n in 5" title="tab-container 2" :key="n"> </mt-cell> -->
    <Video :activeTabbar="activeTabbar" v-if="activeTabbar=='视频'"></Video>
  </mt-tab-container-item>
  <mt-tab-container-item id="图片">
    <Video :activeTabbar="activeTabbar" v-if="activeTabbar=='图片'"></Video>
  </mt-tab-container-item>
  <mt-tab-container-item id="我的">
    <mt-cell v-for="n in 7" title="tab-container 4" :key="n"></mt-cell>
  </mt-tab-container-item>
</mt-tab-container>
</template>

<script>
import PageItem from "@/components/PageItem"
import Video from "@/vues/Video"

export default {
  name: "TabContainer",
  props:['activeTabbar'],
  components:{
    PageItem,
    Video
  }
};
</script>

<style>
.tab-container{
  margin-bottom: 4rem;
}
</style>


