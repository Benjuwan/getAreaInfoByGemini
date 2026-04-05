import type { facilityTypeData } from "../constance/facilityTypeData";
import type { prefcodeData } from "../constance/prefcodeData";

export type CityAryType = {
    id: string;
    name: string;
};

export type GetCityAryData = {
    status: string;
    data: CityAryType[];
};

export type FetchCityDataType = {
    status: string;
    data: CityAryType[];
    message?: {
        insufficient: string;
    };
};

export type FacilityDataType = {
    code: string;
    name: string;
};

// `as const`した（リテラル型として固めた）配列要素が処理対象の場合、配列はインデックスが number 型なので、[number] で「すべての要素の型」を展開できる
type PrefcodeDataElement = typeof prefcodeData[number];

// ブラケット記法で対象プロパティ（都道府県名）の値を抽出した型注釈を生成
export type prefJaNameType = PrefcodeDataElement["prefJaName"];

// [API操作説明 | 不動産情報ライブラリ](https://www.reinfolib.mlit.go.jp/help/apiManual/)に記載されている周辺施設コードの一覧
export type FacilityCodeType = typeof facilityTypeData[number]["code"];
