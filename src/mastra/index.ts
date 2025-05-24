
import { Mastra } from '@mastra/core/mastra';
import { LibSQLStore } from '@mastra/libsql';
import { weatherAgent } from './agents';
import { agentHello } from './agents';

export const mastra = new Mastra({
  agents: { weatherAgent, agentHello },
  storage: new LibSQLStore({
    // stores telemetry, evals, ... into memory storage, if it needs to persist, change to file:../mastra.db
    url: ":memory:",
  }),
});
