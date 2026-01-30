const students = [
    {
      id: 1,
      name: "Ali Khan",
      semesters: [
        { semester: 1, subjects: [
          { name: "Math", marks: 85 }, { name: "Physics", marks: 78 },
          { name: "Chemistry", marks: 82 }, { name: "English", marks: 88 },
          { name: "Computer", marks: 90 }
        ]},
        { semester: 2, subjects: [
          { name: "Math", marks: 80 }, { name: "Physics", marks: 75 },
          { name: "Statistics", marks: 70 }, { name: "English", marks: 85 },
          { name: "Programming", marks: 92 }
        ]},
        { semester: 3, subjects: [
          { name: "DSA", marks: 88 }, { name: "DBMS", marks: 84 },
          { name: "OS", marks: 79 }, { name: "SE", marks: 86 },
          { name: "Discrete Math", marks: 81 }
        ]},
        { semester: 4, subjects: [
          { name: "Web Dev", marks: 91 }, { name: "Networks", marks: 83 },
          { name: "AI", marks: 77 }, { name: "PM", marks: 85 },
          { name: "Ethics", marks: 89 }
        ]},
        { semester: 5, subjects: [
          { name: "React", marks: 93 }, { name: "Node", marks: 88 },
          { name: "Security", marks: 80 }, { name: "Project", marks: 95 },
          { name: "Entrepreneurship", marks: 87 }
        ]}
      ]
    },
  
    {
      id: 2,
      name: "Ahmed Raza",
      semesters: [
        { semester: 1, subjects: [
          { name: "Math", marks: 75 }, { name: "Physics", marks: 70 },
          { name: "Chemistry", marks: 72 }, { name: "English", marks: 80 },
          { name: "Computer", marks: 85 }
        ]},
        { semester: 2, subjects: [
          { name: "Math", marks: 78 }, { name: "Physics", marks: 73 },
          { name: "Statistics", marks: 69 }, { name: "English", marks: 82 },
          { name: "Programming", marks: 88 }
        ]},
        { semester: 3, subjects: [
          { name: "DSA", marks: 80 }, { name: "DBMS", marks: 77 },
          { name: "OS", marks: 74 }, { name: "SE", marks: 79 },
          { name: "Discrete Math", marks: 76 }
        ]},
        { semester: 4, subjects: [
          { name: "Web Dev", marks: 84 }, { name: "Networks", marks: 78 },
          { name: "AI", marks: 72 }, { name: "PM", marks: 81 },
          { name: "Ethics", marks: 83 }
        ]},
        { semester: 5, subjects: [
          { name: "React", marks: 86 }, { name: "Node", marks: 82 },
          { name: "Security", marks: 76 }, { name: "Project", marks: 90 },
          { name: "Entrepreneurship", marks: 84 }
        ]}
      ]
    },
  
    {
      id: 3,
      name: "Sara Malik",
      semesters: [
        { semester: 1, subjects: [
          { name: "Math", marks: 88 }, { name: "Physics", marks: 85 },
          { name: "Chemistry", marks: 84 }, { name: "English", marks: 90 },
          { name: "Computer", marks: 92 }
        ]},
        { semester: 2, subjects: [
          { name: "Math", marks: 86 }, { name: "Physics", marks: 83 },
          { name: "Statistics", marks: 80 }, { name: "English", marks: 89 },
          { name: "Programming", marks: 94 }
        ]},
        { semester: 3, subjects: [
          { name: "DSA", marks: 90 }, { name: "DBMS", marks: 88 },
          { name: "OS", marks: 85 }, { name: "SE", marks: 87 },
          { name: "Discrete Math", marks: 84 }
        ]},
        { semester: 4, subjects: [
          { name: "Web Dev", marks: 93 }, { name: "Networks", marks: 86 },
          { name: "AI", marks: 82 }, { name: "PM", marks: 88 },
          { name: "Ethics", marks: 91 }
        ]},
        { semester: 5, subjects: [
          { name: "React", marks: 95 }, { name: "Node", marks: 90 },
          { name: "Security", marks: 85 }, { name: "Project", marks: 97 },
          { name: "Entrepreneurship", marks: 89 }
        ]}
      ]
    },

  ];
  

  


let tableBody = document.getElementById("table-body");
let popContent = document.getElementById("pop-content")
console.log(popContent)




// const popOpen = ()=>{
//   alert("bjd")
//   console.log("ckll")
// }
function popOpen() {
  pop.style.display = "block";
}

students.map((e)=>{
    tableBody.innerHTML += `<tr>
    <td>${e.id}</td>
    <td>${e.name}</td>
    <td><button class="popOp">View Marksheet</button></td>
</tr>`
})

popContent.innerHTML += `<div>
<h4>Student Id: 01</h4>
<h4>Student Name: M.Fassam</h4>

</div>
<div class="mark">
<table>
    <tr>
        <th>Semester</th>
        <th>Subject</th>
        <th>Obtained Marks</th>
        <th>Total Marks</th>
        <th>Grade</th>
    </tr>
    <tr>
        <td>1</td>
        <td>English</td>
        <td>78</td>
        <td>100</td>
        <td>B+</td>
    </tr>
</table>

</div>`


let popUp = document.getElementsByClassName("popOp")
let pop = document.getElementById("showPop")


for (let i = 0; i < students.length; i++) {
  popUp[i].addEventListener("click", popOpen)
  
}

