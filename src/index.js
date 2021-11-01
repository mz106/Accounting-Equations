
const equations = Object.create({
    "accEq": function(l, e) {
        return l + e;
    },
    "netIncome": function(r, e) {
        return r - e;
    },
    "breakEven": function(f, s, v) {
        return Math.ceil(f / (s - v));
    }    
});

module.exports = equations;

