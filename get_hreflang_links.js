/**
 * @author Christian Hänsel 
 * 
 * Gets the hreflang links from the <head> and display them in the extended table
 */

const hreflang = document.querySelectorAll('[rel="alternate"][hreflang]')

const extended = [...hreflang].map(e => [e.href, e.getAttribute('hreflang')])
extended.unshift(['Href', 'Hreflang'])

return {
    cell: hreflang.length,
    extended: extended
}