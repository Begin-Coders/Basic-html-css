design = () => document.getElementById('webpage-body-div').setAttribute('style', 'display: flex; flex-direction: column; align-items: center;')

let buttons = {
    button0: document.getElementById('show-site-0'),
    button1: document.getElementById('show-site-1'),
    button2: document.getElementById('show-site-2'),
    button3: document.getElementById('show-site-3')
}

buttons.button0.onclick = () => document.getElementById('webpage-body-div').innerHTML = null
buttons.button1.onclick = () => {
    document.getElementById('webpage-body-div').innerHTML = `<iframe src='./pragadesh-login/bcoders.html'></iframe><button onclick="location.href='./pragadesh-login/bcoders.html'">Click to see in full screen</button>`
    design()
}
buttons.button2.onclick = () => {
    document.getElementById('webpage-body-div').innerHTML = `<iframe src='./kirubs-login/kirubs.html'></iframe><button onclick="location.href='./kirubs-login/kirubs.html'">Click to see in full screen</button>`
    design()
}

buttons.button3.onclick = () => {
    document.getElementById('webpage-body-div').innerHTML = `<iframe src='./dhinagar-login/index2.html'></iframe><button onclick="location.href='./dhinagar-login/index2.html'">Click to see in full screen</button>`
    design()
}