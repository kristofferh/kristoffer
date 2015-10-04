let _isInitCalled = false;
let _pages = [];
let _changeListeners = [];

let PagesStore = {

    init: function () {
        if (_isInitCalled) {
            return;
        }

        _isInitCalled = true;

        _pages = JSON.parse(document.getElementById('data').innerHTML);
    },

    getPages: function() {
        return _pages;
    },

    getPage: function(id) {
        return _pages[id];
    },

    notify: function() {
        _changeListeners.forEach((listener) => {
            listener();
        });
    },

    addChangeListener: function(listener) {
        _changeListeners.push(listener);
    },

    removeChangeListener: function(listener) {
        _changeListeners = _changeListeners.filter((l) => {
            return listener !== l;
        });
    }
};

export default PagesStore;
