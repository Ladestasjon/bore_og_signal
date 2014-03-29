function loadNobil() {
        jQuery.ajax({
    url: 'http://nobil.no/api/server/search.php',
    data: {'apikey': 'eba11a1d351940bdbcc50a42ee425a34',
    'apiversion': '3',
    'action': "search",
    'type': 'rectangle',
    'northeast': '(59.943921193288915, 10.826683044433594)',
    'southwest': '(59.883683240905256, 10.650901794433594)',
    'existingids': '189,195,199,89,48'},
    success: parseJsonResponse,
    dataType: 'jsonp'
    });
}

function parseJsonResponse(data) {
    console.log("hej" + data);
    $.each(data, function(key, item) {
        console.dir(item);
     });
}

loadNobil();