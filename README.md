# UF1305
Exámenes realizados sobre esta unidad.
Branch:
EPA2

## Prueba
PRUEBA A REALIZAR
1. Queremos crear un pequeño programa que solicite al usuario su nombre, edad y una nota. Luego, se realizarán algunas operaciones con los datos ingresados y se mostrará un mensaje en función de la edad y la nota obtenida. Además, se utilizarán funciones y estructuras de control para realizar estas tareas.

  Las operaciones que hay que realizar son:

    - Una función que recibidos dos parámetros numéricos, devuelva el promedio, si da decimales solo muestra 2.

    - Una función que compruebe la nota ingresada y devuelva si se ha aprobado (5 o mas) o no (menos de 5).

Por la consola habrá que mostrar 4 mensajes:

    • Uno en que salude al usuario con su nombre. Ej.: “¡Hola ____ !
    • Uno donde le diga su edad y le muestre su nota. Ej: “Tu edad es de ____ años y tu nota es ___.”
    • Uno donde le muestre el promedio entre su edad y la nota. Ej:”El promedio de tu nota y edad es: ___.”
    • Uno donde se le diga si esta aprobado en una asignatura. Ejemplo: “Estas __________ en la asignatura.”

    **Recordar:** que para pedir a un usuario, desde la web, parámetros sin inputs puedes usar el método “prompt”. Guardar valores para poder usarlos o mostrarlos.

2. El siguiente código contiene errores de sintaxis y ejecución. Identifica los errores y corrígelos para que el código funcione correctamente. Luego, explica brevemente cuáles fueron los errores encontrados y cómo los corregiste. El código se agregará a la carpeta de recursos de examen para que puedan comprobarlo sin cometer errores en la escritura al copiar.
```
function calcularPromedio(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i+ {
    total += arr[];
  }
  return total / arr.length;
}

let numeros = [10, 20, 30, 40, 50];
let promedio = calcularPromedio(numeros);
console.log("El promedio es: " + promedio);```