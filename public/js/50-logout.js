app.logout = function() {
    $.ajax({
        url: "/logout",
        type: "GET",
        success: function() {
            location.reload('/');
        }
    });
}