import React, { useEffect, useMemo, useState } from "react";
import {
  Menu, X, MessageCircle, Mail, Phone, Search, Megaphone, BarChart3,
  Target, Rocket, Layers, Globe, Users, ClipboardCheck, ChevronLeft,
  ChevronRight, Star, Sparkles, Download
} from "lucide-react";

/** Dark Neon Portfolio (v4, baseURL-safe) + Resume + Client Logos */
const THEME = { primary:"#7c3aed", accent:"#06b6d4", surface:"#0b1220", card:"#0f172a" };
const INFO = {
  name: "MD SHAHADAT HOSEN SAGOR",
  email: "sagorgps5@gmail.com",
  phone: "+8801724027598",
  wa: "8801724027598",
  waText: "Hi%20Sagor%2C%20I%27m%20interested%20in%20your%20digital%20marketing%20services.%20Can%20we%20talk%3F",
};
const RESUME_PATH = `${import.meta.env.BASE_URL}resume.pdf`; // place resume.pdf in public/

const LINES = [
  "Profit-focused performance marketing.",
  "SEO & content that compound.",
  "Funnels + automation that convert.",
  "Crystal-clear analytics. Zero fluff.",
  "Let’s turn clicks into customers.",
];

const SERVICES = [
  { icon: <Search size={18} />, title: "Technical SEO", desc: "Audits, speed, schema & IA." },
  { icon: <Megaphone size={18} />, title: "Meta / Google Ads", desc: "Creative testing, scale safely." },
  { icon: <BarChart3 size={18} />, title: "Analytics & GTM", desc: "GA4 events, pixels, dashboards." },
  { icon: <Target size={18} />, title: "CRO", desc: "Landing pages & A/B tests." },
  { icon: <Mail size={18} />, title: "Email Automation", desc: "Flows, segmentation, nurture." },
  { icon: <Rocket size={18} />, title: "Product Launch", desc: "Go-to-market sprints & promos." },
  { icon: <Layers size={18} />, title: "Content Engine", desc: "Calendars, hooks & repurposing." },
  { icon: <Globe size={18} />, title: "Local SEO / GMB", desc: "Maps ranking & review flywheel." },
  { icon: <Users size={18} />, title: "Social Growth", desc: "Shorts/Reels + influencer ops." },
  { icon: <ClipboardCheck size={18} />, title: "Reporting", desc: "Weekly wins & next actions." },
];





/* ---------- Education ---------- */
const EDUCATION = [
  {
    degree: "Diploma in Computer Science",
    school: "Infra Polytechnic Institute, Barisal",
    year: "—"
  },
  {
    degree: "BSc in Computer Science",
    school: "University of Global Village (UGV), Barisal",
    year: "—"
  }
];

/* ---------- Clients (logos already under public/clients) ---------- */
const CLIENTS = [
  { logo: `${import.meta.env.BASE_URL}clients/alliance-consultancy-designer-and-digital-marketer-.jpg`, brand: "Alliance Consultancy Designer And Digital Marketer " },
  { logo: `${import.meta.env.BASE_URL}clients/belal-travels-content-creator-and-digital-marketer-.jpg`, brand: "Belal Travels Content Creator And Digital Marketer " },
  { logo: `${import.meta.env.BASE_URL}clients/fly-abroad-digital-marketer-.jpg`, brand: "Fly Abroad Digital Marketer " },
  { logo: `${import.meta.env.BASE_URL}clients/global-study-online-visual-designer-and-digital-marketer-.jpg`, brand: "Global Study Online Visual Designer And Digital Marketer " },
  { logo: `${import.meta.env.BASE_URL}clients/g-taj-tours-travels-digital-marketer-.jpg`, brand: "G Taj Tours Travels Digital Marketer " },
  { logo: `${import.meta.env.BASE_URL}clients/hello-next-barisalcontent-creator-social-media-marketer.jpg`, brand: "Hello Next Barisalcontent Creator Social Media Marketer" },
  { logo: `${import.meta.env.BASE_URL}clients/holiday-overseas-digital-marketer-.jpg`, brand: "Holiday Overseas Digital Marketer " },
  { logo: `${import.meta.env.BASE_URL}clients/nr-europe-international-content-creator-and-digital-marketer-.jpg`, brand: "Nr Europe International Content Creator And Digital Marketer " },
  { logo: `${import.meta.env.BASE_URL}clients/foreign-study-center-ltd-digital-marketer-.jpg`, brand: "Foreign Study Center Ltd Digital Marketer " },
  { logo: `${import.meta.env.BASE_URL}clients/afreen-tours-travels-limited-visual-designer-and-digital-markter-.jpg`, brand: "Afreen Tours Travels Limited Visual Designer And Digital Markter " }
];

