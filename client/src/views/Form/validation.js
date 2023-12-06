const Validation = (input) => {
    const errors = {};
    const nameRegex = /^[a-zA-Z0-9\_\-\s]{4,30}$/;
    const platformsRegex = /^[a-zA-Z0-9\s]+(?:\s*,\s*[a-zA-Z0-9\s]+)*$/;
    // Validacion de nombre
    if (!input.name) {
        errors.name = "Please enter a name";
    } else if (input.name.length >= 40) {
        errors.name = "Name should be less than 40 characters";
    } else if (!nameRegex.test(input.name)) {
        errors.name = "Name can only contain letters, numbers, spaces, underscores, and hyphens";
    }

    // Validacion de descripción
    if (!input.description) {
        errors.description = "Please enter a description";
    }

    // Validacion de plataformas
    if (!input.platforms) {
        errors.platforms = "Please specify at least one platform";
    } else if (!platformsRegex.test(input.platforms)) {
        errors.platforms = "Each platform must be separated by a comma";
    }

    // Validacion de géneros
    if (!input.genres || input.genres.length === 0) {
        errors.genres = "Please select at least one genre";
    }

    // Validacion de fecha de lanzamiento
    if (!input.released) {
        errors.released = "Por favor, ingresa una fecha de lanzamiento";
    }

    // Validacion de rating
    if (!input.rating) {
        errors.rating = "Please enter a rating";
    } else {
        const numericRating = parseFloat(input.rating);
        if (isNaN(numericRating) || numericRating < 1 || numericRating > 5) {
            errors.rating = "Rating must be a number between 1 and 5";
        }
    }

    return errors;
};
export default Validation;
