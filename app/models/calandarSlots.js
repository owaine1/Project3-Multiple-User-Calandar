// var mongoose = require('mongoose'); 
// var SchemaCalandarSlots = mongoose.Schema;
// // Assumed example below is right, added array, as think this is the rightway
// // i.e. search for day, then search for slot.
// var calandarSlots = mongoose.Schema({ //was mongoose.Schema
    
//     mon:
//         [
//         {mon6: Boolean, person: Int},
//         {mon7: Boolean, person: Int},
//         {mon8: Boolean, person: Int},
//         {mon9: Boolean, person: Int},
//         {mon10: Boolean,person: Int},
//         {mon11: Boolean, person: Int},
//         ],
    
//     tue: 
//         [
//         {tue6: Boolean}, {person: Int},
//         {tue7: Boolean, person: Int},
//         {tue8: Boolean, person: Int},
//         {tue9: Boolean, person: Int},
//         {tue10: Boolean, person: Int},
//         {tue11: Boolean, person: Int}
//         ],
//     wed:
//     [
//         {wed6: Boolean, person: Int},
//         {wed7: Boolean, person: Int},
//         {wed8: Boolean, person: Int},
//         {wed9: Boolean, person: Int},
//         {wed10: Boolean, person: Int},
//         {wed11: Boolean, person: Int}
//     ],
//     thur:
//     [
//         {thur6: Boolean, person: Int},
//         {thur7: Boolean, person: Int},
//         {thur8: Boolean, person: Int},
//         {thur9: Boolean, person: Int},
//         {thur10: Boolean, person: Int},
//         {thur11: Boolean, person: Int},
//     ],
//     fri:
//     [
//         {fri6: Boolean, person: Int},
//         {fri7: Boolean, person: Int},
//         {fri8: Boolean, person: Int},
//         {fri9: Boolean, person: Int},
//         {fri10: Boolean, person: Int},
//         {fri11: Boolean, person: Int},
//     ],
//     sat:
//     [
//         {satmorn9: Boolean, person: Int},
//         {satmorn11: Boolean, person: Int},
//         {sataft1: Boolean, person: Int},
//         {sataft3: Boolean, person: Int},
//         {sataft5: Boolean, person: Int},
//         {sataft7: Boolean, person: Int},
//         {sataft9: Boolean, person: Int},
//         {sataft11: Boolean, person: Int},
//     ],
//     sun:
//     [
//         {sunmorn9: Boolean, person: Int},
//         {sunmorn11: Boolean, person: Int},
//         {sunaft1: Boolean, person: Int},
//         {sunaft3: Boolean, person: Int},
//         {sunaft5: Boolean, person: Int},
//         {sunaft7: Boolean, person: Int},
//         {sunaft9: Boolean, person: Int},
//         {sunaft11: Boolean, person: Int}
//     ]
// });
// module.exports = mongoose.model('User', calandar_slots); // create the model for calandar slots