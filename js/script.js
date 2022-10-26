const switchColor = document.querySelector('.switcher__color'),
	switchContainer = document.querySelector('.switcher__container'),
	switcherThem = document.querySelector('.switcher__thems'),
	asideMenu = document.querySelectorAll('.aside__menu-name');

const allSection = document.querySelectorAll('.section');

function selectMenuItem(element) {
	const allSection = document.querySelectorAll('.section');
	allSection.forEach(item => {
		item.classList.remove('active');
	});
	const target = element.getAttribute('href').split('#')[1];
	document.querySelector("#" + target).classList.add('active');
}



asideMenu.forEach((item) => {
	item.addEventListener('click', (event) => {
		const active = document.querySelector('.active');
		if (active) {
			active.classList.remove('active');
		}
		event.target.classList.add('active');
		selectMenuItem(item);
		if (window.innerWidth < 1200) {
			burgerMenu();
		}
	});
});


switchColor.addEventListener('click', () => {
	switchContainer.classList.toggle('open');
});


// =============== Typing string ====================== //
const typedVariable = document.querySelector('.typing'),
	typedWord = ['Front-end Developer!', 'Junior Developer!', 'Web Designer!'];
let i = 0,
	j = 0,
	currentPhrase = [],
	isDeleting = false,
	isEnd = false;

function typingLoop() {
	typedVariable.textContent = currentPhrase.join('');
	isEnd = false;

	if (i < typedWord.length) {

		if (!isDeleting && j <= typedWord[i].length) {
			currentPhrase.push(typedWord[i][j]);
			j++;
			typedVariable.textContent = currentPhrase.join('');
		}
		if (isDeleting && j <= typedWord[i].length) {
			currentPhrase.pop(typedWord[i][j]);
			j--;

		}
		if (j == typedWord[i].length) {
			isDeleting = true;
			isEnd = true;
		}
		if (isDeleting && j === 0) {
			currentPhrase = [];
			isDeleting = false;
			i++;
			if (i == typedWord.length) {
				i = 0;
			}
		}
	}
	const speedUp = 10,
		normalSpeed = 40,
		time = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed;
	setTimeout(typingLoop, time);
}

typingLoop();

// =============== Switch Them dark/white ====================== //
const root = document.querySelector(':root');

const themes = {
	default: {
		"--bg-black-900": "#f2f2fc",
		"--bg-black-100": "#fdf9ff",
		"--bg-black-50": "#e8dfec",
		"--text-black-900": "#302e4d",
		"--text-black-700": "#504e70"
	},
	dark: {
		"--bg-black-900": "#151515",
		"--bg-black-100": "#222222",
		"--bg-black-50": "#393939",
		"--text-black-900": "#ffffff",
		"--text-black-700": "#e9e9e9"
	}
};
window.addEventListener('load', () => {

	if (document.body.classList.contains("dark")) {
		switcherThem.querySelector('i').classList.add('icon_globe');
	} else {
		switcherThem.querySelector('i').classList.add('icon_moon-fill');
	}
});
if (!localStorage.getItem("isDarkTheme")) {
	localStorage.setItem("isDarkTheme", false);
}

let isDarkTheme = JSON.parse(localStorage.getItem("isDarkTheme"));
changeThem(isDarkTheme);

switcherThem.addEventListener('click', changeIcon);


function changeIcon(e) {
	e.preventDefault();
	switcherThem.querySelector('i').classList.toggle('icon_moon-fill');
	switcherThem.querySelector('i').classList.toggle('icon_globe');
	isDarkTheme = !isDarkTheme;
	localStorage.setItem("isDarkTheme", isDarkTheme);
	changeThem(isDarkTheme);
}

function changeThem(isDarkTheme) {
	const theme = isDarkTheme ? "dark" : "default";
	Object.entries(themes[theme]).forEach(([key, value]) => {
		root.style.setProperty(key, value);
	});
}


// =============== Burger ====================== //

const burger = document.querySelector('.burger__wrapper');

function burgerMenu() {
	document.querySelector('.aside').classList.toggle('aside__open');
	burger.classList.toggle('burger__open');
	allSection.forEach(item => {
		item.classList.toggle('section__open');
	});
}

burger.addEventListener('click', burgerMenu);



const color = document.querySelectorAll('.switcher__item_color');
console.log(color);

color.forEach((item, index) =>{
	item.addEventListener('click', () => {
		if(index === 0){
			document.documentElement.style.setProperty('--skin-color', '#ec1839');
		}
		if(index === 1){
			document.documentElement.style.setProperty('--skin-color', '#fa5b0f');
		}
		if(index === 2){
			document.documentElement.style.setProperty('--skin-color', '#37b182');
		}
		if(index === 3){
			document.documentElement.style.setProperty('--skin-color', '#1854b4');
		}
		if(index === 4){
			document.documentElement.style.setProperty('--skin-color', '#f021b2');
		}
	});
});
