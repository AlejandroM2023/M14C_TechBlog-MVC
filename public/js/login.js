const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');
const messages1 = document.getElementById('errors1');
const messages2 = document.getElementById('errors2');

async function login(event) {
    event.preventDefault();
    const email = document.getElementById('email-login').value.trim();
    const password = document.getElementById('password-login').value.trim();
    if(email && password){
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
          });
        if(response.ok){
            document.location.replace('/');
        }else{
            messages1.innerHTML ='';
            messages1.innerHTML ='email or password is wrong'
        }


    }else{
        messages1.innerHTML ='';
        messages1.innerHTML ='email or password is wrong'
    }
}


loginBtn.addEventListener('click',login)