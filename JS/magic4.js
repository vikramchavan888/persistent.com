gsap.registerPlugin(ScrollTrigger, SplitText);

let scroll;

const body = document.body;
const select = (e) => document.querySelector(e);
const selectAll = (e) => document.querySelectorAll(e);
const transitionOffset = 525;

initPageTransitions();

// Animation - Page Loader
function initLoader() { 

   var tl = gsap.timeline();

   tl.call(function() {
      scroll.stop();
   }, null, 0);

   tl.set("html", { 
      cursor: "wait"
   });

   if(document.querySelector('.cookie-jar')) {
      tl.set(".cookie-jar", { 
         yPercent: 150
      });
   }

   tl.to(".transition-words",{
      yPercent: -50,
      duration: 1.4,
      ease: "Power4.easeInOut",
      delay: 1.75,
   });

   tl.to(".transition-screen",{
      yPercent: -100,
      duration: 1.1,
      ease: "Expo.easeInOut",
   },"<");

   tl.to(".transition-screen-inner", {
      yPercent: 100,
      duration: 1.1,
      ease: "Expo.easeInOut"
   },"<");

   tl.to(".transition-screen-duplicate", {
      yPercent: -100,
      duration: 1.4,
      ease: "Expo.easeInOut",
   },"<"); 

   tl.to(".transition-screen-duplicate-inner", {
      yPercent: 100,
      duration: 1.4,
      ease: "Expo.easeInOut",
   },"<"); 

   if(document.querySelector('.cookie-jar')) {
      tl.to($('.cookie-jar'), {
         yPercent: 0,
         duration: 1.4,
         ease: "Expo.easeOut",
         clearProps: "all"
      },"< 0.5");
   }

   tl.call(function() {
      // Activated loader words
      $('.transition-words').each(function () {
         let transitionWordsCycle;
         var transitionSingleWord = $(this);
         transitionWordsCycle = setInterval(cycleThroughWords, 130);

         function cycleThroughWords() {
            if(transitionSingleWord.find('[data-transition-word-status="active"]').next().length > 0) {
               transitionSingleWord.find('[data-transition-word-status="active"]').attr('data-transition-word-status', 'not-active').next().attr('data-transition-word-status', 'active');
            } else {
               clearInterval(transitionWordsCycle);
               gsap.set("html", { 
                  cursor: "auto"
               });
            }
         }
      });
   }, null, 0);

   tl.call(function() {
      pageTransitionOut();
   }, null, 2.15);

   tl.call(function() {
      scroll.start();
   }, null, 2.75);	

   tl.call(function() {
      $('[data-transition-status="loading"]').attr('data-transition-status', 'transition');
      $('.transition-container').find('.loading-remove').remove();
   }, null, 3);


   // tl.call(function() {
   //    if(document.querySelector('.home-header .placeholder-mobile video')) {
   //       $('.home-header .placeholder-mobile video').each(function () {
   //          $(this).trigger('pause').get(0).currentTime = 0;
   //       });
   //    }
   // }, null, 2);

   // tl.call(function() {
   //    if(document.querySelector('.home-header .placeholder-mobile video')) {
   //       $('.home-header .placeholder-mobile video').each(function () {
   //          $(this).trigger('load');
   //       });
   //    }
   // }, null, 2.15);

}

// Animation - Page Leave
function pageTransitionIn() {
	var tl = gsap.timeline();

   tl.call(function() {
      scroll.start();
   });

   tl.set(".transition-screen",{
      yPercent: 100
   });

   tl.set(".transition-screen-inner",{
      yPercent: -100
   });

   tl.to(".transition-screen",{
      yPercent: 0,
      duration: 0.5,
      ease: "Power2.easeIn",
   });

   tl.to(".transition-screen-inner", {
      yPercent: 0,
      duration: 0.5,
      ease: "Power2.easeIn"
   },"<");

   tl.set(".transition-screen-duplicate, .transition-screen-duplicate-inner",{
      yPercent: 0,
      delay: 0.1
   });

   tl.to(".transition-screen",{
      yPercent: -100,
      duration: 1.1,
      ease: "Expo.easeOut",
   },"<");

   tl.to(".transition-screen-inner", {
      yPercent: 100,
      duration: 1.1,
      ease: "Expo.easeOut"
   },"<");

   tl.to(".transition-screen-duplicate", {
      yPercent: -100,
      duration: 1.4,
      ease: "Expo.easeOut",
   },"< 0.1"); 

   tl.to(".transition-screen-duplicate-inner", {
      yPercent: 100,
      duration: 1.4,
      ease: "Expo.easeInOut",
   },"< 0.1"); 
}

