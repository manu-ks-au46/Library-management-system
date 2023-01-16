
async function logIn(){

const userName = document.getElementById('userName').value
const email = document.getElementById('email').value
const password = document.getElementById('password').value
const isAdmin = document.getElementById('admin').checked


      const loginResponseObj = await fetch('/users/login',{
      method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userName,
      email,
      password,
      isAdmin:Boolean
    })

      })
      const loginResponse = await loginResponseObj.json()
      console.log(loginResponse)
      if (isAdmin === true) {
        window.location = '../adminDashboard/adminDashboard.html'
      } else if(isAdmin===false) {
        window.location = '../userDashboard/userDashboard.html'
      }
 }
