# How data is gathered about macOS coverage of ISO 639

## UI Localisations

```sh
languagesetup   
WARNING: root access required to change system language
 1) English
 2) English (UK)
 3) English (Australia)
 4) English (India)
 5) 简体中文
 6) 繁體中文
 7) 繁體中文（香港）
 8) 日本語
 9) Español
10) Español (Latinoamérica)
11) Français
12) Français (Canada)
13) Deutsch
14) Русский
15) Português (Brasil)
16) Português (Portugal)
17) Italiano
18) 한국어
19) Türkçe
20) Nederlands
21) العربية
22) ภาษาไทย
23) Svenska
24) Dansk
25) Tiếng Việt
26) Norsk bokmål
27) Polski
28) Suomi
29) Bahasa Indonesia
30) עברית
31) Ελληνικά
32) Română
33) Magyar
34) Čeština
35) Català
36) Slovenčina
37) Українська
38) Hrvatski
39) Bahasa Melayu
40) हिन्दी
 q) Quit
```

## Unix locales

```sh
for i in $(locale -a | grep '_' | cut -d'_' -f1 | sort -u ); do ./giella-core/devtools/what-language-is $i; done | grep ISO | cut -d' ' -f5,9-
```
