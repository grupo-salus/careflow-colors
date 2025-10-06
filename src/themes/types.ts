export interface Theme {
  name: string;
  colors: {
    // Sidebar
    fundoSidebar: string;
    bordaSidebar: string;
    hoverSidebar: string;
    fundoAtivoSidebar: string;
    textoAtivoSidebar: string;
    textoSidebar: string;
    iconeSidebar: string;
    fundoFiltroSidebar: string;
    textoFiltroSidebar: string;
    placeholderFiltroSidebar: string;
    iconeFiltroSidebar: string;
    opacidadeSubmenu: string;

    // Top Bar & Toolbar
    fundoToolbar: string;
    fundoIconeHeader: string;

    // Calendar Header
    fundoHeaderCalendario: string;
    hoverHeaderCalendario: string;
    textoHeaderCalendario: string;

    // Avatar/Badge
    fundoAvatar: string;

    // Time Slots
    slotIndisponivel: string;
    slotBloqueado: string;
    slotDisponivel: string;

    // Careflow Brand
    hoverFiltroSidebar: string;

  };
}
