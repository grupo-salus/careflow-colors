import { Theme } from './types';

export const gioGradientTheme: Theme = {
  name: 'GIO Gradient',
  colors: {
    // ===== SIDEBAR =====
    // Tema GIO com roxo principal
    fundoSidebar: 'rgba(81, 21, 115, 0.75)', // Roxo escuro com transparência
    bordaSidebar: 'rgba(81, 21, 115, 0.75)', // Roxo escuro para bordas
    hoverSidebar: 'rgba(255, 255, 255, 0.2)', // Branco translúcido para hover
    fundoAtivoSidebar: '#ffffff', // Fundo branco para item ativo
    textoAtivoSidebar: '#501573', // Roxo escuro para contraste com fundo branco
    textoSidebar: '#ffffff', // Branco para texto
    iconeSidebar: '#ffffff', // Branco para melhor contraste com gradiente
    fundoFiltroSidebar: '#ffffff', // Fundo branco sólido para filtros
    textoFiltroSidebar: '#501573', // Roxo escuro para contraste com fundo branco
    placeholderFiltroSidebar: '#999999', // Cinza para placeholder
    iconeFiltroSidebar: '#501573', // Roxo escuro para contraste com fundo branco
    opacidadeSubmenu: 'rgba(255, 255, 255, 0.1)', // Transparência sutil

    // ===== TOP BAR & TOOLBAR =====
    fundoToolbar: '#f8f9fa', // Cinza muito claro para toolbar
    fundoIconeHeader: 'rgba(81, 21, 115, 0.75)', // Roxo escuro para ícones

    // ===== CALENDAR HEADER =====
    fundoHeaderCalendario: 'rgba(81, 21, 115, 0.75)', // Roxo escuro com transparência
    hoverHeaderCalendario: '#B92B82', // Rosa vibrante para hover
    textoHeaderCalendario: '#501573', // Roxo escuro para texto do botão

    // ===== AVATAR/BADGE =====
    fundoAvatar: 'rgba(81, 21, 115, 0.75)', // Roxo escuro para avatar

    // ===== TIME SLOTS =====
    slotIndisponivel: '#f8f9fa', // Cinza muito claro
    slotBloqueado: '#e0e0e0', // Cinza claro para bloqueado
    slotDisponivel: '#e8f4fd', // Azul muito claro para slots disponíveis

    // ===== CAREFLOW BRAND =====
    hoverFiltroSidebar: 'linear-gradient(120deg, #683fe7 15%, #ca2cb2 50%, #fd9010 100%)', // Gradiente do Careflow

  },
};
