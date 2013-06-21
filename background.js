(function(tabs, runtime){
    var param = "?share=1";

    runtime.onMessage.addListener(
        function(request, sender) {
            var url = sender.tab.url;
            if (request.action == "quoraLoaded") {
                var hasParam = url.indexOf(param) !== -1;
                if (!hasParam) {
                    tabs.update(sender.tab.id, {url: url + param});
                }
            }
        });
})(chrome.tabs, chrome.runtime);
