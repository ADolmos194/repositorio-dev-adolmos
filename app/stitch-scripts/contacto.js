
  function togglePriorityStyle(checkbox) {
    const card = document.getElementById('priorityCard');
    const title = document.getElementById('priorityTitle');
    const icon = document.getElementById('priorityIcon');
    const subtext = document.getElementById('prioritySubtext');

    if (checkbox.checked) {
      card.style.backgroundColor = 'rgba(255, 34, 85, 0.08)';
      card.style.borderColor = '#ff2255';
      card.style.boxShadow = '0 0 18px rgba(255, 34, 85, 0.35)';
      title.classList.remove('text-text-bright');
      title.classList.add('text-neon-red');
      icon.classList.remove('text-text-muted');
      icon.classList.add('text-neon-red');
      icon.textContent = 'warning';
      subtext.textContent = 'INCIDENTE CRÍTICO EN PRODUCCIÓN: Prioridad máxima asignada para respuesta inmediata.';
      subtext.classList.add('text-neon-red/90');
      subtext.classList.remove('text-text-muted');
    } else {
      card.style.backgroundColor = '#06080d';
      card.style.borderColor = '#1b253b';
      card.style.boxShadow = 'none';
      title.classList.add('text-text-bright');
      title.classList.remove('text-neon-red');
      icon.classList.add('text-text-muted');
      icon.classList.remove('text-neon-red');
      icon.textContent = 'shield';
      subtext.textContent = 'Activa para solicitar atención de emergencia con priorización inmediata del ticket.';
      subtext.classList.remove('text-neon-red/90');
      subtext.classList.add('text-text-muted');
    }
  }

  (function initTechInteractions() {
    const cards = document.querySelectorAll('.vector-card');
    const hiddenInput = document.getElementById('selectedModalidad');
    const activeLabel = document.getElementById('activeModalLabel');
    const projectTypeSelect = document.getElementById('projectType');

    const modalityTitles = {
      'fullstack': 'Desarrollo Full Stack a Medida (Django REST / Vue / React)',
      'mobile': 'Apps Móviles Multiplataforma (Flutter / Firebase)',
      'stabilization': 'Estabilización de Sistemas & Debugging Crítico',
      'automation': 'Automatización e Integraciones (APIs, Excel, Webhooks)'
    };

    cards.forEach(card => {
      card.addEventListener('click', () => {
        // Reset all cards styling
        cards.forEach(c => {
          c.classList.remove('bg-cyber-surface-high', 'neon-border-cyan');
          c.classList.add('bg-cyber-surface', 'border-cyber-border');
          const badge = c.querySelector('div:last-child span:last-child');
          if (badge) {
            badge.textContent = (document.documentElement.lang === 'en' ? '[SELECT]' : '[SELECCIONAR]');
            badge.className = 'tracking-widest opacity-0 group-hover:opacity-100 transition-opacity group-hover:text-neon-cyan';
          }
          const icon = c.querySelector('.material-symbols-outlined');
          if (icon) {
            icon.classList.remove('text-neon-cyan');
            icon.classList.add('text-text-muted');
          }
        });

        // Set active card
        card.classList.remove('bg-cyber-surface', 'border-cyber-border');
        card.classList.add('bg-cyber-surface-high', 'neon-border-cyan');
        const activeBadge = card.querySelector('div:last-child span:last-child');
        if (activeBadge) {
          activeBadge.textContent = (document.documentElement.lang === 'en' ? '[ACTIVE]' : '[ACTIVO]');
          activeBadge.className = 'text-neon-cyan font-bold tracking-widest';
        }
        const activeIcon = card.querySelector('.material-symbols-outlined');
        if (activeIcon) {
          activeIcon.classList.remove('text-text-muted');
          activeIcon.classList.add('text-neon-cyan');
        }

        const vectorKey = card.getAttribute('data-vector');
        const selectedText = modalityTitles[vectorKey] || 'Desarrollo Full Stack';
        if (hiddenInput) hiddenInput.value = selectedText;
        if (activeLabel) activeLabel.textContent = `[${document.documentElement.lang === 'en' ? 'SELECTED SERVICE' : 'SERVICIO SELECCIONADO'}: ${vectorKey.toUpperCase()}]`;

        // Sync dropdown
        if (projectTypeSelect) {
          if (vectorKey === 'fullstack') projectTypeSelect.value = 'Full Stack (Django REST + Vue/React)';
          else if (vectorKey === 'mobile') projectTypeSelect.value = 'App Móvil (Flutter / Firebase)';
          else if (vectorKey === 'stabilization') projectTypeSelect.value = 'Estabilización & Debugging';
          else if (vectorKey === 'automation') projectTypeSelect.value = 'Automatización & Integraciones';
        }
      });
    });
  })();

  function handleTransmission() {
    const en = document.documentElement.lang === 'en';
    const val = (id) => { const el = document.getElementById(id); return el ? el.value : ''; };
    const sender = val('senderName').trim();
    const contact = val('contactChannel').trim();
    const message = val('challengeDescription').trim();
    if (!sender || !contact || !message) return;

    const toggle = document.getElementById('criticalToggle');
    const yes = toggle && toggle.checked ? (en ? 'YES' : 'SÍ') : 'NO';
    const body = [
      (en ? 'Name / Organization: ' : 'Nombre / Organización: ') + sender,
      (en ? 'Contact: ' : 'Contacto: ') + contact,
      (en ? 'Project type: ' : 'Tipo de proyecto: ') + val('projectType'),
      (en ? 'Engagement: ' : 'Modalidad: ') + val('engagementScope'),
      (en ? 'Production at risk / high priority: ' : 'Producción en riesgo / alta prioridad: ') + yes,
      '',
      message
    ].join('\n');
    const subject = (en ? 'Contact from the portfolio — ' : 'Contacto desde el portafolio — ') + sender;
    window.location.href = 'mailto:ayltondolmos194@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    const statusDiv = document.getElementById('txStatus');
    if (statusDiv) {
      statusDiv.classList.remove('hidden');
      statusDiv.textContent = '';
      const strong = document.createElement('strong');
      strong.textContent = en ? '[EMAIL READY]: ' : '[CORREO LISTO]: ';
      const a = document.createElement('a');
      a.href = 'https://wa.me/51951122014';
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.className = 'underline font-bold';
      a.textContent = '+51 951 122 014';
      statusDiv.append(strong, en
        ? 'Your email client opened with the message ready; you only need to send it. If it did not open, message me on WhatsApp at '
        : 'Se abrió tu cliente de correo con el mensaje preparado; solo falta enviarlo. Si no se abrió, escríbeme por WhatsApp al ', a, '.');
    }
  }

  (function bindContactActions() {
    const form = document.getElementById('techContactForm');
    if (form) form.addEventListener('submit', (e) => { e.preventDefault(); handleTransmission(); });
  })();
