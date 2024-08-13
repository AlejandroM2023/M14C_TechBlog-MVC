const logoutBtn = document.getElementById('logoutBtn');

async function logout() {
    const response = await fetch('/api/user/logout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
    })
    if(response.ok){
        document.location.replace('/');
    }else {
        alert('Something went wrong.');
      }
}

logoutBtn.addEventListener('click', logout);