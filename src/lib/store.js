let Store = {
    initialize: function(params) {
        this.dataset = params.dataset;
        this.size = params.size;
        this.margins = params.margins;
        this.step = params.step;
    },

    getDataset: function() {
        return this.dataset;
    },

    getSize: function() {
        return this.size;
    },

    getMargins: function() {
        return this.margins;
    },

    getStep: function() {
        return this.step;
    }

}

export default Store;