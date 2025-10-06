import { Theme } from './types';

export const gioGradientTheme: Theme = {
  name: 'GIO Gradient',
  colors: {
    // ===== SIDEBAR =====
    // Gradiente oficial GIO com transparência (rosa → roxo → roxo claro)
    fundoSidebar: 'linear-gradient(135deg, rgba(80, 21, 115, 0.8) 0%, rgba(185, 43, 130, 0.8) 100%, rgba(147, 55, 172, 0.8) 100%)',
    bordaSidebar: '#B92B82', // PANTONE 675C - Rosa vibrante para bordas
    hoverSidebar: 'rgba(255, 255, 255, 0.2)', // Branco translúcido para hover
    fundoAtivoSidebar: '#ffffff', // Fundo branco para item ativo
    textoAtivoSidebar: '#501573', // Roxo escuro para contraste com fundo branco
    textoSidebar: '#ffffff', // Branco para texto
    iconeSidebar: '#ffffff', // Branco para melhor contraste com gradiente
    fundoFiltroSidebar: 'rgba(255, 255, 255, 0.1)', // Fundo branco translúcido para filtros
    textoFiltroSidebar: '#ffffff', // Branco para contraste com gradiente
    placeholderFiltroSidebar: '#ffffff', // Branco para placeholder
    iconeFiltroSidebar: '#ffffff', // Branco para melhor contraste
    opacidadeSubmenu: 'rgba(255, 255, 255, 0.1)', // Transparência sutil

    // ===== TOP BAR & TOOLBAR =====
    fundoToolbar: '#f8f9fa', // Cinza muito claro para toolbar
    fundoIconeHeader: 'linear-gradient(135deg, #B92B82 0%, #501573 100%)', // Gradiente oficial rosa → roxo

    // ===== CALENDAR HEADER =====
    fundoHeaderCalendario: 'rgba(81, 21, 115, 0.8)', // Roxo escuro com transparência
    hoverHeaderCalendario: '#B92B82', // Rosa vibrante para hover
    textoHeaderCalendario: '#501573', // Roxo escuro para texto do botão

    // ===== AVATAR/BADGE =====
    fundoAvatar: 'linear-gradient(135deg, #B92B82 0%, #501573 100%)', // Gradiente oficial rosa → roxo

    // ===== TIME SLOTS =====
    slotIndisponivel: '#f8f9fa', // Cinza muito claro
    slotBloqueado: '#e2e8f0', // Cinza claro
    slotDisponivel: 'linear-gradient(135deg, #fce7f3 0%, #f3e8ff 100%)', // Gradiente rosa → roxo muito claro

  },
};
