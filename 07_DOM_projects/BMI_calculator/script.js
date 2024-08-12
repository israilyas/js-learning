const form = document.querySelector('form')


form.addEventListener('submit', function (e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value);

    const weight = parseInt(document.querySelector('#weight').value);

    const result = document.querySelector('#result');

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height! ${height}`;
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight! ${weight}`;
    }
    else {
        const bmi =(weight / ((height * height)/10000)).toFixed(2) ;

        if (bmi < 18.6) {
            result.innerHTML = ` <span id="bmi">${bmi}</span><br>You are underweight. Focus on gaining healthy weight with a balanced diet. Consider consulting a healthcare professional for guidance.`;
        }
        else if (bmi >= 18.6 && bmi <= 24.9) {
            result.innerHTML = ` <span id="bmi">${bmi}</span><br>Great job! You're in the normal weight range. Keep up the balanced diet and regular exercise!`;
        }
        else{
            result.innerHTML = ` <span id="bmi">${bmi}</span><br>You are overweight. Aim for a healthier weight with a balanced diet and regular exercise. Consider seeking professional advice for support.`;
        }

    }



})