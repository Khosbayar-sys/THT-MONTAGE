	AOS.init({
		duration: 800,
		easing: 'slide',
		once: false
	});

	
document.addEventListener('DOMContentLoaded', function () {
  const hamburgerButton = document.getElementById('hamburgerButton');
  const closeMenuButton = document.getElementById('closeMenuButton');
  const mobileNavigation = document.getElementById('mobileNavigation');

  if (hamburgerButton && closeMenuButton && mobileNavigation) {

    function openMenu() {
      mobileNavigation.classList.add('active');
      hamburgerButton.classList.add('hidden'); // Cacher le bouton hamburger
      document.body.classList.add('menu-open');
    }

    function closeMenu() {
      mobileNavigation.classList.remove('active');
      hamburgerButton.classList.remove('hidden'); // Réafficher le bouton hamburger
      document.body.classList.remove('menu-open');
    }

    hamburgerButton.addEventListener('click', openMenu);
    closeMenuButton.addEventListener('click', closeMenu);

    // Fermer le menu quand on clique sur un lien
    document.querySelectorAll('.mobile-menu a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Gestion des sous-menus
    document.querySelectorAll('.submenu-toggle').forEach(toggle => {
      toggle.addEventListener('click', function () {
        const parentItem = this.closest('.has-submenu');
        const isActive = parentItem.classList.contains('active');

        document.querySelectorAll('.has-submenu').forEach(item =>
          item.classList.remove('active')
        );

        if (!isActive) {
          parentItem.classList.add('active');
        }
      });
    });
  }
  window.addEventListener('resize', function () {
  if (window.innerWidth > 991) {
    mobileNavigation.classList.remove('active');
    hamburgerButton.classList.remove('hidden');
    document.body.classList.remove('menu-open');
  }
});

});


	document.addEventListener("DOMContentLoaded", function () {
			const toggles = document.querySelectorAll(".dropdown-toggle");
		
			toggles.forEach(function (toggle) {
			const parentLi = toggle.closest(".menu-item-has-children");
		
			toggle.addEventListener("click", function (e) {
				e.preventDefault();
		
				document.querySelectorAll(".menu-item-has-children.show").forEach(function (openLi) {
				if (openLi !== parentLi) {
					openLi.classList.remove("show");
				}
				});
		
				parentLi.classList.toggle("show");
			});
			});
		});
		
		document.addEventListener('DOMContentLoaded', function () {
			const links = document.querySelectorAll('.menu-item-has-children > a');
			links.forEach(link => {
			link.addEventListener('click', function (e) {
				if (window.innerWidth < 992) {
				const submenu = this.nextElementSibling;
				submenu.classList.toggle('active');
				}
			});
			});
	});
	document.addEventListener('click', function (e) {
	const isClickInsideMenu = document.getElementById('mobileNavigation')?.contains(e.target);
	const isClickOnToggle = e.target.closest('.submenu-toggle, .dropdown-toggle');
	
	document.querySelectorAll('.has-submenu.active, .menu-item-has-children.show').forEach(menu => {
		if (!menu.contains(e.target) && !isClickOnToggle) {
		menu.classList.remove('active');
		menu.classList.remove('show');
		}
	});

	if (!isClickInsideMenu && !e.target.closest('#hamburgerButton')) {
		document.getElementById('mobileNavigation')?.classList.remove('active');
		document.body.classList.remove('menu-open');
		document.getElementById('hamburgerButton')?.classList.remove('hidden');
	}
	});

jQuery(document).ready(function($) {
    function safeAddEventListener(element, event, callback) {
        if (element) {
            element.addEventListener(event, callback);
        }
    }

	function updateProgress(currentStep) {
		const progressSteps = document.querySelectorAll('.my-progress-bar--step');
		
		progressSteps.forEach((step, index) => {
			if (index < currentStep) {
			step.setAttribute('data-my-progress-bar-step', 'complete');
			} else if (index === currentStep) {
			step.setAttribute('data-my-progress-bar-step', 'active');
			} else {
			step.setAttribute('data-my-progress-bar-step', 'incomplete');
			}
		});
	}

    const choixOui = document.getElementById('choix-oui');
    const choixNon = document.getElementById('choix-non');
    const choixSuivant1 = document.getElementById('choix-suivant1');
    const choixSuivant2 = document.getElementById('choix-suivant2');
    const choixSuivant3 = document.getElementById('choix-suivant3');
    const choixSuivant4 = document.getElementById('choix-suivant4');
    const choixRevenir1 = document.getElementById('choix-revenir1');
    const choixRevenir2 = document.getElementById('choix-revenir2');
    const choixRevenir3 = document.getElementById('choix-revenir3');
    const choixRevenir4 = document.getElementById('choix-revenir4');
    const caseOui = document.getElementById('case-oui');
    const caseNon = document.getElementById('case-non');
	const caseAppartement = document.getElementById('case-appartement');
    const caseOui2 = document.getElementById('case-oui-2');
    const caseNon2 = document.getElementById('case-non-2');
    const caseOui3 = document.getElementById('case-oui-3');
    const debut = document.querySelector('.premier-frm');
    const suivant1 = document.getElementById('deuxieme-frm');
    const suivant2 = document.getElementById('troisieme-frm');
    const suivant3 = document.getElementById('quatrieme-frm');
    const suivant4 = document.getElementById('cinquieme-frm');
	const choixAppart = document.getElementById('choix-appart'); 
	const choixMaison = document.getElementById('choix-maison'); 
	const choixSpe = document.getElementById('choix-specifique'); 
	const choixAlter = document.getElementById('choix-alternatif'); 

    const choixOui2 = document.getElementById('choix-oui-2');
    const choixNon2 = document.getElementById('choix-non-2');
    const choixOui3 = document.getElementById('choix-oui-3');
    const choixNon3 = document.getElementById('choix-non-3');
    const choixOui4 = document.getElementById('choix-oui-4');
    const choixNon4 = document.getElementById('choix-non-4');
    const caseOui4 = document.getElementById('case-oui-4');
    const caseNon4 = document.getElementById('case-non-4');

    updateProgress(0);

	if (choixOui && choixNon && caseOui && caseNon) {
        safeAddEventListener(choixOui, 'change', () => {
            caseOui.style.display = 'block';
            caseNon.style.display = 'none';
			resetFields(caseNon);
			toggleRequiredFields(caseNon, false);
			toggleRequiredFields(caseOui, true);
        });
        
        safeAddEventListener(choixNon, 'change', () => {
            caseNon.style.display = 'block';
            caseOui.style.display = 'none';
			resetFields(caseOui);
			toggleRequiredFields(caseOui, false);
			toggleRequiredFields(caseNon, true);
        });

		
    }

	if (choixSuivant1 && debut && suivant1) {
		safeAddEventListener(choixSuivant1, 'click', (event) => {
			event.preventDefault(); 
			if (validateStepFields(debut)) {
				debut.style.display = 'none';
				suivant1.style.display = 'block';
				updateProgress(1);
			}
		});
	}

	if (choixAppart || choixMaison || choixSpe || choixAlter) {
		const updateAppartementDisplay = function () {
			if (choixAppart.checked) {
				caseAppartement.style.display = 'block';
				toggleRequiredFields(caseAppartement, true);
			} else {
				resetFields(caseAppartement);
				caseAppartement.style.display = 'none';
				toggleRequiredFields(caseAppartement, false);
			}
		};
		safeAddEventListener(choixAppart, 'change', updateAppartementDisplay);
		safeAddEventListener(choixMaison, 'change', updateAppartementDisplay);
		safeAddEventListener(choixSpe, 'change', updateAppartementDisplay);
		safeAddEventListener(choixAlter, 'change', updateAppartementDisplay);
	}

	safeAddEventListener(choixSuivant2, 'click', (event) => {
		event.preventDefault(); 
		if (validateStepFields(suivant1)) {
			suivant1.style.display = 'none';
			suivant2.style.display = 'block';
			updateProgress(2);
		}
	});

    if (choixRevenir1 && debut && suivant1) {
        safeAddEventListener(choixRevenir1, 'click', (event) => {
            event.preventDefault(); 
            debut.style.display = 'block';
            suivant1.style.display = 'none';
			updateProgress(0);

        });
    }

    if (choixRevenir2 && suivant1 && suivant2) {
        safeAddEventListener(choixRevenir2, 'click', (event) => {
            event.preventDefault(); 
            suivant1.style.display = 'block';
            suivant2.style.display = 'none';
			updateProgress(1);
        });
    }

    if (choixRevenir3 && suivant2 && suivant3) {
        safeAddEventListener(choixRevenir3, 'click', (event) => {
            event.preventDefault(); 
            suivant2.style.display = 'block';
            suivant3.style.display = 'none';
			updateProgress(2);
        });
    }

    if (choixRevenir4 && suivant3 && suivant4) {
        safeAddEventListener(choixRevenir4, 'click', (event) => {
            event.preventDefault(); 
            suivant3.style.display = 'block';
            suivant4.style.display = 'none';
			updateProgress(3);
        });
    }

    if (choixOui2 && choixNon2 && caseOui2 && caseNon2) {
        safeAddEventListener(choixOui2, 'change', () => {
            caseOui2.style.display = 'block';
            caseNon2.style.display = 'none';
			resetFields(caseNon2);
			toggleRequiredFields(caseOui2, true);
			toggleRequiredFields(caseNon2, false);

        });
          
        safeAddEventListener(choixNon2, 'change', () => {
            caseNon2.style.display = 'block';
            caseOui2.style.display = 'none';
			resetFields(caseOui2);
			toggleRequiredFields(caseOui2, false);
			toggleRequiredFields(caseNon2, true);
        });
    }

    if (choixOui3 && caseOui3) {
        safeAddEventListener(choixOui3, 'change', () => {
            caseOui3.style.display = 'block';
			toggleRequiredFields(caseOui3, true);

        });

        safeAddEventListener(choixNon3, 'change', () => {
			resetFields(caseOui3);
            caseOui3.style.display = 'none';
			toggleRequiredFields(caseOui3, false);

		});
    }

	safeAddEventListener(choixSuivant3, 'click', (event) => {
		event.preventDefault();

		if (validateStepFields(suivant2)) {
			suivant2.style.display = 'none';
			suivant3.style.display = 'block';
			updateProgress(3);
		}
	});


    if (choixOui4 && choixNon4 && caseOui4 && caseNon4) {
        safeAddEventListener(choixOui4, 'change', () => {
            caseOui4.style.display = 'block';
			resetFields(caseNon4);
            caseNon4.style.display = 'none';
			toggleRequiredFields(caseOui4, true);
			toggleRequiredFields(caseNon4, false);

        });
          
        safeAddEventListener(choixNon4, 'change', () => {
            caseNon4.style.display = 'block';
            caseOui4.style.display = 'none';
			resetFields(caseOui4);
			toggleRequiredFields(caseOui4, false);
			toggleRequiredFields(caseNon4, true);

        });
    }

	safeAddEventListener(choixSuivant4, 'click', (event) => {
		event.preventDefault(); 
		if (validateStepFields(suivant3)) {
			suivant3.style.display = 'none';
			suivant4.style.display = 'block';
			updateProgress(4);
		}
	});

	const form = document.getElementById('devis-demenagement-form');

	safeAddEventListener(form, 'submit', (event) => {
		if (!validateStepFields(suivant4)) {
			event.preventDefault();
		}
	});


	"use strict";

	
	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
		var counter = 0;
    
		$('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();

	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();


	

	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
		    margin: 20,
		    smartSpeed: 1000,
		    autoplay: true,
		    nav: true,
		    responsive:{
	        600:{
	        	margin: 20,
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	margin: 20,
	        	stagePadding: 0,
	        	nav: true,
	          items: 2
	        }
		    }
			});
			$('.custom-next').click(function(e) {
				e.preventDefault();
				$('.nonloop-block-13').trigger('next.owl.carousel');
			})
			$('.custom-prev').click(function(e) {
				e.preventDefault();
				$('.nonloop-block-13').trigger('prev.owl.carousel');
			})

			
		}

		$('.slide-one-item').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    smartSpeed: 1500,
	    autoplay: true,
	    pauseOnHover: false,
	    dots: true,
	    nav: true,
	    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
	  });

	  if ( $('.owl-all').length > 0 ) {
			$('.owl-all').owlCarousel({
		    center: false,
		    items: 1,
		    loop: false,
				stagePadding: 0,
		    margin: 0,
		    autoplay: false,
		    nav: false,
		    dots: true,
		    touchDrag: true,
  			mouseDrag: true,
  			smartSpeed: 1000,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        768:{
	        	margin: 30,
	        	nav: false,
	        	responsiveRefreshRate: 10,
	          items: 1
	        },
	        992:{
	        	margin: 30,
	        	stagePadding: 0,
	        	nav: false,
	        	responsiveRefreshRate: 10,
	        	touchDrag: false,
  					mouseDrag: false,
	          items: 3
	        },
	        1200:{
	        	margin: 30,
	        	stagePadding: 0,
	        	nav: false,
	        	responsiveRefreshRate: 10,
	        	touchDrag: false,
  					mouseDrag: false,
	          items: 3
	        }
		    }
			});
		}
		
	};
	siteCarousel();

	

	var siteCountDown = function() {

		$('#date-countdown').countdown('2020/10/10', function(event) {
		  var $this = $(this).html(event.strftime(''
		    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
		    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
		    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
		    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
		    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});
				
	};
	// siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	var OnePageNavigation = function() {
		var navToggler = $('.site-menu-toggle');

		$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a[href^='#']", function(e) {
			e.preventDefault();

			var hash = this.hash;
			
			// Vérifier si l'élément cible existe
			if ($(hash).length) {
				$('html, body').animate({
					'scrollTop': $(hash).offset().top - 50
				}, 600, 'easeInOutExpo');
			}
		});
	};
	OnePageNavigation();
	
  var siteScroll = function() {

  	

  	$(window).scroll(function() {

  		var st = $(this).scrollTop();

  		if (st > 100) {
  			$('.js-sticky-header').addClass('shrink');
  		} else {
  			$('.js-sticky-header').removeClass('shrink');
  		}

  	}) 

  };
  siteScroll();


	var counter = function() {
			
			$('#about-section').waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

					var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
					$('.number > span').each(function(){
						var $this = $(this),
							num = $this.data('number');
						$this.animateNumber(
						{
							number: num,
							numberStep: comma_separator_number_step
						}, 7000
						);
					});
					
				}

			} , { offset: '95%' } );

		}
		counter();
	});

	document.addEventListener("DOMContentLoaded", function() {
	const timeElement = document.getElementById("time");
	if (timeElement) {
		timeElement.value = new Date().toLocaleString();
	}
	});

	if (document.getElementById('contact-form')) {
		(function() {
		emailjs.init("gk_4Y0JwR5duXbrKL"); 
		})();
		document.getElementById('type').value = 'Demande de contact';

		const contactForm = document.getElementById('contact-form');
		contactForm.addEventListener('submit', function(e) {
			e.preventDefault();
			
			const successMessage = document.getElementById('success-message');
			const errorMessage = document.getElementById('erreur-message');

			emailjs.sendForm('service_t89cx2p', 'template_8ap7nvn', contactForm)
			.then(function() {
				if (successMessage) {
				successMessage.style.display = 'block';
				emailjs.sendForm('service_t89cx2p', 'template_ysuk1no', contactForm);
				}
				if (contactForm) {
				contactForm.reset();
				}
			}, function(error) {
				if (errorMessage) {
				errorMessage.style.display = 'block';
				}
			});
		});
	}

	if (document.getElementById('devis-form')) {
		(function() {
			emailjs.init("gk_4Y0JwR5duXbrKL"); 
			})();

		document.getElementById('service').addEventListener('change', function () {
			if (this.value === 'Démenagement') {
			document.getElementById('popup-dmg').style.display = 'flex';
			}
		});

		document.querySelector('.close-btn').addEventListener('click', function () {
			document.getElementById('popup-dmg').style.display = 'none';
		});

		document.getElementById('popup-dmg').addEventListener('click', function (e) {
			if (e.target === this) {
			this.style.display = 'none';
			}
		});

		document.getElementById('service').addEventListener('change', function () {
			if (this.value === 'Livraison') {
			document.getElementById('popup-livraison').style.display = 'flex';
			}
		});

		document.querySelectorAll('.close-btn').forEach(btn => {
			btn.addEventListener('click', function () {
				this.closest('.popup-overlay').style.display = 'none';
			});
		});

		document.getElementById('popup-livraison').addEventListener('click', function (e) {
			if (e.target === this) {
			this.style.display = 'none';
			}
		});


		document.getElementById('type').value = 'Demande de devis';

		const devisForm = document.getElementById('devis-form');
		devisForm.addEventListener('submit', function(e) {
			e.preventDefault();
			
			const successMessage = document.getElementById('success-messageDevis');
			const errorMessage = document.getElementById('erreur-messageDevis');

			emailjs.sendForm('service_t89cx2p', 'template_8ap7nvn', devisForm)
			.then(function() {
				if (successMessage) {
					successMessage.style.display = 'block';
					emailjs.sendForm('service_t89cx2p', 'template_ysuk1no', devisForm);
					window.addEventListener('beforeunload', function(event) {
					});
				}
				if (devisForm) {
					devisForm.reset();
				}
			}, function(error) {
				if (errorMessage) {
				errorMessage.style.display = 'block';
				}
			});
		});
	}

	if (document.getElementById('devis-demenagement-form')) {
		(function() {
			emailjs.init("gk_4Y0JwR5duXbrKL");
		})();
		

		const formData = {}; 

		document.getElementById('type').value = 'Demande de devis déménagement';

		document.getElementById('titre').value = '--- Information personnelle ---';
		document.getElementById('titre1').value = '--- Date ---';
		document.getElementById('titre2').value = '--- Adresse actuelle ---';
		document.getElementById('titre3').value = '--- Adresse future ---';
		document.getElementById('titre4').value = '--- Volume estimé ---';
		document.getElementById('titre5').value = '--- Informations complémentaires ---';
		document.getElementById('titre6').value = ' --- Type de logement ---';

	
		const devisForm = document.getElementById('devis-demenagement-form');
		const successMessage = document.getElementById('success-messageDevis');
		const errorMessage = document.getElementById('erreur-messageDevis');

		devisForm.addEventListener('submit', function(e) {
			e.preventDefault();

			if (!validateStepFields(document.getElementById('cinquieme-frm'))) {
				return;
			}

			const form = devisForm; 

			const formData = {};
			function addFieldIfFilled(fieldName, label) {
			const field = form.querySelector(`[name="${fieldName}"]`);
			if (field && field.value.trim() !== "") {
				formData[fieldName] = `${label} ${field.value.trim()}`;
			}
			}

			formData["type"] = document.getElementById("type").value;
			formData["time"] = document.getElementById("time").value;

			formData["titre"] = document.getElementById("titre").value;
			formData["titre1"] = document.getElementById("titre1").value;
			formData["titre2"] = document.getElementById("titre2").value;
			formData["titre3"] = document.getElementById("titre3").value;
			formData["titre4"] = document.getElementById("titre4").value;
			formData["titre5"] = document.getElementById("titre5").value;
			formData["titre6"] = document.getElementById("titre6").value;

			const nom = form.querySelector('[name="nom-devisDem"]')?.value.trim() || "";
			const prenom = form.querySelector('[name="prenom-devisDem"]')?.value.trim() || "";
			if (nom || prenom) {
				formData["nomC"] = `${prenom} ${nom}`.trim();
			}

			addFieldIfFilled("nom-devisDem", "Nom :");
			addFieldIfFilled("prenom-devisDem", "Prénom :");
			addFieldIfFilled("email", "Email :");
			addFieldIfFilled("tel-devisDem", "Téléphone :");

			addFieldIfFilled("dateDemenagement-devisD", "Date de déménagement :");
			addFieldIfFilled("periodeDebutDemenagement-devisD", "Début période :");
			addFieldIfFilled("periodeFinDemenagement-devisD", "Fin période :");

			addFieldIfFilled("AddressMTN-devisD", "Adresse actuelle :");
			addFieldIfFilled("VilleMTN-devisD", "Ville actuelle :");
			addFieldIfFilled("CodePostaleMTN-devisD", "Code postal :");
			addFieldIfFilled("paysActu", "Pays actuel :");

			addFieldIfFilled("Addr-devisDem", "Adresse future :");

			addFieldIfFilled("VilleAddr-devisDem", "Ville future :");
			addFieldIfFilled("VilleAddr-devisDem-non", "Ville future :");

			addFieldIfFilled("FuturAddrPos-devisDem", "Code postal futur :");
			addFieldIfFilled("FuturAddrPos-devisDem-non", "Code postal futur :");

			addFieldIfFilled("pays", "Pays futur :");

			addFieldIfFilled("volumeEstimation-devisDem", "Volume estimé(m²) :");
			addFieldIfFilled("volumeEnviron-devisDem", "Volume environ(m²) :");

			addFieldIfFilled("info-supp", "Infos complémentaires :");

			const logementType = form.querySelector('[name="choix-logement"]:checked');
			if (logementType) {
			formData["choix-logement"] = "Type de logement : " + logementType.value;
			}
			addFieldIfFilled("etageMTN-devisD", "Étage :");
					emailjs.send('service_t89cx2p', 'template_8ap7nvn', formData)
						.then(function() {
							if (successMessage) {
								successMessage.style.display = 'block';
								togglePopup();
								devisForm.reset();	
							}
						})
						.catch(function(error) {
							if (errorMessage) {
								errorMessage.style.display = 'block';
							}
							console.error("Erreur d'envoi:", error);
						});
				});


		function validateStepFields(container) {
			const inputs = container.querySelectorAll('input, select, textarea');
			let isValid = true;

			inputs.forEach(input => {
				if (input.offsetParent !== null && input.hasAttribute('required') && !input.checkValidity()) {
					input.classList.add('error-highlight');

					if (isValid) {
						input.scrollIntoView({ behavior: 'smooth', block: 'center' });
						input.focus();
					}

					isValid = false;
				} else {
					input.classList.remove('error-highlight');
				}
			});

			return isValid;
		}

	}

	function toggleRequiredFields(container, enable) {
		const inputs = container.querySelectorAll('input, select, textarea');
		inputs.forEach(input => {
			if (enable) {
				input.setAttribute('required', 'required');
			} else {
				input.removeAttribute('required');
				input.classList.remove('error-highlight'); 
			}
		});
	}


	function togglePopup() {
		document.getElementById('popup').classList.toggle('active');
	}

	function closePopupAndReload() {
		document.getElementById('popup').classList.remove('active');
		window.location.reload();	
	}


	function resetFields(container) {
		if (!container) return;

		// Masquer le conteneur
		container.style.display = 'none';

		// Réinitialiser tous les champs du conteneur
		const inputs = container.querySelectorAll('input, textarea');
		inputs.forEach(input => {
			if (input.type === 'checkbox' || input.type === 'radio') {
			input.checked = false;
			} else {
			input.value = '';
			}
			input.removeAttribute('required'); // désactive le required si présent
		});
	}


	const formulaire = document.getElementById("formulaire-devis");
	const etapes = document.querySelectorAll(".formulaire-etape");
	const boutonSuivant = document.getElementById("bouton-suivant");
	const boutonPrecedent = document.getElementById("bouton-precedent");
	const boutonEnvoyer = document.getElementById("bouton-envoyer");
	const progressSteps = document.querySelectorAll(".my-progress-bar--step"); 

	let etapeActuelle = 0;

	function afficherEtape(index) {
		etapes.forEach((etape, i) => {
			etape.classList.toggle("formulaire-etape--active", i === index);
		});

		boutonPrecedent.style.display = index === 0 ? "none" : "inline-block";
		boutonSuivant.style.display = index === etapes.length - 1 ? "none" : "inline-block";
		boutonEnvoyer.style.display = index === etapes.length - 1 ? "inline-block" : "none";
		updateProgress(index); 
	}

	function validerEtape(index) {
		let estValide = true;
		const inputs = etapes[index].querySelectorAll("input, textarea, select");

		inputs.forEach(input => {
			if (!input.checkValidity()) {
				input.classList.add("invalid");
				estValide = false;
			} else {
				input.classList.remove("invalid");
			}
		});

		return estValide;
	}

	function updateProgress(currentIndex) {
		progressSteps.forEach((step, index) => {
			if (index < currentIndex) {
				step.setAttribute("data-my-progress-bar-step", "complete");
			} else if (index === currentIndex) {
				step.setAttribute("data-my-progress-bar-step", "active");
			} else {
				step.setAttribute("data-my-progress-bar-step", "incomplete");
			}
		});
	}

	if (document.getElementById('formulaire-devis')) {
		(function () {
			emailjs.init("gk_4Y0JwR5duXbrKL");
		})();

		boutonSuivant.addEventListener("click", () => {
			if (validerEtape(etapeActuelle)) {
				etapeActuelle++;
				afficherEtape(etapeActuelle);
			}
		});

		boutonPrecedent.addEventListener("click", () => {
			etapeActuelle--;
			afficherEtape(etapeActuelle);
		});

		afficherEtape(etapeActuelle);

		formulaire.addEventListener('submit', function (e) {
			e.preventDefault();

			if (!validerEtape(etapeActuelle)) {
				return;
			}

			function addFieldIfFilled(fieldName, label, targetObj) {
				const field = formulaire.querySelector(`[name="${fieldName}"]`);
				if (field && field.value.trim() !== "") {
					targetObj[fieldName] = `${label} ${field.value.trim()}`;
				}
			}

			const formData = {};

			formData['type'] = 'Demande de devis de livraison';
			formData['titre'] = '-- Information personnelle --';
			formData['titre2'] = '-- Addresse de livraison --';
			formData['titre3'] = '-- Addresse de départ --';
			formData['titre4'] = '-- Description du colis --';
			formData['titre5'] = '-- Détails de livraison --';

			const nom = formulaire.querySelector('[name="nom-devis-Livraison"]')?.value.trim() || "";
			const prenom = formulaire.querySelector('[name="prenom-devis-Livraison"]')?.value.trim() || "";
			if (nom || prenom) {
				formData["nomC"] = `${prenom} ${nom}`.trim();
			}

			addFieldIfFilled("nom-devis-Livraison", "Nom :", formData);
			addFieldIfFilled("prenom-devis-Livraison", "Prénom :", formData);
			addFieldIfFilled("telephone", "Téléphone :", formData);
			addFieldIfFilled("email", "Email :", formData);
			addFieldIfFilled("adresse-depart", "Adresse de départ :", formData);
			addFieldIfFilled("adresse-arrivee", "Adresse d'arrivée :", formData);
			addFieldIfFilled("description-colis", "Description du colis :", formData);
			addFieldIfFilled("longueur", "Longueur (cm) :", formData);
			addFieldIfFilled("largeur", "Largeur (cm) :", formData);
			addFieldIfFilled("hauteur", "Hauteur (cm) :", formData);
			addFieldIfFilled("poids-colis", "Poids estimé (kg) :", formData);
			addFieldIfFilled("type-livraison", "Type de livraison :", formData);
			addFieldIfFilled("date-livraison", "Date de livraison :", formData);
			addFieldIfFilled("commentaires-devis-LIVR", "Commentaires :", formData);

			emailjs.send('service_t89cx2p', 'template_8ap7nvn', formData)
				.then(function() {
					togglePopup();
					formulaire.reset();
					etapeActuelle = 0;
					afficherEtape(etapeActuelle);
				})
				.catch(function(error) {
					console.error('Erreur EmailJS:', error);
				});
		});
	}