function humanReadable(num) {
  let h = Math.floor(num / 3600);
  let m = Math.floor((num - h * 3600) / 60);
  let s = Math.floor(num % 60);

  if (h < 10) {
    h = `0${h}`;
  }
  if (m < 10) {
    m = `0${m}`;
  }
  if (s < 10) {
    s = `0${s}`;
  }

  return `${h}:${m}:${s}`;
}
