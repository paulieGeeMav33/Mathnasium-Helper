console.log("Foo");

class StuReport {
    constructor(studentName) {
        self.studentName = studentName
        self.regularPages = 0
        self.mastery_pages = 0
        self.corrected_pages = 0
        self.corrected_mastery_pages = 0
        self.totalPages = self.regularPages + self.mastery_pages + self.corrected_pages + self.corrected_mastery_pages
        self.subjects = []
        self.pronouns = null
    }


    calcTotalPages(){
        self.totalPages = self.regularPages + self.mastery_pages + self.corrected_pages + self.corrected_mastery_pages
    }

    setTotalPages(pages){
        self.totalPages = pages
    }

    AddSubjects(subjects){
        subjects.forEach(element => {
            self.subjects.push(element)
        });
    }

    MakeReport(){
        let stringReport = `Hi, my name is Paul and I worked with ${self.studentName} today. We worked on ${self.subjects}. [He/She] put in a great effort and managed to complete ${self.totalPages} pages today! Have a great day!`
        return stringReport
    }
}

let rp = new StuReport("JoJo","Foo")

rp.AddSubjects(['Math','Science'])

console.log(rp.MakeReport())

