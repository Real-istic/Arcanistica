class Contact extends person {
phone;
    
    constructor(firstname, lastname, phone){
        super(firstname, lastname);
        this.phone = phone;
    }

    call() {
        window.location.href = 'tel:' + this.phone;
    }

    printFullName() {
        console.log(this.firstname + ` ` + this.lastname)
    }
}