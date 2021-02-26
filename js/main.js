// main.js

$(function(){
    AOS.init();
  });
  
  /*** 작품 필터링하여 보여주기 ***/
  $(function(){
    let dutation = 5;
  
    // all
    $('#pf-all').on('click', function(){
      $('#portfolio .list li').show(dutation);
      return false; // 클릭시 a태그 작동 금지
    })
  
    // web
    $('#pf-web').on('click', function(){
      $('#portfolio .list li')
        .hide(dutation)
        .filter('.web')
        .show(dutation);
        return false; // 클릭시 a태그 작동 금지
    })
  
    // mobile
    $('#pf-mobile').on('click', function(){
      $('#portfolio .list li')
        .hide(dutation)
        .filter('.mobile')
        .show(dutation);
        return false; // 클릭시 a태그 작동 금지
    })
  
    // graphic
    $('#pf-graphic').on('click', function(){
      $('#portfolio .list li')
        .hide(dutation)
        .filter('.graphic')
        .show(dutation);
        return false; // 클릭시 a태그 작동 금지
    })
  
  });

  $(function(){
    // all
    $('#pf-all').on('click', function(){
      $('#portfolio_main #main_header p')
      .text('ALL');
    })

    // web
    $('#pf-web').on('click', function(){
      $('#portfolio_main #main_header p')
      .text('WEB');
    })

    // mobile
    $('#pf-mobile').on('click', function(){
      $('#portfolio_main #main_header p')
      .text('MOBILE');
    })

     // graphic
     $('#pf-graphic').on('click', function(){
      $('#portfolio_main #main_header p')
      .text('GRAPHIC');
    })
  });

  $(function(){
    
  });