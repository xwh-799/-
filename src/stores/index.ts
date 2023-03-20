import { defineStore } from 'pinia'
import { StoreName } from '@/interface/StoreName'
import { regCateGoryList, reqGetSearchInfo, reqFloorList, regGetBannerList, reqGoodInfo, reqAddOrUpdateShopCart } from '@/api'
import type {
    MockJSType,
    FloorList,
    SearchList,
    GoodsList,
    Result,
    TrademarkList,
    AttrsList,
    GoodInfo, CategoryView, SkuInfo, SpuSaleAttrList
} from '@/interface/ResultType'

export const home = defineStore(StoreName.HOME, {
    state: () => {
        return {
            cateGoryList: <Array<Result>>[],
            bannerList: <Array<MockJSType>>[],
            floorList: <Array<FloorList[]>>[]
        }
    },
    actions: {
        async getCateGoryList() {
            const result = await regCateGoryList();

            if (result.data.code == 200) {
                this.cateGoryList = result.data.data;
            }
        },

        async getBannerList() {
            const result = await regGetBannerList()
            if (result.data.code == 200) {
                this.bannerList = result.data.data
            }
        },

        async getFloorList() {
            const result = await reqFloorList()
            if (result.data.code == 200) {
                this.floorList = result.data.data
            }
        }
    },
    getters: {}
})
export const search = defineStore(StoreName.SEARCH, {
    state: () => {
        return {
            searchList: <SearchList>{}
        }
    },
    actions: {
        async getSearchList(params: {} = {}) {
            const result = await reqGetSearchInfo(params)
            if (result.data.code == 200) {
                this.searchList = result.data.data
            }
        }
    },
    getters: {
        goodsList(): GoodsList[] {
            return this?.searchList?.goodsList ?? []
        },
        trademarkList(): TrademarkList[] {
            return this?.searchList?.trademarkList ?? []
        },
        attrsList(): AttrsList[] {
            return this?.searchList?.attrsList ?? []
        }
    }
})


export const detail = defineStore(StoreName.DETAIL, {
    state: () => {
        return {
            goodInfo: <GoodInfo>{},
        }
    },
    actions: {
        async getGoodInfo(skuId: number) {
            const result = await reqGoodInfo(skuId)
            if (result.data.code == 200) {
                this.goodInfo = result.data.data
            }
        },

        async addOrUpdateShopCart(skuId: number, skuNum: number) {
            const result = await reqAddOrUpdateShopCart(skuId, skuNum)
            if (result.data.code == 200) {
                return 'ok'
            } else {
                return Promise.reject(new Error('faile'))
            }
        }
    },
    getters: {
        categoryView(): CategoryView {
            return this?.goodInfo?.categoryView ?? {}
        },
        skuInfo(): SkuInfo {
            return this?.goodInfo?.skuInfo ?? {}
        },
        spuSaleAttrList(): SpuSaleAttrList[] {
            return this?.goodInfo?.spuSaleAttrList ?? []
        }
    }
})
