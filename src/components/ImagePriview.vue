<template>
  <div>
     <gallery :images="images" :index="index" @close="index = null"></gallery>
     <div
      class="image-container"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image.url + ')', width: '6rem', height: '6rem', 'background-position':'center' , 'background-size': 'cover'} "
    ></div>
    <div style="clear:both"></div>
  </div>
</template>



<script>
import VueGallery from 'vue-gallery';

export default {
  name: "ImagePriview",
  props: ["images"],
  data() {
    return {
    //   images: [
    //       'https://static.littlewin.wang/blog/1-thumb.png',
    //       'https://static.littlewin.wang/blog/2-thumb.png',
    //       'https://static.littlewin.wang/blog/3-thumb.jpeg',
    //       'https://static.littlewin.wang/blog/4-thumb.png',
    //       'https://static.littlewin.wang/blog/5-thumb.png',
    //       'https://static.littlewin.wang/blog/6-thumb.jpeg',
    //       'https://static.littlewin.wang/blog/7-thumb.jpg',
    //     ],
        index: null
    };
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
