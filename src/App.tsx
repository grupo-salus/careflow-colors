import { useState, useEffect } from 'react';
import { Menu, Bell, User, Settings, Search, Plus, Calendar, Filter, RefreshCw, ChevronLeft, ChevronRight, Palette, Grid3X3, Home, Layers, DollarSign, ShoppingCart, Building, Code, Handshake, List, BarChart3, ChevronDown } from 'lucide-react';
import { themes } from './themes';

function App() {
  const [currentTheme, setCurrentTheme] = useState<string>('sorridentsGradient');
  const [showThemeSelector, setShowThemeSelector] = useState(false);
  const theme = themes[currentTheme];

  // Defina os profissionais em uma constante para reutilização
  const professionals = [
    { initials: 'PG', name: 'Global' },
    { initials: 'PG', name: 'Global 2' },
    { initials: 'PE', name: 'Profissional E-commerce' },
    { initials: 'PE', name: 'ProfissionalExemplo1' },
    { initials: 'PE', name: 'ProfissionalExemplo2', extra: ['● ErasodadosExemplo1', '● 08:00 - 18:00'] },
    { initials: 'PE', name: 'ProfissionalExemplo3' },
  ];

  // Criar estilos dinâmicos para o placeholder e gradiente
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .filter-input::placeholder {
        color: ${theme.colors.placeholderFiltroSidebar} !important;
      }
      .sidebar-gradient {
        background: ${theme.colors.fundoSidebar} !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, [theme.colors.placeholderFiltroSidebar, theme.colors.fundoSidebar]);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
          <Menu className="w-6 h-6 text-gray-600" />
          <img src="https://careflowsb.wetoksoft.com.br/images/careflow.png" alt="CareFlow" className="h-8" />
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: theme.colors.fundoIconeHeader }}>
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-medium text-gray-700">Agenda</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowThemeSelector(!showThemeSelector)}
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
              title="Mudar Tema"
            >
              <Palette className="w-5 h-5 text-gray-600" />
              {showThemeSelector && (
                <div className="absolute right-0 top-12 bg-white border border-gray-200 rounded-lg shadow-lg p-2 z-50 min-w-[200px]">
                  {Object.entries(themes).map(([key, t]) => (
                    <div
                      key={key}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentTheme(key);
                        setShowThemeSelector(false);
                      }}
                      className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center gap-3 text-sm cursor-pointer"
                    >
                      <div
                        className="w-4 h-4 rounded"
                        style={{ background: t.colors.fundoSidebar }}
                      />
                      <span className="text-gray-700">{t.name}</span>
                      {currentTheme === key && (
                        <span className="ml-auto text-green-600">✓</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </button>
            <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
            <span className="text-gray-600">0</span>
            <User className="w-5 h-5 text-gray-600 cursor-pointer" />
            <Settings className="w-5 h-5 text-gray-600 cursor-pointer" />
          </div>
        </header>

      {/* Main Content Area with Sidebar */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 flex flex-col sidebar-gradient" style={{ color: theme.colors.textoSidebar }}>
          {/* Search */}
          <div className="p-4 relative">
            <input
              type="text"
              placeholder="Filtro..."
              className="w-full px-3 py-2 rounded text-sm filter-input"
              style={{ 
                backgroundColor: theme.colors.fundoFiltroSidebar,
                color: theme.colors.textoFiltroSidebar
              }}
            />
            <Search className="w-4 h-4 absolute right-7 top-6" style={{ color: theme.colors.iconeFiltroSidebar }} />
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto">
            <div className="px-2 py-1">
              {/* Home Items */}
              <div className="flex items-center gap-3 px-3 py-2 rounded cursor-pointer transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.colors.hoverSidebar}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <Grid3X3 className="w-5 h-5" style={{ color: theme.colors.iconeSidebar }} />
                <span className="text-sm">Home Franqueado</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded cursor-pointer transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.colors.hoverSidebar}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <Home className="w-5 h-5" style={{ color: theme.colors.iconeSidebar }} />
                <span className="text-sm">Home Profissional</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded cursor-pointer transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.colors.hoverSidebar}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <Home className="w-5 h-5" style={{ color: theme.colors.iconeSidebar }} />
                <span className="text-sm">Home Recepção</span>
              </div>

              {/* Atalhos Section */}
              <div className="rounded p-2" style={{ backgroundColor: theme.colors.opacidadeSubmenu }}>
                <div className="flex items-center gap-3 px-3 py-2 rounded cursor-pointer transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.colors.hoverSidebar}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <Layers className="w-5 h-5" style={{ color: theme.colors.iconeSidebar }} />
                  <span className="text-sm">Atalhos</span>
                  <ChevronDown className="w-4 h-4 ml-auto" style={{ color: theme.colors.iconeSidebar }} />
                </div>

                {/* Atalhos Sub-items */}
                <div className="flex items-center gap-3 px-3 py-2 rounded cursor-pointer" style={{ backgroundColor: theme.colors.fundoAtivoSidebar, color: theme.colors.textoAtivoSidebar }}>
                  <Calendar className="w-5 h-5" style={{ color: theme.colors.textoAtivoSidebar }} />
                  <span className="text-sm font-medium">Agenda</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded cursor-pointer transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.colors.hoverSidebar}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <DollarSign className="w-5 h-5" style={{ color: theme.colors.iconeSidebar }} />
                  <span className="text-sm">Produção do profissional</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded cursor-pointer transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.colors.hoverSidebar}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <DollarSign className="w-5 h-5" style={{ color: theme.colors.iconeSidebar }} />
                  <span className="text-sm">Gestão de Repasses do Avaliador</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded cursor-pointer transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.colors.hoverSidebar}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <DollarSign className="w-5 h-5" style={{ color: theme.colors.iconeSidebar }} />
                  <span className="text-sm">Gestão de Repasses do Negociador</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded cursor-pointer transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.colors.hoverSidebar}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <DollarSign className="w-5 h-5" style={{ color: theme.colors.iconeSidebar }} />
                  <span className="text-sm">Gestão de Repasses do Profissional</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded cursor-pointer transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.colors.hoverSidebar}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <ShoppingCart className="w-5 h-5" style={{ color: theme.colors.iconeSidebar }} />
                  <span className="text-sm">Nova compra</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded cursor-pointer transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.colors.hoverSidebar}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <Building className="w-5 h-5" style={{ color: theme.colors.iconeSidebar }} />
                  <span className="text-sm">Nova Entrada de Estoque</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded cursor-pointer transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.colors.hoverSidebar}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <Code className="w-5 h-5" style={{ color: theme.colors.iconeSidebar }} />
                  <span className="text-sm">DEV</span>
                  <ChevronRight className="w-4 h-4 ml-auto" style={{ color: theme.colors.iconeSidebar }} />
                </div>
              </div>

              {/* Other Menu Items */}
              <div className="mt-4">
                <div className="flex items-center gap-3 px-3 py-2 rounded cursor-pointer transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.colors.hoverSidebar}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <Plus className="w-5 h-5" style={{ color: theme.colors.iconeSidebar }} />
                  <span className="text-sm">Cadastros</span>
                  <ChevronRight className="w-4 h-4 ml-auto" style={{ color: theme.colors.iconeSidebar }} />
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded cursor-pointer transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.colors.hoverSidebar}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <DollarSign className="w-5 h-5" style={{ color: theme.colors.iconeSidebar }} />
                  <span className="text-sm">Produção</span>
                  <ChevronRight className="w-4 h-4 ml-auto" style={{ color: theme.colors.iconeSidebar }} />
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded cursor-pointer transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.colors.hoverSidebar}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <Handshake className="w-5 h-5" style={{ color: theme.colors.iconeSidebar }} />
                  <span className="text-sm">Convênio</span>
                  <ChevronRight className="w-4 h-4 ml-auto" style={{ color: theme.colors.iconeSidebar }} />
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded cursor-pointer transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.colors.hoverSidebar}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <Building className="w-5 h-5" style={{ color: theme.colors.iconeSidebar }} />
                  <span className="text-sm">Estoque</span>
                  <ChevronRight className="w-4 h-4 ml-auto" style={{ color: theme.colors.iconeSidebar }} />
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded cursor-pointer transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.colors.hoverSidebar}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <List className="w-5 h-5" style={{ color: theme.colors.iconeSidebar }} />
                  <span className="text-sm">Parâmetros</span>
                  <ChevronRight className="w-4 h-4 ml-auto" style={{ color: theme.colors.iconeSidebar }} />
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded cursor-pointer transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.colors.hoverSidebar}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <BarChart3 className="w-5 h-5" style={{ color: theme.colors.iconeSidebar }} />
                  <span className="text-sm">Relatórios</span>
                  <ChevronRight className="w-4 h-4 ml-auto" style={{ color: theme.colors.iconeSidebar }} />
                </div>
              </div>
            </div>
          </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Toolbar */}
        <div className="px-6 py-3 flex items-center gap-3" style={{ backgroundColor: theme.colors.fundoToolbar }}>
          <button className="bg-white text-gray-700 px-4 py-1.5 rounded flex items-center gap-3 text-sm hover:bg-gray-50">
            <Plus className="w-4 h-4" />
            Novo
          </button>
          <button className="bg-white text-gray-700 px-4 py-1.5 rounded flex items-center gap-3 text-sm hover:bg-gray-50">
            <Calendar className="w-4 h-4" />
            Excluir
          </button>
          <button className="bg-white text-gray-700 px-4 py-1.5 rounded flex items-center gap-3 text-sm hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            Filtrar Status
          </button>
          <button className="bg-white text-gray-700 px-4 py-1.5 rounded flex items-center gap-3 text-sm hover:bg-gray-50">
            <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
            Oportunidades do dia
          </button>
          <button className="ml-auto bg-white text-gray-700 p-1.5 rounded hover:bg-gray-50">
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>

          {/* Calendar Content */}
          <div className="flex-1 overflow-auto" style={{ backgroundColor: theme.colors.slotIndisponivel }}>
            <div className="p-6">
            {/* Calendar Header */}
            <div className="text-white px-4 py-3 rounded-t-lg flex items-center justify-between" style={{ background: theme.colors.fundoHeaderCalendario }}>
              <div className="flex items-center gap-3">
                <button className="px-3 py-1 bg-white rounded text-sm font-medium" style={{ color: theme.colors.textoHeaderCalendario }}>Hoje</button>
                <button
                  className="p-1 rounded transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.colors.hoverHeaderCalendario}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  className="p-1 rounded transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.colors.hoverHeaderCalendario}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <span className="text-sm">3 de outubro de 2025</span>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-3 py-1 bg-white/10 rounded text-sm">Recursos</button>
                <button className="px-3 py-1 bg-white/10 rounded text-sm">Dia</button>
                <button className="px-3 py-1 bg-white/10 rounded text-sm">Work Week</button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="bg-white rounded-b-lg overflow-hidden" style={{ borderLeft: `1px solid ${theme.colors.bordaSidebar}`, borderRight: `1px solid ${theme.colors.bordaSidebar}` }}>
              {/* Grid Container */}
              <div className="grid" style={{ 
                gridTemplateColumns: `80px repeat(${professionals.length}, 1fr)`,
                gap: '12px',
                padding: '12px'
              }}>
                
                {/* Time Column Header */}
                <div className="min-h-[120px] flex items-center justify-center">
                </div>
                
                {/* Professional Headers */}
                {professionals.map((col, idx) => (
                  <div key={idx} className="p-3 border border-gray-100 rounded min-h-[120px] flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: theme.colors.fundoAvatar }}>
                        {col.initials}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium truncate">{col.name}</div>
                        {col.extra?.map((text, i) => (
                          <div key={i} className="text-xs text-gray-500 truncate">{text}</div>
                        ))}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">6 <span className="uppercase">seg</span></div>
                  </div>
                ))}

                {/* Time Slots */}
                {['08', '09', '10', '11', '12', '13', '14', '15', '16', '17'].map((hour) => (
                  <>
                    {/* Time Column */}
                    <div key={`time-${hour}`} className="border border-gray-100 rounded min-h-[120px] flex items-center justify-center">
                      <span className="text-xs text-gray-500">{hour} <span className="text-[10px]">00</span></span>
                    </div>
                    
                    {/* Content Columns */}
                    {professionals.map((_, index) => {
                      if (hour === '08') {
                        if (index === 0) {
                          return <div key={`${hour}-${index}`} className="border border-gray-100 rounded min-h-[120px] p-2" style={{ backgroundColor: theme.colors.slotBloqueado }}></div>;
                        }
                        if (index === 1) {
                          return (
                            <div key={`${hour}-${index}`} className="border border-gray-100 rounded min-h-[120px] p-2">
                              {[
                                { name: 'Arthur Manuel Brito', status: 'completed' },
                                { name: 'Eliane Agatha Eliane San...', status: 'completed' }
                              ].map((appt, idx) => (
                                <div key={idx} className="bg-white p-2 rounded shadow-sm mb-1" style={{ borderLeft: `4px solid ${theme.colors.statusConcluido}` }}>
                                  <div className="text-xs font-medium">{appt.name}</div>
                                  <div className="text-[10px] text-gray-500">Avaliação - Realizada</div>
                                </div>
                              ))}
                            </div>
                          );
                        }
                        if (index === 2) {
                          return (
                            <div key={`${hour}-${index}`} className="border border-gray-100 rounded min-h-[120px] p-2">
                              {[
                                { name: 'Martin Diego Murilo Jesus', status: 'completed' },
                                { name: 'Daiane Bibis', status: 'completed' },
                                { name: 'Rosa Luz', status: 'completed' },
                                { name: 'Danilo Sebas', status: 'completed' },
                                { name: 'Iago Nasce', status: 'completed' },
                                { name: 'Iago Nasce', status: 'completed' },
                                { name: 'Caleb Jeb', status: 'completed' },
                                { name: 'Fernando Man', status: 'pending' },
                                { name: 'Eliane Rezender', status: 'inProgress' }
                              ].map((appt, idx) => {
                                const statusColor = appt.status === 'completed' ? theme.colors.statusConcluido :
                                                  appt.status === 'pending' ? theme.colors.statusPendente :
                                                  theme.colors.statusEmAndamento;
                                const statusText = appt.status === 'completed' ? 'Realizada' :
                                                 appt.status === 'pending' ? 'Em aberto' :
                                                 'No local';
                                return (
                                  <div key={idx} className="bg-white p-2 rounded shadow-sm mb-1" style={{ borderLeft: `4px solid ${statusColor}` }}>
                                    <div className="text-xs font-medium">{appt.name}</div>
                                    <div className="text-[10px] text-gray-500">Avaliação - {statusText}</div>
                                  </div>
                                );
                              })}
                            </div>
                          );
                        }
                        if (index === 4) {
                          return <div key={`${hour}-${index}`} className="border border-gray-100 rounded min-h-[120px] p-2" style={{ backgroundColor: theme.colors.slotDisponivel }}></div>;
                        }
                        if (index === 5) {
                          return (
                            <div key={`${hour}-${index}`} className="border border-gray-100 rounded min-h-[120px] p-2">
                              {[
                                { name: 'Josefa Luzia Araújo', status: 'completed' },
                                { name: 'Diego Eduardo Marcelo C...', status: 'completed' },
                                { name: 'Diego Eduardo Marcelo C...', status: 'completed' }
                              ].map((appt, idx) => (
                                <div key={idx} className="bg-white p-2 rounded shadow-sm mb-1" style={{ borderLeft: `4px solid ${theme.colors.statusConcluido}` }}>
                                  <div className="text-xs font-medium">{appt.name}</div>
                                  <div className="text-[10px] text-gray-500">Avaliação - Realizada</div>
                                </div>
                              ))}
                            </div>
                          );
                        }
                      } else {
                        // Para outros horários, slots vazios com cores específicas
                        if (index === 0) {
                          return <div key={`${hour}-${index}`} className="border border-gray-100 rounded min-h-[120px] p-2" style={{ backgroundColor: theme.colors.slotBloqueado }}></div>;
                        }
                        if (index === 4) {
                          return <div key={`${hour}-${index}`} className="border border-gray-100 rounded min-h-[120px] p-2" style={{ backgroundColor: theme.colors.slotDisponivel }}></div>;
                        }
                      }
                      return <div key={`${hour}-${index}`} className="border border-gray-100 rounded min-h-[120px] p-2"></div>;
                    })}
                  </>
                ))}
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;