# -*- coding: utf-8 -*-
import json, re

with open('data.json', 'r', encoding='utf-8') as f:
    idols = json.load(f)

with open('i18n_extracted.json', 'r', encoding='utf-8') as f:
    i18nData = json.load(f)

# Update tag_custom_idol and search placeholder across all 10 languages
i18nData["en"]["tag_custom_idol"] = "Search 1,000+ Global Stars"
i18nData["en"]["placeholder_idol"] = "Search 1,000+ Global Stars (e.g. Taylor Swift, BTS, 张凌赫, 鹿晗, 张艺兴)"
i18nData["zh"]["tag_custom_idol"] = "支持搜索上千全球明星"
i18nData["zh"]["placeholder_idol"] = "搜索上千全球明星/组合 (如 肖战, 张凌赫, 鹿晗, 张艺兴, BTS, Taylor Swift)"
i18nData["zh-TW"]["tag_custom_idol"] = "支援搜尋上千全球明星"
i18nData["zh-TW"]["placeholder_idol"] = "搜尋上千全球明星/組合 (如 肖戰, 張凌赫, 鹿晗, 張藝興, BTS, Taylor Swift)"
i18nData["ko"]["tag_custom_idol"] = "1,000+ 글로벌 스타 검색 지원"
i18nData["ko"]["placeholder_idol"] = "1,000+ 글로벌 스타 검색 (예: 방탄소년단, 정국, 테일러 스위프트, 장릉혁)"
i18nData["ja"]["tag_custom_idol"] = "1,000人以上のグローバルスター対応"
i18nData["ja"]["placeholder_idol"] = "1,000人以上のスターを検索 (例: BTS, ジョングク, テイラー・スウィフト)"
i18nData["id"]["tag_custom_idol"] = "Cari 1.000+ Bintang Global"
i18nData["id"]["placeholder_idol"] = "Cari 1.000+ Bintang Global (misal: BTS, Taylor Swift)"
i18nData["ms"]["tag_custom_idol"] = "Cari 1,000+ Bintang Global"
i18nData["ms"]["placeholder_idol"] = "Cari 1,000+ Bintang Global (cth: BTS, Taylor Swift)"
i18nData["th"]["tag_custom_idol"] = "ค้นหา 1,000+ ศิลปินทั่วโลก"
i18nData["th"]["placeholder_idol"] = "ค้นหา 1,000+ ศิลปินทั่วโลก (เช่น BTS, Taylor Swift, Billkin)"
i18nData["ar"]["tag_custom_idol"] = "البحث عن أكثر من 1000 نجم عالمي"
i18nData["ar"]["placeholder_idol"] = "ابحث عن أكثر من 1000 نجم وفريق عالمي"
i18nData["es"]["tag_custom_idol"] = "Busca entre más de 1.000 estrellas"
i18nData["es"]["placeholder_idol"] = "Busca entre más de 1.000 estrellas (ej. Taylor Swift, BTS)"

# Re-run make_perfect_unified_site logic
with open('i18n_extracted.json', 'w', encoding='utf-8') as f:
    json.dump(i18nData, f, ensure_ascii=False, indent=2)

print("Updated i18n_extracted.json with 1000+ stars branding!")
