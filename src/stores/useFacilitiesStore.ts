import { create } from 'zustand'

type FacilitiesStore = {
    selectedCityname: string;
    setCityname: (newCityname: string) => void;
    facilitiesDataText: string | undefined;
    setFacilitiesDataText: (data: string) => void;
};

export const useFacilitiesStore = create<FacilitiesStore>((set) => ({
    selectedCityname: '北海道',
    setCityname: (newCityname) => set({ selectedCityname: newCityname }),
    facilitiesDataText: undefined,
    setFacilitiesDataText: (data) => set({ facilitiesDataText: data })
}));
