import requests from "./request";
import mockRequest from "./mockRequest";

export const regCateGoryList = () => {
    return requests({
        url: '/product/getBaseCategoryList',
        method: "get"
    })
}

export const regGetBannerList = () => {
    return mockRequest.get('/banner')
}

export const reqFloorList = () => {
    return mockRequest.get('/floor')
}

// /api/list
export const reqGetSearchInfo = (params: {}) => {
    return requests({
        url: '/list',
        method: 'post',
        data: params
    })
}

export const reqGoodInfo = (skuId: number) => {
    return requests({
        url: `/item/${skuId}`,
        method: 'get',
    })
}

export const reqAddOrUpdateShopCart = (skuId: number, skuNum: number) => {
    return requests({
        url: `/cart/addToCart/${skuId}/${skuNum}`,
        method: 'post'
    })
}

// /api/cart/cartList
export const reqCartList  = () => {
    return requests({
        url: '/cart/cartList',
        method: 'get'
    })
}
