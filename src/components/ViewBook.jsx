import React from 'react'
import Navbar from './Navbar'

const ViewBook = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
        <h2 align="center"><u><i>VIEW BOOK</i></u></h2><br></br>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                <table class="table table-dark table-striped">
                <thead>
    <tr>
      <th scope="col">SL.NO</th>
      <th scope="col">BOOK TITLE</th>
      <th scope="col">AUTHOR</th>
      <th scope="col">PUBLISHED YEAR</th>
      <th scope="col">PRICE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>WASTE LAND</td>
      <td>ELIOT</td>
      <td>1996</td>
      <td>Rs 350</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>TIME MACHINE</td>
      <td>WELLS</td>
      <td>1997</td>
      <td>Rs 550</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>WASTE LAND</td>
      <td>ELIOT</td>
      <td>1996</td>
      <td>Rs 350</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>THE TEMPEST</td>
      <td>SHAKESPHERE</td>
      <td>1818</td>
      <td>Rs 350</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>ROMEO AND JULIET</td>
      <td>SHAKESPHERE</td>
      <td>1896</td>
      <td>Rs 350</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>UTOPIA</td>
      <td>THOMAS</td>
      <td>1999</td>
      <td>Rs 450</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>POLITICS</td>
      <td>ARIS</td>
      <td>1996</td>
      <td>Rs 750</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>CHERRY ORCHARD</td>
      <td>ANCE</td>
      <td>1896</td>
      <td>Rs 450</td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td>DIVINE COMEDY</td>
      <td>ANCY</td>
      <td>1996</td>
      <td>Rs 650</td>
    </tr>

  </tbody>
                </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewBook