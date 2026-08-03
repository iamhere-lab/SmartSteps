"use client";

import { FormEvent, useState } from "react";

const LOGO = "https://i0.wp.com/smartsteps.in/wp-content/uploads/2021/12/ss-new-logo.png";
const WA = "https://wa.me/919715718718?text=Hi%20SmartSteps%2C%20I%27d%20like%20free%20career%20counselling.";
const employers = ["Wells Fargo","BNY Mellon","Accenture","Genpact","IBM","Cognizant","FactSet","Infosys","Wipro","Capgemini","HSBC","Amazon","Bank of America","TCS","HCL","Broadridge","BNP Paribas","ADP","Invesco","Alter Domus","CITCO Funds","Apex Group","IQ-EQ","Corteva"];

const programs = [
  { slug:"gafp", eyebrow:"For freshers", title:"Global Accounting & Finance Program", meta:"12 weeks · Full-day classroom · Hyderabad", text:"Two finance certificate tracks, Microsoft MO-200, Pearson MePro English and complete placement preparation.", color:"blue" },
  { slug:"pe-fund-accounting", eyebrow:"For working professionals", title:"Private Equity Fund Accounting", meta:"12 weeks · 100% live online", text:"Capital calls, waterfalls, NAV packs and quarter-close simulation for global fund-administrator roles.", color:"orange" },
  { slug:"kyc-aml", eyebrow:"Compliance careers", title:"KYC & AML Analyst Program", meta:"Live training · Practical casework", text:"CDD, EDD, transaction monitoring, sanctions screening and SAR drafting through real case practice.", color:"navy" },
  { slug:"oracle-ebs-fusion", eyebrow:"ERP finance careers", title:"Oracle EBS and Fusion Program", meta:"Classroom training · Placement support", text:"Oracle Financials, P2P, O2C, R2R, reconciliations and journals with practical ERP exposure.", color:"blue" },
  { slug:"accounting-analyst", eyebrow:"Accounting careers", title:"Accounting Analyst Course", meta:"Job-oriented finance training", text:"Accounting fundamentals, financial reporting, AP, AR, GL, Excel and structured placement preparation.", color:"orange" }
];

const pathwayCourses = [
  { no:"01", slug:"gafp", title:"Global Accounting & Finance Program (GAFP)", tag:"Finance operations", text:"Build job-ready skills in accounting operations, investment banking operations, Excel, communication and placement preparation.", meta:"B.Com · BBA · M.Com · MBA" },
  { no:"02", slug:"oracle-ebs-fusion", title:"Oracle EBS and Fusion Program", tag:"ERP finance", text:"Learn Oracle Financials across procurement, sales and general-ledger cycles with practical assignments and placement support.", meta:"Freshers & professionals" },
  { no:"03", slug:"kyc-aml", title:"KYC & AML Analyst Program", tag:"Compliance careers", text:"Prepare for KYC, due diligence, transaction-monitoring and sanctions-screening roles through practical casework.", meta:"Live, job-oriented training" },
  { no:"04", slug:"accounting-analyst", title:"Accounting Analyst Course", tag:"Accounting careers", text:"Strengthen accounting, reporting, AP, AR, GL and Excel skills for analyst roles in global organisations.", meta:"Commerce & finance graduates" }
];

