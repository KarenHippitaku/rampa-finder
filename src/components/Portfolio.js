import React, { Component, Fragment } from 'react';
import Chart from './Charts';
import Search from './Search';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
          startups: [],
          founders: [],
          updates: [],
          // chartData: {}
      }
      this.viewStartups= this.viewStartups.bind(this);
  }

  viewStartups(){
      fetch('http://45.232.252.23/laboratoria/public/_/items/startups',
      { method: 'GET',
          headers: {
          Authorization: 'Bearer laboratoriaToken2019',
          'Content-type': 'application/json; '
      }
      }
      )
      .then(response =>  response.json ())
      .then(data => {this.setState({startups: data.data})});
  }

  componentWillMount() {
    this.viewStartups();

      fetch('http://45.232.252.23/laboratoria/public/_/items/founders',
          {
              method: 'GET',
              headers: {
                  Authorization: 'Bearer laboratoriaToken2019',
                  'Content-type': 'application/json; '
              }
          }
      )
          .then(response => response.json())
          .then(data => { this.setState({ founders: data.data }) });

        fetch('http://45.232.252.23/laboratoria/public/_/items/portfolio_updates',
        {
            method: 'GET',
            headers: {
                Authorization: 'Bearer laboratoriaToken2019',
                'Content-type': 'application/json; '
            }
        }
    )
        .then(response => response.json())
        .then(data => {this.setState({ updates: data.data }) });


    }


    render() {
      const { startups } = this.state;
      const { founders } = this.state;
      const { updates } = this.state;
        return (
            <Fragment>
                <div className="contentStartups">
                {
                  this.state.startups.map((startup, index) => {
                      return (
                          <div className="card" key={index}>
                              <div className="card-body">
                                  <h5 className="card-title">{startup.name}</h5>
                                  <p className="card-text">{startup.one_liner}</p>
                                  <a href={startup.website} target="_blank"><p className="card-text">{startup.
                                  website}</p></a>
                                  <p className="card-text">{startup.startup_status}</p>

                                  <a
                                      href="#"
                                      rel="noopener noreferrer"
                                      target="_blank"
                                  >
                                      Ir al proyecto
                       </a>
                                  {
                                      updates.map((update, index) => {
                                          if (update.startup === startup.id) {
                                              // console.log(update.mes)
                                              return <p key={index}>{update.crecimiento} {update.mes}</p>
                                          }
                                      })
                                  }
                                  <Chart

                                  title="Crecimiento"
                                  legendPosition="bottom"
                                  />
                                  <a href="#" className="btn btn-primary">Go somewhere</a>
                              </div>
                          </div>
                      )
                  })
              }

                </div>
            </Fragment>

        )
    }
}

export default Portfolio;