const TESTIMONIALS = CLIENTS.map((c, i) => ({
  brand: c.brand,
  logo: c.logo,
  text: [
    "From strategy to execution—fast and reliable. ROAS doubled.",
    "We finally see clear reporting. CAC down with better funnels.",
    "SEO + content engine delivered steady, high-quality leads.",
    "Smart experiments. Real business impact—pipeline velocity is up.",
  ][i % 4]
}));

const REVIEWS = CLIENTS.map((c, i) => ({
  name: c.brand,
  stars: (i % 5 === 0) ? 4 : 5,
  text: [
    "Super responsive, strategy-first. Results came quickly.",
    "Clear reporting; we finally know what's working.",
    "Creative + funnel tweaks drove real conversion lift.",
    "Excellent tracking setup—numbers we can trust.",
    "Smart experiments and fast iterations."
  ][i % 5],
  logo: c.logo
}));

/* ---------- Projects (uses your exact filenames) ---------- */
const CASES = [
  { title: "Malaysia — Study Visa Campaign",
    mediaType: "image",
    src: `${import.meta.env.BASE_URL}projects/malaysia.png`,
    summary: "Foundation/Diploma/Bachelor — lead gen with landing page conversions." },

  { title: "Russia — Study in Russia",
    mediaType: "image",
    src: `${import.meta.env.BASE_URL}projects/russia.png`,
    summary: "Admissions without IELTS; SEO + social + lead nurture." },

  { title: "Italy — Visa Services",
    mediaType: "image",
    src: `${import.meta.env.BASE_URL}projects/italy.png`,
    summary: "Tourist, Business & Invitation — CRO + search ads." },

  { title: "United Kingdom — Masters Program",
    mediaType: "image",
    src: `${import.meta.env.BASE_URL}projects/uk.png`,
    summary: "No pre-CAS interview — content creatives + remarketing." },

  { title: "Ireland — Study Visa",
    mediaType: "image",
    src: `${import.meta.env.BASE_URL}projects/ireland.png`,
    summary: "Complete document support — funnel + WhatsApp automation." },

  { title: "Armenia — Work Visa (Skilled)",
    mediaType: "image",
    src: `${import.meta.env.BASE_URL}projects/armenia.png`,
    summary: "Construction/Electrician/Carpenter — local targeting + call leads." },

  { title: "New Zealand — Upcoming Intake",
    mediaType: "image",
    src: `${import.meta.env.BASE_URL}projects/newzealand.png`,
    summary: "Study with spouse — campaign optimization & inbound inquiries." },
];

const SKILLS = ["SEO","PPC","Meta Ads","Google Ads","TikTok Ads","Analytics","GA4","GTM","CRO","Funnels","Email","Automation","Content","Local SEO","Copywriting","Landing Pages","A/B Testing","Reporting","Strategy","Zapier","n8n"];

function useTypeDelete(lines, typing=55, hold=1200, erase=35){
  const [text,setText]=useState(""); const [i,setI]=useState(0); const [phase,setPhase]=useState("typing");
  useEffect(()=>{ let t; const line=lines[i%lines.length];
    if(phase==="typing"){ if(text.length<line.length) t=setTimeout(()=>setText(line.slice(0,text.length+1)),typing); else setPhase("hold"); }
    else if(phase==="hold") t=setTimeout(()=>setPhase("erase"), hold);
    else if(phase==="erase"){ if(text.length) t=setTimeout(()=>setText(text.slice(0,-1)),erase); else { setI(v=>(v+1)%lines.length); setPhase("typing"); } }
    return ()=>clearTimeout(t);
  },[phase,text,i,lines,typing,hold,erase]); return text;
}
function Stars({ n=5 }){ return <div className="flex items-center gap-0.5 text-yellow-400">{Array.from({length:n}).map((_,i)=>(<Star key={i} size={14} fill="currentColor"/>))}</div>; }

