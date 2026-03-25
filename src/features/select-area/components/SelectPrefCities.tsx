import { useState, memo, type SyntheticEvent, useEffect, useCallback } from 'react';
import { WORKER_ENDPOINT } from '../constance/reinfolib-config';
import type { CityAryType, GetCityAryData, prefJaNameType } from '../ts/cityDataAryEls';
import { prefcodeData } from '../constance/prefcodeData';

export const SelectPrefCities = memo(({ prefJaName }: { prefJaName: prefJaNameType }) => {
    const [cities, setCities] = useState<CityAryType[]>([]);

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

    const runChatbot = (e: SyntheticEvent<HTMLSelectElement>): void => {
        console.log(prefJaName, e.currentTarget.value);
        return;
    }

    useEffect(() => {
        const initCityAryData: CityAryType = {
            id: 'init',
            name: '選択してください'
        }
        const fetcedCitiesData = getCityAryData(prefJaName);
        fetcedCitiesData.then(data => setCities([initCityAryData, ...data]));
    }, [prefJaName, getCityAryData, setCities]);

    return (
        <section>
            <select
                name="CITIES_LISTS"
                id="CITIES_LISTS"
                onChange={runChatbot}
            >
                {cities.length > 0 &&
                    <>
                        {cities.map(city => (
                            <option key={city.id} value={city.name}>{city.name}</option>
                        ))}
                    </>
                }
            </select>
        </section>
    );
});
