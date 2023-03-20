import type {RouteLocationNamedRaw} from "vue-router";

export interface ResultType {
    code: number,
    data: {},
    message: string,
    ok: boolean
}

export interface Result {
    categoryId: number,
    categoryName: string,
    categoryChild?: Result
}


export interface QueryType extends RouteLocationNamedRaw {

}

export interface MockJSType {
    id: string
    imgUrl: string
}


export interface NavList {
    url: string;
    text: string;
}

export interface CarouselList {
    id: string;
    imgUrl: string;
}

export interface FloorList {
    id: string;
    name: string;
    keywords: string[];
    imgUrl: string;
    navList: NavList[];
    carouselList: CarouselList[];
    recommendList: string[];
    bigImg: string;
}


export interface TrademarkList {
    tmId: number;
    tmName: string;
}

export interface AttrsList {
    attrId: number;
    attrValueList: string[];
    attrName: string;
}

export interface GoodsList {
    id: number;
    defaultImg: string;
    title: string;
    price: number;
    createTime?: any;
    tmId?: any;
    tmName?: any;
    category1Id?: any;
    category1Name?: any;
    category2Id?: any;
    category2Name?: any;
    category3Id?: any;
    category3Name?: any;
    hotScore: number;
    attrs?: any;
}

export interface SearchList {
    trademarkList: TrademarkList[];
    attrsList: AttrsList[];
    goodsList: GoodsList[];
    total: number;
    pageSize: number;
    pageNo: number;
    totalPages: number;
}

export interface SearchParams {
    category3Id?: string;
    category2Id?: string;
    category1Id?: string;
    categoryName?: string;
    keyword?: string;
    order?: string;
    pageNo?: number;
    pageSize?: number;
    props?: string[];
    trademark?: string;
}

export interface CategoryView {
    id: number;
    category1Id: number;
    category1Name: string;
    category2Id: number;
    category2Name: string;
    category3Id: number;
    category3Name: string;
}

export interface SpuSaleAttrValueList {
    id: number;
    spuId: number;
    baseSaleAttrId: number;
    saleAttrValueName: string;
    saleAttrName: string;
    isChecked: string;
}

export interface SpuSaleAttrList {
    id: number;
    spuId: number;
    baseSaleAttrId: number;
    saleAttrName: string;
    spuSaleAttrValueList: SpuSaleAttrValueList[];
}

export interface SkuImageList {
    id: number;
    skuId: number;
    imgName: string;
    imgUrl: string;
    spuImgId: number;
    isDefault: string;
}

export interface SkuAttrValueList {
    id: number;
    attrId: number;
    valueId: number;
    skuId: number;
    attrName: string;
    valueName: string;
}

export interface SkuSaleAttrValueList {
    id: number;
    skuId: number;
    spuId: number;
    saleAttrValueId: number;
    saleAttrId: number;
    saleAttrName: string;
    saleAttrValueName: string;
}

export interface SkuInfo {
    id: number;
    spuId: number;
    price: number;
    skuName: string;
    skuDesc: string;
    weight: string;
    tmId: number;
    category3Id: number;
    skuDefaultImg: string;
    isSale: number;
    createTime: string;
    skuImageList: SkuImageList[];
    skuAttrValueList: SkuAttrValueList[];
    skuSaleAttrValueList: SkuSaleAttrValueList[];
}

export interface GoodInfo {
    valuesSkuJson: string;
    price: number;
    categoryView: CategoryView;
    spuSaleAttrList: SpuSaleAttrList[];
    skuInfo: SkuInfo;
}


export interface CartInfoList {
    id: number;
    userId: string;
    skuId: number;
    cartPrice: number;
    skuNum: number;
    imgUrl: string;
    skuName: string;
    isChecked: number;
    createTime: string;
    operateTime: string;
    isOrdered: number;
    orderTime?: any;
    sourceType: string;
    sourceId: number;
    skuPrice: number;
    couponInfoList?: any;
}

export interface CartType {
    cartInfoList: CartInfoList[];
    activityRuleList?: any;
    createTime: string;
}
