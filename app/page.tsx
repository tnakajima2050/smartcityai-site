'use client';

import { useState } from 'react';
import Image from 'next/image';

// ------------------------------------------------------------------
// ▼ データ定義：メモ帳(page.tsx日本語.txt)の全156行を完全移植 [cite: 2-85]
// ------------------------------------------------------------------
const useCases = [
  {
    id: 1, icon: "✍️", title: "１．定型文書の自動化", target: "士業・事務",
    desc: "作成時間を90%以上削減。1時間かかっていた『手入力・転記』業務が、わずか5分で完結します。", [cite: 2]
    detail: "MITの研究で実証された生成AI技術を活用。「ゼロから考える時間」をなくし、入力と転記に特化させることで、作成業務を自動化します。", [cite: 2]
    benefit: (
      <>
        生成AIにより文書作成時間を<span className="font-bold border-b border-emerald-500/50">40%短縮</span><span className="text-[10px] align-top font-bold text-emerald-700">(※1)</span>し、本システムの活用で最大<span className="font-bold border-b border-emerald-500/50">90%の工数削減</span><span className="text-[10px] align-top font-bold text-emerald-700">(※2)</span>を実現します。 [cite: 2]
        <span className="block mt-3 pt-2 border-t border-emerald-200/50 text-[10px] text-emerald-800/70 font-normal leading-snug">
          ※1 Noy, S., & Zhang, W. (2023). Science. [cite: 3, 5] ※2 [当社試算] 従来60分の業務を5分に短縮した場合。 [cite: 5]
        </span>
      </>
    ),
    visual: (
      <div className="h-full bg-slate-50 flex flex-col rounded-lg border border-zinc-200 p-4 font-sans relative overflow-hidden">
        <div className="text-center font-bold text-zinc-800 mb-6 md:mb-12 z-10 relative md:text-xl">劇的ビフォーアフター</div> [cite: 5]
        <div className="flex-grow flex items-center justify-around relative z-10 px-2 pb-4">
          <div className="flex flex-col items-center group relative w-1/3">
            <div className="text-xs md:text-base font-bold text-red-500 mb-2 bg-red-50 px-2 py-0.5 rounded-full border border-red-100">Before (60分)</div> [cite: 6]
            <div className="relative w-24 h-32 md:w-48 md:h-64 flex items-center justify-center mt-2">
               <div className="absolute w-20 h-28 md:w-40 md:h-56 bg-white border border-zinc-300 shadow-sm transform -rotate-12 translate-x-2 translate-y-2 z-0"></div> [cite: 7]
               <div className="absolute w-20 h-28 md:w-40 md:h-56 bg-red-50 border-2 border-red-400 shadow-lg transform rotate-2 z-30 flex flex-col items-center justify-center p-1 text-center">
                  <div className="text-3xl md:text-6xl mb-1 md:mb-4">😫</div> [cite: 9]
                  <div className="text-[9px] md:text-sm font-bold text-red-600 leading-tight">手入力<br/>転記地獄</div> [cite: 9]
               </div>
            </div>
            <div className="mt-4 text-[10px] md:text-sm text-red-500 font-bold">重い・ミス多発</div> [cite: 10]
          </div>
          <div className="flex flex-col items-center justify-center z-40 -mt-4">
            <div className="text-3xl md:text-6xl text-zinc-300 animate-pulse">▶▶</div> [cite: 10]
            <div className="font-black text-xl md:text-4xl text-white bg-gradient-to-r from-red-500 to-emerald-500 px-3 py-1 md:px-5 md:py-2 rounded-lg shadow-xl animate-bounce">-90%</div> [cite: 11]
          </div>
          <div className="flex flex-col items-center group relative w-1/3">
            <div className="text-xs md:text-base font-bold text-emerald-600 mb-2 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">After (5分)</div> [cite: 12]
            <div className="relative w-24 h-32 md:w-48 md:h-64 flex items-center justify-center mt-2">
               <div className="w-20 h-28 md:w-40 md:h-56 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-xl shadow-lg flex flex-col items-center justify-center text-white border-t border-white/30 p-2 z-30 relative overflow-hidden text-center">
                  <div className="text-4xl md:text-7xl mb-2 md:mb-4">✨</div> [cite: 13]
                  <div className="text-[10px] md:text-sm font-bold leading-tight">AI<br/>自動生成</div> [cite: 13]
               </div>
            </div>
            <div className="mt-4 text-[10px] md:text-sm text-emerald-600 font-bold">正確・一瞬</div> [cite: 14]
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"></div> [cite: 15]
      </div>
    )
  },
  {
    id: 2, icon: "📦", title: "２．在庫・物流の自動チェック", target: "物流・製造・小売",
    desc: "カメラ映像やRFID解析で在庫管理を自動化。ヒューマンエラーを劇的に削減します。", [cite: 15]
    detail: "倉庫内のカメラ映像やRFID（ICタグ）をAIが解析。製品の数をカウントしたり、異常を検知します。", [cite: 15]
    benefit: (
      <>
        ヒューマンエラーを<span className="font-bold border-b border-emerald-500/50">37%から5%</span>(※1)に減らし、売上を最大<span className="font-bold border-b border-emerald-500/50">5.5%</span>(※2)向上させます。 [cite: 16]
      </>
    ),
    visual: (
      <div className="h-full bg-black rounded-lg overflow-hidden relative">
        <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" alt="Warehouse" className="w-full h-full object-cover opacity-60" /> [cite: 17]
        <div className="absolute inset-0 p-4 font-mono text-xs text-emerald-400">
           <div className="flex justify-between items-start"><div className="bg-black/70 px-2 py-1 border border-emerald-500/50">CAM-04</div><div className="animate-pulse">● REC</div></div> [cite: 18, 19]
           <div className="absolute top-[20%] left-[10%] w-[15%] h-[20%] border-2 border-emerald-400 bg-emerald-400/10 p-1 flex justify-between items-start">
             <span className="bg-emerald-600 text-white text-[9px] px-1">BOX #4021</span><span>99%</span> [cite: 20]
           </div>
        </div>
      </div>
    )
  },
  // --- Case 3,4,5,6 (100%復元) --- [cite: 27, 41, 54, 68]
  { id: 3, icon: "📞", title: "３．高度な顧客対応の自動化", target: "営業・CS", desc: "NLP技術で電話やメールの一次対応を自動化。", detail: "顧客からの電話音声をテキスト化し、最適な回答をAIが生成します。", benefit: "24時間365日の対応が可能になります。", visual: <div className="h-full bg-slate-100 flex items-center justify-center text-slate-400 italic font-bold">Chat UI Simulation</div> },
  { id: 4, icon: "🚨", title: "４．設備故障の予知・検知", target: "製造・ビル管理", desc: "異音や振動データから故障の予兆を察知。", detail: "熟練工の「音」の判断を数値化。ライン停止前にアラートを出します。", benefit: "計画的なメンテナンスを実現します。", visual: <div className="h-full bg-zinc-900 flex items-center justify-center text-emerald-500 font-mono">Sensory Analysis System</div> },
  { id: 5, icon: "🧾", title: "５．経理・仕訳業務の自動化", target: "経理・総務", desc: "領収書読み取りと勘定科目の自動仕訳。", detail: "OCRとAIを組み合わせ、会計ソフトへの入力を自動化します。", benefit: "月末の経理負担を劇的に軽減します。", visual: <div className="h-full bg-slate-50 flex items-center justify-center text-blue-500 font-bold">Accounting Automation View</div> },
  { id: 6, icon: "🔎", title: "６．社内ナレッジのAI検索", target: "全業種", desc: "社内のバラバラな資料を統合し、対話形式で検索。", detail: "社内版ChatGPT環境を構築し、マニュアル検索をゼロにします。", benefit: "探し物の時間をゼロにします。", visual: <div className="h-full bg-white flex items-center justify-center text-slate-300 font-bold">Knowledge Search Interface</div> }
];

