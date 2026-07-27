let rgb = [255, 128, 64, 32, 16];

let [red, ,blue,...alphachannels] = rgb;

[red, blue] = [blue, red];