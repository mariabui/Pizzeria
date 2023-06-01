let user = new XMLHttpRequest(); 
      
user.addEventListener("load",usersinfo); 
user.open("GET", "/users/usersinfo", true); 
user.send();

function usersinfo(){
  let data = JSON.parse(user.response);
    let element =(
    <span>{data.username}</span>
  );
  
  ReactDOM.render(
    element,
    document.getElementById('username')
  );
}
