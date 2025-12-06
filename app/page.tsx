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
            人と都市とテクノロジーをつなぐ
            <br className="hidden sm:block" />
            スマートシティ戦略パートナー
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600">
            Smart City AI LLC は、都市計画・スマートシティ・AI/データ活用の知見を組み合わせ、
            日本と世界の都市・企業・クリエイターを支援するブティック型コンサルティングファームです。
          </p>
          <p className="mt-4 text-sm text-zinc-500">
            ※ 本サイトは現在準備中です。順次コンテンツを追加していきます。
          </p>
        </header>

        {/* ３つの特徴セクション（簡易カード） */}
        <section className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
            <h2 className="text-sm font-semibold text-zinc-900">
              スマートシティ & 都市戦略
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-zinc-600">
              公共セクターでの実務経験と国際プロジェクトの知見を活かし、
              都市戦略・エリアマネジメント・スマートシティ構想の策定を支援します。
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
            <h2 className="text-sm font-semibold text-zinc-900">
              AI・データ活用の実装支援
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-zinc-600">
              機械学習・自然言語処理・生成AIを活用し、
              中小企業やクリエイターの業務改善・サービス開発を共創します。
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
            <h2 className="text-sm font-semibold text-zinc-900">
              国際連携 & リモートワーク
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-zinc-600">
              日本・欧州・北米など、異なる制度や文化をまたぐプロジェクトでの
              連携・コミュニケーションをサポートします。
            </p>
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
