const techs = [
  { name: "Node.js", slug: "nodedotjs" },
  { name: "JavaScript", slug: "javascript" },
  { name: "TypeScript", slug: "typescript" },
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Vite", slug: "vite" },
  { name: "Tailwind", slug: "tailwindcss" },
  { name: "HTML", slug: "html5" },
  { name: "CSS", slug: "css" },
  { name: "SCSS", slug: "sass" },
  { name: "Elm", slug: "elm" },
  { name: "Express", slug: "express" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Docker", slug: "docker" },
  { name: "Git", slug: "git" },
  { name: "Cloudflare", slug: "cloudflare" },
  { name: "Vercel", slug: "vercel" },
  { name: "Webflow", slug: "webflow" },
  { name: "discord.js", slug: "discorddotjs" },
  { name: "Swift", slug: "swift" },
  { name: "Java", slug: "openjdk" },
  { name: "SQL", slug: "mysql" }
];

const themeToggleBtn=document.getElementById("theme-toggle-btn");
const textSizeToggle=document.getElementById("text-size-toggle");
const motionToggle=document.getElementById("motion-toggle");
const contrastToggle=document.getElementById("contrast-toggle");
const introOverlay=document.getElementById("intro-overlay");
const introEnter=document.getElementById("intro-enter");
const lightWarningToggle=document.getElementById("light-warning-toggle");
const lightWarningModal=document.getElementById("light-warning-modal");
const lightWarningClose=document.getElementById("light-warning-close");
const lightWarningDisable=document.getElementById("light-warning-disable");
const lightWarningContinue=document.getElementById("light-warning-continue");
const languageButtons=Array.from(document.querySelectorAll(".a11y-chip-btn[data-lang]"));
const uiTransitionOverlay=document.getElementById("ui-transition-overlay");
const uiTransitionText=document.querySelector(".ui-transition-text");
const themeStorageKey="nysrioo-theme";
const textSizeStorageKey="nysrioo-text-size";
const motionStorageKey="nysrioo-reduce-motion";
const contrastStorageKey="nysrioo-contrast";
const lightWarningStorageKey="nysrioo-light-warning-enabled";
const languageStorageKey="nysrioo-language";
const introSeenStorageKey="nysrioo-intro-seen";
const translations={
  en:{
    tagline:"Self-taught programmer",
    footer_terms:"Terms of Service",
    footer_contact:"Get in Touch",
    footer_pulse:"Pulse Customs",
    footer_theme_toggle:"Switch Theme",
    footer_accessibility:"Accessibility",
    terms_title:"Terms & Refund Policy",
    terms_copy:"By commissioning me, you agree to these terms and refund rules:",
    terms_li_1:"I reserve the right to refuse service if you are disrespectful, or for any other reason at my discretion.",
    terms_li_2:"A 50% upfront payment is required before I begin work on your bot.",
    terms_li_3:"I do not accept USD payments. Payment is Robux only.",
    terms_li_4:"I provide coding/development only. I do not host bots.",
    terms_li_5:"I do not offer refunds unless a mistake was made on my end or I am unable to continue the project.",
    terms_li_6:"No refunds are offered after the final product has been delivered.",
    pulse_copy:"Welcome to Pulse Customs! Since 2024, we've been at the forefront of design, understanding exactly what our clients want and deserve, nothing less than the very best.",
    join_server_btn:"Join Server",
    contact_title:"Get in Touch",
    contact_copy:"The best way to contact me is usually Discord.",
    contact_cta_btn:"Get in Touch",
    contact_user_label:"User",
    contact_id_label:"ID",
    a11y_title:"Accessibility",
    a11y_copy:"Adjust how the site looks and feels for readability and comfort.",
    a11y_theme_label:"Theme",
    a11y_theme_subtle:"Use the footer icon to switch dark and light mode.",
    a11y_theme_value:"Controlled from footer",
    a11y_text_label:"Text Size",
    a11y_text_subtle:"Increase text size for readability.",
    a11y_motion_label:"Reduce Motion",
    a11y_motion_subtle:"Minimize moving animations.",
    a11y_contrast_label:"High Contrast",
    a11y_contrast_subtle:"Use stronger text contrast.",
    a11y_light_warning_label:"Light Mode Warning",
    a11y_light_warning_subtle:"Show a notice when switching to light mode.",
    a11y_lang_label:"Languages",
    a11y_lang_subtle:"Choose a default language preference.",
    light_warning_title:"Light Mode Notice",
    light_warning_copy:"Light mode can feel very bright. It is mainly recommended for people who find dark layouts hard to read in low-light spaces.",
    light_warning_disable_label:"Don't show this warning again",
    light_warning_continue_btn:"Continue",
    close_btn:"Close",
    toggle_on:"On",
    toggle_off:"Off",
    size_normal:"Normal",
    size_large:"Large",
    copied_short:"Copied",
    copied_prefix:"Copied to Clipboard",
    settings_loading:"Applying changes...",
    theme_to_dark:"Switch to dark mode",
    theme_to_light:"Switch to light mode"
  },
  es:{
    tagline:"Programador autodidacta",
    footer_terms:"Terminos del servicio",
    footer_contact:"Contacto",
    footer_pulse:"Pulse Customs",
    footer_theme_toggle:"Cambiar tema",
    footer_accessibility:"Accesibilidad",
    terms_title:"Terminos y politica de reembolso",
    terms_copy:"Al contratarme, aceptas estos terminos y reglas de reembolso:",
    terms_li_1:"Me reservo el derecho de rechazar el servicio si hay faltas de respeto o por cualquier otra razon a mi criterio.",
    terms_li_2:"Se requiere un pago inicial del 50% antes de comenzar tu bot.",
    terms_li_3:"No acepto pagos en USD. El pago es solo en Robux.",
    terms_li_4:"Ofrezco solo desarrollo y programacion. No alojo bots.",
    terms_li_5:"No ofrezco reembolsos salvo error de mi parte o si no puedo continuar el proyecto.",
    terms_li_6:"No hay reembolsos despues de entregar el producto final.",
    pulse_copy:"Bienvenido a Pulse Customs. Desde 2024, hemos estado al frente del diseno, entendiendo exactamente lo que nuestros clientes quieren y merecen: nada menos que lo mejor.",
    join_server_btn:"Unirse al servidor",
    contact_title:"Contacto",
    contact_copy:"La mejor forma de contactarme suele ser por Discord.",
    contact_cta_btn:"Contacto",
    contact_user_label:"Usuario",
    contact_id_label:"ID",
    a11y_title:"Accesibilidad",
    a11y_copy:"Ajusta el sitio para mejorar lectura y comodidad.",
    a11y_theme_label:"Tema",
    a11y_theme_subtle:"Usa el icono del pie para cambiar entre modo oscuro y claro.",
    a11y_theme_value:"Controlado desde el pie de pagina",
    a11y_text_label:"Tamano de texto",
    a11y_text_subtle:"Aumenta el texto para mejor legibilidad.",
    a11y_motion_label:"Reducir movimiento",
    a11y_motion_subtle:"Minimiza las animaciones.",
    a11y_contrast_label:"Alto contraste",
    a11y_contrast_subtle:"Usa un contraste de texto mas fuerte.",
    a11y_lang_label:"Idiomas",
    a11y_lang_subtle:"Elige una preferencia de idioma predeterminada.",
    close_btn:"Cerrar",
    toggle_on:"Activado",
    toggle_off:"Desactivado",
    size_normal:"Normal",
    size_large:"Grande",
    copied_short:"Copiado",
    copied_prefix:"Copiado al portapapeles",
    settings_loading:"Aplicando cambios...",
    theme_to_dark:"Cambiar a modo oscuro",
    theme_to_light:"Cambiar a modo claro"
  },
  zh:{
    tagline:"自学程序员",
    footer_terms:"服务条款",
    footer_contact:"联系我",
    footer_pulse:"Pulse Customs",
    footer_theme_toggle:"切换主题",
    footer_accessibility:"无障碍",
    terms_title:"条款与退款政策",
    terms_copy:"委托我之前，请同意以下条款与退款规则：",
    terms_li_1:"如果你有不尊重行为，或出于我自行判断的其他原因，我有权拒绝服务。",
    terms_li_2:"开始制作你的机器人前，需要先支付 50% 定金。",
    terms_li_3:"不接受美元付款，只接受 Robux。",
    terms_li_4:"我只提供开发与编程，不提供托管服务。",
    terms_li_5:"除非是我这边出错，或我无法继续项目，否则不提供退款。",
    terms_li_6:"最终成品交付后，不提供退款。",
    pulse_copy:"欢迎来到 Pulse Customs。自 2024 年起，我们一直专注于高质量设计，理解客户真正想要和应得的内容，只提供最好的结果。",
    join_server_btn:"加入服务器",
    contact_title:"联系我",
    contact_copy:"通常通过 Discord 联系我最快。",
    contact_cta_btn:"联系我",
    contact_user_label:"用户",
    contact_id_label:"编号",
    a11y_title:"无障碍",
    a11y_copy:"调整网站显示，让阅读和使用更舒适。",
    a11y_theme_label:"主题",
    a11y_theme_subtle:"使用页脚图标切换深色与浅色模式。",
    a11y_theme_value:"由页脚控制",
    a11y_text_label:"文字大小",
    a11y_text_subtle:"增大文字以提高可读性。",
    a11y_motion_label:"减少动态效果",
    a11y_motion_subtle:"尽量减少动画效果。",
    a11y_contrast_label:"高对比度",
    a11y_contrast_subtle:"使用更强的文字对比度。",
    a11y_lang_label:"语言",
    a11y_lang_subtle:"选择默认语言偏好。",
    close_btn:"关闭",
    toggle_on:"开",
    toggle_off:"关",
    size_normal:"标准",
    size_large:"大",
    copied_short:"已复制",
    copied_prefix:"已复制到剪贴板",
    settings_loading:"正在应用更改...",
    theme_to_dark:"切换到深色模式",
    theme_to_light:"切换到浅色模式"
  }
};
function getStoredPreference(key){try{return localStorage.getItem(key);}catch(_error){return null;}}
function savePreference(key,value){try{localStorage.setItem(key,value);}catch(_error){}}
function currentLanguage(){const lang=document.documentElement.getAttribute("data-language");return(lang==="es"||lang==="zh")?lang:"en";}
function t(key){const lang=currentLanguage();return translations[lang]?.[key]||translations.en[key]||"";}
let uiTransitionTimer=null;
let uiTransitionFinalizeTimer=null;
let pendingThemeSwitch=null;
let introOpen=false;
let introRevealTimer=null;
let introExitTimer=null;
function runSettingsTransition(applyChange,options={}){
  if(typeof applyChange!=="function")return;
  if(!uiTransitionOverlay){applyChange();return;}
  const loadingLabel=typeof options.loadingLabel==="string"&&options.loadingLabel.trim()?options.loadingLabel:t("settings_loading");
  const loadingMs=typeof options.loadingMs==="number"?Math.max(0,Math.floor(options.loadingMs)):800+Math.floor(Math.random()*401);
  if(uiTransitionText)uiTransitionText.textContent=loadingLabel;
  if(uiTransitionTimer)clearTimeout(uiTransitionTimer);
  if(uiTransitionFinalizeTimer)clearTimeout(uiTransitionFinalizeTimer);
  uiTransitionOverlay.classList.add("is-active");
  uiTransitionTimer=setTimeout(()=>{
    uiTransitionOverlay.classList.remove("is-active");
    uiTransitionFinalizeTimer=setTimeout(()=>{
      applyChange();
      if(uiTransitionText)uiTransitionText.textContent=t("settings_loading");
      uiTransitionFinalizeTimer=null;
    },140);
    uiTransitionTimer=null;
  },loadingMs);
}
function refreshThemeButtonLabel(){
  if(!themeToggleBtn)return;
  const isLight=document.documentElement.getAttribute("data-theme")==="light";
  const label=isLight?t("theme_to_dark"):t("theme_to_light");
  themeToggleBtn.setAttribute("aria-label",label);
  themeToggleBtn.setAttribute("title",label);
}
function refreshToggleText(){
  if(textSizeToggle){
    const isLarge=document.documentElement.getAttribute("data-text-size")==="large";
    textSizeToggle.setAttribute("aria-pressed",isLarge?"true":"false");
    textSizeToggle.textContent=isLarge?t("size_large"):t("size_normal");
  }
  if(motionToggle){
    const reduced=document.documentElement.getAttribute("data-reduce-motion")==="true";
    motionToggle.setAttribute("aria-pressed",reduced?"true":"false");
    motionToggle.textContent=reduced?t("toggle_on"):t("toggle_off");
  }
  if(contrastToggle){
    const high=document.documentElement.getAttribute("data-contrast")==="high";
    contrastToggle.setAttribute("aria-pressed",high?"true":"false");
    contrastToggle.textContent=high?t("toggle_on"):t("toggle_off");
  }
  if(lightWarningToggle){
    const enabled=document.documentElement.getAttribute("data-light-warning")!=="false";
    lightWarningToggle.setAttribute("aria-pressed",enabled?"true":"false");
    lightWarningToggle.textContent=enabled?t("toggle_on"):t("toggle_off");
  }
}
function openIntroOverlay(){
  if(!introOverlay)return;
  if(introRevealTimer)clearTimeout(introRevealTimer);
  if(introExitTimer)clearTimeout(introExitTimer);
  introOpen=true;
  introOverlay.classList.remove("is-exiting","is-revealed");
  document.body.classList.remove("intro-exiting");
  document.body.classList.add("intro-active");
  introOverlay.classList.add("is-open");
  introOverlay.setAttribute("aria-hidden","false");
  introRevealTimer=setTimeout(()=>{
    introOverlay.classList.add("is-revealed");
    introRevealTimer=null;
  },80);
}
function closeIntroOverlay(){
  if(!introOverlay||!introOpen)return;
  introOpen=false;
  if(introRevealTimer){
    clearTimeout(introRevealTimer);
    introRevealTimer=null;
  }
  if(introExitTimer)clearTimeout(introExitTimer);
  savePreference(introSeenStorageKey,"true");
  introOverlay.classList.add("is-exiting");
  introOverlay.classList.remove("is-revealed");
  document.body.classList.add("intro-exiting");
  document.body.classList.remove("intro-active");
  introExitTimer=setTimeout(()=>{
    introOverlay.classList.remove("is-open","is-exiting");
    introOverlay.setAttribute("aria-hidden","true");
    document.body.classList.remove("intro-exiting");
    introExitTimer=null;
  },920);
}
function applyTheme(theme){
  const nextTheme=theme==="light"?"light":"dark";
  document.documentElement.setAttribute("data-theme",nextTheme);
  refreshThemeButtonLabel();
}
function applyTextSize(size){
  const nextSize=size==="large"?"large":"normal";
  document.documentElement.setAttribute("data-text-size",nextSize);
  refreshToggleText();
}
function applyReducedMotion(state){
  const enabled=state==="true";
  document.documentElement.setAttribute("data-reduce-motion",enabled?"true":"false");
  refreshToggleText();
}
function applyContrast(state){
  const enabled=state==="high";
  document.documentElement.setAttribute("data-contrast",enabled?"high":"normal");
  refreshToggleText();
}
function applyLightWarning(state){
  const enabled=state!=="false";
  document.documentElement.setAttribute("data-light-warning",enabled?"true":"false");
  refreshToggleText();
}
function openLightWarningModal(){
  if(!lightWarningModal)return;
  if(lightWarningDisable)lightWarningDisable.checked=false;
  lightWarningModal.classList.add("is-open");
  lightWarningModal.setAttribute("aria-hidden","false");
  updateBodyModalState();
}
function dismissLightWarningModal(){
  if(!lightWarningModal)return;
  if(lightWarningDisable?.checked){
    applyLightWarning("false");
    savePreference(lightWarningStorageKey,"false");
    lightWarningDisable.checked=false;
  }
  pendingThemeSwitch=null;
  lightWarningModal.classList.remove("is-open");
  lightWarningModal.setAttribute("aria-hidden","true");
  updateBodyModalState();
}
function confirmLightWarningModal(){
  const pending=pendingThemeSwitch;
  pendingThemeSwitch=null;
  dismissLightWarningModal();
  if(!pending)return;
  runSettingsTransition(()=>{
    applyTheme(pending);
    savePreference(themeStorageKey,pending);
  });
}
function applyLanguage(lang){
  const nextLang=(lang==="es"||lang==="zh")?lang:"en";
  document.documentElement.setAttribute("data-language",nextLang);
  document.documentElement.lang=nextLang==="zh"?"zh-CN":nextLang;
  document.querySelectorAll("[data-i18n]").forEach((element)=>{
    const key=element.getAttribute("data-i18n");
    if(!key)return;
    element.textContent=t(key);
  });
  languageButtons.forEach((button)=>{
    const isActive=button.dataset.lang===nextLang;
    button.classList.toggle("is-active",isActive);
    button.setAttribute("aria-pressed",isActive?"true":"false");
  });
  const langEn=document.getElementById("lang-en");
  const langEs=document.getElementById("lang-es");
  const langZh=document.getElementById("lang-zh");
  if(langEn)langEn.textContent="English";
  if(langEs)langEs.textContent="Español";
  if(langZh)langZh.textContent="普通话";
  refreshThemeButtonLabel();
  refreshToggleText();
}

function iconUrl(slug){return `https://cdn.simpleicons.org/${slug}/BEBEBE`;}
function buildChip(tech){const chip=document.createElement("span");chip.className="chip";chip.setAttribute("role","listitem");const icon=document.createElement("img");icon.src=iconUrl(tech.slug);icon.alt="";icon.loading="lazy";const text=document.createElement("span");text.textContent=tech.name;chip.append(icon,text);return chip;}
function shuffle(list){const copy=[...list];for(let i=copy.length-1;i>0;i-=1){const j=Math.floor(Math.random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]];}return copy;}
function buildSegmentItems(list){const targetCount=18+Math.floor(Math.random()*9);const segment=[];while(segment.length<targetCount){segment.push(...shuffle(list));}return segment.slice(0,targetCount);}
function populateRow(row){const track=row.querySelector(".marquee-track");if(!track)return null;const segment=buildSegmentItems(techs);const loop=[...segment,...segment,...segment];track.setAttribute("role","list");track.innerHTML="";loop.forEach((tech)=>{track.append(buildChip(tech));});const duration=Number(row.dataset.speed||"40");return{row,track,duration};}

