async function calendarMaker(events){
    let d = new Date();
    let dayOfWeek = d.getDay();//0-6
    let dayOfMonth = d.getDate();//1-31
    let month = d.getMonth();

    //get last day of last month
    d.setMonth(d.getMonth() -1, 0);
    let lastPrevMonth = d.getDate();
    //get first day of next month
    d.setMonth(d.getMonth() + 1, 1);
    let firstNextMonth = d.getDate();

    //get first day of current month
    d.setMonth(d.getMonth(), 0);
    let firstOfMonth = d.getDate();
    //get last day of currentmonth
    d.setMonth(d.getMonth() + 1, 0);
    let endOfMonth = d.getDate();

    
    let calendarMonth = []//will hold 5 weeks
    let calendarWeek = []//will hold 7 days

    //fills week1 with days
    for (let i = 0; i < 7; i++) {
        let today = false;
        let dayDiff = null;
        if (i === dayOfWeek) {            
            calendarWeek.push({
                weekDay: i,
                isToday: true,
                month: month,
                dayOfMonth: dayOfMonth
            });
        } else if (i < dayOfWeek) {
            dayDiff = dayOfWeek - i;
            if (dayOfMonth - dayDiff < 0) {
                d.setMonth(d.getMonth(), 0 - (dayDiff + 1));                
            } else {
                d.setDate(dayOfMonth - dayDiff);
            }
            calendarWeek.push({
                weekDay: i,
                isToday: false,
                month: d.getMonth(),
                dayOfMonth: d.getDay()
            });
        } else {
            dayDiff = i - dayOfWeek;
            if (dayOfMonth == ) {
                
            }
            d.setDate(dayOfMonth + dayDiff);
            calendarWeek.push({
                weekDay: i,
                isToday: false,
                month: d.getMonth(),
                dayOfMonth: d.getDay()
            });
        }
        
        
    }

    console.log(calendarWeek);
    // return  calendarWeek;
    return;
};
//5 weeks so 5 rows
//7 days to a row

module.exports = calendarMaker;

/*

var d = new Date();
d.setMonth(d.getMonth(), 0)
console.log(d);

var d = new Date();
d.setDate(0);
console.log(d.getDate());

week1 = [
    {
        day: 'sunday',
        isToday: false,
        dayOfMonth: 2
    }
];










*/