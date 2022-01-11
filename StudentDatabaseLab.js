




function GetStudentInfo()
{        
    let students = [
        student1 = {firstName:"John", lastName:"Doe", favFood:"Pizza", hometown:"Fowlerville"},
        student2 = {firstName:"Billy", lastName:"Bob", favFood:"Pasta", hometown:"Boston"},
        student3 = {firstName:"Trisha", lastName:"Timmons", favFood:"Bread", hometown:"Detroit"},
        student4 = {firstName:"Jessica", lastName:"Lewandowski", favFood:"Caviar", hometown:"Paris"},
    ]   
    
    let search = prompt("Please input a student name");
    for (i = 0; i <= students.length; i++) {
        if (search.toLowerCase() === students[i].firstName.toLowerCase()) {
            search = students[i];
            let knowMore = prompt("What would you like to know about " + search.firstName +"?");
        }
    }
    let nextQ = prompt("What would you like to know about " + search[i].firstName + "?");
    if (nextQ.toLowerCase() === "hometown")
        {
            console.log(search.firstName + " is from " + search.hometown + ".")
        }
        else if (nextQ.toLowerCase() === "favorite food")
        {
            console.log(search.firstName + "'s favorite food is " + search.favFood + ".")
        }
        else
        {
            console.log("Sorry, we didn't understand that. Try 'hometown' or 'favorite food.'")
        }
}