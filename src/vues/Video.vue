<template>
<div class="page-infinite-wrapper" ref="wrapper">
  <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
    <PageItem :dataList="list"></PageItem>
  </div>  
</div>

</template>

<script>
import { InfiniteScroll } from "mint-ui";

import PageItem from "@/components/PageItem";
import moment from "moment";
import { Indicator } from 'mint-ui';

export default {
  data() {
    return {
      list: [],
      loading: false,
      allLoaded: false,
      wrapperHeight: 0
    };
  },
  props:['activeTabbar'],
  mounted() {
    this.loadMore();
  },
  methods: {
    loadMore() {
      console.log("load more");
      console.log('activeTabbar',this.activeTabbar)
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
      var content_type ='-101';
      switch(this.activeTabbar){
        case '视频':
        content_type = '-104';
        break;
        case '图片':
        content_type = '-103';
        break;
        default:
        content_type = '-101';
        break;
      }

      this.$axios
      .post(`http://api.wangruirui.cn/proxy`, {
        method: "get",
        url: `http://iu.snssdk.com/neihan/stream/mix/v1/?mpic=1&webp=1&essence=1&content_type=${content_type}&message_cursor=-1&am_longitude=110&am_latitude=120&am_city=%E5%8C%97%E4%BA%AC%E5%B8%82&am_loc_time=${moment().format('x')}&count=30&min_time=${moment().format('X') -10}&screen_width=1450&do00le_col_mode=0&iid=3216590132&device_id=32613520945&ac=wifi&channel=360&aid=7&app_name=joke_essay&version_code=612&version_name=6.1.2&device_platform=android&ssmix=a&device_type=sansung&device_brand=xiaomi&os_api=28&os_version=6.10.1&uuid=326135942187625&openudid=3dg6s95rhg2a3dg5&manifest_version_code=612&resolution=1450*2800&dpi=620&update_version_code=6120`
      })
      .then(response => {
        var originData = response.data;
        if (originData.code != 0) {
          //TODO:错误异常处理
          console.log("服务器出错了", originData.message);
          return;
        }

        var data = originData.data;
        
        if (data.message != "success") {
          //TODO:错误异常处理
          
          console.log("获取出错了");
          console.log('data',data);
          return;
        }
        Indicator.close();
        console.log("CHANGE", data.data.data);
        data.data.data.map(x => {
          this.list.push(x);
        });
        console.log("End list --->", this.list);
        // this.list = data.data.data;
      })
      .catch(e => {
        //TODO:错误异常处理
        Indicator.close();
        console.log(e);
      });
    }
  },
  components: {
    PageItem
  }
};
</script>
