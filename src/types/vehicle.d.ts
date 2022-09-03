

export interface Vehiculo
{
    nombre: string,
    modelo: string,
    fabricante: string,
    costo_en_creditos: string,
    longitud: string,
    velocidad_maxima: string,
    tripulacion: string,
    pasajeros: string,
    capacidad_carga: string,
    consumidos: string,
    clase_vehiculo: string,
    pilotos: string[],
    peliculas: string[],
    creado: string,
    editado: string,
    url: string
  }

  export interface VehiculoRes{
    payload: {
        data: Vehiculo
    }
  }
  export interface Vehiculos{
    payload: {
        data: Vehiculo[]
    }
  }