export default function App(){
  const typed = useTypeDelete(LINES);
  const [open,setOpen] = useState(false);
  const [ti,setTi] = useState(0);

  const go = (e,id)=>{ e?.preventDefault(); document.getElementById(id)?.scrollIntoView({behavior:"smooth", block:"start"}); setOpen(false); };
  useEffect(()=>{ const t=setInterval(()=>setTi(i=>(i+1)%Math.max(TESTIMONIALS.length,1)),5000); return ()=>clearInterval(t); },[]);

  const skills1 = useMemo(()=>[...SKILLS,...SKILLS],[]);
  const skills2 = useMemo(()=>[...[...SKILLS].reverse(), ...[...SKILLS].reverse()],[]);

  return (<div style={{background:THEME.surface}} className="min-h-screen text-gray-100 scroll-smooth">
    <style>{`:root{--p:${THEME.primary};--a:${THEME.accent}} .bg-card{background:${THEME.card}} .glass{background:linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.03));backdrop-filter:blur(8px)} .brandG{background-image:linear-gradient(135deg,var(--p),var(--a))} .brandT{background-image:linear-gradient(135deg,var(--p),var(--a));-webkit-background-clip:text;background-clip:text;color:transparent} @keyframes blink{0%,100%{opacity:1}50%{opacity:0}} #caret{animation:blink 1s step-end infinite} @keyframes marqueeL{0%{transform:translateX(0)}100%{transform:translateX(-50%)}} @keyframes marqueeR{0%{transform:translateX(0)}100%{transform:translateX(50%)}} .marqueeL{display:flex;width:max-content;animation:marqueeL 22s linear infinite} .marqueeR{display:flex;width:max-content;animation:marqueeR 28s linear infinite}`}</style>
    <div className="pointer-events-none fixed -z-10 inset-0"><div className="absolute -top-28 -left-28 w-[38rem] h-[38rem] rounded-full blur-3xl opacity-30 brandG"/><div className="absolute -bottom-28 -right-28 w-[38rem] h-[38rem] rounded-full blur-3xl opacity-30 brandG"/></div>

    {/* ---------- NAVBAR ---------- */}
<header className="sticky top-0 z-40">
  <nav className="glass border-b border-white/10 mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between rounded-b-2xl">
    <a href="#home" className="inline-flex items-center gap-2 font-semibold text-lg">
      <span className="brandG inline-block w-2.5 h-6 rounded-full"/>
      <span>{INFO.name} — <span className="brandT">Digital Marketer</span></span>
    </a>
    <div className="hidden md:flex items-center gap-4 text-sm text-gray-200">
      <a href="#services" onClick={(e)=>go(e,'services')} className="hover:text-white px-2">Services</a>
      <a href="#work" onClick={(e)=>go(e,'work')} className="hover:text-white px-2">Projects</a>
      <a href="#testimonials" onClick={(e)=>go(e,'testimonials')} className="hover:text-white px-2">Clients</a>
      <a href="#education" onClick={(e)=>go(e,'education')} className="hover:text-white px-2">Education</a>
      <a href={RESUME_PATH} download className="px-3 py-1.5 rounded-full border border-white/20 hover:bg-white/10 inline-flex items-center gap-1"><Download size={16}/> Resume</a>
      <a href="#contact" onClick={(e)=>go(e,'contact')} className="px-3 py-1.5 rounded-full brandG text-black font-medium">Contact</a>
    </div>
    <button className="md:hidden p-2 rounded-lg border border-white/10" onClick={()=>setOpen(true)} aria-label="Open menu"><Menu size={18}/></button>
  </nav>
  {open && (
    <div className="md:hidden glass border-t border-white/10 mx-2 mt-1 rounded-2xl overflow-hidden">
      {[['services','Services'],['work','Projects'],['testimonials','Clients'],['education','Education']].map(([id,label])=> (
        <a key={id} href={`#${id}`} onClick={(e)=>go(e,id)} className="block px-4 py-3 border-b border-white/10 text-sm">{label}</a>
      ))}
      <a href={RESUME_PATH} download className="block px-4 py-3 border-b border-white/10 text-sm">Download Resume (PDF)</a>
      <a href="#contact" onClick={(e)=>go(e,'contact')} className="block px-4 py-3 border-b border-white/10 text-sm">Contact</a>
      <button className="w-full flex items-center justify-center gap-2 py-3" onClick={()=>setOpen(false)}><X size={16}/> Close</button>
    </div>
  )}
</header>


    {/* HERO */}
    <section id="home" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-16 grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
        <div>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">Grow with <span className="brandT">clarity</span> & <span className="brandT">speed</span>.</h1>
          <p className="mt-3 text-gray-300 max-w-xl">SEO, ads, content & automation—built as a repeatable system focused on revenue.</p>
          <div className="mt-5 text-lg sm:text-2xl font-semibold text-gray-100"><span>{typed}</span><span id="caret" className="ml-1">|</span></div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`https://wa.me/${INFO.wa}?text=${INFO.waText}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full brandG text-black font-medium"><MessageCircle size={18}/> WhatsApp</a>
            <a href={`mailto:${INFO.email}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 hover:bg-white/10"><Mail size={18}/> Email</a>
            <a href={`tel:${INFO.phone}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 hover:bg-white/10"><Phone size={18}/> Call</a>
            <a href={RESUME_PATH} download className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:bg-white/10"><Download size={18}/> Download CV</a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md text-center">
            {[{k:"ROAS",v:"3–5×"},{k:"Leads",v:"1.4k+/qtr"},{k:"CAC",v:"↓45%"}].map((s,i)=>(
              <div key={i} className="bg-card rounded-2xl border border-white/10 p-3">
                <div className="text-xl font-bold">{s.v}</div><div className="text-xs text-gray-400">{s.k}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="brandG absolute -inset-3 -z-10 blur-2xl opacity-60 rounded-3xl" />
          <div className="bg-card rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="flex items-center gap-4 p-5 border-b border-white/10">
              <img src={`${import.meta.env.BASE_URL}sagor.jpg`} onError={(e)=>{e.currentTarget.src='https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=400&auto=format&fit=crop'}} alt="Portrait of Sagor" className="w-14 h-14 rounded-2xl object-cover" loading="eager" decoding="async"/>
              <div><div className="font-semibold text-gray-100">{INFO.name}</div><div className="text-xs text-gray-400">Digital Marketing Strategist</div></div>
            </div>
            <div className="p-5 text-sm text-gray-300 grid sm:grid-cols-2 gap-4">
              <div><div className="font-semibold flex items-center gap-2"><Sparkles size={16} className="text-cyan-300"/> Strengths</div><ul className="list-disc ml-4 mt-1 space-y-1"><li>Full-funnel strategy</li><li>Creative + copy</li><li>Numbers that matter</li></ul></div>
              <div><div className="font-semibold">Tooling</div><ul className="list-disc ml-4 mt-1 space-y-1"><li>GA4 / GTM</li><li>Meta & Google Ads</li><li>Zapier / n8n</li></ul></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* SERVICES */}
    <section id="services" className="scroll-mt-24 mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      <div className="flex items-end justify-between mb-6">
        <div><h2 className="text-xl sm:text-2xl font-bold">Services</h2><p className="text-gray-400 text-sm">Everything you need to grow—no fluff.</p></div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
        {SERVICES.map((s,i)=>(
          <div key={i} className="bg-card rounded-2xl border border-white/10 p-5 hover:border-white/20 transition">
            <div className="w-10 h-10 rounded-xl brandG grid place-items-center mb-3 text-black">{s.icon}</div>
            <div className="font-semibold">{s.title}</div>
            <div className="text-sm text-gray-400 mt-1">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>

    {/* TESTIMONIALS */}
    <section id="testimonials" className="scroll-mt-24 border-y border-white/10 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold">Client love</h2>
          <div className="flex gap-2">
            <button className="p-2 rounded-full bg-card border border-white/10" onClick={()=>setTi(i=>(i-1+Math.max(TESTIMONIALS.length,1))%Math.max(TESTIMONIALS.length,1))} aria-label="Previous"><ChevronLeft size={18}/></button>
            <button className="p-2 rounded-full bg-card border border-white/10" onClick={()=>setTi(i=>(i+1)%Math.max(TESTIMONIALS.length,1))} aria-label="Next"><ChevronRight size={18}/></button>
          </div>
        </div>

        {/* logos strip */}
        <div className="overflow-hidden rounded-2xl border border-white/10 mb-6">
          <div className="marqueeL gap-6 py-3 px-3 bg-card">
            {CLIENTS.map((c, i) => (
              <div key={i} className="h-10 flex items-center opacity-80 hover:opacity-100 transition">
                <img src={c.logo} alt={c.brand} className="h-10 object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* slider */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {TESTIMONIALS.map((t,i)=>(
            <article key={i} className={`bg-card rounded-2xl border border-white/10 p-5 shadow-sm ${i===ti? 'ring-1 ring-[var(--a)]':''}`} style={{opacity:i===ti?1:0.85}}>
              <Stars n={5} />
              <p className="text-gray-200 text-sm mt-2">“{t.text}”</p>
              <div className="mt-3 text-xs text-gray-400 flex items-center gap-2">
                <img src={t.logo} alt={t.brand} className="h-5 object-contain"/>
                <span>— {t.brand}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {REVIEWS.map((r,i)=>(
            <div key={i} className="bg-card rounded-2xl border border-white/10 p-4">
              <div className="flex items-center justify-between">
                <div className="font-semibold text-sm flex items-center gap-2">
                  <img src={r.logo} alt={r.name} className="h-5 object-contain"/>
                  <span>{r.name}</span>
                </div>
                <Stars n={r.stars}/>
              </div>
              <p className="text-sm text-gray-300 mt-2">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* PROJECTS */}
    <section id="work" className="scroll-mt-24 mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      <div className="mb-6"><h2 className="text-xl sm:text-2xl font-bold">Projects</h2><p className="text-gray-400 text-sm">Selected campaigns & experiments.</p></div>
      <div className="grid md:grid-cols-3 gap-5">
        {CASES.map((c,i)=>(
          <article key={i} className="bg-card rounded-3xl overflow-hidden border border-white/10 shadow-xl">
            <div className="relative aspect-[16/10]">
              <img src={c.src} alt={c.title} className="w-full h-full object-cover"/>
            </div>
            <div className="p-4"><div className="font-semibold">{c.title}</div><div className="text-sm text-gray-400 mt-1">{c.summary}</div></div>
          </article>
        ))}
      </div>
    </section>

    {/* SKILLS */}
    <section id="skills" className="scroll-mt-24 mx-auto max-w-6xl px-4 sm:px-6 pb-12">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Skills</h2>
      <div className="overflow-hidden rounded-2xl border border-white/10">
        <div className="marqueeL gap-3 py-3 px-3 bg-card border-b border-white/10">
          {["SEO","PPC","Meta Ads","Google Ads","TikTok Ads","Analytics","GA4","GTM","CRO","Funnels","Email","Automation","Content","Local SEO","Copywriting","Landing Pages","A/B Testing","Reporting","Strategy","Zapier","n8n"].concat(["SEO","PPC","Meta Ads"]).map((s,i)=> (<span key={`a-${i}`} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm">{s}</span>))}
        </div>
        <div className="marqueeR gap-3 py-3 px-3 bg-card">
          {["Strategy","Reporting","A/B Testing","Landing Pages","Copywriting","Local SEO","Content","Automation","Email","Funnels","CRO","GTM","GA4","Analytics","Google Ads","Meta Ads","PPC","SEO"].concat(["Strategy","Reporting"]).map((s,i)=> (<span key={`b-${i}`} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm">{s}</span>))}
        </div>
      </div>
    </section>

    {/* ---------- EDUCATION ---------- */}
<section id="education" className="scroll-mt-24 mx-auto max-w-6xl px-4 sm:px-6 pb-12">
  <h2 className="text-xl sm:text-2xl font-bold mb-6">Education</h2>
  <div className="grid md:grid-cols-2 gap-6">
    {EDUCATION.map((ed, i) => (
      <div key={i} className="p-6 rounded-2xl border border-white/10 bg-card shadow hover:shadow-lg transition">
        <div className="flex items-start gap-3">
          <span className="text-[var(--a)] mt-1 text-2xl">🎓</span>
          <div>
            <h3 className="font-semibold text-lg">{ed.degree}</h3>
            <p className="text-gray-300">{ed.school}</p>
            {ed.year !== "—" && <p className="text-sm text-gray-400">{ed.year}</p>}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>



    {/* CTA */}
    <section id="contact" className="scroll-mt-24 mx-auto max-w-6xl px-4 sm:px-6 pb-14">
      <div className="brandG text-black rounded-3xl p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div><h3 className="text-2xl font-extrabold">Want a quick growth plan?</h3><p className="text-black/70 mt-1 text-sm max-w-xl">Tell me your goal & budget—I'll reply with a simple roadmap and timelines.</p></div>
        <div className="flex gap-3">
          <a href={`mailto:${INFO.email}`} className="px-4 py-2 rounded-full bg-black text-white hover:opacity-90">Email me</a>
          <a href={`https://wa.me/${INFO.wa}?text=${INFO.waText}`} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full bg-white text-black hover:opacity-90">WhatsApp</a>
        </div>
      </div>
    </section>

    {/* FOOTER */}
    <footer className="mt-6 border-top">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2"><span className="brandG inline-block w-2.5 h-6 rounded-full"/><span className="font-semibold text-gray-100">{INFO.name} — Digital Marketing</span></div>
          <div className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</div>
        </div>
      </div>
    </footer>
  </div>);
}
