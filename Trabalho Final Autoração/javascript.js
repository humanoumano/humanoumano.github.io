var compradosLixeira = 0;
var compradosLixo = 0;
var compradosLuxo =0;

var historicoLuxo = localStorage.getItem('LuxosComprados');
var historicoLixo = localStorage.getItem('LixosComprados');
var historicoLixeira = localStorage.getItem('LixeirasComprados');




var carrinhoLixo = sessionStorage.getItem('lixo');
var carrinhoLuxo = sessionStorage.getItem('luxo');
var carrinhoLixeira = sessionStorage.getItem('lixeiras');

if( carrinhoLuxo != null ){
	
	compradosLuxo = parseInt(sessionStorage.getItem('luxo'));
}

if( carrinhoLixo != null ){
	
	compradosLixo = parseInt(sessionStorage.getItem('lixo'));
}

if( carrinhoLixeira != null ){
	
	compradosLixeira = parseInt(sessionStorage.getItem('lixeiras'));
}


	
function efetuarCompra(){
	
	 alert( "Parabéns você comprou"  );
	 
	

	
	location.reload();
	var key = 'LuxosComprados';
	var value = carrinhoLuxo;
	localStorage.setItem(key,value);
	
	
	
	var key = 'LixosComprados';
	var value = carrinhoLixo;
	localStorage.setItem(key,value);
	
	
	
	var key = 'LixeirasComprados';
	var value = carrinhoLixeira;
	localStorage.setItem(key,value);
	
	 sessionStorage.clear();				
	}

function salvarCompra(){
	
	
	
}

/*var User = function(nome, senha){
 this.nome = nome;
 this.senha = senha; 
 
 this.historico = function(){
	 
	 
 }
	
};
	var user =  new Array();
	user[0] = new User();
	user[0].senha = localStorage.getItem('senha');
	var teste;
	teste = localStorage.getItem('senha');
	user[0].nome = localStorage.getItem('user');
		
	if(	teste ==  user[0].senha){
		
		console.log(" senha errada");
	}
	
	
*/



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


 $(document).ready( function() {
	 
				//Funçoes para lightbox
				$('.lightbox').click(function(){
					$('.background, .box').animate({'opacity':'.40'},500,'linear');
					$(' .box').animate({'opacity':'1.00'},500,'linear');
					$('.background, .box').css('display', 'block');
						
						
					});
					
				$('.close').click(function(){
					$('.background, .box').animate({'opacity':'0'},500,'linear', function(){
						$('.background, .box').css('display', 'none');
						
					});
					});
					
				 //implementação do accordion
				$( "#luxo" ).accordion();
				$( "#entulho" ).accordion();
				$( "#outrolixo" ).accordion();
				
				//visualização do carrinho
				$('#carroLuxo').text('Luxos acumulados: ' +carrinhoLuxo);
				$('#carroLixeira').text('Lixeiras acumuladas: ' +carrinhoLixeira);
				$('#carroLixo').text('Lixo acumulado: ' +carrinhoLixo);
				
				$('#historicoLuxo').text('Luxos comrpados: ' +historicoLuxo);
				$('#historicoLixo').text('Lixos comprados: ' +historicoLixo);
				$('#historicoLixeira').text('Lixeira compradas: ' +historicoLixeira);
				
				//implementação do slider de imagens
				$('.next').on('click', function(){
					var currentImg = $('.active');
					var nextImg = currentImg.next();
					
					if(nextImg.length){
						currentImg.removeClass('active').css('z-index', -10);
						nextImg.addClass('active').css('z-index', 10);
						
					}
					
				});
				
				$('.prev').on('click', function(){
					var currentImg = $('.active');
					var prevImg = currentImg.prev();
					
					if(prevImg.length){
						currentImg.removeClass('active').css('z-index', -10);
						prevImg.addClass('active').css('z-index', 10);
						
					}
					});
					
				
		
				
			  } );

}
function novoUser(){
	
	newUser = newUser +1;
	
	}




function comprarLixeira(){
	
	compradosLixeira = compradosLixeira +1;
	
	}
	
function comprarLixo(){
	
	compradosLixo = compradosLuxo +1;
	
	}
	
function comprarLuxo(){
	
	compradosLuxo = compradosLuxo +1;
	
	}

	

