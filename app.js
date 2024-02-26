let btn = document.querySelectorAll('button')
let inp = document.querySelector('input')

for (let i of btn) {
    i.addEventListener('click', function (e) {
        let txt = e.target.innerHTML;


        // reset 
        if (txt === 'AC') {
            inp.value = '';
        }
        else if (txt === '=') {
            try{
                inp.value = eval(inp.value);
            }
            catch(e){
                inp.value = 'not valid';
            }
        }
        else {
            inp.value += txt;
        }

    })
    setInterval(()=>{
        inp.value = '';
    },10000)
}