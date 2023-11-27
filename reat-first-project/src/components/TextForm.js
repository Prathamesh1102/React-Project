import React from 'react';

export default function TextForm(props) {
  return (
    <div>
        <form>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className='form-control' id="mybox" cols="30" rows="8"></textarea>
        </div>
        <button className='btn btn-primary'>Convert to UpperCase</button>
    </form>
    </div>
  );
}
