<?php
$offer_url = $_GET['ol'] ?? false;

if (!$offer_url)
   die('');

$offer_url = urldecode($offer_url);

$pixel = $_GET['pixel'] ?? 0;

?>

<!DOCTYPE html>
<html>

<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <title>KetoBoost - Amostra Grátis</title>
   <link rel="shortcut icon" href="favicon.png">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
   <link rel="stylesheet" type="text/css" media="screen" href="style.css">
   <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.1/slick.css">
   <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.1/slick-theme.css">
   <link href="https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap" rel="stylesheet">


   <script type="text/javascript">
      var back_redirect_back_link = '<?php echo $offer_url; ?>';
      history.pushState({}, "", location.href);
      history.pushState({}, "", location.href);
      window.onpopstate = function() {
         setTimeout(function() {
            location.href = back_redirect_back_link;
         }, 1);
      };
   </script>

   <iframe src="<?php echo $offer_url; ?>" width="1" height="1" style="width: 1px;height: 1px;border-width: 0px;position: absolute"></iframe>

</head>





<header>
   <nav class="navbar navbar-expand-lg navestilo justify-content-center " style="background: url('barra-topo.png') center center; ">
      <div class="" style="">
         <img width="200px;" class="moblogo " src="logo.png" style=""> <br>
      </div>
   </nav>
   <div class="htr" style="border-width: 3px;border-color:#f42898;border-style: solid"></div>
</header>
<section class="backs">
   <div class="container d-flex justify-content-center lskk ">
      <center>
         <div class="row d-flex justify-content-center">
            <div class="col-sm-12 ">
               <h1 class=" texmob ffa titiregular" style="margin-top:25px;font-family: 'Titillium Web', sans-serif;;">
                  <p class="sanssd latoblack"><b>COMEMORAÇÃO DE ANIVERSÁRIO <b class=" gg3h4d kag titiregular">
                           KETOBOOST </b></b>
                  </p>
                  <!--
                     <p class="sanssepre titiregular latoblack">E QUEM GANHA O <b
                        class="latoblack sanssepre gg3h4d kag">PRESENTE </b> É
                        VOCÊ! <img width="100px" src="caixa.png">
                     </p>-->
               </h1>
               <div style="margin-top:-25px;" class="col-sm-12">
                  <!--<p class="latoblack sanssefird titiregular"> <span class="latoblack" style="color:#F5B308">VOCÊ
                        MUITO MAIS MAGRA!</span>
                     </p>
                     <p class="titiregular text-justify llf latoblack "
                        style="font-size:25px!important;text-align: center!important;">
                        Premiado em 2019 como o Devorador de Gorduras Mais Importante do Ano
                     </p>-->
                  <p class="sanssefird latoblack " style="font-size:27px!important;text-align: center!important;margin-top: 60px">
                     <b class="latoblack"> <span class="latoblack" style="color:#000;"> Você Receberá em
                           Casa Totalmente Grátis </span></b><br>
                  </p>
               </div>
               <!--
                  <div class="col-sm-12 mb-lg-5 mb-sm-0">
                     <img class="center  produc" src="poteaberto.png" alt="..."><br>
                  </div>-->
               <div class="col-sm-12 mb-lg-5 mb-sm-0" style="margin-top: 20px">
                  <div class="htr"></div>

                  <p style="font-size:17px;" class=" llf latoblack ">
                     Preço Normal do Frasco: R$ <strike>197</strike>
                  </p>

                  <p>
                     <span style="font-size:36px; color:#400E8A;background-color: #fdf493;line-height: 1.3">VALOR DA AMOSTRA<br> HOJE: R$ 0,00</span>
                  </p>

                  <p class="latoblack black" style="margin-top: -10px;font-size: 12px"> Pague Apenas o Envio: R$ 19</p>
                  <p></p>
                  <div class="htr"></div>
               </div>
               <div class="col-sm-12 dfg mg3 rtx">
                  <div class="wcct_counter_bar wcct_cbs_id_661_402" data-type="single" style="display: block;">
                     <p class="titiregular" style="font-size:24px;color:#000; font-weight: bold;">RESTAM POQUÍSSIMAS AMOSTRAS!
                        <br> FINALIZA HOJE (<span class="hhe4 titiregular" id="date-today"></span>) EM POUCOS
                        MINUTOS
                     </p>
                  </div>
               </div>
               <br>
            </div>
         </div>
      </center>
   </div>
