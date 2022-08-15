const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Teste para verificar se getOpeningHours é uma função.', () => {
    expect(typeof getOpeningHours).toBe('function');
  });

  it('Teste se não passar nenhum argumento, retorna o objeto', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });

  it('Teste para verificar se ao receber um dia inválido lança um erro', () => {
    expect(() => getOpeningHours('Feriado', '00:00-AM')).toThrow();
  });

  it('Teste para verificas se ao receber horas inválidas lança um erro.', () => {
    expect(() => (getOpeningHours('Monday', '80:00-AM'))).toThrow('The hour must be between 0 and 12');
  });

  it('Teste para verificas se ao receber minutos inválidos lança um erro.', () => {
    expect(() => getOpeningHours('Friday', '17:90-PM')).toThrow('The minutes must be between 0 and 59');
  });

  it('Teste para verificar se ao receber uma letra no horário retorna um erro', () => {
    expect(() => getOpeningHours('Monday', 'Z9:00-AM')).toThrow();
    expect(() => getOpeningHours('Monday', '09:Z5-AM')).toThrow();
  });

  it('Teste para verificar se ao receber abreviações invalidas, lança erro', () => {
    expect(() => getOpeningHours('Monday', '09:00-FM')).toThrow();
  });

  it('Teste para verificar se retorna a mensagem de zoo is Closed se os parametros passados forem válidos', () => {
    expect(getOpeningHours('Monday', '1:00-PM')).toBe('The zoo is closed');
    expect(getOpeningHours('Friday', '1:00-AM')).toBe('The zoo is closed');
  });

  it('Teste para verificar se retorna a mensagem de zoo is open se os parametros passados forem válidos', () => {
    expect(getOpeningHours('Wednesday', '10:00-AM')).toBe('The zoo is open');
  });
});
