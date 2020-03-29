import { Pedido } from './pedido';

export class Cliente{
    id: number;
    nombre: string;
    apellido1: string;
    apellido2: string;
    dni: string;
    fechaNacimiento: Date;
    tpedidos: Pedido[];
}