</section>
<header class="" style="background-image: url(fundo2.png); background-size: 2600px;background-repeat: no-repeat;  height: auto;">
   <div class="htr2"></div>
   <section>
      <div class="container mt-md-2 ">
         <div class="row justify-content-center">
            <div class="col-md-7 d-flex justify-content-center">
               <h1 class="text-center white latoblack lvs"> VEJA COMO KETOBOOST<br>
                  <b class="orag">FUNCIONA</b>
               </h1>
            </div>
            <div class="mcwidget-embed" data-widget-id="3540550"></div>
         </div>
         <div class="row justify-content-center">
            <div class="col-md-3 d-flex  justify-content-center">
               <p class="text-center white latoblack dl kdf">
                  REDUZ O PESO*<br>
                  ACELERA O METABOLISMO*
               </p>
            </div>
            <div class="col-md-3 d-flex justify-content-center">
               <p class="text-center white latoblack  dl kdf">
                  REDUZ A GORDURA ABDOMINAL*<br>
                  COMBATE A CELULITE*
               </p>
            </div>
            <div class="col-md-3 d-flex justify-content-center">
               <p class="text-center white latoblack dl kdf">
                  INIBE O APETITE*<br>
                  CONTROLA O COLESTEROL*
               </p>
            </div>
         </div>
         <div class="row mt-4 justify-content-center">
            <a target="_blank" onclick="YuriCheckout();" href="<?php echo $offer_url; ?>"><img width="500" class="blends borda" src="amostramaxi.gif"></a>
         </div>
         <div class="row mt-4 d justify-content-center">
            <div class="col-md-4">
               <!--<img class="img-fluid imgleftp" src="pote1bane.png">-->
            </div>
            <div class="col-md-4 d-flex justify-content-center ">
               <a target="_blank" onclick="YuriCheckout();" href="<?php echo $offer_url; ?>" target="_self">
                  <div class="botao3">
                     <p class="titibold text-center botaotext">GARANTA SUA AMOSTRA GRÁTIS</p>
                  </div>
               </a>
            </div>
            <div class="col-md-4">
               <p class="text-center">
                  <!--<img class="img-fluid imgright" src="topo_serum_right.png">-->
               </p>
            </div>
         </div>
         <div class="row d-flex justify-content-center mt-md-3">
            <p class="white titiregular text-center"> *Os resultados podem variar de acordo com o metabolismo de
               cada pessoa.
            </p>
         </div>
         <br>
      </div>
   </section>
</header>

<a target="_blank" onclick="YuriCheckout();" href="<?php echo $offer_url; ?>">
   <section>
      <div class="container pt-xl-5 pb-xl-4 p-4 p-xl-5">
         <div class="row ">

            <div class="col-md-12">
               <h4 class="titibold ffg34 text-xl-left text-center" style="font-size:26.5px!important; color: #000470;display: table;margin: auto">
                  Clique No Botão Abaixo E Garanta a Sua Amostra Grátis
               </h4>

               <img src="prod.png" class="img-fluid" style=" width: 90%; max-width: 450px;display: table;margin: auto"><br>


               <div style="display: table;margin: auto">
                  <div class="wcct_countdown_timer wcct_timer wcct_countdown_round_ghost countdown" data-type="single">
                     <div class="wcct_timer_wrap"></div>
                  </div>
                  <div class="expired" style="margin-bottom: 25px;padding:15px;text-align:center;border-radius:5px;background-color: #50bf34;width: 50%;display: none;margin-left: auto;margin-right: auto;border: solid 2px #f5e3c5; ">
                     <h2 class="titiregular" style="font-size:26px;color: #000;font-weight: bold;margin-bottom:0;">PROMOÇÃO
                        EXPIRADA!
                     </h2>
                  </div>
               </div>

               <img class="img-fluid" src="click.gif" style="display: table;margin: auto;max-width: 200px; margin-top: -20px; z-index: 200"><br>

               <img class="img-fluid" src="cta.png" style="display: table;margin: auto; width: 95%; max-width: 300px;margin-top: -85px;z-index: 100"><br>

               <p align="center" style="font-size:14.5px!important; color: blue; text-decoration: underline; text-align: center;display: table;margin: auto;margin-top: -20px">
                  Clique No Botão Acima!
               </p>

            </div>
         </div>
      </div>
   </section>
</a>
<style>
   .slick-prev:before,
   .slick-next:before,
   .silider22 {
      color: #FFF !important;
   }

   .dsd {
      height: 1.5px;
      background-color: rgb(192, 192, 192);
   }