// Animation - Page Enter
function pageTransitionOut() {
	var tl = gsap.timeline();

   tl.call(function() {
      scroll.start();
   });

   if(document.querySelector('.split-chars.animate-h1')) {
      tl.set(".split-chars.animate-h1 .single-char-inner", { 
         yPercent: 110,
         scale: 0.5,
      });
   }

   if(document.querySelector('.split-chars.animate-contact')) {
      tl.set(".split-chars.animate-contact .single-char-inner, .bar.animate-contact .bar-inner", { 
         yPercent: 110,
         scale: 0.5,
      });
   }

   if(document.querySelector('.about-header .split-chars.animate-h1 .single-char-inner')) {
      tl.set(".split-chars.animate-h1 .single-char-inner", { 
         yPercent: 110,
         scale: 1,
      });
   }

   if(document.querySelector('header .animate-h4 span')) {
      tl.set("header .animate-h4 span", { 
         yPercent: 110
      });
   }

   if(document.querySelector('.about-block-images-first .animate-figure')) {
      tl.set($('.about-block-images-first .animate-figure'), {
         y: "20vh",
      });
   }

   tl.call(function() {
      if(document.querySelector('.split-chars.animate-contact')) {
         gsap.to($(".split-chars.animate-contact .single-char-inner, .bar.animate-contact .bar-inner"), { 
            yPercent: 0,
            scale: 1,
            stagger: 0.0125,
            duration: 1.25,
            ease: "Expo.easeOut",
            clearProps: "all"
         });
      }
   }, null, 0.1);	

   tl.call(function() {
      if(document.querySelector('.split-chars.animate-h1')) {
         $('.split-chars.animate-h1').each(function(){
            var tl = gsap.timeline();
            tl.to($(this).find(".single-char-inner"), { 
               yPercent: 3,
               scale: 1,
               stagger: 0.02,
               duration: 1.25,
               ease: "Expo.easeOut"
            });
         });
      }

      if(document.querySelector('.about-block-images-first .animate-figure')) {
         gsap.to($('.about-block-images-first .animate-figure'), {
            y: 0,
            duration: 1.7,
            stagger: 0.05,
            ease: "Expo.easeOut",
            clearProps: "all"
         });
      }

      if(document.querySelector('[data-contact-col-status]')) {
         $('.animate-col').attr('data-contact-col-status', 'active').attr('data-contact-col-status', 'active').siblings().attr('data-contact-col-status', 'not-active');
      }
   }, null, 0.25);	
   

   tl.call(function() {
      if(document.querySelector('header .animate-h4')) {
         $('header .animate-h4').each(function(){
            gsap.to($(this).find("span"), { 
               yPercent: 0,
               stagger: 0.025,
               duration: 1.25,
               ease: "Expo.easeOut",
               clearProps: "all"
            });
         });
      }

   }, null, 0.6);

}

function initPageTransitions() {


   barba.hooks.after(() => {
      scroll.init();
      scroll.stop();
   });

   barba.hooks.enter(() => {
      scroll.destroy();
   });

   barba.hooks.afterEnter(() => {
      window.scrollTo(0, 0);
      ScrollTrigger.refresh();
   });

   barba.init({
      cacheIgnore: ['/randomizer/'],
      sync: true,
      debug: false,
      timeout:7000,
      transitions: [{
         name: 'default',
         once(data) {
            initSmoothScroll(data.next.container);
            initScript();
            initLoader();
         },
         async leave(data) {
            pageTransitionIn(data.current);
            await delay(transitionOffset);
            data.current.container.remove();
         },
         async enter(data) {
            pageTransitionOut(data.next);
         },
         async beforeEnter(data) {
            ScrollTrigger.getAll().forEach(t => t.kill());
            scroll.destroy();
            initSmoothScroll(data.next.container);
            initScript(); 
         },
      }, {
         name: 'self',
         async leave(data) {
            pageTransitionIn(data.current);
            await delay(transitionOffset);
            data.current.container.remove();
         },
         async enter(data) {
            pageTransitionOut(data.next);
         },
         async beforeEnter(data) {
            ScrollTrigger.getAll().forEach(t => t.kill());
            scroll.destroy();
            initSmoothScroll(data.next.container);
            initScript(); 
         },
      }]
   });

   function initSmoothScroll(container) {

      // https://github.com/quentinhocde/loconative-scroll
      scroll = new LoconativeScroll({
         el: container.querySelector('[data-scroll-container]'),
         scrollToEasing: (t) => (t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2),
         smooth: true
      });
      
   }  
}  

// Don't touch
function delay(n) {
	n = n || 2000;
	return new Promise((done) => {
		setTimeout(() => {
			done();
		}, n);
	});
}

/**
 * Fire all scripts on page load
 */
function initScript() {
   initCheckWindowHeight();
   initSplitText();
   initFlickitySlider();
   initVimeoBackgroundDouble();
   initBasicFunctions();
   initLazyLoad();
   initScrollTriggerPlayVideoInview();
   initScrollToAnchorLoco();
   initCustomCursorV2();
   initPlayVideoHover();
   initAnimateScrolltrigger();
   initMarqueeScroll();
   initVimeoPlayer();
}

/**
* GSAP Split Text
*/
function initSplitText() {

   var splitTextLines = new SplitText(".split-lines", {type: "lines, chars", linesClass: "single-line"});
   $('.split-lines .single-line').wrapInner('<div class="single-line-inner">');
 
   var splitWordsWrap = new SplitText(".split-words-wrap", {type: "words", wordsClass: "single-word"});
   $('.split-words-wrap .single-word').wrapInner('<div class="single-word-inner">');
 
   var splitWords = new SplitText(".split-words", {type: "words", wordsClass: "single-word"});
   
   var splitTextChars = new SplitText(".split-chars", {type: "words, chars", wordsClass: "single-word", charsClass: "single-char"});
   $('.split-chars .single-char').wrapInner('<div class="single-char-inner">');

 }

