<template>
<div>
  <div class="page-item" v-for="data in dataList">
      <div class="header-container">
        <!-- 头像 -->
        <img class="header-img" :src="data.group.user.avatar_url" :alt="data.group.user.name">
        <p>{{data.group.user.name}}</p>
      </div>
      <div class="desc-container">
        <!-- 描述 -->
        <p>{{data.group.content}}</p>
      </div>
      <div class="content-container">
        <!-- 内容 -->
        <video :src="data.group.mp4_url" controls="controls" style="width:100%">
          您的浏览器不支持 video 标签。
        </video>
      </div>
      <div>
        <!-- 神评 -->
      </div>
      <div class="contact-container">
        <img :src="imgData.like" alt="like">
        <p>{{data.group.digg_count}}</p>
        <img :src="imgData.unlike" alt="unlike">
        <p>{{data.group.bury_count}}</p>
        <img :src="imgData.comment" alt="comment">
        <p>{{data.group.comment_count}}</p>
        <img :src="imgData.forward" alt="forward">
        <p>122</p>
      </div>
  </div>
</div>
</template>

<script>

export default {
  name:"PageItem",
  props:["dataList"],
  data(){
    return {
      imgData:{
        like:'./static/like.png',
        likeChecked: './static/like-check.png',
        unlike:'./static/unlike.png',
        unlikeChecked:'./static/unlike-check.png',
        comment:'./static/comment.png',
        forward:'./static/forward.png',
      },
    }
  },
  mounted(){
    console.log('PageItem-mounted--->',this.dataList)
  },
  
}
</script>

<style>
@import "../assets/css/PageItem.css";
</style>

