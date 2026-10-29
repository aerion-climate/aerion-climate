document.getElementById('f').addEventListener('submit',function(e){
  e.preventDefault();
  var d=new FormData(e.target),n=d.get('nom')||'',c=d.get('contact')||'',m=d.get('msg')||'';
  var ok=document.getElementById('ok');
  if(!n.trim()||!c.trim()||!m.trim()){ok.textContent='Merci de remplir les trois champs.';return;}
  var body='Nom : '+n+'\nContact : '+c+'\n\n'+m;
  location.href='mailto:aerion.climate1@gmail.com?subject='+encodeURIComponent('Demande de devis – '+n)+'&body='+encodeURIComponent(body);
  ok.textContent='Votre application e-mail s’ouvre pour envoyer la demande.';
});