const courseData: Record<string, any> = {
  gafp: {
    eyebrow:"For 2025 & 2026 graduates", title:"Global Accounting & Finance Program", subtitle:"A 12-week, full-time classroom program that launches B.Com, M.Com, BBA and MBA graduates into global financial operations careers with IT MNCs, GCCs and KPOs.",
    facts:["12 Weeks","Classroom — Punjagutta","Mon–Fri, 9:30 AM–5:30 PM","Freshers"],
    intro:"Every year, lakhs of graduates enter the market with strong theory but little exposure to how global companies actually run finance operations. GAFP closes that gap in 12 focused weeks.",
    audience:["B.Com, M.Com, BBA and MBA graduates — 2025 and 2026 batches","Freshers targeting finance operations careers at IT MNCs, GCCs and KPOs","Candidates ready for an intensive, full-day classroom program in Hyderabad"],
    outcomes:["Global Accounting & Financial Operations certificate","Global Investment Banking Operations certificate","Microsoft Excel Associate (MO-200)","Pearson MePro Global English","Typewriting certification"],
    modules:[
      ["Weeks 1–5 · Global Accounting Operations","Financial reporting, GAAP, SEC filings, ERP set-ups, P2P and O2C cycles, General Ledger and month-end activities."],
      ["Weeks 6–12 · Investment Banking Operations","Capital markets, exchanges, trade lifecycle, settlements, corporate actions, funds, AML/KYC and two capstone projects."]
    ],
    original:"₹70,000 + 18% GST", offer:"₹45,000 + 18% GST"
  },
  "pe-fund-accounting": {
    eyebrow:"Move into a higher-value specialisation", title:"Private Equity Fund Accounting Program", subtitle:"A 12-week live online program that prepares working professionals for end-to-end fund accounting roles with global fund administrators.",
    facts:["12 Weeks","100% Live Online","Mon–Fri","9:30–11:00 AM & 7:00–8:30 AM"],
    intro:"Private Equity fund accounting is a skill-driven, client-facing specialisation. Learn the complete cycle—from investor onboarding and capital activity to NAV packs and audited financial statements.",
    audience:["AP/AR professionals ready to move beyond transaction processing","R2R and financial-reporting professionals broadening into fund accounting","Commerce and finance professionals targeting global fund administrators"],
    outcomes:["Build investor registers and decode LPAs","Create capital call, distribution and equalisation models","Calculate IRR, TVPI, DPI and RVPI","Deliver a complete quarter-close NAV pack"],
    modules:[
      ["Module 1 · Foundations & structures","PE vs VC, master-feeder structures, SPVs, GP/LP/Admin roles, PPMs, LPAs and the fund lifecycle."],
      ["Module 2 · Set-ups & journal entries","Simulated Investran/eFront models, PE chart of accounts, investor records and journal-entry control logs."],
      ["Module 3 · Capital activity","Calls, distributions, American vs European waterfalls and multi-investor equalisation schedules."],
      ["Module 4 · Performance & allocations","Fee engines, IRR, TVPI, DPI, RVPI, partner allocations and fair-value orientation."],
      ["Module 5 · Close & reporting","Period close, NAV pack, financial statements, audit support and a complete quarter-close capstone."]
    ],
    original:"₹75,000 + 18% GST", offer:"₹45,000 + 18% GST"
  },
  "kyc-aml": {
    eyebrow:"Build a global compliance career", title:"KYC & AML Analyst Program", subtitle:"A job-oriented program preparing you for KYC, AML, transaction-monitoring and compliance roles across banks, fintechs and global operations teams.",
    facts:["Live Training","Practical Casework","Placement Support","Compliance Careers"],
    intro:"KYC and AML teams help organisations identify customers, assess risk, investigate suspicious activity and meet global compliance obligations. This program develops the practical process knowledge recruiters test for.",
    audience:["Commerce and management graduates targeting compliance careers","Banking, trade-operations and settlements professionals","Candidates seeking KYC, AML, sanctions-screening and transaction-monitoring roles"],
    outcomes:["Perform individual and entity KYC","Conduct CDD and Enhanced Due Diligence","Review alerts and identify red flags","Screen sanctions and adverse media","Draft Suspicious Activity Reports"],
    modules:[
      ["Weeks 1–2 · AML foundations","Financial crime, FATF, regulators, PMLA, BSA, USA PATRIOT Act, EU directives, sanctions and PEPs."],
      ["Weeks 3–4 · KYC individuals & entities","CIP, document checks, risk classification, UBO mapping and complex ownership structures."],
      ["Weeks 5–6 · Due diligence & monitoring","SOF/SOW, high-risk jurisdictions, transaction alerts, escalation matrices and SAR drafting."],
      ["Weeks 7–8 · Screening & case handling","Sanctions and adverse-media screening, false positives, end-to-end cases, audit readiness and career prep."]
    ],
    original:"Contact for fee", offer:"New batch enquiries open"
  },
  "oracle-ebs-fusion": {
    eyebrow:"Build practical ERP finance skills", title:"Oracle EBS and Fusion Program", subtitle:"A job-oriented Oracle Financials program covering E-Business Suite and Fusion fundamentals, business cycles, journals and practical finance operations.",
    facts:["Oracle Financials","Practical Assignments","Placement Support","Hyderabad"],
    intro:"Oracle EBS and Oracle Fusion connect finance processes across enterprise applications. The program helps learners understand navigation, architecture, financial cycles and how accounting teams use Oracle Financials in real work.",
    audience:["B.Com, M.Com, BBA and MBA graduates","Finance professionals moving into ERP-enabled roles","Oracle users, end users and aspiring Oracle Financials professionals"],
    outcomes:["Understand Oracle EBS and Fusion navigation","Work with P2P, O2C and R2R cycles","Practise matching, reconciliations and journals","Build advanced Excel and professional communication skills","Prepare for interviews with live assignments"],
    modules:[
      ["Oracle foundations","Oracle EBS and Fusion architecture, access, navigation, enterprise setup and security fundamentals."],
      ["Procure-to-Pay (P2P)","Procurement cycle, supplier transactions, invoice matching and related finance operations."],
      ["Order-to-Cash (O2C)","Sales cycle, customer transactions, receivables and reconciliation processes."],
      ["Record-to-Report (R2R)","General Ledger cycle, journals, reconciliations and reporting workflows."],
      ["Career preparation","Advanced Excel, live assignments, resume preparation and mock interviews."]
    ],
    original:"Contact for fee", offer:"New batch enquiries open"
  },
  "accounting-analyst": {
    eyebrow:"Build the profile behind the numbers", title:"Accounting Analyst Course", subtitle:"A practical, job-oriented program for commerce and finance graduates targeting accounting, reporting and finance-operations analyst roles.",
    facts:["Accounting Operations","Advanced Excel","Practical Training","Placement Support"],
    intro:"Employers need analysts who can move beyond theory and work confidently with transactions, reconciliations, financial statements and reporting. This course bridges that employability gap.",
    audience:["B.Com, M.Com, BBA and MBA finance graduates","Freshers targeting accounting and finance operations","Professionals looking to strengthen AP, AR, GL and reporting skills"],
    outcomes:["Understand financial statements and accounting cycles","Work with Accounts Payable and Accounts Receivable","Handle General Ledger and reconciliation basics","Use Excel for accounting analysis and reporting","Prepare resumes and practise interview questions"],
    modules:[
      ["Accounting foundations","Accounting concepts, journal entries, ledgers, trial balance and the complete accounting cycle."],
      ["Financial reporting","Income Statement, Balance Sheet, Cash Flow and basic financial analysis."],
      ["Accounts Payable & Receivable","Vendor and customer processes, invoice handling, matching, collections and reconciliations."],
      ["General Ledger operations","Month-end activities, journals, controls, reconciliations and reporting."],
      ["Analyst skill stack","Advanced Excel, professional communication, resume building and mock interviews."]
    ],
    original:"Contact for fee", offer:"New batch enquiries open"
  }
};

