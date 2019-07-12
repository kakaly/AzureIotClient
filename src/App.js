import React from 'react';
import './App.css';

function App() {
  return (
    <body>
    <div class="container">
    <div class="row">
    <nav>
    <div class="nav-wrapper teal lighten-2">
      <div class="brand-logo center">Pharos TrustCenter Management</div>
    </div>
    </nav>
    <table class="highlight">
    <thead>
      <tr class="grey lighten-2">
          <th>Device</th>
          <th>Status</th>
          <th>FQDN</th>
          <th>Command</th>
          <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>PCOIP_DEVICE_01</td>
        <td>InSession</td>
        <td>10.0.1.2</td>
        <div class="input-field col s6">
          <input type="text" id="autocomplete-input1" class="autocomplete"/>
          <label for="autocomplete-input1">Command</label>
        </div>
        <td>
          <button class="btn waves-effect waves-light teal lighten-2" type="submit" name="action">Submit
            <i class="material-icons right">send</i>
          </button>
        </td>
      </tr>
      <tr>
        <td>PCOIP_DEVICE_02</td>
        <td>InSession</td>
        <td>10.0.1.4</td>
        <div class="input-field col s6">
          <input type="text" id="autocomplete-input2" class="autocomplete"/>
          <label for="autocomplete-input2">Command</label>
        </div>
        <td>
          <button class="btn waves-effect waves-light teal lighten-2" type="submit" name="action">Submit
            <i class="material-icons right">send</i>
          </button>
        </td>
      </tr>
      <tr>
        <td>PCOIP_DEVICE_03</td>
        <td>PreSession</td>
        <td>10.0.1.3</td>
        <div class="input-field col s6">
          <input type="text" id="autocomplete-input3" class="autocomplete"/>
          <label for="autocomplete-input3">Command</label>
        </div>
        <td>
          <button class="btn waves-effect waves-light teal lighten-2" type="submit" name="action">Submit
            <i class="material-icons right">send</i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  </div>
  </div>
  </body>
  );
}

export default App;
