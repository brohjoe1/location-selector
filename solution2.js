$(function() {
    let countryOptions;
    let stateOptions;
    let gaCitiesOps;

    $.getJSON('countries.json', function (data) {
        $.each(data, function (index, country) {
            countryOptions +=
                '<option value= "' + country.code + '">'
                + country.name +
                '</option>';
        });
        $('#country').html(countryOptions);
    });

    $("#country").change(function () {
        if($(this).val()==="US")
        $("#state, #city").find("option:gt(0)").remove();
        $("#state").find("option:first").text("Loading...");
        $.getJSON("us_states.json", {
            country_id: $(this).val()
        }, function (json) {
            $("#state").find("option:first").text("");
            for (var i = 0; i < json.length; i++) {
                $("<option/>").attr("value", json[i].id).text(json[i].name).appendTo($("#state"));
            }
        });
    });
    $("#state").change(function () {
        $("#city").find("option:gt(0)").remove();
        $("#city").find("option:first").text("Loading...");
        $.getJSON("georgia_cities.json", {
            state_id: $(this).val()
        }, function (json) {
            $("#city").find("option:first").text("");
            for (var i = 0; i < json.length; i++) {
                $("<option/>").attr("value", json[i].id).text(json[i].name).appendTo($("#city"));
            }
        });
    });

});

//     $("#country").change(function(){
//         if($(this).val()==="US"){
//             $.getJSON('us_states.json',function(data){
//                 $.each(data, function(index, state) {
//                     stateOptions+='<option value="'+index+'">'
//                         +state.name+
//                         '</option>';
//                 });
//                 $('#state').html(stateOptions);
//             });
//         }
//     });
//
//     $("#state").change(function(){
//         if($(this).val()==="GA"){
//             $.getJSON('GA_cities.json',function(data){
//                 $.each(data, function(index, city) {
//                     gaCitiesOps +='<option value="'+city.code+'">'
//                         +city.name+
//                         '</option>';
//                 });
//                 $('#city').html(gaCitiesOps);
//             });
//         }
//     });
//
// });
