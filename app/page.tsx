export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-16">
        {/* ヒーローセクション（トップの大きな見出し） */}
        <header className="mb-12 border-b border-zinc-200 pb-8">
          <p className="text-xs font-semibold tracking-[0.25em] text-emerald-600 uppercase">
            SMART CITY AI LLC
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            AIで、人と都市の未来をデザインする
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600">
            AIとデジタルの力で、人と街の可能性を広げる未来を描きます。
            <br className="hidden sm:block" />
            都市課題の解決から新しいサービスづくりまで、前進させるパートナーです。
          </p>
          <p className="mt-4 text-xs text-zinc-500">
            ※ 本サイトは現在準備中です。順次コンテンツを追加していきます。
          </p>
        </header>

        {/* ３つの特徴セクション（Wordの内容に対応） */}
        <section className="grid gap-6 md:grid-cols-3">
          {/* ① スマートシティ & 都市戦略 */}
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
            <h2 className="text-sm font-semibold text-zinc-900">
              スマートシティ & 都市戦略
            </h2>
            <p className="mt-2 text-[11px] font-semibold text-emerald-700">
              → 都市をアップグレードする AI・デジタル戦略設計
            </p>
            <ul className="mt-3 space-y-1 text-xs leading-relaxed text-zinc-600">
              <li>・AI・データを活用した都市計画支援</li>
              <li>・エリアマネジメントのデータ分析</li>
              <li>・スマートシティ基盤の企画・設計</li>
            </ul>
          </div>

          {/* ② AI・データ活用の実装支援 */}
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
            <h2 className="text-sm font-semibold text-zinc-900">
              AI・データ活用の実装支援
            </h2>
            <p className="mt-2 text-[11px] font-semibold text-emerald-700">
              → AIを“使える価値”に変える。
            </p>
            <ul className="mt-3 space-y-1 text-xs leading-relaxed text-zinc-600">
              <li>・AI活用戦略の策定（何にAIを使うべきか）</li>
              <li>・業務改善のAI利用コンサルティング</li>
              <li>・PoC（試行導入）支援・効果検証</li>
              <li>・AIリテラシー教育・研修</li>
            </ul>
          </div>

          {/* ③ AI・ITソリューション開発 & プロジェクト推進 */}
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
            <h2 className="text-sm font-semibold text-zinc-900">
              AI・ITソリューション開発 & プロジェクト推進
            </h2>
            <p className="mt-2 text-[11px] font-semibold text-emerald-700">
              → AI・ITを“動くシステム”として構築し、プロジェクトを完遂する。
            </p>
            <ul className="mt-3 space-y-1 text-xs leading-relaxed text-zinc-600">
              <li>・AIシステム・アプリケーションの開発</li>
              <li>・IoT・センサー・ロボット連携システム構築</li>
              <li>・既存ITシステムの運用・保守・最適化</li>
              <li>・プロジェクトマネジメント・導入支援</li>
            </ul>
          </div>
        </section>

        {/* フッター */}
        <footer className="mt-auto pt-12 text-xs text-zinc-400">
          © 2025 Smart City AI LLC. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
