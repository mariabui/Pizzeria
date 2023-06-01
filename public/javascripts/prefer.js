let user = new XMLHttpRequest(); 
      
user.addEventListener("load",usersinfo); 
user.open("GET", "/users/usersinfo", true); 
user.send();

function usersinfo(){
  let data = JSON.parse(user.response);
    let element =(
    <span>{data.prefer}</span>
  );
  
  ReactDOM.render(
    element,
    document.getElementById('prefer')
  );
}
