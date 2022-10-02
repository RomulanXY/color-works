const 
hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"],
btns = document.querySelectorAll('.btn'),
containers = document.querySelectorAll('.container'),
link = document.querySelector('a'),
h4 = document.querySelector('h4'),
color = document.querySelector('.color'),
body = document.body;

let newColor = [],
hexColor = '#',
index = 0;


const 
getRandomNumber = () => Math.floor(Math.random() * hex.length),
changeColor = (val) => {
    for (let i = 1; i < btns.length; i++) {
        btns[i].classList.add('border');
    };
    body.style.backgroundColor = val;
    color.textContent = val;
    color.style.color = val;
},
goToHex = () => {
    containers[0].classList.add('d-none');
    containers[1].classList.remove('d-none');
},
goToHome = () => {
    for (let i = 1; i < btns.length; i++) {
        btns[i].classList.remove('border');
    };
    body.style.backgroundColor = 'transparent';
    containers[1].classList.add('d-none');
    containers[0].classList.remove('d-none');
};


h4.addEventListener('click', () => goToHome());
link.addEventListener('click', () => goToHex());

btns.forEach(btn => {
    btn.addEventListener('click', (e)=>{
        switch (e.target) {
            case btns[0]:
                goToHex();
                break;
            case btns[1]:
                goToHome();
                break;
            case btns[2]:
                if(index > 0){
                    index -= 1;
                    changeColor(newColor[index]);
                };
                break;
            case btns[3]:
                for (let i = 0; i < 6; i++) hexColor += hex[getRandomNumber()];
                newColor.push(hexColor);
                index = newColor.length - 1;
                changeColor(hexColor);
                hexColor = '#';
                break;
            case btns[4]:
                if(index < newColor.length - 1){
                    index += 1;
                    changeColor(newColor[index]);
                }
            default:
                break;
        };
    });
});