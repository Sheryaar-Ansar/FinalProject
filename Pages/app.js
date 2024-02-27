const wrapper = document.querySelector('.wrapper')
const registerLink = document.getElementById('register-link')
const loginLink = document.getElementById('login-link')

registerLink.addEventListener('click', function(){
    wrapper.classList.add('active')
})
loginLink.addEventListener('click', function(){
    wrapper.classList.remove('active')
})