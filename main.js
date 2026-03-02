const techsSection1=[{name:"Node.js",slug:"nodedotjs"},{name:"JavaScript",slug:"javascript"},{name:"TypeScript",
slug:"typescript"},{name:"React",slug:"react"},{name:"Next.js",slug:"nextdotjs"},{name:"Vite",slug:"vite"},{
name:"Tailwind",slug:"tailwindcss"},{name:"HTML",slug:"html5"},{name:"CSS",slug:"css"},{name:"SCSS",slug:"sass"},{
name:"Elm",slug:"elm"},{name:"Railway",slug:"railway"},{name:"Hostinger",slug:"hostinger"},{name:"Firebase",slug:"firebase"}],techsSection2=[{name:"Express",slug:"express"},{name:"MongoDB",slug:"mongodb"},{name:"Docker",
slug:"docker"},{name:"Git",slug:"git"},{name:"Cloudflare",slug:"cloudflare"},{name:"Vercel",slug:"vercel"},{
name:"Webflow",slug:"webflow"},{name:"discord.js",slug:"discorddotjs"},{name:"Swift",slug:"swift"},{name:"Java",
slug:"openjdk"},{name:"SQL",slug:"mysql"}],themeToggleBtn=document.getElementById("theme-toggle-btn"),textSizeToggle=document.getElementById("text-size-toggle"),motionToggle=document.getElementById("motion-toggle"),contrastToggle=document.getElementById("contrast-toggle"),introOverlay=document.getElementById("intro-overlay"),introEnter=document.getElementById("intro-enter"),lightWarningToggle=document.getElementById("light-warning-toggle"),lightWarningModal=document.getElementById("light-warning-modal"),lightWarningClose=document.getElementById("light-warning-close"),lightWarningDisable=document.getElementById("light-warning-disable"),lightWarningContinue=document.getElementById("light-warning-continue"),languageButtons=Array.from(document.querySelectorAll(".a11y-chip-btn[data-lang]")),uiTransitionOverlay=document.getElementById("ui-transition-overlay"),uiTransitionText=document.querySelector(".ui-transition-text"),themeStorageKey="nysrioo-theme",textSizeStorageKey="nysrioo-text-size",motionStorageKey="nysrioo-reduce-motion",contrastStorageKey="nysrioo-contrast",lightWarningStorageKey="nysrioo-light-warning-enabled",languageStorageKey="nysrioo-language",introSeenStorageKey="nysrioo-intro-seen"
;function applyPlatformLayout(){
const e=navigator.userAgentData?.platform||navigator.platform||"",t=navigator.userAgent||"",i=/iPad|iPhone|iPod/i.test(t)||"MacIntel"===e&&navigator.maxTouchPoints>1
;!/Mac/i.test(e)&&!/Macintosh|Mac OS X/i.test(t)||i?document.documentElement.removeAttribute("data-platform"):document.documentElement.setAttribute("data-platform","macos")
}const translations={en:{tagline:"Self-taught programmer",footer_terms:"Terms of Service",footer_contact:"Get in Touch",
footer_pulse:"Pulse Customs",footer_theme_toggle:"Switch Theme",footer_accessibility:"Accessibility",
terms_title:"Terms & Refund Policy",terms_copy:"By commissioning me, you agree to these terms and refund rules:",
terms_li_1:"I reserve the right to refuse service if you are disrespectful, or for any other reason at my discretion.",
terms_li_2:"A 50% upfront payment is required before I begin work on your bot.",
terms_li_3:"I do not accept USD payments. Payment is Robux only.",
terms_li_4:"I provide coding/development only. I do not host bots.",
terms_li_5:"I do not offer refunds unless a mistake was made on my end or I am unable to continue the project.",
terms_li_6:"No refunds are offered after the final product has been delivered.",
pulse_copy:"Welcome to Pulse Customs! Since 2024, we've been at the forefront of design, understanding exactly what our clients want and deserve, nothing less than the very best.",
join_server_btn:"Join Server",contact_title:"Get in Touch",
contact_copy:"The best way to contact me is usually Discord.",contact_cta_btn:"Get in Touch",contact_user_label:"User",
contact_id_label:"ID",a11y_title:"Accessibility",
a11y_copy:"Adjust how the site looks and feels for readability and comfort.",a11y_theme_label:"Theme",
a11y_theme_subtle:"Use the footer icon to switch dark and light mode.",a11y_theme_value:"Controlled from footer",
a11y_text_label:"Text Size",a11y_text_subtle:"Increase text size for readability.",a11y_motion_label:"Reduce Motion",
a11y_motion_subtle:"Minimize moving animations.",a11y_contrast_label:"High Contrast",
a11y_contrast_subtle:"Use stronger text contrast.",a11y_light_warning_label:"Light Mode Warning",
a11y_light_warning_subtle:"Show a notice when switching to light mode.",a11y_lang_label:"Languages",
a11y_lang_subtle:"Choose a default language preference.",light_warning_title:"Light Mode Notice",
light_warning_copy:"Light mode can feel very bright. It is mainly recommended for people who find dark layouts hard to read in low-light spaces.",
light_warning_disable_label:"Don't show this warning again",light_warning_continue_btn:"Continue",close_btn:"Close",
toggle_on:"On",toggle_off:"Off",size_normal:"Normal",size_large:"Large",copied_short:"Copied",
copied_prefix:"Copied to Clipboard",settings_loading:"Applying changes...",theme_to_dark:"Switch to dark mode",
theme_to_light:"Switch to light mode"},es:{tagline:"Programador autodidacta",footer_terms:"Terminos del servicio",
footer_contact:"Contacto",footer_pulse:"Pulse Customs",footer_theme_toggle:"Cambiar tema",
footer_accessibility:"Accesibilidad",terms_title:"Terminos y politica de reembolso",
terms_copy:"Al contratarme, aceptas estos terminos y reglas de reembolso:",
terms_li_1:"Me reservo el derecho de rechazar el servicio si hay faltas de respeto o por cualquier otra razon a mi criterio.",
terms_li_2:"Se requiere un pago inicial del 50% antes de comenzar tu bot.",
terms_li_3:"No acepto pagos en USD. El pago es solo en Robux.",
terms_li_4:"Ofrezco solo desarrollo y programacion. No alojo bots.",
terms_li_5:"No ofrezco reembolsos salvo error de mi parte o si no puedo continuar el proyecto.",
terms_li_6:"No hay reembolsos despues de entregar el producto final.",
pulse_copy:"Bienvenido a Pulse Customs. Desde 2024, hemos estado al frente del diseno, entendiendo exactamente lo que nuestros clientes quieren y merecen: nada menos que lo mejor.",
join_server_btn:"Unirse al servidor",contact_title:"Contacto",
contact_copy:"La mejor forma de contactarme suele ser por Discord.",contact_cta_btn:"Contacto",
contact_user_label:"Usuario",contact_id_label:"ID",a11y_title:"Accesibilidad",
a11y_copy:"Ajusta el sitio para mejorar lectura y comodidad.",a11y_theme_label:"Tema",
a11y_theme_subtle:"Usa el icono del pie para cambiar entre modo oscuro y claro.",
a11y_theme_value:"Controlado desde el pie de pagina",a11y_text_label:"Tamano de texto",
a11y_text_subtle:"Aumenta el texto para mejor legibilidad.",a11y_motion_label:"Reducir movimiento",
a11y_motion_subtle:"Minimiza las animaciones.",a11y_contrast_label:"Alto contraste",
a11y_contrast_subtle:"Usa un contraste de texto mas fuerte.",a11y_lang_label:"Idiomas",
a11y_lang_subtle:"Elige una preferencia de idioma predeterminada.",close_btn:"Cerrar",toggle_on:"Activado",
toggle_off:"Desactivado",size_normal:"Normal",size_large:"Grande",copied_short:"Copiado",
copied_prefix:"Copiado al portapapeles",settings_loading:"Aplicando cambios...",theme_to_dark:"Cambiar a modo oscuro",
theme_to_light:"Cambiar a modo claro"},zh:{tagline:"自学程序员",footer_terms:"服务条款",footer_contact:"联系我",
footer_pulse:"Pulse Customs",footer_theme_toggle:"切换主题",footer_accessibility:"无障碍",terms_title:"条款与退款政策",
terms_copy:"委托我之前，请同意以下条款与退款规则：",terms_li_1:"如果你有不尊重行为，或出于我自行判断的其他原因，我有权拒绝服务。",terms_li_2:"开始制作你的机器人前，需要先支付 50% 定金。",
terms_li_3:"不接受美元付款，只接受 Robux。",terms_li_4:"我只提供开发与编程，不提供托管服务。",terms_li_5:"除非是我这边出错，或我无法继续项目，否则不提供退款。",
terms_li_6:"最终成品交付后，不提供退款。",pulse_copy:"欢迎来到 Pulse Customs。自 2024 年起，我们一直专注于高质量设计，理解客户真正想要和应得的内容，只提供最好的结果。",
join_server_btn:"加入服务器",contact_title:"联系我",contact_copy:"通常通过 Discord 联系我最快。",contact_cta_btn:"联系我",
contact_user_label:"用户",contact_id_label:"编号",a11y_title:"无障碍",a11y_copy:"调整网站显示，让阅读和使用更舒适。",a11y_theme_label:"主题",
a11y_theme_subtle:"使用页脚图标切换深色与浅色模式。",a11y_theme_value:"由页脚控制",a11y_text_label:"文字大小",a11y_text_subtle:"增大文字以提高可读性。",
a11y_motion_label:"减少动态效果",a11y_motion_subtle:"尽量减少动画效果。",a11y_contrast_label:"高对比度",a11y_contrast_subtle:"使用更强的文字对比度。",
a11y_lang_label:"语言",a11y_lang_subtle:"选择默认语言偏好。",close_btn:"关闭",toggle_on:"开",toggle_off:"关",size_normal:"标准",
size_large:"大",copied_short:"已复制",copied_prefix:"已复制到剪贴板",settings_loading:"正在应用更改...",theme_to_dark:"切换到深色模式",
theme_to_light:"切换到浅色模式"}};function getStoredPreference(e){try{return localStorage.getItem(e)}catch(e){return null}}
function savePreference(e,t){try{localStorage.setItem(e,t)}catch(e){}}function currentLanguage(){
const e=document.documentElement.getAttribute("data-language");return"es"===e||"zh"===e?e:"en"}function t(e){
const t=currentLanguage();return translations[t]?.[e]||translations.en[e]||""}
let uiTransitionTimer=null,uiTransitionFinalizeTimer=null,pendingThemeSwitch=null,introOpen=!1,introRevealTimer=null,introExitTimer=null
;function runSettingsTransition(e,i={}){if("function"!=typeof e)return;if(!uiTransitionOverlay)return void e()
;const n="string"==typeof i.loadingLabel&&i.loadingLabel.trim()?i.loadingLabel:t("settings_loading"),o="number"==typeof i.loadingMs?Math.max(0,Math.floor(i.loadingMs)):800+Math.floor(401*Math.random())
;uiTransitionText&&(uiTransitionText.textContent=n),uiTransitionTimer&&clearTimeout(uiTransitionTimer),
uiTransitionFinalizeTimer&&clearTimeout(uiTransitionFinalizeTimer),uiTransitionOverlay.classList.add("is-active"),
uiTransitionTimer=setTimeout(()=>{uiTransitionOverlay.classList.remove("is-active"),
uiTransitionFinalizeTimer=setTimeout(()=>{e(),uiTransitionText&&(uiTransitionText.textContent=t("settings_loading")),
uiTransitionFinalizeTimer=null},140),uiTransitionTimer=null},o)}function refreshThemeButtonLabel(){
if(!themeToggleBtn)return
;const e=t("light"===document.documentElement.getAttribute("data-theme")?"theme_to_dark":"theme_to_light")
;themeToggleBtn.setAttribute("aria-label",e),themeToggleBtn.setAttribute("title",e)}function refreshToggleText(){
if(textSizeToggle){const e="large"===document.documentElement.getAttribute("data-text-size")
;textSizeToggle.setAttribute("aria-pressed",e?"true":"false"),textSizeToggle.textContent=t(e?"size_large":"size_normal")
}if(motionToggle){const e="true"===document.documentElement.getAttribute("data-reduce-motion")
;motionToggle.setAttribute("aria-pressed",e?"true":"false"),motionToggle.textContent=t(e?"toggle_on":"toggle_off")}
if(contrastToggle){const e="high"===document.documentElement.getAttribute("data-contrast")
;contrastToggle.setAttribute("aria-pressed",e?"true":"false"),contrastToggle.textContent=t(e?"toggle_on":"toggle_off")}
if(lightWarningToggle){const e="false"!==document.documentElement.getAttribute("data-light-warning")
;lightWarningToggle.setAttribute("aria-pressed",e?"true":"false"),
lightWarningToggle.textContent=t(e?"toggle_on":"toggle_off")}}function openIntroOverlay(){
introOverlay&&(introRevealTimer&&clearTimeout(introRevealTimer),introExitTimer&&clearTimeout(introExitTimer),
introOpen=!0,introOverlay.classList.remove("is-exiting","is-revealed"),document.body.classList.remove("intro-exiting"),
document.body.classList.add("intro-active"),introOverlay.classList.add("is-open"),
introOverlay.setAttribute("aria-hidden","false"),introRevealTimer=setTimeout(()=>{
introOverlay.classList.add("is-revealed"),introRevealTimer=null},80))}function closeIntroOverlay(){
introOverlay&&introOpen&&(introOpen=!1,introRevealTimer&&(clearTimeout(introRevealTimer),introRevealTimer=null),
introExitTimer&&clearTimeout(introExitTimer),savePreference(introSeenStorageKey,"true"),
introOverlay.classList.add("is-exiting"),introOverlay.classList.remove("is-revealed"),
document.body.classList.add("intro-exiting"),document.body.classList.remove("intro-active"),
introExitTimer=setTimeout(()=>{introOverlay.classList.remove("is-open","is-exiting"),
introOverlay.setAttribute("aria-hidden","true"),document.body.classList.remove("intro-exiting"),introExitTimer=null
},920))}function applyTheme(e){const t="light"===e?"light":"dark";document.documentElement.setAttribute("data-theme",t),
refreshThemeButtonLabel()}function applyTextSize(e){const t="large"===e?"large":"normal"
;document.documentElement.setAttribute("data-text-size",t),refreshToggleText()}function applyReducedMotion(e){
const t="true"===e;document.documentElement.setAttribute("data-reduce-motion",t?"true":"false"),refreshToggleText()}
function applyContrast(e){const t="high"===e;document.documentElement.setAttribute("data-contrast",t?"high":"normal"),
refreshToggleText()}function applyLightWarning(e){const t="false"!==e
;document.documentElement.setAttribute("data-light-warning",t?"true":"false"),refreshToggleText()}
function openLightWarningModal(){lightWarningModal&&(lightWarningDisable&&(lightWarningDisable.checked=!1),
lightWarningModal.classList.add("is-open"),lightWarningModal.setAttribute("aria-hidden","false"),updateBodyModalState())
}function dismissLightWarningModal(){lightWarningModal&&(lightWarningDisable?.checked&&(applyLightWarning("false"),
savePreference(lightWarningStorageKey,"false"),lightWarningDisable.checked=!1),pendingThemeSwitch=null,
lightWarningModal.classList.remove("is-open"),lightWarningModal.setAttribute("aria-hidden","true"),
updateBodyModalState())}function confirmLightWarningModal(){const e=pendingThemeSwitch;pendingThemeSwitch=null,
dismissLightWarningModal(),e&&runSettingsTransition(()=>{applyTheme(e),savePreference("nysrioo-theme",e)})}
function applyLanguage(e){const i="es"===e||"zh"===e?e:"en";document.documentElement.setAttribute("data-language",i),
document.documentElement.lang="zh"===i?"zh-CN":i,document.querySelectorAll("[data-i18n]").forEach(e=>{
const i=e.getAttribute("data-i18n");i&&(e.textContent=t(i))}),languageButtons.forEach(e=>{const t=e.dataset.lang===i
;e.classList.toggle("is-active",t),e.setAttribute("aria-pressed",t?"true":"false")})
;const n=document.getElementById("lang-en"),o=document.getElementById("lang-es"),r=document.getElementById("lang-zh")
;n&&(n.textContent="English"),o&&(o.textContent="Español"),r&&(r.textContent="普通话"),refreshThemeButtonLabel(),
refreshToggleText()}function iconUrl(e){return`https://cdn.simpleicons.org/${e}/BEBEBE`}function buildChip(e){
const t=document.createElement("span");t.className="chip",t.setAttribute("role","listitem")
;const i=document.createElement("img");i.src=iconUrl(e.slug),i.alt="",i.loading="lazy"
;const n=document.createElement("span");return n.textContent=e.name,t.append(i,n),t}function shuffle(e){const t=[...e]
;for(let e=t.length-1;e>0;e-=1){const i=Math.floor(Math.random()*(e+1));[t[e],t[i]]=[t[i],t[e]]}return t}
function buildSegmentItems(e){const t=18+Math.floor(9*Math.random()),i=[];for(;i.length<t;)i.push(...shuffle(e))
;return i.slice(0,t)}function populateRow(e,t){const i=e.querySelector(".marquee-track");if(!i)return null
;const n=buildSegmentItems(0===t?techsSection1:techsSection2),o=[...n,...n,...n];i.setAttribute("role","list"),
i.innerHTML="",o.forEach(e=>{i.append(buildChip(e))});const r=Number(e.dataset.speed||"40");return{row:e,track:i,
duration:r}}
const marqueeArea=document.querySelector(".marquee-area"),marqueeRows=Array.from(document.querySelectorAll(".marquee-row")).map((e,t)=>populateRow(e,t)).filter(Boolean)
;let marqueeHovered=!1,marqueeRunning=!1;function marqueeTransformX(e){return`translate3d(${e}px, 0, 0)`}
function normalizeOffset(e){if(e.isReverse){for(;e.offset>=0;)e.offset-=e.segmentWidth
;for(;e.offset<-e.segmentWidth;)e.offset+=e.segmentWidth}else{for(;e.offset<=2*-e.segmentWidth;)e.offset+=e.segmentWidth
;for(;e.offset>-e.segmentWidth;)e.offset-=e.segmentWidth}}function initMarquee(){if(!marqueeRows.length)return
;if(marqueeRows.forEach(e=>{const t=e.track.scrollWidth/3;e.segmentWidth=t,e.offset=-t,
e.isReverse=e.row.classList.contains("reverse"),e.baseSpeed=t/e.duration,e.speedFactor=1,
e.track.style.transform=marqueeTransformX(e.offset),e.track.style.willChange="transform"}),marqueeRunning)return
;marqueeRunning=!0;let e=performance.now();requestAnimationFrame(function t(i){const n=Math.min((i-e)/1e3,.05);e=i
;const o="true"===document.documentElement.getAttribute("data-reduce-motion")?0:marqueeHovered?.18:1,r=Math.min(1,8*n)
;marqueeRows.forEach(e=>{e.speedFactor+=(o-e.speedFactor)*r;const t=e.baseSpeed*e.speedFactor
;e.offset+=e.isReverse?t*n:-t*n,normalizeOffset(e),e.track.style.transform=marqueeTransformX(e.offset)}),
requestAnimationFrame(t)})}marqueeArea&&(marqueeArea.addEventListener("pointerenter",()=>{marqueeHovered=!0}),
marqueeArea.addEventListener("pointerleave",()=>{marqueeHovered=!1})),window.addEventListener("resize",()=>{
marqueeRows.forEach(e=>{const t=e.segmentWidth||1,i=(e.offset+t)/t;e.segmentWidth=e.track.scrollWidth/3,
e.baseSpeed=e.segmentWidth/e.duration,e.offset=-e.segmentWidth+i*e.segmentWidth,normalizeOffset(e),
e.track.style.transform=marqueeTransformX(e.offset)})}),initMarquee()
;const reviewGrid=document.querySelector(".review-grid"),reviewsControls=document.getElementById("reviews-controls"),reviewsPrev=document.getElementById("reviews-prev"),reviewsNext=document.getElementById("reviews-next"),pulseCardTriggers=Array.from(document.querySelectorAll(".review-pulse-open")),reviewsTimerBar=document.getElementById("reviews-timer-bar"),reviewAutoplayMs=5e3,reviewTransitionMs=500

