(function () {
    var Request = new XMLHttpRequest();
    Request.open('GET', '/common/landings.html', true);
    Request.onload = function () {
        if (Request.status === 200) {
            document.getElementsByClassName('landings-wrapper')[0].innerHTML = Request.responseText;
            document.getElementsByClassName('landings-link')[0].setAttribute('class', 'landings-link landings-link_active');
            document.getElementsByClassName('landings-wrapper')[0].setAttribute('class', 'landings-wrapper landings-wrapper_active');
        } else {
            throw new Error(Request.statusText);
        }
    };
    Request.onerror = function () {
        throw new Error("Network Error"));
    };
    Request.send(null);
})();
