<template>

  <swiper
      :slidesPerView="1"
      :spaceBetween="30"
      :loop="true"
      :centeredSlides="true"
      :pagination="{clickable: true}"
      :autoplay="{delay: 2500,disableOnInteraction: false}"
      :navigation="true"
      :modules="modules">

    <swiper-slide v-for="carousel in list" :key="carousel.id">
      <img :src="carousel.imgUrl" alt=""/>
    </swiper-slide>
  </swiper>

</template>

<script setup lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue'
import {Autoplay, Navigation, Pagination, A11y} from 'swiper';

const modules = [Autoplay, Pagination, Navigation, A11y];
import type {CarouselList} from '@/interface/ResultType'

withDefaults(defineProps<{
  list: CarouselList
}>(), {})

</script>

<style scoped lang="less">

</style>
