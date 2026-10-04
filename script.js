function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2800)}
function openCalc(){document.getElementById('modal').classList.add('open')}
function closeCalc(){document.getElementById('modal').classList.remove('open')}
function calc(){const m=+document.getElementById('monthly').value||0,y=+document.getElementById('years').value||0;const total=m*y*12;document.getElementById('result').textContent=`Ahorrarías ${total.toLocaleString('es-ES')} €`; }
function idea(){const ideas=['Newsletter sobre herramientas de IA para autónomos','Comparador de aplicaciones para estudiantes','Guía de privacidad para familias','Calculadora de coste real de suscripciones','Directorio de herramientas digitales españolas'];document.getElementById('idea').textContent=ideas[Math.floor(Math.random()*ideas.length)]}
function subscribe(e){e.preventDefault();document.getElementById('msg').textContent='✓ Demo completada. Conecta aquí tu plataforma de email para guardar suscriptores.';toast('Formulario preparado para conectar con un proveedor de email.')}
function filter(){const q=document.getElementById('search').value.toLowerCase();document.querySelectorAll('#categories a').forEach(x=>x.style.display=x.textContent.toLowerCase().includes(q)?'block':'none')}
