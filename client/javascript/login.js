const form= document.getElementById('login-form')
form.addEventListener('submit',function(event){
    event.preventDefault()
    const formData = new FormData(form)
    const email=formData.get('email')
    const password = formData.get('password')
    const user = {
        password,
        email,
    }
    fetch('/api/consumer/login', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
    .then(createdUser => {
        console.log(createdUser)
        localStorage.setItem('user', JSON.stringify(createdUser));
        // Redirect to home page
        window.location.href = "https://venline.co";
    })
})