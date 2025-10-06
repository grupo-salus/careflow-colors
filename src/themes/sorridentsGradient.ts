import { Theme } from './types';

export const sorridentsGradientTheme: Theme = {
  name: 'Sorridents Gradient',
  colors: {
    // ===== SIDEBAR =====
    // Gradiente azul principal usando as cores oficiais da marca
    fundoSidebar: 'linear-gradient(135deg, rgba(49, 39, 131, 0.9) 0%, rgba(0, 159, 227, 0.9) 100%)', // Gradiente azul principal
    bordaSidebar: '#009FE3', // PANTONE 299C - Azul claro para bordas
    hoverSidebar: 'rgba(255, 255, 255, 0.2)', // Branco translúcido para hover
    fundoAtivoSidebar: '#ffffff', // Fundo branco para item ativo
    textoAtivoSidebar: '#009640', // Verde para contraste com fundo branco
    textoSidebar: '#ffffff', // Branco para texto
    iconeSidebar: '#F5C808', // PANTONE 109C - Amarelo para ícones
    fundoFiltroSidebar: 'rgba(255, 255, 255, 0.1)', // Fundo branco translúcido para filtros
    textoFiltroSidebar: '#312783', // Azul escuro para contraste
    placeholderFiltroSidebar: '#F5C808', // PANTONE 109C - Amarelo para placeholder
    iconeFiltroSidebar: '#F5C808', // PANTONE 109C - Amarelo para ícones
    opacidadeSubmenu: 'rgba(255, 255, 255, 0.1)', // Transparência sutil

    // ===== TOP BAR & TOOLBAR =====
    fundoToolbar: '#f8f9fa', // Cinza muito claro para toolbar
    fundoIconeHeader: '#312783', // Azul principal para ícones

    // ===== CALENDAR HEADER =====
    fundoHeaderCalendario: 'rgba(49, 39, 131, 0.9)', // Azul escuro com transparência
    hoverHeaderCalendario: '#009FE3', // Azul claro para hover
    textoHeaderCalendario: '#312783', // Azul escuro para texto do botão

    // ===== AVATAR/BADGE =====
    fundoAvatar: '#E30613', // PANTONE 185C - Vermelho da marca

    // ===== TIME SLOTS =====
    slotIndisponivel: '#f8f9fa', // Cinza muito claro
    slotBloqueado: '#e0e0e0', // Cinza claro para bloqueado
    slotDisponivel: '#e8f4fd', // Azul muito claro baseado na cor principal

    // ===== STATUS COLORS =====
    statusConcluido: '#009640', // PANTONE 355C - Verde para concluído
    statusPendente: '#F5C808', // PANTONE 109C - Amarelo para pendente
    statusEmAndamento: '#E30613', // PANTONE 185C - Vermelho para em andamento
  },
};
