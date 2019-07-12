import React, {Component} from 'react';
import iothub from 'azure-iothub';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.connectionString = ''
    this.registry = ''
  }

  componentWillMount() {
    this.connectionString = 'HostName=PharosTrustCenterHub.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=yfeQ47idW0OODIhf0ewIGJ/gPTfYYyVRohR1hnMfCi4=';
    this.registry = iothub.Registry.fromConnectionString(this.connectionString);

  }

  queryTwin = async () => {
    this.registry.getTwin('pcoip_device01', function(err, twin){
        if (err) {
            console.error(err.constructor.name + ': ' + err.message);
        } else {
            console.log(twin.properties)
            return [twin.deviceId,
                    twin.properties.reported.insession,
                    twin.properties.reported.fqdn]
        }
    });
  };

  render() {
    var device = this.queryTwin()
    console.log(device)
    return (
      <body>
      <div className="container">
      <div className="row">
      <nav>
      <div className="nav-wrapper teal lighten-2">
        <div className="brand-logo center">Pharos TrustCenter Management</div>
      </div>
      </nav>
      <table className="highlight">
      <thead>
        <tr className="grey lighten-2">
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
          <div className="input-field col s6">
            <input type="text" id="autocomplete-input1" className="autocomplete"/>
            <label for="autocomplete-input1">Command</label>
          </div>
          <td>
            <button className="btn waves-effect waves-light teal lighten-2" type="submit" name="action">Submit
              <i className="material-icons right">send</i>
            </button>
          </td>
        </tr>
        <tr>
          <td>PCOIP_DEVICE_02</td>
          <td>InSession</td>
          <td>10.0.1.4</td>
          <div className="input-field col s6">
            <input type="text" id="autocomplete-input2" className="autocomplete"/>
            <label for="autocomplete-input2">Command</label>
          </div>
          <td>
            <button className="btn waves-effect waves-light teal lighten-2" type="submit" name="action">Submit
              <i className="material-icons right">send</i>
            </button>
          </td>
        </tr>
        <tr>
          <td>PCOIP_DEVICE_03</td>
          <td>PreSession</td>
          <td>10.0.1.3</td>
          <div className="input-field col s6">
            <input type="text" id="autocomplete-input3" className="autocomplete"/>
            <label for="autocomplete-input3">Command</label>
          </div>
          <td>
            <button className="btn waves-effect waves-light teal lighten-2" type="submit" name="action">Submit
              <i className="material-icons right">send</i>
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
}

export default App;
