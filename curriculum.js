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
    sandboxResetBtn: document.getElementById('sandboxResetBtn')
  };

  // ==========================================================================
  // 🔊 CENTRAL SYNTHESIZED TACTILE SWITCH CLICK ENGINE
  // ==========================================================================
  const InteractionAudioEngine = {
    playSwitchClick(isActionPositive) {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();
        const now = ctx.currentTime;

        // 1. Core Plastic Thump Oscillator
        const clickOsc = ctx.createOscillator();
        const clickGain = ctx.createGain();
        clickOsc.type = 'triangle';
        clickOsc.connect(clickGain);
        clickGain.connect(ctx.destination);

        // 2. High-Friction Spring Snapping White Noise Buffer
        const bufferSize = ctx.sampleRate * 0.04; 
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }
        const noiseSource = ctx.createBufferSource();
        const noiseGain = ctx.createGain();
        noiseSource.buffer = buffer;
        noiseSource.connect(noiseGain);
        noiseGain.connect(ctx.destination);

        if (isActionPositive) {
          // Sharp Upward Switch Flip (Expansion / Run Code / Tab Select)
          clickOsc.frequency.setValueAtTime(620, now);
          clickOsc.frequency.setValueAtTime(840, now + 0.012);

          clickGain.gain.setValueAtTime(0, now);
          clickGain.gain.linearRampToValueAtTime(0.06, now + 0.002);
          clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.038);

          noiseGain.gain.setValueAtTime(0, now);
          noiseGain.gain.linearRampToValueAtTime(0.04, now + 0.004);
          noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.032);
        } else {
          // Heavier Downward Switch Flip (Collapse / Clear Console / Close portals)
          clickOsc.frequency.setValueAtTime(480, now);
          clickOsc.frequency.setValueAtTime(360, now + 0.01);

          clickGain.gain.setValueAtTime(0, now);
          clickGain.gain.linearRampToValueAtTime(0.05, now + 0.002);
          clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);

          noiseGain.gain.setValueAtTime(0, now);
          noiseGain.gain.linearRampToValueAtTime(0.025, now + 0.003);
          noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.038);
        }

        clickOsc.start(now);
        noiseSource.start(now);
        clickOsc.stop(now + 0.05);
        noiseSource.stop(now + 0.05);
      } catch (e) {
        console.warn("Audio pipeline deferred by system policy matrix map:", e);
      }
    },

    // Attaches the acoustic switch trigger loop across universal button blocks
    bindButtonAccents() {
      // Targets standard global actions, workspace buttons, and navigation elements
      const targetButtons = document.querySelectorAll('.btn, .tab-btn, .theme-toggle-btn, .hamburger-btn, .modal-close-btn');
      
      targetButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          // Determine sound style based on structural clear/close intentions
          const isNegativeAction = btn.classList.contains('modal-close-btn') || 
                                  btn.id === 'sandboxClearBtn' || 
                                  btn.classList.contains('menu-close-btn');
          
          this.playSwitchClick(!isNegativeAction);
        });
      });
    }
  };

   // ==========================================================================
  // 📚 INTERACTIVE MASTER CURRICULUM BLUEPRINTS (SYNCED FROM STORAGE)
  // ==========================================================================
  const CurriculumController = {
    // Utility to sync layout structures live from data caches
    updateCardVisualState(card, progressValue) {
      const progressBar = card.querySelector('.progress-fill');
      const percentageText = card.querySelector('.progress-percentage-text');
      const badgeContainer = card.querySelector('.track-meta');
      
      if (progressBar) {
        progressBar.setAttribute('data-target-width', `${progressValue}%`);
        if (card.classList.contains('expanded')) {
          progressBar.style.width = `${progressValue}%`;
        }
      }
      
      if (percentageText) {
        percentageText.textContent = `${progressValue}% Completed`;
      }

      // 🏆 Animated checkmark injection logic once track clears 100%
      if (parseInt(progressValue) >= 100) {
        if (badgeContainer && !badgeContainer.querySelector('.verification-checkmark-badge')) {
          const checkmark = document.createElement('span');
          checkmark.className = 'verification-checkmark-badge animated-pop-check';
          checkmark.style.cssText = `
            background: rgba(0, 255, 170, 0.15);
            color: var(--primary);
            border: 1px solid var(--primary);
            padding: 4px 8px;
            border-radius: 6px;
            font-size: 11px;
            margin-left: 10px;
            display: inline-flex;
            align-items: center;
            gap: 4px;
            animation: popScaleReveal 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          `;
          checkmark.innerHTML = '<i class="fa-solid fa-circle-check"></i> Cleared';
          badgeContainer.appendChild(checkmark);
        }
      } else {
        const existingCheck = badgeContainer?.querySelector('.verification-checkmark-badge');
        if (existingCheck) existingCheck.remove();
      }
    },

    init() {
      const trackCards = document.querySelectorAll('.track-card');
      
      trackCards.forEach(card => {
        // Evaluate what focus channel matches this specific curriculum block
        let trackType = '';
        if (card.classList.contains('theme-grid')) trackType = 'grid';
        if (card.classList.contains('theme-tokens')) trackType = 'tokens';
        if (card.classList.contains('theme-async')) trackType = 'async';
        
        // Grab cached runtime progression matrices
        const savedProgress = localStorage.getItem(`sandbox_track_${trackType}_progress`) || '0';
        
        const progressBar = card.querySelector('.progress-fill');
        if (progressBar) {
          progressBar.style.width = '0%';
          progressBar.setAttribute('data-target-width', `${savedProgress}%`);
        }
        
        this.updateCardVisualState(card, savedProgress);

        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-expanded', 'false');
        
        const header = card.querySelector('.track-header-wrapper');
        
        const toggleAction = () => {
          const isOpen = card.classList.contains('expanded');
          
          trackCards.forEach(otherCard => {
            if (otherCard !== card && otherCard.classList.contains('expanded')) {
              otherCard.classList.remove('expanded');
              otherCard.setAttribute('aria-expanded', 'false');
              const otherDetails = otherCard.querySelector('.track-expanded-details');
              if (otherDetails) otherDetails.style.maxHeight = null;
              
              const otherProgress = otherCard.querySelector('.progress-fill');
              if (otherProgress) otherProgress.style.width = '0%';
            }
          });

          card.classList.toggle('expanded', !isOpen);
          card.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
          
          if (typeof InteractionAudioEngine !== 'undefined') {
            InteractionAudioEngine.playSwitchClick(!isOpen);
          }
          
          const detailsPanel = card.querySelector('.track-expanded-details');
          const activeBar = card.querySelector('.progress-fill');
          
          if (detailsPanel) {
            if (!isOpen) {
              detailsPanel.style.maxHeight = detailsPanel.scrollHeight + "px";
              if (activeBar) {
                const targetWidth = activeBar.getAttribute('data-target-width') || '0%';
                requestAnimationFrame(() => {
                  activeBar.style.width = targetWidth;
                });
              }
            } else {
              detailsPanel.style.maxHeight = null;
              if (activeBar) activeBar.style.width = '0%';
            }
          }
        };

        header?.addEventListener('click', toggleAction);
      });
    }
  };

  // ==========================================================================
  // 💻 SANDBOX INTERACTIVE WORKSPACE ENGINE WITH PROGRESS MANAGEMENT
  // ==========================================================================
    const CodeSandboxController = {
    // Tracks completed sub-steps dynamically during the active user runtime session
    subTaskMatrix: {
      grid:   { step1: false, step2: false, step3: false },
      tokens: { step1: false, step2: false, step3: false },
      async:  { step1: false, step2: false, step3: false }
    },

    getActiveTrack() {
      const activeNode = document.querySelector('.challenge-node.active');
      return activeNode ? activeNode.getAttribute('data-track-focus') : null;
    },

    // Handles terminal-style system feedback line generations
    logTerminal(status, head, message) {
      if (!DOM.sandboxOutputPanel) return;
      
      const timestamp = new Date().toLocaleTimeString().split(' ')[0];
      let colorToken = 'var(--text)';
      let pulseGlow = '';

      if (status === 'success') {
        colorToken = 'var(--primary)';
        pulseGlow = 'text-shadow: 0 0 10px rgba(0, 255, 170, 0.4);';
      } else if (status === 'warning') {
        colorToken = '#fb923c'; // Cyberpunk warning orange
      } else if (status === 'error') {
        colorToken = '#f43f5e'; // Warning red
      }

      DOM.sandboxOutputPanel.innerHTML = `
        <div style="font-family: 'Fira Code', monospace; line-height: 1.6; color: ${colorToken}; ${pulseGlow}">
          <span style="color: var(--muted); font-size: 11px;">[${timestamp}]</span> 
          <strong>${head}</strong>
          <pre style="margin-top: 8px; font-family: inherit; white-space: pre-wrap; font-size: 13px; color: var(--text);">${message}</pre>
        </div>
      `;
    },

    advanceTrackProgress(trackType, incrementsValue) {
      const targetNode = document.querySelector(`.challenge-node[data-track-focus="${trackType}"]`);
      if (!targetNode) return null;

      const progressFill = targetNode.querySelector('.progress-fill');
      const badgeContainer = targetNode.querySelector('.node-meta');
      
      if (progressFill) {
        let currentWidth = parseInt(targetNode.getAttribute('data-progress')) || 0;
        if (currentWidth >= 100) return "Maxed";
        
        // Stagger steps granularly by explicit calculation sizes
        let newWidth = Math.min(currentWidth + incrementsValue, 100);
        
        targetNode.setAttribute('data-progress', newWidth);
        progressFill.style.width = `${newWidth}%`;
        progressFill.setAttribute('data-target-width', `${newWidth}%`);
        
        localStorage.setItem(`sandbox_track_${trackType}_progress`, newWidth);

        const curriculumCard = document.querySelector(`.track-card.theme-${trackType}`);
        if (curriculumCard && typeof CurriculumController !== 'undefined') {
          CurriculumController.updateCardVisualState(curriculumCard, newWidth);
        }

        // Trigger pop checkmark badge once the total sub-tasks clear 100%
        if (newWidth >= 100 && badgeContainer && !badgeContainer.querySelector('.verification-checkmark-badge')) {
          const checkmark = document.createElement('span');
          checkmark.className = 'verification-checkmark-badge animated-pop-check';
          checkmark.style.cssText = 'background: rgba(0, 255, 170, 0.15); color: var(--primary); border: 1px solid var(--primary); padding: 2px 6px; border-radius: 4px; font-size: 10px; margin-left: 8px; display: inline-flex; align-items: center; gap: 2px;';
          checkmark.innerHTML = '<i class="fa-solid fa-check"></i> Done';
          badgeContainer.appendChild(checkmark);
        }
        
        return "Advanced";
      }
      return null;
    },

    executeRuntime() {
      if (!DOM.sandboxOutputPanel) return;
      const blueprintCode = DOM.sandboxCodeInput?.value || '';
      
      DOM.sandboxOutputPanel.innerHTML = '<span class="status-running" style="color: var(--secondary); font-family: \'Fira Code\', monospace;">⚡ Accessing execution pipeline kernel frameworks...</span>';
      
      setTimeout(() => {
        try {
          const activeTrack = this.getActiveTrack();
          
          if (!blueprintCode.trim()) {
            this.logTerminal('error', 'CORE INITIALIZATION FAILURE', 'Compilation aborted: Buffer execution block empty.\nPlease enter a code snippet schema.');
            return;
          }

          if (!activeTrack) {
            this.logTerminal('warning', 'ENVIRONMENT ADVISORY', 'Secure runtime sandbox evaluated safely.\n[System Note: Please select a left sidebar Challenge Node to drive lesson metric streams live.]');
            return;
          }

          let scoreMultiplier = 0;
          let verificationSummary = [];
          const sessionSteps = this.subTaskMatrix[activeTrack];

          // ====================================================================
          // 🔎 CRITERIA CHECKERS (RIGOROUS RULES ENGINE MATRIX)
          // ====================================================================
          if (activeTrack === 'grid') {
            // Task 1: Check for Grid or Flex container initializations
            if ((blueprintCode.includes('display: grid') || blueprintCode.includes('display: flex')) && !sessionSteps.step1) {
              sessionSteps.step1 = true;
              scoreMultiplier += 15; // +15% Granular Weight
              verificationSummary.push('✔ Layer 01 Pass: Flex/Grid baseline wrapper layout assigned.');
            }
            // Task 2: Rigorous Multi-Column Template declarations checks
            if ((blueprintCode.includes('grid-template-columns') || blueprintCode.includes('flex-direction') || blueprintCode.includes('gap:')) && !sessionSteps.step2) {
              sessionSteps.step2 = true;
              scoreMultiplier += 15;
              verificationSummary.push('✔ Layer 02 Pass: Positional alignment gap distribution schema verified.');
            }
            // Task 3: Enforce custom structural repeat bounds checks
            if ((blueprintCode.includes('repeat(') || blueprintCode.includes('fr') || blueprintCode.includes('flex:')) && !sessionSteps.step3) {
              sessionSteps.step3 = true;
              scoreMultiplier += 20; // Harder step awards higher allocation weight (+20%)
              verificationSummary.push('✔ Layer 03 Pass: Mathematical auto-scaling row columns parsed safely.');
            }
          } 
          else if (activeTrack === 'tokens') {
            // Task 1: Standard Root Variable Initializations
            if (blueprintCode.includes('--') && !sessionSteps.step1) {
              sessionSteps.step1 = true;
              scoreMultiplier += 15;
              verificationSummary.push('✔ Layer 01 Pass: Root theme token definition fields mapped cleanly.');
            }
            // Task 2: Verify true utilization calls matching var() structures
            if (blueprintCode.includes('var(') && !sessionSteps.step2) {
              sessionSteps.step2 = true;
              scoreMultiplier += 15;
              verificationSummary.push('✔ Layer 02 Pass: Dynamic variable token value reference points resolved.');
            }
            // Task 3: Look for custom glowing properties mapping (box-shadow or colors)
            if ((blueprintCode.includes('shadow') || blueprintCode.includes('color') || blueprintCode.includes('rgba')) && !sessionSteps.step3) {
              sessionSteps.step3 = true;
              scoreMultiplier += 20;
              verificationSummary.push('✔ Layer 03 Pass: Luminescent design system glow attributes compiled.');
            }
          } 
          else if (activeTrack === 'async') {
            // Task 1: Check Async/Await lifecycle methods
            if ((blueprintCode.includes('async function') || blueprintCode.includes('await')) && !sessionSteps.step1) {
              sessionSteps.step1 = true;
              scoreMultiplier += 15;
              verificationSummary.push('✔ Layer 01 Pass: Asynchronous operation callback threads declared.');
            }
            // Task 2: Core Data Fetch statement evaluations
            if (blueprintCode.includes('fetch(') && !sessionSteps.step2) {
              sessionSteps.step2 = true;
              scoreMultiplier += 15;
              verificationSummary.push('✔ Layer 02 Pass: Secure REST API request network pipeline initialised.');
            }
            // Task 3: Proper JSON serialization or promise return formatting matrix
            if ((blueprintCode.includes('.json()') || blueprintCode.includes('Promise') || blueprintCode.includes('return')) && !sessionSteps.step3) {
              sessionSteps.step3 = true;
              scoreMultiplier += 20;
              verificationSummary.push('✔ Layer 03 Pass: Internal object string matrix data stream parsed.');
            }
          }

          // ====================================================================
          // 🖥️ COMPILER RESPONSE STRINGS EVALUATOR
          // ====================================================================
          if (scoreMultiplier > 0) {
            this.advanceTrackProgress(activeTrack, scoreMultiplier);
            
            const linesOutput = verificationSummary.join('\n');
            this.logTerminal(
              'success', 
              'COMPILATION MATRIX VERIFIED', 
              `${linesOutput}\n\n[Track Metric Sync: Awarded +${scoreMultiplier}% Learning Progression Scale Values]`
            );
          } else {
            // If code is valid syntax but provides no new steps to build metrics, fire a safe alert
            const currentTotal = localStorage.getItem(`sandbox_track_${activeTrack}_progress`) || '0';
                    if (parseInt(currentTotal) >= 100) {
          this.logTerminal('success', 'TRACK ARCHITECTURE SECURED', `Evaluation Verified: Code compilation matches 100% track baseline targets.\nAll sub-challenges mapped completely.`);
        } else {
          this.logTerminal('warning', 'COMPILATION DEFERRED', `Code evaluated cleanly but failed to unlock new unique milestone layers.\n\nReview structural code criteria blueprints to process missing track nodes.`);
        }
      }
    } catch (error) {
      this.logTerminal('error', 'RUNTIME EXCEPTION ERROR', `Line Exception trace: [Fault Matrix Layer Parsing Exception]\nTraceback details: ${error.message}`);
    }
  }, 600);
},

clearConsole() {
  if (DOM.sandboxOutputPanel) {
    DOM.sandboxOutputPanel.innerHTML = '<span style="color: #a78bfa; font-family: \'Fira Code\', monospace;">Console logs stream buffer flushed clear. Standing by...</span>';
  }
},

resetProgress() {
  const tracks = ['grid', 'tokens', 'async'];
  tracks.forEach(track => {
    localStorage.removeItem(`sandbox_track_${track}_progress`);
    
    // Flush memory states parameters cleanly back to false entries
    this.subTaskMatrix[track] = { step1: false, step2: false, step3: false };
    
    const node = document.querySelector(`.challenge-node[data-track-focus="${track}"]`);
    if (node) {
      node.setAttribute('data-progress', '0');
      const bar = node.querySelector('.progress-fill');
      if (bar) {
        bar.style.width = '0%';
        bar.setAttribute('data-target-width', '0%');
      }
      const check = node.querySelector('.verification-checkmark-badge');
      if (check) check.remove();
    }
    
    const card = document.querySelector(`.track-card.theme-${track}`);
    if (card) {
      const bar = card.querySelector('.progress-fill');
      if (bar) {
        bar.setAttribute('data-target-width', '0%');
        if (card.classList.contains('expanded')) bar.style.width = '0%';
      }
      if (typeof CurriculumController !== 'undefined') {
        CurriculumController.updateCardVisualState(card, 0);
      }
    }
  });
  
  this.clearConsole();
  console.log("[System Process] Unified sub-challenge validation frameworks reset cleanly.");
},

init() {
  const directoryNodes = document.querySelectorAll('.challenge-node');
  directoryNodes.forEach(node => {
    const selectedTrack = node.getAttribute('data-track-focus');
    const savedWidth = localStorage.getItem(`sandbox_track_${selectedTrack}_progress`) || '0';
    node.setAttribute('data-progress', savedWidth);
    
    const progressFill = node.querySelector('.progress-fill');
    if (progressFill) {
      progressFill.style.width = '0%';
      progressFill.setAttribute('data-target-width', `${savedWidth}%`);
    }
    
    // Partially restore individual memory gates if a user refreshes their window midpoint
    if (parseInt(savedWidth) >= 15) this.subTaskMatrix[selectedTrack].step1 = true;
    if (parseInt(savedWidth) >= 30) this.subTaskMatrix[selectedTrack].step2 = true;
    if (parseInt(savedWidth) >= 50) this.subTaskMatrix[selectedTrack].step3 = true;
    
    if (parseInt(savedWidth) >= 100) {
      const badgeContainer = node.querySelector('.node-meta');
      if (badgeContainer && !badgeContainer.querySelector('.verification-checkmark-badge')) {
        const checkmark = document.createElement('span');
        checkmark.className = 'verification-checkmark-badge';
        checkmark.style.cssText = 'background: rgba(0, 255, 170, 0.15); color: var(--primary); border: 1px solid var(--primary); padding: 2px 6px; border-radius: 4px; font-size: 10px; margin-left: 8px; display: inline-flex; align-items: center; gap: 2px;';
        checkmark.innerHTML = '<i class="fa-solid fa-check"></i> Done';
        badgeContainer.appendChild(checkmark);
      }
    }
  });
  
  const trackTemplates = {
    grid: "/* Track 01: Structural Grid Matrix */\n.matrix-viewport {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}",
    tokens: "/* Track 02: Dynamic Token Engines */\n:root {\n  --matrix-primary: #00ffaa;\n  --matrix-glow: rgba(0, 255, 170, 0.2);\n}\n\n.token-compiled {\n  background: var(--matrix-primary);\n}",
    async: "/* Track 03: Asynchronous Operations */\nasync function compileExecutionPipeline() {\n  const response = await fetch('/api/matrix/runtime');\n  const tokenMatrix = await response.json();\n  return tokenMatrix;\n}"
  };
  
  directoryNodes.forEach(node => {
    node.addEventListener('click', () => {
      directoryNodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');
      
      const selectedTrack = node.getAttribute('data-track-focus');
      if (DOM.sandboxCodeInput && trackTemplates[selectedTrack]) {
        DOM.sandboxCodeInput.value = trackTemplates[selectedTrack];
      }
      
      const progressFill = node.querySelector('.progress-fill');
      if (progressFill) {
        const savedWidth = node.getAttribute('data-progress') || '0';
        requestAnimationFrame(() => {
          progressFill.style.width = `${savedWidth}%`;
        });
      }
      
      if (typeof InteractionAudioEngine !== 'undefined') {
        InteractionAudioEngine.playSwitchClick(true);
      }
    });
  });
  
  DOM.sandboxResetBtn?.addEventListener('click', () => {
    if (confirm("Are you sure you want to wipe all curriculum track progress? This will reset metrics back to 0%.")) {
      this.resetProgress();
      if (typeof InteractionAudioEngine !== 'undefined') {
        InteractionAudioEngine.playSwitchClick(false);
      }
    }
  });
  
  DOM.sandboxRunBtn?.addEventListener('click', () => this.executeRuntime());
  DOM.sandboxClearBtn?.addEventListener('click', () => this.clearConsole());
}
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

// ==========================================================================
  // 🔐 INTERACTIVE AUTHORIZATION MODAL RUNTIME ENGINE
  // ==========================================================================
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


  // ==========================================================================
  // SYSTEM REGISTRY ARRAYS MAIN INITIALIZATION BLOCK
  // ==========================================================================
  MenuController.init();
  ThemeController.init();
  AuthModalController.init();
  CodeSandboxController.init();
  CurriculumController.init();
  InteractionAudioEngine.bindButtonAccents();
});
