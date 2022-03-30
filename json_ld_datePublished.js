/**
 * @author Christian Hänsel
 * 
 * Get the datePublished value of JSON-LD markup
 */
let datePublished
const jsonld = JSON.parse(document.querySelector('script[type="application/ld+json"]').innerText);
if (typeof jsonld.datePublished !== 'undefined') {
    datePublished = jsonld.datePublished.substr(0, jsonld.datePublished.indexOf('T'));;
} else {
    datePublished = "-"
}

return datePublished;