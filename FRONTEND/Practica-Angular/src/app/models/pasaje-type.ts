import { PersonaType } from "./persona-type"

export class PasajeType {
    _id!: string
    precioPasaje!: number
    categoriaPasajero!: string
    fechaCompra!: string
    pasajero!: PersonaType
}