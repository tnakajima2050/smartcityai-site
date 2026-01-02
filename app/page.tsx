'use client';

import { useState } from 'react';
import Image from 'next/image';

// --- 日本語サイト用のデータ定義 (元のコードをそのまま維持) ---
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
        生成AIにより文書作成時間を<span className="font-bold border-b border-emerald-500/50">40%短縮</span>(※1)し、本システムの活用で最大<span className="font-bold border-b border-emerald-500/50">90%の工数削減</span>(※2)を実現します。
        <span className="block mt-3 pt-2 border-t border-emerald-200/50 text-[10px] text-emerald-800/70 font-normal leading-snug">
          ※1 Noy, S., & Zhang, W. (2023). Science. ※2 [当社試算]
        </span>
      </>
    ),
    visual: <div className="p-10 text-center text-white">Visual Content (Optimized)</div>
  },
  // ... (他のuseCasesも元のファイルを元に構築)
];

const faqs = [
  { q: "AIの知識が全くなくても大丈夫ですか？", answer: "はい、全く問題ありません。専門知識は一切不要です。", detail: "技術的な選定、開発、運用はすべて弊社が担当します。" },
  { q: "費用はどのくらいかかりますか？", answer: "スモールスタートを推奨しており、数十万円からのプランもございます。", detail: "IT導入補助金などの公的支援もサポートします。" }
];

export default function Home() {
  const [lang, setLang] = useState('jp'); // 'jp' または 'en'
  const [selectedCase, setSelectedCase] = useState<any>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <div style={{ position: 'relative' }}>
      {/* 言語切り替えボタン：画面の右上に固定 */}
      <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 9999 }}>
        <button 
          onClick={() => setLang(lang === 'jp' ? 'en' : 'jp')}
          style={{ padding: '12px 24px', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '30px', cursor: 'pointer', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}
        >
          {lang === 'jp' ? 'English Version / Palantir Specialized' : '日本語サイトに戻る'}
        </button>
      </div>

      {lang === 'jp' ? (
        /* ========================================================= */
        /* 日本語表示セクション (元のデザインをそのまま表示) */
        /* ========================================================= */
        <main className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
          <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-16">
            <header className="mb-20 border-b border-zinc-200 pb-12">
              <div className="flex items-center space-x-3 mb-8">
                <Image src="/logo.png" alt="Logo" width={160} height={50} className="h-auto w-24 sm:w-32" priority />
                <p className="text-sm font-bold tracking-[0.1em] text-zinc-900 uppercase">Smart City AI LLC</p>
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-blue-900 leading-tight">
                日本の企業に「AIの力」を <br />
                <span className="text-emerald-600">生産性革命</span>で未来を創る
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-700">
                「AIを使いたいが、何から始めればいいかわからない」経営者様の悩みを解決します。
              </p>
              <div className="mt-8">
                <button onClick={() => setIsCalendarOpen(true)} className="rounded-lg bg-emerald-600 px-8 py-4 text-white font-bold shadow-xl transition hover:bg-emerald-700">無料相談で可能性を探る →</button>
              </div>
            </header>
            
            <section className="mb-24">
              <h3 className="text-2xl font-bold text-blue-900 text-center mb-10">Smart City AIが選ばれる3つの理由</h3>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">🎯 １.御社専用のオーダーメイド</div>
                <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">✨ ２.リスク最小限のPoC開発</div>
                <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">💰 ３.コスト効率の良いIT導入</div>
              </div>
            </section>
            
            <p className="text-center text-zinc-400 text-xs">© 2025 Smart City AI LLC.</p>
          </div>

          {/* 予約カレンダーモダール (日本語のみ表示) */}
          {isCalendarOpen && (
            <div className="fixed inset-0 z-[10000] flex items-center justify-center p-0 md:p-4 bg-black/80 backdrop-blur-sm">
              <div className="bg-white md:rounded-lg shadow-2xl w-full max-w-5xl h-full md:h-[90vh] overflow-hidden flex flex-col relative">
                <div className="bg-emerald-600 text-white p-4 flex justify-between items-center shadow-md">
                  <div className="font-bold text-lg">📅 無料相談 予約カレンダー</div>
                  <button onClick={() => setIsCalendarOpen(false)} className="text-white bg-emerald-500/50 px-4 py-2 rounded-full font-bold border border-emerald-400">✕ 閉じる</button>
                </div>
                <iframe src="https://outlook.office365.com/owa/calendar/SmartCityAI1@smartcityai.co.jp/bookings/" className="w-full h-full border-none"></iframe>
              </div>
            </div>
          )}
        </main>
      ) : (
        /* ========================================================= */
        /* パランティア向け英語表示セクション */
        /* ========================================================= */
        <div style={{ backgroundColor: '#0a0a0a', color: '#ececec', fontFamily: 'Inter, -apple-system, sans-serif', minHeight: '100vh', padding: '100px 20px' }}>
          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <header style={{ borderLeft: '3px solid #fff', paddingLeft: '25px', marginBottom: '60px' }}>
              <div style={{ background: '#fff', color: '#0a0a0a', fontSize: '0.75rem', fontWeight: '900', padding: '2px 8px', display: 'inline-block', marginBottom: '15px' }}>FORWARD DEPLOYED STRATEGIST</div>
              <h1 style={{ fontSize: '3rem', fontWeight: '800', letterSpacing: '-0.05em', margin: 0 }}>Tatsuya Nakajima</h1>
              <p style={{ fontSize: '1.25rem', color: '#888', marginTop: '10px' }}>Bridging National-Scale Infrastructure with High-Level AI Architecture.</p>
              <p><strong>MS in Computer Science (AI), Georgia Tech</strong> | World Smart City Award Grand Prix Winner</p>
            </header>

            <section style={{ marginBottom: '50px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', borderBottom: '1px solid #333', paddingBottom: '10px', marginBottom: '25px' }}>The Mission</h2>
              <p style={{ lineHeight: '1.8' }}>I specialize in translating complex urban environments into executable data intelligence. With a foundation in <strong>Reinforcement Learning</strong> and decades of leadership in the Japanese public sector, I operationalize AI where policy meets reality.</p>
            </section>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
              <div style={{ background: '#111', border: '1px solid #222', padding: '25px' }}>
                <h3 style={{ marginTop: 0 }}>Operational Excellence</h3>
                <p>Led the <strong>Yokohama Smart City Project (YSCP)</strong>. Managed grid energy policy and complex stakeholder negotiations for 3.7 million citizens.</p>
              </div>
              <div style={{ background: '#111', border: '1px solid #222', padding: '25px' }}>
                <h3 style={{ marginTop: 0 }}>Crisis Response</h3>
                <p>Architected data-driven disaster preparedness systems. Transformed reactive emergency protocols into <strong>proactive command structures</strong>.</p>
              </div>
            </div>

            <div style={{ background: '#1a1a1a', padding: '15px 25px', borderRadius: '4px', fontSize: '0.9rem', marginTop: '40px' }}>
              <strong>Current Status:</strong> Based in Yokohama/Remote | <strong>US Green Card Holder</strong>
            </div>

            <footer style={{ marginTop: '50px', color: '#555' }}>
              <p><a href="https://www.linkedin.com/in/tnakajima2050/" style={{ color: '#fff' }}>LinkedIn Profile</a> | Smart City AI LLC</p>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}
