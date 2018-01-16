<template>
  <div>
    <div v-if="dataGroup.middle_image != undefined">
      <!-- 单图 -->
      <img :src="dataGroup.middle_image.url_list[0].url" alt="single" style="width:100%">
    </div>
    <div v-if="dataGroup.large_image_list != undefined">
      <!-- 多图 -->
     <gallery :images="imageList" :index="index" @close="index = null"></gallery>
     <div
      class="image-container"
      v-for="(image, imageIndex) in imageList"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '6rem', height: '6rem', 'background-position':'center' , 'background-size': 'cover'} "
    ></div>
    <div style="clear:both"></div>
    </div>
    
  </div>
</template>



<script>
import VueGallery from 'vue-gallery';

export default {
  name: "ImagePriview",
  props: ["dataGroup"],
  data() {
    return {
        index: null,
        imageList:[]
    };
  },
  mounted(){
    if(this.dataGroup.large_image_list != undefined) {
      this.dataGroup.large_image_list.map(x=>{
        this.imageList.push(x.url)
      })
    }
    // console.log('imageList-->',this.imageList)

  },
  components: {
    gallery: VueGallery
  }
};
</script>

<style>
.image-container{
    width: 6rem;
    height: 6rem;
    float: left;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
}
</style>
