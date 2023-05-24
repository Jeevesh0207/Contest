let url = "https://kontests.net/api/v1/all"

let p = fetch(url)


let C_List = document.getElementById("C_List")
p.then((responce) => {
    return responce.json()
}).then((value) => {



    for (let i of value) {

    // console.log(i.in_24_hours)   
    let clr=""
    if(i.in_24_hours=="Yes"){
        // clr="#cddc39";
        clr="#95ea98";
        
    }
    else{
        clr="seashell";
    }
    
    ihtml = ""

    ihtml = `
         <div class="itemZ" style=" background-color: ${clr};">
        <div class="top">
        <h1>${i.site}</h1></div>
        <div class="item items1">
            <p><span>Name :</span> ${i.name}</p>
        </div>
        <div class="item items2">
            <p><span>In24Hours :</span> ${i.in_24_hours
        }</p>
        </div>
        <div class="item items3">
            <p><span>Start Time :</span> ${i.start_time
        }</p>
        </div>
        <div class="item items4">
            <p><span>End Time :</span> ${i.end_time
        }</p>
        </div>
        <div class="item items5">
            <p><span>Status :</span> ${i.status
        }</p>
        </div>
        <div class="item items6">
            <a href="${i.url}" target="_blank">Click Here To Visit</a>
        </div>

    </div>
    `
    

    C_List.innerHTML += ihtml
}




}).catch((error) => {
    console.log(error)
})




let q = document.querySelectorAll("#menu_bar")
let menu_icon = document.querySelectorAll("#menu_icon")
function mymenu() {
    if (q[0].className == "right") {
        q[0].className += " active"
        menu_icon[0].name = "close-outline"
    }
    else {
        q[0].className = "right"
        menu_icon[0].name = "menu-outline"
    }
}