/**
 * Window Inner Height Check
 */
function initCheckWindowHeight() {
   // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
   let vh = window.innerHeight * 0.01;
   document.documentElement.style.setProperty('--vh', `${vh}px`);
}

/**
 * Basic Functions
 */
function initBasicFunctions() {
   
   // Toggle Navigation
   $('[data-navigation-toggle="toggle"]').click(function(){
      if ($('[data-navigation-status]').attr('data-navigation-status') == 'not-active') {
         $('[data-navigation-status]').attr('data-navigation-status', 'active');
         scroll.stop();
      } else {
         scroll.start();
         $('[data-navigation-status]').attr('data-navigation-status', 'transitioning');
         setTimeout(function() {
            $('[data-navigation-status]').attr('data-navigation-status', 'not-active');
         }, 1350);
      }
   });
   
   // Close Navigation
   $('[data-navigation-toggle="close"]').click(function(){
      scroll.start();
      $('[data-navigation-status]').attr('data-navigation-status', 'transitioning');
         setTimeout(function() {
            $('[data-navigation-status]').attr('data-navigation-status', 'not-active');
         }, 1350);
   });

   // Key ESC - Close Navigation
   $(document).keydown(function(e){
      if(e.keyCode == 27) {
         if ($('[data-navigation-status]').attr('data-navigation-status') == 'active') {
            scroll.start();
            $('[data-navigation-status]').attr('data-navigation-status', 'transitioning');
            setTimeout(function() {
               $('[data-navigation-status]').attr('data-navigation-status', 'not-active');
            }, 1350);
         } 
      }
   });

   // Reset Cursor on page leave
   barba.hooks.leave(() => {
      setTimeout(function() {
         $('[data-navigation-status]').attr('data-navigation-status', 'not-active');
      }, 550);
   });

   // Button Lines Select Next
   $('[data-button-status]').mouseenter(function() {
      var button = $(this);
      if(button.find('[data-line-status="active"]').next().length > 0) {
         button.find('[data-line-status="active"]').attr('data-line-status', '').next().attr('data-line-status', 'active');
      }
      else {
         button.find('[data-line-status]').attr('data-line-status', '');
         button.find('[data-line-status]').first().attr('data-line-status', 'active');
      }
   });

   // Button Status: Transitioning In
   $('[data-button-status]').mouseenter(function() {
      var button = $(this);
      button.attr('data-button-status', 'transitioning-in');
      setTimeout(function() {
         button.attr('data-button-status', '');
      }, 500);
   });

   // Button Status: Transitioning Out
   $('[data-button-status]').mouseleave(function() {
      var button = $(this);
      button.attr('data-button-status', 'transitioning-out');
      setTimeout(function() {
         button.attr('data-button-status', '');
      }, transitionOffset);
   });

   // Change Loader Text
   $('[data-transition-text]').click(function(){
      let dataTransitionText = $(this).data('transition-text');
      $('.transition-words span').text(dataTransitionText);
   });

   // Remove Scroll on Scroll Click
   $('.home-header [data-cursor-bubble-text]').click(function(){
      $('[data-cursor-bubble]').attr('data-cursor-bubble', 'not-active');
   });


   // Get SVG Path length
   $('[data-svg-path-length]').each(function () {
      var svgPath = $(this).find('svg path').get(0);
      var svgPathLength = Math.trunc(svgPath.getTotalLength());
      $(this).attr('data-svg-path-length', svgPathLength).css('--svg-path-length', ' ' + svgPathLength);
   });


   // Stacked Cards
   var stackedIndex = 2;
   var stackedDeg = '-3deg';
   var stackedDegNegative = '3deg';
   $('.single-stacked-image[data-link-status="not-active"]').css('transform', 'rotate(' + stackedDegNegative + ')');
   $('.single-stacked-image[data-link-status="active"]').css('z-index', stackedIndex).css('transform', 'rotate(' + stackedDeg + ')');

   $('[data-nav-id]').on('mouseenter', function() {
      let dataNavID = $(this).attr('data-nav-id');
      if($('[data-stacked-image-id="' + dataNavID + '"]').attr('data-stacked-image-status') == 'not-active') {
         stackedIndex = stackedIndex + 1;
         if(stackedDeg == '-3deg') {
            stackedDeg = '3deg';
            stackedDegNegative = '-3deg';
         } else {
            stackedDeg = '-3deg';
            stackedDegNegative = '3deg';
         }
         
         $('[data-stacked-image-id="' + dataNavID + '"]').attr('data-stacked-image-status', 'active').siblings().attr('data-stacked-image-status', 'not-active');
         $('[data-stacked-image-id="' + dataNavID + '"]').css('z-index', stackedIndex);
         gsap.fromTo($('[data-stacked-image-id="' + dataNavID + '"]'), {
            scale: 0.9,
            rotate: stackedDegNegative,
            opacity: 0,
         },{
            scale: 1,
            rotate: stackedDeg,
            opacity: 1,
            duration: 0.5,
            ease: "Expo.easeOut"
         });
      }
   });

   // Reset Stacked Cards on page leave
   barba.hooks.leave(() => {
      stackedIndex = 2;
      stackedDeg = '-3deg';
      stackedDegNegative = '3deg';
   });

   // Contact Col Cards
   $('[data-contact-col-status]').on('mouseover', function() {
      $(this).attr('data-contact-col-status', 'active').siblings().attr('data-contact-col-status', 'not-active');
   });

   // Change <title> on window leave
   var documentTitleStore = document.title
   var documentTitleRandom = $('[data-document-random-title]').attr('data-document-random-title');

   $(window).focus(function() {
      document.title = documentTitleStore;
   });
   
   $(window).blur(function() {
      document.title = documentTitleRandom;
   });

   // Put random link in ahref Randomizer
   $('[data-random-link]').each(function () {
      var randomItems = $(this).find(".hidden-links li");
      
      // Get a random index
      var randomIndex = Math.floor(Math.random() * randomItems.length);

      // Get the randomly picked item
      var randomItem = randomItems.eq(randomIndex).text();

      // Display the result
      console.log("Kirby random link:" + $(this).find("a").attr('href'));
      console.log("jQuery random link:" + randomItem);
      $(this).find("a").attr('href', randomItem);
   });

}

