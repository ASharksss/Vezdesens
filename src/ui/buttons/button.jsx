import React from 'react';
import './button.css'

const Button = ({children, classname, icon}) => {
  return (
    <div className='btn-connect '>
      <button className={classname}>
        {
          classname === 'stroke' ? <p>{children}</p> :
            classname === 'activeAd' ? <p>{children}</p> :
              classname === 'show_phone' ? <p>{children}</p> :
                classname === 'like_ads' ? <p>{children}</p> :
                  classname === 'phone' || classname === 'message'
                  || classname === 'edit' || classname === 'trashBlack'
                  || classname === 'phoneTall' ?
                    <img src={icon} alt="иконка"/> : 'нишо'
        }
      </button>
    </div>
  );
};

export default Button;