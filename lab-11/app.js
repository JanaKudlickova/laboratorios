const reservas = [
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    pax: 2,
    noches: 1,
  },
];

// /*CASO 1:
// En el caso de un cliente particular:
// Habitación / día (IVA No Incluido):
// Standard: 100 €.
// Suite: 150 €.
// Cargos adicionales:
// Por cada persona adicional sumarle 40 € al precio de cada noche.
// IVA sumarle un 21% al total.
// Crear una clase que reciba la lista de reservas y calcule el subtotal y el total teniendo en cuenta los anteriores requisitos.
// */

class Particular {
  constructor() {
    this._reservas = [];
    this.costeAdicional = 40;
    this.tax = 1.21;
    this._subtotal = 0;
    this._total = 0;
  }

  calculaPrecioHabitacion(tipoHabitacion) {
    switch (tipoHabitacion) {
      case "standard":
        return 100;
      case "suite":
        return 150;
    }

    return 1;
  }

  calculaCosteAdicional(pax) {
    return pax > 1 ? (pax - 1) * this.costeAdicional : 0;
  }

  calculaSubtotal() {
    return (this._subtotal = this._reservas.reduce(
      (acc, { pax, noches, tipoHabitacion }) =>
        acc +
        (noches * this.calculaPrecioHabitacion(tipoHabitacion) +
          this.calculaCosteAdicional(pax)),
      0
    ));
  }

  calculaTotal() {
    return (this._total = this._subtotal * this.tax);
  }

  get subtotal() {
    return this._subtotal;
  }

  get total() {
    return this._total.toFixed(2);
  }

  set reservas(reservas) {
    this._reservas = reservas;
    this.calculaSubtotal();
    this.calculaTotal();
  }
}

console.log("** Reservas de cliente particular ***");
const clienteParticular = new Particular();
clienteParticular.reservas = reservas;
console.log("subtotal", clienteParticular.subtotal);
console.log("total", clienteParticular.total);

// CASO 2
// Cubrimos el caso de un tour operador, al reservar grandes volúmenes, le damos las siguientes condiciones especiales:
// Todas las habitaciones tienen el mismo precio (100 €).
// Adicionalmente se le aplica un 15 % de descuento a los servicios contratados.
// Crear una clase que herede de la primera que cubra el caso del calculo de totales y subtotales para el tour operador

class TourOperador extends Particular {
  constructor() {
    super();
    this.precio = 100;
    this.descuento = 0.85;
  }

  calculaSubtotal() {
    return (this._subtotal = this._reservas.reduce(
      (acc, { pax, noches }) =>
        acc + (noches * this.precio + this.calculaCosteAdicional(pax)),
      0
    ));
  }

  calculaTotal() {
    return (this._total = this._subtotal * this.tax * this.descuento);
  }
}

console.log("** Reservas de tour operador ***");
const tourOperador = new TourOperador();
tourOperador.reservas = reservas;
console.log("subtotal", tourOperador.subtotal);
console.log("total", tourOperador.total);

//DESAFIO
// Crear una clase base con la funcionalidad común, y dos clases hijas una con el caso para cliente particular y otra para tour
// operador.
// En el constructor de la clase base, introduce la lista de precios de habitaciones, ¿Qué tendrás que hacer para que en el hijo
// puedas inicializar la clase?

class HotelClass {
  constructor() {
    this._reservas = [];
    this.price = 0;
    this.costeAdicional = 40;
    this.tax = 1.21;
    this._subtotal = 0;
    this._total = 0;
  }

  calculaCosteAdicional(pax) {
    return pax > 1 ? (pax - 1) * this.costeAdicional : 0;
  }

  calculaSubtotal() {
    return (this._subtotal = this._reservas.reduce(
      (acc, { pax, noches }) =>
        acc + (noches * this.price + this.calculaCosteAdicional(pax)),
      0
    ));
  }

  calculaTotal() {
    return (this._total = this._subtotal * this.tax);
  }

  get subtotal() {
    return this._subtotal;
  }

  get total() {
    return this._total.toFixed(2);
  }

  set reservas(reservas) {
    this._reservas = reservas;
    this.calculaSubtotal();
    this.calculaTotal();
  }
}

class ClienteParticular extends HotelClass {
  constructor() {
    super();
  }