</style>
<br>
<div class="htr2"></div>
<section class="cinza">
   <div class="container " style="max-width:1500px;">
      <div class="row justify-content-center mt-xl-0 m-0 p-2 p-xl-0  ">
         <div class="col-md-2 text-center  mt-4 mt-xl-5">
            <h6 class="text-left latoregular xc"> O QUE A MÍDIA FALA
               SOBRE OS ATIVOS DE
               KETOBOOST
            </h6>
         </div>
         <div class="col-md-2 text-left mt-md-4">
            <img class="img-fluid mt-3 mt-xl-0" src="icon1.png">
            <p class="latoregular text-left mxi mt-xl-4 mt-4"> “Aliado perfeito da barriga chapada,
               combate a gordura abdominal, a
               fome e a celulie, saque até 4kgs em
               15dias.”
            </p>
         </div>
         <div class="col-md-2 text-left mt-md-4">
            <img class="img-fluid mt-3 mt-xl-0" src="icon2.png">
            <p class="latoregular text-left mxi mt-xl-4 mt-4"> “Com o objetivo de auxiliar no
               combate ao excesso de peso e
               reduzir os impactos negativos à
               saúde dos consumidores, nasceu
               KETOBOOST, uma solução moderna
               para a perda de peso.”
            </p>
         </div>
         <div class="col-md-2 text-left mt-md-4">
            <img class="img-fluid mt-3 mt-xl-0" src="icon3.png">
            <p class="latoregular text-left mxi mt-xl-4 mt-4"> “Além de acabar com o inchaço do
               corpo, combate os níveis de
               colesterol ruim e ajudar na prevenção
               da pressão alta. é um aliado na hora
               de perder peso. É isso mesmo:
               emagrece!”
            </p>
         </div>
         <div class="col-md-2 text-left mt-md-4">
            <img class="img-fluid mt-3 mt-xl-0" src="icon4.png">
            <p class="latoregular text-left mxi mt-xl-4 mt-4"> “Virou febre nos Estados Unidos por
               causa do seu efeito na queima de
               gorduras. Em um estudo realizado
               por lá, ficou constatado que pode
               dobrar o número de quilos perdidos
               durante uma dieta.”
            </p>
         </div>
      </div>
   </div>
</section>


</section>
<footer class="fundofooter">
   <div class="container p-md-5 p-5" style="max-width:1300px">
      <div class="row justify-content-center">
         <div class="col-md-2">
            <b class="latoblack white text-left">Links </b><br><br>
            <a target="_blank" onclick="YuriCheckout();" class="fta latoregular" href="<?php echo $offer_url; ?>"> Perguntas Frequentes </a><br>
            <a target="_blank" onclick="YuriCheckout();" class="fta latoregular" href="<?php echo $offer_url; ?>" target="_blank">
               Política de Privacidade</a><br>
            <a target="_blank" onclick="YuriCheckout();" class="fta latoregular" href="<?php echo $offer_url; ?>" target="_blank"> Termos e
               Condições</a><br>
            <img class="img-fluid" src="seal.png">
         </div>
         <div class="col-md-4 mt-sm-3 mt-xl-0">
            <br>
            <a target="_blank" onclick="YuriCheckout();" href="<?php echo $offer_url; ?>">
               <img class="img-fluid" src="Facebook.png">
            </a>
            <a target="_blank" onclick="YuriCheckout();" href="<?php echo $offer_url; ?>">
               <img class="img-fluid" src="intagram.png"></a>
            <br><br>
         </div>
         <div class="col-md-4">
            <style>
               .butons:hover {
                  transition: 0.4s;
                  -webkit-transform: scale(1.1);
                  -moz-transform: scale(1.1);
                  -o-transform: scale(1.1);
                  -ms-transform: scale(1.1);
                  transform: scale(1.1);
                  background-color: #ead766 !important;
               }

               @media(max-width:800px) {
                  .butons {
                     width: 100% !important;
                  }

                  .butons p {
                     font-size: 18px !important;
                  }
               }
            </style>
         </div>
         <div class="col-md-2">
            <b class="latoblack white text-left">Forma de Pagamento </b><br><br>
            <img class="img-fluid" src="pagamento_footer&#32;(1).png">
            <br><br>
            <b class="latoblack white text-left">Forma de Entrega </b><br><br>
            <img class="img-fluid" src="correios_footer.png">
         </div>
      </div>
   </div>
   <div class="linha"></div>
   <br>
   <div class="container" style="max-width:1240px">
      <div class="row d-flex justify-content-center">
         <div class="col-md-6 d-flex justify-content-center justify-content-xl-end  mb-lg-2 mb-2  ">
            <p class="fta latoregular">
               Todos direitos reservados ®KETOBOOST 2018 - 2020
            </p>
         </div>
      </div>
   </div>
</footer>
<script src="https://code.jquery.com/jquery-3.3.1.slim.js" integrity="sha256-fNXJFIlca05BIO2Y5zh1xrShK3ME+/lYZ0j+ChxX2DA=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.15.0/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.1/slick.min.js"> </script>
<script src="main_script.js"></script>

<script>
		function YuriCheckout() {
			var img = document.createElement('img')
			img.height = 1;
			img.width = 1;
			img.display = "none"
			img.src = "https://www.facebook.com/tr?id=<?php echo $pixel;?>&ev=InitiateCheckout&noscript=1"
			document.body.append(img)
		}
	</script>

	<img height="1" width="1" style="display:none"
		src="https://www.facebook.com/tr?id=<?php echo $pixel;?>&ev=PageView&noscript=1" />

	<img height="1" width="1" style="display:none"
		src="https://www.facebook.com/tr?id=<?php echo $pixel;?>&ev=ViewContent&noscript=1" />

</body>

</html>