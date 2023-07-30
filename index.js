import { it } from "node:test"
import assert from "node:assert"

it('is a normal test', () => {
  let value = 1;
  const calc = {
    add: () => {
      value++;
    }
  }
  calc.add()
  assert.strictEqual(value, 2)
})
