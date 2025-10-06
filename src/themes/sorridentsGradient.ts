import { Theme } from './types';

export const sorridentsGradientTheme: Theme = {
  name: 'Sorridents Gradient',
  colors: {
    // ===== SIDEBAR =====
    // Gradiente azul principal usando as cores oficiais da marca
    fundoSidebar: ' #4382b5', // Gradiente azul principal
    bordaSidebar: '#4382b5', // PANTONE 299C - Azul claro para bordas
    hoverSidebar: 'rgba(255, 255, 255, 0.2)', // Branco translúcido para hover
    fundoAtivoSidebar: '#ffffff', // Fundo branco para item ativo
    textoAtivoSidebar: '#4382b5', // Verde para contraste com fundo branco
    textoSidebar: '#ffffff', // Branco para texto
    iconeSidebar: '#ffffff', // PANTONE 109C - Amarelo para ícones
    fundoFiltroSidebar: '#ffffff', // Fundo branco sólido para filtros
    textoFiltroSidebar: '#312783', // Azul escuro para contraste
    placeholderFiltroSidebar: '#4382b5', // PANTONE 109C - Amarelo para placeholder
    iconeFiltroSidebar: '#4382b5', // PANTONE 109C - Amarelo para ícones
    opacidadeSubmenu: 'rgba(255, 255, 255, 0.1)', // Transparência sutil

    // ===== TOP BAR & TOOLBAR =====
    fundoToolbar: '#f8f9fa', // Cinza muito claro para toolbar
    fundoIconeHeader: '#4382b5', // Azul principal para ícones

    // ===== CALENDAR HEADER =====
    fundoHeaderCalendario: '#4382b5', // Azul escuro com transparência
    hoverHeaderCalendario: '#4382b5', // Azul claro para hover
    textoHeaderCalendario: '#312783', // Azul escuro para texto do botão

    // ===== AVATAR/BADGE =====
    fundoAvatar: '#4382b5', // PANTONE 185C - Vermelho da marca

    // ===== TIME SLOTS =====
    slotIndisponivel: '#f8f9fa', // Cinza muito claro
    slotBloqueado: '#e0e0e0', // Cinza claro para bloqueado
    slotDisponivel: '#e8f4fd', // Azul muito claro baseado na cor principal

    // ===== CAREFLOW BRAND =====
    hoverFiltroSidebar: 'linear-gradient(120deg, #683fe7 15%, #ca2cb2 50%, #fd9010 100%)',

  },
};
