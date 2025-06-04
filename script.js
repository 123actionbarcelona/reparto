const allCharacters_data = [
            { name: "La Viuda", gender: "F", interpretationLevel: "Extrovertido", isMandatory: true, isBirthdayFriendly: true, fichaLink: "https://123actionbarcelona.com/englishyes/the-widow/", description: "Elegante y enigmática, figura central tras la tragedia.", imageUrl: "Fotos_Personajes/VIUDA_WIDOW.webp" },
            { name: "La Sobrina", gender: "F", interpretationLevel: "Neutro", isMandatory: false, fichaLink: "https://123actionbarcelona.com/englishyes/SOBRINA/", description: "Joven y observadora, con una perspectiva única o secretos.", imageUrl: "Fotos_Personajes/LILLY_ROSE.webp" },
            { name: "La Cocinera", gender: "F", interpretationLevel: "Neutro", isMandatory: false, fichaLink: "https://123actionbarcelona.com/englishyes/coninera/", description: "De carácter fuerte, conoce los secretos de la casa desde la cocina.", imageUrl: "Fotos_Personajes/COCINERA_COOK.webp" },
            { name: "El Ama de Llaves", gender: "F", interpretationLevel: "Neutro", isMandatory: false, isBirthdayFriendly: true, isSeniorFriendly: true, fichaLink: "https://123actionbarcelona.com/englishyes/amadellaves/", description: "Recta y eficiente, lo ha visto todo en la mansión.", imageUrl: "Fotos_Personajes/AMA_DE_LLAVES.webp" },
            { name: "La Doncella", gender: "F", interpretationLevel: "Introvertido", isMandatory: false, isKidFriendly: true, fichaLink: "https://123actionbarcelona.com/englishyes/ladoncella/", description: "Discreta y atenta, a menudo invisible pero siempre presente.", imageUrl: "Fotos_Personajes/DONCELLA_THE_MAID.webp" },
            { name: "La Hermana", gender: "F", interpretationLevel: "Extrovertido", isMandatory: false, preferCenterImage: true, fichaLink: "https://123actionbarcelona.com/englishyes/hermana/", description: "Hermana del difunto, con fuertes opiniones y posiblemente intereses ocultos.", imageUrl: "Fotos_Personajes/LA_HERMANA_THE_SISTER.webp" },
            { name: "La Secretaria", gender: "F", interpretationLevel: "Neutro", isMandatory: false, fichaLink: "https://123actionbarcelona.com/englishyes/secretaria/", description: "Organizada y conocedora de los asuntos del difunto, quizás demasiado.", imageUrl: "Fotos_Personajes/LA_SECRETARIA.webp" },
            { name: "La Vecina 1", gender: "F", interpretationLevel: "Introvertido", isMandatory: false, isSeniorFriendly: true, preferCenterImage: true, fichaLink: "https://123actionbarcelona.com/englishyes/vecinas/", description: "Observadora y curiosa, siempre al tanto de los chismes del vecindario.", imageUrl: "Fotos_Personajes/VECINAS.webp" },
            { name: "La Vecina 2", gender: "F", interpretationLevel: "Introvertido", isMandatory: false, isSeniorFriendly: true, preferCenterImage: true, fichaLink: "https://123actionbarcelona.com/englishyes/vecinas/", description: "La voz de la razón entre las vecinas, o eso aparenta.", imageUrl: "Fotos_Personajes/VECINAS.webp" },
            { name: "La Vecina 3", gender: "F", interpretationLevel: "Introvertido", isMandatory: false, isSeniorFriendly: true, preferCenterImage: true, fichaLink: "https://123actionbarcelona.com/englishyes/vecinas/", description: "Más callada y reservada, pero sus silencios podrían ocultar mucho.", imageUrl: "Fotos_Personajes/VECINAS.webp" },
            { name: "La Vecina 4", gender: "F", interpretationLevel: "Introvertido", isMandatory: false, isSeniorFriendly: true, preferCenterImage: true, fichaLink: "https://123actionbarcelona.com/englishyes/vecinas/", description: "Una nueva vecina con sus propios secretos y una lengua afilada.", imageUrl: "Fotos_Personajes/VECINAS.webp" },
            { name: "La Vecina 5", gender: "F", interpretationLevel: "Introvertido", isMandatory: false, isSeniorFriendly: true, preferCenterImage: true, fichaLink: "https://123actionbarcelona.com/englishyes/vecinas/", description: "La más recente en llegar al vecindario, parece nerviosa.", imageUrl: "Fotos_Personajes/VECINAS.webp" },
            { name: "El Gestor", gender: "M", interpretationLevel: "Extrovertido", isMandatory: true, isBirthdayFriendly: true, fichaLink: "https://123actionbarcelona.com/englishyes/gestoresp/", description: "Metódico y astuto, maneja la fortuna familiar y conoce sus entresijos.", imageUrl: "Fotos_Personajes/GESTOR_ACCOUNTANT.webp" },
            { name: "El Hijastro", gender: "M", interpretationLevel: "Extrovertido", isMandatory: false, fichaLink: "https://123actionbarcelona.com/englishyes/jeremy/", description: "Hijo del difunto de un matrimonio anterior, relación compleja con la Viuda.", imageUrl: "Fotos_Personajes/HIJASTRO_STEPSON.webp" },
            { name: "El Hermano", gender: "M", interpretationLevel: "Extrovertido", isMandatory: false, preferCenterImage: true, fichaLink: "https://123actionbarcelona.com/englishyes/henry/", description: "Hermano del difunto, carismático pero quizás con deudas o envidias.", imageUrl: "Fotos_Personajes/HERMANO_BROTHER.webp" },
            { name: "El Doctor", gender: "M", interpretationLevel: "Introvertido", isMandatory: false, isBirthdayFriendly: true, fichaLink: "https://123actionbarcelona.com/englishyes/doctoresp/", description: "Profesional sereno que atendió al difunto, conoce su estado de salud.", imageUrl: "Fotos_Personajes/DOCTOR.webp" },
            { name: "El Socio", gender: "M", interpretationLevel: "Introvertido", isMandatory: false, isKidFriendly: true, isSeniorFriendly: true, fichaLink: "https://123actionbarcelona.com/englishyes/petersocio/", description: "Hombre de negocios, socio del difunto, con intereses en el futuro de la empresa.", imageUrl: "Fotos_Personajes/SOCIO.webp" },
            { name: "El Cuñado", gender: "M", interpretationLevel: "Introvertido", isMandatory: false, fichaLink: "https://123actionbarcelona.com/englishyes/cunadoroy/", description: "Esposo de la Hermana del difunto, un pariente político con su propia agenda.", imageUrl: "Fotos_Personajes/BROTHER_IN_LAW.webp" },
            { name: "El Gemelo 1", gender: "M", interpretationLevel: "Introvertido", isMandatory: false, isKidFriendly: true, fichaLink: "https://123actionbarcelona.com/englishyes/losgemelos/", description: "Parte de una presencia doble e inesperada, idéntico a su hermano.", imageUrl: "Fotos_Personajes/GEMELOS_TWINS.webp" },
            { name: "El Gemelo 2", gender: "M", interpretationLevel: "Introvertido", isMandatory: false, isKidFriendly: true, fichaLink: "https://123actionbarcelona.com/englishyes/losgemelos/", description: "La otra mitad del enigma de los gemelos, difícil de distinguir de su hermano.", imageUrl: "Fotos_Personajes/GEMELOS_TWINS.webp" }
        ];
        const packs_data = {
            8:  ["La Viuda", "El Gestor", "La Sobrina", "El Hijastro", "La Cocinera", "El Hermano", "El Ama de Llaves", "El Doctor"],
            9:  ["La Viuda", "El Gestor", "La Sobrina", "El Hermano", "La Cocinera", "El Hijastro", "El Ama de Llaves", "El Doctor", "La Doncella"],
            10: ["La Viuda", "El Gestor", "La Sobrina", "El Hijastro", "La Cocinera", "El Hermano", "El Ama de Llaves", "El Doctor", "La Doncella", "El Socio"],
            11: ["La Viuda", "El Gestor", "La Sobrina", "El Hijastro", "La Cocinera", "El Hermano", "El Ama de Llaves", "El Doctor", "La Doncella", "El Socio", "La Hermana"],
            12: ["La Viuda", "El Gestor", "La Sobrina", "El Hijastro", "La Cocinera", "El Hermano", "El Ama de Llaves", "El Doctor", "La Doncella", "El Socio", "La Hermana", "El Cuñado"],
            13: ["La Viuda", "El Gestor", "La Sobrina", "El Hijastro", "La Cocinera", "El Hermano", "El Ama de Llaves", "El Doctor", "La Doncella", "El Socio", "La Hermana", "El Cuñado", "El Gemelo 1"],
            14: ["La Viuda", "El Gestor", "La Sobrina", "El Hijastro", "La Cocinera", "El Hermano", "El Ama de Llaves", "El Doctor", "La Doncella", "El Socio", "La Hermana", "El Cuñado", "El Gemelo 1", "El Gemelo 2"],
            15: ["La Viuda", "El Gestor", "La Sobrina", "El Hijastro", "La Cocinera", "El Hermano", "El Ama de Llaves", "El Doctor", "La Doncella", "El Socio", "La Hermana", "El Cuñado", "El Gemelo 1", "El Gemelo 2", "La Secretaria"],
            16: ["La Viuda", "El Gestor", "La Sobrina", "El Hijastro", "La Cocinera", "El Hermano", "El Ama de Llaves", "El Doctor", "La Doncella", "El Socio", "La Hermana", "El Cuñado", "El Gemelo 1", "El Gemelo 2", "La Vecina 1", "La Vecina 2"],
            17: ["La Viuda", "El Gestor", "La Sobrina", "El Hijastro", "La Cocinera", "El Hermano", "El Ama de Llaves", "El Doctor", "La Doncella", "El Socio", "La Hermana", "El Cuñado", "El Gemelo 1", "El Gemelo 2", "La Secretaria", "La Vecina 1", "La Vecina 2"],
            18: ["La Viuda", "El Gestor", "La Sobrina", "El Hijastro", "La Cocinera", "El Hermano", "El Ama de Llaves", "El Doctor", "La Doncella", "El Socio", "La Hermana", "El Cuñado", "El Gemelo 1", "El Gemelo 2", "La Secretaria", "La Vecina 1", "La Vecina 2", "La Vecina 3"],
            19: ["La Viuda", "El Gestor", "La Sobrina", "El Hijastro", "La Cocinera", "El Hermano", "El Ama de Llaves", "El Doctor", "La Doncella", "El Socio", "La Hermana", "El Cuñado", "El Gemelo 1", "El Gemelo 2", "La Secretaria", "La Vecina 1", "La Vecina 2", "La Vecina 3", "La Vecina 4"],
            20: ["La Viuda", "El Gestor", "La Sobrina", "El Hijastro", "La Cocinera", "El Hermano", "El Ama de Llaves", "El Doctor", "La Doncella", "El Socio", "La Hermana", "El Cuñado", "El Gemelo 1", "El Gemelo 2", "La Secretaria", "La Vecina 1", "La Vecina 2", "La Vecina 3", "La Vecina 4", "La Vecina 5"]
        };

        function getGenderedInterpretationText(level, gender) {
            const firstLetter = level ? level[0].toUpperCase() : "U";
            let baseWord;

            switch (firstLetter) {
                case "E": baseWord = "Extrovertid"; break;
                case "I": baseWord = "Introvertid"; break;
                case "N": baseWord = "Camaleónic"; break;
                default:  return "Indefinido";
            }
            const suffix = (gender && gender.toUpperCase() === "F") ? "a" : "o";
            return baseWord + suffix;
        }

        function initializeApp(initialChars, initialPacks) {
            const packs = initialPacks;

            try {
                const domElementIds = [
                    'player-count', 'player-names-grid-container', 'start-assignment',
                    'player-count-error', 'setup-section', 'main-content-area',
                    'assignment-table-body', 'female-characters-grid', 'male-characters-grid',
                    'back-to-setup-btn',
                    'darkModeToggleBtn', 'darkModeContainer',
                    'print-dashboard-btn',
                    'detective-guide-section', 'guide-header-tab',
                    'assignment-dashboard-buttons-container',
                    'toast-notification', 'toast-message',
                    'host-name-input',
                    'event-date-input',
                    'has-honoree-checkbox', 'honorees-container', 'add-honoree-btn',
                    // 'animated-intro-text', // <-- ELIMINADO ID, ya no se usa para JS typewriter
                    'decrement-player-count', 'increment-player-count'
                ];
                const domElements = {};
                let allElementsFound = true;
                domElementIds.forEach(id => {
                    const element = document.getElementById(id);
                    if (!element && id !== 'guide-header-tab' && id !== 'load-config-btn') { 
                        console.error(`ERROR DOM: ID '${id}' NO encontrado.`);
                        allElementsFound = false;
                    }
                    else { domElements[id] = element; }
                });
                if (!allElementsFound) { console.error("ERROR FATAL: Elementos DOM esenciales no encontrados."); return; }

                const darkModeButton = domElements['darkModeToggleBtn'];
                const darkModeContainer = domElements['darkModeContainer'];
                const toggleTextSpan = darkModeButton.querySelector('.toggle-text');
                const moonIcon = darkModeButton.querySelector('.fa-moon');
                const sunIcon = darkModeButton.querySelector('.fa-sun');

                function updateDarkModeVisuals() {
                    const isDarkMode = document.documentElement.classList.contains('dark-mode');
                    if (toggleTextSpan) toggleTextSpan.textContent = isDarkMode ? "Modo Día" : "Modo Noche";
                    if (moonIcon) moonIcon.style.display = isDarkMode ? 'none' : 'inline-block';
                    if (sunIcon) sunIcon.style.display = isDarkMode ? 'inline-block' : 'none';
                }

                if (darkModeContainer) darkModeContainer.style.display = 'none';

                darkModeButton.onclick = null;
                darkModeButton.addEventListener('click', () => {
                    document.documentElement.classList.toggle('dark-mode');
                    updateDarkModeVisuals();
                });
                updateDarkModeVisuals();

                let currentCharacters = [];
                let availablePlayerNames = [];
                let assignedPlayerMap = new Map();
                let hostName = "";
                let honoreeNames = [];
                let eventDateValue = "";

                // ELIMINADA LA FUNCIÓN typewriterEffect y la variable originalIntroHTML

                function addHonoreeInput(name = "") {
                    const container = domElements['honorees-container'];
                    const inputGroup = document.createElement('div');
                    inputGroup.className = 'honoree-input-group';

                    const newInput = document.createElement('input');
                    newInput.type = 'text';
                    newInput.placeholder = `Nombre Homenajeado/a ${container.children.length + 1}`;
                    newInput.className = 'player-name-box honoree-name-input';
                    newInput.value = name;
                    newInput.addEventListener('blur', () => {
                        generatePlayerNameInputs(parseInt(domElements['player-count'].value),
                            Array.from(domElements['player-names-grid-container'].querySelectorAll('input.player-name-box:not([readonly])')).map(ip => ip.value)
                        );
                         saveConfiguration();
                    });
                    newInput.addEventListener('keydown', function(event) {
                        if (event.key === 'Enter') {
                            event.preventDefault();
                            const allHonoreeInputs = Array.from(container.querySelectorAll('.honoree-name-input'));
                            const currentIndex = allHonoreeInputs.indexOf(this);
                            if (currentIndex > -1 && currentIndex < allHonoreeInputs.length - 1) {
                                allHonoreeInputs[currentIndex + 1].focus();
                            } else {
                                if (domElements['add-honoree-btn'] && domElements['add-honoree-btn'].style.display !== 'none') {
                                    domElements['add-honoree-btn'].focus();
                                } else {
                                    const firstPlayerInput = domElements['player-names-grid-container'].querySelector('input.player-name-box:not([readonly])');
                                    if (firstPlayerInput) {
                                        firstPlayerInput.focus();
                                    }
                                }
                            }
                        }
                    });

                    const removeBtn = document.createElement('button');
                    removeBtn.type = 'button';
                    removeBtn.innerHTML = '<i class="fas fa-times"></i>';
                    removeBtn.className = 'remove-honoree-btn';
                    removeBtn.onclick = function() {
                        inputGroup.remove();
                        generatePlayerNameInputs(parseInt(domElements['player-count'].value),
                            Array.from(domElements['player-names-grid-container'].querySelectorAll('input.player-name-box:not([readonly])')).map(ip => ip.value)
                        );
                        saveConfiguration();
                    };

                    inputGroup.appendChild(newInput);
                    inputGroup.appendChild(removeBtn);
                    container.appendChild(inputGroup);
                }


                if (domElements['has-honoree-checkbox']) {
                    domElements['has-honoree-checkbox'].addEventListener('change', function() {
                        const honoreesContainer = domElements['honorees-container'];
                        const addBtn = domElements['add-honoree-btn'];
                        if (this.checked) {
                            addBtn.style.display = 'inline-block';
                            if (honoreesContainer.children.length === 0) {
                                addHonoreeInput();
                            }
                        } else {
                            addBtn.style.display = 'none';
                            honoreesContainer.innerHTML = '';
                        }
                        generatePlayerNameInputs(parseInt(domElements['player-count'].value),
                            Array.from(domElements['player-names-grid-container'].querySelectorAll('input.player-name-box:not([readonly])')).map(ip => ip.value)
                        );
                        saveConfiguration();
                    });
                }
                if (domElements['add-honoree-btn']) {
                    domElements['add-honoree-btn'].addEventListener('click', () => {
                        addHonoreeInput();
                        saveConfiguration();
                    });
                }

                 if (domElements['host-name-input']) {
                    domElements['host-name-input'].addEventListener('blur', () => {
                         hostName = domElements['host-name-input'].value.trim();
                         generatePlayerNameInputs(parseInt(domElements['player-count'].value),
                            Array.from(domElements['player-names-grid-container'].querySelectorAll('input.player-name-box:not([readonly])')).map(ip => ip.value)
                         );
                         saveConfiguration();
                    });
                    domElements['host-name-input'].addEventListener('keydown', function(event) {
                        if (event.key === 'Enter') {
                            event.preventDefault();
                            if (domElements['has-honoree-checkbox']) {
                                domElements['has-honoree-checkbox'].focus();
                            } else if (domElements['event-date-input']) {
                                domElements['event-date-input'].focus();
                            } else { 
                                 const firstPlayerInput = domElements['player-names-grid-container'].querySelector('input.player-name-box:not([readonly])');
                                if (firstPlayerInput) {
                                    firstPlayerInput.focus();
                                } else if (domElements['player-count']) {
                                    domElements['player-count'].focus();
                                }
                            }
                        }
                    });
                }
                if (domElements['event-date-input']) {
                    domElements['event-date-input'].addEventListener('change', () => {
                        eventDateValue = domElements['event-date-input'].value;
                        saveConfiguration();
                    });
                     domElements['event-date-input'].addEventListener('keydown', function(event) {
                        if (event.key === 'Enter') {
                            event.preventDefault();
                             const hasHonoreeChecked = domElements['has-honoree-checkbox'] ? domElements['has-honoree-checkbox'].checked : false;
                            let nextFocusElement = null;

                            if (hasHonoreeChecked) {
                                nextFocusElement = domElements['honorees-container'].querySelector('.honoree-name-input');
                                 if (!nextFocusElement && domElements['add-honoree-btn'] && domElements['add-honoree-btn'].style.display !== 'none') {
                                    nextFocusElement = domElements['add-honoree-btn'];
                                }
                            }

                            if (!nextFocusElement) { 
                                nextFocusElement = domElements['player-count'];
                            }


                            if (nextFocusElement) {
                                nextFocusElement.focus();
                            }
                        }
                    });
                }


                let toastTimeout;
                function showToastNotification(message, type = 'info', duration = 3000) {
                    const toast = domElements['toast-notification'];
                    const messageSpan = domElements['toast-message'];
                    const iconElement = toast.querySelector('.fas');

                    if (!toast || !messageSpan || !iconElement) {
                        console.warn("Toast elements not found, falling back to alert.");
                        alert(`${type.toUpperCase()}: ${message}`);
                        return;
                    }
                    messageSpan.textContent = message;
                    toast.className = 'show'; 
                    iconElement.className = 'fas'; 

                    if (type === 'success') {
                        toast.classList.add('success');
                        iconElement.classList.add('fa-check-circle');
                    } else if (type === 'error') {
                        toast.classList.add('error');
                        iconElement.classList.add('fa-times-circle');
                    } else { 
                        toast.classList.add('info');
                        iconElement.classList.add('fa-info-circle');
                    }
                    toast.classList.add('show'); 
                    clearTimeout(toastTimeout);
                    toastTimeout = setTimeout(() => {
                        toast.classList.remove('show');
                    }, duration);
                }

                function generatePlayerNameInputs(count, existingPlayerNamesFromGrid = []) {
                    if (!domElements['player-names-grid-container']) { return; }

                    const currentHostNameVal = domElements['host-name-input'] ? domElements['host-name-input'].value.trim() : "";
                    const currentHonoreeInputs = domElements['honorees-container'] ? Array.from(domElements['honorees-container'].querySelectorAll('.honoree-name-input')) : [];
                    const currentHonoreeCleanNamesArr = currentHonoreeInputs.map(input => input.value.trim()).filter(name => name);

                    let preservedEditableNames = [];
                    if (existingPlayerNamesFromGrid.length > 0) {
                        let tempPreserved = [...existingPlayerNamesFromGrid];
                        if (currentHostNameVal) tempPreserved = tempPreserved.filter(name => name !== (currentHostNameVal + " 🎩"));
                        currentHonoreeCleanNamesArr.forEach(hName => {
                            tempPreserved = tempPreserved.filter(name => name !== (hName + " 🌟"));
                        });
                        preservedEditableNames = tempPreserved;
                    } else if (domElements['player-names-grid-container'].children.length > 0) {
                        preservedEditableNames = Array.from(domElements['player-names-grid-container'].querySelectorAll('input.player-name-box:not([readonly])'))
                                                      .map(input => input.value.trim());
                    }


                    domElements['player-names-grid-container'].innerHTML = '';
                    let playerBoxIndex = 0;
                    let editableNamesIndex = 0;

                    if (currentHostNameVal) {
                        if (playerBoxIndex < count) {
                            const input = document.createElement('input');
                            input.type = 'text'; input.classList.add('player-name-box');
                            input.value = currentHostNameVal + " 🎩"; input.readOnly = true;
                            input.title = "Anfitrión/Host (configurado arriba)";
                            domElements['player-names-grid-container'].appendChild(input);
                            playerBoxIndex++;
                        }
                    }

                    currentHonoreeCleanNamesArr.forEach(honoreeCleanName => {
                        if (playerBoxIndex < count) {
                            const input = document.createElement('input');
                            input.type = 'text'; input.classList.add('player-name-box');
                            input.value = honoreeCleanName + " 🌟"; input.readOnly = true;
                            input.title = "Homenajeado/a (configurado arriba)";
                            domElements['player-names-grid-container'].appendChild(input);
                            playerBoxIndex++;
                        }
                    });

                    for (let i = playerBoxIndex; i < count; i++) {
                        const input = document.createElement('input');
                        input.type = 'text'; input.classList.add('player-name-box');

                        if (editableNamesIndex < preservedEditableNames.length) {
                            input.value = preservedEditableNames[editableNamesIndex];
                            editableNamesIndex++;
                        } else {
                            input.value = '';
                        }

                        input.placeholder = `Jugador ${i + 1 - playerBoxIndex + (currentHostNameVal ? 1 : 0) + currentHonoreeCleanNamesArr.length}`;
                        if (i === playerBoxIndex && !currentHostNameVal && currentHonoreeCleanNamesArr.length === 0) {
                             input.placeholder = "(Tu nombre como jugador)";
                        }
                        input.setAttribute('aria-label', input.placeholder);
                        input.style.animationDelay = `${(i - playerBoxIndex) * 0.05}s`;
                        domElements['player-names-grid-container'].appendChild(input);

                        input.addEventListener('keydown', function(event) {
                            if (event.key === 'Enter') {
                                event.preventDefault();
                                const allPlayerInputs = Array.from(domElements['player-names-grid-container'].querySelectorAll('input.player-name-box:not([readonly])'));
                                const currentIndex = allPlayerInputs.indexOf(this);
                                if (currentIndex > -1 && currentIndex < allPlayerInputs.length - 1) {
                                    allPlayerInputs[currentIndex + 1].focus();
                                } else if (currentIndex === allPlayerInputs.length - 1) { 
                                    if(domElements['start-assignment']) domElements['start-assignment'].focus();
                                }
                            }
                        });
                         input.addEventListener('blur', saveConfiguration);
                        if (i === playerBoxIndex && !input.value) {
                             setTimeout(() => input.focus(), 50); 
                        }
                    }
                }

                function saveConfiguration() {
                    // Comentado: localStorage eliminado
                }

                function initializeFreshSetupState() {
                    if (!domElements['setup-section'] || !domElements['main-content-area'] ||
                        !domElements['player-count'] || !domElements['player-names-grid-container']) {
                        console.error("Cannot initialize fresh setup state, core elements missing.");
                        return;
                    }

                    domElements['setup-section'].style.display = 'block';
                    domElements['main-content-area'].classList.add('hidden-section');
                    domElements['main-content-area'].classList.remove('visible-section');
                    if(domElements['player-count-error']) domElements['player-count-error'].style.display = 'none';
                    if (darkModeContainer) darkModeContainer.style.display = 'none';

                    if(domElements['female-characters-grid']) domElements['female-characters-grid'].innerHTML = '';
                    if(domElements['male-characters-grid']) domElements['male-characters-grid'].innerHTML = '';
                    if (domElements['assignment-table-body']) domElements['assignment-table-body'].innerHTML = '';

                    currentCharacters = [];
                    availablePlayerNames = [];
                    assignedPlayerMap.clear();
                    
                    // No limpiar hostName, honoreeNames, eventDateValue para preservarlos
                    if(domElements['host-name-input']) domElements['host-name-input'].value = hostName; else hostName = "";
                    if(domElements['event-date-input']) domElements['event-date-input'].value = eventDateValue; else eventDateValue = "";
                    
                    if(domElements['has-honoree-checkbox']) {
                        domElements['has-honoree-checkbox'].checked = honoreeNames.length > 0;
                        const event = new Event('change');
                        domElements['has-honoree-checkbox'].dispatchEvent(event); 
                         if (honoreeNames.length > 0 && domElements['honorees-container']) {
                            domElements['honorees-container'].innerHTML = ''; 
                            honoreeNames.forEach(name => addHonoreeInput(name));
                         }
                    } else { 
                        honoreeNames = [];
                        if(domElements['honorees-container']) domElements['honorees-container'].innerHTML = '';
                        if(domElements['add-honoree-btn']) domElements['add-honoree-btn'].style.display = 'none';
                    }

                    domElements['player-count'].value = domElements['player-count'].value || "8"; 
                    generatePlayerNameInputs(parseInt(domElements['player-count'].value));

                    // ELIMINADA LA LLAMADA A typewriterEffect
                }


                function loadConfiguration() {
                    if(domElements['host-name-input']) domElements['host-name-input'].value = "";
                    if(domElements['event-date-input']) domElements['event-date-input'].value = "";
                    if(domElements['has-honoree-checkbox']) domElements['has-honoree-checkbox'].checked = false;
                    const event = new Event('change');
                    if(domElements['has-honoree-checkbox']) domElements['has-honoree-checkbox'].dispatchEvent(event);
                    if(domElements['honorees-container']) domElements['honorees-container'].innerHTML = '';
                    if(domElements['add-honoree-btn']) domElements['add-honoree-btn'].style.display = 'none';
                    if(domElements['player-count']) domElements['player-count'].value = "8";
                    hostName = "";
                    honoreeNames = [];
                    eventDateValue = "";

                    initializeFreshSetupState(); 
                    showToastNotification('Configuración reiniciada a valores por defecto.', 'info');
                }


                function handleBackToSetup() {
                    if (!domElements['setup-section'] || !domElements['main-content-area']) return;

                    domElements['main-content-area'].classList.add('hidden-section');
                    domElements['main-content-area'].classList.remove('visible-section');
                    domElements['setup-section'].style.display = 'block';

                    if (darkModeContainer) darkModeContainer.style.display = 'none';
                    domElements['setup-section'].scrollIntoView({ behavior: 'smooth', block: 'start' });
                    
                    // ELIMINADA LA LLAMADA A typewriterEffect
                    showToastNotification('Has vuelto a la configuración. Los datos se conservan.', 'info');
                }

                function handleStartAssignment() {
                    if (!domElements['player-count'] || !domElements['player-count-error'] || !domElements['main-content-area'] ||
                        !domElements['player-names-grid-container'] || !domElements['setup-section']) { return; }

                    hostName = domElements['host-name-input'] ? domElements['host-name-input'].value.trim() : "";
                    eventDateValue = domElements['event-date-input'] ? domElements['event-date-input'].value : "";

                    if (!eventDateValue) {
                        showToastNotification('Por favor, selecciona la fecha del evento para continuar.', 'error');
                        if (domElements['event-date-input']) domElements['event-date-input'].focus();
                        return;
                    }

                    const honoreeNameInputs = domElements['honorees-container'] ? Array.from(domElements['honorees-container'].querySelectorAll('.honoree-name-input')) : [];
                    honoreeNames = honoreeNameInputs.map(input => input.value.trim()).filter(name => name);


                    const playerCount = parseInt(domElements['player-count'].value);
                    if (!packs[playerCount]) {
                        showToastNotification(`No hay pack para ${playerCount} jugadores. Packs: ${Object.keys(packs).join(', ')}.`, 'error');
                        domElements['main-content-area'].classList.remove('visible-section'); domElements['main-content-area'].classList.add('hidden-section'); return;
                    }

                    availablePlayerNames = [];
                    if (hostName) {
                        availablePlayerNames.push(hostName + " 🎩");
                    }
                    honoreeNames.forEach(hNameClean => {
                        if (hNameClean) {
                           availablePlayerNames.push(hNameClean + " 🌟");
                        }
                    });
                    const nameInputs = domElements['player-names-grid-container'].querySelectorAll('input.player-name-box:not([readonly])');
                    nameInputs.forEach(input => {
                        const cleanName = input.value.trim();
                        if (cleanName) {
                            availablePlayerNames.push(cleanName);
                        }
                    });

                    const totalPreFilledNames = (hostName ? 1 : 0) + honoreeNames.length;
                    const expectedEditableNames = playerCount - totalPreFilledNames;
                    const actualEditableNamesEntered = nameInputs.length > 0 ? Array.from(nameInputs).filter(input => input.value.trim()).length : 0;
                    
                    if (availablePlayerNames.length !== playerCount) {
                         showToastNotification(`El número de jugadores (${playerCount}) no coincide con los nombres proporcionados (${availablePlayerNames.length}, incluyendo anfitrión/homenajeados). Revisa los campos. Asegúrate de que todos los jugadores tengan nombre.`, 'error', 6000);
                         return;
                    }
                    if (expectedEditableNames > 0 && actualEditableNamesEntered < expectedEditableNames) {
                        showToastNotification(`Faltan nombres de jugadores. Se esperan ${expectedEditableNames} nombres adicionales.`, 'error', 5000);
                        return;
                    }


                    const cleanPlayerNamesForCheck = availablePlayerNames.map(nameWithEmoji =>
                        nameWithEmoji.replace("🎩","").replace("🌟","").trim().toLowerCase()
                    );
                    const uniqueNames = new Set(cleanPlayerNamesForCheck);

                    if (uniqueNames.size !== cleanPlayerNamesForCheck.length) {
                        const nameCounts = {};
                        let duplicateNameFoundForMessage = "";
                        for (const originalName of availablePlayerNames) {
                            const cleanName = originalName.replace("🎩","").replace("🌟","").trim().toLowerCase();
                            nameCounts[cleanName] = (nameCounts[cleanName] || 0) + 1;
                            if (nameCounts[cleanName] > 1) {
                                duplicateNameFoundForMessage = originalName.replace("🎩","").replace("🌟","").trim();
                                break;
                            }
                        }
                        showToastNotification(`Error: El nombre "${duplicateNameFoundForMessage}" está duplicado. Por favor, usa nombres únicos o añade un distintivo (ej: Ana S.).`, 'error', 6000);
                        return;
                    }


                    assignedPlayerMap.clear();
                    domElements['player-count-error'].style.display = 'none'; domElements['setup-section'].style.display = 'none';
                    domElements['main-content-area'].classList.remove('hidden-section');
                    domElements['main-content-area'].classList.add('visible-section');
                    if (darkModeContainer) darkModeContainer.style.display = 'block';
                    if (domElements['action-buttons-section']) {
                         domElements['action-buttons-section'].scrollIntoView({ behavior: 'smooth', block: 'start' });
                    } else if (domElements['guide-header-tab']) {
                        domElements['guide-header-tab'].scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                    setupCharacterSelection(playerCount);
                    updateAllPlayerSelects();
                    updateMandatoryVisuals();
                    updateAssignmentDashboard();
                    saveConfiguration();
                }

                function setupCharacterSelection(playerCount) {
                    if (!domElements['female-characters-grid'] || !domElements['male-characters-grid'] || !domElements['player-count-error'] || !domElements['main-content-area']) { return; }
                    domElements['female-characters-grid'].innerHTML = ''; domElements['male-characters-grid'].innerHTML = '';
                    const charNames = packs[playerCount];
                    if (!charNames) {
                        showToastNotification(`Error interno cargando pack para ${playerCount}.`, 'error');
                        domElements['main-content-area'].classList.remove('visible-section'); domElements['main-content-area'].classList.add('hidden-section'); return;
                    }
                    currentCharacters = charNames.map(name => {
                        const oCharData = allCharacters_data.find(char => char.name === name);
                        if (!oCharData) { console.warn(`Advertencia: No se encontraron datos para el personaje ${name} en allCharacters_data.`); return null; }
                        return JSON.parse(JSON.stringify(oCharData));
                    }).filter(Boolean);

                    currentCharacters.forEach((char, i) => {
                        const grid = char.gender === 'F' ? domElements['female-characters-grid'] : domElements['male-characters-grid'];
                        if (grid) { renderCharacterCard(char, grid, i * 0.07); }
                    });
                }

                function getExtroversionPill(level, gender) {
                    const map = {"E":"🔥","I":"🙈","N":"🎭","U":"❔"};
                    const cls = {"E":"extroversion-Extrovertido","I":"extroversion-Introvertido","N":"extroversion-Neutro","U":"extroversion-Indefinido"};
                    const key = (level && map[level[0].toUpperCase()]) ? level[0].toUpperCase() : "U";
                    let fullTextDisplay;
                    if (key === "U") {
                        fullTextDisplay = "N/D";
                    } else {
                        fullTextDisplay = getGenderedInterpretationText(level, gender);
                    }
                    return `<span class='extroversion-pill ${cls[key]}'>${map[key]} <strong>${fullTextDisplay.toUpperCase()}</strong></span>`;
                }

                function createPlayerAssignmentElement(char, id) {
                    return availablePlayerNames.length > 0 ? `<select class="player-assignment-select" id="player-${id}" data-charname="${char.name}"><option value="">-- Seleccionar --</option></select>` : `<input type="text" class="player-assignment-input" id="player-${id}" data-charname="${char.name}" placeholder="Nombre jugador/a">`;
                }

                function createExtroversionLevelElement(char, id) {
                    let specialIconsHTML = "";
                    if (char.isBirthdayFriendly) {
                        let title = "Ideal para homenajeado/a";
                        if (honoreeNames && honoreeNames.length > 0) {
                            title += `: ${honoreeNames.map(name => name.trim()).join(', ')}`;
                        }
                        specialIconsHTML += ` <span class="special-icon birthday-friendly-icon" title="${title}">🎂</span>`;
                    }
                    if (char.isKidFriendly) {
                        specialIconsHTML += ` <span class="special-icon kid-friendly-icon" title="Apto para menores (con supervisión)">🧸</span>`;
                    }
                    if (char.isSeniorFriendly) {
                        specialIconsHTML += ` <span class="special-icon senior-friendly-icon" title="Ideal para jugadores mayores o novatos">👵🏻</span>`;
                    }
                    return `<div class="extroversion-level-wrapper">
                                <div class="extroversion-level-container">${getExtroversionPill(char.interpretationLevel, char.gender)}</div>
                                <div class="card-icons-indicators">${specialIconsHTML}</div>
                            </div>`;
                }

                function renderCharacterCard(character, gridDiv, animationDelayValue) {
                    const frame = document.createElement('div');
                    frame.classList.add('character-frame');
                    frame.classList.add('deal-animation');
                    frame.style.animationDelay = `${animationDelayValue}s`;

                    frame.dataset.charnameForMandatory = character.name;
                    const charId = character.name.replace(/[^a-zA-Z0-9-_]/g, '').toLowerCase();
                    const imageClass = `character-portrait-image ${character.preferCenterImage ? 'img-position-center' : ''}`;
                    const imageHtml = character.imageUrl ? `<img src="${character.imageUrl}" alt="${character.name}" class="${imageClass}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">` : '';
                    const placeholderHtml = `<div class="character-portrait-image-placeholder" style="${character.imageUrl ? 'display:none;' : 'display:flex;' }"><i class="fas fa-user-secret fa-3x"></i><p>Retrato</p></div>`;
                    const shareButtonHtml = `
<div class="character-card-actions">
  <button class="copy-char-btn-frame">
    <img src="Fotos_Personajes/whatapp-logo.WEBP" alt="WhatsApp" />
    Compartir por WhatsApp
  </button>
</div>`;
                    const nameHtml = `<h4>${character.name}</h4>`;
                    frame.innerHTML = `${imageHtml}${placeholderHtml}<div class="character-portrait-content">${nameHtml}<div class="character-details-section"><p id="desc-${charId}" class="character-description">${character.description||'Descripción no disponible.'}</p></div><div class="character-details-section">${createExtroversionLevelElement(character, charId)}</div>${createPlayerAssignmentElement(character, charId)}${shareButtonHtml}</div>`;
                    gridDiv.appendChild(frame);
                    attachCardEventListeners(frame, character, charId);
                }
                function attachCardEventListeners(frame, character, charId) {
                    const playerIO = frame.querySelector(`#player-${charId}`);
                    if(playerIO){
                        playerIO.addEventListener(playerIO.tagName==='SELECT'?'change':'input',function(){
                            const currentSelectedPlayerName=this.value.trim();
                            const characterName=this.dataset.charname;
                            const previousPlayerForThisChar=assignedPlayerMap.get(characterName);
                            if(currentSelectedPlayerName){
                                let existingCharForThisPlayer=null;
                                for(const[char,player]of assignedPlayerMap.entries()){if(player===currentSelectedPlayerName&&char!==characterName){existingCharForThisPlayer=char;break;}}
                                if(existingCharForThisPlayer){
                                    showToastNotification(`"${currentSelectedPlayerName.replace("🎩","").replace("🌟","").trim()}" ya está asignado a "${existingCharForThisPlayer}".`, 'error');
                                    this.value=previousPlayerForThisChar||""; 
                                    this.classList.toggle('assigned',!!previousPlayerForThisChar);
                                } else {
                                    assignedPlayerMap.set(characterName,currentSelectedPlayerName);
                                    this.classList.add('assigned');
                                }
                            }else{ 
                                assignedPlayerMap.delete(characterName);
                                this.classList.remove('assigned');
                            }
                            updateAllPlayerSelects(); 
                            updateMandatoryVisuals();
                            updateAssignmentDashboard();
                            saveConfiguration();
                        });
                    }
                    const cB=frame.querySelector('.copy-char-btn-frame');
                    if(cB){cB.addEventListener('click', async ()=>{
                        const d=currentCharacters.find(c=>c.name===character.name);
                        const pA=(playerIO?(playerIO.value.trim()||"[Nombre del Jugador]"):"[Nombre del Jugador]").replace("🎩","").replace("🌟","").trim();
                        if(d){
                            const interpretationText = getGenderedInterpretationText(d.interpretationLevel, d.gender);
                            const txt = `¡Hola ${pA}!\n\nAquí tienes los detalles de tu sospechoso para el misterio:\n\n🕵️ SOSPECHOSO: ${d.name}\n📜 DESCRIPCIÓN: ${d.description}\n👤 NIVEL DE EXTROVERSIÓN: ${interpretationText.toUpperCase()}\n\n🔗 Accede a tu ficha completa aquí: ${d.fichaLink||'N/A'}\n\n¡Prepárate para una noche de intriga!`;

                            if (navigator.share && navigator.canShare && navigator.canShare({ text: txt })) {
                                try {
                                    await navigator.share({
                                        title: `Sospechoso: ${d.name}`,
                                        text: txt,
                                    });
                                    showToastNotification('¡Detalles compartidos!', 'success');
                                } catch (error) {
                                    console.error('Error al compartir:', error);
                                    if (error.name !== 'AbortError') { 
                                        showToastNotification('Error al compartir. Texto copiado al portapapeles.', 'error');
                                        navigator.clipboard.writeText(txt).catch(err => console.error("Error al copiar al portapapeles:", err));
                                    } else {
                                        showToastNotification('Compartir cancelado.', 'info');
                                    }
                                }
                            } else { 
                                navigator.clipboard.writeText(txt)
                                    .then(()=>showToastNotification("Texto copiado al portapapeles.",'success'))
                                    .catch(()=>showToastNotification("Error al copiar texto.",'error'));
                            }
                        }
                    });}
                }
                function updateAllPlayerSelects() {
                     if(availablePlayerNames.length===0)return; 
                    document.querySelectorAll('.character-portrait-content select.player-assignment-select').forEach(sel=>{
                        const charNameForThisSelect=sel.dataset.charname;
                        const currentlySelectedPlayerInThisSelect=sel.value; 
                        
                        let optionsHtml='<option value="">-- Seleccionar --</option>';
                        availablePlayerNames.forEach(playerName=>{
                            let isPlayerAssignedElsewhereFlag=false;
                            for(const[assignedChar,assignedPlayer]of assignedPlayerMap.entries()){
                                if(assignedPlayer===playerName && assignedChar!==charNameForThisSelect){
                                    isPlayerAssignedElsewhereFlag=true;
                                    break;
                                }
                            }
                            optionsHtml+=`<option value="${playerName}" ${isPlayerAssignedElsewhereFlag?'disabled':''}>${playerName.replace("🎩"," (Anfitrión)").replace("🌟"," (Homenajeado)")}</option>`;
                        });
                        sel.innerHTML=optionsHtml;

                        const playerActuallyAssignedToThisChar = assignedPlayerMap.get(charNameForThisSelect);
                        if(playerActuallyAssignedToThisChar){
                            sel.value=playerActuallyAssignedToThisChar;
                            sel.classList.add('assigned');
                        } else {
                            sel.value="";
                            sel.classList.remove('assigned');
                        }
                    });
                }

                function getRandomSmallAngle() {
                    const maxAngle = 5; 
                    return (Math.random() * (maxAngle * 2)) - maxAngle;
                }

                function updateAssignmentDashboard() {
                    if(!domElements['assignment-table-body']){return;}domElements['assignment-table-body'].innerHTML='';if(currentCharacters.length===0)return;
                    currentCharacters.forEach(char=>{
                        const rawPlayerName = assignedPlayerMap.get(char.name);
                        const displayPlayerName = rawPlayerName ? rawPlayerName.replace("🎩"," (Anfitrión)").replace("🌟"," (Homenajeado)") : '<em>S/A</em>';

                        const r=domElements['assignment-table-body'].insertRow();const cI=r.insertCell();
                        if(char.imageUrl){
                            const i=document.createElement('img');
                            i.src=char.imageUrl;
                            i.alt=char.name;
                            i.style.transform = `rotate(${getRandomSmallAngle()}deg)`; 
                            i.onerror=function(){
                                this.onerror=null; 
                                this.src='https://placehold.co/50x65/ccc/fff?text=X'; 
                                this.alt=`${char.name} (imagen no disponible)`;
                                this.style.transform = 'none'; 
                            };
                            cI.appendChild(i);
                        }else{
                            cI.innerHTML='<i class="fas fa-image" style="font-size:24px;color:#ccc;"></i>'; 
                        }
                        const cN=r.insertCell();
                        cN.innerHTML=`${char.name}`; 
                        const cP=r.insertCell();cP.innerHTML=displayPlayerName; 
                        const cL=r.insertCell();cL.innerHTML=getExtroversionPill(char.interpretationLevel, char.gender); 
                    });
                }

                function updateMandatoryVisuals() {
                    // Simplified
                }

                function imageToDataUri(url, width, height) {
                    return new Promise((resolve) => {
                        const image = new Image();
                        image.crossOrigin = "Anonymous"; 
                        image.onload = () => {
                            const canvas = document.createElement('canvas');
                            canvas.width = width;
                            canvas.height = height;
                            const ctx = canvas.getContext('2d');
                            ctx.drawImage(image, 0, 0, width, height);
                            resolve(canvas.toDataURL('image/jpeg')); 
                        };
                        image.onerror = () => {
                            console.warn(`Error cargando imagen: ${url}. Usando placeholder para PDF.`);
                            const placeholderCanvas = document.createElement('canvas');
                            placeholderCanvas.width = width;
                            placeholderCanvas.height = height;
                            const ctx = placeholderCanvas.getContext('2d');
                            ctx.fillStyle = '#dddddd'; 
                            ctx.fillRect(0, 0, width, height);
                            ctx.fillStyle = '#777777'; 
                            ctx.font = Math.min(width, height) / 3.5 + 'px sans-serif'; 
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            ctx.fillText('?', width / 2, height / 2); 
                            resolve(placeholderCanvas.toDataURL('image/jpeg'));
                        };
                        image.src = url;
                    });
                }

                if(domElements['decrement-player-count'] && domElements['increment-player-count'] && domElements['player-count']) {
                    domElements['decrement-player-count'].addEventListener('click', () => {
                        let currentValue = parseInt(domElements['player-count'].value);
                        const minValue = parseInt(domElements['player-count'].min);
                        if (currentValue > minValue) {
                            domElements['player-count'].value = currentValue - 1;
                            domElements['player-count'].dispatchEvent(new Event('input', { bubbles: true })); 
                            saveConfiguration();
                        }
                    });

                    domElements['increment-player-count'].addEventListener('click', () => {
                        let currentValue = parseInt(domElements['player-count'].value);
                        const maxValue = parseInt(domElements['player-count'].max);
                        if (currentValue < maxValue) {
                            domElements['player-count'].value = currentValue + 1;
                            domElements['player-count'].dispatchEvent(new Event('input', { bubbles: true })); 
                            saveConfiguration();
                        }
                    });
                }


                if(domElements['player-count']){domElements['player-count'].addEventListener('input',()=>{const c=parseInt(domElements['player-count'].value);const mn=parseInt(domElements['player-count'].min);const mx=parseInt(domElements['player-count'].max);if(c>=mn&&c<=mx){generatePlayerNameInputs(c, Array.from(domElements['player-names-grid-container'].querySelectorAll('input.player-name-box:not([readonly])')).map(ip => ip.value)); saveConfiguration();}else if(domElements['player-names-grid-container']&&domElements['player-names-grid-container'].innerHTML!==""&&(c<mn||c>mx)){if(c<mn&&c>=1)generatePlayerNameInputs(mn);else if(c>mx)generatePlayerNameInputs(mx); saveConfiguration();}});}
                if(domElements['start-assignment'])domElements['start-assignment'].addEventListener('click',handleStartAssignment);
                if(domElements['back-to-setup-btn']) domElements['back-to-setup-btn'].addEventListener('click', handleBackToSetup);
                
                if (domElements['print-dashboard-btn']) {
                    domElements['print-dashboard-btn'].addEventListener('click', async () => {
                        showToastNotification('Generando PDF... esto puede tardar un momento.', 'info', 5000);
                        if (typeof window.jspdf === 'undefined' || typeof window.jspdf.jsPDF === 'undefined') {
                            showToastNotification("Error: La librería jsPDF no está cargada. Se intentará imprimir de forma nativa.", 'error');
                            console.error("jsPDF library is not loaded correctly.");
                            window.print(); return;
                        }
                        const { jsPDF } = window.jspdf;
                        if (typeof jsPDF.API?.autoTable !== 'function') {
                            showToastNotification("Error: El plugin jsPDF-AutoTable no está cargado. Se intentará imprimir de forma nativa.", 'error');
                            console.error("jsPDF-AutoTable plugin is not loaded correctly.");
                            window.print(); return;
                        }

                        const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' });
                        let pdfTopMargin = 15;
                        const pagePadding = 15;
                        
                        const colorGoldDark = [140, 112, 60]; 
                        const colorTextDark = [61, 58, 54];   
                        const colorGoldPale = [250, 243, 224]; 
                        const colorGoldMedium = [192, 160, 98]; 
                        const colorDanger = [165, 42, 42]; 

                        try {
                            doc.setFont('PlayfairDisplay-Bold', 'bold'); 
                        } catch (e) {
                            console.warn("Fuente Playfair Display no disponible para jsPDF, usando Helvetica-Bold como fallback.");
                            doc.setFont('Helvetica', 'bold');
                        }
                        doc.setFontSize(22);
                        doc.setTextColor(colorGoldDark[0], colorGoldDark[1], colorGoldDark[2]);
                        doc.text("Panel Detectivesco", doc.internal.pageSize.getWidth() / 2, pdfTopMargin, { align: 'center' });
                        pdfTopMargin += 12;

                        doc.setFont('Helvetica', 'normal'); 
                        doc.setFontSize(12);
                        doc.setTextColor(colorTextDark[0], colorTextDark[1], colorTextDark[2]);

                        if (eventDateValue) {
                            try {
                                const dateObj = new Date(eventDateValue + 'T00:00:00'); 
                                const formattedDate = dateObj.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
                                doc.setFont('Helvetica', 'bold'); 
                                doc.setFontSize(14);
                                doc.text(`Fecha del Evento:`, pagePadding, pdfTopMargin);
                                doc.setFont('Helvetica', 'normal'); 
                                doc.setFontSize(14);
                                doc.text(formattedDate, pagePadding + 50, pdfTopMargin); 
                                pdfTopMargin += 10;
                            } catch(e) {
                                console.error("Error formateando fecha del evento para PDF:", e);
                                doc.setFont('Helvetica', 'bold');
                                doc.setFontSize(14);
                                doc.text(`Fecha del Evento:`, pagePadding, pdfTopMargin);
                                doc.setFont('Helvetica', 'normal');
                                doc.setFontSize(14);
                                doc.text(eventDateValue, pagePadding + 50, pdfTopMargin);
                                pdfTopMargin += 10;
                            }
                        }


                        doc.setFontSize(12);
                        doc.setFont('Helvetica', 'bold');
                        doc.text(`Número de Sospechosos:`, pagePadding, pdfTopMargin);
                        doc.setFont('Helvetica', 'normal');
                        doc.text(String(currentCharacters.length), pagePadding + 60, pdfTopMargin); 
                        pdfTopMargin += 8;

                        if (hostName) {
                            doc.setFont('Helvetica', 'bold');
                            doc.setFontSize(14);
                            doc.text(`Anfitrión/Host:`, pagePadding, pdfTopMargin);
                            doc.text(hostName.replace("🎩", "").trim(), pagePadding + 40, pdfTopMargin);
                            doc.setFontSize(12);
                            pdfTopMargin += 8;
                        }
                        if (honoreeNames && honoreeNames.length > 0) {
                            doc.setFont('Helvetica', 'bold');
                            doc.setFontSize(14);
                            doc.text(`Homenajeado(s)/a(s):`, pagePadding, pdfTopMargin);
                            doc.text(honoreeNames.map(name => name.replace("🌟", "").trim()).join(', '), pagePadding + 55, pdfTopMargin);
                            doc.setFontSize(12);
                            pdfTopMargin += 8;
                        }
                        doc.setFont('Helvetica', 'normal');
                        pdfTopMargin += 5;


                        let tableBody;
                        let allImagesProcessedSuccessfully = true;

                        const imagePromises = currentCharacters.map(char => {
                            if (char.imageUrl) {
                                return imageToDataUri(char.imageUrl, 40, 52) 
                                    .catch(e => {
                                        console.error(`Error convirtiendo imagen ${char.imageUrl} a Data URI:`, e);
                                        allImagesProcessedSuccessfully = false; 
                                        return null; 
                                    });
                            }
                            return Promise.resolve(null); 
                        });

                        try {
                            const imageDataUris = await Promise.all(imagePromises);
                            const hasRealImages = imageDataUris.some(uri => uri && !uri.includes('data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAA0CAYAAAD9g9woAA')); 
                            if (!hasRealImages && currentCharacters.some(c => c.imageUrl) && !allImagesProcessedSuccessfully) {
                                showToastNotification('Error al cargar imágenes para PDF. Se generará sin ellas en la columna de retratos.', 'error');
                                allImagesProcessedSuccessfully = false; 
                            }

                            tableBody = currentCharacters.map((char, index) => {
                                const rawPlayerName = assignedPlayerMap.get(char.name);
                                const playerNameClean = (rawPlayerName || "S/A").replace("🎩","").replace("🌟","").trim();
                                const interpretationText = getGenderedInterpretationText(char.interpretationLevel, char.gender);
                                const extroversionDisplay = interpretationText.toUpperCase();
                                let nameCellContent = { content: `${char.name}`, styles: { textColor: colorTextDark } };
                                let playerCellStyles = { textColor: colorTextDark };
                                const cleanHostName = hostName ? hostName.replace("🎩","").trim() : ""; 
                                const cleanHonoreeNamesArray = honoreeNames.map(name => name.replace("🌟","").trim());

                                if (playerNameClean === cleanHostName || cleanHonoreeNamesArray.includes(playerNameClean)) {
                                    playerCellStyles.fontStyle = 'bold';
                                }
                                if (playerNameClean === "S/A") { 
                                    playerCellStyles.textColor = colorDanger;
                                    playerCellStyles.fontStyle = 'italic';
                                }
                                let playerCellContent = { content: playerNameClean, styles: playerCellStyles };
                                const extroversionCellContent = { content: extroversionDisplay, styles: {textColor: colorTextDark} };

                                if (allImagesProcessedSuccessfully && imageDataUris[index]) {
                                    const imageCell = { image: imageDataUris[index], width: 15, height: 19.5, styles: {valign: 'middle', halign: 'center'} };
                                    return [ imageCell, nameCellContent, playerCellContent, extroversionCellContent ];
                                } else {
                                    return [ nameCellContent, playerCellContent, extroversionCellContent ];
                                }
                            });

                            const head = allImagesProcessedSuccessfully ?
                                [['Retrato', 'Sospechoso', 'Jugador/a', 'Extroversión']] :
                                [['Sospechoso', 'Jugador/a', 'Extroversión']]; 

                            const columnStyles = allImagesProcessedSuccessfully ?
                                { 
                                    0: { cellWidth: 20, minCellHeight: 22, halign: 'center', valign: 'middle' }, 
                                    1: { cellWidth: 'auto', fontStyle: 'bold' }, 
                                    2: { cellWidth: 'auto', halign: 'left' },    
                                    3: { cellWidth: 40, halign: 'left', fontStyle: 'italic' } 
                                } : { 
                                    0: { cellWidth: 'auto', fontStyle: 'bold' }, 
                                    1: { cellWidth: 'auto', halign: 'left' },    
                                    2: { cellWidth: 40, halign: 'left', fontStyle: 'italic' } 
                                };

                            doc.autoTable({
                                head: head,
                                body: tableBody,
                                startY: pdfTopMargin,
                                theme: 'grid', 
                                headStyles: {
                                    fillColor: colorGoldPale, 
                                    textColor: colorTextDark,   
                                    font: 'Helvetica',      
                                    fontStyle: 'bold',
                                    halign: 'center',
                                    lineWidth: 0.1,
                                    lineColor: colorGoldMedium
                                },
                                alternateRowStyles: { fillColor: [248, 249, 250] }, 
                                styles: { 
                                    font: "Helvetica",
                                    fontSize: 9,
                                    cellPadding: {top: 2.5, right: 3, bottom: 2.5, left: 3},
                                    valign: 'middle',
                                    overflow: 'linebreak', 
                                    lineColor: [222, 222, 222], 
                                    lineWidth: 0.1
                                },
                                columnStyles: columnStyles,
                                didDrawCell: (data) => { 
                                    if (allImagesProcessedSuccessfully && data.column.index === 0 && data.cell.section === 'body' && data.row.raw[0] && typeof data.row.raw[0] === 'object' && data.row.raw[0].image) {
                                        const imgData = data.row.raw[0]; 
                                        const cellWidth = data.cell.width - data.cell.padding('horizontal');
                                        const cellHeight = data.cell.height - data.cell.padding('vertical');
                                        const imgWidth = imgData.width;
                                        const imgHeight = imgData.height;
                                        const x = data.cell.x + (cellWidth - imgWidth) / 2 + data.cell.padding('left');
                                        const y = data.cell.y + (cellHeight - imgHeight) / 2 + data.cell.padding('top');
                                        try {
                                            doc.addImage(imgData.image, 'JPEG', x, y, imgWidth, imgHeight);
                                        } catch (e) {
                                            console.error("Error añadiendo imagen a celda PDF:", e, "Datos de imagen:", imgData.image.substring(0,100));
                                        }
                                    }
                                },
                                margin: { left: pagePadding, right: pagePadding } 
                            });

                            const pageCount = doc.internal.getNumberOfPages();
                            for (let i = 1; i <= pageCount; i++) {
                                doc.setPage(i);
                                doc.setFont('Helvetica', 'italic');
                                doc.setFontSize(8);
                                doc.setTextColor(150, 150, 150); 
                                doc.text(
                                    `Página ${i} de ${pageCount}`,
                                    doc.internal.pageSize.getWidth() / 2,
                                    doc.internal.pageSize.getHeight() - 10, 
                                    { align: 'center' }
                                );
                            }
                        } catch (tableError) {
                             console.error("Error generando tabla para PDF:", tableError);
                             showToastNotification('Error crítico al generar la tabla del PDF.', 'error');
                        }
                        
                        const pdfBlob = doc.output('blob');
                        const pdfFile = new File([pdfBlob], "panel_detectivesco_intriga.pdf", { type: "application/pdf" });
                        let sharedOrPrinted = false;
                        if (navigator.share && navigator.canShare && navigator.canShare({ files: [pdfFile] })) {
                            try {
                                await navigator.share({ files: [pdfFile], title: 'Panel Detectivesco - Intriga', text: 'Aquí está el panel de asignaciones del juego de intriga.' });
                                showToastNotification('Panel compartido exitosamente.', 'success');
                                sharedOrPrinted = true;
                            } catch (error) {
                                console.error('Error al compartir el PDF:', error);
                                if (error.name === 'AbortError') { 
                                    showToastNotification('Compartir cancelado.', 'info');
                                    return; 
                                } else {
                                    showToastNotification('Error al compartir PDF. Se intentará la descarga/guardado.', 'error');
                                }
                            }
                        }
                        
                        if (!sharedOrPrinted) { 
                            showToastNotification('PDF generado. Iniciando descarga...', 'info', 4000);
                            doc.save("panel_detectivesco_intriga.pdf");
                        }
                    });
                }

                initializeFreshSetupState(); 

            }catch(e){console.error("ASIGNADOR ERROR GRAL:",e,e.stack);const b=document.body;if(b){let d=document.getElementById('critical-error');if(!d){d=document.createElement('div');d.id='critical-error';d.style.cssText='display:block;position:fixed;bottom:5px;left:50%;transform:translateX(-50%);z-index:10000;padding:15px;width:90%;max-width:700px;text-align:center;background-color:maroon;color:white;font-size:12px;border-radius:8px;';b.appendChild(d);}d.innerHTML=`Error: ${e.message}. Revisa consola (F12).`;}}
        }
        document.addEventListener('DOMContentLoaded', () => initializeApp(allCharacters_data, packs_data));
        
        // Máquina de escribir
        const textoIntro = "🕵️‍♂️ Archivo Confidencial: Caso Collins";
        let i = 0; 
        const speed = 75;

        function typeWriter() {
          const el = document.getElementById("typewriter-title");
          if (el && i < textoIntro.length) {
            el.textContent += textoIntro.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
          }
        }

        window.addEventListener("load", () => {
          const titleElement = document.getElementById("typewriter-title");
          if (titleElement) {
            titleElement.textContent = ''; // Vaciar el contenido inicial del H1
            i = 0; // Asegurar que el contador de la máquina de escribir se reinicia
            typeWriter(); // Iniciar la animación
          }
        });

        // Validación
        function validarClave() {
          const clave = document.getElementById('clave')?.value?.trim().toLowerCase();
          const intro = document.getElementById('intro-detective');
          const error = document.getElementById('mensaje-error');

          if (clave === 'cluedo') {
            if(intro) {
                intro.style.transition = "opacity 1.5s ease";
                intro.style.opacity = "0";
                setTimeout(() => { intro.style.display = 'none'; }, 1600);
            }
          } else {
            if(error) error.style.display = 'block';
          }
        }