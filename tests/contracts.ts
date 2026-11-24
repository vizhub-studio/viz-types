import type {
  VizChat,
  VizChatMessageRole,
  VizContent,
  VizFiles,
} from "../src";

const files: VizFiles = {
  file1: { name: "index.html", text: "<body>Hello</body>" },
};

const chat: VizChat = {
  id: "chat1",
  messages: [{ role: "user", content: "Hello", timestamp: 1 }],
  createdAt: 1,
  updatedAt: 1,
  aiScratchpad: "thinking",
  aiStatus: "working",
  currentChatDraft: "draft",
};

const content: VizContent = {
  id: "viz1",
  files,
  runId: "run1",
  chats: { chat1: chat },
};

const role: VizChatMessageRole = "assistant";
// @ts-expect-error System messages are not part of the public role union.
const invalidRole: VizChatMessageRole = "system";
// @ts-expect-error Files require text.
const invalidFiles: VizFiles = { file1: { name: "index.html" } };
// @ts-expect-error Visualization content requires files.
const invalidContent: VizContent = { id: "viz1" };
// @ts-expect-error Chat timestamps are required.
const invalidChat: VizChat = { id: "chat1", messages: [] };

void [content, role, invalidRole, invalidFiles, invalidContent, invalidChat];