  calculaPrecioHabitacion(tipoHabitacion) {
    switch (tipoHabitacion) {
      case "standard":
        return 100;
      case "suite":
        return 150;
    }

    return 1;
  }

  calculaSubtotal() {
    return (this._subtotal = this._reservas.reduce(
      (acc, { pax, noches, tipoHabitacion }) =>
        acc +
        (noches * this.calculaPrecioHabitacion(tipoHabitacion) +
          this.calculaCosteAdicional(pax)),
      0
    ));
  }

  calculaTotal() {
    return super.calculaTotal();
  }
}

class Tour extends HotelClass {
  constructor() {
    super();
    this.precio = 100;
    this.descuento = 0.85;
  }

  calculaSubtotal() {
    return (this._subtotal = this._reservas.reduce(
      (acc, { pax, noches }) =>
        acc + (noches * this.precio + this.calculaCosteAdicional(pax)),
      0
    ));
  }

  calculaTotal() {
    return (this._total = this._subtotal * this.tax * this.descuento);
  }
}

console.log("***DESAFIO***");
const particular = new ClienteParticular();
const tour = new Tour();
particular.reservas = reservas;
tour.reservas = reservas;
console.log("subtotal:", particular.subtotal, "total:", particular.total);
console.log("subtotal:", tour.subtotal, "total:", tour.total);

//EJERCICIO ADICIONAL

const reservas2 = [
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    desayuno: true,
    pax: 2,
    noches: 1,
  },
];

class MainHotelClass {
  constructor() {
    this._reservas = [];
    this.price = 0;
    this.costeAdicional = 40;
    this.costeDesayuno = 15;
    this.tax = 1.21;
    this._subtotal = 0;
    this._total = 0;
  }

  calculaCosteAdicional(pax) {
    return pax > 1 ? (pax - 1) * this.costeAdicional : 0;
  }

  calculaCosteDesayuno(pax, noches, desayuno) {
    return desayuno ? pax * noches * this.costeDesayuno : 0;
  }

  calculaSubtotal() {
    return (this._subtotal = this._reservas.reduce(
      (acc, { pax, noches, desayuno }) =>
        acc +
        (noches * this.price +
          this.calculaCosteAdicional(pax) +
          this.calculaCosteDesayuno(pax, noches, desayuno)),
      0
    ));
  }

  calculaTotal() {
    return (this._total = this._subtotal * this.tax);
  }

  get subtotal() {
    return this._subtotal;
  }

  get total() {
    return this._total.toFixed(2);
  }

  set reservas2(reservas2) {
    this._reservas = reservas2;
    this.calculaSubtotal();
    this.calculaTotal();
  }
}

class ClienteParticular2 extends MainHotelClass {
  constructor() {
    super();
  }

  calculaPrecioHabitacion(tipoHabitacion) {
    switch (tipoHabitacion) {
      case "standard":
        return 100;
      case "suite":
        return 150;
    }

    return 1;
  }

  calculaSubtotal() {
    return (this._subtotal = this._reservas.reduce(
      (acc, { pax, noches, tipoHabitacion, desayuno }) =>
        acc +
        (noches * this.calculaPrecioHabitacion(tipoHabitacion) +
          this.calculaCosteAdicional(pax) +
          this.calculaCosteDesayuno(pax, noches, desayuno)),
      0
    ));
  }

  calculaTotal() {
    return super.calculaTotal();
  }
}

class TourOperador2 extends MainHotelClass {
  constructor() {
    super();
    this.precio = 100;
    this.descuento = 0.85;
  }

  calculaSubtotal() {
    return (this._subtotal = this._reservas.reduce(
      (acc, { pax, noches, desayuno }) =>
        acc +
        (noches * this.precio +
          this.calculaCosteAdicional(pax) +
          this.calculaCosteDesayuno(pax, noches, desayuno)),
      0
    ));
  }

  calculaTotal() {
    return (this._total = this._subtotal * this.tax * this.descuento);
  }
}

console.log("***EXTRA***");
const particular2 = new ClienteParticular2();
const tour2 = new TourOperador2();
particular2.reservas2 = reservas2;
tour2.reservas2 = reservas2;
console.log("subtotal:", particular2.subtotal, "total:", particular2.total);
console.log("subtotal:", tour2.subtotal, "total:", tour2.total);
