$(document).ready(function() {

  if (window.location.href === "file:///C:/Users/usreint/Documents/DOCS/PRACA/PROJEKT/index.html") {
    $(".przepisy").click(function() {
      $('html,body').animate({
          scrollTop: $(".block2").offset().top
        },
        1200);
    });

    $(".inspiracje").click(function() {
      $('html,body').animate({
          scrollTop: $(".block3").offset().top
        },
        1200);
    });

    $(".porady").click(function() {
      $('html,body').animate({
          scrollTop: $(".block4").offset().top
        },
        1600);
    });

    $(".galeria").click(function() {
      $('html,body').animate({
          scrollTop: $(".block5").offset().top
        },
        2000);
    });

  } else {
    $(document).on('click', '.home', function() {
      window.location.href = "file:///C:/Users/usreint/Documents/DOCS/PRACA/PROJEKT/index.html";
    });

    $(document).on('click', '.przepisy', function() {
      window.location.href = "file:///C:/Users/usreint/Documents/DOCS/PRACA/PROJEKT/html/przepisy.html";
    });

    $(document).on('click', '.inspiracje', function() {
      window.location.href = "file:///C:/Users/usreint/Documents/DOCS/PRACA/PROJEKT/html/inspiracje.html";
    });

    $(document).on('click', '.porady', function() {
      window.location.href = "file:///C:/Users/usreint/Documents/DOCS/PRACA/PROJEKT/html/porady.html";
    });

    $(document).on('click', '.galeria', function() {
      window.location.href = "file:///C:/Users/usreint/Documents/DOCS/PRACA/PROJEKT/html/galeria.html";
    });
  }


  $(".active").click(function() {
    $('html,body').animate({
        scrollTop: $("header").offset().top
      },
      1200);
  });

  $(".fa-angle-down").click(function() {
    $('html,body').animate({
        scrollTop: $(".block2").offset().top
      },
      1200);
  });

  $(document).on('click', '.b2_przepisy', function() {
    window.location.href = "file:///C:/Users/usreint/Documents/DOCS/PRACA/PROJEKT/html/przepisy.html";
  });

  $(document).on('click', '.b3_inspiracje', function() {
    window.location.href = "file:///C:/Users/usreint/Documents/DOCS/PRACA/PROJEKT/html/inspiracje.html";
  });

  $(document).on('click', '.b4_porady', function() {
    window.location.href = "file:///C:/Users/usreint/Documents/DOCS/PRACA/PROJEKT/html/porady.html";
  });

  $(document).on('click', '.b5_galeria', function() {
    window.location.href = "file:///C:/Users/usreint/Documents/DOCS/PRACA/PROJEKT/html/galeria.html";
  });





  // nav
  var stickyNavTop = $('nav').offset().top;

  var stickyNav = function() {
    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  };
  stickyNav();

  $(window).scroll(function() {
    stickyNav();
  });


  // kategorie
  $(".cat_item").on('click', function(e) {
    e.preventDefault();
    var page = $(this).data('page');
    $(".recipes .page:not('.hide')").stop().fadeOut('fast', function() {
      $(this).addClass('hide');
      $('.recipes .page[data-page="' + page + '"]').fadeIn('slow').removeClass('hide');
    });
  });


  // przepisy view
  $('.view ul li a').click(function() {
    var itemID = $(this).attr('href');
    $('.view ul').addClass('item_open');
    $(itemID).addClass('item_open');
    return false;
  });
  $(window).click(function() {
    $('.port, .view ul').removeClass('item_open');
    return false;
  });

  $(".view ul li a").click(function() {
    $('.port').animate({
      scrollTop: parseInt($(".top").offset().top)
    }, 1000);
  });

  $(".cat_item").click(function() {
    $('html,body').animate({
        scrollTop: $(".recipes").offset().top
      },
      1500);
  });

  $(".row li a").click(function() {
    $('html,body').animate({
        scrollTop: $(".recipes").offset().top
      },
      1500);
  });


  //inspiracje view
  $('.insp_item a').click(function() {
    var itemID = $(this).attr('href');
    $('.row').addClass('item_open');
    $(itemID).addClass('item_open');
    $('html,body').animate({
        scrollTop: $(".top").offset().top
      },
      1500);
    return false;
  });
  $(window).click(function() {
    $('.port, .row').removeClass('item_open');
    return false;
  });

  $(".insp_item a").click(function() {
    $('.port').animate({
      scrollTop: parseInt($(".top").offset().top)
    }, 2000);
  });

  //porady
  $('.expand').click(function(e) {
    e.preventDefault();
    var notthis = $('.exp_active').not(this);
    notthis.toggleClass('exp_active').next('.expand_view').slideToggle(600);
    $(this).toggleClass('exp_active').next().slideToggle(400);
  });


  $('.list').click(function(e) {
    e.preventDefault();
    var notthis2 = $('.list_active').not(this);
    notthis2.toggleClass('list_active').next('.list_view').slideToggle(800);
    $(this).toggleClass('list_active').next().slideToggle(300);
  });


});
