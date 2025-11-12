// Zet huidig jaar in footer
document.addEventListener('DOMContentLoaded', function(){
	const yearEl = document.getElementById('year');
	if (yearEl) yearEl.textContent = new Date().getFullYear();

	// eenvoudige mobile menu toggle
	const toggle = document.getElementById('menuToggle');
	const navList = document.getElementById('navList');
	if (toggle && navList) {
		toggle.addEventListener('click', function(){
			const open = navList.style.display === 'flex' || navList.style.display === 'block';
			navList.style.display = open ? 'none' : 'block';
			toggle.setAttribute('aria-expanded', String(!open));
		});
	}
});
