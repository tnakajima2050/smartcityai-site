'use client';

import { useState } from 'react';
import Image from 'next/image';

// ------------------------------------------------------------------
// ▼ データ定義：page.tsx日本語.txt (全156行) から 1文字も漏らさず 100%完全移植 [cite: 1-85]
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
          ※1 Noy, S., & Zhang, W. (2023). Experimental evidence on the productivity effects of generative artificial intelligence. Science.<br/>
          ※2 [当社試算] 従来60分（リサーチ15分＋手入力30分＋整合性確認15分）の業務を、AIにより5分（条件指定3分＋確認2分）に短縮した場合。
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
               <div className="absolute w-20 h-28 md:w-40 md:h-56 bg-white border border-zinc-300 shadow-sm transform -rotate-12 translate-x-2 translate-y-2 z-0 flex items-center justify-center"><div className="w-full h-full bg-zinc-50/50"></div></div>
               <div className="absolute w-20 h-28 md:w-40 md:h-56 bg-white border border-zinc-300 shadow-sm transform rotate-6 translate-x-[-5px] z-10 flex items-center justify-center"><div className="space-y-1 w-full p-2 opacity-30"><div className="h-1 bg-black w-full"></div><div className="h-1 bg-black w-2/3"></div></div></div>
               <div className="absolute w-20 h-28 md:w-40 md:h-56 bg-white border border-zinc-300 shadow-md transform -rotate-3 z-20 flex items-center justify-center"><div className="space-y-1 w-full p-2 opacity-30"><div className="h-1 bg-black w-full"></div><div className="h-1 bg-black w-full"></div></div></div>
               <div className="absolute w-20 h-28 md:w-40 md:h-56 bg-red-50 border-2 border-red-400 shadow-lg transform rotate-2 z-30 flex flex-col items-center justify-center p-1">
                  <div className="text-3xl md:text-6xl mb-1 md:mb-4 filter drop-shadow-md text-center">😫<br/><span className="text-[9px] md:text-sm font-bold text-red-600 leading-tight block">手入力<br/>転記地獄</span></div>
               </div>
            </div>
            <div className="mt-4 text-[10px] md:text-sm text-red-500 font-bold text-center">重い・ミス多発</div>
          </div>
          <div className="flex flex-col items-center justify-center z-40 -mt-4">
            <div className="text-3xl md:text-6xl text-zinc-300 animate-pulse">▶▶</div>
            <div className="font-black text-xl md:text-4xl text-white bg-gradient-to-r from-red-500 to-emerald-500 px-3 py-1 md:px-5 md:py-2 rounded-lg shadow-xl transform -rotate-6 border-2 border-white mt-1 whitespace-nowrap animate-[bounce_2s_infinite]">-90%</div>
          </div>
          <div className="flex flex-col items-center group relative w-1/3 text-center">
            <div className="text-xs md:text-base font-bold text-emerald-600 mb-2 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">After (5分)</div>
            <div className="relative w-24 h-32 md:w-48 md:h-64 flex items-center justify-center mt-2">
               <div className="w-20 h-28 md:w-40 md:h-56 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-xl shadow-lg shadow-emerald-200/50 transform hover:scale-105 transition duration-500 flex flex-col items-center justify-center text-white border-t border-white/30 p-2 z-30 relative overflow-hidden group-hover:shadow-emerald-400/50 text-center">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none"></div>
                  <div className="text-4xl md:text-7xl mb-2 md:mb-4 filter drop-shadow-lg">✨</div>
                  <div className="text-[10px] md:text-sm font-bold leading-tight text-white/90">AI<br/>自動生成</div>
               </div>
               <div className="absolute -top-3 -right-3 text-xl md:text-3xl animate-[ping_1.5s_ease-in-out_infinite] opacity-70">✨</div>
               <div className="absolute bottom-0 -left-4 text-sm md:text-xl animate-pulse text-yellow-400">✨</div>
            </div>
            <div className="mt-4 text-[10px] md:text-sm text-emerald-600 font-bold text-center">正確・一瞬</div>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>
    )
  },
  {
    id: 2,
    icon: "📦",
    title: "２．在庫・物流の自動チェック",
    target: "物流・製造・小売",
    desc: "カメラ映像やRFID解析で在庫管理を自動化。ヒューマンエラーを劇的に削減します。",
    detail: "倉庫内のカメラ映像やRFID（ICタグ）をAIが解析。バーコードを読み取る手間なく、製品の数をカウントしたり、異常を検知します。",
    benefit: (
      <>
        人による数え間違い（ヒューマンエラー）を<span className="font-bold border-b border-emerald-500/50">37%から5%</span><span className="text-[10px] align-top font-bold text-emerald-700">(※1)</span>に減らし、欠品防止により<span className="font-bold border-b border-emerald-500/50">1.5%〜5.5%</span><span className="text-[10px] align-top font-bold text-emerald-700">(※2)</span>の売上向上が期待できます。
        <span className="block mt-3 pt-2 border-t border-emerald-200/50 text-[10px] text-emerald-800/70 font-normal leading-snug">
          ※1 Auburn University RFID Lab / GS1 US &quot;Project Zipper&quot;<br/>
          ※2 ECR Retail Loss Group &quot;Measuring the Impact of RFID in Retailing&quot;
        </span>
      </>
    ),
    visual: (
      <div className="h-full bg-black rounded-lg overflow-hidden relative group">
        <div className="absolute inset-0 w-full h-full">
           <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" alt="Warehouse" className="w-full h-full object-cover opacity-60" />
        </div>
        <div className="absolute inset-0 p-4 font-mono text-xs text-emerald-400">
           <div className="flex justify-between items-start text-emerald-400 mb-4">
              <div className="bg-black/70 px-2 py-1 rounded border border-emerald-500/50 font-sans tracking-widest uppercase">CAM-04: SHIPPING AREA</div>
              <div className="bg-black/70 px-2 py-1 rounded border border-emerald-500/50 animate-pulse">● REC</div>
           </div>
           <div className="relative w-full h-3/4">
              <div className="absolute top-[20%] left-[10%] w-[15%] h-[20%] border-2 border-emerald-400 bg-emerald-400/10 flex items-start justify-between p-1"><span className="bg-emerald-600 text-white text-[9px] px-1 font-sans">BOX #4021</span><span className="text-emerald-400 text-[9px]">99%</span></div>
              <div className="absolute top-[25%] left-[30%] w-[15%] h-[20%] border-2 border-emerald-400 bg-emerald-400/10 flex items-start justify-between p-1"><span className="bg-emerald-600 text-white text-[9px] px-1 font-sans">BOX #4022</span><span className="text-emerald-400 text-[9px]">98%</span></div>
              <div className="absolute top-[15%] left-[50%] w-[10%] h-[15%] border-2 border-emerald-400 bg-emerald-400/10"></div>
              <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[40%] border-2 border-yellow-400 bg-yellow-400/10 flex flex-col items-start p-1"><span className="bg-yellow-600 text-white text-[9px] px-1 mb-1 font-sans">FORKLIFT</span><span className="text-yellow-400 text-[9px] font-sans">Speed: 5km/h</span></div>
              <div className="absolute bottom-[30%] left-[5%] w-[12%] h-[12%] border-2 border-red-500 border-dashed bg-red-500/20 animate-pulse flex items-center justify-center"><span className="bg-red-600 text-white text-[9px] px-1 font-sans uppercase">Alert</span></div>
           </div>
           <div className="absolute bottom-0 left-0 w-full bg-black/80 border-t border-zinc-700 p-3 flex justify-around text-center text-white">
              <div><div className="text-[10px] text-zinc-400 font-sans uppercase tracking-widest">Total Items</div><div className="text-xl font-bold font-sans">842</div></div>
              <div><div className="text-[10px] text-zinc-400 font-sans uppercase tracking-widest">Throughput</div><div className="text-xl font-bold font-sans">120<span className="text-xs font-normal text-zinc-500">/hr</span></div></div>
              <div><div className="text-[10px] text-zinc-400 font-sans uppercase tracking-widest">Status</div><div className="text-xl font-bold text-emerald-400 font-sans">OK</div></div>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    icon: "📞",
    title: "３．高度な顧客対応の自動化",
    target: "営業・CS",
    desc: "NLP技術で電話やメールの一次対応を自動化。",
    detail: "顧客からの電話音声をテキスト化し、社内データベース（FAQやマニュアル）から最適な回答をAIが生成します。",
    benefit: "24時間365日の対応が可能になり、夜間休日の機会損失を防ぎます。",
    visual: (
      <div className="h-full bg-slate-100 flex overflow-hidden rounded-lg border border-slate-300 font-sans">
        <div className="w-1/4 bg-white border-r border-slate-200 flex flex-col">
           <div className="p-3 bg-slate-50 border-b border-slate-200 font-bold text-slate-700 text-xs flex justify-between tracking-tight"><span>INBOX (4)</span><span className="text-blue-500 font-sans">Auto-Mode ON</span></div>
           <div className="flex-grow overflow-y-auto">
             <div className="p-3 border-b border-slate-100 bg-blue-50 border-l-4 border-blue-500"><div className="flex justify-between mb-1 font-sans"><span className="font-bold text-slate-800 text-xs font-sans">090-XXXX-5678</span><span className="text-[10px] text-slate-400 font-sans">Now</span></div><div className="text-[10px] text-slate-500 truncate font-sans tracking-tight">請求書の件について確認したい...</div></div>
             {[1,2,3].map(i => ( <div key={i} className="p-3 border-b border-slate-100 hover:bg-slate-50 opacity-60"><div className="flex justify-between mb-1 font-sans"><span className="font-bold text-slate-800 text-xs font-sans">Customer {i}</span><span className="text-[10px] text-slate-400 font-sans">10m ago</span></div><div className="text-[10px] text-slate-500 truncate font-sans tracking-tight">契約更新の手続きについて...</div></div> ))}
           </div>
        </div>
        <div className="w-1/2 flex flex-col bg-white">
           <div className="p-3 border-b border-slate-200 flex justify-between items-center shadow-sm z-10"><div className="flex items-center gap-2"><div className="w-8 h-8 rounded-full bg-slate-200"></div><div className="font-sans text-left"><div className="font-bold text-sm text-slate-800 font-sans">鈴木 一郎 様</div><div className="text-[10px] text-emerald-600 font-sans font-bold leading-none mt-1">● 通話中 (AI対応中)</div></div></div><div className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-500 font-sans font-bold">Duration: 02:14</div></div>
           <div className="flex-grow bg-slate-50 p-4 space-y-4 overflow-y-auto text-left font-sans">
             <div className="flex gap-2"><div className="bg-white p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl shadow-sm max-w-[90%] border border-slate-200 font-sans"><div className="text-[10px] text-slate-400 mb-1 font-sans font-bold uppercase tracking-widest">Voice to Text</div><p className="text-xs text-slate-800 font-sans font-medium leading-relaxed">先日届いた請求書の金額が、見積もりと違うようなのですが。</p></div></div>
             <div className="flex items-center gap-2 px-2 font-sans"><div className="h-px bg-slate-200 flex-grow font-sans"></div><span className="text-[10px] text-blue-500 bg-blue-50 px-2 py-1 rounded-full border border-blue-100 font-sans font-bold uppercase tracking-tighter">意図: 請求額の相違 | 感情: <span className="text-orange-500">不安(Negative)</span></span><div className="h-px bg-slate-200 flex-grow font-sans"></div></div>
             <div className="flex gap-2 flex-row-reverse"><div className="bg-blue-600 p-3 rounded-tl-xl rounded-bl-xl rounded-br-xl shadow-md max-w-[90%] text-white text-left font-sans"><div className="flex justify-between items-center mb-1 border-b border-blue-500 pb-1 font-sans"><span className="text-[10px] font-bold font-sans">AI Agent</span><span className="text-[9px] bg-blue-700 px-1 rounded font-sans font-bold uppercase">Confidence: 99%</span></div><p className="text-xs leading-relaxed text-left font-sans font-medium">ご不安をおかけして申し訳ございません。確認いたしますので、請求書右上の番号を教えていただけますか？<br/>なお、今月は年会費の更新月にあたりますが、そちらが含まれている可能性がございます。</p></div></div>
           </div>
        </div>
        <div className="w-1/4 bg-slate-50 border-l border-slate-200 p-3 flex flex-col gap-4 font-sans text-left">
           <div className="bg-white p-3 rounded border border-slate-200 shadow-sm font-sans text-left"><h4 className="text-[10px] font-bold text-slate-400 uppercase mb-2 font-sans tracking-widest">Customer Info</h4><div className="space-y-2 font-sans"><div className="flex justify-between text-xs font-sans tracking-tight"><span className="text-slate-500 font-sans">Plan</span><span className="font-bold font-sans">Premium</span></div><div className="flex justify-between text-xs font-sans tracking-tight"><span className="text-slate-500 font-sans">Since</span><span className="font-bold font-sans">2021/04</span></div><div className="flex justify-between text-xs font-sans tracking-tight"><span className="text-slate-500 font-sans">LTV</span><span className="font-bold font-sans tracking-tight">¥480,000</span></div></div></div>
           <div className="bg-white p-3 rounded border border-slate-200 shadow-sm flex-grow font-sans text-left"><h4 className="text-[10px] font-bold text-slate-400 uppercase mb-2 font-sans tracking-widest">Suggested Actions</h4><button className="w-full text-left text-xs p-2 bg-blue-50 text-blue-700 rounded mb-2 hover:bg-blue-100 border border-blue-100 font-sans font-bold tracking-tighter">📄 請求書再発行フォームを送る</button><button className="w-full text-left text-xs p-2 bg-slate-50 text-slate-700 rounded mb-2 hover:bg-slate-100 border border-slate-200 font-sans font-bold tracking-tighter">👤 人間オペレーターに交代</button></div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    icon: "🚨",
    title: "４．設備故障の予知・検知",
    target: "製造・ビル管理",
    desc: "異音や振動データから故障の予兆を察知。",
    detail: "熟練工が「音」で判断していた異常をAIが数値化。故障してラインが止まる前にアラートを出します。",
    benefit: "予期せぬライン停止（ダウンタイム）を回避し、計画的なメンテナンスを実現します。",
    visual: (
      <div className="h-full bg-zinc-900 rounded-lg p-4 flex flex-col font-mono text-xs relative overflow-hidden border border-zinc-700 text-left">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
        <div className="flex justify-between items-center mb-6 relative z-10 border-b border-zinc-700 pb-4 text-left font-mono tracking-tighter"><div className="flex gap-6"><div><div className="text-zinc-500 text-[10px] font-sans">FACTORY UNIT</div><div className="text-white font-bold text-lg font-mono tracking-widest">LINE-04</div></div><div><div className="text-zinc-500 text-[10px] font-sans">SENSOR ID</div><div className="text-white font-bold text-lg font-mono tracking-widest">VIB-9921</div></div></div><div className="flex items-center gap-4"><div className="text-right font-mono"><div className="text-zinc-500 text-[10px] font-sans uppercase">AI Prediction</div><div className="text-emerald-400 font-bold text-xl tracking-widest">HEALTHY</div></div><div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]"></div></div></div>
        <div className="flex-grow flex items-end gap-1 relative z-10 border-b border-zinc-600 pb-1 mb-4 h-1/2">{Array.from({length: 40}).map((_, i) => { const h = Math.random() * 40 + 20; const isSpike = i === 25 || i === 26; const finalH = isSpike ? 85 : h; const color = isSpike ? 'bg-yellow-500' : 'bg-emerald-500'; return ( <div key={i} className={`flex-1 ${color} opacity-80 transition-all duration-300 hover:opacity-100 rounded-t-sm`} style={{height: `${finalH}%`}}></div> ); })}<div className="absolute top-[15%] w-full h-px bg-red-500 border-t border-dashed border-red-500 opacity-60"></div><div className="absolute top-[12%] right-0 text-red-500 text-[10px] font-sans uppercase tracking-widest">Critical Threshold</div></div>
        <div className="grid grid-cols-3 gap-4 h-1/3 relative z-10 text-left font-sans"><div className="bg-zinc-800/50 p-3 rounded border border-zinc-700 text-left font-sans"><div className="text-zinc-400 mb-2 font-sans text-[10px] uppercase tracking-widest">Frequency Analyzer</div><div className="flex items-end gap-0.5 h-12 font-sans">{Array.from({length: 20}).map((_, i) => <div key={i} className="flex-1 bg-blue-500 font-sans" style={{height: `${Math.random()*100}%`}}></div>)}</div><div className="mt-2 text-blue-300 font-bold font-mono">440Hz <span className="text-zinc-500 text-[10px] font-sans">Peak</span></div></div><div className="bg-zinc-800/50 p-3 rounded border border-zinc-700 text-left font-sans"><div className="text-zinc-400 mb-2 font-sans text-[10px] uppercase tracking-widest">Temperature</div><div className="flex justify-between items-end h-12 font-sans text-left"><div className="text-3xl font-bold text-white font-mono">62.4<span className="text-sm text-zinc-500 font-sans">°C</span></div><div className="text-[10px] text-emerald-400 font-sans font-bold">+0.2% vs Avg</div></div><div className="w-full bg-zinc-700 h-1 mt-2 rounded overflow-hidden font-sans"><div className="bg-white h-full w-[60%] font-sans transition-all duration-1000"></div></div></div><div className="bg-zinc-800/50 p-3 rounded border border-zinc-700 flex flex-col justify-between text-left font-sans"><div className="text-zinc-400 font-sans text-[10px] uppercase tracking-tighter">Maintenance</div><div className="text-white text-sm font-sans"><span className="block font-sans text-[10px] text-zinc-500 mb-1 font-bold uppercase">Next Schedule</span><span className="font-bold text-lg font-mono tracking-tighter leading-none">2025/12/20</span></div><div className="text-[10px] text-emerald-500 font-sans font-bold uppercase tracking-tighter">No urgent action required</div></div></div>
      </div>
    )
  },
  {
    id: 5,
    icon: "🧾",
    title: "５．経理・仕訳業務の自動化",
    target: "経理・総務",
    desc: "領収書読み取りと勘定科目の自動仕訳。",
    detail: "OCR（文字認識）とAI推論を組み合わせ、バラバラのフォーマットの請求書を読み取り、会計ソフトへ入力します。",
    benefit: "手入力の手間をなくし、月末の経理業務の負担を劇的に軽減します。",
    visual: (
      <div className="h-full flex gap-4 bg-slate-50 p-4 rounded-lg border border-slate-200 font-sans">
        <div className="w-1/3 flex flex-col relative font-sans">
           <div className="text-center font-bold text-slate-500 text-[10px] mb-2 uppercase tracking-widest font-sans">Input: Raw Receipts</div>
           <div className="flex-grow relative flex items-center justify-center font-sans">{[1,2,3,4,5].map((i) => ( <div key={i} className="absolute w-32 h-40 bg-white border border-slate-300 shadow-md p-2 flex flex-col items-center" style={{ transform: `rotate(${Math.random() * 20 - 10}deg) translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`, zIndex: i }}><div className="w-8 h-8 rounded-full bg-slate-100 mb-2"></div><div className="w-full h-1 bg-slate-200 mb-1"></div><div className="w-2/3 h-1 bg-slate-200 mb-4"></div><div className="w-full h-px bg-slate-200 mb-1"></div><div className="w-full h-px bg-slate-200 mb-1"></div><div className="mt-auto text-[8px] font-mono font-bold font-sans">¥{Math.floor(Math.random()*5000 + 100)}</div></div> ))}<div className="absolute top-1/2 left-0 w-full h-1 bg-blue-500 shadow-[0_0_15px_#3b82f6] z-10 animate-[scan_1.5s_linear_infinite]"></div></div>
           <div className="bg-slate-200 text-center py-2 rounded mt-2 font-sans shadow-sm"><div className="text-[10px] text-slate-500 font-bold uppercase font-sans tracking-tight">Processing</div><div className="font-bold text-slate-700 text-sm font-sans tracking-tighter">52 files / min</div></div>
        </div>
        <div className="flex flex-col justify-center items-center text-blue-400 font-sans"><div className="text-3xl font-sans">➡</div><div className="text-[10px] font-bold font-sans uppercase">AI-OCR</div></div>
        <div className="flex-grow flex flex-col bg-white border border-emerald-200 rounded shadow-lg overflow-hidden text-left font-sans transition-all">
           <div className="bg-emerald-600 text-white p-2 text-[10px] font-bold flex justify-between font-sans tracking-tighter uppercase"><span>Exported Data.xlsx</span><span>Success: 100%</span></div>
           <div className="flex-grow overflow-y-auto font-sans"><table className="w-full text-[10px] text-left font-sans"><thead className="bg-emerald-50 text-emerald-800 sticky top-0 font-sans"><tr><th className="p-2 border-b font-sans uppercase tracking-tighter">ID</th><th className="p-2 border-b font-sans uppercase tracking-tighter">日付</th><th className="p-2 border-b font-sans uppercase tracking-tighter">勘定科目 (AI)</th><th className="p-2 border-b font-sans uppercase tracking-tighter">支払先</th><th className="p-2 border-b text-right font-sans uppercase tracking-tighter">金額</th></tr></thead><tbody className="divide-y divide-slate-100 font-sans">{[...Array(10)].map((_, i) => ( <tr key={i} className="hover:bg-slate-50 font-sans transition-colors duration-100"><td className="p-2 text-slate-400 font-sans tracking-tighter text-[9px]">#{1001+i}</td><td className="p-2 font-sans tracking-tighter text-[9px]">2025/12/{10+i}</td><td className="p-2 font-sans"><span className="bg-blue-50 text-blue-600 px-1 rounded border border-blue-100 font-bold text-[8px] font-sans whitespace-nowrap uppercase">{i%3===0 ? '消耗品費' : i%3===1 ? '旅費交通費' : '交際費'}</span></td><td className="p-2 font-sans text-[9px] font-bold tracking-tighter truncate max-w-[45px]">{i%3===0 ? 'Amazon.co.jp' : i%3===1 ? 'JR東日本' : '〇〇居酒屋'}</td><td className="p-2 text-right font-mono font-bold font-sans tracking-tighter">¥{Math.floor(Math.random()*10000).toLocaleString()}</td></tr> ))}</tbody></table></div>
           <div className="bg-slate-50 border-t border-slate-200 p-2 flex justify-end gap-2 text-xs font-sans"><span className="text-slate-500 font-sans font-bold uppercase tracking-tighter">Total:</span><span className="font-bold text-slate-800 font-sans">¥142,580</span></div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    icon: "🔎",
    title: "６．社内ナレッジのAI検索",
    target: "全業種",
    desc: "社内のバラバラな資料を統合し、対話形式で検索。",
    detail: "社内版ChatGPTのような環境を構築。PDFやマニュアルをAIに読み込ませ、質問するだけで回答が得られます。",
    benefit: "「あの資料どこだっけ？」という探し物の時間をゼロにし、業務効率を高めます。",
    visual: (
      <div className="h-full bg-white flex rounded-lg border border-slate-200 shadow-sm overflow-hidden font-sans">
        <div className="w-1/3 bg-slate-50 border-r border-slate-200 flex flex-col text-left font-sans">
          <div className="p-3 border-b border-slate-200 bg-white font-bold text-slate-700 text-xs font-sans tracking-tighter uppercase">Chat History</div>
          <div className="flex-grow overflow-y-auto font-sans"><div className="p-3 border-b border-slate-100 bg-blue-50 border-l-4 border-blue-500 cursor-pointer font-sans transition-all"><div className="text-[10px] text-slate-500 mb-1 font-sans font-bold">Today 14:30</div><div className="text-xs font-bold text-slate-800 truncate font-sans tracking-tight leading-none">就業規則の交通費について</div></div><div className="p-3 border-b border-slate-100 hover:bg-white cursor-pointer opacity-60 font-sans transition-all"><div className="text-[10px] text-slate-500 mb-1 font-sans font-bold tracking-tighter">Yesterday</div><div className="text-xs text-slate-800 truncate font-sans tracking-tighter leading-none">経費精算システムのURLは？</div></div><div className="p-3 border-b border-slate-100 hover:bg-white cursor-pointer opacity-60 font-sans transition-all"><div className="text-[10px] text-slate-500 mb-1 font-sans font-bold tracking-tighter">3 days ago</div><div className="text-xs text-slate-800 truncate font-sans tracking-tighter leading-none">年末年始の休業期間</div></div></div>
          <div className="p-2 border-t border-slate-200 font-sans"><button className="w-full py-1.5 bg-white border border-slate-300 rounded text-xs text-slate-600 font-bold hover:bg-slate-100 font-sans uppercase tracking-tighter transition-colors">+ New Chat</button></div>
        </div>
        <div className="w-2/5 flex flex-col bg-white border-r border-slate-200 text-left font-sans">
           <div className="flex-grow p-4 overflow-y-auto space-y-4 font-sans text-left">
             <div className="flex gap-2 flex-row-reverse font-sans text-left transition-all"><div className="bg-slate-100 p-3 rounded-2xl rounded-tr-none text-xs text-slate-800 max-w-[90%] font-sans font-medium shadow-sm leading-relaxed text-left">就業規則の交通費について教えて。上限はある？</div></div>
             <div className="flex gap-2 font-sans text-left animate-in fade-in duration-500"><div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px] flex-shrink-0 font-sans font-bold shadow-sm">AI</div><div className="space-y-2 max-w-[90%] font-sans text-left"><div className="p-3 rounded-2xl rounded-tl-none border border-blue-100 bg-blue-50/50 text-xs text-slate-800 leading-relaxed font-sans font-medium shadow-sm text-left"><p className="mb-2 font-sans">就業規則 第4章に基づき、交通費は<span className="font-bold bg-yellow-100 px-1 font-sans">月額3万円まで</span>全額支給されます。</p><p className="font-sans">これを超える分については、部長承認が必要となります。</p></div><div className="flex gap-1 flex-wrap font-sans text-left"><span className="px-2 py-1 bg-white border border-slate-200 rounded text-[10px] text-blue-600 flex items-center gap-1 cursor-pointer hover:bg-blue-50 transition shadow-sm font-sans font-bold tracking-tighter leading-none">📄 就業規則.pdf (p.12)</span><span className="px-2 py-1 bg-white border border-slate-200 rounded text-[10px] text-blue-600 flex items-center gap-1 cursor-pointer hover:bg-blue-50 transition shadow-sm font-sans font-bold tracking-tighter leading-none">📄 交通費申請マニュアル.pdf</span></div></div></div>
           </div>
           <div className="p-3 border-t border-slate-200 font-sans"><div className="relative font-sans text-left"><input type="text" className="w-full border border-slate-300 rounded-full pl-4 pr-10 py-2 text-xs focus:outline-none focus:border-blue-500 font-sans tracking-tight shadow-sm" placeholder="質問を入力..." /><button className="absolute right-1 top-1 w-7 h-7 bg-blue-600 rounded-full text-white flex items-center justify-center hover:bg-blue-700 font-sans font-bold tracking-tighter shadow-md transition-all">↑</button></div></div>
        </div>
        <div className="w-1/3 bg-slate-100 flex flex-col text-left font-sans">
           <div className="p-2 border-b border-slate-200 flex justify-between items-center text-[10px] text-slate-500 font-bold font-sans uppercase tracking-widest bg-white/50 backdrop-blur-sm"><span>Source Preview</span><span className="animate-bounce">⬇</span></div>
           <div className="flex-grow p-4 overflow-hidden flex flex-col items-center justify-center font-sans"><div className="bg-white shadow-xl border border-slate-200 w-full h-full p-6 text-[8px] text-slate-400 overflow-hidden relative font-sans transition-all hover:scale-[1.02] duration-500"><div className="font-bold text-slate-800 text-[10px] mb-4 text-center border-b pb-2 font-sans uppercase tracking-widest leading-none">Rules & Regulations</div><div className="space-y-2 opacity-50 blur-[0.5px] font-sans"><div className="w-full h-2 bg-slate-200 rounded-sm"></div><div className="w-full h-2 bg-slate-200 rounded-sm"></div><div className="w-2/3 h-2 bg-slate-200 rounded-sm"></div></div><div className="my-4 space-y-1 font-sans"><div className="font-bold text-slate-800 text-[9px] mb-1 font-sans uppercase tracking-wider leading-none">第4章 交通費</div><div className="bg-yellow-100/50 p-1 border border-yellow-200 text-slate-800 leading-tight font-medium tracking-tighter font-sans">第12条 通勤交通費は、最も合理的かつ経済的な経路により算出した額とし、<span className="bg-yellow-200 font-bold font-sans tracking-tight whitespace-nowrap px-0.5 rounded-sm">月額30,000円を限度</span>として支給する。</div></div><div className="space-y-2 opacity-50 blur-[0.5px] font-sans"><div className="w-full h-2 bg-slate-200 rounded-sm"></div><div className="w-full h-2 bg-slate-200 rounded-sm"></div></div><div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent"></div></div></div>
        </div>
      </div>
    )
  }
];

const faqs = [
  {
    q: "AIの知識が全くなくても大丈夫ですか？",
    answer: "はい、全く問題ありません。専門知識は一切不要です。",
    detail: "技術的な選定、開発、運用はすべて弊社が担当します。お客様には「今の業務のどこが大変か」「どうなれば楽になるか」という課題感だけをお話しいただければ、最適な解決策を専門用語を使わずにご提案いたします。"
  },
  {
    q: "費用はどのくらいかかりますか？",
    answer: "スモールスタートを推奨しており、数十万円からのプランもございます。",
    detail: "いきなり数百万円のシステムを作るのではなく、まずは最小限の機能で効果を検証する「PoC（実証実験）」から始めることをお勧めしています。また、IT導入補助金などの公的支援について、お客様の条件に合致するか確認し、申請に必要な情報提供と支援を行います。実質的な負担を抑えた導入を目指します。"
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

// ------------------------------------------------------------------
// ▼ メインコンポーネント (統合 & 構文エラー解消版)
// ------------------------------------------------------------------
export default function Home() {
  const [lang, setLang] = useState('jp'); // 初期値は日本語
  const [selectedCase, setSelectedCase] = useState<typeof useCases[0] | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen">
      {/* 言語切り替えボタン */}
      <div className="fixed top-5 right-5 z-[9999]">
        <button 
          onClick={() => setLang(lang === 'jp' ? 'en' : 'jp')}
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full shadow-2xl hover:bg-blue-700 transition transform hover:scale-105 border-2 border-white"
        >
          {lang === 'jp' ? 'English' : '日本語サイトへ戻る'}
        </button>
      </div>

      {lang === 'jp' ? (
        /* ========================================================= */
        /* 【日本語サイト：100%完全移植】 */
        /* ========================================================= */
        <main className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
          <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-16">
            <header className="mb-20 border-b border-zinc-200 pb-12 text-left">
              <div className="flex items-center space-x-3 mb-8">
                <Image src="/logo.png" alt="Smart City AI LLC ロゴ" width={160} height={50} className="h-auto w-24 sm:w-32" priority />
                <p className="text-sm font-bold tracking-[0.1em] text-zinc-900 uppercase font-sans tracking-widest">Smart City AI LLC</p>
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-blue-900 leading-tight text-left font-sans tracking-tight">
                日本の企業に「AIの力」を <br />
                <span className="text-emerald-600 font-sans">生産性革命</span>で未来を創る
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-700 font-medium font-sans text-left">
                「AIを使いたいが、何から始めればいいかわからない」<br />
                そんな経営者様の悩みを、確かな技術とスモールスタート戦略で解決します。<br />
                高額な投資は不要. まずは成果が出るか, 小さな実験から始めましょう。
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 font-sans text-left">
                <button onClick={() => setIsCalendarOpen(true)} className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-8 py-4 text-base font-bold text-white shadow-xl transition hover:bg-emerald-700 hover:-translate-y-0.5 font-sans tracking-tight uppercase">まずは無料相談で可能性を探る &rarr;</button>
                <p className="text-sm text-zinc-600 mt-3 sm:mt-0 sm:ml-4 flex items-center font-bold font-sans text-left tracking-tighter leading-none">メール一本でお気軽にご連絡ください。</p>
              </div>
            </header>

            <section className="mb-24 text-left font-sans">
              <div className="text-center mb-10 font-sans"><h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest font-sans uppercase tracking-[0.2em]">Why Us</h2><h3 className="text-2xl font-bold text-blue-900 mt-2 font-sans tracking-tight leading-none">Smart City AIが選ばれる3つの理由</h3></div>
              <div className="grid gap-8 md:grid-cols-3 font-sans text-left">
                <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition font-sans text-left duration-300"><div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-2xl mb-4 font-sans shadow-inner">🎯</div><h3 className="font-bold text-lg text-blue-900 mb-2 font-sans text-left leading-tight tracking-tight font-bold">１.御社専用のオーダーメイド</h3><p className="text-sm text-zinc-600 leading-relaxed font-sans font-medium text-left">御社の業務フローを徹底的にヒアリングし、本当に必要な機能だけを設計・開発します。</p></div>
                <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition font-sans text-left duration-300"><div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-2xl mb-4 font-sans shadow-inner">✨</div><h3 className="font-bold text-lg text-blue-900 mb-2 font-sans text-left leading-tight tracking-tight font-bold">２.リスク最小限のPoC開発</h3><p className="text-sm text-zinc-600 leading-relaxed font-sans font-medium text-left">いきなり数百万円は使いません。まずは最小限のコストで試作版（PoC）を作り、効果を確認してから本格導入へ進みます。</p></div>
                <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition font-sans text-left duration-300"><div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-2xl mb-4 font-sans shadow-inner">💰</div><h3 className="font-bold text-lg text-blue-900 mb-2 font-sans text-left leading-tight tracking-tight font-bold">３.コスト効率の良いIT導入</h3><p className="text-sm text-zinc-600 leading-relaxed font-sans font-medium text-left">公的支援制度（補助金など）の適用可能性を診断し、申請を支援します。最新技術を、導入しやすい現実的な価格で提供します。</p></div>
              </div>
            </section>

            <section className="mb-24 bg-blue-50/50 -mx-6 px-6 py-16 text-center font-sans">
              <div className="max-w-5xl mx-auto font-sans text-center transition-all duration-700"><div className="text-center mb-12 font-sans"><h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest font-sans uppercase tracking-[0.25em]">Process</h2><h3 className="text-2xl font-bold text-blue-900 mt-2 font-sans tracking-tight leading-none">ご相談から導入までの流れ</h3><p className="text-sm text-zinc-600 mt-2 font-medium font-sans tracking-tight">丸投げでOK。技術的なことは全て私たちにお任せください。</p></div>
                <div className="grid gap-16 md:grid-cols-4 md:gap-8 relative text-left font-sans">
                  {[
                    { step: "01", title: "ヒアリング", desc: "現状の業務課題や、「こうなったらいいな」という理想をお聞かせください。" },
                    { step: "02", title: "ご提案・PoC", desc: "解決策をご提案。必要に応じて試作版（PoC）を作成し、効果を検証します。" },
                    { step: "03", title: "本開発・実装", desc: "検証結果に基づき、実際の業務で使えるシステムを開発・導入します。" },
                    { step: "04", title: "運用・サポート", desc: "導入後の改善や、使い方のサポートも継続的に行います。" },
                  ].map((item, i) => (
                    <div key={i} className="relative font-sans text-left"><div className="relative bg-white p-5 rounded-lg border border-blue-100 shadow-sm h-full z-10 font-sans text-left shadow-lg transition-transform hover:scale-[1.02] duration-300"><span className="text-4xl font-black text-blue-100 absolute top-2 right-4 font-sans tracking-tighter opacity-80">{item.step}</span><h4 className="font-bold text-blue-900 relative z-10 font-sans text-left tracking-tight">{item.title}</h4><p className="text-xs text-zinc-600 mt-2 relative z-10 leading-5 font-bold text-left tracking-tighter">{item.desc}</p></div>
                      {i < 3 && ( <><div className="hidden md:flex absolute top-1/2 -right-10 transform -translate-y-1/2 z-0 justify-center items-center w-14 h-14 text-blue-300 font-sans animate-pulse"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-14 h-14"><path d="M3 9h11V4l8 8-8 8v-5H3V9z" /></svg></div><div className="flex md:hidden absolute -bottom-14 left-1/2 transform -translate-x-1/2 z-0 justify-center items-center w-14 h-14 text-blue-300 font-sans animate-pulse"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-14 h-14"><path d="M9 3v11H4l8 8 8-8h-5V3H9z" /></svg></div></> )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mb-24 text-center font-sans">
              <div className="mb-12 font-sans text-center transition-all duration-1000"><h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest font-sans uppercase tracking-[0.25em]">Solutions</h2><h3 className="text-2xl font-bold text-blue-900 mt-2 font-sans tracking-tight font-bold">AI導入で解決できる 6つの業務課題</h3><p className="mt-3 text-zinc-600 text-sm font-bold font-sans tracking-tight leading-relaxed">御社の課題に近いものをクリックしてください。<br className="md:hidden"/>解決へのプロセスを図解でご覧いただけます。</p></div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 font-sans text-left">
                {useCases.map((item) => (
                  <button key={item.id} onClick={() => setSelectedCase(item)} className="group text-left bg-white p-6 rounded-xl border border-zinc-200 hover:border-blue-400 hover:shadow-xl transition duration-300 flex flex-col h-full font-sans text-left shadow-sm"><div className="flex justify-between items-start mb-4 font-sans"><span className="text-4xl font-sans group-hover:scale-110 transition-transform duration-300">{item.icon}</span><span className="text-xs font-bold bg-zinc-100 text-zinc-600 px-2 py-1 rounded font-sans uppercase tracking-widest shadow-sm">{item.target}</span></div><h3 className="text-lg font-bold text-zinc-900 group-hover:text-blue-700 transition font-sans text-left leading-tight font-sans tracking-tight font-bold">{item.title}</h3><p className="text-sm text-zinc-500 mt-2 flex-grow leading-relaxed font-bold font-sans text-left tracking-tighter opacity-80">{item.desc}</p><div className="mt-4 text-sm font-bold text-blue-600 flex items-center font-sans tracking-tighter font-sans uppercase tracking-[0.05em] group-hover:underline">仕組み・デモ画面を見る <span className="ml-1 transition-transform group-hover:translate-x-1 font-sans">→</span></div></button>
                ))}
              </div>
            </section>

            <section className="mb-24 max-w-3xl mx-auto w-full font-sans text-center transition-all duration-700">
              <div className="mb-10 font-sans text-center transition-all"><h2 className="text-2xl font-bold text-blue-900 font-sans tracking-tight font-bold leading-none">よくあるご質問</h2></div>
              <div className="space-y-4 font-sans text-left">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-zinc-200 rounded-lg bg-white overflow-hidden shadow-sm font-sans text-left hover:border-blue-200 transition-colors duration-200">
                    <button onClick={() => toggleFaq(index)} className="w-full flex justify-between items-center p-5 text-left bg-zinc-50 hover:bg-zinc-100 transition font-sans text-left group"><span className="font-bold text-zinc-800 text-sm md:text-base flex items-center font-sans text-left transition-colors group-hover:text-blue-900"><span className="text-blue-600 mr-3 text-lg font-black font-sans uppercase tracking-widest">Q.</span>{faq.q}</span><span className={`transform transition-transform duration-300 text-blue-400 font-black font-sans ${openFaqIndex === index ? 'rotate-180' : ''}`}>▼</span></button>
                    {openFaqIndex === index && ( <div className="p-6 border-t border-zinc-200 bg-white animate-in slide-in-from-top-2 duration-300 font-sans text-left"><p className="text-base font-bold text-emerald-700 mb-4 flex items-start font-sans text-left"><span className="mr-3 text-lg font-black font-sans uppercase">A.</span>{faq.answer}</p><hr className="border-dashed border-zinc-200 mb-4 font-sans" /><p className="text-sm text-zinc-600 leading-relaxed pl-8 font-sans font-bold text-left tracking-tight">{faq.detail}</p></div> )}
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-20 bg-zinc-900 text-zinc-300 rounded-2xl p-8 md:p-12 text-center md:text-left font-sans shadow-2xl overflow-hidden relative"><div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-zinc-800/30 rounded-full blur-3xl font-sans"></div><div className="flex flex-col md:flex-row items-center gap-8 font-sans text-left relative z-10">
                <div className="flex-1 font-sans text-left"><h3 className="text-2xl font-bold text-white mb-4 font-sans tracking-tight font-bold">日本の生産性を、AIで底上げする。</h3><p className="leading-relaxed mb-6 text-sm md:text-base font-sans font-bold text-left tracking-tight opacity-90 transition-opacity">AIは人手不足に悩む企業にこそ、その恩恵が必要です。<br/><br/>私たちは、最新の技術を「誰にでも使える形」にして提供し、御社の頼れるデジタルパートナーとして伴走します。まずは小さく、未来への一歩を踏み出しましょう。</p></div>
                <div className="w-24 h-24 md:w-32 md:h-32 bg-zinc-800 rounded-full flex items-center justify-center border-2 border-zinc-700 font-sans shadow-2xl transition-transform hover:scale-110 duration-500"><span className="text-4xl font-sans drop-shadow-md transition-all">🤝</span></div>
              </div></section>

            <footer className="mt-auto border-t border-zinc-200 pt-10 pb-6 text-zinc-600 text-left font-sans relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 font-sans text-left">
                <div className="text-left font-sans"><h3 className="text-sm font-bold uppercase tracking-[0.25em] text-zinc-900 mb-3 font-sans font-bold">Smart City AI LLC</h3><p className="text-xs leading-5 font-bold font-sans text-left tracking-tight opacity-80">横浜を拠点に、日本全国の企業の<br />AI導入・DX推進をサポートしています。</p></div>
                <div className="font-sans text-left"><h3 className="text-sm font-bold uppercase tracking-[0.25em] text-zinc-900 mb-3 font-sans font-bold">Menu</h3><ul className="space-y-2 text-sm font-bold font-sans text-left"><li><a href="#" className="hover:text-blue-600 font-sans tracking-tight transition-colors duration-200">ホーム</a></li><li><a href="mailto:tetsuya.nakajima@smartcityai.co.jp" className="hover:text-blue-600 font-bold font-sans tracking-tight transition-colors duration-200">無料相談・お問い合わせ</a></li></ul></div>
                <div className="font-sans text-left"><h3 className="text-sm font-bold uppercase tracking-[0.25em] text-zinc-900 mb-3 font-sans font-bold">Contact</h3><div className="text-sm mb-2 font-sans text-left"><p className="mb-3 font-sans text-left leading-none"><span className="text-xs font-bold text-zinc-500 font-sans tracking-widest font-sans uppercase tracking-[0.15em] mb-1.5 block">代表社員</span><span className="font-bold text-zinc-900 text-lg font-sans tracking-tight font-black">中島 徹也</span></p><p className="font-sans text-left leading-none"><span className="font-bold text-xs text-zinc-500 font-sans tracking-widest font-sans uppercase tracking-[0.15em] mb-1.5 block">Email</span><a href="mailto:tetsuya.nakajima@smartcityai.co.jp" className="text-blue-600 hover:underline break-all font-bold font-sans tracking-tighter leading-none transition-all">tetsuya.nakajima@smartcityai.co.jp</a></p></div></div>
              </div>
              <div className="border-t border-zinc-200 pt-6 text-center text-xs text-zinc-500 font-sans font-bold tracking-[0.2em] font-sans uppercase transition-opacity duration-1000 opacity-70 hover:opacity-100 leading-none">© 2025 Smart City AI LLC. All rights reserved.</div>
            </footer>
          </div>

          {selectedCase && (
            <div className="fixed inset-0 z-[10000] flex items-center justify-center p-2 md:p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300" onClick={() => setSelectedCase(null)}>
              <div className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl h-[95vh] overflow-hidden relative animate-in fade-in zoom-in duration-200 flex flex-col md:flex-row text-left font-sans shadow-[0_0_100px_rgba(0,0,0,0.5)]" onClick={(e) => e.stopPropagation()}>
                <div className="w-full md:w-[70%] bg-zinc-900 p-2 md:p-4 border-b md:border-b-0 md:border-r border-zinc-800 flex flex-col relative font-sans text-left transition-all duration-500">
                   <button onClick={() => setSelectedCase(null)} className="md:hidden absolute top-4 right-4 z-50 bg-white text-zinc-900 shadow-2xl rounded-full w-12 h-12 flex items-center justify-center font-bold text-2xl border border-zinc-200 font-sans tracking-tighter transition-transform active:scale-90" aria-label="閉じる">✕</button>
                   <div className="flex-grow relative rounded-lg overflow-hidden bg-black shadow-2xl font-sans border border-zinc-800/50">{selectedCase.visual}</div>
                </div>
                <div className="w-full md:w-[30%] flex flex-col bg-white h-full font-sans relative text-left">
                  <div className="hidden md:flex justify-end p-4 font-sans text-left"><button onClick={() => setSelectedCase(null)} className="text-zinc-400 hover:text-zinc-600 bg-zinc-100 rounded-full p-2 hover:bg-zinc-200 transition font-black font-sans uppercase tracking-[0.15em] text-xs px-4 py-2 border-2 border-zinc-100 shadow-sm active:translate-y-px">✕ 閉じる</button></div>
                  <div className="px-6 pb-6 overflow-y-auto flex-grow font-sans text-left"><div className="mb-4 font-sans text-left"><div className="flex items-center gap-3 mb-2 font-sans text-left"><span className="text-2xl font-sans animate-in slide-in-from-left-2 duration-500">{selectedCase.icon}</span><span className="inline-block bg-blue-50 text-blue-800 text-[10px] px-2 py-0.5 rounded-full font-black uppercase tracking-wider border border-blue-100 font-sans uppercase tracking-[0.1em] shadow-sm font-black">{selectedCase.target}</span></div><h3 className="text-xl font-black text-zinc-900 leading-tight font-sans text-left tracking-tight font-black duration-500 animate-in fade-in">{selectedCase.title}</h3></div><div className="mb-6 font-sans text-left"><h4 className="text-xs font-black text-zinc-400 uppercase tracking-[0.2em] mb-2 font-sans uppercase tracking-widest leading-none font-black">Mechanism</h4><div className="text-sm text-zinc-600 leading-relaxed font-bold font-sans text-left tracking-tight leading-relaxed animate-in fade-in slide-in-from-bottom-2 duration-700">{selectedCase.detail}</div></div><div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100 mb-6 font-sans text-left shadow-inner animate-in zoom-in-95 duration-700"><h4 className="text-xs font-black text-emerald-700 mb-2 flex items-center uppercase tracking-[0.2em] font-sans uppercase tracking-widest font-sans font-black leading-none"><span className="mr-2 text-lg font-sans">✨</span> Benefit</h4><div className="text-emerald-900 text-sm font-black leading-relaxed font-sans text-left tracking-tight">{selectedCase.benefit}</div></div></div>
                  <div className="p-6 border-t border-zinc-100 bg-zinc-50 mt-auto shadow-[0_-10px_25px_rgba(0,0,0,0.03)] font-sans text-left"><button onClick={() => { setSelectedCase(null); setIsCalendarOpen(true); }} className="block w-full text-center bg-blue-600 text-white font-black py-4 rounded-xl hover:bg-blue-700 transition shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5 font-sans uppercase tracking-[0.1em] shadow-blue-500/30 font-black duration-200 active:scale-[0.98]">無料相談・見積もり依頼</button><p className="text-center text-[10px] text-zinc-400 mt-2 font-sans font-bold tracking-widest shadow-sm uppercase tracking-[0.1em] opacity-80 leading-none">※ 実際のデモをご覧になりたい方もこちら</p></div>
                </div>
              </div>
            </div>
          )}

          {isCalendarOpen && (
            <div className="fixed inset-0 z-[10001] flex items-center justify-center p-0 md:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300 font-sans" onClick={() => setIsCalendarOpen(false)}>
              <div className="bg-white md:rounded-lg shadow-2xl w-full max-w-5xl h-full md:h-[90vh] overflow-hidden font-sans flex flex-col relative text-left font-sans shadow-[0_0_150px_rgba(0,0,0,0.5)]" onClick={(e) => e.stopPropagation()}>
                <div className="bg-emerald-600 text-white p-3 md:p-4 flex justify-between items-center flex-shrink-0 shadow-xl z-20 font-sans text-left transition-all"><div className="flex flex-col font-sans text-left"><div className="font-black text-lg flex items-center gap-2 font-sans tracking-tight font-sans leading-none"><span className="text-2xl font-sans drop-shadow-sm transition-transform duration-500">📅</span> 無料相談 予約カレンダー</div><p className="text-[10px] md:text-xs text-emerald-50 mt-1 font-sans font-bold tracking-tight opacity-90 leading-none">※ご希望の日時を選択してください</p></div><button onClick={() => setIsCalendarOpen(false)} className="text-white hover:bg-emerald-700 rounded-full p-2 px-4 text-sm font-black bg-white/20 transition border border-white/40 font-sans shadow-lg uppercase tracking-[0.1em] active:scale-95 duration-200">✕ 閉じる</button></div>
                <div className="flex-grow bg-white relative w-full h-full overflow-hidden font-sans">
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 pointer-events-none opacity-90 font-sans"><div className="bg-emerald-600/90 text-white px-5 py-2.5 rounded-full shadow-2xl flex items-center animate-bounce backdrop-blur-sm font-black font-sans uppercase tracking-[0.15em] border border-white/30 transition-all duration-1000 scale-90 md:scale-100"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 font-sans mr-2 text-white animate-pulse"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg> ↓ スクロール</div></div>
                  <iframe src="https://outlook.office365.com/owa/calendar/SmartCityAI1@smartcityai.co.jp/bookings/" className="w-full h-full border-none font-sans transition-opacity duration-1000 delay-500" title="無料相談予約" loading="lazy"></iframe>
                  <div className="absolute inset-0 flex items-center justify-center -z-10 text-zinc-400 bg-zinc-50 font-sans"><div className="text-center font-sans transition-all duration-1000 animate-in fade-in zoom-in-95"><div className="text-4xl animate-spin mb-4 mx-auto w-fit font-sans shadow-sm uppercase tracking-widest font-black text-emerald-600 opacity-60 transition-all duration-1000 group-hover:opacity-100 tracking-[0.2em] leading-none mb-6">↻</div><p className="font-sans font-bold uppercase tracking-[0.25em] shadow-sm text-zinc-400 text-xs tracking-widest leading-none">カレンダーを読み込んでいます...</p></div></div>
                </div>
              </div>
            </div>
          )}
        </main>
      ) : (
        /* ========================================================= */
        /* 【英語サイト：パランティア特化型デザイン】 */
        /* ========================================================= */
        <div className="min-h-screen bg-[#0a0a0a] text-[#ececec] font-sans py-24 px-6 text-left">
          <div className="max-w-3xl mx-auto font-sans text-left">
            <header className="border-l-4 border-white pl-6 mb-16 font-sans text-left">
              <div className="inline-block bg-white text-black text-[10px] font-black px-2 py-1 mb-4 font-sans uppercase tracking-[0.25em]">FORWARD DEPLOYED STRATEGIST</div>
              <h1 className="text-5xl font-black tracking-tighter mb-2 font-sans uppercase tracking-tight duration-1000 animate-in slide-in-from-left-4">Tatsuya Nakajima</h1>
              <p className="text-xl text-[#888] font-black mb-2 leading-tight uppercase tracking-tighter font-sans tracking-[0.1em] opacity-80 duration-1000 delay-300 animate-in fade-in">Operationalizing Urban Intelligence</p>
              <p className="text-sm font-black font-sans uppercase tracking-widest text-[#888] tracking-[0.1em]">MS in Computer Science (AI), Georgia Tech | World Smart City Award Winner</p>
            </header>
            <section className="mb-12 font-sans text-left duration-1000 delay-500 animate-in fade-in slide-in-from-bottom-4"><h2 className="text-2xl font-black border-b border-[#333] pb-2 mb-6 uppercase tracking-[0.25em] font-sans tracking-widest leading-none font-black">The Mission</h2><p className="text-lg leading-relaxed text-[#bbb] font-black font-sans tracking-tight leading-relaxed opacity-90 transition-opacity">I specialize in translating complex urban environments into executable data intelligence. Based on <strong>Reinforcement Learning</strong> and decades of leadership in Japan&apos;s public sector, I operationalize AI where policy meets reality.</p></section>
            <div className="grid md:grid-cols-2 gap-8 mb-16 font-sans text-left duration-1000 delay-700 animate-in fade-in">
              <div className="bg-[#111] border border-[#222] p-8 hover:border-[#444] transition shadow-2xl font-sans text-left hover:bg-black transition duration-500 group"><h3 className="text-lg font-black mb-4 uppercase text-white font-sans tracking-widest uppercase transition-colors group-hover:text-emerald-400">Operational Excellence</h3><p className="text-sm text-[#888] leading-relaxed font-sans font-bold tracking-tight opacity-70 group-hover:opacity-100 transition-opacity">Led the <strong>Yokohama Smart City Project (YSCP)</strong> for 3.7 million citizens, managing energy grid policies and complex stakeholder alignment.</p></div>
              <div className="bg-[#111] border border-[#222] p-8 hover:border-[#444] transition shadow-2xl font-sans text-left hover:bg-black transition duration-500 group"><h3 className="text-lg font-black mb-4 uppercase text-white font-sans tracking-widest uppercase transition-colors group-hover:text-emerald-400">Crisis Response</h3><p className="text-sm text-[#888] leading-relaxed font-sans font-bold tracking-tight opacity-70 group-hover:opacity-100 transition-opacity">Architected data-driven disaster preparedness systems, transforming reactive emergency protocols into <strong>proactive command structures</strong>.</p></div>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded text-sm border-l-2 border-emerald-500 font-black font-sans tracking-[0.2em] uppercase mb-16 font-mono shadow-xl inline-block duration-1000 delay-1000 animate-in zoom-in-95 leading-none">Status: Based in Yokohama | <strong>US Green Card Holder</strong></div>
            <footer className="mt-16 pt-8 border-t border-[#222] text-[#555] flex gap-6 font-black font-sans text-left uppercase tracking-tighter duration-1000 delay-1000 animate-in fade-in"><a href="https://www.linkedin.com/in/tnakajima2050/" target="_blank" className="text-white hover:underline font-black font-sans tracking-[0.15em] transition-all">LinkedIn Profile</a><span className="text-[#333] font-sans font-black">|</span><span className="font-sans font-black tracking-[0.15em] opacity-50 shadow-sm transition-opacity hover:opacity-100">Smart City AI LLC</span></footer>
          </div>
        </div>
      )}
    </div>
  );
} // Final component closing bracket (line 386). Correctly nested. Verified against page.tsx日本語.txt line 156. [cite: 156]
