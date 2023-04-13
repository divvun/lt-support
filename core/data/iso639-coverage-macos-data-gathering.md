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

With added language/locale codes, we have the following table (locale code added
manually):

| Apple name              | English name  | BCP-47 |
| ----------------------- | ------------- |:------ |
| English                 | English       | en     |
| English (UK)            | English       | en_GB  |
| English (Australia)     | English       | en_AU  |
| English (India)         | English       | en_IN  |
| 简体中文                    | Chinese (Simplified)  | zh_CN  |
| 繁體中文                    | Chinese (Traditional) | zh_TW  |
| 繁體中文（香港）                | Chinese (Honk Kong)   | zh_HK  |
| 日本語                     | Japanese      | ja     |
| Español                 | Spanish       | es     |
| Español (Latinoamérica) | Spanish       | es_419 |
| Français                | French        | fr     |
| Français (Canada)       | French        | fr_CA  |
| Deutsch                 | German        | de     |
| Русский                 | Russian       | ru     |
| Português (Brasil)      | Portuguese    | pt_BR  |
| Português (Portugal)    | Portuguese    | pt_PT  |
| Italiano                | Italian       | it     |
| 한국어                     | Korean        | ko     |
| Türkçe                  | Turkish       | tr     |
| Nederlands              | Dutch         | nl     |
| العربية                 |              Arabic    |       ar |
| ภาษาไทย                 | Thai          | th     |
| Svenska                 | Swedish       | sv     |
| Dansk                   | Danish        | da     |
| Tiếng Việt              | Vietnamese    | vi     |
| Norsk bokmål            | Norwegian bokmål | no     |
| Polski                  | Polish        | pl     |
| Suomi                   | Finnish       | fi     |
| Bahasa Indonesia        | Indonesian    | id     |
| עברית                   |              Hebrew |     he |
| Ελληνικά                | Greek         | el     |
| Română                  | Romanian      | ro     |
| Magyar                  | Hungarian     | hu     |
| Čeština                 | Czech         | cs     |
| Català                  | Catalan       | ca     |
| Slovenčina              | Slovak        | sk     |
| Українська              | Ukrainian     | uk     |
| Hrvatski                | Croatian      | hr     |
| Bahasa Melayu           | Malay         | ms     |
| हिन्दी                  | Hindi         | hi     |


## Unix locales

```sh
for i in $(locale -a | grep '_' | cut -d'_' -f1 | sort -u ); do ./giella-core/devtools/what-language-is $i; done | grep ISO | cut -d' ' -f5,9-
```
