import React, { useState } from "react";
import { Link } from "react-router-dom";

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{marginBottom:12}}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width:"100%",
          padding:"12px 14px",
          background:"rgba(255,255,255,0.05)",
          border:"1px solid rgba(255,255,255,0.1)",
          borderRadius:"8px",
          color:"var(--text)",
          cursor:"pointer",
          textAlign:"left",
          fontWeight:600,
          fontSize:"14px"
        }}
      >
        {open ? "▼" : "▶"} {question}
      </button>
      {open && (
        <div style={{padding:"12px 14px", marginTop:4, background:"rgba(255,255,255,0.02)", borderRadius:"8px", borderLeft:"3px solid #93c5fd", fontSize:"14px", lineHeight:"1.6", color:"var(--muted)"}}>
          {answer}
        </div>
      )}
    </div>
  );
}

export default function Info() {
  return (
    <div className="container">
      <header className="card shadow" style={{padding:16, marginBottom:16}}>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <h1 style={{margin:"6px 0 10px"}}>정보 &amp; FAQ</h1>
          <Link to="/" style={{padding:"8px 12px", borderRadius:"8px", background:"rgba(147,197,253,0.2)", border:"1px solid rgba(147,197,253,0.5)", textDecoration:"none", color:"#93c5fd", fontSize:14}}>
            ← 검색기로 돌아가기
          </Link>
        </div>
      </header>

      <section className="card shadow" style={{padding:16, marginBottom:16}}>
        <h2 style={{fontSize:"18px", fontWeight:700, marginBottom:12}}>통풍(Gout)이란?</h2>
        <p style={{lineHeight:1.7, color:"var(--muted)"}}>
          통풍은 혈액에 요산(uric acid)이 과도하게 축적되어 결정을 형성하면서 관절에 염증을 일으키는 질환입니다. 주로 발가락에서 시작되며, 극심한 통증을 유발합니다.
        </p>
      </section>

      <section className="card shadow" style={{padding:16, marginBottom:16}}>
        <h2 style={{fontSize:"18px", fontWeight:700, marginBottom:12}}>퓨린(Purine)과 통풍의 관계</h2>
        <p style={{lineHeight:1.7, color:"var(--muted)", marginBottom:10}}>
          퓨린은 음식에 포함된 화합물로, 체내에서 분해되어 요산으로 변환됩니다. 따라서 <strong>퓨린이 많은 음식을 피하면 요산 수치를 낮출 수 있습니다.</strong>
        </p>
        <div style={{background:"rgba(251,113,133,0.1)", border:"1px solid rgba(251,113,133,0.3)", padding:12, borderRadius:8, fontSize:13, color:"#fecdd3"}}>
          ⚠️ <strong>주의:</strong> 이 도구는 건강 정보 제공용이며, 의료 진단이나 치료를 대체할 수 없습니다. 반드시 의료 전문가의 상담을 받으세요.
        </div>
      </section>

      <section className="card shadow" style={{padding:16, marginBottom:16}}>
        <h2 style={{fontSize:"18px", fontWeight:700, marginBottom:12}}>위험도 기준</h2>
        <div style={{display:"grid", gap:10}}>
          <div style={{display:"flex", gap:10, alignItems:"center"}}>
            <div style={{width:20, height:20, background:"rgba(147,197,253,0.3)", border:"1px solid #93c5fd", borderRadius:4}}></div>
            <span><strong style={{color:"#bfdbfe"}}>낮음 (≤50mg/100g)</strong> - 안전하게 섭취 가능</span>
          </div>
          <div style={{display:"flex", gap:10, alignItems:"center"}}>
            <div style={{width:20, height:20, background:"rgba(250,204,21,0.3)", border:"1px solid #fcc34d", borderRadius:4}}></div>
            <span><strong style={{color:"#fde68a"}}>보통 (51-150mg/100g)</strong> - 적당량만 섭취</span>
          </div>
          <div style={{display:"flex", gap:10, alignItems:"center"}}>
            <div style={{width:20, height:20, background:"rgba(251,113,133,0.3)", border:"1px solid #fb7185", borderRadius:4}}></div>
            <span><strong style={{color:"#fecdd3"}}>높음 (≥151mg/100g)</strong> - 가능한 피할 것</span>
          </div>
        </div>
      </section>

      <section className="card shadow" style={{padding:16, marginBottom:16}}>
        <h2 style={{fontSize:"18px", fontWeight:700, marginBottom:12}}>자주 묻는 질문 (FAQ)</h2>
        <div style={{marginTop:12}}>
          <FAQItem
            question="데이터는 어디서 나왔나요?"
            answer="이 데이터베이스는 두 가지 주요 출처를 사용합니다:
• Hou et al. (2021) - 최근 연구
• Kaneko et al. (2014) - 보완 데이터
최신 데이터를 우선하고 없는 경우 2014 데이터로 보충합니다."
          />
          <FAQItem
            question="퓨린 함량이 0mg인 음식도 있나요?"
            answer="네, 있습니다. 우유, 계란, 버터 등 일부 음식은 퓨린 함량이 0mg 또는 거의 없습니다. 이러한 음식은 통풍 환자도 안심하고 섭취할 수 있습니다."
          />
          <FAQItem
            question="음주가 통풍에 영향을 주나요?"
            answer="네, 맥주는 비교적 높은 퓨린 함량(7.6mg)을 가지고 있습니다. 특히 맥주 효모(2995.7mg)는 매우 높으므로 피해야 합니다. 알코올 일반적으로도 요산 배설을 방해하므로 제한하는 것이 좋습니다."
          />
          <FAQItem
            question="모든 생선이 위험한가요?"
            answer="아니오. 일부 생선(예: 대구 98mg, 송어 123.5mg)은 보통 수준이지만, 정어리(210.4mg), 멸치(303.9mg) 같은 작은 생선들은 높은 퓨린을 가지고 있습니다. 개별 음식의 퓨린 함량을 확인하세요."
          />
          <FAQItem
            question="콩류는 피해야 하나요?"
            answer="다양합니다. 두부와 두유는 낮은 수준(20-22mg)이지만, 말린 콩(172.5mg) 및 콩 관련 식품은 더 높을 수 있습니다. 신선한 형태는 상대적으로 낮고, 건조/농축 형태는 높습니다."
          />
          <FAQItem
            question="채소는 안전한가요?"
            answer="대부분의 채소는 낮은 퓨린 함량을 가지고 있습니다. 다만 시금치(51.4mg), 브로콜리(70mg) 같은 일부 채소는 보통~높은 수준입니다. 신선한 채소는 여전히 권장되며 양을 조절하면 됩니다."
          />
          <FAQItem
            question="검색 결과가 이상한데요?"
            answer="검색 결과는 한글과 영문 모두 매칭됩니다. 예를 들어 '두부'로 검색하면 'Tofu'를 포함한 모든 두부 관련 항목이 나옵니다. 필터와 정렬 옵션을 함께 사용하여 원하는 결과를 찾으세요."
          />
          <FAQItem
            question="의료 상담을 어디서 받을 수 있나요?"
            answer="통풍은 의료 전문가의 지도 하에 관리되어야 합니다. 류마티스 내과, 신장내과, 일반의 등과 상담하시기 바랍니다. 이 도구는 참고 자료일 뿐 의료 진단이나 치료를 대체할 수 없습니다."
          />
        </div>
      </section>

      <section className="card shadow" style={{padding:16, marginBottom:16}}>
        <h2 style={{fontSize:"18px", fontWeight:700, marginBottom:12}}>데이터 정보</h2>
        <p style={{fontSize:13, color:"var(--muted)", lineHeight:1.6}}>
          <strong>총 항목 수:</strong> 354개 음식/음료<br/>
          <strong>데이터 기준:</strong> 2021 (Hou) 우선, 2014 (Kaneko) 보완<br/>
          <strong>단위:</strong> mg/100g<br/>
          <strong>마지막 업데이트:</strong> 2024-10-19
        </p>
      </section>

      <footer style={{marginTop:16}} className="foot">
        이 정보는 교육 목적이며, 의료 진단이나 치료를 대체할 수 없습니다.
      </footer>
    </div>
  );
}
