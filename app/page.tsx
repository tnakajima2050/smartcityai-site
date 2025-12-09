'use client';

import { useState } from 'react';
import Image from 'next/image';

// ------------------------------------------------------------------
// ▼ データ定義：6つの活用事例
//   図解（visual）を大幅に強化し、「AIダッシュボード風」のデザインに
// ------------------------------------------------------------------
const useCases = [
  {
    id: 1,
    icon: "✍️",
    title: "定型文書の自動化",
    target: "士業・事務",
    desc: "報告書、契約書、議事録のドラフトを数秒で自動作成。",
    detail: "過去の書類データとひな形をAIに学習させ、キーワードを入力するだけでドラフトが完成する仕組みです。",
    benefit: "書類作成にかかる時間を大幅に短縮し、専門家としてのチェック業務に集中できる環境を作ります。",
    // 図解：ドキュメント生成プロセス
    visual: (
      <div className="h-full bg-slate-50 rounded-xl border border-slate-200 p-6 flex flex-col relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-emerald-500"></div>
        {/* UIヘッダー */}
        <div className="flex justify-between items-center mb-6 border-b border-slate-200 pb-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="text-xs text-slate-400 font-mono">SmartDoc AI Generator</div>
        </div>
        {/* メインエリア */}
        <div className="flex gap-4 h-full">
          {/* 左：入力 */}
          <div className="w-1/3 bg-white border border-slate-200 rounded p-3 shadow-sm flex flex-col gap-2">
            <div className="text-[10px] text-slate-400 font-bold uppercase">INPUT DATA</div>
            <div className="h-2 w-3/4 bg-slate-200 rounded animate-pulse"></div>
            <div className="h-2 w-1/2 bg-slate-200 rounded animate-pulse"></div>
            <div className="mt-auto p-2 bg-blue-50 rounded border border-blue-100">
              <div className="text-[10px] text-blue-600 font-bold">キーワード:</div>
              <div className="text-[10px] text-slate-600">事業報告, 売上増</div>
            </div>
          </div>
          {/* 中央：処理矢印 */}
          <div className="flex flex-col justify-center items-center text-blue-500">
            <div className="text-2xl animate-bounce">➡</div>
            <div className="text-[10px] font-bold bg-blue-100 px-2 py-0.5 rounded-full text-blue-700">AI生成中...</div>
          </div>
          {/* 右：出力 */}
          <div className="w-1/2 bg-white border border-emerald-200 rounded p-4 shadow-md relative">
            <div className="absolute -top-2 -right-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow">COMPLETE</div>
            <div className="text-[10px] text-emerald-600 font-bold uppercase mb-2">OUTPUT DOCUMENT</div>
            <div className="space-y-2">
               <div className="h-2 w-full bg-slate-100 rounded"></div>
               <div className="h-2 w-full bg-slate-100 rounded"></div>
               <div className="h-2 w-2/3 bg-slate-100 rounded"></div>
               <div className="h-2 w-full bg-slate-100 rounded"></div>
               <div className="h-20 w-full bg-slate-50 border border-slate-100 rounded p-2 text-[8px] text-slate-400 leading-relaxed">
                 (AIが生成した文章がここに自動で入力されます...)
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
    title: "在庫・物流の自動チェック",
    target: "物流・製造・小売",
    desc: "カメラ映像解析で在庫数や検品作業を自動化。",
    detail: "倉庫内のカメラ映像をAIが解析。バーコードを読み取る手間なく、製品の数をカウントしたり、異常を検知します。",
    benefit: "人による数え間違い（ヒューマンエラー）を防止し、検品コストの削減が期待できます。",
    // 図解：カメラ認識画面
    visual: (
      <div className="h-full bg-slate-900 rounded-xl overflow-hidden relative flex flex-col">
        {/* カメラオーバーレイ */}
        <div className="absolute top-4 left-4 text-emerald-400 text-xs font-mono flex items-center gap-2">
           <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
           LIVE CAM - WAREHOUSE 01
        </div>
        <div className="absolute top-4 right-4 text-white text-xs font-mono">
           FPS: 59.9
        </div>
        
        {/* 認識枠のシミュレーション */}
        <div className="flex-grow flex items-center justify-center relative p-10">
           {/* ボックス1 */}
           <div className="absolute top-1/4 left-1/4 w-24 h-24 border-2 border-emerald-500 rounded bg-emerald-500/10 flex items-end justify-center">
              <span className="bg-emerald-600 text-white text-[10px] px-1 mb-[-10px]">Box A: 98%</span>
           </div>
           {/* ボックス2 */}
           <div className="absolute bottom-1/3 right-1/3 w-32 h-20 border-2 border-emerald-500 rounded bg-emerald-500/10 flex items-end justify-center">
              <span className="bg-emerald-600 text-white text-[10px] px-1 mb-[-10px]">Box B: 99%</span>
           </div>
           {/* 異常検知 */}
           <div className="absolute bottom-10 left-10 w-16 h-16 border-2 border-red-500 border-dashed rounded bg-red-500/10 flex items-end justify-center animate-pulse">
              <span className="bg-red-600 text-white text-[10px] px-1 mb-[-10px]">Warning</span>
           </div>
        </div>

        {/* 下部データパネル */}
        <div className="bg-slate-800 p-3 grid grid-cols-3 gap-2 border-t border-slate-700">
           <div className="text-center">
             <div className="text-[10px] text-slate-400">TOTAL COUNT</div>
             <div className="text-xl font-bold text-white">1,248</div>
           </div>
           <div className="text-center border-l border-slate-600">
             <div className="text-[10px] text-slate-400">ERROR</div>
             <div className="text-xl font-bold text-red-400">1</div>
           </div>
           <div className="text-center border-l border-slate-600">
             <div className="text-[10px] text-slate-400">STATUS</div>
             <div className="text-xs font-bold text-emerald-400 mt-1">NORMAL</div>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    icon: "📞",
    title: "高度な顧客対応の自動化",
    target: "営業・CS",
    desc: "NLP技術で電話やメールの一次対応を自動化。",
    detail: "顧客からの電話音声をテキスト化し、社内データベース（FAQやマニュアル）から最適な回答をAIが生成します。",
    benefit: "24時間365日の対応が可能になり、夜間休日の機会損失を防ぎます。",
    // 図解：チャットボット解析画面
    visual: (
      <div className="h-full bg-white rounded-xl border border-slate-200 p-4 flex flex-col shadow-inner bg-slate-50">
        <div className="flex items-center gap-2 mb-4 border-b border-slate-200 pb-2">
           <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-lg">🤖</div>
           <div>
             <div className="text-xs font-bold text-slate-700">AI Operator Agent</div>
             <div className="text-[10px] text-emerald-600">● Online</div>
           </div>
        </div>
        
        <div className="flex-grow space-y-3">
          {/* 顧客のメッセージ */}
          <div className="flex gap-2">
            <div className="w-6 h-6 bg-slate-200 rounded-full flex-shrink-0"></div>
            <div className="bg-white border border-slate-200 p-2 rounded-tr-lg rounded-br-lg rounded-bl-lg shadow-sm max-w-[80%]">
              <div className="text-[10px] text-slate-400 mb-1">Customer (Voice to Text)</div>
              <div className="text-xs text-slate-700">今月の請求書の締め日はいつですか？</div>
            </div>
          </div>
          
          {/* 思考プロセス */}
          <div className="flex justify-center my-2">
             <span className="text-[10px] bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full border border-yellow-200 animate-pulse">
               🔍 データベース検索中... (Confidence: 98%)
             </span>
          </div>

          {/* AIの回答 */}
          <div className="flex gap-2 flex-row-reverse">
            <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs">AI</div>
            <div className="bg-blue-600 text-white p-2 rounded-tl-lg rounded-bl-lg rounded-br-lg shadow-md max-w-[80%]">
              <div className="text-[10px] text-blue-200 mb-1">Auto Response</div>
              <div className="text-xs">
                弊社の締め日は毎月20日となっております。<br/>
                請求書は25日頃に発送いたします。
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    icon: "🚨",
    title: "設備故障の予知・検知",
    target: "製造・ビル管理",
    desc: "異音や振動データから故障の予兆を察知。",
    detail: "熟練工が「音」で判断していた異常をAIが数値化。故障してラインが止まる前にアラートを出します。",
    benefit: "予期せぬライン停止（ダウンタイム）を回避し、計画的なメンテナンスを実現します。",
    // 図解：波形モニタリング
    visual: (
      <div className="h-full bg-zinc-900 rounded-xl p-4 flex flex-col font-mono relative overflow-hidden">
        {/* グリッド背景 */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
        
        <div className="flex justify-between items-end mb-4 relative z-10">
          <div>
            <div className="text-xs text-zinc-400">SENSOR: MACHINE-A04</div>
            <div className="text-xs text-zinc-400">TYPE: VIBRATION</div>
          </div>
          <div className="text-right">
             <div className="text-2xl font-bold text-emerald-400">NORMAL</div>
          </div>
        </div>

        {/* 波形アニメーション風 */}
        <div className="flex-grow flex items-end gap-1 relative z-10 h-32 border-b border-zinc-700 pb-2">
           {[40, 60, 45, 70, 50, 65, 55, 45, 60, 90, 100, 40, 50, 60, 45, 50, 40, 30, 40, 50].map((h, i) => (
             <div key={i} className={`w-full bg-emerald-500 opacity-80 rounded-t-sm transition-all duration-500`} style={{height: `${i === 10 ? 95 : h}%`, backgroundColor: i === 10 ? '#ef4444' : '#10b981'}}></div>
           ))}
           {/* 閾値ライン */}
           <div className="absolute top-[10%] left-0 w-full h-[1px] bg-red-500 border-dashed border-t border-red-500 opacity-50"></div>
           <div className="absolute top-[5%] right-0 text-[10px] text-red-500 bg-zinc-900 px-1">ALERT THRESHOLD</div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 relative z-10">
           <div className="bg-zinc-800 p-2 rounded border-l-2 border-emerald-500">
             <div className="text-[10px] text-zinc-500">AVG VIBRATION</div>
             <div className="text-white font-bold">45.2 Hz</div>
           </div>
           <div className="bg-zinc-800 p-2 rounded border-l-2 border-yellow-500">
             <div className="text-[10px] text-zinc-500">PEAK DETECTED</div>
             <div className="text-white font-bold">14:02 PM</div>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    icon: "🧾",
    title: "経理・仕訳業務の自動化",
    target: "経理・総務",
    desc: "領収書読み取りと勘定科目の自動仕訳。",
    detail: "OCR（文字認識）とAI推論を組み合わせ、バラバラのフォーマットの請求書を読み取り、会計ソフトへ入力します。",
    benefit: "手入力の手間をなくし、月末の経理業務の負担を劇的に軽減します。",
    // 図解：スキャンプロセス
    visual: (
      <div className="h-full bg-slate-100 rounded-xl p-6 relative overflow-hidden flex items-center justify-center">
        {/* レシートイメージ */}
        <div className="w-48 bg-white shadow-xl rotate-[-5deg] p-4 text-[8px] text-slate-400 font-mono absolute left-10 border-t-8 border-slate-300">
           <div className="text-center text-xs font-bold text-slate-800 mb-2">RECEIPT</div>
           <div className="flex justify-between mb-1"><span>DATE</span><span>2025/12/09</span></div>
           <div className="flex justify-between mb-1"><span>ITEM A</span><span>¥1,200</span></div>
           <div className="flex justify-between mb-1"><span>ITEM B</span><span>¥3,500</span></div>
           <div className="border-t border-slate-300 my-1"></div>
           <div className="flex justify-between font-bold text-slate-800"><span>TOTAL</span><span>¥4,700</span></div>
        </div>

        {/* スキャンビーム */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent w-full h-8 animate-[scan_2s_ease-in-out_infinite] top-1/2"></div>

        {/* 抽出データカード */}
        <div className="w-56 bg-white rounded-lg shadow-2xl border border-blue-200 absolute right-6 top-1/2 transform -translate-y-1/2 p-4 z-10">
           <div className="flex items-center gap-2 mb-2 border-b border-slate-100 pb-2">
             <span className="text-lg">✨</span>
             <span className="text-xs font-bold text-blue-700">AI Extraction</span>
           </div>
           <div className="space-y-2">
             <div className="flex justify-between items-center bg-slate-50 p-1 rounded">
               <span className="text-[10px] text-slate-500">金額</span>
               <span className="text-sm font-bold text-slate-800">¥4,700</span>
             </div>
             <div className="flex justify-between items-center bg-slate-50 p-1 rounded">
               <span className="text-[10px] text-slate-500">日付</span>
               <span className="text-xs font-bold text-slate-800">2025/12/09</span>
             </div>
             <div className="bg-blue-50 p-2 rounded border border-blue-100">
               <span className="text-[10px] text-blue-400 block mb-1">勘定科目 (自動推論)</span>
               <span className="text-xs font-bold text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200">消耗品費</span>
             </div>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    icon: "🔎",
    title: "社内ナレッジのAI検索",
    target: "全業種",
    desc: "社内のバラバラな資料を統合し、対話形式で検索。",
    detail: "社内版ChatGPTのような環境を構築。PDFやマニュアルをAIに読み込ませ、質問するだけで回答が得られます。",
    benefit: "「あの資料どこだっけ？」という探し物の時間をゼロにし、業務効率を高めます。",
    // 図解：ナレッジベース検索
    visual: (
      <div className="h-full bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 flex flex-col justify-center items-center relative overflow-hidden">
        {/* 背景のドキュメントアイコン */}
        <div className="absolute top-4 left-10 text-4xl opacity-10 rotate-12">📄</div>
        <div className="absolute bottom-10 right-10 text-5xl opacity-10 -rotate-12">📊</div>
        <div className="absolute top-1/2 right-4 text-3xl opacity-10">📁</div>

        {/* 検索バー */}
        <div className="w-full max-w-sm bg-white rounded-full shadow-lg border border-indigo-100 p-1 flex items-center mb-6 relative z-10">
           <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-500 ml-1">🔎</div>
           <div className="flex-grow px-3 text-xs text-slate-400">就業規則の交通費について教えて</div>
           <div className="bg-indigo-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full">Ask AI</div>
        </div>

        {/* つながるライン */}
        <div className="h-8 w-0.5 bg-indigo-200 mb-2"></div>

        {/* 回答カード */}
        <div className="w-full max-w-sm bg-white rounded-lg shadow-xl border border-indigo-200 p-4 relative z-10">
           <div className="absolute -top-3 -left-3 bg-white p-1 rounded-full shadow border border-indigo-50 text-xl">💡</div>
           <h5 className="text-xs font-bold text-indigo-800 mb-2">AI Answer:</h5>
           <p className="text-xs text-slate-600 leading-relaxed">
             就業規則 第4章に基づき、交通費は<span className="bg-yellow-100 font-bold">月額3万円まで</span>全額支給されます。申請は毎月25日までにクラウド経費システムから行ってください。
           </p>
           <div className="mt-3 pt-2 border-t border-slate-100 flex gap-2">
             <span className="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">引用元: 就業規則.pdf (p.12)</span>
           </div>
        </div>
      </div>
    )
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
  const [selectedCase, setSelectedCase] = useState<typeof useCases[0] | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-16">

        {/* --------------------------------------------------------- */}
        {/* 1. ヒーローセクション */}
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
        {/* 2. 3つの強み */}
        {/* --------------------------------------------------------- */}
        <section className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest">Why Us</h2>
            <h3 className="text-2xl font-bold text-blue-900 mt-2">Smart City AIが選ばれる3つの理由</h3>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-2xl mb-4">🎯</div>
              <h3 className="font-bold text-lg text-blue-900 mb-2">御社専用のオーダーメイド</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                パッケージ製品の押し売りはしません。御社の業務フローを徹底的にヒアリングし、本当に必要な機能だけを設計・開発します。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-2xl mb-4">✨</div>
              <h3 className="font-bold text-lg text-blue-900 mb-2">リスク最小限のPoC開発</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                いきなり数百万円は使いません。まずは最小限のコストで試作版（PoC）を作り、効果を確認してから本格導入へ進みます。
              </p>
            </div>
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
        {/* 3. プロセス：導入の流れ */}
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
        {/* 4. 6つの活用事例：クリックで詳細表示 */}
        {/* --------------------------------------------------------- */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest">Solutions</h2>
            <h3 className="text-2xl font-bold text-blue-900 mt-2">AI導入で解決できる 6つの業務課題</h3>
            <p className="mt-3 text-zinc-600">
              御社の課題に近いものをクリックしてください。<br className="md:hidden"/>解決へのプロセスを図解でご覧いただけます。
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
                  仕組み・図解を見る <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </button>
            ))}
          </div>
        </section>


        {/* --------------------------------------------------------- */}
        {/* 5. FAQ */}
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
        {/* 6. 会社情報・メッセージ */}
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
            <div className="w-24 h-24 md:w-32 md:h-32 bg-zinc-800 rounded-full flex items-center justify-center border-2 border-zinc-700">
               <span className="text-4xl">🤝</span>
            </div>
          </div>
        </section>


        {/* --------------------------------------------------------- */}
        {/* フッター */}
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
      {/* 強化版モーダル（ポップアップ） */}
      {/* --------------------------------------------------------- */}
      {selectedCase && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedCase(null)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-[85vh] overflow-hidden relative animate-in fade-in zoom-in duration-200 flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 左側：ビジュアルエリア（60%） - AIダッシュボード風 */}
            <div className="w-full md:w-[60%] bg-zinc-50 p-6 md:p-8 border-b md:border-b-0 md:border-r border-zinc-200 flex flex-col">
               <div className="flex items-center gap-3 mb-6">
                 <span className="text-3xl">{selectedCase.icon}</span>
                 <h3 className="text-xl font-bold text-zinc-800">{selectedCase.title}</h3>
               </div>
               
               {/* 図解コンポーネントエリア：ここがメイン */}
               <div className="flex-grow relative rounded-xl shadow-sm border border-zinc-200 overflow-hidden bg-white">
                 {selectedCase.visual}
               </div>
               
               <p className="text-center text-xs text-zinc-400 mt-3 font-mono">
                 ※ AI処理のイメージデモンストレーション
               </p>
            </div>

            {/* 右側：テキストエリア（40%） */}
            <div className="w-full md:w-[40%] flex flex-col bg-white">
              {/* 閉じるボタン */}
              <div className="flex justify-end p-4">
                <button 
                  onClick={() => setSelectedCase(null)}
                  className="text-zinc-400 hover:text-zinc-600 bg-zinc-100 rounded-full p-2 hover:bg-zinc-200 transition"
                >
                  ✕ 閉じる
                </button>
              </div>

              <div className="px-6 pb-6 overflow-y-auto flex-grow">
                <div className="mb-6">
                   <h4 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">TARGET</h4>
                   <span className="inline-block bg-blue-50 text-blue-800 text-xs px-3 py-1 rounded-full font-bold">
                     {selectedCase.target} 向け
                   </span>
                </div>

                <div className="mb-8">
                   <h4 className="text-lg font-bold text-zinc-900 mb-3">具体的な仕組み</h4>
                   <p className="text-sm text-zinc-600 leading-relaxed">
                     {selectedCase.detail}
                   </p>
                </div>

                <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100 mb-8">
                   <h4 className="text-sm font-bold text-emerald-800 mb-2 flex items-center">
                     <span className="mr-2">✨</span> 期待される効果
                   </h4>
                   <p className="text-emerald-900 text-sm font-medium leading-relaxed">
                     {selectedCase.benefit}
                   </p>
                </div>
              </div>

              {/* CTAエリア（固定） */}
              <div className="p-6 border-t border-zinc-100 bg-zinc-50 mt-auto">
                <a 
                  href={`mailto:tetsuya.nakajima@smartcityai.co.jp?subject=【${selectedCase.title}】について相談したい`}
                  className="block w-full text-center bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  この事例について無料相談する
                </a>
                <p className="text-center text-[10px] text-zinc-400 mt-2">
                  メーラーが起動します。お気軽にご連絡ください。
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
