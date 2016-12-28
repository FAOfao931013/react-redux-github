import React from 'react';
import { createDevTools } from 'redux-devtools';
import DockMonitor from 'redux-devtools-dock-monitor';
import LogMonitor from 'redux-devtools-log-monitor';

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