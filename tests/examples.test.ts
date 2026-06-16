import * as ex1 from '../src/examples/01-create-account';
import * as ex2 from '../src/examples/02-payment';
import * as ex3 from '../src/examples/03-create-trustline';
import * as ex4 from '../src/examples/04-multisig';
import * as ex5 from '../src/examples/05-soroban-invoke';

describe('Examples Exports', () => {
  it('should export a run function', () => {
    expect(typeof ex1.run).toBe('function');
    expect(typeof ex2.run).toBe('function');
    expect(typeof ex3.run).toBe('function');
    expect(typeof ex4.run).toBe('function');
    expect(typeof ex5.run).toBe('function');
  });
});
