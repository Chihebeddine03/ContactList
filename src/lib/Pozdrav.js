function Pozdrav() {
  let pozdrav = "Dobré ráno!";
  let cas = new Date().getHours();
  switch (cas) {
    case 0:
    case 1:
    case 2:
      pozdrav = "Dobrou noc!";
      break;
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
      pozdrav = "Dobré ráno!";
      break;
    case 9:
    case 10:
    case 11:
      pozdrav = "Dobré dopoledne!";
      break;
    case 12:
      pozdrav = "Dobré poledne a dobrou chuť, pokud právě obědváte!";
      break;
    case 13:
    case 14:
    case 15:
    case 16:
      pozdrav = "Dobré odpoledne!";
      break;
    case 17:
    case 18:
    case 19:
      pozdrav = "Dobrý podvečer!";
      break;
    case 20:
    case 21:
    case 22:
      pozdrav = "Dobrý večer!";
      break;
    case 23:
      pozdrav = "Dobrou noc!";
      break;
    default:
      pozdrav = "Dobrý den!";
  }
  return pozdrav;
}
export default Pozdrav;
