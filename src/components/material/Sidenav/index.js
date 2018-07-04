/* eslint-disable no-script-url, no-undef */
import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link, withRouter } from 'react-router-dom';
import APPCONFIG from 'constants/config';

import { toggleCollapsedNav } from 'redux/actions/settings';
import SidenavContent from './SidenavContent';
import logo from 'assets/logo.png';

class Sidebar extends React.Component {
  componentDidMount() {
    // AutoCloseMobileNav
    const { history } = this.props;
    const $body = $('#body');

    if (APPCONFIG.AutoCloseMobileNav) {
      history.listen(location => {
        setTimeout(() => {
          $body.removeClass('sidebar-mobile-open');
        }, 0);
      });
    }
  }

  onToggleCollapsedNav = e => {
    const val = !this.props.navCollapsed;
    const { handleToggleCollapsedNav } = this.props;
    handleToggleCollapsedNav(val);
  };

  render() {
    const { navCollapsed, colorOption } = this.props;
    let toggleIcon = null;
    if (navCollapsed) {
      toggleIcon = <i className="material-icons">radio_button_unchecked</i>;
    } else {
      toggleIcon = <i className="material-icons">radio_button_checked</i>;
    }

    return (
      <nav
        className={classnames('app-sidebar', {
          'bg-color-light':
            ['31', '32', '33', '34', '35', '36'].indexOf(colorOption) >= 0,
          'bg-color-dark':
            ['31', '32', '33', '34', '35', '36'].indexOf(colorOption) < 0,
        })}
      >
        <section
          className={classnames('sidebar-header', {
            'bg-color-dark': ['11', '31'].indexOf(colorOption) >= 0,
            'bg-color-light': colorOption === '21',
            'bg-color-primary': ['12', '22', '32'].indexOf(colorOption) >= 0,
            'bg-color-success': ['13', '23', '33'].indexOf(colorOption) >= 0,
            'bg-color-info': ['14', '24', '34'].indexOf(colorOption) >= 0,
            'bg-color-warning': ['15', '25', '35'].indexOf(colorOption) >= 0,
            'bg-color-danger': ['16', '26', '36'].indexOf(colorOption) >= 0,
          })}
        >
          <Link to="/" className="brand">
            <img src={logo} alt="Port2Port" height="40px" />
          </Link>
          <a
            href="javascript:;"
            className="collapsednav-toggler"
            onClick={this.onToggleCollapsedNav}
          >
            {toggleIcon}
          </a>
        </section>

        <section className="sidebar-content">
          <SidenavContent />
        </section>

        <section className="sidebar-footer">
          <ul className="nav">
            <li>
              <a target="_blank" href={APPCONFIG.productLink}>
                <i className="nav-icon material-icons">help</i>
                <span className="nav-text">
                  <span>Help</span> & <span>Support</span>
                </span>
              </a>
            </li>
          </ul>
        </section>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  navCollapsed: state.settings.navCollapsed,
  colorOption: state.settings.colorOption,
});

const mapDispatchToProps = dispatch => ({
  handleToggleCollapsedNav: isNavCollapsed => {
    dispatch(toggleCollapsedNav(isNavCollapsed));
  },
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Sidebar),
);
