const button = document.getElementById('button');
let text = document.getElementById('numbers');
const error = document.getElementById('error');
const initial= document.getElementById('initial');
const notacao = document.getElementById('notacao');
const input_bar = document.getElementById('bar')
button.addEventListener('click', () => {
 input_bar.style.display = 'none';
 
});

function display(num){
text.innerHTML += num;
}

function calculate(){
  try {
     text.innerText = eval(text.innerHTML);
  }
   catch (err) {
    console.log('erro')
    if(text.innerHTML === 169){
      notacao.textContent = 'parabens🎉'
      error.style.display = 'flex';
      text.pause()
    }
 }
}
 error.style.display = 'none';
 error.addEventListener('click', () => {
   error.style.display = 'none';
 })
function clr() {
  text.innerHTML = ''
}

function del() {
  text.innerHTML = text.innerHTML.slice(0, -1)
}
function telaInicial(){
  initial.style.display = 'none';
}
setTimeout(telaInicial, 3000)
