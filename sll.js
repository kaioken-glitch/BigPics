const translations = {
    en: { greeting: 'Hello, World!' },
    fr: { greeting: 'Bonjour le monde !' },
    es: { greeting: '¡Hola Mundo!' }
};

// Function to change the language based on the selected option
function changeLanguage() {
    const selectedLanguage = document.getElementById('language').value;
    const translation = translations[selectedLanguage];

    // Update the content based on the selected language
    document.getElementById('greeting').textContent = translation.greeting;

    // Optionally, you can update the lang attribute of the body
    document.body.setAttribute('lang', selectedLanguage);
}
