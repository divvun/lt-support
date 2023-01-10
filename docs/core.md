# Basic LT: language codes, fonts, keyboards

For languages to be usable at all on a digital system, a few basic things need to be in place:

- they must be recognised by the system, and recognisable by the users
- it must be possible to display the letters of the language
- it must be possible to input those letters

# Language codes

Language codes are used to identify a language internally in a computing system, just like Unicode is used to identify letters (slightly simplified). Without a language code, there's no way to communicate to a spelling checker what language to use for checking, to tell the system which voice to use for voice-over, or how to tell the user which language is currently being used for whatever tool.

There are several standards for language codes, but only one is used in computing systems: the ISO 639 series, by way of [BCP 47](https://www.rfc-editor.org/info/rfc5646). Other language coding systems are thus not considered.

It is unfortunate that the ISO 639 series of language codes are maintained by several entities. It would be desirable that they be all maintained along the same lines as Unicode, with regular updates and corrigenda.

## ISO 639-1

<table>
<tr><th>System</th>  <th>Codes</th>  <th>Language name in English</th> <th>Language name in native language</th></tr>
<tr><td>Linux</td>      <td class="good"   >Yes</td>     <td class="good">Yes</td> <td class="good"   >Yes</td></tr>
<tr><td>Windows</td>    <td class="unknown">Unknown</td> <td class="good">Yes</td> <td class="good"   >Yes</td></tr>
<tr><td>macOS</td>      <td class="unknown">Unknown</td> <td class="good">Yes</td> <td class="good"   >Yes</td></tr>
<tr><td>Android</td>    <td class="unknown">Unknown</td> <td class="good">Yes</td> <td class="good"   >Yes</td></tr>
<tr><td>iOS</td>        <td class="unknown">Unknown</td> <td class="good">Yes</td> <td class="good"   >Yes</td></tr>
<tr><td>ChromeOS</td>   <td class="unknown">Unknown</td> <td class="good">Yes</td> <td class="good"   >Yes</td></tr>
<tr><td>O365/Win</td>   <td class="unknown">Unknown</td> <td class="good">Yes</td> <td class="unknown">Unknown</td></tr>
<tr><td>O365/Mac</td>   <td class="unknown">Unknown</td> <td class="good">Yes</td> <td class="unknown">Unknown</td></tr>
<tr><td>O365/Web</td>   <td class="unknown">Unknown</td> <td class="good">Yes</td> <td class="unknown">Unknown</td></tr>
<tr><td>GDocs</td>      <td class="unknown">Unknown</td> <td class="good">Yes</td> <td class="unknown">Unknown</td></tr>
<tr><td>LibreOffice</td><td class="unknown">Unknown</td> <td class="good">Yes</td> <td class="unknown">Unknown</td></tr>
</table>

## ISO 639-3

<table>
<tr><th>System</th>  <th>Codes</th>  <th>Language name in English</th> <th>Language name in native language</th></tr>
<tr><td>Linux</td>      <td class="unknown">Unknown</td> <td class="good">Yes</td> <td class="unknown">Unknown</td></tr>
<tr><td>Windows</td>    <td class="unknown">Unknown</td> <td class="good">Yes</td> <td class="unknown">Unknown</td></tr>
<tr><td>macOS</td>      <td class="unknown">Unknown</td> <td class="good">Yes</td> <td class="unknown">Unknown</td></tr>
<tr><td>Android</td>    <td class="unknown">Unknown</td> <td class="good">Yes</td> <td class="unknown">Unknown</td></tr>
<tr><td>iOS</td>        <td class="unknown">Unknown</td> <td class="good">Yes</td> <td class="unknown">Unknown</td></tr>
<tr><td>ChromeOS</td>   <td class="unknown">Unknown</td> <td class="good">Yes</td> <td class="unknown">Unknown</td></tr>
<tr><td>O365/Win</td>   <td class="unknown">Unknown</td> <td class="good">Yes</td> <td class="unknown">Unknown</td></tr>
<tr><td>O365/Mac</td>   <td class="unknown">Unknown</td> <td class="good">Yes</td> <td class="unknown">Unknown</td></tr>
<tr><td>O365/Web</td>   <td class="unknown">Unknown</td> <td class="good">Yes</td> <td class="unknown">Unknown</td></tr>
<tr><td>GDocs</td>      <td class="unknown">Unknown</td> <td class="good">Yes</td> <td class="unknown">Unknown</td></tr>
<tr><td>LibreOffice</td><td class="unknown">Unknown</td> <td class="good">Yes</td> <td class="unknown">Unknown</td></tr>
</table>

## Possibility of adding missing language codes

While waiting for a Unicode like model for maintaining language codes, it is necessary that users or independent developers can add missing language codes as needed. The following table describes the status for this option.

<table>
<tr><th>System</th>  <th>Codes</th>  <th>Language name in English</th> <th>Language name in native language</th></tr>
<tr><td>Linux</td>      <td class="good"   >Yes</td>     <td class="good"   >Yes</td> <td class="good"   >Yes</td></tr>
<tr><td>Windows</td>    <td class="partial">Partial</td> <td class="good"   >Yes</td> <td class="good"   >Yes</td></tr>
<tr><td>macOS</td>      <td class="partial">Partial</td> <td class="blocked">No</td>  <td class="blocked">No</td></tr>
<tr><td>Android</td>    <td class="blocked">No</td>      <td class="blocked">No</td>  <td class="blocked">No</td></tr>
<tr><td>iOS</td>        <td class="blocked">No</td>      <td class="blocked">No</td>  <td class="blocked">No</td></tr>
<tr><td>ChromeOS</td>   <td class="blocked">No</td>      <td class="blocked">No</td>  <td class="blocked">No</td></tr>
<tr><td>O365/Win</td>   <td class="partial">Partial (Via Windows)</td> <td class="good"   >Yes</td> <td class="good">Yes</td></tr>
<tr><td>O365/Mac</td>   <td class="blocked">No</td>      <td class="blocked">No</td>  <td class="blocked">No</td></tr>
<tr><td>O365/Web</td>   <td class="blocked">No</td>      <td class="blocked">No</td>  <td class="blocked">No</td></tr>
<tr><td>GDocs</td>      <td class="blocked">No</td>      <td class="blocked">No</td>  <td class="blocked">No</td></tr>
<tr><td>LibreOffice</td><td class="unknown">Unknown</td> <td class="good"   >Yes</td> <td class="unknown">Unknown</td></tr>
</table>

# Fonts

TBW.

# Keyboards

TBW.
