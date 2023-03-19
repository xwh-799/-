<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveShow" @mouseenter="enterShow">
        <h2 class="all">全部商品分类</h2>
        <transition enter-active-class="animate__animated animate__fadeIn"
                    leave-active-class="animate__animated animate__fadeOutUp">
          <div v-show="show" class="sort">

            <div class="all-sort-list2" @click="goSearch">
              <div class="item" v-for="(c1, index) in $home.cateGoryList" :key="c1.categoryId"
                   :class="{cur:currentIndex === index}">
                <h3 @mouseenter="changeIndex(index)">
                  <a :data-category1Id="c1.categoryId" :data-categoryName="c1.categoryName">{{ c1.categoryName }}</a>
                </h3>
                <div :style="{display:currentIndex===index?'block':'none'}" class="item-list clearfix">
                  <div class="subitem">
                    <dl class="fore" v-for="(c2) in c1.categoryChild" :key="c2.categoryId">
                      <dt>
                        <a :data-category2Id="c2.categoryId" :data-categoryName="c2.categoryName">{{
                            c2.categoryName
                          }}</a>
                      </dt>
                      <dd>
                        <em v-for="(c3) in c2.categoryChild" :key="c3.categoryId">
                          <a :data-category3Id="c3.categoryId" :data-categoryName="c3.categoryName">{{
                              c3.categoryName
                            }}</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </transition>

      </div>

      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>

    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {home} from '@/stores'
import {throttle} from 'lodash'
import {useRoute, useRouter} from 'vue-router'

import type {QueryType} from "@/interface/ResultType";

const $home = home()
const router = useRouter()
const route = useRoute()
const currentIndex = ref<number>(-1)

const changeIndex = throttle(function (index: number) {
  currentIndex.value = index
}, 50)
const leaveShow = () => {
  currentIndex.value = -1
  if (route.path != '/home') {
    show.value = false
  }
}
const enterShow = () => {
  if (route.path != '/home') {
    show.value = true
  }
}
const show = ref<boolean>(true)
let location = ref<QueryType>({})
const goSearch = (event: PointerEvent) => {
  let element = event.target as HTMLElement
  let {categoryname, category1id, category2id, category3id} = element.dataset
  if (categoryname) {
    location.value.name = 'search'
    if (category1id) {
      location.value.query = {
        categoryName: categoryname,
        category1Id: category1id
      }
    } else if (category2id) {
      location.value.query = {
        categoryName: categoryname,
        category2Id: category2id
      }
    } else {
      location.value.query = {
        categoryName: categoryname,
        category3Id: category3id
      }
    }
    // console.log(location)
    if (route.params) {
      location.value.params = route.params
    }
    router.push(location.value)
  }
}
onMounted(() => {

  if (route.path != '/home') {
    show.value = false

  }
})
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }


        }

        .cur {
          background-color: skyblue;
        }
      }
    }
  }
}
</style>
