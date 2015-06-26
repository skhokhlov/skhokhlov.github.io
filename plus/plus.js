(function (d) {
    var names = {
        active: {
            head: 'head__item_active',
            body: 'body__article_active'
        },
        me: {
            hash: '#me',
            classes: {
                head: 'head__item_me',
                body: 'body__article_me'
            }
        },
        art: {
            hash: '#art',
            classes: {
                head: 'head__item_art',
                body: 'body__article_art'
            }
        },
        you: {
            hash: '#you',
            classes: {
                head: 'head__item_you',
                body: 'body__article_you'
            }
        },
        math: {
            hash: '#math',
            classes: {
                head: 'head__item_math',
                body: 'body__article_math'
            }
        },
        science: {
            hash: '#science',
            classes: {
                head: 'head__item_science',
                body: 'body__article_science'
            }
        }
    };

    var active = {};

    if (window.location.hash !== null) {
        hashEvent();
    }

    window.addEventListener("hashchange", hashEvent, false);

    function hashEvent() {
        var h = window.location.hash;

        if (h === names.me.hash) {
            if (active.hash === undefined) {
                addClass(d.getElementsByClassName(names.me.classes.head)[0], names.active.head);
                addClass(d.getElementsByClassName(names.me.classes.body)[0], names.active.body);

            } else {
                removeClass(d.getElementsByClassName(active.classes.head)[0], names.active.head);
                removeClass(d.getElementsByClassName(active.classes.body)[0], names.active.body);
                addClass(d.getElementsByClassName(names.me.classes.head)[0], names.active.head);
                addClass(d.getElementsByClassName(names.me.classes.body)[0], names.active.body);
            }

            active = names.me;
        } else if (h === names.you.hash) {
            if (active.hash === undefined) {
                addClass(d.getElementsByClassName(names.you.classes.head)[0], names.active.head);
                addClass(d.getElementsByClassName(names.you.classes.body)[0], names.active.body);

            } else {
                removeClass(d.getElementsByClassName(active.classes.head)[0], names.active.head);
                removeClass(d.getElementsByClassName(active.classes.body)[0], names.active.body);
                addClass(d.getElementsByClassName(names.you.classes.head)[0], names.active.head);
                addClass(d.getElementsByClassName(names.you.classes.body)[0], names.active.body);
            }

            active = names.you;
        } else if (h === names.art.hash) {
            if (active.hash === undefined) {
                addClass(d.getElementsByClassName(names.art.classes.head)[0], names.active.head);
                addClass(d.getElementsByClassName(names.art.classes.body)[0], names.active.body);

            } else {
                removeClass(d.getElementsByClassName(active.classes.head)[0], names.active.head);
                removeClass(d.getElementsByClassName(active.classes.body)[0], names.active.body);
                addClass(d.getElementsByClassName(names.art.classes.head)[0], names.active.head);
                addClass(d.getElementsByClassName(names.art.classes.body)[0], names.active.body);
            }

            active = names.art;
        } else if (h === names.math.hash) {
            if (active.hash === undefined) {
                addClass(d.getElementsByClassName(names.math.classes.head)[0], names.active.head);
                addClass(d.getElementsByClassName(names.math.classes.body)[0], names.active.body);

            } else {
                removeClass(d.getElementsByClassName(active.classes.head)[0], names.active.head);
                removeClass(d.getElementsByClassName(active.classes.body)[0], names.active.body);
                addClass(d.getElementsByClassName(names.math.classes.head)[0], names.active.head);
                addClass(d.getElementsByClassName(names.math.classes.body)[0], names.active.body);
            }

            active = names.math;
        } else if (h === names.science.hash) {
            if (active.hash === undefined) {
                addClass(d.getElementsByClassName(names.science.classes.head)[0], names.active.head);
                addClass(d.getElementsByClassName(names.science.classes.body)[0], names.active.body);

            } else {
                removeClass(d.getElementsByClassName(active.classes.head)[0], names.active.head);
                removeClass(d.getElementsByClassName(active.classes.body)[0], names.active.body);
                addClass(d.getElementsByClassName(names.science.classes.head)[0], names.active.head);
                addClass(d.getElementsByClassName(names.science.classes.body)[0], names.active.body);
            }

            active = names.science;
        }
    }

    function removeClass(element, className) {
        var classes = element.className.split(' ');

        var index = classes.indexOf(className);

        if (index === -1) {
            return false;
        }

        classes.splice(index, 1);

        element.className = classes.join(' ');

    }

    function addClass(element, className) {
        var classes = element.className.split(' ');

        if (classes.indexOf(className) !== -1) {
            return false;
        }

        classes.push(className);
        element.className = classes.join(' ');

    }

})(document);