const marqueeArea=document.querySelector(".marquee-area");
const marqueeRows=Array.from(document.querySelectorAll(".marquee-row")).map((row)=>populateRow(row)).filter(Boolean);
let marqueeHovered=false;
let marqueeRunning=false;
function marqueeTransformX(value){
  return `translate3d(${value}px, 0, 0)`;
}
function normalizeOffset(item){
  if(item.isReverse){
    while(item.offset>=0){item.offset-=item.segmentWidth;}
    while(item.offset<-item.segmentWidth){item.offset+=item.segmentWidth;}
    return;
  }
  while(item.offset<=-item.segmentWidth*2){item.offset+=item.segmentWidth;}
  while(item.offset>-item.segmentWidth){item.offset-=item.segmentWidth;}
}

function initMarquee(){if(!marqueeRows.length)return;marqueeRows.forEach((item)=>{const segmentWidth=item.track.scrollWidth/3;item.segmentWidth=segmentWidth;item.offset=-segmentWidth;item.isReverse=item.row.classList.contains("reverse");item.baseSpeed=segmentWidth/item.duration;item.speedFactor=1;item.track.style.transform=marqueeTransformX(item.offset);item.track.style.willChange="transform";});if(marqueeRunning)return;marqueeRunning=true;let previousTime=performance.now();function frame(now){const delta=Math.min((now-previousTime)/1000,0.05);previousTime=now;const reduceMotion=document.documentElement.getAttribute("data-reduce-motion")==="true";const targetFactor=reduceMotion?0:(marqueeHovered?0.18:1);const smoothing=Math.min(1,delta*8);marqueeRows.forEach((item)=>{item.speedFactor+=(targetFactor-item.speedFactor)*smoothing;const speed=item.baseSpeed*item.speedFactor;item.offset+=item.isReverse?speed*delta:-speed*delta;normalizeOffset(item);item.track.style.transform=marqueeTransformX(item.offset);});requestAnimationFrame(frame);}requestAnimationFrame(frame);}

