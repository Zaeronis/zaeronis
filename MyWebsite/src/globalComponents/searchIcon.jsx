import React from 'react';

export default function NeonSearchIcon() {
    return (
        <svg
            xmlns="http://w3.org"
            viewBox="0 0 100 100"
            style={{ width: '45px', height: '45px', fill: 'none', display: 'block' }}
        >
            <style>{`
                @keyframes pulseSearchSVG {
                  0% { 
                      stroke: #00ffff; 
                      filter: drop-shadow(0 0 7px #00ffdd); 
                  }
                  33% { 
                      stroke: #ffe53f; 
                      filter: drop-shadow(0 0 7px #ffcc00); 
                  }
                  66% { 
                      stroke: #ff823f; 
                      filter: drop-shadow(0 0 7px #ff5900); 
                  }
                  100% { 
                      stroke: #ff3ff5; 
                      filter: drop-shadow(0 0 7px #ff00f2); }
                }
                .svg-neon-line {
                  animation: pulseSearchSVG 20s infinite alternate;
                  stroke-width: 6px;
                }
                .svg-neon-core {
                  stroke: #fff;
                  stroke-width: 2px;
                }
              `}
            </style>
            <g className="svg-neon-line" strokeLinecap="round">
                <circle cx="55" cy="42" r="23" />
                <line x1="41" y1="62" x2="20" y2="90" />
            </g>
            <g className="svg-neon-core" strokeLinecap="round">
                <circle cx="55" cy="42" r="23" />
                <line x1="41" y1="62" x2="20" y2="90" />
            </g>
        </svg>
    );
}
