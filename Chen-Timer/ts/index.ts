const birthday: Date = new Date(1995, 10, 21);
const timeContainer: HTMLElement = document.getElementById(
  "timeContainer"
) as HTMLElement;

let i = 0;

outputTime();
function outputTime() {
  const nowaday: Date = new Date();

  const dis: number = nowaday.getTime() - birthday.getTime();
  timeContainer.innerHTML = String(dis / 3600 / 1000 / 24 / 365).slice(0, 14);
  i++;
  setTimeout(outputTime, 20);
}

document.addEventListener("click", () => {
  (document.documentElement as any).webkitRequestFullscreen();
});

console.log(
  " ____     __                                                  __    __   \n" +
    "/\\  _`\\  /\\ \\                         /'\\_/`\\  __            /\\ \\  /\\ \\__\n" +
    "\\ \\ \\/\\_\\\\ \\ \\___      __    ___     /\\      \\/\\_\\    ___    \\ `\\`\\\\/'/\\_\\  \n" +
    " \\ \\ \\/_/_\\ \\  _ `\\  /'__`\\/' _ `\\   \\ \\ \\__\\ \\/\\ \\ /' _ `\\   `\\ `\\ /'\\/\\ \\  \n" +
    "  \\ \\ \\L\\ \\\\ \\ \\ \\ \\/\\  __//\\ \\/\\ \\   \\ \\ \\_/\\ \\ \\ \\/\\ \\/\\ \\    `\\ \\ \\ \\ \\ \\ \n" +
    "   \\ \\____/ \\ \\_\\ \\_\\ \\____\\ \\_\\ \\_\\   \\ \\_\\\\ \\_\\ \\_\\ \\_\\ \\_\\     \\ \\_\\ \\ \\_\\ \n" +
    "    \\/___/   \\/_/\\/_/\\/____/\\/_/\\/_/    \\/_/ \\/_/\\/_/\\/_/\\/_/      \\/_/  \\/_/"
);
