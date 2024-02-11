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
        }

        
        else {
          input += value;
          display_input.innerHTML = input;
        }
    })

}