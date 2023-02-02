const htmlNewUserTemplate = (id, date) => {
    return `
    <h2>¡Nuevo usuario Creado!</h2>
    <p>Se ha creado un nuevo usuario</p>
    <ul>
        <li><strong>UUID:</strong> ${id}</li>
        <li><strong>FECHA:</strong> ${date}</li>
    </ul>
    `
};
module.exports = { htmlNewUserTemplate }