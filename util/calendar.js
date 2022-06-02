async function calendarMaker(events){
    
    console.log(events.event_date);
    
    let calendarMonth = []//will hold 5 weeks
    let calendarWeek = []//will hold 7 days

    //week1
    for (let i = 0; i < 7; i++) {
        let d = new Date();
    
        //today
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
        d.setMonth(d.getMonth(), 1);
        let firstOfMonth = d.getDate();
        //get last day of currentmonth
        d.setMonth(d.getMonth() + 1, 0);
        let endOfMonth = d.getDate();

        let dayDiff = null; 

        //if today       
        if (i === dayOfWeek) {            
            calendarWeek.push({
                weekDay: i,
                isToday: true,
                month: month,
                dayOfMonth: dayOfMonth
            });
        } 
        //if before today
        else if (i < dayOfWeek) {
            dayDiff = dayOfWeek - i;
            //if i is a date from last month
            if (dayOfMonth - dayDiff <= 0) {                
                let num = lastPrevMonth + (dayOfMonth - dayDiff);
                d.setMonth(d.getMonth(month - 1), num);
                month = d.getMonth();
                dayOfMonth = d.getDate();
                console.log(dayOfMonth);
            }
            calendarWeek.push({
                weekDay: i,
                isToday: false,
                month: month,
                dayOfMonth: dayOfMonth
            });
        } 
        //if after today
        else {
            //3 = 6-3
            dayDiff = i - dayOfWeek;
            dayDiff++;
            if ((dayOfMonth + dayDiff) >  endOfMonth) {
                d.setMonth(d.getMonth() + 1);
                month = d.getMonth();
            }
            d.setDate(dayOfMonth + dayDiff);
            calendarWeek.push({
                weekDay: i,
                isToday: false,
                month: month,
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