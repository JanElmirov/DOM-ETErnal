	let h1 = document.createElement('h1')
document.body.append(h1)
const text = `<h1> Let's Take </h1>`
h1.innerHTML = text
h1.style.cssText = ` margin-left: 720px;
font-size: 48px; `


let div  =document.createElement('div')
document.body.append(div)

div.style.cssText = 'width: 600px; border: 3px solid #000; margin-left: 635px; margin-top: 60px;'



let p = document.createElement('p')
document.body.append(p)
const para = `<p>Your Name</p>`
p.innerHTML = para
p.style.cssText = 'font-size: 14px; margin-left: 635px;'


let div2 = document.createElement('div')
document.body.append(div2)

div2.style.cssText = 'width: 600px; border: 3px solid #000; margin-left: 635px; margin-top: 84px '

let p2 = document.createElement('p')
document.body.append(p2)
const para2 = `<p>Your E-mail</p>`
p2.innerHTML = para2
p2.style.cssText = 'font-size: 14px; margin-left: 635px;'



let btn = document.createElement('button')
document.body.append(btn)
const btnText = `SEND MESSAGE`
btn.innerHTML = btnText
btn.style.cssText = `	border-radius: 5px; background: #CA0000;width: 230px;height: 57px; margin-left: 820px; margin-top: 64px; border: none; outline: none; font-size: 18px; color: #FFFFFF; `