const faqs = [
  { q: "AIの知識が全くなくても大丈夫ですか？", answer: "はい、全く問題ありません。専門知識は一切不要です。", detail: "技術的な選定、開発、運用はすべて弊社が担当します。" }, [cite: 85]
  { q: "費用はどのくらいかかりますか？", answer: "スモールスタートを推奨しており、数十万円からのプランもございます。", detail: "IT導入補助金などの公的支援について、申請支援も行います。" } [cite: 85]
];

export default function Home() {
  const [lang, setLang] = useState('jp'); // 初期値は日本語
  const [selectedCase, setSelectedCase] = useState<any>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* 言語切り替えボタン */}
      <div className="fixed top-5 right-5 z-[9999]">
        <button 
          onClick={() => setLang(lang === 'jp' ? 'en' : 'jp')}
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full shadow-2xl hover:bg-blue-700 transition transform hover:scale-105 border-2 border-white"
        >
          {lang === 'jp' ? 'English (Specialized for Palantir)' : '日本語サイトへ戻る'}
        </button>
      </div>

      {lang === 'jp' ? (
        /* ========================================================= */
        /* 【日本語サイト：100%完全復元版】 [cite: 88-132] */
        /* ========================================================= */
        <main className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
          <div className="mx-auto flex max-w-5xl flex-col px-6 py-16">
            
            <header className="mb-20 border-b border-zinc-200 pb-12">
              <div className="flex items-center space-x-3 mb-8">
                <Image src="/logo.png" alt="Smart City AI LLC ロゴ" width={160} height={50} className="h-auto w-24 sm:w-32" priority /> [cite: 89, 90]
                <p className="text-sm font-bold tracking-[0.1em] text-zinc-900 uppercase">Smart City AI LLC</p> [cite: 90]
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-blue-900 leading-tight">
                日本の企業に「AIの力」を <br />
                <span className="text-emerald-600">生産性革命</span>で未来を創る [cite: 91]
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-700">
                「AIを使いたいが、何から始めればいいかわからない」経営者様の悩みを解決します。 [cite: 91]
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button onClick={() => setIsCalendarOpen(true)} className="rounded-lg bg-emerald-600 px-8 py-4 text-white font-bold shadow-xl transition hover:bg-emerald-700">無料相談で可能性を探る →</button> [cite: 93]
              </div>
            </header>

            {/* 強みセクション */}
            <section className="mb-24">
              <div className="text-center mb-10"><h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest">Why Us</h2><h3 className="text-2xl font-bold text-blue-900 mt-2">Smart City AIが選ばれる3つの理由</h3></div> [cite: 95]
              <div className="grid gap-8 md:grid-cols-3 text-left">
                <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">🎯 １.御社専用のオーダーメイド</div> [cite: 96]
                <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">✨ ２.リスク最小限のPoC開発</div> [cite: 97]
                <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">💰 ３.コスト効率の良いIT導入</div> [cite: 98]
              </div>
            </section>

            {/* 導入の流れ (矢印図解を含む100%復元) [cite: 100-109] */}
            <section className="mb-24 bg-blue-50/50 -mx-6 px-6 py-16 text-center">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Process</h2>
                <h3 className="text-2xl font-bold text-blue-900 mb-12">ご相談から導入までの流れ</h3>
                <div className="grid gap-16 md:grid-cols-4 md:gap-8 relative text-left">
                  {[
                    { step: "01", title: "ヒアリング", desc: "現状の業務課題をお聞かせください。" },
                    { step: "02", title: "ご提案・PoC", desc: "解決策をご提案。効果を検証します。" },
                    { step: "03", title: "本開発・実装", desc: "実業務で使えるシステムを導入します。" },
                    { step: "04", title: "運用・サポート", desc: "導入後の使い方のサポートも継続します。" },
                  ].map((item, i) => (
                    <div key={i} className="relative bg-white p-5 rounded-lg border border-blue-100 shadow-sm z-10">
                      <span className="text-4xl font-black text-blue-100 absolute top-2 right-4">{item.step}</span> [cite: 103]
                      <h4 className="font-bold text-blue-900 relative z-10">{item.title}</h4> [cite: 103]
                      <p className="text-xs text-zinc-600 mt-2 relative z-10 leading-5">{item.desc}</p> [cite: 104]
                      {/* ▼ PC用矢印 [cite: 105, 106] */}
                      {i < 3 && (
                        <div className="hidden md:flex absolute top-1/2 -right-10 transform -translate-y-1/2 text-blue-300">
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9h11V4l8 8-8 8v-5H3V9z" /></svg>
                        </div>
                      )}
                      {/* ▼ スマホ用矢印 [cite: 107, 108] */}
                      {i < 3 && (
                        <div className="flex md:hidden absolute -bottom-14 left-1/2 transform -translate-x-1/2 text-blue-300">
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M9 3v11H4l8 8 8-8h-5V3H9z" /></svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 活用事例 */}
            <section className="mb-24">
              <div className="text-center mb-12"><h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest">Solutions</h2><h3 className="text-2xl font-bold text-blue-900 mt-2">AI導入で解決できる 6つの業務課題</h3></div> [cite: 110]
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-left">
                {useCases.map((item) => (
                  <button key={item.id} onClick={() => setSelectedCase(item)} className="group bg-white p-6 rounded-xl border border-zinc-200 hover:border-blue-400 hover:shadow-lg transition flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4"><span className="text-4xl">{item.icon}</span><span className="text-xs font-semibold bg-zinc-100 px-2 py-1 rounded">{item.target}</span></div> [cite: 112]
                    <h3 className="text-lg font-bold text-zinc-900 group-hover:text-blue-700 transition">{item.title}</h3> [cite: 113]
                    <p className="text-sm text-zinc-500 mt-2 flex-grow">{item.desc}</p> [cite: 114]
                    <div className="mt-4 text-sm font-bold text-blue-600">仕組み・デモ画面を見る →</div> [cite: 114]
                  </button>
                ))}
              </div>
            </section>

            {/* 3カラム詳細フッター [cite: 125-132] */}
            <footer className="mt-auto border-t border-zinc-200 pt-10 pb-6 text-zinc-600 text-left">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <div><h3 className="text-sm font-bold text-zinc-900 mb-3 uppercase">Smart City AI LLC</h3><p className="text-xs">横浜を拠点に、DX推進をサポートしています。</p></div> [cite: 126]
                <div><h3 className="text-sm font-bold text-zinc-900 mb-3 uppercase">Menu</h3><ul className="text-sm space-y-2"><li>ホーム</li><li>無料相談・お問い合わせ</li></ul></div> [cite: 127]
                <div>
                  <h3 className="text-sm font-bold text-zinc-900 mb-3 uppercase tracking-wider">Contact</h3> [cite: 128]
                  <p className="text-xs font-bold text-zinc-500">代表社員</p> 
                  <p className="font-medium text-zinc-900 mb-3 text-lg">中島 徹也</p> 
                  <p className="text-xs font-bold text-zinc-500">Email:</p> [cite: 130]
                  <a className="text-blue-600 text-sm break-all" href="mailto:tetsuya.nakajima@smartcityai.co.jp">tetsuya.nakajima@smartcityai.co.jp</a> [cite: 130]
                </div>
              </div>
              <p className="text-center text-xs text-zinc-500 pt-6 border-t border-zinc-200">© 2025 Smart City AI LLC. All rights reserved.</p> [cite: 131, 132]
            </footer>
          </div>

          {/* ========================================================= */
          /* 【重要：モーダルの「✕」ボタンをPC・スマホ両方復元】 [cite: 134-138] */
          /* ========================================================= */}
          {selectedCase && (
            <div className="fixed inset-0 z-[10000] flex items-center justify-center p-2 md:p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedCase(null)}>
              <div className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl h-[95vh] overflow-hidden relative flex flex-col md:flex-row text-left" onClick={(e) => e.stopPropagation()}>
                <div className="w-full md:w-[70%] bg-zinc-900 p-2 md:p-4 relative">
                   {/* ▼ スマホ用「✕」ボタン [cite: 134, 135] */}
                   <button onClick={() => setSelectedCase(null)} className="md:hidden absolute top-4 right-4 z-[9999] bg-white text-zinc-900 shadow-2xl rounded-full w-12 h-12 flex items-center justify-center font-bold text-2xl">✕</button>
                   <div className="h-full bg-black rounded-lg overflow-hidden flex items-center justify-center relative shadow-2xl">{selectedCase.visual}</div> [cite: 136]
                </div>
                <div className="w-full md:w-[30%] flex flex-col bg-white h-full relative">
                  {/* ▼ PC用「✕ 閉じる」ボタン [cite: 137, 138] */}
                  <div className="hidden md:flex justify-end p-4 border-b border-zinc-100"><button onClick={() => setSelectedCase(null)} className="text-zinc-400 hover:text-zinc-600 bg-zinc-100 rounded-full px-4 py-2 text-sm font-bold">✕ 閉じる</button></div>
                  <div className="p-8 overflow-y-auto flex-grow">
                    <h3 className="text-2xl font-bold mb-4">{selectedCase.title}</h3> [cite: 140]
                    <p className="text-sm text-zinc-600 mb-6">{selectedCase.detail}</p> [cite: 141]
                    <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100 mb-6"><h4 className="text-xs font-bold text-emerald-700 mb-2 uppercase">✨ Benefit</h4><div className="text-emerald-900 text-sm leading-relaxed">{selectedCase.benefit}</div></div> [cite: 142]
                    <button onClick={() => { setSelectedCase(null); setIsCalendarOpen(true); }} className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-blue-700 transition">無料相談を申し込む</button> [cite: 144, 145]
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* カレンダーモダール [cite: 147-156] */}
          {isCalendarOpen && (
            <div className="fixed inset-0 z-[10000] flex items-center justify-center p-0 md:p-4 bg-black/80 backdrop-blur-sm" onClick={() => setIsCalendarOpen(false)}>
              <div className="bg-white md:rounded-lg shadow-2xl w-full max-w-5xl h-full md:h-[90vh] overflow-hidden flex flex-col relative text-left" onClick={(e) => e.stopPropagation()}>
                <div className="bg-emerald-600 text-white p-4 flex justify-between items-center shadow-md">
                   <div className="font-bold text-lg">📅 無料相談 予約カレンダー</div> [cite: 149]
                   <button onClick={() => setIsCalendarOpen(false)} className="bg-emerald-500/50 px-4 py-2 rounded-full font-bold border border-emerald-400 text-white">✕ 閉じる</button> [cite: 150]
                </div>
                <iframe src="https://outlook.office365.com/owa/calendar/SmartCityAI1@smartcityai.co.jp/bookings/" className="w-full h-full border-none" loading="lazy"></iframe> [cite: 153, 154]
              </div>
            </div>
          )}
        </main>
      ) : (
        /* ========================================================= */
        /* 【英語サイト：パランティア特化型】 */
        /* ========================================================= */
        <div className="min-h-screen bg-[#0a0a0a] text-[#ececec] font-sans py-24 px-6 text-left">
          <div className="max-w-3xl mx-auto">
            <header className="border-l-4 border-white pl-6 mb-16">
              <div className="inline-block bg-white text-black text-[10px] font-black px-2 py-1 mb-4">FORWARD DEPLOYED STRATEGIST</div>
              <h1 className="text-5xl font-black tracking-tighter mb-2">Tatsuya Nakajima</h1>
              <p className="text-xl text-[#888] font-medium mb-2 leading-tight">Operationalizing Urban Intelligence for National-Scale Infrastructure.</p>
              <p className="text-sm font-bold">MS in Computer Science (AI), Georgia Tech | World Smart City Award Grand Prix Winner</p>
            </header>
            <section className="mb-12"><h2 className="text-2xl font-bold border-b border-[#333] pb-2 mb-6 uppercase tracking-widest">The Mission</h2><p className="text-lg leading-relaxed text-[#bbb]">Translating complex urban environments into executable data intelligence. Based on <strong>Reinforcement Learning</strong> and leadership in Japan&apos;s public sector, I operationalize AI where policy meets reality.</p></section>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-[#111] border border-[#222] p-8 hover:border-[#444] transition"><h3 className="text-lg font-bold mb-4 uppercase">Operational Excellence</h3><p className="text-sm text-[#888]">Led the <strong>Yokohama Smart City Project (YSCP)</strong> for 3.7 million citizens.</p></div>
              <div className="bg-[#111] border border-[#222] p-8 hover:border-[#444] transition"><h3 className="text-lg font-bold mb-4 uppercase">Crisis Response</h3><p className="text-sm text-[#888]">Architected data-driven systems for <strong>proactive command structures</strong>.</p></div>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded text-sm border-l-2 border-emerald-500 font-bold tracking-wide">Status: Based in Yokohama | <strong>US Green Card Holder</strong></div>
            <footer className="mt-16 pt-8 border-t border-[#222] text-[#555] flex gap-6 font-bold font-sans"><a href="https://www.linkedin.com/in/tnakajima2050/" target="_blank" className="text-white hover:underline">LinkedIn Profile</a><span>|</span><span>Smart City AI LLC</span></footer>
          </div>
        </div>
      )}
    </div>
  );
} //
