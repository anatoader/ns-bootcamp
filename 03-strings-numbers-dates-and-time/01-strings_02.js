const fs = require('fs');
const moment = require('moment')

const inputFilepath = 'test/input.csv'
const outputFilepath = 'test/output.txt'
const referenceFilepath = 'test/reference.txt'
const encoding = 'utf8'

const dateWidth = 11;
const titleWidth = 29;
const authorsWidth = 21;

function formatDate(date_str) {
    return moment(date_str, "DD/MM/YYYY").format("DD MMM YYYY")
}

function formatEntry(string, width, padEnd = true) {
    if (string.length <= width) {
        return padEnd ? string.padEnd(width, " ") : string.padStart(width, " ")
    } else {
        return `${string.substring(0, width - 4)} ...`
    }
}

function formatRow(row, isHeader = false) {
    let [date, title, authors] = row.split(',')
    let formattedDate = isHeader ? formatEntry(date, dateWidth) : formatDate(date)
    let formattedTitle = formatEntry(title, titleWidth, false)
    let formattedAuthors = formatEntry(authors, authorsWidth)

    return `| ${formattedDate} | ${formattedTitle} | ${formattedAuthors} |\r\n`
}

function formatCsvToTable(csv_data) {
    let formattedTable = '';
    let lines = csv_data.split(/\r\n/)

    // add header
    formattedTable += formatRow(lines[0], true)
    formattedTable += `|${"=".repeat(69)}|\r\n`

    lines.slice(1).forEach((line) => { formattedTable += formatRow(line) })

    return formattedTable
}

function readFromFile(filePath, encoding) {
    return fs.readFileSync(filePath, { encoding: encoding });
}

function writeToFile(filepath, text, encoding) {
    return fs.writeFileSync(filepath, text, { encoding: encoding });
}

let csv_data = readFromFile(inputFilepath, encoding)

// format output
let formattedTable = formatCsvToTable(csv_data)
writeToFile(outputFilepath, formattedTable, encoding)
console.log("Formatted table:")
console.log(formattedTable)

// test
refTable = readFromFile(referenceFilepath, encoding)
console.log(refTable)
console.log(refTable === formattedTable ? "Test passed!" : "Test failed!")