import { memo, useState, type SyntheticEvent } from "react";
import { facilityTypeData } from "../constance/facilityTypeData";
import type { FacilityCodeType } from "../ts/cityDataAryEls";
import { useFacilitiesStore } from "../../../stores/useFacilitiesStore";
import { useFetchAroundFacilities } from "../hooks/useFetchAroundFacilities";

export const SelectFacilities = memo(() => {
    const [selectedFacilityCode, setSelectedFacilityCode] = useState<FacilityCodeType>('EXCEPTION');

    const selectedCityname = useFacilitiesStore((state) => state.selectedCityname);
    const setFacilitiesDataText = useFacilitiesStore((state) => state.setFacilitiesDataText);

    const { fetchAroundFacilities } = useFetchAroundFacilities();

    // 周辺施設のセレクトボックスで選択された施設コードをもとに、選択中エリアの周辺施設情報を取得する
    const handleFacilityCodeChange = (e: SyntheticEvent<HTMLSelectElement>): void => {
        const selectedFacilityCode = e.currentTarget.value as FacilityCodeType;
        setSelectedFacilityCode(selectedFacilityCode);

        // ※「それ以外の施設情報」が選択された場合は、周辺施設情報の取得処理をスキップする
        if (e.currentTarget.value === "EXCEPTION") {
            setFacilitiesDataText(undefined); // 初期化
            return;
        }

        fetchAroundFacilities(selectedCityname, selectedFacilityCode);
    }

    return (
        <>
            <p className="text-xs my-2">※調べたい施設情報が以下リストにない場合は「{facilityTypeData.at(-1)?.name ?? 'それ以外の施設情報'}」を選択してください</p>
            <select
                name="facilitiesData"
                id="facilitiesData"
                defaultValue={selectedFacilityCode} // 初期値は「それ以外の施設情報」に設定
                onChange={handleFacilityCodeChange}
                className="w-full rounded border-[#c5c5c5] border mb-4"
            >
                {facilityTypeData.map((facilityData) => (
                    <option key={facilityData.code} value={facilityData.code}>{facilityData.name}</option>
                ))}
            </select>
        </>
    );
});