/**
 * Lazy Load
 */
function initLazyLoad() {
   // https://github.com/locomotivemtl/locomotive-scroll/issues/225
   // https://github.com/verlok/vanilla-lazyload
   var lazyLoadInstance = new LazyLoad({ 
      container: document.querySelector('[data-scroll-container]'),
      elements_selector: ".lazy",
   });
}


/**
 * Play Video Inview
 */
function initScrollTriggerPlayVideoInview() {

   let allVideoDivs = gsap.utils.toArray('.playpauze');

   allVideoDivs.forEach((videoDiv, i) => {

      let videoElem = videoDiv.querySelector('video')

      ScrollTrigger.create({
         trigger: videoElem,
         start: '0% 150%',
         end: '100% -50%',
         onEnter: () => videoElem.play(),
         onEnterBack: () => videoElem.play(),
         onLeave: () => videoElem.pause(),
         onLeaveBack: () => videoElem.pause(),
      });
   });
}

/**
 * Locomotive - ScrollTo Anchor Links
 */
function initScrollToAnchorLoco() {

   $("[data-anchor-target]").click(function() {

      let targetScrollToAnchorLoco = $(this).attr('data-anchor-target');
      scroll.scrollTo(targetScrollToAnchorLoco,{
         duration: 1.5
      });
   });
}

/**
* Custom Cursor
*/
function initCustomCursorV2() {

   const cursorObject = document.querySelector(".custom-cursor");
   const cursorPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
   const mousePos = { x: cursorPos.x, y: cursorPos.y};

   var cursorMoveSpeed = 0.1;
   var cursorDragSpeed = 0.4;
   var cursorSpeed = cursorMoveSpeed;
   var cursorActive = false;

   const xCursorSet = gsap.quickSetter(cursorObject, "x", "px");
   const yCursorSet = gsap.quickSetter(cursorObject, "y", "px");

   window.addEventListener("mousemove", e => {    
      mousePos.x = e.x;
      mousePos.y = e.y;  
   });
   
   gsap.ticker.add(customCursor);
   
   function customCursor(){
      if(!cursorActive){
         const dt = 1.0 - Math.pow(1.0 - cursorSpeed, gsap.ticker.deltaRatio()); 
         cursorPos.x += (mousePos.x - cursorPos.x) * dt;
         cursorPos.y += (mousePos.y - cursorPos.y) * dt;
         xCursorSet(cursorPos.x);
         yCursorSet(cursorPos.y);
      }
   }

   // Flickity (update position on drag with Flickity)
   var flickityCursorCarousel = $('[data-flickity-slider-type]');

   flickityCursorCarousel.on( 'dragMove.flickity', function(e, mousemove) {
      
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
      cursorSpeed = cursorDragSpeed; // set Drag Speed
   
      gsap.to({}, 0.0, {
         onUpdate: function() {
            gsap.set(cursorObject, {
               x: mousePos.x,
               y: mousePos.y
            });
         }
      });

      $('[data-cursor-bubble]').attr('data-cursor-bubble', 'active');
      $('[data-cursor-status-drag]').attr('data-cursor-status-drag', 'active');
   
   });

   flickityCursorCarousel.on( 'dragEnd.flickity', function() {
      cursorActive = false;   
      cursorSpeed = cursorMoveSpeed;

      $('[data-cursor-bubble]').attr('data-cursor-bubble', 'not-active');
      $('[data-cursor-status-drag]').attr('data-cursor-status-drag', 'not-active');
   });

   $('[data-flickity-slider-type="cards"], [data-flickity-slider-type="work"]').on('mousemove', function() {

      if ($('[data-cursor-status-move]').attr('data-cursor-status-move') == 'not-active' ) {
         $('[data-cursor-status-move]').attr('data-cursor-status-move', 'active');
         setTimeout(function() {
            $('[data-cursor-status-move]').attr('data-cursor-status-move', 'not-active');
         }, 1000);
      }

   });

   
   // Mouse Init
   $(document).on('mousemove', function() {
      if ($('[data-cursor-init]').attr('data-cursor-init') == 'false') {
         $('[data-cursor-init]').attr('data-cursor-init', 'true');
      }
   });
 
   // Text Hover
   $('[data-cursor-bubble-text]').on('mouseenter', function() {
      let dataCursorText = $(this).data('cursor-bubble-text');
      $('[data-cursor-bubble]').attr('data-cursor-bubble', 'active');
      $('.custom-cursor .cursor-bubble .cursor-text').text(dataCursorText);
   });
   $('[data-cursor-bubble-text]').on('mouseleave', function() {
      $('[data-cursor-bubble]').attr('data-cursor-bubble', 'not-active');
   });   

   // Color Hover
   $('[data-cursor-bubble-color]').on('mouseenter', function() {
      let dataCursorColor = $(this).data('cursor-bubble-color');
      $('.custom-cursor').attr('data-cursor-background', dataCursorColor)
   });

   // GIF Hover
   $('[data-cursor-gif-target]').on('mouseenter', function() {
      let dataCursorGIF = $(this).attr('data-cursor-gif-target');
      $('[data-cursor-gif]').attr('data-cursor-gif', 'active');
      $('[data-cursor-gif-id="' + dataCursorGIF + '"]').addClass('active').siblings().removeClass('active');
      $('[data-cursor-gif-id="' + dataCursorGIF + '"]').find('video').trigger('load').trigger('play');
   });
   $('[data-cursor-gif-target]').on('mouseleave', function() {
      $('[data-cursor-gif]').attr('data-cursor-gif', 'not-active');
   });   

   // Reset Cursor on page leave
   barba.hooks.leave(() => {
      setTimeout(function() {
         $('[data-cursor-init]').attr('data-cursor-init', 'false');
         $('[data-cursor-bubble]').attr('data-cursor-bubble', 'not-active');
         $('[data-cursor-gif]').attr('data-cursor-gif', 'not-active');
         $('[data-cursor-status-drag]').attr('data-cursor-status-drag', 'not-active');
         $('[data-cursor-status-move]').attr('data-cursor-status-move', 'not-active');
      }, 500);
   });
}


