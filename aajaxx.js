$(function ajaxData() {
    $.get("https://reqres.in/api/users/10", function(data, status){
        var row = $('<tr><td>' + data.data.id + '</td><td>' + data.data.first_name + '</td><td>' + data.data.last_name + '</td><td>' + data.data.avatar + '</td></tr>');
        $('#ajax_table').append(row);
    });
})

ajaxData();