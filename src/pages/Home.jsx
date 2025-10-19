import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import db from "../data/purine_db.json";

function classifyRisk(value) {
  if (value === null || value === undefined || isNaN(value)) return "-";
  if (value <= 50) return "low";
  if (value <= 150) return "moderate";
  return "high";
}

function RiskPill({ v }) {
  const risk = classifyRisk(v);
  const cls = risk === "high" ? "r-high" : risk === "moderate" ? "r-moderate" : risk === "low" ? "r-low" : "";
  return <span className={["risk", cls].join(" ")}>{risk === "-" ? "-" : risk}</span>;
}

export default function Home() {
  const [q, setQ] = useState("");
  const [sortKey, setSortKey] = useState("purine");

  const rows = db?.rows ?? [];

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    let arr = rows.filter(r => (
      (!query || [r.item_ko, r.item_en].join(" ").toLowerCase().includes(query))
    ));

    const getSortVal = (r) => {
      if (sortKey === "name") return r.item_ko;
      return r.purine_mg ?? 1e9;
    };

    return arr.sort((a,b) => {
      const av = getSortVal(a), bv = getSortVal(b);
      if (typeof av === "string") return av.localeCompare(bv, "ko");
      return av - bv;
    });
  }, [rows, q, sortKey]);

  return (
    <div className="container">
      <header className="card shadow" style={{padding:16, marginBottom:16}}>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <h1 style={{margin:"6px 0 10px"}}>
            Gout Food Checker <span className="tag muted">(2021 기준 + 2014 보완)</span>
          </h1>
          <Link to="/info" style={{padding:"8px 12px", borderRadius:"8px", background:"rgba(147,197,253,0.2)", border:"1px solid rgba(147,197,253,0.5)", textDecoration:"none", color:"#93c5fd", fontSize:14}}>
            정보 &amp; FAQ
          </Link>
        </div>
        <div className="row" style={{marginTop:8}}>
          <input className="input" placeholder="음식/영문명 검색 (예: 두부, natto, chicken)" value={q} onChange={e=>setQ(e.target.value)} />
          <select className="select" value={sortKey} onChange={e=>setSortKey(e.target.value)}>
            <option value="purine">퓨린 함량 오름차순</option>
            <option value="name">이름(가나다)</option>
          </select>
        </div>
        <p className="muted" style={{marginTop:8}}>
          단위: mg/100g. 위험도(≤50 낮음, 51–150 보통, ≥151 높음).
          {filtered.length > 0 && <strong> 검색 결과: {filtered.length}개</strong>}
        </p>
      </header>

      <section className="card shadow" style={{padding:16}}>
        <table className="table">
          <thead>
            <tr className="muted">
              <th style={{textAlign:"left", padding:"8px 14px"}}>이름</th>
              <th style={{textAlign:"right", padding:"8px 14px"}}>Purine (mg/100g)</th>
              <th style={{textAlign:"center", padding:"8px 14px"}}>위험도</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(r => (
              <tr key={r.id} className="tr">
                <td>
                  <div style={{fontWeight:600}}>{r.item_ko}</div>
                  <div className="muted" style={{fontSize:12}}>{r.item_en}</div>
                </td>
                <td style={{textAlign:"right"}}>{r.purine_mg ?? "-"}</td>
                <td style={{textAlign:"center"}}><RiskPill v={r.purine_mg} /></td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (<p className="muted" style={{padding:12}}>해당 조건에 맞는 항목이 없습니다. 검색어/필터를 조정해 보세요.</p>)}
      </section>

      <footer style={{marginTop:16}} className="foot">
        기준: 2021년 (보완: 2014). 단위 mg/100g. <span className="kbd">src/data/purine_db.json</span> 파일에서 관리.
      </footer>
    </div>
  );
}
