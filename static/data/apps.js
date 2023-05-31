var apps = [
  {
    'id': 'customapp',
    'title': 'Add custom app',
    'image': 'assets/addicon.png'
  },
  {
    "id": "google",
    "title": "Google",
    "url": "https://www.google.com/?safe=active&ssui=on",
    'image': 'https://img.freepik.com/free-icon/search_318-265146.jpg'
    
  },
  {
    
  },
  {
    "id": "geforce",
    "title": "GeForce NOW",
    "url": "https://play.geforcenow.com",
    'image': 'https://raw.githubusercontent.com/proudparrot2/cdn/main/8z9zeDIT_400x400-removebg-preview.png'
  },
  {
    'id': 'vscode',
    'title': 'Visual Studio Code',
    'url': 'https://vscode.dev/',
    'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png'
  },
  {
    "id": "tiktok",
    "title": "TikTok",
    "url": "https://tiktok.com",
    'image': 'https://sf-tb-sg.ibytedtos.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png'
  },
  {
    'id': 'nowgg',
    'title': 'now.gg',
    'url': 'https://nowgg.me/',
    'image': 'https://uploads-ssl.webflow.com/60f008ba9757da0940af288e/6232d610e4172bed260d4cfd_9Dw5vXGi_400x400.jpeg',
    'description': 'Now.gg is currently down (don\'t click on the roblox link)',
  },
  {
    "id": "reddit",
    "title": "Reddit",
    "url": "https://reddit.com",
    'image': 'https://www.redditinc.com/assets/images/site/reddit-logo.png'
  },
  {
    "id": "youtube",
    "title": "YouTube",
    "url": "https://youtube.com",
    'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/YouTube_social_red_square_%282017%29.svg/2048px-YouTube_social_red_square_%282017%29.svg.png'
  },
  {
    "id": "twitter",
    "title": "Twitter",
    "url": "https://twitter.com",
    'image': 'https://seeklogo.com/images/T/twitter-icon-square-logo-108D17D373-seeklogo.com.png'
  },
  {
    'id': 'spotify',
    'title': 'Spotify',
    'url': 'https://open.spotify.com/browse',
    'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png'
  },
  {
    'id': 'chess',
    'title': 'Chess.com',
    'url': 'https://chess.com',
    'image': 'https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpmeXx6V.png'
  },
  {
    'id': 'sflix',
    'title': 'SFlix',
    'url': 'https://sflix.to',
    'image': 'https://play-lh.googleusercontent.com/YO-cgAQEdDuX9xvEYNOdPfc0-Nxzvz4vZaIt9eBOWoh2VTPHe8eHX6byn5b94X3gpcI=s200'
  },
  {
    'id': 'coolmathgames',
    'title': 'Cool Math Games',
    'url': 'https://coolmathgames.com',
    'image': 'https://docs.google.com/drawings/d/e/2PACX-1vR6y2GvcGu9PdrX9zzE24dhm24hClcNsdAmZjIgSUC8sFOahf6t7Yg6l_W8Rd4GduWOH_X02GHVFdBb/pub?w=512&h=512'
  },
  {
    'id': 'win11',
    'title': 'Windows 11 in React',
    'url': 'https://win11.blueedge.me/',
    "image": "https://cdn.upload.systems/uploads/lnysPmIS.png",
    "description": "A remake of the Windows 11 UI in React.js"
  },
  {
    'id': 'gbaemulator',
    'title': 'GBA Emulator',
    'url': 'https://cattn.github.io/gba',
    "image": "https://cattn.github.io/gba/pwa/apple-icon-180.png",
    "description": "A Game Boy Advance retro emulator with over 3000 games, and other consoles as well"
  }
]

var customapps = JSON.parse(localStorage.getItem("customapps"))
customapps.forEach(app => {
  apps.push(app)
})

console.log("Loaded " + apps.length + " apps")
console.log("Loaded " + customapps.length + " custom apps")
