
const fname = document.forms['form']['firstname'];
const lname = document.forms['form']['lastname'];

const fname_error = document.getElementById('name_error');
const lname_error = document.getElementById('lname_error');

fname.addEventListener('textInput', fname_Verify);
lname.addEventListener('textInput', lname_Verify);

function validated(){
	if (fname.value.length < 1) {
		fname.style.border = "1px solid red ";
		fname_error.style.display = "block";
		fname.focus();
		return false;
	}
	if (lname.value.length < 1) {
		lname.style.border = "1px solid red ";
		lname_error.style.display = "block";
		lname.focus();
		return false;
	}

}
function fname_Verify(){
	if (fname.value.length >= 3) {
		fname.style.border = "1px solid silver";
		fname_error.style.display = "none";
		return true;
    
    }
	}

function lname_Verify(){
	if (lname.value.length >= 3) {
		lname.style.border = "1px solid silver";
		lname_error.style.display = "none";
		return true;
   
	}
}


 
  

    
  
 

