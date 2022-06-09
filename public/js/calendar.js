async function prev(){
    const response = await fetch('/api/calendar/prev', {});

    async function logout() {
        const response = await fetch('/api/users/logout', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
        });
      
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert(response.statusText);
        }
      }
};
function next(){

};


function calendarTitle(){
  const getDays = document.querySelectorAll('.day');

};

document.querySelector('#prev').addEventListener('click', prev);
document.querySelector('#next').addEventListener('click', next);