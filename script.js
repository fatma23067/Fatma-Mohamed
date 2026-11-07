'use strict';
/* ===== CONFIG: edit these ===== */
const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'; // see README: "Connect the contact form"
const EMAIL = 'fatmamohamed230670@gmail.com';

/* ===== ACADEMIC PROJECTS: add new objects to this list =====
   file: path to a PDF in assets/documents/ (or null if not available yet) */
const PROJECTS = [{
  id: 'salbutamol', file: null,
  en: { type: 'Academic research', title: 'Salbutamol Research',
    summary: 'An academic search assignment to find, explore and understand information about Salbutamol.',
    details: ['Type: academic research activity (information search).', 'Topic: Salbutamol.', 'Objective: to search for, explore and understand information related to Salbutamol.'],
    todo: 'Placeholder: the research document has not been added yet. Add its real topic, scope and findings here (see README) and put the file in assets/documents/salbutamol/.' },
  ar: { type: 'بحث أكاديمي', title: 'بحث عن السالبيوتامول',
    summary: 'تكليف بحثي أكاديمي للبحث عن معلومات حول السالبيوتامول واستكشافها وفهمها.',
    details: ['النوع: نشاط بحث أكاديمي (بحث عن المعلومات).', 'الموضوع: السالبيوتامول.', 'الهدف: البحث عن المعلومات المتعلقة بالسالبيوتامول واستكشافها وفهمها.'],
    todo: 'محتوى مؤقت: لم تتم إضافة ملف البحث بعد. أضيفي موضوعه ونطاقه ونتائجه الحقيقية هنا (راجعي README) وضعي الملف في assets/documents/salbutamol/.' }
}];

const SKILLS_PRO = [
  ['pharma', 'rx'], ['research', 'search'], ['detail', 'eye'], ['problem', 'bulb']];
const SKILLS_INT = [
  ['comm', 'chat'], ['time', 'clock'], ['team', 'users'], ['self', 'book'], ['flex', 'shuffle']];
const ICONS = {
  rx: '<path d="M9 4h5a4 4 0 010 8H9zM9 4v16M13 12l6 8M19 12l-6 8"/>',
  search: '<circle cx="11" cy="11" r="6"/><path d="M16 16l5 5"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0012 3z"/>',
  chat: '<path d="M4 5h16v11H9l-5 4z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  users: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.5 2.5-6 6-6s6 2.5 6 6M16 5a3 3 0 010 6M18 14c2 .8 3 2.8 3 6"/>',
  book: '<path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2zM4 19a2 2 0 012-2h13"/>',
  shuffle: '<path d="M3 7h4l10 10h4M3 17h4l3-3M14 10l3-3h4M18 4l3 3-3 3M18 14l3 3-3 3"/>'
};
const TOOLS = [
  ['tg_prod', [['Microsoft Word', 'W'], ['Microsoft PowerPoint', 'P'], ['Microsoft Excel', 'X']]],
  ['tg_res', [['PubMed', 'Pm'], ['Google Scholar', 'GS']]],
  ['tg_col', [['Canva', 'C'], ['Microsoft Teams', 'T'], ['Google Meet', 'M']]]];

