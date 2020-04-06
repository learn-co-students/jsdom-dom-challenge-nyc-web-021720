

const count=document.getElementById("counter")

const increment=document.querySelector("#plus")

const decrement=document.querySelector("#minus")

const heart = document.querySelector("#heart")

const like=document.getElementsByClassName("likes")[0]

const pause=document.getElementById("pause")

const submitbutton=document.getElementById("comment-form")

let likeCount={}


function counter(){
    count.innerText ++
}


let counters = setInterval(counter, 1000)



document.addEventListener("click",function(e){
    if (e.target===increment){
        count.innerText++;
    } else if(e.target===decrement){
        count.innerText--;
    } else if (e.target === heart){
        let number=count.textContent
        // number has been liked already
        if(likeCount[number]){
            likeCount[number]++
            let li=document.querySelector(`[data-number="${number}"]`)
            li.textContent=`${number}has been liked ${likeCount[number]} times!`
        }else{
            likeCount[number]=1
            const li= document.createElement("li")
            li.dataset.number=number
            li.textContent=`${number} has been liked`
            like.append(li)
        }
    } else if(e.target.id==="pause"){
        clearTimeout(counters);

        increment.disabled=true;
        decrement.disabled=true;
        heart.disabled=true;
        submit.disabled=true;


        e.target.id="resume"
         
        e.target.innerText="resume"
        
        
    } else if (e.target.id === "resume" ){
        
        counters = setInterval(counter, 1000)

        increment.disabled=false;
        decrement.disabled=false;
        heart.disabled=false;
        submit.disabled=false;

        e.target.id="pause";
        e.target.innerText="pause";

    }
    
});


submitbutton.addEventListener("submit", function(e){
    e.preventDefault()

    const input= document.getElementById("comment-input")
    
    const list=document.getElementById("list")
    
    const comment= document.createElement("li")
    
    comment.innerText=input.value

   list.append(comment)

//    input.value= ""
event.target.reset()

});




