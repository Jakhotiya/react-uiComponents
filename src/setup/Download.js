import React from 'react';
import downloader from './downloader';
import {storeProducts} from '../storage/data';


const DownloadStep = props => (
  <p>Downloaded {props.label}</p>
);

class Download extends React.Component {
  state = {
    downloadStarted: false,
    items: {
      attributes: false,
      attributeSets: false,
      tax: false,
      store: false,
      categories: false,
      product: false
    }
  }

  download = () => {
    this.setState({downloadStarted: true});
    downloader.getAttributes()
      .then(res => {
        this.setState({items: {...this.state.items, attributes: true}});
        return downloader.getAttributeSets()
      })
      .then(res => {
        this.setState({items: {...this.state.items, attributeSets: true}});
        return downloader.getTaxRules()
      })
      .then(res => {
        this.setState({items: {...this.state.items, tax: true}});
        return downloader.getCategories()
      })
      .then(res => {
        this.setState({items: {...this.state.items, store: true}});
        return downloader.getStores()
      })
      .then(res => {
        this.setState({items: {...this.state.items, categories: true}});
        return downloader.getProducts()
      })
      .then(res => {
        console.log(res.data.items);
        storeProducts(res.data.items);
        this.setState({items: {...this.state.items, product: true}});
        return;
      })

  }

  getSteps() {
    const steps = [];
    for (let key in this.state.items) {
      if (this.state.items[key]) {
        steps.push((<DownloadStep key={key} label={key}/>));
      }
    }
    return steps;
  }

  render() {
    const show = this.state.downloadStarted ? 'hide' : ''
    return (
      <div>
        <h2>Yay! Everything looks perfect.</h2>
        <p>
          Click the download button to download your catalog data. It may take a while
          depending upon your catalog size. Once dowloaded you will be able to manage
          your catalog even when you don't have a reliable internet connection.
        </p>
        <button type="button" className={"btn btn-prime " + show} onClick={this.download}>Download</button>
        {this.getSteps()}
      </div>
    );
  }
}

export default Download;