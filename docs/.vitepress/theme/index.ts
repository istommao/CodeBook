import Theme from 'vitepress/theme'
import './style/var.css'


// @ts-ignore

import "https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js"

let Pyodide;

import {ref} from "vue";

let ConsoleResult = ref("");

const RunPythonCode = async(code: string) => {
  let result;
  try {
     result = await Pyodide.runPythonAsync(code); 
   } catch (err) {
     console.error(err)
     result = err;
   }

   return result;
  
}

var old = console.log;
console.log = function (message) {
  if (typeof message == 'object') {
      ConsoleResult.value += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '\n';
      // ConsoleResult.value = (JSON && JSON.stringify ? JSON.stringify(message) : message) + '\n';
  } else {
      ConsoleResult.value += message + '\n';
      // ConsoleResult.value = message + "\n";
  }
}

const GetConsoleResult = () => {
   return ConsoleResult.value;
}

const ResetConsoleResult = () => {
   ConsoleResult.value = "";
   return;
}


export default {
  ...Theme,
  enhanceApp: async({app, router, siteData}) => {

    // document.getElementById("PyodideJS").onload = async e => {
    //     Pyodide = await loadPyodide();
    //     window.Pyodide = Pyodide
    // }

     // @ts-ignore
    Pyodide = await loadPyodide();

    app.config.globalProperties.$ResetConsoleResult = ResetConsoleResult;
    app.config.globalProperties.$GetConsoleResult = GetConsoleResult;
    app.config.globalProperties.$RunPythonCode = RunPythonCode;
  },
}