$(function(){
    let countryOptions;
    let stateOptions;
    let gaCitiesOps;

    $.getJSON('countries.json',function(data){
        $.each(data, function(i,country) {
            countryOptions+=
                '<option value= "'+country.code+'">'
                +country.name+
                '</option>';
        });
        $('#country').html(countryOptions);
    });

    $("#country").change(function(){
        $("#state, #city").find("option:gt(0)").remove();
        $("#state").find("option:first").text("Loading...")
            $.getJSON('us_states.json',function(data){
                $.each(data, function(stateCode,stateName) {
                    stateOptions+='<option value="'+stateCode+'">'
                        +stateName+
                        '</option>';
                });
                $('#state').html(stateOptions);
            });

    });

    $("#state").change(function(){
        if($(this).val()==="GA"){
            $.getJSON('GA_cities.json',function(data){
                $.each(data, function(statecode,city) {
                    gaCitiesOps +='<option value="'+statecode+'">'
                        +city+
                        '</option>';
                });
                $('#city').html(gaCitiesOps);
            });
        }
    });

});
