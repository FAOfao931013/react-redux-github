import React from 'react';

import { createDevTools } from 'redux-devtools';

import DockMonitor from 'redux-devtools-dock-monitor';
import LogMonitor from 'redux-devtools-log-monitor';
//另一种Log
// import FilterableLogMonitor from 'redux-devtools-filterable-log-monitor';
// import ChartMonitor from 'redux-devtools-chart-monitor';
// import SliderMonitor from 'redux-slider-monitor';
// import DiffMonitor from 'redux-devtools-diff-monitor';

const DevTools = createDevTools(
    <DockMonitor
        toggleVisibilityKey='ctrl-d'
        changePositionKey='ctrl-q'
        defaultIsVisible={false}
        defaultSize={0.5}>
        <LogMonitor theme='tomorrow' />
    </DockMonitor>
);

export default DevTools;