$(function () {
    let countryOptions;
    let stateOptions;
    let alOps = '';
    let arOps = '';
    let akOps = '';
    let asOps = '';


    let url = "https://api.mlab.com/api/1/databases/apptos/collections/countries/5b03245d734d1d0aaaad6559?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl";
         $.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',
            data: {id: $("country").val()},
            success: function (states) {
                $.each(states, function (i, country) {
                    $("#country").append('<option value="' + country.code + '">' +
                        country.name + '</option>');
                })
            }

        })


    $("#country").on("change", function () {
        let url = "https://api.mlab.com/api/1/databases/apptos/collections/us_states/5b0325c3734d1d0aaaad6624?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl";
        $("#state").empty();
        if ($(this).val() === "US") {
            $.ajax({
                type: 'GET',
                url: url,
                dataType: 'json',
                data: {id: $("country").val()},
                success: function (states) {
                    $.each(states, function (i, state) {
                        $("#state").append('<option value="' + state.code + '">' +
                            state.name + '</option>');
                    })
                }

            })

        }
    })


            $("#state").on("change", function () {
                let url = "https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/5b032c11734d1d0aaaad693d?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl";
                $("#state").empty();
                if ($(this).val() === "AL") {
                    $.ajax({
                        type: 'GET',
                        url: url,
                        dataType: 'json',
                        data: {id: $("country").val()},
                        success: function (states) {
                            $.each(states, function (i, state) {
                                $("#state").append('<option value="' + state.code + '">' +
                                    state.name + '</option>');
                            })
                        }

                    });


                    if ($(this).val() === "AK") {
                        let url = "https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/5b023908734d1d0aaaace6e3?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl";
                        $("#school").empty();
                        $.ajax({
                            type: 'GET',
                            url: url,
                            dataType: 'json',
                            data: {id: $("country").val()},
                            success: function (states) {
                                $.each(states, function (i, school) {
                                    $("#school").append('<option value="' + school.id + '">' +
                                        school.SchoolName + " " + " | " + school.schoolCode +
                                        '</option>');
                                })
                            }

                        })

                    }

                    else if ($(this).val() === "AR") {
                        let url = "https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/5b032b02734d1d0aaaad68f5?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl";
                        $("#school").empty();
                        $.ajax({
                            type: 'GET',
                            url: url,
                            dataType: 'json',
                            data: {id: $("country").val()},
                            success: function (states) {
                                $.each(states, function (i, school) {
                                    $("#school").append('<option value="' + school.id + '">' +
                                        school.SchoolName + " " + " | " + school.schoolCode +
                                        '</option>');
                                })
                            }

                        })

                    }
                }

                else if ($(this).val() === "AS") {
                    let url = "https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/5b0ebec7fb6fc004ef00ac84?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl";
                    $("#school").empty();
                    $.ajax({
                        type: 'GET',
                        url: url,
                        dataType: 'json',
                        data: {id: $("country").val()},
                        success: function (states) {
                            $.each(states, function (i, school) {
                                $("#school").append('<option value="' + school.id + '">' +
                                    school.SchoolName + " " + " | " + school.schoolCode +
                                    '</option>');
                            })
                        }

                    })

                }


        })

})

