const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
/**
 * @param {dividend} number
 * @param {divider} number 
 */
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider >> 0; 
  if (divider < 0) {
    result.innerText = 'Division not performed. Invalid number provided. Try again'
    throw new SyntaxError('Divider cannot be a negative number ')
  } 
  if (!dividend || !divider) {
    result.innerText = 'Division not performed. Both values are required in inputs. Try again.'
  } 
}); 