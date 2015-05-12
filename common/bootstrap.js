(function () {
    var Request = new XMLHttpRequest();
    Request.open('GET', url, true);
    Request.onload = function (res) {
        if (Request.status === 200) {
            document.getElementsByClassName('landings-wrapper')[0].innerHTML = res;
            document.getElementsByClassName('landings-link')[0].setAttribute('class', 'landings-link landings-link_active');
            document.getElementsByClassName('landings-wrapper')[0].setAttribute('class', 'landings-wrapper landings-wrapper_active');
        } else {
            Error(Request.statusText);
        }
    };
    Request.onerror = function () {
        reject(Error("Network Error"));
    };
    Request.send(null);
})();
