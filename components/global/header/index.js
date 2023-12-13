// Import dependencies here
import { Component } from "react-bootstrap";
// Define reusable components

// Include image assets if necessary

// Fetch or import data required for the page

// Apply styles or link external stylesheets
import style from "./header.module.scss";

// Define the main functional component
export const Header = () => {
     return (
          <>
               {/* Page content goes here */}
               <header className={`${style.header} header_gl`} id="header">
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-12">
                                   <div className="p-5 bg-primary-normal"></div>
                              </div>
                         </div>
                    </div>
               </header>
          </>
     );
};

// Export the component as default
export default Header;
