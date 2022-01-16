let mtnimg = document.querySelectorAll("img[src='https://mdbootstrap.com/img/Photos/Slides/img%20(144).jpg']")[0]

mtnimg.addEventListener("click", logStatement)

function logStatement() {
    console.log('mountain picture clicked')
}

let bluebox = document.querySelector('div.card-body.text-white.text-center')

bluebox.addEventListener("mouseover", () => { console.log('hovered over')})

let allimages = document.querySelectorAll("img")

allimages.forEach((img) => {

    img.addEventListener("click", logStatement)

    function logStatement() {
    console.log('image clicked')
    }
})
