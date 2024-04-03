const list = document.querySelector(".list");

async function fetchData() {
  const url = "https://dummyjson.com/recipes";

  try {
    const response = await fetch(url, { method: "GET" });
    console.log("🚀 ~ fetchData ~ response:", response);

    const result = await response.json();
    console.log("🚀 ~ fetchData ~ result:", result);

    const recipes = result.recipes;
    console.log("🚀 ~ fetchData ~ recipes:", recipes);

    if (recipes) display(recipes);
  } catch (error) {
    console.error(error);
  }
}

const display = (getRecipes) => {
  list.innerHTML = getRecipes
    .map(
      (item) => `
    <p>${item.name}</p>
  `
    )
    .join("");
};

fetchData();