const T = {
 en: { skip:'Skip to content', menu:'Menu', art:'Abstract molecular structure',
  nav_home:'Home', nav_about:'About', nav_edu:'Education', nav_skills:'Skills', nav_work:'Academic Work', nav_contact:'Contact', cv:'Download CV',
  hero_hello:"Hello, I'm", hero_title:'Pharmacy Student | Aspiring Pharmacist',
  hero_tag:'Passionate about healthcare, pharmaceutical sciences, and continuous learning.',
  hero_lead:"I'm studying pharmacy at Egyptian Chinese University and building the knowledge and habits I need to become a skilled pharmacist.",
  cta_work:'Explore My Work', cta_contact:'Contact Me',
  about_h:'About Me',
  about_p1:'My name is Fatma Mohamed, and I am a Pharmacy student passionate about healthcare, medicine, and helping others improve their well-being. I am continuously developing my knowledge of pharmaceutical sciences and exploring how medications and healthcare practices contribute to better patient outcomes.',
  about_p2:"I believe that learning is a lifelong journey, and I am always eager to gain new experiences, develop my skills, and expand my understanding of the pharmacy profession. My goal is to become a knowledgeable and skilled pharmacist who can make a positive impact on people's lives.",
  diff_h:'What Makes Me Different',
  diff_p:'What makes me different from others in my field is my ability to study hard, stay committed, and dedicate time to learning. I am a fast learner who enjoys gaining new knowledge, exploring different topics, and continuously improving my skills. I am always willing to put in the effort needed to achieve my goals.',
  edu_h:'Education', present:'Present', edu_uni:'Egyptian Chinese University', edu_fac:'Faculty of Pharmacy', edu_p:'Currently pursuing pharmacy studies.',
  skills_h:'Skills', skills_pro:'Professional skills', skills_int:'Interpersonal skills',
  s_pharma:['Pharmaceutical Knowledge','Building a foundation in pharmaceutical sciences through my studies.'],
  s_research:['Research Skills','Searching for and understanding information from academic sources.'],
  s_detail:['Attention to Detail','Careful and accurate work, which matters in healthcare.'],
  s_problem:['Problem-Solving','Working through questions step by step.'],
  s_comm:['Communication Skills','Explaining ideas clearly and listening to others.'],
  s_time:['Time Management','Balancing study time and commitments.'],
  s_team:['Teamwork','Working well with classmates and colleagues.'],
  s_self:['Self-Learning','Learning new topics independently and with curiosity.'],
  s_flex:['Flexibility','Adapting to new situations and ways of working.'],
  tools_h:'Tools & Software', tg_prod:'Productivity', tg_res:'Research', tg_col:'Collaboration & Other Tools',
  lang_h:'Languages', l_ar:'Arabic', l_ar_lv:'Native', l_en:'English', l_zh:'Chinese', l_zh_lv:'Beginner',
  work_h:'Academic Work & Research', work_intro:'Research and coursework from my pharmacy studies. More work will be added as I complete it.',
  view_details:'View details', view_doc:'View document', dl_doc:'Download document', close:'Close', detail_h:'Project details',
  goals_h:'My Future Goals', g1:'Developing strong expertise in the pharmacy field.',
  g2:'Building a successful professional career in the healthcare sector.',
  g3:'Building a personal brand and sharing valuable healthcare and pharmacy knowledge with others.',
  contact_h:'Contact', contact_p:'Send me a message about studies, collaboration or anything else. I read every email.',
  f_name:'Name', f_email:'Email', f_subject:'Subject', f_msg:'Message', f_send:'Send Message',
  f_sending:'Sending…', f_ok:'Thank you! Your message was sent.', f_err:'Please fill in all fields with a valid email.',
  f_fail:'The message could not be sent. Please email me directly instead.',
  f_unset:'The form is not connected yet. Please email me directly.', foot_role:'Pharmacy Student' },
 ar: { skip:'تخطي إلى المحتوى', menu:'القائمة', art:'رسم تجريدي لبنية جزيئية',
  nav_home:'الرئيسية', nav_about:'نبذة عني', nav_edu:'التعليم', nav_skills:'المهارات', nav_work:'الأعمال الأكاديمية', nav_contact:'تواصل معي', cv:'تحميل السيرة الذاتية',
  hero_hello:'مرحبًا، أنا', hero_title:'طالبة صيدلة | صيدلانية طموحة',
  hero_tag:'شغوفة بالرعاية الصحية والعلوم الصيدلانية والتعلّم المستمر.',
  hero_lead:'أدرس الصيدلة في الجامعة المصرية الصينية، وأبني المعرفة والعادات التي أحتاجها لأصبح صيدلانية متمكنة.',
  cta_work:'استكشفي أعمالي', cta_contact:'تواصل معي',
  about_h:'نبذة عني',
  about_p1:'اسمي فاطمة محمد، وأنا طالبة صيدلة شغوفة بالرعاية الصحية والطب ومساعدة الآخرين على تحسين صحتهم. أعمل باستمرار على تطوير معرفتي بالعلوم الصيدلانية وأستكشف كيف تسهم الأدوية والممارسات الصحية في تحسين نتائج المرضى.',
  about_p2:'أؤمن بأن التعلّم رحلة مدى الحياة، وأتطلع دائمًا إلى اكتساب خبرات جديدة وتطوير مهاراتي وتوسيع فهمي لمهنة الصيدلة. هدفي أن أصبح صيدلانية واسعة المعرفة وماهرة، قادرة على ترك أثر إيجابي في حياة الناس.',
  diff_h:'ما الذي يميزني',
  diff_p:'ما يميزني عن غيري في مجالي هو قدرتي على الاجتهاد في الدراسة والالتزام وتخصيص وقتي للتعلّم. أتعلم بسرعة وأستمتع باكتساب معرفة جديدة واستكشاف موضوعات مختلفة وتطوير مهاراتي باستمرار، وأنا مستعدة دائمًا لبذل الجهد اللازم لتحقيق أهدافي.',
  edu_h:'التعليم', present:'الآن', edu_uni:'الجامعة المصرية الصينية', edu_fac:'كلية الصيدلة', edu_p:'أدرس الصيدلة حاليًا.',
  skills_h:'المهارات', skills_pro:'المهارات المهنية', skills_int:'المهارات الشخصية',
  s_pharma:['المعرفة الصيدلانية','بناء أساس في العلوم الصيدلانية من خلال دراستي.'],
  s_research:['مهارات البحث','البحث عن المعلومات من المصادر الأكاديمية وفهمها.'],
  s_detail:['الاهتمام بالتفاصيل','عمل دقيق ومنظم، وهو أمر مهم في المجال الصحي.'],
  s_problem:['حل المشكلات','التعامل مع الأسئلة خطوة بخطوة.'],
  s_comm:['مهارات التواصل','شرح الأفكار بوضوح والإصغاء للآخرين.'],
  s_time:['إدارة الوقت','الموازنة بين وقت الدراسة والالتزامات.'],
  s_team:['العمل الجماعي','التعاون الجيد مع الزملاء.'],
  s_self:['التعلّم الذاتي','تعلّم موضوعات جديدة باستقلالية وفضول.'],
  s_flex:['المرونة','التكيّف مع المواقف وطرق العمل الجديدة.'],
  tools_h:'الأدوات والبرامج', tg_prod:'الإنتاجية', tg_res:'البحث', tg_col:'التعاون وأدوات أخرى',
  lang_h:'اللغات', l_ar:'العربية', l_ar_lv:'اللغة الأم', l_en:'الإنجليزية', l_zh:'الصينية', l_zh_lv:'مبتدئة',
  work_h:'الأعمال الأكاديمية والأبحاث', work_intro:'أبحاث وأعمال من دراستي في الصيدلة. ستُضاف أعمال أخرى كلما أنجزتها.',
  view_details:'عرض التفاصيل', view_doc:'عرض المستند', dl_doc:'تحميل المستند', close:'إغلاق', detail_h:'تفاصيل العمل',
  goals_h:'أهدافي المستقبلية', g1:'بناء خبرة قوية في مجال الصيدلة.',
  g2:'بناء مسيرة مهنية ناجحة في القطاع الصحي.',
  g3:'بناء علامة شخصية ومشاركة معلومات صحية وصيدلانية مفيدة مع الآخرين.',
  contact_h:'تواصل معي', contact_p:'راسليني بخصوص الدراسة أو التعاون أو أي موضوع آخر. أقرأ كل رسالة.',
  f_name:'الاسم', f_email:'البريد الإلكتروني', f_subject:'الموضوع', f_msg:'الرسالة', f_send:'إرسال الرسالة',
  f_sending:'جارٍ الإرسال…', f_ok:'شكرًا لك! تم إرسال رسالتك.', f_err:'يرجى ملء جميع الحقول وإدخال بريد إلكتروني صحيح.',
  f_fail:'تعذّر إرسال الرسالة. يرجى مراسلتي مباشرة عبر البريد الإلكتروني.',
  f_unset:'النموذج غير مفعّل بعد. يرجى مراسلتي مباشرة عبر البريد الإلكتروني.', foot_role:'طالبة صيدلة' }
};

