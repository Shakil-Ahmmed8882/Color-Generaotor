//1; call main function when window finishes loading
window.onload = () => {
  main();
};


 //step 2: Collect all necessary references  
  const root = document.body;
  const btn = document.getElementById("ColorGenerator");
  const output = document.getElementById('output')
  const copyBtn = document.getElementById('copyBtn')
  // toas message
  let message;

  //step 4: defining a blueprint for creating element
function pageEle(parent,t,html,c){
  const ele = document.createElement(t)
  ele.innerHTML = html
  ele.className += c
  //return it where it's called
  return parent.appendChild(ele)
}
function main() {
      btn.addEventListener('click',function(){
            //get the genrated color add in root background
            const color = generateRGBcolor()
            console.log(color)
            root.style.backgroundColor = color
            //demonstrante the color code in the input field
            output.value = color
      })
}

 //step 3: Random rgb color genrator function
function generateRGBcolor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}




 //step 4: copy the color code when copy button is clicked
copyBtn.addEventListener('click',function(){
  navigator.clipboard.writeText(output.value)
  showClipboard(`${output.value} copied`)
  
  if(message !== null){
    message = null
  }
})

 // step 5: let the user know it's copied
function showClipboard(msg){
   message = pageEle(root,'div',msg,'toast-message slide-in')

  message.addEventListener('click', function(){
    message.classList.remove('slide-in')
    message.classList.add('slide-out')
    
    message.addEventListener('animationend' ,function(){
      message.remove()
      message = null
    })

  });
};