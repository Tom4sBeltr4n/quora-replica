document.querySelector("button.dropdown-icon").addEventListener("click", event => showDropdown(event))

function showDropdown(event)
{
  let target = event.target;
  console.log("",Array.from(target.parentNode.childNodes).filter(i=>i.nodeType === 1).filter(i=>{return Array.from(i.classList).includes('dropdown-container--user-dropdown')})[0])
  Array.from(target.parentNode.childNodes).filter(i=>i.nodeType === 1).filter(i=>{return Array.from(i.classList).includes('dropdown-container--user-dropdown')})[0].style.setProperty("display", "block");;//remember to give return value to arrow functions
  //.dropdown-container--user-dropdown
}
