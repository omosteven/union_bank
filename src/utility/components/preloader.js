/* 

Date : 11th of Sept 2020

Naming Convention : Pascal for Constructors & Functions while Camel for other tokens

Description : This file is for handling the whole web app preloader

Files Attached : /

File Type : ReactJs

Written By : Steven Omole-Adebomi

Follow me on

LinkedIn : https://linkedin.com/in/steven-omole

Github : https://github.com/omosteven

Twitter : @OmoleSteven

*/

/* Desktop Screen */

import React, { useState } from 'react';

import '../styles/preloader.css';

const Preloader = () => {
  const [showPreloader, setPreloader] = useState(true);

  const remove = () => {
    setPreloader(false);
  };

  setTimeout(remove, 5000);

  return (
    <div>
      
      {showPreloader && (
        <div className="pre fade--pre">
          <div>
            <div className="martLn__pre preloader--animation"> MartLn </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Preloader;
