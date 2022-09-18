const listProj = [
    {nome: "Mentalista", img: "https://i.ibb.co/3MmMDCC/mentalista-Easy-Resize-com.jpg", link:"https://codepen.io/gabrielmellos/full/MWGaMqX"},
    {nome: "Calculadora", img: "https://i.ibb.co/XX4kP7p/dois-Easy-Resize-com.jpg", link:"https://codepen.io/gabrielmellos/full/ZEoGYeY"},
    {nome: "Placar", img: "https://i.ibb.co/Y36GZJp/tr-s-Easy-Resize-com.jpg", link:"https://codepen.io/gabrielmellos/full/abGBbod"},
    {nome: "Conversor", img: "https://i.ibb.co/828wH69/quatro-Easy-Resize-com.jpg", link:"https://codepen.io/gabrielmellos/full/rNvOxJV"},
    {nome: "AluraFlix", img: "https://i.ibb.co/yqj5wZJ/cinco-Easy-Resize-com.jpg", link:"https://codepen.io/gabrielmellos/full/yLjMwGw"},
    {nome: "SuperTrunfo", img: "https://i.ibb.co/3MHZDBc/seis-Easy-Resize-com.jpg", link:"https://codepen.io/gabrielmellos/pen/eYrBOaq"}
]

const projetos = document.getElementById("projetos")

for(var i = 0; i<listProj.length; i++){
    projetos.insertAdjacentHTML("afterbegin", `
        <a href="${listProj[i].link}" target="_blank" class="container-proj" id="proj1" style="background-image: url(${listProj[i].img})">
            <div class="background">
                <p>${listProj[i].nome}</p>
            </div>
        </a>
    `)
}

function mudarTema() {
    document.body.classList.toggle("dark");
}