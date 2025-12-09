'use client'; // インタラクティブな機能（モーダル、FAQ）を使うために必須

import { useState } from 'react';
import Image from 'next/image';

// ▼ データ定義：6つの活用事例
const useCases = [
  {
    id: 1,
    icon: "✍️",
    title: "定型文書の自動化",
    target: "士業・事務",
    desc: "報告書、契約書、議事録のドラフトを数秒で自動作成。",
    detail: "【仕組み】過去の書類データとひな形をAIに学習させ、キーワードを入力するだけでドラフトが完成します。行政書士や税理士事務所での導入実績があり、書類作成時間を平均70%削減しました。"
  },
  {
    id: 2,
    icon: "📦",
    title: "在庫・物流の自動チェック",
    target: "物流・製造・小売",
    desc: "カメラ映像解析で在庫数や検品作業を自動化。",
    detail: "【仕組み】倉庫内のカメラ映像をAIがリアルタイム解析。バーコードを読み取る手間なく、製品の数をカウントしたり、ラベルの貼り間違いなどの異常を検知します。"
  },
  {
    id: 3,
    icon: "📞",
    title: "高度な顧客対応の自動化",
    target: "営業・CS",
    desc: "NLP技術で電話やメールの一次対応を24時間自動化。",
    detail: "【仕組み】顧客からの電話音声をテキスト化し、社内データベース（FAQやマニュアル）から最適な回答をAIが生成・回答します。夜間休日の機会損失を防ぎます。"
  },
  {
    id: 4,
    icon: "🚨",
    title: "設備故障の予知・検知",
    target: "製造・ビル管理",
    desc: "異音や振動データから故障の予兆を察知。",
    detail: "【仕組み】熟練工が「音」で判断していた異常をAIが数値化。故障してラインが止まる前に部品交換のアラートを出し、ダウンタイムを最小限に抑えます。"
  },
  {
    id: 5,
    icon: "🧾",
    title: "経理・仕訳業務の自動化",
    target: "経理・総務",
    desc: "領収書読み取りと勘定科目の自動仕訳。",
    detail: "【仕組み】OCR（文字認識）とAI推論を組み合わせ、バラバラのフォーマットの請求書やレシートを読み取り、会計ソフトへ自動入力します。月末の残業をゼロにします。"
  },
  {
    id: 6,
    icon: "🔎",
    title: "社内ナレッジのAI検索",
    target: "全業種",
    desc: "社内のバラバラな資料を統合し、対話形式で検索。",
    detail: "【仕組み】社内版ChatGPTのような環境を構築します。PDF、Word、Excelなどの社内規定や技術資料をAIに読み込ませ、「〇〇の規定はどうなってる？」と聞くだけで即座に回答が得られます。"
  }
];

// ▼ データ定義：よくある質問
const faqs = [
  {
    q: "AIの知識が全くなくても大丈夫ですか？",
    a: "はい、全く問題ありません。技術的なことは全て弊社が担当します。お客様は「どんな業務を楽にしたいか」という課題だけお話しください。"
  },
  {
    q: "費用はどのくらいかかりますか？",
    a: "スモールスタートを推奨しているため、数十万円からのPoC（実証実験）プランもご用意しています。また、IT導入補助金などの活用支援も行っています。"
  },
  {
    q: "既存のシステムと連携できますか？",
    a: "はい、可能です。kintone、Salesforce、社内データベースなど、現在お使いのシステムにAI機能をアドオンする形での開発を得意としています。"
  },
  {
    q: "開発期間はどのくらいですか？",
    a: "簡易的なプロトタイプであれば最短2週間〜1ヶ月でご提示可能です。まずは効果が出るかを確認してから、本開発に進むことができます。"
  }
];

