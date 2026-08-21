(function () {
  'use strict';

  // StanKit Studio Web data stream.
  const GA_MEASUREMENT_ID = 'G-ZP765ECN0P';
  const CONSENT_KEY = 'stankit_analytics_consent';
  const ATTRIBUTION_KEY = 'stankit_attribution';
  const VALID_GA_ID = /^G-[A-Z0-9]+$/i.test(GA_MEASUREMENT_ID);
  const MAX_PENDING_EVENTS = 25;
  const pendingEvents = [];

  window.STANKIT_GA_ID = GA_MEASUREMENT_ID;
  window.STANKIT_ANALYTICS_READY = false;

  const EVENT_PARAMS = Object.freeze({
    post_export_action: ['action'],
    support_click: ['placement'],
    change_language: ['selected_language'],
    preset_select: ['paper', 'source'],
    upload_start: ['file_count', 'paper'],
    upload_error: ['reason', 'paper', 'ignored_count', 'error_count'],
    upload_success: ['success_count', 'paper'],
    layout_edit: ['action', 'index', 'rotation', 'from', 'to', 'value', 'card'],
    generate_placeholders: ['count', 'theme'],
    share_click: ['platform'],
    print_result_feedback: ['result', 'paper'],
    project_settings_save: ['paper', 'card_count', 'cut_line', 'storage'],
    theme_interest_click: ['product_id', 'price_test', 'placement'],
    pdf_export_start: ['paper', 'card_count'],
    pdf_export_success: ['paper', 'card_count', 'cut_line', 'duration_ms'],
    pdf_export_error: ['reason', 'paper'],
    tool_view: ['tool', 'language'],
    fan_letter_template_select: ['template_id'],
    fan_letter_copy_success: ['copy_type'],
    fan_letter_export_success: ['export_format']
  });

  const consentCopy = {
    en: {
      title: 'Optional analytics',
      body: 'Allow GA4 to measure page views and limited tool events? Uploaded images, fan-letter text, names and email addresses are not sent in analytics events. You can decline and change this choice later.',
      accept: 'Allow analytics', decline: 'Decline', settings: 'Analytics settings'
    },
    'zh-CN': {
      title: '可选的网站统计',
      body: '是否允许 GA4 统计页面浏览和少量工具事件？统计事件不会发送上传图片、粉丝信正文、姓名或邮箱。你可以拒绝，并可随时更改选择。',
      accept: '允许统计', decline: '拒绝', settings: '统计设置'
    },
    'zh-TW': {
      title: '可選的網站分析',
      body: '是否允許 GA4 統計頁面瀏覽和少量工具事件？分析事件不會傳送上傳圖片、粉絲信正文、姓名或電子郵件。你可以拒絕，並可隨時變更選擇。',
      accept: '允許分析', decline: '拒絕', settings: '分析設定'
    },
    ko: {
      title: '선택적 분석',
      body: 'GA4가 페이지 조회와 제한된 도구 이벤트를 측정하도록 허용할까요? 업로드 이미지, 팬레터 본문, 이름, 이메일은 분석 이벤트로 전송하지 않습니다. 거부하거나 나중에 선택을 변경할 수 있습니다.',
      accept: '분석 허용', decline: '거부', settings: '분석 설정'
    },
    ja: {
      title: '任意のアクセス解析',
      body: 'GA4によるページ表示と限定的なツール操作の測定を許可しますか？アップロード画像、ファンレター本文、氏名、メールアドレスは解析イベントに送信しません。拒否や後からの変更も可能です。',
      accept: '解析を許可', decline: '拒否', settings: '解析設定'
    },
    id: {
      title: 'Analitik opsional',
      body: 'Izinkan GA4 mengukur tampilan halaman dan aktivitas alat yang terbatas? Gambar unggahan, isi surat, nama, dan alamat email tidak dikirim dalam peristiwa analitik. Anda dapat menolak atau mengubah pilihan nanti.',
      accept: 'Izinkan analitik', decline: 'Tolak', settings: 'Pengaturan analitik'
    },
    ms: {
      title: 'Analitik pilihan',
      body: 'Benarkan GA4 mengukur paparan halaman dan peristiwa alat yang terhad? Imej muat naik, kandungan surat, nama dan alamat e-mel tidak dihantar dalam peristiwa analitik. Anda boleh menolak atau mengubah pilihan kemudian.',
      accept: 'Benarkan analitik', decline: 'Tolak', settings: 'Tetapan analitik'
    },
    th: {
      title: 'การวิเคราะห์แบบเลือกได้',
      body: 'อนุญาตให้ GA4 วัดการดูหน้าและเหตุการณ์การใช้เครื่องมือบางส่วนหรือไม่ ระบบจะไม่ส่งรูปภาพที่อัปโหลด เนื้อหาจดหมาย ชื่อ หรืออีเมลในเหตุการณ์การวิเคราะห์ คุณปฏิเสธหรือเปลี่ยนตัวเลือกภายหลังได้',
      accept: 'อนุญาตการวิเคราะห์', decline: 'ปฏิเสธ', settings: 'ตั้งค่าการวิเคราะห์'
    },
    ar: {
      title: 'تحليلات اختيارية',
      body: 'هل تسمح لـ GA4 بقياس مشاهدات الصفحات وأحداث محدودة للأداة؟ لا تُرسل الصور المرفوعة أو نصوص الرسائل أو الأسماء أو عناوين البريد ضمن أحداث التحليلات. يمكنك الرفض أو تغيير اختيارك لاحقاً.',
      accept: 'السماح بالتحليلات', decline: 'رفض', settings: 'إعدادات التحليلات'
    },
    es: {
      title: 'Analítica opcional',
      body: '¿Permites que GA4 mida las visitas y algunos eventos limitados de las herramientas? No se envían imágenes subidas, texto de cartas, nombres ni correos en los eventos. Puedes rechazarlo o cambiar tu elección después.',
      accept: 'Permitir analítica', decline: 'Rechazar', settings: 'Ajustes de analítica'
    }
  };

  function safeGetStorage(key) {
    try { return localStorage.getItem(key); } catch (error) { return null; }
  }

  function safeSetStorage(key, value) {
    try { localStorage.setItem(key, value); return true; } catch (error) { return false; }
  }

  function normalizeLanguage(value) {
    const raw = String(value || '').replace(/^"|"$/g, '').trim();
    if (consentCopy[raw]) return raw;
    const lower = raw.toLowerCase();
    if (lower === 'zh-tw' || lower === 'zh-hk' || lower.includes('hant')) return 'zh-TW';
    if (lower.startsWith('zh')) return 'zh-CN';
    const short = lower.split('-')[0];
    return consentCopy[short] ? short : 'en';
  }

  function currentLanguage() {
    return normalizeLanguage(safeGetStorage('stankit_lang') || document.documentElement.lang || navigator.language);
  }

  function sanitizeValue(value, maxLength) {
    return String(value || '')
      .replace(/[^a-zA-Z0-9._-]/g, '_')
      .replace(/_+/g, '_')
      .slice(0, maxLength || 80);
  }

  function initAttribution() {
    try {
      const params = new URLSearchParams(window.location.search);
      const source = sanitizeValue(params.get('utm_source') || params.get('ref'), 64);
      const medium = sanitizeValue(params.get('utm_medium'), 64);
      const campaign = sanitizeValue(params.get('utm_campaign'), 64);
      let referrerHost = '';
      try { referrerHost = document.referrer ? new URL(document.referrer).hostname.slice(0, 80) : ''; } catch (error) {}
      if (source || medium || campaign) {
        sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify({
          utm_source: source,
          utm_medium: medium,
          utm_campaign: campaign,
          referrer_host: referrerHost,
          timestamp: Date.now()
        }));
      }
    } catch (error) {}
  }

  function loadGoogleAnalytics() {
    if (!VALID_GA_ID || window.STANKIT_ANALYTICS_READY) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'update', { analytics_storage: 'granted' });
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      send_page_view: false
    });
    const pagePath = window.location.pathname || '/';
    window.gtag('event', 'page_view', {
      page_location: window.location.origin + pagePath,
      page_path: pagePath,
      page_title: document.title
    });
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_MEASUREMENT_ID);
    document.head.appendChild(script);
    window.STANKIT_ANALYTICS_READY = true;
    while (pendingEvents.length) {
      const pending = pendingEvents.shift();
      window.gtag('event', pending.name, pending.params);
    }
  }

  function sanitizeEventParams(eventName, eventParams) {
    const allowed = EVENT_PARAMS[eventName];
    if (!allowed) return null;
    const safe = {};
    allowed.forEach(function (key) {
      const value = (eventParams || {})[key];
      if (typeof value === 'number' && Number.isFinite(value)) safe[key] = value;
      else if (typeof value === 'boolean') safe[key] = value;
      else if (typeof value === 'string') safe[key] = sanitizeValue(value, 80);
    });
    try {
      const attribution = JSON.parse(sessionStorage.getItem(ATTRIBUTION_KEY) || '{}');
      ['utm_source', 'utm_medium', 'utm_campaign', 'referrer_host'].forEach(function (key) {
        if (typeof attribution[key] === 'string') safe[key] = attribution[key].slice(0, 80);
      });
    } catch (error) {}
    return safe;
  }

  window.trackGA4Event = function (eventName, eventParams) {
    if (!VALID_GA_ID) return;
    const safeParams = sanitizeEventParams(eventName, eventParams);
    if (!safeParams) return;
    if (window.STANKIT_ANALYTICS_READY && typeof window.gtag === 'function') {
      window.gtag('event', eventName, safeParams);
      return;
    }
    if (safeGetStorage(CONSENT_KEY) !== 'denied' && pendingEvents.length < MAX_PENDING_EVENTS) {
      pendingEvents.push({ name: eventName, params: safeParams });
    }
  };

  function buttonStyle(button, primary) {
    button.type = 'button';
    button.style.cssText = [
      'min-height:42px', 'padding:9px 14px', 'border-radius:10px', 'font:700 14px/1.2 system-ui,sans-serif',
      'cursor:pointer', primary ? 'border:1px solid #4f46e5' : 'border:1px solid #cbd5e1',
      primary ? 'background:#4f46e5' : 'background:#fff', primary ? 'color:#fff' : 'color:#334155'
    ].join(';');
  }

  function ensureSettingsButton() {
    if (!VALID_GA_ID || document.getElementById('stankit-analytics-settings')) return;
    const copy = consentCopy[currentLanguage()];
    const button = document.createElement('button');
    button.id = 'stankit-analytics-settings';
    button.type = 'button';
    button.textContent = copy.settings;
    button.style.cssText = 'position:fixed;left:12px;bottom:12px;z-index:39;min-height:44px;padding:9px 12px;border:1px solid #cbd5e1;border-radius:10px;background:#fff;color:#475569;font:700 12px/1.2 system-ui,sans-serif;box-shadow:0 4px 14px rgba(15,23,42,.12);cursor:pointer';
    button.addEventListener('click', renderConsentDialog);
    document.body.appendChild(button);
  }

  function closeConsentDialog() {
    const dialog = document.getElementById('stankit-analytics-consent');
    if (dialog) dialog.remove();
    const settings = document.getElementById('stankit-analytics-settings');
    if (settings) settings.hidden = false;
  }

  function saveConsent(value) {
    safeSetStorage(CONSENT_KEY, value);
    if (value === 'granted') {
      loadGoogleAnalytics();
    } else {
      if (typeof window.gtag === 'function') window.gtag('consent', 'update', { analytics_storage: 'denied' });
      window.STANKIT_ANALYTICS_READY = false;
      pendingEvents.length = 0;
    }
    closeConsentDialog();
  }

  function renderConsentDialog() {
    if (!VALID_GA_ID) return;
    const existing = document.getElementById('stankit-analytics-consent');
    if (existing) existing.remove();
    const settings = document.getElementById('stankit-analytics-settings');
    if (settings) settings.hidden = true;

    const lang = currentLanguage();
    const copy = consentCopy[lang];
    const dialog = document.createElement('aside');
    dialog.id = 'stankit-analytics-consent';
    dialog.setAttribute('role', 'dialog');
    dialog.setAttribute('aria-modal', 'false');
    dialog.setAttribute('aria-labelledby', 'stankit-consent-title');
    dialog.lang = lang;
    dialog.dir = lang === 'ar' ? 'rtl' : 'ltr';
    dialog.style.cssText = 'position:fixed;left:12px;right:12px;bottom:12px;z-index:40;max-width:620px;margin:auto;padding:18px;border:1px solid #c7d2fe;border-radius:16px;background:#fff;color:#172033;box-shadow:0 18px 50px rgba(15,23,42,.22);font-family:system-ui,sans-serif';

    const title = document.createElement('h2');
    title.id = 'stankit-consent-title';
    title.textContent = copy.title;
    title.style.cssText = 'margin:0 0 7px;font-size:18px;line-height:1.3';
    const body = document.createElement('p');
    body.textContent = copy.body;
    body.style.cssText = 'margin:0 0 14px;color:#475569;font-size:13px;line-height:1.55';
    const actions = document.createElement('div');
    actions.style.cssText = 'display:flex;flex-wrap:wrap;gap:9px';
    const accept = document.createElement('button');
    accept.textContent = copy.accept;
    buttonStyle(accept, true);
    accept.addEventListener('click', function () { saveConsent('granted'); });
    const decline = document.createElement('button');
    decline.textContent = copy.decline;
    buttonStyle(decline, false);
    decline.addEventListener('click', function () { saveConsent('denied'); });
    actions.append(accept, decline);
    dialog.append(title, body, actions);
    document.body.appendChild(dialog);
    accept.focus();
  }

  window.openAnalyticsPreferences = renderConsentDialog;

  function refreshAnalyticsLanguage(event) {
    if (!VALID_GA_ID) return;
    const requestedLanguage = event && event.detail && event.detail.language;
    const lang = requestedLanguage ? normalizeLanguage(requestedLanguage) : currentLanguage();
    const copy = consentCopy[lang];
    const settings = document.getElementById('stankit-analytics-settings');
    if (settings) settings.textContent = copy.settings;
    if (document.getElementById('stankit-analytics-consent')) renderConsentDialog();
  }

  window.addEventListener('stankit:languagechange', refreshAnalyticsLanguage);

  function initAnalytics() {
    if (!VALID_GA_ID) return;
    initAttribution();
    ensureSettingsButton();
    const consent = safeGetStorage(CONSENT_KEY);
    if (consent === 'granted') loadGoogleAnalytics();
    else if (consent !== 'denied') renderConsentDialog();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initAnalytics);
  else initAnalytics();

  window.StanKitAnalytics = Object.freeze({
    measurementIdConfigured: VALID_GA_ID,
    consentKey: CONSENT_KEY,
    allowedEvents: Object.keys(EVENT_PARAMS),
    openPreferences: renderConsentDialog
  });
})();
