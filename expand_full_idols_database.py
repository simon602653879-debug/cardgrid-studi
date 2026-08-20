# -*- coding: utf-8 -*-
import json, base64

with open('data.json', 'r', encoding='utf-8') as f:
    existing_idols = json.load(f)

print(f"Existing idols: {len(existing_idols)}")
existing_map = {}
for item in existing_idols:
    existing_map[item['id']] = item
    if 'name_en' in item:
        existing_map[item['name_en'].lower()] = item

with open('seo_idols_500.json', 'r', encoding='utf-8') as f:
    seo_500 = json.load(f)

print(f"SEO 500 list count: {len(seo_500)}")

# SVG avatar generator for new additions
def create_avatar_svg(name, group_or_solo, color1="#6366F1", color2="#4338CA"):
    initials = "".join([w[0] for w in name.split()[:2]]).upper()
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{color1}" />
      <stop offset="100%" stop-color="{color2}" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="{color1}" flood-opacity="0.3"/>
    </filter>
  </defs>
  <rect width="120" height="120" rx="32" fill="url(#grad)" filter="url(#shadow)"/>
  <rect x="3" y="3" width="114" height="114" rx="29" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="2"/>
  <circle cx="98" cy="22" r="6" fill="rgba(255,255,255,0.3)"/>
  <path d="M98 12 L100 18 L106 20 L100 22 L98 28 L96 22 L90 20 L96 18 Z" fill="rgba(255,255,255,0.8)"/>
  <text x="60" y="66" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="32" font-weight="800" fill="#FFFFFF" text-anchor="middle">{initials}</text>
  <text x="60" y="92" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="rgba(255,255,255,0.85)" text-anchor="middle">{group_or_solo[:10]}</text>
