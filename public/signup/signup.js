
async function signUp(){

  const userName = document.getElementById('userName').value
const email = document.getElementById('email').value
const password = document.getElementById('password').value
const confirmPassword = document.getElementById('confirmPassword').value

      const addBookResponseObj = await fetch('/users/signup',{
      method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userName,
      email,
      password,
      confirmPassword
    })

      })
      const addBookStatus = await addBookResponseObj.json()
      console.log(addBookStatus)
      if (addBookStatus.status === "success") {
        //alert('user signed up  Successfully')
        window.location = '../login/login.html'
      } else {
        alert("something went wrong try again")
      }
    }
    



