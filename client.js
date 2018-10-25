function updateText_Simplify() {
    $('#output').html('')
    var steps = mathsteps.simplifyExpression($('#equation').val())
    steps.forEach(step => {
        $('#output').append('<li>' + step.oldNode.toString() + '</li>');   // before change: 2 x + 2 x + x + x
        $('#output').append('<li>' + toTitleCase(step.changeType.split('_').join(' ')) + '</li>')
        $('#output').append('<li>' + step.newNode.toString() + '</li>');
    });
}

function updateText_Solve() {
    $('#output').html('')
    var steps = mathsteps.solveEquation($('#equation').val())
    steps.forEach(step => {
        $('#output').append('<li>' + step.oldEquation.ascii() + '</li>');   // before change: 2 x + 2 x + x + x
        $('#output').append('<li>' + toTitleCase(step.changeType.split('_').join(' ')) + '</li>')
        $('#output').append('<li>' + step.newEquation.ascii() + '</li>');
    });
}

function toTitleCase(str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function goSolveIt() {
    if ($('#equation').val().includes('=')) {
        updateText_Solve();
    } else if ($('#equation').val()) {
        updateText_Simplify();
    }
}