//disables submit until required filled in
function manage(entry) {
    var bt = document.getElementById('btSubmit');
    if (namefirst.value!= '' && email.value!='' &&comments.value!='' ) {
      bt.disabled=false;
    }
    else {
      bt.disabled=true;
    }   
    
  }

  //prints form entries to console
   const submitBtn = document.querySelector('.submitBtn');
   let preferredMethod = [];
   submitBtn.addEventListener('click', function(e) {
     e.preventDefault();
     if (emails.checked === true) {
       preferredMethod.push('email')
     }
     if (phones.checked === true) {
      preferredMethod.push('phone')
    }
    if (either.checked === true) {
      preferredMethod.push('either')
    }
     console.log('First Name:',namefirst.value);
     console.log('Last Name:',namelast.value);
     console.log('Email:',email.value);
     console.log('Comments',comments.value);
     console.log('Phone:',phone.value);
     console.log('Preferred Method:', preferredMethod)
     console.log('Preferred Meeting:',abtype.value);
     
   });
   

  
  