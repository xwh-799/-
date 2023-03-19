<template>
  <div>
    <Header></Header>

    <router-view></router-view>
    <Footer v-if="route.meta.show"></Footer>
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'
import {home} from '@/stores'
import {onMounted} from 'vue'
import {useRoute} from 'vue-router'

const route = useRoute()
const $home = home()
onMounted(() => [
  $home.getCateGoryList()
])
</script>

<style scoped lang="less">

</style>
