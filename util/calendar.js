function isThereAnEvent(events, d){
    d.toISOString().substring(0, 10);
    let eventCompare = d.toISOString().substring(0, 10);
    let match = false;
    let name = null;
    let desc = null;
    events.map(event => {
        if (event.event_date === eventCompare) {
            console.log(event.event_date);
            match = true;
            name = event.event_name;
            desc = event.event_description;
        }
    });
    let event = {match: match, name: name, desc: desc};
    return event;
};

function calendarMaker(events){
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
            
            if (isThereAnEvent(events, d)){

            }
            let calendarDay = {
                weekDay: i,
                isToday: true,
                month: month,
                dayOfMonth: dayOfMonth
            };
            calendarWeek.push(calendarDay);
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
            }

            let isEvent = false;
            if (isThereAnEvent(events, d)){
                isEvent = true;
            }

            let calendarDay = {
                weekDay: i,
                isToday: false,
                month: month,
                dayOfMonth: dayOfMonth,
                isEvent: isEvent,

            };
            calendarWeek.push(calendarDay);
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

            let event = isThereAnEvent(events, d);
            console.log(event);
            let calendarDay = {
                weekDay: i,
                isToday: false,
                month: month,
                dayOfMonth: d.getDay(),
                isEvent: event.match,
                eventName: event.name,
                eventDesc: event.desc
            }
            calendarWeek.push(calendarDay);
        }
    };
    console.log(calendarWeek);
    return  calendarWeek;
};
//5 weeks so 5 rows
//7 days to a row

module.exports = calendarMaker;