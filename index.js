
function question () {
    let ask = prompt("How many countries are there in the world?", 0);

    setTimeout (() => {
        if ( ask == 195) {
            console.log("You are correct!")
        } else {
            console.log("Sorry, not correct.") 
        }
    }, 10000);

    console.log("Okay, let me check the answer");
}


 async function greeting() {
    return promise = new Promise(function(resolve, reject) {
        setTimeout (() => {
            if (whichQuiz == null || whichQuiz > 2 || whichQuiz < 1) {
                reject("You didn't enter the number.");
                return;
            } else {
                resolve(question());
            }
        });
        const whichQuiz = Number(prompt("Which test quiz would you like to try, 1 or 2?", 0));
    })
}


