let data = [
    {
        name: "Shekhar",
        roll: 2514,
        enroll: 97397979173,
        marks: 82,

    },
    {
        name: "Sarthak",
        roll: 2503,
        enroll: 24343527669,
        marks: 69,
    },
    {
        name: "Chaitali",
        roll: 2502,
        enroll: 24344466529,
        marks: 88,
    },
    {
        name: "Sonakshi",
        roll: 2534,
        enroll: 243288584859,
        marks: 87,
    },
    {
        name: "Shoaib",
        roll: 2235,
        enroll: 247894366285,
        marks: 72,
    },
    {
        name: "Shreyas",
        roll: 2519,
        enroll: 24547434878,
        marks: 70,
    },
    {
        name: "JOKARE",
        roll: 2511,
        enroll: 24376799244,
        marks: 81,
    }
]
var i = 0;
function create_tags() {
    if (i < data.length) {
        let tr = document.createElement("tr");
        let tbody = document.getElementById("tb");
        tbody.appendChild(tr);
        for (j = 0; j < 5; j++) {
            let td = document.createElement("td");
            tr.appendChild(td);
        }
        //console.log(tr);    
        let td = tr.querySelectorAll('td');
        let name = document.createTextNode(data[i].name);
        let roll = document.createTextNode(data[i].roll);
        let enroll = document.createTextNode(data[i].enroll);
        let marks = document.createTextNode(data[i].marks);
        let sr = document.createTextNode(i + 1);
        td[0].appendChild(sr);
        td[1].appendChild(name);
        td[2].appendChild(roll);
        td[3].appendChild(enroll);
        td[4].appendChild(marks);
        i++;        
        document.getElementById("p1").innerHTML= (i) + " rows returned ";
    }
    else
    {
        alert("Data over");
    }
}



