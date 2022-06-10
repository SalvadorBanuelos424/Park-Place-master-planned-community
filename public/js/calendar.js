async function prev(){
  console.info('clicked');
    // const response = await fetch('/api/calendar/prev', {});

    // async function logout() {
    //     const response = await fetch('/api/users/logout', {
    //       method: 'post',
    //       headers: { 'Content-Type': 'application/json' },
    //     });
      
    //     if (response.ok) {
    //       document.location.replace('/');
    //     } else {
    //       alert(response.statusText);
    //     }
    //   }
};
async function next(){

};


function setCalendar(){
  const d = new Date();

  const today = {
    weekday: d.getDay(),
    day: d.getDate(),
    month: d.getMonth()
  };
  //last day of curr month
  d.setMonth(d.getMonth()+1, 0);
  const lastDay = d.getDate();

  d.setMonth(d.getMonth(), 0);
  const prevMonth = {
    weekday: d.getDay(),
    day: d.getDate(),
    month: d.getMonth()
  }

  d.setMonth(d.getMonth()+1);
  const nextMonth = {
    weekday: d.getDay(),
    day: d.getDate(),
    month: d.getMonth()
  }
  const elements = document.querySelectorAll(".day");
  const subElements = document.querySelectorAll(".day div div span");
  let count = today.day;

  elements.forEach((value, i) => {
    //current week before today
    if (i < today.weekday) {   
      let diff = today.weekday - i;
      if (today.day - diff < 1) {
        elements[i].dataset.day = prevMonth.day - diff + 1;
        elements[i].dataset.month = d.getMonth();
      } else {
        elements[i].dataset.day = today.day - diff;
        elements[i].dataset.month = today.month;
      }
    } else if (i > today.weekday) {
      if (count > lastDay) {
        elements[i].dataset.day = count - lastDay;
        count++;
        elements[i].dataset.month = nextMonth.month;       

      } else {        
        elements[i].dataset.day = ++count;
        elements[i].dataset.month = today.month;
      }  
    } else {
      elements[i].dataset.day = today.day;
      elements[i].dataset.month = today.month;
    }
    subElements[i].innerHTML = elements[i].dataset.day;
  });
  calTitle(today, elements);  
};

function calTitle(today, elements){
  const data = document.querySelectorAll(`[data-month="${today.month}"]`);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let currMonth = '';
  if ((data.length/elements.length) > 0.5) {    
    currMonth = months[today.month];
  } else {
    currMonth = months[today.month + 1];
  }
  document.querySelector('#calTitle').innerHTML = currMonth;
};

function getEvents(){

};

setCalendar();
// document.querySelector('#prev').addEventListener('click', prev);
// document.querySelector('#next').addEventListener('click', next);