export default function Home() {
  // モーダルとFAQの状態管理
  const [selectedCase, setSelectedCase] = useState<typeof useCases[0] | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-16">

        {/* --------------------------------------------------------- */}
        {/* 1. ヒーローセクション：信頼と期待感の醸成 */}
        {/* --------------------------------------------------------- */}
        <header className="mb-20 border-b border-zinc-200 pb-12">
          {/* ロゴ */}
          <div className="flex items-center space-x-3 mb-8">
            <Image 
              src="/logo.png" 
              alt="Smart City AI LLC ロゴ"
              width={160} 
              height={50} 
              className="h-auto w-24 sm:w-32" 
              priority
            />
            <p className="text-sm font-bold tracking-[0.1em] text-zinc-900 uppercase">
              Smart City AI LLC
            </p>
          </div>

          {/* メインコピー */}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-blue-900 leading-tight">
            日本の企業に「AIの力」を。<br />
            <span className="text-emerald-600">生産性革命</span>で未来を創る。
          </h1>
          
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-700">
            「AIを使いたいが、何から始めればいいかわからない」<br />
            そんな経営者様の悩みを、確かな技術とスモールスタート戦略で解決します。
            高額な投資は不要。まずは成果が出るか、小さな実験から始めましょう。
          </p>

          {/* CTAボタン */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a 
              href="mailto:tetsuya.nakajima@smartcityai.co.jp"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-8 py-4 text-base font-bold text-white shadow-xl transition hover:bg-emerald-700 hover:-translate-y-0.5"
            >
              まずは無料相談で可能性を探る &rarr;
            </a>
            <p className="text-xs text-zinc-500 mt-2 sm:mt-0 sm:ml-4 flex items-center">
              ※ 無理な営業は一切いたしません。<br className="sm:hidden"/>メール一本でお気軽にご連絡ください。
            </p>
          </div>
        </header>


        {/* --------------------------------------------------------- */}
        {/* 2. 3つの強み：他社との違いを明確化 */}
        {/* --------------------------------------------------------- */}
        <section className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest">Why Us</h2>
            <h3 className="text-2xl font-bold text-blue-900 mt-2">Smart City AIが選ばれる3つの理由</h3>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* ① */}
            <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-2xl mb-4">🎯</div>
              <h3 className="font-bold text-lg text-blue-900 mb-2">御社専用のオーダーメイド</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                パッケージ製品の押し売りはしません。御社の業務フローを徹底的にヒアリングし、本当に必要な機能だけを設計・開発します。
              </p>
            </div>
            {/* ② */}
            <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-2xl mb-4">✨</div>
              <h3 className="font-bold text-lg text-blue-900 mb-2">リスク最小限のPoC開発</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                いきなり数百万円は使いません。まずは最小限のコストで試作版（PoC）を作り、効果を確認してから本格導入へ進みます。
              </p>
            </div>
            {/* ③ */}
            <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-2xl mb-4">💰</div>
              <h3 className="font-bold text-lg text-blue-900 mb-2">補助金活用で低コスト</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                IT導入補助金などの公的支援の活用もサポート。最新技術を、中小企業様でも導入しやすい現実的な価格で提供します。
              </p>
            </div>
          </div>
        </section>


        {/* --------------------------------------------------------- */}
        {/* 3. プロセス：導入の流れ（不安の払拭）★NEW★ */}
        {/* --------------------------------------------------------- */}
        <section className="mb-24 bg-blue-50/50 -mx-6 px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest">Process</h2>
              <h3 className="text-2xl font-bold text-blue-900 mt-2">ご相談から導入までの流れ</h3>
              <p className="text-sm text-zinc-600 mt-2">丸投げでOK。技術的なことは全て私たちにお任せください。</p>
            </div>

            <div className="grid gap-4 md:grid-cols-4 relative">
              {[
                { step: "01", title: "ヒアリング", desc: "現状の業務課題や、「こうなったらいいな」という理想をお聞かせください。" },
                { step: "02", title: "ご提案・PoC", desc: "解決策をご提案。必要に応じて試作版（PoC）を作成し、効果を検証します。" },
                { step: "03", title: "本開発・実装", desc: "検証結果に基づき、実際の業務で使えるシステムを開発・導入します。" },
                { step: "04", title: "運用・サポート", desc: "導入後の改善や、使い方のサポートも継続的に行います。" },
              ].map((item, i) => (
                <div key={i} className="relative bg-white p-5 rounded-lg border border-blue-100 shadow-sm">
                  <span className="text-4xl font-black text-blue-100 absolute top-2 right-4">{item.step}</span>
                  <h4 className="font-bold text-blue-900 relative z-10">{item.title}</h4>
                  <p className="text-xs text-zinc-600 mt-2 relative z-10 leading-5">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* --------------------------------------------------------- */}
        {/* 4. 6つの活用事例：クリックで詳細表示 ★NEW★ */}
        {/* --------------------------------------------------------- */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest">Solutions</h2>
            <h3 className="text-2xl font-bold text-blue-900 mt-2">AI導入で解決できる 6つの業務課題</h3>
            <p className="mt-3 text-zinc-600">
              御社の課題に近いものをクリックしてください。<br className="md:hidden"/>具体的な解決策が表示されます。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => (
              <button 
                key={item.id}
                onClick={() => setSelectedCase(item)}
                className="group text-left bg-white p-6 rounded-xl border border-zinc-200 hover:border-blue-400 hover:shadow-lg transition duration-200 flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-4xl">{item.icon}</span>
                  <span className="text-xs font-semibold bg-zinc-100 text-zinc-600 px-2 py-1 rounded">
                    {item.target}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-zinc-900 group-hover:text-blue-700 transition">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-500 mt-2 flex-grow">
                  {item.desc}
                </p>
                <div className="mt-4 text-sm font-bold text-blue-600 flex items-center">
                  詳細を見る <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </button>
            ))}
          </div>
        </section>


        {/* --------------------------------------------------------- */}
        {/* 5. FAQ：反論処理と疑問解消 ★NEW★ */}
        {/* --------------------------------------------------------- */}
        <section className="mb-24 max-w-3xl mx-auto w-full">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-blue-900">よくあるご質問</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-zinc-200 rounded-lg bg-white overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-5 text-left bg-zinc-50 hover:bg-zinc-100 transition"
                >
                  <span className="font-bold text-zinc-800 text-sm md:text-base">Q. {faq.q}</span>
                  <span className={`transform transition-transform duration-200 text-blue-600 font-bold ${openFaqIndex === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openFaqIndex === index && (
                  <div className="p-5 border-t border-zinc-200 bg-white">
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      <span className="font-bold text-emerald-600 mr-2">A.</span>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>


        {/* --------------------------------------------------------- */}
        {/* 6. 会社情報・メッセージ：顔の見える信頼感 ★NEW★ */}
        {/* --------------------------------------------------------- */}
        <section className="mb-20 bg-zinc-900 text-zinc-300 rounded-2xl p-8 md:p-12 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-4">日本の生産性を、AIで底上げする。</h3>
              <p className="leading-relaxed mb-6 text-sm md:text-base">
                AIは一部の大企業だけのものではありません。むしろ、人手不足に悩む中小企業にこそ、その恩恵が必要です。<br/><br/>
                私たちは、最新の技術を「誰にでも使える形」にして提供し、御社の頼れるデジタルパートナーとして伴走します。まずは小さく、未来への一歩を踏み出しましょう。
              </p>
              <div className="font-bold text-white">
                Smart City AI LLC <span className="font-normal text-zinc-400 text-sm ml-2">代表</span>
              </div>
            </div>
            {/* 写真を入れる場合はここにImageタグを追加。今はロゴかプレースホルダー */}
            <div className="w-24 h-24 md:w-32 md:h-32 bg-zinc-800 rounded-full flex items-center justify-center border-2 border-zinc-700">
               <span className="text-4xl">🤝</span>
            </div>
          </div>
        </section>


        {/* --------------------------------------------------------- */}
        {/* フッター：詳細版 */}
        {/* --------------------------------------------------------- */}
        <footer className="mt-auto border-t border-zinc-200 pt-10 pb-6 text-zinc-600">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900 mb-3">
                Smart City AI LLC
              </h3>
              <p className="text-xs leading-5">
                横浜を拠点に、日本全国の中小企業の<br />AI導入・DX推進をサポートしています。
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900 mb-3">
                Menu
              </h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-600">ホーム</a></li>
                <li><a href="mailto:tetsuya.nakajima@smartcityai.co.jp" className="hover:text-blue-600">無料相談・お問い合わせ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900 mb-3">
                Contact
              </h3>
              <p className="text-sm mb-2">
                <span className="font-bold">Email:</span><br/>
                <a href="mailto:tetsuya.nakajima@smartcityai.co.jp" className="text-blue-600 hover:underline">
                  tetsuya.nakajima@smartcityai.co.jp
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-zinc-200 pt-6 text-center text-xs text-zinc-500">
            © 2025 Smart City AI LLC. All rights reserved.
          </div>
        </footer>

      </div>

      {/* --------------------------------------------------------- */}
      {/* モーダル（ポップアップ）実装 */}
      {/* --------------------------------------------------------- */}
      {selectedCase && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedCase(null)} // 背景クリックで閉じる
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden relative animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()} // 中身クリックでは閉じない
          >
            {/* ヘッダー */}
            <div className="bg-blue-50 p-6 border-b border-blue-100 flex justify-between items-start">
              <div className="flex items-center gap-4">
                <span className="text-5xl">{selectedCase.icon}</span>
                <div>
                  <span className="text-xs font-bold bg-blue-600 text-white px-2 py-1 rounded">
                    {selectedCase.target} 向け
                  </span>
                  <h3 className="text-2xl font-bold text-blue-900 mt-2">
                    {selectedCase.title}
                  </h3>
                </div>
              </div>
              <button 
                onClick={() => setSelectedCase(null)}
                className="text-zinc-400 hover:text-zinc-600 bg-white rounded-full p-1 hover:bg-zinc-100 transition"
              >
                ✕
              </button>
            </div>

            {/* コンテンツ */}
            <div className="p-8">
              <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-2">課題と解決</h4>
              <p className="text-lg text-zinc-700 mb-6 font-medium">
                {selectedCase.desc}
              </p>

              <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-200">
                <h4 className="text-sm font-bold text-emerald-600 uppercase tracking-wider mb-3 flex items-center">
                  <span className="mr-2 text-lg">💡</span> 具体的な仕組み・効果
                </h4>
                <p className="text-sm text-zinc-600 leading-relaxed whitespace-pre-line">
                  {selectedCase.detail}
                </p>
              </div>

              <div className="mt-8 text-center">
                <a 
                  href={`mailto:tetsuya.nakajima@smartcityai.co.jp?subject=【${selectedCase.title}】について相談したい`}
                  className="inline-block w-full sm:w-auto bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition shadow-lg"
                >
                  この事例について相談する
                </a>
                <p className="text-xs text-zinc-400 mt-3">
                  メールソフトが起動します
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
