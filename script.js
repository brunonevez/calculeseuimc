//função que calcula o IMC e a partir do resultado designa qual é o estagio 
function calcular(peso, altura) 
	{
	var altura = document.getElementById('altura').value;	
	var peso = document.getElementById('peso').value;
	altura = altura / 100;
	var imc = peso / (altura * altura);
	var resultado = parseFloat(imc.toFixed(2));
	document.getElementById('resultado').innerHTML = resultado;

	if(altura == " " || peso == " "){
		var notificacao = "Digite sua altura e peso!";
		document.getElementById('notificacao').innerHTML = notificacao;
		document.getElementById('resultado').innerHTML = "";
		}
	if (isNaN(altura) || isNaN(peso)) {
		var notificacao = "Os valores não são numericos";
		document.getElementById('notificacao').innerHTML = notificacao;
		document.getElementById('resultado').innerHTML = "";
	}
	else{

	//operações que designa em qual estado a pessoa está
			if(resultado < 17){
				document.getElementById('muitobaixo').style.background = 'rgba(21, 29, 59, 0.50)';
			}
			if(resultado >= 17 && resultado <= 18.49){
				document.getElementById('abaixodopeso').style.background = 'rgba(21, 29, 59, 0.50)';
			}
			if(resultado >= 18.5 && resultado <= 24.99){
				document.getElementById('pesonormal').style.background = 'rgba(21, 29, 59, 0.50)';
			}
			if(resultado >= 25 && resultado <= 29.99){
				document.getElementById('acimadopeso').style.background = 'rgba(21, 29, 59, 0.50)';
			}
			if(resultado >= 30 && resultado <=34.99){
				document.getElementById('obesidade1').style.background = 'rgba(21, 29, 59, 0.50)';
			}
			if(resultado >= 35 && resultado <= 39.99){
				document.getElementById('obesidade2').style.background ='rgba(21, 29, 59, 0.50)';
			}
			if (resultado >= 40) {
				document.getElementById('obesidade3').style.background = 'rgba(21, 29, 59, 0.50)';
			}
		}

	}