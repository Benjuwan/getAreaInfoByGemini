import { memo } from "react";
import { SelectPrefCities } from "../../select-area/components/SelectPrefCities";

export const JumpAreaEls = memo(() => {
    return (
        <section>
            {/* 北海道地方 */}
            <div className="mb-[2.5em] bg-[#00b4ed] rounded p-4 h-full" id="area-hokkaido">
                <h3 className="font-bold text-lg mb-4 text-white">北海道地方</h3>
                <ul className="space-y-4">
                    <li id="pref-hokkaido" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">北海道</h4>
                        <SelectPrefCities prefJaName="北海道" />
                    </li>
                </ul>
            </div>

            {/* 東北地方 */}
            <div className="mb-[2.5em] bg-[#b0d25e] rounded p-4 h-full" id="area-tohoku">
                <h3 className="font-bold text-lg mb-4 text-white">東北地方</h3>
                <ul className="space-y-4">
                    <li id="pref-aomori" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">青森県</h4>
                        <SelectPrefCities prefJaName="青森県" />
                    </li>
                    <li id="pref-iwate" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">岩手県</h4>
                        <SelectPrefCities prefJaName="岩手県" />
                    </li>
                    <li id="pref-miyagi" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">宮城県</h4>
                        <SelectPrefCities prefJaName="宮城県" />
                    </li>
                    <li id="pref-akita" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">秋田県</h4>
                        <SelectPrefCities prefJaName="秋田県" />
                    </li>
                    <li id="pref-yamagata" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">山形県</h4>
                        <SelectPrefCities prefJaName="山形県" />
                    </li>
                    <li id="pref-fukushima" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">福島県</h4>
                        <SelectPrefCities prefJaName="福島県" />
                    </li>
                </ul>
            </div>

            {/* 関東地方 */}
            <div className="mb-[2.5em] bg-[#3785c7] rounded p-4 h-full" id="area-kanto">
                <h3 className="font-bold text-lg mb-4 text-white">関東地方</h3>
                <ul className="space-y-4">
                    <li id="pref-ibaraki" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">茨城県</h4>
                        <SelectPrefCities prefJaName="茨城県" />
                    </li>
                    <li id="pref-tochigi" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">栃木県</h4>
                        <SelectPrefCities prefJaName="栃木県" />
                    </li>
                    <li id="pref-gunma" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">群馬県</h4>
                        <SelectPrefCities prefJaName="群馬県" />
                    </li>
                    <li id="pref-saitama" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">埼玉県</h4>
                        <SelectPrefCities prefJaName="埼玉県" />
                    </li>
                    <li id="pref-chiba" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">千葉県</h4>
                        <SelectPrefCities prefJaName="千葉県" />
                    </li>
                    <li id="pref-tokyo" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">東京都</h4>
                        <SelectPrefCities prefJaName="東京都" />
                    </li>
                    <li id="pref-kanagawa" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">神奈川県</h4>
                        <SelectPrefCities prefJaName="神奈川県" />
                    </li>
                </ul>
            </div>

            {/* 中部地方 */}
            <div className="mb-[2.5em] bg-[#ea609e] rounded p-4 h-full" id="area-chubu">
                <h3 className="font-bold text-lg mb-4 text-white">中部地方</h3>
                <ul className="space-y-4">
                    <li id="pref-niigata" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">新潟県</h4>
                        <SelectPrefCities prefJaName="新潟県" />
                    </li>
                    <li id="pref-toyama" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">富山県</h4>
                        <SelectPrefCities prefJaName="富山県" />
                    </li>
                    <li id="pref-ishikawa" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">石川県</h4>
                        <SelectPrefCities prefJaName="石川県" />
                    </li>
                    <li id="pref-fukui" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">福井県</h4>
                        <SelectPrefCities prefJaName="福井県" />
                    </li>
                    <li id="pref-yamanashi" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">山梨県</h4>
                        <SelectPrefCities prefJaName="山梨県" />
                    </li>
                    <li id="pref-nagano" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">長野県</h4>
                        <SelectPrefCities prefJaName="長野県" />
                    </li>
                    <li id="pref-gifu" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">岐阜県</h4>
                        <SelectPrefCities prefJaName="岐阜県" />
                    </li>
                    <li id="pref-shizuoka" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">静岡県</h4>
                        <SelectPrefCities prefJaName="静岡県" />
                    </li>
                    <li id="pref-aichi" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">愛知県</h4>
                        <SelectPrefCities prefJaName="愛知県" />
                    </li>
                </ul>
            </div>

            {/* 近畿地方 */}
            <div className="mb-[2.5em] bg-[#f18e1d] rounded p-4 h-full" id="area-kinki">
                <h3 className="font-bold text-lg mb-4 text-white">近畿地方</h3>
                <ul className="space-y-4">
                    <li id="pref-mie" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">三重県</h4>
                        <SelectPrefCities prefJaName="三重県" />
                    </li>
                    <li id="pref-shiga" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">滋賀県</h4>
                        <SelectPrefCities prefJaName="滋賀県" />
                    </li>
                    <li id="pref-kyoto" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">京都府</h4>
                        <SelectPrefCities prefJaName="京都府" />
                    </li>
                    <li id="pref-osaka" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">大阪府</h4>
                        <SelectPrefCities prefJaName="大阪府" />
                    </li>
                    <li id="pref-hyogo" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">兵庫県</h4>
                        <SelectPrefCities prefJaName="兵庫県" />
                    </li>
                    <li id="pref-nara" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">奈良県</h4>
                        <SelectPrefCities prefJaName="奈良県" />
                    </li>
                    <li id="pref-wakayama" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">和歌山県</h4>
                        <SelectPrefCities prefJaName="和歌山県" />
                    </li>
                </ul>
            </div>

            {/* 中国地方 */}
            <div className="mb-[2.5em] bg-[#6abd83] rounded p-4 h-full" id="area-chugoku">
                <h3 className="font-bold text-lg mb-4 text-white">中国地方</h3>
                <ul className="space-y-4">
                    <li id="pref-tottori" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">鳥取県</h4>
                        <SelectPrefCities prefJaName="鳥取県" />
                    </li>
                    <li id="pref-shimane" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">島根県</h4>
                        <SelectPrefCities prefJaName="島根県" />
                    </li>
                    <li id="pref-okayama" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">岡山県</h4>
                        <SelectPrefCities prefJaName="岡山県" />
                    </li>
                    <li id="pref-hiroshima" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">広島県</h4>
                        <SelectPrefCities prefJaName="広島県" />
                    </li>
                    <li id="pref-yamaguchi" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">山口県</h4>
                        <SelectPrefCities prefJaName="山口県" />
                    </li>
                </ul>
            </div>

            {/* 四国地方 */}
            <div className="mb-[2.5em] bg-[#3786c7] rounded p-4 h-full" id="area-shikoku">
                <h3 className="font-bold text-lg mb-4 text-white">四国地方</h3>
                <ul className="space-y-4">
                    <li id="pref-tokushima" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">徳島県</h4>
                        <SelectPrefCities prefJaName="徳島県" />
                    </li>
                    <li id="pref-kagawa" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">香川県</h4>
                        <SelectPrefCities prefJaName="香川県" />
                    </li>
                    <li id="pref-ehime" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">愛媛県</h4>
                        <SelectPrefCities prefJaName="愛媛県" />
                    </li>
                    <li id="pref-kouchi" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">高知県</h4>
                        <SelectPrefCities prefJaName="高知県" />
                    </li>
                </ul>
            </div>

            {/* 九州地方 */}
            <div className="mb-[2.5em] bg-[#ea5632] rounded p-4 h-full" id="area-kyushu">
                <h3 className="font-bold text-lg mb-4 text-white">九州地方</h3>
                <ul className="space-y-4">
                    <li id="pref-fukuoka" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">福岡県</h4>
                        <SelectPrefCities prefJaName="福岡県" />
                    </li>
                    <li id="pref-saga" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">佐賀県</h4>
                        <SelectPrefCities prefJaName="佐賀県" />
                    </li>
                    <li id="pref-nagasaki" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">長崎県</h4>
                        <SelectPrefCities prefJaName="長崎県" />
                    </li>
                    <li id="pref-kumamoto" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">熊本県</h4>
                        <SelectPrefCities prefJaName="熊本県" />
                    </li>
                    <li id="pref-ooita" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">大分県</h4>
                        <SelectPrefCities prefJaName="大分県" />
                    </li>
                    <li id="pref-miyazaki" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">宮崎県</h4>
                        <SelectPrefCities prefJaName="宮崎県" />
                    </li>
                    <li id="pref-kagoshima" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">鹿児島県</h4>
                        <SelectPrefCities prefJaName="鹿児島県" />
                    </li>
                </ul>
            </div>

            {/* 沖縄地方 */}
            <div className="mb-[2.5em] bg-[#ea3278] rounded p-4 h-full" id="area-okinawa">
                <h3 className="font-bold text-lg mb-4 text-white">沖縄地方</h3>
                <ul className="space-y-4">
                    <li id="pref-okinawa" className="bg-white rounded p-4">
                        <h4 className="font-bold border-b pb-2 mb-2 text-gray-800">沖縄県</h4>
                        <SelectPrefCities prefJaName="沖縄県" />
                    </li>
                </ul>
            </div>
        </section>
    );
});