function Header() {
  const [open,setOpen]=useState(false);
  return <>
    <div className="topbar">Founded by Alumni of IIM Ahmedabad & IRMA <span>·</span> <a href="tel:+919715718718">+91-9715 718 718</a></div>
    <header>
      <a href="/" className="logo"><img src={LOGO} alt="SmartSteps Training Academy"/></a>
      <button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle navigation"><span/><span/><span/></button>
      <nav className={open?"open":""}>
        <a href="/">Home</a>
        <a href="/gafp">For Freshers</a>
        <div className="dropdown"><button>For Working Professionals⌄</button><div><a href="/pe-fund-accounting">PE Fund Accounting</a><a href="/kyc-aml">Global KYC & AML</a></div></div>
        <a href="/placements">Placements</a><a href="/about">About Us</a>
        <a className="navcta" href="/contact">Enquire Now</a>
      </nav>
    </header>
  </>;
}

function Trust() { return <div class="trust" href="/about#reviews"><b>★ 4.7/5</b><span>~5,000 verified public reviews</span><span><a href="https://share.google/rN5284G823XrWMSde"><strong>Google (1,551)</strong></a> &amp; <a href="https://www.justdial.com/Hyderabad/Smartsteps-Consulting-Pvt-Ltd-Near-Manepally-Jewellers-Punjagutta/040PXX40-XX40-120526141020-Q5M9_BZDET"><strong>JustDial (3,409)</strong></a></span></div> }
function Stats(){ return <section className="stats">{[["8,000+","Professionals Trained"],["6,000+","Successful Placements"],["323","Batches"],["16+","Years"]].map(x=><div key={x[1]}><b>{x[0]}</b><span>{x[1]}</span></div>)}</section> }
function CTA(){ return <section className="final-cta"><div><span className="eyebrow">Your next step</span><h2>Your career in global finance operations starts with one conversation.</h2><p>Honest advice. No pressure. If a program isn’t right for you, we’ll say so.</p></div><div className="actions"><a className="btn light" href="/contact">Book Free Counselling</a><a className="btn outline-light" href={WA}>WhatsApp Us</a></div></section> }

