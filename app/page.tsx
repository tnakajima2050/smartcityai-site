import Image from 'next/image'; // Next.jsで画像を扱うためにインポート

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-16">

        {/* ヒーローセクション（トップの大きな見出し） */}
        <header className="mb-16 border-b border-zinc-200 pb-8">
          
          {/* 1. ロゴの配置 */}
          <div className="flex items-center space-x-3">
            {/* 画像の幅と高さを指定し、Tailwindで調整。ここでは幅120px、高さ40pxを想定 */}
            <Image 
              src="/logo.png" // ロゴ完成版.pngのパスを仮に/logo.pngと設定
              alt="Smart City AI LLC ロゴ"
              width={120} 
              height={40} 
              className="h-auto w-24 sm:w-32" 
              priority
            />
            <p className="text-xs font-semibold tracking-[0.25em] text-zinc-600 uppercase">
              Smart City AI LLC
            </p>
          </div>

          {/* 2. メインコピーの変更 */}
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl text-blue-800">
            日本の企業に「AIの力」を。
            <br className="hidden sm:block" />
            生産性革命とスマートシティの未来を創る。
          </h1>
          
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-700">
            専確かな技術とデータ分析に基づき、御社の業務に合わせた最適なAIソリューションを低コスト・スモールスタートで実現します。
          </p>

          {/* 3. CTAボタンの追加 */}
          <div className="mt-6">
            <a 
              href="mailto:contact@smartcityai.co.jp" // メールアドレスをここに設定
              className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              AI導入の無料相談を予約する &rarr;
            </a>
          </div>

          <p className="mt-6 text-xs text-zinc-500">
             メールアドレスのみでお気軽にご相談ください。
          </p>

        </header>

        {/* 3. ３つの重要点セクション（新しい内容に対応） */}
        <section className="grid gap-8 md:grid-cols-3">
          
          {/* ① 業務に合わせたAI導入のご提案 */}
          <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-lg transition hover:shadow-xl">
            <h2 className="text-lg font-bold text-blue-800">
              🎯 業務に合わせた最適なAI導入のご提案
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              経験豊富なデータサイエンティストが、まず御社のデータを徹底解析。既製品ではない、真に生産性を最大化するためのAI戦略をコンサルティングから設計までトータルで行います。
            </p>
          </div>

          {/* ② 小さく始めるAI活用の設計・実装 */}
          <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-lg transition hover:shadow-xl">
            <h2 className="text-lg font-bold text-blue-800">
              ✨ 低リスクで確実。小さく始める設計・実装
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              高額な初期投資は不要です。最小限のデータとコストでPoC（実証実験）から開始し、成果が確認できた段階でスケールアップ。リスクを抑え、確実な成果を目指します。
            </p>
          </div>

          {/* ③ 低コストで始められるAI導入サポート */}
          <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-lg transition hover:shadow-xl">
            <h2 className="text-lg font-bold text-blue-800">
              💰 費用対効果を最大化する低コストサポート
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              補助金活用支援まども含め、御社の予算に合わせた柔軟な導入モデルを提案。無料のインフラ技術も活用し、運用コストの低減を追求します。
            </p>
          </div>
        </section>

        {/* フッター */}
        <footer className="mt-auto pt-16 text-xs text-zinc-400 text-center">
          © 2025 Smart City AI LLC. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
