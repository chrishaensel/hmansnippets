/**
 * @author Christian Hänsel
 * 
 * Get the dateModified value of JSON-LD markup
 */
let dateModified;
const jsonld = JSON.parse(document.querySelector('script[type="application/ld+json"]').innerText);
if (typeof jsonld.dateModified !== 'undefined') {
    dateModified = jsonld.dateModified.substr(0, jsonld.dateModified.indexOf('T'));
} else {
    dateModified = "-"
}

return dateModified;