/**
* Flickity Slider
*/
function initFlickitySlider() {

   // Source
   // https://flickity.metafizzy.co/

   // Slider type: Cards

   $('[data-flickity-slider-type="cards"]').each(function (index) {

      var sliderIndexID = 'flickity-slider-type-cards-id-' + index;
      $(this).attr('id', sliderIndexID);

      var sliderThis = $(this);

      var flickitySliderGroup = document.querySelector('#' + sliderIndexID + ' .flickity-carousel');
      var flickitySlider = sliderThis.find('.flickity-carousel').flickity({
         // options
         watchCSS: true,
         contain: true,
         wrapAround: true,
         dragThreshold: 10,
         prevNextButtons: false,
         pageDots: true,
         cellAlign: 'center',
         selectedAttraction: 0.01,
         friction: 0.15,
         percentPosition: true,
         freeScroll: false,
         on: {
            'dragStart': () => {
               flickitySlider.find('.flickity-slider').css("pointer-events", "none");
            },
            'dragEnd': () => {
               flickitySlider.find('.flickity-slider').css("pointer-events", "auto");
            }
         }
      });

      // Flickity instance
      var flkty = flickitySlider.data('flickity');

      function flickityPrev() {flickitySlider.flickity('previous');}
      function flickityNext() {flickitySlider.flickity('next');}

      // Previous Button
      sliderThis.parent().find('[data-flickity-control="prev"]').on('click', function () {
         flickityPrev();
      });

      // Keyboard Controls
      $(document).keydown(function(e){
         if(e.keyCode == 37) {
            flickityPrev();
         } else if(e.keyCode == 38) {
            flickityPrev();
         } else if(e.keyCode == 39) {
            flickityNext();
         } else if(e.keyCode == 40) {
            flickityNext();
         }
      });

      // Next Button
      sliderThis.parent().find('[data-flickity-control="next"]').on('click', function () {
         flickityNext();
      });

      $(document).keydown(function(e){
         if(e.keyCode == 27) {
            if ($('[data-navigation-status]').attr('data-navigation-status') == 'active') {
               $('[data-navigation-status]').attr('data-navigation-status', 'not-active');
               scroll.start();
            } 
         }
      });

      // Progress Bar
      flickitySlider.on( 'scroll.flickity', function( event, progress ) {
         progressScroll = Math.max( 0, Math.min( 1, progress ));
         sliderThis.find('.flickity-progress-bar-inner').width( (progress * 100) + 25 + '%' );
         sliderThis.attr('data-flickity-slider-first-drag', 'true');
       });

      flickitySlider.on( 'change.flickity', function( event, index ) {
         sliderThis.attr('data-flickity-slider-status', 'sliding');
         sliderThis.attr('data-flickity-active-slide', index);
         sliderThis.find('[data-flickity-active-slide-progress]').text(index + 1);
         sliderThis.find('[data-flickity-word-status="active"]').attr('data-flickity-word-status', 'transitioning');
         sliderThis.find('[data-flickity-word="' + index + '"]').attr('data-flickity-word-status', 'active');
         setTimeout(function() {
            sliderThis.find('[data-flickity-word-status="transitioning"]').attr('data-flickity-word-status', 'not-active');
         }, 600);
         playThumbVideo(index);
      });

      flickitySlider.on( 'settle.flickity', function( event, index ) {
         sliderThis.attr('data-flickity-slider-status', 'not-sliding');
      });

      // Play video when slide = active
      function playThumbVideo(index) {
         let sliderThisSlide = sliderThis.find('[data-flickity-slide-count="' + index + '"]');
         let sliderThisSlideSiblings = sliderThisSlide.siblings();

         sliderThisSlideSiblings.find('[data-thumb-video-status]').attr('data-thumb-video-status', 'not-active');
         sliderThisSlideSiblings.find('video').trigger('pause');
         sliderThisSlide.find('[data-thumb-video-status]').attr('data-thumb-video-status', 'active');
         sliderThisSlide.find('video').trigger('load');
         sliderThisSlide.find('video').trigger('play');
      }

      // Play video when slide = active (first load)
      setTimeout(function() {
         sliderThis.find('[data-thumb-video-status="active"]').find('video').trigger('load');
         sliderThis.find('[data-thumb-video-status="active"]').find('video').trigger('play');
      }, 100);

      if($(window).width() < 1024) { 
         sliderThis.find('[data-thumb-video-status]').attr('data-thumb-video-status', 'not-active');
         $('.single-work-item video').remove();
      }

   });


   
   // Slider type: Images

   $('[data-flickity-slider-type="images"]').each(function (index) {

      var sliderIndexID = 'flickity-slider-type-images-id-' + index;
      $(this).attr('id', sliderIndexID);

      var sliderThis = $(this);

      var flickitySliderGroup = document.querySelector('#' + sliderIndexID + ' .flickity-carousel');
      var flickitySlider = sliderThis.find('.flickity-carousel').flickity({
         // options
         watchCSS: true,
         contain: true,
         wrapAround: false,
         dragThreshold: 10,
         prevNextButtons: false,
         pageDots: false,
         cellAlign: 'left',
         selectedAttraction: 0.015,
         friction: 0.25,
         percentPosition: true,
         freeScroll: false
      });

   });

   // Slider type: Work

   $('[data-flickity-slider-type="work"]').each(function (index) {

      var sliderIndexID = 'flickity-slider-type-work-id-' + index;
      $(this).attr('id', sliderIndexID);

      var sliderThis = $(this);

      var flickitySliderGroup = document.querySelector('#' + sliderIndexID + ' .flickity-carousel');
      var flickitySlider = sliderThis.find('.flickity-carousel').flickity({
         // options
         watchCSS: true,
         contain: true,
         wrapAround: false,
         dragThreshold: 10,
         prevNextButtons: false,
         pageDots: false,
         cellAlign: 'left',
         selectedAttraction: 0.015,
         friction: 0.25,
         percentPosition: true,
         freeScroll: false,
         on: {
            'dragStart': () => {
               flickitySlider.find('.flickity-slider').css("pointer-events", "none");
            },
            'dragEnd': () => {
               flickitySlider.find('.flickity-slider').css("pointer-events", "auto");
            }
         }
      });

   });

   // Slider type: Images

   $('[data-flickity-slider-type="vimeo"]').each(function (index) {

      var sliderIndexID = 'flickity-slider-type-vimeo-id-' + index;
      $(this).attr('id', sliderIndexID);

      var sliderThis = $(this);

      var flickitySliderGroup = document.querySelector('#' + sliderIndexID + ' .flickity-carousel');
      var flickitySlider = sliderThis.find('.flickity-carousel').flickity({
         // options
         watchCSS: true,
         contain: true,
         wrapAround: false,
         dragThreshold: 10,
         prevNextButtons: false,
         pageDots: false,
         cellAlign: 'left',
         selectedAttraction: 0.015,
         friction: 0.25,
         percentPosition: true,
         freeScroll: false,
         on: {
            'dragStart': () => {
               flickitySlider.find('.flickity-slider').css("pointer-events", "none");
            },
            'dragEnd': () => {
               flickitySlider.find('.flickity-slider').css("pointer-events", "auto");
            }
         }
      });

   });

}


