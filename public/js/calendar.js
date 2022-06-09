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
  d.setDate(1)
  const today = {
    weekday: d.getDay(),
    day: d.getDate(),
    month: d.getMonth()
  };
  console.log(today);
  const elements = document.querySelectorAll(".day");
  const subElements = document.querySelectorAll(".day div div span");

  elements.forEach((value, i) => {
    //current week before today
    if (i < today.weekday) {   
      let diff = today.weekday - i;
      console.log(diff);
      
      if (today.day - diff < 1) {
        
        d.setMonth(d.getMonth(), 0); //31
        elements[i].dataset.day = d.getDate() - diff; // 31 - 3
        elements[i].dataset.month = d.getMonth();        

      } else {
        elements[i].dataset.day = today.day - diff;
        elements[i].dataset.month = today.month;

      }      
    } else {

    }
    subElements[i].innerHTML = elements[i].dataset.day;
  });
  
};

setCalendar();
document.querySelector('#prev').addEventListener('click', prev);
document.querySelector('#next').addEventListener('click', next);