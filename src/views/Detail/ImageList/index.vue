<template>
  <swiper
      class="swiper-container"
      :slidesPerView="3"
      :slidesPerGroup="2"
      :spaceBetween="30"
      :centeredSlides="true"
      :navigation="true"
      :modules="modules">

    <swiper-slide v-for="(skuImage,index) in defaults.skuImageList" :key="skuImage.id">
      <img @click="changeCurrentIndex(index)" :class="{active:currentIdent===index}" :src="skuImage.imgUrl">
    </swiper-slide>
  </swiper>

</template>

<script setup lang="ts">
// import {Swiper, SwiperSlide} from 'swiper/vue'
import type {SkuImageList} from "@/interface/ResultType";
import {ref,getCurrentInstance} from "vue";
import {Swiper, SwiperSlide} from 'swiper/vue'
import {Autoplay, Navigation, Pagination, A11y} from 'swiper';

const modules = [Autoplay, Pagination, Navigation, A11y];
const instance = getCurrentInstance()
let defaults = withDefaults(defineProps<{
  skuImageList: SkuImageList[]
}>(), {});
const currentIdent = ref<number>(0)
const changeCurrentIndex = (index: number) => {
  currentIdent.value = index
  instance?.proxy?.$Bus.emit('getIndex',currentIdent.value)
}
</script>

<style scoped lang="less">
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }

    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;

    &::after {
      font-size: 12px;
    }
  }
}
</style>
