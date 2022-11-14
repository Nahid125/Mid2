class Message {
    constructor(author, time, text) {
      this.muellif = muellif;
      this.tarix = tarix;
      this.text = text;
    }
    toString() {
        console.log(`${this.tarix} ${this.muellif}: ${this.text}`)
      }
    }
    
    class Messenger {
      constructor() {
        this.history = [];
      }
    
      gettime() {
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`;
      }
    
      send(author, text) {
        this.history.push(new Message(author, this.gettime(), text));
      }
    
      show_history() {  
        this.history.forEach(el=> el.toString())
      }
    }
let messenger = new Messenger()
messenger.send('Adil', 'ilk mesaj')
messenger.send('Məryəm', 'İkinci mesaj')
messenger.send("Fuad","Salam")
messenger.show_history()