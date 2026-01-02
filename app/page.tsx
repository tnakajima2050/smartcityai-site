'use client'; // 切り替え機能を動かすために必要です

import React, { useState } from 'react';

export default function CombinedPage() {
  const [lang, setLang] = useState('jp'); // 初期状態は日本語

  return (
    <div style={{ position: 'relative' }}>
      {/* 言語切り替えボタン：画面の右上に固定 */}
      <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}>
        <button 
          onClick={() => setLang(lang === 'jp' ? 'en' : 'jp')}
          style={{ padding: '10px 20px', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          {lang === 'jp' ? 'English Version / パランティア向け' : '日本語サイトに戻る'}
        </button>
      </div>

      {lang === 'jp' ? (
        /* --- ここに日本語サイトの内容（仮） --- */
        <div style={{ padding: '100px 20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
          <h1 style={{ fontSize: '2.5rem', color: '#003366' }}>日本の企業に「AIの力」を</h1>
          <p>現在、日本語のメインサイトが表示されています。</p>
          <p style={{ color: '#666' }}>※後ほどステップ1で保存した元のコードと差し替えます</p>
        </div>
      ) : (
        /* --- ここにパランティア向け英語サイトの内容 --- */
        <div style={{ backgroundColor: '#0a0a0a', color: '#ececec', fontFamily: 'Inter, sans-serif', minHeight: '100vh', padding: '100px 20px' }}>
          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <header style={{ borderLeft: '3px solid #fff', paddingLeft: '25px', marginBottom: '60px' }}>
              <div style={{ background: '#fff', color: '#0a0a0a', fontSize: '0.7rem', fontWeight: '900', padding: '2px 8px', display: 'inline-block', marginBottom: '15px' }}>FORWARD DEPLOYED STRATEGIST</div>
              <h1 style={{ fontSize: '3rem', margin: 0, letterSpacing: '-0.05em' }}>Tatsuya Nakajima</h1>
              <p style={{ fontSize: '1.2rem', color: '#888' }}>Operationalizing Urban Intelligence for National-Scale Infrastructure.</p>
            </header>
            <section style={{ marginBottom: '50px' }}>
              <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid #333', paddingBottom: '10px', marginBottom: '20px' }}>The Mission</h2>
              <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>Bridging the gap between high-level AI theory and boots-on-the-ground execution in smart city infrastructure.</p>
            </section>
            <div style={{ background: '#1a1a1a', padding: '20px', borderRadius: '4px' }}>
              <strong>Status:</strong> US Green Card Holder / MSCS Georgia Tech
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
