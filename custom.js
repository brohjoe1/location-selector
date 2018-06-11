$(function(){
    let countryOptions;
    let stateOptions;
    let gaCitiesOps;
    let schoolOps;
    let alaskaOps;
    let alabamaOps;

    $.getJSON('countries1.json',function(data){
		$.each(data, function(index,country) {
			countryOptions+=
                '<option value= "'+country.code+'">'
                +country.name+
                '</option>';
			 });
			 $('#country').html(countryOptions);
	});

	$("#country").change(function(){
		if($(this).val()==="US"){
		$.getJSON('us_states1.json',function(data){
            $.each(data, function(index,stateObj) {
                stateOptions+='<option value="'+stateObj.code+'">'
                    +stateObj.name+
                    '</option>';
            });
            $('#state').html(stateOptions);
        });
		}
	});


    $("#state").change(function() {
        if ($(this).val() === "AL") {
            $.getJSON('schoolsByState/alabama_schools.json', function (data) {
                $.each(data, function (index, school) {
                    alabamaOps += '<option value="' + school.SchoolCode + '">'
                        + school.SchoolName+ " " + " | " + school.SchoolCode +
                        '</option>';
                });
                $('#school').html(alabamaOps);
            });
        }
        else if ($("#state").change(function(){
               if($(this).val() === "AK")
                   $.getJSON('schoolsByState/alaska_schools.json', function (data) {
                       $.each(data, function (index, school) {
                           alabamaOps += '<option value="' + school.SchoolCode + '">'
                               + school.SchoolName+ " " + " | " + school.SchoolCode +
                        '</option>';
                });
                $('#school').html(alabamaOps);
            });
        }
    });

    $("#state").change(function() {
        if ($(this).val() === "AK") {
            $.getJSON('schoolsByState/alaska_schools.json', function (data) {
                $.each(data, function (index, school) {
                    alabamaOps += '<option value="' + school.SchoolCode + '">'
                        + school.SchoolName+ " " + " | " + school.SchoolCode +
                        '</option>';
                });
                $('#school').html(alabamaOps);
            });
        }
    });




    $("#city").change(function(){
        if($(this).val()==="ATL"){
            $.getJSON('GAschoolsByCity/atlantaSchools.json',function(data){
                $.each(data, function(index, schoolObj) {
                    schoolOps +='<option value="'+schoolObj.schoolCode +'">'
                        +schoolObj.schoolName+" "+"|"+" "+ schoolObj.schoolCode
                        '</option>';
                });
                $('#school').html(schoolOps);
            });
        }
    });
	
});
