import { useState, memo, type SyntheticEvent, useEffect, useCallback } from 'react';
import { WORKER_ENDPOINT } from '../constance/reinfolib-config';
import { prefcodeData } from '../constance/prefcodeData';
import { useChatviewStore } from '../../../stores/useChatviewStore';
import type { CityAryType, GetCityAryData, prefJaNameType } from '../ts/cityDataAryEls';

export const SelectPrefCities = memo(({ prefJaName }: { prefJaName: prefJaNameType }) => {
    const [cities, setCities] = useState<CityAryType[]>([]);

    const handleChatView = useChatviewStore((state) => state.handleChatView);
    const setCityname = useChatviewStore((state) => state.setCityname);

    const getCityAryData = useCallback(async (prefJaName: prefJaNameType): Promise<CityAryType[]> => {
        // Props で渡ってきた都道府県名に準拠する都道府県コードを取得
        const getTargetPrefcode = [...prefcodeData].map((data) => {
            if (data.prefJaName === prefJaName) {
                return data.prefcode;
            }
            return undefined;
        }).filter(data => typeof data !== 'undefined')[0];

        // Hono で設定した Cloudflare Workers のエンドポイントを叩く
        // ※都道府県コード（`getTargetPrefcode`）をリクエストボディに付与
        const response = await fetch(WORKER_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prefCode: getTargetPrefcode }),
        });

        const data: GetCityAryData = await response.json();
        return data.data;
    }, []);

    const changeTargetArea = (e: SyntheticEvent<HTMLSelectElement>): void => {
        handleChatView();
        setCityname(`${prefJaName}${e.currentTarget.value}`);
        console.log(prefJaName, e.currentTarget.value);
        return;
    }

    useEffect(() => {
        const initCityAryData: CityAryType = {
            id: 'init',
            name: `${prefJaName}の市区町村`
        }
        const fetcedCitiesData = getCityAryData(prefJaName);
        fetcedCitiesData.then(data => setCities([initCityAryData, ...data]));
    }, [prefJaName, getCityAryData, setCities]);

    return (
        <section className='my-4'>
            {cities.length > 0 ?
                <>
                    <p className='text-sm mb-4'>情報取集対象エリアを選択（以下から市区町村を選択してください）</p>
                    <select
                        name="CITIES_LISTS"
                        id="CITIES_LISTS"
                        className='border border-[#dadada] rounded-sm text-base'
                        onChange={changeTargetArea}
                    >
                        {cities.map(city => (
                            <option key={city.id} value={city.name}>{city.name}</option>
                        ))}
                    </select>
                </> :
                <p>...loading</p>
            }
        </section>
    );
});
