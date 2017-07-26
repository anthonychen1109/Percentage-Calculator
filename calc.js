var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');
var form = document.getElementById('xIsWhatPercentOfY');
var formula = document.getElementById('selector');

form.addEventListener('submit', function(event) {
    var x = parseFloat(numField1.value);
    var y = parseFloat(numField2.value);
    if(!numField1.value || !numField2.value) {
        alert("Please enter values in the fields");
    } // if
    else {
        switch(formula.selectedIndex){
            case 0:
                var dec = x / 100;
                result = dec * y;
                resultField.innerText = "Answer: " + result;
                break;
            case 1:
                var dec = y / 100;
                result = x / dec;
                resultField.innerText = "Answer: " + result;
                break;
            case 2:
                result = y / x;
                var dec = result * 100;
                resultField.innerText = "Answer: " + dec;
            case 3:
                var dec = x / 100;
                result = y / dec;
                resultField.innerText = "Answer: " + result;
                break;
            case 4:
                var dec = x / 100;
                result = dec * y;
                resultField.innerText = "Answer: " + result;
                break;
        } // switch
    } // else
    event.preventDefault();
}); // function