/**
* Play Video on Hover
*/
function initPlayVideoHover() {
   

   $('[data-thumb-video-on-hover="true"]').each(function () {
      let videoOnHoverTrue = $(this).find('video');
      $(this).on('mouseenter', function() {
         $(this).attr('data-thumb-video-status', 'active');
         videoOnHoverTrue.trigger('play');
      });
      $(this).on('mouseleave', function() {
         $(this).attr('data-thumb-video-status', 'not-active');
         videoOnHoverTrue.trigger('pause');
      });
   });
}

/**
* Vimeo Background Embed
*/
function initVimeoBackgroundDouble() {

   if($(window).width() > 1024) {
      if(document.querySelector(".home-header .single-vimeo-background iframe")) {
         var player1Home = $('.home-header').find('#vimeo-background-index-custom-1');
         var player2Home = $('.home-header').find('#vimeo-background-index-custom-2');
         var player1 = new Vimeo.Player(player1Home.attr('id'));
         var player2 = new Vimeo.Player(player2Home.attr('id'));
         
         player1.on('play', function() {
            player1Home.attr('data-vimeo-status-loaded', 'true');
            player1Home.attr('data-vimeo-status-activated', 'true');

            if($('.home-header').find('#vimeo-background-index-custom-1').attr('data-vimeo-status-loaded') == 'true' && $('.home-header').find('#vimeo-background-index-custom-2').attr('data-vimeo-status-loaded') == 'true'){
               setTimeout(function() {
                  initVimeoBackgroundPlay();
               }, 250);
            }
         });

         player2.on('play', function() {
            player2Home.attr('data-vimeo-status-loaded', 'true');
            player2Home.attr('data-vimeo-status-activated', 'true');

            if($('.home-header').find('#vimeo-background-index-custom-1').attr('data-vimeo-status-loaded') == 'true' && $('.home-header').find('#vimeo-background-index-custom-2').attr('data-vimeo-status-loaded') == 'true'){
               setTimeout(function() {
                  initVimeoBackgroundPlay();
               }, 250);
            }
         });

         function initVimeoBackgroundPlay() {
            if($('.home-header').attr('data-vimeo-status-both-loaded') == 'false') {
               $('.home-header').attr('data-vimeo-status-both-loaded', 'true');
               player1.unload().then(function(){
                  setTimeout(function() {
                     player1.play();
                     $('.home-header').find('[data-vimeo-background-target]').attr('data-vimeo-status-sync', 'true');
                  }, 500);
               });
               player2.unload().then(function(){
                  setTimeout(function() {
                     player2.play();
                     $('.home-header').find('[data-vimeo-background-target]').attr('data-vimeo-status-sync', 'true');
                  }, 500);
               });
            }
         }

         function initVimeoBackgroundReset() {
            player1.unload().then(function(){
               player1.play();
            });
            player2.unload().then(function(){
               player2.play();
            });
         }
         
         player1.on('ended', initVimeoBackgroundReset);
         player2.on('ended', initVimeoBackgroundReset);
      }
      
      $('.home-header').find('.single-vimeo-background .placeholder-mobile').remove();

   } else {
      $('.home-header').find('.single-vimeo-background iframe').remove();
      $('.home-header').find('.shape-polygon').remove();
      $('.home-header').find('.single-vimeo-background .placeholder-desktop').remove();
   }

}

