let selected = null;
const money = n => new Intl.NumberFormat('fr-FR').format(n) + ' Ar';
const toast = msg => { const t=document.getElementById('toast'); t.textContent=msg; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),4500); };

document.querySelectorAll('.product').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.product').forEach(x=>x.classList.remove('active'));
    btn.classList.add('active');
    selected={game:btn.dataset.game,pack:btn.dataset.pack,price:Number(btn.dataset.price)};
    document.getElementById('selectedProduct').textContent=selected.pack+' • '+selected.game;
    document.getElementById('selectedPrice').textContent=money(selected.price);
    document.getElementById('order').scrollIntoView({behavior:'smooth',block:'start'});
  });
});

document.getElementById('orderForm').addEventListener('submit', e=>{
  e.preventDefault();
  if(!selected){toast('Choisis d’abord un pack de recharge.'); return;}
  const uid=document.getElementById('uid').value.trim();
  const nick=document.getElementById('nickname').value.trim();
  const customer=document.getElementById('customer').value.trim();
  const phone=document.getElementById('phone').value.trim();
  const payment=document.getElementById('payment').value;
  const proof=document.getElementById('proof').value.trim() || 'Non renseignée';
  const message =
`Bonjour ZoneGame 👋%0A%0A`+
`🎮 Jeu : ${selected.game}%0A`+
`💎 Pack : ${selected.pack}%0A`+
`💰 Montant : ${money(selected.price)}%0A`+
`🆔 UID : ${uid}%0A`+
`👤 Pseudo : ${nick || 'Non renseigné'}%0A`+
`🙋 Client : ${customer}%0A`+
`📱 Téléphone : ${phone}%0A`+
`💳 Paiement : ${payment}%0A`+
`🧾 Référence : ${proof}%0A%0A`+
`Merci de vérifier mon paiement et de traiter la commande.`;
  // Remplace le numéro ci-dessous par ton WhatsApp professionnel.
  const whatsappNumber = '261XXXXXXXXX';
  if(whatsappNumber.includes('X')){
    navigator.clipboard?.writeText(decodeURIComponent(message));
    toast('Commande préparée et copiée. Remplace le numéro WhatsApp dans app.js puis reconnecte le bouton.');
  } else {
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`,'_blank');
  }
});
