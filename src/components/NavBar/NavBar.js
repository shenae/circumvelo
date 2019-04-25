import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
<nav class="navbar is-warning" role="navigation" aria-label="main navigation">
  <div class="navbar-brand has-text-centered" id="has-text-purple">
    <i class="fas fa-bicycle fa-3x"></i>
    <h1 class="title is-1" id="has-text-purple">CircumVelo</h1>
    <i class="fas fa-bicycle fa-3x"></i>
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