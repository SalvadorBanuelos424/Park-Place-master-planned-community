function headers(){
    const headers = [{
        long: 'Sunday',
        short: 'Sun' 
    },{
        long: 'Monday',
        short: 'Mon'
    },{
        long: 'Tuesday',
        short: 'Tue'
    },{
        long: 'Wednesday',
        short: 'Wed'
    },{
        long: 'Thursday',
        short: 'Thur'
    },{
        long: 'Friday',
        short: 'Fri'
    },{
        long: 'Saturday',
        short: 'Sat'
    }
    ];
    return headers;
};
function month(){
    let week = [];
    let month = [];
    for (let i = 0; i < 5; i++) {
        week = [];
        for (let i = 0; i < 7; i++) {
            week.push('day');
        }
        month.push(week);
    }
    return month;
};

module.exports = { headers, month };