/**
* Vimeo Player Embed
*/
function initVimeoPlayer() {

   // Full controls
   // https://codepen.io/simpson77/pen/YXowmy
   
   $('[data-vimeo-player-target]').each(function(index){
 
      var playerID = $(this);

      var videoIndexID = 'vimeo-player-index-' + index;
      $(this).attr('id', videoIndexID);

      var iframe = $(this).attr('id');
      var player = new Vimeo.Player(iframe);

      player.setVolume(1);

      // Loaded
      player.on('play', function() {
         playerID.attr('data-vimeo-status-loaded', 'true');
      });

      // Play
      playerID.find('[data-vimeo-control="play"]').click(function(){
         playerID.attr('data-vimeo-status-activated', 'true');
         playerID.attr('data-vimeo-status-play', 'true');
         player.play();
      });

      // Pause
      playerID.find('[data-vimeo-control="pause"]').click(function(){
         playerID.attr('data-vimeo-status-play', 'false');
         player.pause();
      });

      // Mute
      playerID.find('[data-vimeo-control="mute"]').click(function(){
         if (playerID.attr('data-vimeo-status-muted') == 'false') {
            player.setVolume(0);
            playerID.attr('data-vimeo-status-muted', 'true');
         } else {
            player.setVolume(1);
            playerID.attr('data-vimeo-status-muted', 'false');
         }
      });
 
      // Convert number into seconds & hrs
      // https://stackoverflow.com/questions/11792726/turn-seconds-into-hms-format-using-jquery
      function secondsTimeSpanToHMS(s) {
         var h = Math.floor(s / 3600); //Get whole hours
         s -= h * 3600;
         var m = Math.floor(s / 60); //Get remaining minutes
         s -= m * 60;
         return (m) + ":" + (s < 10 ? '0' + s : s); //zero padding on minutes and seconds
      }

      // Duration
      var vimeoDuration = playerID.find('.vimeo-duration .duration');
      player.getDuration().then(function(duration) {
         vimeoDuration.text(secondsTimeSpanToHMS(duration));
         playerID.find('[data-vimeo-control="timeline"], progress').attr('max', duration);
      });

      // Timeline
      playerID.find('[data-vimeo-control="timeline"]').on("input change", function() {
         player.getDuration().then(function(duration) {
            var timeVal = playerID.find('[data-vimeo-control="timeline"]').val();
            player.setCurrentTime(timeVal);
            playerID.find('progress').attr('value', timeVal);
         });
      });

      // Progress Time & Timeline
      var vimeoTime = playerID.find('.vimeo-duration .time');
      player.on('timeupdate', function(data) {
         playerID.find('[data-vimeo-control="timeline"], progress').val(data.seconds);
         vimeoTime.text(secondsTimeSpanToHMS(Math.trunc(data.seconds)));
      });

      // Remove Controls after hover
      var vimeoHoverTimer;
      $(document).on("mousemove", function() {
         if (playerID.attr('data-vimeo-status-hover') == 'false') {
            //Show the element
            playerID.attr('data-vimeo-status-hover', 'true');
         } else {
            //Reset the timer to X amount of ms
            clearTimeout(vimeoHoverTimer);
            vimeoHoverTimer = setTimeout(vimeoHoverTrue, 2000);
         }
      });
      function vimeoHoverTrue() {
         playerID.attr('data-vimeo-status-hover', 'false');
      }
 
      // Ended
      function onEnd() {
         playerID.attr('data-vimeo-status-activated', 'false');
         playerID.attr('data-vimeo-status-play', 'false');
         player.unload();
      }
      
      player.on('ended', onEnd);
      
   });
}


