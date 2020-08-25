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

jsonloading("Resume.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
    info(data.info);
    hobbies(data.Hobbies);
    languages(data.Languages_Known);
    careerO(data.Career_Objective);
    education(data.Education_Details);
    careerD(data.Career_Development);
    awards(data.Awards_and_Achievements);
})

var main = document.querySelector(".main");

var sidebarC = document.querySelector(".sidebarContent");
var mainbarC = document.querySelector(".mainbarContent");

function info(r) {
    var d = document.createElement("div");
    sidebarC.appendChild(d);
    main.appendChild(sidebarC);
    d.classList.add("info");

    var k = document.createElement("h1");
    k.textContent = "Info";
    d.appendChild(k);

    var i = document.createElement('img');
    i.src = r.image;
    i.alt = "Profile Picture";
    d.appendChild(i);

    var name = document.createElement("h5");
    name.textContent = r.Name;
    d.appendChild(name);

    var email = document.createElement("h5");
    email.textContent = r.Email;
    d.appendChild(email);

    var mobile = document.createElement("h5");
    mobile.textContent = r.Phone_Number;
    d.appendChild(mobile);
    
    d.appendChild(document.createElement("br"));
    d.appendChild(document.createElement("br"));
    d.appendChild(document.createElement("br"));
    d.appendChild(document.createElement("br"));
    d.appendChild(document.createElement("br"));
}

function hobbies(h) {

    var d = document.createElement("div");
    sidebarC.appendChild(d);
    main.appendChild(sidebarC);
    d.classList.add("Hobbies");

    var k = document.createElement("h1");
    k.textContent = "Hobbies";
    d.appendChild(k);

    d.appendChild(document.createElement("hr"));
    d.appendChild(document.createElement("hr"));

    var ul = document.createElement("ul");
    for(var i = 0; i < h.length; i++) {
        var li = document.createElement("li");
        li.textContent = h[i];
        ul.appendChild(li);
    }
    d.appendChild(ul);

    d.appendChild(document.createElement("br"));
    d.appendChild(document.createElement("br"));
    d.appendChild(document.createElement("br"));
    d.appendChild(document.createElement("br"));
    d.appendChild(document.createElement("br"));

}

function languages(l) {
    var d = document.createElement("div");
    sidebarC.appendChild(d);
    main.appendChild(sidebarC);
    d.classList.add("Languages_Known");

    var k = document.createElement("h1");
    k.textContent = "Languages Known";
    d.appendChild(k);

    d.appendChild(document.createElement("hr"));
    d.appendChild(document.createElement("hr"));

    var ul = document.createElement("ul");
    for(var i = 0; i < l.length; i++) {
        var li = document.createElement("li");
        li.textContent = l[i];
        ul.appendChild(li);
    }
    d.appendChild(ul);
}

function careerO(o) {
    var d = document.createElement("div");
    mainbarC.appendChild(d);
    main.appendChild(mainbarC);
    d.classList.add("Career_Objective");

    var k = document.createElement("h1");
    k.textContent = "Career Objective";
    d.appendChild(k);

    d.appendChild(document.createElement("hr"));
    d.appendChild(document.createElement("hr"));

    var p = document.createElement("p");
    p.textContent = o.para;
    d.appendChild(p);

    d.appendChild(document.createElement("br"));
    d.appendChild(document.createElement("br"));
}

function education(e) {
    var d = document.createElement("div");
    mainbarC.appendChild(d);
    main.appendChild(mainbarC);
    d.classList.add("Education_Details");

    var k = document.createElement("h1");
    k.textContent = "Education Details";
    d.appendChild(k);

    d.appendChild(document.createElement("hr"));
    d.appendChild(document.createElement("hr"));

    var table=document.createElement('table');
    var row = "";
    for(var i = 0; i < e.length; i++) {
        row += "<tr><td>" + e[i].SNO + "</td><td>" + e[i].Name_of_the_Institution + "</td><td>" + e[i].Branch + "</td><td>" + e[i].Start_Date + "</td><td>" + e[i].End_Date + '</td></tr>';
    }
    table.innerHTML=row;
    d.appendChild(table);
}
function careerD(D) {
    var d = document.createElement("div");
    mainbarC.appendChild(d);
    main.appendChild(mainbarC);
    d.classList.add("Career_Development");

    var k = document.createElement("h1");
    k.textContent = "Career Development";
    d.appendChild(k);

    d.appendChild(document.createElement("hr"));
    d.appendChild(document.createElement("hr"));

    var p = document.createElement("p");
    p.textContent = D.para;
    d.appendChild(p);

    d.appendChild(document.createElement("br"));
    d.appendChild(document.createElement("br"));
}

function awards(a) {
    var d = document.createElement("div");
    mainbarC.appendChild(d);
    main.appendChild(mainbarC);
    d.classList.add("Awards_and_Achievements");

    var k = document.createElement("h1");
    k.textContent = "Awards and Achievements";
    d.appendChild(k);

    d.appendChild(document.createElement("hr"));
    d.appendChild(document.createElement("hr"));

    var p = document.createElement("p");
    p.textContent = a.para;
    d.appendChild(p);

    d.appendChild(document.createElement("br"));
    d.appendChild(document.createElement("br"));
}