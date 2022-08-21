let disableLoader = () => {
    document.getElementById("loader").style.visibility = "hidden";
    document.getElementsByTagName("body")[0].style.visibility = "visible";
}

let displayLoader = () => {
    document.getElementsByTagName("body")[0].style.visibility = "hidden";
    document.getElementById("loader").style.visibility  = "visible";
}


let displayHeaderTemplate = () => {
let templateHeader=`<a href="index.html"><span><img id="logo" src="./assests/images/logo.png" alt="logo"></span></a>
                <span><button type="button" class="btn btn-light" data-toggle="modal" data-backdrop="false" data-target="#exampleModal" id="loginbutton" onclick="mainLogin(event)">LOGIN</button>
                </span>

                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
          
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Please Login</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
          
                    <div class="modal-body" id="modalbody">
                      <form action="index.html" method="get">
                        <label for="uname">Username:</label>
                        <input type="text" id="uname" placeholder="Enter Username" required><br><br>
          
                        <label for="pw">Password:</label>
                        <input type="password" id="pw" placeholder="Enter Password" required><br><br>
                      </form>
          
                    </div>
          
                    <div class="modal-footer" id="modalfooter">
                      <button type="button" class="btn btn-primary" id="modalloginbtn" onclick="login(event)">Login</button>
                    </div>
                  </div>
                </div>
              </div>`;
     document.getElementById('1').innerHTML+=templateHeader;
};



let displayFooterTemplate = () => {
let templateFooter=`<div id="f1"><button type="button" class="btn btn-info" data-toggle="modal" data-backdrop="false" data-target="#exampleModal-2" id="loginbutton">
      Contact Us
      </button></div>
      <div id="f2"> © 2020 ROOM SEARCH PVT.LTD</div>
      <div id="f3">
      <a href="https://www.facebook.com" target="_blank"><img class="logos" src="./assests/images/facebook.png"></a>
      <a href="https://www.instagram.com" target="_blank"><img class="logos" src="./assests/images/instagram.png"></a>
      <a href="https://twitter.com" target="_blank"><img class="logos" src="./assests/images/twitter.png"></a>
      </div>
      <div class="modal fade" id="exampleModal-2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">

                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Get in touch</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div class="modal-body">
                    <form action="index.html" method="GET">
                        <div>
                        <span>Thank you for reaching out!!!</span><br>
                        <span>Please enter your email and we will get back to you.</span>
                        <br><br>
                        <label for="mailindex">Email:</label>
                        <input id="mailindex" type="email" placeholder="Enter your email" required> <br>
                        
                        </div>
                    </form>
                </div>

                <div class="modal-footer" >
                  <button type="button" class="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
          </div>`;
          document.getElementById('3').innerHTML=templateFooter;
};
displayLoader();
displayHeaderTemplate();
displayFooterTemplate();

let mainLogin = e => {
     if (localStorage.getItem('isLogin') === 'true') {
        localStorage.setItem('isLogin', 'false');
                location.reload();
         }
};

 let login = e => {
           
            localStorage.setItem('username', 'admin');
            localStorage.setItem('password', 'admin');
            localStorage.setItem('isLogin', 'false');

            e.preventDefault();
            let userElement = document.getElementById('uname');
            let passwordElement = document.getElementById('pw');

            if (
                userElement.value === localStorage.getItem('username') &&
                passwordElement.value === localStorage.getItem('password')
            ){
                localStorage.setItem('isLogin', 'true');
                alert('Successfully logged in!');
                let loginElement = document.getElementById('loginbutton')
                loginElement.dataset.target = '';
                loginElement.innerText = 'LOGOUT';
                location.reload();
            }
            else {
                alert('Incorrect credentials! Login failed!');
                userElement.value = '';
                passwordElement.value = '';
            }
 };

let isLogin = localStorage.getItem('isLogin');
let loginElement = document.getElementById('loginbutton');

let checkLogin = () => {
    if (!isLogin || isLogin === 'false') {
        localStorage.clear();
        loginElement.dataset.target = '#exampleModal';
        loginElement.innerText = 'LOGIN';
    } else if (isLogin === 'true') {
        loginElement.dataset.target = '';
        loginElement.innerText = 'LOGOUT';
    }
}

checkLogin();
