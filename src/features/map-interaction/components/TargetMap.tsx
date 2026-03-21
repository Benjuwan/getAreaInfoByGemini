import { memo, type SyntheticEvent } from "react";
import { TargetSvgElm } from "./TargetSvgElm";
import { JumpAreaEls } from "./JumpAreaEls";
import { useCheckDesktopView } from "../hooks/useCheckDesktopView";

export const TargetMap = memo(() => {
    const { isDesktopView } = useCheckDesktopView();

    const clickInteractionArea = (targetElm: SyntheticEvent<SVGGElement>): void => {
        if (!targetElm.currentTarget.hasAttribute('data-target')) {
            console.error("選択した都道府県には `data-target`属性が存在しません。");
            return;
        }

        const getThePrefData: string | null = targetElm.currentTarget.getAttribute('data-target');
        const toJumpPrefEl: HTMLElement | null = document.querySelector(`#${getThePrefData}`);

        if (!toJumpPrefEl) {
            alert(`#${getThePrefData} HTML要素（選択した都道府県に関する情報を掲載したDOM）が存在しません。`);
            return;
        }

        if (!isDesktopView) {
            // スマホ・タブレット閲覧時は所属地方（例：東北地方、関東地方、近畿地方）にページ内ジャンプ
            const getTheAreaData: string | null | undefined = targetElm.currentTarget.parentElement?.getAttribute('data-target');

            const toJumpAreaEl: HTMLElement | null = getTheAreaData?.includes('area-') ? document.querySelector(`#${getTheAreaData}`) : null;

            if (toJumpAreaEl) {
                toJumpAreaEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                return;
            }
        }

        if (toJumpPrefEl) {
            toJumpPrefEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    return (
        <div className="max-w-240 m-auto py-[5em] px-4">
            <div className="mb-[5em] p-4 bg-[#f1f1f1] rounded">
                <h1 className="mb-8 text-center">各都道府県をクリックして移動（ページ内ジャンプ）するUIデモ</h1>
                <p className="text-sm">SVG画像内の各種オブジェクトをグループ（`g`）ごとに分割し、それぞれにインタラクション（ページ内ジャンプ）を付けたUIです。</p>
            </div>
            <section className="mb-[5em]">
                <TargetSvgElm clickInteractionArea={clickInteractionArea} />
            </section>
            <JumpAreaEls />
        </div>
    );
});
