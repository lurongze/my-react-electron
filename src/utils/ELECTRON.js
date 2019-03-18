
export const electron = window.require('electron');

export const ipcRender = electron.ipcRenderer;

export const shell = electron.shell;

export const remote = electron.remote;

export const fs = remote.require('fs');

export const path = remote.require('path');
