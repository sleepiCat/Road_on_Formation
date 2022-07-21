class Cookie {
    constructor(flavor) {
        this.flavor = flavor;
        console.log('inside cookie constructor');
    }

    showTitle() {
        console.log(`The flavor of this cookie is ${this.flavor}.`);
    }
}

class FavoriteCookie extends Cookie{
    constructor(input){
        super(input);
        this.otherFlavor = input;
    }
    showTitle() {
        console.log('inside favCookie showTitle');
        super.showTitle();
        console.log(`${this.otherFlavor} is amazing.`);
    }
    // constructor(input){
    //     super();
    //     this.input = input;
    //     console.log(`${this.input} is the value passed to constructor.`)
    // }
}

let myCookie = new FavoriteCookie('chocolate');
myCookie.showTitle();
