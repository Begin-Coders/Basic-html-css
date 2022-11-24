design = () =>
    document
        .getElementById("webpage-body-div")
        .setAttribute(
            "style",
            "display: flex; flex-direction: column; align-items: center;"
        );

let buttons = {
    button0: document.getElementById("show-site-0"),
    button1: document.getElementById("show-site-1"),
    button2: document.getElementById("show-site-2"),
    button3: document.getElementById("show-site-3"),
    button4: document.getElementById("show-site-4"),
    button5: document.getElementById("show-site-5"),
};

buttons.button0.onclick = () =>
    (document.getElementById("webpage-body-div").innerHTML = null);

buttons.button1.onclick = () => {
    document.getElementById(
        "webpage-body-div"
    ).innerHTML = `<iframe src='./pragadesh-login/bcoders.html'></iframe><button onclick="location.href='./pragadesh-login/bcoders.html'">Click to see in full screen</button>`;
    design();
};

buttons.button2.onclick = () => {
    document.getElementById(
        "webpage-body-div"
    ).innerHTML = `<iframe src='./kirubs-login/kirubs.html'></iframe><button onclick="location.href='./kirubs-login/kirubs.html'">Click to see in full screen</button>`;
    design();
};

buttons.button3.onclick = () => {
    document.getElementById(
        "webpage-body-div"
    ).innerHTML = `<iframe src='./dhinagar-login/index.html'></iframe><button onclick="location.href='./dhinagar-login/index.html'">Click to see in full screen</button>`;
    design();
};

buttons.button4.onclick = () => {
    document.getElementById(
        "webpage-body-div"
    ).innerHTML = `<iframe src='./madhan-login/index.html'></iframe><button onclick="location.href='./madhan-login/index.html'">Click to see in full screen</button>`;
    design();
};

buttons.button5.onclick = () => {
    document.getElementById(
        "webpage-body-div"
    ).innerHTML = `<iframe src='./tamz-login/index.html'></iframe><button onclick="location.href='./tamz-login/index.html'">Click to see in full screen</button>`;
    design();
};
