'use client';

import { useState } from 'react';
import Image from 'next/image';

// ------------------------------------------------------------------
// ▼ データ定義：6つの活用事例
//   【修正完了】全事例を「画面いっぱいの高密度UI」に全面刷新
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
    // 【修正】高密度なAIエディタ画面（パラメータサイドバー付き）
    visual: (
      <div className="h-full bg-zinc-100 flex flex-col overflow-hidden rounded-lg shadow-inner border border-zinc-300 font-sans text-xs">
        {/* ツールバー */}
        <div className="bg-zinc-800 text-zinc-300 p-2 flex items-center gap-4 shadow-md">
           <div className="font-bold text-white tracking-wider">SmartDoc AI</div>
           <div className="flex gap-2">
             <span className="bg-zinc-700 px-2 py-0.5 rounded hover:bg-zinc-600 cursor-pointer">File</span>
             <span className="bg-zinc-700 px-2 py-0.5 rounded hover:bg-zinc-600 cursor-pointer">Edit</span>
             <span className="bg-zinc-700 px-2 py-0.5 rounded hover:bg-zinc-600 cursor-pointer">View</span>
           </div>
           <div className="ml-auto bg-blue-600 text-white px-3 py-0.5 rounded font-bold text-[10px] animate-pulse">AI GENERATING...</div>
        </div>
        {/* メインエリア */}
        <div className="flex-grow flex">
           {/* 左：パラメータ入力 (密度アップ) */}
           <div className="w-1/4 bg-zinc-200 border-r border-zinc-300 p-3 flex flex-col gap-3">
              <div className="font-bold text-zinc-600 border-b border-zinc-300 pb-1">PARAMETERS</div>
              <div className="bg-white p-2 rounded border border-zinc-300">
                <div className="text-[10px] text-zinc-400">ドキュメント種別</div>
                <div className="font-bold text-zinc-800">事業譲渡契約書</div>
              </div>
              <div className="bg-white p-2 rounded border border-zinc-300">
                <div className="text-[10px] text-zinc-400">甲（譲渡人）</div>
                <div className="font-bold text-zinc-800">株式会社サンプル</div>
              </div>
              <div className="bg-white p-2 rounded border border-zinc-300">
                <div className="text-[10px] text-zinc-400">乙（譲受人）</div>
                <div className="font-bold text-zinc-800">スマートAI合同会社</div>
              </div>
              <div className="bg-white p-2 rounded border border-zinc-300 flex-grow">
                <div className="text-[10px] text-zinc-400">特記事項</div>
                <div className="text-zinc-600 leading-tight mt-1">
                  ・従業員の処遇については別途覚書とする<br/>
                  ・譲渡期日は2025年4月1日<br/>
                  ・機密保持条項を含めること
                </div>
              </div>
           </div>
           {/* 右：プレビュー (余白を埋める) */}
           <div className="w-3/4 bg-white p-6 overflow-y-auto relative">
              {/* 用紙 */}
              <div className="max-w-2xl mx-auto bg-white shadow-lg border border-zinc-100 min-h-[120%] p-8 text-zinc-800 relative">
                 <h1 className="text-xl font-serif font-bold text-center mb-8 border-b-2 border-black pb-2">事業譲渡契約書（案）</h1>
                 <div className="space-y-4 font-serif leading-relaxed text-sm">
                   <p>株式会社サンプル（以下「甲」という。）とスマートAI合同会社（以下「乙」という。）とは、甲の営む〇〇事業の譲渡に関し、以下の通り契約を締結する。</p>
                   
                   <div className="pl-4 border-l-4 border-blue-200 bg-blue-50 p-2">
                     <h2 className="font-bold mb-1 text-blue-800">第1条（目的）</h2>
                     <p>甲は乙に対し、本契約の定めるところにより、甲の営む〇〇事業（以下「本件事業」という。）を譲渡し、乙はこれを譲り受ける。</p>
                   </div>
                   
                   <div className="pl-4">
                     <h2 className="font-bold mb-1">第2条（譲渡期日）</h2>
                     <p>本件事業の譲渡期日は、<span className="bg-yellow-100 font-bold px-1">2025年4月1日</span>とする。ただし、必要に応じて甲乙協議の上これを変更することができる。</p>
                   </div>

                   <div className="pl-4">
                     <h2 className="font-bold mb-1">第3条（従業員の処遇）</h2>
                     <p className="text-zinc-400 italic">（AI生成中...）</p>
                     <div className="h-2 w-full bg-zinc-100 rounded animate-pulse mt-1"></div>
                     <div className="h-2 w-2/3 bg-zinc-100 rounded animate-pulse mt-1"></div>
                   </div>
                 </div>
                 {/* AIカーソル */}
                 <div className="absolute top-[60%] left-12 w-1 h-5 bg-blue-600 animate-blink"></div>
                 <div className="absolute top-[58%] left-14 bg-blue-600 text-white text-[9px] px-1 rounded rounded-bl-none shadow-lg">AI Typing...</div>
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
    // 【修正】リアルな写真背景＋AIオーバーレイ
    visual: (
      <div className="h-full bg-black rounded-lg overflow-hidden relative group">
        {/* 背景画像（倉庫）: Picsumを使用 (商用利用可なplaceholder) */}
        <div className="absolute inset-0 w-full h-full">
           {/* eslint-disable-next-line @next/next/no-img-element */}
           <img 
             src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
             alt="Warehouse" 
             className="w-full h-full object-cover opacity-60"
           />
        </div>

        {/* UIオーバーレイ */}
        <div className="absolute inset-0 p-4 font-mono text-xs">
           <div className="flex justify-between items-start text-emerald-400 mb-4">
              <div className="bg-black/70 px-2 py-1 rounded border border-emerald-500/50">CAM-04: SHIPPING AREA</div>
              <div className="bg-black/70 px-2 py-1 rounded border border-emerald-500/50 animate-pulse">● REC</div>
           </div>

           {/* バウンディングボックス（認識枠） */}
           <div className="relative w-full h-3/4">
              {/* 箱1 */}
              <div className="absolute top-[20%] left-[10%] w-[15%] h-[20%] border-2 border-emerald-400 bg-emerald-400/10 flex items-start justify-between p-1">
                 <span className="bg-emerald-600 text-white text-[9px] px-1">BOX #4021</span>
                 <span className="text-emerald-400 text-[9px]">99%</span>
              </div>
              {/* 箱2 */}
              <div className="absolute top-[25%] left-[30%] w-[15%] h-[20%] border-2 border-emerald-400 bg-emerald-400/10 flex items-start justify-between p-1">
                 <span className="bg-emerald-600 text-white text-[9px] px-1">BOX #4022</span>
                 <span className="text-emerald-400 text-[9px]">98%</span>
              </div>
              {/* 箱3（奥） */}
              <div className="absolute top-[15%] left-[50%] w-[10%] h-[15%] border-2 border-emerald-400 bg-emerald-400/10"></div>
              
              {/* フォークリフト（検知） */}
              <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[40%] border-2 border-yellow-400 bg-yellow-400/10 flex flex-col items-start p-1">
                 <span className="bg-yellow-600 text-white text-[9px] px-1 mb-1">FORKLIFT</span>
                 <span className="text-yellow-400 text-[9px]">Speed: 5km/h</span>
              </div>

              {/* 異常検知（荷崩れなど） */}
              <div className="absolute bottom-[30%] left-[5%] w-[12%] h-[12%] border-2 border-red-500 border-dashed bg-red-500/20 animate-pulse flex items-center justify-center">
                 <span className="bg-red-600 text-white text-[9px] px-1">ALERT</span>
              </div>
           </div>
           
           {/* フッターデータ */}
           <div className="absolute bottom-0 left-0 w-full bg-black/80 border-t border-zinc-700 p-3 flex justify-around text-center text-white">
              <div>
                <div className="text-[10px] text-zinc-400">TOTAL ITEMS</div>
                <div className="text-xl font-bold">842</div>
              </div>
              <div>
                <div className="text-[10px] text-zinc-400">THROUGHPUT</div>
                <div className="text-xl font-bold">120<span className="text-xs font-normal text-zinc-500">/hr</span></div>
              </div>
              <div>
                 <div className="text-[10px] text-zinc-400">STATUS</div>
                 <div className="text-xl font-bold text-emerald-400">OK</div>
              </div>
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
    // 【修正】高密度なプロ仕様オペレーターダッシュボード
    visual: (
      <div className="h-full bg-slate-100 flex overflow-hidden rounded-lg border border-slate-300 font-sans">
        {/* サイドバー (ユーザーリスト) */}
        <div className="w-1/4 bg-white border-r border-slate-200 flex flex-col">
           <div className="p-3 bg-slate-50 border-b border-slate-200 font-bold text-slate-700 text-xs flex justify-between">
             <span>INBOX (4)</span>
             <span className="text-blue-500">Auto-Mode ON</span>
           </div>
           <div className="flex-grow overflow-y-auto">
             <div className="p-3 border-b border-slate-100 bg-blue-50 border-l-4 border-blue-500">
               <div className="flex justify-between mb-1"><span className="font-bold text-slate-800 text-xs">090-XXXX-5678</span><span className="text-[10px] text-slate-400">Now</span></div>
               <div className="text-[10px] text-slate-500 truncate">請求書の件について確認したい...</div>
             </div>
             {[1,2,3].map(i => (
               <div key={i} className="p-3 border-b border-slate-100 hover:bg-slate-50 opacity-60">
                 <div className="flex justify-between mb-1"><span className="font-bold text-slate-800 text-xs">Customer {i}</span><span className="text-[10px] text-slate-400">10m ago</span></div>
                 <div className="text-[10px] text-slate-500 truncate">契約更新の手続きについて...</div>
               </div>
             ))}
           </div>
        </div>

        {/* メインチャットエリア */}
        <div className="w-1/2 flex flex-col bg-white">
           <div className="p-3 border-b border-slate-200 flex justify-between items-center shadow-sm z-10">
             <div className="flex items-center gap-2">
               <div className="w-8 h-8 rounded-full bg-slate-200"></div>
               <div>
                 <div className="font-bold text-sm text-slate-800">鈴木 一郎 様</div>
                 <div className="text-[10px] text-emerald-600">● 通話中 (AI対応中)</div>
               </div>
             </div>
             <div className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-500">Duration: 02:14</div>
           </div>
           
           <div className="flex-grow bg-slate-50 p-4 space-y-4 overflow-y-auto">
             <div className="flex gap-2">
               <div className="bg-white p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl shadow-sm max-w-[90%] border border-slate-200">
                 <div className="text-[10px] text-slate-400 mb-1">Voice to Text</div>
                 <p className="text-xs text-slate-800">先日届いた請求書の金額が、見積もりと違うようなのですが。</p>
               </div>
             </div>
             
             {/* AI思考プロセス表示 */}
             <div className="flex items-center gap-2 px-2">
               <div className="h-px bg-slate-200 flex-grow"></div>
               <span className="text-[10px] text-blue-500 bg-blue-50 px-2 py-1 rounded-full border border-blue-100">
                 意図: 請求額の相違 | 感情: <span className="text-orange-500">不安(Negative)</span>
               </span>
               <div className="h-px bg-slate-200 flex-grow"></div>
             </div>

             <div className="flex gap-2 flex-row-reverse">
               <div className="bg-blue-600 p-3 rounded-tl-xl rounded-bl-xl rounded-br-xl shadow-md max-w-[90%] text-white">
                 <div className="flex justify-between items-center mb-1 border-b border-blue-500 pb-1">
                   <span className="text-[10px] font-bold">AI Agent</span>
                   <span className="text-[9px] bg-blue-700 px-1 rounded">Confidence: 99%</span>
                 </div>
                 <p className="text-xs">
                   ご不安をおかけして申し訳ございません。確認いたしますので、請求書右上の番号を教えていただけますか？<br/>
                   なお、今月は年会費の更新月にあたりますが、そちらが含まれている可能性がございます。
                 </p>
               </div>
             </div>
           </div>
        </div>

        {/* 右サイドバー (情報パネル) */}
        <div className="w-1/4 bg-slate-50 border-l border-slate-200 p-3 flex flex-col gap-4">
           <div className="bg-white p-3 rounded border border-slate-200 shadow-sm">
             <h4 className="text-[10px] font-bold text-slate-400 uppercase mb-2">Customer Info</h4>
             <div className="space-y-2">
               <div className="flex justify-between text-xs"><span className="text-slate-500">Plan</span><span className="font-bold">Premium</span></div>
               <div className="flex justify-between text-xs"><span className="text-slate-500">Since</span><span className="font-bold">2021/04</span></div>
               <div className="flex justify-between text-xs"><span className="text-slate-500">LTV</span><span className="font-bold">¥480,000</span></div>
             </div>
           </div>

           <div className="bg-white p-3 rounded border border-slate-200 shadow-sm flex-grow">
             <h4 className="text-[10px] font-bold text-slate-400 uppercase mb-2">Suggested Actions</h4>
             <button className="w-full text-left text-xs p-2 bg-blue-50 text-blue-700 rounded mb-2 hover:bg-blue-100 border border-blue-100">
               📄 請求書再発行フォームを送る
             </button>
             <button className="w-full text-left text-xs p-2 bg-slate-50 text-slate-700 rounded mb-2 hover:bg-slate-100 border border-slate-200">
               👤 人間オペレーターに交代
             </button>
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
    // 【修正】全画面モニタリング（詳細パラメータ追加）
    visual: (
      <div className="h-full bg-zinc-900 rounded-lg p-4 flex flex-col font-mono text-xs relative overflow-hidden border border-zinc-700">
        {/* グリッドライン */}
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
        
        {/* ヘッダー */}
        <div className="flex justify-between items-center mb-6 relative z-10 border-b border-zinc-700 pb-4">
           <div className="flex gap-6">
             <div>
               <div className="text-zinc-500 text-[10px]">FACTORY UNIT</div>
               <div className="text-white font-bold text-lg">LINE-04</div>
             </div>
             <div>
               <div className="text-zinc-500 text-[10px]">SENSOR ID</div>
               <div className="text-white font-bold text-lg">VIB-9921</div>
             </div>
           </div>
           <div className="flex items-center gap-4">
             <div className="text-right">
               <div className="text-zinc-500 text-[10px]">AI PREDICTION</div>
               <div className="text-emerald-400 font-bold text-xl">HEALTHY</div>
             </div>
             <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]"></div>
           </div>
        </div>

        {/* メイングラフエリア */}
        <div className="flex-grow flex items-end gap-1 relative z-10 border-b border-zinc-600 pb-1 mb-4 h-1/2">
           {Array.from({length: 40}).map((_, i) => {
             const h = Math.random() * 40 + 20; // Random height
             const isSpike = i === 25 || i === 26;
             const finalH = isSpike ? 85 : h;
             const color = isSpike ? 'bg-yellow-500' : 'bg-emerald-500';
             return (
               <div key={i} className={`flex-1 ${color} opacity-80 transition-all duration-300 hover:opacity-100 rounded-t-sm`} style={{height: `${finalH}%`}}></div>
             );
           })}
           {/* 閾値ライン */}
           <div className="absolute top-[15%] w-full h-px bg-red-500 border-t border-dashed border-red-500 opacity-60"></div>
           <div className="absolute top-[12%] right-0 text-red-500 text-[10px]">CRITICAL THRESHOLD</div>
        </div>

        {/* サブデータパネル（3カラム） */}
        <div className="grid grid-cols-3 gap-4 h-1/3 relative z-10">
           <div className="bg-zinc-800/50 p-3 rounded border border-zinc-700">
             <div className="text-zinc-400 mb-2">FREQUENCY ANALYZER</div>
             <div className="flex items-end gap-0.5 h-12">
                {Array.from({length: 20}).map((_, i) => <div key={i} className="flex-1 bg-blue-500" style={{height: `${Math.random()*100}%`}}></div>)}
             </div>
             <div className="mt-2 text-blue-300 font-bold">440Hz <span className="text-zinc-500 text-[10px]">Peak</span></div>
           </div>
           
           <div className="bg-zinc-800/50 p-3 rounded border border-zinc-700">
             <div className="text-zinc-400 mb-2">TEMPERATURE</div>
             <div className="flex justify-between items-end h-12">
               <div className="text-3xl font-bold text-white">62.4<span className="text-sm text-zinc-500">°C</span></div>
               <div className="text-[10px] text-emerald-400">+0.2% vs Avg</div>
             </div>
             <div className="w-full bg-zinc-700 h-1 mt-2 rounded overflow-hidden">
               <div className="bg-white h-full w-[60%]"></div>
             </div>
           </div>

           <div className="bg-zinc-800/50 p-3 rounded border border-zinc-700 flex flex-col justify-between">
             <div className="text-zinc-400">MAINTENANCE</div>
             <div className="text-white text-sm">
               Next Schedule:<br/>
               <span className="font-bold text-lg">2025/12/20</span>
             </div>
             <div className="text-[10px] text-emerald-500">No urgent action required</div>
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
    // 【修正】大量処理スプリットスクリーン（左：レシート山、右：集計表）
    visual: (
      <div className="h-full flex gap-4 bg-slate-50 p-4 rounded-lg border border-slate-200">
        {/* 左側：入力（レシートの山） */}
        <div className="w-1/3 flex flex-col relative">
           <div className="text-center font-bold text-slate-500 text-xs mb-2 uppercase tracking-widest">Input: Raw Receipts</div>
           <div className="flex-grow relative flex items-center justify-center">
              {/* CSSでレシートの山を表現 */}
              {[1,2,3,4,5].map((i) => (
                <div key={i} className="absolute w-32 h-40 bg-white border border-slate-300 shadow-md p-2 flex flex-col items-center" 
                     style={{
                       transform: `rotate(${Math.random() * 20 - 10}deg) translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`,
                       zIndex: i
                     }}>
                   <div className="w-8 h-8 rounded-full bg-slate-100 mb-2"></div>
                   <div className="w-full h-1 bg-slate-200 mb-1"></div>
                   <div className="w-2/3 h-1 bg-slate-200 mb-4"></div>
                   <div className="w-full h-px bg-slate-200 mb-1"></div>
                   <div className="w-full h-px bg-slate-200 mb-1"></div>
                   <div className="mt-auto text-[8px] font-mono font-bold">¥{Math.floor(Math.random()*5000 + 100)}</div>
                </div>
              ))}
              {/* スキャナー光 */}
              <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-500 shadow-[0_0_15px_#3b82f6] z-10 animate-[scan_1.5s_linear_infinite]"></div>
           </div>
           <div className="bg-slate-200 text-center py-2 rounded mt-2">
             <div className="text-[10px] text-slate-500">Processing</div>
             <div className="font-bold text-slate-700">52 files / min</div>
           </div>
        </div>

        {/* 中央：変換矢印 */}
        <div className="flex flex-col justify-center items-center text-blue-400">
           <div className="text-3xl">➡</div>
           <div className="text-[10px] font-bold">AI-OCR</div>
        </div>

        {/* 右側：出力（集計表） */}
        <div className="flex-grow flex flex-col bg-white border border-emerald-200 rounded shadow-lg overflow-hidden">
           <div className="bg-emerald-600 text-white p-2 text-xs font-bold flex justify-between">
             <span>Exported Data.xlsx</span>
             <span>Success: 100%</span>
           </div>
           <div className="flex-grow overflow-y-auto">
             <table className="w-full text-[10px] text-left">
               <thead className="bg-emerald-50 text-emerald-800 sticky top-0">
                 <tr>
                   <th className="p-2 border-b">ID</th>
                   <th className="p-2 border-b">日付</th>
                   <th className="p-2 border-b">勘定科目 (AI)</th>
                   <th className="p-2 border-b">支払先</th>
                   <th className="p-2 border-b text-right">金額</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-100">
                 {[...Array(10)].map((_, i) => (
                   <tr key={i} className="hover:bg-slate-50">
                     <td className="p-2 text-slate-400">#{1001+i}</td>
                     <td className="p-2">2025/12/{10+i}</td>
                     <td className="p-2"><span className="bg-blue-50 text-blue-600 px-1 rounded border border-blue-100 font-bold">{i%3===0 ? '消耗品費' : i%3===1 ? '旅費交通費' : '交際費'}</span></td>
                     <td className="p-2">{i%3===0 ? 'Amazon.co.jp' : i%3===1 ? 'JR東日本' : '〇〇居酒屋'}</td>
                     <td className="p-2 text-right font-mono font-bold">¥{Math.floor(Math.random()*10000).toLocaleString()}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
           <div className="bg-slate-50 border-t border-slate-200 p-2 flex justify-end gap-2 text-xs">
              <span className="text-slate-500">Total:</span>
              <span className="font-bold text-slate-800">¥142,580</span>
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
    // 【修正】情報量MAXチャットUI（左：履歴、中：チャット、右：参照プレビュー）
    visual: (
      <div className="h-full bg-white flex rounded-lg border border-slate-200 shadow-sm overflow-hidden font-sans">
        {/* 左カラム：チャット履歴 (30%) */}
        <div className="w-1/3 bg-slate-50 border-r border-slate-200 flex flex-col">
          <div className="p-3 border-b border-slate-200 bg-white font-bold text-slate-700 text-xs">Chat History</div>
          <div className="flex-grow overflow-y-auto">
             <div className="p-3 border-b border-slate-100 bg-blue-50 border-l-4 border-blue-500 cursor-pointer">
               <div className="text-[10px] text-slate-500 mb-1">Today 14:30</div>
               <div className="text-xs font-bold text-slate-800 truncate">就業規則の交通費について</div>
             </div>
             <div className="p-3 border-b border-slate-100 hover:bg-white cursor-pointer opacity-60">
               <div className="text-[10px] text-slate-500 mb-1">Yesterday</div>
               <div className="text-xs text-slate-800 truncate">経費精算システムのURLは？</div>
             </div>
             <div className="p-3 border-b border-slate-100 hover:bg-white cursor-pointer opacity-60">
               <div className="text-[10px] text-slate-500 mb-1">3 days ago</div>
               <div className="text-xs text-slate-800 truncate">年末年始の休業期間</div>
             </div>
          </div>
          <div className="p-2 border-t border-slate-200">
             <button className="w-full py-1.5 bg-white border border-slate-300 rounded text-xs text-slate-600 font-bold hover:bg-slate-100">+ New Chat</button>
          </div>
        </div>

        {/* 中央：メインチャット (40%) */}
        <div className="w-2/5 flex flex-col bg-white border-r border-slate-200">
           <div className="flex-grow p-4 overflow-y-auto space-y-4">
              {/* ユーザーの質問 */}
              <div className="flex gap-2 flex-row-reverse">
                <div className="bg-slate-100 p-3 rounded-2xl rounded-tr-none text-xs text-slate-800 max-w-[90%]">
                   就業規則の交通費について教えて。上限はある？
                </div>
              </div>

              {/* AI回答 */}
              <div className="flex gap-2">
                 <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px] flex-shrink-0">AI</div>
                 <div className="space-y-2 max-w-[90%]">
                    <div className="p-3 rounded-2xl rounded-tl-none border border-blue-100 bg-blue-50/50 text-xs text-slate-800 leading-relaxed">
                       <p className="mb-2">就業規則 第4章に基づき、交通費は<span className="font-bold bg-yellow-100 px-1">月額3万円まで</span>全額支給されます。</p>
                       <p>これを超える分については、部長承認が必要となります。</p>
                    </div>
                    {/* 参照元リンク */}
                    <div className="flex gap-1 flex-wrap">
                       <span className="px-2 py-1 bg-white border border-slate-200 rounded text-[10px] text-blue-600 flex items-center gap-1 cursor-pointer hover:bg-blue-50 transition shadow-sm">
                          📄 就業規則.pdf (p.12)
                       </span>
                       <span className="px-2 py-1 bg-white border border-slate-200 rounded text-[10px] text-blue-600 flex items-center gap-1 cursor-pointer hover:bg-blue-50 transition shadow-sm">
                          📄 交通費申請マニュアル.pdf
                       </span>
                    </div>
                 </div>
              </div>
           </div>
           {/* 入力エリア */}
           <div className="p-3 border-t border-slate-200">
              <div className="relative">
                 <input type="text" className="w-full border border-slate-300 rounded-full pl-4 pr-10 py-2 text-xs focus:outline-none focus:border-blue-500" placeholder="質問を入力..." />
                 <button className="absolute right-1 top-1 w-7 h-7 bg-blue-600 rounded-full text-white flex items-center justify-center hover:bg-blue-700">↑</button>
              </div>
           </div>
        </div>

        {/* 右カラム：参照元プレビュー (30%) */}
        <div className="w-1/3 bg-slate-100 flex flex-col">
           <div className="p-2 border-b border-slate-200 flex justify-between items-center text-xs text-slate-500">
              <span>Source Preview</span>
              <span>⬇</span>
           </div>
           <div className="flex-grow p-4 overflow-hidden flex flex-col items-center justify-center">
              <div className="bg-white shadow-lg border border-slate-200 w-full h-full p-6 text-[8px] text-slate-400 overflow-hidden relative">
                 <div className="font-bold text-slate-800 text-sm mb-4 text-center border-b pb-2">就業規則</div>
                 <div className="space-y-2 opacity-50 blur-[0.5px]">
                    <div className="w-full h-2 bg-slate-200 rounded"></div>
                    <div className="w-full h-2 bg-slate-200 rounded"></div>
                    <div className="w-2/3 h-2 bg-slate-200 rounded"></div>
                 </div>
                 <div className="my-4 space-y-1">
                    <div className="font-bold text-slate-800 text-[10px] mb-1">第4章 交通費</div>
                    <div className="bg-yellow-100/50 p-1 border border-yellow-200 text-slate-800 leading-tight">
                       第12条 通勤交通費は、最も合理的かつ経済的な経路により算出した額とし、<span className="bg-yellow-200 font-bold">月額30,000円を限度</span>として支給する。
                    </div>
                 </div>
                 <div className="space-y-2 opacity-50 blur-[0.5px]">
                    <div className="w-full h-2 bg-slate-200 rounded"></div>
                    <div className="w-full h-2 bg-slate-200 rounded"></div>
                 </div>
              </div>
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
    answer: "はい、全く問題ありません。専門知識は一切不要です。",
    detail: "技術的な選定、開発、運用はすべて弊社が担当します。お客様には「今の業務のどこが大変か」「どうなれば楽になるか」という課題感だけをお話しいただければ、最適な解決策を専門用語を使わずにご提案いたします。"
  },
  {
    q: "費用はどのくらいかかりますか？",
    answer: "スモールスタートを推奨しており、数十万円からのプランもございます。",
    detail: "いきなり数百万円のシステムを作るのではなく、まずは最小限の機能で効果を検証する「PoC（実証実験）」から始めることをお勧めしています。また、IT導入補助金などの公的支援の活用サポートも行っており、実質的な負担を抑えた導入が可能です。"
  },
  {
    q: "既存のシステムと連携できますか？",
    answer: "はい、可能です。現在お使いのシステムと柔軟に連携します。",
    detail: "kintone、Salesforce、Chatwork、LINE、あるいは自社独自のデータベースなど、既存のツールを活かしたままAI機能だけを「アドオン（追加）」する開発を得意としています。業務フローを大きく変えることなく、生産性を向上させることができます。"
  },
  {
    q: "開発期間はどのくらいですか？",
    answer: "最短2週間〜1ヶ月程度でプロトタイプをご提示可能です。",
    detail: "まずは動くもの（試作版）を早期に触っていただくことを重視しています。そこで効果を確認していただき、フィードバックを反映させながら本開発へ進むため、開発期間が長引いて「結局使えないものができた」という失敗を防ぎます。"
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
              <h3 className="font-bold text-lg text-blue-900 mb-2">コストを抑えるための柔軟なご提案</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                補助金（IT導入補助金等）活用の可否を含め、御社の状況に合わせた最適な予算プランをご提案します。公的支援の活用検討からお手伝いし、導入コストの最小化を一緒に目指します。
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
                  仕組み・デモ画面を見る <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
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
              <div key={index} className="border border-zinc-200 rounded-lg bg-white overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-5 text-left bg-zinc-50 hover:bg-zinc-100 transition"
                >
                  <span className="font-bold text-zinc-800 text-sm md:text-base flex items-center">
                    <span className="text-blue-600 mr-3 text-lg">Q.</span>
                    {faq.q}
                  </span>
                  <span className={`transform transition-transform duration-200 text-blue-400 font-bold ${openFaqIndex === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openFaqIndex === index && (
                  <div className="p-6 border-t border-zinc-200 bg-white animate-in slide-in-from-top-2 duration-200">
                    {/* 1. 結論（簡潔に） */}
                    <p className="text-base font-bold text-emerald-700 mb-4 flex items-start">
                      <span className="mr-3 text-lg">A.</span>
                      {faq.answer}
                    </p>
                    
                    {/* 2. 余白と区切り線 */}
                    <hr className="border-dashed border-zinc-200 mb-4" />
                    
                    {/* 3. 詳細説明（理由付け） */}
                    <p className="text-sm text-zinc-600 leading-relaxed pl-8">
                      {faq.detail}
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
      {/* 強化版モーダル（フルスクリーン対応） */}
      {/* --------------------------------------------------------- */}
      {selectedCase && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4 bg-black/80 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedCase(null)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl h-[95vh] overflow-hidden relative animate-in fade-in zoom-in duration-200 flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 左側：ビジュアルエリア（70%） - プロ仕様ダッシュボード */}
            <div className="w-full md:w-[70%] bg-zinc-900 p-2 md:p-4 border-b md:border-b-0 md:border-r border-zinc-800 flex flex-col relative">
               {/* 閉じるボタン (スマホ用) */}
               <button 
                  onClick={() => setSelectedCase(null)}
                  className="md:hidden absolute top-4 right-4 z-50 bg-white/20 text-white rounded-full p-2"
               >
                  ✕
               </button>

               {/* 図解コンポーネントエリア */}
               <div className="flex-grow relative rounded-lg overflow-hidden bg-black shadow-2xl">
                 {selectedCase.visual}
               </div>
            </div>

            {/* 右側：テキストエリア（30%） */}
            <div className="w-full md:w-[30%] flex flex-col bg-white h-full">
              {/* 閉じるボタン (PC用) */}
              <div className="hidden md:flex justify-end p-4">
                <button 
                  onClick={() => setSelectedCase(null)}
                  className="text-zinc-400 hover:text-zinc-600 bg-zinc-100 rounded-full p-2 hover:bg-zinc-200 transition"
                >
                  ✕ 閉じる
                </button>
              </div>

              <div className="px-6 pb-6 overflow-y-auto flex-grow">
                <div className="mb-4">
                   <div className="flex items-center gap-3 mb-2">
                     <span className="text-2xl">{selectedCase.icon}</span>
                     <span className="inline-block bg-blue-50 text-blue-800 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border border-blue-100">
                       {selectedCase.target}
                     </span>
                   </div>
                   <h3 className="text-xl font-bold text-zinc-900 leading-tight">{selectedCase.title}</h3>
                </div>

                <div className="mb-6">
                   <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Mechanism</h4>
                   <p className="text-sm text-zinc-600 leading-relaxed">
                     {selectedCase.detail}
                   </p>
                </div>

                <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100 mb-6">
                   <h4 className="text-xs font-bold text-emerald-700 mb-2 flex items-center uppercase tracking-widest">
                     <span className="mr-2 text-lg">✨</span> Benefit
                   </h4>
                   <p className="text-emerald-900 text-sm font-medium leading-relaxed">
                     {selectedCase.benefit}
                   </p>
                </div>
              </div>

              {/* CTAエリア（固定） */}
              <div className="p-6 border-t border-zinc-100 bg-zinc-50 mt-auto shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
                <a 
                  href={`mailto:tetsuya.nakajima@smartcityai.co.jp?subject=【${selectedCase.title}】について相談したい`}
                  className="block w-full text-center bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  無料相談・見積もり依頼
                </a>
                <p className="text-center text-[10px] text-zinc-400 mt-2">
                  ※ 実際のデモをご覧になりたい方もこちら
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
