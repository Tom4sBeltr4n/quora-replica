document.querySelector("button.dropdown-icon").addEventListener("click", event => showDropdown(event))

function showDropdown(event)
{
  let target = event.target;
  Array.from(target.parentNode.childNodes).filter(i=>i.nodeType === 1)
  console.log(Array.from(target.parentNode.childNodes).filter(i=>i.nodeType === 1))
  //.dropdown-container--user-dropdown
}
