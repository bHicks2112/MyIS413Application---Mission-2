// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

//grab the values 
$("#btnsend").click( function () {
    var a = parseInt($("#assignments").val());
    var gp = parseInt($("#group_project").val());
    var q = parseInt($("#quizzes").val());
    var e = parseInt($("#exams").val());
    var i = parseInt($("#intex").val());

    //sum the values
    var sum = a + gp + q + e + i;

    //determine letter grade
    if (sum > 93) {
        letter_grade = 'A'
    } else if (sum > 89) {
        letter_grade = 'A-'
    } else if (sum > 86) {
        letter_grade = 'B+'
    } else if (sum > 83) {
        letter_grade = 'B'
    } else if (sum > 79) {
        letter_grade = 'B-'
    } else if (sum > 76) {
        letter_grade = 'C+'
    } else if (sum > 73) {
        letter_grade = 'C'
    } else if (sum > 69) {
        letter_grade = 'C-'
    } else if (sum > 66) {
        letter_grade = 'D+'
    } else if (sum > 63) {
        letter_grade = 'D'
    } else if (sum > 59) {
        letter_grade = 'D-'
    } else {
        letter_grade = 'E'
    };

    //alert percentage and letter grade
        alert('Your final percentage for IS 413 is ' + sum + '% and your letter grade is ' + letter_grade + '.');
    })
