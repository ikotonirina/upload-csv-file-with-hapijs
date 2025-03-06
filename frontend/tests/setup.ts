import { expect } from "vitest";

globalThis.expect = expect;

declare global {
  var expect: typeof expect;
}
