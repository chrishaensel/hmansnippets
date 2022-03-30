/**
 * @author Christian Hänsel
 *  
 * Gets the HTML node count of the page
 */

/* Retrieve some information from the page */
let page_node_count = document.getElementsByTagName('*').length

/* Return the result to Horseman */
return page_node_count