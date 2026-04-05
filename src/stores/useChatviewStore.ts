import { create } from 'zustand'

type ChatviewStore = {
    isChatView: boolean;
    handleChatView: () => void;
};

export const useChatviewStore = create<ChatviewStore>((set) => ({
    isChatView: false,
    handleChatView: () => set((state) => ({ isChatView: !state.isChatView }))
}));
