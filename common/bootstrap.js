(function () {

    /**
     * XHR GET async request to url with Promises
     * @param url Request address
     * @returns {Promise} Response, Error
     */
    var request = function (url) {
        return new Promise(function (resolve, reject) {
            var Request = new XMLHttpRequest();
            Request.open('GET', url, true);
            Request.onload = function () {
                if (Request.status === 200) {
                    resolve(Request.response);
                } else {
                    reject(Error(Request.statusText));
                }
            };
            Request.onerror = function () {
                reject(Error("Network Error"));
            };
            Request.send(null);
        });
    };

    request('/common/landings.html').then(function (res) {
        document.getElementsByClassName('landings-wrapper')[0].innerHTML = res;
        document.getElementsByClassName('landings-link')[0].setAttribute('class', 'landings-link landings-link_active');
        document.getElementsByClassName('landings-wrapper')[0].setAttribute('class', 'landings-wrapper landings-wrapper_active');
    });


})();