if(marqueeArea){marqueeArea.addEventListener("pointerenter",()=>{marqueeHovered=true;});marqueeArea.addEventListener("pointerleave",()=>{marqueeHovered=false;});}
window.addEventListener("resize",()=>{marqueeRows.forEach((item)=>{const previousWidth=item.segmentWidth||1;const progress=(item.offset+previousWidth)/previousWidth;item.segmentWidth=item.track.scrollWidth/3;item.baseSpeed=item.segmentWidth/item.duration;item.offset=-item.segmentWidth+(progress*item.segmentWidth);normalizeOffset(item);item.track.style.transform=marqueeTransformX(item.offset);});});
initMarquee();

const reviewGrid=document.querySelector(".review-grid");
const reviewsControls=document.getElementById("reviews-controls");
const reviewsPrev=document.getElementById("reviews-prev");
const reviewsNext=document.getElementById("reviews-next");
let reviewPage=0;
let reviewTouchStartX=0;
let reviewTouchStartY=0;
let reviewSwipeTracking=false;
function getReviewCards(){return reviewGrid?Array.from(reviewGrid.querySelectorAll(".review-card")):[];}
function reviewsPerPage(){return window.matchMedia("(max-width: 700px)").matches?1:3;}
function renderReviewPage(page){
  const reviewCards=getReviewCards();
  if(!reviewCards.length)return;
  const hasOverflow=reviewCards.length>3;
  if(!hasOverflow){
    reviewPage=0;
    reviewCards.forEach((card)=>{card.classList.remove("is-hidden");});
    const visibleCards=reviewCards.filter((card)=>!card.classList.contains("is-hidden"));
    visibleCards.forEach((card,index)=>{card.classList.toggle("has-separator",index>0);});
    if(reviewsControls)reviewsControls.classList.remove("is-visible");
    if(reviewsPrev)reviewsPrev.disabled=true;
    if(reviewsNext)reviewsNext.disabled=true;
    return;
  }
  const perPage=reviewsPerPage();
  const totalPages=Math.max(1,Math.ceil(reviewCards.length/perPage));
  reviewPage=(page+totalPages)%totalPages;
  const start=reviewPage*perPage;
  const end=start+perPage;
  reviewCards.forEach((card,index)=>{card.classList.toggle("is-hidden",index<start||index>=end);});
  const visibleCards=reviewCards.filter((card)=>!card.classList.contains("is-hidden"));
  visibleCards.forEach((card,index)=>{card.classList.toggle("has-separator",index>0);});
  if(reviewsControls)reviewsControls.classList.add("is-visible");
  if(reviewsPrev)reviewsPrev.disabled=false;
  if(reviewsNext)reviewsNext.disabled=false;
}
function initReviewPagination(){
  if(!reviewGrid)return;
  if(reviewsPrev)reviewsPrev.addEventListener("click",()=>{renderReviewPage(reviewPage-1);});
  if(reviewsNext)reviewsNext.addEventListener("click",()=>{renderReviewPage(reviewPage+1);});
  reviewGrid.addEventListener("touchstart",(event)=>{if(!window.matchMedia("(max-width: 700px)").matches)return;if(event.touches.length!==1)return;const touch=event.touches[0];if(!touch)return;reviewTouchStartX=touch.clientX;reviewTouchStartY=touch.clientY;reviewSwipeTracking=true;},{passive:true});
  reviewGrid.addEventListener("touchmove",(event)=>{if(!reviewSwipeTracking)return;const touch=event.touches&&event.touches[0];if(!touch)return;const deltaX=Math.abs(touch.clientX-reviewTouchStartX);const deltaY=Math.abs(touch.clientY-reviewTouchStartY);if(deltaY>deltaX&&deltaY>14)reviewSwipeTracking=false;},{passive:true});
  reviewGrid.addEventListener("touchend",(event)=>{if(!reviewSwipeTracking)return;reviewSwipeTracking=false;if(!window.matchMedia("(max-width: 700px)").matches)return;const touch=event.changedTouches&&event.changedTouches[0];if(!touch)return;const deltaX=touch.clientX-reviewTouchStartX;const deltaY=touch.clientY-reviewTouchStartY;if(Math.abs(deltaX)<54||Math.abs(deltaX)<Math.abs(deltaY)*1.2)return;renderReviewPage(deltaX<0?reviewPage+1:reviewPage-1);},{passive:true});
  reviewGrid.addEventListener("touchcancel",()=>{reviewSwipeTracking=false;},{passive:true});
  window.addEventListener("resize",()=>{renderReviewPage(reviewPage);});
  renderReviewPage(0);
}
initReviewPagination();