function Footer(){
  return <><footer><div><img src={LOGO} alt="SmartSteps"/><p>Outstanding Training. Real Placements.</p><small>Founded by Alumni of IIM Ahmedabad & IRMA.</small></div><div><b>Explore</b><a href="/gafp">GAFP</a><a href="/oracle-ebs-fusion">Oracle EBS & Fusion</a><a href="/kyc-aml">KYC & AML</a><a href="/accounting-analyst">Accounting Analyst</a><a href="/placements">Placements</a></div><div><b>Visit us</b><p>501 & 502, 5th Floor, Topaz Building,<br/>Punjagutta, Hyderabad – 500082</p><small>Next to Manepally Jewellers</small></div><div><b>Talk to us</b><a href="tel:+919715718718">+91-9715 718 718</a><a href="tel:+917337087666">+91-733 708 7666</a><a href="tel:+919030019497">+91-9030019497</a><a href="mailto:lavanyakumar@smartsteps.in">lavanyakumar@smartsteps.in</a></div></footer><div className="copyright">© {new Date().getFullYear()} SmartSteps Training Academy <span>Privacy · Terms · Refund Policy</span></div><a className="float-wa" href={WA} target="_blank" rel="noopener noreferrer" aria-label="Chat with SmartSteps on WhatsApp"><i className="fa-brands fa-whatsapp" aria-hidden="true"/><span>Chat on WhatsApp</span></a></>
}

