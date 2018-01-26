import React from "react";
import PropTypes from 'prop-types'

//@TODO add keyboard binds for input element

const View = (props) => {
  const editing = props.isEditing ? '_edit' : '';
  return (
    <li className={editing} css="_edit: isEditing($view().index)" outerClick="endEdit.bind($data, $view().index)">
      <div className="action-dropdown-menu-item-edit" if="$view().editable">
        <input
          className="admin__control-text"
        type="text"/>
    <button className="action-submit" type="button" attr="title: $t('Save all changes')" click="updateAndSave.bind($data, $view().index)">
          <span translate="'Submit'" />
        </button>
    <div className="action-dropdown-menu-item-actions">
          <button className="action-delete" type="button" attr="title: $t('Delete bookmark')" click="removeView.bind($data, $view().index)">
            <span translate="'Delete'" />
          </button>
        </div>
      </div>

      <div className="action-dropdown-menu-item">
        <a href="" className="action-dropdown-menu-link" text="$view().label" click="applyView.bind($data, $view().index)" closeCollapsible />

        <div className="action-dropdown-menu-item-actions" if="$view().editable">
          <button className="action-edit" type="button" attr="title: $t('Edit bookmark')" click="editView.bind($data, $view().index)">
            <span translate="'Edit'" />
          </button>
        </div>
      </div>
    </li>
  );
}

//@TODO ADD KEYBOARD BINDING SUPPORT SAME LIKE M2

class Bookmarks extends React.Component {

  state = {
    activeView: { label: 'Default view' }
  }

  endEdit = () => {

  }

  applyCustom = () => {

  }

  isEditing = () => {

  }

  render() {

    return (
      <div className="admin__action-dropdown-wrap admin__data-grid-action-bookmarks" collapsible>
        <button className="admin__action-dropdown" type="button" toggleCollapsible>
          <span className="admin__action-dropdown-text">{this.state.activeView.label}</span>
        </button>
        <ul className="admin__action-dropdown-menu">
          {this.props.viewsArray.map(view => {
            return (<View key={view.index} isEditing={this.isEditing()} />)
          })}

          <li visible="hasChanges" outerClick="hideCustom.bind($data)"
            css="
            _edit: customVisible,
                'action-dropdown-menu-action action-dropdown-menu-item-last': !customVisible">
            <a href="" visible="!customVisible" click="showCustom" translate="'Save View As...'" />
          <div className="action-dropdown-menu-item-edit" visible="customVisible">
            <input className="admin__control-text" type="text"
              data-bind="
              value: customLabel,
                        autoselect,
                        hasFocus: isCustomVisible(),
                        "/>
              <div className="action-dropdown-menu-item-actions">
              <button className="action-submit" type="button" onClick={this.applyCustom} title='Save all changes'>
                <span>Submit</span>
              </button>
            </div>
          </div>
        </li>
    </ul>
  </div >
  );
  }
}

Bookmarks.propTypes = {
  viewsArray: PropTypes.array
}

export default Bookmarks;