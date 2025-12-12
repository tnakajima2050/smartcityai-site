'use client';

import { useState } from 'react';
import Image from 'next/image';

// ------------------------------------------------------------------
// ▼ データ定義：6つの活用事例
//   Case 1: 「書類の山 vs 結晶」の劇的ビフォーアフター図解
//   Case 2: Unsplash実写画像を使用したリアルなAI解析デモ
// ------------------------------------------------------------------
const useCases = [
  {
    id: 1,
    icon: "✍️",
    title: "定型文書の自動化",
    target: "士業・事務",
    desc: "作成時間を90%以上削減。1時間かかっていた『手入力・転記』業務が、わずか5分で完結します。",
    detail: (
      <>
        <p className="mb-4">
          MIT（マサチューセッツ工科大学）の研究<span className="text-blue-600 font-bold">※1</span> で、生成AIは文書作成の時間を40%短縮し、品質も向上させることが実証されています。
        </p>
        <p className="mb-6">
          さらに本システムでは、「ゼロから考える時間」を完全になくし「入力と転記」に特化させることで、<span className="font-bold text-emerald-600">最大90%の工数削減</span><span className="text-blue-600 font-bold">※2</span> を実現します。
        </p>
        <div className="text-[10px] text-zinc-500 bg-zinc-100 p-3 rounded border border-zinc-200 space-y-2 leading-relaxed">
          <p><span className="text-blue-600 font-bold">※1 [出典]</span> Noy, S., & Zhang, W. (2023). Experimental evidence on the productivity effects of generative artificial intelligence. Science.</p>
          <p><span className="text-blue-600 font-bold">※2 [当社試算]</span> 従来60分（リサーチ15分＋手入力30分＋整合性確認15分）かかっていた業務を、AIにより5分（条件指定3分＋人による最終確認2分）に短縮した場合。</p>
        </div>
      </>
    ),
    benefit: "単純な作成業務を自動化し、人件費を大幅に圧縮。浮いた時間で、営業や顧客対応など「利益を生む業務」に集中できます。",
    // ▼ ビジュアル：【案A】「書類の山(カオス)」vs「スマートな結晶(解決)」
    visual: (
      <div className="h-full bg-slate-50 flex flex-col rounded-lg border border-zinc-200 p-4 font-sans relative overflow-hidden">
        <div className="text-center font-bold text-zinc-800 mb-6 z-10 relative">劇的ビフォーアフター</div>
        
        <div className="flex-grow flex items-center justify-around relative z-10 px-2 pb-4">
          
          {/* Left: Before (Chaos / 書類の山) */}
          <div className="flex flex-col items-center group relative w-1/3">
            <div className="text-xs font-bold text-red-500 mb-2 bg-red-50 px-2 py-0.5 rounded-full border border-red-100">Before (60分)</div>
            <div className="relative w-24 h-32 flex items-center justify-center mt-2">
               {/* 乱雑に積み重なる書類 (CSSで表現) */}
               <div className="absolute w-20 h-28 bg-white border border-zinc-300 shadow-sm transform -rotate-12 translate-x-2 translate-y-2 z-0 flex items-center justify-center"><div className="w-full h-full bg-zinc-50/50"></div></div>
               <div className="absolute w-20 h-28 bg-white border border-zinc-300 shadow-sm transform rotate-6 translate-x-[-5px] z-10 flex items-center justify-center">
                  <div className="space-y-1 w-full p-2 opacity-30"><div className="h-1 bg-black w-full"></div><div className="h-1 bg-black w-2/3"></div></div>
               </div>
               <div className="absolute w-20 h-28 bg-white border border-zinc-300 shadow-md transform -rotate-3 z-20 flex items-center justify-center">
                  <div className="space-y-1 w-full p-2 opacity-30"><div className="h-1 bg-black w-full"></div><div className="h-1 bg-black w-full"></div></div>
               </div>
               {/* 一番上の書類（赤枠） */}
               <div className="absolute w-20 h-28 bg-red-50 border-2 border-red-400 shadow-lg transform rotate-2 z-30 flex flex-col items-center justify-center p-1">
                  <div className="text-3xl mb-1 filter drop-shadow-md">😫</div>
                  <div className="text-[9px] font-bold text-red-600 leading-tight text-center">手入力<br/>転記地獄</div>
               </div>
            </div>
            <div className="mt-4 text-[10px] text-red-500 font-bold text-center">重い・ミス多発</div>
          </div>

          {/* Center: Arrow & Badge */}
          <div className="flex flex-col items-center justify-center z-40 -mt-4">
            <div className="text-3xl text-zinc-300 animate-pulse">▶▶</div>
            <div className="font-black text-xl text-white bg-gradient-to-r from-red-500 to-emerald-500 px-3 py-1 rounded-lg shadow-xl transform -rotate-6 border-2 border-white mt-1 whitespace-nowrap animate-[bounce_2s_infinite]">
              -90%
            </div>
          </div>

          {/* Right: After (Smart Crystal / AIカード) */}
          <div className="flex flex-col items-center group relative w-1/3">
            <div className="text-xs font-bold text-emerald-600 mb-2 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">After (5分)</div>
            <div className="relative w-24 h-32 flex items-center justify-center mt-2">
               {/* スマートなカード */}
               <div className="w-20 h-28 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-xl shadow-lg shadow-emerald-200/50 transform hover:scale-105 transition duration-500 flex flex-col items-center justify-center text-white border-t border-white/30 p-2 z-30 relative overflow-hidden group-hover:shadow-emerald-400/50">
                  {/* 光の反射エフェクト */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none"></div>
                  <div className="text-4xl mb-2 filter drop-shadow-lg">✨</div>
                  <div className="text-[10px] font-bold text-center leading-tight text-white/90">AI<br/>自動生成</div>
               </div>
               {/* キラキラ装飾 */}
               <div className="absolute -top-3 -right-3 text-xl animate-[ping_1.5s_ease-in-out_infinite] opacity-70">✨</div>
               <div className="absolute bottom-0 -left-4 text-sm animate-pulse text-yellow-400">✨</div>
            </div>
            <div className="mt-4 text-[10px] text-emerald-600 font-bold text-center">正確・一瞬</div>
          </div>

        </div>
        
        {/* 背景装飾 */}
        <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"></div>
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
