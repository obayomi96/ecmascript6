// Using promises and fetch API to get user data from the randomuser.me API

// function to get random users
const getRandomUsers = (n) => {
  const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${n}`)
  fetchRandomUsers.then(data => {
    data.json().then(randomUsers => {
      console.log(JSON.stringify(randomUsers.results.length));
      randomUsers.results.forEach(user => {
        const {gender, email} = user;
// Usng document.write function to output in browser directly        
        document.write(`${gender} - ${email} \n`);
      });
    })
  });
}

getRandomUsers(50);