function updateBodyModalState(){const hasOpen=document.querySelector(".modal-backdrop.is-open");document.body.classList.toggle("modal-open",Boolean(hasOpen));}
function setupModal(openId,modalId,closeId,options={}){const trigger=document.getElementById(openId);const modal=document.getElementById(modalId);const close=document.getElementById(closeId);if(!trigger||!modal||!close)return null;const open=()=>{modal.classList.add("is-open");modal.setAttribute("aria-hidden","false");if(typeof options.onOpen==="function")options.onOpen();updateBodyModalState();};const dismiss=()=>{modal.classList.remove("is-open");modal.setAttribute("aria-hidden","true");if(typeof options.onClose==="function")options.onClose();updateBodyModalState();};trigger.addEventListener("click",(event)=>{event.preventDefault();open();});close.addEventListener("click",dismiss);modal.addEventListener("click",(event)=>{if(event.target===modal)dismiss();});return{openId,modalId,modal,open,dismiss};}

const modalControllers=[setupModal("terms-open","terms-modal","terms-close"),setupModal("pulse-open","pulse-modal","pulse-close"),setupModal("contact-open","contact-modal","contact-close")].filter(Boolean);
const accessibilityController=setupModal("accessibility-open","accessibility-modal","accessibility-close");
if(accessibilityController)modalControllers.push(accessibilityController);
if(lightWarningModal)modalControllers.push({modalId:"light-warning-modal",modal:lightWarningModal,dismiss:dismissLightWarningModal});
const hashToModalId={"#terms-of-service":"terms-modal","#refund-policy":"terms-modal","#pulse-customs":"pulse-modal","#get-in-touch":"contact-modal"};
const hashModalId=hashToModalId[window.location.hash];
if(hashModalId){const target=modalControllers.find((controller)=>controller.modalId===hashModalId);if(target)target.open();}
document.addEventListener("keydown",(event)=>{if(event.key!=="Escape")return;modalControllers.forEach(({modal,dismiss})=>{if(modal.classList.contains("is-open"))dismiss();});});
if(lightWarningClose)lightWarningClose.addEventListener("click",dismissLightWarningModal);
if(lightWarningModal)lightWarningModal.addEventListener("click",(event)=>{if(event.target===lightWarningModal)dismissLightWarningModal();});
if(lightWarningContinue)lightWarningContinue.addEventListener("click",confirmLightWarningModal);
if(introEnter)introEnter.addEventListener("click",closeIntroOverlay);
document.addEventListener("keydown",(event)=>{
  if(!introOpen)return;
  if(event.key==="Enter"||event.key==="Escape"){
    event.preventDefault();
    closeIntroOverlay();
  }
});