let lang = 'en';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const t = k => T[lang][k];
const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function renderSkills() {
  const card = ([k, ic]) => { const [h, p] = t('s_' + k);
    return `<article class="card"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[ic]}</svg><h4>${esc(h)}</h4><p>${esc(p)}</p></article>`; };
  $('#skills-pro').innerHTML = SKILLS_PRO.map(card).join('');
  $('#skills-int').innerHTML = SKILLS_INT.map(card).join('');
  $('#tools').innerHTML = TOOLS.map(([g, items]) => `<div class="tool-group"><h3>${esc(t(g))}</h3><ul class="chips">${
    items.map(([n, m]) => `<li><b aria-hidden="true">${m}</b>${n}</li>`).join('')}</ul></div>`).join('');
}
function renderProjects() {
  $('#projects').innerHTML = PROJECTS.map(p => { const c = p[lang];
    return `<article class="project"><span class="tag">${esc(c.type)}</span><h3>${esc(c.title)}</h3><p>${esc(c.summary)}</p>${
      p.file ? '' : `<p class="note">${esc(c.todo)}</p>`}<div class="acts"><button class="btn btn-sm" data-open="${p.id}">${esc(t('view_details'))}</button>${
      p.file ? `<a class="btn btn-sm btn-ghost" href="${p.file}" target="_blank" rel="noopener">${esc(t('view_doc'))}</a><a class="btn btn-sm btn-ghost" href="${p.file}" download>${esc(t('dl_doc'))}</a>` : ''}</div></article>`; }).join('');
}
function openProject(id) {
  const p = PROJECTS.find(x => x.id === id), c = p[lang];
  $('#dlg-body').innerHTML = `<span class="tag">${esc(c.type)}</span><h3 id="dlg-title">${esc(c.title)}</h3><p>${esc(c.summary)}</p><h4>${esc(t('detail_h'))}</h4><ul>${
    c.details.map(d => `<li>${esc(d)}</li>`).join('')}</ul>${p.file ? `<p><a class="btn btn-sm" href="${p.file}" target="_blank" rel="noopener">${esc(t('view_doc'))}</a></p>` : `<p class="note">${esc(c.todo)}</p>`}<p><button class="btn btn-sm btn-ghost" data-close>${esc(t('close'))}</button></p>`;
  $('#dlg').showModal();
}
function setLang(l) {
  lang = l;
  document.documentElement.lang = l; document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  $$('[data-i18n]').forEach(e => { const v = t(e.dataset.i18n); if (typeof v === 'string') e.textContent = v; });
  $$('[data-i18n-aria]').forEach(e => e.setAttribute('aria-label', t(e.dataset.i18nAria)));
  $$('[data-lang]').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === l));
  renderSkills(); renderProjects();
  try { localStorage.setItem('lang', l); } catch (e) {}
}

