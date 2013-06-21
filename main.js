console.log('nord');
(function(location){
    if(location.href.indexOf('?') !== -1 && location.href.indexof('?share=') === -1)
    {
        var urlArray = location.href.split('?');
        var newURL = urlArray[0] + "?share=1" + urlArray[1];

        location.href = newURL;
    }
})(location);


