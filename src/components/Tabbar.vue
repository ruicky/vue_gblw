<template>
  <mt-tabbar v-model="activeTabbar"  fixed>
  <mt-tab-item v-for="(item, index) in TabbarData"  :id="item.id" :key='index'>
    <img slot="icon" :src="item.icon">
    {{item.id}}
  </mt-tab-item>
</mt-tabbar>
</template>


<script>
import { Tabbar, TabItem } from "mint-ui";

export default {
  name: "Tabbar",
  data() {
    return {
      activeTabbar: "首页"
    };
  },
  props: ["TabbarData"],
  // methods:{
  //   changeActiveTabbar: function() {
  //     this.$emit("changeActiveTabbar", activeTabbar);
  //   }
  // },
  watch:{
    activeTabbar:function(newId){
      this.$emit("change", newId);
    }
  }

};
</script>


<style>
.page-tabbar {
  overflow: hidden;
  height: 100vh;
}
.page-wrap {
  overflow: auto;
  height: 100%;
  padding-bottom: 100px;
}
</style>