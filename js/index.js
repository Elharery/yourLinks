let info = document.querySelector(".info")
// let inp = document.querySelector(".inp")
// const btn = document.getElementById("btn")
// const a = document.getElementById("a")
// const input = document.getElementById("thing")
// const info = document.querySelector(".link")
// const btn = document.getElementById("btn")
// let one = document.querySelector(".first")
// let two = document.querySelector(".two")
// let three = document.querySelector(".three")
// let four = document.querySelector(".four")
let vari = 0;
function addInput() {
  //.create inf parent
  let parent = document.createElement("div")
  parent.className = "information"
    // create input
  let input = document.createElement("input")
  input.value = "https://";
    input.type = "text";
    // input id
    input.id = "thing";
    // create button
    let btn = document.createElement("button");
    btn.className = "pointer";
    btn.id = "btn";
    // create h3
    // let h3 = document.createElement("h3");
    // h3.id = "word";
    // let h3T = document.createTextNode("a");
    // h3.appendChild(h3T)
    btn.innerHTML = "Save";
    parent.appendChild(input)
    parent.appendChild(btn)
  // parent.appendChild(info)
  info.appendChild(parent)
  btn.onclick = () => {
    if (thing.value) {
      window.localStorage.setItem(`input-${vari}`, thing.value)
      //
      //
      let div = document.createElement("div")
      div.style = "margin: 10px 0 ; border-bottom: 1px solid var(--mainColor); padding-bottom: 5px;"
      div.id = `input-1`;
      let link = document.createElement("a");
      link.style = "font-size : 13px; width: 100%; display: block;"
      link.href = thing.value;
      let linkT = document.createTextNode(thing.value);
      link.appendChild(linkT)
      div.appendChild(link)
      parent. before(div)
        btn.parentElement.remove()
      }
    }
  }
add.onclick = () => {
  // info.style.display = "flex";
  vari++;
  addInput()
} 
// btn.onclick = () => {
//   if (input.value !== "") {
//     if (one.innerHTML == "") {
//       one.innerHTML = input.value;
//       one.href = input.value;
//       one.classList.add("links");
//       window.localStorage.setItem("one" , one.innerHTML)
//     } else if (two.innerHTML == "") {
//       two.innerHTML = input.value;
//       two.href = input.value;
//       two.classList.add("links")
//       window.localStorage.setItem("two" , two.innerHTML)
//     }
//     else if (three.innerHTML == "") {
//       three.innerHTML = input.value;
//       three.href = input.value;
//       three.classList.add("links")
//       window.localStorage.setItem("three" , three.innerHTML)
//     }
//     else if (four.innerHTML == "") {
//       four.innerHTML = input.value;
//       four.href = input.value;
//       four.classList.add("links")
//       window.localStorage.setItem("four" , four.innerHTML)
//     } else {
//       alert("Error")
//     }
//     input.value = "";
//     // location.reload()
//     btn.parentElement.parentElement.remove();
//   }
// }

// if (window.localStorage.getItem("one")) {
//   one.innerHTML = localStorage.getItem("one");
//   one.href = localStorage.getItem("one");
//   one.classList.add("links");
// }

// if (window.localStorage.getItem("two")) {
//   two.innerHTML = localStorage.getItem("two");
//   two.href = localStorage.getItem("two");;
//   two.classList.add("links");
// }
// if (window.localStorage.getItem("three")) {
//   three.innerHTML = localStorage.getItem("three");
//   three.href = localStorage.getItem("three");
//   three.classList.add("links");
// }
// if (window.localStorage.getItem("four")) {
//   four.innerHTML = localStorage.getItem("four");
//   four.href = localStorage.getItem("four");
//   four.classList.add("links");
// }

// // add.addEventListener("click", ()=> {
// //   addInput()
// // }  )
