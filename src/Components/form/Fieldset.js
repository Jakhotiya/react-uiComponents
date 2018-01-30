import React from 'react';
import PropTypes from 'prop-types';

//@magentoFile : Magento_Ui/view/base/web/templates/form/fieldset.html
class Fieldset extends React.Component {

  state = {
    open: false
  }

  toggleCollapsible = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    const open = this.state.open ? '_show' : '_hide';

    return (
      <div className="fieldset-wrapper admin__collapsible-block-wrapper">
        <div className="fieldset-wrapper-title"
          onClick={this.toggleCollapsible}>

          <strong className="admin__collapsible-title">
            <span>{this.props.label}</span>
            <span className="admin__page-nav-item-messages">
              <span className="admin__page-nav-item-message _changed">
                <span className="admin__page-nav-item-message-icon"></span>
                <span className="admin__page-nav-item-message-tooltip">
                  Changes have been made to this section that have not been saved.
            </span>
              </span>
            </span>

          </strong>
        </div>

        <div className={"admin__fieldset-wrapper-content admin__collapsible-content " + open}>
          <p>this is form component</p>
          <fieldset
            if="opened() || _wasOpened || initializeFieldsetDataByDefault"
            className="admin__fieldset"
            each="data: elems, as: 'element'" render="" />
        </div>
      </div >
    );
  }

}

Fieldset.propTypes = {
  label: PropTypes.string.isRequired
}

export default Fieldset;
