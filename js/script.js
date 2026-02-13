$(function () {
  $("#js-drawer-icon").on("click", function (e) {
    e.preventDefault();
    $("#js-drawer-icon").toggleClass("is-checked");
    $("#js-drawer-content").toggleClass("is-checked");
  });

  $(".js-accordion").on("click", function (e) {
    e.preventDefault();

    if ($(this).parent().hasClass("is-open")) {
      $(this).parent().removeClass("is-open");
      $(this).next().slideUp();
    } else {
      $(this).parent().addClass("is-open");
      $(this).next().slideDown();
    }
  });

  const swiper = new Swiper("#js-gallery-swiper", {
    spaceBetween: 82,
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: "#js-gallery-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: "#js-gallery-next",
      prevEl: "#js-gallery-prev",
    },
  });

  const modal = document.getElementById("js-about-modal");

  $(".js-modal-open").on("click", function (e) {
    e.preventDefault();
    if (!modal.open) {
      modal.showModal();
    }

    modal.showModal();
  });

  $(".js-modal-close").on("click", function (e) {
    e.preventDefault();

    modal.close();
  });

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.close();
    }
  });

  //js-drawer-contentの中にあるa[href^='#']
  $("#js-drawer-content a[href^='#']").on("click", function (e) {
    $("#js-drawer-icon").removeClass("is-checked");
    $("#js-drawer-content").removeClass("is-checked");
  });

  //aタグのhref属性が#から始まるもの
  $("a[href^='#']").on("click", function (e) {
    const speed = 500;
    const id = $(this).attr("href");
    //条件 ? trueのとき : falseのとき
    const target = $("#" == id ? "html" : id);
    const position = $(target).offset().top;

    $("html, body").animate(
      { scrollTop: position },
      speed,
      "swing", //swing or linear
    );
  });

  const intersectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in-view");
      } else {
        entry.target.classList.remove("is-in-view");//何回も付け外ししたいときは書く。
      }
    });
  });

  const inViewItems = document.querySelectorAll(".js-in-view");
  inViewItems.forEach(function (inViewItem) {
    intersectionObserver.observe(inViewItem);
  });
});
