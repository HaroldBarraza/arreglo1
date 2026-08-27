import { z } from "zod";

export const pedidoSchema = z.object({
  cliente_id: z.number({
    message: "el id tiene que ser un numero valido"
  }).int().positive({message: "el id tiene que ser un numero positivo"}),
  producto_id: z.number({message: "el id del producto tiene que ser un numero valido"}).int().positive({message:"el id del producto tiene que ser un nuemro positivo"}),
  cantidad: z.number({message: "la cantidad tiene que ser un numeor"}).gte(0,{message:"la catindad tiene que ser un numero mayor o igual a 0"}),
});

export const actualizarPedidoSchema = pedidoSchema.partial();
