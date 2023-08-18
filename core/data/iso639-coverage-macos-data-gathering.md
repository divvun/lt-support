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

### GUI locales available as a secondary option, but not as a system language

Variants based on geography or script system not included. Up-to-date as of
macOS 13.2.1.

Some language codes are not yet correct (code `xx`), language names presenty in Norwegian.

| ISO 639 | Name       |
| ------- | ---------- |
|  `nn`   | nynorsk
|  `ab`   | abkhasisk
|  `xx`   | achinesisk
|  `xx`   | adangme
|  `xx`   | adygeisk
|  `af`   | afrikaans
|  `xx`   | aghem
|  `xx`   | ainu
|  `ak`   | akan
|  `xx`   | aleutisk
|  `xx`   | søraltaisk
|  `am`   | amharisk
|  `an`   | aragonsk
|  `xx`   | angika
|  `xx`   | apache, vestleg
|  `xx`   | mapudungun
|  `xx`   | arapaho
|  `ar`   | arabisk (najd)
|  `as`   | assamesisk
|  `xx`   | asu
|  `xx`   | asturisk
|  `xx`   | avarisk
|  `xx`   | avadhi
|  `ay`   | aymara
|  `az`   | aserbajdsjansk
|  `ba`   | basjkirsk
|  `xx`   | balinesisk
|  `xx`   | basaa
|  `be`   | kviterussisk
|  `xx`   | bemba
|  `xx`   | bena
|  `bg`   | bulgarsk
|  `xx`   | bhoipuri
|  `bi`   | bislama
|  `xx`   | bini
|  `xx`   | siksika
|  `bm`   | bambara
|  `bn`   | bengali
|  `bo`   | tibetansk
|  `br`   | bretonsk
|  `xx`   | bodo
|  `bs`   | bosnisk
|  `xx`   | buginesisk
|  `xx`   | blin
|  `ce`   | tsjetsjensk
|  `xx`   | cebuansk
|  `xx`   | kiga
|  `xx`   | chamorro
|  `xx`   | chuukesisk
|  `xx`   | mari
|  `xx`   | choctaw
|  `xx`   | cherokesisk
|  `xx`   | cheyenne
|  `xx`   | kurdisk (sorani)
|  `co`   | korsikansk
|  `cv`   | tsjuvasjisk
|  `cy`   | walisisk
|  `xx`   | dakota
|  `xx`   | dargwa
|  `xx`   | taita
|  `xx`   | dogrib
|  `xx`   | zarma
|  `xx`   | dogri
|  `xx`   | lågsorbisk
|  `xx`   | duala
|  `xx`   | divehi
|  `xx`   | jola-fornyi
|  `dz`   | dzongkha
|  `xx`   | dazaga
|  `xx`   | kiembu
|  `ee`   | ewe
|  `xx`   | efik
|  `xx`   | ekajuk
|  `eo`   | esperanto
|  `et`   | estisk
|  `eu`   | baskisk
|  `xx`   | ewondo
|  `fa`   | persisk
|  `xx`   | fanti
|  `xx`   | fulfulde
|  `xx`   | filipino
|  `fj`   | fijiansk
|  `fo`   | færøysk
|  `xx`   | fon
|  `xx`   | cajunfransk
|  `xx`   | friuliansk
|  `ga`   | irsk
|  `gd`   | skotsk-gælisk
|  `xx`   | geez
|  `xx`   | kiribatisk
|  `gl`   | galisisk
|  `gn`   | guarani
|  `xx`   | gorontalo
|  `xx`   | sveitsertysk
|  `gu`   | gujarati
|  `xx`   | gusii
|  `gv`   | mansk
|  `xx`   | gwich'in
|  `xx`   | ga
|  `ha`   | hausa
|  `xx`   | hawaiisk
|  `xx`   | hiligaynon
|  `xx`   | høgsorbisk
|  `ht`   | haitisk
|  `xx`   | hupa
|  `hy`   | armensk
|  `xx`   | herero
|  `ia`   | interlingua
|  `xx`   | iban
|  `xx`   | ibibio
|  `ig`   | igbo
|  `xx`   | sichuan-yi
|  `xx`   | iloko
|  `xx`   | ingusjisk
|  `io`   | ido
|  `is`   | islandsk
|  `iu`   | inuktitut
|  `xx`   | lojban
|  `xx`   | ngomba
|  `xx`   | machame
|  `jv`   | javanesisk
|  `ka`   | georgisk
|  `xx`   | kabylsk
|  `xx`   | kachin
|  `xx`   | jju
|  `xx`   | kamba
|  `xx`   | kabardisk
|  `xx`   | tyap
|  `xx`   | makonde
|  `xx`   | kappverdisk
|  `xx`   | koro
|  `xx`   | khasi
|  `xx`   | koyra chiini
|  `ki`   | kikuyu
|  `kj`   | kuanyama
|  `kk`   | kasakhisk
|  `xx`   | kako
|  `kl`   | grønlandsk
|  `xx`   | kalenjin
|  `km`   | khmer
|  `xx`   | kimbundu
|  `kn`   | kannada
|  `xx`   | konkani
|  `xx`   | kpelle
|  `xx`   | kanuri
|  `xx`   | karatsjajbalkarsk
|  `xx`   | karelsk
|  `xx`   | kurukh
|  `ks`   | kasjmiri
|  `xx`   | shambala
|  `xx`   | bafia
|  `xx`   | kølnsk
|  `xx`   | kumykisk
|  `kv`   | komi
|  `kw`   | kornisk
|  `ky`   | kirgisisk
|  `la`   | latin
|  `xx`   | ladinsk
|  `xx`   | langi
|  `lb`   | luxemburgsk
|  `xx`   | lesgisk
|  `lg`   | ganda
|  `li`   | limburgsk
|  `xx`   | lakota
|  `ln`   | lingala
|  `lo`   | laotisk
|  `xx`   | louisianakreolsk
|  `xx`   | lozi
|  `lt`   | litauisk
|  `lu`   | luba-katanga
|  `xx`   | luba-lulua
|  `xx`   | lunda
|  `xx`   | luo
|  `xx`   | mizo
|  `xx`   | luhya
|  `lv`   | latvisk/lettisk
|  `xx`   | maduresisk
|  `xx`   | magahi
|  `xx`   | maithili
|  `xx`   | makasar
|  `xx`   | masai
|  `xx`   | moksja
|  `xx`   | mende
|  `xx`   | meru
|  `xx`   | mauritisk-kreolsk
|  `mg`   | gassisk
|  `xx`   | makhuwa-meetto
|  `xx`   | meta'
|  `mh`   | marshallesisk
|  `mi`   | maori
|  `xx`   | micmac
|  `xx`   | minangkabau
|  `mk`   | makedonsk
|  `ml`   | malayalam
|  `mn`   | mongolsk
|  `xx`   | manipuri
|  `xx`   | mohawk
|  `xx`   | mossi
|  `mr`   | marathi
|  `mt`   | maltesisk
|  `xx`   | mundang
|  `xx`   | creek
|  `xx`   | mirandesisk
|  `my`   | burmesisk
|  `xx`   | erzia
|  `xx`   | nauru
|  `xx`   | napolitansk
|  `xx`   | nama
|  `nd`   | nord-ndebele
|  `ne`   | nepali
|  `xx`   | newari
|  `ng`   | ndonga
|  `xx`   | nias
|  `xx`   | niueansk
|  `xx`   | kvasio
|  `xx`   | ngiemboon
|  `xx`   | nogaisk
|  `xx`   | n'ko
|  `nr`   | sør-ndebele
|  `xx`   | nord-sotho
|  `xx`   | nuer
|  `nv`   | navajo
|  `ny`   | nyanja
|  `xx`   | nyankole
|  `oc`   | oksitansk
|  `om`   | oromo
|  `xx`   | odia
|  `os`   | ossetisk
|  `pa`   | panjabi
|  `xx`   | pangasinan
|  `xx`   | pampanga
|  `xx`   | papiamento
|  `xx`   | palauisk
|  `ps`   | pashto
|  `qu`   | quechua
|  `xx`   | rapanui
|  `xx`   | rarotongansk
|  `xx`   | retoromansk
|  `rn`   | rundi
|  `xx`   | rombo
|  `xx`   | aromansk
|  `rw`   | kinyarwanda
|  `xx`   | rwa
|  `sa`   | sanskrit
|  `xx`   | sandawe
|  `xx`   | sakha
|  `xx`   | samburu
|  `xx`   | santali
|  `xx`   | ngambay
|  `xx`   | sangu
|  `sc`   | sardisk
|  `xx`   | siciliansk
|  `xx`   | skotsk
|  `sd`   | sindhi
|  `se`   | nordsamisk
|  `xx`   | sena
|  `xx`   | koyraboro senni
|  `sg`   | sango
|  `xx`   | tachelhit
|  `xx`   | shan
|  `si`   | singalesisk
|  `sl`   | slovensk
|  `sm`   | samoansk
|  `sn`   | shona
|  `xx`   | soninke
|  `so`   | somali
|  `sq`   | albansk
|  `sr`   | serbisk
|  `xx`   | sranan
|  `ss`   | swati
|  `st`   | sør-sotho
|  `su`   | sundanesisk
|  `xx`   | sukuma
|  `sw`   | swahili
|  `xx`   | komorisk
|  `xx`   | syriakisk
|  `ta`   | tamil
|  `te`   | telugu
|  `xx`   | temne
|  `xx`   | teso
|  `xx`   | tetum
|  `tg`   | tadsjikisk
|  `ti`   | tigrinja
|  `xx`   | tigré
|  `tk`   | turkmensk
|  `xx`   | klingon
|  `tn`   | setswana
|  `to`   | tongansk
|  `xx`   | tok pisin
|  `xx`   | taroko
|  `ts`   | tsonga
|  `tt`   | tatarisk
|  `xx`   | tumbuka
|  `xx`   | tuvalsk
|  `tw`   | twi
|  `xx`   | tasawaq
|  `ty`   | tahitisk
|  `xx`   | tuvinsk
|  `xx`   | tamazight
|  `xx`   | udmurtisk
|  `ug`   | uigurisk
|  `xx`   | umbundu
|  `ur`   | urdu
|  `uz`   | usbekisk
|  `xx`   | vai
|  `xx`   | venda
|  `xx`   | vunjo
|  `wa`   | vallonsk
|  `xx`   | wolaytta
|  `xx`   | waray-waray
|  `wo`   | wolof
|  `xx`   | shanghaikinesisk
|  `xx`   | kalmukkisk
|  `xh`   | xhosa
|  `xx`   | soga
|  `xx`   | yangben
|  `xx`   | yemba
|  `yi`   | jiddisk
|  `yo`   | joruba
|  `xx`   | kantonesisk
|  `zu`   | zulu
|  `xx`   | zuni
|  `xx`   | zazaisk

