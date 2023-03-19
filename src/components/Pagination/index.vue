<template>
  <div class="pagination">
    <!--    <button>{{startNumAndEndNum}}   -&#45;&#45;   {{pageNo}}</button>-->
    <button :disabled="pageNo === 1" @click="getPageNo(pageNo-1)">上一页</button>
    <button v-show="startNumAndEndNum.start>1" @click="getPageNo(1)" :class="{active:pageNo===1}">1</button>
    <button v-show="startNumAndEndNum.start>2">···</button>
    <button v-for="(pageX,index) in startNumAndEndNum.end" :key="index" v-show="pageX>=startNumAndEndNum.start"
            @click="getPageNo(pageX)" :class="{active:pageNo===pageX}">
      {{ pageX }}
    </button>
    <button v-show="startNumAndEndNum.end < totalPage-1">···</button>
    <button v-show="startNumAndEndNum.end < totalPage" @click="getPageNo(totalPage)"
            :class="{active:pageNo === totalPage}">{{ totalPage }}
    </button>
    <button :disabled="pageNo === totalPage" @click="getPageNo(pageNo+1)">下一页</button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>

</template>

<script setup lang="ts">
import {computed} from "vue";

type PageType = {
  pageNo?: number,
  pageSize?: number,
  total?: number,
  continues?: number
}
let page = withDefaults(defineProps<PageType>(), {
  pageNo: 1,
  pageSize: 10,
  total: 10,
  continues: 5
});
let totalPage = computed<number>(() => {
  return Math.ceil(page.total / page.pageSize)
})

let emits = defineEmits<{
  (e: 'getPageNo', pageNo: number): void
}>();
const getPageNo = (pageNo: number) => {
  emits('getPageNo', pageNo)
}
let startNumAndEndNum = computed<{
  start: number,
  end: number
}>(() => {
  let start = 0, end = 0
  if (page.continues > totalPage.value) {
    start = 1
    end = totalPage.value
  } else {
    start = page.pageNo - Math.floor(page.continues / 2)
    end = page.pageNo + Math.floor(page.continues / 2)
    if (start < 1) {
      start = 1
      end = page.continues
    }
    if (end > totalPage.value) {
      end = totalPage.value
      start = totalPage.value - page.continues + 1
    }
  }
  return {start: start, end: end}
})

</script>

<style scoped lang="less">
.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
.active{
  background-color: skyblue;

}
</style>
