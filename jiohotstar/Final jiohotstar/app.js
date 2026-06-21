

$(document).ready(function () {


  const trendingData = [
    { title: 'Pushpa 2', genre: 'Action · Hindi', badge: 'EXCLUSIVE', rating: 5, lang: 'hindi',
      img: 'https://image.tmdb.org/t/p/w500/tqGnHdSGXHHSEo8YWCB5Fy7VGrJ.jpg',
      fallback: 'linear-gradient(135deg,#ff6b35,#f7c59f)' },
    { title: 'Dune: Part Two', genre: 'Sci-Fi · English', badge: 'HD', rating: 5, lang: 'english',
      img: 'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
      fallback: 'linear-gradient(135deg,#4a00e0,#8e2de2)' },
    { title: 'Leo', genre: 'Thriller · Tamil', badge: 'NEW', rating: 4, lang: 'south',
      img: 'https://image.tmdb.org/t/p/w500/mE3zzMkpP8yqlkzdjPsQmfZEzN0.jpg',
      fallback: 'linear-gradient(135deg,#134e5e,#71b280)' },
    { title: 'Oppenheimer', genre: 'Drama · English', badge: 'AWARD', rating: 5, lang: 'english',
      img: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
      fallback: 'linear-gradient(135deg,#232526,#414345)' },
    { title: 'Salaar', genre: 'Action · Telugu', badge: 'HOT', rating: 4, lang: 'south',
      img: 'https://image.tmdb.org/t/p/w500/n2COFoXNKpOkTEUFZGCIpBKFPXR.jpg',
      fallback: 'linear-gradient(135deg,#870000,#190a05)' },
    { title: 'Avengers: Endgame', genre: 'Superhero · English', badge: 'MARVEL', rating: 5, lang: 'english',
      img: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
      fallback: 'linear-gradient(135deg,#4776e6,#8e54e9)' },
    { title: 'KGF Chapter 2', genre: 'Action · Kannada', badge: 'BLOCKBUSTER', rating: 5, lang: 'south',
      img: 'https://image.tmdb.org/t/p/w500/4j4LMcY5MjUIOTiAD7dMqkbmkDa.jpg',
      fallback: 'linear-gradient(135deg,#f09819,#edde5d)' },
    { title: 'Jawan', genre: 'Action · Hindi', badge: 'MEGA HIT', rating: 5, lang: 'hindi',
      img: 'https://image.tmdb.org/t/p/w500/casOuVkeLqoAQDQ4BUepEHlhSGk.jpg',
      fallback: 'linear-gradient(135deg,#f12711,#f5af19)' },
  ];

  const moviesData = [
    { title: 'RRR', genre: 'Period · Telugu', badge: 'CLASSIC', rating: 5, lang: 'south',
      img: 'https://image.tmdb.org/t/p/w500/nEufeZlyAsvQ7PkvsHYKSXMFpbj.jpg',
      fallback: 'linear-gradient(135deg,#2c3e50,#e74c3c)' },
    { title: 'Pathaan', genre: 'Spy · Hindi', badge: '4K', rating: 4, lang: 'hindi',
      img: 'https://image.tmdb.org/t/p/w500/vRPrN3YqFRRx8HYPxBZiXAFNNsO.jpg',
      fallback: 'linear-gradient(135deg,#005c97,#363795)' },
    { title: 'Barbie', genre: 'Comedy · English', badge: 'TRENDING', rating: 4, lang: 'english',
      img: 'https://image.tmdb.org/t/p/w500/iuFNMS8vlzmfa8EKn3RetnnKjUML.jpg',
      fallback: 'linear-gradient(135deg,#ff758c,#ff7eb3)' },
    { title: 'Animal', genre: 'Drama · Hindi', badge: 'HOT', rating: 4, lang: 'hindi',
      img: 'https://image.tmdb.org/t/p/w500/oaHSORjfRGjxFY8bYWEUNJlVBLq.jpg',
      fallback: 'linear-gradient(135deg,#141e30,#243b55)' },
    { title: 'Inception', genre: 'Thriller · English', badge: 'CULT', rating: 5, lang: 'english',
      img: 'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
      fallback: 'linear-gradient(135deg,#0f0c29,#302b63)' },
    { title: 'Stree 2', genre: 'Horror Comedy · Hindi', badge: 'PREMIERE', rating: 5, lang: 'hindi',
      img: 'https://image.tmdb.org/t/p/w500/f3lfGp8m5YWMS2AAuM0JRGQqZzL.jpg',
      fallback: 'linear-gradient(135deg,#000428,#004e92)' },
    { title: 'Kalki 2898 AD', genre: 'Sci-Fi · Telugu', badge: 'EPIC', rating: 5, lang: 'south',
      img: 'https://image.tmdb.org/t/p/w500/cghMCc0OiXJmIWJKDDdpF2zNHcn.jpg',
      fallback: 'linear-gradient(135deg,#1a1a2e,#e94560)' },
    { title: 'The Dark Knight', genre: 'Action · English', badge: 'LEGEND', rating: 5, lang: 'english',
      img: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
      fallback: 'linear-gradient(135deg,#0f0c29,#302b63)' },
  ];

  const sportsData = [
    {
      icon: '🏏', name: 'IPL 2025', match: 'Mumbai Indians vs CSK',
      team1: '🦁', team1Name: 'MI', team2: '🐆', team2Name: 'CSK',
      score1: '186/4', score2: '142/6', status: 'LIVE', overs: '18.2 ov',
      /* Wankhede Stadium / cricket stadium */
      img: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&q=80',
      fallback: 'linear-gradient(135deg,#0d1b2a,#1b4332)'
    },
    {
      icon: '⚽', name: 'Premier League', match: 'Man City vs Arsenal',
      team1: '💙', team1Name: 'Man City', team2: '❤️', team2Name: 'Arsenal',
      score1: '2', score2: '1', status: 'LIVE', overs: "72'",
      /* Football stadium aerial */
      img: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80',
      fallback: 'linear-gradient(135deg,#1a237e,#e53935)'
    },
    {
      icon: '🎾', name: 'Wimbledon 2025', match: 'Alcaraz vs Djokovic',
      team1: '🏆', team1Name: 'Alcaraz', team2: '🎾', team2Name: 'Djokovic',
      score1: '6-4 5', score2: '3-6 3', status: 'LIVE', overs: 'Set 3',
      /* Wimbledon grass court */
      img: 'https://images.unsplash.com/photo-1595435742656-5272d0b3fa82?w=600&q=80',
      fallback: 'linear-gradient(135deg,#1b4332,#52b788)'
    },
    {
      icon: '🏑', name: 'Champions Trophy', match: 'India vs Pakistan',
      team1: '🇮🇳', team1Name: 'India', team2: '🇵🇰', team2Name: 'Pakistan',
      score1: '312/6', score2: '–', status: 'LIVE', overs: '48.3 ov',
      /* Cricket match crowd */
      img: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=600&q=80',
      fallback: 'linear-gradient(135deg,#ff6600,#003366)'
    },
  ];

  const plansData = [
    {
      name: 'MOBILE',
      priceM: 149, priceY: 999,
      features: [
        { text: '1 Mobile Screen', ok: true },
        { text: 'HD Quality', ok: true },
        { text: '30+ Languages', ok: true },
        { text: 'Download Offline', ok: false },
        { text: '4K Ultra HD', ok: false },
        { text: 'Ad-Free Experience', ok: false },
      ],
      featured: false, btnClass: 'btn-plan-outline'
    },
    {
      name: 'SUPER',
      priceM: 299, priceY: 1799,
      features: [
        { text: '2 Screens Simultaneously', ok: true },
        { text: 'Full HD Quality', ok: true },
        { text: '50+ Languages', ok: true },
        { text: 'Download Offline', ok: true },
        { text: '4K Ultra HD', ok: false },
        { text: 'Ad-Free Experience', ok: false },
      ],
      featured: true, btnClass: 'btn-plan-fill', badge: 'MOST POPULAR'
    },
    {
      name: 'PREMIUM',
      priceM: 599, priceY: 2999,
      features: [
        { text: '4 Screens Simultaneously', ok: true },
        { text: '4K Ultra HD', ok: true },
        { text: '50+ Languages', ok: true },
        { text: 'Download Offline', ok: true },
        { text: 'Dolby Atmos Sound', ok: true },
        { text: 'Ad-Free Experience', ok: true },
      ],
      featured: false, btnClass: 'btn-plan-outline'
    }
  ];

  const faqData = [
    { q: 'What is JioHotstar?',
      a: 'JioHotstar is India\'s largest streaming platform combining the best of JioCinema and Disney+ Hotstar. It offers 100,000+ hours of content including movies, web series, sports, and live TV in 50+ languages.' },
    { q: 'Can I watch JioHotstar for free?',
      a: 'Yes! JioHotstar offers a free tier with ads. For an ad-free premium experience with 4K quality and more screens, you can choose from our paid plans starting at ₹149/month.' },
    { q: 'On how many devices can I stream simultaneously?',
      a: 'Depending on your plan: Mobile (1 screen), Super (2 screens), Premium (4 screens). You can install the app on as many devices as you like, but streaming is limited per plan.' },
    { q: 'Is live sports available on all plans?',
      a: 'Yes, live sports including IPL, Premier League, Wimbledon, and international cricket are available on all plans. Premium users get ad-free sports in 4K.' },
    { q: 'Can I download content to watch offline?',
      a: 'Offline downloads are available on the Super and Premium plans. Downloaded content can be watched without an internet connection for up to 30 days.' },
    { q: 'How do I cancel my subscription?',
      a: 'You can cancel your subscription anytime from Account Settings > Subscription. There are no cancellation fees, and you\'ll continue to have access until the end of your billing period.' },
  ];

  const searchSuggestions = [
    'Pushpa 2', 'IPL 2025 Live', 'Dune Part Two', 'Family Man Season 3',
    'RRR', 'KGF Chapter 2', 'Leo', 'Jawan', 'Stree 2', 'Avengers Endgame',
  ];

  function renderStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
      stars += `<i class="fa${i < rating ? 's' : 'r'} fa-star"></i>`;
    }
    return stars;
  }

  function buildCard(item) {
    return `
      <div class="media-card reveal" data-lang="${item.lang}">
        <div class="card-thumb" style="background:${item.fallback}; position:relative;">
          <img
            src="${item.img}"
            alt="${item.title}"
            class="card-poster-img"
            onerror="this.style.display='none'"
          />
          <div class="card-badge">${item.badge}</div>
          <div class="card-info">
            <h6>${item.title}</h6>
            <small>${item.genre}</small>
            <div class="card-rating">${renderStars(item.rating)}</div>
          </div>
          <div class="card-hover-overlay">
            <i class="fas fa-play-circle"></i>
            <span>Watch Now</span>
          </div>
        </div>
      </div>`;
  }

  function buildSportCard(s) {
    return `
      <div class="col-lg-3 col-md-6 reveal">
        <div class="sport-card">
          <div class="sport-poster">
            <img
              src="${s.img}"
              alt="${s.name}"
              onerror="this.style.display='none'"
            />
            <div class="sport-poster-badge">
              <span class="dot-live"></span> LIVE
            </div>
            <div class="sport-poster-icon">${s.icon}</div>
          </div>
          <div class="sport-card-body">
            <h5>${s.name}</h5>
            <p class="sport-desc">${s.match}</p>
            <div class="sport-teams">
              <div class="team">
                <span class="team-flag">${s.team1}</span>
                <div class="team-name">${s.team1Name}</div>
              </div>
              <div class="vs-badge">VS</div>
              <div class="team">
                <span class="team-flag">${s.team2}</span>
                <div class="team-name">${s.team2Name}</div>
              </div>
            </div>
            <div class="score-row">
              <span class="score-num">${s.score1}</span>
              <span class="sport-status"><span class="dot-sm"></span>${s.status}</span>
              <span class="score-num">${s.score2}</span>
            </div>
            <small class="sport-overs">${s.overs}</small>
            <button class="btn-watch"><i class="fas fa-play me-2"></i>Watch Live</button>
          </div>
        </div>
      </div>`;
  }

  trendingData.forEach(item => $('#trendingRow').append(buildCard(item)));
  moviesData.forEach(item  => $('#moviesRow').append(buildCard(item)));
  sportsData.forEach(s     => $('#sportsRow').append(buildSportCard(s)));

  let isYearly = false;
  function renderPlans() {
    $('#plansRow').empty();
    plansData.forEach(plan => {
      const price = isYearly ? plan.priceY : plan.priceM;
      const period = isYearly ? '/yr' : '/mo';
      const featuresHtml = plan.features.map(f => `
        <li class="${f.ok ? 'available' : ''}">
          <i class="fas ${f.ok ? 'fa-check check' : 'fa-times cross'}"></i>
          ${f.text}
        </li>`).join('');
      const card = `
        <div class="col-lg-4 col-md-6 reveal">
          <div class="plan-card ${plan.featured ? 'featured' : ''}">
            ${plan.badge ? `<div class="plan-badge">${plan.badge}</div>` : ''}
            <div class="plan-name">${plan.name}</div>
            <div class="plan-price">
              <span class="plan-currency">₹</span>
              <span class="plan-amount price-val">${price}</span>
              <span class="plan-period">${period}</span>
            </div>
            <ul class="plan-features">${featuresHtml}</ul>
            <button class="btn-plan ${plan.btnClass}" onclick="openSubscribeModal()">Get Started</button>
          </div>
        </div>`;
      $('#plansRow').append(card);
    });
    observeReveal();
  }
  renderPlans();

  $('#billingToggle').on('change', function () {
    isYearly = $(this).is(':checked');
    renderPlans();
  });

  faqData.forEach((item, i) => {
    const faqItem = `
      <div class="accordion-item reveal">
        <h2 class="accordion-header">
          <button class="accordion-button ${i !== 0 ? 'collapsed' : ''}"
                  type="button" data-bs-toggle="collapse"
                  data-bs-target="#faq${i}">
            ${item.q}
          </button>
        </h2>
        <div id="faq${i}" class="accordion-collapse collapse ${i === 0 ? 'show' : ''}"
             data-bs-parent="#faqAccordion">
          <div class="accordion-body">${item.a}</div>
        </div>
      </div>`;
    $('#faqAccordion').append(faqItem);
  });

  $(window).on('scroll', function () {
    $(this).scrollTop() > 60
      ? $('#mainNav').addClass('scrolled')
      : $('#mainNav').removeClass('scrolled');
    $(this).scrollTop() > 400
      ? $('#backToTop').addClass('visible')
      : $('#backToTop').removeClass('visible');
  });

  $('#backToTop').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 600, 'swing');
  });

  $(window).on('scroll.nav', function () {
    const scrollPos = $(this).scrollTop() + 100;
    $('section[id]').each(function () {
      const top    = $(this).offset().top;
      const bottom = top + $(this).outerHeight();
      const id     = $(this).attr('id');
      if (scrollPos >= top && scrollPos < bottom) {
        $('.navbar-nav .nav-link').removeClass('active');
        $(`.navbar-nav .nav-link[href="#${id}"]`).addClass('active');
      }
    });
  });

  $(document).on('click', '.nav-link, .btn-hero-outline', function (e) {
    const href = $(this).attr('href');
    if (href && href.startsWith('#') && $(href).length) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $(href).offset().top - 80 }, 700, 'swing');
      $('#navMenu').collapse('hide');
    }
  });

  function animateCounters() {
    $('.stat-num').each(function () {
      const $el      = $(this);
      const target   = parseInt($el.data('count'), 10);
      const duration = 1800;
      const step     = 16;
      const inc      = Math.ceil(target / (duration / step));
      let current    = 0;
      const timer    = setInterval(function () {
        current += inc;
        if (current >= target) { current = target; clearInterval(timer); }
        $el.text(current.toLocaleString('en-IN'));
      }, step);
    });
  }
  let counterDone = false;
  $(window).on('scroll.counter', function () {
    if (!counterDone && $(window).scrollTop() < 200) {
      counterDone = true;
      animateCounters();
      $(window).off('scroll.counter');
    }
  });
  animateCounters();

  $(document).on('click', '.filter-tab', function () {
    const filter = $(this).data('filter');
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $('#moviesRow .media-card').each(function () {
      const lang = $(this).data('lang');
      (filter === 'all' || lang === filter) ? $(this).fadeIn(300) : $(this).fadeOut(200);
    });
  });

  $('#searchInput').on('input', function () {
    const query = $(this).val().trim().toLowerCase();
    $('.search-suggestions').remove();
    if (query.length < 1) return;
    const matches = searchSuggestions.filter(s => s.toLowerCase().includes(query));
    if (!matches.length) return;
    const box = $('<div class="search-suggestions"></div>');
    matches.slice(0, 5).forEach(m => {
      box.append(`<div class="suggestion-item"><i class="fas fa-search"></i>${m}</div>`);
    });
    $('.search-box').css('position', 'relative').append(box);
  });
  $(document).on('click', '.suggestion-item', function () {
    $('#searchInput').val($(this).text().trim());
    $('.search-suggestions').remove();
  });
  $(document).on('click', function (e) {
    if (!$(e.target).closest('.search-box').length) $('.search-suggestions').remove();
  });

  window.openSubscribeModal = function () {
    new bootstrap.Modal(document.getElementById('subscribeModal')).show();
  };
  $('#subscribeBtn, .btn-hero-primary, #heroWatchBtn').on('click', function () {
    openSubscribeModal();
  });

  $('#modalSubmitBtn').on('click', function () {
    let valid = true;
    const name  = $('#modalName').val().trim();
    const email = $('#modalEmail').val().trim();
    const phone = $('#modalPhone').val().trim();
    const plan  = $('#modalPlan').val();
    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 2)         { $('#modalName').addClass('is-invalid');  valid = false; }
    else                          { $('#modalName').removeClass('is-invalid'); }
    if (!emailRx.test(email))    { $('#modalEmail').addClass('is-invalid'); valid = false; }
    else                          { $('#modalEmail').removeClass('is-invalid'); }
    if (!/^\d{10}$/.test(phone)) { $('#modalPhone').addClass('is-invalid'); valid = false; }
    else                          { $('#modalPhone').removeClass('is-invalid'); }
    if (!plan)                   { $('#modalPlan').addClass('is-invalid');  valid = false; }
    else                          { $('#modalPlan').removeClass('is-invalid'); }

    if (valid) {
      const $btn = $(this);
      $btn.html('<i class="fas fa-spinner fa-spin me-2"></i>Processing…').prop('disabled', true);
      setTimeout(function () {
        $btn.html('<i class="fas fa-check me-2"></i>Welcome to JioHotstar! 🎉')
            .css('background', 'linear-gradient(135deg,#4ade80,#22c55e)');
        setTimeout(function () {
          bootstrap.Modal.getInstance(document.getElementById('subscribeModal')).hide();
          $btn.html('Start Free Trial').css('background', '').prop('disabled', false);
          ['#modalName','#modalEmail','#modalPhone','#modalPlan'].forEach(id => $(id).val(''));
        }, 2000);
      }, 1500);
    }
  });

  $('#nlSubmit').on('click', function () {
    const emailVal = $('#emailInput').val().trim();
    const $msg     = $('#formMsg');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
      $msg.text('⚠️ Please enter a valid email address.').removeClass('success').addClass('error');
      $('#emailInput').css('border-color', '#f87171');
      return;
    }
    $(this).html('<i class="fas fa-spinner fa-spin"></i>').prop('disabled', true);
    setTimeout(() => {
      $msg.text('🎉 You\'re subscribed! Get ready for amazing content.').removeClass('error').addClass('success');
      $('#emailInput').val('').css('border-color', '');
      $('#nlSubmit').html('Notify Me').prop('disabled', false);
    }, 1200);
  });
  $('#emailInput').on('keypress', function (e) {
    if (e.which === 13) $('#nlSubmit').trigger('click');
  });

  function observeReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), index * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
  observeReveal();

  let playing = true;
  $('.play-btn-circle').on('click', function () {
    playing = !playing;
    $('#miniPlayIcon').toggleClass('fa-pause fa-play');
  });

  $(document).on('click', '.btn-watch', openSubscribeModal);
  $(document).on('click', '.media-card', openSubscribeModal);

  $('.ticker-track')
    .on('mouseenter', function () { $(this).css('animation-play-state', 'paused'); })
    .on('mouseleave', function () { $(this).css('animation-play-state', 'running'); });

});
