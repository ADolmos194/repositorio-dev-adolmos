
      // Retro arcade filter toggle
      (() => {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const cards = document.querySelectorAll('.project-card');

        filterButtons.forEach(btn => {
          btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            filterButtons.forEach(b => {
              b.classList.remove('bg-arcade-black', 'text-crimson-bright', 'border-crimson-bright');
              b.classList.add('bg-arcade-panel', 'text-secondary', 'border-arcade-border');
            });
            btn.classList.remove('bg-arcade-panel', 'text-secondary', 'border-arcade-border');
            btn.classList.add('bg-arcade-black', 'text-crimson-bright', 'border-crimson-bright');

            cards.forEach(card => {
              const categories = card.getAttribute('data-category') || '';
              if (filter === 'all' || categories.includes(filter)) {
                card.style.display = 'flex';
              } else {
                card.style.display = 'none';
              }
            });
          });
        });
      })();