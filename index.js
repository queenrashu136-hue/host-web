<!DOCTYPE html><html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Queen Rashu Bot Dashboard</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600&display=swap" rel="stylesheet">
  <style>
    *{box-sizing:border-box;margin:0;padding:0}body{
  font-family:'Orbitron',sans-serif;
  min-height:100vh;
  background:
    linear-gradient(rgba(10,0,20,0.75), rgba(10,0,20,0.85)),
    url('background.jpg') center/cover no-repeat fixed;
  color:#f5d0fe;
  padding:20px;
}

header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:22px;
}

.logo{
  font-size:26px;
  font-weight:600;
  color:#f472b6;
  text-shadow:0 0 12px #ec4899;
}

.welcome{
  background:rgba(236,72,153,0.12);
  border:1px solid rgba(236,72,153,0.35);
  padding:16px;
  border-radius:16px;
  margin-bottom:22px;
  box-shadow:0 0 20px rgba(236,72,153,0.25);
}

.card{
  background:rgba(20,5,35,0.75);
  backdrop-filter: blur(6px);
  border:1px solid rgba(236,72,153,0.3);
  border-radius:20px;
  padding:22px;
  margin-bottom:18px;
  box-shadow:0 0 25px rgba(236,72,153,0.2);
}

.card h3{
  font-size:20px;
  margin-bottom:8px;
  color:#f9a8d4;
}

.card p{
  font-size:14px;
  color:#fbcfe8;
  margin-bottom:14px;
  opacity:0.9;
}

.premium{
  display:inline-block;
  padding:10px 20px;
  background:linear-gradient(90deg,#ec4899,#f472b6);
  color:#1f0322;
  border-radius:30px;
  font-size:13px;
  text-decoration:none;
  font-weight:600;
  box-shadow:0 0 18px rgba(236,72,153,0.8);
}

.whatsapp{
  position:fixed;
  bottom:20px;
  right:20px;
  background:linear-gradient(90deg,#22c55e,#4ade80);
  color:#022c22;
  padding:14px 18px;
  border-radius:50px;
  text-decoration:none;
  font-weight:600;
  box-shadow:0 0 22px rgba(34,197,94,0.8);
}

  .menu-btn{
  font-size:26px;
  cursor:pointer;
  color:#f472b6;
  text-shadow:0 0 10px #ec4899;
}

.popup-menu{
  position:fixed;
  top:0;
  left:-100%;
  width:70%;
  height:100%;
  background:rgba(20,5,35,0.95);
  backdrop-filter:blur(10px);
  border-right:2px solid rgba(236,72,153,0.4);
  padding:30px 20px;
  transition:0.4s ease;
  z-index:1000;
}

.popup-menu a{
  display:block;
  margin-bottom:20px;
  font-size:18px;
  color:#f9a8d4;
  text-decoration:none;
  text-shadow:0 0 8px #ec4899;
}

.popup-menu.active{
  left:0;
}

  </style>  <script>
    function toggleMenu(){
      document.getElementById('popupMenu').classList.toggle('active');
    }
  </script></head>
<body><header>
  <div class="menu-btn" onclick="toggleMenu()">☰</div>
  <div class="logo">🎀 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃 🎀</div>
  <div>🔐 Beta</div>
</header><!-- Popup Menu --><div id="popupMenu" class="popup-menu">
  <a href="#">🏠 Home</a>
  <a href="#">ℹ️ About</a>
  <a href="#">🛠 Services</a>
  <a href="#">📞 Contact</a>
</div><div class="welcome">Welcome back!</div><div class="card">
  <h3>🤖 WhatsApp Auto Reply Bot</h3>
  <p>Smart automated replies & menu system</p>
  <a href="#" class="premium">💎 PREMIUM ONLY</a>
</div><div class="card">
  <h3>📣 Business Broadcast Bot</h3>
  <p>Send promotions & updates automatically</p>
  <a href="#" class="premium">💎 PREMIUM ONLY</a>
</div><div class="card">
  <h3>🧠 AI Customer Support</h3>
  <p>24/7 intelligent chat handling</p>
  <a href="#" class="premium">💎 PREMIUM ONLY</a>
</div><a class="whatsapp" href="https://wa.me/94764085107" target="_blank">💬 WhatsApp</a>

</body>
</html>
