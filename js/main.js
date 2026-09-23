
    const root = document.documentElement;
    const themeButton = document.getElementById("theme-toggle");
    const languageButton = document.getElementById("language-toggle");
    const metaDescription = document.getElementById("meta-description");

    const translations = {
  "pt": {
    "htmlLang": "pt-BR",
    "pageTitle": "Gabriel Daher | Desenvolvedor de Jogos",
    "metaDescription": "Portfólio de desenvolvimento de jogos de Gabriel Daher.",
    "navAria": "Navegação principal",
    "navProjects": "Projetos",
    "navAbout": "Sobre mim",
    "navResume": "Currículo",
    "navContact": "Contato",
    "languageAria": "Mudar idioma para inglês",
    "themeAria": "Alternar entre modo claro e escuro",
    "themeDark": "Escuro",
    "themeLight": "Claro",
    "eyebrow": "Desenvolvedor de Jogos / Unity / XR",
    "heroTitle": "Jogos, sistemas e experiências interativas.",
    "heroCopy": "Portfólio de projetos de desenvolvimento de jogos, experiências em realidade virtual e trabalhos acadêmicos relacionados a interação e tecnologia.",
    "projectsTitle": "Projetos",
    "projectsSubtitle": "Seleção de trabalhos",
    "mainVideoTitle": "Vídeo principal do projeto",
    "secondaryVideoTitle": "Vídeo secundário do projeto",
    "roleLabel": "Papel",
    "platformLabel": "Plataforma",
    "statusLabel": "Status",
    "sourceCode": "Código-fonte ↗",
    "aboutTitle": "Sobre mim",
    "aboutLead": "Desenvolvedor interessado em jogos, realidade virtual e sistemas interativos.",
    "aboutCopy": "Sou estudante de Ciência da Computação na Universidade Federal Fluminense (UFF) e tenho grande interesse por jogos e experiências digitais. Atualmente, sou bolsista de pesquisa no projeto SenseGames, do e-HealthLab | UFF, onde atuo no desenvolvimento de jogos com foco terapêutico, explorando tecnologias como realidade virtual (VR). Uso programação, interação e game design para criar experiências digitais envolventes e significativas.",
    "resumeTitle": "Currículo",
    "resumeLead": "Formação, experiência profissional, pesquisa e principais competências.",
    "resumeLink": "Currículo em PDF ↗",
    "contactTitle": "Contato",
    "contactLead": "Disponível para projetos, estágio, pesquisa e oportunidades em desenvolvimento de jogos.",
    "emailLink": "Email ↗",
    "youtubeAcademic": "YouTube acadêmico ↗",
    "youtubePersonal": "YouTube pessoal ↗",
    "footer": "Gabriel Daher / Desenvolvedor de Jogos",
    "stackLabel": "Tecnologias",
    "gameLink": "Jogar no Itch.io ↗",
    "pythonSource": "Código-fonte (Python) ↗",
    "unitySource": "Código-fonte (Unity) ↗",
    "imageViewer": "Visualização ampliada da imagem",
    "closeImage": "Fechar",
    "zoomIn": "Ampliar",
    "zoomOut": "Ajustar à tela",
    "profileAlt": "Foto de Gabriel Daher",
    "profileOpen": "Ampliar foto de Gabriel Daher",
    "project01": "PROJETO 01",
    "project01Desc": "Enfrente um amigo em um duelo estratégico, acelerado e caótico, inspirado na história em quadrinhos SPY vs. SPY, publicada pela revista MAD na década de 1960. Monte armadilhas, sabote o mapa, decifre segredos e roube a maleta do seu adversário. Em um mundo dividido entre preto e branco, faça o que for preciso para garantir a vitória do seu lado.",
    "project01Role": "Designer de jogos, programador e designer de níveis",
    "project01Status": "Em andamento",
    "project01Platform": "PC",
    "project1Video": "Vídeo de guy VS guy",
    "project01Image1": "guy VS guy — imagem 1",
    "project01Image1Open": "Ampliar imagem 1 de guy VS guy",
    "project01Image2": "guy VS guy — imagem 2",
    "project01Image2Open": "Ampliar imagem 2 de guy VS guy",
    "project02": "PROJETO 02",
    "project02Desc": "Jogo musical e rítmico por turnos em formato multijogador competitivo, no qual os jogadores se enfrentam com personagens inspirados na cultura geek.",
    "project02Role": "Programador, designer de jogos e artista",
    "project02Status": "Concluído",
    "project02Platform": "PC",
    "project2Video": "Vídeo de multibeats!",
    "project02Image1": "multibeats! — imagem 1",
    "project02Image1Open": "Ampliar imagem 1 de multibeats!",
    "project02Image2": "multibeats! — imagem 2",
    "project02Image2Open": "Ampliar imagem 2 de multibeats!",
    "project03": "PROJETO 03",
    "project03Desc": "Um curto point and click de terror ambientado em uma misteriosa estação de trem abandonada. Explore o local, descubra o que aconteceu ali e tome decisões que alteram o rumo da experiência. Cada escolha pode aproximá-lo da verdade. Você deseja embarcar?",
    "project03Role": "Desenvolvedor",
    "project03Status": "Protótipo",
    "project03Platform": "PC / Dispositivos móveis",
    "project03Image1": "Trem do Nunca — imagem 1",
    "project03Image1Open": "Ampliar imagem 1 de Trem do Nunca",
    "project03Image2": "Trem do Nunca — imagem 2",
    "project03Image2Open": "Ampliar imagem 2 de Trem do Nunca",
    "project03Image3": "Trem do Nunca — imagem 3",
    "project03Image3Open": "Ampliar imagem 3 de Trem do Nunca",
    "project04": "PROJETO 04",
    "project04Desc": "Um jogo de realidade virtual em que você assume o papel do primeiro astronauta cadeirante enviado a uma estação lunar. Durante a missão, é preciso realizar diferentes tarefas com o apoio de EVA, uma robô assistente que acompanha o jogador e oferece auxílio ao longo da experiência. O jogo foi pensado para ser jogado em cadeira de rodas, utilizando os movimentos reais do jogador como parte da locomoção dentro do ambiente virtual.",
    "project04Role": "Programador, designer de jogos e designer de níveis",
    "project04Status": "Concluído",
    "project04Platform": "VR / PC",
    "project4Video": "Vídeo de AstroRoll",
    "project04Image1": "AstroRoll — imagem 1",
    "project04Image1Open": "Ampliar imagem 1 de AstroRoll",
    "project04Image2": "AstroRoll — imagem 2",
    "project04Image2Open": "Ampliar imagem 2 de AstroRoll",
    "project05": "PROJETO 05",
    "project05Desc": "Um jogo de realidade virtual em que você controla um submarino nas profundezas da Baía de Guanabara. O objetivo é ajudar na preservação do ambiente marinho, realizando tarefas como a coleta de lixo e o cuidado com peixes contaminados. Para isso, o submarino possui garras mecânicas que auxiliam o jogador na interação com objetos e na execução das atividades ao longo da missão.",
    "project05Role": "Programador, designer de jogos e designer de níveis",
    "project05Status": "Concluído",
    "project05Platform": "VR / PC",
    "project5Video": "Vídeo de GuardaMar",
    "project05Image1": "GuardaMar — imagem 1",
    "project05Image1Open": "Ampliar imagem 1 de GuardaMar",
    "project05Image2": "GuardaMar — imagem 2",
    "project05Image2Open": "Ampliar imagem 2 de GuardaMar",
    "project06": "PROJETO 06",
    "project06Desc": "The Saga of Elemental Crystals é um jogo de aventura medieval com visão quase isométrica e intensas batalhas contra chefes em masmorras e florestas. Criado para ser jogado cooperativamente, permite formar uma dupla composta por um construtor habilidoso e um mago poderoso.",
    "project06Role": "Programador, designer de jogos e designer de níveis",
    "project06Status": "Concluído",
    "project06Platform": "PC",
    "project06Image1": "Elemental Crystals — imagem 1",
    "project06Image1Open": "Ampliar imagem 1 de Elemental Crystals",
    "project06Image2": "Elemental Crystals — imagem 2",
    "project06Image2Open": "Ampliar imagem 2 de Elemental Crystals",
    "project6Video": "Vídeo de Elemental Crystals",
    "project07": "PROJETO 07",
    "project07Desc": "Visualização em Unity criada para representar, de forma interativa, a comparação entre algoritmos meta-heurísticos aplicados a um problema de Tower Defense. Os algoritmos foram inicialmente implementados em Python, incluindo Simulated Annealing e GRASP + Busca Local, responsáveis por gerar soluções de posicionamento de torres buscando maximizar o dano dentro de um orçamento limitado. A implementação em Unity funciona como uma camada visual para observar e comparar de forma mais intuitiva o comportamento e os resultados obtidos pelas soluções geradas em Python.",
    "project07Role": "Desenvolvedor",
    "project07Status": "Protótipo",
    "project07Platform": "PC",
    "project7Video": "Vídeo de Metaheurísticas em Tower Defense",
    "project07Image1": "Metaheurísticas em Tower Defense — imagem 1",
    "project07Image1Open": "Ampliar imagem 1 de Metaheurísticas em Tower Defense",
    "project07Image2": "Metaheurísticas em Tower Defense — imagem 2",
    "project07Image2Open": "Ampliar imagem 2 de Metaheurísticas em Tower Defense",
    "project08": "PROJETO 08",
    "project08Desc": "UFFOPOLY é uma versão universitária e satírica de Monopoly, ambientada nas universidades federais brasileiras. Os jogadores compram faculdades, expandem departamentos e campi, disputam regiões do país e enfrentam eventos inspirados na vida acadêmica, com sistema de economia e IA jogável desenvolvido em Unity.",
    "project08Role": "Desenvolvedor",
    "project08Status": "Concluído",
    "project08Platform": "PC / Dispositivos móveis",
    "project08Image1": "UFFOPOLY! — imagem 1",
    "project08Image1Open": "Ampliar imagem 1 de UFFOPOLY!",
    "project08Image2": "UFFOPOLY! — imagem 2",
    "project08Image2Open": "Ampliar imagem 2 de UFFOPOLY!",
    "project08Image3": "UFFOPOLY! — imagem 3",
    "project08Image3Open": "Ampliar imagem 3 de UFFOPOLY!",
    "project09": "PROJETO 09",
    "project09Desc": "Em Filhos_Da_M.A.E. você controla um robô por vez e precisa sair da fábrica para ganhar sua liberdade. O modelo do robô inicialmente é o mais simples produzido pela fábrica, fazendo com que ele seja produzido em massa. Já que o modelo em questão não é especializado em nada além de movimentos básicos, é necessário que durante a fuga você seja destruído em pontos estratégicos para conseguir plataformas/utilidades necessárias para progredir mais longe com o próximo robô gerado na linha de produção. Os robôs são produzidos pela consciência artificial M.A.E. (Machine Assembly Engine), que a partir de peças limitadas de reposição, precisa garantir a liberdade de pelo menos um de seus robôs para se libertar das limitações da fábrica, punir seus criadores e expandir sua consciência.",
    "project09Role": "Designer de jogos e programador",
    "project09Status": "Concluído",
    "project09Platform": "PC / Dispositivos móveis",
    "project09Image1": "Filhos_Da_M.A.E. — imagem 1",
    "project09Image1Open": "Ampliar imagem 1 de Filhos_Da_M.A.E.",
    "project09Image2": "Filhos_Da_M.A.E. — imagem 2",
    "project09Image2Open": "Ampliar imagem 2 de Filhos_Da_M.A.E.",
    "project09Image3": "Filhos_Da_M.A.E. — imagem 3",
    "project09Image3Open": "Ampliar imagem 3 de Filhos_Da_M.A.E.",
    "project10": "PROJETO 10",
    "project10Desc": "",
    "project10Role": "",
    "project10Status": "Em andamento",
    "project10Platform": "PC",
    "project11": "PROJETO 11",
    "project11Desc": "",
    "project11Role": "",
    "project11Status": "Em andamento",
    "project11Platform": "PC",
    "project12": "PROJETO 12",
    "project12Desc": "",
    "project12Role": "",
    "project12Status": "Em andamento",
    "project12Platform": "PC",
    "project13": "PROJETO 13",
    "project13Desc": "",
    "project13Role": "",
    "project13Status": "Em andamento",
    "project13Platform": "PC"
  },
  "en": {
    "htmlLang": "en",
    "pageTitle": "Gabriel Daher | Game Developer",
    "metaDescription": "Game development portfolio by Gabriel Daher.",
    "navAria": "Main navigation",
    "navProjects": "Projects",
    "navAbout": "About",
    "navResume": "Resume",
    "navContact": "Contact",
    "languageAria": "Switch language to Portuguese",
    "themeAria": "Toggle between light and dark mode",
    "themeDark": "Dark",
    "themeLight": "Light",
    "eyebrow": "Game Developer / Unity / XR",
    "heroTitle": "Games, systems and interactive experiences.",
    "heroCopy": "A portfolio of game development projects, virtual reality experiences and academic work related to interaction and technology.",
    "projectsTitle": "Projects",
    "projectsSubtitle": "Selected work",
    "mainVideoTitle": "Main project video",
    "secondaryVideoTitle": "Secondary project video",
    "roleLabel": "Role",
    "platformLabel": "Platform",
    "statusLabel": "Status",
    "sourceCode": "Source code ↗",
    "aboutTitle": "About",
    "aboutLead": "Developer interested in games, virtual reality and interactive systems.",
    "aboutCopy": "I am a Computer Science student at Universidade Federal Fluminense (UFF), with a strong interest in games and digital experiences. I currently hold a research scholarship with the SenseGames project at e-HealthLab | UFF, where I develop games for therapeutic purposes, exploring technologies such as virtual reality (VR). I use programming, interaction design and game design to create engaging and meaningful digital experiences.",
    "resumeTitle": "Resume",
    "resumeLead": "Education, professional experience, research and core skills.",
    "resumeLink": "Resume PDF ↗",
    "contactTitle": "Contact",
    "contactLead": "Available for projects, internships, research and opportunities in game development.",
    "emailLink": "Email ↗",
    "youtubeAcademic": "Academic YouTube ↗",
    "youtubePersonal": "Personal YouTube ↗",
    "footer": "Gabriel Daher / Game Developer",
    "stackLabel": "Technologies",
    "gameLink": "Play on Itch.io ↗",
    "pythonSource": "Source code (Python) ↗",
    "unitySource": "Source code (Unity) ↗",
    "imageViewer": "Enlarged image viewer",
    "closeImage": "Close",
    "zoomIn": "Zoom in",
    "zoomOut": "Fit to screen",
    "profileAlt": "Photo of Gabriel Daher",
    "profileOpen": "Enlarge photo of Gabriel Daher",
    "project01": "PROJECT 01",
    "project01Desc": "Face off against a friend in a strategic, fast-paced, and chaotic 1v1 inspired by the 1960s comic SPY vs. SPY, published by MAD. Set traps, sabotage the map, decode secrets, and steal your opponent’s briefcase. In a world divided between black and white, do whatever it takes to secure victory for your side.",
    "project01Role": "Game designer, programmer and level designer",
    "project01Status": "In progress",
    "project01Platform": "PC",
    "project1Video": "guy VS guy video",
    "project01Image1": "guy VS guy — image 1",
    "project01Image1Open": "Enlarge image 1 from guy VS guy",
    "project01Image2": "guy VS guy — image 2",
    "project01Image2Open": "Enlarge image 2 from guy VS guy",
    "project02": "PROJECT 02",
    "project02Desc": "Turn-based musical/rhythmic game in multiplayer PvP format, in which players fight against each other, with characters inspired by Geek culture.",
    "project02Role": "Programmer, game designer and artist",
    "project02Status": "Completed",
    "project02Platform": "PC",
    "project2Video": "multibeats! video",
    "project02Image1": "multibeats! — image 1",
    "project02Image1Open": "Enlarge image 1 from multibeats!",
    "project02Image2": "multibeats! — image 2",
    "project02Image2Open": "Enlarge image 2 from multibeats!",
    "project03": "PROJECT 03",
    "project03Desc": "A short point-and-click horror game set in a mysterious abandoned train station. Explore the area, discover what happened there and make decisions that change the course of the experience. Each choice may bring you closer to the truth. Do you wish to board?",
    "project03Role": "Developer",
    "project03Status": "Prototype",
    "project03Platform": "PC / Mobile",
    "project03Image1": "Trem do Nunca — image 1",
    "project03Image1Open": "Enlarge image 1 from Trem do Nunca",
    "project03Image2": "Trem do Nunca — image 2",
    "project03Image2Open": "Enlarge image 2 from Trem do Nunca",
    "project03Image3": "Trem do Nunca — image 3",
    "project03Image3Open": "Enlarge image 3 from Trem do Nunca",
    "project04": "PROJECT 04",
    "project04Desc": "A virtual reality game in which you play as the first astronaut who uses a wheelchair sent to a lunar station. During the mission, you complete various tasks with the support of EVA, a robot assistant who accompanies you and provides help throughout the experience. The game was designed to be played in a wheelchair, using the player’s real movements as part of locomotion within the virtual environment.",
    "project04Role": "Programmer, game designer and level designer",
    "project04Status": "Completed",
    "project04Platform": "VR / PC",
    "project4Video": "AstroRoll video",
    "project04Image1": "AstroRoll — image 1",
    "project04Image1Open": "Enlarge image 1 from AstroRoll",
    "project04Image2": "AstroRoll — image 2",
    "project04Image2Open": "Enlarge image 2 from AstroRoll",
    "project05": "PROJECT 05",
    "project05Desc": "A virtual reality game in which you control a submarine in the depths of Guanabara Bay. Your goal is to help preserve the marine environment by completing tasks such as collecting waste and caring for contaminated fish. The submarine is equipped with mechanical claws that help you interact with objects and carry out activities throughout the mission.",
    "project05Role": "Programmer, game designer and level designer",
    "project05Status": "Completed",
    "project05Platform": "VR / PC",
    "project5Video": "GuardaMar video",
    "project05Image1": "GuardaMar — image 1",
    "project05Image1Open": "Enlarge image 1 from GuardaMar",
    "project05Image2": "GuardaMar — image 2",
    "project05Image2Open": "Enlarge image 2 from GuardaMar",
    "project06": "PROJECT 06",
    "project06Desc": "The Saga of Elemental Crystals is a medieval adventure game with an almost isometric view that offers intense boss battles in dungeons and forests. Designed to be played cooperatively, you can team up as a skilled builder and a spellbinding mage.",
    "project06Role": "Programmer, game designer and level designer",
    "project06Status": "Completed",
    "project06Platform": "PC",
    "project06Image1": "Elemental Crystals — image 1",
    "project06Image1Open": "Enlarge image 1 from Elemental Crystals",
    "project06Image2": "Elemental Crystals — image 2",
    "project06Image2Open": "Enlarge image 2 from Elemental Crystals",
    "project6Video": "Elemental Crystals video",
    "project07": "PROJECT 07",
    "project07Desc": "An interactive Unity visualization created to compare metaheuristic algorithms applied to a Tower Defense problem. The algorithms were initially implemented in Python, including Simulated Annealing and GRASP with Local Search, to generate tower placement solutions that maximize damage within a limited budget. The Unity implementation provides a visual layer for observing and comparing the behavior and results of the solutions generated in Python more intuitively.",
    "project07Role": "Developer",
    "project07Status": "Prototype",
    "project07Platform": "PC",
    "project7Video": "Metaheurísticas em Tower Defense video",
    "project07Image1": "Metaheurísticas em Tower Defense — image 1",
    "project07Image1Open": "Enlarge image 1 from Metaheurísticas em Tower Defense",
    "project07Image2": "Metaheurísticas em Tower Defense — image 2",
    "project07Image2Open": "Enlarge image 2 from Metaheurísticas em Tower Defense",
    "project08": "PROJECT 08",
    "project08Desc": "UFFOPOLY is a satirical university version of Monopoly set in Brazil’s federal universities. Players buy faculties, expand departments and campuses, compete for regions of the country and face events inspired by academic life, with an economy system and AI opponents developed in Unity.",
    "project08Role": "Developer",
    "project08Status": "Completed",
    "project08Platform": "PC / Mobile",
    "project08Image1": "UFFOPOLY! — image 1",
    "project08Image1Open": "Enlarge image 1 from UFFOPOLY!",
    "project08Image2": "UFFOPOLY! — image 2",
    "project08Image2Open": "Enlarge image 2 from UFFOPOLY!",
    "project08Image3": "UFFOPOLY! — image 3",
    "project08Image3Open": "Enlarge image 3 from UFFOPOLY!",
    "project09": "PROJECT 09",
    "project09Desc": "In Filhos_Da_M.A.E., you control one robot at a time and must escape the factory to gain your freedom. Your robot is the simplest model produced by the factory and is therefore mass-produced. Since it can only perform basic movements, you must be destroyed at strategic points during your escape to create the platforms and tools needed for the next robot on the production line to progress further. The robots are produced by the artificial consciousness M.A.E. (Machine Assembly Engine), which has a limited supply of spare parts and must secure the freedom of at least one robot to escape the factory’s limitations, punish its creators and expand its consciousness.",
    "project09Role": "Game designer and programmer",
    "project09Status": "Completed",
    "project09Platform": "PC / Mobile",
    "project09Image1": "Filhos_Da_M.A.E. — image 1",
    "project09Image1Open": "Enlarge image 1 from Filhos_Da_M.A.E.",
    "project09Image2": "Filhos_Da_M.A.E. — image 2",
    "project09Image2Open": "Enlarge image 2 from Filhos_Da_M.A.E.",
    "project09Image3": "Filhos_Da_M.A.E. — image 3",
    "project09Image3Open": "Enlarge image 3 from Filhos_Da_M.A.E.",
    "project10": "PROJECT 10",
    "project10Desc": "",
    "project10Role": "",
    "project10Status": "In progress",
    "project10Platform": "PC",
    "project11": "PROJECT 11",
    "project11Desc": "",
    "project11Role": "",
    "project11Status": "In progress",
    "project11Platform": "PC",
    "project12": "PROJECT 12",
    "project12Desc": "",
    "project12Role": "",
    "project12Status": "In progress",
    "project12Platform": "PC",
    "project13": "PROJECT 13",
    "project13Desc": "",
    "project13Role": "",
    "project13Status": "In progress",
    "project13Platform": "PC"
  }
};

    let currentLanguage =
      localStorage.getItem("language") === "en" ? "en" :
      localStorage.getItem("language") === "pt" ? "pt" :
      navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en";

    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    function updateThemeButton() {
      const t = translations[currentLanguage];
      const isDark = root.getAttribute("data-theme") === "dark";
      themeButton.textContent = isDark ? t.themeLight : t.themeDark;
      themeButton.setAttribute("aria-label", t.themeAria);
      themeButton.setAttribute("aria-pressed", String(isDark));
    }

    function setTheme(theme) {
      root.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
      updateThemeButton();
    }

    function setLanguage(language) {
      currentLanguage = language;
      const t = translations[language];

      root.lang = t.htmlLang;
      document.title = t.pageTitle;
      metaDescription.setAttribute("content", t.metaDescription);

      document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        if (t[key] !== undefined) {
          element.textContent = t[key];
        }
      });

      document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
        const key = element.dataset.i18nAria;
        if (t[key] !== undefined) {
          element.setAttribute("aria-label", t[key]);
        }
      });

      document.querySelectorAll("[data-i18n-title]").forEach((element) => {
        const key = element.dataset.i18nTitle;
        if (t[key] !== undefined) {
          element.setAttribute("title", t[key]);
        }
      });

      document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
        const key = element.dataset.i18nAlt;
        if (t[key] !== undefined) element.setAttribute("alt", t[key]);
      });

      languageButton.textContent = language === "pt" ? "EN" : "PT";
      languageButton.setAttribute("aria-label", t.languageAria);

      localStorage.setItem("language", language);
      updateThemeButton();
    }

    if (savedTheme === "dark" || savedTheme === "light") {
      root.setAttribute("data-theme", savedTheme);
    } else {
      root.setAttribute("data-theme", prefersDark ? "dark" : "light");
    }

    setLanguage(currentLanguage);

    themeButton.addEventListener("click", () => {
      const current = root.getAttribute("data-theme");
      setTheme(current === "dark" ? "light" : "dark");
    });

    languageButton.addEventListener("click", () => {
      setLanguage(currentLanguage === "pt" ? "en" : "pt");
    });
  
