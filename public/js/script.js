console.log('Hello, connecting jQuery!');
$(document).ready(function () {
    $("p").click(function () {
        $(this).hide();
    });
});

// script logic from Sat 18th Nov
// user select 2 per day 

// function select2perweekday(params){
// if class selection is
// }

// Below need to to modify. This is likely in routes (from jQuery Ajax Tutorial). Put in routes calandar_routes.js

// $(function(){
//     var $slots =$('#slots');
//     $.ajax({
//         type: 'GET',
//         url:'/app/models/userSlots', // will need all userSlots and individual one
//         success: function(orders){
//             $each(slots, function(count, slots){
//                 $orders.append('<td>name: '+ slot.name1 +', drink : '+ slot.name2 + '</td>');
//             });
//         }
// error:function () {
//     console.log('not getting slots');
// }
//     });
// });
// then need add a post request.
// $.post //THANK YOU HAGIL!
// *****

// Intention is to select different parts of the calandar
// light grey on hover (could be done in css, bootstrap or jquery)
// light green if selected
// have 5 users

// user can only select 6 hours for all weekdays & 2 hour slots per day on weekends
// flashup a warning if user selects more

// if a user tries to select more, they will be prevented
// if one selected, can't select more, flashup a warning if user selects more "Don't be greedy. No I in team!"
// must deselect, then create new selection

// selections can also be prevented if another user has already taken that spot
// in this case (even where it needs to be greyed-out, could also be red),
// Before user is connected, need to connect to database
// The new selection needs to communicate to database... likely after they've selected all for the week.
// if used maximum slots, flashup message saying "You've used up all your slots, wish to proceed?"
// if they don't book the maximum alloted slots a warning could appear "You still have more slots available, want to choose more, or proceed anyway?"
// also lightly want a resest button to clear all selections
// likely

// ***  flashup message after max number of selection could have built-in buttons that negate you clicking a save button
// likely would be: "save and logout", "review selection"