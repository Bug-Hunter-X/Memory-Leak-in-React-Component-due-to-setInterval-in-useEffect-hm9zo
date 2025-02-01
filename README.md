# React useEffect setInterval Memory Leak

This repository demonstrates a common React coding error: using `setInterval` within a `useEffect` hook without proper cleanup. This can lead to memory leaks and unexpected behavior.

## Bug

The `bug.js` file contains a React component that uses `setInterval` to update a count every second. However, it fails to include a return statement within the `useEffect` cleanup function to clear the interval when the component unmounts.

## Solution

The `bugSolution.js` file shows the corrected component. It includes a return statement in `useEffect` that uses `clearInterval` to clear the interval before the component is unmounted, thereby preventing the memory leak.

## How to reproduce

1. Clone this repository
2. Navigate to the directory
3. Run `npm install`
4. Run `npm start`

Observe the behavior and the impact of fixing the bug.
