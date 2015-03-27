(function (window, Promise){

    /* Promises
     */
    if (typeof Promise.prototype.done !== 'function') {
        Promise.prototype.done = function (onFulfilled, onRejected) {
            var self = arguments.length ? this.then.apply(this, arguments) : this;
            self.then(null, function (err) {
                setTimeout(function () {
                    throw err
                }, 0)
            })
        }
    }

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

    request('/common/landings.html').then(function(res){
        document.getElementsByClassName('landings-wrapper')[0].innerHTML = res;
        document.getElementsByClassName('landings-link')[0].setAttribute('class', 'landings-link landings-link_active');
    });



})(window, Promise);