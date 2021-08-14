# Hexdays

Este módulo contribuye a solucionar el problema del almacenaje y manipulación de días de semana separados por coma. 

Es muy común que un proyecto tenga un módulo donde se deban cargar días de la semana en los que, por ejemplo, un comercio atiende al público. Es habitual que para guardar esta serie de días se utilice un `string` con los  números de día de semana separados por una coma, algo así: 0,1,2,3 (domingo, lunes, martes y miércoles respectivamente).

La solución consiste en representar a la semana como un byte. Donde tenemos ocho posiciones (o bits), donde  las primeras siete posiciones representan cada uno de los días de la semana y la última posición, todos los días. Estas posiciones luego se almacenan como un número hexadecimal que se podrá decodificar para representar gráficamente los días seleccionados.

| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
|---|---|---|---|---|---|---|---|
| Todos | Sáb | Vie | Jue | Mié | Mar | Lun | Dom |

## Ejemplos

Suponiendo que se deseen seleccionar los días: lunes, martes y jueves. El numero hexadecimal se compone del siguiente modo.

| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
|---|---|---|---|---|---|---|---|
| Todos | Sáb | Vie | Jue | Mié | Mar | Lun | Dom |

|0| 0 | 0 | 1 | 0 | 1 | 1 | 0 |

Que da como resultado el número: [1,2,4] = 16


---
## Demo
 * [https://codepen.io/agustinbouillet/full/abWMPYq](https://codepen.io/agustinbouillet/full/abWMPYq)
 * [CODEPEN](https://codepen.io/)

