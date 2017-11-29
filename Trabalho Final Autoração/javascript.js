var compradosLixeira = 0;
var compradosLixo = 0;
var compradosLuxo = 0;

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


				

setInterval(draw(), 200);

function draw(){

 $( function() {
				$( "#luxo" ).accordion();
				$( "#entulho" ).accordion();
				$( "#outrolixo" ).accordion();
				
				
				$('#carroLuxo').text('Luxos acumulados: ' +compradosLuxo);
				$('#carroLixeira').text('Lixeiras acumuladas: ' +compradosLixeira);
				$('#carroLixo').text('Lixo acumulado: ' +compradosLixo);
				
				
	
				
			  } );

}

function comprarLixeira(){
	
	compradosLixeira = compradosLixeira +1;
	
	}
	
function comprarLixo(){
	
	compradosLixo = compradosLixo +1;
	
	}
	
function comprarLuxo(){
	
	compradosLuxo = compradosLuxo +1;
	
	}
	
function efetuarCompra(){
	
	 alert( "Parabéns você comprou"  );
	 
	 compradosLixeira = 10;
	 compradosLixo = 10;
	 compradosLuxo = 10;
	 localStorage.clear();
		location.reload();
					
	}

	

