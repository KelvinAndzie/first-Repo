document.getElementById('click').addEventListener('click', function() {
    window.location.href = 'calc1.html';
});

function final(results) {
    const regex = /(\d+|\+|\-|\*|\/)/g;

    const tokens = results.match(regex);
    let result = parseFloat(tokens[0]);

    for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const operand = parseFloat(tokens[i + 1]);

        switch (operator) {
            case '+':
            result += operand;
            break;
            case '-':
            result -= operand;
            break;
            case '*':
            result *= operand;
            break;
            case '/':
            result /= operand;
            break;
            default:
        }
    }

    return result;
}

function displayOutput(output) {
    
    if (output == 'RESET'){
        document.getElementById("output").innerHTML = '';
    }
    else if (output == 'DEL'){
        
    }
    else if (output == '='){
        const results = document.getElementById("output").innerHTML += output;
        document.getElementById("output").innerHTML += "<br>" + final(results);
    }
    else{
        document.getElementById("output").innerHTML += output;
    }
}

const input = document.querySelectorAll('#button');

input.forEach((div) => {
    div.addEventListener('click', () => {
        const value = div.getAttribute('value');
       displayOutput(value)
    })
})