// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {}
  return `![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />`
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function createTitle(data) {
 return `
<h1>${data.title} </h1>`
}
function generateMarkdown(data) {
createTitle(data);
renderLicenseBadge(data);
}

module.exports = generateMarkdown;
