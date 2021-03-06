// Load an opinion
// $(".col-right").on("click", ".sidebarOpinion", function(e) {
//     e.preventDefault();
//     var id = $(this).attr("data-opinionid");
//     var url = "opinions/" + id;
//     app.renderOpinion(id);
//     app.updateUrl(url);
// });

// Load more opinions
$("#loadMore").click(function(e)
{
    var offset = $(".item-img").length;
    app.getMoreOpinions(offset);
});

// Back to top button click
$("#backToTop").click(function(e)
{
    e.preventDefault();
    app.returnToTop();
});

// Logout button
$("#logout").click(function(e)
{
    e.preventDefault();
    app.logout();
});

// Show the dropdown
$("#menuIcon").click(function(e)
{
    e.preventDefault();
    $("#profileDropdown").toggleClass("hidden");
});

// Vote for
$(document).on("click", "#voteFor", function()
{
    var id = $("#currentOpinion").attr("data-id");
    app.vote(id, "pour").done(function(resp) {
        if(resp == "NOTAUTH")
        {
            app.flashMessage.error(app.appMessages.register);
        }
        else if(resp == "ALREADY_VOTED")
        {
            app.flashMessage.warning(app.appMessages.alreadyVoted);
        }
        else
        {
            app.flashMessage.success(app.appMessages.voteSaved);
        }
    });
    return;
});

// Vote against
$(document).on("click", "#voteAgainst", function()
{
    var id = $("#currentOpinion").attr("data-id");
     app.vote(id, "contre").done(function(resp)
     {
        if(resp == "NOTAUTH")
        {
            app.flashMessage.error(app.appMessages.register);
        }
        else if(resp == "ALREADY_VOTED")
        {
            app.flashMessage.warning(app.appMessages.alreadyVoted);
        }
        else
        {
            app.flashMessage.success(app.appMessages.voteSaved);
        }
    });

     return;
});

// Open comment box
$(document).on("click", "#leaveComment", function()
{
    if(!window.commentBoxInstance)
    {
        var id = $("#currentOpinion").attr("data-id");
        app.vote(id, null).done(function(resp)
        {
            if(resp == "NOTAUTH")
            {
                app.flashMessage.error(app.appMessages.register);
            }
            else if(resp != "ALREADY_VOTED")
            {
                app.flashMessage.warning(app.appMessages.voteFirst);
            }
            else
            {
                app.flashMessage.info(app.appMessages.leaveComment);
                app.showCommentBox();
            }
        });
    }
    return;
});

// Save the comment
$(document).on("click", "#writeComment",function()
{
    var opinion_id = $("#currentOpinion").attr("data-id");
    var content = $("#commentMessage").val();
    content = $.trim(content);
    if(!content || content.length == 0)
    {        
         app.flashMessage.warning(app.appMessages.emptyComment);
         return false;
    }
    app.saveComment(opinion_id, content);
    app.closeCommentBox();
    app.flashMessage.success(app.appMessages.commentSaved);
});

// Cancel the current comment
$(document).on("click", "#cancelComment",function()
{
    app.closeCommentBox();
});


$("#sendOpinion").click(function()
{
    var title = $("#opinionTitle").val();
    var body  = $("#opinionBody").val();
    title     = $.trim(title);
    body      = $.trim(body);

    if(title.length == 0 || body.length == 0)
    {
        app.flashMessage.warning(app.appMessages.fillEmail);
        return false;
    }
    app.sendEmailToAdmin(body, title);
});

$("#sendEmail").click(function()
{
    var body  = $("#emailBody").val();
    body      = $.trim(body);
    if(body.length == 0)
    {
        app.flashMessage.warning(app.appMessages.fillEmail);
        return false;
    }
    app.sendEmailToAdmin(body);
});