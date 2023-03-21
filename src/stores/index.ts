import {defineStore} from 'pinia'
import {StoreName} from '@/interface/StoreName'
import {
    regCateGoryList,
    reqGetSearchInfo,
    reqFloorList,
    regGetBannerList,
    reqGoodInfo,
    reqAddOrUpdateShopCart, reqCartList, reqDeleteCartById, reqUpdateCheckedById, reqGetCode, reqUserRegister
} from '@/api'
import type {
    MockJSType,
    FloorList,
    SearchList,
    GoodsList,
    Result,
    TrademarkList,
    AttrsList,
    GoodInfo, CategoryView, SkuInfo, SpuSaleAttrList, CartType, CartInfoList
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
            // 游客临时身份
            // uuid_token: getUUID()
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


export const shopCart = defineStore(StoreName.SHOPCART, {
    state: () => {
        return {
            cartList: <Array<CartType>>[]
        }
    },
    actions: {
        async getCartList() {
            const result = await reqCartList()
            if (result.data.code == 200) {
                this.cartList = result.data.data
            }
        },
        async deleteCartById(skuId: number) {
            const result = await reqDeleteCartById(skuId)
            if (result.data.code == 200) {
                return 'ok'
            } else {
                return Promise.reject(new Error('faile'))
            }
        },
        async updateCheckedById(skuId: number, isChecked: number) {
            const result = await reqUpdateCheckedById(skuId, isChecked)
            if (result.data.code == 200) {
                return 'ok'
            } else {
                return Promise.reject(new Error('faile'))
            }
        },

        deleteAllCheckedCart() {
            const promiseAll: Promise<any>[] = []
            this.cartInfoList.forEach(item => {
                if (item.isChecked == 1) {
                    let promise = this.deleteCartById(item.skuId)
                    promiseAll.push(promise)
                }
            })
            return Promise.all(promiseAll)
        },

        allChecked(check: boolean) {
            const promiseAll: Promise<any>[] = []
            this.cartInfoList.forEach(item => {
                if (check) {
                    let result = this.updateCheckedById(item.skuId, 1);
                    promiseAll.push(result)
                } else {
                    let result = this.updateCheckedById(item.skuId, 0)
                    promiseAll.push(result)
                }
            })
            return Promise.all(promiseAll)
        }

    },
    getters: {
        cartInfoList(): CartInfoList[] {
            const i = this.cartList[0] ?? {}
            return i.cartInfoList ?? []
        }
    }
})

export const user = defineStore(StoreName.USER, {
    state: () => {
        return {
            code: <string>''
        }
    },
    actions: {
        async getCode(phone: string) {
            const result = await reqGetCode(phone)
            if (result.data.code == 200) {
                this.code = result.data.data ?? ''
                return 'ok'
            } else {
                return Promise.reject(new Error('faile'))
            }
        },
        async userRegister(phone: string, password: string, code: string) {
            const result = await reqUserRegister(phone, password, code)
            if (result.data.code == 200) {
                return 'ok'
            } else {
                return Promise.reject(new Error('faile'))
            }
        }
    },
    getters: {}
})
