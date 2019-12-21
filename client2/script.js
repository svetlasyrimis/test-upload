const button = document.querySelector("#button")

button.addEventListener("click", async (e) => {
  e.preventDefault();
  const form = document.querySelector("form");
  const userData = new FormData(form);
  const resp = await axios.post("http://localhost:3000/users", userData);
  console.log(resp);
});