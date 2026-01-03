// const rows = document.querySelectorAll("#dwpPKsBody tr");

// rows.forEach(row => {
//     const cells = row.querySelectorAll("td");

//     if (cells[0].querySelector("div")) {
        
//     }

//     // 1. Get assignment name (3rd cell)
//     const assignmentName = cells[2].querySelector("div").textContent.trim();

//     // 2. Get checkboxes
//     const workedOn = cells[3].querySelector("input[type='checkbox']");
//     const completedMastered = cells[4].querySelector("input[type='checkbox']");
//     const completedNotMastered = cells[5].querySelector("input[type='checkbox']");

//     console.log("Assignment:", assignmentName);
//     console.log("Worked On:", workedOn.checked);
//     console.log("Completed & Mastered:", completedMastered.checked);
//     console.log("Completed but Not Mastered:", completedNotMastered.checked);
//     console.log("-----");
// });

function parsePage() {
    let content = document.getElementById("dwpPKsTable")
    if (content) {
        console.log(content)
        
    } else {
        console.log(`Something has gone wrong.`)
    }
    
}