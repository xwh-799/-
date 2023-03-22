<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <ReCommend></ReCommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="floor in $home.floorList" :list="floor" :key="floor.id"></Floor>
    <Brand></Brand>
  </div>
</template>

<script setup lang="ts">
import ListContainer from './ListContainer/index.vue'
import ReCommend from './ReCommend/index.vue'
import Rank from './ReCommend/index.vue'
import Like from './Like/index.vue'
import Floor from './Floor/index.vue'
import Brand from './Brand/index.vue'
import {onMounted, onBeforeMount} from 'vue';
import {home, user} from '@/stores'

const $home = home()
const $user = user()
onMounted(() => {
  $home.getFloorList()
})
onBeforeMount(() => {
  $user.getUserInfo()

})
</script>

<style scoped lang="less">

</style>
