window.onload = function(){
	var MODAL_OVERLAY_CLASS_NAME = 'modal-overlay';
	var MODAL_OVERLAY_CLASS_NAME2 = 'modal-overlay2';
	var MODAL_OVERLAY_CLASS_NAME3 = 'modal-overlay3';
	var MODAL_OVERLAY_CLASS_NAME4 = 'modal-overlay4';
	
	var ACTIVE_MODAL_CLASS_NAME = 'active';
	
	var openModalButton = document.querySelector('.open-modal-button');
	var openModalButton2 = document.querySelector('.open-modal-button2');
	var openModalButton3 = document.querySelector('.open-modal-button3');
	var openModalButton4 = document.querySelector('.open-modal-button4');
	
	
	var closeModalButton = document.querySelector('.close-modal-button');
	var closeModalButton2 = document.querySelector('.close-modal-button2');
	var closeModalButton3 = document.querySelector('.close-modal-button3');
	var closeModalButton4 = document.querySelector('.close-modal-button4');
	
	
	var modalOverlay = document.querySelector('.'+ MODAL_OVERLAY_CLASS_NAME);
	var modalOverlay2 = document.querySelector('.'+ MODAL_OVERLAY_CLASS_NAME2);
	var modalOverlay3 = document.querySelector('.'+ MODAL_OVERLAY_CLASS_NAME3);
	var modalOverlay4 = document.querySelector('.'+ MODAL_OVERLAY_CLASS_NAME4);
	
	
	openModalButton.addEventListener('click',function(event){
		modalOverlay.classList.toggle(ACTIVE_MODAL_CLASS_NAME);
	});
	openModalButton2.addEventListener('click',function(event){
		modalOverlay2.classList.toggle(ACTIVE_MODAL_CLASS_NAME);
	});
	openModalButton3.addEventListener('click',function(event){
		modalOverlay3.classList.toggle(ACTIVE_MODAL_CLASS_NAME);
	});	
	openModalButton4.addEventListener('click',function(event){
		modalOverlay4.classList.toggle(ACTIVE_MODAL_CLASS_NAME);
	});	
	
	
	closeModalButton.addEventListener('click',function(event){
		modalOverlay.classList.toggle(ACTIVE_MODAL_CLASS_NAME);
	});
	closeModalButton2.addEventListener('click',function(event){
		modalOverlay2.classList.toggle(ACTIVE_MODAL_CLASS_NAME);
	});
	closeModalButton3.addEventListener('click',function(event){
		modalOverlay3.classList.toggle(ACTIVE_MODAL_CLASS_NAME);
	});	
	closeModalButton4.addEventListener('click',function(event){
		modalOverlay4.classList.toggle(ACTIVE_MODAL_CLASS_NAME);
	});

	
	modalOverlay.addEventListener('click',function(event){
		if (event.target.classList.contains(MODAL_OVERLAY_CLASS_NAME))
				modalOverlay.classList.toggle(ACTIVE_MODAL_CLASS_NAME);
	})
	modalOverlay2.addEventListener('click',function(event){
		if (event.target.classList.contains(MODAL_OVERLAY_CLASS_NAME2))
				modalOverlay2.classList.toggle(ACTIVE_MODAL_CLASS_NAME);
	})
	modalOverlay3.addEventListener('click',function(event){
		if (event.target.classList.contains(MODAL_OVERLAY_CLASS_NAME3))
				modalOverlay3.classList.toggle(ACTIVE_MODAL_CLASS_NAME);
	})
	modalOverlay4.addEventListener('click',function(event){
		if (event.target.classList.contains(MODAL_OVERLAY_CLASS_NAME4))
				modalOverlay4.classList.toggle(ACTIVE_MODAL_CLASS_NAME);
	})
};