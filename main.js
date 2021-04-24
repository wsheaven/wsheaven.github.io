var tomorrow = new Date();
tomorrow.setTime(tomorrow.getTime());       
document.getElementById("spanDate").innerHTML = 
tomorrow.getMonth() + "/" + tomorrow.getDate()+ "/" + 
tomorrow.getFullYear();
