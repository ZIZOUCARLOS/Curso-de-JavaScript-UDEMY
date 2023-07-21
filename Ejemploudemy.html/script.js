// Datos de ejemplo
var pizzas = [
  { id: 1, nombre: "Pizza Margarita", precio: 8.99 },
  { id: 2, nombre: "Pizza Pepperoni", precio: 9.99 },
  { id: 3, nombre: "Pizza Hawaiana", precio: 10.99 }
];

var carrito = [];

// Función para mostrar el menú de pizzas disponibles
function mostrarMenu() {
  var menuElement = document.getElementById("menu");
  menuElement.innerHTML = "<h2>Menú de Pizzas</h2>";

  for (var i = 0; i < pizzas.length; i++) {
    var pizza = pizzas[i];
    var pizzaElement = document.createElement("div");
    pizzaElement.innerHTML = "<p>" + pizza.nombre + " - $" + pizza.precio + "</p>";
    pizzaElement.innerHTML += "<button onclick='personalizarPizza(" + pizza.id + ")'>Personalizar</button>";
    menuElement.appendChild(pizzaElement);
  }
}

// Función para personalizar una pizza
function personalizarPizza(pizzaId) {
  var pizza = obtenerPizzaPorId(pizzaId);

  // Lógica para mostrar el formulario de personalización de la pizza
  // y permitir al usuario seleccionar tamaño, ingredientes, etc.
}

// Función para agregar una pizza al carrito de compras
function agregarAlCarrito(pizza) {
  carrito.push(pizza);
  actualizarResumenPedido();
}

// Función para actualizar el resumen del pedido en el carrito
function actualizarResumenPedido() {
  var cartElement = document.getElementById("cart");
  cartElement.innerHTML = "<h2>Carrito de compras</h2>";

  var total = 0;

  for (var i = 0; i < carrito.length; i++) {
    var pizza = carrito[i];
    total += pizza.precio;
    cartElement.innerHTML += "<p>" + pizza.nombre + " - $" + pizza.precio + "</p>";
  }

  cartElement.innerHTML += "<p>Total: $" + total + "</p>";
  cartElement.innerHTML += "<button onclick='realizarPago()'>Finalizar pedido</button>";
}

// Función para realizar el pago y finalizar el pedido
function realizarPago() {
  // Lógica para obtener la información de pago del usuario
  // y procesar el pago, incluyendo la seguridad de la tarjeta de crédito

  // Una vez completado el pago, mostrar la confirmación del pedido
  mostrarConfirmacionPedido();
}

// Función para mostrar la confirmación del pedido
function mostrarConfirmacionPedido() {
  var orderConfirmationElement = document.getElementById("orderConfirmation");
  orderConfirmationElement.innerHTML = "<h2>Confirmación de pedido</h2>";
  orderConfirmationElement.innerHTML += "<p>Tu pedido ha sido confirmado.</p>";
  // Agregar más detalles del pedido y el número de seguimiento
  orderConfirmationElement.style.display = "block";
}

// Función para obtener una pizza por su ID
function obtenerPizzaPorId(pizzaId) {
  for (var i = 0; i < pizzas.length; i++) {
    if (pizzas[i].id === pizzaId) {
      return pizzas[i];
    }
  }
  return null;
}

// Llamada inicial para mostrar el menú de pizzas disponibles
mostrarMenu();