const initialTheme=getStoredPreference(themeStorageKey)||"dark";
applyTheme(initialTheme);
applyTextSize(getStoredPreference(textSizeStorageKey)||"normal");
applyReducedMotion(getStoredPreference(motionStorageKey)||"false");
applyContrast(getStoredPreference(contrastStorageKey)||"normal");
applyLightWarning(getStoredPreference(lightWarningStorageKey)||"true");
applyLanguage(getStoredPreference(languageStorageKey)||"en");
if(getStoredPreference(introSeenStorageKey)!=="true")openIntroOverlay();
if(themeToggleBtn){themeToggleBtn.addEventListener("click",()=>{const activeTheme=document.documentElement.getAttribute("data-theme")==="light"?"light":"dark";const nextTheme=activeTheme==="light"?"dark":"light";const showLightWarning=nextTheme==="light"&&document.documentElement.getAttribute("data-light-warning")!=="false";if(showLightWarning){pendingThemeSwitch=nextTheme;openLightWarningModal();return;}runSettingsTransition(()=>{applyTheme(nextTheme);savePreference(themeStorageKey,nextTheme);});});}
if(textSizeToggle){textSizeToggle.addEventListener("click",()=>{const next=document.documentElement.getAttribute("data-text-size")==="large"?"normal":"large";runSettingsTransition(()=>{applyTextSize(next);savePreference(textSizeStorageKey,next);});});}
if(motionToggle){motionToggle.addEventListener("click",()=>{const next=document.documentElement.getAttribute("data-reduce-motion")==="true"?"false":"true";runSettingsTransition(()=>{applyReducedMotion(next);savePreference(motionStorageKey,next);});});}
if(contrastToggle){contrastToggle.addEventListener("click",()=>{const next=document.documentElement.getAttribute("data-contrast")==="high"?"normal":"high";runSettingsTransition(()=>{applyContrast(next);savePreference(contrastStorageKey,next);});});}
if(lightWarningToggle){lightWarningToggle.addEventListener("click",()=>{const enabled=document.documentElement.getAttribute("data-light-warning")!=="false";const next=enabled?"false":"true";runSettingsTransition(()=>{applyLightWarning(next);savePreference(lightWarningStorageKey,next);});});}
languageButtons.forEach((button)=>{button.addEventListener("click",()=>{const next=(button.dataset.lang==="es"||button.dataset.lang==="zh")?button.dataset.lang:"en";const loadingLabel=translations[next]?.settings_loading||translations.en.settings_loading;const loadingMs=3000+Math.floor(Math.random()*1001);runSettingsTransition(()=>{applyLanguage(next);savePreference(languageStorageKey,next);},{loadingLabel,loadingMs});});});

