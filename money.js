/*!
 * money.js / fx() v0.2
 * Copyright 2014 Open Exchange Rates
 *
 * JavaScript library for realtime currency conversion and exchange rate calculation.
 *
 * Freely distributable under the MIT license.
 * Portions of money.js are inspired by or borrowed from underscore.js
 *
 * For details, examples and documentation:
 * http://openexchangerates.github.io/money.js/
 */
(function(root, undefined) {

    // Create a safe reference to the money.js object for use below.
    var fx = function(obj) {
        return new fxWrapper(obj);
    };

    // Current version.
    fx.version = '0.2';


    /* --- Setup --- */

    // fxSetup can be defined before loading money.js, to set the exchange rates and the base
    // (and default from/to) currencies - or the rates can be loaded in later if needed.
    var fxSetup = root.fxSetup || {
        rates : {
            AED: 3.673014,
            AFN: 69.091,
            ALL: 113.091291,
            AMD: 486.66,
            ANG: 1.791398,
            AOA: 165.9235,
            ARS: 17.2875,
            AUD: 1.31864,
            AWG: 1.786833,
            AZN: 1.7,
            BAM: 1.65404,
            BBD: 2,
            BDT: 83.285698,
            BGN: 1.653175,
            BHD: 0.377005,
            BIF: 1761.5,
            BMD: 1,
            BND: 1.347795,
            BOB: 6.935337,
            BRL: 3.241906,
            BSD: 1,
            BTC: 0.000081653676,
            BTN: 64.631697,
            BWP: 10.316706,
            BYN: 2.02925,
            BZD: 2.017093,
            CAD: 1.268834,
            CDF: 1574.900794,
            CHF: 0.986667,
            CLF: 0.02418,
            CLP: 652.589084,
            CNH: 6.6172,
            CNY: 6.6154,
            COP: 3016.02,
            CRC: 568.495,
            CUC: 1,
            CUP: 25.5,
            CVE: 93.275,
            CZK: 21.65732,
            DJF: 178.903333,
            DKK: 6.283634,
            DOP: 48.435351,
            DZD: 115.0015,
            EGP: 17.767,
            ERN: 15.100973,
            ETB: 27.490379,
            EUR: 0.844414,
            FJD: 2.080353,
            FKP: 0.744293,
            GBP: 0.744293,
            GEL: 2.703462,
            GGP: 0.744293,
            GHS: 4.49718,
            GIP: 0.744293,
            GMD: 47.44,
            GNF: 9008.916667,
            GTQ: 7.378768,
            GYD: 208.55,
            HKD: 7.81435,
            HNL: 23.74279,
            HRK: 6.375,
            HTG: 63.892905,
            HUF: 265.24,
            IDR: 13520.266556,
            ILS: 3.50585,
            IMP: 0.744293,
            INR: 64.414,
            IQD: 1196.4,
            IRR: 34801.5,
            ISK: 103.53,
            JEP: 0.744293,
            JMD: 125.856661,
            JOD: 0.709503,
            JPY: 112.228,
            KES: 103.105,
            KGS: 69.70845,
            KHR: 4055.4,
            KMF: 415.976107,
            KPW: 900,
            KRW: 1092.46,
            KWD: 0.302067,
            KYD: 0.836216,
            KZT: 334.475,
            LAK: 8354.8,
            LBP: 1524.684328,
            LKR: 153.980818,
            LRD: 125.473646,
            LSL: 13.551095,
            LYD: 1.369712,
            MAD: 9.4321,
            MDL: 17.238,
            MGA: 3233.3,
            MKD: 51.995945,
            MMK: 1365.2,
            MNT: 2439.19045,
            MOP: 8.075197,
            MRO: 356.6,
            MUR: 33.707,
            MVR: 15.409873,
            MWK: 724.907458,
            MXN: 18.77374,
            MYR: 4.067026,
            MZN: 60.766857,
            NAD: 13.547422,
            NGN: 361.32,
            NIO: 30.941836,
            NOK: 8.255985,
            NPR: 103.4,
            NZD: 1.449696,
            OMR: 0.385015,
            PAB: 1,
            PEN: 3.235456,
            PGK: 3.224434,
            PHP: 50.655,
            PKR: 105.821086,
            PLN: 3.55475,
            PYG: 5679.4,
            QAR: 3.656106,
            RON: 3.911084,
            RSD: 100.848333,
            RUB: 58.7301,
            RWF: 861.315,
            SAR: 3.75035,
            SBD: 7.805572,
            SCR: 13.9975,
            SDG: 6.702265,
            SEK: 8.363781,
            SGD: 1.346948,
            SHP: 0.744293,
            SLL: 7607.702542,
            SOS: 580.68,
            SRD: 7.448,
            SSP: 130.2634,
            STD: 20634.126424,
            SVC: 8.780792,
            SYP: 515.00999,
            SZL: 13.551173,
            THB: 32.575,
            TJS: 8.84557,
            TMT: 3.50998,
            TND: 2.477994,
            TOP: 2.300837,
            TRY: 3.841202,
            TTD: 6.754612,
            TWD: 30.0235,
            TZS: 2240.95,
            UAH: 27.228267,
            UGX: 3638.35,
            USD: 1,
            UYU: 28.998336,
            UZS: 8129.7,
            VEF: 10.30445,
            VND: 22724.001563,
            VUV: 107.299308,
            WST: 2.548178,
            XAF: 553.899111,
            XAG: 0.06209261,
            XAU: 0.00078964,
            XCD: 2.70255,
            XDR: 0.70612,
            XOF: 553.899111,
            XPD: 0.00101244,
            XPF: 100.765364,
            XPT: 0.00109221,
            YER: 250.306642,
            ZAR: 13.469829,
            MW: 10.414584,
            ZWL: 322.355011
        },
        base : "USD"
    };

    // Object containing exchange rates relative to the fx.base currency, eg { "GBP" : "0.64" }
    fx.rates = fxSetup.rates;

    // Default exchange rate base currency (eg "USD"), which all the exchange rates are relative to
    fx.base = fxSetup.base;

    // Default from / to currencies for conversion via fx.convert():
    fx.settings = {
        from : fxSetup.from || fx.base,
        to : fxSetup.to || fx.base
    };


    /* --- Conversion --- */

    // The base function of the library: converts a value from one currency to another
    var convert = fx.convert = function(val, opts) {
        // Convert arrays recursively
        if (typeof val === 'object' && val.length) {
            for (var i = 0; i< val.length; i++ ) {
                val[i] = convert(val[i], opts);
            }
            return val;
        }

        // Make sure we gots some opts
        opts = opts || {};

        // We need to know the `from` and `to` currencies
        if( !opts.from ) opts.from = fx.settings.from;
        if( !opts.to ) opts.to = fx.settings.to;

        // Multiple the value by the exchange rate
        return val * getRate( opts.to, opts.from );
    };

    // Returns the exchange rate to `target` currency from `base` currency
    var getRate = function(to, from) {
        // Save bytes in minified version
        var rates = fx.rates;

        // Make sure the base rate is in the rates object:
        rates[fx.base] = 1;

        // Throw an error if either rate isn't in the rates array
        if ( !rates[to] || !rates[from] ) throw "fx error";

        // If `from` currency === fx.base, return the basic exchange rate for the `to` currency
        if ( from === fx.base ) {
            return rates[to];
        }

        // If `to` currency === fx.base, return the basic inverse rate of the `from` currency
        if ( to === fx.base ) {
            return 1 / rates[from];
        }

        // Otherwise, return the `to` rate multipled by the inverse of the `from` rate to get the
        // relative exchange rate between the two currencies
        return rates[to] * (1 / rates[from]);
    };


    /* --- OOP wrapper and chaining --- */

    // If fx(val) is called as a function, it returns a wrapped object that can be used OO-style
    var fxWrapper = function(val) {
        // Experimental: parse strings to pull out currency code and value:
        if ( typeof	val === "string" ) {
            this._v = parseFloat(val.replace(/[^0-9-.]/g, ""));
            this._fx = val.replace(/([^A-Za-z])/g, "");
        } else {
            this._v = val;
        }
    };

    // Expose `wrapper.prototype` as `fx.prototype`
    var fxProto = fx.prototype = fxWrapper.prototype;

    // fx(val).convert(opts) does the same thing as fx.convert(val, opts)
    fxProto.convert = function() {
        var args = Array.prototype.slice.call(arguments);
        args.unshift(this._v);
        return convert.apply(fx, args);
    };

    // fx(val).from(currency) returns a wrapped `fx` where the value has been converted from
    // `currency` to the `fx.base` currency. Should be followed by `.to(otherCurrency)`
    fxProto.from = function(currency) {
        var wrapped = fx(convert(this._v, {from: currency, to: fx.base}));
        wrapped._fx = fx.base;
        return wrapped;
    };

    // fx(val).to(currency) returns the value, converted from `fx.base` to `currency`
    fxProto.to = function(currency) {
        return convert(this._v, {from: this._fx ? this._fx : fx.settings.from, to: currency});
    };


    /* --- Module Definition --- */

    // Export the fx object for CommonJS. If being loaded as an AMD module, define it as such.
    // Otherwise, just add `fx` to the global object
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = fx;
        }
        exports.fx = fx;
    } else if (typeof define === 'function' && define.amd) {
        // Return the library as an AMD module:
        define([], function() {
            return fx;
        });
    } else {
        // Use fx.noConflict to restore `fx` back to its original value before money.js loaded.
        // Returns a reference to the library's `fx` object; e.g. `var money = fx.noConflict();`
        fx.noConflict = (function(previousFx) {
            return function() {
                // Reset the value of the root's `fx` variable:
                root.fx = previousFx;
                // Delete the noConflict function:
                fx.noConflict = undefined;
                // Return reference to the library to re-assign it:
                return fx;
            };
        })(root.fx);

        // Declare `fx` on the root (global/window) object:
        root['fx'] = fx;
    }

    // Root will be `window` in browser or `global` on the server:
}(this));