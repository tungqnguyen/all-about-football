import React from 'react';
import styles from './Header.module.css'
import NavigationItem from './NavigationItem';
import logo from '../assets/logo/logo.png';


const header = (props) => (
  <header className = {styles.Header}>
    <div> <img src={logo} alt="" style={{height:50, width:100}}/> </div>
    <nav>
      <ul className= {styles.NavigationItems}>
        <NavigationItem to= "/" > Matches </NavigationItem>
        <NavigationItem to= "/tables" > Tables </NavigationItem>
        <NavigationItem to= "/fixtures" > Fixtures </NavigationItem>
        <NavigationItem to= "/archives" > Archives </NavigationItem>
      </ul>
    </nav>
  </header>
)
export default header

// import React from 'react';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem } from 'reactstrap';
// import NavigationItem from './NavigationItem';
// import styles from './Header.module.css'



// export default class Example extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false
//     };
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }
//   render() {
//     return (
//       <div>
//         <Navbar color="aqua" light expand="md" className={styles.header}>
//           <NavbarBrand href="/">reactstrap</NavbarBrand>
//           <NavbarToggler onClick={this.toggle} />
//           <Collapse isOpen={this.state.isOpen} navbar>
//             <Nav className="ml-auto" navbar>
//               <NavItem>
//                 <NavigationItem to= "/" > Matches </NavigationItem>
//               </NavItem>
//               <NavItem>
//                 <NavigationItem to= "/tables" > Tables </NavigationItem>
//               </NavItem>
//               <NavItem>
//                 <NavigationItem to= "/fixtures" > Fixtures </NavigationItem>
//               </NavItem>
//               <NavItem>
//                 <NavigationItem to= "/archives" > Archives </NavigationItem>
//               </NavItem>
//             </Nav>
//           </Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }