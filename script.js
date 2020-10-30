
$(document).ready(function(){
    let timeArray = ["9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM"]
    let now = new Date()
    let currentDate= moment().format("MMMM Do YYYY");
    let y = now.getFullYear()
    let m = now.getMonth()+1;
    let d = now.getDate()

    let total = new Date(y,m,0).getDate()

    let output =
    (m<10 ? '0' : '') + m + '/' +
    (d<10 ? '0' : '') + d + '/' + y

    

    let container = $(".container")
    let time =$("#currentDay").text(currentDate)


    

    for(i = 0; i < timeArray.length; i++){
        let timeBlock=$("<div>").addClass("time-block")
        let row=$("<div>").addClass("row")
        let hour=$("<div>").addClass("hour col-2")
        $(hour).text(timeArray[i])
        let past=$("<input>").addClass("past col-8")
        let saveBtn=$("<button>").addClass("saveBtn col-2")
        $(saveBtn).text("Save")
        $(row).append(hour)
        $(row).append(past)
        $(row).append(saveBtn)
        $(timeBlock).append(row)
        $(container).append(timeBlock)

        




        let save = $(saveBtn);
    save.click = saveData;

    function saveData(){
    var input = $(past);
    localStorage.setItem("server", input.value);
    var storedValue = localStorage.getItem("server");
    console.log(storedValue);
}
    }
    

   

})


let currentHour = parseInt(moment().format('H'));
let hour=past=$("<input>").addClass("past col-8")
console.log(currentHour);
if(currentHour==hour){
 changeClass();
}

function changeClass(){
    document.getElementById(past).className=present;
}


