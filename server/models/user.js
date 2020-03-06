class User {
    constructor(element) {
        this.Id = element.ID;
        this.Name = element.NOMBRE;
        this.LastName = element.APELLIDO;
        this.Document = element.DNI;
    }
}

module.exports = User;