class Message {
  constructor(author, time, text) {
    this.author = author;
    this.time = time;
    this.text = text;
  }
  toString() {
    console.log(`${this.time} ${this.author}: ${this.text}`)
  }
}
class Messenger {
  constructor() {
    this.history = [];
  }
  send(author, text) {
    this.history.push(new Message(author, this.gettime(), text));
  }
  gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
  }
  show_history() {  
    this.history.forEach(el=> el.toString())
  }
}
let messenger = new Messenger()
messenger.send('Adil', 'ilk mesaj')
messenger.send('Məryəm', 'İkinci mesaj')
messenger.send("Kenan","Salam")
messenger.show_history()