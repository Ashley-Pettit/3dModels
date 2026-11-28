import assert from 'node:assert/strict';
import test from 'node:test';
import {summarize} from './metrics.mjs';

test('compositor coverage uses device time even when the host clock differs or thermal reads fail', () => {
  const startUtcMs = 1_800_000_000_000;
  const snapshot = {deviceEpochMs: startUtcMs + 10_000, periodNs: 16_666_667, presentNs: [1e9, 2e9, 3e9]};
  const report = {timing: {startUtcMs}, end: 20_000, progress: [{metres: 0}], renders: [], rafs: [], plan: [],
    presentation: [snapshot, {...snapshot, deviceEpochMs: startUtcMs + 25_000}]};
  for (const offset of [30_000, -30_000, null]) {
    const thermal = offset === null ? [] : [{deviceEpochMs: startUtcMs, hostEpochMs: startUtcMs + offset,
      sensors: {}, systemStatus: 0}];
    assert.deepEqual(summarize({...report, thermal}).compositorWindows.map(row => row.approximateElapsedSeconds), [9]);
  }
});
