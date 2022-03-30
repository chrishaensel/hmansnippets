/**
 * @author Christian Hänsel 
 * 
 * Gets the ampHtml tag from the <head>
 */

const amphtml = document.querySelectorAll('head [rel="amphtml"]')[0].href

/* Return the result to Horseman */
return amphtml