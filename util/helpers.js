function daysOfWeek(){
    days = 
    {
        sunday: {
            name: 'sunday',
            num: 0
        },monday: {
            name: 'monday',
            num: 1
        },tuesday: {
            name: 'tuesday',
            num: 2
        },wednesday: {
            name: 'wednesday',
            num: 3
        },thursday: {
            name: 'thursday',
            num: 4
        },friday: {
            name: 'friday',
            num: 5
        },saturday: {
            name: 'saturday',
            num: 6
        }
    };
    return days;
};

function dayOfMonth(){

};

function isToday(){
    const td = document.getElementsByTagName("td").length;
    if (td === 2) {
        true
    }
};

function isEvent(event_date){
    let d = new Date();
    let date = d.toISOString().split('T')[0];
    if (event_date === date) {
        return true;
    }
};

module.exports = { daysOfWeek, isToday };

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