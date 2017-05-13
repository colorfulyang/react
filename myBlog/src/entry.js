import React from 'react';
import { render } from 'react-dom';
import Button from './component/Button.js';
require('./css/app.css');

render(
    <div>
        <Button pattern="success" name="success"/>
    </div>,
    document.getElementById('app')
);