const handler = require('../src/index');

beforeAll(() => 
process.env.API_ENDPOINT = 'https://swapi.py4e.com/api/');

describe('Validación función getVehicle', () => {
    let vehicle;
    let payload;
    test('Validando Código de estado', async () => {
        vehicle = await handler.getVehicle({"pathParameters": {"id": 4}});
        payload = JSON.parse(vehicle.body).payload;
        expect(vehicle.statusCode).toBe(200)
    });
    test('Tiene la propiedad data', () => {
        expect(payload).toHaveProperty('data')
    });
    test('Modelo del vehículo', () => {
        expect(payload.data.modelo).toBe('Digger Crawler')
    });
});

describe('Validación de errores función getVehicle', () => {
    let vehicle;
    test('Validando vehículo no encontrado', async () => {
        vehicle = await handler.getVehicle({"pathParameters": {"id": 450}});
        expect(vehicle.statusCode).toBe(404)
    });
    test('Validando tipo de dato', async () => {
        vehicle = await handler.getVehicle({"pathParameters": {"id": 450}});
        expect(typeof vehicle).toBe('object')
    });
});


describe('Validar registro', () => {
    const newEnterprise = {
        body: JSON.stringify({
            payload: {
                razonSocial: 'Empresa Test',
                direccion: 'Direccion Test',
                telefono: '01454523',
                ruc: "1234567891"
            }
        })
    }
    let enterprise;
    test('Validando statusCode de registro', async () => {
        enterprise = await handler.addEmpresa(newEnterprise);
        expect(enterprise.statusCode).toBe(200)
    });
});
