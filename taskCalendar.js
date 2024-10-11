function askDay(){
    let day = prompt("Enter a day of the week");
    switch (day) {
        case "Monday":
            alert("First day of online class");
            break;
        case "Tuesday":
            alert("Doing assigned activity");
            break;
        case "Wednesday":
            alert("Me time");
            break;
        case "Thursday":
            alert("Doing housechores")
            break;
        case "Friday":
            alert("Refresh lesson");
            break;
        case "Saturday":
            alert("Wash clothes");
            break;
        case "Sunday":
            alert("Family day");
            break;
            default:
        alert("Not a day of the week")
     }
}