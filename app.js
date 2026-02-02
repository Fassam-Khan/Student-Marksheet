const studentData = [
  {
    id: "NB-2024-01",
    name: "Ayesha Khan",
    semesters: [
      [85, 78, 92, 88, 74], // Semester 1
      [77, 81, 85, 90, 88], // Semester 2
      [92, 88, 95, 82, 79], // Semester 3
      [70, 75, 80, 85, 90], // Semester 4
      [88, 92, 84, 86, 91]  // Semester 5
    ]
  },
  {
    id: "NB-2024-02",
    name: "Bilal Sheikh",
    semesters: [
      [65, 70, 68, 72, 60], 
      [68, 74, 70, 65, 66], 
      [72, 68, 75, 70, 71], 
      [60, 62, 65, 64, 68], 
      [70, 72, 74, 71, 69]
    ]
  },
  {
    id: "NB-2024-03",
    name: "Zainab Malik",
    semesters: [
      [95, 98, 92, 94, 96], 
      [90, 92, 95, 91, 89], 
      [98, 97, 99, 95, 94], 
      [92, 94, 91, 93, 95], 
      [96, 98, 97, 94, 92]
    ]
  },
  {
    id: "NB-2024-04",
    name: "Hamza Ahmed",
    semesters: [
      [45, 50, 48, 52, 40], 
      [55, 48, 50, 42, 45], 
      [48, 52, 55, 49, 50], 
      [52, 45, 47, 51, 48], 
      [50, 52, 54, 48, 46]
    ]
  },
  {
    id: "NB-2024-05",
    name: "Dania Yousaf",
    semesters: [
      [75, 78, 80, 72, 74], 
      [80, 82, 79, 77, 81], 
      [74, 76, 78, 80, 72], 
      [82, 85, 81, 79, 83], 
      [78, 80, 82, 84, 81]
    ]
  }
];


let tableBody = document.getElementById("table-body") 
let showPop = document.getElementById("showPop")
let studentID = document.getElementById("studentID")

const showPopUp = ()=>{
  showPop.style.display = "block"

}
const popCross = ()=>{
  showPop.style.display = "none"
  studentID.innerText = "Student ID: "
}




studentData.map((student,index)=>{
  return tableBody.innerHTML += `<td>${student.id}</td>
  <td>${student.name}</td>
  <td><button onclick="showPopUp(this)">View Marksheet</button></td>`

})

