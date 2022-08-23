const users = ['ce@yahoo.com', 'ee222@gmail.com', 'a@a.com', 'b@b.com', 'chris@e.com'];

function delay (user){
  return new Promise(resolve => {
    setTimeout(function(){
      resolve(`email sent to ${user}`)
    }, 1000)
  })
}

async function sendEmail() {
  for(user of users) {
    const confirmation = await delay(user)
    console.log(confirmation)
  };
  console.log("email sent to all users")
}

sendEmail();
