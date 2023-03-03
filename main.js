 let form=document.querySelector('form');
 form.addEventListener('submit',function(e){
	e.preventDefault();
	let amount = parseInt(document.querySelector('#amount').value);
	let percentage = parseInt(document.querySelector('#percentage').value);
	let percentageamount = document.querySelector('#p-amount');
	let totalamount =document.querySelector('#t-amount');
	let result=document.querySelector('#result');
	
	
	if((amount===" ")||(amount<0)||(isNaN(amount))){
		result.innerHTML="please enter the correct value";
		
	}
    else if((percentage===" ")||(percentage<0)||(isNaN(percentage))){
		result.innerHTML="please enter the correct percentage value";
		
	}
	else{
		
		let formula=amount*(percentage/100);
		percentageamount.value=formula;
		totalamount.value=amount+formula;
	}
	
 });