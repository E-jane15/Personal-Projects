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
            output.innerHTML = result;
        }else if(value == "opposite"){
            if(input > 0 || output.innerHTML > 0 || input<0 || output.innerHTML<0){
             display_input.innerHTML = display_input.innerHTML * -1;
             output.innerHTML = output.innerHTML * -1;
            } 
        }else if(value == "percent"){
            let answer = input/100;
            output.innerHTML= answer;
        }
        else {
          input += value;
          display_input.innerHTML = input;
        }
    })

}