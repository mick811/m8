import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    messages: defineTable({
        author: v.union(v.string(), v.literal("assistant")), // "assistant" or subject from clerk
        content: v.string(),
        roomId: v.id("rooms"),
    }).index("by_room", ["roomId"])
    .index("by_author", ["author"]),

    rooms: defineTable({
        title: v.string(),
        userId: v.string(),
    }).index("by_user", ["userId"]),
});