;let reviewPage=0,reviewTouchStartX=0,reviewTouchStartY=0,reviewSwipeTracking=!1,reviewAutoplayTimer=null,reviewTransitionTimer=null,reviewIsAnimating=!1,reviewAutoplayStartedAt=0,reviewAutoplayRemainingMs=5e3
;function clampReviewNumber(e,t,i){return Math.min(Math.max(e,t),i)}function getReviewCards(){
return reviewGrid?Array.from(reviewGrid.querySelectorAll(".review-card")):[]}function updateReviewControls(e){
const t=e.length>1;reviewsControls&&reviewsControls.classList.toggle("is-visible",t),
reviewsPrev&&(reviewsPrev.disabled=!t),reviewsNext&&(reviewsNext.disabled=!t)}function clearReviewMotionState(e){
e&&e.classList.remove("is-entering-right","is-entering-left","is-leaving-left","is-leaving-right")}
function syncReviewGridHeight(){if(!reviewGrid)return;const e=reviewGrid.querySelector(".review-card.is-active")
;e&&(reviewGrid.style.height=`${e.offsetHeight}px`)}function setReviewsTimerProgress(e,t,i){if(!reviewsTimerBar)return
;const n=clampReviewNumber(Number(e)||0,0,1),o=Math.max(0,Math.floor(Number(t)||0))
;reviewsTimerBar.style.transition="none",reviewsTimerBar.style.transform=`scaleX(${n})`,
reviewsTimerBar.parentElement?.classList.toggle("is-running",Boolean(i)),!i||o<=0||requestAnimationFrame(()=>{
requestAnimationFrame(()=>{reviewsTimerBar.style.transition=`transform ${o}ms linear`,
reviewsTimerBar.style.transform="scaleX(1)"})})}function clearReviewAutoplayTimer(){
reviewAutoplayTimer&&clearTimeout(reviewAutoplayTimer),reviewAutoplayTimer=null}function getReviewAutoplayProgress(){
return clampReviewNumber(1-reviewAutoplayRemainingMs/5e3,0,1)}function queueReviewAutoplayTick(){
const e=getReviewCards();if(clearReviewAutoplayTimer(),e.length<=1)return reviewAutoplayStartedAt=0,
reviewAutoplayRemainingMs=5e3,void setReviewsTimerProgress(0,0,!1)
;const t=clampReviewNumber(reviewAutoplayRemainingMs,20,5e3);reviewAutoplayStartedAt=performance.now(),
setReviewsTimerProgress(getReviewAutoplayProgress(),t,!0),reviewAutoplayTimer=setTimeout(()=>{reviewAutoplayTimer=null,
reviewAutoplayStartedAt=0,reviewAutoplayRemainingMs=5e3,renderReviewPage(reviewPage+1,{restartAutoplay:!1,direction:1}),
queueReviewAutoplayTick()},t)}function stopReviewAutoplay(e=!0){if(reviewAutoplayStartedAt){
const e=performance.now()-reviewAutoplayStartedAt
;reviewAutoplayRemainingMs=clampReviewNumber(reviewAutoplayRemainingMs-e,0,5e3)}reviewAutoplayStartedAt=0,
clearReviewAutoplayTimer(),e&&(reviewAutoplayRemainingMs=5e3),setReviewsTimerProgress(getReviewAutoplayProgress(),0,!1)}
function startReviewAutoplay(e={}){if(!0===e.reset&&(reviewAutoplayRemainingMs=5e3),
getReviewCards().length<=1)return reviewAutoplayRemainingMs=5e3,void stopReviewAutoplay(!0);queueReviewAutoplayTick()}
function renderReviewPage(e,t={}){const i=getReviewCards();if(!i.length)return
;const n=Math.max(1,i.length),o=(e+n)%n,r=-1===t.direction?-1:1
;if(reviewTransitionTimer&&(clearTimeout(reviewTransitionTimer),reviewTransitionTimer=null),
reviewIsAnimating&&(i.forEach((e,t)=>{clearReviewMotionState(e);const i=t===reviewPage
;e.classList.toggle("is-active",i),e.classList.toggle("is-hidden",!i),e.setAttribute("aria-hidden",i?"false":"true")}),
reviewIsAnimating=!1),reviewPage===o&&!0!==t.immediate)return updateReviewControls(i),
void(!1!==t.restartAutoplay&&startReviewAutoplay({reset:!0}));if(!0===t.immediate||reviewPage<0)return reviewPage=o,
i.forEach((e,t)=>{clearReviewMotionState(e);const i=t===reviewPage;e.classList.toggle("is-active",i),
e.classList.toggle("is-hidden",!i),e.setAttribute("aria-hidden",i?"false":"true")}),updateReviewControls(i),
syncReviewGridHeight(),void(!1!==t.restartAutoplay&&startReviewAutoplay({reset:!0}));const a=i[reviewPage],s=i[o]
;if(!a||!s)return reviewPage=o,i.forEach((e,t)=>{const i=t===reviewPage;e.classList.toggle("is-active",i),
e.classList.toggle("is-hidden",!i),e.setAttribute("aria-hidden",i?"false":"true")}),updateReviewControls(i),
syncReviewGridHeight(),void(!1!==t.restartAutoplay&&startReviewAutoplay({reset:!0}));clearReviewMotionState(a),
clearReviewMotionState(s),s.classList.remove("is-hidden"),s.setAttribute("aria-hidden","false"),
s.classList.add(1===r?"is-entering-right":"is-entering-left");const l=Math.max(a.offsetHeight,s.offsetHeight)
;reviewGrid.style.height=`${l}px`,reviewIsAnimating=!0,requestAnimationFrame(()=>{
a.classList.add(1===r?"is-leaving-left":"is-leaving-right"),a.classList.remove("is-active"),
a.setAttribute("aria-hidden","true"),s.classList.add("is-active")}),reviewTransitionTimer=setTimeout(()=>{
clearReviewMotionState(a),a.classList.add("is-hidden"),clearReviewMotionState(s),s.classList.remove("is-hidden"),
reviewPage=o,reviewIsAnimating=!1,reviewTransitionTimer=null,syncReviewGridHeight()},570),updateReviewControls(i),
!1!==t.restartAutoplay&&startReviewAutoplay({reset:!0})}function initReviewPagination(){if(!reviewGrid)return
;reviewPage=-1,reviewsPrev&&reviewsPrev.addEventListener("click",()=>{renderReviewPage(reviewPage-1,{direction:-1})}),
reviewsNext&&reviewsNext.addEventListener("click",()=>{renderReviewPage(reviewPage+1,{direction:1})}),
reviewGrid.addEventListener("touchstart",e=>{if(!window.matchMedia("(max-width: 700px)").matches)return
;if(1!==e.touches.length)return;const t=e.touches[0];t&&(reviewTouchStartX=t.clientX,reviewTouchStartY=t.clientY,
reviewSwipeTracking=!0)},{passive:!0}),reviewGrid.addEventListener("touchmove",e=>{if(!reviewSwipeTracking)return
;const t=e.touches&&e.touches[0];if(!t)return
;const i=Math.abs(t.clientX-reviewTouchStartX),n=Math.abs(t.clientY-reviewTouchStartY)
;n>i&&n>14&&(reviewSwipeTracking=!1)},{passive:!0}),reviewGrid.addEventListener("touchend",e=>{
if(!reviewSwipeTracking)return;if(reviewSwipeTracking=!1,!window.matchMedia("(max-width: 700px)").matches)return
;const t=e.changedTouches&&e.changedTouches[0];if(!t)return
;const i=t.clientX-reviewTouchStartX,n=t.clientY-reviewTouchStartY
;Math.abs(i)<54||Math.abs(i)<1.2*Math.abs(n)||renderReviewPage(i<0?reviewPage+1:reviewPage-1,{direction:i<0?1:-1})},{
passive:!0}),reviewGrid.addEventListener("touchcancel",()=>{reviewSwipeTracking=!1},{passive:!0}),
window.addEventListener("resize",()=>{syncReviewGridHeight()});const e=getReviewCards(),t=shuffle(e);t.forEach(e=>{reviewGrid.append(e)});const i=t.length?Math.floor(Math.random()*t.length):0;renderReviewPage(i,{immediate:!0})}function updateBodyModalState(){
const e=document.querySelector(".modal-backdrop.is-open");document.body.classList.toggle("modal-open",Boolean(e))}
function setupModal(e,t,i,n={}){
const o=document.getElementById(e),r=document.getElementById(t),a=document.getElementById(i);if(!o||!r||!a)return null
;const s=()=>{r.classList.add("is-open"),r.setAttribute("aria-hidden","false"),"function"==typeof n.onOpen&&n.onOpen(),
updateBodyModalState()},l=()=>{r.classList.remove("is-open"),r.setAttribute("aria-hidden","true"),
"function"==typeof n.onClose&&n.onClose(),updateBodyModalState()};return o.addEventListener("click",e=>{
e.preventDefault(),s()}),a.addEventListener("click",l),r.addEventListener("click",e=>{e.target===r&&l()}),{openId:e,
modalId:t,modal:r,open:s,dismiss:l}}initReviewPagination()
;const termsController=setupModal("terms-open","terms-modal","terms-close"),pulseController=setupModal("pulse-open","pulse-modal","pulse-close"),contactController=setupModal("contact-open","contact-modal","contact-close"),modalControllers=[termsController,pulseController,contactController].filter(Boolean),accessibilityController=setupModal("accessibility-open","accessibility-modal","accessibility-close")
;accessibilityController&&modalControllers.push(accessibilityController),lightWarningModal&&modalControllers.push({
modalId:"light-warning-modal",modal:lightWarningModal,dismiss:dismissLightWarningModal}),
pulseController&&pulseCardTriggers.length&&pulseCardTriggers.forEach(e=>{e.addEventListener("click",e=>{
e.preventDefault(),pulseController.open()})});const hashToModalId={"#terms-of-service":"terms-modal",
"#refund-policy":"terms-modal","#pulse-customs":"pulse-modal","#get-in-touch":"contact-modal"
},hashModalId=hashToModalId[window.location.hash];if(hashModalId){
const e=modalControllers.find(e=>e.modalId===hashModalId);e&&e.open()}document.addEventListener("keydown",e=>{
"Escape"===e.key&&modalControllers.forEach(({modal:e,dismiss:t})=>{e.classList.contains("is-open")&&t()})}),
lightWarningClose&&lightWarningClose.addEventListener("click",dismissLightWarningModal),
lightWarningModal&&lightWarningModal.addEventListener("click",e=>{
e.target===lightWarningModal&&dismissLightWarningModal()
}),lightWarningContinue&&lightWarningContinue.addEventListener("click",confirmLightWarningModal),
introEnter&&introEnter.addEventListener("click",closeIntroOverlay),document.addEventListener("keydown",e=>{
introOpen&&("Enter"!==e.key&&"Escape"!==e.key||(e.preventDefault(),closeIntroOverlay()))})
;const initialTheme=getStoredPreference("nysrioo-theme")||"dark";applyPlatformLayout(),applyTheme(initialTheme),
applyTextSize(getStoredPreference(textSizeStorageKey)||"normal"),
applyReducedMotion(getStoredPreference(motionStorageKey)||"false"),
applyContrast(getStoredPreference("nysrioo-contrast")||"normal"),
applyLightWarning(getStoredPreference(lightWarningStorageKey)||"true"),
applyLanguage(getStoredPreference("nysrioo-language")||"en"),
"true"!==getStoredPreference(introSeenStorageKey)&&openIntroOverlay(),
themeToggleBtn&&themeToggleBtn.addEventListener("click",()=>{
const e="light"==("light"===document.documentElement.getAttribute("data-theme")?"light":"dark")?"dark":"light"
;if("light"===e&&"false"!==document.documentElement.getAttribute("data-light-warning"))return pendingThemeSwitch=e,
void openLightWarningModal();runSettingsTransition(()=>{applyTheme(e),savePreference("nysrioo-theme",e)})}),
textSizeToggle&&textSizeToggle.addEventListener("click",()=>{
const e="large"===document.documentElement.getAttribute("data-text-size")?"normal":"large";runSettingsTransition(()=>{
applyTextSize(e),savePreference(textSizeStorageKey,e)})}),motionToggle&&motionToggle.addEventListener("click",()=>{
const e="true"===document.documentElement.getAttribute("data-reduce-motion")?"false":"true";runSettingsTransition(()=>{
applyReducedMotion(e),savePreference(motionStorageKey,e)})
}),contrastToggle&&contrastToggle.addEventListener("click",()=>{
const e="high"===document.documentElement.getAttribute("data-contrast")?"normal":"high";runSettingsTransition(()=>{
applyContrast(e),savePreference("nysrioo-contrast",e)})
}),lightWarningToggle&&lightWarningToggle.addEventListener("click",()=>{
const e="false"!==document.documentElement.getAttribute("data-light-warning")?"false":"true";runSettingsTransition(()=>{
applyLightWarning(e),savePreference(lightWarningStorageKey,e)})}),languageButtons.forEach(e=>{
e.addEventListener("click",()=>{const t="es"===e.dataset.lang||"zh"===e.dataset.lang?e.dataset.lang:"en"
;runSettingsTransition(()=>{applyLanguage(t),savePreference("nysrioo-language",t)},{
loadingLabel:translations[t]?.settings_loading||translations.en.settings_loading,
loadingMs:3e3+Math.floor(1001*Math.random())})})});const copyToast=document.getElementById("copy-toast")
;let copyToastTimer=null,lastCopiedValue="",lastCopiedAt=0;function showCopyToast(e){
copyToast&&(copyToast.textContent=`${t("copied_prefix")}: ${e}`,copyToast.classList.add("is-visible"),
copyToastTimer&&clearTimeout(copyToastTimer),copyToastTimer=setTimeout(()=>{copyToast.classList.remove("is-visible"),
copyToastTimer=null},3e3))}async function copyText(e){try{await navigator.clipboard.writeText(e)}catch(t){
const i=document.createElement("textarea");i.value=e,i.setAttribute("readonly",""),i.style.position="absolute",
i.style.left="-9999px",document.body.appendChild(i),i.select(),document.execCommand("copy"),document.body.removeChild(i)
}}async function copyFromElement(e){const t=Date.now(),i=e.dataset.copy?.trim()||""
;i&&(i===lastCopiedValue&&t-lastCopiedAt<3e3||(await copyText(i),lastCopiedValue=i,lastCopiedAt=t,showCopyToast(i)))}
document.querySelectorAll("[data-copy]").forEach(e=>{e.addEventListener("click",()=>{copyFromElement(e)}),
e.addEventListener("keydown",t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),copyFromElement(e))})});
const viewCounterElement=document.getElementById("view-counter"),viewCountElement=document.getElementById("view-count"),viewCounterStorageKey="nysrioo-local-views",viewCounterOffset=232,viewCounterNamespace="nysrioo-portfolio",viewCounterKey="page-views";
function formatViewCount(e){const t=Number(e);return Number.isFinite(t)&&t>0?new Intl.NumberFormat("en-US").format(Math.floor(t)):"233"}
function setViewCount(e){if(!viewCounterElement||!viewCountElement)return;const t=formatViewCount(e);viewCountElement.textContent=t,viewCounterElement.setAttribute("aria-label",`Page views: ${t}`)}
function nextLocalViewCount(){let e=Number(getStoredPreference(viewCounterStorageKey));return Number.isFinite(e)&&e>=233?e+=1:e=233,savePreference(viewCounterStorageKey,String(e)),e}
async function fetchRemoteViewCount(){const e=`https://api.countapi.xyz/hit/${encodeURIComponent(viewCounterNamespace)}/${encodeURIComponent(viewCounterKey)}`;const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error("View counter request failed");const i=await t.json(),n=Number(i?.value);if(!Number.isFinite(n)||n<1)throw new Error("View counter value invalid");return n+viewCounterOffset}
async function initViewCounter(){if(!viewCounterElement||!viewCountElement)return;setViewCount(233);try{const e=await fetchRemoteViewCount();setViewCount(e),savePreference(viewCounterStorageKey,String(e))}catch(e){setViewCount(nextLocalViewCount())}}
initViewCounter();



