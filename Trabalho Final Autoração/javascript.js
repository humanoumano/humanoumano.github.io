var compradosLixeira = 0;
var compradosLixo = 0;
var compradosLuxo = 0;

var carrinhoLixo = sessionStorage.getItem('lixo');
var carrinhoLuxo = sessionStorage.getItem('luxo');
var carrinhoLixeira = sessionStorage.getItem('lixeiras');




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

	

