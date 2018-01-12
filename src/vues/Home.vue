<template>
    <div id="contains">
        <Header></Header>
        <TabContainer  :activeTabbar="activeTabbar"></TabContainer>
        <Tabbar @change = "changeActiveTabbar" :TabbarData="TabbarData" :activeTabbar="activeTabbar"></Tabbar>
        
    </div>
</template>

<script>

import Header from "@/components/Header";
import Tabbar from "@/components/Tabbar";
import TabContainer from "@/components/TabContainer"

export default {
  name: "Home",
  data() {
    return {
      TabbarData: [
        {
          id: "首页",
          icon: '../static/index.png'
        },
        {
          id: "视频",
          icon: '../static/video.png'
        },
        {
          id: "图片",
          icon: '../static/image.png'
        },
        {
          id: "我的",
          icon: '../static/my.png'
        }
      ],
      activeTabbar:"首页"
    };
  },
  methods :{
    changeActiveTabbar : function(name){
      this.activeTabbar=name;
    }
  },
  components: {
    Header,
    Tabbar,
    TabContainer,
  }
};
</script>
