/* Top영역 최상단 탭 */
$(function () {
            $('.topmenu li').on('click', function () {
                let i = $(this).index();

                // 탭 버튼 on 클래스
                $('.topmenu li').removeClass('on');
                $(this).addClass('on');
            });
        });
/* sub 공통영역 비쥬얼-탭영역 */
$(function () {
            $('.subtab_menu li').on('click', function () {
                let i = $(this).index();

                // 탭 버튼 on 클래스
                $('.subtab_menu li').removeClass('on');
                $(this).addClass('on');
            });
        });
  /* header */
      $(function () {
        const $submenu = $(".submenu");
        const $bg = $("header > .bg");
        const $header = $("header");

        $(".gnb").on("mouseenter", function () {
          $submenu.stop().fadeIn(200);

          let maxHeight = 0;
          $submenu.each(function () {
            const h = $(this).outerHeight(true);
            if (h > maxHeight) {
              maxHeight = h;
            }
          });

          $bg.stop().animate(
            {
              height: maxHeight,
            },
            200
          );
        });
        $header.on("mouseleave", function () {
          $submenu.stop().fadeOut(150);
          $bg.stop().animate(
            {
              height: 0,
            },
            200
          );
        });
      });

      /* visual*/
      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      /* $('.accordion').click(function(){
            let submenu = $(this).next('.submenu');
            $('.submenu').not(submenu).slideUp();//현재꺼 외 다른 패널 닫기
            submenu.slideToggle()
        }) */


  /* 아코디언 화살표방향 */
      $('.accordion').click(function () {
  let submenu = $(this).next('.submenu');
  let arrowImg = $(this).find('.arrow');

  // 다른 submenu 닫기 & 다른 화살표 원래대로
  $('.submenu').not(submenu).slideUp();
  $('.accordion .arrow').not(arrowImg).attr('src', 'img/common/imgi_50_m_nav_arrow.gif');

  // 현재 submenu 토글
  submenu.stop(true, true).slideToggle(function () {
    // 열렸는지 닫혔는지 상태에 따라 이미지 변경
    if (submenu.is(':visible')) {
      arrowImg.attr('src', 'img/common/imgi_49_m_nav_arrow_on.gif');
    } else {
      arrowImg.attr('src', 'img/common/imgi_50_m_nav_arrow.gif');
    }
  });
});

/* 사이드메뉴 열고 닫고 */
$(document).ready(function () {
  // 메뉴 열기
  $('.side_open').click(function () {
    $('.sidemenu').addClass('on');
    $('.dim').fadeIn();
  });

  // 메뉴 닫기 (닫기 버튼 클릭 시)
  $('.side_close, .dim').click(function () {
    $('.sidemenu').removeClass('on');
    $('.dim').fadeOut();
  });
});