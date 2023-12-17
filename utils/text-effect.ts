const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let interval: NodeJS.Timeout | null = null;

export const handleMouseEnter = (el: any) => {
  if (!el) return;
  el = el.target;
  let iteration: number = 0;
  const speed: number = el.dataset.value!.length > 7 ? 30 : 60;

  clearInterval(interval!);

  interval = setInterval(() => {
    el.innerText = el.innerText
      .split('')
      .map((_: any, index: number) => {
        if (index < iteration) {
          return el.dataset.value![index];
        }

        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join('');

    if (iteration >= el.dataset.value!.length) {
      clearInterval(interval!);
    }

    iteration += 1 / 3;
  }, speed);
};
