let s=document.getElementById("id1")
let sa=document.getElementById("id2")
let count=0
function increament(){
    console.log("button clicked")
    count+=1
    s.innerText=count
}
function save(){
    let countstr=count + " - "
    sa.innerText+=countstr
    console.log(count)
    
}