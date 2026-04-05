import { memo, useState, type SyntheticEvent } from "react";
import { facilityTypeData } from "../constance/facilityTypeData";
import type { FacilityCodeType, FacilityDataType } from "../ts/cityDataAryEls";
import { useFacilitiesStore } from "../../../stores/useFacilitiesStore";
import { useFetchAroundFacilities } from "../hooks/useFetchAroundFacilities";

export const SelectFacilities = memo(() => {
    const [selectedFacilityCode, setSelectedFacilityCode] = useState<FacilityCodeType>('EXCEPTION');
    const selectedCityname = useFacilitiesStore((state) => state.selectedCityname);

    const { fetchAroundFacilities } = useFetchAroundFacilities();

    const initfacilityData: FacilityDataType = {
        code: "init",
        name: "施設を選んでください"
    };
    const initFacilityTypeData: FacilityDataType[] = [initfacilityData, ...facilityTypeData];

    // 周辺施設のセレクトボックスで選択された施設コードをもとに、選択中エリアの周辺施設情報を取得する
    const handleFacilityCodeChange = (e: SyntheticEvent<HTMLSelectElement>): void => {
        const selectedFacilityCode = e.currentTarget.value as FacilityCodeType;
        setSelectedFacilityCode(selectedFacilityCode);

        if (e.currentTarget.value === "EXCEPTION") {
            return;
        }

        fetchAroundFacilities(selectedCityname, selectedFacilityCode);
    }

    console.log(selectedFacilityCode);

    return (
        <>
            <p>※調べたい施設情報が以下リストにない場合は「{facilityTypeData.at(-1)?.name ?? 'それ以外の施設情報'}」を選択してください</p>
            <select name="facilitiesData" id="facilitiesData" onChange={handleFacilityCodeChange} className="w-full rounded border-[#c5c5c5] border my-4">
                {initFacilityTypeData.map((facilityData) => (
                    <option key={facilityData.code} value={facilityData.code}>{facilityData.name}</option>
                ))}
            </select>
        </>
    );
});
