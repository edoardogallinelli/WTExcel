const ComscoreMapping = {
    'play*null': {
        ns_st_ev: function (val) {
            return val === 'play' && val ? true : false
        },
        ns_st_po: (val) => {
            return val.length > 5 && val != null ? true : false
        },
        ns_st_ct: (val) => { return true },
        ns_st_ad: (val) => { return true },
        ns_st_ui: (val) => { return true },
        ns_st_cl: (val) => { return true },
        ns_st_st: (val) => { return true },
        c6: (val) => { return true },
        c4: (val) => { return true },
        ns_st_tpr: (val) => { return true },
        ns_st_pr: (val) => { return true }

    },
    'playvod': {
        ns_st_ev: (val) => {
            return val === 'play' && val != null ? true : false
        },
        ns_st_po: (val) => {
            return val.length > 5 && val != null ? true : false
        },
        ns_st_ct: '',
        ns_st_ad: '',
        ns_st_ui: '',
        ns_st_cl: '',
        ns_st_st: '',
        c6: '',
        c4: '',
        ns_st_tpr: '',
        ns_st_pr: ''

    },
}
module.exports = ComscoreMapping;  