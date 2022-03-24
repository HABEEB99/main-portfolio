import React from 'react';
import NavLogo from '../nav-logo/NavLogo';
import SocialMedia from '../social-media/SocialMedia';

const Container = (Component, idName) =>
  function HOC() {
    return (
      <div
        id={idName}
        className="w-screen h-[90vh] px-6 md:px-12 lg:px-40 items-center justify-center flex"
      >
        <Component />

        <SocialMedia />

        <NavLogo active={idName} />
      </div>
    );
  };

export default Container;
