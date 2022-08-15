const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Teste para verificar se o parametro count é igual a 4.', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('Teste para verificar se a função retorna Undefined se nao receber parametros', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Teste para verificar se a função, recebendo o parametro averageAge retorna 10.5', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('Teste para verificar se a função, recebendo o paramentro names retorna um array com todos os nomes dos Elefantes.', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Teste para verificar se a função ao receber null como parametro retorna null', () => {
    expect(handlerElephants('string')).toBe(null);
  });
  it('Teste para verificar se o retorno é a mensagem de erro caso o parametro seja diferente de uma string.', () => {
    expect(handlerElephants(123)).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('Para o argumento availability deve retornar um array de dias da semana que não contém Monday.', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });
});
