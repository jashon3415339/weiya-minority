// 少數決大逃殺 — 共用程式（手機與大螢幕都會載入，一般不用修改）
(function (G) {
  const CFG = G.GAME_CONFIG || { firebase: {} };
  const ROOT = CFG.dbRoot || "minority";
  const fb = CFG.firebase || {};
  const DEMO = !fb.apiKey || /^PASTE/i.test(fb.apiKey) || !fb.databaseURL || /^PASTE/i.test(fb.databaseURL);
  const DEMO_KEY = "minority_demo_db_v1";
  const SV = { ".sv": "timestamp" };

  function rid(n) {
    const a = "abcdefghijkmnpqrstuvwxyz23456789";
    let s = "";
    const r = (G.crypto && G.crypto.getRandomValues) ? G.crypto.getRandomValues(new Uint8Array(n)) : null;
    for (let i = 0; i < n; i++) s += a[(r ? r[i] : Math.floor(Math.random() * 256)) % a.length];
    return s;
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  // ---------- DEMO：用瀏覽器 localStorage 假裝成資料庫（同一個瀏覽器的分頁之間共用） ----------
  const parts = p => String(p).split("/").filter(Boolean);
  function resolveSv(v, now) {
    if (v && typeof v === "object") {
      if (v[".sv"] === "timestamp") return now;
      if (Array.isArray(v)) return v.map(x => resolveSv(x, now));
      const o = {};
      for (const k in v) { const r = resolveSv(v[k], now); if (r !== null && r !== undefined) o[k] = r; }
      return Object.keys(o).length ? o : null;
    }
    return v;
  }
  const Demo = {
    load() { try { return JSON.parse(G.localStorage.getItem(DEMO_KEY)) || {}; } catch (e) { return {}; } },
    save(t) { G.localStorage.setItem(DEMO_KEY, JSON.stringify(t)); Demo.emit(); },
    get(path) {
      let n = Demo.load();
      for (const k of parts(path)) { if (n == null || typeof n !== "object") return null; n = n[k]; }
      return n === undefined ? null : n;
    },
    setIn(t, path, val) {
      const ks = parts(path);
      let n = t;
      for (let i = 0; i < ks.length - 1; i++) {
        if (n[ks[i]] == null || typeof n[ks[i]] !== "object") n[ks[i]] = {};
        n = n[ks[i]];
      }
      const last = ks[ks.length - 1];
      if (val === null || val === undefined) delete n[last]; else n[last] = val;
    },
    update(obj) {
      const t = Demo.load(), now = Date.now();
      for (const p in obj) Demo.setIn(t, p, resolveSv(obj[p], now));
      Demo.save(t);
    },
    listeners: new Set(),
    emit() { for (const f of Demo.listeners) { try { f(); } catch (e) { console.error(e); } } },
    subscribe(f) { Demo.listeners.add(f); return () => Demo.listeners.delete(f); }
  };
  if (G.addEventListener) G.addEventListener("storage", e => { if (e.key === DEMO_KEY) Demo.emit(); });

  // ---------- 判定規則（大螢幕計算，手機不參與） ----------
  // alive: 本輪開始時的存活玩家 ID 陣列
  // answers: { 玩家ID: { c: 0|1|2, t: 伺服器時間 } }
  // 回傳 type: normal（一般）/ tie（最少人數並列）/ allSame（全部選同一個，這輪不算）/ noAnswers（沒人作答，這輪不算）
  function judge(alive, answers, deadline, graceMs) {
    answers = answers || {};
    const counts = [0, 0, 0], choice = {};
    for (const pid of alive) {
      const a = answers[pid];
      if (!a || ![0, 1, 2].includes(a.c)) continue;
      if (deadline && typeof a.t === "number" && a.t > deadline + (graceMs || 0)) continue; // 超時不算
      choice[pid] = a.c; counts[a.c]++;
    }
    const none = alive.filter(p => !(p in choice));
    const answered = alive.length - none.length;
    if (answered === 0) {
      return { type: "noAnswers", counts, choice, none, survOpts: [], survivors: alive.slice(), eliminated: [] };
    }
    const used = [0, 1, 2].filter(i => counts[i] > 0);
    if (used.length === 1) {
      const survivors = alive.filter(p => p in choice);
      return { type: "allSame", counts, choice, none, survOpts: used, survivors, eliminated: none.slice() };
    }
    const min = Math.min(...used.map(i => counts[i]));
    const survOpts = used.filter(i => counts[i] === min);
    const survivors = alive.filter(p => (p in choice) && survOpts.includes(choice[p]));
    const eliminated = alive.filter(p => !survivors.includes(p));
    return { type: survOpts.length > 1 ? "tie" : "normal", counts, choice, none, survOpts, survivors, eliminated };
  }

  const api = { CFG, ROOT, DEMO, Demo, SV, rid, esc, judge };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  G.MinorityCommon = api;
})(typeof window !== "undefined" ? window : globalThis);
