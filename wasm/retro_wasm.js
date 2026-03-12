(function () {
  "use strict";

  function getCookie(name) {
    var cookieParts = document.cookie ? document.cookie.split("; ") : [];
    for (var i = 0; i < cookieParts.length; i += 1) {
      var part = cookieParts[i].split("=");
      var key = part.shift();
      if (key === name) {
        return decodeURIComponent(part.join("="));
      }
    }
    return "";
  }

  function readCString(memory, pointer) {
    var bytes = new Uint8Array(memory.buffer);
    var out = "";

    for (var i = pointer; i < bytes.length && bytes[i] !== 0; i += 1) {
      out += String.fromCharCode(bytes[i]);
    }

    return out;
  }

  async function loadRetroWasm() {
    var $output = $("#wasmText");
    var wasmPath = "wasm/retro_tools.wasm";

    try {
      var response = await fetch(wasmPath);
      if (!response.ok) {
        throw new Error("HTTP " + response.status);
      }

      var bytes = await response.arrayBuffer();
      var result = await WebAssembly.instantiate(bytes, {});
      var wasm = result.instance.exports;

      if (!wasm.memory || !wasm.status_ptr || !wasm.signal_strength || !wasm.mood_ptr) {
        throw new Error("Missing expected WASM exports");
      }

      var rawVisit = parseInt(getCookie("retroVisitCount"), 10);
      var visitCount = Number.isNaN(rawVisit) ? 1 : rawVisit;
      var seed = ((Date.now() >>> 0) ^ ((Math.random() * 4294967295) >>> 0)) >>> 0;

      var signal = wasm.signal_strength(visitCount >>> 0, seed) >>> 0;
      var status = readCString(wasm.memory, wasm.status_ptr(visitCount >>> 0) >>> 0);
      var mood = readCString(wasm.memory, wasm.mood_ptr(signal) >>> 0);

      $output.text("WASM: " + status + " | SIGNAL " + signal + "% | " + mood);
    } catch (error) {
      $output.text("WASM pending: compile wasm/retro_tools.wat -> wasm/retro_tools.wasm");
    }
  }

  $(loadRetroWasm);
}());
