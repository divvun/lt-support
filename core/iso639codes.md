# Language codes

Language codes are used to identify a language internally in a computing system, just like Unicode is used to identify letters (slightly simplified). Without a language code, there's no way to communicate to a spelling checker what language to use for checking, to tell the system which voice to use for voice-over, or how to tell the user which language is currently being used for whatever tool.

There are several standards for language codes, but only one is used in computing systems: the ISO 639 series, by way of the [BCP 47](https://www.rfc-editor.org/info/rfc5646) standard. Other language coding systems are thus not considered.

It is unfortunate that the ISO 639 series of language codes are maintained by several entities. It would be desirable that they be all maintained along the same lines as Unicode, with regular updates and corrigenda.

<h2>ISO 639-1</h2>
<p>Whether all ISO 639-1 codes are recognised by a system, with proper language names in both English and the native language</p>
<table><thead><tr>
<th>System</th>
<th>System version</th>
<th>Documentation</th>
<th>Codes</th>
<th>Language name in English</th>
<th>Language name native language</th>
</tr></thead><tbody>
<tr>
<td>Linux</td>
<td>XX</td>
<td>-</td>
<td class="good">Yes</td>
<td class="good">Yes</td>
<td class="good">Yes</td>
</tr>
<tr>
<td>Windows</td>
<td>XX</td>
<td>-</td>
<td class="unknown">Unknown</td>
<td class="good">Yes</td>
<td class="good">Yes</td>
</tr>
<tr>
<td>macOS</td>
<td>13.x</td>
<td>-</td>
<td class="partial">Partial</td>
<td class="good">Yes</td>
<td class="good">Yes</td>
</tr>
<tr>
<td>Android</td>
<td>XX</td>
<td>-</td>
<td class="unknown">Unknown</td>
<td class="good">Yes</td>
<td class="good">Yes</td>
</tr>
<tr>
<td>iOS</td>
<td>XX</td>
<td>-</td>
<td class="unknown">Unknown</td>
<td class="good">Yes</td>
<td class="good">Yes</td>
</tr>
<tr>
<td>ChromeOS</td>
<td>XX</td>
<td>-</td>
<td class="unknown">Unknown</td>
<td class="good">Yes</td>
<td class="good">Yes</td>
</tr>
<tr>
<td>O365/Win</td>
<td>XX</td>
<td>-</td>
<td class="unknown">Unknown</td>
<td class="good">Yes</td>
<td class="unknown">Unknown</td>
</tr>
<tr>
<td>O365/Mac</td>
<td>XX</td>
<td>-</td>
<td class="unknown">Unknown</td>
<td class="good">Yes</td>
<td class="unknown">Unknown</td>
</tr>
<tr>
<td>O365/Web</td>
<td>XX</td>
<td>-</td>
<td class="unknown">Unknown</td>
<td class="good">Yes</td>
<td class="unknown">Unknown</td>
</tr>
<tr>
<td>GDocs</td>
<td>XX</td>
<td>-</td>
<td class="unknown">Unknown</td>
<td class="good">Yes</td>
<td class="unknown">Unknown</td>
</tr>
<tr>
<td>LibreOffice</td>
<td>XX</td>
<td>-</td>
<td class="unknown">Unknown</td>
<td class="good">Yes</td>
<td class="unknown">Unknown</td>
</tr>
</tbody></table>

<h2>ISO 639-3</h2>
<p>Whether all ISO 639-3 codes are recognised by a system, with proper language names in both English and the native language</p>
<table><thead><tr>
<th>System</th>
<th>System version</th>
<th>Documentation</th>
<th>Codes</th>
<th>Language name in English</th>
<th>Language name native language</th>
</tr></thead><tbody>
<tr>
<td>Linux</td>
<td>XX</td>
<td>-</td>
<td class="unknown">Unknown</td>
<td class="good">Yes</td>
<td class="unknown">Unknown</td>
</tr>
<tr>
<td>Windows</td>
<td>XX</td>
<td>-</td>
<td class="unknown">Unknown</td>
<td class="good">Yes</td>
<td class="unknown">Unknown</td>
</tr>
<tr>
<td>macOS</td>
<td>XX</td>
<td>-</td>
<td class="unknown">Unknown</td>
<td class="good">Yes</td>
<td class="unknown">Unknown</td>
</tr>
<tr>
<td>Android</td>
<td>XX</td>
<td>-</td>
<td class="unknown">Unknown</td>
<td class="good">Yes</td>
<td class="unknown">Unknown</td>
</tr>
<tr>
<td>iOS</td>
<td>XX</td>
<td>-</td>
<td class="unknown">Unknown</td>
<td class="good">Yes</td>
<td class="unknown">Unknown</td>
</tr>
<tr>
<td>ChromeOS</td>
<td>XX</td>
<td>-</td>
<td class="unknown">Unknown</td>
<td class="good">Yes</td>
<td class="unknown">Unknown</td>
</tr>
<tr>
<td>O365/Win</td>
<td>XX</td>
<td>-</td>
<td class="unknown">Unknown</td>
<td class="good">Yes</td>
<td class="unknown">Unknown</td>
</tr>
<tr>
<td>O365/Mac</td>
<td>XX</td>
<td>-</td>
<td class="unknown">Unknown</td>
<td class="good">Yes</td>
<td class="unknown">Unknown</td>
</tr>
<tr>
<td>O365/Web</td>
<td>XX</td>
<td>-</td>
<td class="unknown">Unknown</td>
<td class="good">Yes</td>
<td class="unknown">Unknown</td>
</tr>
<tr>
<td>GDocs</td>
<td>XX</td>
<td>-</td>
<td class="unknown">Unknown</td>
<td class="good">Yes</td>
<td class="unknown">Unknown</td>
</tr>
<tr>
<td>LibreOffice</td>
<td>XX</td>
<td>-</td>
<td class="unknown">Unknown</td>
<td class="good">Yes</td>
<td class="unknown">Unknown</td>
</tr>
</tbody></table>

<h2>Adding or registering missing language codes</h2>
<p>While waiting for a Unicode like model for maintaining language codes, it is necessary that users or independent developers can add missing language codes as needed. The following table describes the status for this option.</p>
<table><thead><tr>
<th>System</th>
<th>System version</th>
<th>Documentation/Comments</th>
<th>Codes</th>
<th>Language name in English</th>
<th>Language name native language</th>
</tr></thead><tbody>
<tr>
<td>Linux</td>
<td>XX</td>
<td>-</td>
<td class="good">Yes</td>
<td class="good">Yes</td>
<td class="good">Yes</td>
</tr>
<tr>
<td>Windows</td>
<td>XX</td>
<td>-</td>
<td class="partial">Partial</td>
<td class="good">Yes</td>
<td class="good">Yes</td>
</tr>
<tr>
<td>macOS</td>
<td>XX</td>
<td>-</td>
<td class="partial">Partial</td>
<td class="blocked">No</td>
<td class="blocked">No</td>
</tr>
<tr>
<td>Android</td>
<td>XX</td>
<td>-</td>
<td class="blocked">No</td>
<td class="blocked">No</td>
<td class="blocked">No</td>
</tr>
<tr>
<td>iOS</td>
<td>XX</td>
<td>-</td>
<td class="blocked">No</td>
<td class="blocked">No</td>
<td class="blocked">No</td>
</tr>
<tr>
<td>ChromeOS</td>
<td>XX</td>
<td>-</td>
<td class="blocked">No</td>
<td class="blocked">No</td>
<td class="blocked">No</td>
</tr>
<tr>
<td>O365/Win</td>
<td>XX</td>
<td>Codes and names from the OS</td>
<td class="partial">Partial</td>
<td class="good">Yes</td>
<td class="good">Yes</td>
</tr>
<tr>
<td>O365/Mac</td>
<td>XX</td>
<td>-</td>
<td class="blocked">No</td>
<td class="blocked">No</td>
<td class="blocked">No</td>
</tr>
<tr>
<td>O365/Web</td>
<td>XX</td>
<td>-</td>
<td class="blocked">No</td>
<td class="blocked">No</td>
<td class="blocked">No</td>
</tr>
<tr>
<td>GDocs</td>
<td>XX</td>
<td>-</td>
<td class="blocked">No</td>
<td class="blocked">No</td>
<td class="blocked">No</td>
</tr>
<tr>
<td>LibreOffice</td>
<td>XX</td>
<td>-</td>
<td class="unknown">Unknown</td>
<td class="good">Yes</td>
<td class="unknown">Unknown</td>
</tr>
</tbody></table>
