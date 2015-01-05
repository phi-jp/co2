

;(function(global) {

    var co2 = {
        // 
        set: function(key, value) {
            this['_' + key] = value;
            return this._update();
        },

        // 
        reset: function() {
            for (var key in this.defaults) {
                this['_' + key] = this.defaults[key];
            }
            return this._update();
        },

        // color
        color: function(color) { return this.set('color', color); },
        red: function() { return this.color("red"); },
        green: function() { return this.color("green"); },
        blue: function() { return this.color("blue"); },

        // font size
        fontSize: function(size) {
            size = (typeof size == 'number') ? size+'px' : size;
            return this.set('font-size', size);
        },
        medium: function() { return  this.fontSize('medium'); },
        small: function() { return  this.fontSize('small'); },
        large: function() { return  this.fontSize('large'); },

        // font style
        fontStyle: function(style) { return this.set('font-style', style); },
        italic: function() { return this.fontStyle("italic"); },

        // font weight
        fontWeight: function(style) { return this.set('font-weight', style); },
        bold: function() { return this.fontWeight("bold"); },

        // decoration
        decoration: function(d) { return this.set("text-decoration", d); },
        underline: function() { return this.decoration('underline'); },
        overline: function() { return this.decoration('underline'); },

        // bg color
        background: function(color) { return this.set("background", color); },

        // private
        _update: function() {
            var props = Object.keys(co2.defaults);
            var styles = props.map(function(key) {
                return key + ':' + this['_' + key];
            }, this);

            this.log = console.log.bind(console, "%c%s", styles.join(';'));
            this.l = this.log;

            return this;
        },
    };

    co2.defaults = {
        "color": "#444",
        "background": "transparent",
        "font-size": "11px",
        "font-style": 'normal',
        "font-weight": 'normal',
        "text-decoration": "none",
    };

    co2.reset();

    global.co2 = co2;

})(this);

