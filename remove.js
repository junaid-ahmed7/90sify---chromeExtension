const scripts = document.querySelectorAll('script');

scripts.forEach((script) => {
  console.log(script.src);

  script.src = '';

  console.log(script.src);
});