</svg>'''
    b64 = base64.b64encode(svg.encode('utf-8')).decode('utf-8')
    return f"data:image/svg+xml;base64,{b64}"

# Color palette pool
color_palette = [
    ("#6366F1", "#4338CA"), ("#EC4899", "#BE185D"), ("#8B5CF6", "#6D28D9"),
    ("#F43F5E", "#E11D48"), ("#3B82F6", "#1D4ED8"), ("#10B981", "#047857"),
    ("#F59E0B", "#B45309"), ("#06B6D4", "#0E7490"), ("#A855F7", "#7E22CE")
]

# Custom specific data for popular Chinese / Global Stars
custom_details = {
    "zhang-linghe": {
        "name_zh": "张凌赫",
        "name_kr": "장릉혁 (Zhang Linghe)",
        "fandomName": "核桃",
        "aliases": ["张凌赫", "zhang linghe", "zhanglinghe", "zlh", "长珩仙君", "谢危", "张家宁", "度华年", "宁安如梦", "苍兰诀", "云之羽"],
        "works": ["宁安如梦", "苍兰诀", "云之羽", "度华年", "四海重明"],
        "memories": ["横店影视城", "粉丝见面会现场", "新剧开机仪式", "爱奇艺尖叫之夜"],
        "slogans": ["做你最坚定的核桃 🌰", "长珩常在，永远陪伴 🌸", "愿你星途璀璨，平安喜乐 ✨", "期待你的每一个新角色 🎬"]
    },
    "luhan": {
        "name_zh": "鹿晗",
        "name_kr": "루한 (Lu Han)",
        "fandomName": "芦苇",
        "aliases": ["鹿晗", "luhan", "lu han", "lh", "小鹿", "77", "芦苇", "勋鹿", "鹿饭"],
        "works": ["勋章 (Medals)", "我们的明天", "某时某刻", "咖啡 (Coffee)"],
        "memories": ["北京鸟巢演唱会", "Reloaded巡回演唱会", "奔跑吧兄弟录制现场", "π 巡演舞台"],
        "slogans": ["芦苇永远与鹿同行 🦌", "愿你永远肆意自在，做热爱的音乐 🎶", "风雨同舟，黄金鹿海 ✨", "好好吃饭，健康第一 💖"]
    },
    "lay-zhang": {
        "name_zh": "张艺兴",
        "name_kr": "장이씽 (레이)",
        "fandomName": "Xback",
        "aliases": ["张艺兴", "lay", "lay zhang", "zhang yixing", "zyx", "小绵羊", "二爷", "xback", "贝壳", "exo lay"],
        "works": ["莲 (LIT)", "Sheep", "Honey", "NAMANANA", "大航海巡演"],
        "memories": ["大航海巡回演唱会", "国家话剧院舞台", "练习室挥汗如雨的深夜", "格莱美音乐盛典"],
        "slogans": ["Xback永远在身后 💜", "把华语音乐带向全世界 🚀", "努力努力再努力 🌟", "照顾好腰伤，平安顺遂 🍀"]
    },
    "liu-yuning": {
        "name_zh": "刘宇宁",
        "name_kr": "류우녕 (Liu Yuning)",
        "fandomName": "摩饭",
        "aliases": ["刘宇宁", "liu yuning", "liuyuning", "lyn", "宁哥", "摩登兄弟", "一念关山", "长歌行", "珠帘玉幕", "棚妃"],
        "works": ["让酒", "寻一个你", "奉上", "长歌行", "一念关山"],
        "memories": ["一念关山拍摄现场", "摩登兄弟巡回演唱会", "YY老街直播间", "OST录音棚"],
        "slogans": ["做宁哥最温暖的棚妃 💛", "千山万水，与宁同行 🏔️", "每一首OST都唱进心里 🎧", "保护好嗓子，好好休息 🍵"]
    },
    "bai-jingting": {
        "name_zh": "白敬亭",
        "name_kr": "백경정 (Bai Jingting)",
        "fandomName": "白鸽",
        "aliases": ["白敬亭", "bai jingting", "baijingting", "bjt", "小白", "怀柔王子", "开端", "卿卿日常", "南来北往", "白鸽"],
        "works": ["开端 (Reset)", "卿卿日常", "南来北往", "你是我的城池营垒"],
        "memories": ["明星大侦探录制", "电视剧开机发布会", "GOODBAI品牌现场", "粉丝见面会"],
        "slogans": ["白鸽展翅，只为敬亭 🕊️", "怀柔王子永远闪闪发光 ✨", "愿你拍出更多好作品 🎬", "健康平安，快乐至上 💖"]
    }
}

# Merge all
final_idols = list(existing_idols)
existing_ids = {i['id']: i for i in existing_idols}

for idx, item in enumerate(seo_500):
    slug = item["slug"]
    name = item["name"]
    category = item["category"]
    kw = item["defaultPromptKeyword"]

    if slug in existing_ids:
        continue

    c1, c2 = color_palette[idx % len(color_palette)]
    is_grp = ("group" in slug or category == "K-Pop" and ("group" in slug or name in ["BTS", "BLACKPINK", "NewJeans", "IVE", "Stray Kids", "SEVENTEEN", "TWICE", "aespa", "LE SSERAFIM", "ENHYPEN", "TXT", "ATEEZ", "NCT 127", "NCT DREAM", "RIIZE", "ZEROBASEONE", "BOYNEXTDOOR", "TWS", "BABYMONSTER", "KISS OF LIFE", "ILLIT", "(G)I-DLE", "Red Velvet", "EXO", "SHINee", "Super Junior", "2NE1", "MAMAMOO", "ITZY", "STAYC", "NMIXX", "Kep1er", "THE BOYZ", "TREASURE", "MONSTA X", "P1Harmony", "CRAVITY", "DAY6", "LUCY", "The Rose", "Xdinary Heroes", "PLAVE", "Coldplay", "Maroon 5", "Imagine Dragons", "OneRepublic", "The 1975", "Arctic Monkeys", "5 Seconds of Summer", "One Direction", "Jonas Brothers", "Backstreet Boys", "Westlife", "Little Mix", "Fifth Harmony", "Spice Girls", "Linkin Park", "Green Day", "Blink-182", "Fall Out Boy", "Panic! At The Disco", "My Chemical Romance", "Paramore", "Twenty One Pilots", "Gorillaz", "Daft Punk", "The Chainsmokers", "KATSEYE", "VCHA", "LANY", "The Neighbourhood", "Chase Atlantic", "Cigarettes After Sex", "Men I Trust", "Khruangbin", "Major Lazer", "K/DA", "TFBOYS", "Mayday", "BEYOND", "Wu Bai & China Blue"]))

    details = custom_details.get(slug, {})

    lang = "zh" if category == "C-Pop" else ("en" if category in ["Pop Star", "Actor"] else "ko")
    if "thai" in slug or "th" in slug:
        lang = "th"
    if "jpop" in slug or "miku" in slug or "hololive" in slug or "suisei" in slug or "pekora" in slug:
        lang = "ja"

    fandom = details.get("fandomName", "Fans")
    if fandom == "Fans":
        if "taylor" in slug: fandom = "Swifties"
        elif "bts" in slug or name == "BTS": fandom = "ARMY"
        elif "blackpink" in slug or "jennie" in slug or "jisoo" in slug or "rose" in slug or "lisa" in slug: fandom = "BLINK"
        elif "newjeans" in slug or "hanni" in slug or "haerin" in slug: fandom = "Bunnies"
        elif "ive" in slug or "wonyoung" in slug: fandom = "DIVE"
        elif "skz" in slug or "felix" in slug or "hyunjin" in slug: fandom = "STAY"
        elif "svt" in slug or "mingyu" in slug or "jeonghan" in slug: fandom = "CARAT"
        elif "twice" in slug or "sana" in slug or "momo" in slug: fandom = "ONCE"
        elif "aespa" in slug or "karina" in slug or "winter" in slug: fandom = "MY"
        elif "lsrfm" in slug or "chaewon" in slug or "sakura" in slug: fandom = "FEARNOT"
        elif "enha" in slug or "heeseung" in slug or "sunghoon" in slug: fandom = "ENGENE"
        elif "txt" in slug or "yeonjun" in slug or "soobin" in slug: fandom = "MOA"
        elif "ateez" in slug or "san" in slug or "hongjoong" in slug: fandom = "ATINY"
        elif "riize" in slug or "wonbin" in slug: fandom = "BRIIZE"
        elif "zb1" in slug or "zhanghao" in slug: fandom = "ZEROSE"
        elif "bnd" in slug: fandom = "ONEDOOR"
        elif "tws" in slug: fandom = "42"
        elif "baemon" in slug: fandom = "MONSTIEZ"
        elif "kiof" in slug: fandom = "KISSY"
        elif "illit" in slug: fandom = "GLLIT"
        elif "gidle" in slug or "yuqi" in slug or "soyeon" in slug: fandom = "NEVERLAND"
        elif "rv" in slug or "irene" in slug or "seulgi" in slug: fandom = "ReVeluv"
        elif "exo" in slug or "baekhyun" in slug or "kai" in slug: fandom = "EXO-L"
        elif "shinee" in slug or "taemin" in slug or "key" in slug: fandom = "SHINee WORLD"
        elif "iu" in slug: fandom = "UAENA"
        elif "taeyeon" in slug or "snsd" in slug: fandom = "SONE"
        elif "super-junior" in slug or "suju" in slug: fandom = "E.L.F."
        elif "2ne1" in slug: fandom = "Blackjacks"
        elif "mamamoo" in slug: fandom = "MOOMOO"
        elif "plave" in slug: fandom = "PLLI"
        elif "billie" in slug: fandom = "Avocados"
        elif "ariana" in slug: fandom = "Arianators"
        elif "bieber" in slug: fandom = "Beliebers"
        elif "harry" in slug: fandom = "Harries"
        elif "olivia" in slug: fandom = "Livies"
        elif "lady-gaga" in slug: fandom = "Little Monsters"
        elif "selena" in slug: fandom = "Selenators"
        elif "beyonce" in slug: fandom = "Beyhive"
        elif "rihanna" in slug: fandom = "Navy"
        elif "weeknd" in slug: fandom = "XO"
        elif "sheeran" in slug: fandom = "Sheerios"
        elif "katy" in slug: fandom = "KatyCats"
        elif "nicki" in slug: fandom = "Barbz"
        elif "cardi" in slug: fandom = "Bardi Gang"
        elif "megan" in slug: fandom = "Hotties"
        elif "eminem" in slug: fandom = "Stans"
        elif "one-direction" in slug: fandom = "Directioners"
        elif "5-seconds" in slug: fandom = "5SOSFam"
        elif "jonas" in slug: fandom = "Jonatics"
        elif "xiao-zhan" in slug: fandom = "小飞侠"
        elif "wang-yibo" in slug: fandom = "摩托姐姐"
        elif "jackson-wang" in slug: fandom = "Jackys"
        elif "dylan-wang" in slug: fandom = "兄棣伙"
        elif "zhao-lusi" in slug: fandom = "可露丽"
        elif "dilraba" in slug: fandom = "爱丽丝"
        elif "yang-mi" in slug: fandom = "蜜蜂"
        elif "esther-yu" in slug: fandom = "小石榴"
        elif "bai-lu" in slug: fandom = "鹿茸"
        elif "leo-wu" in slug: fandom = "绿茶"
        elif "yang-yang" in slug: fandom = "羊毛"
        elif "cheng-yi" in slug: fandom = "奇异果"
        elif "tan-jianci" in slug: fandom = "炭火"
        elif "luo-yunxi" in slug: fandom = "罗狮粉"
        elif "gong-jun" in slug: fandom = "俊味仙"
        elif "zhou-shen" in slug: fandom = "生米"
        elif "joker-xue" in slug: fandom = "谦友"
        elif "hua-chenyu" in slug: fandom = "火星人"
        elif "gem-tang" in slug: fandom = "棋士"
        elif "cai-xukun" in slug: fandom = "IKUN"
        elif "karry-wang" in slug: fandom = "小螃蟹"
        elif "roy-wang" in slug: fandom = "小汤圆"
        elif "jackson-yee" in slug: fandom = "千纸鹤"
        elif "zhao-liying" in slug: fandom = "颖火虫"
        elif "yang-zi" in slug: fandom = "紫米"
        elif "ju-jingyi" in slug: fandom = "蜜橘"

    new_entry = {
        "id": slug,
        "name_en": name,
        "name_kr": details.get("name_kr", name),
        "name_zh": details.get("name_zh", name),
        "name_ja": name,
        "name_th": name,
        "group": name if is_grp else (item.get("group", "Solo")),
        "group_kr": name if is_grp else "Solo",
        "group_zh": name if is_grp else "个人",
        "group_ja": name if is_grp else "ソロ",
        "group_th": name if is_grp else "เดี่ยว",
        "lang": lang,
        "fandom": fandom,
        "fandomName": fandom,
        "color": c1,
        "is_group": is_grp,
        "works": {
            "zh": details.get("works", [kw[:30]]),
            "en": details.get("works", [kw[:30]]),
            "ko": details.get("works", [kw[:30]]),
            "ja": details.get("works", [kw[:30]]),
            "th": details.get("works", [kw[:30]]),
            "ar": details.get("works", [kw[:30]]),
            "es": details.get("works", [kw[:30]])
        },
        "aliases": details.get("aliases", [slug, name.lower(), name, fandom]),
        "photo": create_avatar_svg(name, name if is_grp else "Solo", c1, c2),
        "memories": {
            "zh": details.get("memories", ["世界巡回演唱会现场", "新专辑签售会", "音乐节高光舞台", "颁奖典礼荣耀时刻"]),
            "en": details.get("memories", ["World Tour Live Stage", "Album Fansign Event", "Music Festival Highlight", "Award Ceremony Milestone"]),
            "ko": details.get("memories", ["월드투어 라이브 무대", "팬사인회 현장", "뮤직 페스티벌 하이라이트", "시상식 영광의 순간"]),
            "ja": details.get("memories", ["ワールドツアー公演", "ファンサイン会", "音楽フェスステージ", "授賞式の瞬間"]),
            "th": details.get("memories", ["เวิลด์ทัวร์คอนเสิร์ต", "งานแฟนไซน์", "มิวสิกเฟสติวัล", "งานประกาศรางวัล"]),
            "ar": details.get("memories", ["مسرح الجولة العالمية", "حدث توقيع المعجبين", "مهرجان الموسيقى", "حفل توزيع الجوائز"]),
            "es": details.get("memories", ["Gira Mundial en Vivo", "Firma de Autógrafos", "Festival de Música", "Ceremonia de Premios"])
        },
        "slogans": {
            "zh": details.get("slogans", ["永远走在繁花盛开的花路上 🌸", "我们永远在身后守护你 💖", "愿你永远肆意自在，平安顺遂 🌟", "健康第一位，照顾好自己 🍀"]),
            "en": details.get("slogans", ["Always walk on flower paths 🌸", "We are always right behind you 💖", "Shine brightly and stay healthy 🌟", "Health comes first, take care 🍀"]),
            "ko": details.get("slogans", ["꽃길만 걷자 🌸", "언제나 네 뒤에서 지켜줄게 💖", "찬란하게 빛나자 🌟", "건강이 제일 우선이야 🍀"]),
            "ja": details.get("slogans", ["花道だけを歩こう 🌸", "ずっと後ろで見守ってるよ 💖", "いつも輝いていてね 🌟", "健康第一でいてね 🍀"]),
            "th": details.get("slogans", ["เดินบนเส้นทางดอกไม้ไปด้วยกัน 🌸", "จะคอยอยู่เคียงข้างเสมอ 💖", "เปล่งประกายอย่างสดใส 🌟", "ดูแลสุขภาพด้วยนะ 🍀"]),
            "ar": details.get("slogans", ["امشِ دائماً في طريق الزهور 🌸", "سنكون دائماً بجانبك 💖", "تألق دائماً وابقَ بصحة 🌟", "صحتك هي الأهم دائماً 🍀"]),
            "es": details.get("slogans", ["Camina siempre por senderos de flores 🌸", "Siempre estaremos contigo 💖", "Brilla con fuerza y cuídate 🌟", "La salud es lo primero 🍀"])
        }
    }
    final_idols.append(new_entry)
    existing_ids[slug] = new_entry

print(f"Total merged idols in database: {len(final_idols)}")

with open('data.json', 'w', encoding='utf-8') as f:
    json.dump(final_idols, f, ensure_ascii=False, indent=2)

with open('idols.json', 'w', encoding='utf-8') as f:
    json.dump(final_idols, f, ensure_ascii=False, indent=2)

print("Saved updated data.json and idols.json!")
