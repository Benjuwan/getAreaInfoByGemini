import { memo, useEffect, useState } from "react";

export const GoTopBtnEve = memo(() => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 100);

        onScroll(); // 初期表示用

        window.addEventListener("scroll", onScroll, { passive: true });

        // クリーンアップ処理
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, []);

    const goTopEve = (): void => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <button
            type="button"
            id="gotop"
            onClick={goTopEve}
            className={`group text-sm appearance-none border-0 bg-transparent outline-none block cursor-pointer fixed right-[2.5%] z-1 w-full max-w-16 min-h-16 text-right transition-all duration-500 ${visible ? "opacity-100 visible bottom-[5%]" : "opacity-0 invisible bottom-0"} md:text-center md:max-w-12 md:min-h-20 lg:max-w-7.5 lg:min-h-12.5`}
        >
            <span className="relative text-[#333333] align-baseline [writing-mode:vertical-rl] font-serif transition-colors duration-300 group-hover:text-[#dadada] group-active:text-[#dadada]">
                <span className="absolute -left-[.25em] bottom-0 w-px h-0 bg-[#333333] transition-all duration-1000 group-hover:h-full group-hover:bg-[#dadada] group-active:h-full group-active:bg-[#dadada]" aria-hidden />
                go Top
            </span>
        </button>
    );
});
