let info = document.querySelector(".info");
let parent = document.querySelector(".parent");

let add = document.getElementById("add")

// let arr = [];

add.onclick = () => {
  add.classList.toggle("adding")
  add.parentElement.classList.toggle("adding")
  getInput()
}
let arr = [];
function checkLocalStorage() {
  if (JSON.parse(localStorage.getItem("links"))) {
    arr = [...JSON.parse(localStorage.getItem("links"))]
  }
}

function getInput() {
  let div = document.createElement("div")
  div.className = "link";
  //
  let input = document.createElement("input")
  input.value = "https://";
  input.id = "thing";
  //
  input.addEventListener("change", () => {
    checkLocalStorage()
    let link = {
      name: input.value,
      complete: false,
      id: Date.now(),
    }
    localStorage.setItem("links", JSON.stringify([...arr, link]))
    checkLocalStorage()
  })

  //
  let buttonDelete = document.createElement("button")
  buttonDelete.style.cursor = "pointer";
  buttonDelete.onclick = function () {
    parent.innerHTML = "";
    add.classList.toggle("adding")
    add.parentElement.classList.toggle("adding")
    link()
    this.parentElement.remove()
  }
  buttonDelete.id = "btn";
  buttonDelete.appendChild(document.createTextNode("Save"))
  div.appendChild(input)
  div.appendChild(buttonDelete)
  parent.appendChild(div)
  info.appendChild(parent)
}
function handleDelete(id) {
  let arr = JSON.parse(localStorage.getItem("links"));
  arr = arr.filter(e => {
    return e.id !== id;
  })
  localStorage.setItem("links", JSON.stringify(arr))
}

function link() {
  // if (document.getElementById("linkId")) {
  //   document.getElementById("linkId").remove()
  // }
  // let linkDiv = document.createElement("div")
  // parent.id = "linkId";
  checkLocalStorage();
  for (let i = 0; i < arr.length; i++){
    let div = document.createElement("div");
    div.className = "linkDiv";
    // div.id = `Link`;
    //
    let link = document.createElement("a");
    link.href = arr[i].name
    link.appendChild(document.createTextNode(arr[i].name))
    // link.appendChild(document.createTextNode(arr[i].id))
    link.style = "font-size : 13px; width: 100%; display: block; color: #000;";
    //
    let button = document.createElement("i");
    button.className = "fa-solid fa-trash-can Delete delIcon"
    button.onclick = () => {
      handleDelete(arr[i].id)
      button.parentElement.remove();
    };
    // button.appendChild(document.createTextNode("i"))
    div.appendChild(link)
    div.appendChild(button)
    parent.appendChild(div)
    // linkDiv.appendChild(div)
    info.appendChild(parent)
  }
}
link()

// add.onclick = () => {
//   vari++;
//   addInput();
//   add.parentElement.classList.toggle("adding");
//   add.classList.toggle("adding");
// };
// let vari = 0;
// function addInput() {
//   //.create inf parent
//   let divTitle = document.createElement("div");
//   divTitle.className = "input";
//   // create input
//   let input = document.createElement("input");
//   input.placeholder = "https://";
//   input.type = "text";
//   // input id
//   input.id = "thing";
//   // create button

//   let btnSave = document.createElement("button");
//   btnSave.className = "pointer";
//   btnSave.id = "btn";
//   // create h3
//   // let h3 = document.createElement("h3");
//   // h3.id = "word";
//   // let h3T = document.createTextNode("a");
//   // h3.appendChild(h3T)
//   // let arr = []
//   // let obj = {
//   //   link: input.value
//   // }
//   // arr.push(obj)

//   // input.addEventListener("change", () => {
//   //   localStorage.getItem("val")
//   // })

//   // input.oninput = () => {
//   //   localStorage.setItem("val", input.value)
//   // }
//   btnSave.innerHTML = "Save";
//   divTitle.appendChild(input);
//   divTitle.appendChild(btnSave);
//   // parent.appendChild(info)
//   parent.appendChild(divTitle);
//   function addLinks() {
//     let div = document.createElement("div");
//     div.style =
//       "margin: 10px 0 ; border-bottom: 1px solid #000; display: flex; align-items: center; padding-bottom: 5px;";
//     div.id = `Link`;
//     //
//     let button = document.createElement("button");
//     button.style =
//       "background: red; padding: 5px; border-radius: 7px; cursor: pointer; font-size: 10px; color: #fff;";
//     button.onclick = () => {
//       button.parentElement.remove();
//     };
//     let buttonDelete = document.createTextNode("Delete");
//     let link = document.createElement("a");
//     link.style = "font-size : 13px; width: 100%; display: block; color: #000;";
//     link.href = localStorage.getItem("val");

//     let linkT = document.createTextNode(localStorage.getItem("val"));
//     link.appendChild(linkT);
//     button.appendChild(buttonDelete);
//     div.appendChild(link);
//     div.appendChild(button);
//     parent.appendChild(div);
//   }
//   btnSave.onclick = () => {
//     let arr = []
//     let obj = {
//       link: input.value
//     }
//     arr.push(obj)
//     console.log(arr);
//     localStorage.setItem("val", arr)
//       addLinks();
//       // console.log(links);
//       add.parentElement.classList.toggle("adding");
//       add.classList.toggle("adding");
//       console.log("Clicked");
//       btnSave.parentElement.remove();
//     // btnSave
//   };
// }
