document.addEventListener("DOMContentLoaded", () => {

    const startCounter = document.getElementById("counter")
    const minusButton = document.getElementById("-")
    const plusButton = document.getElementById('+')
    const pauseButton = document.getElementById("pause")
    const likeButton = document.getElementById("<3")
    const likes = document.querySelector(".likes")
    const submitButton = document.getElementById('submit')
    const commentInput = document.getElementById("")
    const commentList = document.getElementById('list')
    
    var likesDictionary = {}
    var likesComments = {}
    
    var isPaused = false  
    
    
    var myVar = setInterval(myTimer, 1000);
    
    function myTimer() {
      startCounter.innerText++
      if (likesDictionary[startCounter.innerText]){
      likes.innerText = `${likesDictionary[startCounter.innerText]}`
      }else{
          likes.innerText = ''
      }
    }
    
    submitButton.onclick = function(){
        event.preventDefault()
        if (likesComments[startCounter.innerText]){
            likesComments[startCounter.innerText]= commentInput.value
            commentList.innerText = `${likesComments[startCounter.innerText]}`
            event.preventDefault()
        }else{
            likesComments[startCounter.innerText] = commentInput.value
            commentList.innerText = `${likesComments[startCounter.innerText]}`
            event.preventDefault()
        }
    
        
    
    }
    
    
    pauseButton.onclick = function(){
        if (isPaused === false){
            clearInterval(myVar)
            pauseButton.innerText = "resume"
            isPaused = true 
        }else{
            myVar = setInterval(myTimer, 1000)
            pauseButton.innerText = "pause"
            isPaused = false
        }  
    }
    
    likeButton.onclick = function(){
        startCounter.innerText 
        likesDictionary
        if (likesDictionary[startCounter.innerText]){
            likesDictionary[startCounter.innerText]+=1
            likes.innerText = `${likesDictionary[startCounter.innerText]}`
        }else{
            likesDictionary[startCounter.innerText] = 1
            likes.innerText = `${likesDictionary[startCounter.innerText]}`
        }
        
    
    }
    
    
    plusButton.onclick = function(){
        const startCounter = document.getElementById("counter")
        startCounter.innerText++;
       } 
    
    minusButton.onclick = function(){
     startCounter.innerText--;
       } 
    
    
    
    
    // let counter = 0
    
    // function add(){
    //     counter += 1
    // }
    })