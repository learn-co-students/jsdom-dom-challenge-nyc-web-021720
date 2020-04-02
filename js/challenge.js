
document.addEventListener("DOMContentLoaded", () => {

const timer = setInterval(myTimer, 1000)
let counter = document.querySelector('#counter')
let seconds = counter.textContent
let likeCounter = 1
let likeCountArr = []
let likeArr = []




function myTimer() {
    seconds++
    counter.textContent = seconds
    likeCountArr.push(likeCounter)
    likeCounter = 1
}

document.addEventListener("click", function(e){
    let button = e.target
    if (button.id === 'plus') {
        seconds++
        counter.textContent = seconds
    }
    else if (button.id === 'minus') {
        seconds--
        counter.textContent = seconds
    }
    else if (button.id === 'heart') {
        let ul = document.querySelector('ul.likes');
        
        if (likeArr.includes(seconds)) {
            likeCounter++
            newLike.textContent = `${seconds}: ${likeCountArr[likeCountArr.length - 1]} like(s)`;
        }
        else {
            let newLike = document.createElement('li');
            newLike.textContent = `${seconds}: ${likeCountArr[likeCountArr.length - 1]} like(s)`;
            newLike.className = 'likes';    
            ul.append(newLike);
            likeArr.push(seconds)

        }

    }


});





});