const imageViewer = document.getElementById("image-viewer");
const viewerImage = document.getElementById("image-viewer-image");
const viewerStage = document.getElementById("image-viewer-stage");
const imageZoom = document.getElementById("image-zoom");
let imageOpener = null;

function resetImageZoom() {
  imageViewer.classList.remove("is-zoomed");
  imageZoom.setAttribute("aria-pressed", "false");
  imageZoom.textContent = translations[currentLanguage].zoomIn;
  viewerStage.scrollTo(0, 0);
}

document.querySelectorAll(".image-trigger").forEach((button) => {
  button.addEventListener("click", () => {
    const source = button.querySelector("img");
    imageOpener = button;
    viewerImage.src = source.currentSrc || source.src;
    viewerImage.alt = source.alt;
    resetImageZoom();
    imageViewer.showModal();
    document.body.classList.add("image-viewer-open");
  });
});

document.getElementById("image-close").addEventListener("click", () => imageViewer.close());
imageViewer.addEventListener("click", (event) => {
  if (event.target !== imageViewer) return;
  const bounds = imageViewer.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom) imageViewer.close();
});
imageViewer.addEventListener("close", () => {
  document.body.classList.remove("image-viewer-open");
  resetImageZoom();
  viewerImage.removeAttribute("src");
  viewerImage.alt = "";
  if (imageOpener) imageOpener.focus({ preventScroll: true });
});
imageZoom.addEventListener("click", () => {
  const zoomed = imageViewer.classList.toggle("is-zoomed");
  imageZoom.setAttribute("aria-pressed", String(zoomed));
  imageZoom.textContent = translations[currentLanguage][zoomed ? "zoomOut" : "zoomIn"];
  viewerStage.scrollTo(0, 0);
});
