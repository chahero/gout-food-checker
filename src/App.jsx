import React, { useMemo, useState } from "react";
import db from "./data/purine_db.json";


const GROUP_ORDER = ["식물성", "버섯/해조", "동물성", "수산물", "양념/보충"];


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


export default function App() {
const [q, setQ] = useState("");
const [group, setGroup] = useState("");
const [subgroup, setSubgroup] = useState("");
const [sortKey, setSortKey] = useState("purine");


const rows = db?.rows ?? [];


const groups = ["", ...GROUP_ORDER.filter(g => rows.some(r => r.group === g))];


const subgroups = useMemo(() => {
const set = new Set(rows.filter(r => !group || r.group === group).map(r => r.subgroup));
return ["", ...Array.from(set)];
}, [rows, group]);


const filtered = useMemo(() => {
const query = q.trim().toLowerCase();
let arr = rows.filter(r => (
(!group || r.group === group) && (!subgroup || r.subgroup === subgroup) &&
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
}, [rows, q, group, subgroup, sortKey]);


return (
<div className="container">
<header className="card shadow" style={{padding:16, marginBottom:16}}>
<h1 style={{margin:"6px 0 10px"}}>Gout Food Checker <span className="tag muted">(2021 기준 + 2014 보완)</span></h1>
<div className="row" style={{marginTop:8}}>
<input className="input" placeholder="음식/영문명 검색 (예: 두부, natto, chicken)" value={q} onChange={e=>setQ(e.target.value)} />
<select className="select" value={group} onChange={e=>{setGroup(e.target.value); setSubgroup("");}}>
{groups.map(g => <option key={g} value={g}>{g || "전체 그룹"}</option>)}
</select>
<select className="select" value={subgroup} onChange={e=>setSubgroup(e.target.value)}>
{subgroups.map(s => <option key={s} value={s}>{s || "세부 분류"}</option>)}
</select>
<select className="select" value={sortKey} onChange={e=>setSortKey(e.target.value)}>
<option value="purine">퓨린 함량 오름차순</option>
<option value="name">이름(가나다)</option>
</select>
</div>
<p className="muted" style={{marginTop:8}}>단위: mg/100g. 위험도(≤50 낮음, 51–150 보통, ≥151 높음). 2021 데이터를 기준으로 하고, 없는 경우 2014 수치로 보완합니다.</p>
</header>


<section className="card shadow" style={{padding:16}}>
<table className="table">
<thead>
<tr className="muted">
<th style={{textAlign:"left", padding:"8px 14px"}}>이름</th>
<th style={{textAlign:"left", padding:"8px 14px"}}>그룹</th>
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
<td>
<div className="pill">{r.group}<span className="tag">{r.subgroup}</span></div>
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