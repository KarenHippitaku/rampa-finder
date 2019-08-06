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

    // componentWillMount(){
      //   this.getChartData();
      // }
      //
      // getChartData() {
        //   //Ajax calls here
        //   this.setState({
          //     chartData: {
            //       // updates.crecimiento
            //       // updates.ventas_mes
            //       labels: ['Myrna', 'Liz', 'Lexy', 'Karen', 'Chío'],
            //       datasets: [{
              //         label: 'Sleep time',
              //         data: [2, 4, 2, 0, 7],
              //         backgroundColor: ['turquoise', 'palegreen', 'lightcoral', 'orange', 'pink'],
              //       }]
              //     }
              //   })
              // }
              // startupName = (update, startup) => {
                //   console.log('fuera if', startup.id)
                //
                //   if(update.startup === startup.id) {
                  //     let startup =
                  //     console.log(startup, 'dentro de if')
                  //     return startup.name;
                  //   }
                  // }
                  //
                  // keys(id).forEach(
                    //   console.log(startup.id);
                    // )
    render() {
      const { startups } = this.state;
      const { founders } = this.state;
      const { updates } = this.state;
        return (
            <Fragment>
                <div className="contentStartups">
                    <p>Componente para mostrar solo las startups que ya tengan en su portafolio</p>
                    {startups.map((startup, index) => {
                      if (startup.startup_status  === 'Seguimiento') {

                        return (
                          <div className="card" key={index}>
                            <img
                            className="imgProjects card-img-top"
                            src={startup.logo}
                            alt={startup.name}
                            title={startup.name}
                            />
                          <div className="card-body">
                            <h5 className="card-title">{startup.name}</h5>
                            <p className="card-text">{startup.one_liner}</p>
                            <p className="card-text">{startup.website}</p>
                            <p className="card-text">{startup.startup_status}</p>
                            <a
                            href={startup.linkProject}
                            rel="noopener noreferrer"
                            target="_blank"
                            >
                            Ir al proyecto
                            </a>
                            <a
                            href={startup.linkReadme}
                            rel="noopener noreferrer"
                            target="_blank"
                            >
                            Ver más detalles del proyecto
                            </a>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                          </div>
                        </div>
                      )
                    }
                  })}

                    {updates.map((update, index) => {
                   if (update.crecimiento !== 'null') {
                       return (
                           <div className="card" key={index}>
                               <div className="card-body">
                                  <p className="card-text">{update.startup}</p>
                                   <h5 className="card-title">{update.crecimiento}</h5>
                                   <p className="card-text">{update.mes}</p>
                                   <p className="card-text">{update.fecha}</p>
                                   <a
                                       href={update.fecha}
                                       rel="noopener noreferrer"
                                       target="_blank"
                                   >
                                   </a>
                                   <a
                                       href={update.mes}
                                       rel="noopener noreferrer"
                                       target="_blank"
                                   >
                                       Ver más detalles del proyecto
                                  </a>
                                   <a href="#" className="btn btn-primary">Go somewhere</a>
                               </div>
                               <Chart
                               chartData = "1"
                               labels = "2"
                               data = "3"
                               title="Crecimiento"
                               legendPosition="bottom"
                               />
                           </div>
                       )
                   }
               })}

                </div>
            </Fragment>

        )
    }
}

export default Portfolio;
