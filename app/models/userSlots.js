 this will be pertaining to each user: their weekly view of selections.
 something like
 var calandarSlots = mongoose.Schema({
     userSlots: {
         user: String
         mon: [{
             mon6: Boolean},
             {mon7: Boolean},
             {mon8: Boolean},
             {mon9: Boolean},
             mon10: Boolean,
             mon11: Boolean
         }],
         tue: [{
             tue6: Boolean,
             tue7: Boolean,
             tue8: Boolean,
             tue9: Boolean,
             tue10: Boolean,
             tue11: Boolean
         }],
         wed: [{
             wed6: Boolean,
             wed7: Boolean,
             wed8: Boolean,
             wed9: Boolean,
             wed10: Boolean,
             wed11: Boolean
         }],
         thur: [{
             thur6: Boolean,
             thur7: Boolean,
             thur8: Boolean,
             thur9: Boolean,
             thur10: Boolean,
             thur11: Boolean
         }],
         fri: [{
             fri6: Boolean,
             fri7: Boolean,
             fri8: Boolean,
             fri9: Boolean,
             fri10: Boolean,
             fri11: Boolean
         }],
         sat: [{
             satmorn9: Boolean,
             satmorn11: Boolean,
             sataft1: Boolean,
             sataft3: Boolean,
             sataft5: Boolean,
             sataft7: Boolean,
             sataft9: Boolean,
             sataft11: Boolean
         }],
         sun: [{
             sunmorn9: Boolean,
             sunmorn11: Boolean,
             sunaft1: Boolean,
             sunaft3: Boolean,
             sunaft5: Boolean,
             sunaft7: Boolean,
             sunaft9: Boolean,
             sunaft11: Boolean
         }]
     }
 });