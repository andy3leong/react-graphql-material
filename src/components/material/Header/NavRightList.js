import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import { withRouter } from 'react-router-dom';
import avatar from 'assets/images/g1.jpg';
import { CookieStorage } from 'cookie-storage';

const ImgIconButtonStyle = {
  width: '60px',
  height: '60px',
};

const listItemStyle = {
  paddingLeft: '50px', // 36 + 16, algin with sub list
};

class NavRightList extends React.Component {
  handleChange = (event, value) => {
    this.props.history.push(value);
  };

  handleLogout = e => {
    const cookieStorage = new CookieStorage({
      path: '/',
    });
    cookieStorage.removeItem('p2p-auth');
    this.props.history.push('/login');
  };

  render() {
    return (
      <ul className="list-unstyled float-right">
        <li style={{ lineHeight: '60px' }}>{this.props.currentUser.email}</li>
        <li style={{ marginRight: '10px' }}>
          <IconMenu
            iconButtonElement={
              <IconButton style={ImgIconButtonStyle}>
                <img src={avatar} alt="" className="rounded-circle img30_30" />
              </IconButton>
            }
            onChange={this.handleChange}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
            menuStyle={{ minWidth: '150px' }}
          >
            <MenuItem
              value="/app/dashboard"
              primaryText="Dashboard"
              style={{ fontSize: '14px', lineHeight: '48px' }}
              innerDivStyle={listItemStyle}
              leftIcon={<i className="material-icons">home</i>}
            />
            <MenuItem
              value="/app/page/about"
              primaryText="About"
              innerDivStyle={listItemStyle}
              style={{ fontSize: '14px', lineHeight: '48px' }}
              leftIcon={<i className="material-icons">person_outline</i>}
            />
            <MenuItem
              onClick={this.handleLogout}
              primaryText="Log Out"
              innerDivStyle={listItemStyle}
              style={{ fontSize: '14px', lineHeight: '48px' }}
              leftIcon={<i className="material-icons">forward</i>}
            />
          </IconMenu>
        </li>
      </ul>
    );
  }
}

export default withRouter(NavRightList);
