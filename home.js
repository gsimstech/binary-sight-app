document.addEventListener('DOMContentLoaded', () => {
  const DOM = {
    html: document.documentElement,
    body: document.body,
    pageMainWrapper: document.getElementById('pageMainWrapper') || document.querySelector('main'),
    topBarLayout: document.querySelector('.top-bar'),
    systemFooter: document.querySelector('.system-footer'),
    sideMenu: document.getElementById('sideMenu'),
    backdrop: document.getElementById('menuBackdrop'),
    hamburger: document.getElementById('hamburgerBtn'),
    menuClose: document.getElementById('menuCloseBtn'),
    menuLinks: document.querySelectorAll('.side-nav-links a:not(#sideGetStartedBtn)'),
    themeBtn: document.getElementById('themeBtn'),
    themeIcon: document.getElementById('themeBtn')?.querySelector('i'),
    authModal: document.getElementById('authModal'),
    modalClose: document.getElementById('modalCloseBtn'),
    modalBackdrop: document.getElementById('modalBackdrop'),
    loginTab: document.getElementById('loginTab'),
    signupTab: document.getElementById('signupTab'),
    formTitle: document.getElementById('formTitle'),
    usernameField: document.getElementById('usernameField'),
    emailField: document.getElementById('emailField'),
    emailInput: document.getElementById('email'),
    usernameInput: document.getElementById('username'),
    submitBtn: document.getElementById('submitBtn'),
    navLoginBtn: document.getElementById('navLoginBtn'),
    heroGetStartedBtn: document.getElementById('heroGetStartedBtn'),
    sideGetStartedBtn: document.getElementById('sideGetStartedBtn'),
    sandboxCodeInput: document.getElementById('sandboxCodeInput'),
    sandboxOutputPanel: document.getElementById('sandboxOutputPanel'),
    sandboxRunBtn: document.getElementById('sandboxRunBtn'),
    sandboxClearBtn: document.getElementById('sandboxClearBtn'),
    toggleMonthlyBtn: document.getElementById('billingToggleMonthly'),
    toggleYearlyBtn: document.getElementById('billingToggleYearly'),
    proPriceNode: document.getElementById('proPrice'),
    enterprisePriceNode: document.getElementById('enterprisePrice')
  };
  const MenuController = {
    open() {
      DOM.sideMenu?.classList.add('open');
      DOM.backdrop?.classList.add('open');
      DOM.body.style.overflow = 'hidden';
    },
    close() {
      DOM.sideMenu?.classList.remove('open');
      DOM.backdrop?.classList.remove('open');
      DOM.body.style.overflow = '';
    },
    init() {
      DOM.hamburger?.addEventListener('click', () => this.open());
      DOM.menuClose?.addEventListener('click', () => this.close());
      DOM.backdrop?.addEventListener('click', () => this.close());
      DOM.menuLinks.forEach(link => {
        link.addEventListener('click', () => {
          DOM.menuLinks.forEach(item => item.classList.remove('active'));
          link.classList.add('active');
          this.close();
        });
      });
    }
  };
  const ThemeController = {
    key: 'binarySightTheme',
    setTheme(theme) {
      DOM.html.setAttribute('data-theme', theme);
      localStorage.setItem(this.key, theme);
      this.updateIcon(theme);
    },
    updateIcon(theme) {
      const currentIcon = DOM.themeBtn?.querySelector('i') || DOM.themeIcon;
      if (!currentIcon) return;
      if (theme === 'light') {
        currentIcon.className = 'fa-solid fa-sun';
        currentIcon.style.color = '#f59e0b';
      } else {
        currentIcon.className = 'fa-solid fa-moon';
        currentIcon.style.color = '';
      }
    },
    init() {
      const savedTheme = localStorage.getItem(this.key) || 'dark';
      this.setTheme(savedTheme);
      DOM.themeBtn?.addEventListener('click', () => {
        const current = DOM.html.getAttribute('data-theme');
        this.setTheme(current === 'dark' ? 'light' : 'dark');
      });
    }
  };
  const AuthModalController = {
    open() {
      DOM.authModal?.classList.add('open');
      DOM.body.style.overflow = 'hidden';
      DOM.pageMainWrapper?.classList.add('is-blurred');
      DOM.topBarLayout?.classList.add('is-blurred');
      DOM.systemFooter?.classList.add('is-blurred');
    },
    close() {
      DOM.authModal?.classList.remove('open');
      DOM.body.style.overflow = '';
      DOM.pageMainWrapper?.classList.remove('is-blurred');
      DOM.topBarLayout?.classList.remove('is-blurred');
      DOM.systemFooter?.classList.remove('is-blurred');
    },
    setMode(mode) {
  const isLogin = mode === 'login';
  DOM.loginTab?.classList.toggle('active', isLogin);
  DOM.signupTab?.classList.toggle('active', !isLogin);
  
  if (DOM.formTitle) {
    DOM.formTitle.textContent = isLogin ? 'Welcome Back' : 'Create Blueprint Account';
  }
  if (DOM.submitBtn) {
    DOM.submitBtn.textContent = isLogin ? 'Sign In' : 'Join Now';
  }
  
  if (isLogin) {
    // Keep username display configuration active, enforce hidden rule onto email field
    DOM.usernameField?.classList.remove('hidden'); 
    DOM.emailField?.classList.add('hidden');
    DOM.emailInput?.removeAttribute('required');
  } else {
    // Reveal both username and email input node matrices for registration
    DOM.usernameField?.classList.remove('hidden');
    DOM.emailField?.classList.remove('hidden');
    DOM.emailInput?.setAttribute('required', '');
  }
},

    init() {
      DOM.navLoginBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        this.setMode('login');
        this.open();
      });
      DOM.heroGetStartedBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        this.setMode('login');
        this.open();
      });
      DOM.sideGetStartedBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        MenuController.close();
        this.setMode('login');
        setTimeout(() => this.open(), 300);
      });
      DOM.modalClose?.addEventListener('click', () => this.close());
      DOM.modalBackdrop?.addEventListener('click', () => this.close());
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') this.close();
      });
      DOM.loginTab?.addEventListener('click', () => this.setMode('login'));
      DOM.signupTab?.addEventListener('click', () => this.setMode('signup'));
    }
  };
  const CodeSandboxController = {
    executeRuntime() {
      if (!DOM.sandboxOutputPanel) return;
      const blueprintCode = DOM.sandboxCodeInput?.value || '';
      DOM.sandboxOutputPanel.innerHTML = '<span class="status-running">Compiling structural runtime layers...</span>';
      setTimeout(() => {
        try {
          if (!blueprintCode.trim()) {
            DOM.sandboxOutputPanel.textContent = 'Status: Ready. Input execution block empty.';
            return;
          }
          DOM.sandboxOutputPanel.textContent = `Success: Structural layer executed safely.\nOutput: Grid verified matching token system matrix maps.`;
        } catch (error) {
          DOM.sandboxOutputPanel.textContent = `Runtime Compilation Error: ${error.message}`;
        }
      }, 600);
    },
    clearConsole() {
      if (DOM.sandboxOutputPanel) DOM.sandboxOutputPanel.textContent = 'Console buffer flushed clear.';
    },
    init() {
      DOM.sandboxRunBtn?.addEventListener('click', () => this.executeRuntime());
      DOM.sandboxClearBtn?.addEventListener('click', () => this.clearConsole());
    }
  };
  
  const toggleMonthlyBtn = document.getElementById('billingToggleMonthly');
  const toggleYearlyBtn = document.getElementById('billingToggleYearly');
  const proPriceNode = document.getElementById('proPrice');
  const enterprisePriceNode = document.getElementById('enterprisePrice');

