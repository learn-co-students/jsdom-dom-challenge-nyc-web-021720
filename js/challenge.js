let commentButton = document.getElementById("submit")
let counter = document.getElementById("counter")


let startClock = setInterval(function(){
    counter.innerText++
}, 1000);

document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault()
    console.log('DOM fully loaded');

let likeCount = {}
let likes = document.getElementsByClassName("likes")[0]
    document.addEventListener("click", (event) => {
        event.preventDefault
        let pause = document.getElementById("pause")
        let minus = document.getElementById("minus")
        let plus = document.getElementById("plus")
        let heart = document.getElementById("heart")
        let counter = document.getElementById("counter")
        if (event.target === pause){
            if(pause.innerText === "pause"){
                pause.innerText = "resume"
                clearInterval(startClock)
                plus.disabled = true
                minus.disabled = true
                heart.disabled = true
       
            }else if (pause.innerText === "resume") {
                pause.innerText = "pause"
                plus.disabled = false
                minus.disabled = false
                heart.disabled = false
                startClock = setInterval(function(){
                   counter.innerText++
               }, 1000);
        }
    }else if (event.target === minus){
        counter.innerText--
    }else if (event.target === plus){
        counter.innerText++
    }else if (event.target === heart){
        console.dir(likes)
        let number = counter.textContent
        if (likeCount[number]){
            likeCount[number]++
            let li = document.querySelector(`[data-id="${number}"]`)
            li.innerText = `${number} has been liked ${likeCount[number]} times!`
        }else {
            likeCount[number] = 1
            let li = document.createElement('li')
            li.dataset.id = number
            li.innerText = `${number} has been liked!`
            likes.append(li)
        }
    }
})

    submit.addEventListener("click", (event) => {
        event.preventDefault()
        let commentList = document.getElementById("list")
        let description = document.getElementById("comment-input")
        let newComment = document.createElement("li")
        let comment = description.value
        newComment.innerText = comment
        commentList.appendChild(newComment)
    })

});