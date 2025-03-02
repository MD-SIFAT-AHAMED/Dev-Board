// Background colour change
document.getElementById("theme-btn").addEventListener('click',function(){
    const themeColour = [
        'red',
        "green",
        "blue",
        "yellow",
        "orange",
        "purple",
        "pink",
    ]
    const randomColour = themeColour[Math.floor(Math.random() * themeColour.length)];
    document.getElementById("bodyColour").style.backgroundColor = randomColour;
});
// Go to blog page 
document.getElementById("discover-btn").addEventListener('click',function(){
    window.location.href = 'blog.html';
})
// Today weekday and year
const today = new Date();
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const nowCurrentDay = weekdays[today.getDay()];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const month = months[today.getMonth()];

const year = today.getFullYear();

document.getElementById('today-Date').innerHTML=`
<p>${nowCurrentDay},</p>
<p class="font-medium">${month} ${today.getMonth()}, ${year}</p>
`
function textToNumber(value)
{
    const num = parseInt(value);
    return num;
}

// Taskbar complete
const taskButtons = document.getElementsByClassName("task-btn");
for(const taskBtn of taskButtons) {
    taskBtn.addEventListener("click",function(e){

        alert('Board Upadate successfully');

        const complateTaskCount = document.getElementById("complate-task-count").innerText;
        const complateTaskCountNumber = textToNumber(complateTaskCount);

        document.getElementById("complate-task-count").innerText= complateTaskCountNumber + 1;
        const taskAssingCount = document.getElementById("task-assing-count").innerText;

        const taskAssingCountNumber = textToNumber(taskAssingCount);
        document.getElementById("task-assing-count").innerText = taskAssingCountNumber - 1;
        if(taskAssingCountNumber === 1)
        {
            alert("Congrates!!! You have complete all the current task")
        }
        const taskTitle= e.target.parentNode.parentNode.getElementsByClassName("task-titel")[0]?.innerText;

        const taskAssingTime = new Date();
        console.log(taskAssingTime.toLocaleTimeString());

        const div = document.createElement("div");
        div.innerHTML=`
        <div class="bg-[#F4F7FF] p-3 rounded-lg mb-3">
            <p>You have completed the task <span class="font-bold"> ${taskTitle} </span> at ${taskAssingTime.toLocaleTimeString()} </p>
        </div>
        `
        document.getElementById("history-activity").appendChild(div);
        taskBtn.disabled = true; 
        taskBtn.style.backgroundColor = "gray";
    })
}

// Clear the history activity
document.getElementById("clear-history").addEventListener("click",function(){
    document.getElementById("history-activity").innerHTML = "";
})