## Unix locales

```sh
for i in $(locale -a | grep '_' | cut -d'_' -f1 | sort -u ); do ./giella-core/devtools/what-language-is $i; done | grep ISO | cut -d' ' -f5,9-
```

### Unix locales also found as GUI locales

| ISO 639 | Name    |
| ---- | ---------- |
| `ca` | Catalan    |
| `cs` | Czech      |
| `da` | Danish     |
| `de` | German     |
| `el` | Greek      |
| `en` | English    |
| `es` | Spanish    |
| `fi` | Finnish    |
| `fr` | French     |
| `he` | Hebrew     |
| `hi` | Hindi      |
| `hr` | Croatian   |
| `hu` | Hungarian  |
| `it` | Italian    |
| `ja` | Japanese   |
| `ko` | Korean     |
| `nl` | Dutch      |
| `no` | Norwegian  |
| `pl` | Polish     |
| `pt` | Portuguese |
| `ro` | Romanian   |
| `ru` | Russian    |
| `sk` | Slovak     |
| `sv` | Swedish    |
| `tr` | Turkish    |
| `uk` | Ukrainian  |
| `zh` | Chinese    |

### GUI locales NOT found as Unix locales

| ISO 639 | Name       |
| ------- | ---------- |
|   `ar`  [ Arabic     |
|   `th`  [ Thai       |
|   `vi`  [ Vietnamese |
|   `id`  [ Indonese   |
|   `ms`  [ Malayisk   |

### Unix locales NOT found as GUI main locales

| ISO 639 | Name       |
| ------- | ---------- |
|  `af`   | Afrikaans  |
|  `am`   | Amharic    |
|  `be`   | Belarusian |
|  `bg`   | Bulgarian  |
|  `et`   | Estonian   |
|  `eu`   | Basque     |
|  `hy`   | Armenian   |
|  `is`   | Icelandic  |
|  `kk`   | Kazakh     |
|  `lt`   | Lithuanian |
|  `sl`   | Slovenian  |
|  `sr`   | Serbian    |
