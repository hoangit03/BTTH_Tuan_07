
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
var btn = $$('span')
var value = $('#value')
console.log(value)
for(let i = 0;i < btn.length; i++){
    btn[i].addEventListener("click",function(){
        if(this.innerHTML == "="){
            value.innerHTML = eval(value.innerHTML)
        }
        else{
            if(this.innerHTML == "AC"){
                value.innerHTML = ""
            }
            else{
                value.innerHTML += this.innerHTML
            }
        }
    })
}