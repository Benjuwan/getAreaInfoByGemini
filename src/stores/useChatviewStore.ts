import { create } from 'zustand'

type ChatviewStore = {
    isChatView: boolean;
    handleChatView: () => void;
    selectedCityname: string;
    setCityname: (newCityname: string) => void;
};

export const useChatviewStore = create<ChatviewStore>((set) => ({
    isChatView: false,
    handleChatView: () => set((state) => ({ isChatView: !state.isChatView })),
    selectedCityname: '北海道',
    setCityname: (newCityname) => set({ selectedCityname: newCityname })
}));
