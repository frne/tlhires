var memberUrlSplit = jQuery(".tlc-member-profile-picture-wrapper.tlc-member-profile-picture-wrapper-with-header a").attr("href").split("/");
var memberUid = memberUrlSplit[memberUrlSplit.length - 1];
var link = "http://ch.tilllate.com/de/photoalbum/overview/tagged/" + memberUid;

jQuery.ajax({
    url: link,
    context: document.body,
    success: function(responseText) {
        jQuery("body").append("<div id=\"response-div\"></div>");
        jQuery("#response-div").html(responseText);
        jQuery("#response-div").find("script").each(function(i) {
            eval(jQuery(this).text());
        });

        jQuery("body").html("");

        jQuery(album.photos.pictures).each(function (k, v) {
            console.info(v.url + v.filename + "." + v.filetype);
            jQuery("body").append(
                "<a href=\"http://ch.tilllate.com/de/photoalbum/download/hires/" + v.fid + "\" download=\"" + v.fid + v.gid + "." + v.filetype + "\">" +
                "<img src=\"" + v.url + v.filename + "." + v.filetype + "\" style=\"width: 200px; height: auto;\"/>" +
                "</a>&nbsp;&nbsp;");
            if ((k % 4) == 0) {
                jQuery("body").append("<br /><br />");
            }
        });
    }
