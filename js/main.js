
    const root = document.documentElement;
    const themeButton = document.getElementById("theme-toggle");
    const languageButton = document.getElementById("language-toggle");
    const metaDescription = document.getElementById("meta-description");

    const translations = {
      pt: {
        htmlLang: "pt-BR",
        pageTitle: "Gabriel Daher | Desenvolvedor de Jogos",
        metaDescription: "Portfólio de desenvolvimento de jogos de Gabriel Daher.",
        navAria: "Navegação principal",
        navProjects: "Projetos",
        navAbout: "Sobre mim",
        navResume: "Currículo",
        navContact: "Contato",
        languageAria: "Mudar idioma para inglês",
        themeAria: "Alternar entre modo claro e escuro",
        themeDark: "Escuro",
        themeLight: "Claro",
        eyebrow: "Game Developer / Unity / XR",
        heroTitle: "Jogos, sistemas e experiências interativas.",
        profilePlaceholder: "espaço para foto de perfil",
        heroCopy: "Portfólio de projetos de desenvolvimento de jogos, experiências em realidade virtual e trabalhos acadêmicos relacionados a interação e tecnologia.",
        projectsTitle: "Projetos",
        projectsSubtitle: "Seleção de trabalhos",
        project01: "PROJETO 01",
        project02: "PROJETO 02",
        project03: "PROJETO 03",
        mainImage: "imagem principal do projeto",
        secondaryImage: "imagem secundária",
        secondaryImage2: "segunda imagem secundária",
        mainVideoTitle: "Vídeo principal do projeto",
        secondaryVideoTitle: "Vídeo secundário do projeto",
        videoThumb: "thumbnail do vídeo",
        watchVideo: "Ver vídeo ↗",
        videoAria: "Abrir vídeo do projeto no YouTube",
        canoaDesc: "Template para projetos em que o vídeo é a principal mídia de apresentação. O player do YouTube ocupa a área principal, acompanhado por duas imagens secundárias.",
        gvgDesc: "Template para projetos em que a imagem principal continua em destaque e o vídeo aparece como uma das mídias secundárias ao lado de outra imagem.",
        bowDesc: "Template para projetos apresentados apenas por imagens, sem player incorporado e sem redirecionamento para vídeo.",
        roleLabel: "Papel",
        platformLabel: "Plataforma",
        statusLabel: "Status",
        canoaStatus: "Em andamento",
        gvgStatus: "Concluído",
        bowStatus: "Protótipo",
        canoaRole: "Exemplo de função no projeto",
        gvgRole: "Exemplo de função no projeto",
        gvgPlatform: "Exemplo de plataforma",
        bowRole: "Exemplo de função no projeto",
        sourceCode: "Código-fonte ↗",
        aboutTitle: "Sobre mim",
        aboutLead: "Desenvolvedor interessado em jogos, realidade virtual e sistemas interativos.",
        aboutCopy: "Este espaço pode trazer uma apresentação curta, formação, interesses técnicos e o tipo de trabalho que você procura. A ideia é manter o texto objetivo e deixar os projetos como principal evidência do seu trabalho.",
        resumeTitle: "Currículo",
        resumeLead: "Formação, experiência profissional, pesquisa e principais competências.",
        resumeLink: "Currículo em PDF ↗",
        contactTitle: "Contato",
        contactLead: "Disponível para projetos, estágio, pesquisa e oportunidades em desenvolvimento de jogos.",
        emailLink: "Email ↗",
        youtubeAcademic: "YouTube acadêmico ↗",
        youtubePersonal: "YouTube pessoal ↗",
        footer: "Gabriel Daher / Desenvolvedor de Jogos"
      },

      en: {
        htmlLang: "en",
        pageTitle: "Gabriel Daher | Game Developer",
        metaDescription: "Game development portfolio by Gabriel Daher.",
        navAria: "Main navigation",
        navProjects: "Projects",
        navAbout: "About",
        navResume: "Resume",
        navContact: "Contact",
        languageAria: "Switch language to Portuguese",
        themeAria: "Toggle between light and dark mode",
        themeDark: "Dark",
        themeLight: "Light",
        eyebrow: "Game Developer / Unity / XR",
        heroTitle: "Games, systems and interactive experiences.",
        profilePlaceholder: "profile photo space",
        heroCopy: "A portfolio of game development projects, virtual reality experiences and academic work related to interaction and technology.",
        projectsTitle: "Projects",
        projectsSubtitle: "Selected work",
        project01: "PROJECT 01",
        project02: "PROJECT 02",
        project03: "PROJECT 03",
        mainImage: "main project image",
        secondaryImage: "secondary image",
        secondaryImage2: "second secondary image",
        mainVideoTitle: "Main project video",
        secondaryVideoTitle: "Secondary project video",
        videoThumb: "video thumbnail",
        watchVideo: "Watch video ↗",
        videoAria: "Open project video on YouTube",
        canoaDesc: "Template for projects where video is the primary presentation media. The YouTube player occupies the main area, accompanied by two secondary images.",
        gvgDesc: "Template for projects where the main image remains the primary visual and the video appears as one of the secondary media items beside another image.",
        bowDesc: "Template for projects presented only through images, with no embedded player and no redirect to an external video.",
        roleLabel: "Role",
        platformLabel: "Platform",
        statusLabel: "Status",
        canoaStatus: "In progress",
        gvgStatus: "Completed",
        bowStatus: "Prototype",
        canoaRole: "Example project role",
        gvgRole: "Example project role",
        gvgPlatform: "Example platform",
        bowRole: "Example project role",
        sourceCode: "Source code ↗",
        aboutTitle: "About",
        aboutLead: "Developer interested in games, virtual reality and interactive systems.",
        aboutCopy: "This section can contain a short introduction, education, technical interests and the kind of work you are looking for. The goal is to keep the text concise and let the projects serve as the main evidence of your work.",
        resumeTitle: "Resume",
        resumeLead: "Education, professional experience, research and core skills.",
        resumeLink: "Resume PDF ↗",
        contactTitle: "Contact",
        contactLead: "Available for projects, internships, research and opportunities in game development.",
        emailLink: "Email ↗",
        youtubeAcademic: "Academic YouTube ↗",
        youtubePersonal: "Personal YouTube ↗",
        footer: "Gabriel Daher / Game Developer"
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
  