const copyToast=document.getElementById("copy-toast");
let copyToastTimer=null;
let lastCopiedValue="";
let lastCopiedAt=0;
function showCopyToast(value){if(!copyToast)return;copyToast.textContent=`${t("copied_prefix")}: ${value}`;copyToast.classList.add("is-visible");if(copyToastTimer)clearTimeout(copyToastTimer);copyToastTimer=setTimeout(()=>{copyToast.classList.remove("is-visible");copyToastTimer=null;},3000);}
async function copyText(value){try{await navigator.clipboard.writeText(value);}catch(_error){const temp=document.createElement("textarea");temp.value=value;temp.setAttribute("readonly","");temp.style.position="absolute";temp.style.left="-9999px";document.body.appendChild(temp);temp.select();document.execCommand("copy");document.body.removeChild(temp);}}
async function copyFromElement(element){const now=Date.now();const value=element.dataset.copy?.trim()||"";if(!value)return;const sameValueTooSoon=value===lastCopiedValue&&now-lastCopiedAt<3000;if(sameValueTooSoon)return;await copyText(value);lastCopiedValue=value;lastCopiedAt=now;showCopyToast(value);}
document.querySelectorAll("[data-copy]").forEach((element)=>{element.addEventListener("click",()=>{copyFromElement(element);});element.addEventListener("keydown",(event)=>{if(event.key==="Enter"||event.key===" "){event.preventDefault();copyFromElement(element);}});});

