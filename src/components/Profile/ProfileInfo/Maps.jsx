import React from "react";
import ReactDOM from "react-dom";
import { YMaps, Map } from "react-yandex-maps";

const mapState = {
  center: [55.76, 37.64],
  zoom: 10,
  controls: []
};

class Maps extends React.Component {
  state = {
    address: [],
    route: null
  };

  constructor(props) {
    super(props);
    this.addressInput = React.createRef();
  }

  onYmapsLoad = ymaps => {
    this.ymaps = ymaps;
    new this.ymaps.SuggestView(this.addressInput.current, {
      provider: {
        suggest: (request, options) => this.ymaps.suggest(request)
      }
    });
  };

  addAddress = () => {
    const address = this.addressInput.current.value;
    if (address) {
      this.addressInput.current.value = "";
      this.updateRoute([...this.state.address, address]);
    }
  };

  delAddress = e => {
    const index = +e.target.dataset.index;
    this.updateRoute(this.state.address.filter((n, i) => i !== index));
  };

  updateRoute = address => {
    if (this.state.route) {
      this.map.geoObjects.remove(this.state.route);
    }
    this.setState(
      {
        address,
        route: null
      },
      () => {
        const address = this.state.address;
        if (address.length > 1) {
          this.ymaps
            .route(address, {
              mapStateAutoApply: true
            })
            .then(
              route => {
                this.map.geoObjects.add(route);
                this.setState({ route });
              },
              error => alert(error.message)
            );
        }
      }
    );
  };

  render() {
    return (
      <div>
        <input id="suggest" ref={this.addressInput} placeholder="адрес..." />
        <button onClick={this.addAddress}>add</button>
        <YMaps query={{ load: "package.full" }}>
          <Map
            state={mapState}
            onLoad={this.onYmapsLoad}
            instanceRef={map => (this.map = map)}
          />
        </YMaps>
        <ul>
          {this.state.address.map((n, i) => (
            <li>
              <span>{n}</span>
              <button onClick={this.delAddress} data-index={i}>
                del
              </button>
			  </li>
          ))}
        </ul>
      </div>
    );
  }
}
 
 
export default Maps;