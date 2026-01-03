




// class StuReport {
//     constructor(studentName) {
//         self.studentName = studentName
//         self.regularPages = 0
//         self.mastery_pages = 0
//         self.corrected_pages = 0
//         self.corrected_mastery_pages = 0
//         self.totalPages = self.regularPages + self.mastery_pages + self.corrected_pages + self.corrected_mastery_pages
//         self.subjects = []
//         self.pronouns = null
//     }


//     calcTotalPages(){
//         self.totalPages = self.regularPages + self.mastery_pages + self.corrected_pages + self.corrected_mastery_pages
//     }

//     setTotalPages(pages){
//         self.totalPages = pages
//     }

//     AddSubjects(subjects){
//         subjects.forEach(element => {
//             self.subjects.push(element)
//         });
//     }

//     MakeReport(){
//         let stringReport = `Hi, my name is Paul and I worked with ${self.studentName} today. We worked on ${self.subjects}. [He/She] put in a great effort and managed to complete ${self.totalPages} pages today! Have a great day!`
//         return stringReport
//     }
// }







function getAssignmentName(row) {
    const tds = row.querySelectorAll("td");

    for (const td of tds) {
        const div = td.querySelector("div");
        if (!div) continue;

        const hasLink = div.querySelector("a");
        const hasCheckbox = div.querySelector("input[type='checkbox']");
        const hasImage = div.querySelector("img")

        console.log(`It has link ${hasLink} and checkbox ${hasCheckbox} and div is ${div.innerHTML}`)

        if (!hasLink && !hasCheckbox && !hasImage) {
            console.log(`Found the name!! ${div.innerText}`)
            return div.textContent.trim();
        }
    }
}

function getCheckboxes(row) {
    const checkboxes = row.querySelectorAll("input.dwpCheckBox");

    return {
        workedOn: checkboxes[0],
        completedMastered: checkboxes[1],
        completedNotMastered: checkboxes[2]
    };
}

function runParser(doc) {
    const rows = document.querySelectorAll("#dwpPKsBody tr");

    const pageDoc = document.querySelector("div#divWrapUp")

    // console.log(pageDoc);

    const nameHeader = document.querySelector("header");

    // Get the students name
    // console.log(nameHeader);
    const Head3 = nameHeader.querySelector("h3")
    const StuName = Head3.querySelector("span").innerText

    let stuReport = new StuReport(StuName);
    let subjects = []

    // Get the subjects
    rows.forEach(row => {
        
        const name = getAssignmentName(row);
        const { workedOn, completedMastered, completedNotMastered } = getCheckboxes(row);

        console.log("Assignment:", name);
        console.log("Worked On:", workedOn?.checked);
        console.log("Completed & Mastered:", completedMastered?.checked);
        console.log("Completed but Not Mastered:", completedNotMastered?.checked);
        console.log("-----");
        if (workedOn?.checked) {
            // TODO: Add content to class
            subjects.push(name)
        }
    });

    stuReport.AddSubjects(subjects)

    // Get number of pages completed
    if (pageDoc) {
        // console.log(pageDoc.getHTML())
        let value = pageDoc.querySelector("input");
        if (value) {
            console.log(value.value);
            stuReport.setTotalPages(value.value)
        } else {
            console.log(`Something is wrong!`);
        }
        
    } else {
        console.log(`Something is wrong with pageDoc!`)
    }

    console.log(stuReport.MakeReport());

    let tookAssessment = document.querySelector("#StudentWorkedOnAnAssessmentToday > div > div.tri-state-toggle > div > input.toggler-button.yes");
    if(tookAssessment.checked == true){
        alert(`Took Assessment is checked!`)
        stuReport.AddSubjects(['an Assessment']);
    }

    // Option 1 insert into html as paragraph
    let badge = document.createElement("p");
    badge.textContent = stuReport.MakeReport();
    pageDoc.insertAdjacentElement("afterend",badge);

    // Option 2 put it into text field
    let OtherBadge = document.querySelector("#SessionNotes-0");
    OtherBadge.value = stuReport.MakeReport()

    
    return stuReport;


    
}

console.log(`Foo`)

runParser("Foo")