function Home(){
  return <main>
    <section className="hero">
      <div className="hero-copy"><span className="eyebrow">Hyderabad’s finance careers specialist · Since 2008</span><h1>Launch your career in <em>global finance operations.</em></h1><p>Role-focused training for freshers and working professionals targeting the world’s leading IT MNCs, GCCs, KPOs and fund administrators.</p><div className="actions"><a className="btn primary" href="#programs">Explore Programs</a><a className="btn secondary" href="/contact">Book Free Counselling</a></div><div className="hero-proof"><span>✓ Honest career counselling</span><span>✓ Support until placed</span></div></div>
      <div className="hero-visual"><div className="orbit o1"/><div className="orbit o2"/><div className="career-card"><span>YOUR DEGREE</span><i>+</i><span>JOB-READY SKILLS</span><i>+</i><span>GLOBAL CERTIFICATIONS</span><b>= MNC-READY</b></div><div className="placed"><b>6,000+</b><span>careers launched</span></div></div>
    </section>
    <Stats/><Trust/>
    <section className="section pathways"><div className="section-head"><span className="eyebrow">Choose your pathway</span><h2>Pick the role you want to grow into.</h2><p>Swipe or scroll through our job-oriented programs and open any course for complete details.</p></div><div className="path-carousel" aria-label="SmartSteps course pathways">{pathwayCourses.map(c=><a href={"/"+c.slug} className="path-card" key={c.no}><span>{c.no}</span><small>{c.tag}</small><h3>{c.title}</h3><p>{c.text}</p><label>{c.meta}</label><b>View course →</b></a>)}</div><div className="carousel-note">Scroll to explore all courses →</div></section>
    <section className="section programs" id="programs"><div className="section-head left"><span className="eyebrow">Programs</span><h2>Training built around the role you want.</h2></div><div className="program-grid">{programs.map(p=><a href={"/"+p.slug} className={"program "+p.color} key={p.slug}><small>{p.eyebrow}</small><h3>{p.title}</h3><b>{p.meta}</b><p>{p.text}</p><span>View program <i>↗</i></span></a>)}</div></section>
    <section className="founder"><div><span className="eyebrow">Built from the hiring desk</span><h2>Built by people who’ve done the hiring.</h2></div><div><p>SmartSteps was founded in 2008 by Sreenath Raju (IIM Ahmedabad) and Lavanyakumar Nanabala (IRMA)—leaders who left corporate careers to solve one problem: talented graduates were leaving college unemployable.</p><a href="/about">Meet our founders →</a></div></section>
    <section className="difference"><span className="eyebrow">The SmartSteps difference</span><h2>Most courses teach a subject.<br/>We build career profiles.</h2><div className="four-grid">{[["01","Domain expertise","Training mapped to real MNC job roles."],["02","Global credentials","Microsoft and Pearson certifications."],["03","Workplace readiness","Communication, etiquette and application."],["04","Placement preparation","A 6,000+ professional alumni network."]].map(x=><article key={x[0]}><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></section>
    <section className="alumni"><div><span className="eyebrow">Where our alumni work</span><h2>6,000+ placed alumni.<br/>One powerful network.</h2><p>Not a wall of empty promises. A career network built batch by batch since 2008.</p><a href="/placements">See placement support →</a></div><div className="logo-grid">{employers.slice(0,16).map(e=><span key={e}>{e}</span>)}</div></section>
    <section className="section join"><div className="section-head"><span className="eyebrow">How to join</span><h2>Three steps. One honest conversation.</h2></div><div className="steps">{[["01","Reach out","Call, WhatsApp or walk into our Punjagutta campus."],["02","Get honest counsel","We map your background to the right program."],["03","Enrol and begin","Secure a seat in the next limited-size batch."]].map(x=><article key={x[0]}><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></section><CTA/>
  </main>
}

function Course({data}:{data:any}){
  const [active,setActive]=useState(0);
  return <main><section className="course-hero"><div><span className="eyebrow">{data.eyebrow}</span><h1>{data.title}</h1><p>{data.subtitle}</p><div className="actions"><a className="btn primary" href="/contact">Book Free Counselling</a><a className="btn secondary" href={WA}>WhatsApp Us</a></div></div><aside><small>Limited-period offer</small><del>{data.original}</del><b>{data.offer}</b><span>Complete program + placement support</span></aside></section><div className="quick">{data.facts.map((f:string)=><span key={f}>{f}</span>)}</div><Trust/>
  <section className="section intro"><span className="eyebrow">Why this program exists</span><h2>The gap between knowing finance and doing the job.</h2><p>{data.intro}</p></section>
  <section className="split-section"><div><span className="eyebrow">Who this is for</span><h2>Built for your next move.</h2></div><ul>{data.audience.map((x:string)=><li key={x}>✓ <span>{x}</span></li>)}</ul></section>
  <section className="section curriculum"><div className="section-head left"><span className="eyebrow">Curriculum</span><h2>Learn it. Practise it. Apply it.</h2></div><div className="accordion">{data.modules.map((m:string[],i:number)=><article className={active===i?"active":""} key={m[0]}><button onClick={()=>setActive(active===i?-1:i)}><b>{m[0]}</b><span>{active===i?"−":"+"}</span></button>{active===i&&<p>{m[1]}</p>}</article>)}</div></section>
  <section className="outcomes"><div><span className="eyebrow">What you leave with</span><h2>A profile recruiters can understand.</h2></div><div>{data.outcomes.map((x:string,i:number)=><p key={x}><b>0{i+1}</b>{x}</p>)}</div></section>
  <section className="fee"><div><span>Program fee</span><del>{data.original}</del></div><div><span>Limited-period offer</span><b>{data.offer}</b></div><a href="/contact">Talk to a counsellor →</a></section><CTA/></main>
}

function Placements(){
 return <main><section className="inner-hero"><span className="eyebrow">Placements & outcomes</span><h1>8,000+ trained. 6,000+ placed.<br/><em>Not by Tie-ups, but by Trust.</em></h1><p>We don’t sell placement guarantees. We’ve built something better: a 16-year network of employers and alumni who refer SmartSteps candidates into their own teams.</p></section><Stats/><Trust/><section className="section"><div className="section-head left"><span className="eyebrow">How support works</span><h2>Preparation before promises.</h2></div><div className="four-grid">{[["01","Profile preparation","ATS-friendly resume, Naukri optimisation and job-market orientation."],["02","Interview practice","Mock interviews plus weekend trainer interactions."],["03","Alumni referrals","6,000+ SmartSteps professionals inside 40+ MNCs."],["04","Support until placed","Repeat the course at no extra cost if you need it."]].map(x=><article key={x[0]}><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></section><section className="company-wall"><span className="eyebrow">The network</span><h2>Where SmartSteps careers grow.</h2><div className="logo-grid">{employers.map(x=><span key={x}>{x}</span>)}</div></section><CTA/></main>
}

function About(){
 return <main><section className="inner-hero"><span className="eyebrow">Our story</span><h1>One problem. Seventeen years.<br/><em>6,000+ careers.</em></h1><p>We built the institute we wished existed: domain training mapped to real MNC roles, global certifications, communication coaching and placement preparation powered by alumni.</p></section><section className="founders-page"><div className="section-head left"><span className="eyebrow">Our founders</span><h2>The hiring-desk view is built into every program.</h2></div><div className="founder-grid"><article><img className="founder-headshot" src="/sreenath.jpg" alt="Sreenath Raju, Founder and Managing Director of SmartSteps"/><small>IIM Ahmedabad · 25+ years leadership</small><h3>Sreenath Raju</h3><b>Founder & Managing Director</b><p>After senior roles at Heinz India, ICICI Prudential and Max New York Life, Sreenath left a peak corporate career to build SmartSteps around one conviction: employability can be taught.</p></article><article><img className="founder-headshot" src="/lavanyakumar.jpg" alt="Lavanyakumar Nanabala, Founder and Director of SmartSteps"/><small>IRMA · 17+ years capability building</small><h3>Lavanyakumar Nanabala</h3><b>Founder & Director</b><p>A finance learning strategist and curriculum architect who has designed role-based programs across Accounting Operations, PE Fund Accounting and KYC/AML.</p></article></div></section><section className="timeline"><span className="eyebrow">Milestones</span>{[["2008","SmartSteps founded in Hyderabad."],["2013–14","University programs with FICCI across 8 universities; 100,000+ students reached."],["2017–19","NSE Academy joint certification, ACCA recognition and NSDC empanelment."],["2021","afcourse.com hybrid learning platform launched."],["Today","8,000+ trained · 6,000+ placed · 323 batches."]].map(x=><div key={x[0]}><b>{x[0]}</b><p>{x[1]}</p></div>)}</section><section className="reviews" id="reviews"><span className="eyebrow">Don’t take our word for it</span><h2>~5,000 public reviews. Earned one batch at a time.</h2><p>A 4.7/5 rating across Google and JustDial makes SmartSteps one of Hyderabad’s most-reviewed finance training institutes.</p><div>{["“Transformational”","“A turning point in my life”","“The SmartSteps family”"].map(x=><blockquote key={x}>{x}</blockquote>)}</div></section><CTA/></main>
}

function Certifications(){
 return <main><section className="inner-hero"><span className="eyebrow">Certifications & partners</span><h1>Global credentials,<br/><em>built into your program.</em></h1><p>Certification isn’t an add-on. It is part of building a profile that recruiters can verify and understand.</p></section><section className="cert-grid"><article><span>MICROSOFT</span><h2>Microsoft Excel Associate (MO-200)</h2><p>SmartSteps trains, examines and certifies GAFP students through the official Pearson Certiport platform.</p></article><article><span>PEARSON</span><h2>MePro Global English</h2><p>A 10-level English certification with mandatory daily discussion practice because communication clears MNC interviews.</p></article></section><section className="heritage"><span className="eyebrow">Partnership heritage</span><h2>Standards sharpened over 16+ years.</h2><p>Our history includes a joint certification with NSE Academy, recognition as an ACCA Learning Partner, NSDC empanelment, FICCI university programs, and consulting engagements with MANAGE, NAARM and NIRD.</p><small>These are historical associations and are not presented as current active partnerships.</small></section><CTA/></main>
}

function Contact(){
 const submit=(e:FormEvent<HTMLFormElement>)=>{e.preventDefault(); const fd=new FormData(e.currentTarget); window.open(`https://wa.me/919715718718?text=${encodeURIComponent(`Hi SmartSteps, I am ${fd.get("name")}. I’m interested in ${fd.get("course")}. Please contact me on ${fd.get("phone")}.`)}`,"_blank")};
 return <main><section className="contact"><div><span className="eyebrow">Free career counselling</span><h1>Start with a conversation <em>not a commitment.</em></h1><p>We’ll map your background to the right program—honestly, even when the answer is that a program isn’t right for you.</p><div className="contact-list"><a href="tel:+919715718718"><b>Main line</b>+91-9715 718 718</a><a href="tel:+917337087666"><b>Course counsellor</b>+91-733 708 7666</a><a href="tel:+919030019497"><b>Course counsellor</b>+91-9030019497</a><a href="mailto:lavanyakumar@smartsteps.in"><b>Email</b>lavanyakumar@smartsteps.in</a><p><b>Visit</b>501 & 502, 5th Floor, Topaz Building, Punjagutta, Hyderabad – 500082<br/><small>Next to Manepally Jewellers</small></p></div></div><form onSubmit={submit}><Trust/><h2>Tell us where you are.</h2><label>Your name<input name="name" required placeholder="Enter your full name"/></label><label>Phone number<input name="phone" required inputMode="tel" placeholder="+91"/></label><label>Course of interest<select name="course"><option>Global Accounting & Finance Program</option><option>Oracle EBS and Fusion Program</option><option>KYC & AML Analyst Program</option><option>Accounting Analyst Course</option><option>PE Fund Accounting</option><option>Not sure — help me choose</option></select></label><button className="btn primary">Request Free Counselling</button><small>By submitting, you agree to be contacted by SmartSteps.</small></form></section></main>
}

export default function SitePage({page}:{page:string}){
 let content;
 if(courseData[page]) content=<Course data={courseData[page]}/>;
 else if(page==="placements") content=<Placements/>;
 else if(page==="about") content=<About/>;
 else if(page==="certifications") content=<Certifications/>;
 else if(page==="contact") content=<Contact/>;
 else content=<Home/>;
 return <><Header/>{content}<Footer/></>;
}
