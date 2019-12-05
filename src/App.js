import React from 'react';
import './App.css';
import logo from './logo.svg';

function App() {

  let a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
  let b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

  function inWords (num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    let n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (parseInt(n[1] )!== 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (parseInt(n[2] )!== 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (parseInt(n[3] )!== 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (parseInt(n[4]) !== 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (parseInt(n[5]) !== 0) ? ((str !== '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]])  : '';
    return str;
  }


  const [number, setNumber] = React.useState("");

  const handleSubmit = (evt) => {

    evt.preventDefault();

    const  integerPart = number.split(".")[0];
    console.log('integerPart='+integerPart);
    var  integerPartResult = inWords(integerPart) ;

    const  centsPart = number.split(".")[1];
    var  centsPartResult;


    if(parseInt( integerPart) === 0) {
      centsPartResult = inWords(centsPart)
      alert(`Result =  ${centsPartResult}cents`)
      } else if(typeof centsPart === 'undefined') {
      alert(`Result = ${integerPartResult}dollars`)
     }  else {
      centsPartResult = inWords(centsPart)
      alert(`Result = ${integerPartResult}dollars and ${centsPartResult}cents`)
    }

  }


  return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={handleSubmit}>
            <h1>Hello</h1>
            <p>Pleasae Enter your number:</p>
            <input
                  type="number"
                  min="0"
                  max="999999999.99"
                  step="0.01"
                  value={number}
                  onChange={e => setNumber(e.target.value)}
              />

            <input type="submit" value="Submit" />
          </form>

        </header>
      </div>


  );
}

export default App;
