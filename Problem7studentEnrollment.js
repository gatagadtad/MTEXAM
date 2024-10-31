// Arrays for subjects
let DSA = [];
let PL = [];
let Networks = [];

function startEnrollment() {
    while (true) {
        // Ask the user to choose a subject
        let subjectChoice = prompt("Choose a subject to enroll a student:\nA: DSA\nB: PL\nC: Networks\nD: Exit");
        let subjectArray;
        
        switch(subjectChoice) {
            case "A":
                subjectArray = DSA;
                break;
            case "B":
                subjectArray = PL;
                break;
            case "C":
                subjectArray = Networks;
                break;
            case "D":
                exitProgram();
                return;
            default:
                console.log("Invalid choice. Please select A, B, C, or D.");
                continue;
        }
        
        while (true) {
            let operationChoice = prompt("Choose an operation:\nA: Enroll\nB: Unenroll\nC: Select Another Subject\nD: Exit");
            
            switch(operationChoice) {
                case "A":
                    let studentName = prompt("Enter the name of the student to enroll:");
                    subjectArray.push(studentName);
                    console.log(`${studentName} has been enrolled in the subject.`);
                    break;
                case "B":
                    if (subjectArray.length === 0) {
                        console.log("No students currently enrolled in this subject.");
                    } else {
                        console.log("Currently enrolled students:", subjectArray.join(", "));
                        let studentNameToUnenroll = prompt("Enter the name of the student to unenroll:");
                        let index = subjectArray.indexOf(studentNameToUnenroll);
                        if (index !== -1) {
                            subjectArray.splice(index, 1);
                            console.log(`${studentNameToUnenroll} has been unenrolled from the subject.`);
                        } else {
                            console.log(`${studentNameToUnenroll} is not enrolled in this subject.`);
                        }
                    }
                    break;
                case "C":
                    break;
                case "D":
                    exitProgram();
                    return;
                default:
                    console.log("Invalid choice. Please select A, B, C, or D.");
            }
        }
    }
}

// Function to exit the program and print all students
function exitProgram() {
    console.log("Enlisted students per subject:");
    console.log("DSA:", DSA.join(", "));
    console.log("PL:", PL.join(", "));
    console.log("Networks:", Networks.join(", "));
    alert("Exiting the program. Check the console for the list of students.");
}

// Start the enrollment program
startEnrollment();
