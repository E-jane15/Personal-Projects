const correctAnswers = ['B','A','B','A'];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

 form.addEventListener("submit", e => {
    e.preventDefault();

    let score = 0;
    const userAnswers =[form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //cheks answers

    userAnswers.forEach((answer,index) =>{ 
      if(answer === correctAnswers[index]){
        score += 25; 
      } 
    });
    
    //shows result on quiz page
    scrollTo(0,0);
   result.querySelector("span"). textContent = `${score}%`;
   result.classList.remove("d-none");

    //animating score
   let output = 0;
   const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if(output === score){
        clearInterval(timer);
    }else {
        output++;
    }
   }, 10);
});
