const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

/**
 * Generate hash code from any type of data
 * @param {any} data should be defined
 * @returns hash code
 */
function generateHash(data) {
  let src = data
  if (typeof src !== "string") {
    src = JSON.stringify(src)
  }
  return crypto.createHash("sha3-512").update(src).digest("hex");
}

function deterministicPartitionKey(event) {
  if (!event) {
    return TRIVIAL_PARTITION_KEY
  }

  const { partitionKey } = event

  if (partitionKey && partitionKey.length <= MAX_PARTITION_KEY_LENGTH) {
    return partitionKey
  }

  return generateHash(partitionKey || event)
}

module.exports = deterministicPartitionKey;