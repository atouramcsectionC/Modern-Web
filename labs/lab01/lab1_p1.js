import lodash from 'lodash';  



// const lodash = require('lodash');
// const moment = require('moment'); 

const holidays = [
  { name: 'Christmas', date: new Date('2025-12-25') },
  { name: 'Canada Day', date: new Date('2025-07-01') },
  { name: 'Aprils fool', date: new Date('2025-04-01') }
];

let today = new Date();


holidays.forEach(holiday => {
  let dateDifference = holiday.date - today;
  console.log(Math.ceil(dateDifference/(1000*60*60*24)));
});


const randomHoliday = lodash.sample(holidays);
console.log(`Random holiday: ${randomHoliday.name} on ${randomHoliday.date}`);


const christmasIndex = lodash.findIndex(holidays, { name: 'Christmas' });
const canadaDayIndex = lodash.findIndex(holidays, { name: 'Canada Day' });

console.log(`Christmas index: ${christmasIndex}`);
console.log(`Canada Day index: ${canadaDayIndex}`);
