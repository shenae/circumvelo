import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
<nav class="navbar is-warning" role="navigation" aria-label="main navigation">
  <div class="navbar-brand" id="has-text-purple">
    <i class="fas fa-bicycle fa-3x"></i>
    <h1 class="title is-1" id="has-text-purple">CircumVelo</h1>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          About
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Contact
          </a>
      </div>
   
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
      </div>
    </div>

  </nav>
);
  }
}

export default NavBar;