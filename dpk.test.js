const deterministicPartitionKey = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("returns 0 if event is not defined", () => {
    expect(deterministicPartitionKey()).toBe("0");
  })

  it ("returns the partitionKey if it is defined and length <= 256", () => {
    const event = { partitionKey: "abcdefg123456" };
    expect(deterministicPartitionKey(event)).toBe("abcdefg123456");
  })

  it ("generates key from event if it doesn't have partitionKey prop", () => {
    const event1 = {} // empty object without partitionKey property
    const event2 = { a: "b" } // non-empty object without partition property
    expect(typeof deterministicPartitionKey(event1)).toBe("string")
    expect(typeof deterministicPartitionKey(event2)).toBe("string")
  })

  it ("generates partitionKey of at most 256 characters if partitionKey has more than 256 characters", () => {
    const event = { partitionKey: "a".repeat(257)}
    expect(deterministicPartitionKey(event).length).toBeLessThanOrEqual(256)
  })

  it("returns unique partition keys for different event objects", () => {
    const event1 = { a: "a" };
    const event2 = { a: "b" };
    expect(deterministicPartitionKey(event1)).not.toBe(deterministicPartitionKey(event2));
  });
});