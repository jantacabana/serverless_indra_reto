export interface Empresa
{
    razonSocial: string,
    direccion: string,
    telefono?: string,
    ruc?: string,
}

export interface EmpresaReq
{
    payload: Empresa
}

export interface EmpresaBody
{
    id: string, // GUI
    razonSocial: string,
    direccion: string,
    telefono?: string,
    ruc?: string,
}

export interface EmpresaRes
{
    payload: {
        data: EmpresaBody
    }
}

export interface Empresas {
    payload: {
        data: EmpresaBody[]
    }
}