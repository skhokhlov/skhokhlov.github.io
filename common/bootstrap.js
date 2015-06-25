(function () {
    var request = new XMLHttpRequest();
    request.open('GET', '/common/landings.html', true);
    request.onload = function () {
        if (request.status === 200) {
            document.getElementsByClassName('landings-wrapper')[0].innerHTML = request.responseText;
            document.getElementsByClassName('landings-link')[0].setAttribute('class', 'landings-link landings-link_active');
            document.getElementsByClassName('landings-wrapper')[0].setAttribute('class', 'landings-wrapper landings-wrapper_active');
        } else {
            throw new Error(request.statusText);
        }
    };
    request.onerror = function () {
        throw new Error("Network Error");
    };
    request.send(null);
})();
