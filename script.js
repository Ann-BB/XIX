let navbarlinks=document.getElementById('navbarlinks');
let toggleButton =document.getElementById('togglebutton');

togglebutton.addEventListener('click', function(){
    navbarlinks.classList.toggle('active');
})

// xml http requist

function getUsers(){

    function render(){
        let response =this.responseText;
        let responsedata= JSON.parse(response);
        console.log(responsedata);

        let ul =document.createElement('ul');
        let li = document.createElement('li');
        li.textContent = responsedata.data[1].first_name;
        
        ul.appendChild(li);
        
        document.getElementById('api').appendChild(ul);
    }
    let requist= new XMLHttpRequest();
    requist.addEventListener('load', render);

    requist.open('GET', 'https://reqres.in/api/users?page=2');
    requist.send();
}
getUsers();