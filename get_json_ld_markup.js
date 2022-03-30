/**
 * @author Christian Hänsel
 * 
 * Gets the JSON-LD markup of the page and puts it into an extended table
 */
var unique_json_types = [];
var JSONS = document.querySelectorAll("script[type='application/ld+json']");
for (var i = 0; i < JSONS.length; i++) {
    var jsonParsed = JSON.parse(JSONS[i].innerHTML);
    var type = jsonParsed['@type']; // Get the type of the review
    var context = jsonParsed['@context']; // 
    jsonParsed.string = JSONS[i].innerHTML; // have the innerHTML as a string so we can copy it from the extended table
    unique_json_types.push(jsonParsed)
}

// Shamelessly copying @defaced's code and being a script kiddie with it.
const extended = [...unique_json_types].map(tt => [tt['@type'], tt['@context'], tt.string]);
extended.unshift(['Type', 'Context', 'JSON'])

return {
    cell: unique_json_types.length,
    extended: extended
}