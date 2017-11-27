
var comprados = 0;


function validacao() {

	if(document.form.senha.value=="" || document.form.nome.value==""){
		
		alert("Por favor, preencha o campos."); 
		document.form.senha.focus();
		document.form.nome.focus();
		return false;
	}
	
	
	
	
	if(document.form.senha.value.length < 8){
		alert("A senha deve conter no mínimo 6 caracteres");
		document.form.senha.focus();
		return false;
	}
	
}

 $( function() {
				$( "#luxo" ).accordion();
				$( "#entulho" ).accordion();
				$( "#outrolixo" ).accordion();
				
				
			  } );

			  
function comprar(){
	
	comprados = comprados +1;
	
	
}