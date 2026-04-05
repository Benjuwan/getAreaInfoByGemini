// 最下部にある`"code": "EXCEPTION"`以外は、[API操作説明 | 不動産情報ライブラリ](https://www.reinfolib.mlit.go.jp/help/apiManual/)より周辺施設コードのみを抜粋
export const facilityTypeData = [
    {
        "code": "XKT004",
        "name": "小学校区",
    },
    {
        "code": "XKT005",
        "name": "中学校区",
    },
    {
        "code": "XKT006",
        "name": "学校",
    },
    {
        "code": "XKT007",
        "name": "保育園・幼稚園等",
    },
    {
        "code": "XKT010",
        "name": "医療機関",
    },
    {
        "code": "XKT011",
        "name": "福祉施設",
    },
    {
        "code": "XKT017",
        "name": "図書館",
    },
    {
        "code": "XKT018",
        "name": "市区町村役場及び集会施設等",
    },
    {
        "code": "XKT019",
        "name": "自然公園地域",
    },
    {
        "code": "EXCEPTION",
        "name": "*それ以外の施設情報（ハルシネーションリスクあり）",
    }
] as const; // リテラル型として固める（readonly：編集不可にする）