/**
* Scrolltrigger Animations
*/
function initAnimateScrolltrigger() {
    
   if(document.querySelector(".draw-line")) {
      // Scrolltrigger Animation : Example
      $(".draw-line").each(function (index) {
         let triggerElement = $(this);
         let targetElement = $(this).find('svg path');
      
         let tl = gsap.timeline({
            scrollTrigger: {
               trigger: triggerElement,
               start: "0% 100%",
               end: "100% 50%",
               toggleActions: 'play none none none',
               markers: false
            }
         });
         tl.fromTo(triggerElement, {
            opacity: 0,
         }, {
            opacity: 1,
            ease: "none",
            duration: 0.001,
            delay: 0.2
         });

         tl.to(targetElement, {
            strokeDashoffset: 0,
            duration: 2,
            ease: "Expo.easeOut"
         },"< 0");
      });
   }

   if(document.querySelector(".block-stats")) {
      // Scrolltrigger Animation : Count Up
      $(".block-stats .col").each(function (index) {
        let triggerElement = $(this);
        let targetElement = $(this).find(".count-up");
      
         let tl = gsap.timeline({
            scrollTrigger: {
               trigger: triggerElement,
               start: "0% 100%",
               end: "100% 0%",
               markers: false
            }
         });

         tl.from(targetElement, {
            duration: 2,
            ease: Expo.easeOut,
            innerText: 0,
            delay: 0.25,
            roundProps: "innerText",
            onUpdate: function() {
               this.targets().forEach(target => {
                  const val = gsap.getProperty(target, "innerText");
                  target.innerText = numberWithCommas(val);
               });
            },
         }, "<");
         function numberWithCommas(n) {
            var parts=n.toString().split(".");
            return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
         }
      });
   }
  
}
 
/**
* Marquee on Scroll Direction
*/
function initMarqueeScroll() {

   // Scrolling Letters Both Direction
   // https://codepen.io/GreenSock/pen/rNjvgjo
   // Fixed example with resizing
   // https://codepen.io/GreenSock/pen/QWqoKBv?editors=0010

   $('.marquee-group').each(function(index){

		const marqueeGroup =  $(this);

      const marqueeItemsCount = marqueeGroup.find(".marquee-content").length;
      const marqueeItemsWidth = marqueeGroup.find(".marquee-content").width();
      const marqueeSpeed = marqueeGroup.find("[data-marquee-speed]").attr('data-marquee-speed') * (marqueeItemsWidth / $(window).width());

      let direction = 1; // 1 = forward, -1 = backward scroll

      const marqueeLeft = roll(marqueeGroup.find("[data-marquee-direction='left'] .marquee-content"), {duration: marqueeSpeed}),
      marqueeRight = roll(marqueeGroup.find("[data-marquee-direction='right'] .marquee-content"), {duration: marqueeSpeed}, true),
      scroll = ScrollTrigger.create({
         trigger: document.querySelector('[data-scroll-container]'),
         onUpdate(self) {
            if (self.direction !== direction) {
               direction *= -1;
               gsap.to([marqueeLeft, marqueeRight], {timeScale: direction, overwrite: true});
            }
            self.direction === -1 ? marqueeGroup.find("[data-marquee-status]").attr('data-marquee-status', 'normal') : marqueeGroup.find("[data-marquee-status]").attr('data-marquee-status', 'inverted');
         }
      });
   
      // helper function that clones the targets
      function roll(targets, vars, reverse) {
         vars = vars || {};
         vars.ease || (vars.ease = "none");
         const tl = gsap.timeline({
            repeat: -1,
            onReverseComplete() { 
               this.totalTime(this.rawTime() + this.duration() * 10);
            }
         }), 
         elements = gsap.utils.toArray(targets),
         clones = elements.map(el => {
            let clone = el.cloneNode(true);
            el.parentNode.appendChild(clone);
            return clone;
         }),
         positionClones = () => elements.forEach((el, i) => gsap.set(clones[i], {position: "absolute", overwrite: false, top: el.offsetTop, left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth)}));
         positionClones();
         elements.forEach((el, i) => tl.to([el, clones[i]], {xPercent: reverse ? 100 : -100, ...vars}, 0));
         window.addEventListener("resize", () => {
            let time = tl.totalTime();
            tl.totalTime(0);
            positionClones();
            tl.totalTime(time);
         });
         return tl;
      }

   });
}

