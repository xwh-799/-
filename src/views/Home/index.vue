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
import {home, user} from '@/stores'

const $home = home()
const $user = user()
onMounted(() => {
  $home.getFloorList()
  $user.getUserInfo()
})
</script>

<style scoped lang="less">

</style>
