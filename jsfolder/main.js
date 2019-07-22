$(document).ready(function () {
    //    var name = value_in_the_country_search_input_field
    $.ajax({
        url: "https://restcountries.eu/rest/v2/all"

    }).then(function (linda) {
        var limit = 8;
        var data = linda.slice(0, limit);

        console.log(data);

        var regionData = removeDuplicatesBy(x => x.region, data);

        for (i = 0; i < regionData.length; i++) {
            $('#continents').append('<option value=' + regionData[i].name + '>' + regionData[i].region +
                '</option>')
        }
        for (i = 0; i < data.length; i++) {
            $('#flagg').append('<div class="question">' + '<div class="flag rounded-top"><img src=' + data[i].flag + '></div><div class="flaginfo text-white my-2 rounded-lg"><div class="col align-content-left"><p><b>' + data[i].name + '</b><br>population: ' + data[i].population + '<br>region: ' + data[i].region + '<br>capital: ' + data[i].capital + '</p></div></div></div>')

        }
    }).catch(function (error) {
        console.log(error);
    });

    // start from here
    // add id to input field 
    // https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp

    //        $.ajax({
    //            url: "https://restcountries.eu/rest/v2/name/" + name,
    //                  type: 'POST'
    //        }).then(function (data) {
    //            console.log(data);
    //        }).catch(function (error) {
    //            console.log(error);
    //        });
});

function removeDuplicatesBy(keyFn, array) {
    var mySet = new Set();
    return array.filter(function (x) {
        var key = keyFn(x),
            isNew = !mySet.has(key);
        if (isNew) mySet.add(key);
        return isNew;
    });
}
