# Kildin Sámi - the lost letters

Many indigenous languages have alphabets based on Latin or Cyrillic, with additional letters or diacritics to cover all sounds in the language. If these additional letters are not also found in a majority language, chances are small that they will display correctly — or at all — on many systems.

One such case is Kildin Sámi. The following screen shot is from one of the users of the Divvun Keyboard app:

![Kildin Sámi screen shot](img/kildinsami-focus.jpg)

In the screen shot above, the intended content of the message sent is: **О̄дт**, but it turnes out as **О дт**. The text was correct when entered using the keyboard, but not anymore when rendered by the messaging app after being sent.

The core of the issue is that the following Kildin Sámi letters:

```
Я̄ А̄ Е̄ О̄ Э̄ Ю̄
```
(as image for browsers having the same problem as discussed here: ![Kilding Sámi letters](img/kildinsami-letters.png))

do not exist as single characters in Unicode. Instead, they are composed of the base letters:

```
Я А Е О Э Ю
```

\+ a **combining macron** that the system should *automatically* place above the base letters. But this only works if the system is able to place the macron and other diacritics correctly on the base letters.

This is the solution chosen by the Unicode consortium: no *new* letters with diacritics should be added, all new such letters should be handled using this automatic diacritic placement system.

As shown above, there is no guarantee that it works. And since this system *in practice* mostly targets indigenous and minority languages, there is also no economic or other incentive to fix or indeed discover possible issues with the system.

What do you think? Would you accept **Schloss Scho nbrunn** instead of **Schloss Schönbrunn**?