document.addEventListener('click', e => {
  const lb = e.target.closest('[data-lang]'); if (lb) setLang(lb.dataset.lang);
  const op = e.target.closest('[data-open]'); if (op) openProject(op.dataset.open);
  if (e.target.closest('[data-close]') || e.target === $('#dlg')) $('#dlg').close();
  if (e.target.closest('.menu a')) closeMenu();
});
const mb = $('.menu-btn'), menu = $('#menu');
function closeMenu() { menu.classList.remove('open'); mb.setAttribute('aria-expanded', 'false'); }
mb.addEventListener('click', () => mb.setAttribute('aria-expanded', menu.classList.toggle('open')));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

/* highlight current section in nav */
const links = $$('.menu ul a');
const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting)
  links.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + en.target.id)); }), { rootMargin: '-45% 0px -50% 0px' });
$$('main section[id]').forEach(s => io.observe(s));

/* contact form */
const form = $('#contact-form'), st = $('#form-status');
form.addEventListener('submit', async e => {
  e.preventDefault(); st.className = 'status';
  if (!form.checkValidity()) { st.textContent = t('f_err'); st.classList.add('err'); return; }
  if (FORM_ENDPOINT.includes('YOUR_FORM_ID')) { st.textContent = t('f_unset') + ' ' + EMAIL; st.classList.add('err'); return; }
  st.textContent = t('f_sending');
  try {
    const r = await fetch(FORM_ENDPOINT, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
    if (!r.ok) throw new Error(r.status);
    form.reset(); st.textContent = t('f_ok'); st.classList.add('ok');
  } catch (err) { st.textContent = t('f_fail') + ' ' + EMAIL; st.classList.add('err'); }
});

$('#year').textContent = new Date().getFullYear();
let saved = 'en'; try { saved = localStorage.getItem('lang') || 'en'; } catch (e) {}
setLang(T[saved] ? saved : 'en');
