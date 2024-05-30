let header = document.createElement("div");
document.body.appendChild(header);
header.style.cssText = "margin:15px 0px 15px 5px;";

let Elzero = document.createElement("span");
header.appendChild(Elzero);
Elzero.appendChild(document.createTextNode("Elzero"));
Elzero.style.cssText = "font-size:20px; font-weight:bold; padding:5px; color:green; margin-right:78%;";

let nav = document.createElement("span");
header.appendChild(nav);
nav.style.cssText = "";
/////////////////////////////////////////////////////////
let home = document.createElement("span");
nav.appendChild(home);
home.appendChild(document.createTextNode("Home"));
home.style.marginRight = "20px";

let about = document.createElement("span");
nav.appendChild(about);
about.appendChild(document.createTextNode("About"));
about.style.marginRight = "20px";

let service = document.createElement("span");
nav.appendChild(service);
service.appendChild(document.createTextNode("Service"));
service.style.marginRight = "20px";

let contact = document.createElement("span");
nav.appendChild(contact);
contact.appendChild(document.createTextNode("Contact"));
contact.style.marginRight = "20px";
//////////////////////////////////////////////////////////////

let main = document.createElement("div");
main.style.cssText = "background:#EEE;height:750px;display:flex;flex-wrap:wrap;justify-content:space-around;align-items:center";
document.body.appendChild(main);

for (x=1;x<16;x++){
    let smallBox = document.createElement("div");
    main.appendChild(smallBox);
    smallBox.style.cssText = "width:32%;height:18%;background:white;display:flex;flex-wrap:wrap;justify-content:center;align-items:center;flex-direction:column";
    let num = document.createElement("div");
    num.style.cssText = "font-size: 30px;font-weight: bold;";
    smallBox.appendChild(num);
    num.appendChild(document.createTextNode(x));
    let word = document.createElement("div");
    word.style.cssText = "";
    smallBox.appendChild(word);
    word.appendChild(document.createTextNode("Product"));
}

let footer = document.createElement("div")
document.body.appendChild(footer);
footer.style.cssText = "background:green;display:flex;flex-wrap:wrap;justify-content:center;height:50px;align-items:center";

let text = document.createElement("div");
footer.appendChild(text);
text.appendChild(document.createTextNode("Copyright 2023"));
text.style.cssText = "font-size:20px;color:white";





