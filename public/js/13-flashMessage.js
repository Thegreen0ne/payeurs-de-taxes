app.flashMessage = {
    error: function(title, body) {
        return toastr.error(title);
    },
    warning: function(title, body) {
        return toastr.warning(title);
    },
    success: function(title, body) {
        return toastr.success(title);
    },
    info: function(title, body) {
        return toastr.info(title);
    },
}

app.appMessages = {
    voteFirst    : "Vous devez voter avant de pouvoir effectuer cette action!",
    leaveComment : "Laissez un comentaire!",
    voteSaved    : "Votre vote a &eacute;t&eacute; enregistr&eacute; avec succ&egrave;s!",
    alreadyVoted : "Vous avez d&eacute;j&agrave; vot&eacute; pour cette opinion.",
    emptyComment : "Votre commentaire est vide.",
    commentSaved : "Votre commentaire a &eacute;t&eacute; enregistr&eacute; avec succ&egrave;s!",
    emailSent    : "Votre courriel a &eacute;t&eacute; envoy&eacute; avec succ&egrave;s!",
    fillEmail    : "Assurez vous de remplir tous les champs pour votre courriel.",
    register     : "Vous devez &ecirc;tre connect&eacute; avant d'effectuer cette action! Cliquez sur connexion."
}