$(document).ready(function(){

    // slider js
    $('.slider').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 3,
        variableWidth: true
    });

    // faqs js
    jQuery('.faqs-q').on('click', function() {
        jQuery(this).next().slideToggle();
        jQuery(this).children('.faqs-box-icon').toggleClass('is-open');
    })

    // smoothscroll js
    $('a[href^="#"]').click(function() {
        // 移動速度を指定（ミリ秒）
        let speed = 500;
        // hrefで指定されたidを取得
        let id = jQuery(this).attr("href");
        // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
        let target = jQuery("#" == id ? "html" : id);
        // ページのトップを基準にターゲットの位置を取得
        let position = jQuery(target).offset().top;
        // ターゲットの位置までspeedの速度で移動
        jQuery("html, body").animate(
            {
                scrollTop: position
            },
            speed
        );
        return false;
    });

    // formの入力
    let $submit = $( '#js-submit' )
    $( '#js-form input, #js-form textarea' ).on('change', function() {
        if (
            $( '#js-form input[name="entry.610148254"]' ).val() !== ""&&
            $( '#js-form input[name="entry.1953257836"]' ).val() !== ""&&
            $( '#js-form input[name="entry.1546505441"]' ).val() !== ""&&
            $( '#js-form input[name="entry.1756196432"]' ).prop( 'checked' ) === true
        ) {
            $submit.addClass( '-active')
        } else {
            $submit.removeClass( '-active')
        }
    })

    // drawer ja
    jQuery('.drawer-icon').on('click', function(e) {
        e.preventDefault();
        
        jQuery('.drawer-icon').toggleClass('is-active')
        jQuery('.drawer-content').toggleClass('is-active')
        jQuery('.drawer-background').toggleClass('is-active')
    
        return false;
      });

    //   スクロールに応じて表示 ja
    jQuery(window).on('scroll', function() {
        if (100 < jQuery(this).scrollTop()) {
            jQuery('.to-top').addClass('is-show');
        } else {
            jQuery('.to-top').removeClass('is-show');
        }

    });
});

