const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

const products = [
  {
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
  },
  {
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
  },
  {
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
  },
];

const generateProductList = (products) => {
  const productList = document.createElement("div");
  productList.classList.add("product-list");

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const productName = document.createElement("p");
    productName.classList.add("product-name");
    productName.innerHTML = product.description;
    productDiv.appendChild(productName);

    const productPrice = document.createElement("p");
    productPrice.classList.add("product-price");
    productPrice.innerHTML = "Price per unit: € " + product.price;
    productDiv.appendChild(productPrice);

    const productStock = document.createElement("p");
    productStock.classList.add("product-stock");
    productStock.innerHTML = "Stock: " + product.stock;
    productDiv.appendChild(productStock);

    const productTax = document.createElement("p");
    productTax.classList.add("product-tax");
    productTax.innerHTML = "Tax Type: " + product.tax;
    productDiv.appendChild(productTax);

    const productUnits = document.createElement("input");
    productUnits.classList.add("product-units");
    productUnits.setAttribute("type", "number");
    productUnits.setAttribute("min", "1");
    productUnits.setAttribute("value", product.units);
    productDiv.appendChild(productUnits);

    productList.appendChild(productDiv);
  }

  return productList;
};

const productList = generateProductList(products);
const list = document.getElementById("products-container");
list.appendChild(productList);

const calculateButton = document.getElementById("calculate-btn");
calculateButton.addEventListener("click", () => {
  let subtotal = 0;
  let tax = 0;
  let total = 0;
  const inputs = document.querySelectorAll(".product-units");
  inputs.forEach((input, index) => {
    const units = parseInt(input.value);
    const price = products[index].price;
    subtotal += units * price;
    if (products[index].tax !== "EXEMPT_TYPE") {
      tax +=
        products[index].tax === "LOWER_TYPE"
          ? (units * price * LOWER_TYPE) / 100
          : (units * price * REGULAR_TYPE) / 100;
    }
  });
  total = subtotal + tax;
  document.getElementById("subtotal").textContent = subtotal.toFixed(2);
  document.getElementById("tax").textContent = tax.toFixed(2);
  document.getElementById("total").textContent = total.toFixed(2);
});
