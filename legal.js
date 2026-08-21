(function () {
  'use strict';

  const ISSUE_URL = 'https://github.com/simon602653879-debug/stankit-studio/issues/new';

  const summaries = {
    en: {
      title: 'Key privacy, rights and independence summary',
      bullets: [
        'StanKit Studio is an unofficial, independent fan-made tool. It is not affiliated with or endorsed by any artist, management company, agency, label or platform.',
        'Site operator: Wang Qingsen (王庆森), an independent individual based in Nanjing, Jiangsu, China. The full residential unit address is not published for personal safety.',
        'Uploaded images are processed in your current browser and are not stored on a StanKit Studio server.',
        'Print settings and export history, plus fan-letter history and favourites, may be saved in LocalStorage. Clearing this site’s browser data deletes them.',
        'Hosting, Tailwind, font, jsPDF, GA4, Ko-fi, GitHub and future advertising providers may receive ordinary network information when their resources or pages are requested. GA4 loads only when a real Measurement ID is configured and the visitor allows analytics.',
        'The contact form does not send a message or save your contact details. It prepares text, tries to copy it and opens a public GitHub Issues page; you must paste and submit it yourself.',
        'For confidential privacy or legal requests, email simon602653879@hotmail.com instead of using public GitHub Issues. The address is publicly listed on this site so visitors can contact the operator privately.',
        'The Terms use the laws of the People’s Republic of China and courts with jurisdiction under applicable law; they do not remove mandatory consumer-protection, privacy, complaint or forum rights.',
        'You must own or have permission to use uploaded images, names, logos, text and exported content. Using the tool does not grant rights to third-party material.'
      ]
    },
    'zh-CN': {
      title: '关键隐私、权利与非官方关系摘要',
      bullets: [
        'StanKit Studio 是独立制作的非官方粉丝工具，与任何艺人、经纪公司、事务所、厂牌或平台均无隶属关系，也未获得其背书。',
        '本站运营者为王庆森，个人独立运营，所在地为中国江苏省南京市。出于人身安全考虑，不公开完整住宅楼栋及门牌号。',
        '上传的图片只在当前浏览器中处理，不会存入 StanKit Studio 的服务器。',
        '打印设置和导出历史，以及粉丝信历史与收藏，可能保存在 LocalStorage 中；清除本站的浏览器站点数据会删除这些内容。',
        '当浏览器请求托管服务、Tailwind、字体、jsPDF、GA4、Ko-fi、GitHub 或未来广告服务的资源或页面时，这些第三方可能收到常规网络信息。只有配置真实衡量 ID 且访客允许统计后才会加载 GA4。',
        '联系表单不会发送消息，也不会保存联系方式。它只会生成文本、尝试复制并打开公开的 GitHub Issues 页面；你必须自行粘贴并提交。',
        '隐私或法律请求请发送至 simon602653879@hotmail.com，不要发布到公开的 GitHub Issues。为方便访客私下联系运营者，该邮箱地址会公开显示在本站。',
        '条款以中华人民共和国法律为准，并由适用法律规定的有管辖权法院处理争议；不会排除用户依法享有的强制性消费者保护、隐私、投诉或管辖权利。',
        '你必须拥有或已获准使用上传的图片、姓名、标志、文字和导出内容；使用本工具不会赋予你对第三方素材的权利。'
      ]
    },
    'zh-TW': {
      title: '重要隱私、權利與非官方關係摘要',
      bullets: [
        'StanKit Studio 是獨立製作的非官方粉絲工具，與任何藝人、經紀公司、事務所、廠牌或平台均無隸屬關係，也未獲得其背書。',
        '本站營運者為王慶森，個人獨立營運，所在地為中國江蘇省南京市。基於人身安全考量，不公開完整住宅樓棟及門牌號。',
        '上傳的圖片只在目前瀏覽器中處理，不會儲存在 StanKit Studio 的伺服器。',
        '列印設定和匯出記錄，以及粉絲信記錄與收藏，可能儲存在 LocalStorage；清除本站的瀏覽器網站資料會刪除這些內容。',
        '當瀏覽器請求託管服務、Tailwind、字型、jsPDF、GA4、Ko-fi、GitHub 或未來廣告服務的資源或頁面時，這些第三方可能收到一般網路資訊。只有設定真實評估 ID 且訪客允許分析後才會載入 GA4。',
        '聯絡表單不會傳送訊息，也不會儲存聯絡資料。它只會產生文字、嘗試複製並開啟公開的 GitHub Issues 頁面；你必須自行貼上並提交。',
        '隱私或法律請求請寄至 simon602653879@hotmail.com，不要發佈到公開的 GitHub Issues。為方便訪客私下聯絡營運者，該電子郵件地址會公開顯示於本站。',
        '條款以中華人民共和國法律為準，並由適用法律規定的有管轄權法院處理爭議；不會排除使用者依法享有的強制性消費者保護、隱私、申訴或管轄權利。',
        '你必須擁有或已獲准使用上傳的圖片、姓名、標誌、文字及匯出內容；使用本工具不會賦予你第三方素材的權利。'
      ]
    },
    ko: {
      title: '주요 개인정보, 권리 및 비공식 관계 요약',
      bullets: [
        'StanKit Studio는 독립적으로 만든 비공식 팬 도구입니다. 어떠한 아티스트, 소속사, 매니지먼트 회사, 레이블 또는 플랫폼과도 제휴 관계가 없으며 이들의 보증을 받지 않았습니다.',
        '사이트 운영자는 중국 장쑤성 난징시에 거주하는 개인 독립 운영자 Wang Qingsen(王庆森)입니다. 개인 안전을 위해 상세한 주거 동·호수는 공개하지 않습니다.',
        '업로드한 이미지는 현재 브라우저에서만 처리되며 StanKit Studio 서버에 저장되지 않습니다.',
        '인쇄 설정과 내보내기 기록, 팬레터 기록과 즐겨찾기는 LocalStorage에 저장될 수 있습니다. 이 사이트의 브라우저 데이터를 삭제하면 해당 내용도 삭제됩니다.',
        '호스팅, Tailwind, 글꼴, jsPDF, GA4, Ko-fi, GitHub 또는 향후 광고 서비스의 리소스나 페이지를 요청하면 해당 제3자가 일반적인 네트워크 정보를 받을 수 있습니다. 실제 측정 ID가 설정되고 방문자가 분석을 허용한 경우에만 GA4가 로드됩니다.',
        '문의 양식은 메시지를 전송하거나 연락처를 저장하지 않습니다. 텍스트를 만들고 복사를 시도한 뒤 공개 GitHub Issues 페이지를 열 뿐이며, 사용자가 직접 붙여넣고 제출해야 합니다.',
        '기밀 개인정보 보호 또는 법률 요청은 공개 GitHub Issues 대신 simon602653879@hotmail.com으로 보내세요. 방문자가 운영자에게 비공개로 연락할 수 있도록 이 이메일 주소는 사이트에 공개됩니다.',
        '이용약관에는 중화인민공화국 법률과 관련 법률상 관할권이 있는 법원이 적용되며, 강행적인 소비자 보호·개인정보 보호·민원 또는 재판 관할 권리를 배제하지 않습니다.',
        '업로드하는 이미지, 이름, 로고, 텍스트 및 내보낸 콘텐츠를 사용할 권리나 허가가 있어야 합니다. 이 도구를 사용해도 제3자 자료에 대한 권리가 생기지 않습니다.'
      ]
    },
    ja: {
      title: '重要なプライバシー・権利・非公式関係の要約',
      bullets: [
        'StanKit Studioは独立して制作された非公式のファンツールです。アーティスト、芸能事務所、管理会社、レーベル、プラットフォームとの提携関係はなく、承認も受けていません。',
        'サイト運営者は、中国江蘇省南京市を拠点とする個人運営者 Wang Qingsen（王庆森）です。個人の安全のため、住居の棟・部屋番号は公開していません。',
        'アップロード画像は現在のブラウザ内だけで処理され、StanKit Studioのサーバーには保存されません。',
        '印刷設定と書き出し履歴、ファンレター履歴とお気に入りはLocalStorageに保存される場合があります。このサイトのブラウザデータを消去すると削除されます。',
        'ホスティング、Tailwind、フォント、jsPDF、GA4、Ko-fi、GitHub、または将来の広告サービスのリソースやページを要求すると、各第三者が通常のネットワーク情報を受け取る場合があります。実際の測定IDが設定され、訪問者が解析を許可した場合にのみGA4を読み込みます。',
        'お問い合わせフォームはメッセージを送信せず、連絡先も保存しません。テキストを作成してコピーを試み、公開GitHub Issuesページを開くだけです。ご自身で貼り付けて送信してください。',
        '機密のプライバシーまたは法的な依頼は、公開GitHub Issuesではなく simon602653879@hotmail.com に送信してください。運営者へ非公開で連絡できるよう、このメールアドレスはサイト上で公開されます。',
        '利用規約には中華人民共和国の法律および適用法上管轄権を有する裁判所が適用され、強行的な消費者保護、プライバシー、苦情申立てまたは裁判管轄の権利を排除しません。',
        'アップロードする画像、氏名、ロゴ、文章、書き出し内容を利用する権利または許可が必要です。このツールの利用によって第三者素材の権利が付与されることはありません。'
      ]
    },
    id: {
      title: 'Ringkasan penting privasi, hak, dan status tidak resmi',
      bullets: [
        'StanKit Studio adalah alat penggemar independen dan tidak resmi. Situs ini tidak berafiliasi dengan atau didukung oleh artis, perusahaan manajemen, agensi, label, atau platform mana pun.',
        'Operator situs adalah Wang Qingsen (王庆森), individu independen yang berbasis di Nanjing, Jiangsu, Tiongkok. Nomor gedung dan unit tempat tinggal lengkap tidak dipublikasikan demi keselamatan pribadi.',
        'Gambar yang diunggah diproses hanya di browser yang sedang Anda gunakan dan tidak disimpan di server StanKit Studio.',
        'Pengaturan cetak dan riwayat ekspor, serta riwayat dan favorit surat penggemar, dapat disimpan di LocalStorage. Menghapus data situs ini dari browser akan menghapusnya.',
        'Penyedia hosting, Tailwind, font, jsPDF, GA4, Ko-fi, GitHub, dan layanan iklan mendatang dapat menerima informasi jaringan biasa saat sumber daya atau halamannya diminta. GA4 hanya dimuat jika ID Pengukuran nyata dikonfigurasi dan pengunjung mengizinkan analitik.',
        'Formulir kontak tidak mengirim pesan atau menyimpan detail kontak Anda. Formulir hanya menyiapkan teks, mencoba menyalinnya, dan membuka halaman GitHub Issues publik; Anda harus menempelkan dan mengirimkannya sendiri.',
        'Untuk permintaan privasi atau hukum yang bersifat rahasia, kirim email ke simon602653879@hotmail.com dan jangan gunakan GitHub Issues publik. Alamat ini ditampilkan secara publik agar pengunjung dapat menghubungi operator secara pribadi.',
        'Ketentuan menggunakan hukum Republik Rakyat Tiongkok dan pengadilan yang berwenang menurut hukum yang berlaku; ketentuan ini tidak menghapus hak wajib konsumen, privasi, pengaduan, atau forum hukum.',
        'Anda harus memiliki hak atau izin untuk menggunakan gambar, nama, logo, teks, dan hasil ekspor. Penggunaan alat ini tidak memberi Anda hak atas materi milik pihak ketiga.'
      ]
    },
    ms: {
      title: 'Ringkasan penting privasi, hak dan status tidak rasmi',
      bullets: [
        'StanKit Studio ialah alat peminat bebas dan tidak rasmi. Laman ini tidak bersekutu dengan atau disokong oleh mana-mana artis, syarikat pengurusan, agensi, label atau platform.',
        'Pengendali laman ialah Wang Qingsen (王庆森), individu bebas yang berpusat di Nanjing, Jiangsu, China. Nombor bangunan dan unit kediaman penuh tidak diterbitkan demi keselamatan peribadi.',
        'Imej yang dimuat naik diproses hanya dalam pelayar semasa anda dan tidak disimpan pada pelayan StanKit Studio.',
        'Tetapan cetakan dan sejarah eksport, serta sejarah dan kegemaran surat peminat, mungkin disimpan dalam LocalStorage. Mengosongkan data laman ini dalam pelayar akan memadamkannya.',
        'Penyedia pengehosan, Tailwind, fon, jsPDF, GA4, Ko-fi, GitHub dan perkhidmatan iklan pada masa hadapan mungkin menerima maklumat rangkaian biasa apabila sumber atau halaman mereka diminta. GA4 hanya dimuatkan jika ID Pengukuran sebenar dikonfigurasi dan pelawat membenarkan analitik.',
        'Borang hubungan tidak menghantar mesej atau menyimpan butiran hubungan anda. Ia hanya menyediakan teks, cuba menyalinnya dan membuka halaman GitHub Issues awam; anda perlu menampal dan menyerahkannya sendiri.',
        'Untuk permintaan privasi atau undang-undang yang sulit, e-mel simon602653879@hotmail.com dan jangan gunakan GitHub Issues awam. Alamat ini dipaparkan secara umum supaya pelawat boleh menghubungi pengendali secara peribadi.',
        'Terma menggunakan undang-undang Republik Rakyat China dan mahkamah yang mempunyai bidang kuasa di bawah undang-undang berkenaan; ia tidak menghapuskan hak mandatori pengguna, privasi, aduan atau forum undang-undang.',
        'Anda mesti memiliki hak atau kebenaran untuk menggunakan imej, nama, logo, teks dan kandungan eksport. Penggunaan alat ini tidak memberikan hak terhadap bahan pihak ketiga.'
      ]
    },
    th: {
      title: 'สรุปสำคัญเรื่องความเป็นส่วนตัว สิทธิ และสถานะไม่เป็นทางการ',
      bullets: [
        'StanKit Studio เป็นเครื่องมือแฟนคลับอิสระที่ไม่เป็นทางการ ไม่ได้เป็นพันธมิตรหรือได้รับการรับรองจากศิลปิน บริษัทจัดการ ต้นสังกัด ค่ายเพลง หรือแพลตฟอร์มใด',
        'ผู้ดำเนินการเว็บไซต์คือ Wang Qingsen (王庆森) บุคคลอิสระที่อยู่ในเมืองหนานจิง มณฑลเจียงซู ประเทศจีน เพื่อความปลอดภัยส่วนบุคคลจึงไม่เปิดเผยเลขอาคารและเลขห้องพักอาศัยฉบับเต็ม',
        'รูปภาพที่อัปโหลดจะประมวลผลเฉพาะในเบราว์เซอร์ปัจจุบันของคุณ และไม่ถูกเก็บไว้ในเซิร์ฟเวอร์ของ StanKit Studio',
        'การตั้งค่าการพิมพ์และประวัติการส่งออก รวมถึงประวัติและรายการโปรดของจดหมายแฟนคลับ อาจถูกบันทึกใน LocalStorage การล้างข้อมูลเว็บไซต์นี้ในเบราว์เซอร์จะลบข้อมูลเหล่านั้น',
        'ผู้ให้บริการโฮสติ้ง Tailwind แบบอักษร jsPDF, GA4, Ko-fi, GitHub และบริการโฆษณาในอนาคตอาจได้รับข้อมูลเครือข่ายทั่วไปเมื่อมีการร้องขอทรัพยากรหรือหน้าเว็บของตน GA4 จะโหลดเมื่อกำหนดรหัสการวัดจริงและผู้เข้าชมอนุญาตการวิเคราะห์เท่านั้น',
        'แบบฟอร์มติดต่อจะไม่ส่งข้อความหรือบันทึกรายละเอียดการติดต่อ แต่จะเตรียมข้อความ พยายามคัดลอก และเปิดหน้า GitHub Issues สาธารณะ คุณต้องวางและส่งด้วยตนเอง',
        'สำหรับคำขอด้านความเป็นส่วนตัวหรือกฎหมายที่เป็นความลับ โปรดส่งอีเมลไปที่ simon602653879@hotmail.com แทนการใช้ GitHub Issues สาธารณะ ที่อยู่นี้แสดงต่อสาธารณะเพื่อให้ผู้เยี่ยมชมติดต่อผู้ดำเนินการเป็นการส่วนตัวได้',
        'ข้อกำหนดนี้ใช้กฎหมายแห่งสาธารณรัฐประชาชนจีนและศาลที่มีเขตอำนาจตามกฎหมายที่ใช้บังคับ โดยไม่ตัดสิทธิภาคบังคับด้านผู้บริโภค ความเป็นส่วนตัว การร้องเรียน หรือเขตอำนาจศาล',
        'คุณต้องเป็นเจ้าของหรือได้รับอนุญาตให้ใช้รูปภาพ ชื่อ โลโก้ ข้อความ และเนื้อหาที่ส่งออก การใช้เครื่องมือนี้ไม่ได้มอบสิทธิในเนื้อหาของบุคคลที่สามให้คุณ'
      ]
    },
    ar: {
      title: 'ملخص مهم للخصوصية والحقوق والصفة غير الرسمية',
      bullets: [
        'StanKit Studio أداة مستقلة وغير رسمية من صنع المعجبين. لا تتبع لأي فنان أو شركة إدارة أو وكالة أو شركة إنتاج أو منصة، ولم تحصل على تأييد منها.',
        'مشغّل الموقع هو Wang Qingsen (王庆森)، وهو فرد مستقل مقيم في نانجينغ بمقاطعة جيانغسو في الصين. لا يُنشر رقم المبنى والوحدة السكنية الكامل حفاظاً على السلامة الشخصية.',
        'تُعالَج الصور المرفوعة داخل متصفحك الحالي فقط ولا تُخزَّن على خادم تابع لـ StanKit Studio.',
        'قد تُحفَظ إعدادات الطباعة وسجل التصدير وسجل رسائل المعجبين والمفضلة في LocalStorage. يؤدي مسح بيانات هذا الموقع من المتصفح إلى حذفها.',
        'قد يتلقى مزودو الاستضافة وTailwind والخطوط وjsPDF وGA4 وKo-fi وGitHub وخدمات الإعلانات المستقبلية معلومات الشبكة المعتادة عند طلب مواردهم أو صفحاتهم. لا يُحمَّل GA4 إلا بعد إعداد معرّف قياس حقيقي وموافقة الزائر على التحليلات.',
        'نموذج الاتصال لا يرسل رسالة ولا يحفظ بيانات الاتصال. إنه يُنشئ نصاً ويحاول نسخه ويفتح صفحة GitHub Issues عامة؛ ويجب عليك لصق النص وإرساله بنفسك.',
        'للطلبات السرية المتعلقة بالخصوصية أو الشؤون القانونية، راسل simon602653879@hotmail.com بدلاً من GitHub Issues العامة. يُعرض العنوان علناً في الموقع حتى يتمكن الزوار من التواصل مع المشغّل بصورة خاصة.',
        'تخضع الشروط لقوانين جمهورية الصين الشعبية وللمحاكم المختصة بموجب القانون المعمول به، ولا تلغي الحقوق الإلزامية المتعلقة بحماية المستهلك أو الخصوصية أو الشكاوى أو جهة التقاضي.',
        'يجب أن تملك حق أو إذن استخدام الصور والأسماء والشعارات والنصوص والمحتوى المصدَّر. استخدام الأداة لا يمنحك حقوقاً في مواد الغير.'
      ]
    },
    es: {
      title: 'Resumen clave de privacidad, derechos e independencia',
      bullets: [
        'StanKit Studio es una herramienta de fans independiente y no oficial. No está afiliada ni respaldada por artistas, empresas de representación, agencias, sellos o plataformas.',
        'El operador del sitio es Wang Qingsen (王庆森), una persona independiente con sede en Nankín, Jiangsu, China. Por seguridad personal no se publica el número completo del edificio y la vivienda.',
        'Las imágenes subidas se procesan únicamente en tu navegador actual y no se guardan en un servidor de StanKit Studio.',
        'Los ajustes de impresión y el historial de exportaciones, así como el historial y los favoritos de cartas, pueden guardarse en LocalStorage. Al borrar los datos del sitio en el navegador se eliminan.',
        'Los proveedores de alojamiento, Tailwind, fuentes, jsPDF, GA4, Ko-fi, GitHub y futuros servicios publicitarios pueden recibir información de red habitual cuando se solicitan sus recursos o páginas. GA4 solo se carga si se configura un ID de medición real y el visitante permite la analítica.',
        'El formulario de contacto no envía mensajes ni guarda tus datos de contacto. Solo prepara el texto, intenta copiarlo y abre una página pública de GitHub Issues; debes pegarlo y enviarlo tú mismo.',
        'Para solicitudes confidenciales de privacidad o legales, escribe a simon602653879@hotmail.com en lugar de usar GitHub Issues público. La dirección se muestra públicamente para que los visitantes puedan contactar al operador de forma privada.',
        'Los términos se rigen por las leyes de la República Popular China y por los tribunales competentes según la ley aplicable; no eliminan derechos obligatorios de consumo, privacidad, reclamación o jurisdicción.',
        'Debes tener los derechos o el permiso para usar las imágenes, nombres, logotipos, textos y contenido exportado. Usar la herramienta no te concede derechos sobre material de terceros.'
      ]
    }
  };

  const languageNames = {
    en: 'English',
    'zh-CN': '简体中文',
    'zh-TW': '繁體中文',
    ko: '한국어',
    ja: '日本語',
    id: 'Bahasa Indonesia',
    ms: 'Bahasa Melayu',
    th: 'ไทย',
    ar: 'العربية',
    es: 'Español'
  };

  function normalizeLanguage(value) {
    const raw = String(value || '').trim();
    if (summaries[raw]) return raw;
    const lower = raw.toLowerCase();
    if (lower === 'zh-tw' || lower === 'zh-hk' || lower.includes('hant')) return 'zh-TW';
    if (lower.startsWith('zh')) return 'zh-CN';
    const short = lower.split('-')[0];
    return summaries[short] ? short : 'en';
  }

  function renderSummary(language) {
    const box = document.getElementById('critical-summary');
    const title = document.getElementById('summary-title');
    const list = document.getElementById('summary-list');
    const select = document.getElementById('summary-language');
    if (!box || !title || !list || !select) return;

    const lang = normalizeLanguage(language);
    const content = summaries[lang];
    select.value = lang;
    title.textContent = content.title;
    list.replaceChildren(...content.bullets.map(function (text) {
      const item = document.createElement('li');
      item.textContent = text;
      return item;
    }));
    box.lang = lang;
    box.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }

  function initSummary() {
    const select = document.getElementById('summary-language');
    if (!select) return;
    Object.entries(languageNames).forEach(function (entry) {
      const option = document.createElement('option');
      option.value = entry[0];
      option.textContent = entry[1];
      select.appendChild(option);
    });
    const queryLang = new URLSearchParams(window.location.search).get('lang');
    const initial = normalizeLanguage(queryLang || navigator.language || 'en');
    renderSummary(initial);
    select.addEventListener('change', function () { renderSummary(select.value); });
  }

  const topicPresets = {
    'fan-letter-request': { type: 'fan-letter-request', subject: 'Fan letter scenario request' },
    'print-failure': { type: 'print-failure', subject: 'Photocard printing failed' },
    'printing-failed': { type: 'print-failure', subject: 'Photocard printing failed' },
    'print-failed': { type: 'print-failure', subject: 'Photocard printing failed' },
    'printing-failure': { type: 'print-failure', subject: 'Photocard printing failed' },
    '打印失败': { type: 'print-failure', subject: 'Photocard printing failed' },
    'size-feedback': { type: 'size-feedback', subject: 'Photocard size feedback' },
    'photocard-size': { type: 'size-feedback', subject: 'Photocard size feedback' },
    'print-size': { type: 'size-feedback', subject: 'Photocard size feedback' },
    '尺寸反馈': { type: 'size-feedback', subject: 'Photocard size feedback' },
    'theme-pack': { type: 'feature-request', subject: 'Theme pack request' },
    bug: { type: 'bug-report', subject: 'Bug report' },
    feature: { type: 'feature-request', subject: 'Feature request' }
  };

  const topicLabels = {
    'fan-letter-request': 'Fan letter scenario request',
    'print-failure': 'Printing failed',
    'size-feedback': 'Size feedback',
    'bug-report': 'Bug report',
    'feature-request': 'Feature request',
    other: 'Other feedback'
  };

  function prefillTopic() {
    const type = document.getElementById('feedback-type');
    const subject = document.getElementById('feedback-subject');
    const message = document.getElementById('feedback-message');
    if (!type || !subject) return null;
    const params = new URLSearchParams(window.location.search);
    const topic = params.get('topic');
    const preset = topicPresets[topic];
    if (!preset) return null;
    type.value = preset.type;
    if (!subject.value.trim()) subject.value = preset.subject;
    if (message && !message.value.trim() && topic === 'print-size') {
      const result = cleanLine(params.get('result')).slice(0, 80);
      const paper = cleanLine(params.get('paper')).slice(0, 80);
      const details = [];
      if (result) details.push('Observed size result: ' + result);
      if (paper) details.push('Paper setting: ' + paper);
      message.value = details.join('\n');
    }
    return preset;
  }

  function cleanLine(value) {
    return String(value || '').replace(/[\r\n]+/g, ' ').trim();
  }

  function buildFeedbackText(values) {
    const type = cleanLine(values.type);
    const label = topicLabels[type] || topicLabels.other;
    const nickname = cleanLine(values.nickname) || 'Not provided';
    const subject = cleanLine(values.subject);
    const message = String(values.message || '').trim();
    const page = cleanLine(values.page) || 'Not provided';
    return [
      '# StanKit Studio feedback',
      '',
      '- Topic: ' + label,
      '- Subject: ' + subject,
      '- Nickname: ' + nickname,
      '- Related page: ' + page,
      '',
      '## Details',
      message
    ].join('\n');
  }

  async function copyText(text) {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (error) {
        // Continue to the visible-textarea fallback below.
      }
    }

    const fallback = document.createElement('textarea');
    fallback.value = text;
    fallback.setAttribute('readonly', '');
    fallback.style.position = 'fixed';
    fallback.style.left = '-9999px';
    fallback.style.top = '0';
    document.body.appendChild(fallback);
    fallback.focus();
    fallback.select();
    let copied = false;
    try {
      copied = typeof document.execCommand === 'function' && document.execCommand('copy');
    } catch (error) {
      copied = false;
    }
    fallback.remove();
    if (!copied) throw new Error('Clipboard unavailable');
    return true;
  }

  function setStatus(message, state) {
    const status = document.getElementById('contact-status');
    if (!status) return;
    status.textContent = message;
    status.dataset.state = state || '';
  }

  function getFormValues() {
    return {
      nickname: document.getElementById('feedback-nickname').value,
      type: document.getElementById('feedback-type').value,
      subject: document.getElementById('feedback-subject').value,
      message: document.getElementById('feedback-message').value,
      page: window.location.pathname
    };
  }

  function validateValues(values) {
    if (!cleanLine(values.type)) return 'Choose a feedback topic.';
    if (!cleanLine(values.subject)) return 'Add a subject.';
    if (!String(values.message || '').trim()) return 'Add feedback details.';
    if (cleanLine(values.nickname).length > 80) return 'Nickname must be 80 characters or fewer.';
    if (cleanLine(values.subject).length > 120) return 'Subject must be 120 characters or fewer.';
    if (String(values.message || '').length > 3000) return 'Details must be 3,000 characters or fewer.';
    return '';
  }

  async function prepareFeedback(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = getFormValues();
    const error = validateValues(values);
    if (error) {
      setStatus(error, 'error');
      if (typeof form.reportValidity === 'function') form.reportValidity();
      return false;
    }

    const text = buildFeedbackText(values);
    const result = document.getElementById('feedback-result');
    const output = document.getElementById('feedback-output');
    const fallbackLink = document.getElementById('github-fallback-link');
    output.value = text;
    result.hidden = false;
    fallbackLink.href = ISSUE_URL;
    if (typeof result.scrollIntoView === 'function') {
      result.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    let opened = false;
    try {
      const popup = window.open(ISSUE_URL, '_blank');
      opened = Boolean(popup);
      if (popup) popup.opener = null;
    } catch (error) {
      opened = false;
    }

    let copied = false;
    try {
      copied = await copyText(text);
    } catch (error) {
      copied = false;
    }

    if (copied && opened) {
      setStatus('Feedback text copied and GitHub opened. Paste the text into the issue, review it, then click Submit new issue.', 'success');
    } else if (copied) {
      setStatus('Feedback text copied, but the GitHub window was blocked. Use the visible Open GitHub button, then paste and submit.', 'warning');
    } else if (opened) {
      setStatus('GitHub opened, but automatic copy failed. Manually copy the visible text, paste it into the issue, and submit.', 'warning');
    } else {
      setStatus('Automatic copy and opening failed. Your feedback remains visible below; copy it manually and use the Open GitHub button.', 'error');
    }
    return false;
  }

  async function copyPreparedFeedback() {
    const output = document.getElementById('feedback-output');
    if (!output || !output.value) return;
    try {
      await copyText(output.value);
      setStatus('Feedback text copied. Paste it into GitHub and submit the issue yourself.', 'success');
    } catch (error) {
      output.focus();
      output.select();
      setStatus('Automatic copy failed. The text is selected; copy it manually.', 'warning');
    }
  }

  function updateCounter() {
    const input = document.getElementById('feedback-message');
    const counter = document.getElementById('message-counter');
    if (input && counter) counter.textContent = input.value.length + ' / 3000';
  }

  function initContactForm() {
    const form = document.getElementById('feedback-form');
    if (!form) return;
    prefillTopic();
    updateCounter();
    form.addEventListener('submit', prepareFeedback);
    document.getElementById('feedback-message').addEventListener('input', updateCounter);
    document.getElementById('copy-feedback').addEventListener('click', copyPreparedFeedback);
  }

  document.addEventListener('DOMContentLoaded', function () {
    initSummary();
    initContactForm();
  });

  window.StanKitLegal = Object.freeze({
    ISSUE_URL: ISSUE_URL,
    summaries: summaries,
    normalizeLanguage: normalizeLanguage,
    renderSummary: renderSummary,
    prefillTopic: prefillTopic,
    buildFeedbackText: buildFeedbackText,
    validateValues: validateValues,
    copyText: copyText,
    prepareFeedback: prepareFeedback
  });
})();
