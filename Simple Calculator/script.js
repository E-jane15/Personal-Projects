const buttons = document.querySelectorAll(".key");
const display_input = document.querySelector(".input");
const output = document.querySelector(".output");

let input = "";

for (let key of buttons){
    const value = key.dataset.key;

    key.addEventListener("click", ()=>{
        if (value == "clear"){
            input = "";
            display_input.innerHTML = "";
             output.innerHTML = "";
        }else if (value == "equal"){
            let result = eval(input);
            input = result;
            output.innerHTML = result;
            display_input.innerHTML = result;
        }else if(value == "opposite"){
            if(input == ''){
                display_input.innerHTML = 'undefined'
                output.innerHTML = 'undefined';
            }else{
                input *= -1;
                display_input.innerHTML = display_input.innerHTML * -1;
            }
        }else if(value == "percent"){
            let answer = input/100;
            input = answer
            display_input.innerHTML = input;
            output.innerHTML= input;
        }
        else {
          input += value;
          display_input.innerHTML = input;          
        }
    })

}