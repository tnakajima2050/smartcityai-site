'use client';

import { useState } from 'react';
import Image from 'next/image';

// ------------------------------------------------------------------
// ▼ データ定義：6つの活用事例 (メモ帳から100%完全コピー)
// ------------------------------------------------------------------
const useCases = [
  {
    id: 1,
    icon: "✍️",
    title: "１．定型文書の自動化",
    target: "士業・事務",
    desc: "作成時間を90%以上削減。1時間かかっていた『手入力・転記』業務が、わずか5分で完結します。",
    detail: "MITの研究で実証された生成AI技術を活用。「ゼロから考える時間」をなくし、入力と転記に特化させることで、作成業務を自動化します。",
    benefit: (
      <>
        生成AIにより文書作成時間を<span className="font-bold border-b border-emerald-500/50">40%短縮</span><span className="text-[10px] align-top font-bold text-emerald-700">(※1)</span>し、本システムの活用で最大<span className="font-bold border-b border-emerald-500/50">90%の工数削減</span><span className="text-[10px] align-top font-bold text-emerald-700">(※2)</span>を実現します。
        <span className="block mt-3 pt-2 border-t border-emerald-200/50 text-[10px] text-emerald-800/70 font-normal leading-snug">
          ※1 Noy, S., & Zhang, W. (2023). Science. ※2 [当社試算] 従来60分（リサーチ15分＋手入力30分＋整合性確認15分）の業務を、AIにより5分（条件指定3分＋確認2分）に短縮した場合。
        </span>
      </>
    ),
    visual: (
      <div className="h-full bg-slate-50 flex flex-col rounded-lg border border-zinc-200 p-4 font-sans relative overflow-hidden">
        <div className="text-center font-bold text-zinc-800 mb-6 md:mb-12 z-10 relative md:text-xl">劇的ビフォーアフター</div>
        <div className="flex-grow flex items-center justify-around relative z-10 px-2 pb-4">
          <div className="flex flex-col items-center group relative w-1/3">
            <div className="text-xs md:text-base font-bold text-red-500 mb-2 bg-red-50 px-2 py-0.5 rounded-full border border-red-100">Before (60分)</div>
            <div className="relative w-24 h-32 md:w-48 md:h-64 flex items-center justify-center mt-2">
               <div className="absolute w-20 h-28 md:w-40 md:h-56 bg-white border border-zinc-300 shadow-sm transform -rotate-12 translate-x-2 translate-y-2 z-0"></div>
               <div className="absolute w-20 h-28 md:w-40 md:h-56 bg-red-50 border-2 border-red-400 shadow-lg transform rotate-2 z-30 flex flex-col items-center justify-center p-1">
                  <div className="text-3xl md:text-6xl mb-1 md:mb-4 filter drop-shadow-md">😫</div>
                  <div className="text-[9px] md:text-sm font-bold text-red-600 leading-tight text-center">手入力<br/>転記地獄</div>
               </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center z-40">
            <div className="text-3xl md:text-6xl text-zinc-300 animate-pulse">▶▶</div>
            <div className="font-black text-xl md:text-4xl text-white bg-gradient-to-r from-red-500 to-emerald-500 px-3 py-1 rounded-lg shadow-xl animate-bounce">-90%</div>
          </div>
          <div className="flex flex-col items-center group relative w-1/3">
            <div className="text-xs md:text-base font-bold text-emerald-600 mb-2 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">After (5分)</div>
            <div className="relative w-24 h-32 md:w-48 md:h-64 flex items-center justify-center mt-2">
               <div className="w-20 h-28 md:w-40 md:h-56 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-xl shadow-lg flex flex-col items-center justify-center text-white p-2 z-30 relative overflow-hidden">
                  <div className="text-4xl md:text-7xl mb-2">✨</div>
                  <div className="text-[10px] md:text-sm font-bold text-center leading-tight">AI<br/>自動生成</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    icon: "📦",
    title: "２．在庫・物流の自動チェック",
    target: "物流・製造・小売",
    desc: "カメラ映像やRFID解析で在庫管理を自動化。ヒューマンエラーを劇的に削減します。",
    detail: "倉庫内のカメラ映像やRFID（ICタグ）をAIが解析。製品の数をカウントしたり、異常を検知します。",
    benefit: (
      <>
        人による数え間違いを<span className="font-bold border-b border-emerald-500/50">37%から5%</span>(※1)に減らし、売上を最大<span className="font-bold border-b border-emerald-500/50">5.5%</span>(※2)向上させます。
        <span className="block mt-3 pt-2 border-t border-emerald-200/50 text-[10px] text-emerald-800/70 font-normal leading-snug">
          ※1 Auburn University RFID Lab. ※2 ECR Retail Loss Group.
        </span>
      </>
    ),
    visual: (
      <div className="h-full bg-black rounded-lg overflow-hidden relative">
        <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" alt="Warehouse" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 p-4 font-mono text-xs text-emerald-400">
           <div className="flex justify-between"><div className="bg-black/70 px-2 py-1 border border-emerald-500/50">CAM-04</div><div className="animate-pulse">● REC</div></div>
           <div className="absolute top-[20%] left-[10%] w-[15%] h-[20%] border-2 border-emerald-400 bg-emerald-400/10 p-1 flex justify-between items-start">
             <span className="bg-emerald-600 text-white text-[9px] px-1">BOX #4021</span>
             <span>99%</span>
           </div>
        </div>
      </div>
    )
  },
  { id: 3, icon: "📞", title: "３．高度な顧客対応の自動化", target: "営業・CS", desc: "NLP技術で電話やメールの一次対応を自動化。", detail: "顧客からの電話音声をテキスト化し、最適な回答をAIが生成します。", benefit: "24時間365日の対応が可能になり、夜間休日の機会損失を防ぎます。", visual: <div className="h-full bg-slate-100 p-4 flex items-center justify-center text-slate-400 italic">Customer Support UI Visual</div> },
  { id: 4, icon: "🚨", title: "４．設備故障の予知・検知", target: "製造・ビル管理", desc: "異音や振動データから故障の予兆を察知。", detail: "熟練工が「音」で判断していた異常をAIが数値化。ラインが止まる前にアラートを出します。", benefit: "予備保全により、計画的なメンテナンスを実現します。", visual: <div className="h-full bg-zinc-900 p-4 flex items-center justify-center text-emerald-500 font-mono">Sensory Analysis System</div> },
  { id: 5, icon: "🧾", title: "５．経理・仕訳業務の自動化", target: "経理・総務", desc: "領収書読み取りと勘定科目の自動仕訳。", detail: "OCRとAIを組み合わせ、会計ソフトへの入力を自動化します。", benefit: "月末の経理負担を劇的に軽減します。", visual: <div className="h-full bg-slate-50 p-4 flex items-center justify-center text-blue-500 font-bold">Accounting Automation View</div> },
  { id: 6, icon: "🔎", title: "６．社内ナレッジのAI検索", target: "全業種", desc: "社内のバラバラな資料を統合し、対話形式で検索。", detail: "社内版ChatGPTのような環境を構築。質問するだけでマニュアルから回答が得られます。", benefit: "探し物の時間をゼロにします。", visual: <div className="h-full bg-white p-4 flex items-center justify-center text-slate-300">Knowledge Search Interface</div> }
];

const faqs = [
  { q: "AIの知識が全くなくても大丈夫ですか？", answer: "はい、全く問題ありません。専門知識は一切不要です。", detail: "技術的な選定、開発、運用はすべて弊社が担当します。" },
  { q: "費用はどのくらいかかりますか？", answer: "スモールスタートを推奨しており、数十万円からのプランもございます。", detail: "IT導入補助金などの公的支援について、申請支援も行います。" },
  { q: "既存のシステムと連携できますか？", answer: "はい、可能です。現在お使いのシステムと柔軟に連携します。", detail: "kintone、Salesforce、LINEなど既存のツールを活かせます。" },
  { q: "開発期間はどのくらいですか？", answer: "最短2週間〜1ヶ月程度でプロトタイプをご提示可能です。", detail: "早期に動くものを触っていただき、フィードバックを反映させます。" }
];

// ------------------------------------------------------------------
// ▼ メインコンポーネント
// ------------------------------------------------------------------
export default function CombinedPage() {
  const [lang, setLang] = useState('jp');
  const [selectedCase, setSelectedCase] = useState<any>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <div className="relative">
      {/* 言語切り替えボタン：画面の右上に固定 */}
      <div className="fixed top-5 right-5 z-[9999]">
        <button 
          onClick={() => setLang(lang === 'jp' ? 'en' : 'jp')}
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full shadow-2xl hover:bg-blue-700 transition transform hover:scale-105 border-2 border-white"
        >
          {lang === 'jp' ? 'English (Palantir Specialized)' : '日本語サイトへ戻る'}
        </button>
      </div>

      {lang === 'jp' ? (
        /* ========================================================= */
        /* 【日本語サイト：100%完全復元版】 */
        /* ========================================================= */
        <main className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
          <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-16">
            
            {/* 1. ヒーローセクション */}
            <header className="mb-20 border-b border-zinc-200 pb-12">
              <div className="flex items-center space-x-3 mb-8">
                <Image src="/logo.png" alt="Smart City AI LLC ロゴ" width={160} height={50} className="h-auto w-24 sm:w-32" priority />
                <p className="text-sm font-bold tracking-[0.1em] text-zinc-900 uppercase">Smart City AI LLC</p>
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-blue-900 leading-tight">
                日本の企業に「AIの力」を <br />
                <span className="text-emerald-600">生産性革命</span>で未来を創る
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-700">
                「AIを使いたいが、何から始めればいいかわからない」経営者様の悩みを解決します。<br />
                高額な投資は不要。まずは成果が出るか、小さな実験から始めましょう。
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button onClick={() => setIsCalendarOpen(true)} className="rounded-lg bg-emerald-600 px-8 py-4 text-white font-bold shadow-xl transition hover:bg-emerald-700">まずは無料相談で可能性を探る →</button>
                <p className="text-sm text-zinc-600 flex items-center font-medium">メール一本でお気軽にご連絡ください。</p>
              </div>
            </header>

            {/* 2. 3つの強み */}
            <section className="mb-24">
              <div className="text-center mb-10"><h2 className="text-sm font-bold text-emerald-600 uppercase">Why Us</h2><h3 className="text-2xl font-bold text-blue-900 mt-2">Smart City AIが選ばれる3つの理由</h3></div>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition">
                  <div className="text-2xl mb-4">🎯</div><h3 className="font-bold text-lg text-blue-900 mb-2">１.御社専用のオーダーメイド</h3><p className="text-sm text-zinc-600">ヒアリングし、本当に必要な機能だけを設計・開発します。</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition">
                  <div className="text-2xl mb-4">✨</div><h3 className="font-bold text-lg text-blue-900 mb-2">２.リスク最小限のPoC開発</h3><p className="text-sm text-zinc-600">まずは最小限のコストで試作版を作り、効果を確認します。</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition">
                  <div className="text-2xl mb-4">💰</div><h3 className="font-bold text-lg text-blue-900 mb-2">３.コスト効率の良いIT導入</h3><p className="text-sm text-zinc-600">補助金などの公的支援を診断し、現実的な価格で提供します。</p>
                </div>
              </div>
            </section>

            {/* 3. 導入の流れ (矢印入り) */}
            <section className="mb-24 bg-blue-50/50 -mx-6 px-6 py-16">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12"><h2 className="text-sm font-bold text-blue-600 uppercase">Process</h2><h3 className="text-2xl font-bold text-blue-900 mt-2">ご相談から導入までの流れ</h3></div>
                <div className="grid gap-16 md:grid-cols-4 md:gap-8 relative">
                  {[
                    { s: "01", t: "ヒアリング", d: "現状の業務課題や理想をお聞かせください。" },
                    { s: "02", t: "ご提案・PoC", d: "解決策をご提案。試作版で効果を検証します。" },
                    { s: "03", t: "本開発・実装", d: "実際の業務で使えるシステムを開発・導入します。" },
                    { s: "04", t: "運用・サポート", d: "導入後の改善や、使い方のサポートも継続します。" },
                  ].map((item, i) => (
                    <div key={i} className="relative bg-white p-5 rounded-lg border border-blue-100 shadow-sm">
                      <span className="text-4xl font-black text-blue-100 absolute top-2 right-4">{item.s}</span>
                      <h4 className="font-bold text-blue-900 relative z-10">{item.t}</h4>
                      <p className="text-xs text-zinc-600 mt-2 relative z-10">{item.d}</p>
                      {i < 3 && (
                        <div className="hidden md:flex absolute top-1/2 -right-10 transform -translate-y-1/2 text-blue-300">
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9h11V4l8 8-8 8v-5H3V9z" /></svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 4. 6つの活用事例 */}
            <section className="mb-24">
              <div className="text-center mb-12"><h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest">Solutions</h2><h3 className="text-2xl font-bold text-blue-900 mt-2">AI導入で解決できる 6つの業務課題</h3></div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {useCases.map((item) => (
                  <button key={item.id} onClick={() => setSelectedCase(item)} className="group text-left bg-white p-6 rounded-xl border border-zinc-200 hover:border-blue-400 hover:shadow-lg transition flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4"><span className="text-4xl">{item.icon}</span><span className="text-xs font-semibold bg-zinc-100 px-2 py-1 rounded">{item.target}</span></div>
                    <h3 className="text-lg font-bold text-zinc-900 group-hover:text-blue-700 transition">{item.title}</h3>
                    <p className="text-sm text-zinc-500 mt-2 flex-grow">{item.desc}</p>
                    <div className="mt-4 text-sm font-bold text-blue-600 flex items-center">仕組み・デモ画面を見る →</div>
                  </button>
                ))}
              </div>
            </section>

            {/* 5. FAQ */}
            <section className="mb-24 max-w-3xl mx-auto w-full">
              <h2 className="text-2xl font-bold text-blue-900 text-center mb-10">よくあるご質問</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-zinc-200 rounded-lg bg-white overflow-hidden shadow-sm">
                    <button onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)} className="w-full flex justify-between p-5 text-left bg-zinc-50 hover:bg-zinc-100 transition">
                      <span className="font-bold text-zinc-800 text-sm">Q. {faq.q}</span>
                      <span className={`transform transition-transform ${openFaqIndex === index ? 'rotate-180' : ''}`}>▼</span>
                    </button>
                    {openFaqIndex === index && (
                      <div className="p-6 border-t border-zinc-200 bg-white">
                        <p className="text-base font-bold text-emerald-700 mb-4">A. {faq.answer}</p>
                        <p className="text-sm text-zinc-600 leading-relaxed">{faq.detail}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* 6. メッセージ & フッター */}
            <section className="mb-20 bg-zinc-900 text-zinc-300 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1"><h3 className="text-2xl font-bold text-white mb-4">日本の生産性を、AIで底上げする。</h3><p className="text-sm leading-relaxed mb-6">AIは人手不足に悩む企業にこそ、その恩恵が必要です。私たちは、最新の技術を「誰にでも使える形」にして提供し、御社のデジタルパートナーとして伴走します。</p></div>
              <div className="w-24 h-24 bg-zinc-800 rounded-full flex items-center justify-center border-2 border-zinc-700"><span className="text-4xl">🤝</span></div>
            </section>

            <footer className="border-t border-zinc-200 pt-10 pb-6 text-zinc-600">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <div><h3 className="text-sm font-bold text-zinc-900 mb-3
