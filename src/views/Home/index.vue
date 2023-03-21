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
import {onMounted} from 'vue';
import {home} from '@/stores'

const $home = home()

onMounted(() => {
  $home.getFloorList()
})
</script>

<style scoped lang="less">

</style>
