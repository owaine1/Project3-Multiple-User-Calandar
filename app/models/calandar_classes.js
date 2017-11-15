var mongoose = require('mongoose'); // wondering if needed?
var calandar_slots = mongoose.something({ //was mongoose.Schema

    mon: {
        mon6: boolean,
        mon7: boolean,
        mon8: boolean,
        mon9: boolean,
        mon10: boolean,
        mon11: boolean
    },
    tue: {
        tue6: boolean,
        tue7: boolean,
        tue8: boolean,
        tue9: boolean,
        tue10: boolean,
        tue11: boolean
    },
    wed: {
        wed6: boolean,
        wed7: boolean,
        wed8: boolean,
        wed9: boolean,
        wed10: boolean,
        wed11: boolean
    },
    thur: {
        thur6: boolean,
        thur7: boolean,
        thur8: boolean,
        thur9: boolean,
        thur10: boolean,
        thur11: boolean
    },
    fri: {
        fri6: boolean,
        fri7: boolean,
        fri8: boolean,
        fri9: boolean,
        fri10: boolean,
        fri11: boolean
    },
    sat: {
        satmorn9: boolean,
        satmorn11: boolean,
        sataft1: boolean,
        sataft3: boolean,
        sataft5: boolean,
        sataft7: boolean,
        sataft9: boolean,
        sataft11: boolean
    },
    sun: {
        sunmorn9: boolean,
        sunmorn11: boolean,
        sunaft1: boolean,
        sunaft3: boolean,
        sunaft5: boolean,
        sunaft7: boolean,
        sunaft9: boolean,
        sunaft11: boolean
    }
});
module.exports = mongoose.model('User', calandar_slots); // create the model for calandar slots