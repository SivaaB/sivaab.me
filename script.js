const projects = [
    {
        name: "YTBC",
        description: "",
        image: "https://i.imgur.com/9x5I6Z6.png" ,
        link: ""
    },
    {
        name: "Disv+",
        description: "",
        image: "https://i.imgur.com/9x5I6Z6.png",
        link: ""
    },
    {
        name: "Partners for Patients",
        description: "",
        image: "https://i.imgur.com/kPCjLjK.png",
        link: ""
    },
    {
        name: "EM",
        description: "",
        image: "https://i.imgur.com/YWNf6cz.png",
        link: ""
    },
    {
        name: "MERGE",
        description: "",
        image: "https://i.imgur.com/yfXq4aY.png",
        link: ""
    },
    {
        name: "Erevna",
        description: "",
        image: "",
        link: ""
    },
    {
        name: "PFP",
        description: "",
        image:"https://i.imgur.com/RR2rEan.png",
        link: ""

    },
    {
        name: "AlphaStart",
        description: "",
        image: "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/505/759/datas/medium.png",
        link: ""
    },
    {
        name: "NC+",
        description: "",
        image: "https://i.imgur.com/gWxQiQB.png",
        link: ""
    },
    
    {
        name: "TAM",
        description: "",
        image: "https://i.imgur.com/9x5I6Z6.png",
        link: ""
    },
    {
        name: "TxLR",
        description: "", 
        image: "https://i.imgur.com/Rw19KGO.png",
        link: ""
    },
    {
        name: "Tesseract",
        description: "",
        image: "https://i.imgur.com/Ay6yWtA.png",
        link: ""
    }
];




document.querySelector('.container').innerHTML=`${
    projects.map(project => {
        if (project.name==="Harry Potter Redesign"){
            return (
                `
                <a target="__blank" href="${project.link}">
                <div class="card" id="hpbox" style="background-image:url(./projects/hpredes/cover.png) ">
                    <div class="text" id="${project.name}text">
                        <h1> ${project.name} </h1>
                        <p>  ${project.description} </p>
                    </div>
                </div> </a>`
            )
        }
        else{
        return (`
            <a target="__blank" href="${project.link}">
            <div class="card" id="${project.name}box" style="background-image:url(./projects/${project.name.toLowerCase()}/cover.png) ">
                <div class="text" id="${project.name}text">
                    <h1> ${project.name} </h1>
                    <p>  ${project.description} </p>
                </div>
            </div> </a>`)
        }
    }).join('')
}`;


function navopen(){
    document.querySelector('.navmob').style.display = 'block'   
}
function navclose(){
    document.querySelector('.navmob').style.display = 'none'  

}

document.querySelector('#bars').addEventListener('click', navopen)
document.querySelector('#cross').addEventListener('click', navclose)

document.querySelectorAll('.navel').forEach(
    navel=>{
        navel.addEventListener('click', navclose)
        }
    )

const expand = document.querySelector(".expand")

// expand.onmouseover = ()=>{
//     document.querySelector("#expand-icon").style.transform = "translateY(10px)"
//  }
// expand.onmouseout = ()=>{
//     document.querySelector("#expand-icon").style.transform = "translateY(-10px)"
// }
document.getElementsByTagName("form")[0].setAttribute("action", "https://formspree.io/f/xvodrwln")


const skills = [
    {
        skill: "bruh",
        desc: "5 stars"
    }
]

const devpostIcon = document.querySelector('.devpost')

devpostIcon.onmouseover(
    devpostIcon.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 226 226" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,226v-226h226v226z" fill="none"></path><g fill="#ff6b11"><path d="M56.5,18.83333l-50.61458,94.16667l50.61458,94.16667h113l51.38704,-94.16667l-51.38704,-94.16667zM75.33333,65.91667l48.37077,0.07357c12.58007,1.76563 36.37923,13.79394 36.37923,47.00976c0,33.21582 -23.79916,45.24415 -36.37923,46.97298l-0.66211,0.11035h-47.70866zM94.16667,84.75v56.5h27.44076c3.45768,-0.6989 19.64257,-5.2233 19.64257,-28.25c0,-22.91634 -15.96419,-27.51432 -19.67936,-28.25z"></path></g></g></svg>'
);

devpostIcon.onmouseout(
    devpostIcon.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 226 226"  style="transform: translateY(5px); fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,226v-226h226v226z" fill="none"></path><g fill="#ffffff"><path d="M56.5,18.83333l-50.61458,94.16667l50.61458,94.16667h113l51.38704,-94.16667l-51.38704,-94.16667zM75.33333,65.91667l48.37077,0.07357c12.58007,1.76563 36.37923,13.79394 36.37923,47.00976c0,33.21582 -23.79916,45.24415 -36.37923,46.97298l-0.66211,0.11035h-47.70866zM94.16667,84.75v56.5h27.44076c3.45768,-0.6989 19.64257,-5.2233 19.64257,-28.25c0,-22.91634 -15.96419,-27.51432 -19.67936,-28.25z"></path></g></g></svg>'
);