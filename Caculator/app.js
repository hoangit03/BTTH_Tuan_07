const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


let btn = $$('span')
let value = $('#value')

for(let i = 0; i<btn.lenght;i++){
    btn[i].addEventListener("click", function(){
        if(this.innerHTML == "="){
            value.innerHTML = eval(value.innerHTML);
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