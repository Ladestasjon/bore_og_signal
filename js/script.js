function loadNobil() {
        jQuery.ajax({
    url: 'http://nobil.no/api/server/search.php',
    data: {'apikey': 'eba11a1d351940bdbcc50a42ee425a34',
    'apiversion': '3',
    'action': "search",
    'type': 'rectangle',
    'northeast': bound.getNorthEast(),
    'southwest': bound.getSouthWest(),
    'existingids': idList},
    success: parseJsonResponse,
    dataType: 'jsonp'
    });

function parseJsonResponse() {
    console.log("hej");
}

loadNobil();