function updateBillingCycle(isYearly) {
  // Pull pricing target elements dynamically to avoid register conflicts
  const activeToggleMonthly = document.getElementById('billingToggleMonthly');
  const activeToggleYearly = document.getElementById('billingToggleYearly');
  const activeProNode = document.getElementById('proPrice');
  const activeEnterpriseNode = document.getElementById('enterprisePrice');

  if (!activeToggleMonthly || !activeToggleYearly) return;

  // 1. Flip toggle button active presentation styles without layout shifts
  if (isYearly) {
    activeToggleYearly.style.background = 'var(--primary)';
    activeToggleYearly.style.color = '#000';
    activeToggleMonthly.style.background = 'transparent';
    activeToggleMonthly.style.color = 'var(--text)';
  } else {
    activeToggleMonthly.style.background = 'var(--primary)';
    activeToggleMonthly.style.color = '#000';
    activeToggleYearly.style.background = 'transparent';
    activeToggleYearly.style.color = 'var(--text)';
  }

  // 2. Swaps pricing strings without formatting loss or structural glitching
  [activeProNode, activeEnterpriseNode].forEach(node => {
    if (!node) return;
    
    // Extract numbers safely ($19 / $179)
    const priceValue = isYearly ? node.getAttribute('data-yearly') : node.getAttribute('data-monthly');
    const cycleText = isYearly ? 'Every Month,Yearly' : 'Monthly';
    
    // Updates the HTML text structure perfectly to read "$19 / Monthly"
    node.innerHTML = `${priceValue} <span class="billing-cycle-label">/ ${cycleText}</span>`;
  });

  // 3. Play interaction sound loop accent safely if active
  if (typeof InteractionAudioEngine !== 'undefined') {
    InteractionAudioEngine.playSwitchClick(true);
  }
}

// Re-bind fresh click loops securely
document.getElementById('billingToggleMonthly')?.addEventListener('click', () => updateBillingCycle(false));
document.getElementById('billingToggleYearly')?.addEventListener('click', () => updateBillingCycle(true));



  toggleMonthlyBtn?.addEventListener('click', () => updateBillingCycle(false));
  toggleYearlyBtn?.addEventListener('click', () => updateBillingCycle(true));

  MenuController.init();
  ThemeController.init();
  AuthModalController.init();
  CodeSandboxController.init();
});

