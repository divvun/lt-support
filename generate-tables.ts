// Run with deno run --allow-read ./generate-tables.ts <path/to/yaml>

import * as yaml from "https://cdn.skypack.dev/yaml?dts";

if (Deno.args.length < 1) {
  console.error("Usage: deno run generate-tables.ts <path-to-yaml>")
  Deno.exit(1)
}

const rawYaml = await Deno.readTextFile(Deno.args[0])
const { title, description, columns, rows } = yaml.parse(rawYaml)

function boolCell(v: boolean | string) {
  if (v === true || v === "yes") {
    return `<td class="good">Yes</td>`
  }

  if (v === false || v === "no") {
    return `<td class="blocked">No</td>`
  }

  if (v === "partial") {
    return `<td class="partial">Partial</td>`
  }

  return `<td class="unknown">Unknown</td>`
}

function cell(type, value) {
  if (type === "bool") {
    return boolCell(value)
  }

  return `<td>${value}</td>`
}

console.log(`<h2>${title}</h2>`)
console.log(`<p>${description}</p>`)

console.log("<table><thead><tr>")
for (const x of columns) {
  console.log(`<th>${x.name}</th>`)
}
console.log("</tr></thead><tbody>")
for (const row of rows) {
  console.log("<tr>")

  for (const { id, type } of columns) {
    console.log(cell(type, row[id]))
  }
  console.log("</tr>")
}
console.log("</tbody></table>")

