// Using Generators with promises

const getRandomUsers = co(function* (n) {
   const fetchRandomUsers = yield fetch(`https://randomuser.me/api/?results=${n}`);
   const data = yield fetchRandomUsers.json();
   return data;
});

getRandomUsers(10).then(randomUsers => {
    randomUsers.results.forEach(user => {
        const {gender, email} = user;
        document.write(`${gender} : ${email}`);
    });
}).catch(err => log);