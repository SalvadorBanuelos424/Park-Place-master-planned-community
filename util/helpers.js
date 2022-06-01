function daysOfWeek(){
    days = [{
        name: 'sunday',
        num: 0
    },{
        name: 'monday',
        num: 1
    },{
        name: 'tuesday',
        num: 2
    },{
        name: 'wednesday',
        num: 3
    },{
        name: 'thursday',
        num: 4
    },{
        name: 'friday',
        num: 5
    },{
        name: 'saturday',
        num: 6
    }
    ];
    console.log('working');
    return days;
};
module.exports = { daysOfWeek };

//calendar maker
// async function calendarGen(){
//     let th = document.getElementsByTagName("th");
        
//         const d = new Date();
//         let dayOfWeek = d.getDay();
//         let dayOfMonth = d.getDate();

//     const results = {
//         dayOfWeek
//     };
//     return results;
// }

// async function eventGen(event){

// }