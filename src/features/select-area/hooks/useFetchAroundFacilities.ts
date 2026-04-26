import { useCallback } from "react";
import { WORKER_ENDPOINT_FACILITIES } from "../constance/reinfolib-config";
import type { FacilityCodeType } from "../ts/cityDataAryEls";
import { useFacilitiesStore } from "../../../stores/useFacilitiesStore";

export const useFetchAroundFacilities = () => {
    const setFacilitiesDataText = useFacilitiesStore((state) => state.setFacilitiesDataText);

    const fetchAroundFacilities = useCallback(async (
        selectedCity: string,
        facilityCode: FacilityCodeType
    ) => {
        // 都道府県_市区町村の形式から、都道府県名と市区町村名を抽出
        const thePrefJaName: string = selectedCity.split('_')[0];
        const theCityname: string = selectedCity.split('_').at(-1) ?? "noCityData";

        // 選択した都道府県の市区町村にある周辺施設情報を取得
        try {
            const res = await fetch(WORKER_ENDPOINT_FACILITIES, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    prefName: thePrefJaName,    // 都道府県名
                    cityName: theCityname,      // 市区町村名
                    facilityCode: facilityCode  // 施設コード
                }),
            });
            if (res.ok) {
                const data = await res.json();
                setFacilitiesDataText(JSON.stringify(data).trim());
            }
        } catch (e: unknown) {
            if (e instanceof Error) {
                console.error("Failed to fetch facilities:", e);
                console.error(e.message);
            }
        }
    }, [setFacilitiesDataText]);

    return { fetchAroundFacilities }
}
