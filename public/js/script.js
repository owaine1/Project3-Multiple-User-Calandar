$(document).ready(function () {

});
// Intention is to select different parts of the calandar
// light grey on hover (could be done in css, bootstrap or jquery)
// light green if selected
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