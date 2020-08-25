// JSON --> Java Script Object Notation

// In Python and Javascript --> details is called in python as 'dictionary' as in Javascript as 'Object' and courses is called in python as 'List' as in Javascript as 'Array'.


// XMLHttpRequest

function jsonloading(file,callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=()=>{
        if (xhr.readyState == "4" && xhr.status == "200") {
        // if (xhr.readystate === 4 && xhr.status === 200) {
            callback(xhr.responseText)
        }
    }
    xhr.send();
}

jsonloading("data.json",(text)=>{
    let d = JSON.parse(text);
    console.log(d);
    APSSDC(d.details);
    Trainers(d.trainers);
})

var main = document.querySelector(".main");

function APSSDC(react) {

    var p = document.createElement('img');
    p.src = react.picture;
    p.alt = 'Profile-pic';
    main.appendChild(p) 

    var name = document.createElement('h1');
    name.textContent = react.name;
    main.appendChild(name);

    var age = document.createElement('p');
    age.textContent = react.age;
    age.setAttribute('id','age');
    main.appendChild(age);

    var h1 = document.createElement('h2');
    h1.textContent = 'APSSDC Courses ::)';
    main.appendChild(h1);
    h1.appendChild(document.createElement('hr'));
    var ul = document.createElement('ul');    // --> Simply to have an ol we can changer ul to ol tag. Note not to change any variables.
    for (let index = 0; index < react.courses.length; index++) {
        var li = document.createElement('li')
        li.textContent = react.courses[index];
        ul.appendChild(li)
    }
    main.appendChild(ul);
}

function Trainers(s) {
    var table = document.createElement('table');
    var row = '';
    for (let index = 0; index < s.length; index++) {
        row += '<tr><td>' + s[index].name + '</td><td>' + s[index].experience + '</td><td>' + s[index].designation + '</td></tr>'
    }
    table.innerHTML = row;
    main.appendChild(table);
}